/**
 * @file RequireJS configuration file
 * @author Jason Wohlgemuth
 */
requirejs.config({
    baseUrl: '',
    //urlArgs is used to cache bust.
    //development should use timestamp, production should use version
    urlArgs: 'bust=' + (new Date()).getTime(),
    skipDataMain: true,
    paths: {
        //RequireJS Plugins
        text:       '../assets/library/require.text',
        json:       '../assets/library/require.json',
        //Dependencies
        jquery:     '../assets/library/components/jquery',
        underscore: '../assets/library/components/underscore',
        backbone:   '../assets/library/components/backbone',
        radio:      '../assets/library/components/backbone.radio.min',
        marionette: '../assets/library/components/backbone.marionette.min',
        handlebars: '../assets/library/components/handlebars.min',
        //Spies, Stubs, and fake servers
        //(Jasmine is loaded by Karma plugin)
        sinon:      '../node_modules/sinon/pkg/sinon',
        //Data modules
        treeData:   '../tests/data/modules/tree',
        tableData:  '../tests/data/modules/table'
    }
});
