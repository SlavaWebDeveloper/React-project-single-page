import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entitie/Article';
import { CounterSchema } from 'entitie/Counter';
import { ProfileSchema } from 'entitie/Profile';
import { UserSchema } from 'entitie/User';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { UISchema } from 'features/UI';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
	ui: UISchema;

	loginForm?: LoginSchema;
	profile?: ProfileSchema;
	articleDetails?: ArticleDetailsSchema;
	addCommentForm?: AddCommentFormSchema;
	articlesPage?: ArticlesPageSchema;
	articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;

	getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
