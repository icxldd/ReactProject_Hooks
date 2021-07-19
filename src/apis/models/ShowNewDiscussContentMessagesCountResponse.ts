/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowNewDiscussContentMessagesCountResponse
 */
export type ShowNewDiscussContentMessagesCountResponse = {
    /**
     * 消息总数
     */
    messagesCount?: number;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}