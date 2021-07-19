/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { GuildMemberDto } from './GuildMemberDto';
import type { LivecastDto } from './LivecastDto';
import type { UserDto } from './UserDto';

/**
 * LivecastMessageDto
 */
export type LivecastMessageDto = {
    messageId?: string;
    guildId?: string;
    guild?: GuildDto;
    livecastId?: string;
    livecast?: LivecastDto;
    userId?: string;
    user?: UserDto;
    userMemberId?: string;
    userMember?: GuildMemberDto;
    isCurrentUser?: boolean;
    type?: number;
    description?: string;
    url?: string;
    avatarUrl?: string;
    contentType?: string;
    contentLength?: number;
    width?: number;
    height?: number;
    duration?: number;
    status?: number;
    statusMessage?: string;
    createdDate?: string;
}