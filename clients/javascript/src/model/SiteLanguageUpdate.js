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
import {ApiClient} from '../ApiClient';

/**
 * The SiteLanguageUpdate model module.
 * @module model/SiteLanguageUpdate
 * @version 0.0.1
 */
export class SiteLanguageUpdate {
  /**
   * Constructs a new <code>SiteLanguageUpdate</code>.
   * @alias module:model/SiteLanguageUpdate
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SiteLanguageUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteLanguageUpdate} obj Optional instance to populate.
   * @return {module:model/SiteLanguageUpdate} The populated <code>SiteLanguageUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SiteLanguageUpdate();
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('alternative_logo'))
        obj.alternativeLogo = ApiClient.convertToType(data['alternative_logo'], 'String');
      if (data.hasOwnProperty('site_id'))
        obj.siteId = ApiClient.convertToType(data['site_id'], 'Number');
      if (data.hasOwnProperty('language_id'))
        obj.languageId = ApiClient.convertToType(data['language_id'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} title
 */
SiteLanguageUpdate.prototype.title = undefined;

/**
 * @member {String} description
 */
SiteLanguageUpdate.prototype.description = undefined;

/**
 * @member {String} alternativeLogo
 */
SiteLanguageUpdate.prototype.alternativeLogo = undefined;

/**
 * @member {Number} siteId
 */
SiteLanguageUpdate.prototype.siteId = undefined;

/**
 * @member {Number} languageId
 */
SiteLanguageUpdate.prototype.languageId = undefined;

