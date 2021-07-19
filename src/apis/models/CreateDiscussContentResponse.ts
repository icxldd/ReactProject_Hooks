/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussContentDto } from './DiscussContentDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * CreateDiscussContentResponse
 */
export type CreateDiscussContentResponse = {
    /**
     * 讨论内容信息
     */
    content?: DiscussContentDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}