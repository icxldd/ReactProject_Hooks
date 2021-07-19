/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Object } from '../models/Object';
import type { SearchAudioFilesResponse } from '../models/SearchAudioFilesResponse';
import type { SearchImageFilesResponse } from '../models/SearchImageFilesResponse';
import type { ShowVersionResponse } from '../models/ShowVersionResponse';
import { request as __request } from '../core/request';

export class StorageService {

    /**
     * 查询一组音频
     * 查询一组音频
     * @param accept Accept Header
     * @param query 查询信息
     * @param category 分类
     * @param orderBy 排序的字段（可选值：Name, Singer, ContentType, ContentLength, CreatedDate, ModifiedDate
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns SearchAudioFilesResponse Success
     * @throws ApiError
     */
    public static async searchAudioFilesaudiosGet(
accept: 'application/json',
query?: string,
category?: string,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<SearchAudioFilesResponse> {
        const result = await __request({
            method: 'GET',
            path: `/storage/audios`,
            headers: {
                'Accept': accept,
            },
            query: {
                'Query': query,
                'Category': category,
                'OrderBy': orderBy,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 查询一组图像
     * 查询一组图像
     * @param accept Accept Header
     * @param query 查询信息
     * @param category 分类
     * @param orderBy 排序的字段（可选值：Name, ContentType, ContentLength, CreatedDate, ModifiedDate
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns SearchImageFilesResponse Success
     * @throws ApiError
     */
    public static async searchImageFilesimagesGet(
accept: 'application/json',
query?: string,
category?: string,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<SearchImageFilesResponse> {
        const result = await __request({
            method: 'GET',
            path: `/storage/images`,
            headers: {
                'Accept': accept,
            },
            query: {
                'Query': query,
                'Category': category,
                'OrderBy': orderBy,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     *  显示文件服务
     *  显示文件服务
     * @param accept Accept Header
     * @param fileName  显示文件名
     * @returns Object Success
     * @throws ApiError
     */
    public static async showFilefileshowGet(
accept: 'application/json',
fileName?: string,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/storage/file/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'fileName': fileName,
            },
        });
        return result.body;
    }

    /**
     * 显示应用程序版本
     * 显示应用程序版本
     * @param accept Accept Header
     * @param versionId 应用程序版本编号
     * @returns ShowVersionResponse Success
     * @throws ApiError
     */
    public static async showVersionversionshowGet(
accept: 'application/json',
versionId?: string,
): Promise<ShowVersionResponse> {
        const result = await __request({
            method: 'GET',
            path: `/storage/version/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'VersionId': versionId,
            },
        });
        return result.body;
    }

}