/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LivecastDto } from './LivecastDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * StopLivecastsResponse
 */
export type StopLivecastsResponse = {
    /**
     * 直播信息列表
     */
    livecasts?: Array<LivecastDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}