//
// SiteCreate.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation



public struct SiteCreate: Codable {

    public var title: String
    public var _description: String?
    public var logo: String?
    public var siteUrl: String?

    public init(title: String, _description: String? = nil, logo: String? = nil, siteUrl: String? = nil) {
        self.title = title
        self._description = _description
        self.logo = logo
        self.siteUrl = siteUrl
    }

    public enum CodingKeys: String, CodingKey { 
        case title
        case _description = "description"
        case logo
        case siteUrl = "site_url"
    }

}
