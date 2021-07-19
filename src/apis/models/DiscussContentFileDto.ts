/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussContentDto } from './DiscussContentDto';
import type { DiscussDto } from './DiscussDto';
import type { GuildDto } from './GuildDto';

/**
 * DiscussContentFileDto
 */
export type DiscussContentFileDto = {
    fileId?: string;
    guildId?: string;
    guild?: GuildDto;
    discussId?: string;
    discuss?: DiscussDto;
    contentId?: string;
    content?: DiscussContentDto;
    type?: number;
    name?: string;
    url?: string;
    previewUrl?: string;
    avatarUrl?: string;
    contentType?: string;
    contentLength?: number;
    width?: number;
    height?: number;
    duration?: number;
}