/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { LivecastDto } from './LivecastDto';

/**
 * LivecastFileDto
 */
export type LivecastFileDto = {
    fileId?: string;
    guildId?: string;
    guild?: GuildDto;
    livecastId?: string;
    livecast?: LivecastDto;
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