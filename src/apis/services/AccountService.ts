/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BindAccount } from '../models/BindAccount';
import type { BindAccountResponse } from '../models/BindAccountResponse';
import type { ChangeAccountAvatar } from '../models/ChangeAccountAvatar';
import type { ChangeAccountAvatarResponse } from '../models/ChangeAccountAvatarResponse';
import type { ChangeAccountCover } from '../models/ChangeAccountCover';
import type { ChangeAccountCoverResponse } from '../models/ChangeAccountCoverResponse';
import type { ChangeAccountDefaultGuild } from '../models/ChangeAccountDefaultGuild';
import type { ChangeAccountDefaultGuildResponse } from '../models/ChangeAccountDefaultGuildResponse';
import type { ChangeAccountDescription } from '../models/ChangeAccountDescription';
import type { ChangeAccountDescriptionResponse } from '../models/ChangeAccountDescriptionResponse';
import type { ChangeAccountDisplayName } from '../models/ChangeAccountDisplayName';
import type { ChangeAccountDisplayNameResponse } from '../models/ChangeAccountDisplayNameResponse';
import type { ChangeAccountDistrict } from '../models/ChangeAccountDistrict';
import type { ChangeAccountDistrictResponse } from '../models/ChangeAccountDistrictResponse';
import type { ChangeAccountFullName } from '../models/ChangeAccountFullName';
import type { ChangeAccountFullNameResponse } from '../models/ChangeAccountFullNameResponse';
import type { ChangeAccountIdentification } from '../models/ChangeAccountIdentification';
import type { ChangeAccountIdentificationResponse } from '../models/ChangeAccountIdentificationResponse';
import type { ChangeAccountPassword } from '../models/ChangeAccountPassword';
import type { ChangeAccountPasswordResponse } from '../models/ChangeAccountPasswordResponse';
import type { ChangeAccountSignature } from '../models/ChangeAccountSignature';
import type { ChangeAccountSignatureResponse } from '../models/ChangeAccountSignatureResponse';
import type { ClearAccountDataResponse } from '../models/ClearAccountDataResponse';
import type { LoginAccountByMobile } from '../models/LoginAccountByMobile';
import type { LoginAccountByMobileResponse } from '../models/LoginAccountByMobileResponse';
import type { LoginAccountByPassword } from '../models/LoginAccountByPassword';
import type { LoginAccountByPasswordResponse } from '../models/LoginAccountByPasswordResponse';
import type { LoginAccountByWechat } from '../models/LoginAccountByWechat';
import type { LoginAccountByWechatMiniProgram } from '../models/LoginAccountByWechatMiniProgram';
import type { LoginAccountByWechatMiniProgramResponse } from '../models/LoginAccountByWechatMiniProgramResponse';
import type { LoginAccountByWechatResponse } from '../models/LoginAccountByWechatResponse';
import type { LogoutAccountResponse } from '../models/LogoutAccountResponse';
import type { RegisterDevice } from '../models/RegisterDevice';
import type { RegisterDeviceResponse } from '../models/RegisterDeviceResponse';
import type { ResetAccountPassword } from '../models/ResetAccountPassword';
import type { ResetAccountPasswordResponse } from '../models/ResetAccountPasswordResponse';
import type { ShowAccountResponse } from '../models/ShowAccountResponse';
import type { ShowCodeToSessionResponse } from '../models/ShowCodeToSessionResponse';
import type { ShowH5AccessTokenResponse } from '../models/ShowH5AccessTokenResponse';
import type { ShowJSSDKSignatureResponse } from '../models/ShowJSSDKSignatureResponse';
import type { ShowUserInfoByUnionIdResponse } from '../models/ShowUserInfoByUnionIdResponse';
import type { UnregisterDeviceResponse } from '../models/UnregisterDeviceResponse';
import type { WechatDecrypt } from '../models/WechatDecrypt';
import type { WechatDecryptResponse } from '../models/WechatDecryptResponse';
import { request as __request } from '../core/request';

