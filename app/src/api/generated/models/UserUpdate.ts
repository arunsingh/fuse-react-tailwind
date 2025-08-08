/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserUpdate = {
    name?: string;
    role?: UserUpdate.role;
};
export namespace UserUpdate {
    export enum role {
        ADMIN = 'admin',
        USER = 'user',
    }
}

