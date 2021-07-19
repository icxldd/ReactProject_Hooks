/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ShowUserLogs
 */
export type ShowUserLogs = {
    /**
     * 操作
     */
    action?: number;
    /**
     * 排序的字段（可选值：Action, CreatedDate
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