import React from 'react';
import { TouchableOpacity } from 'react-native';
import Search from '../../1_Assets/Svgs/Search.svg';

const HeaderRight = () : React.ReactNode => {
    return (
        <TouchableOpacity testID="search-button">
            <Search />
        </TouchableOpacity>
    );
};

export default HeaderRight;
