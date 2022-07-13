import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const HeaderRight = () : React.ReactNode => {
    return (
        <TouchableOpacity testID="search-button">
            <Text>Search</Text>
        </TouchableOpacity>
    );
};

export default HeaderRight;
