/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';
import type { UserFeedbackDto } from './UserFeedbackDto';

/**
 * ShowIdeaFeedbackAdminResponse
 */
export type ShowIdeaFeedbackAdminResponse = {
    /**
     * 意见反馈列表
     */
    userFeedbackDtos?: Array<UserFeedbackDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}