/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ShowDiscussContentMessages
 */
export type ShowDiscussContentMessages = {
    /**
     * 讨论编号
     */
    discussId?: string;
    /**
     * 排序的字段（可选值：ContentId, ContentUserAuthId, ParentId, ParentUserAuthId, Type, UserAuthId, Description, CreatedDate, ModifiedDate
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