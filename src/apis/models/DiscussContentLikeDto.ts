/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussContentDto } from './DiscussContentDto';
import type { DiscussDto } from './DiscussDto';
import type { GuildDto } from './GuildDto';
import type { GuildMemberDto } from './GuildMemberDto';
import type { UserDto } from './UserDto';

/**
 * DiscussContentLikeDto
 */
export type DiscussContentLikeDto = {
    likeId?: string;
    guildId?: string;
    guild?: GuildDto;
    discussId?: string;
    discuss?: DiscussDto;
    contentId?: string;
    content?: DiscussContentDto;
    userId?: string;
    user?: UserDto;
    userMemberId?: string;
    userMember?: GuildMemberDto;
    isCurrentUser?: boolean;
}