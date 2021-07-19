/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BeliefEquipDto } from './BeliefEquipDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowBeliefEquipsResponse
 */
export type ShowBeliefEquipsResponse = {
    /**
     * 一组信仰装备信息
     */
    beliefEquips?: Array<BeliefEquipDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}