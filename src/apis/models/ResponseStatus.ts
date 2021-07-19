/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Dictionary_String_String_ } from './Dictionary_String_String_';
import type { ResponseError } from './ResponseError';

/**
 * ResponseStatus
 */
export type ResponseStatus = {
    errorCode?: string;
    message?: string;
    stackTrace?: string;
    errors?: Array<ResponseError>;
    meta?: Dictionary_String_String_;
}