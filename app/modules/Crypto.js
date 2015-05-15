require(['app'], function(app) {
    'use strict';

    app.module('crypto', function() {
        this.supported = !!(window.crypto && window.crypto.subtle);
        this.stringToArrayBuffer = function(str) {
            var i;
            var bytes = new Uint8Array(str.length);
            for (i = 0; i < str.length; i++) {
                bytes[i] = str.charCodeAt(i);
            }
            return bytes;
        };
        this.arrayBufferToHex = function(buffer) {
            var dataView = new DataView(buffer);
            var i;
            var c;
            var len;
            var hex = '';
            for (i = 0, len = dataView.byteLength; i < len; i += 1) {
                c = dataView.getUint8(i).toString(16);
                if (c.length < 2) {
                    c = '0' + c;
                }
                hex += c;
            }
            return hex;
        };
        this.hash = function(ptext) {
            var module = this;
            var crypto = window.crypto || window.msCrypto;
            if (module.supported) {
                var promise = crypto.subtle.digest({name: 'SHA-256'}, module.stringToArrayBuffer(ptext))
                    .then(function(result) {
                        return module.arrayBufferToHex(result);
                    });
            } else {
                console.error('Cryptography API not Supported');
            }
        };
    });
});