/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';

/**
 * GuildTotalFluxDto
 */
export type GuildTotalFluxDto = {
    guildId?: string;
    guild?: GuildDto;
    chargeFlux?: number;
    consumeFlux?: number;
    remainFlux?: number;
}