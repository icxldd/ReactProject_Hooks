/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { GuildMemberDto } from './GuildMemberDto';
import type { LivecastFileDto } from './LivecastFileDto';
import type { LivecastReceiverDto } from './LivecastReceiverDto';
import type { UserDto } from './UserDto';

/**
 * LivecastAdminDto
 */
export type LivecastAdminDto = {
    livecastId?: string;
    guildId?: string;
    guild?: GuildDto;
    identifier?: string;
    title?: string;
    description?: string;
    speaker?: string;
    avatarUrl?: string;
    rtmpPushUrl?: string;
    rtmpPlayUrl?: string;
    hlsPlayUrl?: string;
    recordUrl?: string;
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
    onlineReceiversCount?: number;
    wasOnlineReceiversCount?: number;
    imageFiles?: Array<LivecastFileDto>;
    audioFiles?: Array<LivecastFileDto>;
    videoFiles?: Array<LivecastFileDto>;
    attachmentFiles?: Array<LivecastFileDto>;
    receivers?: Array<LivecastReceiverDto>;
    hasUserViewed?: boolean;
    hasUserJoined?: boolean;
    linkUrl?: string;
    flux?: number;
    files?: Array<LivecastFileDto>;
    hasViewMembers?: Array<GuildMemberDto>;
    noViewMembers?: Array<GuildMemberDto>;
}