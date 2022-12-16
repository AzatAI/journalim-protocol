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
package io.swagger.client.models


/**
 * 
 * @param grantType 
 * @param username 
 * @param password 
 * @param scope 
 * @param clientId 
 * @param clientSecret 
 */
data class BodyCreateTokenTokenPost (

    val grantType: kotlin.String? = null,
    val username: kotlin.String,
    val password: kotlin.String,
    val scope: kotlin.String? = null,
    val clientId: kotlin.String? = null,
    val clientSecret: kotlin.String? = null
) {
}