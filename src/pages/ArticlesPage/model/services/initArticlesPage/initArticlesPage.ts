import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from 'entitie/Article';
import { SortOrder } from 'shared/types';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromURrl = searchParams.get('order') as SortOrder;
            const sortFromURrl = searchParams.get('sort') as ArticleSortField;
            const searchFromURrl = searchParams.get('search');
            const typeFromURrl = searchParams.get('type') as ArticleType;

            if (orderFromURrl) {
                dispatch(articlesPageActions.setOrder(orderFromURrl));
            }

            if (sortFromURrl) {
                dispatch(articlesPageActions.setSort(sortFromURrl));
            }

            if (searchFromURrl) {
                dispatch(articlesPageActions.setSearch(searchFromURrl));
            }

            if (typeFromURrl) {
                dispatch(articlesPageActions.setType(typeFromURrl));
            }

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
