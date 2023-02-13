import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <h2 className={cls.statusTitle}>404</h2>
            <h1 className={cls.title}>{t('Страница не найдена')}</h1>
        </div>
    );
};
