/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuditableItemDto } from './AuditableItemDto';
import type { GuildDto } from './GuildDto';

/**
 * AuditableItemFileDto
 */
export type AuditableItemFileDto = {
    fileId?: string;
    guildId?: string;
    guild?: GuildDto;
    itemId?: string;
    item?: AuditableItemDto;
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