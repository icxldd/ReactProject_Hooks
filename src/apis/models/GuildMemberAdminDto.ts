/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildMemberDto } from './GuildMemberDto';

/**
 * GuildMemberAdminDto
 */
export type GuildMemberAdminDto = {
    guildId?: string;
    guildName?: string;
    guildAvatarUrl?: string;
    guildAddress?: string;
    guildMembersCount?: string;
    guildMembersDto?: Array<GuildMemberDto>;
}