/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InformationReceiverDto } from './InformationReceiverDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowInformationReceiversResponse
 */
export type ShowInformationReceiversResponse = {
    /**
     * 一组参与的接收者信息
     */
    joinedReceivers?: Array<InformationReceiverDto>;
    /**
     * 一组未参与的接收者信息
     */
    unJoinedReceivers?: Array<InformationReceiverDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}