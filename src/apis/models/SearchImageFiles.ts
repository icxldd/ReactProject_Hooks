/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * SearchImageFiles
 */
export type SearchImageFiles = {
    /**
     * 查询信息
     */
    query?: string;
    /**
     * 分类
     */
    category?: string;
    /**
     * 排序的字段（可选值：Name, ContentType, ContentLength, CreatedDate, ModifiedDate
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