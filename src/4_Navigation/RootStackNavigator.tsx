import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreens, HomeScreenNames } from '../7_Modules/Home';

const RootStackNavigator = createStackNavigator();

const RootStackNavigation = () => {
    return (
        <RootStackNavigator.Navigator
            id="root-stack">
            <RootStackNavigator.Screen
                component={HomeScreens.HomeScreen}
                name={HomeScreenNames.Home} />
        </RootStackNavigator.Navigator>
    );
};

export default RootStackNavigation;
