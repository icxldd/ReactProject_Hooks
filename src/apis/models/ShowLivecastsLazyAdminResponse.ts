/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LivecastAdminDto } from './LivecastAdminDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowLivecastsLazyAdminResponse
 */
export type ShowLivecastsLazyAdminResponse = {
    /**
     * 直播信息
     */
    livecasts?: Array<LivecastAdminDto>;
    /**
     * 总共条数
     */
    totalRecords?: number;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}