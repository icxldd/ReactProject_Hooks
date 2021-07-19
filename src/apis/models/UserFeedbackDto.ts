/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserDto } from './UserDto';

/**
 * UserFeedbackDto
 */
export type UserFeedbackDto = {
    feedbackId?: string;
    userId?: string;
    user?: UserDto;
    description?: string;
    createdDate?: string;
    isReplied?: boolean;
    replierId?: string;
    replier?: UserDto;
    repliedDescription?: string;
    repliedDate?: string;
}