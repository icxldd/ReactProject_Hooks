/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AlbumDetailDto } from './AlbumDetailDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowAlbumSongResponse
 */
export type ShowAlbumSongResponse = {
    /**
     * 诗歌详情
     */
    albumSong?: AlbumDetailDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}