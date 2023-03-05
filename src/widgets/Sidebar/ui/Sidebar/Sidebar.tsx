import { classNames } from 'shared/libs/classNames/classNames';
import { useState } from 'react';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import HomeIcon from 'shared/assets/home.svg';
import AboutIcon from 'shared/assets/about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <div className={cls.links}>
                <AppLink
                    to="/"
                    className={cls.link}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <HomeIcon />
                    <span>{t('Домашняя')}</span>
                </AppLink>
                <AppLink
                    to="/about"
                    className={cls.link}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <AboutIcon />
                    <span>{t('О нас')}</span>
                </AppLink>
            </div>
            <AppButton
                onClick={toggleSidebar}
                data-testid="toggle-sidebar"
                className={cls.collapseBtn}
                shape="square"
                variant="fill"
                size="L"
                color="green"
            >
                {collapsed ? '>' : '<'}
            </AppButton>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
