/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HealthVerifyResponse } from '../models/HealthVerifyResponse';
import type { ShowTestResponse } from '../models/ShowTestResponse';
import { request as __request } from '../core/request';

export class TestService {

    /**
     * 健康检查
     * 健康检查。
     * @param accept Accept Header
     * @returns HealthVerifyResponse Success
     * @throws ApiError
     */
    public static async healthVerifyhealthGet(
accept: 'application/json',
): Promise<HealthVerifyResponse> {
        const result = await __request({
            method: 'GET',
            path: `/test/health`,
            headers: {
                'Accept': accept,
            },
        });
        return result.body;
    }

    /**
     * 测试接口
     * 测试接口
     * @param accept Accept Header
     * @returns ShowTestResponse Success
     * @throws ApiError
     */
    public static async showTestshowGet(
accept: 'application/json',
): Promise<ShowTestResponse> {
        const result = await __request({
            method: 'GET',
            path: `/test/show`,
            headers: {
                'Accept': accept,
            },
        });
        return result.body;
    }

}