/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscussFileDto } from './DiscussFileDto';
import type { DiscussReceiverDto } from './DiscussReceiverDto';
import type { GuildDto } from './GuildDto';
import type { GuildMemberDto } from './GuildMemberDto';
import type { UserDto } from './UserDto';

/**
 * DiscussAdminDto
 */
export type DiscussAdminDto = {
    discussId?: string;
    guildId?: string;
    guild?: GuildDto;
    title?: string;
    description?: string;
    avatarUrl?: string;
    status?: number;
    statusMessage?: string;
    creatorId?: string;
    creator?: UserDto;
    creatorMemberId?: string;
    creatorMember?: GuildMemberDto;
    isCurrentCreator?: boolean;
    createdDate?: string;
    beginDate?: string;
    endDate?: string;
    filesCount?: number;
    imageFilesCount?: number;
    audioFilesCount?: number;
    videoFilesCount?: number;
    attachmentFilesCount?: number;
    receiversCount?: number;
    viewedReceiversCount?: number;
    unviewedReceiversCount?: number;
    joinedReceiversCount?: number;
    unjoinedReceiversCount?: number;
    contentsCount?: number;
    imageFiles?: Array<DiscussFileDto>;
    audioFile?: DiscussFileDto;
    videoFile?: DiscussFileDto;
    attachmentFiles?: Array<DiscussFileDto>;
    receivers?: Array<DiscussReceiverDto>;
    hasUserViewed?: boolean;
    hasUserJoined?: boolean;
    linkUrl?: string;
    files?: Array<DiscussFileDto>;
    hasViewMembers?: Array<GuildMemberDto>;
    noViewMembers?: Array<GuildMemberDto>;
}