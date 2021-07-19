/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { GuildFileDto } from './GuildFileDto';

/**
 * GuildFolderDto
 */
export type GuildFolderDto = {
    folderId?: string;
    guildId?: string;
    guild?: GuildDto;
    parentFolderId?: string;
    parentFolder?: GuildFolderDto;
    name?: string;
    path?: string;
    files?: Array<GuildFileDto>;
}