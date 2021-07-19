/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * JoinGuild
 */
export type JoinGuild = {
    /**
     * 教会编号（无教会编号则必须输入邀请码）
     */
    guildId?: string;
    /**
     * 邀请码（无邀请码则必须输入教会编号）
     */
    code?: string;
    /**
     * 成员昵称
     */
    memberNickname?: string;
    /**
     * 成员头像地址
     */
    memberAvatarUrl?: string;
}