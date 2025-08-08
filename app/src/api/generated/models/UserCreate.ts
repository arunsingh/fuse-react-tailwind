/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserCreate = {
    name: string;
    email: string;
    role?: UserCreate.role;
};
export namespace UserCreate {
    export enum role {
        ADMIN = 'admin',
        USER = 'user',
    }
}

