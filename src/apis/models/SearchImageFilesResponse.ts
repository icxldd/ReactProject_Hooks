/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';

/**
 * SearchImageFilesResponse
 */
export type SearchImageFilesResponse = {
    /**
     * 一组图像地址
     */
    urls?: Array<string>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}