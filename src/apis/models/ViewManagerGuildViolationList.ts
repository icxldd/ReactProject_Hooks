/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ViewManagerGuildViolationList
 */
export type ViewManagerGuildViolationList = {
    /**
     * 教会编号
     */
    guild?: string;
    /**
     * 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
     */
    type?: number;
    /**
     * 页数
     */
    page?: number;
}