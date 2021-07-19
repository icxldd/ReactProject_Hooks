/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussAdminDto } from './DiscussAdminDto';
import type { LivecastAdminDto } from './LivecastAdminDto';
import type { NotificationAdminDto } from './NotificationAdminDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowGuildBlocDetailAdminResponse
 */
export type ShowGuildBlocDetailAdminResponse = {
    publishNotification?: Array<NotificationAdminDto>;
    publishDiscuss?: Array<DiscussAdminDto>;
    publishLivecast?: Array<LivecastAdminDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}