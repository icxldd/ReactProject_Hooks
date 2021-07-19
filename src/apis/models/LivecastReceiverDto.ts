/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { GuildMemberDto } from './GuildMemberDto';
import type { LivecastDto } from './LivecastDto';
import type { UserDto } from './UserDto';

/**
 * LivecastReceiverDto
 */
export type LivecastReceiverDto = {
    receiverId?: string;
    guildId?: string;
    guild?: GuildDto;
    livecastId?: string;
    livecast?: LivecastDto;
    userId?: string;
    user?: UserDto;
    userMemberId?: string;
    userMember?: GuildMemberDto;
    hasViewed?: boolean;
    hasJoined?: boolean;
    isOnline?: boolean;
    wasOnline?: boolean;
}