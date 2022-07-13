import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, fireEvent } from '@testing-library/react-native';

import RootStackNavigator from '../RootStackNavigator';

describe('Testing root stack navigator first screen', () => {
    test('first screen is home screen', async () => {
        const component = (
            <NavigationContainer>
                <RootStackNavigator />
            </NavigationContainer>
        );

        render(component);
        const homeScreen = await screen.findByTestId('home-screen');

        expect(homeScreen).toBeTruthy();
    });

    test('screen contains search button', async () => {
        const component = (
            <NavigationContainer>
                <RootStackNavigator />
            </NavigationContainer>
        );

        render(component);
        const searchButton = await screen.findByTestId('search-button');

        expect(searchButton).toBeTruthy();
    });
});
