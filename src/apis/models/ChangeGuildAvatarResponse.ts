/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ChangeGuildAvatarResponse
 */
export type ChangeGuildAvatarResponse = {
    /**
     * 教会信息
     */
    guild?: GuildDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}