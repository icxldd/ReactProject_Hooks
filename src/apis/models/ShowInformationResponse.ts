/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InformationDto } from './InformationDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowInformationResponse
 */
export type ShowInformationResponse = {
    /**
     * information
     */
    information?: InformationDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}