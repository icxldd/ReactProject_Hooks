/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildTotalAmountDto } from './GuildTotalAmountDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowGuildLivecastFluxAdminResponse
 */
export type ShowGuildLivecastFluxAdminResponse = {
    /**
     * 教会流量使用详情
     */
    guildLivecastFluxs?: Array<GuildTotalAmountDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}