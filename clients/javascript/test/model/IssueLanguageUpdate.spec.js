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
    describe('IssueLanguageUpdate', function() {
      beforeEach(function() {
        instance = new JbsBackendService.IssueLanguageUpdate();
      });

      it('should create an instance of IssueLanguageUpdate', function() {
        // TODO: update the code to test IssueLanguageUpdate
        expect(instance).to.be.a(JbsBackendService.IssueLanguageUpdate);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property version (base name: "version")', function() {
        // TODO: update the code to test the property version
        expect(instance).to.have.property('version');
        // expect(instance.version).to.be(expectedValueLiteral);
      });

      it('should have the property author (base name: "author")', function() {
        // TODO: update the code to test the property author
        expect(instance).to.have.property('author');
        // expect(instance.author).to.be(expectedValueLiteral);
      });

      it('should have the property image (base name: "image")', function() {
        // TODO: update the code to test the property image
        expect(instance).to.have.property('image');
        // expect(instance.image).to.be(expectedValueLiteral);
      });

      it('should have the property keywords (base name: "keywords")', function() {
        // TODO: update the code to test the property keywords
        expect(instance).to.have.property('keywords');
        // expect(instance.keywords).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property longDescription (base name: "long_description")', function() {
        // TODO: update the code to test the property longDescription
        expect(instance).to.have.property('longDescription');
        // expect(instance.longDescription).to.be(expectedValueLiteral);
      });

    });
  });

}));
