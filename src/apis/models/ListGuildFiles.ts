/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ListGuildFiles
 */
export type ListGuildFiles = {
    /**
     * 教会编号
     */
    guildId?: string;
    /**
     * 文件夹编号
     */
    folderId?: string;
    /**
     * 类型（-1: 其他; 0: 图片; 1: 音频; 2: 视频; 3: 文档）
     */
    type?: number;
    /**
     * 分类
     */
    category?: string;
    /**
     * 排序的字段（可选值：Name, Type, Category, ContentType, ContentLength, CreatedDate, ModifiedDate
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