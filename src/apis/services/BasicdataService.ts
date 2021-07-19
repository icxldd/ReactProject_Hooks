/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShowAlbumSongResponse } from '../models/ShowAlbumSongResponse';
import type { ShowListAlbumDetailResponse } from '../models/ShowListAlbumDetailResponse';
import type { ShowListAlbumResponse } from '../models/ShowListAlbumResponse';
import type { ShowListPoemDetailResponse } from '../models/ShowListPoemDetailResponse';
import type { ShowListPoemResponse } from '../models/ShowListPoemResponse';
import { request as __request } from '../core/request';

export class BasicdataService {

    /**
     * 查询某个专辑歌曲
     * 查询某个专辑歌曲
     * @param accept Accept Header
     * @param songId songId
     * @returns ShowAlbumSongResponse Success
     * @throws ApiError
     */
    public static async showAlbumSonglistalbumsongGet(
accept: 'application/json',
songId?: number,
): Promise<ShowAlbumSongResponse> {
        const result = await __request({
            method: 'GET',
            path: `/basicdata/listalbum/song`,
            headers: {
                'Accept': accept,
            },
            query: {
                'songId': songId,
            },
        });
        return result.body;
    }

    /**
     * 查询一组专辑歌曲
     * 查询一组专辑歌曲
     * @param accept Accept Header
     * @param albumId albumId
     * @param searchWord 支持字段[songName,fristLetter,category]查询信息
     * @param descending 是否按降序排序。默认为false
     * @param sortName 支持字段【timeStamp,orderId,fristLetter】排序。默认为orderId
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ShowListAlbumDetailResponse Success
     * @throws ApiError
     */
    public static async showListAlbumDetaillistalbumdetailGet(
accept: 'application/json',
albumId?: number,
searchWord?: string,
descending?: boolean,
sortName?: string,
skip?: number,
limit?: number,
): Promise<ShowListAlbumDetailResponse> {
        const result = await __request({
            method: 'GET',
            path: `/basicdata/listalbum/detail`,
            headers: {
                'Accept': accept,
            },
            query: {
                'albumId': albumId,
                'search_Word': searchWord,
                'Descending': descending,
                'SortName': sortName,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 查询一组专辑
     * 查询一组专辑
     * @param accept Accept Header
     * @param searchWord 支持字段[alibumName,alibumRemark]查询信息
     * @param descending 是否按降序排序。默认为false
     * @param sortName 支持字段【timeStamp,orderId】排序。默认为orderId
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ShowListAlbumResponse Success
     * @throws ApiError
     */
    public static async showListAlbumlistalbumGet(
accept: 'application/json',
searchWord?: string,
descending?: boolean,
sortName?: string,
skip?: number,
limit?: number,
): Promise<ShowListAlbumResponse> {
        const result = await __request({
            method: 'GET',
            path: `/basicdata/listalbum`,
            headers: {
                'Accept': accept,
            },
            query: {
                'search_Word': searchWord,
                'Descending': descending,
                'SortName': sortName,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 查询一组诗歌详情
     * 查询一组诗歌详情
     * @param accept Accept Header
     * @param poemId poemId
     * @param searchWord searchWord
     * @param descending 是否按降序排序-index排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ShowListPoemDetailResponse Success
     * @throws ApiError
     */
    public static async showListPoemDetaillistpoemdetailGet(
accept: 'application/json',
poemId?: number,
searchWord?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ShowListPoemDetailResponse> {
        const result = await __request({
            method: 'GET',
            path: `/basicdata/listpoemdetail`,
            headers: {
                'Accept': accept,
            },
            query: {
                'poemId': poemId,
                'searchWord': searchWord,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 查询一组诗歌
     * 查询一组诗歌
     * @param accept Accept Header
     * @param bookName 查询信息
     * @param descending 是否按降序排序-时间排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ShowListPoemResponse Success
     * @throws ApiError
     */
    public static async showListPoemlistpoemGet(
accept: 'application/json',
bookName?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ShowListPoemResponse> {
        const result = await __request({
            method: 'GET',
            path: `/basicdata/listpoem`,
            headers: {
                'Accept': accept,
            },
            query: {
                'BookName': bookName,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

}