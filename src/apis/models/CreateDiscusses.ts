/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileInfo } from './FileInfo';

/**
 * CreateDiscusses
 */
export type CreateDiscusses = {
    /**
     * 主题
     */
    title?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 标识图片地址
     */
    avatarUrl?: string;
    /**
     * 结束时间
     */
    endDate?: string;
    /**
     * 文件列表
     */
    files?: Array<FileInfo>;
    /**
     * 接收者成员列表
     */
    receiverMemberIds?: Array<string>;
    /**
     * 是否置顶
     */
    isFeatured?: boolean;
    /**
     * 置顶过期时间
     */
    featuredExpiryDate?: string;
    /**
     * 是否复制文件到教会文件中
     */
    shouldCopyFiles?: boolean;
    /**
     * linkUrl
     */
    linkUrl?: string;
}