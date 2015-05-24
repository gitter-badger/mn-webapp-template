require(['app', 'handlebars'], function(app, Handlebars) {
    'use strict';

    app.module('templateOverride', function(settings, app, Backbone, Marionette) {
        // Override MarionetteJS template retrieval & compilation to use Handlebars.js
        this.on('before:start', function() {
            Marionette.TemplateCache.prototype.loadTemplate = function(rawTemplate) {
                // Pass straight through to compileTemplate function
                return rawTemplate;
            };
            Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
                return Handlebars.compile(rawTemplate);
            };
        });
    });
});