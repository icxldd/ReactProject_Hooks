/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';

/**
 * GenerateGuildCodeResponse
 */
export type GenerateGuildCodeResponse = {
    /**
     * 邀请码
     */
    code?: string;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}