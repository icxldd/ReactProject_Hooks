/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ListGuildConsumes
 */
export type ListGuildConsumes = {
    /**
     * 教会编号
     */
    guildId?: string;
    /**
     * 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
     */
    type?: number;
    /**
     * 排序的字段（可选值：Type, Amount, CreatedDate, ModifiedDate
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