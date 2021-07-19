/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildMemberDto } from './GuildMemberDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * SetGuildMemberRoleResponse
 */
export type SetGuildMemberRoleResponse = {
    /**
     * 教会成员信息
     */
    member?: GuildMemberDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}