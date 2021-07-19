/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussDto } from './DiscussDto';
import type { GuildDto } from './GuildDto';
import type { GuildMemberDto } from './GuildMemberDto';
import type { UserDto } from './UserDto';

/**
 * DiscussReceiverDto
 */
export type DiscussReceiverDto = {
    receiverId?: string;
    guildId?: string;
    guild?: GuildDto;
    discussId?: string;
    discuss?: DiscussDto;
    userId?: string;
    user?: UserDto;
    userMemberId?: string;
    userMember?: GuildMemberDto;
    hasViewed?: boolean;
    hasJoined?: boolean;
}