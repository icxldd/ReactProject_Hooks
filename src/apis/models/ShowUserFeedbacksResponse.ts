/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';
import type { UserFeedbackDto } from './UserFeedbackDto';

/**
 * ShowUserFeedbacksResponse
 */
export type ShowUserFeedbacksResponse = {
    /**
     * 一组用户反馈信息
     */
    feedbacks?: Array<UserFeedbackDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}