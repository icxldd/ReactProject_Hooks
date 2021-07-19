/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ShowGuildGroups
 */
export type ShowGuildGroups = {
    /**
     * 查询信息（名称）
     */
    query?: string;
    /**
     * 排序的字段（可选值：Name, CreatedDate, ModifiedDate
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