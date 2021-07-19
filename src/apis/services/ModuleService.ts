/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateBeliefEquip } from '../models/CreateBeliefEquip';
import type { CreateBeliefEquipResponse } from '../models/CreateBeliefEquipResponse';
import type { CreateDiscussContent } from '../models/CreateDiscussContent';
import type { CreateDiscussContentComment } from '../models/CreateDiscussContentComment';
import type { CreateDiscussContentCommentResponse } from '../models/CreateDiscussContentCommentResponse';
import type { CreateDiscussContentLike } from '../models/CreateDiscussContentLike';
import type { CreateDiscussContentLikeResponse } from '../models/CreateDiscussContentLikeResponse';
import type { CreateDiscussContentResponse } from '../models/CreateDiscussContentResponse';
import type { CreateDiscusses } from '../models/CreateDiscusses';
import type { CreateDiscussesResponse } from '../models/CreateDiscussesResponse';
import type { CreateFavorite } from '../models/CreateFavorite';
import type { CreateFavoriteResponse } from '../models/CreateFavoriteResponse';
import type { CreateInformationAbuseReport } from '../models/CreateInformationAbuseReport';
import type { CreateInformationAbuseReportResponse } from '../models/CreateInformationAbuseReportResponse';
import type { CreateLivecastMessage } from '../models/CreateLivecastMessage';
import type { CreateLivecastMessageResponse } from '../models/CreateLivecastMessageResponse';
import type { CreateLivecastRtmpUrl } from '../models/CreateLivecastRtmpUrl';
import type { CreateLivecastRtmpUrlResponse } from '../models/CreateLivecastRtmpUrlResponse';
import type { CreateLivecasts } from '../models/CreateLivecasts';
import type { CreateLivecastsResponse } from '../models/CreateLivecastsResponse';
import type { CreateLocalNotification } from '../models/CreateLocalNotification';
import type { CreateLocalNotificationResponse } from '../models/CreateLocalNotificationResponse';
import type { CreateNotifications } from '../models/CreateNotifications';
import type { CreateNotificationsResponse } from '../models/CreateNotificationsResponse';
import type { DeleteBeliefEquipsResponse } from '../models/DeleteBeliefEquipsResponse';
import type { DeleteDiscussContentCommentResponse } from '../models/DeleteDiscussContentCommentResponse';
import type { DeleteDiscussContentLikeResponse } from '../models/DeleteDiscussContentLikeResponse';
import type { DeleteDiscussContentResponse } from '../models/DeleteDiscussContentResponse';
import type { DeleteDiscussResponse } from '../models/DeleteDiscussResponse';
import type { DeleteFavoriteResponse } from '../models/DeleteFavoriteResponse';
import type { DeleteInformationResponse } from '../models/DeleteInformationResponse';
import type { DeleteLivecastMessageResponse } from '../models/DeleteLivecastMessageResponse';
import type { DeleteLivecastResponse } from '../models/DeleteLivecastResponse';
import type { DeleteNotificationResponse } from '../models/DeleteNotificationResponse';
import type { EnterLivecast } from '../models/EnterLivecast';
import type { EnterLivecastResponse } from '../models/EnterLivecastResponse';
import type { JoinDiscuss } from '../models/JoinDiscuss';
import type { JoinDiscussResponse } from '../models/JoinDiscussResponse';
import type { JoinLivecast } from '../models/JoinLivecast';
import type { JoinLivecastResponse } from '../models/JoinLivecastResponse';
import type { LeaveLivecast } from '../models/LeaveLivecast';
import type { LeaveLivecastResponse } from '../models/LeaveLivecastResponse';
import type { NotifyLivecastsEvent } from '../models/NotifyLivecastsEvent';
import type { NotifyLivecastsEventAliyun } from '../models/NotifyLivecastsEventAliyun';
import type { NotifyLivecastsEventResponse } from '../models/NotifyLivecastsEventResponse';
import type { RemindDiscussReceivers } from '../models/RemindDiscussReceivers';
import type { RemindDiscussReceiversResponse } from '../models/RemindDiscussReceiversResponse';
import type { RemindInformationReceivers } from '../models/RemindInformationReceivers';
import type { RemindInformationReceiversResponse } from '../models/RemindInformationReceiversResponse';
import type { RemindLivecastReceivers } from '../models/RemindLivecastReceivers';
import type { RemindLivecastReceiversResponse } from '../models/RemindLivecastReceiversResponse';
import type { RemindNotificationReceivers } from '../models/RemindNotificationReceivers';
import type { RemindNotificationReceiversResponse } from '../models/RemindNotificationReceiversResponse';
import type { SearchDiscussContentsResponse } from '../models/SearchDiscussContentsResponse';
import type { ShowBeliefEquipResponse } from '../models/ShowBeliefEquipResponse';
import type { ShowBeliefEquipsResponse } from '../models/ShowBeliefEquipsResponse';
import type { ShowDiscussContentMessagesResponse } from '../models/ShowDiscussContentMessagesResponse';
import type { ShowDiscussResponse } from '../models/ShowDiscussResponse';
import type { ShowFavoriteInformationsResponse } from '../models/ShowFavoriteInformationsResponse';
import type { ShowInformationReceiversResponse } from '../models/ShowInformationReceiversResponse';
import type { ShowInformationResponse } from '../models/ShowInformationResponse';
import type { ShowInformationsResponse } from '../models/ShowInformationsResponse';
import type { ShowLivecastForH5Response } from '../models/ShowLivecastForH5Response';
import type { ShowLivecastResponse } from '../models/ShowLivecastResponse';
import type { ShowLivecastRoomInfoResponse } from '../models/ShowLivecastRoomInfoResponse';
import type { ShowNewDiscussContentMessagesCountResponse } from '../models/ShowNewDiscussContentMessagesCountResponse';
import type { ShowNotificationResponse } from '../models/ShowNotificationResponse';
import type { StartLivecasts } from '../models/StartLivecasts';
import type { StartLivecastsResponse } from '../models/StartLivecastsResponse';
import type { StopLivecasts } from '../models/StopLivecasts';
import type { StopLivecastsResponse } from '../models/StopLivecastsResponse';
import type { ToggleDiscussContentLike } from '../models/ToggleDiscussContentLike';
import type { ToggleDiscussContentLikeResponse } from '../models/ToggleDiscussContentLikeResponse';
import type { TranspondInformations } from '../models/TranspondInformations';
import type { TranspondInformationsResponse } from '../models/TranspondInformationsResponse';
import { request as __request } from '../core/request';

