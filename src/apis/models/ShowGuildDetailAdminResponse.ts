/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';
import type { ShowGuildDetailAdminDto } from './ShowGuildDetailAdminDto';

/**
 * ShowGuildDetailAdminResponse
 */
export type ShowGuildDetailAdminResponse = {
    /**
     * 教会详情
     */
    guildDetail?: ShowGuildDetailAdminDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}