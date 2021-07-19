/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileInfo } from './FileInfo';

/**
 * CreateDiscussContent
 */
export type CreateDiscussContent = {
    /**
     * 讨论编号
     */
    discussId?: string;
    /**
     * 类型（0: 文本; 1: 图片; 2: 音频; 3: 视频; 4: 文档）
     */
    type?: number;
    /**
     * 描述
     */
    description?: string;
    /**
     * 文件列表
     */
    files?: Array<FileInfo>;
}