/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildMemberDto } from './GuildMemberDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ChangeGuildMemberNickNameResponse
 */
export type ChangeGuildMemberNickNameResponse = {
    /**
     * 教会成员信息
     */
    member?: GuildMemberDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}