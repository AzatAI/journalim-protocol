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

class PublicationUpdate(object):
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
        'publisher': 'str',
        'issn': 'str',
        'isbn': 'str',
        'editor_in_chief': 'str',
        'editor_others': 'str',
        'contact_person': 'str',
        'contact_email': 'str',
        'contact_number': 'str',
        'contact_address': 'str',
        'subscription_fee': 'str',
        'image': 'str',
        'keywords': 'str',
        'long_description': 'str'
    }

    attribute_map = {
        'title': 'title',
        'description': 'description',
        'publisher': 'publisher',
        'issn': 'issn',
        'isbn': 'isbn',
        'editor_in_chief': 'editor_in_chief',
        'editor_others': 'editor_others',
        'contact_person': 'contact_person',
        'contact_email': 'contact_email',
        'contact_number': 'contact_number',
        'contact_address': 'contact_address',
        'subscription_fee': 'subscription_fee',
        'image': 'image',
        'keywords': 'keywords',
        'long_description': 'long_description'
    }

    def __init__(self, title=None, description=None, publisher=None, issn=None, isbn=None, editor_in_chief=None, editor_others=None, contact_person=None, contact_email=None, contact_number=None, contact_address=None, subscription_fee=None, image=None, keywords=None, long_description=None):  # noqa: E501
        """PublicationUpdate - a model defined in Swagger"""  # noqa: E501
        self._title = None
        self._description = None
        self._publisher = None
        self._issn = None
        self._isbn = None
        self._editor_in_chief = None
        self._editor_others = None
        self._contact_person = None
        self._contact_email = None
        self._contact_number = None
        self._contact_address = None
        self._subscription_fee = None
        self._image = None
        self._keywords = None
        self._long_description = None
        self.discriminator = None
        if title is not None:
            self.title = title
        if description is not None:
            self.description = description
        if publisher is not None:
            self.publisher = publisher
        if issn is not None:
            self.issn = issn
        if isbn is not None:
            self.isbn = isbn
        if editor_in_chief is not None:
            self.editor_in_chief = editor_in_chief
        if editor_others is not None:
            self.editor_others = editor_others
        if contact_person is not None:
            self.contact_person = contact_person
        if contact_email is not None:
            self.contact_email = contact_email
        if contact_number is not None:
            self.contact_number = contact_number
        if contact_address is not None:
            self.contact_address = contact_address
        if subscription_fee is not None:
            self.subscription_fee = subscription_fee
        if image is not None:
            self.image = image
        if keywords is not None:
            self.keywords = keywords
        if long_description is not None:
            self.long_description = long_description

    @property
    def title(self):
        """Gets the title of this PublicationUpdate.  # noqa: E501


        :return: The title of this PublicationUpdate.  # noqa: E501
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title):
        """Sets the title of this PublicationUpdate.


        :param title: The title of this PublicationUpdate.  # noqa: E501
        :type: str
        """

        self._title = title

    @property
    def description(self):
        """Gets the description of this PublicationUpdate.  # noqa: E501


        :return: The description of this PublicationUpdate.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this PublicationUpdate.


        :param description: The description of this PublicationUpdate.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def publisher(self):
        """Gets the publisher of this PublicationUpdate.  # noqa: E501


        :return: The publisher of this PublicationUpdate.  # noqa: E501
        :rtype: str
        """
        return self._publisher

    @publisher.setter
    def publisher(self, publisher):
        """Sets the publisher of this PublicationUpdate.


        :param publisher: The publisher of this PublicationUpdate.  # noqa: E501
        :type: str
        """

        self._publisher = publisher

    @property
    def issn(self):
        """Gets the issn of this PublicationUpdate.  # noqa: E501


        :return: The issn of this PublicationUpdate.  # noqa: E501
        :rtype: str
        """
        return self._issn

    @issn.setter
    def issn(self, issn):
        """Sets the issn of this PublicationUpdate.


        :param issn: The issn of this PublicationUpdate.  # noqa: E501
        :type: str
        """

        self._issn = issn

    @property
    def isbn(self):
        """Gets the isbn of this PublicationUpdate.  # noqa: E501


        :return: The isbn of this PublicationUpdate.  # noqa: E501
        :rtype: str
        """
        return self._isbn

    @isbn.setter
    def isbn(self, isbn):
        """Sets the isbn of this PublicationUpdate.


        :param isbn: The isbn of this PublicationUpdate.  # noqa: E501
        :type: str
        """

        self._isbn = isbn

    @property
    def editor_in_chief(self):
        """Gets the editor_in_chief of this PublicationUpdate.  # noqa: E501


        :return: The editor_in_chief of this PublicationUpdate.  # noqa: E501
        :rtype: str
        """
        return self._editor_in_chief

    @editor_in_chief.setter
    def editor_in_chief(self, editor_in_chief):
        """Sets the editor_in_chief of this PublicationUpdate.


        :param editor_in_chief: The editor_in_chief of this PublicationUpdate.  # noqa: E501
        :type: str
        """

        self._editor_in_chief = editor_in_chief

    @property
    def editor_others(self):
        """Gets the editor_others of this PublicationUpdate.  # noqa: E501


        :return: The editor_others of this PublicationUpdate.  # noqa: E501
        :rtype: str
        """
        return self._editor_others

    @editor_others.setter
    def editor_others(self, editor_others):
        """Sets the editor_others of this PublicationUpdate.


        :param editor_others: The editor_others of this PublicationUpdate.  # noqa: E501
        :type: str
        """

        self._editor_others = editor_others

    @property
    def contact_person(self):
        """Gets the contact_person of this PublicationUpdate.  # noqa: E501


        :return: The contact_person of this PublicationUpdate.  # noqa: E501
        :rtype: str
        """
        return self._contact_person

    @contact_person.setter
    def contact_person(self, contact_person):
        """Sets the contact_person of this PublicationUpdate.


        :param contact_person: The contact_person of this PublicationUpdate.  # noqa: E501
        :type: str
        """

        self._contact_person = contact_person

    @property
    def contact_email(self):
        """Gets the contact_email of this PublicationUpdate.  # noqa: E501


        :return: The contact_email of this PublicationUpdate.  # noqa: E501
        :rtype: str
        """
        return self._contact_email

    @contact_email.setter
    def contact_email(self, contact_email):
        """Sets the contact_email of this PublicationUpdate.


        :param contact_email: The contact_email of this PublicationUpdate.  # noqa: E501
        :type: str
        """

        self._contact_email = contact_email

    @property
    def contact_number(self):
        """Gets the contact_number of this PublicationUpdate.  # noqa: E501


        :return: The contact_number of this PublicationUpdate.  # noqa: E501
        :rtype: str
        """
        return self._contact_number

    @contact_number.setter
    def contact_number(self, contact_number):
        """Sets the contact_number of this PublicationUpdate.


        :param contact_number: The contact_number of this PublicationUpdate.  # noqa: E501
        :type: str
        """

        self._contact_number = contact_number

    @property
    def contact_address(self):
        """Gets the contact_address of this PublicationUpdate.  # noqa: E501


        :return: The contact_address of this PublicationUpdate.  # noqa: E501
        :rtype: str
        """
        return self._contact_address

    @contact_address.setter
    def contact_address(self, contact_address):
        """Sets the contact_address of this PublicationUpdate.


        :param contact_address: The contact_address of this PublicationUpdate.  # noqa: E501
        :type: str
        """

        self._contact_address = contact_address

    @property
    def subscription_fee(self):
        """Gets the subscription_fee of this PublicationUpdate.  # noqa: E501


        :return: The subscription_fee of this PublicationUpdate.  # noqa: E501
        :rtype: str
        """
        return self._subscription_fee

    @subscription_fee.setter
    def subscription_fee(self, subscription_fee):
        """Sets the subscription_fee of this PublicationUpdate.


        :param subscription_fee: The subscription_fee of this PublicationUpdate.  # noqa: E501
        :type: str
        """

        self._subscription_fee = subscription_fee

    @property
    def image(self):
        """Gets the image of this PublicationUpdate.  # noqa: E501


        :return: The image of this PublicationUpdate.  # noqa: E501
        :rtype: str
        """
        return self._image

    @image.setter
    def image(self, image):
        """Sets the image of this PublicationUpdate.


        :param image: The image of this PublicationUpdate.  # noqa: E501
        :type: str
        """

        self._image = image

    @property
    def keywords(self):
        """Gets the keywords of this PublicationUpdate.  # noqa: E501


        :return: The keywords of this PublicationUpdate.  # noqa: E501
        :rtype: str
        """
        return self._keywords

    @keywords.setter
    def keywords(self, keywords):
        """Sets the keywords of this PublicationUpdate.


        :param keywords: The keywords of this PublicationUpdate.  # noqa: E501
        :type: str
        """

        self._keywords = keywords

    @property
    def long_description(self):
        """Gets the long_description of this PublicationUpdate.  # noqa: E501


        :return: The long_description of this PublicationUpdate.  # noqa: E501
        :rtype: str
        """
        return self._long_description

    @long_description.setter
    def long_description(self, long_description):
        """Sets the long_description of this PublicationUpdate.


        :param long_description: The long_description of this PublicationUpdate.  # noqa: E501
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
        if issubclass(PublicationUpdate, dict):
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
        if not isinstance(other, PublicationUpdate):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other