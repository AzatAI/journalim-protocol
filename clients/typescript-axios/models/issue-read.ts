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
 * @interface IssueRead
 */
export interface IssueRead {
    /**
     * 
     * @type {Date}
     * @memberof IssueRead
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof IssueRead
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof IssueRead
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof IssueRead
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof IssueRead
     */
    author?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueRead
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueRead
     */
    keywords?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueRead
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueRead
     */
    longDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof IssueRead
     */
    publicationId?: number;
    /**
     * 
     * @type {number}
     * @memberof IssueRead
     */
    id: number;
}
