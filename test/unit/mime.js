"use strict";

var vows = require("vows");
var assert = require("assert");

var mime = require("../../lib/hub/http/mime");

vows.describe('MIME Type Map').addBatch({
    "A map of MIME types": {
        "has a raw contentTypes object": function () {
            assert.equal(typeof mime.contentTypes, 'object');
        },
        // i.e. don't forget to add a test if you add a new extension
        "can currently handle fifteen different file extensions": function () {
            assert.strictEqual(Object.keys(mime.contentTypes).length, 15);
        },
        "identifies a .css file as 'text/css'": function () {
            assert.equal(mime.inferContentType('foo.css'), 'text/css');
        },
        "identifies an .htm file as 'text/html'": function () {
            assert.equal(mime.inferContentType('foo.htm'), 'text/html');
        },
        "identifies an .html file as 'text/html'": function () {
            assert.equal(mime.inferContentType('foo.html'), 'text/html');
        },
        "identifies an .ico file as 'image/vnd.microsoft.icon'": function () {
            assert.equal(mime.inferContentType('foo.ico'), 'image/vnd.microsoft.icon');
        },
        "identifies a .jpeg file as 'image/jpeg'": function () {
            assert.equal(mime.inferContentType('foo.jpeg'), 'image/jpeg');
        },
        "identifies a .jpg file as 'image/jpeg": function () {
            assert.equal(mime.inferContentType('foo.jpeg'), 'image/jpeg');
        },
        "identifies a .js file as 'application/javascript'": function () {
            assert.equal(mime.inferContentType('foo.js'), 'application/javascript');
        },
        "identifies a .json file as 'application/json'": function () {
            assert.equal(mime.inferContentType('foo.json'), 'application/json');
        },
        "identifies a .less file as 'text/css'": function () {
            assert.equal(mime.inferContentType('foo.less'), 'text/css');
        },
        "identifies a .png file as 'image/png'": function () {
            assert.equal(mime.inferContentType('foo.png'), 'image/png');
        },
        "identifies an .svg file as 'image/svg+xml'": function () {
            assert.equal(mime.inferContentType('foo.svg'), 'image/svg+xml');
        },
        "identifies a .swf file as 'application/x-shockwave-flash'": function () {
            assert.equal(mime.inferContentType('foo.swf'), 'application/x-shockwave-flash');
        },
        "identifies a .tiff file as 'image/tiff'": function () {
            assert.equal(mime.inferContentType('foo.tiff'), 'image/tiff');
        },
        "identifies a .txt file as 'text/plain'": function () {
            assert.equal(mime.inferContentType('foo.txt'), 'text/plain');
        },
        "identifies an .xml file as 'application/xml'": function () {
            assert.equal(mime.inferContentType('foo.xml'), 'application/xml');
        },
        "identifies an unknown file as 'application/octet-stream'": function () {
            assert.equal(mime.inferContentType('foo.mystery'), 'application/octet-stream');
        }
    }
}).export(module);
