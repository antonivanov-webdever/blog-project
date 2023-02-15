import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar component', () => {
    it('should be defined', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    it('should toggle when button clicked', () => {
        render(<Sidebar />);
        const toggleSidebarBtn = screen.getByTestId('toggle-sidebar');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleSidebarBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
