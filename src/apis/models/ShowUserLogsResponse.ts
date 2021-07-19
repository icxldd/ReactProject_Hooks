/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';
import type { UserLogDto } from './UserLogDto';

/**
 * ShowUserLogsResponse
 */
export type ShowUserLogsResponse = {
    /**
     * 一组用户日志信息
     */
    logs?: Array<UserLogDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}