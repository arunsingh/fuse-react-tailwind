/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { UserCreate } from '../models/UserCreate';
import type { UserUpdate } from '../models/UserUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Login
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postAuthLogin(
        requestBody: {
            email: string;
            password: string;
        },
    ): CancelablePromise<{
        accessToken?: string;
        refreshToken?: string;
        user?: User;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Refresh token
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static postAuthRefresh(
        requestBody: {
            refreshToken: string;
        },
    ): CancelablePromise<{
        accessToken?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/refresh',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Current user
     * @returns User OK
     * @throws ApiError
     */
    public static getAuthMe(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/me',
        });
    }
    /**
     * List users
     * @param page
     * @param pageSize
     * @param search
     * @returns any OK
     * @throws ApiError
     */
    public static getUsers(
        page: number = 1,
        pageSize: number = 10,
        search?: string,
    ): CancelablePromise<{
        total?: number;
        items?: Array<User>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'page': page,
                'pageSize': pageSize,
                'search': search,
            },
        });
    }
    /**
     * Create user
     * @param requestBody
     * @returns User Created
     * @throws ApiError
     */
    public static postUsers(
        requestBody: UserCreate,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get user
     * @param id
     * @returns User OK
     * @throws ApiError
     */
    public static getUsers1(
        id: string,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update user
     * @param id
     * @param requestBody
     * @returns User OK
     * @throws ApiError
     */
    public static putUsers(
        id: string,
        requestBody: UserUpdate,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete user
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteUsers(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }
}
