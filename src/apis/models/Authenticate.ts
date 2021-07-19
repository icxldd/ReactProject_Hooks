/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Dictionary_String_String_ } from './Dictionary_String_String_';

/**
 * Authenticate
 */
export type Authenticate = {
    provider?: string;
    state?: string;
    oauth_token?: string;
    oauth_verifier?: string;
    userName?: string;
    password?: string;
    rememberMe?: boolean;
    continue?: string;
    errorView?: string;
    nonce?: string;
    uri?: string;
    response?: string;
    qop?: string;
    nc?: string;
    cnonce?: string;
    useTokenCookie?: boolean;
    accessToken?: string;
    accessTokenSecret?: string;
    scope?: string;
    meta?: Dictionary_String_String_;
}