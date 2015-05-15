require(['app'], function(app) {
    'use strict';

    app.module('crypto', function() {
        function convertStringToArrayBufferView(str) {
            var bytes = new Uint8Array(str.length);
            for (var iii = 0; iii < str.length; iii++) {
                bytes[iii] = str.charCodeAt(iii);
            }
            return bytes;
        }
        function convertArrayBufferToHexaDecimal(buffer) {
            var data_view = new DataView(buffer);
            var iii, len, hex = '', c;
            for(iii = 0, len = data_view.byteLength; iii < len; iii += 1) {
                c = data_view.getUint8(iii).toString(16);
                if(c.length < 2) {
                    c = '0' + c;
                }
                hex += c;
            }
            console.log(hex);
            return hex;
        }
        this.generateHash = function(data) {
            var output;
            var crypto = window.crypto || window.msCrypto;
            if(crypto.subtle) {
                var promise = crypto.subtle.digest({name: "SHA-256"}, convertStringToArrayBufferView(data));

                promise.then(function(result){
                    return convertArrayBufferToHexaDecimal(result);
                });
            } else {
                console.error("Cryptography API not Supported");
            }
        };
    });
});