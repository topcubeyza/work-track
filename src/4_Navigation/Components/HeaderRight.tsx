import React from 'react';
import { TouchableOpacity } from 'react-native';
import Metrics from '../../0_Constants/Metrics';
import Search from '../../1_Assets/Svgs/Search.svg';

const HeaderRight = () : React.ReactNode => {
    return (
        <TouchableOpacity
            testID="search-button"
            hitSlop={{
                left: Metrics.measure(30),
                right: Metrics.measure(10),
                bottom: Metrics.measure(10),
                top: Metrics.measure(10),
            }}>
            <Search
                width={Metrics.measure(20)}
                height={Metrics.measure(20)} />
        </TouchableOpacity>
    );
};

export default HeaderRight;
