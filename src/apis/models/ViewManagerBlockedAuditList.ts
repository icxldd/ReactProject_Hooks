/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ViewManagerBlockedAuditList
 */
export type ViewManagerBlockedAuditList = {
    /**
     * 教会编号
     */
    guild?: string;
    /**
     * 用户编号
     */
    user?: string;
    /**
     * 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
     */
    type?: number;
    /**
     * 状态（-2: 已屏蔽; -1: 已解散; 0: 正常; 1: 未开始/未发布; 2: 已结束; 3: 已中断）
     */
    status?: number;
    /**
     * 页数
     */
    page?: number;
}