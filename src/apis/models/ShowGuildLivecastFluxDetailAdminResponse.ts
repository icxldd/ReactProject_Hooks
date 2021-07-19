/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Object } from './Object';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowGuildLivecastFluxDetailAdminResponse
 */
export type ShowGuildLivecastFluxDetailAdminResponse = {
    /**
     * 教会流量详情
     */
    objects?: Array<Object>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}