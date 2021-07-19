/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InformationDto } from './InformationDto';
import type { OtherInformationsDto } from './OtherInformationsDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowGuildHomeResponse
 */
export type ShowGuildHomeResponse = {
    /**
     * 一组通知消息
     */
    notifications?: Array<InformationDto>;
    /**
     * 一组讨论消息
     */
    discuss?: Array<InformationDto>;
    /**
     * 直播消息
     */
    livecast?: Array<InformationDto>;
    /**
     * 其它消息
     */
    otherInformations?: Array<OtherInformationsDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}