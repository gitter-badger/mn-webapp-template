(function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD - Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node - Does not work with strict CommonJS.
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.CryptoTools = factory(jQuery);
    }
}(this, function($) {
    // Scope for plugin code
    'use strict';
    function stringToArrayBuffer(str) {
        var i;
        var bytes = new Uint8Array(str.length);
        for (i = 0; i < str.length; i++) {
            bytes[i] = str.charCodeAt(i);
        }
        return bytes;
    }
    function arrayBufferToHex(buffer) {
        var dataView = new DataView(buffer);
        var i;
        var c;
        var len;
        var hex = '';
        for (i = 0, len = dataView.byteLength; i < len; i += 1) {
            c = dataView.getUint8(i).toString(16);
            if (c.length < 2) {c = '0' + c;}
            hex += c;
        }
        return hex;
    }
    var generateHash = function (input, algorithm) {
        var promise;
        var module = this;
        var crypto = window.crypto || window.msCrypto;
        if (crypto.subtle) {
            promise = crypto.subtle.digest({name: algorithm}, stringToArrayBuffer(input));
            promise.then(function (result) {
                module.output = arrayBufferToHex(result);
            });
        } else {
            console.error('Cryptography API not Supported');
        }
        return promise;
    };
}));
