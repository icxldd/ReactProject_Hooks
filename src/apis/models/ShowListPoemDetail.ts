/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ShowListPoemDetail
 */
export type ShowListPoemDetail = {
    /**
     * poemId
     */
    poemId?: number;
    /**
     * searchWord
     */
    searchWord?: string;
    /**
     * 是否按降序排序-index排序
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