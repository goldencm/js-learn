"use strict";

let pow = require("../pow.js");
const assert = require("assert");

describe("pow", function () {
    it("raises to the n-th power", function () {
        assert.equal(pow.test.pow(2, 3), 8);
    });
});
