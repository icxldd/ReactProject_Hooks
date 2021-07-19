/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';

/**
 * LoginAccountByWechatMiniProgramResponse
 */
export type LoginAccountByWechatMiniProgramResponse = {
    /**
     * 登录会话编号
     */
    sessionId?: string;
    /**
     * 用户编号
     */
    userId?: number;
    /**
     * 是否通过此登录创建了一个新帐户
     */
    newlyCreated?: boolean;
    /**
     * 默认选中教会ID
     */
    defaultUsingGuildId?: string;
    /**
     * 默认选中教会名字
     */
    defaultUsingGuildName?: string;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}