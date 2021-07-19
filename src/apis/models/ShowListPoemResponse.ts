/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PoemDto } from './PoemDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowListPoemResponse
 */
export type ShowListPoemResponse = {
    /**
     * 诗歌
     */
    poems?: Array<PoemDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}