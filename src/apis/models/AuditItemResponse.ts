/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuditableItemDto } from './AuditableItemDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * AuditItemResponse
 */
export type AuditItemResponse = {
    /**
     * 可审核对象信息
     */
    item?: AuditableItemDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}