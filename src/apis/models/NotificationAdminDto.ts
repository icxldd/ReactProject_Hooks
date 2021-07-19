/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { GuildMemberDto } from './GuildMemberDto';
import type { NotificationFileDto } from './NotificationFileDto';
import type { NotificationReceiverDto } from './NotificationReceiverDto';
import type { UserDto } from './UserDto';

/**
 * NotificationAdminDto
 */
export type NotificationAdminDto = {
    notificationId?: string;
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
    filesCount?: number;
    imageFilesCount?: number;
    audioFilesCount?: number;
    videoFilesCount?: number;
    attachmentFilesCount?: number;
    receiversCount?: number;
    viewedReceiversCount?: number;
    unviewedReceiversCount?: number;
    imageFiles?: Array<NotificationFileDto>;
    audioFile?: NotificationFileDto;
    videoFile?: NotificationFileDto;
    attachmentFiles?: Array<NotificationFileDto>;
    receivers?: Array<NotificationReceiverDto>;
    hasUserViewed?: boolean;
    hasUserJoined?: boolean;
    linkUrl?: string;
    files?: Array<NotificationFileDto>;
    hasViewMembers?: Array<GuildMemberDto>;
    noViewMembers?: Array<GuildMemberDto>;
}