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
 * The UserCreate model module.
 * @module model/UserCreate
 * @version 0.0.1
 */
export class UserCreate {
  /**
   * Constructs a new <code>UserCreate</code>.
   * @alias module:model/UserCreate
   * @class
   * @param username {String} 
   * @param email {String} 
   * @param password {String} 
   */
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  /**
   * Constructs a <code>UserCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserCreate} obj Optional instance to populate.
   * @return {module:model/UserCreate} The populated <code>UserCreate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserCreate();
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('fullname'))
        obj.fullname = ApiClient.convertToType(data['fullname'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} username
 */
UserCreate.prototype.username = undefined;

/**
 * @member {String} email
 */
UserCreate.prototype.email = undefined;

/**
 * @member {String} fullname
 */
UserCreate.prototype.fullname = undefined;

/**
 * @member {Date} createdAt
 */
UserCreate.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
UserCreate.prototype.updatedAt = undefined;

/**
 * @member {String} password
 */
UserCreate.prototype.password = undefined;

