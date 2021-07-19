/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserDto } from './UserDto';

/**
 * UserLogDto
 */
export type UserLogDto = {
    logId?: string;
    userId?: string;
    user?: UserDto;
    action?: number;
    description?: string;
    createdDate?: string;
}