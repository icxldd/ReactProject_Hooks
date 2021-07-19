/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussDto } from './DiscussDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowDiscussResponse
 */
export type ShowDiscussResponse = {
    /**
     * 讨论信息
     */
    discuss?: DiscussDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}