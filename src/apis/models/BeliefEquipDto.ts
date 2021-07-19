/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountDto } from './AccountDto';
import type { BeliefEquipFileDto } from './BeliefEquipFileDto';
import type { BeliefEquipViewItemDto } from './BeliefEquipViewItemDto';
import type { Dictionary_String_String_ } from './Dictionary_String_String_';
import type { GuildDto } from './GuildDto';

/**
 * BeliefEquipDto
 */
export type BeliefEquipDto = {
    id?: string;
    guildId?: string;
    creatorAuthId?: string;
    publishedDate?: string;
    worshipOwner?: string;
    title?: string;
    description?: string;
    avatarUrl?: string;
    isImportLive?: boolean;
    playBackUrl?: string;
    liveCastId?: string;
    typeId?: string;
    type?: number;
    createdDate?: string;
    modifiedDate?: string;
    status?: number;
    statusMessage?: string;
    hasAudited?: boolean;
    auditMessage?: string;
    auditorAuthId?: number;
    auditDate?: string;
    blockedDate?: string;
    isFeatured?: boolean;
    featuredExpiryDate?: string;
    meta?: Dictionary_String_String_;
    isCurrentCreator?: boolean;
    filesCount?: number;
    imageFilesCount?: number;
    audioFilesCount?: number;
    videoFilesCount?: number;
    attachmentFilesCount?: number;
    imageFiles?: Array<BeliefEquipFileDto>;
    audioFiles?: Array<BeliefEquipFileDto>;
    videoFiles?: Array<BeliefEquipFileDto>;
    attachmentFiles?: Array<BeliefEquipFileDto>;
    hasUserViewed?: boolean;
    hasUserJoined?: boolean;
    /**
     * 浏览量总数
     */
    allViewedCount?: number;
    /**
     * 今日浏览数
     */
    toDayViewCount?: number;
    /**
     * 已查看人员总数
     */
    viewedPersonCount?: number;
    /**
     * 未查看人员总数
     */
    unViewedPersonCount?: number;
    /**
     * 所有查看人员信息
     */
    viewAuth?: Array<AccountDto>;
    /**
     * 未查看人员信息
     */
    unViewAuth?: Array<AccountDto>;
    /**
     * 所有查看人员信息
     */
    allViewAuth?: Array<BeliefEquipViewItemDto>;
    linkUrl?: string;
    guildDto?: GuildDto;
}