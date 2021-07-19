/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowCodeToSessionResponse
 */
export type ShowCodeToSessionResponse = {
    /**
     * openid
     */
    openid?: string;
    /**
     * sessionkey
     */
    session_key?: string;
    /**
     * unionid
     */
    unionid?: string;
    /**
     * 错误码
     */
    errcode?: string;
    /**
     * 错误信息
     */
    errmsg?: string;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}