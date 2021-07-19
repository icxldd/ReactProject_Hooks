/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NotificationDto } from './NotificationDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowNotificationResponse
 */
export type ShowNotificationResponse = {
    /**
     * 通知信息
     */
    notification?: NotificationDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}