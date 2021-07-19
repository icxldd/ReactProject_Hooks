/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LivecastDto } from './LivecastDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowLivecastResponse
 */
export type ShowLivecastResponse = {
    /**
     * 直播信息
     */
    livecast?: LivecastDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}