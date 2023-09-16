import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import ruIcon from 'shared/assets/ru.png';
import enIcon from 'shared/assets/en.png';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { i18n } = useTranslation();

    const translate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <AppButton
            className={classNames(cls.LanguageSwitcher, {}, [className])}
            onClick={translate}
            variant="clear"
        >
            {
                i18n.language === 'ru'
                    ? <img src={ruIcon} alt="Ru" />
                    : <img src={enIcon} alt="en" />
            }
        </AppButton>
    );
};
