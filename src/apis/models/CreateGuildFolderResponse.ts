/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildFolderDto } from './GuildFolderDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * CreateGuildFolderResponse
 */
export type CreateGuildFolderResponse = {
    /**
     * 教会文件夹信息
     */
    folder?: GuildFolderDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}