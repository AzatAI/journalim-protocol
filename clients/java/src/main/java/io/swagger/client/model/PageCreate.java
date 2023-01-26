/*
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

package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * PageCreate
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2022-12-16T10:25:26.213Z[GMT]")
public class PageCreate {
  @SerializedName("title")
  private String title = null;

  @SerializedName("description")
  private String description = null;

  @SerializedName("keywords")
  private String keywords = null;

  @SerializedName("author")
  private String author = null;

  @SerializedName("featured_image")
  private String featuredImage = null;

  @SerializedName("content")
  private String content = null;

  @SerializedName("site_id")
  private Integer siteId = null;

  public PageCreate title(String title) {
    this.title = title;
    return this;
  }

   /**
   * Get title
   * @return title
  **/
  @Schema(required = true, description = "")
  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public PageCreate description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Get description
   * @return description
  **/
  @Schema(description = "")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public PageCreate keywords(String keywords) {
    this.keywords = keywords;
    return this;
  }

   /**
   * Get keywords
   * @return keywords
  **/
  @Schema(description = "")
  public String getKeywords() {
    return keywords;
  }

  public void setKeywords(String keywords) {
    this.keywords = keywords;
  }

  public PageCreate author(String author) {
    this.author = author;
    return this;
  }

   /**
   * Get author
   * @return author
  **/
  @Schema(description = "")
  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public PageCreate featuredImage(String featuredImage) {
    this.featuredImage = featuredImage;
    return this;
  }

   /**
   * Get featuredImage
   * @return featuredImage
  **/
  @Schema(description = "")
  public String getFeaturedImage() {
    return featuredImage;
  }

  public void setFeaturedImage(String featuredImage) {
    this.featuredImage = featuredImage;
  }

  public PageCreate content(String content) {
    this.content = content;
    return this;
  }

   /**
   * Get content
   * @return content
  **/
  @Schema(description = "")
  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public PageCreate siteId(Integer siteId) {
    this.siteId = siteId;
    return this;
  }

   /**
   * A Page must belongs to one of the site.
   * @return siteId
  **/
  @Schema(description = "A Page must belongs to one of the site.")
  public Integer getSiteId() {
    return siteId;
  }

  public void setSiteId(Integer siteId) {
    this.siteId = siteId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PageCreate pageCreate = (PageCreate) o;
    return Objects.equals(this.title, pageCreate.title) &&
        Objects.equals(this.description, pageCreate.description) &&
        Objects.equals(this.keywords, pageCreate.keywords) &&
        Objects.equals(this.author, pageCreate.author) &&
        Objects.equals(this.featuredImage, pageCreate.featuredImage) &&
        Objects.equals(this.content, pageCreate.content) &&
        Objects.equals(this.siteId, pageCreate.siteId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(title, description, keywords, author, featuredImage, content, siteId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PageCreate {\n");
    
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    keywords: ").append(toIndentedString(keywords)).append("\n");
    sb.append("    author: ").append(toIndentedString(author)).append("\n");
    sb.append("    featuredImage: ").append(toIndentedString(featuredImage)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    siteId: ").append(toIndentedString(siteId)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}