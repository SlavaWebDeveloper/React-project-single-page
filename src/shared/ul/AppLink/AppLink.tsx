import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTmene {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTmene;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        theme = AppLinkTmene.PRIMARY,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.navbar, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
