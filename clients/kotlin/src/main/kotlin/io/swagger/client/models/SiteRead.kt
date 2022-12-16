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
 * @param createdAt 
 * @param updatedAt 
 * @param title 
 * @param description 
 * @param logo 
 * @param siteUrl 
 * @param id 
 */
data class SiteRead (

    val createdAt: java.time.LocalDateTime? = null,
    val updatedAt: java.time.LocalDateTime? = null,
    val title: kotlin.String,
    val description: kotlin.String? = null,
    val logo: kotlin.String? = null,
    val siteUrl: kotlin.String? = null,
    val id: kotlin.Int
) {
}