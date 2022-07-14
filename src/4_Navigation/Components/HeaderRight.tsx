import React from 'react';
import { Animated, TextInput, TouchableOpacity, View } from 'react-native';
import Metrics from '../../0_Constants/Metrics';
import Icons from '../../1_Assets/Svgs';
import styles from './styles/HeaderRightStyles';
import { useSearchAnimation } from './useSearchAnimation';

const HeaderRight = (): JSX.Element => {

    const {
        showInput,
        hideInput,
        iconVisibility,
        inputAreaOpacity,
        inputAreaTranslateX,
        inputAreaTranslateY,
    } = useSearchAnimation();

    const _onPress_SearchButton = () => {
        showInput();
    };

    const _onPress_BackButton = () => {
        hideInput();
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.inputContainer, {
                transform: [
                    {
                        translateX: inputAreaTranslateX,
                    },
                    {
                        translateY: inputAreaTranslateY,
                    },
                ],
                opacity: inputAreaOpacity,
            }]}>
                <TouchableOpacity
                    onPress={_onPress_BackButton}
                    accessibilityLabel={'back button'}
                    hitSlop={{
                        left: Metrics.measure(10),
                        right: Metrics.measure(30),
                        bottom: Metrics.measure(10),
                        top: Metrics.measure(10),
                    }}>
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
            <Animated.View style={[
                styles.searchIconAnimatedContainer,
                {
                    transform: [{
                        scale: iconVisibility,
                    }],
                    opacity: iconVisibility,
                },
            ]}>
                <TouchableOpacity
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
