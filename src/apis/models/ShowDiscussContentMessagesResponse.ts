/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussContentMessageDto } from './DiscussContentMessageDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowDiscussContentMessagesResponse
 */
export type ShowDiscussContentMessagesResponse = {
    /**
     * 一组讨论内容消息信息
     */
    messages?: Array<DiscussContentMessageDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}