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
 * PublicationCreate
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2022-12-16T10:25:26.213Z[GMT]")
public class PublicationCreate {
  @SerializedName("title")
  private String title = null;

  @SerializedName("description")
  private String description = null;

  @SerializedName("publisher")
  private String publisher = null;

  @SerializedName("issn")
  private String issn = null;

  @SerializedName("isbn")
  private String isbn = null;

  @SerializedName("editor_in_chief")
  private String editorInChief = null;

  @SerializedName("editor_others")
  private String editorOthers = null;

  @SerializedName("contact_person")
  private String contactPerson = null;

  @SerializedName("contact_email")
  private String contactEmail = null;

  @SerializedName("contact_number")
  private String contactNumber = null;

  @SerializedName("contact_address")
  private String contactAddress = null;

  @SerializedName("subscription_fee")
  private String subscriptionFee = null;

  @SerializedName("image")
  private String image = null;

  @SerializedName("keywords")
  private String keywords = null;

  @SerializedName("long_description")
  private String longDescription = null;

  public PublicationCreate title(String title) {
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

  public PublicationCreate description(String description) {
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

  public PublicationCreate publisher(String publisher) {
    this.publisher = publisher;
    return this;
  }

   /**
   * Get publisher
   * @return publisher
  **/
  @Schema(description = "")
  public String getPublisher() {
    return publisher;
  }

  public void setPublisher(String publisher) {
    this.publisher = publisher;
  }

  public PublicationCreate issn(String issn) {
    this.issn = issn;
    return this;
  }

   /**
   * Get issn
   * @return issn
  **/
  @Schema(description = "")
  public String getIssn() {
    return issn;
  }

  public void setIssn(String issn) {
    this.issn = issn;
  }

  public PublicationCreate isbn(String isbn) {
    this.isbn = isbn;
    return this;
  }

   /**
   * Get isbn
   * @return isbn
  **/
  @Schema(description = "")
  public String getIsbn() {
    return isbn;
  }

  public void setIsbn(String isbn) {
    this.isbn = isbn;
  }

  public PublicationCreate editorInChief(String editorInChief) {
    this.editorInChief = editorInChief;
    return this;
  }

   /**
   * Get editorInChief
   * @return editorInChief
  **/
  @Schema(description = "")
  public String getEditorInChief() {
    return editorInChief;
  }

  public void setEditorInChief(String editorInChief) {
    this.editorInChief = editorInChief;
  }

  public PublicationCreate editorOthers(String editorOthers) {
    this.editorOthers = editorOthers;
    return this;
  }

   /**
   * Get editorOthers
   * @return editorOthers
  **/
  @Schema(description = "")
  public String getEditorOthers() {
    return editorOthers;
  }

  public void setEditorOthers(String editorOthers) {
    this.editorOthers = editorOthers;
  }

  public PublicationCreate contactPerson(String contactPerson) {
    this.contactPerson = contactPerson;
    return this;
  }

   /**
   * Get contactPerson
   * @return contactPerson
  **/
  @Schema(description = "")
  public String getContactPerson() {
    return contactPerson;
  }

  public void setContactPerson(String contactPerson) {
    this.contactPerson = contactPerson;
  }

  public PublicationCreate contactEmail(String contactEmail) {
    this.contactEmail = contactEmail;
    return this;
  }

   /**
   * Get contactEmail
   * @return contactEmail
  **/
  @Schema(description = "")
  public String getContactEmail() {
    return contactEmail;
  }

  public void setContactEmail(String contactEmail) {
    this.contactEmail = contactEmail;
  }

  public PublicationCreate contactNumber(String contactNumber) {
    this.contactNumber = contactNumber;
    return this;
  }

   /**
   * Get contactNumber
   * @return contactNumber
  **/
  @Schema(description = "")
  public String getContactNumber() {
    return contactNumber;
  }

  public void setContactNumber(String contactNumber) {
    this.contactNumber = contactNumber;
  }

  public PublicationCreate contactAddress(String contactAddress) {
    this.contactAddress = contactAddress;
    return this;
  }

   /**
   * Get contactAddress
   * @return contactAddress
  **/
  @Schema(description = "")
  public String getContactAddress() {
    return contactAddress;
  }

  public void setContactAddress(String contactAddress) {
    this.contactAddress = contactAddress;
  }

  public PublicationCreate subscriptionFee(String subscriptionFee) {
    this.subscriptionFee = subscriptionFee;
    return this;
  }

   /**
   * Get subscriptionFee
   * @return subscriptionFee
  **/
  @Schema(description = "")
  public String getSubscriptionFee() {
    return subscriptionFee;
  }

  public void setSubscriptionFee(String subscriptionFee) {
    this.subscriptionFee = subscriptionFee;
  }

  public PublicationCreate image(String image) {
    this.image = image;
    return this;
  }

   /**
   * Get image
   * @return image
  **/
  @Schema(description = "")
  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public PublicationCreate keywords(String keywords) {
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

  public PublicationCreate longDescription(String longDescription) {
    this.longDescription = longDescription;
    return this;
  }

   /**
   * This can be a very long html or markdown content
   * @return longDescription
  **/
  @Schema(description = "This can be a very long html or markdown content")
  public String getLongDescription() {
    return longDescription;
  }

  public void setLongDescription(String longDescription) {
    this.longDescription = longDescription;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PublicationCreate publicationCreate = (PublicationCreate) o;
    return Objects.equals(this.title, publicationCreate.title) &&
        Objects.equals(this.description, publicationCreate.description) &&
        Objects.equals(this.publisher, publicationCreate.publisher) &&
        Objects.equals(this.issn, publicationCreate.issn) &&
        Objects.equals(this.isbn, publicationCreate.isbn) &&
        Objects.equals(this.editorInChief, publicationCreate.editorInChief) &&
        Objects.equals(this.editorOthers, publicationCreate.editorOthers) &&
        Objects.equals(this.contactPerson, publicationCreate.contactPerson) &&
        Objects.equals(this.contactEmail, publicationCreate.contactEmail) &&
        Objects.equals(this.contactNumber, publicationCreate.contactNumber) &&
        Objects.equals(this.contactAddress, publicationCreate.contactAddress) &&
        Objects.equals(this.subscriptionFee, publicationCreate.subscriptionFee) &&
        Objects.equals(this.image, publicationCreate.image) &&
        Objects.equals(this.keywords, publicationCreate.keywords) &&
        Objects.equals(this.longDescription, publicationCreate.longDescription);
  }

  @Override
  public int hashCode() {
    return Objects.hash(title, description, publisher, issn, isbn, editorInChief, editorOthers, contactPerson, contactEmail, contactNumber, contactAddress, subscriptionFee, image, keywords, longDescription);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PublicationCreate {\n");
    
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    publisher: ").append(toIndentedString(publisher)).append("\n");
    sb.append("    issn: ").append(toIndentedString(issn)).append("\n");
    sb.append("    isbn: ").append(toIndentedString(isbn)).append("\n");
    sb.append("    editorInChief: ").append(toIndentedString(editorInChief)).append("\n");
    sb.append("    editorOthers: ").append(toIndentedString(editorOthers)).append("\n");
    sb.append("    contactPerson: ").append(toIndentedString(contactPerson)).append("\n");
    sb.append("    contactEmail: ").append(toIndentedString(contactEmail)).append("\n");
    sb.append("    contactNumber: ").append(toIndentedString(contactNumber)).append("\n");
    sb.append("    contactAddress: ").append(toIndentedString(contactAddress)).append("\n");
    sb.append("    subscriptionFee: ").append(toIndentedString(subscriptionFee)).append("\n");
    sb.append("    image: ").append(toIndentedString(image)).append("\n");
    sb.append("    keywords: ").append(toIndentedString(keywords)).append("\n");
    sb.append("    longDescription: ").append(toIndentedString(longDescription)).append("\n");
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