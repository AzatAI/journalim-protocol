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
    describe('PublicationRead', function() {
      beforeEach(function() {
        instance = new JbsBackendService.PublicationRead();
      });

      it('should create an instance of PublicationRead', function() {
        // TODO: update the code to test PublicationRead
        expect(instance).to.be.a(JbsBackendService.PublicationRead);
      });

      it('should have the property createdAt (base name: "created_at")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updated_at")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
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

      it('should have the property publisher (base name: "publisher")', function() {
        // TODO: update the code to test the property publisher
        expect(instance).to.have.property('publisher');
        // expect(instance.publisher).to.be(expectedValueLiteral);
      });

      it('should have the property issn (base name: "issn")', function() {
        // TODO: update the code to test the property issn
        expect(instance).to.have.property('issn');
        // expect(instance.issn).to.be(expectedValueLiteral);
      });

      it('should have the property isbn (base name: "isbn")', function() {
        // TODO: update the code to test the property isbn
        expect(instance).to.have.property('isbn');
        // expect(instance.isbn).to.be(expectedValueLiteral);
      });

      it('should have the property editorInChief (base name: "editor_in_chief")', function() {
        // TODO: update the code to test the property editorInChief
        expect(instance).to.have.property('editorInChief');
        // expect(instance.editorInChief).to.be(expectedValueLiteral);
      });

      it('should have the property editorOthers (base name: "editor_others")', function() {
        // TODO: update the code to test the property editorOthers
        expect(instance).to.have.property('editorOthers');
        // expect(instance.editorOthers).to.be(expectedValueLiteral);
      });

      it('should have the property contactPerson (base name: "contact_person")', function() {
        // TODO: update the code to test the property contactPerson
        expect(instance).to.have.property('contactPerson');
        // expect(instance.contactPerson).to.be(expectedValueLiteral);
      });

      it('should have the property contactEmail (base name: "contact_email")', function() {
        // TODO: update the code to test the property contactEmail
        expect(instance).to.have.property('contactEmail');
        // expect(instance.contactEmail).to.be(expectedValueLiteral);
      });

      it('should have the property contactNumber (base name: "contact_number")', function() {
        // TODO: update the code to test the property contactNumber
        expect(instance).to.have.property('contactNumber');
        // expect(instance.contactNumber).to.be(expectedValueLiteral);
      });

      it('should have the property contactAddress (base name: "contact_address")', function() {
        // TODO: update the code to test the property contactAddress
        expect(instance).to.have.property('contactAddress');
        // expect(instance.contactAddress).to.be(expectedValueLiteral);
      });

      it('should have the property subscriptionFee (base name: "subscription_fee")', function() {
        // TODO: update the code to test the property subscriptionFee
        expect(instance).to.have.property('subscriptionFee');
        // expect(instance.subscriptionFee).to.be(expectedValueLiteral);
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

      it('should have the property longDescription (base name: "long_description")', function() {
        // TODO: update the code to test the property longDescription
        expect(instance).to.have.property('longDescription');
        // expect(instance.longDescription).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

    });
  });

}));
