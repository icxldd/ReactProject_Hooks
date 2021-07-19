/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NotificationAdminDto } from './NotificationAdminDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowNotificationsAdminResponse
 */
export type ShowNotificationsAdminResponse = {
    /**
     * 通知信息
     */
    notifications?: Array<NotificationAdminDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}