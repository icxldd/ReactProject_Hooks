/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ListGuildFolders
 */
export type ListGuildFolders = {
    /**
     * 教会编号
     */
    guildId?: string;
    /**
     * 上级文件夹编号
     */
    parentFolderId?: string;
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