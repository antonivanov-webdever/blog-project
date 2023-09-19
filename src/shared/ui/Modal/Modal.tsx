import { classNames } from 'shared/libs/classNames/classNames';
import {
    ReactNode, MouseEvent, useState, useRef, useEffect, useCallback,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'shared/contexts';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 250;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const keyDownHandler = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const contentClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', keyDownHandler);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', keyDownHandler);
        };
    }, [isOpen, keyDownHandler]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={contentClickHandler}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