export class AccountService {

    /**
     * 账号绑定第三方账号：手机号，微信号
     * 账号绑定第三方账号：手机号，微信号
     * @param accept Accept Header
     * @param isNewAccountOfBind 是否是新用户绑定
     * @param typeOfBind 绑定类型 0:绑定手机号，1：绑定微信账号
     * @param valueOfBind 绑定的手机号|绑定的微信unionID
     * @param weChatAccessToken 微信Token（绑定微信时候填写）
     * @param weChatOpenId 微信OpenId（绑定微信时候填写）
     * @param body 
     * @returns BindAccountResponse Success
     * @throws ApiError
     */
    public static async bindAccountbindCreate(
        accept: 'application/json',
        isNewAccountOfBind?: boolean,
        typeOfBind?: number,
        valueOfBind?: string,
        weChatAccessToken?: string,
        weChatOpenId?: string,
        body?: BindAccount,
    ): Promise<BindAccountResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/account/bind`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'IsNewAccountOfBind': isNewAccountOfBind,
                'TypeOfBind': typeOfBind,
                'ValueOfBind': valueOfBind,
                'WeChatAccessToken': weChatAccessToken,
                'WeChatOpenId': weChatOpenId,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改帐户头像图片
     * 上传本地头像无须输入来源头像的地址。
     * @param accept Accept Header
     * @param avatarUrl 头像图片地址
     * @param body 
     * @returns ChangeAccountAvatarResponse Success
     * @throws ApiError
     */
    public static async changeAccountAvataravatarCreate(
        accept: 'application/json',
        avatarUrl?: string,
        body?: ChangeAccountAvatar,
    ): Promise<ChangeAccountAvatarResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/account/avatar`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'AvatarUrl': avatarUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改帐户封面图片
     * 上传本地封面无须输入来源封面的地址。
     * @param accept Accept Header
     * @param coverUrl 封面图片地址
     * @param body 
     * @returns ChangeAccountCoverResponse Success
     * @throws ApiError
     */
    public static async changeAccountCovercoverCreate(
        accept: 'application/json',
        coverUrl?: string,
        body?: ChangeAccountCover,
    ): Promise<ChangeAccountCoverResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/account/cover`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'CoverUrl': coverUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改默认使用的教会
     * 更改默认使用的教会
     * @param accept Accept Header
     * @param guildId 教会ID
     * @param body 
     * @returns ChangeAccountDefaultGuildResponse Success
     * @throws ApiError
     */
    public static async changeAccountDefaultGuilddefaultguildCreate(
        accept: 'application/json',
        guildId?: string,
        body?: ChangeAccountDefaultGuild,
    ): Promise<ChangeAccountDefaultGuildResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/account/defaultguild`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改帐户简介
     * 更改帐户简介
     * @param accept Accept Header
     * @param description 描述
     * @param body 
     * @returns ChangeAccountDescriptionResponse Success
     * @throws ApiError
     */
    public static async changeAccountDescriptiondescriptionCreate(
        accept: 'application/json',
        description?: string,
        body?: ChangeAccountDescription,
    ): Promise<ChangeAccountDescriptionResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/account/description`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'Description': description,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改帐户显示名称
     * 更改帐户显示名称
     * @param accept Accept Header
     * @param displayName 显示名称
     * @param body 
     * @returns ChangeAccountDisplayNameResponse Success
     * @throws ApiError
     */
    public static async changeAccountDisplayNamedisplaynameCreate(
        accept: 'application/json',
        displayName?: string,
        body?: ChangeAccountDisplayName,
    ): Promise<ChangeAccountDisplayNameResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/account/displayname`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'DisplayName': displayName,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改帐户所在地区
     * 更改帐户所在地区
     * @param accept Accept Header
     * @param country 国家
     * @param province 省份
     * @param city 城市
     * @param body 
     * @returns ChangeAccountDistrictResponse Success
     * @throws ApiError
     */
    public static async changeAccountDistrictdistrictCreate(
        accept: 'application/json',
        country?: string,
        province?: string,
        city?: string,
        body?: ChangeAccountDistrict,
    ): Promise<ChangeAccountDistrictResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/account/district`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'Country': country,
                'Province': province,
                'City': city,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改帐户真实姓名
     * 更改帐户真实姓名
     * @param accept Accept Header
     * @param fullName 真实姓名
     * @param body 
     * @returns ChangeAccountFullNameResponse Success
     * @throws ApiError
     */
    public static async changeAccountFullNamefullnameCreate(
        accept: 'application/json',
        fullName?: string,
        body?: ChangeAccountFullName,
    ): Promise<ChangeAccountFullNameResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/account/fullname`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'FullName': fullName,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改帐户身份证照片
     * 更改帐户身份证照片
     * @param accept Accept Header
     * @param identificationUrl 身份证照片地址
     * @param body 
     * @returns ChangeAccountIdentificationResponse Success
     * @throws ApiError
     */
    public static async changeAccountIdentificationidentificationCreate(
        accept: 'application/json',
        identificationUrl?: string,
        body?: ChangeAccountIdentification,
    ): Promise<ChangeAccountIdentificationResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/account/identification`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'IdentificationUrl': identificationUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改帐户登录密码
     * 更改帐户登录密码
     * @param accept Accept Header
     * @param password 密码
     * @param body 
     * @returns ChangeAccountPasswordResponse Success
     * @throws ApiError
     */
    public static async changeAccountPasswordpasswordCreate(
        accept: 'application/json',
        password?: string,
        body?: ChangeAccountPassword,
    ): Promise<ChangeAccountPasswordResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/account/password`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'Password': password,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 重置登录密码
     * 重置登录密码
     * @param accept Accept Header
     * @param phoneNumber 手机号码
     * @param token 验证码
     * @param password 重置的密码
     * @param body 
     * @returns ResetAccountPasswordResponse Success
     * @throws ApiError
     */
    public static async resetAccountPasswordpasswordPost(
        accept: 'application/json',
        phoneNumber?: string,
        token?: string,
        password?: string,
        body?: ResetAccountPassword,
    ): Promise<ResetAccountPasswordResponse> {
        const result = await __request({
            method: 'POST',
            path: `/account/password`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'PhoneNumber': phoneNumber,
                'Token': token,
                'Password': password,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改帐户签名
     * 更改帐户签名
     * @param accept Accept Header
     * @param signature 签名
     * @param body 
     * @returns ChangeAccountSignatureResponse Success
     * @throws ApiError
     */
    public static async changeAccountSignaturesignatureCreate(
        accept: 'application/json',
        signature?: string,
        body?: ChangeAccountSignature,
    ): Promise<ChangeAccountSignatureResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/account/signature`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'Signature': signature,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 清除用户数据
     * 清除用户数据
     * @param accept Accept Header
     * @param userAuthId 用户ID
     * @returns ClearAccountDataResponse Success
     * @throws ApiError
     */
    public static async clearAccountDataclearaccountDelete(
        accept: 'application/json',
        userAuthId?: string,
    ): Promise<ClearAccountDataResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/account/clearaccount`,
            headers: {
                'Accept': accept,
            },
            query: {
                'UserAuthId': userAuthId,
            },
        });
        return result.body;
    }

