/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { UserDto } from './UserDto';

/**
 * GuildMemberDto
 */
export type GuildMemberDto = {
    memberId?: string;
    guildId?: string;
    guild?: GuildDto;
    userId?: string;
    user?: UserDto;
    nickname?: string;
    avatarUrl?: string;
    phoneNumber?: string;
    role?: number;
    /**
     * 状态。（-3：已拒绝; -2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     */
    status?: number;
    statusMessage?: string;
    modifiedDate?: string;
}