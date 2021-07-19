/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserFeedback } from '../models/CreateUserFeedback';
import type { CreateUserFeedbackResponse } from '../models/CreateUserFeedbackResponse';
import type { ReplyUserFeedback } from '../models/ReplyUserFeedback';
import type { ReplyUserFeedbackResponse } from '../models/ReplyUserFeedbackResponse';
import type { ShowUserFeedbacksResponse } from '../models/ShowUserFeedbacksResponse';
import type { ShowUserLogsResponse } from '../models/ShowUserLogsResponse';
import type { TakeUserResponse } from '../models/TakeUserResponse';
import { request as __request } from '../core/request';

export class PeopleService {

    /**
     * 回复用户反馈
     * 回复用户反馈
     * @param accept Accept Header
     * @param feedbackId 反馈编号
     * @param description 描述
     * @param body 
     * @returns ReplyUserFeedbackResponse Success
     * @throws ApiError
     */
    public static async replyUserFeedbackuserfeedbackCreate(
accept: 'application/json',
feedbackId?: string,
description?: string,
body?: ReplyUserFeedback,
): Promise<ReplyUserFeedbackResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/people/user/feedback`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'FeedbackId': feedbackId,
                'Description': description,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 创建用户反馈
     * 创建用户反馈
     * @param accept Accept Header
     * @param description 描述
     * @param body 
     * @returns CreateUserFeedbackResponse Success
     * @throws ApiError
     */
    public static async createUserFeedbackuserfeedbackPost(
accept: 'application/json',
description?: string,
body?: CreateUserFeedback,
): Promise<CreateUserFeedbackResponse> {
        const result = await __request({
            method: 'POST',
            path: `/people/user/feedback`,
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
     * 批量显示当前用户的反馈
     * 批量显示当前用户的反馈
     * @param accept Accept Header
     * @param orderBy 排序的字段（可选值：CreatedDate
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ShowUserFeedbacksResponse Success
     * @throws ApiError
     */
    public static async showUserFeedbacksuserfeedbacksshowGet(
accept: 'application/json',
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ShowUserFeedbacksResponse> {
        const result = await __request({
            method: 'GET',
            path: `/people/user/feedbacks/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'OrderBy': orderBy,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 批量显示当前用户的日志
     * 批量显示当前用户的日志
     * @param accept Accept Header
     * @param action 操作
     * @param orderBy 排序的字段（可选值：Action, CreatedDate
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ShowUserLogsResponse Success
     * @throws ApiError
     */
    public static async showUserLogsuserlogsshowGet(
accept: 'application/json',
action?: number,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ShowUserLogsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/people/user/logs/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'Action': action,
                'OrderBy': orderBy,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 获取用户
     * 获取用户
     * @param accept Accept Header
     * @param userId 用户编号
     * @returns TakeUserResponse Success
     * @throws ApiError
     */
    public static async takeUseruserGet(
accept: 'application/json',
userId?: string,
): Promise<TakeUserResponse> {
        const result = await __request({
            method: 'GET',
            path: `/people/user`,
            headers: {
                'Accept': accept,
            },
            query: {
                'UserId': userId,
            },
        });
        return result.body;
    }

}