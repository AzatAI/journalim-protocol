/* tslint:disable */
/* eslint-disable */
/**
 * JBS Backend Service
 * Journalim Protocol Compatible Backend Service
 *
 * OpenAPI spec version: 0.0.1
 * Contact: a@azat.ai
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ErrorResponseModel } from '../models';
import { HTTPValidationError } from '../models';
import { LanguageCreate } from '../models';
import { LanguageRead } from '../models';
import { LanguageUpdate } from '../models';
import { SuccessResponseModel } from '../models';
/**
 * LanguageApi - axios parameter creator
 * @export
 */
export const LanguageApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a Language.
         * @summary Create Language
         * @param {LanguageCreate} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLanguageLanguagesPost: async (body: LanguageCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createLanguageLanguagesPost.');
            }
            const localVarPath = `/languages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("OAuth2PasswordBearer", [])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete Language
         * @param {number} languageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteLanguageLanguagesLanguageIdDelete: async (languageId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'languageId' is not null or undefined
            if (languageId === null || languageId === undefined) {
                throw new RequiredError('languageId','Required parameter languageId was null or undefined when calling deleteLanguageLanguagesLanguageIdDelete.');
            }
            const localVarPath = `/languages/{language_id}`
                .replace(`{${"language_id"}}`, encodeURIComponent(String(languageId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("OAuth2PasswordBearer", [])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Read Language
         * @param {number} languageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readLanguageLanguagesLanguageIdGet: async (languageId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'languageId' is not null or undefined
            if (languageId === null || languageId === undefined) {
                throw new RequiredError('languageId','Required parameter languageId was null or undefined when calling readLanguageLanguagesLanguageIdGet.');
            }
            const localVarPath = `/languages/{language_id}`
                .replace(`{${"language_id"}}`, encodeURIComponent(String(languageId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all Language.
         * @summary Read Languages
         * @param {string} [q] 
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        readLanguagesLanguagesGet: async (q?: string, offset?: number, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/languages`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (q !== undefined) {
                localVarQueryParameter['q'] = q;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Language
         * @param {LanguageUpdate} body 
         * @param {number} languageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLanguageLanguagesLanguageIdPatch: async (body: LanguageUpdate, languageId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateLanguageLanguagesLanguageIdPatch.');
            }
            // verify required parameter 'languageId' is not null or undefined
            if (languageId === null || languageId === undefined) {
                throw new RequiredError('languageId','Required parameter languageId was null or undefined when calling updateLanguageLanguagesLanguageIdPatch.');
            }
            const localVarPath = `/languages/{language_id}`
                .replace(`{${"language_id"}}`, encodeURIComponent(String(languageId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("OAuth2PasswordBearer", [])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LanguageApi - functional programming interface
 * @export
 */
export const LanguageApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a Language.
         * @summary Create Language
         * @param {LanguageCreate} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createLanguageLanguagesPost(body: LanguageCreate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<LanguageRead>>> {
            const localVarAxiosArgs = await LanguageApiAxiosParamCreator(configuration).createLanguageLanguagesPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Delete Language
         * @param {number} languageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteLanguageLanguagesLanguageIdDelete(languageId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SuccessResponseModel>>> {
            const localVarAxiosArgs = await LanguageApiAxiosParamCreator(configuration).deleteLanguageLanguagesLanguageIdDelete(languageId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Read Language
         * @param {number} languageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readLanguageLanguagesLanguageIdGet(languageId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<LanguageRead>>> {
            const localVarAxiosArgs = await LanguageApiAxiosParamCreator(configuration).readLanguageLanguagesLanguageIdGet(languageId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get all Language.
         * @summary Read Languages
         * @param {string} [q] 
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readLanguagesLanguagesGet(q?: string, offset?: number, limit?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<LanguageRead>>>> {
            const localVarAxiosArgs = await LanguageApiAxiosParamCreator(configuration).readLanguagesLanguagesGet(q, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update Language
         * @param {LanguageUpdate} body 
         * @param {number} languageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLanguageLanguagesLanguageIdPatch(body: LanguageUpdate, languageId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<LanguageRead>>> {
            const localVarAxiosArgs = await LanguageApiAxiosParamCreator(configuration).updateLanguageLanguagesLanguageIdPatch(body, languageId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * LanguageApi - factory interface
 * @export
 */
export const LanguageApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a Language.
         * @summary Create Language
         * @param {LanguageCreate} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createLanguageLanguagesPost(body: LanguageCreate, options?: AxiosRequestConfig): Promise<AxiosResponse<LanguageRead>> {
            return LanguageApiFp(configuration).createLanguageLanguagesPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Language
         * @param {number} languageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteLanguageLanguagesLanguageIdDelete(languageId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<SuccessResponseModel>> {
            return LanguageApiFp(configuration).deleteLanguageLanguagesLanguageIdDelete(languageId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Read Language
         * @param {number} languageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readLanguageLanguagesLanguageIdGet(languageId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<LanguageRead>> {
            return LanguageApiFp(configuration).readLanguageLanguagesLanguageIdGet(languageId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all Language.
         * @summary Read Languages
         * @param {string} [q] 
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async readLanguagesLanguagesGet(q?: string, offset?: number, limit?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<LanguageRead>>> {
            return LanguageApiFp(configuration).readLanguagesLanguagesGet(q, offset, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Language
         * @param {LanguageUpdate} body 
         * @param {number} languageId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLanguageLanguagesLanguageIdPatch(body: LanguageUpdate, languageId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<LanguageRead>> {
            return LanguageApiFp(configuration).updateLanguageLanguagesLanguageIdPatch(body, languageId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LanguageApi - object-oriented interface
 * @export
 * @class LanguageApi
 * @extends {BaseAPI}
 */
export class LanguageApi extends BaseAPI {
    /**
     * Create a Language.
     * @summary Create Language
     * @param {LanguageCreate} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LanguageApi
     */
    public async createLanguageLanguagesPost(body: LanguageCreate, options?: AxiosRequestConfig) : Promise<AxiosResponse<LanguageRead>> {
        return LanguageApiFp(this.configuration).createLanguageLanguagesPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Delete Language
     * @param {number} languageId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LanguageApi
     */
    public async deleteLanguageLanguagesLanguageIdDelete(languageId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<SuccessResponseModel>> {
        return LanguageApiFp(this.configuration).deleteLanguageLanguagesLanguageIdDelete(languageId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Read Language
     * @param {number} languageId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LanguageApi
     */
    public async readLanguageLanguagesLanguageIdGet(languageId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<LanguageRead>> {
        return LanguageApiFp(this.configuration).readLanguageLanguagesLanguageIdGet(languageId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get all Language.
     * @summary Read Languages
     * @param {string} [q] 
     * @param {number} [offset] 
     * @param {number} [limit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LanguageApi
     */
    public async readLanguagesLanguagesGet(q?: string, offset?: number, limit?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<LanguageRead>>> {
        return LanguageApiFp(this.configuration).readLanguagesLanguagesGet(q, offset, limit, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update Language
     * @param {LanguageUpdate} body 
     * @param {number} languageId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LanguageApi
     */
    public async updateLanguageLanguagesLanguageIdPatch(body: LanguageUpdate, languageId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<LanguageRead>> {
        return LanguageApiFp(this.configuration).updateLanguageLanguagesLanguageIdPatch(body, languageId, options).then((request) => request(this.axios, this.basePath));
    }
}
