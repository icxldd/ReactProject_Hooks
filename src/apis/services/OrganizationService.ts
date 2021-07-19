/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditGuildMember } from '../models/AuditGuildMember';
import type { AuditGuildMemberResponse } from '../models/AuditGuildMemberResponse';
import type { BlockGuild } from '../models/BlockGuild';
import type { BlockGuildResponse } from '../models/BlockGuildResponse';
import type { ChangeGuildAddress } from '../models/ChangeGuildAddress';
import type { ChangeGuildAddressResponse } from '../models/ChangeGuildAddressResponse';
import type { ChangeGuildAuditMode } from '../models/ChangeGuildAuditMode';
import type { ChangeGuildAuditModeResponse } from '../models/ChangeGuildAuditModeResponse';
import type { ChangeGuildAvatar } from '../models/ChangeGuildAvatar';
import type { ChangeGuildAvatarResponse } from '../models/ChangeGuildAvatarResponse';
import type { ChangeGuildBackground } from '../models/ChangeGuildBackground';
import type { ChangeGuildBackgroundResponse } from '../models/ChangeGuildBackgroundResponse';
import type { ChangeGuildBaiscInfo } from '../models/ChangeGuildBaiscInfo';
import type { ChangeGuildBaiscInfoResponse } from '../models/ChangeGuildBaiscInfoResponse';
import type { ChangeGuildCanSearchByPhoneNumber } from '../models/ChangeGuildCanSearchByPhoneNumber';
import type { ChangeGuildCanSearchByPhoneNumberResponse } from '../models/ChangeGuildCanSearchByPhoneNumberResponse';
import type { ChangeGuildCover } from '../models/ChangeGuildCover';
import type { ChangeGuildCoverResponse } from '../models/ChangeGuildCoverResponse';
import type { ChangeGuildDescription } from '../models/ChangeGuildDescription';
import type { ChangeGuildDescriptionResponse } from '../models/ChangeGuildDescriptionResponse';
import type { ChangeGuildDisplayName } from '../models/ChangeGuildDisplayName';
import type { ChangeGuildDisplayNameResponse } from '../models/ChangeGuildDisplayNameResponse';
import type { ChangeGuildDistrict } from '../models/ChangeGuildDistrict';
import type { ChangeGuildDistrictResponse } from '../models/ChangeGuildDistrictResponse';
import type { ChangeGuildFullName } from '../models/ChangeGuildFullName';
import type { ChangeGuildFullNameResponse } from '../models/ChangeGuildFullNameResponse';
import type { ChangeGuildIsPublic } from '../models/ChangeGuildIsPublic';
import type { ChangeGuildIsPublicResponse } from '../models/ChangeGuildIsPublicResponse';
import type { ChangeGuildJoinMode } from '../models/ChangeGuildJoinMode';
import type { ChangeGuildJoinModeResponse } from '../models/ChangeGuildJoinModeResponse';
import type { ChangeGuildMemberInfo } from '../models/ChangeGuildMemberInfo';
import type { ChangeGuildMemberInfoResponse } from '../models/ChangeGuildMemberInfoResponse';
import type { ChangeGuildMemberNickName } from '../models/ChangeGuildMemberNickName';
import type { ChangeGuildMemberNickNameResponse } from '../models/ChangeGuildMemberNickNameResponse';
import type { CreateGuild } from '../models/CreateGuild';
import type { CreateGuildAbuseReport } from '../models/CreateGuildAbuseReport';
import type { CreateGuildAbuseReportResponse } from '../models/CreateGuildAbuseReportResponse';
import type { CreateGuildCharge } from '../models/CreateGuildCharge';
import type { CreateGuildChargeResponse } from '../models/CreateGuildChargeResponse';
import type { CreateGuildFile } from '../models/CreateGuildFile';
import type { CreateGuildFileResponse } from '../models/CreateGuildFileResponse';
import type { CreateGuildFiles } from '../models/CreateGuildFiles';
import type { CreateGuildFilesResponse } from '../models/CreateGuildFilesResponse';
import type { CreateGuildFolder } from '../models/CreateGuildFolder';
import type { CreateGuildFolderResponse } from '../models/CreateGuildFolderResponse';
import type { CreateGuildGroup } from '../models/CreateGuildGroup';
import type { CreateGuildGroupMembers } from '../models/CreateGuildGroupMembers';
import type { CreateGuildGroupMembersResponse } from '../models/CreateGuildGroupMembersResponse';
import type { CreateGuildGroupResponse } from '../models/CreateGuildGroupResponse';
import type { CreateGuildResponse } from '../models/CreateGuildResponse';
import type { DeleteGuildFileResponse } from '../models/DeleteGuildFileResponse';
import type { DeleteGuildFilesResponse } from '../models/DeleteGuildFilesResponse';
import type { DeleteGuildFolderResponse } from '../models/DeleteGuildFolderResponse';
import type { DeleteGuildGroupMembersResponse } from '../models/DeleteGuildGroupMembersResponse';
import type { DeleteGuildGroupResponse } from '../models/DeleteGuildGroupResponse';
import type { DeleteGuildMembersResponse } from '../models/DeleteGuildMembersResponse';
import type { DismissGuildResponse } from '../models/DismissGuildResponse';
import type { GenerateGuildCode } from '../models/GenerateGuildCode';
import type { GenerateGuildCodeResponse } from '../models/GenerateGuildCodeResponse';
import type { GuildHomeSearchResponse } from '../models/GuildHomeSearchResponse';
import type { JoinGuild } from '../models/JoinGuild';
import type { JoinGuildByGuildMember } from '../models/JoinGuildByGuildMember';
import type { JoinGuildByGuildMemberResponse } from '../models/JoinGuildByGuildMemberResponse';
import type { JoinGuildResponse } from '../models/JoinGuildResponse';
import type { LeaveGuildResponse } from '../models/LeaveGuildResponse';
import type { ListGuildChargesResponse } from '../models/ListGuildChargesResponse';
import type { ListGuildConsumesResponse } from '../models/ListGuildConsumesResponse';
import type { ListGuildFilesResponse } from '../models/ListGuildFilesResponse';
import type { ListGuildFoldersResponse } from '../models/ListGuildFoldersResponse';
import type { SearchGuildGroupMembersResponse } from '../models/SearchGuildGroupMembersResponse';
import type { SearchGuildGroupsResponse } from '../models/SearchGuildGroupsResponse';
import type { SearchGuildMembersResponse } from '../models/SearchGuildMembersResponse';
import type { SetGuildFileInfo } from '../models/SetGuildFileInfo';
import type { SetGuildFileInfoResponse } from '../models/SetGuildFileInfoResponse';
import type { SetGuildGroupInfo } from '../models/SetGuildGroupInfo';
import type { SetGuildGroupInfoResponse } from '../models/SetGuildGroupInfoResponse';
import type { SetGuildMemberRole } from '../models/SetGuildMemberRole';
import type { SetGuildMemberRoleResponse } from '../models/SetGuildMemberRoleResponse';
import type { SetGuildMembersRole } from '../models/SetGuildMembersRole';
import type { SetGuildMembersRoleResponse } from '../models/SetGuildMembersRoleResponse';
import type { SetGuildMembersStatus } from '../models/SetGuildMembersStatus';
import type { SetGuildMembersStatusResponse } from '../models/SetGuildMembersStatusResponse';
import type { SetGuildMemberStatus } from '../models/SetGuildMemberStatus';
import type { SetGuildMemberStatusResponse } from '../models/SetGuildMemberStatusResponse';
import type { ShowGuildCategoriesResponse } from '../models/ShowGuildCategoriesResponse';
import type { ShowGuildGroupsResponse } from '../models/ShowGuildGroupsResponse';
import type { ShowGuildHomeResponse } from '../models/ShowGuildHomeResponse';
import type { ShowGuildMembersResponse } from '../models/ShowGuildMembersResponse';
import type { ShowGuildResponse } from '../models/ShowGuildResponse';
import type { ShowGuildsResponse } from '../models/ShowGuildsResponse';
import type { ShowGuildTotalFluxResponse } from '../models/ShowGuildTotalFluxResponse';
import type { ShowIsGuildMemberResponse } from '../models/ShowIsGuildMemberResponse';
import type { SignupGuildMember } from '../models/SignupGuildMember';
import type { SignupGuildMemberResponse } from '../models/SignupGuildMemberResponse';
import type { TakeGuildResponse } from '../models/TakeGuildResponse';
import type { TransferGuild } from '../models/TransferGuild';
import type { TransferGuildResponse } from '../models/TransferGuildResponse';
import { request as __request } from '../core/request';

