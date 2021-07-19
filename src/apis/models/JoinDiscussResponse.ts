/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussReceiverDto } from './DiscussReceiverDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * JoinDiscussResponse
 */
export type JoinDiscussResponse = {
    /**
     * 讨论接收者信息
     */
    receiver?: DiscussReceiverDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}