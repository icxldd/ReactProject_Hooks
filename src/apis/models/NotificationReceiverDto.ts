/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { GuildMemberDto } from './GuildMemberDto';
import type { NotificationDto } from './NotificationDto';
import type { UserDto } from './UserDto';

/**
 * NotificationReceiverDto
 */
export type NotificationReceiverDto = {
    receiverId?: string;
    guildId?: string;
    guild?: GuildDto;
    notificationId?: string;
    notification?: NotificationDto;
    userId?: string;
    user?: UserDto;
    userMemberId?: string;
    userMember?: GuildMemberDto;
    hasViewed?: boolean;
}