part of swagger.api;

class PublicationCreate {
  
  String title = null;

  String description = null;

  String publisher = null;

  String issn = null;

  String isbn = null;

  String editorInChief = null;

  String editorOthers = null;

  String contactPerson = null;

  String contactEmail = null;

  String contactNumber = null;

  String contactAddress = null;

  String subscriptionFee = null;

  String image = null;

  String keywords = null;
/* This can be a very long html or markdown content */
  String longDescription = null;

  PublicationCreate();

  @override
  String toString() {
    return 'PublicationCreate[title=$title, description=$description, publisher=$publisher, issn=$issn, isbn=$isbn, editorInChief=$editorInChief, editorOthers=$editorOthers, contactPerson=$contactPerson, contactEmail=$contactEmail, contactNumber=$contactNumber, contactAddress=$contactAddress, subscriptionFee=$subscriptionFee, image=$image, keywords=$keywords, longDescription=$longDescription, ]';
  }

  PublicationCreate.fromJson(Map<String, dynamic> json) {
    if (json == null) return;
    title = json['title'];
    description = json['description'];
    publisher = json['publisher'];
    issn = json['issn'];
    isbn = json['isbn'];
    editorInChief = json['editor_in_chief'];
    editorOthers = json['editor_others'];
    contactPerson = json['contact_person'];
    contactEmail = json['contact_email'];
    contactNumber = json['contact_number'];
    contactAddress = json['contact_address'];
    subscriptionFee = json['subscription_fee'];
    image = json['image'];
    keywords = json['keywords'];
    longDescription = json['long_description'];
  }

  Map<String, dynamic> toJson() {
    return {
      'title': title,
      'description': description,
      'publisher': publisher,
      'issn': issn,
      'isbn': isbn,
      'editor_in_chief': editorInChief,
      'editor_others': editorOthers,
      'contact_person': contactPerson,
      'contact_email': contactEmail,
      'contact_number': contactNumber,
      'contact_address': contactAddress,
      'subscription_fee': subscriptionFee,
      'image': image,
      'keywords': keywords,
      'long_description': longDescription
     };
  }

  static List<PublicationCreate> listFromJson(List<dynamic> json) {
    return json == null ? new List<PublicationCreate>() : json.map((value) => new PublicationCreate.fromJson(value)).toList();
  }

  static Map<String, PublicationCreate> mapFromJson(Map<String, Map<String, dynamic>> json) {
    var map = new Map<String, PublicationCreate>();
    if (json != null && json.length > 0) {
      json.forEach((String key, Map<String, dynamic> value) => map[key] = new PublicationCreate.fromJson(value));
    }
    return map;
  }
}
