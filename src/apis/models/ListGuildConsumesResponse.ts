/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildConsumeDto } from './GuildConsumeDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ListGuildConsumesResponse
 */
export type ListGuildConsumesResponse = {
    /**
     * 一组教会消费信息
     */
    consumes?: Array<GuildConsumeDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}