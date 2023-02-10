import {classNames} from "shared/libs/classNames/classNames";
import cls from "./AppButton.module.scss";
import {ButtonHTMLAttributes, FC} from "react";

export enum AppButtonTheme {
  CLEAR = 'clear'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: AppButtonTheme;
}

export const AppButton: FC<AppButtonProps> = (props) => {
  const {
    className,
    onClick,
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.AppButton, {}, [className, cls[theme]])}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
