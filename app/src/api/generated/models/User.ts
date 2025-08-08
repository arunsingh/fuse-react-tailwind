/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type User = {
    id: string;
    name: string;
    email: string;
    role: User.role;
    createdAt: string;
};
export namespace User {
    export enum role {
        ADMIN = 'admin',
        USER = 'user',
    }
}

