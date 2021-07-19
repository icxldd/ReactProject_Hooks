/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BeliefEquipDto } from './BeliefEquipDto';
import type { ResponseStatus } from './ResponseStatus';

/**
 * CreateBeliefEquipResponse
 */
export type CreateBeliefEquipResponse = {
    /**
     * 信仰装备列表
     */
    beliefEquip?: Array<BeliefEquipDto>;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}