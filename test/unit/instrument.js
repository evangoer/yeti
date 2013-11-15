"use strict";

var vows = require("vows");
var assert = require("assert");
var instrument = require("../../lib/hub/instrument").instrument;

var buffer = "var answer = 42;";

vows.describe('Istanbul JS Instrumenter').addBatch({
    "An instrument function": {
        "instruments JS files when the user requests coverage": function () {
            var instrumentedBuffer = instrument(buffer, 'foo.js', true);
            assert.notEqual(instrumentedBuffer.indexOf('__coverage__'), -1);
        },
        "performs a null-op when coverage is off": function () {
            assert.equal(instrument(buffer, 'foo.js'), buffer);
        },
        "performs a null-op when the file is not JavaScript": function () {
            assert.equal(instrument(buffer, 'foo.txt', true), buffer);
        }
    }
}).export(module);
