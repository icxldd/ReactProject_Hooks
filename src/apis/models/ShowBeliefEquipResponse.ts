/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BeliefEquipDto } from './BeliefEquipDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * ShowBeliefEquipResponse
 */
export type ShowBeliefEquipResponse = {
    /**
     * 信仰装备信息
     */
    beliefEquip?: BeliefEquipDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}