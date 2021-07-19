/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Dictionary_String_String_ } from './Dictionary_String_String_';
import type { ResponseStatus } from './ResponseStatus';

/**
 * AuthenticateResponse
 */
export type AuthenticateResponse = {
    userId?: string;
    sessionId?: string;
    userName?: string;
    displayName?: string;
    referrerUrl?: string;
    bearerToken?: string;
    refreshToken?: string;
    profileUrl?: string;
    roles?: Array<string>;
    permissions?: Array<string>;
    responseStatus?: ResponseStatus;
    meta?: Dictionary_String_String_;
}