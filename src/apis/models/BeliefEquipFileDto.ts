/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BeliefEquipDto } from './BeliefEquipDto';

/**
 * BeliefEquipFileDto
 */
export type BeliefEquipFileDto = {
    fileId?: string;
    guildId?: string;
    beliefEquipId?: string;
    beliefEquip?: BeliefEquipDto;
    type?: number;
    name?: string;
    url?: string;
    previewUrl?: string;
    avatarUrl?: string;
    contentType?: string;
    contentLength?: number;
    width?: number;
    height?: number;
    duration?: number;
}