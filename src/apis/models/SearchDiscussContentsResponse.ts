/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussContentDto } from './DiscussContentDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * SearchDiscussContentsResponse
 */
export type SearchDiscussContentsResponse = {
    /**
     * 一组讨论内容信息
     */
    contents?: Array<DiscussContentDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}