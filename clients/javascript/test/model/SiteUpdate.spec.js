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
    describe('SiteUpdate', function() {
      beforeEach(function() {
        instance = new JbsBackendService.SiteUpdate();
      });

      it('should create an instance of SiteUpdate', function() {
        // TODO: update the code to test SiteUpdate
        expect(instance).to.be.a(JbsBackendService.SiteUpdate);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property logo (base name: "logo")', function() {
        // TODO: update the code to test the property logo
        expect(instance).to.have.property('logo');
        // expect(instance.logo).to.be(expectedValueLiteral);
      });

      it('should have the property siteUrl (base name: "site_url")', function() {
        // TODO: update the code to test the property siteUrl
        expect(instance).to.have.property('siteUrl');
        // expect(instance.siteUrl).to.be(expectedValueLiteral);
      });

      it('should have the property defaultTitle (base name: "default_title")', function() {
        // TODO: update the code to test the property defaultTitle
        expect(instance).to.have.property('defaultTitle');
        // expect(instance.defaultTitle).to.be(expectedValueLiteral);
      });

      it('should have the property defaultDescription (base name: "default_description")', function() {
        // TODO: update the code to test the property defaultDescription
        expect(instance).to.have.property('defaultDescription');
        // expect(instance.defaultDescription).to.be(expectedValueLiteral);
      });

    });
  });

}));
