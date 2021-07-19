/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ShowListAlbumDetail
 */
export type ShowListAlbumDetail = {
    /**
     * albumId
     */
    albumId?: number;
    /**
     * 支持字段[songName,fristLetter,category]查询信息
     */
    search_Word?: string;
    /**
     * 是否按降序排序。默认为false
     */
    descending?: boolean;
    /**
     * 支持字段【timeStamp,orderId,fristLetter】排序。默认为orderId
     */
    sortName?: string;
    /**
     * 忽略的行数
     */
    skip?: number;
    /**
     * 获取的行数
     */
    limit?: number;
}