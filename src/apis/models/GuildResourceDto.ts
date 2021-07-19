/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * GuildResourceDto
 */
export type GuildResourceDto = {
    id?: string;
    guildId?: string;
    createdAuthUserId?: string;
    /**
     * 通知讨论直播才有值，其它为null
     */
    ownerMemberIds?: string;
    /**
     * 类型（0: 通知; 1: 直播; 2: 讨论; 3: 文件; 4: 教会成员;5：主日聚会）
     */
    type?: number;
    title?: string;
    description?: string;
    highlightTitle?: string;
    highlightDescription?: string;
    avatarUrl?: string;
    status?: number;
    createdDate?: string;
    modifiedDate?: string;
    /**
     * 已查看人员总数
     */
    viewCount?: number;
}