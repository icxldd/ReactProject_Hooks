/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ShowListPoem
 */
export type ShowListPoem = {
    /**
     * 查询信息
     */
    bookName?: string;
    /**
     * 是否按降序排序-时间排序
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