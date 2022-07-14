import { StyleSheet } from 'react-native';
import { FontFamilies } from '../../../0_Constants/Fonts';
import Metrics from '../../../0_Constants/Metrics';

const SEARCH_ICON_WIDTH = Metrics.measure(20);
export const HEADER_HEIGHT = Metrics.measure(30);

export default StyleSheet.create({
    container: {
        // flexDirection: 'row',
        height: HEADER_HEIGHT,
        // backgroundColor: 'yellow',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    searchIconAnimatedContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        // backgroundColor: 'pink',
        height: HEADER_HEIGHT,
        justifyContent: 'center',
    },
    searchIconTouchable: {
        
    },
    searchIcon: {
        width: SEARCH_ICON_WIDTH,
        height: SEARCH_ICON_WIDTH,
        color: '#FFFFFF',
    },
    inputContainer: {
        width: Metrics.width - 2 * Metrics.marginHorizontal,
        flexGrow: 1,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#55575E',
        // backgroundColor: 'pink'
    },
    input: {
        flexGrow: 1,
        flexShrink: 1,
        height: '100%',
        color: '#FFFFFF',
        fontFamily: FontFamilies.regular,
        fontSize: Metrics.measure(14),
        marginLeft: Metrics.measure(20),
    },
    backIconTouchable: {

    },
    backIcon: {
        width: Metrics.measure(18),
        height: Metrics.measure(16),
        color: '#BCBEC2',
    },
});
