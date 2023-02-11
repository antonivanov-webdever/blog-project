import { classNames } from 'shared/libs/classNames/classNames';
import { Theme, useTheme } from 'shared/contexts';
import IconDark from 'shared/assets/theme-dark.svg';
import IconLight from 'shared/assets/theme-light.svg';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <AppButton
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={AppButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? <IconDark /> : <IconLight />}
        </AppButton>
    );
};
