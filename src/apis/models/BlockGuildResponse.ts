/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * BlockGuildResponse
 */
export type BlockGuildResponse = {
    /**
     * 教会信息
     */
    guild?: GuildDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}