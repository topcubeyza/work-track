import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, fireEvent } from '@testing-library/react-native';

import RootStackNavigator from '../RootStackNavigator';

describe('Testing root stack navigator first screen', () => {
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

    test('pressing search icon opens search area', async () => {
        const component = (
            <NavigationContainer>
                <RootStackNavigator />
            </NavigationContainer>
        );

        render(component);
        const searchButton = await screen.findByTestId('search-button');

        fireEvent(searchButton, 'press');

        const searchArea = await screen.findByTestId('search-input');

        expect(searchArea).toBeTruthy();
    });
});
