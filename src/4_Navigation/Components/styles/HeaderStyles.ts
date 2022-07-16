import { StyleSheet } from 'react-native';
import { FontFamilies } from '../../../0_Constants/Fonts';
import Metrics from '../../../0_Constants/Metrics';

const SEARCH_ICON_WIDTH = Metrics.measure(20);

export default StyleSheet.create({
    container: {
        backgroundColor: '#55575E',
        width: 2 * Metrics.width,
    },
    safeArea: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    appTitleSectionContainer: {
        height: Metrics.headerHeight,
        flexDirection: 'row',
        width: Metrics.width,
        paddingHorizontal: Metrics.marginHorizontal,
        alignItems: 'center',
    },
    appTitleText: {
        color: '#DBDAD7',
        fontFamily: FontFamilies.bold,
        fontSize: Metrics.measure(18),
        flexGrow: 1,
    },
    searchIcon: {
        width: SEARCH_ICON_WIDTH,
        height: SEARCH_ICON_WIDTH,
        color: '#FFFFFF',
    },
    inputSectionContainer: {
        height: Metrics.headerHeight,
        flexDirection: 'row',
        width: Metrics.width,
        paddingHorizontal: Metrics.marginHorizontal,
        alignItems: 'center',
    },
    input: {
        height: '100%',
        color: '#FFFFFF',
        fontFamily: FontFamilies.regular,
        fontSize: Metrics.measure(14),
        marginLeft: Metrics.measure(20),
        flexGrow: 1,
        flexShrink: 1,
    },
    backIcon: {
        width: Metrics.measure(18),
        height: Metrics.measure(16),
        color: '#BCBEC2',
    },
});
