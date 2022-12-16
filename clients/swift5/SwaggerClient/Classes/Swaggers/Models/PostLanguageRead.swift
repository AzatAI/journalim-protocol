//
// PostLanguageRead.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation



public struct PostLanguageRead: Codable {

    public var createdAt: Date?
    public var updatedAt: Date?
    public var title: String
    public var _description: String?
    public var keywords: String?
    public var content: String?
    public var postId: Int?
    public var languageId: Int?
    public var _id: Int

    public init(createdAt: Date? = nil, updatedAt: Date? = nil, title: String, _description: String? = nil, keywords: String? = nil, content: String? = nil, postId: Int? = nil, languageId: Int? = nil, _id: Int) {
        self.createdAt = createdAt
        self.updatedAt = updatedAt
        self.title = title
        self._description = _description
        self.keywords = keywords
        self.content = content
        self.postId = postId
        self.languageId = languageId
        self._id = _id
    }

    public enum CodingKeys: String, CodingKey { 
        case createdAt = "created_at"
        case updatedAt = "updated_at"
        case title
        case _description = "description"
        case keywords
        case content
        case postId = "post_id"
        case languageId = "language_id"
        case _id = "id"
    }

}
