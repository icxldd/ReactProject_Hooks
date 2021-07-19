/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NotificationDto } from './NotificationDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * CreateNotificationsResponse
 */
export type CreateNotificationsResponse = {
    /**
     * 通知信息列表
     */
    notifications?: Array<NotificationDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}