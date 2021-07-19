/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * RequestSecurityToken
 */
export type RequestSecurityToken = {
    /**
     * 安全戳标识（手机号码或电子邮件地址）
     */
    stampId?: string;
    /**
     * 标识类型（0: 手机号码;1: 电子邮件）
     */
    type?: number;
    /**
     * 验证码用途（可选的值：Login, Register, Bind, ResetPassword, Invite）
     */
    purpose?: string;
}