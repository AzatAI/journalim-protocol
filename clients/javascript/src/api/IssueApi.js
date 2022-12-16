/*
 * JBS Backend Service
 * Journalim Protocol Compatible Backend Service
 *
 * OpenAPI spec version: 0.0.1
 * Contact: a@azat.ai
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.36
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {ErrorResponseModel} from '../model/ErrorResponseModel';
import {HTTPValidationError} from '../model/HTTPValidationError';
import {IssueCreate} from '../model/IssueCreate';
import {IssueLanguageCreate} from '../model/IssueLanguageCreate';
import {IssueLanguageRead} from '../model/IssueLanguageRead';
import {IssueLanguageUpdate} from '../model/IssueLanguageUpdate';
import {IssueRead} from '../model/IssueRead';
import {IssueUpdate} from '../model/IssueUpdate';
import {SuccessResponseModel} from '../model/SuccessResponseModel';

/**
* Issue service.
* @module api/IssueApi
* @version 0.0.1
*/
export class IssueApi {

    /**
    * Constructs a new IssueApi. 
    * @alias module:api/IssueApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createIssueIssuesPost operation.
     * @callback moduleapi/IssueApi~createIssueIssuesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueRead{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Issue
     * Create an Issue.
     * @param {module:model/IssueCreate} body 
     * @param {module:api/IssueApi~createIssueIssuesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createIssueIssuesPost(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createIssueIssuesPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IssueRead;

      return this.apiClient.callApi(
        '/issues', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createIssueLanguageIssueLanguagesPost operation.
     * @callback moduleapi/IssueApi~createIssueLanguageIssueLanguagesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueLanguageRead{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Issue Language
     * Create a IssueLanguage.
     * @param {module:model/IssueLanguageCreate} body 
     * @param {module:api/IssueApi~createIssueLanguageIssueLanguagesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createIssueLanguageIssueLanguagesPost(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createIssueLanguageIssueLanguagesPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IssueLanguageRead;

      return this.apiClient.callApi(
        '/issue_languages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteIssueIssuesIssueIdDelete operation.
     * @callback moduleapi/IssueApi~deleteIssueIssuesIssueIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponseModel{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Issue
     * @param {Number} issueId 
     * @param {module:api/IssueApi~deleteIssueIssuesIssueIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deleteIssueIssuesIssueIdDelete(issueId, callback) {
      
      let postBody = null;
      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling deleteIssueIssuesIssueIdDelete");
      }

      let pathParams = {
        'issue_id': issueId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SuccessResponseModel;

      return this.apiClient.callApi(
        '/issues/{issue_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteIssueLanguageIssueLanguagesIssueLanguageIdDelete operation.
     * @callback moduleapi/IssueApi~deleteIssueLanguageIssueLanguagesIssueLanguageIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponseModel{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Issue Language
     * @param {Number} issueLanguageId 
     * @param {module:api/IssueApi~deleteIssueLanguageIssueLanguagesIssueLanguageIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    deleteIssueLanguageIssueLanguagesIssueLanguageIdDelete(issueLanguageId, callback) {
      
      let postBody = null;
      // verify the required parameter 'issueLanguageId' is set
      if (issueLanguageId === undefined || issueLanguageId === null) {
        throw new Error("Missing the required parameter 'issueLanguageId' when calling deleteIssueLanguageIssueLanguagesIssueLanguageIdDelete");
      }

      let pathParams = {
        'issue_language_id': issueLanguageId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SuccessResponseModel;

      return this.apiClient.callApi(
        '/issue_languages/{issue_language_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the readIssueIssuesIssueIdGet operation.
     * @callback moduleapi/IssueApi~readIssueIssuesIssueIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueRead{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read Issue
     * @param {Number} issueId 
     * @param {module:api/IssueApi~readIssueIssuesIssueIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    readIssueIssuesIssueIdGet(issueId, callback) {
      
      let postBody = null;
      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling readIssueIssuesIssueIdGet");
      }

      let pathParams = {
        'issue_id': issueId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = IssueRead;

      return this.apiClient.callApi(
        '/issues/{issue_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the readIssueLanguageIssueLanguagesIssueLanguageIdGet operation.
     * @callback moduleapi/IssueApi~readIssueLanguageIssueLanguagesIssueLanguageIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueLanguageRead{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read Issue Language
     * @param {Number} issueLanguageId 
     * @param {module:api/IssueApi~readIssueLanguageIssueLanguagesIssueLanguageIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    readIssueLanguageIssueLanguagesIssueLanguageIdGet(issueLanguageId, callback) {
      
      let postBody = null;
      // verify the required parameter 'issueLanguageId' is set
      if (issueLanguageId === undefined || issueLanguageId === null) {
        throw new Error("Missing the required parameter 'issueLanguageId' when calling readIssueLanguageIssueLanguagesIssueLanguageIdGet");
      }

      let pathParams = {
        'issue_language_id': issueLanguageId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = IssueLanguageRead;

      return this.apiClient.callApi(
        '/issue_languages/{issue_language_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the readIssueLanguagesIssueLanguagesGet operation.
     * @callback moduleapi/IssueApi~readIssueLanguagesIssueLanguagesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/IssueLanguageRead>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read Issue Languages
     * Get all IssueLanguage.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q 
     * @param {Number} opts.offset  (default to <.>)
     * @param {Number} opts.limit  (default to <.>)
     * @param {module:api/IssueApi~readIssueLanguagesIssueLanguagesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    readIssueLanguagesIssueLanguagesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'q': opts['q'],'offset': opts['offset'],'limit': opts['limit']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [IssueLanguageRead];

      return this.apiClient.callApi(
        '/issue_languages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the readIssuesIssuesGet operation.
     * @callback moduleapi/IssueApi~readIssuesIssuesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/IssueRead>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Read Issues
     * Get all Issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q 
     * @param {Number} opts.offset  (default to <.>)
     * @param {Number} opts.limit  (default to <.>)
     * @param {module:api/IssueApi~readIssuesIssuesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    readIssuesIssuesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'q': opts['q'],'offset': opts['offset'],'limit': opts['limit']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [IssueRead];

      return this.apiClient.callApi(
        '/issues', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateIssueIssuesIssueIdPatch operation.
     * @callback moduleapi/IssueApi~updateIssueIssuesIssueIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueRead{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Issue
     * @param {module:model/IssueUpdate} body 
     * @param {Number} issueId 
     * @param {module:api/IssueApi~updateIssueIssuesIssueIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateIssueIssuesIssueIdPatch(body, issueId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateIssueIssuesIssueIdPatch");
      }
      // verify the required parameter 'issueId' is set
      if (issueId === undefined || issueId === null) {
        throw new Error("Missing the required parameter 'issueId' when calling updateIssueIssuesIssueIdPatch");
      }

      let pathParams = {
        'issue_id': issueId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IssueRead;

      return this.apiClient.callApi(
        '/issues/{issue_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateIssueLanguageIssueLanguagesIssueLanguageIdPatch operation.
     * @callback moduleapi/IssueApi~updateIssueLanguageIssueLanguagesIssueLanguageIdPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueLanguageRead{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Issue Language
     * @param {module:model/IssueLanguageUpdate} body 
     * @param {Number} issueLanguageId 
     * @param {module:api/IssueApi~updateIssueLanguageIssueLanguagesIssueLanguageIdPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateIssueLanguageIssueLanguagesIssueLanguageIdPatch(body, issueLanguageId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateIssueLanguageIssueLanguagesIssueLanguageIdPatch");
      }
      // verify the required parameter 'issueLanguageId' is set
      if (issueLanguageId === undefined || issueLanguageId === null) {
        throw new Error("Missing the required parameter 'issueLanguageId' when calling updateIssueLanguageIssueLanguagesIssueLanguageIdPatch");
      }

      let pathParams = {
        'issue_language_id': issueLanguageId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IssueLanguageRead;

      return this.apiClient.callApi(
        '/issue_languages/{issue_language_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}