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

class PublicationLanguageUpdate(object):
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
        'image': 'str',
        'keywords': 'str',
        'long_description': 'str'
    }

    attribute_map = {
        'title': 'title',
        'description': 'description',
        'image': 'image',
        'keywords': 'keywords',
        'long_description': 'long_description'
    }

    def __init__(self, title=None, description=None, image=None, keywords=None, long_description=None):  # noqa: E501
        """PublicationLanguageUpdate - a model defined in Swagger"""  # noqa: E501
        self._title = None
        self._description = None
        self._image = None
        self._keywords = None
        self._long_description = None
        self.discriminator = None
        if title is not None:
            self.title = title
        if description is not None:
            self.description = description
        if image is not None:
            self.image = image
        if keywords is not None:
            self.keywords = keywords
        if long_description is not None:
            self.long_description = long_description

    @property
    def title(self):
        """Gets the title of this PublicationLanguageUpdate.  # noqa: E501


        :return: The title of this PublicationLanguageUpdate.  # noqa: E501
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title):
        """Sets the title of this PublicationLanguageUpdate.


        :param title: The title of this PublicationLanguageUpdate.  # noqa: E501
        :type: str
        """

        self._title = title

    @property
    def description(self):
        """Gets the description of this PublicationLanguageUpdate.  # noqa: E501


        :return: The description of this PublicationLanguageUpdate.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this PublicationLanguageUpdate.


        :param description: The description of this PublicationLanguageUpdate.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def image(self):
        """Gets the image of this PublicationLanguageUpdate.  # noqa: E501


        :return: The image of this PublicationLanguageUpdate.  # noqa: E501
        :rtype: str
        """
        return self._image

    @image.setter
    def image(self, image):
        """Sets the image of this PublicationLanguageUpdate.


        :param image: The image of this PublicationLanguageUpdate.  # noqa: E501
        :type: str
        """

        self._image = image

    @property
    def keywords(self):
        """Gets the keywords of this PublicationLanguageUpdate.  # noqa: E501


        :return: The keywords of this PublicationLanguageUpdate.  # noqa: E501
        :rtype: str
        """
        return self._keywords

    @keywords.setter
    def keywords(self, keywords):
        """Sets the keywords of this PublicationLanguageUpdate.


        :param keywords: The keywords of this PublicationLanguageUpdate.  # noqa: E501
        :type: str
        """

        self._keywords = keywords

    @property
    def long_description(self):
        """Gets the long_description of this PublicationLanguageUpdate.  # noqa: E501


        :return: The long_description of this PublicationLanguageUpdate.  # noqa: E501
        :rtype: str
        """
        return self._long_description

    @long_description.setter
    def long_description(self, long_description):
        """Sets the long_description of this PublicationLanguageUpdate.


        :param long_description: The long_description of this PublicationLanguageUpdate.  # noqa: E501
        :type: str
        """

        self._long_description = long_description

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
        if issubclass(PublicationLanguageUpdate, dict):
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
        if not isinstance(other, PublicationLanguageUpdate):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other