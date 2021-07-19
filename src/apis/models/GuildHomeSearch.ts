/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * GuildHomeSearch
 */
export type GuildHomeSearch = {
    /**
     * *教会Id
     */
    guildId?: string;
    /**
     * 搜索关键字
     */
    keyWord?: string;
    /**
     * 状态。（-2: 已屏蔽; -1: 已删除; 0: 进行中（默认）; 1: 未开始; 2: 已结束; 3: 已中断）
     */
    status?: number;
    /**
     * modifiedDate(默认),createdDate,status,viewCount(查看人数),type(0: 通知; 1: 直播; 2: 讨论)
     */
    orderBy?: string;
    /**
     * 是否倒序：是（默认），否
     */
    desc?: boolean;
    /**
     * 跳过条数(默认：0)
     */
    skip?: number;
    /**
     * 获取条数(默认：5)
     */
    limit?: number;
    /**
     * 文本高亮前缀(默认：&lt;highlightcolor&gt;)
     */
    textHighlingPreSuffix?: string;
    /**
     * 文本高亮后缀(默认：&lt;/highlightcolor&gt;)
     */
    textHighlingAfterSuffix?: string;
}