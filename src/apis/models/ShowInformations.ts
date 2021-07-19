/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ShowInformations
 */
export type ShowInformations = {
    /**
     * 教会编号
     */
    guildId?: string;
    /**
     * 类型（0: 通知; 1: 直播; 2: 讨论; 3: 团契; 4: 系统消息）
     */
    type?: number;
    /**
     * 状态（0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
     */
    status?: number;
    /**
     * 排序的字段（可选值：GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate
     */
    orderBy?: string;
    /**
     * 是否按降序排序
     */
    descending?: boolean;
    /**
     * 忽略的行数
     */
    skip?: number;
    /**
     * 获取的行数
     */
    limit?: number;
}