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
     * ???????????????????????????????????????????????????
     * ???????????????????????????????????????????????????
     * @param accept Accept Header
     * @param isNewAccountOfBind ????????????????????????
     * @param typeOfBind ???????????? 0:??????????????????1?????????????????????
     * @param valueOfBind ??????????????????|???????????????unionID
     * @param weChatAccessToken ??????Token??????????????????????????????
     * @param weChatOpenId ??????OpenId??????????????????????????????
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
     * ????????????????????????
     * ??????????????????????????????????????????????????????
     * @param accept Accept Header
     * @param avatarUrl ??????????????????
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
     * ????????????????????????
     * ??????????????????????????????????????????????????????
     * @param accept Accept Header
     * @param coverUrl ??????????????????
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
     * ???????????????????????????
     * ???????????????????????????
     * @param accept Accept Header
     * @param guildId ??????ID
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
     * ??????????????????
     * ??????????????????
     * @param accept Accept Header
     * @param description ??????
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
     * ????????????????????????
     * ????????????????????????
     * @param accept Accept Header
     * @param displayName ????????????
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
     * ????????????????????????
     * ????????????????????????
     * @param accept Accept Header
     * @param country ??????
     * @param province ??????
     * @param city ??????
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
     * ????????????????????????
     * ????????????????????????
     * @param accept Accept Header
     * @param fullName ????????????
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
     * ???????????????????????????
     * ???????????????????????????
     * @param accept Accept Header
     * @param identificationUrl ?????????????????????
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
     * ????????????????????????
     * ????????????????????????
     * @param accept Accept Header
     * @param password ??????
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
     * ??????????????????
     * ??????????????????
     * @param accept Accept Header
     * @param phoneNumber ????????????
     * @param token ?????????
     * @param password ???????????????
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
     * ??????????????????
     * ??????????????????
     * @param accept Accept Header
     * @param signature ??????
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
     * ??????????????????
     * ??????????????????
     * @param accept Accept Header
     * @param userAuthId ??????ID
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param deviceToken ?????????
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
     * ???????????????
     * ???????????????
     * @param accept Accept Header
     * @param deviceToken ?????????
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
     * ???????????????
     * ???????????????
     * @param accept Accept Header
     * @param deviceToken ?????????
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
     * ??????????????????
     * ??????????????????
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
     * ???????????????code???sessionkey???
     * ???????????????code???sessionkey???
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
     * ????????????????????????????????????
     * ????????????????????????????????????
     * @param accept Accept Header
     * @param phoneNumber ????????????
     * @param token ?????????
     * @param deviceToken ?????????
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
     * ??????????????????
     * ??????????????????
     * @param accept Accept Header
     * @param userNameOrPhoneNumber ???????????????????????????
     * @param password ????????????
     * @param deviceToken ?????????
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
     * ??????????????????
     * ??????????????????
     * @param accept Accept Header
     * @param unionId ????????????unionId
     * @param wechatOpenId ??????OpenId
     * @param wechatAccessToken ????????????Token
     * @param deviceToken ?????????
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
     * H5Code????????????
     * H5Code????????????
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
     * unionid????????????
     * unionid????????????
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
     * ?????????????????????unionId
     * ?????????????????????unionId
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
     * ?????????????????????
     * ?????????????????????
     * @param accept Accept Header
     * @param unionId ??????unionId
     * @param wechatOpenId ??????OpenId
     * @param nikeName ??????
     * @param avatarUrl ??????
     * @param deviceToken ?????????
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
     * ??????jssdk???????????????
     * ??????jssdk???????????????
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