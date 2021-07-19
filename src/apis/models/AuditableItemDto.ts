/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuditableItemFileDto } from './AuditableItemFileDto';
import type { GuildDto } from './GuildDto';
import type { UserDto } from './UserDto';

/**
 * AuditableItemDto
 */
export type AuditableItemDto = {
    itemId?: string;
    guildId?: string;
    guild?: GuildDto;
    type?: number;
    typeName?: string;
    title?: string;
    description?: string;
    avatarUrl?: string;
    status?: number;
    statusName?: string;
    statusMessage?: string;
    hasAudited?: boolean;
    auditMessage?: string;
    auditDescription?: string;
    auditorId?: string;
    auditor?: UserDto;
    auditDate?: string;
    userId?: string;
    user?: UserDto;
    isCurrentUser?: boolean;
    createdDate?: string;
    blockedDate?: string;
    imageFiles?: Array<AuditableItemFileDto>;
    audioFiles?: Array<AuditableItemFileDto>;
    videoFiles?: Array<AuditableItemFileDto>;
    attachmentFiles?: Array<AuditableItemFileDto>;
}