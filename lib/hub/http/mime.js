"use strict";

var path = require('path');

/**
 * File extension to MIME type map.
 *
 * @property contentTypes
 * @type object
 */
var contentTypes = {
    "css": "text/css",
    "htm": "text/html",
    "html": "text/html",
    "ico": "image/vnd.microsoft.icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "application/javascript",
    "json": "application/json",
    "less": "text/css",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "xml": "application/xml"
};

exports.contentTypes = contentTypes;

/**
 * Sugar method that given a filename, tries to infer the Content-Type
 * If the Content-Type is unknown, assumes that the file contains
 * generic binary content and returns 'application/octet-stream'.
 *
 * @method inferContentType
 * @param {String} filepath a filename or filepath
 * @return {String} a string Content-Type, such as 'image/svg+xml'
 */
exports.inferContentType = function (filepath) {
    return contentTypes[path.extname(filepath).slice(1)] ||
        "application/octet-stream";
};
