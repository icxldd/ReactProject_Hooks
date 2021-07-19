/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussContentDto } from './DiscussContentDto';
import type { DiscussDto } from './DiscussDto';
import type { GuildDto } from './GuildDto';
import type { GuildMemberDto } from './GuildMemberDto';
import type { UserDto } from './UserDto';

/**
 * DiscussContentCommentDto
 */
export type DiscussContentCommentDto = {
    commentId?: string;
    guildId?: string;
    guild?: GuildDto;
    discussId?: string;
    discuss?: DiscussDto;
    contentId?: string;
    content?: DiscussContentDto;
    parentCommentId?: string;
    parentComment?: DiscussContentCommentDto;
    userId?: string;
    user?: UserDto;
    userMemberId?: string;
    userMember?: GuildMemberDto;
    isCurrentUser?: boolean;
    description?: string;
    status?: number;
    statusMessage?: string;
    createdDate?: string;
}