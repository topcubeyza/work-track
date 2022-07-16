import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Header from '../Components/Header';

describe('Testing header search button', () => {
    test('opens search area when pressed', async () => {
        const component = <Header options={{}}/>;

        const { getByLabelText } = render(component);

        let input = await screen.findByLabelText('search input');
        // expect(input).toBeFalsy();

        const button = getByLabelText('search button');
        fireEvent(button, 'press');

        input = await screen.findByLabelText('search input');
        expect(input).toBeTruthy();
    });
});
