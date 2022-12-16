//
// IssueCreate.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation



public struct IssueCreate: Codable {

    public var title: String
    public var version: String
    public var author: String?
    public var image: String?
    public var keywords: String?
    public var _description: String?
    public var longDescription: String?
    public var publicationId: Int?

    public init(title: String, version: String, author: String? = nil, image: String? = nil, keywords: String? = nil, _description: String? = nil, longDescription: String? = nil, publicationId: Int? = nil) {
        self.title = title
        self.version = version
        self.author = author
        self.image = image
        self.keywords = keywords
        self._description = _description
        self.longDescription = longDescription
        self.publicationId = publicationId
    }

    public enum CodingKeys: String, CodingKey { 
        case title
        case version
        case author
        case image
        case keywords
        case _description = "description"
        case longDescription = "long_description"
        case publicationId = "publication_id"
    }

}
