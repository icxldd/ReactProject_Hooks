/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussContentLikeDto } from './DiscussContentLikeDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * CreateDiscussContentLikeResponse
 */
export type CreateDiscussContentLikeResponse = {
    /**
     * 讨论内容点赞信息
     */
    like?: DiscussContentLikeDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}