import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const searchParams = new URLSearchParams({
            order: 'desc',
            sort: 'views',
            search: 'javascript',
        });

        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false,
            },
        });

        await thunk.callThunk(searchParams);
        expect(thunk.dispatch).toBeCalledTimes(7);
        expect(fetchArticlesList).toHaveBeenCalled();
    });

    test('success - page already initialized', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true,
            },
        });
        await thunk.callThunk(new URLSearchParams());
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('success - no URL params provided, init state', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: false,
            },
        });

        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalled();
    });
});
