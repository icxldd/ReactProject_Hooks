/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileInfo } from './FileInfo';

/**
 * CreateNotifications
 */
export type CreateNotifications = {
    /**
     * 描述
     */
    description?: string;
    /**
     * 标识图片地址
     */
    avatarUrl?: string;
    /**
     * 文件列表
     */
    files?: Array<FileInfo>;
    /**
     * 接收者成员列表
     */
    receiverMemberIds?: Array<string>;
    /**
     * 是否发布
     */
    shouldPublish?: boolean;
    /**
     * 计划发布时间
     */
    publishedScheduleDate?: string;
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