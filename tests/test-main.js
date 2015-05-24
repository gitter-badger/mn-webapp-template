var tests = [];
for (var file in window.__karma__.files) {
    // Our test modules are named "<something>Spec.js"
    // If you decide to change the format of the file name this Regex
    // must reflect it.
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    // The "src/" part is the same as the one in the repo root
    baseUrl: '/base/app',
    paths: {
        jquery:     '../assets/library/components/jquery/dist/jquery.min',
        underscore: '../assets/library/components/underscore/underscore',
        backbone:   '../assets/library/components/backbone/backbone',
        radio:      '../assets/library/components/backbone.radio/backbone.radio.min',
        marionette: '../assets/library/components/marionette/lib/backbone.marionette.min',
        handlebars: '../assets/library/components/handlebars/handlebars.min',
        text:       '../assets/library/require.text'
    },
    // ask Require.js to load these files (all our tests) that we collected before
    deps: tests,
    // start test run, once Require.js is done
    callback: window.__karma__.start
});
