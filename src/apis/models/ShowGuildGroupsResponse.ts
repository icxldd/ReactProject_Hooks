/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildGroupDto } from './GuildGroupDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowGuildGroupsResponse
 */
export type ShowGuildGroupsResponse = {
    /**
     * 一组教会小组信息
     */
    groups?: Array<GuildGroupDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}