import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from './Types/NavigationTypes';

import { HomeScreens } from '../7_Modules/Home';
import { mainHeaderOptions } from './Constants/Options';

const RootStackNavigator = createStackNavigator<RootStackParamList>();

const RootStackNavigation = () => {
    return (
        <RootStackNavigator.Navigator
            id="root-stack">
            <RootStackNavigator.Screen
                component={HomeScreens.HomeScreen}
                name={'home-screen'}
                options={{
                    ...mainHeaderOptions,
                }} />
        </RootStackNavigator.Navigator>
    );
};

export default RootStackNavigation;
