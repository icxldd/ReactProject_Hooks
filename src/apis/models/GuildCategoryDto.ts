/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildMemberDto } from './GuildMemberDto';

/**
 * GuildCategoryDto
 */
export type GuildCategoryDto = {
    name?: string;
    avatarUrl?: string;
    categories?: Array<GuildCategoryDto>;
    members?: Array<GuildMemberDto>;
}