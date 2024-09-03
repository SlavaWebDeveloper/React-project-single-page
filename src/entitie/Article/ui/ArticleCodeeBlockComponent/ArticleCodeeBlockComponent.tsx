import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleCodeeBlockComponent.module.scss';

interface ArticleCodeeBlockComponentProps {
  className?: string;
}

export const ArticleCodeeBlockComponent = ({ className }: ArticleCodeeBlockComponentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleCodeeBlockComponent, {}, [className])}>
            ArticleCodeeBlockComponent
        </div>
    );
};
