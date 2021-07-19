/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MultiLineBlock } from './MultiLineBlock';
import type { SingleLineBlock } from './SingleLineBlock';
import type { TextBlock } from './TextBlock';

/**
 * ShowSystemAdminDto
 */
export type ShowSystemAdminDto = {
    /**
     * 今日用户举报数
     */
    toDayAbuseCount?: TextBlock;
    /**
     * 今日新增用户数
     */
    toDayNewUserCount?: TextBlock;
    /**
     * 今日发布直播数
     */
    toDayLivecastCount?: TextBlock;
    /**
     * 今日发布讨论数
     */
    toDayDiscussCount?: TextBlock;
    /**
     * 今日发布通知数
     */
    toDayNotificationCount?: TextBlock;
    /**
     * 今日用户反馈数
     */
    toDayUserFeedback?: TextBlock;
    /**
     * 昨天用户举报数
     */
    yesterDayAbuseCount?: TextBlock;
    /**
     * 昨天新增用户数
     */
    yesterDayNewUserCount?: TextBlock;
    /**
     * 昨天发布直播数
     */
    yesterDayLivecastCount?: TextBlock;
    /**
     * 昨天发布讨论数
     */
    yesterDayDiscussCount?: TextBlock;
    /**
     * 昨天发布通知数
     */
    yesterDayNotificationCount?: TextBlock;
    /**
     * 昨天用户反馈数
     */
    yesterDayUserFeedback?: TextBlock;
    /**
     * 总共用户举报数
     */
    sumAbuseCount?: TextBlock;
    /**
     * 总共新增用户数
     */
    sumNewUserCount?: TextBlock;
    /**
     * 总共发布直播数
     */
    sumLivecastCount?: TextBlock;
    /**
     * 总共发布讨论数
     */
    sumDiscussCount?: TextBlock;
    /**
     * 总共发布通知数
     */
    sumNotificationCount?: TextBlock;
    /**
     * 总共用户反馈数
     */
    sumUserFeedback?: TextBlock;
    /**
     * 本月系统新加用户
     */
    currentMonthNewUserCount?: SingleLineBlock;
    /**
     * 本月系统使用流量
     */
    currentMonthLiveCastUseCount?: SingleLineBlock;
    /**
     * 本月用户举报
     */
    currentMonthAbuseCount?: SingleLineBlock;
    /**
     * 本月用户反馈
     */
    currentMonthUserFeedback?: SingleLineBlock;
    /**
     * 本月直播讨论通知发布数
     */
    currentMonthBlocCount?: MultiLineBlock;
    /**
     * 今年系统新加用户
     */
    currentYearNewUserCount?: SingleLineBlock;
    /**
     * 今年系统使用流量
     */
    currentYearLiveCastUseCount?: SingleLineBlock;
    /**
     * 今年用户举报
     */
    currentYearAbuseCount?: SingleLineBlock;
    /**
     * 今年用户反馈
     */
    currentYearUserFeedback?: SingleLineBlock;
    /**
     * 今年直播讨论通知发布数
     */
    currentYearBlocCount?: MultiLineBlock;
    /**
     * 去年系统新加用户
     */
    currentYestYearNewUserCount?: SingleLineBlock;
    /**
     * 去年系统使用流量
     */
    currentYestYearLiveCastUseCount?: SingleLineBlock;
    /**
     * 去年用户举报
     */
    currentYestYearAbuseCount?: SingleLineBlock;
    /**
     * 去年用户反馈
     */
    currentYestYearUserFeedback?: SingleLineBlock;
    /**
     * 去年直播讨论通知发布数
     */
    currentYestYearBlocCount?: MultiLineBlock;
    /**
     * 总共使用直播流量（MB）
     */
    sumUsingFluxCount?: TextBlock;
}