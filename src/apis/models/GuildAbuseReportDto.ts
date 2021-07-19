/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildDto } from './GuildDto';
import type { UserDto } from './UserDto';

/**
 * GuildAbuseReportDto
 */
export type GuildAbuseReportDto = {
    reportId?: string;
    guildId?: string;
    guild?: GuildDto;
    category?: string;
    description?: string;
    ownerId?: number;
    owner?: UserDto;
}