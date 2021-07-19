/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CreateGuild
 */
export type CreateGuild = {
    /**
     * 显示名称
     */
    displayName?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 标识图片地址
     */
    avatarUrl?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 省份
     */
    province?: string;
    /**
     * 城市
     */
    city?: string;
    /**
     * 所有者昵称
     */
    ownerNickname?: string;
    /**
     * 所有者头像地址
     */
    ownerAvatarUrl?: string;
}