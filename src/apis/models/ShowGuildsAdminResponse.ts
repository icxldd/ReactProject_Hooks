/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildAdminDto } from './GuildAdminDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowGuildsAdminResponse
 */
export type ShowGuildsAdminResponse = {
    /**
     * 帖子信息
     */
    guilds?: Array<GuildAdminDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}