import { classNames } from 'shared/libs/classNames/classNames';
import { t } from 'i18next';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const toHome = () => window.location.reload();

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Произошла неожиданная ошибка')}</h1>
            <AppButton onClick={toHome} className={cls.button}>
                {t('Перезагрузить')}
            </AppButton>
        </div>
    );
};
