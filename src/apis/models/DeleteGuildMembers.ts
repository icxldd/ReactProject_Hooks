/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * DeleteGuildMembers
 */
export type DeleteGuildMembers = {
    /**
     * 教会编号
     */
    guildId?: string;
    /**
     * 用户编号列表
     */
    userIds?: Array<string>;
    /**
     * 是否屏蔽
     */
    shouldBlock?: boolean;
}