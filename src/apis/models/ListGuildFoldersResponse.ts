/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildFolderDto } from './GuildFolderDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ListGuildFoldersResponse
 */
export type ListGuildFoldersResponse = {
    /**
     * 一组教会文件夹信息
     */
    folders?: Array<GuildFolderDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}