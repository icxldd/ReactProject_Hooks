/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponseStatus } from './ResponseStatus';
import type { RoomDto } from './RoomDto';

/**
 * ShowLivecastRoomInfoResponse
 */
export type ShowLivecastRoomInfoResponse = {
    /**
     * 房间信息
     */
    roomDto?: RoomDto;
    /**
     * 处理响应的状态
     */
    responseStatus?: ResponseStatus;
}