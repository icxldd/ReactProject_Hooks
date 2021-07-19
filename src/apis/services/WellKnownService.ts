/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TakeAppleAppSiteAssociationResponse } from '../models/TakeAppleAppSiteAssociationResponse';
import { request as __request } from '../core/request';

export class WellKnownService {

    /**
     * 获取苹果应用程序关联
     * 获取苹果应用程序关联
     * @param accept Accept Header
     * @returns TakeAppleAppSiteAssociationResponse Success
     * @throws ApiError
     */
    public static async takeAppleAppSiteAssociationappleAppSiteAssociationGet(
accept: 'application/json',
): Promise<TakeAppleAppSiteAssociationResponse> {
        const result = await __request({
            method: 'GET',
            path: `/.well-known/apple-app-site-association`,
            headers: {
                'Accept': accept,
            },
        });
        return result.body;
    }

}