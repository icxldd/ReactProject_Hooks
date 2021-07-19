/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildMemberDto } from './GuildMemberDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * AuditGuildMemberResponse
 */
export type AuditGuildMemberResponse = {
    /**
     * 教会成员列表信息
     */
    guildMembers?: Array<GuildMemberDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}