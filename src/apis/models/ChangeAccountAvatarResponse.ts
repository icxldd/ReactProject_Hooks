/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountDto } from './AccountDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ChangeAccountAvatarResponse
 */
export type ChangeAccountAvatarResponse = {
    /**
     * 帐户信息
     */
    account?: AccountDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}