export class ModuleService {

    /**
     * 创建信仰装备
     * 创建信仰装备
     * @param accept Accept Header
     * @param type *信仰装备类型 (1.主日敬拜|聚会 2.讲道 3.唱诗 4.祷告 5.其它)
     * @param guildId *教会ID
     * @param publishedDate *敬拜时间
     * @param liveCastIds 导入直播ID时候，Yes：需要填写GuildId，Type  其它字段根据直播记录自动生成
     * @param title 标题
     * @param description 描述
     * @param avatarUrl 标识图片地址
     * @param files 文件列表
     * @param shouldPublish 是否发布(默认：true)
     * @param worshipOwner 敬拜人|敬拜教会(默认：null)
     * @param isFeatured 是否置顶(默认：false)
     * @param featuredExpiryDate 置顶过期时间(默认：null)
     * @param shouldCopyFiles 是否复制文件到教会文件中(默认：false)
     * @param linkUrl linkUrl
     * @param body 
     * @returns CreateBeliefEquipResponse Success
     * @throws ApiError
     */
    public static async createBeliefEquipbeliefequipPost(
accept: 'application/json',
type?: number,
guildId?: string,
publishedDate?: string,
liveCastIds?: Array<string>,
title?: string,
description?: string,
avatarUrl?: string,
files?: Array<any>,
shouldPublish?: boolean,
worshipOwner?: string,
isFeatured?: boolean,
featuredExpiryDate?: string,
shouldCopyFiles?: boolean,
linkUrl?: string,
body?: CreateBeliefEquip,
): Promise<CreateBeliefEquipResponse> {
        const result = await __request({
            method: 'POST',
            path: `/module/beliefequip`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'Type': type,
                'GuildId': guildId,
                'PublishedDate': publishedDate,
                'LiveCastIds': liveCastIds,
                'Title': title,
                'Description': description,
                'AvatarUrl': avatarUrl,
                'Files': files,
                'ShouldPublish': shouldPublish,
                'WorshipOwner': worshipOwner,
                'IsFeatured': isFeatured,
                'FeaturedExpiryDate': featuredExpiryDate,
                'ShouldCopyFiles': shouldCopyFiles,
                'linkUrl': linkUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 创建讨论
     * 创建讨论
     * @param accept Accept Header
     * @param title 主题
     * @param description 描述
     * @param avatarUrl 标识图片地址
     * @param endDate 结束时间
     * @param files 文件列表
     * @param receiverMemberIds 接收者成员列表
     * @param isFeatured 是否置顶
     * @param featuredExpiryDate 置顶过期时间
     * @param shouldCopyFiles 是否复制文件到教会文件中
     * @param linkUrl linkUrl
     * @param body 
     * @returns CreateDiscussesResponse Success
     * @throws ApiError
     */
    public static async createDiscussesdiscussesPost(
accept: 'application/json',
title?: string,
description?: string,
avatarUrl?: string,
endDate?: string,
files?: Array<any>,
receiverMemberIds?: Array<string>,
isFeatured?: boolean,
featuredExpiryDate?: string,
shouldCopyFiles?: boolean,
linkUrl?: string,
body?: CreateDiscusses,
): Promise<CreateDiscussesResponse> {
        const result = await __request({
            method: 'POST',
            path: `/module/discusses`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'Title': title,
                'Description': description,
                'AvatarUrl': avatarUrl,
                'EndDate': endDate,
                'Files': files,
                'ReceiverMemberIds': receiverMemberIds,
                'IsFeatured': isFeatured,
                'FeaturedExpiryDate': featuredExpiryDate,
                'ShouldCopyFiles': shouldCopyFiles,
                'linkUrl': linkUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 创建直播
     * 创建直播
     * @param accept Accept Header
     * @param title 主题
     * @param description 描述
     * @param speaker 主讲人
     * @param avatarUrl 标识图片地址
     * @param beginDate 开始时间
     * @param endDate 结束时间
     * @param files 文件列表
     * @param receiverMemberIds 接收者成员列表
     * @param isFeatured 是否置顶
     * @param featuredExpiryDate 置顶过期时间
     * @param shouldCopyFiles 是否复制文件到教会文件中
     * @param linkUrl linkUrl
     * @param body 
     * @returns CreateLivecastsResponse Success
     * @throws ApiError
     */
    public static async createLivecastslivecastsPost(
accept: 'application/json',
title?: string,
description?: string,
speaker?: string,
avatarUrl?: string,
beginDate?: string,
endDate?: string,
files?: Array<any>,
receiverMemberIds?: Array<string>,
isFeatured?: boolean,
featuredExpiryDate?: string,
shouldCopyFiles?: boolean,
linkUrl?: string,
body?: CreateLivecasts,
): Promise<CreateLivecastsResponse> {
        const result = await __request({
            method: 'POST',
            path: `/module/livecasts`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'Title': title,
                'Description': description,
                'Speaker': speaker,
                'AvatarUrl': avatarUrl,
                'BeginDate': beginDate,
                'EndDate': endDate,
                'Files': files,
                'ReceiverMemberIds': receiverMemberIds,
                'IsFeatured': isFeatured,
                'FeaturedExpiryDate': featuredExpiryDate,
                'ShouldCopyFiles': shouldCopyFiles,
                'linkUrl': linkUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 创建通知
     * 创建通知
     * @param accept Accept Header
     * @param description 描述
     * @param avatarUrl 标识图片地址
     * @param files 文件列表
     * @param receiverMemberIds 接收者成员列表
     * @param shouldPublish 是否发布
     * @param publishedScheduleDate 计划发布时间
     * @param isFeatured 是否置顶
     * @param featuredExpiryDate 置顶过期时间
     * @param shouldCopyFiles 是否复制文件到教会文件中
     * @param linkUrl linkUrl
     * @param body 
     * @returns CreateNotificationsResponse Success
     * @throws ApiError
     */
    public static async createNotificationsnotificationsPost(
accept: 'application/json',
description?: string,
avatarUrl?: string,
files?: Array<any>,
receiverMemberIds?: Array<string>,
shouldPublish?: boolean,
publishedScheduleDate?: string,
isFeatured?: boolean,
featuredExpiryDate?: string,
shouldCopyFiles?: boolean,
linkUrl?: string,
body?: CreateNotifications,
): Promise<CreateNotificationsResponse> {
        const result = await __request({
            method: 'POST',
            path: `/module/notifications`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'Description': description,
                'AvatarUrl': avatarUrl,
                'Files': files,
                'ReceiverMemberIds': receiverMemberIds,
                'ShouldPublish': shouldPublish,
                'PublishedScheduleDate': publishedScheduleDate,
                'IsFeatured': isFeatured,
                'FeaturedExpiryDate': featuredExpiryDate,
                'ShouldCopyFiles': shouldCopyFiles,
                'linkUrl': linkUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 删除信仰装备
     * 删除信仰装备
     * @param accept Accept Header
     * @param beliefEquipIds 信仰装备编号列表
     * @returns DeleteBeliefEquipsResponse Success
     * @throws ApiError
     */
    public static async deleteBeliefEquipsbeliefequipsDelete(
accept: 'application/json',
beliefEquipIds?: Array<string>,
): Promise<DeleteBeliefEquipsResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/module/beliefequips`,
            headers: {
                'Accept': accept,
            },
            query: {
                'BeliefEquipIds': beliefEquipIds,
            },
        });
        return result.body;
    }

    /**
     * 删除讨论
     * 删除讨论
     * @param accept Accept Header
     * @param discussId 讨论编号
     * @returns DeleteDiscussResponse Success
     * @throws ApiError
     */
    public static async deleteDiscussdiscussDelete(
accept: 'application/json',
discussId?: string,
): Promise<DeleteDiscussResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/module/discuss`,
            headers: {
                'Accept': accept,
            },
            query: {
                'DiscussId': discussId,
            },
        });
        return result.body;
    }

    /**
     * 删除消息
     * 删除消息
     * @param accept Accept Header
     * @param informationId 消息编号
     * @returns DeleteInformationResponse Success
     * @throws ApiError
     */
    public static async deleteInformationinformationDelete(
accept: 'application/json',
informationId?: string,
): Promise<DeleteInformationResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/module/information`,
            headers: {
                'Accept': accept,
            },
            query: {
                'InformationId': informationId,
            },
        });
        return result.body;
    }

    /**
     * 删除直播
     * 删除直播
     * @param accept Accept Header
     * @param livecastId 直播编号
     * @returns DeleteLivecastResponse Success
     * @throws ApiError
     */
    public static async deleteLivecastlivecastDelete(
accept: 'application/json',
livecastId?: string,
): Promise<DeleteLivecastResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/module/livecast`,
            headers: {
                'Accept': accept,
            },
            query: {
                'LivecastId': livecastId,
            },
        });
        return result.body;
    }

    /**
     * 删除通知
     * 删除通知
     * @param accept Accept Header
     * @param notificationId 通知编号
     * @returns DeleteNotificationResponse Success
     * @throws ApiError
     */
    public static async deleteNotificationnotificationDelete(
accept: 'application/json',
notificationId?: string,
): Promise<DeleteNotificationResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/module/notification`,
            headers: {
                'Accept': accept,
            },
            query: {
                'NotificationId': notificationId,
            },
        });
        return result.body;
    }

    /**
     * 创建讨论内容评论
     * 创建讨论内容评论
     * @param accept Accept Header
     * @param contentId 讨论内容编号
     * @param parentCommentId 上级评论编号
     * @param description 描述
     * @param body 
     * @returns CreateDiscussContentCommentResponse Success
     * @throws ApiError
     */
    public static async createDiscussContentCommentdiscusscontentcommentPost(
accept: 'application/json',
contentId?: string,
parentCommentId?: string,
description?: string,
body?: CreateDiscussContentComment,
): Promise<CreateDiscussContentCommentResponse> {
        const result = await __request({
            method: 'POST',
            path: `/module/discuss/content/comment`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'ContentId': contentId,
                'ParentCommentId': parentCommentId,
                'Description': description,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 删除讨论内容评论
     * 删除讨论内容评论
     * @param accept Accept Header
     * @param commentId 讨论内容评论编号
     * @returns DeleteDiscussContentCommentResponse Success
     * @throws ApiError
     */
    public static async deleteDiscussContentCommentdiscusscontentcommentDelete(
accept: 'application/json',
commentId?: string,
): Promise<DeleteDiscussContentCommentResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/module/discuss/content/comment`,
            headers: {
                'Accept': accept,
            },
            query: {
                'CommentId': commentId,
            },
        });
        return result.body;
    }

    /**
     * 切换讨论内容点赞
     * 切换讨论内容点赞
     * @param accept Accept Header
     * @param contentId 讨论内容编号
     * @param body 
     * @returns ToggleDiscussContentLikeResponse Success
     * @throws ApiError
     */
    public static async toggleDiscussContentLikediscusscontentlikeCreate(
accept: 'application/json',
contentId?: string,
body?: ToggleDiscussContentLike,
): Promise<ToggleDiscussContentLikeResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/module/discuss/content/like`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'ContentId': contentId,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 创建讨论内容点赞
     * 创建讨论内容点赞
     * @param accept Accept Header
     * @param contentId 讨论内容编号
     * @param body 
     * @returns CreateDiscussContentLikeResponse Success
     * @throws ApiError
     */
    public static async createDiscussContentLikediscusscontentlikePost(
accept: 'application/json',
contentId?: string,
body?: CreateDiscussContentLike,
): Promise<CreateDiscussContentLikeResponse> {
        const result = await __request({
            method: 'POST',
            path: `/module/discuss/content/like`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'ContentId': contentId,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 删除讨论内容点赞
     * 删除讨论内容点赞
     * @param accept Accept Header
     * @param contentId 讨论内容编号
     * @returns DeleteDiscussContentLikeResponse Success
     * @throws ApiError
     */
    public static async deleteDiscussContentLikediscusscontentlikeDelete(
accept: 'application/json',
contentId?: string,
): Promise<DeleteDiscussContentLikeResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/module/discuss/content/like`,
            headers: {
                'Accept': accept,
            },
            query: {
                'ContentId': contentId,
            },
        });
        return result.body;
    }

