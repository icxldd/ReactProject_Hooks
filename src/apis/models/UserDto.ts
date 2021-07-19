/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * UserDto
 */
export type UserDto = {
    userId?: string;
    displayName?: string;
    signature?: string;
    description?: string;
    avatarUrl?: string;
    coverUrl?: string;
    isCertificated?: boolean;
    country?: string;
    province?: string;
    city?: string;
    createdDate?: string;
    violationCount?: number;
    isBlocked?: boolean;
    defaultUsingGuildId?: string;
    defaultUsingGuildName?: string;
    userPhone?: string;
}