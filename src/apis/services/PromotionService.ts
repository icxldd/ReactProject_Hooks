/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Object } from '../models/Object';
import { request as __request } from '../core/request';

export class PromotionService {

    /**
     * 查看加入教会的身份资料
     * 查看加入教会的身份资料
     * @param accept Accept Header
     * @param guild 教会编号
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewGuildMemberJoinjoinviewGet(
accept: 'application/json',
guild?: string,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/promotion/join/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'guild': guild,
            },
        });
        return result.body;
    }

    /**
     * 查看加入教会的结果
     * 查看加入教会的结果
     * @param accept Accept Header
     * @param guild 教会编号
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewGuildMemberResultresultviewGet(
accept: 'application/json',
guild?: string,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/promotion/result/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'guild': guild,
            },
        });
        return result.body;
    }

    /**
     * 查看加入教会的邀请函
     * 查看加入教会的邀请函
     * @param accept Accept Header
     * @param guild 教会编号
     * @param pastor 牧师编号
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewGuildMemberSignupsignupviewGet(
accept: 'application/json',
guild?: string,
pastor?: string,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/promotion/signup/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'guild': guild,
                'pastor': pastor,
            },
        });
        return result.body;
    }

}