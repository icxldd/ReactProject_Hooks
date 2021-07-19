/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AlbumDto } from './AlbumDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowListAlbumResponse
 */
export type ShowListAlbumResponse = {
    /**
     * 诗歌
     */
    albums?: Array<AlbumDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}