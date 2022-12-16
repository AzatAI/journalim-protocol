//
// PublicationAPI.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation
import Alamofire


open class PublicationAPI {
    /**
     Create Publication Language

     - parameter body: (body)  
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func createPublicationLanguagePublicationLanguagesPost(body: PublicationLanguageCreate, completion: @escaping ((_ data: PublicationLanguageRead?,_ error: Error?) -> Void)) {
        createPublicationLanguagePublicationLanguagesPostWithRequestBuilder(body: body).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Create Publication Language
     - POST /publication_languages

     - OAuth:
       - type: oauth2
       - name: OAuth2PasswordBearer
     - examples: [{contentType=application/json, example={
  "publication_id" : 0,
  "image" : "image",
  "updated_at" : "2000-01-23T04:56:07.000+00:00",
  "keywords" : "keywords",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "publisher" : "publisher",
  "long_description" : "long_description",
  "language_id" : 6,
  "id" : 1,
  "title" : "title"
}}]
     - parameter body: (body)  

     - returns: RequestBuilder<PublicationLanguageRead> 
     */
    open class func createPublicationLanguagePublicationLanguagesPostWithRequestBuilder(body: PublicationLanguageCreate) -> RequestBuilder<PublicationLanguageRead> {
        let path = "/publication_languages"
        let URLString = SwaggerClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: body)
        let url = URLComponents(string: URLString)


