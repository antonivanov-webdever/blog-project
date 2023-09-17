import { screen } from '@testing-library/react';
import { componentRender } from 'shared/libs/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter component', () => {
    it('should defined', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        expect(screen.getByTestId('value-title')).toBeInTheDocument();
    });

    it('should contain correct value', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    it('should contain correct incremented value', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId('increment-btn'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    it('should contain correct decremented value', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        userEvent.click(screen.getByTestId('decrement-btn'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
