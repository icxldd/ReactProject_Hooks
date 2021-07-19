/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildAdminDto } from './GuildAdminDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowGuildsLazyAdminResponse
 */
export type ShowGuildsLazyAdminResponse = {
    /**
     * 教会信息
     */
    guilds?: Array<GuildAdminDto>;
    /**
     * 总共条数
     */
    totalRecords?: number;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}