/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ViewManagerUserViolationList
 */
export type ViewManagerUserViolationList = {
    /**
     * 用户编号
     */
    user?: string;
    /**
     * 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
     */
    type?: number;
    /**
     * 页数
     */
    page?: number;
}