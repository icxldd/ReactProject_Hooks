/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';
import type { VersionDto } from './VersionDto';

/**
 * ShowVersionResponse
 */
export type ShowVersionResponse = {
    /**
     * 应用程序版本信息
     */
    version?: VersionDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}