/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * PoemDetailDto
 */
export type PoemDetailDto = {
    poemDetailId?: number;
    poemId?: number;
    /**
     * 章节索引
     */
    index?: number;
    /**
     * 章节索引名称
     */
    orderName?: string;
    /**
     * 章节名
     */
    chapterName?: string;
    showUrl?: string;
    /**
     * 诗歌谱URL
     */
    showimgUrl?: string;
    createDate?: string;
    /**
     * 诗歌书籍名
     */
    bookName?: string;
}