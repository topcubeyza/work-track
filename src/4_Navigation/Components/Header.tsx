import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';

import Metrics from '../../0_Constants/Metrics';
import Icons from '../../1_Assets/Svgs';

import { HeaderWithSearchOptions } from '../Types/HeaderOptions';
import { useSearchAnimation } from './useSearchAnimation';
import styles from './styles/HeaderStyles';

const Header = (props: { options: StackHeaderOptions & HeaderWithSearchOptions }) => {

    const { options } = props;

    const {
        showInput,
        hideInput,
        containerTranslateX,
        oldSectionOpacity,
        newSectionOpacity,
    } = useSearchAnimation();


    const _onPress_SearchButton = () => {
        showInput();
    };

    const _onPress_BackButton = () => {
        hideInput();
    };

    const _onChangeText_SearchInput = (text: string) => {
        options.onChangeText_SearchInput?.(text);
    };

    return (
        <Animated.View style={[
            styles.container,
            {
                transform: [{
                    translateX: containerTranslateX,
                }],
            },
        ]}>
            <SafeAreaView style={styles.safeArea} edges={['top']}>
                <Animated.View style={[
                    styles.appTitleSectionContainer,
                    { opacity: oldSectionOpacity },
                ]}>
                    <Text style={styles.appTitleText}>Work Track</Text>
                    <TouchableOpacity
                        onPress={_onPress_SearchButton}
                        hitSlop={{
                            left: Metrics.measure(30),
                            right: Metrics.measure(10),
                            bottom: Metrics.measure(10),
                            top: Metrics.measure(10),
                        }}
                        accessibilityLabel="search button">
                        <Icons.Search {...styles.searchIcon} />
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[
                    styles.inputSectionContainer,
                    {
                        opacity: newSectionOpacity,
                    }
                ]}>
                    <TouchableOpacity
                        onPress={_onPress_BackButton}
                        accessibilityLabel={'back button'}
                        hitSlop={{
                            left: Metrics.measure(10),
                            right: Metrics.measure(30),
                            bottom: Metrics.measure(10),
                            top: Metrics.measure(10),
                        }}>
                        <Icons.BackArrow {...styles.backIcon} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={'#BCBEC2'}
                        placeholder={'Search...'}
                        selectionColor={'#F2EB0D'}
                        accessibilityLabel={'search input'}
                        onChangeText={_onChangeText_SearchInput}
                    />
                </Animated.View>
            </SafeAreaView>
        </Animated.View>
    );
};

export default Header;
