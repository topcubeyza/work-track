import { useRef } from 'react';
import { Animated, Easing } from 'react-native';
import Metrics from '../../0_Constants/Metrics';

const SHOW_ANIM_DURATION = 300;
const HIDE_ANIM_DURATION = 200;

type SearchAnimation = {
    showInput: () => void,
    hideInput: () => void,
    containerTranslateX: Animated.AnimatedInterpolation,
    oldSectionOpacity: Animated.AnimatedInterpolation,
    newSectionOpacity: Animated.AnimatedInterpolation,
};

export const useSearchAnimation = () : SearchAnimation => {
    const inputVisibilityAnim = useRef<Animated.Value>(new Animated.Value(0)).current;
    const showInput = () => {
        Animated.timing(inputVisibilityAnim, {
            duration: SHOW_ANIM_DURATION,
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    const hideInput = () => {
        Animated.timing(inputVisibilityAnim, {
            duration: HIDE_ANIM_DURATION,
            toValue: 0,
            useNativeDriver: true,
        }).start();
    };

    const containerTranslateX = inputVisibilityAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -1 * Metrics.width],
    });

    const oldSectionOpacity = inputVisibilityAnim.interpolate({
        inputRange: [0, 0.01, 1],
        outputRange: [1, 0, 0],
    });

    const newSectionOpacity = inputVisibilityAnim.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 1],
    });

    return {
        showInput,
        hideInput,
        containerTranslateX,
        oldSectionOpacity,
        newSectionOpacity,
    };
};
