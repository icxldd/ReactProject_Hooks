/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Authenticate } from '../models/Authenticate';
import type { AuthenticateResponse } from '../models/AuthenticateResponse';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * @param accept Accept Header
     * @param provider 
     * @param state 
     * @param oauthToken 
     * @param oauthVerifier 
     * @param userName 
     * @param password 
     * @param rememberMe 
     * @param _continue 
     * @param errorView 
     * @param nonce 
     * @param uri 
     * @param response 
     * @param qop 
     * @param nc 
     * @param cnonce 
     * @param useTokenCookie 
     * @param accessToken 
     * @param accessTokenSecret 
     * @param scope 
     * @param meta 
     * @returns AuthenticateResponse Success
     * @throws ApiError
     */
    public static async authenticateGet(
accept: 'application/json',
provider?: string,
state?: string,
oauthToken?: string,
oauthVerifier?: string,
userName?: string,
password?: string,
rememberMe?: boolean,
_continue?: string,
errorView?: string,
nonce?: string,
uri?: string,
response?: string,
qop?: string,
nc?: string,
cnonce?: string,
useTokenCookie?: boolean,
accessToken?: string,
accessTokenSecret?: string,
scope?: string,
meta?: string,
): Promise<AuthenticateResponse> {
        const result = await __request({
            method: 'GET',
            path: `/auth`,
            headers: {
                'Accept': accept,
            },
            query: {
                'provider': provider,
                'State': state,
                'oauth_token': oauthToken,
                'oauth_verifier': oauthVerifier,
                'UserName': userName,
                'Password': password,
                'RememberMe': rememberMe,
                'Continue': _continue,
                'ErrorView': errorView,
                'nonce': nonce,
                'uri': uri,
                'response': response,
                'qop': qop,
                'nc': nc,
                'cnonce': cnonce,
                'UseTokenCookie': useTokenCookie,
                'AccessToken': accessToken,
                'AccessTokenSecret': accessTokenSecret,
                'scope': scope,
                'Meta': meta,
            },
        });
        return result.body;
    }

    /**
     * @param accept Accept Header
     * @param provider 
     * @param state 
     * @param oauthToken 
     * @param oauthVerifier 
     * @param userName 
     * @param password 
     * @param rememberMe 
     * @param _continue 
     * @param errorView 
     * @param nonce 
     * @param uri 
     * @param response 
     * @param qop 
     * @param nc 
     * @param cnonce 
     * @param useTokenCookie 
     * @param accessToken 
     * @param accessTokenSecret 
     * @param scope 
     * @param meta 
     * @param body 
     * @returns AuthenticateResponse Success
     * @throws ApiError
     */
    public static async authenticateCreate(
accept: 'application/json',
provider?: string,
state?: string,
oauthToken?: string,
oauthVerifier?: string,
userName?: string,
password?: string,
rememberMe?: boolean,
_continue?: string,
errorView?: string,
nonce?: string,
uri?: string,
response?: string,
qop?: string,
nc?: string,
cnonce?: string,
useTokenCookie?: boolean,
accessToken?: string,
accessTokenSecret?: string,
scope?: string,
meta?: string,
body?: Authenticate,
): Promise<AuthenticateResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/auth`,
            headers: {
                'Accept': accept,
            },
            query: {
                'provider': provider,
                'State': state,
                'oauth_token': oauthToken,
                'oauth_verifier': oauthVerifier,
                'UserName': userName,
                'Password': password,
                'RememberMe': rememberMe,
                'Continue': _continue,
                'ErrorView': errorView,
                'nonce': nonce,
                'uri': uri,
                'response': response,
                'qop': qop,
                'nc': nc,
                'cnonce': cnonce,
                'UseTokenCookie': useTokenCookie,
                'AccessToken': accessToken,
                'AccessTokenSecret': accessTokenSecret,
                'scope': scope,
                'Meta': meta,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * @param accept Accept Header
     * @param provider 
     * @param state 
     * @param oauthToken 
     * @param oauthVerifier 
     * @param userName 
     * @param password 
     * @param rememberMe 
     * @param _continue 
     * @param errorView 
     * @param nonce 
     * @param uri 
     * @param response 
     * @param qop 
     * @param nc 
     * @param cnonce 
     * @param useTokenCookie 
     * @param accessToken 
     * @param accessTokenSecret 
     * @param scope 
     * @param meta 
     * @param body 
     * @returns AuthenticateResponse Success
     * @throws ApiError
     */
    public static async authenticatePost(
accept: 'application/json',
provider?: string,
state?: string,
oauthToken?: string,
oauthVerifier?: string,
userName?: string,
password?: string,
rememberMe?: boolean,
_continue?: string,
errorView?: string,
nonce?: string,
uri?: string,
response?: string,
qop?: string,
nc?: string,
cnonce?: string,
useTokenCookie?: boolean,
accessToken?: string,
accessTokenSecret?: string,
scope?: string,
meta?: string,
body?: Authenticate,
): Promise<AuthenticateResponse> {
        const result = await __request({
            method: 'POST',
            path: `/auth`,
            headers: {
                'Accept': accept,
            },
            query: {
                'provider': provider,
                'State': state,
                'oauth_token': oauthToken,
                'oauth_verifier': oauthVerifier,
                'UserName': userName,
                'Password': password,
                'RememberMe': rememberMe,
                'Continue': _continue,
                'ErrorView': errorView,
                'nonce': nonce,
                'uri': uri,
                'response': response,
                'qop': qop,
                'nc': nc,
                'cnonce': cnonce,
                'UseTokenCookie': useTokenCookie,
                'AccessToken': accessToken,
                'AccessTokenSecret': accessTokenSecret,
                'scope': scope,
                'Meta': meta,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * @param accept Accept Header
     * @param provider 
     * @param state 
     * @param oauthToken 
     * @param oauthVerifier 
     * @param userName 
     * @param password 
     * @param rememberMe 
     * @param _continue 
     * @param errorView 
     * @param nonce 
     * @param uri 
     * @param response 
     * @param qop 
     * @param nc 
     * @param cnonce 
     * @param useTokenCookie 
     * @param accessToken 
     * @param accessTokenSecret 
     * @param scope 
     * @param meta 
     * @returns AuthenticateResponse Success
     * @throws ApiError
     */
    public static async authenticateDelete(
accept: 'application/json',
provider?: string,
state?: string,
oauthToken?: string,
oauthVerifier?: string,
userName?: string,
password?: string,
rememberMe?: boolean,
_continue?: string,
errorView?: string,
nonce?: string,
uri?: string,
response?: string,
qop?: string,
nc?: string,
cnonce?: string,
useTokenCookie?: boolean,
accessToken?: string,
accessTokenSecret?: string,
scope?: string,
meta?: string,
): Promise<AuthenticateResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/auth`,
            headers: {
                'Accept': accept,
            },
            query: {
                'provider': provider,
                'State': state,
                'oauth_token': oauthToken,
                'oauth_verifier': oauthVerifier,
                'UserName': userName,
                'Password': password,
                'RememberMe': rememberMe,
                'Continue': _continue,
                'ErrorView': errorView,
                'nonce': nonce,
                'uri': uri,
                'response': response,
                'qop': qop,
                'nc': nc,
                'cnonce': cnonce,
                'UseTokenCookie': useTokenCookie,
                'AccessToken': accessToken,
                'AccessTokenSecret': accessTokenSecret,
                'scope': scope,
                'Meta': meta,
            },
        });
        return result.body;
    }

    /**
     * @param accept Accept Header
     * @param provider 
     * @param state 
     * @param oauthToken 
     * @param oauthVerifier 
     * @param userName 
     * @param password 
     * @param rememberMe 
     * @param _continue 
     * @param errorView 
     * @param nonce 
     * @param uri 
     * @param response 
     * @param qop 
     * @param nc 
     * @param cnonce 
     * @param useTokenCookie 
     * @param accessToken 
     * @param accessTokenSecret 
     * @param scope 
     * @param meta 
     * @returns AuthenticateResponse Success
     * @throws ApiError
     */
    public static async authenticateproviderGet(
accept: 'application/json',
provider: string,
state?: string,
oauthToken?: string,
oauthVerifier?: string,
userName?: string,
password?: string,
rememberMe?: boolean,
_continue?: string,
errorView?: string,
nonce?: string,
uri?: string,
response?: string,
qop?: string,
nc?: string,
cnonce?: string,
useTokenCookie?: boolean,
accessToken?: string,
accessTokenSecret?: string,
scope?: string,
meta?: string,
): Promise<AuthenticateResponse> {
        const result = await __request({
            method: 'GET',
            path: `/auth/${provider}`,
            headers: {
                'Accept': accept,
            },
            query: {
                'State': state,
                'oauth_token': oauthToken,
                'oauth_verifier': oauthVerifier,
                'UserName': userName,
                'Password': password,
                'RememberMe': rememberMe,
                'Continue': _continue,
                'ErrorView': errorView,
                'nonce': nonce,
                'uri': uri,
                'response': response,
                'qop': qop,
                'nc': nc,
                'cnonce': cnonce,
                'UseTokenCookie': useTokenCookie,
                'AccessToken': accessToken,
                'AccessTokenSecret': accessTokenSecret,
                'scope': scope,
                'Meta': meta,
            },
        });
        return result.body;
    }

    /**
     * @param accept Accept Header
     * @param provider 
     * @param state 
     * @param oauthToken 
     * @param oauthVerifier 
     * @param userName 
     * @param password 
     * @param rememberMe 
     * @param _continue 
     * @param errorView 
     * @param nonce 
     * @param uri 
     * @param response 
     * @param qop 
     * @param nc 
     * @param cnonce 
     * @param useTokenCookie 
     * @param accessToken 
     * @param accessTokenSecret 
     * @param scope 
     * @param meta 
     * @param body 
     * @returns AuthenticateResponse Success
     * @throws ApiError
     */
    public static async authenticateproviderCreate(
accept: 'application/json',
provider: string,
state?: string,
oauthToken?: string,
oauthVerifier?: string,
userName?: string,
password?: string,
rememberMe?: boolean,
_continue?: string,
errorView?: string,
nonce?: string,
uri?: string,
response?: string,
qop?: string,
nc?: string,
cnonce?: string,
useTokenCookie?: boolean,
accessToken?: string,
accessTokenSecret?: string,
scope?: string,
meta?: string,
body?: Authenticate,
): Promise<AuthenticateResponse> {
        const result = await __request({
            method: 'PUT',
            path: `/auth/${provider}`,
            headers: {
                'Accept': accept,
            },
            query: {
                'State': state,
                'oauth_token': oauthToken,
                'oauth_verifier': oauthVerifier,
                'UserName': userName,
                'Password': password,
                'RememberMe': rememberMe,
                'Continue': _continue,
                'ErrorView': errorView,
                'nonce': nonce,
                'uri': uri,
                'response': response,
                'qop': qop,
                'nc': nc,
                'cnonce': cnonce,
                'UseTokenCookie': useTokenCookie,
                'AccessToken': accessToken,
                'AccessTokenSecret': accessTokenSecret,
                'scope': scope,
                'Meta': meta,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * @param accept Accept Header
     * @param provider 
     * @param state 
     * @param oauthToken 
     * @param oauthVerifier 
     * @param userName 
     * @param password 
     * @param rememberMe 
     * @param _continue 
     * @param errorView 
     * @param nonce 
     * @param uri 
     * @param response 
     * @param qop 
     * @param nc 
     * @param cnonce 
     * @param useTokenCookie 
     * @param accessToken 
     * @param accessTokenSecret 
     * @param scope 
     * @param meta 
     * @param body 
     * @returns AuthenticateResponse Success
     * @throws ApiError
     */
    public static async authenticateproviderPost(
accept: 'application/json',
provider: string,
state?: string,
oauthToken?: string,
oauthVerifier?: string,
userName?: string,
password?: string,
rememberMe?: boolean,
_continue?: string,
errorView?: string,
nonce?: string,
uri?: string,
response?: string,
qop?: string,
nc?: string,
cnonce?: string,
useTokenCookie?: boolean,
accessToken?: string,
accessTokenSecret?: string,
scope?: string,
meta?: string,
body?: Authenticate,
): Promise<AuthenticateResponse> {
        const result = await __request({
            method: 'POST',
            path: `/auth/${provider}`,
            headers: {
                'Accept': accept,
            },
            query: {
                'State': state,
                'oauth_token': oauthToken,
                'oauth_verifier': oauthVerifier,
                'UserName': userName,
                'Password': password,
                'RememberMe': rememberMe,
                'Continue': _continue,
                'ErrorView': errorView,
                'nonce': nonce,
                'uri': uri,
                'response': response,
                'qop': qop,
                'nc': nc,
                'cnonce': cnonce,
                'UseTokenCookie': useTokenCookie,
                'AccessToken': accessToken,
                'AccessTokenSecret': accessTokenSecret,
                'scope': scope,
                'Meta': meta,
            },
            body: body,
        });
        return result.body;
    }

    /**
     * @param accept Accept Header
     * @param provider 
     * @param state 
     * @param oauthToken 
     * @param oauthVerifier 
     * @param userName 
     * @param password 
     * @param rememberMe 
     * @param _continue 
     * @param errorView 
     * @param nonce 
     * @param uri 
     * @param response 
     * @param qop 
     * @param nc 
     * @param cnonce 
     * @param useTokenCookie 
     * @param accessToken 
     * @param accessTokenSecret 
     * @param scope 
     * @param meta 
     * @returns AuthenticateResponse Success
     * @throws ApiError
     */
    public static async authenticateproviderDelete(
accept: 'application/json',
provider: string,
state?: string,
oauthToken?: string,
oauthVerifier?: string,
userName?: string,
password?: string,
rememberMe?: boolean,
_continue?: string,
errorView?: string,
nonce?: string,
uri?: string,
response?: string,
qop?: string,
nc?: string,
cnonce?: string,
useTokenCookie?: boolean,
accessToken?: string,
accessTokenSecret?: string,
scope?: string,
meta?: string,
): Promise<AuthenticateResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/auth/${provider}`,
            headers: {
                'Accept': accept,
            },
            query: {
                'State': state,
                'oauth_token': oauthToken,
                'oauth_verifier': oauthVerifier,
                'UserName': userName,
                'Password': password,
                'RememberMe': rememberMe,
                'Continue': _continue,
                'ErrorView': errorView,
                'nonce': nonce,
                'uri': uri,
                'response': response,
                'qop': qop,
                'nc': nc,
                'cnonce': cnonce,
                'UseTokenCookie': useTokenCookie,
                'AccessToken': accessToken,
                'AccessTokenSecret': accessTokenSecret,
                'scope': scope,
                'Meta': meta,
            },
        });
        return result.body;
    }

}