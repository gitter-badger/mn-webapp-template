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
        //Paths are relative to this file and do not need extensions
        jquery:     '../assets/library/components/jquery',
        underscore: '../assets/library/components/underscore',
        backbone:   '../assets/library/components/backbone',
        radio:      '../assets/library/components/backbone.radio.min',
        marionette: '../assets/library/components/backbone.marionette.min',
        handlebars: '../assets/library/components/handlebars.min',
        text:       '../assets/library/require.text',
        //Spies, Stubs, and fake servers
        sinon:      '../node_modules/sinon/pkg/sinon',
        //Data modules
        treeData:   '../tests/data/modules/tree',
        tableData:  '../tests/data/modules/table'
    }
});
