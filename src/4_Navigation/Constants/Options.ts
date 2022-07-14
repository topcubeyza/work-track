
import { FontFamilies } from '../../0_Constants/Fonts';
import Metrics from '../../0_Constants/Metrics';
import { StackNavigationOptions } from '@react-navigation/stack';
import HeaderSearch from '../Components/HeaderSearch';

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
    headerTitleContainerStyle: {
        marginLeft: Metrics.marginHorizontal,
    },
    headerRight: HeaderSearch,
    headerRightContainerStyle: {
        paddingRight: Metrics.marginHorizontal,
    },
};
