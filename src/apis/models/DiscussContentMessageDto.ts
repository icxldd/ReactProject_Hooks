/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussContentDto } from './DiscussContentDto';
import type { DiscussDto } from './DiscussDto';
import type { GuildDto } from './GuildDto';
import type { GuildMemberDto } from './GuildMemberDto';
import type { UserDto } from './UserDto';

/**
 * DiscussContentMessageDto
 */
export type DiscussContentMessageDto = {
    messageId?: string;
    guildId?: string;
    guild?: GuildDto;
    discussId?: string;
    discuss?: DiscussDto;
    contentId?: string;
    content?: DiscussContentDto;
    parentMessageId?: string;
    parentMessage?: DiscussContentMessageDto;
    type?: number;
    userId?: string;
    user?: UserDto;
    userMemberId?: string;
    userMember?: GuildMemberDto;
    isCurrentUser?: boolean;
    description?: string;
    createdDate?: string;
}