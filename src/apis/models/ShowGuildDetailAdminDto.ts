/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MultiLineBlock } from './MultiLineBlock';
import type { PieBlock } from './PieBlock';
import type { SingleLineBlock } from './SingleLineBlock';
import type { TextBlock } from './TextBlock';

/**
 * ShowGuildDetailAdminDto
 */
export type ShowGuildDetailAdminDto = {
    /**
     * 占位
     */
    placeholder?: string;
    /**
     * 今日教会新增人数
     */
    toDayNewJoinCount?: TextBlock;
    /**
     * 今日直播使用流量总数
     */
    toDayLiveCastUseCount?: TextBlock;
    /**
     * 今日教会被举报总数
     */
    toDayGuildAbuseCount?: TextBlock;
    /**
     * 今日直播讨论通知发布数
     */
    toDayGuildBlocCount?: PieBlock;
    /**
     * 今日直播讨论通知举报数(未实现)
     */
    toDayGuildBlocAbuseCount?: PieBlock;
    /**
     * 总教会新增人数
     */
    sumNewJoinCount?: TextBlock;
    /**
     * 总直播使用流量总数
     */
    sumLiveCastUseCount?: TextBlock;
    /**
     * 总教会被举报总数
     */
    sumGuildAbuseCount?: TextBlock;
    /**
     * 总直播讨论通知发布数
     */
    sumGuildBlocCount?: PieBlock;
    /**
     * 总直播讨论通知举报数(未实现)
     */
    sumGuildBlocAbuseCount?: PieBlock;
    /**
     * 本月教会新增人数
     */
    currentMonthNewJoinCount?: SingleLineBlock;
    /**
     * 本月直播使用流量总数
     */
    currentMonthLiveCastUseCount?: SingleLineBlock;
    /**
     * 本月教会被举报总数
     */
    currentMonthGuildAbuseCount?: SingleLineBlock;
    /**
     * 本月直播讨论通知发布数
     */
    currentMonthGuildBlocCount?: MultiLineBlock;
    /**
     * 本月直播讨论通知举报数(未实现)
     */
    currentMonthGuildBlocAbuseCount?: MultiLineBlock;
}