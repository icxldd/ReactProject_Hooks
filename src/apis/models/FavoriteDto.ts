/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { InformationDto } from './InformationDto';
import type { UserDto } from './UserDto';

/**
 * FavoriteDto
 */
export type FavoriteDto = {
    favoriteId?: string;
    guildId?: string;
    guild?: GuildDto;
    informationId?: string;
    information?: InformationDto;
    userId?: string;
    user?: UserDto;
    createdDate?: string;
}