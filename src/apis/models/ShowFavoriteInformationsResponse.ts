/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InformationDto } from './InformationDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowFavoriteInformationsResponse
 */
export type ShowFavoriteInformationsResponse = {
    /**
     * 一组消息信息
     */
    informations?: Array<InformationDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}