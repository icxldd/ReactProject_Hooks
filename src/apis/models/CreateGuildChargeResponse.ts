/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildChargeDto } from './GuildChargeDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * CreateGuildChargeResponse
 */
export type CreateGuildChargeResponse = {
    /**
     * 教会充值信息
     */
    charge?: GuildChargeDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}