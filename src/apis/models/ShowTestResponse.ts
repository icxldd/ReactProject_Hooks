/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildResource } from './GuildResource';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowTestResponse
 */
export type ShowTestResponse = {
    /**
     * 响应
     */
    data?: Array<GuildResource>;
    data2?: string;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}