/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';

/**
 * LoginAccountByPasswordResponse
 */
export type LoginAccountByPasswordResponse = {
    /**
     * 登录会话编号
     */
    sessionId?: string;
    /**
     * 用户编号
     */
    userId?: number;
    /**
     * 是否通过此登录创建了一个新帐户
     */
    newlyCreated?: boolean;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}