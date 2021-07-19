/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CreateDiscussContentComment
 */
export type CreateDiscussContentComment = {
    /**
     * 讨论内容编号
     */
    contentId?: string;
    /**
     * 上级评论编号
     */
    parentCommentId?: string;
    /**
     * 描述
     */
    description?: string;
}