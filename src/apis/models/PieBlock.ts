/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PieBlockDataItem } from './PieBlockDataItem';

/**
 * PieBlock
 */
export type PieBlock = {
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
     * 名字数组
     */
    nameData?: Array<string>;
    /**
     * 名字数组以及值
     */
    data?: Array<PieBlockDataItem>;
}