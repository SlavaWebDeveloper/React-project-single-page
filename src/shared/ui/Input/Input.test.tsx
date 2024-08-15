import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Input } from './Input';

describe('Input Component', () => {
    test('renders input component with default props', () => {
        render(<Input placeholder="Enter text" />);
        expect(screen.getByText('Enter text>')).toBeInTheDocument();
    });

    test('autofocus works correctly', () => {
        render(<Input autofocus />);
        expect(screen.getByRole('textbox')).toHaveFocus();
    });
});