export class OrganizationService {

    /**
     * 教会成员审核
     * 教会成员审核
     * @param accept Accept Header
     * @param guildId *教会ID
     * @param guildMemberIds *教会成员编号列表
     * @param isAllow 是否审核通过(true:通过;false:拒绝) 默认true
     * @param body 
     * @returns AuditGuildMemberResponse Success
     * @throws ApiError
     */
    public static async auditGuildMemberguildauditCreate(
accept: 'application/json',
guildId?: string,
guildMemberIds?: Array<string>,
isAllow?: boolean,
body?: AuditGuildMember,
): Promise<AuditGuildMemberResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/audit`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'GuildMemberIds': guildMemberIds,
                'IsAllow': isAllow,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 屏蔽教会
     * 屏蔽教会
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param reason 理由
     * @param duration 时长（单位：小时）
     * @param body 
     * @returns BlockGuildResponse Success
     * @throws ApiError
     */
    public static async blockGuildguildblockCreate(
accept: 'application/json',
guildId?: string,
reason?: string,
duration?: number,
body?: BlockGuild,
): Promise<BlockGuildResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/block`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'Reason': reason,
                'Duration': duration,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改教会地址
     * 更改教会地址
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param address 地址
     * @param body 
     * @returns ChangeGuildAddressResponse Success
     * @throws ApiError
     */
    public static async changeGuildAddressguildaddressCreate(
accept: 'application/json',
guildId?: string,
address?: string,
body?: ChangeGuildAddress,
): Promise<ChangeGuildAddressResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/address`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'Address': address,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改教会审核模式的请求
     * 更改教会审核模式的请求
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param modeTypeValue 更改的审核类型:(1.仅被邀请加入的新成员不需要审核 2.仅搜索加入的新成员需要审核 3.所有途径的新加入成员都需要审核 4.所有途径的新加入成员都不需要审核)
     * @param body 
     * @returns ChangeGuildAuditModeResponse Success
     * @throws ApiError
     */
    public static async changeGuildAuditModeguildauditmodelCreate(
accept: 'application/json',
guildId?: string,
modeTypeValue?: number,
body?: ChangeGuildAuditMode,
): Promise<ChangeGuildAuditModeResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/auditmodel`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'ModeTypeValue': modeTypeValue,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改教会标识图片
     * 上传本地标识无须输入来源标识的地址。
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param avatarUrl 标识图片地址
     * @param body 
     * @returns ChangeGuildAvatarResponse Success
     * @throws ApiError
     */
    public static async changeGuildAvatarguildavatarCreate(
accept: 'application/json',
guildId?: string,
avatarUrl?: string,
body?: ChangeGuildAvatar,
): Promise<ChangeGuildAvatarResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/avatar`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'AvatarUrl': avatarUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改教会背景图片
     * 上传本地背景无须输入来源背景的地址。
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param backgroundUrl 背景图片地址
     * @param body 
     * @returns ChangeGuildBackgroundResponse Success
     * @throws ApiError
     */
    public static async changeGuildBackgroundguildbackgroundCreate(
accept: 'application/json',
guildId?: string,
backgroundUrl?: string,
body?: ChangeGuildBackground,
): Promise<ChangeGuildBackgroundResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/background`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'BackgroundUrl': backgroundUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改教会基础开关数据的请求
     * 更改教会基础开关数据的请求
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param modeType 更改的审核类型:(1.是否允许新成员加入 2.是否允许管理员审核新成员 3.是否允许管理员踢出群员 4.是否允许通过手机号搜索教会 )
     * @param value 允许|不允许
     * @param body 
     * @returns ChangeGuildBaiscInfoResponse Success
     * @throws ApiError
     */
    public static async changeGuildBaiscInfoguildbasicinfoCreate(
accept: 'application/json',
guildId?: string,
modeType?: number,
value?: boolean,
body?: ChangeGuildBaiscInfo,
): Promise<ChangeGuildBaiscInfoResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/basicinfo`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'ModeType': modeType,
                'value': value,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改教会是否通过手机号搜索
     * 更改教会是否通过手机号搜索
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param canSearchByPhoneNumber 是否通过手机号搜索
     * @param body 
     * @returns ChangeGuildCanSearchByPhoneNumberResponse Success
     * @throws ApiError
     */
    public static async changeGuildCanSearchByPhoneNumberguildcansearchbyphonenumberCreate(
accept: 'application/json',
guildId?: string,
canSearchByPhoneNumber?: boolean,
body?: ChangeGuildCanSearchByPhoneNumber,
): Promise<ChangeGuildCanSearchByPhoneNumberResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/cansearchbyphonenumber`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'CanSearchByPhoneNumber': canSearchByPhoneNumber,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改教会封面图片
     * 上传本地封面无须输入来源封面的地址。
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param coverUrl 封面图片地址
     * @param body 
     * @returns ChangeGuildCoverResponse Success
     * @throws ApiError
     */
    public static async changeGuildCoverguildcoverCreate(
accept: 'application/json',
guildId?: string,
coverUrl?: string,
body?: ChangeGuildCover,
): Promise<ChangeGuildCoverResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/cover`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'CoverUrl': coverUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改教会简介
     * 更改教会简介
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param description 描述
     * @param body 
     * @returns ChangeGuildDescriptionResponse Success
     * @throws ApiError
     */
    public static async changeGuildDescriptionguilddescriptionCreate(
accept: 'application/json',
guildId?: string,
description?: string,
body?: ChangeGuildDescription,
): Promise<ChangeGuildDescriptionResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/description`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'Description': description,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改教会显示名称
     * 更改教会显示名称
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param displayName 显示名称
     * @param body 
     * @returns ChangeGuildDisplayNameResponse Success
     * @throws ApiError
     */
    public static async changeGuildDisplayNameguilddisplaynameCreate(
accept: 'application/json',
guildId?: string,
displayName?: string,
body?: ChangeGuildDisplayName,
): Promise<ChangeGuildDisplayNameResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/displayname`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'DisplayName': displayName,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改教会所在地区
     * 更改教会所在地区
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param country 国家
     * @param province 省份
     * @param city 城市
     * @param body 
     * @returns ChangeGuildDistrictResponse Success
     * @throws ApiError
     */
    public static async changeGuildDistrictguilddistrictCreate(
accept: 'application/json',
guildId?: string,
country?: string,
province?: string,
city?: string,
body?: ChangeGuildDistrict,
): Promise<ChangeGuildDistrictResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/district`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'Country': country,
                'Province': province,
                'City': city,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改教会真实全称
     * 更改教会真实全称
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param fullName 真实全称
     * @param body 
     * @returns ChangeGuildFullNameResponse Success
     * @throws ApiError
     */
    public static async changeGuildFullNameguildfullnameCreate(
accept: 'application/json',
guildId?: string,
fullName?: string,
body?: ChangeGuildFullName,
): Promise<ChangeGuildFullNameResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/fullname`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'FullName': fullName,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改教会是否公开
     * 更改教会是否公开
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param isPublic 是否公开
     * @param body 
     * @returns ChangeGuildIsPublicResponse Success
     * @throws ApiError
     */
    public static async changeGuildIsPublicguildispublicCreate(
accept: 'application/json',
guildId?: string,
isPublic?: boolean,
body?: ChangeGuildIsPublic,
): Promise<ChangeGuildIsPublicResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/ispublic`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'IsPublic': isPublic,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改教会加入方式
     * 更改教会加入方式
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param joinMode 加入方式（0: 不允许加入; 1: 需要所有者或管理员同意; 2: 直接加入）
     * @param body 
     * @returns ChangeGuildJoinModeResponse Success
     * @throws ApiError
     */
    public static async changeGuildJoinModeguildjoinmodeCreate(
accept: 'application/json',
guildId?: string,
joinMode?: number,
body?: ChangeGuildJoinMode,
): Promise<ChangeGuildJoinModeResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/joinmode`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'JoinMode': joinMode,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 创建教会举报
     * 创建教会举报
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param category 分类
     * @param description 描述
     * @param body 
     * @returns CreateGuildAbuseReportResponse Success
     * @throws ApiError
     */
    public static async createGuildAbuseReportguildabusereportPost(
accept: 'application/json',
guildId?: string,
category?: string,
description?: string,
body?: CreateGuildAbuseReport,
): Promise<CreateGuildAbuseReportResponse> {
        const result = await __request({
            method: 'POST',
            path: `/organization/guild/abusereport`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'Category': category,
                'Description': description,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 创建教会充值
     * 创建教会充值
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param referenceChargeId 关联充值编号
     * @param type 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
     * @param amount 数量（单位：0: 元; 1: M; 2: 分钟）
     * @param consumedMoney 消费金额（单位：元）
     * @param remark 备注
     * @param isInward 是否是内部充值
     * @param body 
     * @returns CreateGuildChargeResponse Success
     * @throws ApiError
     */
    public static async createGuildChargeguildchargePost(
accept: 'application/json',
guildId?: string,
referenceChargeId?: string,
type?: number,
amount?: number,
consumedMoney?: number,
remark?: string,
isInward?: boolean,
body?: CreateGuildCharge,
): Promise<CreateGuildChargeResponse> {
        const result = await __request({
            method: 'POST',
            path: `/organization/guild/charge`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'ReferenceChargeId': referenceChargeId,
                'Type': type,
                'Amount': amount,
                'ConsumedMoney': consumedMoney,
                'Remark': remark,
                'isInward': isInward,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 设置教会文件信息
     * 设置教会文件信息
     * @param accept Accept Header
     * @param fileId 文件编号
     * @param type 类型（-1: 其他; 0: 图片; 1: 音频; 2: 视频; 3: 文档）
     * @param name 名称
     * @param avatarUrl 标识图片地址
     * @param category 分类
     * @param contentType 内容类型
     * @param contentLength 内容长度
     * @param width 宽度
     * @param height 高度
     * @param duration 时长（单位：秒）
     * @param body 
     * @returns SetGuildFileInfoResponse Success
     * @throws ApiError
     */
    public static async setGuildFileInfoguildfileCreate(
accept: 'application/json',
fileId?: string,
type?: number,
name?: string,
avatarUrl?: string,
category?: string,
contentType?: string,
contentLength?: number,
width?: number,
height?: number,
duration?: number,
body?: SetGuildFileInfo,
): Promise<SetGuildFileInfoResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/file`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'FileId': fileId,
                'Type': type,
                'Name': name,
                'AvatarUrl': avatarUrl,
                'Category': category,
                'ContentType': contentType,
                'ContentLength': contentLength,
                'Width': width,
                'Height': height,
                'Duration': duration,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 创建教会文件
     * 创建教会文件
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param folderId 文件夹编号
     * @param type 类型（-1: 其他; 0: 图片; 1: 音频; 2: 视频; 3: 文档）
     * @param name 名称
     * @param url 地址
     * @param avatarUrl 标识图片地址
     * @param category 分类
     * @param contentType 内容类型
     * @param contentLength 内容长度
     * @param width 宽度
     * @param height 高度
     * @param duration 时长（单位：秒）
     * @param body 
     * @returns CreateGuildFileResponse Success
     * @throws ApiError
     */
    public static async createGuildFileguildfilePost(
accept: 'application/json',
guildId?: string,
folderId?: string,
type?: number,
name?: string,
url?: string,
avatarUrl?: string,
category?: string,
contentType?: string,
contentLength?: number,
width?: number,
height?: number,
duration?: number,
body?: CreateGuildFile,
): Promise<CreateGuildFileResponse> {
        const result = await __request({
            method: 'POST',
            path: `/organization/guild/file`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'FolderId': folderId,
                'Type': type,
                'Name': name,
                'Url': url,
                'AvatarUrl': avatarUrl,
                'Category': category,
                'ContentType': contentType,
                'ContentLength': contentLength,
                'Width': width,
                'Height': height,
                'Duration': duration,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 删除教会文件
     * 删除教会文件
     * @param accept Accept Header
     * @param fileId 文件编号
     * @returns DeleteGuildFileResponse Success
     * @throws ApiError
     */
    public static async deleteGuildFileguildfileDelete(
accept: 'application/json',
fileId?: string,
): Promise<DeleteGuildFileResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/organization/guild/file`,
            headers: {
                'Accept': accept,
            },
            query: {
                'FileId': fileId,
            },
        });
        return result.body;
    }

    /**
     * 列举一组教会文件
     * 列举一组教会文件
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param folderId 文件夹编号
     * @param type 类型（-1: 其他; 0: 图片; 1: 音频; 2: 视频; 3: 文档）
     * @param category 分类
     * @param orderBy 排序的字段（可选值：Name, Type, Category, ContentType, ContentLength, CreatedDate, ModifiedDate
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ListGuildFilesResponse Success
     * @throws ApiError
     */
    public static async listGuildFilesguildfilesGet(
accept: 'application/json',
guildId?: string,
folderId?: string,
type?: number,
category?: string,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ListGuildFilesResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guild/files`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
                'FolderId': folderId,
                'Type': type,
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
     * 批量创建教会文件
     * 批量创建教会文件
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param folderId 文件夹编号
     * @param files 文件列表
     * @param body 
     * @returns CreateGuildFilesResponse Success
     * @throws ApiError
     */
    public static async createGuildFilesguildfilesPost(
accept: 'application/json',
guildId?: string,
folderId?: string,
files?: Array<any>,
body?: CreateGuildFiles,
): Promise<CreateGuildFilesResponse> {
        const result = await __request({
            method: 'POST',
            path: `/organization/guild/files`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'FolderId': folderId,
                'Files': files,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 批量删除教会文件
     * 批量删除教会文件
     * @param accept Accept Header
     * @param fileIds 一组文件编号
     * @returns DeleteGuildFilesResponse Success
     * @throws ApiError
     */
    public static async deleteGuildFilesguildfilesDelete(
accept: 'application/json',
fileIds?: Array<string>,
): Promise<DeleteGuildFilesResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/organization/guild/files`,
            headers: {
                'Accept': accept,
            },
            query: {
                'FileIds': fileIds,
            },
        });
        return result.body;
    }

    /**
     * 创建教会文件夹
     * 创建教会文件夹
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param parentFolderId 上级文件夹编号
     * @param name 名称
     * @param body 
     * @returns CreateGuildFolderResponse Success
     * @throws ApiError
     */
    public static async createGuildFolderguildfolderPost(
accept: 'application/json',
guildId?: string,
parentFolderId?: string,
name?: string,
body?: CreateGuildFolder,
): Promise<CreateGuildFolderResponse> {
        const result = await __request({
            method: 'POST',
            path: `/organization/guild/folder`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'ParentFolderId': parentFolderId,
                'Name': name,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 删除教会文件夹
     * 删除教会文件夹
     * @param accept Accept Header
     * @param folderId 文件夹编号
     * @returns DeleteGuildFolderResponse Success
     * @throws ApiError
     */
    public static async deleteGuildFolderguildfolderDelete(
accept: 'application/json',
folderId?: string,
): Promise<DeleteGuildFolderResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/organization/guild/folder`,
            headers: {
                'Accept': accept,
            },
            query: {
                'FolderId': folderId,
            },
        });
        return result.body;
    }

    /**
     * 设置教会小组信息
     * 设置教会小组信息
     * @param accept Accept Header
     * @param groupId 小组编号
     * @param name 名称
     * @param body 
     * @returns SetGuildGroupInfoResponse Success
     * @throws ApiError
     */
    public static async setGuildGroupInfoguildgroupCreate(
accept: 'application/json',
groupId?: string,
name?: string,
body?: SetGuildGroupInfo,
): Promise<SetGuildGroupInfoResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/group`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GroupId': groupId,
                'Name': name,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 创建教会小组
     * 创建教会小组
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param name 名称
     * @param userIds 用户编号列表
     * @param body 
     * @returns CreateGuildGroupResponse Success
     * @throws ApiError
     */
    public static async createGuildGroupguildgroupPost(
accept: 'application/json',
guildId?: string,
name?: string,
userIds?: Array<string>,
body?: CreateGuildGroup,
): Promise<CreateGuildGroupResponse> {
        const result = await __request({
            method: 'POST',
            path: `/organization/guild/group`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'Name': name,
                'UserIds': userIds,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 删除教会小组
     * 删除教会小组
     * @param accept Accept Header
     * @param groupId 小组编号
     * @returns DeleteGuildGroupResponse Success
     * @throws ApiError
     */
    public static async deleteGuildGroupguildgroupDelete(
accept: 'application/json',
groupId?: string,
): Promise<DeleteGuildGroupResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/organization/guild/group`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GroupId': groupId,
            },
        });
        return result.body;
    }

    /**
     * 查询一组教会成员
     * 查询一组教会成员
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param query 查询信息（昵称）
     * @param role 角色（0: 信徒; 1: 同工; 2: 牧者）
     * @param status 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     * @param orderBy 排序的字段（可选值：Nickname, Role, CreatedDate, ModifiedDate, Status
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns SearchGuildMembersResponse Success
     * @throws ApiError
     */
    public static async searchGuildMembersguildmembersGet(
accept: 'application/json',
guildId?: string,
query?: string,
role?: number,
status?: number,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<SearchGuildMembersResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guild/members`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
                'Query': query,
                'Role': role,
                'Status': status,
                'OrderBy': orderBy,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 批量删除教会成员
     * 批量删除教会成员
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param userIds 用户编号列表
     * @param shouldBlock 是否屏蔽
     * @returns DeleteGuildMembersResponse Success
     * @throws ApiError
     */
    public static async deleteGuildMembersguildmembersDelete(
accept: 'application/json',
guildId?: string,
userIds?: Array<string>,
shouldBlock?: boolean,
): Promise<DeleteGuildMembersResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/organization/guild/members`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
                'UserIds': userIds,
                'ShouldBlock': shouldBlock,
            },
        });
        return result.body;
    }

    /**
     * 全站搜索
     * 全站搜索
     * @param accept Accept Header
     * @param guildId *教会Id
     * @param keyWord 搜索关键字
     * @param status 状态。（-2: 已屏蔽; -1: 已删除; 0: 进行中（默认）; 1: 未开始; 2: 已结束; 3: 已中断）
     * @param orderBy modifiedDate(默认),createdDate,status,viewCount(查看人数),type(0: 通知; 1: 直播; 2: 讨论)
     * @param desc 是否倒序：是（默认），否
     * @param skip 跳过条数(默认：0)
     * @param limit 获取条数(默认：5)
     * @param textHighlingPreSuffix 文本高亮前缀(默认：&lt;highlightcolor&gt;)
     * @param textHighlingAfterSuffix 文本高亮后缀(默认：&lt;/highlightcolor&gt;)
     * @returns GuildHomeSearchResponse Success
     * @throws ApiError
     */
    public static async guildHomeSearchguildglobalsearchGet(
accept: 'application/json',
guildId?: string,
keyWord?: string,
status?: number,
orderBy?: string,
desc?: boolean,
skip?: number,
limit?: number,
textHighlingPreSuffix?: string,
textHighlingAfterSuffix?: string,
): Promise<GuildHomeSearchResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guild/globalsearch`,
            headers: {
                'Accept': accept,
            },
            query: {
                'guildId': guildId,
                'keyWord': keyWord,
                'status': status,
                'orderBy': orderBy,
                'desc': desc,
                'skip': skip,
                'limit': limit,
                'textHighlingPreSuffix': textHighlingPreSuffix,
                'textHighlingAfterSuffix': textHighlingAfterSuffix,
            },
        });
        return result.body;
    }

    /**
     * 使用教会ID或手机号加入教会
     * 使用教会ID或手机号加入教会
     * @param accept Accept Header
     * @param joinIdentification 教会编号|手机号
     * @param code 邀请码（无邀请码则必须输入教会编号）
     * @param memberNickname 成员昵称
     * @param memberAvatarUrl 成员头像地址
     * @param body 
     * @returns JoinGuildByGuildMemberResponse Success
     * @throws ApiError
     */
    public static async joinGuildByGuildMemberguildjoinPost(
accept: 'application/json',
joinIdentification?: string,
code?: string,
memberNickname?: string,
memberAvatarUrl?: string,
body?: JoinGuildByGuildMember,
): Promise<JoinGuildByGuildMemberResponse> {
        const result = await __request({
            method: 'POST',
            path: `/organization/guild/join`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'JoinIdentification': joinIdentification,
                'Code': code,
                'MemberNickname': memberNickname,
                'MemberAvatarUrl': memberAvatarUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 加入教会
     * 加入教会
     * @param accept Accept Header
     * @param guildId 教会编号（无教会编号则必须输入邀请码）
     * @param code 邀请码（无邀请码则必须输入教会编号）
     * @param memberNickname 成员昵称
     * @param memberAvatarUrl 成员头像地址
     * @param body 
     * @returns JoinGuildResponse Success
     * @throws ApiError
     */
    public static async joinGuildguildmemberPost(
accept: 'application/json',
guildId?: string,
code?: string,
memberNickname?: string,
memberAvatarUrl?: string,
body?: JoinGuild,
): Promise<JoinGuildResponse> {
        const result = await __request({
            method: 'POST',
            path: `/organization/guild/member`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'Code': code,
                'MemberNickname': memberNickname,
                'MemberAvatarUrl': memberAvatarUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 退出教会
     * 退出教会
     * @param accept Accept Header
     * @param guildId 教会编号
     * @returns LeaveGuildResponse Success
     * @throws ApiError
     */
    public static async leaveGuildguildmemberDelete(
accept: 'application/json',
guildId?: string,
): Promise<LeaveGuildResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/organization/guild/member`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
            },
        });
        return result.body;
    }

    /**
     * 列举一组教会充值
     * 列举一组教会充值
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param type 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
     * @param orderBy 排序的字段（可选值：Type, Amount, CreatedDate, ModifiedDate
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ListGuildChargesResponse Success
     * @throws ApiError
     */
    public static async listGuildChargesguildchargesGet(
accept: 'application/json',
guildId?: string,
type?: number,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ListGuildChargesResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guild/charges`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
                'Type': type,
                'OrderBy': orderBy,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 列举一组教会消费
     * 列举一组教会消费
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param type 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
     * @param orderBy 排序的字段（可选值：Type, Amount, CreatedDate, ModifiedDate
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ListGuildConsumesResponse Success
     * @throws ApiError
     */
    public static async listGuildConsumesguildconsumesGet(
accept: 'application/json',
guildId?: string,
type?: number,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ListGuildConsumesResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guild/consumes`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
                'Type': type,
                'OrderBy': orderBy,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 列举一组教会文件夹
     * 列举一组教会文件夹
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param parentFolderId 上级文件夹编号
     * @param orderBy 排序的字段（可选值：Name, CreatedDate, ModifiedDate
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ListGuildFoldersResponse Success
     * @throws ApiError
     */
    public static async listGuildFoldersguildfoldersGet(
accept: 'application/json',
guildId?: string,
parentFolderId?: string,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ListGuildFoldersResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guild/folders`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
                'ParentFolderId': parentFolderId,
                'OrderBy': orderBy,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 查询一组教会小组
     * 查询一组教会小组
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param query 查询信息（名称）
     * @param orderBy 排序的字段（可选值：Name, CreatedDate, ModifiedDate
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns SearchGuildGroupsResponse Success
     * @throws ApiError
     */
    public static async searchGuildGroupsguildgroupsGet(
accept: 'application/json',
guildId?: string,
query?: string,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<SearchGuildGroupsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guild/groups`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
                'Query': query,
                'OrderBy': orderBy,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 显示教会
     * 显示教会
     * @param accept Accept Header
     * @param guildId 教会编号
     * @returns ShowGuildResponse Success
     * @throws ApiError
     */
    public static async showGuildguildshowGet(
accept: 'application/json',
guildId?: string,
): Promise<ShowGuildResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guild/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
            },
        });
        return result.body;
    }

    /**
     * 批量显示教会
     * 批量显示教会
     * @param accept Accept Header
     * @param role 角色（0: 信徒; 1: 同工; 2: 牧者）
     * @param status 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     * @param orderBy 排序的字段（可选值：Nickname, Role, CreatedDate, ModifiedDate, Status
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ShowGuildsResponse Success
     * @throws ApiError
     */
    public static async showGuildsguildsshowGet(
accept: 'application/json',
role?: number,
status?: number,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ShowGuildsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guilds/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'Role': role,
                'Status': status,
                'OrderBy': orderBy,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 显示教会总流量
     * 显示教会总流量
     * @param accept Accept Header
     * @param guildId 教会编号
     * @returns ShowGuildTotalFluxResponse Success
     * @throws ApiError
     */
    public static async showGuildTotalFluxguildtotalfluxGet(
accept: 'application/json',
guildId?: string,
): Promise<ShowGuildTotalFluxResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guild/totalflux`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
            },
        });
        return result.body;
    }

    /**
     * 是否是教会成员
     * 是否是教会成员
     * @param accept Accept Header
     * @param guildId 教会编号
     * @returns ShowIsGuildMemberResponse Success
     * @throws ApiError
     */
    public static async showIsGuildMemberguildmemberisshowGet(
accept: 'application/json',
guildId?: string,
): Promise<ShowIsGuildMemberResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guildmember/isshow`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
            },
        });
        return result.body;
    }

    /**
     * 转让教会
     * 转让教会
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param userId 用户编号
     * @param body 
     * @returns TransferGuildResponse Success
     * @throws ApiError
     */
    public static async transferGuildguildownerCreate(
accept: 'application/json',
guildId?: string,
userId?: string,
body?: TransferGuild,
): Promise<TransferGuildResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/owner`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'UserId': userId,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 批量显示当前用户首页的消息
     * 批量显示当前用户首页的消息
     * @param accept Accept Header
     * @param guildId 教会编号
     * @returns ShowGuildHomeResponse Success
     * @throws ApiError
     */
    public static async showGuildHomeguildhomeshowGet(
accept: 'application/json',
guildId?: string,
): Promise<ShowGuildHomeResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guildhome/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
            },
        });
        return result.body;
    }

    /**
     * 更改教会成员信息
     * 更改教会成员信息
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param nickname 昵称
     * @param avatarUrl 头像地址
     * @param body 
     * @returns ChangeGuildMemberInfoResponse Success
     * @throws ApiError
     */
    public static async changeGuildMemberInfoguildmemberinfoCreate(
accept: 'application/json',
guildId?: string,
nickname?: string,
avatarUrl?: string,
body?: ChangeGuildMemberInfo,
): Promise<ChangeGuildMemberInfoResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/member/info`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'Nickname': nickname,
                'AvatarUrl': avatarUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 更改教会其他成员名称及头像
     * 更改教会其他成员名称及头像
     * @param accept Accept Header
     * @param guildMemberId 教会成员编号
     * @param nickname 昵称
     * @param avatarUrl 头像地址
     * @param body 
     * @returns ChangeGuildMemberNickNameResponse Success
     * @throws ApiError
     */
    public static async changeGuildMemberNickNameguildmembernicknameCreate(
accept: 'application/json',
guildMemberId?: string,
nickname?: string,
avatarUrl?: string,
body?: ChangeGuildMemberNickName,
): Promise<ChangeGuildMemberNickNameResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/member/nickname`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildMemberId': guildMemberId,
                'Nickname': nickname,
                'AvatarUrl': avatarUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 查询一组教会小组成员
     * 查询一组教会小组成员
     * @param accept Accept Header
     * @param groupId 小组编号
     * @param query 查询信息（成员昵称）
     * @param memberRole 角色（0: 信徒; 1: 同工; 2: 牧者）
     * @param memberStatus 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     * @param orderBy 排序的字段（可选值：CreatedDate
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns SearchGuildGroupMembersResponse Success
     * @throws ApiError
     */
    public static async searchGuildGroupMembersguildgroupmembersGet(
accept: 'application/json',
groupId?: string,
query?: string,
memberRole?: number,
memberStatus?: number,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<SearchGuildGroupMembersResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guild/group/members`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GroupId': groupId,
                'Query': query,
                'MemberRole': memberRole,
                'MemberStatus': memberStatus,
                'OrderBy': orderBy,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 批量创建教会小组成员
     * 批量创建教会小组成员
     * @param accept Accept Header
     * @param groupId 小组编号
     * @param userIds 用户编号列表
     * @param body 
     * @returns CreateGuildGroupMembersResponse Success
     * @throws ApiError
     */
    public static async createGuildGroupMembersguildgroupmembersPost(
accept: 'application/json',
groupId?: string,
userIds?: Array<string>,
body?: CreateGuildGroupMembers,
): Promise<CreateGuildGroupMembersResponse> {
        const result = await __request({
            method: 'POST',
            path: `/organization/guild/group/members`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GroupId': groupId,
                'UserIds': userIds,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 批量删除教会小组成员
     * 批量删除教会小组成员
     * @param accept Accept Header
     * @param groupId 小组编号
     * @param userIds 用户编号列表
     * @returns DeleteGuildGroupMembersResponse Success
     * @throws ApiError
     */
    public static async deleteGuildGroupMembersguildgroupmembersDelete(
accept: 'application/json',
groupId?: string,
userIds?: Array<string>,
): Promise<DeleteGuildGroupMembersResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/organization/guild/group/members`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GroupId': groupId,
                'UserIds': userIds,
            },
        });
        return result.body;
    }

    /**
     * 生成教会邀请码
     * 生成教会邀请码
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param role 角色（0: 信徒; 1: 同工; 2: 牧者）
     * @param body 
     * @returns GenerateGuildCodeResponse Success
     * @throws ApiError
     */
    public static async generateGuildCodeguildmembercodePost(
accept: 'application/json',
guildId?: string,
role?: number,
body?: GenerateGuildCode,
): Promise<GenerateGuildCodeResponse> {
        const result = await __request({
            method: 'POST',
            path: `/organization/guild/member/code`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'Role': role,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 设置教会成员角色
     * 设置教会成员角色
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param userId 用户编号
     * @param role 角色（0: 信徒; 1: 同工; 2: 牧者）
     * @param body 
     * @returns SetGuildMemberRoleResponse Success
     * @throws ApiError
     */
    public static async setGuildMemberRoleguildmemberroleCreate(
accept: 'application/json',
guildId?: string,
userId?: string,
role?: number,
body?: SetGuildMemberRole,
): Promise<SetGuildMemberRoleResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/member/role`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'UserId': userId,
                'Role': role,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 批量设置教会成员角色
     * 批量设置教会成员角色
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param userIds 用户编号列表
     * @param role 角色（0: 信徒; 1: 同工; 2: 牧者）
     * @param body 
     * @returns SetGuildMembersRoleResponse Success
     * @throws ApiError
     */
    public static async setGuildMembersRoleguildmembersroleCreate(
accept: 'application/json',
guildId?: string,
userIds?: Array<string>,
role?: number,
body?: SetGuildMembersRole,
): Promise<SetGuildMembersRoleResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/members/role`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'UserIds': userIds,
                'Role': role,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 批量设置教会成员状态
     * 批量设置教会成员状态
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param userIds 用户编号列表
     * @param status 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     * @param statusMessage 状态消息
     * @param body 
     * @returns SetGuildMembersStatusResponse Success
     * @throws ApiError
     */
    public static async setGuildMembersStatusguildmembersstatusCreate(
accept: 'application/json',
guildId?: string,
userIds?: Array<string>,
status?: number,
statusMessage?: string,
body?: SetGuildMembersStatus,
): Promise<SetGuildMembersStatusResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/members/status`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'UserIds': userIds,
                'Status': status,
                'StatusMessage': statusMessage,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 设置教会成员状态
     * 设置教会成员状态
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param userId 用户编号
     * @param status 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     * @param statusMessage 状态消息
     * @param body 
     * @returns SetGuildMemberStatusResponse Success
     * @throws ApiError
     */
    public static async setGuildMemberStatusguildmemberstatusCreate(
accept: 'application/json',
guildId?: string,
userId?: string,
status?: number,
statusMessage?: string,
body?: SetGuildMemberStatus,
): Promise<SetGuildMemberStatusResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/organization/guild/member/status`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'UserId': userId,
                'Status': status,
                'StatusMessage': statusMessage,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 查询一组教会分类的请求
     * 查询一组教会分类的请求
     * @param accept Accept Header
     * @param guildId 教会Id
     * @param usage 用途（0: 通知; 1: 直播; 2: 讨论; 3: 团契）
     * @param memberRole 角色（0: 信徒; 1: 同工; 2: 牧者）
     * @param memberStatus 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     * @param orderBy 排序的字段（可选值：Name, CreatedDate
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ShowGuildCategoriesResponse Success
     * @throws ApiError
     */
    public static async showGuildCategoriesguildscategoriesshowGet(
accept: 'application/json',
guildId?: string,
usage?: number,
memberRole?: number,
memberStatus?: number,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ShowGuildCategoriesResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guilds/categories/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'guildId': guildId,
                'Usage': usage,
                'MemberRole': memberRole,
                'MemberStatus': memberStatus,
                'OrderBy': orderBy,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 查询一组当前用户所属的教会小组
     * 查询一组当前用户所属的教会小组
     * @param accept Accept Header
     * @param query 查询信息（名称）
     * @param orderBy 排序的字段（可选值：Name, CreatedDate, ModifiedDate
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ShowGuildGroupsResponse Success
     * @throws ApiError
     */
    public static async showGuildGroupsguildsgroupsshowGet(
accept: 'application/json',
query?: string,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ShowGuildGroupsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guilds/groups/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'Query': query,
                'OrderBy': orderBy,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 批量显示当前用户所属的教会成员
     * 批量显示当前用户所属的教会成员
     * @param accept Accept Header
     * @param role 角色（0: 信徒; 1: 同工; 2: 牧者）
     * @param status 状态（-2: 已屏蔽; -1: 已退出; 0: 正常; 1: 等待审核; 2: 已邀请等待加入）
     * @param orderBy 排序的字段（可选值：Nickname, Role, CreatedDate, ModifiedDate, Status
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ShowGuildMembersResponse Success
     * @throws ApiError
     */
    public static async showGuildMembersguildsmembersshowGet(
accept: 'application/json',
role?: number,
status?: Array<number>,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ShowGuildMembersResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guilds/members/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'Role': role,
                'Status': status,
                'OrderBy': orderBy,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 注册教会成员
     * 注册教会成员
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param phoneNumber 手机号码
     * @param token 验证码
     * @param body 
     * @returns SignupGuildMemberResponse Success
     * @throws ApiError
     */
    public static async signupGuildMemberguildmembersignupPost(
accept: 'application/json',
guildId?: string,
phoneNumber?: string,
token?: string,
body?: SignupGuildMember,
): Promise<SignupGuildMemberResponse> {
        const result = await __request({
            method: 'POST',
            path: `/organization/guild/member/signup`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'PhoneNumber': phoneNumber,
                'Token': token,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 获取教会
     * 获取教会
     * @param accept Accept Header
     * @param guildId 教会编号
     * @returns TakeGuildResponse Success
     * @throws ApiError
     */
    public static async takeGuildguildGet(
accept: 'application/json',
guildId?: string,
): Promise<TakeGuildResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization/guild`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
            },
        });
        return result.body;
    }

    /**
     * 创建教会
     * 创建教会
     * @param accept Accept Header
     * @param displayName 显示名称
     * @param description 描述
     * @param avatarUrl 标识图片地址
     * @param country 国家
     * @param province 省份
     * @param city 城市
     * @param ownerNickname 所有者昵称
     * @param ownerAvatarUrl 所有者头像地址
     * @param body 
     * @returns CreateGuildResponse Success
     * @throws ApiError
     */
    public static async createGuildguildPost(
accept: 'application/json',
displayName?: string,
description?: string,
avatarUrl?: string,
country?: string,
province?: string,
city?: string,
ownerNickname?: string,
ownerAvatarUrl?: string,
body?: CreateGuild,
): Promise<CreateGuildResponse> {
        const result = await __request({
            method: 'POST',
            path: `/organization/guild`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'DisplayName': displayName,
                'Description': description,
                'AvatarUrl': avatarUrl,
                'Country': country,
                'Province': province,
                'City': city,
                'OwnerNickname': ownerNickname,
                'OwnerAvatarUrl': ownerAvatarUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 解散教会
     * 解散教会
     * @param accept Accept Header
     * @param guildId 教会编号
     * @returns DismissGuildResponse Success
     * @throws ApiError
     */
    public static async dismissGuildguildDelete(
accept: 'application/json',
guildId?: string,
): Promise<DismissGuildResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/organization/guild`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
            },
        });
        return result.body;
    }

}