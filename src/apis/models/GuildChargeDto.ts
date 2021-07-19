/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { UserDto } from './UserDto';

/**
 * GuildChargeDto
 */
export type GuildChargeDto = {
    chargeId?: string;
    guildId?: string;
    guild?: GuildDto;
    referenceChargeId?: string;
    referenceCharge?: GuildChargeDto;
    type?: number;
    typeName?: string;
    amount?: number;
    consumedMoney?: number;
    remark?: string;
    ownerId?: string;
    owner?: UserDto;
    isCurrentOwner?: boolean;
    createdDate?: string;
}