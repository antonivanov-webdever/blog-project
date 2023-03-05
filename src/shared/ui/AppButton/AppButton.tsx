import { classNames } from 'shared/libs/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './AppButton.module.scss';

type AppButtonVariant = 'clear' | 'outline' | 'fill';
enum EAppButtonVariant {
  clear = 'clear',
  outline = 'outline',
  fill = 'fill'
}

type AppButtonSize = 'M' | 'L' | 'XL';
enum EAppButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

type AppButtonColor = 'green' | 'purple';
enum EAppButtonColor {
  green = 'green',
  purple = 'purple'
}

type AppButtonShape = 'rect' | 'square';
enum EAppButtonShape {
  rect = 'rect',
  square = 'square'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: AppButtonVariant;
  color?: AppButtonColor;
  size?: AppButtonSize;
  shape?: AppButtonShape;
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const {
        className,
        onClick,
        children,
        variant = EAppButtonVariant.fill,
        color = EAppButtonColor.green,
        size = 'M',
        shape = EAppButtonShape.rect,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(
                cls.AppButton,
                {},
                [
                    className,
                    cls[EAppButtonVariant[variant]],
                    cls[EAppButtonColor[color]],
                    cls[EAppButtonShape[shape]],
                    cls[EAppButtonSize[size]],
                ],
            )}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    );
};
