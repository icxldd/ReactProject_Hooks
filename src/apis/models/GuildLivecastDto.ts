/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LivecastAdminDto } from './LivecastAdminDto';

/**
 * GuildLivecastDto
 */
export type GuildLivecastDto = {
    guildId?: string;
    guildName?: string;
    guildAvatarUrl?: string;
    guildAddress?: string;
    guildMembersCount?: string;
    lasterCreatedLivecastTime?: string;
    guildLivecastDto?: Array<LivecastAdminDto>;
    guildCreatedTime?: string;
}