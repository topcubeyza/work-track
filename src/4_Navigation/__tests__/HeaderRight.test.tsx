import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import HeaderRight from '../Components/HeaderRight';

describe('Testing header search button', () => {
    test('opens search area when pressed', async () => {
        const component = <HeaderRight />;
        const { getByLabelText } = render(component);

        const button = getByLabelText('search button');
        fireEvent(button, 'press');

        const input = await screen.findByLabelText('search input');
        expect(input).toBeTruthy();
    });
});
