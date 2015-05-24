requirejs.config({
    baseUrl: '',
    //urlArgs is used to cache bust.
    //development should use timestamp, production should use version
    urlArgs: 'bust=' + (new Date()).getTime(),
    skipDataMain: true,
    paths: {
        //Paths are relative to this file and do not need extensions
        jquery:     '../assets/library/components/jquery/dist/jquery.min',
        underscore: '../assets/library/components/underscore/underscore',
        backbone:   '../assets/library/components/backbone/backbone',
        radio:      '../assets/library/components/backbone.radio/build/backbone.radio.min',
        marionette: '../assets/library/components/marionette/lib/backbone.marionette.min',
        handlebars: '../assets/library/components/handlebars/handlebars.min',
        text:       '../assets/library/require.text'
    }
});
