import {classNames} from "shared/libs/classNames/classNames";
import cls from "./AppLink.module.scss";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    theme = AppLinkTheme.PRIMARY,
    className,
    children,
    to,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
