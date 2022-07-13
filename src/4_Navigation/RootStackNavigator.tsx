import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

const RootStackNavigator = createStackNavigator();

const RootStackNavigation = () => {
    return (
        <RootStackNavigator.Navigator
            id="root-stack">
            <RootStackNavigator.Screen
                component={View}
                name="hello"/>
        </RootStackNavigator.Navigator>
    );
};

export default RootStackNavigation;
