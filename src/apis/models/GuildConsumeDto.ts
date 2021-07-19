/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { UserDto } from './UserDto';

/**
 * GuildConsumeDto
 */
export type GuildConsumeDto = {
    consumeId?: string;
    guildId?: string;
    guild?: GuildDto;
    type?: number;
    typeName?: string;
    amount?: number;
    remark?: string;
    ownerId?: string;
    owner?: UserDto;
    isCurrentOwner?: boolean;
    createdDate?: string;
}