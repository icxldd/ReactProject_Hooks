/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InformationDto } from './InformationDto';
import type { UserDto } from './UserDto';

/**
 * InformationAbuseReportDto
 */
export type InformationAbuseReportDto = {
    reportId?: string;
    informationId?: string;
    information?: InformationDto;
    category?: string;
    description?: string;
    ownerId?: number;
    owner?: UserDto;
}