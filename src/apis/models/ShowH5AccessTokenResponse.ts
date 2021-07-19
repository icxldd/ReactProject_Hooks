/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessTokenInfo } from './AccessTokenInfo';
import type { ResponseStatus } from './ResponseStatus';
import type { UserInfo } from './UserInfo';

/**
 * ShowH5AccessTokenResponse
 */
export type ShowH5AccessTokenResponse = {
    /**
     * accessInfo
     */
    accessInfo?: AccessTokenInfo;
    /**
     * userInfo
     */
    userInfo?: UserInfo;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}