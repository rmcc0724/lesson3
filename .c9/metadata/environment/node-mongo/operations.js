{"filter":false,"title":"operations.js","tooltip":"/node-mongo/operations.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":42,"column":0},"action":"remove","lines":["const assert = require('assert');","","exports.insertDocument = (db, document, collection, callback) => {","    const coll = db.collection(collection);","    return coll.insert(document);","};","","exports.insertDocument = (db, document, collection, callback) => {","    const coll = db.collection(collection);","    coll.insert(document, (err, result) => {","        assert.equal(err, null);","        console.log(\"Inserted \" + result.result.n +","            \" documents into the collection \" + collection);","        callback(result);","    });","};","","exports.findDocuments = (db, collection, callback) => {","    const coll = db.collection(collection);","    coll.find({}).toArray((err, docs) => {","        assert.equal(err, null);","        callback(docs);        ","    });","};","","exports.removeDocument = (db, document, collection, callback) => {","    const coll = db.collection(collection);","    coll.deleteOne(document, (err, result) => {","        assert.equal(err, null);","        console.log(\"Removed the document \", document);","        callback(result);        ","    });","};","","exports.updateDocument = (db, document, update, collection, callback) => {","    const coll = db.collection(collection);","    coll.updateOne(document, { $set: update }, null, (err, result) => {","        assert.equal(err, null);","        console.log(\"Updated the document with \", update);","        callback(result);        ","    });","};",""],"id":6},{"start":{"row":0,"column":0},"end":{"row":21,"column":0},"action":"insert","lines":["const assert = require('assert');","","exports.insertDocument = (db, document, collection, callback) => {","    const coll = db.collection(collection);","    return coll.insert(document);","};","","exports.findDocuments = (db, collection, callback) => {","    const coll = db.collection(collection);","    return coll.find({}).toArray();","};","","exports.removeDocument = (db, document, collection, callback) => {","    const coll = db.collection(collection);","    return coll.deleteOne(document);","};","","exports.updateDocument = (db, document, update, collection, callback) => {","    const coll = db.collection(collection);","    return coll.updateOne(document, { $set: update }, null);","};",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":21,"column":0},"end":{"row":21,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1540580404810,"hash":"f2d807ea29ece18952dfd519384d30728e930664"}