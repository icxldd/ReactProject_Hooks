/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AbuseReportDto } from './AbuseReportDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowAbuseReportAuditAdminResponse
 */
export type ShowAbuseReportAuditAdminResponse = {
    /**
     * 举报审核列表
     */
    abuseReportDtos?: Array<AbuseReportDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}