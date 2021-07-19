/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditItem } from '../models/AuditItem';
import type { AuditItemResponse } from '../models/AuditItemResponse';
import type { Object } from '../models/Object';
import { request as __request } from '../core/request';

export class AdminService {


    /**
     * 查看举报列表页
     * 查看举报列表页
     * @param accept Accept Header
     * @param item 对象编号
     * @param owner 所有者编号
     * @param category 分类
     * @param page 页数
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerAbuseReportListabusereportlistviewGet(
accept: 'application/json',
item?: string,
owner?: string,
category?: string,
page?: number,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/abusereportlist/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'item': item,
                'owner': owner,
                'category': category,
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * 查看举报页
     * 查看举报页
     * @param accept Accept Header
     * @param report 举报编号
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerAbuseReportabusereportviewGet(
accept: 'application/json',
report?: string,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/abusereport/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'report': report,
            },
        });
        return result.body;
    }

    /**
     * 查看可审核对象列表页
     * 查看可审核对象列表页
     * @param accept Accept Header
     * @param guild 教会编号
     * @param user 用户编号
     * @param type 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
     * @param status 状态（-2: 已屏蔽; -1: 已解散; 0: 正常; 1: 未开始/未发布; 2: 已结束; 3: 已中断）
     * @param audited 是否已审核
     * @param page 页数
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerAuditListauditlistviewGet(
accept: 'application/json',
guild?: string,
user?: string,
type?: number,
status?: number,
audited?: boolean,
page?: number,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/auditlist/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'guild': guild,
                'user': user,
                'type': type,
                'status': status,
                'audited': audited,
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * 查看可审核对象页
     * 查看可审核对象页
     * @param accept Accept Header
     * @param item 对象编号
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerAuditauditviewGet(
accept: 'application/json',
item?: string,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/audit/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'item': item,
            },
        });
        return result.body;
    }

    /**
     * 查看被屏蔽可审核对象列表页
     * 查看被屏蔽可审核对象列表页
     * @param accept Accept Header
     * @param guild 教会编号
     * @param user 用户编号
     * @param type 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
     * @param status 状态（-2: 已屏蔽; -1: 已解散; 0: 正常; 1: 未开始/未发布; 2: 已结束; 3: 已中断）
     * @param page 页数
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerBlockedAuditListblockedauditlistviewGet(
accept: 'application/json',
guild?: string,
user?: string,
type?: number,
status?: number,
page?: number,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/blockedauditlist/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'guild': guild,
                'user': user,
                'type': type,
                'status': status,
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * 查看教会充值列表页
     * 查看教会充值列表页
     * @param accept Accept Header
     * @param guild 教会编号
     * @param type 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
     * @param page 页数
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerChargeListchargelistviewGet(
accept: 'application/json',
guild?: string,
type?: number,
page?: number,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/chargelist/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'guild': guild,
                'type': type,
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * 查看教会消费列表页
     * 查看教会消费列表页
     * @param accept Accept Header
     * @param guild 教会编号
     * @param type 类型（0: 钞票; 1: 直播流量; 2: 音视频分钟数）
     * @param page 页数
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerConsumeListconsumelistviewGet(
accept: 'application/json',
guild?: string,
type?: number,
page?: number,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/consumelist/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'guild': guild,
                'type': type,
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * 查看反馈列表页
     * 查看反馈列表页
     * @param accept Accept Header
     * @param user 用户编号
     * @param replied 是否已回复
     * @param page 页数
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerFeedbackListfeedbacklistviewGet(
accept: 'application/json',
user?: string,
replied?: boolean,
page?: number,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/feedbacklist/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'user': user,
                'replied': replied,
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * 查看反馈页
     * 查看反馈页
     * @param accept Accept Header
     * @param feedback 反馈编号
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerFeedbackfeedbackviewGet(
accept: 'application/json',
feedback?: string,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/feedback/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'feedback': feedback,
            },
        });
        return result.body;
    }

    /**
     * 查看教会违规列表页
     * 查看教会违规列表页
     * @param accept Accept Header
     * @param violations 违规次数
     * @param page 页数
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerGuildListguildlistviewGet(
accept: 'application/json',
violations?: number,
page?: number,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/guildlist/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'violations': violations,
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * 查看教会违规列表页
     * 查看教会违规列表页
     * @param accept Accept Header
     * @param guild 教会编号
     * @param type 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
     * @param page 页数
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerGuildViolationListguildviolationlistviewGet(
accept: 'application/json',
guild?: string,
type?: number,
page?: number,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/guildviolationlist/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'guild': guild,
                'type': type,
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * 查看管理后台主页
     * 查看管理后台主页
     * @param accept Accept Header
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerHomehomeviewGet(
accept: 'application/json',
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/home/view`,
            headers: {
                'Accept': accept,
            },
        });
        return result.body;
    }

    /**
     * 查看管理后台登录页
     * 查看管理后台登录页
     * @param accept Accept Header
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerLoginloginviewGet(
accept: 'application/json',
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/login/view`,
            headers: {
                'Accept': accept,
            },
        });
        return result.body;
    }

    /**
     * 查看教会总数量列表页
     * 查看教会总数量列表页
     * @param accept Accept Header
     * @param page 页数
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerTotalAmountListtotalamountlistviewGet(
accept: 'application/json',
page?: number,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/totalamountlist/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * 查看用户违规列表页
     * 查看用户违规列表页
     * @param accept Accept Header
     * @param violations 违规次数
     * @param page 页数
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerUserListuserlistviewGet(
accept: 'application/json',
violations?: number,
page?: number,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/userlist/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'violations': violations,
                'page': page,
            },
        });
        return result.body;
    }

    /**
     * 查看用户违规列表页
     * 查看用户违规列表页
     * @param accept Accept Header
     * @param user 用户编号
     * @param type 类型（-1: 教会; -11: 教会成员; 0: 通知; 1: 直播; 2: 讨论; 20: 讨论内容; 201: 讨论内容评论）
     * @param page 页数
     * @returns Object Success
     * @throws ApiError
     */
    public static async viewManagerUserViolationListuserviolationlistviewGet(
accept: 'application/json',
user?: string,
type?: number,
page?: number,
): Promise<Object> {
        const result = await __request({
            method: 'GET',
            path: `/admin/userviolationlist/view`,
            headers: {
                'Accept': accept,
            },
            query: {
                'user': user,
                'type': type,
                'page': page,
            },
        });
        return result.body;
    }

}