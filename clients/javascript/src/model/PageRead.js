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
 * The PageRead model module.
 * @module model/PageRead
 * @version 0.0.1
 */
export class PageRead {
  /**
   * Constructs a new <code>PageRead</code>.
   * @alias module:model/PageRead
   * @class
   * @param title {String} 
   * @param id {Number} 
   */
  constructor(title, id) {
    this.title = title;
    this.id = id;
  }

  /**
   * Constructs a <code>PageRead</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PageRead} obj Optional instance to populate.
   * @return {module:model/PageRead} The populated <code>PageRead</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PageRead();
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('keywords'))
        obj.keywords = ApiClient.convertToType(data['keywords'], 'String');
      if (data.hasOwnProperty('author'))
        obj.author = ApiClient.convertToType(data['author'], 'String');
      if (data.hasOwnProperty('featured_image'))
        obj.featuredImage = ApiClient.convertToType(data['featured_image'], 'String');
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('site_id'))
        obj.siteId = ApiClient.convertToType(data['site_id'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Date} createdAt
 */
PageRead.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
PageRead.prototype.updatedAt = undefined;

/**
 * @member {String} title
 */
PageRead.prototype.title = undefined;

/**
 * @member {String} description
 */
PageRead.prototype.description = undefined;

/**
 * @member {String} keywords
 */
PageRead.prototype.keywords = undefined;

/**
 * @member {String} author
 */
PageRead.prototype.author = undefined;

/**
 * @member {String} featuredImage
 */
PageRead.prototype.featuredImage = undefined;

/**
 * @member {String} content
 */
PageRead.prototype.content = undefined;

/**
 * A Page must belongs to one of the site.
 * @member {Number} siteId
 */
PageRead.prototype.siteId = undefined;

/**
 * @member {Number} id
 */
PageRead.prototype.id = undefined;

