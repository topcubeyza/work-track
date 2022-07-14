import { useRef } from 'react';
import { Animated } from 'react-native';
import Metrics from '../../0_Constants/Metrics';
import { HEADER_HEIGHT } from './styles/HeaderSearchStyles';

const SHOW_ANIM_DURATION = 400;
const HIDE_ANIM_DURATION = 200;

type SearchAnimation = {
    showInput: () => void,
    hideInput: () => void,
    inputAreaOpacity: Animated.AnimatedInterpolation,
    inputAreaTranslateX: Animated.AnimatedInterpolation,
    inputAreaTranslateY: Animated.AnimatedInterpolation,
    iconVisibility: Animated.AnimatedInterpolation,
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

    const inputAreaOpacity = inputVisibilityAnim.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 1],
    });

    const inputAreaTranslateX = inputVisibilityAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [(Metrics.width - 2 * Metrics.marginHorizontal), 0],
    });

    const inputAreaTranslateY = inputVisibilityAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-HEADER_HEIGHT, 0],
    });

    const iconVisibility = inputVisibilityAnim.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0, 0],
    });

    return {
        showInput,
        hideInput,
        inputAreaOpacity,
        inputAreaTranslateX,
        inputAreaTranslateY,
        iconVisibility,
    };
};
