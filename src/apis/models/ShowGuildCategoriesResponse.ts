/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildCategoryDto } from './GuildCategoryDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowGuildCategoriesResponse
 */
export type ShowGuildCategoriesResponse = {
    /**
     * 一组教会分类信息
     */
    categories?: Array<GuildCategoryDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}