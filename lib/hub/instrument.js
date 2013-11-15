"use strict";

var istanbul = require("istanbul");
var instrumenter = new istanbul.Instrumenter();
var mime = require("./http/mime");

function isJS(filename) {
    return mime.inferContentType(filename) === 'application/javascript';
}

/**
 * Instruments JavaScript files for code coverage with Istanbul.
 * This method enables the Yeti server to instrument files on-the-fly
 * for users that request automatic coverage.
 *
 * This method includes the logic to determine whether instrumentation
 * is required for a given file, which means you can use it as a simple
 * filter/decorator method.
 *
 * @method instrument
 * @param buffer The file contents to instrument. 
 * @param {String} filename The filename, used to determine whether the file is JavaScript.
 * @param {boolean} coverage Indicates whether the user wanted coverage.
 *      By default, Yeti does not provide coverage reports.
 */
exports.instrument = function (buffer, filename, cover) {
    if (cover && isJS(filename)) {
        return instrumenter.instrumentSync(buffer, filename);
    }
    return buffer;
};
