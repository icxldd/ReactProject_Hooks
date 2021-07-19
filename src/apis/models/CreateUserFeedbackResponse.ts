/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';
import type { UserFeedbackDto } from './UserFeedbackDto';

/**
 * CreateUserFeedbackResponse
 */
export type CreateUserFeedbackResponse = {
    /**
     * 用户反馈信息
     */
    feedback?: UserFeedbackDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}