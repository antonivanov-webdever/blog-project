import { classNames } from 'shared/libs/classNames/classNames';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const toHome = () => window.location.reload();
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Произошла неожиданная ошибка')}</h1>
            <AppButton onClick={toHome} className={cls.button}>
                {t('Перезагрузить')}
            </AppButton>
        </div>
    );
};
