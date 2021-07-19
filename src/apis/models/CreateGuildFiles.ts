/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileInfo } from './FileInfo';

/**
 * CreateGuildFiles
 */
export type CreateGuildFiles = {
    /**
     * 教会编号
     */
    guildId?: string;
    /**
     * 文件夹编号
     */
    folderId?: string;
    /**
     * 文件列表
     */
    files?: Array<FileInfo>;
}