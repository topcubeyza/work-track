import React from 'react';
import { TouchableOpacity } from 'react-native';
import Metrics from '../../0_Constants/Metrics';
import Search from '../../1_Assets/Svgs/Search.svg';

const HeaderRight = () : JSX.Element => {
    return (
        <TouchableOpacity
            hitSlop={{
                left: Metrics.measure(30),
                right: Metrics.measure(10),
                bottom: Metrics.measure(10),
                top: Metrics.measure(10),
            }}
            accessibilityLabel="search button">
            <Search
                width={Metrics.measure(20)}
                height={Metrics.measure(20)} />
        </TouchableOpacity>
    );
};

export default HeaderRight;
