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
 * The SiteUpdate model module.
 * @module model/SiteUpdate
 * @version 0.0.1
 */
export class SiteUpdate {
  /**
   * Constructs a new <code>SiteUpdate</code>.
   * @alias module:model/SiteUpdate
   * @class
   * @param title {String} 
   */
  constructor(title) {
    this.title = title;
  }

  /**
   * Constructs a <code>SiteUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteUpdate} obj Optional instance to populate.
   * @return {module:model/SiteUpdate} The populated <code>SiteUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SiteUpdate();
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('logo'))
        obj.logo = ApiClient.convertToType(data['logo'], 'String');
      if (data.hasOwnProperty('site_url'))
        obj.siteUrl = ApiClient.convertToType(data['site_url'], 'String');
      if (data.hasOwnProperty('default_title'))
        obj.defaultTitle = ApiClient.convertToType(data['default_title'], 'String');
      if (data.hasOwnProperty('default_description'))
        obj.defaultDescription = ApiClient.convertToType(data['default_description'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} title
 */
SiteUpdate.prototype.title = undefined;

/**
 * @member {String} description
 */
SiteUpdate.prototype.description = undefined;

/**
 * @member {String} logo
 */
SiteUpdate.prototype.logo = undefined;

/**
 * @member {String} siteUrl
 */
SiteUpdate.prototype.siteUrl = undefined;

/**
 * @member {String} defaultTitle
 */
SiteUpdate.prototype.defaultTitle = undefined;

/**
 * @member {String} defaultDescription
 */
SiteUpdate.prototype.defaultDescription = undefined;

