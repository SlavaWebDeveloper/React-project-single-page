import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTmene } from 'shared/ul/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                theme={AppLinkTmene.SECONDARY}
                to="/"
                className={cls.mainLink}
            >
                Главная
            </AppLink>

            <AppLink
                theme={AppLinkTmene.SECONDARY}
                to="/about"
            >
                О нас
            </AppLink>
        </div>
    </div>
);
