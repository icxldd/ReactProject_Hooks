/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * SearchDiscussContents
 */
export type SearchDiscussContents = {
    /**
     * 讨论编号
     */
    discussId?: string;
    /**
     * 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
     */
    type?: number;
    /**
     * 状态（-2: 已屏蔽; -1: 已删除; 0: 正常）
     */
    status?: number;
    /**
     * 排序的字段（可选值：UserAuthId, Type, CreatedDate, ModifiedDate, Status
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