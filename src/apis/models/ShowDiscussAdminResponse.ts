/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussAdminDto } from './DiscussAdminDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowDiscussAdminResponse
 */
export type ShowDiscussAdminResponse = {
    /**
     * 讨论信息
     */
    discuss?: Array<DiscussAdminDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}