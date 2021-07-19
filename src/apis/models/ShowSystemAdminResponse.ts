/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';
import type { ShowSystemAdminDto } from './ShowSystemAdminDto';

/**
 * ShowSystemAdminResponse
 */
export type ShowSystemAdminResponse = {
    /**
     * 系统详情
     */
    systemDetail?: ShowSystemAdminDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}