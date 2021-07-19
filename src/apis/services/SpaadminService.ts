/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeBlocStatusAdmin } from '../models/ChangeBlocStatusAdmin';
import type { ChangeBlocStatusAdminResponse } from '../models/ChangeBlocStatusAdminResponse';
import type { Object } from '../models/Object';
import type { PutAuditItemAdmin } from '../models/PutAuditItemAdmin';
import type { PutAuditItemAdminResponse } from '../models/PutAuditItemAdminResponse';
import type { ShowAbuseReportAuditAdminResponse } from '../models/ShowAbuseReportAuditAdminResponse';
import type { ShowAccountAdminResponse } from '../models/ShowAccountAdminResponse';
import type { ShowAccountDetailAdminResponse } from '../models/ShowAccountDetailAdminResponse';
import type { ShowDiscussAdminResponse } from '../models/ShowDiscussAdminResponse';
import type { ShowExportGuildContactAdmin } from '../models/ShowExportGuildContactAdmin';
import type { ShowGuildBlocDetailAdminResponse } from '../models/ShowGuildBlocDetailAdminResponse';
import type { ShowGuildDetailAdminResponse } from '../models/ShowGuildDetailAdminResponse';
import type { ShowGuildLivecastFluxAdminResponse } from '../models/ShowGuildLivecastFluxAdminResponse';
import type { ShowGuildLivecastFluxDetailAdminResponse } from '../models/ShowGuildLivecastFluxDetailAdminResponse';
import type { ShowGuildMemberAdminResponse } from '../models/ShowGuildMemberAdminResponse';
import type { ShowGuildsAdminResponse } from '../models/ShowGuildsAdminResponse';
import type { ShowGuildsLazyAdminResponse } from '../models/ShowGuildsLazyAdminResponse';
import type { ShowIdeaFeedbackAdminResponse } from '../models/ShowIdeaFeedbackAdminResponse';
import type { ShowLivecastsAdminResponse } from '../models/ShowLivecastsAdminResponse';
import type { ShowLivecastsLazyAdminResponse } from '../models/ShowLivecastsLazyAdminResponse';
import type { ShowManualAuditAdminResponse } from '../models/ShowManualAuditAdminResponse';
import type { ShowNotificationsAdminResponse } from '../models/ShowNotificationsAdminResponse';
import type { ShowSystemAdminResponse } from '../models/ShowSystemAdminResponse';
import type { ShowSystemDetailAdminResponse } from '../models/ShowSystemDetailAdminResponse';
import type { ShowUserAuthViolationAdminResponse } from '../models/ShowUserAuthViolationAdminResponse';
import { request as __request } from '../core/request';

export class SpaadminService {

