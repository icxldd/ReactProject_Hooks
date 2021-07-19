/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildFileDto } from './GuildFileDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * CreateGuildFileResponse
 */
export type CreateGuildFileResponse = {
    /**
     * 教会文件信息
     */
    file?: GuildFileDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}