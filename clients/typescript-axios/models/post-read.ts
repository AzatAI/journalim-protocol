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
/**
 * 
 * @export
 * @interface PostRead
 */
export interface PostRead {
    /**
     * 
     * @type {Date}
     * @memberof PostRead
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PostRead
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof PostRead
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof PostRead
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PostRead
     */
    keywords?: string;
    /**
     * 
     * @type {string}
     * @memberof PostRead
     */
    author?: string;
    /**
     * 
     * @type {string}
     * @memberof PostRead
     */
    featuredImage?: string;
    /**
     * 
     * @type {string}
     * @memberof PostRead
     */
    content?: string;
    /**
     * A Post must belongs to one of the site.
     * @type {number}
     * @memberof PostRead
     */
    siteId?: number;
    /**
     * 
     * @type {number}
     * @memberof PostRead
     */
    id: number;
}
