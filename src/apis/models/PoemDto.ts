/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * PoemDto
 */
export type PoemDto = {
    poemId?: number;
    /**
     * 诗歌名称
     */
    bookName?: string;
    /**
     * 诗歌描述
     */
    bookDescription?: string;
    /**
     * 诗歌封面图
     */
    bookAvatarUrl?: string;
    bookDescriptionUrl?: string;
    createDate?: string;
    /**
     * 人气值
     */
    heatDescription?: string;
}