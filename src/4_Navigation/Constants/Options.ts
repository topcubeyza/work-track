import { FontFamilies } from '../../0_Constants/Fonts';
import Metrics from '../../0_Constants/Metrics';
import { StackNavigationOptions } from '@react-navigation/stack';
import {  } from 'react-native-safe-area-context';

export const mainHeaderOptions : StackNavigationOptions = {
    headerTitle: 'Bugün Ne Yaptın?',
    headerTitleAlign: 'left',
    headerStyle: {
        backgroundColor: '#55575E',
    },
    headerTitleStyle: {
        color: '#DBDAD7',
        fontFamily: FontFamilies.bold,
        fontSize: Metrics.measure(18),
    },
    // headerRight:
};