        let requestBuilder: RequestBuilder<PublicationLanguageRead>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true)
    }
    /**
     Create Publication

     - parameter body: (body)  
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func createPublicationPublicationsPost(body: PublicationCreate, completion: @escaping ((_ data: PublicationRead?,_ error: Error?) -> Void)) {
        createPublicationPublicationsPostWithRequestBuilder(body: body).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Create Publication
     - POST /publications

     - OAuth:
       - type: oauth2
       - name: OAuth2PasswordBearer
     - examples: [{contentType=application/json, example={
  "editor_in_chief" : "editor_in_chief",
  "image" : "image",
  "subscription_fee" : "subscription_fee",
  "keywords" : "keywords",
  "contact_person" : "contact_person",
  "isbn" : "isbn",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "long_description" : "long_description",
  "title" : "title",
  "contact_number" : "contact_number",
  "contact_email" : "contact_email",
  "updated_at" : "2000-01-23T04:56:07.000+00:00",
  "issn" : "issn",
  "publisher" : "publisher",
  "id" : 0,
  "contact_address" : "contact_address",
  "editor_others" : "editor_others"
}}]
     - parameter body: (body)  

     - returns: RequestBuilder<PublicationRead> 
     */
    open class func createPublicationPublicationsPostWithRequestBuilder(body: PublicationCreate) -> RequestBuilder<PublicationRead> {
        let path = "/publications"
        let URLString = SwaggerClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: body)
        let url = URLComponents(string: URLString)


        let requestBuilder: RequestBuilder<PublicationRead>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "POST", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true)
    }
    /**
     Delete Publication Language

     - parameter publicationLanguageId: (path)  
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func deletePublicationLanguagePublicationLanguagesPublicationLanguageIdDelete(publicationLanguageId: Int, completion: @escaping ((_ data: SuccessResponseModel?,_ error: Error?) -> Void)) {
        deletePublicationLanguagePublicationLanguagesPublicationLanguageIdDeleteWithRequestBuilder(publicationLanguageId: publicationLanguageId).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Delete Publication Language
     - DELETE /publication_languages/{publication_language_id}
     - 

     - OAuth:
       - type: oauth2
       - name: OAuth2PasswordBearer
     - examples: [{contentType=application/json, example={
  "message" : "message"
}}]
     - parameter publicationLanguageId: (path)  

     - returns: RequestBuilder<SuccessResponseModel> 
     */
    open class func deletePublicationLanguagePublicationLanguagesPublicationLanguageIdDeleteWithRequestBuilder(publicationLanguageId: Int) -> RequestBuilder<SuccessResponseModel> {
        var path = "/publication_languages/{publication_language_id}"
        let publicationLanguageIdPreEscape = "\(publicationLanguageId)"
        let publicationLanguageIdPostEscape = publicationLanguageIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{publication_language_id}", with: publicationLanguageIdPostEscape, options: .literal, range: nil)
        let URLString = SwaggerClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        let url = URLComponents(string: URLString)


        let requestBuilder: RequestBuilder<SuccessResponseModel>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "DELETE", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }
    /**
     Delete Publication

     - parameter publicationId: (path)  
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func deletePublicationPublicationsPublicationIdDelete(publicationId: Int, completion: @escaping ((_ data: SuccessResponseModel?,_ error: Error?) -> Void)) {
        deletePublicationPublicationsPublicationIdDeleteWithRequestBuilder(publicationId: publicationId).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Delete Publication
     - DELETE /publications/{publication_id}
     - 

     - OAuth:
       - type: oauth2
       - name: OAuth2PasswordBearer
     - examples: [{contentType=application/json, example={
  "message" : "message"
}}]
     - parameter publicationId: (path)  

     - returns: RequestBuilder<SuccessResponseModel> 
     */
    open class func deletePublicationPublicationsPublicationIdDeleteWithRequestBuilder(publicationId: Int) -> RequestBuilder<SuccessResponseModel> {
        var path = "/publications/{publication_id}"
        let publicationIdPreEscape = "\(publicationId)"
        let publicationIdPostEscape = publicationIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{publication_id}", with: publicationIdPostEscape, options: .literal, range: nil)
        let URLString = SwaggerClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        let url = URLComponents(string: URLString)


        let requestBuilder: RequestBuilder<SuccessResponseModel>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "DELETE", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }
    /**
     Read Publication Language

     - parameter publicationLanguageId: (path)  
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func readPublicationLanguagePublicationLanguagesPublicationLanguageIdGet(publicationLanguageId: Int, completion: @escaping ((_ data: PublicationLanguageRead?,_ error: Error?) -> Void)) {
        readPublicationLanguagePublicationLanguagesPublicationLanguageIdGetWithRequestBuilder(publicationLanguageId: publicationLanguageId).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Read Publication Language
     - GET /publication_languages/{publication_language_id}
     - 

     - examples: [{contentType=application/json, example={
  "publication_id" : 0,
  "image" : "image",
  "updated_at" : "2000-01-23T04:56:07.000+00:00",
  "keywords" : "keywords",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "publisher" : "publisher",
  "long_description" : "long_description",
  "language_id" : 6,
  "id" : 1,
  "title" : "title"
}}]
     - parameter publicationLanguageId: (path)  

     - returns: RequestBuilder<PublicationLanguageRead> 
     */
    open class func readPublicationLanguagePublicationLanguagesPublicationLanguageIdGetWithRequestBuilder(publicationLanguageId: Int) -> RequestBuilder<PublicationLanguageRead> {
        var path = "/publication_languages/{publication_language_id}"
        let publicationLanguageIdPreEscape = "\(publicationLanguageId)"
        let publicationLanguageIdPostEscape = publicationLanguageIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{publication_language_id}", with: publicationLanguageIdPostEscape, options: .literal, range: nil)
        let URLString = SwaggerClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        let url = URLComponents(string: URLString)


        let requestBuilder: RequestBuilder<PublicationLanguageRead>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }
    /**
     Read Publication Languages

     - parameter q: (query)  (optional)
     - parameter offset: (query)  (optional, default to 0)
     - parameter limit: (query)  (optional, default to 100)
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func readPublicationLanguagesPublicationLanguagesGet(q: String? = nil, offset: Int? = nil, limit: Int? = nil, completion: @escaping ((_ data: [PublicationLanguageRead]?,_ error: Error?) -> Void)) {
        readPublicationLanguagesPublicationLanguagesGetWithRequestBuilder(q: q, offset: offset, limit: limit).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Read Publication Languages
     - GET /publication_languages

     - examples: [{contentType=application/json, example=[ {
  "publication_id" : 0,
  "image" : "image",
  "updated_at" : "2000-01-23T04:56:07.000+00:00",
  "keywords" : "keywords",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "publisher" : "publisher",
  "long_description" : "long_description",
  "language_id" : 6,
  "id" : 1,
  "title" : "title"
}, {
  "publication_id" : 0,
  "image" : "image",
  "updated_at" : "2000-01-23T04:56:07.000+00:00",
  "keywords" : "keywords",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "publisher" : "publisher",
  "long_description" : "long_description",
  "language_id" : 6,
  "id" : 1,
  "title" : "title"
} ]}]
     - parameter q: (query)  (optional)
     - parameter offset: (query)  (optional, default to 0)
     - parameter limit: (query)  (optional, default to 100)

     - returns: RequestBuilder<[PublicationLanguageRead]> 
     */
    open class func readPublicationLanguagesPublicationLanguagesGetWithRequestBuilder(q: String? = nil, offset: Int? = nil, limit: Int? = nil) -> RequestBuilder<[PublicationLanguageRead]> {
        let path = "/publication_languages"
        let URLString = SwaggerClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        var url = URLComponents(string: URLString)
        url?.queryItems = APIHelper.mapValuesToQueryItems([
                        "q": q, 
                        "offset": offset?.encodeToJSON(), 
                        "limit": limit?.encodeToJSON()
        ])


        let requestBuilder: RequestBuilder<[PublicationLanguageRead]>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }
    /**
     Read Publication

     - parameter publicationId: (path)  
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func readPublicationPublicationsPublicationIdGet(publicationId: Int, completion: @escaping ((_ data: PublicationRead?,_ error: Error?) -> Void)) {
        readPublicationPublicationsPublicationIdGetWithRequestBuilder(publicationId: publicationId).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Read Publication
     - GET /publications/{publication_id}
     - 

     - examples: [{contentType=application/json, example={
  "editor_in_chief" : "editor_in_chief",
  "image" : "image",
  "subscription_fee" : "subscription_fee",
  "keywords" : "keywords",
  "contact_person" : "contact_person",
  "isbn" : "isbn",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "long_description" : "long_description",
  "title" : "title",
  "contact_number" : "contact_number",
  "contact_email" : "contact_email",
  "updated_at" : "2000-01-23T04:56:07.000+00:00",
  "issn" : "issn",
  "publisher" : "publisher",
  "id" : 0,
  "contact_address" : "contact_address",
  "editor_others" : "editor_others"
}}]
     - parameter publicationId: (path)  

     - returns: RequestBuilder<PublicationRead> 
     */
    open class func readPublicationPublicationsPublicationIdGetWithRequestBuilder(publicationId: Int) -> RequestBuilder<PublicationRead> {
        var path = "/publications/{publication_id}"
        let publicationIdPreEscape = "\(publicationId)"
        let publicationIdPostEscape = publicationIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{publication_id}", with: publicationIdPostEscape, options: .literal, range: nil)
        let URLString = SwaggerClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        let url = URLComponents(string: URLString)


        let requestBuilder: RequestBuilder<PublicationRead>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }
    /**
     Read Publications

     - parameter q: (query)  (optional)
     - parameter offset: (query)  (optional, default to 0)
     - parameter limit: (query)  (optional, default to 100)
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func readPublicationsPublicationsGet(q: String? = nil, offset: Int? = nil, limit: Int? = nil, completion: @escaping ((_ data: [PublicationRead]?,_ error: Error?) -> Void)) {
        readPublicationsPublicationsGetWithRequestBuilder(q: q, offset: offset, limit: limit).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Read Publications
     - GET /publications

     - examples: [{contentType=application/json, example=[ {
  "editor_in_chief" : "editor_in_chief",
  "image" : "image",
  "subscription_fee" : "subscription_fee",
  "keywords" : "keywords",
  "contact_person" : "contact_person",
  "isbn" : "isbn",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "long_description" : "long_description",
  "title" : "title",
  "contact_number" : "contact_number",
  "contact_email" : "contact_email",
  "updated_at" : "2000-01-23T04:56:07.000+00:00",
  "issn" : "issn",
  "publisher" : "publisher",
  "id" : 0,
  "contact_address" : "contact_address",
  "editor_others" : "editor_others"
}, {
  "editor_in_chief" : "editor_in_chief",
  "image" : "image",
  "subscription_fee" : "subscription_fee",
  "keywords" : "keywords",
  "contact_person" : "contact_person",
  "isbn" : "isbn",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "long_description" : "long_description",
  "title" : "title",
  "contact_number" : "contact_number",
  "contact_email" : "contact_email",
  "updated_at" : "2000-01-23T04:56:07.000+00:00",
  "issn" : "issn",
  "publisher" : "publisher",
  "id" : 0,
  "contact_address" : "contact_address",
  "editor_others" : "editor_others"
} ]}]
     - parameter q: (query)  (optional)
     - parameter offset: (query)  (optional, default to 0)
     - parameter limit: (query)  (optional, default to 100)

     - returns: RequestBuilder<[PublicationRead]> 
     */
    open class func readPublicationsPublicationsGetWithRequestBuilder(q: String? = nil, offset: Int? = nil, limit: Int? = nil) -> RequestBuilder<[PublicationRead]> {
        let path = "/publications"
        let URLString = SwaggerClientAPI.basePath + path
        let parameters: [String:Any]? = nil
        var url = URLComponents(string: URLString)
        url?.queryItems = APIHelper.mapValuesToQueryItems([
                        "q": q, 
                        "offset": offset?.encodeToJSON(), 
                        "limit": limit?.encodeToJSON()
        ])


        let requestBuilder: RequestBuilder<[PublicationRead]>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "GET", URLString: (url?.string ?? URLString), parameters: parameters, isBody: false)
    }
    /**
     Update Publication Language

     - parameter body: (body)  
     - parameter publicationLanguageId: (path)  
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func updatePublicationLanguagePublicationLanguagesPublicationLanguageIdPatch(body: PublicationLanguageUpdate, publicationLanguageId: Int, completion: @escaping ((_ data: PublicationLanguageRead?,_ error: Error?) -> Void)) {
        updatePublicationLanguagePublicationLanguagesPublicationLanguageIdPatchWithRequestBuilder(body: body, publicationLanguageId: publicationLanguageId).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Update Publication Language
     - PATCH /publication_languages/{publication_language_id}
     - 

     - OAuth:
       - type: oauth2
       - name: OAuth2PasswordBearer
     - examples: [{contentType=application/json, example={
  "publication_id" : 0,
  "image" : "image",
  "updated_at" : "2000-01-23T04:56:07.000+00:00",
  "keywords" : "keywords",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "publisher" : "publisher",
  "long_description" : "long_description",
  "language_id" : 6,
  "id" : 1,
  "title" : "title"
}}]
     - parameter body: (body)  
     - parameter publicationLanguageId: (path)  

     - returns: RequestBuilder<PublicationLanguageRead> 
     */
    open class func updatePublicationLanguagePublicationLanguagesPublicationLanguageIdPatchWithRequestBuilder(body: PublicationLanguageUpdate, publicationLanguageId: Int) -> RequestBuilder<PublicationLanguageRead> {
        var path = "/publication_languages/{publication_language_id}"
        let publicationLanguageIdPreEscape = "\(publicationLanguageId)"
        let publicationLanguageIdPostEscape = publicationLanguageIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{publication_language_id}", with: publicationLanguageIdPostEscape, options: .literal, range: nil)
        let URLString = SwaggerClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: body)
        let url = URLComponents(string: URLString)


        let requestBuilder: RequestBuilder<PublicationLanguageRead>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "PATCH", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true)
    }
    /**
     Update Publication

     - parameter body: (body)  
     - parameter publicationId: (path)  
     - parameter completion: completion handler to receive the data and the error objects
     */
    open class func updatePublicationPublicationsPublicationIdPatch(body: PublicationUpdate, publicationId: Int, completion: @escaping ((_ data: PublicationRead?,_ error: Error?) -> Void)) {
        updatePublicationPublicationsPublicationIdPatchWithRequestBuilder(body: body, publicationId: publicationId).execute { (response, error) -> Void in
            completion(response?.body, error)
        }
    }


    /**
     Update Publication
     - PATCH /publications/{publication_id}
     - 

     - OAuth:
       - type: oauth2
       - name: OAuth2PasswordBearer
     - examples: [{contentType=application/json, example={
  "editor_in_chief" : "editor_in_chief",
  "image" : "image",
  "subscription_fee" : "subscription_fee",
  "keywords" : "keywords",
  "contact_person" : "contact_person",
  "isbn" : "isbn",
  "created_at" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "long_description" : "long_description",
  "title" : "title",
  "contact_number" : "contact_number",
  "contact_email" : "contact_email",
  "updated_at" : "2000-01-23T04:56:07.000+00:00",
  "issn" : "issn",
  "publisher" : "publisher",
  "id" : 0,
  "contact_address" : "contact_address",
  "editor_others" : "editor_others"
}}]
     - parameter body: (body)  
     - parameter publicationId: (path)  

     - returns: RequestBuilder<PublicationRead> 
     */
    open class func updatePublicationPublicationsPublicationIdPatchWithRequestBuilder(body: PublicationUpdate, publicationId: Int) -> RequestBuilder<PublicationRead> {
        var path = "/publications/{publication_id}"
        let publicationIdPreEscape = "\(publicationId)"
        let publicationIdPostEscape = publicationIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        path = path.replacingOccurrences(of: "{publication_id}", with: publicationIdPostEscape, options: .literal, range: nil)
        let URLString = SwaggerClientAPI.basePath + path
        let parameters = JSONEncodingHelper.encodingParameters(forEncodableObject: body)
        let url = URLComponents(string: URLString)


        let requestBuilder: RequestBuilder<PublicationRead>.Type = SwaggerClientAPI.requestBuilderFactory.getBuilder()

        return requestBuilder.init(method: "PATCH", URLString: (url?.string ?? URLString), parameters: parameters, isBody: true)
    }
}
