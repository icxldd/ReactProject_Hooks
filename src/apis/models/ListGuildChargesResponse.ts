/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildChargeDto } from './GuildChargeDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ListGuildChargesResponse
 */
export type ListGuildChargesResponse = {
    /**
     * 一组教会充值信息
     */
    charges?: Array<GuildChargeDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}