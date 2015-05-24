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
        root.PluginName = factory(jQuery);
    }
}(this, function($) {
    // Scope for plugin code
    'use strict';

    var pluginName = 'PluginName';

    $.fn[pluginName] = $[pluginName] = function(options) {
        // Extend $.fn[pluginName].defaults
        options = $.extend({}, $.fn[pluginName].defaults, options);

        if (!this.selector) {
            // This enables the plugin to be called without a selector
            // example: $.PluginName(...)
            return {};
        }
        return this.each(function(index) {
            // Do something to each item

            // Create object reference
            var $this = $(this);
            $this.index = index;

            // Code using $this and options goes here...
            $this.css('color', options.color);

            // Callback function template
            if ($.isFunction(options.setupFunc)) {
                options.setupFunc.call(this);
            }
        });
    };

    // Public function template
    $.fn[pluginName].publicFunction = function() {
        // Code for public function goes here...
        // Called in main code with $('.element').PluginName.publicFunction();
    };

    // Private function template
    function privateFunction(param) {
        //Code for private function goes here...
        console.log(param);
    }

    // Plugin defaults
    $.fn[pluginName].defaults = {
        color: 'green',
        setupFunc: privateFunction
    };
}));
