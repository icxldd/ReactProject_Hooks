/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountAdminDto } from './AccountAdminDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowAccountAdminResponse
 */
export type ShowAccountAdminResponse = {
    /**
     * 用戶信息
     */
    accounts?: Array<AccountAdminDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}