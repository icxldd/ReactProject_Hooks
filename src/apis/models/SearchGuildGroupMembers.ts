/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * SearchGuildGroupMembers
 */
export type SearchGuildGroupMembers = {
    /**
     * 小组编号
     */
    groupId?: string;
    /**
     * 查询信息（成员昵称）
     */
    query?: string;
    /**
     * 角色（0: 信徒; 1: 同工; 2: 牧者）
     */
    memberRole?: number;
    /**
     * 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     */
    memberStatus?: number;
    /**
     * 排序的字段（可选值：CreatedDate
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