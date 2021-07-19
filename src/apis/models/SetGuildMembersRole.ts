/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * SetGuildMembersRole
 */
export type SetGuildMembersRole = {
    /**
     * 教会编号
     */
    guildId?: string;
    /**
     * 用户编号列表
     */
    userIds?: Array<string>;
    /**
     * 角色（0: 信徒; 1: 同工; 2: 牧者）
     */
    role?: number;
}