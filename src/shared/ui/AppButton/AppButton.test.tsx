import { screen } from '@testing-library/react';
import { componentRender } from 'shared/libs/tests/componentRender/componentRender';
import { AppButton } from './AppButton';

describe('AppButton component', () => {
    it('should defined', () => {
        componentRender(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    it('should contain a theme class name when theme is passed', () => {
        componentRender(<AppButton variant="clear">TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
