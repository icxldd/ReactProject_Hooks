/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuditableItemDto } from './AuditableItemDto';
import type { UserDto } from './UserDto';

/**
 * AbuseReportDto
 */
export type AbuseReportDto = {
    reportId?: string;
    itemId?: string;
    item?: AuditableItemDto;
    category?: string;
    description?: string;
    ownerId?: number;
    owner?: UserDto;
    createdDate?: string;
}