    /**
     * 显示举报审核列表
     * 显示举报审核列表
     * @param accept Accept Header
     * @param pageIndex 第几页
     * @param pageCount 一页多少条
     * @returns ShowAbuseReportAuditAdminResponse Success
     * @throws ApiError
     */
    public static async showAbuseReportAuditAdminabuseReportAuditshowGet(
accept: 'application/json',
pageIndex?: number,
pageCount?: number,
): Promise<ShowAbuseReportAuditAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/abuse-report-audit/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'PageIndex': pageIndex,
                'PageCount': pageCount,
            },
        });
        return result.body;
    }

    /**
     * 显示用戶
     * 显示用戶
     * @param accept Accept Header
     * @param pageIndex 第几页
     * @param pageCount 一页多少条
     * @returns ShowAccountAdminResponse Success
     * @throws ApiError
     */
    public static async showAccountAdminaccountsshowGet(
accept: 'application/json',
pageIndex?: number,
pageCount?: number,
): Promise<ShowAccountAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/accounts/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'PageIndex': pageIndex,
                'PageCount': pageCount,
            },
        });
        return result.body;
    }

    /**
     * 显示讨论
     * 显示讨论
     * @param accept Accept Header
     * @param pageIndex 第几页
     * @param pageCount 一页多少条
     * @returns ShowDiscussAdminResponse Success
     * @throws ApiError
     */
    public static async showDiscussAdmindiscussshowGet(
accept: 'application/json',
pageIndex?: number,
pageCount?: number,
): Promise<ShowDiscussAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/discuss/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'PageIndex': pageIndex,
                'PageCount': pageCount,
            },
        });
        return result.body;
    }

    /**
     * 显示教会详情的请求
     * 显示教会详情的请求
     * @param accept Accept Header
     * @param guildId 教会ID
     * @returns ShowGuildDetailAdminResponse Success
     * @throws ApiError
     */
    public static async showGuildDetailAdminguildshowGet(
accept: 'application/json',
guildId?: string,
): Promise<ShowGuildDetailAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/guild/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'guildId': guildId,
            },
        });
        return result.body;
    }

    /**
     * 显示教会成员
     * 显示教会成员
     * @param accept Accept Header
     * @param pageIndex 第几页
     * @param pageCount 一页多少条
     * @returns ShowGuildMemberAdminResponse Success
     * @throws ApiError
     */
    public static async showGuildMemberAdminguildmembershowGet(
accept: 'application/json',
pageIndex?: number,
pageCount?: number,
): Promise<ShowGuildMemberAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/guildmember/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'PageIndex': pageIndex,
                'PageCount': pageCount,
            },
        });
        return result.body;
    }

    /**
     * 显示教会
     * 显示教会
     * @param accept Accept Header
     * @param pageIndex 第几页
     * @param pageCount 一页多少条
     * @returns ShowGuildsAdminResponse Success
     * @throws ApiError
     */
    public static async showGuildsAdminguildsshowGet(
accept: 'application/json',
pageIndex?: number,
pageCount?: number,
): Promise<ShowGuildsAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/guilds/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'PageIndex': pageIndex,
                'PageCount': pageCount,
            },
        });
        return result.body;
    }

    /**
     * 显示意见反馈列表
     * 显示意见反馈列表
     * @param accept Accept Header
     * @param pageIndex 第几页
     * @param pageCount 一页多少条
     * @returns ShowIdeaFeedbackAdminResponse Success
     * @throws ApiError
     */
    public static async showIdeaFeedbackAdminideaFeedbackshowGet(
accept: 'application/json',
pageIndex?: number,
pageCount?: number,
): Promise<ShowIdeaFeedbackAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/idea-feedback/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'PageIndex': pageIndex,
                'PageCount': pageCount,
            },
        });
        return result.body;
    }

    /**
     * 显示直播
     * 显示直播
     * @param accept Accept Header
     * @param pageIndex 第几页
     * @param pageCount 一页多少条
     * @returns ShowLivecastsAdminResponse Success
     * @throws ApiError
     */
    public static async showLivecastsAdminlivecastsshowGet(
accept: 'application/json',
pageIndex?: number,
pageCount?: number,
): Promise<ShowLivecastsAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/livecasts/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'PageIndex': pageIndex,
                'PageCount': pageCount,
            },
        });
        return result.body;
    }

    /**
     * 显示审核列表
     * 显示审核列表
     * @param accept Accept Header
     * @param pageIndex 第几页
     * @param pageCount 一页多少条
     * @returns ShowManualAuditAdminResponse Success
     * @throws ApiError
     */
    public static async showManualAuditAdminmanualAuditshowGet(
accept: 'application/json',
pageIndex?: number,
pageCount?: number,
): Promise<ShowManualAuditAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/manual-audit/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'PageIndex': pageIndex,
                'PageCount': pageCount,
            },
        });
        return result.body;
    }

    /**
     * 显示通知
     * 显示通知
     * @param accept Accept Header
     * @param pageIndex 第几页
     * @param pageCount 一页多少条
     * @returns ShowNotificationsAdminResponse Success
     * @throws ApiError
     */
    public static async showNotificationsAdminnotificationsshowGet(
accept: 'application/json',
pageIndex?: number,
pageCount?: number,
): Promise<ShowNotificationsAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/notifications/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'PageIndex': pageIndex,
                'PageCount': pageCount,
            },
        });
        return result.body;
    }

    /**
     * 显示系统详情的请求
     * 显示系统详情的请求
     * @param accept Accept Header
     * @returns ShowSystemAdminResponse Success
     * @throws ApiError
     */
    public static async showSystemAdminsystemshowGet(
accept: 'application/json',
): Promise<ShowSystemAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/system/show`,
            headers: {
                'Accept': accept,
            },
        });
        return result.body;
    }

    /**
     * 显示用户违规记录
     * 显示用户违规记录
     * @param accept Accept Header
     * @param userId userid
     * @returns ShowUserAuthViolationAdminResponse Success
     * @throws ApiError
     */
    public static async showUserAuthViolationAdminaccountviolationGet(
accept: 'application/json',
userId?: number,
): Promise<ShowUserAuthViolationAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/account/violation`,
            headers: {
                'Accept': accept,
            },
            query: {
                'userId': userId,
            },
        });
        return result.body;
    }

    /**
     * 更改业务状态
     * 更改业务状态
     * @param accept Accept Header
     * @param identificationId 标识ID
     * @param blocType 类型0：通知；1：直播；2：讨论；3：教会；
     * @param blocValue true:正常；false：删除
     * @param body 
     * @returns ChangeBlocStatusAdminResponse Success
     * @throws ApiError
     */
    public static async changeBlocStatusAdminblocstatusCreate(
accept: 'application/json',
identificationId?: string,
blocType?: number,
blocValue?: boolean,
body?: ChangeBlocStatusAdmin,
): Promise<ChangeBlocStatusAdminResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/spaadmin/bloc/status`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'identificationId': identificationId,
                'blocType': blocType,
                'blocValue': blocValue,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 导出教会联系人
     * 导出教会联系人
     * @param accept Accept Header
     * @param guildIds 教会ids
     * @param body 
     * @returns Object Success
     * @throws ApiError
     */
    public static async showExportGuildContactAdminexportguildcontactPost(
accept: 'application/json',
guildIds?: Array<string>,
body?: ShowExportGuildContactAdmin,
): Promise<Object> {
        const result = await __request({
            method: 'POST',
            path: `/spaadmin/export/guildcontact`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'guildIds': guildIds,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 显示用戶detail
     * 显示用戶detail
     * @param accept Accept Header
     * @param userAuthId userAuthId
     * @param searchType searchType
     * @returns ShowAccountDetailAdminResponse Success
     * @throws ApiError
     */
    public static async showAccountDetailAdminaccountdetailshowGet(
accept: 'application/json',
userAuthId?: number,
searchType?: number,
): Promise<ShowAccountDetailAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/account/detail/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'userAuthId': userAuthId,
                'searchType': searchType,
            },
        });
        return result.body;
    }

    /**
     * 显示教会流量详情的请求
     * 显示教会流量详情的请求
     * @param accept Accept Header
     * @param guildId 教会ID
     * @returns ShowGuildLivecastFluxAdminResponse Success
     * @throws ApiError
     */
    public static async showGuildLivecastFluxAdminguildlivecastFluxshowGet(
accept: 'application/json',
guildId?: string,
): Promise<ShowGuildLivecastFluxAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/guild/livecastFlux/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'guildId': guildId,
            },
        });
        return result.body;
    }

    /**
     * 显示教会流量详情的请求
     * 显示教会流量详情的请求
     * @param accept Accept Header
     * @param guildId 教会ID
     * @param showFluxType 1:充值；2：消费；
     * @returns ShowGuildLivecastFluxDetailAdminResponse Success
     * @throws ApiError
     */
    public static async showGuildLivecastFluxDetailAdminguildlivecastFluxDetailshowGet(
accept: 'application/json',
guildId?: string,
showFluxType?: number,
): Promise<ShowGuildLivecastFluxDetailAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/guild/livecastFluxDetail/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'guildId': guildId,
                'showFluxType': showFluxType,
            },
        });
        return result.body;
    }

    /**
     * 显示教会的请求
     * 显示教会的请求
     * @param accept Accept Header
     * @param first 跳过多少条
     * @param rows 一页多少条
     * @param sortField 排序字段
     * @param sortOrder 排序方式
     * @param data 搜索值
     * @returns ShowGuildsLazyAdminResponse Success
     * @throws ApiError
     */
    public static async showGuildsLazyAdminguildslazyshowGet(
accept: 'application/json',
first?: number,
rows?: number,
sortField?: string,
sortOrder?: number,
data?: string,
): Promise<ShowGuildsLazyAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/guilds/lazy/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'first': first,
                'rows': rows,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'data': data,
            },
        });
        return result.body;
    }

    /**
     * Lazy显示直播
     * Lazy显示直播
     * @param accept Accept Header
     * @param first 跳过多少条
     * @param rows 一页多少条
     * @param sortField 排序字段
     * @param sortOrder 排序方式
     * @param data 搜索值
     * @returns ShowLivecastsLazyAdminResponse Success
     * @throws ApiError
     */
    public static async showLivecastsLazyAdminlivecastslazyshowGet(
accept: 'application/json',
first?: number,
rows?: number,
sortField?: string,
sortOrder?: number,
data?: string,
): Promise<ShowLivecastsLazyAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/livecasts/lazy/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'first': first,
                'rows': rows,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'data': data,
            },
        });
        return result.body;
    }

    /**
     * 显示系统详情的请求
     * 显示系统详情的请求
     * @param accept Accept Header
     * @param findFalg findFalg
     * @returns ShowSystemDetailAdminResponse Success
     * @throws ApiError
     */
    public static async showSystemDetailAdminsystemdetailshowGet(
accept: 'application/json',
findFalg?: string,
): Promise<ShowSystemDetailAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/system/detail/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'findFalg': findFalg,
            },
        });
        return result.body;
    }

    /**
     * 显示教会业务detail
     * 显示教会业务detail
     * @param accept Accept Header
     * @param guildId guildId
     * @param searchType searchType
     * @returns ShowGuildBlocDetailAdminResponse Success
     * @throws ApiError
     */
    public static async showGuildBlocDetailAdminguildblocdetailshowGet(
accept: 'application/json',
guildId?: number,
searchType?: number,
): Promise<ShowGuildBlocDetailAdminResponse> {
        const result = await __request({
            method: 'GET',
            path: `/spaadmin/guild/bloc/detail/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'guildId': guildId,
                'searchType': searchType,
            },
        });
        return result.body;
    }

}