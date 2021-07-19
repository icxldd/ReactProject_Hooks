/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { GuildMemberDto } from './GuildMemberDto';
import type { InformationDto } from './InformationDto';
import type { UserDto } from './UserDto';

/**
 * InformationReceiverDto
 */
export type InformationReceiverDto = {
    receiverId?: string;
    guildId?: string;
    guild?: GuildDto;
    informationId?: string;
    information?: InformationDto;
    userId?: string;
    user?: UserDto;
    userMemberId?: string;
    userMember?: GuildMemberDto;
    hasViewed?: boolean;
    hasJoined?: boolean;
    isOnline?: boolean;
    wasOnline?: boolean;
}