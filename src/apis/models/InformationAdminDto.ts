/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { GuildMemberDto } from './GuildMemberDto';
import type { InformationFileDto } from './InformationFileDto';
import type { UserDto } from './UserDto';

/**
 * InformationAdminDto
 */
export type InformationAdminDto = {
    informationId?: string;
    guildId?: string;
    guild?: GuildDto;
    type?: number;
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
    isFeatured?: boolean;
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
    contentsCount?: number;
    imageFiles?: Array<InformationFileDto>;
    audioFiles?: Array<InformationFileDto>;
    videoFiles?: Array<InformationFileDto>;
    attachmentFiles?: Array<InformationFileDto>;
    hasUserViewed?: boolean;
    hasUserJoined?: boolean;
    mediaUrl?: string;
    isRedirect?: boolean;
    linkUrl?: string;
    files?: Array<InformationFileDto>;
    hasViewMembers?: Array<GuildMemberDto>;
    noViewMembers?: Array<GuildMemberDto>;
}