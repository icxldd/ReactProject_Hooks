/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildAbuseReportDto } from './GuildAbuseReportDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * CreateGuildAbuseReportResponse
 */
export type CreateGuildAbuseReportResponse = {
    /**
     * 教会举报信息
     */
    abuseReport?: GuildAbuseReportDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}