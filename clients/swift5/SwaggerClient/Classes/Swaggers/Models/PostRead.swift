//
// PostRead.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation



public struct PostRead: Codable {

    public var createdAt: Date?
    public var updatedAt: Date?
    public var title: String
    public var _description: String?
    public var keywords: String?
    public var author: String?
    public var featuredImage: String?
    public var content: String?
    /** A Post must belongs to one of the site. */
    public var siteId: Int?
    public var _id: Int

    public init(createdAt: Date? = nil, updatedAt: Date? = nil, title: String, _description: String? = nil, keywords: String? = nil, author: String? = nil, featuredImage: String? = nil, content: String? = nil, siteId: Int? = nil, _id: Int) {
        self.createdAt = createdAt
        self.updatedAt = updatedAt
        self.title = title
        self._description = _description
        self.keywords = keywords
        self.author = author
        self.featuredImage = featuredImage
        self.content = content
        self.siteId = siteId
        self._id = _id
    }

    public enum CodingKeys: String, CodingKey { 
        case createdAt = "created_at"
        case updatedAt = "updated_at"
        case title
        case _description = "description"
        case keywords
        case author
        case featuredImage = "featured_image"
        case content
        case siteId = "site_id"
        case _id = "id"
    }

}
