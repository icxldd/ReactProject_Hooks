/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildGroupDto } from './GuildGroupDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * SetGuildGroupInfoResponse
 */
export type SetGuildGroupInfoResponse = {
    /**
     * 教会小组信息
     */
    group?: GuildGroupDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}