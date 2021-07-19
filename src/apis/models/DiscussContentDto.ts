/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussContentCommentDto } from './DiscussContentCommentDto';
import type { DiscussContentFileDto } from './DiscussContentFileDto';
import type { DiscussContentLikeDto } from './DiscussContentLikeDto';
import type { DiscussDto } from './DiscussDto';
import type { GuildDto } from './GuildDto';
import type { GuildMemberDto } from './GuildMemberDto';
import type { UserDto } from './UserDto';

/**
 * DiscussContentDto
 */
export type DiscussContentDto = {
    contentId?: string;
    guildId?: string;
    guild?: GuildDto;
    discussId?: string;
    discuss?: DiscussDto;
    userId?: string;
    user?: UserDto;
    userMemberId?: string;
    userMember?: GuildMemberDto;
    isCurrentUser?: boolean;
    type?: number;
    description?: string;
    status?: number;
    statusMessage?: string;
    createdDate?: string;
    filesCount?: number;
    imageFilesCount?: number;
    audioFilesCount?: number;
    videoFilesCount?: number;
    attachmentFilesCount?: number;
    likesCount?: number;
    commentsCount?: number;
    imageFiles?: Array<DiscussContentFileDto>;
    audioFile?: DiscussContentFileDto;
    videoFile?: DiscussContentFileDto;
    attachmentFile?: DiscussContentFileDto;
    likes?: Array<DiscussContentLikeDto>;
    comments?: Array<DiscussContentCommentDto>;
    hasUserLiked?: boolean;
    hasUserCommented?: boolean;
}