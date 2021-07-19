/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildTotalFluxDto } from './GuildTotalFluxDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowGuildTotalFluxResponse
 */
export type ShowGuildTotalFluxResponse = {
    /**
     * 总流量信息
     */
    totalFlux?: GuildTotalFluxDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}