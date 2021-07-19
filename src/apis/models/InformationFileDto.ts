/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { InformationDto } from './InformationDto';

/**
 * InformationFileDto
 */
export type InformationFileDto = {
    fileId?: string;
    guildId?: string;
    guild?: GuildDto;
    informationId?: string;
    information?: InformationDto;
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