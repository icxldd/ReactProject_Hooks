/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RequestSecurityToken } from '../models/RequestSecurityToken';
import type { RequestSecurityTokenResponse } from '../models/RequestSecurityTokenResponse';
import type { TakeUploadTokenForQiniuResponse } from '../models/TakeUploadTokenForQiniuResponse';
import type { VerifySecurityToken } from '../models/VerifySecurityToken';
import type { VerifySecurityTokenResponse } from '../models/VerifySecurityTokenResponse';
import { request as __request } from '../core/request';

export class SecurityService {

    /**
     * 请求发送验证码
     * 请求发送验证码
     * @param accept Accept Header
     * @param stampId 安全戳标识（手机号码或电子邮件地址）
     * @param type 标识类型（0: 手机号码;1: 电子邮件）
     * @param purpose 验证码用途（可选的值：Login, Register, Bind, ResetPassword, Invite）
     * @param body 
     * @returns RequestSecurityTokenResponse Success
     * @throws ApiError
     */
    public static async requestSecurityTokentokenPost(
accept: 'application/json',
stampId?: string,
type?: number,
purpose?: string,
body?: RequestSecurityToken,
): Promise<RequestSecurityTokenResponse> {
        const result = await __request({
            method: 'POST',
            path: `/security/token`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'StampId': stampId,
                'Type': type,
                'Purpose': purpose,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 获取七牛云上传凭证
     * 获取七牛云上传凭证
     * @param accept Accept Header
     * @param keyToOverwrite 要覆盖的关键字
     * @returns TakeUploadTokenForQiniuResponse Success
     * @throws ApiError
     */
    public static async takeUploadTokenForQiniuqiniuuploadtokenGet(
accept: 'application/json',
keyToOverwrite?: string,
): Promise<TakeUploadTokenForQiniuResponse> {
        const result = await __request({
            method: 'GET',
            path: `/security/qiniu/uploadtoken`,
            headers: {
                'Accept': accept,
            },
            query: {
                'KeyToOverwrite': keyToOverwrite,
            },
        });
        return result.body;
    }

    /**
     * 校验验证码
     * 校验验证码
     * @param accept Accept Header
     * @param stampId 安全戳标识（手机号码或电子邮件地址）
     * @param type 标识类型（0: 手机号码;1: 电子邮件）
     * @param purpose 验证码用途（可选的值：Login, Register, Bind, ResetPassword, Invite）
     * @param token 验证码
     * @param body 
     * @returns VerifySecurityTokenResponse Success
     * @throws ApiError
     */
    public static async verifySecurityTokentokenverifyPost(
accept: 'application/json',
stampId?: string,
type?: number,
purpose?: string,
token?: string,
body?: VerifySecurityToken,
): Promise<VerifySecurityTokenResponse> {
        const result = await __request({
            method: 'POST',
            path: `/security/token/verify`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'StampId': stampId,
                'Type': type,
                'Purpose': purpose,
                'Token': token,
            },
            body: body,
        });
        return result.body;
    }

}