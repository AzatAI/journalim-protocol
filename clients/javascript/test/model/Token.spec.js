/*
 * JBS Backend Service
 * Journalim Protocol Compatible Backend Service
 *
 * OpenAPI spec version: 0.0.1
 * Contact: a@azat.ai
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.36
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.JbsBackendService);
  }
}(this, function(expect, JbsBackendService) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Token', function() {
      beforeEach(function() {
        instance = new JbsBackendService.Token();
      });

      it('should create an instance of Token', function() {
        // TODO: update the code to test Token
        expect(instance).to.be.a(JbsBackendService.Token);
      });

      it('should have the property accessToken (base name: "access_token")', function() {
        // TODO: update the code to test the property accessToken
        expect(instance).to.have.property('accessToken');
        // expect(instance.accessToken).to.be(expectedValueLiteral);
      });

      it('should have the property tokenType (base name: "token_type")', function() {
        // TODO: update the code to test the property tokenType
        expect(instance).to.have.property('tokenType');
        // expect(instance.tokenType).to.be(expectedValueLiteral);
      });

    });
  });

}));
