/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';

/**
 * GuildTotalAmountDto
 */
export type GuildTotalAmountDto = {
    guildId?: string;
    guild?: GuildDto;
    chargeMoney?: number;
    consumeMoney?: number;
    remainMoney?: number;
    chargeFlux?: number;
    consumeFlux?: number;
    remainFlux?: number;
    chargeTime?: number;
    consumeTime?: number;
    remainTime?: number;
}