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
 * @param fullname 
 * @param email 
 * @param isStaff 
 * @param isAdmin 
 */
data class UserUpdate (

    val fullname: kotlin.String? = null,
    val email: kotlin.String? = null,
    val isStaff: kotlin.Boolean? = null,
    val isAdmin: kotlin.Boolean? = null
) {
}