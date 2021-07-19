/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildFileDto } from './GuildFileDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ListGuildFilesResponse
 */
export type ListGuildFilesResponse = {
    /**
     * 一组教会文件信息
     */
    files?: Array<GuildFileDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}