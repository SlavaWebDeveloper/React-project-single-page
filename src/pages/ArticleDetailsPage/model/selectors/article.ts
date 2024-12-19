import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entitie/User';
import { getArticleDetailsData } from '@/entitie/Article';

export const getCanEditArticle = createSelector(
    getArticleDetailsData,
    getUserAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    },
);
