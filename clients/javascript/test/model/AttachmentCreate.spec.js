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
    describe('AttachmentCreate', function() {
      beforeEach(function() {
        instance = new JbsBackendService.AttachmentCreate();
      });

      it('should create an instance of AttachmentCreate', function() {
        // TODO: update the code to test AttachmentCreate
        expect(instance).to.be.a(JbsBackendService.AttachmentCreate);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property path (base name: "path")', function() {
        // TODO: update the code to test the property path
        expect(instance).to.have.property('path');
        // expect(instance.path).to.be(expectedValueLiteral);
      });

      it('should have the property contentType (base name: "content_type")', function() {
        // TODO: update the code to test the property contentType
        expect(instance).to.have.property('contentType');
        // expect(instance.contentType).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property accessUrl (base name: "access_url")', function() {
        // TODO: update the code to test the property accessUrl
        expect(instance).to.have.property('accessUrl');
        // expect(instance.accessUrl).to.be(expectedValueLiteral);
      });

      it('should have the property accessType (base name: "access_type")', function() {
        // TODO: update the code to test the property accessType
        expect(instance).to.have.property('accessType');
        // expect(instance.accessType).to.be(expectedValueLiteral);
      });

      it('should have the property issueId (base name: "issue_id")', function() {
        // TODO: update the code to test the property issueId
        expect(instance).to.have.property('issueId');
        // expect(instance.issueId).to.be(expectedValueLiteral);
      });

    });
  });

}));