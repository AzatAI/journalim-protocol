# coding: utf-8

"""
    JBS Backend Service

    Journalim Protocol Compatible Backend Service  # noqa: E501

    OpenAPI spec version: 0.0.1
    Contact: a@azat.ai
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from swagger_client.api_client import ApiClient


class TokenApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def create_token_token_post(self, grant_type, username, password, scope, client_id, client_secret, **kwargs):  # noqa: E501
        """Create Token  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.create_token_token_post(grant_type, username, password, scope, client_id, client_secret, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str grant_type: (required)
        :param str username: (required)
        :param str password: (required)
        :param str scope: (required)
        :param str client_id: (required)
        :param str client_secret: (required)
        :return: Token
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.create_token_token_post_with_http_info(grant_type, username, password, scope, client_id, client_secret, **kwargs)  # noqa: E501
        else:
            (data) = self.create_token_token_post_with_http_info(grant_type, username, password, scope, client_id, client_secret, **kwargs)  # noqa: E501
            return data

    def create_token_token_post_with_http_info(self, grant_type, username, password, scope, client_id, client_secret, **kwargs):  # noqa: E501
        """Create Token  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.create_token_token_post_with_http_info(grant_type, username, password, scope, client_id, client_secret, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str grant_type: (required)
        :param str username: (required)
        :param str password: (required)
        :param str scope: (required)
        :param str client_id: (required)
        :param str client_secret: (required)
        :return: Token
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['grant_type', 'username', 'password', 'scope', 'client_id', 'client_secret']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method create_token_token_post" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'grant_type' is set
        if ('grant_type' not in params or
                params['grant_type'] is None):
            raise ValueError("Missing the required parameter `grant_type` when calling `create_token_token_post`")  # noqa: E501
        # verify the required parameter 'username' is set
        if ('username' not in params or
                params['username'] is None):
            raise ValueError("Missing the required parameter `username` when calling `create_token_token_post`")  # noqa: E501
        # verify the required parameter 'password' is set
        if ('password' not in params or
                params['password'] is None):
            raise ValueError("Missing the required parameter `password` when calling `create_token_token_post`")  # noqa: E501
        # verify the required parameter 'scope' is set
        if ('scope' not in params or
                params['scope'] is None):
            raise ValueError("Missing the required parameter `scope` when calling `create_token_token_post`")  # noqa: E501
        # verify the required parameter 'client_id' is set
        if ('client_id' not in params or
                params['client_id'] is None):
            raise ValueError("Missing the required parameter `client_id` when calling `create_token_token_post`")  # noqa: E501
        # verify the required parameter 'client_secret' is set
        if ('client_secret' not in params or
                params['client_secret'] is None):
            raise ValueError("Missing the required parameter `client_secret` when calling `create_token_token_post`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}
        if 'grant_type' in params:
            form_params.append(('grant_type', params['grant_type']))  # noqa: E501
        if 'username' in params:
            form_params.append(('username', params['username']))  # noqa: E501
        if 'password' in params:
            form_params.append(('password', params['password']))  # noqa: E501
        if 'scope' in params:
            form_params.append(('scope', params['scope']))  # noqa: E501
        if 'client_id' in params:
            form_params.append(('client_id', params['client_id']))  # noqa: E501
        if 'client_secret' in params:
            form_params.append(('client_secret', params['client_secret']))  # noqa: E501

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/x-www-form-urlencoded'])  # noqa: E501

        # Authentication setting
        auth_settings = []  # noqa: E501

        return self.api_client.call_api(
            '/token', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='Token',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)