    /**
     * 进入直播
     * 进入直播
     * @param accept Accept Header
     * @param livecastId 直播编号
     * @param body 
     * @returns EnterLivecastResponse Success
     * @throws ApiError
     */
    public static async enterLivecastlivecastreceiverenterCreate(
accept: 'application/json',
livecastId?: string,
body?: EnterLivecast,
): Promise<EnterLivecastResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/module/livecast/receiver/enter`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'LivecastId': livecastId,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 参与讨论
     * 参与讨论
     * @param accept Accept Header
     * @param discussId 讨论编号
     * @param body 
     * @returns JoinDiscussResponse Success
     * @throws ApiError
     */
    public static async joinDiscussdiscussreceiverjoinCreate(
accept: 'application/json',
discussId?: string,
body?: JoinDiscuss,
): Promise<JoinDiscussResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/module/discuss/receiver/join`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'DiscussId': discussId,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 参与直播
     * 参与直播
     * @param accept Accept Header
     * @param livecastId 直播编号
     * @param body 
     * @returns JoinLivecastResponse Success
     * @throws ApiError
     */
    public static async joinLivecastlivecastreceiverjoinCreate(
accept: 'application/json',
livecastId?: string,
body?: JoinLivecast,
): Promise<JoinLivecastResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/module/livecast/receiver/join`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'LivecastId': livecastId,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 离开直播
     * 离开直播
     * @param accept Accept Header
     * @param livecastId 直播编号
     * @param body 
     * @returns LeaveLivecastResponse Success
     * @throws ApiError
     */
    public static async leaveLivecastlivecastreceiverleaveCreate(
accept: 'application/json',
livecastId?: string,
body?: LeaveLivecast,
): Promise<LeaveLivecastResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/module/livecast/receiver/leave`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'LivecastId': livecastId,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 通知直播事件消息-阿里云
     * 通知直播事件消息-阿里云
     * @param accept Accept Header
     * @param domain domain
     * @param app app
     * @param stream stream
     * @param uri uri
     * @param duration duration
     * @param startTime start_time
     * @param stopTime stop_time
     * @param event 事件
     * @param body 
     * @returns NotifyLivecastsEventResponse Success
     * @throws ApiError
     */
    public static async notifyLivecastsEventAliyunlivecastsaliyuneventPost(
accept: 'application/json',
domain?: string,
app?: string,
stream?: string,
uri?: string,
duration?: number,
startTime?: number,
stopTime?: number,
event?: string,
body?: NotifyLivecastsEventAliyun,
): Promise<NotifyLivecastsEventResponse> {
        const result = await __request({
            method: 'POST',
            path: `/module/livecasts/aliyun/event`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'domain': domain,
                'app': app,
                'stream': stream,
                'uri': uri,
                'duration': duration,
                'start_time': startTime,
                'stop_time': stopTime,
                'event': event,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 提醒讨论接收者
     * 提醒讨论接收者
     * @param accept Accept Header
     * @param discussId 讨论编号
     * @param remindType 提醒类型（0: 未查看; 1: 未参与）
     * @param body 
     * @returns RemindDiscussReceiversResponse Success
     * @throws ApiError
     */
    public static async remindDiscussReceiversdiscussreceiversremindCreate(
accept: 'application/json',
discussId?: string,
remindType?: number,
body?: RemindDiscussReceivers,
): Promise<RemindDiscussReceiversResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/module/discuss/receivers/remind`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'DiscussId': discussId,
                'RemindType': remindType,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 提醒消息接收者
     * 提醒消息接收者
     * @param accept Accept Header
     * @param informationId 消息编号
     * @param remindType 提醒类型（0: 未查看; 1: 未参与; 2: 当前不在线; 3: 从未在线）
     * @param body 
     * @returns RemindInformationReceiversResponse Success
     * @throws ApiError
     */
    public static async remindInformationReceiversinformationreceiversremindCreate(
accept: 'application/json',
informationId?: string,
remindType?: number,
body?: RemindInformationReceivers,
): Promise<RemindInformationReceiversResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/module/information/receivers/remind`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'InformationId': informationId,
                'RemindType': remindType,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 提醒直播接收者
     * 提醒直播接收者
     * @param accept Accept Header
     * @param livecastId 直播编号
     * @param remindType 提醒类型（0: 未查看; 1: 未参与; 2: 当前不在线; 3: 从未在线）
     * @param body 
     * @returns RemindLivecastReceiversResponse Success
     * @throws ApiError
     */
    public static async remindLivecastReceiverslivecastreceiversremindCreate(
accept: 'application/json',
livecastId?: string,
remindType?: number,
body?: RemindLivecastReceivers,
): Promise<RemindLivecastReceiversResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/module/livecast/receivers/remind`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'LivecastId': livecastId,
                'RemindType': remindType,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 提醒通知接收者
     * 提醒通知接收者
     * @param accept Accept Header
     * @param notificationId 通知编号
     * @param remindType 提醒类型（0: 未查看; 1: 未参与）
     * @param body 
     * @returns RemindNotificationReceiversResponse Success
     * @throws ApiError
     */
    public static async remindNotificationReceiversnotificationreceiversremindCreate(
accept: 'application/json',
notificationId?: string,
remindType?: number,
body?: RemindNotificationReceivers,
): Promise<RemindNotificationReceiversResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/module/notification/receivers/remind`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'NotificationId': notificationId,
                'RemindType': remindType,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 批量显示当前用户的收藏消息
     * 批量显示当前用户的收藏消息
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param type 类型（0: 通知; 1: 直播; 2: 讨论; 3: 团契）
     * @param status 状态（0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
     * @param orderBy 排序的字段（可选值：GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ShowFavoriteInformationsResponse Success
     * @throws ApiError
     */
    public static async showFavoriteInformationsinformationsfavoriteshowGet(
accept: 'application/json',
guildId?: string,
type?: number,
status?: number,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ShowFavoriteInformationsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/module/informations/favorite/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
                'Type': type,
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
     * 批量显示当前用户的消息接收者
     * 批量显示当前用户的消息接收者
     * @param accept Accept Header
     * @param informationId 消息编号
     * @returns ShowInformationReceiversResponse Success
     * @throws ApiError
     */
    public static async showInformationReceiversinformationreceiversshowGet(
accept: 'application/json',
informationId?: string,
): Promise<ShowInformationReceiversResponse> {
        const result = await __request({
            method: 'GET',
            path: `/module/information/receivers/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'InformationId': informationId,
            },
        });
        return result.body;
    }

    /**
     * 显示直播
     * 显示直播
     * @param accept Accept Header
     * @param livecastId 直播编号|直播标识
     * @returns ShowLivecastForH5Response Success
     * @throws ApiError
     */
    public static async showLivecastForH5Livecasth5ShowGet(
accept: 'application/json',
livecastId?: string,
): Promise<ShowLivecastForH5Response> {
        const result = await __request({
            method: 'GET',
            path: `/module/livecast/h5/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'LivecastId': livecastId,
            },
        });
        return result.body;
    }

    /**
     * 显示直播websocket房间的请求
     * 显示直播websocket房间的请求
     * @param accept Accept Header
     * @param livecastId 直播编号
     * @returns ShowLivecastRoomInfoResponse Success
     * @throws ApiError
     */
    public static async showLivecastRoomInfolivecastroomshowGet(
accept: 'application/json',
livecastId?: string,
): Promise<ShowLivecastRoomInfoResponse> {
        const result = await __request({
            method: 'GET',
            path: `/module/livecast/room/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'LivecastId': livecastId,
            },
        });
        return result.body;
    }

    /**
     * 创建讨论内容
     * 创建讨论内容
     * @param accept Accept Header
     * @param discussId 讨论编号
     * @param type 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
     * @param description 描述
     * @param files 文件列表
     * @param body 
     * @returns CreateDiscussContentResponse Success
     * @throws ApiError
     */
    public static async createDiscussContentdiscusscontentPost(
accept: 'application/json',
discussId?: string,
type?: number,
description?: string,
files?: Array<any>,
body?: CreateDiscussContent,
): Promise<CreateDiscussContentResponse> {
        const result = await __request({
            method: 'POST',
            path: `/module/discuss/content`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'DiscussId': discussId,
                'Type': type,
                'Description': description,
                'Files': files,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 删除讨论内容
     * 删除讨论内容
     * @param accept Accept Header
     * @param contentId 讨论内容编号
     * @returns DeleteDiscussContentResponse Success
     * @throws ApiError
     */
    public static async deleteDiscussContentdiscusscontentDelete(
accept: 'application/json',
contentId?: string,
): Promise<DeleteDiscussContentResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/module/discuss/content`,
            headers: {
                'Accept': accept,
            },
            query: {
                'ContentId': contentId,
            },
        });
        return result.body;
    }

    /**
     * 创建收藏
     * 创建收藏
     * @param accept Accept Header
     * @param informationId 消息编号
     * @param body 
     * @returns CreateFavoriteResponse Success
     * @throws ApiError
     */
    public static async createFavoriteinformationfavoritePost(
accept: 'application/json',
informationId?: string,
body?: CreateFavorite,
): Promise<CreateFavoriteResponse> {
        const result = await __request({
            method: 'POST',
            path: `/module/information/favorite`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'InformationId': informationId,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 删除收藏
     * 删除收藏
     * @param accept Accept Header
     * @param informationId 消息编号
     * @returns DeleteFavoriteResponse Success
     * @throws ApiError
     */
    public static async deleteFavoriteinformationfavoriteDelete(
accept: 'application/json',
informationId?: string,
): Promise<DeleteFavoriteResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/module/information/favorite`,
            headers: {
                'Accept': accept,
            },
            query: {
                'InformationId': informationId,
            },
        });
        return result.body;
    }

    /**
     * 创建消息举报
     * 创建消息举报
     * @param accept Accept Header
     * @param informationId 消息编号
     * @param category 分类
     * @param description 描述
     * @param body 
     * @returns CreateInformationAbuseReportResponse Success
     * @throws ApiError
     */
    public static async createInformationAbuseReportinformationabusereportPost(
accept: 'application/json',
informationId?: string,
category?: string,
description?: string,
body?: CreateInformationAbuseReport,
): Promise<CreateInformationAbuseReportResponse> {
        const result = await __request({
            method: 'POST',
            path: `/module/information/abusereport`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'InformationId': informationId,
                'Category': category,
                'Description': description,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 创建直播消息
     * 创建直播消息
     * @param accept Accept Header
     * @param livecastId 直播编号
     * @param type 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
     * @param description 描述
     * @param url 地址
     * @param avatarUrl 标识图片地址
     * @param contentLength 内容长度
     * @param width 宽度
     * @param height 高度
     * @param duration 时长（单位：秒）
     * @param body 
     * @returns CreateLivecastMessageResponse Success
     * @throws ApiError
     */
    public static async createLivecastMessagelivecastmessagePost(
accept: 'application/json',
livecastId?: string,
type?: number,
description?: string,
url?: string,
avatarUrl?: string,
contentLength?: number,
width?: number,
height?: number,
duration?: number,
body?: CreateLivecastMessage,
): Promise<CreateLivecastMessageResponse> {
        const result = await __request({
            method: 'POST',
            path: `/module/livecast/message`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'LivecastId': livecastId,
                'Type': type,
                'Description': description,
                'Url': url,
                'AvatarUrl': avatarUrl,
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
     * 删除直播消息
     * 删除直播消息
     * @param accept Accept Header
     * @param messageId 直播消息编号
     * @returns DeleteLivecastMessageResponse Success
     * @throws ApiError
     */
    public static async deleteLivecastMessagelivecastmessageDelete(
accept: 'application/json',
messageId?: string,
): Promise<DeleteLivecastMessageResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/module/livecast/message`,
            headers: {
                'Accept': accept,
            },
            query: {
                'MessageId': messageId,
            },
        });
        return result.body;
    }

    /**
     * 创建直播地址生成
     * 创建直播地址生成
     * @param accept Accept Header
     * @param body 
     * @returns CreateLivecastRtmpUrlResponse Success
     * @throws ApiError
     */
    public static async createLivecastRtmpUrllivecastrtmpurlPost(
accept: 'application/json',
body?: CreateLivecastRtmpUrl,
): Promise<CreateLivecastRtmpUrlResponse> {
        const result = await __request({
            method: 'POST',
            path: `/module/livecast/rtmpurl`,
            headers: {
                'Accept': accept,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 创建本地通知
     * 创建本地通知
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param title 标题
     * @param description 描述
     * @param avatarUrl 标识图片地址
     * @param body 
     * @returns CreateLocalNotificationResponse Success
     * @throws ApiError
     */
    public static async createLocalNotificationnotificationlocalPost(
accept: 'application/json',
guildId?: string,
title?: string,
description?: string,
avatarUrl?: string,
body?: CreateLocalNotification,
): Promise<CreateLocalNotificationResponse> {
        const result = await __request({
            method: 'POST',
            path: `/module/notification/local`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'GuildId': guildId,
                'Title': title,
                'Description': description,
                'AvatarUrl': avatarUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 通知直播事件消息
     * 通知直播事件消息
     * @param accept Accept Header
     * @param eventType 事件通知信息类型
     * @param sign 事件通知签名
     * @param t 事件通知签名过期UNIX时间戳
     * @param appid 用户的APPID
     * @param app 推流域名
     * @param appname 推流路径
     * @param streamId 直播流名称
     * @param channelId 同直播流名称
     * @param eventTime 事件消息产生的UNIX时间戳
     * @param sequence 消息序列号
     * @param node 直播接入点的 IP
     * @param userIp 用户推流 IP
     * @param streamParam 用户推流URL所带参数
     * @param pushDuration 断流事件通知推流时长，单位毫秒
     * @param errcode 推断流错误码
     * @param errmsg 推断流错误描述
     * @param fileId 点播文件ID
     * @param fileFormat 点播文件格式
     * @param startTime 录制文件起始时间戳
     * @param endTime 录制文件结束时间戳
     * @param duration 断流事件通知推流时长，单位毫秒
     * @param fileSize 录制文件大小，单位字节
     * @param videoUrl 录制附加文件下载 URL
     * @param createTime 录制文件结束时间戳
     * @param width 截图宽，单位为像素
     * @param height 截图高，单位为像素
     * @param picUrl 截图文件路径
     * @param picFullUrl 截图下载 URL
     * @param body 
     * @returns NotifyLivecastsEventResponse Success
     * @throws ApiError
     */
    public static async notifyLivecastsEventlivecastseventPost(
accept: 'application/json',
eventType?: number,
sign?: string,
t?: number,
appid?: number,
app?: string,
appname?: string,
streamId?: string,
channelId?: string,
eventTime?: number,
sequence?: string,
node?: string,
userIp?: string,
streamParam?: string,
pushDuration?: number,
errcode?: number,
errmsg?: string,
fileId?: string,
fileFormat?: string,
startTime?: number,
endTime?: number,
duration?: number,
fileSize?: number,
videoUrl?: string,
createTime?: number,
width?: number,
height?: number,
picUrl?: string,
picFullUrl?: string,
body?: NotifyLivecastsEvent,
): Promise<NotifyLivecastsEventResponse> {
        const result = await __request({
            method: 'POST',
            path: `/module/livecasts/event`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'event_type': eventType,
                'sign': sign,
                't': t,
                'appid': appid,
                'app': app,
                'appname': appname,
                'stream_id': streamId,
                'channel_id': channelId,
                'event_time': eventTime,
                'sequence': sequence,
                'node': node,
                'user_ip': userIp,
                'stream_param': streamParam,
                'push_duration': pushDuration,
                'errcode': errcode,
                'errmsg': errmsg,
                'file_id': fileId,
                'file_format': fileFormat,
                'start_time': startTime,
                'end_time': endTime,
                'duration': duration,
                'file_size': fileSize,
                'video_url': videoUrl,
                'create_time': createTime,
                'width': width,
                'height': height,
                'pic_url': picUrl,
                'pic_full_url': picFullUrl,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 查询一组讨论内容
     * 查询一组讨论内容
     * @param accept Accept Header
     * @param discussId 讨论编号
     * @param type 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
     * @param status 状态（-2: 已屏蔽; -1: 已删除; 0: 正常）
     * @param orderBy 排序的字段（可选值：UserAuthId, Type, CreatedDate, ModifiedDate, Status
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns SearchDiscussContentsResponse Success
     * @throws ApiError
     */
    public static async searchDiscussContentsdiscusscontentsGet(
accept: 'application/json',
discussId?: string,
type?: number,
status?: number,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<SearchDiscussContentsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/module/discuss/contents`,
            headers: {
                'Accept': accept,
            },
            query: {
                'DiscussId': discussId,
                'Type': type,
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
     * 显示单个信仰装备的请求
     * 显示单个信仰装备的请求
     * @param accept Accept Header
     * @param beliefEquipId *信仰装备ID
     * @returns ShowBeliefEquipResponse Success
     * @throws ApiError
     */
    public static async showBeliefEquipbeliefequipshowGet(
accept: 'application/json',
beliefEquipId?: string,
): Promise<ShowBeliefEquipResponse> {
        const result = await __request({
            method: 'GET',
            path: `/module/beliefequip/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'BeliefEquipId': beliefEquipId,
            },
        });
        return result.body;
    }

    /**
     * 批量显示当前用户教会的信仰装备
     * 批量显示当前用户教会的信仰装备
     * @param accept Accept Header
     * @param guildId *教会编号
     * @param type *信仰装备类型 （1.主日敬拜|聚会 2.讲道 3.唱诗 4.祷告 5.其它）
     * @param status -2: 已屏蔽; -1: 已删除; 0: 正常; 1: 等待发布
     * @param orderBy 排序的字段（可选值：GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate)（默认：CreatedDate）
     * @param descending 是否按降序排序（默认：是）
     * @param skip 忽略的行数（默认：0）
     * @param limit 获取的行数（默认：5;不填取全部）
     * @returns ShowBeliefEquipsResponse Success
     * @throws ApiError
     */
    public static async showBeliefEquipsbeliefequipsshowGet(
accept: 'application/json',
guildId?: string,
type?: number,
status?: number,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ShowBeliefEquipsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/module/beliefequips/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
                'Type': type,
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
     * 显示讨论
     * 显示讨论
     * @param accept Accept Header
     * @param discussId 讨论编号
     * @returns ShowDiscussResponse Success
     * @throws ApiError
     */
    public static async showDiscussdiscussshowGet(
accept: 'application/json',
discussId?: string,
): Promise<ShowDiscussResponse> {
        const result = await __request({
            method: 'GET',
            path: `/module/discuss/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'DiscussId': discussId,
            },
        });
        return result.body;
    }

    /**
     * 显示单个information的请求
     * 显示单个information的请求
     * @param accept Accept Header
     * @param informationId *informationId
     * @returns ShowInformationResponse Success
     * @throws ApiError
     */
    public static async showInformationinformationshowGet(
accept: 'application/json',
informationId?: string,
): Promise<ShowInformationResponse> {
        const result = await __request({
            method: 'GET',
            path: `/module/information/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'informationId': informationId,
            },
        });
        return result.body;
    }

    /**
     * 批量显示当前用户的消息
     * 批量显示当前用户的消息
     * @param accept Accept Header
     * @param guildId 教会编号
     * @param type 类型（0: 通知; 1: 直播; 2: 讨论; 3: 团契; 4: 系统消息）
     * @param status 状态（0: 进行中; 1: 未开始; 2: 已结束; 3: 已中断）
     * @param orderBy 排序的字段（可选值：GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ShowInformationsResponse Success
     * @throws ApiError
     */
    public static async showInformationsinformationsshowGet(
accept: 'application/json',
guildId?: string,
type?: number,
status?: number,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ShowInformationsResponse> {
        const result = await __request({
            method: 'GET',
            path: `/module/informations/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'GuildId': guildId,
                'Type': type,
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
     * 显示直播
     * 显示直播
     * @param accept Accept Header
     * @param livecastId 直播编号|直播标识
     * @returns ShowLivecastResponse Success
     * @throws ApiError
     */
    public static async showLivecastlivecastshowGet(
accept: 'application/json',
livecastId?: string,
): Promise<ShowLivecastResponse> {
        const result = await __request({
            method: 'GET',
            path: `/module/livecast/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'LivecastId': livecastId,
            },
        });
        return result.body;
    }

    /**
     * 显示通知
     * 显示通知
     * @param accept Accept Header
     * @param notificationId 通知编号
     * @returns ShowNotificationResponse Success
     * @throws ApiError
     */
    public static async showNotificationnotificationshowGet(
accept: 'application/json',
notificationId?: string,
): Promise<ShowNotificationResponse> {
        const result = await __request({
            method: 'GET',
            path: `/module/notification/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'NotificationId': notificationId,
            },
        });
        return result.body;
    }

    /**
     * 开始直播
     * 开始直播
     * @param accept Accept Header
     * @param identifier 标识
     * @param body 
     * @returns StartLivecastsResponse Success
     * @throws ApiError
     */
    public static async startLivecastslivecastsstartCreate(
accept: 'application/json',
identifier?: string,
body?: StartLivecasts,
): Promise<StartLivecastsResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/module/livecasts/start`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'Identifier': identifier,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 停止直播
     * 停止直播
     * @param accept Accept Header
     * @param identifier 标识
     * @param body 
     * @returns StopLivecastsResponse Success
     * @throws ApiError
     */
    public static async stopLivecastslivecastsstopCreate(
accept: 'application/json',
identifier?: string,
body?: StopLivecasts,
): Promise<StopLivecastsResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/module/livecasts/stop`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'Identifier': identifier,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 创建消息转发
     * 创建消息转发
     * @param accept Accept Header
     * @param informationIds 消息编号集合
     * @param userAuthIds 用户编号集合
     * @param body 
     * @returns TranspondInformationsResponse Success
     * @throws ApiError
     */
    public static async transpondInformationsinformationTranspondPost(
accept: 'application/json',
informationIds?: Array<string>,
userAuthIds?: Array<string>,
body?: TranspondInformations,
): Promise<TranspondInformationsResponse> {
        const result = await __request({
            method: 'POST',
            path: `/module/information/Transpond`,
            headers: {
                'Accept': accept,
            },
            formData: {
                'InformationIds': informationIds,
                'UserAuthIds': userAuthIds,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * 批量显示当前用户的讨论内容消息
     * 批量显示当前用户的讨论内容消息
     * @param accept Accept Header
     * @param discussId 讨论编号
     * @param orderBy 排序的字段（可选值：ContentId, ContentUserAuthId, ParentId, ParentUserAuthId, Type, UserAuthId, Description, CreatedDate, ModifiedDate
     * @param descending 是否按降序排序
     * @param skip 忽略的行数
     * @param limit 获取的行数
     * @returns ShowDiscussContentMessagesResponse Success
     * @throws ApiError
     */
    public static async showDiscussContentMessagesdiscusscontentmessagesshowGet(
accept: 'application/json',
discussId?: string,
orderBy?: string,
descending?: boolean,
skip?: number,
limit?: number,
): Promise<ShowDiscussContentMessagesResponse> {
        const result = await __request({
            method: 'GET',
            path: `/module/discuss/content/messages/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'DiscussId': discussId,
                'OrderBy': orderBy,
                'Descending': descending,
                'Skip': skip,
                'Limit': limit,
            },
        });
        return result.body;
    }

    /**
     * 显示当前用户的新讨论内容消息总数
     * 显示当前用户的新讨论内容消息总数
     * @param accept Accept Header
     * @param discussId 讨论编号
     * @returns ShowNewDiscussContentMessagesCountResponse Success
     * @throws ApiError
     */
    public static async showNewDiscussContentMessagesCountdiscusscontentmessagescountshowGet(
accept: 'application/json',
discussId?: string,
): Promise<ShowNewDiscussContentMessagesCountResponse> {
        const result = await __request({
            method: 'GET',
            path: `/module/discuss/content/messages/count/show`,
            headers: {
                'Accept': accept,
            },
            query: {
                'DiscussId': discussId,
            },
        });
        return result.body;
    }

}