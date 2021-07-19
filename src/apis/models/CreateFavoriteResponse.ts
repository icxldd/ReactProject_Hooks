/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FavoriteDto } from './FavoriteDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * CreateFavoriteResponse
 */
export type CreateFavoriteResponse = {
    /**
     * 收藏信息
     */
    favorite?: FavoriteDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}