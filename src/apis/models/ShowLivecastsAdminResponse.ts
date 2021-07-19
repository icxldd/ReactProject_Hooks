/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LivecastAdminDto } from './LivecastAdminDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowLivecastsAdminResponse
 */
export type ShowLivecastsAdminResponse = {
    /**
     * 直播信息
     */
    livecasts?: Array<LivecastAdminDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}