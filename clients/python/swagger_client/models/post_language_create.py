# coding: utf-8

"""
    JBS Backend Service

    Journalim Protocol Compatible Backend Service  # noqa: E501

    OpenAPI spec version: 0.0.1
    Contact: a@azat.ai
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

import pprint
import re  # noqa: F401

import six

class PostLanguageCreate(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'title': 'str',
        'description': 'str',
        'keywords': 'str',
        'content': 'str',
        'post_id': 'int',
        'language_id': 'int'
    }

    attribute_map = {
        'title': 'title',
        'description': 'description',
        'keywords': 'keywords',
        'content': 'content',
        'post_id': 'post_id',
        'language_id': 'language_id'
    }

    def __init__(self, title=None, description=None, keywords=None, content=None, post_id=None, language_id=None):  # noqa: E501
        """PostLanguageCreate - a model defined in Swagger"""  # noqa: E501
        self._title = None
        self._description = None
        self._keywords = None
        self._content = None
        self._post_id = None
        self._language_id = None
        self.discriminator = None
        self.title = title
        if description is not None:
            self.description = description
        if keywords is not None:
            self.keywords = keywords
        if content is not None:
            self.content = content
        if post_id is not None:
            self.post_id = post_id
        if language_id is not None:
            self.language_id = language_id

    @property
    def title(self):
        """Gets the title of this PostLanguageCreate.  # noqa: E501


        :return: The title of this PostLanguageCreate.  # noqa: E501
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title):
        """Sets the title of this PostLanguageCreate.


        :param title: The title of this PostLanguageCreate.  # noqa: E501
        :type: str
        """
        if title is None:
            raise ValueError("Invalid value for `title`, must not be `None`")  # noqa: E501

        self._title = title

    @property
    def description(self):
        """Gets the description of this PostLanguageCreate.  # noqa: E501


        :return: The description of this PostLanguageCreate.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this PostLanguageCreate.


        :param description: The description of this PostLanguageCreate.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def keywords(self):
        """Gets the keywords of this PostLanguageCreate.  # noqa: E501


        :return: The keywords of this PostLanguageCreate.  # noqa: E501
        :rtype: str
        """
        return self._keywords

    @keywords.setter
    def keywords(self, keywords):
        """Sets the keywords of this PostLanguageCreate.


        :param keywords: The keywords of this PostLanguageCreate.  # noqa: E501
        :type: str
        """

        self._keywords = keywords

    @property
    def content(self):
        """Gets the content of this PostLanguageCreate.  # noqa: E501


        :return: The content of this PostLanguageCreate.  # noqa: E501
        :rtype: str
        """
        return self._content

    @content.setter
    def content(self, content):
        """Sets the content of this PostLanguageCreate.


        :param content: The content of this PostLanguageCreate.  # noqa: E501
        :type: str
        """

        self._content = content

    @property
    def post_id(self):
        """Gets the post_id of this PostLanguageCreate.  # noqa: E501


        :return: The post_id of this PostLanguageCreate.  # noqa: E501
        :rtype: int
        """
        return self._post_id

    @post_id.setter
    def post_id(self, post_id):
        """Sets the post_id of this PostLanguageCreate.


        :param post_id: The post_id of this PostLanguageCreate.  # noqa: E501
        :type: int
        """

        self._post_id = post_id

    @property
    def language_id(self):
        """Gets the language_id of this PostLanguageCreate.  # noqa: E501


        :return: The language_id of this PostLanguageCreate.  # noqa: E501
        :rtype: int
        """
        return self._language_id

    @language_id.setter
    def language_id(self, language_id):
        """Sets the language_id of this PostLanguageCreate.


        :param language_id: The language_id of this PostLanguageCreate.  # noqa: E501
        :type: int
        """

        self._language_id = language_id

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(PostLanguageCreate, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, PostLanguageCreate):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other