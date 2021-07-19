/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildMemberDto } from './GuildMemberDto';
import type { UserDto } from './UserDto';

/**
 * GuildDto
 */
export type GuildDto = {
    guildId?: string;
    displayName?: string;
    description?: string;
    avatarUrl?: string;
    coverUrl?: string;
    backgroundUrl?: string;
    fullName?: string;
    isCertificated?: boolean;
    country?: string;
    province?: string;
    city?: string;
    address?: string;
    postalCode?: string;
    isPublic?: boolean;
    canSearchByPhoneNumber?: boolean;
    joinMode?: number;
    status?: number;
    statusName?: string;
    statusMessage?: string;
    ownerId?: number;
    owner?: UserDto;
    isOwner?: boolean;
    createdDate?: string;
    violationCount?: number;
    membersCount?: number;
    believersCount?: number;
    leadersCount?: number;
    pastorsCount?: number;
    members?: Array<GuildMemberDto>;
    isCanNewJoin?: boolean;
    joinNewMemberForAdminAudit?: boolean;
    waitAuditMemberCount?: number;
    isKickOutMemberForAdmin?: boolean;
    guildAuditMode?: number;
}