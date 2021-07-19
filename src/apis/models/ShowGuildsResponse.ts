/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowGuildsResponse
 */
export type ShowGuildsResponse = {
    /**
     * 一组教会信息
     */
    guilds?: Array<GuildDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}