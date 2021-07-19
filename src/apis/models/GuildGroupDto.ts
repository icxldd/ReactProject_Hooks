/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { GuildMemberDto } from './GuildMemberDto';

/**
 * GuildGroupDto
 */
export type GuildGroupDto = {
    groupId?: string;
    guildId?: string;
    guild?: GuildDto;
    name?: string;
    members?: Array<GuildMemberDto>;
}