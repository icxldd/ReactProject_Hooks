/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InformationAbuseReportDto } from './InformationAbuseReportDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * CreateInformationAbuseReportResponse
 */
export type CreateInformationAbuseReportResponse = {
    /**
     * 消息举报信息
     */
    abuseReport?: InformationAbuseReportDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}