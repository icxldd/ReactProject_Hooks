/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountAdminDto } from './AccountAdminDto';
import type { DiscussAdminDto } from './DiscussAdminDto';
import type { GuildLivecastDto } from './GuildLivecastDto';
import type { NotificationAdminDto } from './NotificationAdminDto';

/**
 * ShowSystemDetailAdminDto
 */
export type ShowSystemDetailAdminDto = {
    todayAccounts?: Array<AccountAdminDto>;
    todayLivecasts?: Array<GuildLivecastDto>;
    todayNotifications?: Array<NotificationAdminDto>;
    todayDiscuss?: Array<DiscussAdminDto>;
    yesterdayAccounts?: Array<AccountAdminDto>;
    yesterdayLivecasts?: Array<GuildLivecastDto>;
    yesterdayNotifications?: Array<NotificationAdminDto>;
    yesterdayDiscuss?: Array<DiscussAdminDto>;
}