import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entitie/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    if (error) {
        return <Text text={t('Произошла ошибка при загрузке статей')} />;
    }

    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={className}
            />
        </div>
    );
});
