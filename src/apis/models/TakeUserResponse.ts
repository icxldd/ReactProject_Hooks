/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';
import type { UserDto } from './UserDto';

/**
 * TakeUserResponse
 */
export type TakeUserResponse = {
    /**
     * 用户信息
     */
    user?: UserDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}