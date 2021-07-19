/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowIsGuildMemberResponse
 */
export type ShowIsGuildMemberResponse = {
    /**
     * 成员状态
     */
    memberStatus?: number;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}