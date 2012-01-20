

var java = require("../");
var nodeunit = require("nodeunit");
var util = require("util");

exports['Simple'] = nodeunit.testCase({
  "create an instance of a class and call methods (getName) (async)": function(test) {
    java.newInstance("java.util.ArrayList", function(err, list) {
      if(err) { console.log(err); return; }
      test.ok(list);
      if(list) {
        list.getClass(function(err, result) {
          if(err) { console.log(err); return; }
          result.getName(function(err, result) {
            if(err) { console.log(err); return; }
            test.equal(result, "java.util.ArrayList");
            test.done();
          });
        });
      }
    });
  },

  "create an instance of a class and call methods (getName) (sync)": function(test) {
    var list = java.newInstanceSync("java.util.ArrayList");
    test.equal(list.sizeSync(), 0);
    list.addSync("hello");
    list.addSync("world");
    test.equal(list.sizeSync(), 2);
    list.clearSync();
    var clazz = list.getClassSync();
    var result = clazz.getNameSync();
    test.equal(result, "java.util.ArrayList");
    test.done();
  },

  "create an instance of a class and call methods (size) (async)": function(test) {
    java.newInstance("java.util.ArrayList", function(err, list) {
      if(err) { console.log(err); return; }
      test.ok(list);
      if(list) {
        list.size(function(err, result) {
          if(err) { console.log(err); return; }
          test.equal(result, 0);
          test.done();
        });
      }
    });
  }
});
