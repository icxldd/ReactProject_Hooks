/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildMemberDto } from './GuildMemberDto';
import type { LivecastDto } from './LivecastDto';

/**
 * RoomDto
 */
export type RoomDto = {
    /**
     * 在线教会成员
     */
    guildMembers?: Array<GuildMemberDto>;
    /**
     * 直播信息
     */
    livecastDto?: LivecastDto;
    /**
     * 在线设备总数
     */
    onlineSumDeviceCountByRoom?: number;
    /**
     * 在线教会成员总数
     */
    onlineSumCountByRoom?: number;
    /**
     * 在线观众总数
     */
    onlineLookCountByRoom?: number;
    /**
     * 在线管理员总数
     */
    onlineAdminCountByRoom?: number;
}