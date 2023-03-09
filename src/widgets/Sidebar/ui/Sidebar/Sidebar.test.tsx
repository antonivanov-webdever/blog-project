import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/libs/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar component', () => {
    it('should be defined', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    it('should toggle when button clicked', () => {
        componentRender(<Sidebar />);
        const toggleSidebarBtn = screen.getByTestId('toggle-sidebar');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleSidebarBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
