/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * RemindInformationReceivers
 */
export type RemindInformationReceivers = {
    /**
     * 消息编号
     */
    informationId?: string;
    /**
     * 提醒类型（0: 未查看; 1: 未参与; 2: 当前不在线; 3: 从未在线）
     */
    remindType?: number;
}