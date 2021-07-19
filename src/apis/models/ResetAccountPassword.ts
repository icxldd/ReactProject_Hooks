/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * ResetAccountPassword
 */
export type ResetAccountPassword = {
    /**
     * 手机号码
     */
    phoneNumber?: string;
    /**
     * 验证码
     */
    token?: string;
    /**
     * 重置的密码
     */
    password?: string;
}