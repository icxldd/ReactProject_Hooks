/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ShowGuildCategories
 */
export type ShowGuildCategories = {
    /**
     * 教会Id
     */
    guildId?: string;
    /**
     * 用途（0: 通知; 1: 直播; 2: 讨论; 3: 团契）
     */
    usage?: number;
    /**
     * 角色（0: 信徒; 1: 同工; 2: 牧者）
     */
    memberRole?: number;
    /**
     * 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     */
    memberStatus?: number;
    /**
     * 排序的字段（可选值：Name, CreatedDate
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