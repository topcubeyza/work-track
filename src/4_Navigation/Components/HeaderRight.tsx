import React, { useRef } from 'react';
import { Animated, Easing, TextInput, TouchableOpacity, View } from 'react-native';
import Metrics from '../../0_Constants/Metrics';
import Icons from '../../1_Assets/Svgs';
import styles, { HEADER_HEIGHT } from './styles/HeaderRightStyles';

const HeaderRight = (): JSX.Element => {
    const inputVisibilityAnim = useRef(new Animated.Value(0)).current;
    const _onPress_SearchButton = () => {
        // Show search area
        Animated.timing(inputVisibilityAnim, {
            duration: 400,
            toValue: 1,
            useNativeDriver: true,
            // easing: Easing.in(Easing.ease),
        }).start();
    };

    const _onPress_BackButton = () => {
        // Hide search area
        Animated.timing(inputVisibilityAnim, {
            duration: 200,
            toValue: 0,
            useNativeDriver: true,
        }).start();
    };

    const _searchAreaOpacity = inputVisibilityAnim.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 1],
    });

    const _searchAreaTranslateX = inputVisibilityAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [(Metrics.width - 2 * Metrics.marginHorizontal), 0],
    });

    const _searchAreaTranslateY = inputVisibilityAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-HEADER_HEIGHT, 0],
    });

    const _searchIconVisibility = inputVisibilityAnim.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 0, 0],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={{
                transform: [
                    {
                        translateX: _searchAreaTranslateX,
                    },
                    {
                        translateY: _searchAreaTranslateY,
                    },
                ],
            }}>
                <Animated.View style={[styles.inputContainer, {
                    opacity: _searchAreaOpacity
                }]}>
                    <TouchableOpacity
                        onPress={_onPress_BackButton}
                        accessibilityLabel={'back button'}>
                        <Icons.BackArrow style={styles.backIcon} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={'#BCBEC2'}
                        placeholder={'Search...'}
                        selectionColor={'#F2EB0D'}
                        accessibilityLabel={'search input'}
                    />
                </Animated.View>
            </Animated.View>
            <Animated.View style={[
                styles.searchIconAnimatedContainer,
                {
                    transform: [{
                        scale: _searchIconVisibility,
                    }],
                    opacity: _searchIconVisibility,
                },
            ]}>
                <TouchableOpacity
                    style={styles.searchIconTouchable}
                    onPress={_onPress_SearchButton}
                    hitSlop={{
                        left: Metrics.measure(30),
                        right: Metrics.measure(10),
                        bottom: Metrics.measure(10),
                        top: Metrics.measure(10),
                    }}
                    accessibilityLabel="search button">
                    <Icons.Search
                        style={styles.backIcon} />
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

export default HeaderRight;
