/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildMemberDto } from './GuildMemberDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * SetGuildMembersStatusResponse
 */
export type SetGuildMembersStatusResponse = {
    /**
     * 一组教会成员信息
     */
    members?: Array<GuildMemberDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}