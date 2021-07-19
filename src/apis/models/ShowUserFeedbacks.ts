/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ShowUserFeedbacks
 */
export type ShowUserFeedbacks = {
    /**
     * 排序的字段（可选值：CreatedDate
     */
    orderBy?: string;
    /**
     * 是否按降序排序
     */
    descending?: boolean;
    /**
     * 忽略的行数
     */
    skip?: number;
    /**
     * 获取的行数
     */
    limit?: number;
}