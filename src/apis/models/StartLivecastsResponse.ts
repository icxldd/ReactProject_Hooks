/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LivecastDto } from './LivecastDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * StartLivecastsResponse
 */
export type StartLivecastsResponse = {
    /**
     * 直播信息列表
     */
    livecasts?: Array<LivecastDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}