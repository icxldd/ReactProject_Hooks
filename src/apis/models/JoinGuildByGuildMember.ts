/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * JoinGuildByGuildMember
 */
export type JoinGuildByGuildMember = {
    /**
     * 教会编号|手机号
     */
    joinIdentification?: string;
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