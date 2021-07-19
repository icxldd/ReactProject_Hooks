/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ChangeBlocStatusAdmin
 */
export type ChangeBlocStatusAdmin = {
    /**
     * 标识ID
     */
    identificationId?: string;
    /**
     * 类型0：通知；1：直播；2：讨论；3：教会；
     */
    blocType?: number;
    /**
     * true:正常；false：删除
     */
    blocValue?: boolean;
}