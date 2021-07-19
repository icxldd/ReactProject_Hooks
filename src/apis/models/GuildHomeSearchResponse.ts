/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildResourceDto } from './GuildResourceDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * GuildHomeSearchResponse
 */
export type GuildHomeSearchResponse = {
    /**
     * 响应
     */
    guildResourceDtos?: Array<GuildResourceDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}