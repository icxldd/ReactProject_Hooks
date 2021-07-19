/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountDto } from './AccountDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowAccountResponse
 */
export type ShowAccountResponse = {
    /**
     * 帐户信息
     */
    account?: AccountDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
    /**
     * 默认选中教会ID
     */
    defaultUsingGuildId?: string;
    /**
     * 默认选中教会名字
     */
    defaultUsingGuildName?: string;
}