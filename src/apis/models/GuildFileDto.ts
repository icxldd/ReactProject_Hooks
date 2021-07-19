/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { GuildFolderDto } from './GuildFolderDto';
import type { GuildMemberDto } from './GuildMemberDto';
import type { UserDto } from './UserDto';

/**
 * GuildFileDto
 */
export type GuildFileDto = {
    fileId?: string;
    guildId?: string;
    guild?: GuildDto;
    folderId?: string;
    folder?: GuildFolderDto;
    type?: number;
    name?: string;
    path?: string;
    url?: string;
    previewUrl?: string;
    avatarUrl?: string;
    category?: string;
    contentType?: string;
    contentLength?: number;
    width?: number;
    height?: number;
    duration?: number;
    ownerId?: string;
    owner?: UserDto;
    ownerMemberId?: string;
    ownerMember?: GuildMemberDto;
    isCurrentOwner?: boolean;
    createdDate?: string;
}