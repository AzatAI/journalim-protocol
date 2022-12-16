//
// PublicationLanguageUpdate.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation



public struct PublicationLanguageUpdate: Codable {

    public var title: String?
    public var _description: String?
    public var image: String?
    public var keywords: String?
    public var longDescription: String?

    public init(title: String? = nil, _description: String? = nil, image: String? = nil, keywords: String? = nil, longDescription: String? = nil) {
        self.title = title
        self._description = _description
        self.image = image
        self.keywords = keywords
        self.longDescription = longDescription
    }

    public enum CodingKeys: String, CodingKey { 
        case title
        case _description = "description"
        case image
        case keywords
        case longDescription = "long_description"
    }

}
