/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildMemberAdminDto } from './GuildMemberAdminDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowGuildMemberAdminResponse
 */
export type ShowGuildMemberAdminResponse = {
    /**
     * 教会成员
     */
    guildMemberAdminDto?: Array<GuildMemberAdminDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}