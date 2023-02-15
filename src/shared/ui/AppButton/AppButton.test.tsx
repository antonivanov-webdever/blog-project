import { render, screen } from '@testing-library/react';
import { AppButton, AppButtonTheme } from './AppButton';

describe('AppButton component', () => {
    it('should defined', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    it('should contain a theme class name when theme is passed', () => {
        render(<AppButton theme={AppButtonTheme.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
