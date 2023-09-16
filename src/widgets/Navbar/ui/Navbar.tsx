import { classNames } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links, {}, [className])}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppButton onClick={onToggleModal} variant="outline">{t('Войти')}</AppButton>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    {t(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deleniti
                    dignissimos et, facere ipsam iusto non optio reiciendis suscipit voluptatum.`)}
                </Modal>
            </div>
        </div>
    );
};
