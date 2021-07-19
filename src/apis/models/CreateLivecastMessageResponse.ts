/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LivecastMessageDto } from './LivecastMessageDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * CreateLivecastMessageResponse
 */
export type CreateLivecastMessageResponse = {
    /**
     * 直播消息信息
     */
    message?: LivecastMessageDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}