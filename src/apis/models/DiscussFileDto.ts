/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussDto } from './DiscussDto';
import type { GuildDto } from './GuildDto';

/**
 * DiscussFileDto
 */
export type DiscussFileDto = {
    fileId?: string;
    guildId?: string;
    guild?: GuildDto;
    discussId?: string;
    discuss?: DiscussDto;
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