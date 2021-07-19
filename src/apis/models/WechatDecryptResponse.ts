/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';

/**
 * WechatDecryptResponse
 */
export type WechatDecryptResponse = {
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
    /**
     * unionId
     */
    unionId?: string;
}