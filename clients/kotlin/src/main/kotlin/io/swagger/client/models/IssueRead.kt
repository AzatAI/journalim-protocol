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
 * @param version 
 * @param author 
 * @param image 
 * @param keywords 
 * @param description 
 * @param longDescription 
 * @param publicationId 
 * @param id 
 */
data class IssueRead (

    val createdAt: java.time.LocalDateTime? = null,
    val updatedAt: java.time.LocalDateTime? = null,
    val title: kotlin.String,
    val version: kotlin.String,
    val author: kotlin.String? = null,
    val image: kotlin.String? = null,
    val keywords: kotlin.String? = null,
    val description: kotlin.String? = null,
    val longDescription: kotlin.String? = null,
    val publicationId: kotlin.Int? = null,
    val id: kotlin.Int
) {
}