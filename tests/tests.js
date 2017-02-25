var expect = require('chai').expect;
var should = require('chai').should();
var extensions = require('../dist/extensions');

// todo: can't be tested by node process - needs window
//describe('#b64_to_utf8', function() {
//    it('converts between base64 and utf8', function () {
//        var test = "my test string";
//        test = test.utf8_to_b64();
//        test = test.b64_to_utf8();
//        test.should.equal("my test string");
//    });
//});

describe("#alphanumeric", function() {
    it("is alphanumeric", function () {
        "myteststring123".isAlphanumeric().should.equal(true);
        "+=-()<>?/".isAlphanumeric().should.equal(false);
    });
});

describe("#format", function() {
    it("formats string", function () {
        String.format("my {0} string", "test").should.equal("my test string");
    });
});

describe("#leftTrim", function() {
    it("left trims string", function () {
        "   my test string".trim().should.equal("my test string");
    });
});

describe("#rightTrim", function() {
    it("right trims string", function () {
        "my test string    ".trim().should.equal("my test string");
    });
});

describe("#toCssClass", function() {
    it("converts string to css class", function () {
        "my test string".toCssClass().should.equal("my-test-string");
    });
});

describe("#toFileName", function() {
    it("converts string to file name", function () {
        "my test string".toFileName().should.equal("my_test_string");
    });
});

// array

describe("#cloneArray", function() {
    it("clones array", function () {
        expect([0, 1, 2, 3].clone()).to.deep.equal([0, 1, 2, 3]);
    });
});

describe("#arrayMove", function() {
    it("moves item", function () {
        var t = [0, 1, 2, 3];
        t.move(1, 2);
        expect(t).to.deep.equal([0, 2, 1, 3]);
    });
});