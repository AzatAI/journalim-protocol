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

class PageUpdate(object):
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
        'author': 'str',
        'featured_image': 'str',
        'content': 'str'
    }

    attribute_map = {
        'title': 'title',
        'description': 'description',
        'keywords': 'keywords',
        'author': 'author',
        'featured_image': 'featured_image',
        'content': 'content'
    }

    def __init__(self, title=None, description=None, keywords=None, author=None, featured_image=None, content=None):  # noqa: E501
        """PageUpdate - a model defined in Swagger"""  # noqa: E501
        self._title = None
        self._description = None
        self._keywords = None
        self._author = None
        self._featured_image = None
        self._content = None
        self.discriminator = None
        if title is not None:
            self.title = title
        if description is not None:
            self.description = description
        if keywords is not None:
            self.keywords = keywords
        if author is not None:
            self.author = author
        if featured_image is not None:
            self.featured_image = featured_image
        if content is not None:
            self.content = content

    @property
    def title(self):
        """Gets the title of this PageUpdate.  # noqa: E501


        :return: The title of this PageUpdate.  # noqa: E501
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title):
        """Sets the title of this PageUpdate.


        :param title: The title of this PageUpdate.  # noqa: E501
        :type: str
        """

        self._title = title

    @property
    def description(self):
        """Gets the description of this PageUpdate.  # noqa: E501


        :return: The description of this PageUpdate.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this PageUpdate.


        :param description: The description of this PageUpdate.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def keywords(self):
        """Gets the keywords of this PageUpdate.  # noqa: E501


        :return: The keywords of this PageUpdate.  # noqa: E501
        :rtype: str
        """
        return self._keywords

    @keywords.setter
    def keywords(self, keywords):
        """Sets the keywords of this PageUpdate.


        :param keywords: The keywords of this PageUpdate.  # noqa: E501
        :type: str
        """

        self._keywords = keywords

    @property
    def author(self):
        """Gets the author of this PageUpdate.  # noqa: E501


        :return: The author of this PageUpdate.  # noqa: E501
        :rtype: str
        """
        return self._author

    @author.setter
    def author(self, author):
        """Sets the author of this PageUpdate.


        :param author: The author of this PageUpdate.  # noqa: E501
        :type: str
        """

        self._author = author

    @property
    def featured_image(self):
        """Gets the featured_image of this PageUpdate.  # noqa: E501


        :return: The featured_image of this PageUpdate.  # noqa: E501
        :rtype: str
        """
        return self._featured_image

    @featured_image.setter
    def featured_image(self, featured_image):
        """Sets the featured_image of this PageUpdate.


        :param featured_image: The featured_image of this PageUpdate.  # noqa: E501
        :type: str
        """

        self._featured_image = featured_image

    @property
    def content(self):
        """Gets the content of this PageUpdate.  # noqa: E501


        :return: The content of this PageUpdate.  # noqa: E501
        :rtype: str
        """
        return self._content

    @content.setter
    def content(self, content):
        """Sets the content of this PageUpdate.


        :param content: The content of this PageUpdate.  # noqa: E501
        :type: str
        """

        self._content = content

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
        if issubclass(PageUpdate, dict):
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
        if not isinstance(other, PageUpdate):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
