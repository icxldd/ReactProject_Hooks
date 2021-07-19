/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * VersionDto
 */
export type VersionDto = {
    name?: string;
    platform?: string;
    version?: string;
    downloadUrl?: string;
    unapprovedPackages?: Array<string>;
    isForced?: boolean;
    miniSharedPath?: string;
    miniPublished?: boolean;
}