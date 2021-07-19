/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NotificationDto } from './NotificationDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * CreateLocalNotificationResponse
 */
export type CreateLocalNotificationResponse = {
    /**
     * 通知信息
     */
    notification?: NotificationDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}