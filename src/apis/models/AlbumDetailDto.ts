/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * AlbumDetailDto
 */
export type AlbumDetailDto = {
    albumId?: number;
    songId?: number;
    /**
     * 专辑名称
     */
    albumName?: string;
    /**
     * 歌曲名称
     */
    songName?: string;
    /**
     * 首字母
     */
    fristLetter?: string;
    /**
     * 分类
     */
    category?: string;
    /**
     * 排序
     */
    orderId?: string;
    /**
     * 时间戳
     */
    timeStamp?: string;
    /**
     * 歌词
     */
    content?: string;
    /**
     * 图片url
     */
    imgUrl?: string;
    /**
     * 伴奏url
     */
    acMusicUrl?: string;
    /**
     * 音乐url
     */
    musicUrl?: string;
    /**
     * 是否有内容
     */
    hasContent?: boolean;
    /**
     * 是否有图片
     */
    hasImgUrl?: boolean;
    /**
     * 是否有伴奏
     */
    hasAcMusicUrl?: boolean;
    /**
     * 是否有音乐
     */
    hasMusicUrl?: boolean;
}