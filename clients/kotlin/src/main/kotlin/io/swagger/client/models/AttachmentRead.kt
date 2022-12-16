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
 * @param name 
 * @param path 
 * @param contentType 
 * @param description 
 * @param accessUrl 
 * @param accessType 
 * @param issueId 
 * @param id 
 */
data class AttachmentRead (

    val createdAt: java.time.LocalDateTime? = null,
    val updatedAt: java.time.LocalDateTime? = null,
    val name: kotlin.String,
    val path: kotlin.String,
    val contentType: kotlin.String,
    val description: kotlin.String? = null,
    val accessUrl: kotlin.String? = null,
    val accessType: kotlin.String? = null,
    val issueId: kotlin.Int? = null,
    val id: kotlin.Int
) {
}