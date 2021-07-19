/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AlbumDetailDto } from './AlbumDetailDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowListAlbumDetailResponse
 */
export type ShowListAlbumDetailResponse = {
    /**
     * 诗歌详情
     */
    albumDetails?: Array<AlbumDetailDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}