/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Object } from './Object';

/**
 * AccountAdminDto
 */
export type AccountAdminDto = {
    userAuthId?: string;
    nickName?: string;
    ownerGuildCount?: number;
    joinGuildCount?: number;
    isCloudChurchAdmin?: boolean;
    lastUsingGuildId?: string;
    userCreatedTime?: string;
    notificationPublishCount?: number;
    discussPublishCount?: number;
    livecastPublishCount?: number;
    violationCount?: number;
    phoneNumber?: string;
    avatarUrl?: string;
    files?: Object;
}