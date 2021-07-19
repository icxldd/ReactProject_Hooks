/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';

/**
 * BindAccountResponse
 */
export type BindAccountResponse = {
    /**
     * 当前绑定账号是否为新账号
     */
    bindAccountForNew?: boolean;
    weChatOpenId?: string;
    weChatToken?: string;
    phoneNumber?: string;
    unionID?: string;
    userAuthId?: string;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}