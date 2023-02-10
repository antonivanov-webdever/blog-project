import {classNames} from "shared/libs/classNames/classNames";
import cls from "./LanguageSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import {AppButton, AppButtonTheme} from "shared/ui/AppButton/AppButton";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({className}: LanguageSwitcherProps) => {
  const {t, i18n} = useTranslation();

  const translate = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <AppButton
      className={classNames(cls.LanguageSwitcher, {}, [className])}
      onClick={translate}
      theme={AppButtonTheme.CLEAR}
    >
      {t('Язык')}
    </AppButton>
  );
};
