/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PoemDetailDto } from './PoemDetailDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowListPoemDetailResponse
 */
export type ShowListPoemDetailResponse = {
    /**
     * 诗歌详情
     */
    poemDetails?: Array<PoemDetailDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}