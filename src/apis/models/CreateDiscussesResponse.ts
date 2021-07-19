/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussDto } from './DiscussDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * CreateDiscussesResponse
 */
export type CreateDiscussesResponse = {
    /**
     * 讨论信息列表
     */
    discusses?: Array<DiscussDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}