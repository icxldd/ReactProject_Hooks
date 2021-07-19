/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuditableItemDto } from './AuditableItemDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowManualAuditAdminResponse
 */
export type ShowManualAuditAdminResponse = {
    /**
     * 审核列表
     */
    auditableItemDtos?: Array<AuditableItemDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}