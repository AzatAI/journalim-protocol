//
// PublicationLanguageCreate.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation



public struct PublicationLanguageCreate: Codable {

    public var title: String?
    public var _description: String?
    public var publisher: String?
    public var image: String?
    public var keywords: String?
    /** This can be a very long html or markdown content */
    public var longDescription: String?
    public var publicationId: Int?
    public var languageId: Int?

    public init(title: String? = nil, _description: String? = nil, publisher: String? = nil, image: String? = nil, keywords: String? = nil, longDescription: String? = nil, publicationId: Int? = nil, languageId: Int? = nil) {
        self.title = title
        self._description = _description
        self.publisher = publisher
        self.image = image
        self.keywords = keywords
        self.longDescription = longDescription
        self.publicationId = publicationId
        self.languageId = languageId
    }

    public enum CodingKeys: String, CodingKey { 
        case title
        case _description = "description"
        case publisher
        case image
        case keywords
        case longDescription = "long_description"
        case publicationId = "publication_id"
        case languageId = "language_id"
    }

}
