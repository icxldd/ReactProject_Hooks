/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { NotificationDto } from './NotificationDto';

/**
 * NotificationFileDto
 */
export type NotificationFileDto = {
    fileId?: string;
    guildId?: string;
    guild?: GuildDto;
    notificationId?: string;
    notification?: NotificationDto;
    type?: number;
    name?: string;
    url?: string;
    previewUrl?: string;
    avatarUrl?: string;
    contentType?: string;
    contentLength?: number;
    width?: number;
    height?: number;
    duration?: number;
}