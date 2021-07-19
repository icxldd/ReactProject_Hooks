/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LivecastReceiverDto } from './LivecastReceiverDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * LeaveLivecastResponse
 */
export type LeaveLivecastResponse = {
    /**
     * 直播接收者信息
     */
    receiver?: LivecastReceiverDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}