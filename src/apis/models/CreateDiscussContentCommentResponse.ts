/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussContentCommentDto } from './DiscussContentCommentDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * CreateDiscussContentCommentResponse
 */
export type CreateDiscussContentCommentResponse = {
    /**
     * 讨论内容评论信息
     */
    comment?: DiscussContentCommentDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}