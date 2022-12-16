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
 * The PostCreate model module.
 * @module model/PostCreate
 * @version 0.0.1
 */
export class PostCreate {
  /**
   * Constructs a new <code>PostCreate</code>.
   * @alias module:model/PostCreate
   * @class
   * @param title {String} 
   */
  constructor(title) {
    this.title = title;
  }

  /**
   * Constructs a <code>PostCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostCreate} obj Optional instance to populate.
   * @return {module:model/PostCreate} The populated <code>PostCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PostCreate();
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
    }
    return obj;
  }
}

/**
 * @member {String} title
 */
PostCreate.prototype.title = undefined;

/**
 * @member {String} description
 */
PostCreate.prototype.description = undefined;

/**
 * @member {String} keywords
 */
PostCreate.prototype.keywords = undefined;

/**
 * @member {String} author
 */
PostCreate.prototype.author = undefined;

/**
 * @member {String} featuredImage
 */
PostCreate.prototype.featuredImage = undefined;

/**
 * @member {String} content
 */
PostCreate.prototype.content = undefined;

/**
 * A Post must belongs to one of the site.
 * @member {Number} siteId
 */
PostCreate.prototype.siteId = undefined;

