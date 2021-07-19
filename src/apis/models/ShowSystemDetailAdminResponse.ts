/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';
import type { ShowSystemDetailAdminDto } from './ShowSystemDetailAdminDto';

/**
 * ShowSystemDetailAdminResponse
 */
export type ShowSystemDetailAdminResponse = {
    /**
     * 系统详情信息
     */
    systemDetailInfo?: ShowSystemDetailAdminDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}