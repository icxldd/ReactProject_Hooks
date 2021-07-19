/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Object } from './Object';

/**
 * MultiLineBlockDataItem
 */
export type MultiLineBlockDataItem = {
    /**
     * 文字块标题
     */
    name?: string;
    /**
     * 类型值
     */
    type?: string;
    /**
     * stack
     */
    stack?: string;
    /**
     * areaStyle
     */
    areaStyle?: Object;
    /**
     * 数字值
     */
    data?: Array<number>;
}