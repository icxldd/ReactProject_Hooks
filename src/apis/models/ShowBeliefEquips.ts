/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ShowBeliefEquips
 */
export type ShowBeliefEquips = {
    /**
     * *教会编号
     */
    guildId?: string;
    /**
     * *信仰装备类型 （1.主日敬拜|聚会 2.讲道 3.唱诗 4.祷告 5.其它）
     */
    type?: number;
    /**
     * -2: 已屏蔽; -1: 已删除; 0: 正常; 1: 等待发布
     */
    status?: number;
    /**
     * 排序的字段（可选值：GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate)（默认：CreatedDate）
     */
    orderBy?: string;
    /**
     * 是否按降序排序（默认：是）
     */
    descending?: boolean;
    /**
     * 忽略的行数（默认：0）
     */
    skip?: number;
    /**
     * 获取的行数（默认：5;不填取全部）
     */
    limit?: number;
}