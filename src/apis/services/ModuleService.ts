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
     * ??????????????????
     * ??????????????????
     * @param accept Accept Header
     * @param type *?????????????????? (1.????????????|?????? 2.?????? 3.?????? 4.?????? 5.??????)
     * @param guildId *??????ID
     * @param publishedDate *????????????
     * @param liveCastIds ????????????ID?????????Yes???????????????GuildId???Type  ??????????????????????????????????????????
     * @param title ??????
     * @param description ??????
     * @param avatarUrl ??????????????????
     * @param files ????????????
     * @param shouldPublish ????????????(?????????true)
     * @param worshipOwner ?????????|????????????(?????????null)
     * @param isFeatured ????????????(?????????false)
     * @param featuredExpiryDate ??????????????????(?????????null)
     * @param shouldCopyFiles ????????????????????????????????????(?????????false)
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param title ??????
     * @param description ??????
     * @param avatarUrl ??????????????????
     * @param endDate ????????????
     * @param files ????????????
     * @param receiverMemberIds ?????????????????????
     * @param isFeatured ????????????
     * @param featuredExpiryDate ??????????????????
     * @param shouldCopyFiles ????????????????????????????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param title ??????
     * @param description ??????
     * @param speaker ?????????
     * @param avatarUrl ??????????????????
     * @param beginDate ????????????
     * @param endDate ????????????
     * @param files ????????????
     * @param receiverMemberIds ?????????????????????
     * @param isFeatured ????????????
     * @param featuredExpiryDate ??????????????????
     * @param shouldCopyFiles ????????????????????????????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param description ??????
     * @param avatarUrl ??????????????????
     * @param files ????????????
     * @param receiverMemberIds ?????????????????????
     * @param shouldPublish ????????????
     * @param publishedScheduleDate ??????????????????
     * @param isFeatured ????????????
     * @param featuredExpiryDate ??????????????????
     * @param shouldCopyFiles ????????????????????????????????????
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
     * ??????????????????
     * ??????????????????
     * @param accept Accept Header
     * @param beliefEquipIds ????????????????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param discussId ????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param informationId ????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param livecastId ????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param notificationId ????????????
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
     * ????????????????????????
     * ????????????????????????
     * @param accept Accept Header
     * @param contentId ??????????????????
     * @param parentCommentId ??????????????????
     * @param description ??????
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
     * ????????????????????????
     * ????????????????????????
     * @param accept Accept Header
     * @param commentId ????????????????????????
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
     * ????????????????????????
     * ????????????????????????
     * @param accept Accept Header
     * @param contentId ??????????????????
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
     * ????????????????????????
     * ????????????????????????
     * @param accept Accept Header
     * @param contentId ??????????????????
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
     * ????????????????????????
     * ????????????????????????
     * @param accept Accept Header
     * @param contentId ??????????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param livecastId ????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param discussId ????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param livecastId ????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param livecastId ????????????
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
     * ????????????????????????-?????????
     * ????????????????????????-?????????
     * @param accept Accept Header
     * @param domain domain
     * @param app app
     * @param stream stream
     * @param uri uri
     * @param duration duration
     * @param startTime start_time
     * @param stopTime stop_time
     * @param event ??????
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
     * ?????????????????????
     * ?????????????????????
     * @param accept Accept Header
     * @param discussId ????????????
     * @param remindType ???????????????0: ?????????; 1: ????????????
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
     * ?????????????????????
     * ?????????????????????
     * @param accept Accept Header
     * @param informationId ????????????
     * @param remindType ???????????????0: ?????????; 1: ?????????; 2: ???????????????; 3: ???????????????
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
     * ?????????????????????
     * ?????????????????????
     * @param accept Accept Header
     * @param livecastId ????????????
     * @param remindType ???????????????0: ?????????; 1: ?????????; 2: ???????????????; 3: ???????????????
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
     * ?????????????????????
     * ?????????????????????
     * @param accept Accept Header
     * @param notificationId ????????????
     * @param remindType ???????????????0: ?????????; 1: ????????????
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
     * ???????????????????????????????????????
     * ???????????????????????????????????????
     * @param accept Accept Header
     * @param guildId ????????????
     * @param type ?????????0: ??????; 1: ??????; 2: ??????; 3: ?????????
     * @param status ?????????0: ?????????; 1: ?????????; 2: ?????????; 3: ????????????
     * @param orderBy ??????????????????????????????GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate
     * @param descending ?????????????????????
     * @param skip ???????????????
     * @param limit ???????????????
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
     * ??????????????????????????????????????????
     * ??????????????????????????????????????????
     * @param accept Accept Header
     * @param informationId ????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param livecastId ????????????|????????????
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
     * ????????????websocket???????????????
     * ????????????websocket???????????????
     * @param accept Accept Header
     * @param livecastId ????????????
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
     * ??????????????????
     * ??????????????????
     * @param accept Accept Header
     * @param discussId ????????????
     * @param type ?????????0: ??????; 1: ??????; 2: ??????; 3: ??????; 4: ?????????
     * @param description ??????
     * @param files ????????????
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
     * ??????????????????
     * ??????????????????
     * @param accept Accept Header
     * @param contentId ??????????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param informationId ????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param informationId ????????????
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
     * ??????????????????
     * ??????????????????
     * @param accept Accept Header
     * @param informationId ????????????
     * @param category ??????
     * @param description ??????
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
     * ??????????????????
     * ??????????????????
     * @param accept Accept Header
     * @param livecastId ????????????
     * @param type ?????????0: ??????; 1: ??????; 2: ??????; 3: ??????; 4: ?????????
     * @param description ??????
     * @param url ??????
     * @param avatarUrl ??????????????????
     * @param contentLength ????????????
     * @param width ??????
     * @param height ??????
     * @param duration ????????????????????????
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
     * ??????????????????
     * ??????????????????
     * @param accept Accept Header
     * @param messageId ??????????????????
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
     * ????????????????????????
     * ????????????????????????
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
     * ??????????????????
     * ??????????????????
     * @param accept Accept Header
     * @param guildId ????????????
     * @param title ??????
     * @param description ??????
     * @param avatarUrl ??????????????????
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
     * ????????????????????????
     * ????????????????????????
     * @param accept Accept Header
     * @param eventType ????????????????????????
     * @param sign ??????????????????
     * @param t ????????????????????????UNIX?????????
     * @param appid ?????????APPID
     * @param app ????????????
     * @param appname ????????????
     * @param streamId ???????????????
     * @param channelId ??????????????????
     * @param eventTime ?????????????????????UNIX?????????
     * @param sequence ???????????????
     * @param node ?????????????????? IP
     * @param userIp ???????????? IP
     * @param streamParam ????????????URL????????????
     * @param pushDuration ?????????????????????????????????????????????
     * @param errcode ??????????????????
     * @param errmsg ?????????????????????
     * @param fileId ????????????ID
     * @param fileFormat ??????????????????
     * @param startTime ???????????????????????????
     * @param endTime ???????????????????????????
     * @param duration ?????????????????????????????????????????????
     * @param fileSize ?????????????????????????????????
     * @param videoUrl ???????????????????????? URL
     * @param createTime ???????????????????????????
     * @param width ???????????????????????????
     * @param height ???????????????????????????
     * @param picUrl ??????????????????
     * @param picFullUrl ???????????? URL
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
     * ????????????????????????
     * ????????????????????????
     * @param accept Accept Header
     * @param discussId ????????????
     * @param type ?????????0: ??????; 1: ??????; 2: ??????; 3: ??????; 4: ?????????
     * @param status ?????????-2: ?????????; -1: ?????????; 0: ?????????
     * @param orderBy ??????????????????????????????UserAuthId, Type, CreatedDate, ModifiedDate, Status
     * @param descending ?????????????????????
     * @param skip ???????????????
     * @param limit ???????????????
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
     * ?????????????????????????????????
     * ?????????????????????????????????
     * @param accept Accept Header
     * @param beliefEquipId *????????????ID
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
     * ?????????????????????????????????????????????
     * ?????????????????????????????????????????????
     * @param accept Accept Header
     * @param guildId *????????????
     * @param type *?????????????????? ???1.????????????|?????? 2.?????? 3.?????? 4.?????? 5.?????????
     * @param status -2: ?????????; -1: ?????????; 0: ??????; 1: ????????????
     * @param orderBy ??????????????????????????????GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate)????????????CreatedDate???
     * @param descending ???????????????????????????????????????
     * @param skip ???????????????????????????0???
     * @param limit ???????????????????????????5;??????????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param discussId ????????????
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
     * ????????????information?????????
     * ????????????information?????????
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
     * ?????????????????????????????????
     * ?????????????????????????????????
     * @param accept Accept Header
     * @param guildId ????????????
     * @param type ?????????0: ??????; 1: ??????; 2: ??????; 3: ??????; 4: ???????????????
     * @param status ?????????0: ?????????; 1: ?????????; 2: ?????????; 3: ????????????
     * @param orderBy ??????????????????????????????GuildId, CreatorAuthId, Type, Title, CreatedDate, ModifiedDate, Status, BeginDate, EndDate
     * @param descending ?????????????????????
     * @param skip ???????????????
     * @param limit ???????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param livecastId ????????????|????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param notificationId ????????????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param identifier ??????
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
     * ????????????
     * ????????????
     * @param accept Accept Header
     * @param identifier ??????
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
     * ??????????????????
     * ??????????????????
     * @param accept Accept Header
     * @param informationIds ??????????????????
     * @param userAuthIds ??????????????????
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
     * ?????????????????????????????????????????????
     * ?????????????????????????????????????????????
     * @param accept Accept Header
     * @param discussId ????????????
     * @param orderBy ??????????????????????????????ContentId, ContentUserAuthId, ParentId, ParentUserAuthId, Type, UserAuthId, Description, CreatedDate, ModifiedDate
     * @param descending ?????????????????????
     * @param skip ???????????????
     * @param limit ???????????????
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
     * ????????????????????????????????????????????????
     * ????????????????????????????????????????????????
     * @param accept Accept Header
     * @param discussId ????????????
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