    /**
     * 退出登录
     * 退出登录
     * @param accept Accept Header
     * @param deviceToken 设备号
     * @returns LogoutAccountResponse Success
     * @throws ApiError
     */
    public static async logoutAccountauthDelete(
        accept: 'application/json',
        deviceToken?: string,
    ): Promise<LogoutAccountResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/account/auth`,
            headers: {
                'Accept': accept,
            },
            query: {
                'DeviceToken': deviceToken,
            },
        });
        return result.body;
    }

    /**
     * 注册设备号
     * 注册设备号
     * @param accept Accept Header
     * @param deviceToken 设备号
     * @param body 
     * @returns RegisterDeviceResponse Success
     * @throws ApiError
     */
    public static async registerDevicedevicePost(
        accept: 'application/json',
        deviceToken?: string,
        body?: RegisterDevice,
    ): Promise<RegisterDeviceResponse> {
        const result = await __request({
            method: 'POST',
            path: `/account/device`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'DeviceToken': deviceToken,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 注销设备号
     * 注销设备号
     * @param accept Accept Header
     * @param deviceToken 设备号
     * @returns UnregisterDeviceResponse Success
     * @throws ApiError
     */
    public static async unregisterDevicedeviceDelete(
        accept: 'application/json',
        deviceToken?: string,
    ): Promise<UnregisterDeviceResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/account/device`,
            headers: {
                'Accept': accept,
            },
            query: {
                'DeviceToken': deviceToken,
            },
        });
        return result.body;
    }

    /**
     * 显示帐户信息
     * 显示帐户信息
     * @param accept Accept Header
     * @returns ShowAccountResponse Success
     * @throws ApiError
     */
    public static async showAccountshowGet(
        accept: 'application/json',
    ): Promise<ShowAccountResponse> {
        const result = await __request({
            method: 'GET',
            path: `/account/show`,
            headers: {
                'Accept': accept,
            },
        });
        return result.body;
    }

    /**
     * 微信小程序code换sessionkey。
     * 微信小程序code换sessionkey。
     * @param accept Accept Header
     * @param jsCode jscode
     * @returns ShowCodeToSessionResponse Success
     * @throws ApiError
     */
    public static async showCodeToSessioncodeToSessionGet(
        accept: 'application/json',
        jsCode?: string,
    ): Promise<ShowCodeToSessionResponse> {
        const result = await __request({
            method: 'GET',
            path: `/account/codeToSession`,
            headers: {
                'Accept': accept,
            },
            query: {
                'js_code': jsCode,
            },
        });
        return result.body;
    }

    /**
     * 使用手机号码及验证码登录
     * 使用手机号码及验证码登录
     * @param accept Accept Header
     * @param phoneNumber 手机号码
     * @param token 验证码
     * @param deviceToken 设备号
     * @param body 
     * @returns LoginAccountByMobileResponse Success
     * @throws ApiError
     */
    public static async loginAccountByMobileauthmobilePost(
        accept: 'application/json',
        phoneNumber?: string,
        token?: string,
        deviceToken?: string,
        body?: LoginAccountByMobile,
    ): Promise<LoginAccountByMobileResponse> {
        const result = await __request({
            method: 'POST',
            path: `/account/auth/mobile`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'PhoneNumber': phoneNumber,
                'Token': token,
                'DeviceToken': deviceToken,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 使用密码登录
     * 使用密码登录
     * @param accept Accept Header
     * @param userNameOrPhoneNumber 用户名称或手机号码
     * @param password 登录密码
     * @param deviceToken 设备号
     * @param body 
     * @returns LoginAccountByPasswordResponse Success
     * @throws ApiError
     */
    public static async loginAccountByPasswordauthpasswordPost(
        accept: 'application/json',
        userNameOrPhoneNumber?: string,
        password?: string,
        deviceToken?: string,
        body?: LoginAccountByPassword,
    ): Promise<LoginAccountByPasswordResponse> {
        const result = await __request({
            method: 'POST',
            path: `/account/auth/password`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'UserNameOrPhoneNumber': userNameOrPhoneNumber,
                'Password': password,
                'DeviceToken': deviceToken,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 使用微信登录
     * 使用微信登录
     * @param accept Accept Header
     * @param unionId 微信访问unionId
     * @param wechatOpenId 微信OpenId
     * @param wechatAccessToken 微信访问Token
     * @param deviceToken 设备号
     * @param body 
     * @returns LoginAccountByWechatResponse Success
     * @throws ApiError
     */
    public static async loginAccountByWechatauthwechatPost(
        accept: 'application/json',
        unionId?: string,
        wechatOpenId?: string,
        wechatAccessToken?: string,
        deviceToken?: string,
        body?: LoginAccountByWechat,
    ): Promise<LoginAccountByWechatResponse> {
        const result = await __request({
            method: 'POST',
            path: `/account/auth/wechat`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'unionId': unionId,
                'wechatOpenId': wechatOpenId,
                'wechatAccessToken': wechatAccessToken,
                'deviceToken': deviceToken,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * H5Code显示显示
     * H5Code显示显示
     * @param accept Accept Header
     * @param code code
     * @returns ShowH5AccessTokenResponse Success
     * @throws ApiError
     */
    public static async showH5AccessTokenh5ShowGet(
        accept: 'application/json',
        code?: string,
    ): Promise<ShowH5AccessTokenResponse> {
        const result = await __request({
            method: 'GET',
            path: `/account/h5/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'code': code,
            },
        });
        return result.body;
    }

    /**
     * unionid显示用户
     * unionid显示用户
     * @param accept Accept Header
     * @param unionId unionid
     * @returns ShowUserInfoByUnionIdResponse Success
     * @throws ApiError
     */
    public static async showUserInfoByUnionIdunionidshowGet(
        accept: 'application/json',
        unionId?: string,
    ): Promise<ShowUserInfoByUnionIdResponse> {
        const result = await __request({
            method: 'GET',
            path: `/account/unionid/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'unionId': unionId,
            },
        });
        return result.body;
    }

    /**
     * 解密微信小程序unionId
     * 解密微信小程序unionId
     * @param accept Accept Header
     * @param encryptedData encryptedData
     * @param iv iv
     * @param sessionKey sessionKey
     * @param body 
     * @returns WechatDecryptResponse Success
     * @throws ApiError
     */
    public static async wechatDecryptwechatMiniProgramdecryptPost(
        accept: 'application/json',
        encryptedData?: string,
        iv?: string,
        sessionKey?: string,
        body?: WechatDecrypt,
    ): Promise<WechatDecryptResponse> {
        const result = await __request({
            method: 'POST',
            path: `/account/wechatMiniProgram/decrypt`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'encryptedData': encryptedData,
                'iv': iv,
                'sessionKey': sessionKey,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 微信小程序登陆
     * 微信小程序登陆
     * @param accept Accept Header
     * @param unionId 微信unionId
     * @param wechatOpenId 微信OpenId
     * @param nikeName 名字
     * @param avatarUrl 头像
     * @param deviceToken 设备号
     * @param body 
     * @returns LoginAccountByWechatMiniProgramResponse Success
     * @throws ApiError
     */
    public static async loginAccountByWechatMiniProgramauthwechatminiProgramPost(
        accept: 'application/json',
        unionId?: string,
        wechatOpenId?: string,
        nikeName?: string,
        avatarUrl?: string,
        deviceToken?: string,
        body?: LoginAccountByWechatMiniProgram,
    ): Promise<LoginAccountByWechatMiniProgramResponse> {
        const result = await __request({
            method: 'POST',
            path: `/account/auth/wechat/miniProgram`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'unionId': unionId,
                'wechatOpenId': wechatOpenId,
                'nikeName': nikeName,
                'avatarUrl': avatarUrl,
                'deviceToken': deviceToken,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 获取jssdk需要的签名
     * 获取jssdk需要的签名
     * @param accept Accept Header
     * @param url url
     * @returns ShowJSSDKSignatureResponse Success
     * @throws ApiError
     */
    public static async showJssdkSignaturejssdksignatureshowGet(
        accept: 'application/json',
        url?: string,
    ): Promise<ShowJSSDKSignatureResponse> {
        const result = await __request({
            method: 'GET',
            path: `/account/jssdk/signature/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'url': url,
            },
        });
        return result.body;
    }

}