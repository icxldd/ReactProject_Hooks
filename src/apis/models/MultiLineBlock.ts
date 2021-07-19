/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MultiLineBlockDataItem } from './MultiLineBlockDataItem';

/**
 * MultiLineBlock
 */
export type MultiLineBlock = {
    /**
     * 标题前缀
     */
    titlePreStr?: string;
    /**
     * 标题后缀
     */
    titleAfterStr?: string;
    /**
     * 标题内容
     */
    titleContextStr?: string;
    /**
     * 业务名字数组
     */
    lableNameData?: Array<string>;
    /**
     * 时间线名字数组
     */
    nameData?: Array<string>;
    /**
     * 值数组
     */
    valData?: Array<MultiLineBlockDataItem>;
}