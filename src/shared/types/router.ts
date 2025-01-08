/* eslint-disable slava-plugin/layer-imports */
import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entitie/User';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
	roles?: UserRole[];
};
