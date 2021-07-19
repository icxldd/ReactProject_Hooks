/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LivecastRtmpDto } from './LivecastRtmpDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * CreateLivecastRtmpUrlResponse
 */
export type CreateLivecastRtmpUrlResponse = {
    /**
     * 流地址
     */
    livecastRtmp?: LivecastRtmpDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}