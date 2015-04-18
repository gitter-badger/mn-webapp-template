#Web App Project Template

> Opinionated boilerplate environment for Web App development using modern front-end tooling

###Web Service Badges

###Languages
![HTML5](../images/assets/images/html5.png "HTML5")
&nbsp;![CSS3](../images/assets/images/css3.png "CSS3")
&nbsp;[![JavaScript](../images/assets/images/js.png "JavaScript (ECMAScript 5)")](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf)

###Frameworks & Libraries
&nbsp;[![Marionette.js](../images/assets/images/marionette.png "Marionette.js")](http://marionettejs.com/)
&nbsp;[![Backbone.js](../images/assets/images/backbone.png "Backbone.js")](http://backbonejs.org/)
&nbsp;[![jQuery](../images/assets/images/jquery.png "jQuery")](https://jquery.com/)
&nbsp;[![Handlebars](../images/assets/images/handlebars.png "handlebars")](http://handlebarsjs.com/)
&nbsp;[![RequireJS](../images/assets/images/require.png "RequireJS")](http://requirejs.org/)

###Front-end Tooling
&nbsp;![NodeJS](../images/assets/images/node.png "NodeJS")
&nbsp;[![Bower](../images/assets/images/bower.png "Bower")](http://bower.io/)
&nbsp;[![GruntJS](../images/assets/images/grunt.png "GruntJS")](http://gruntjs.com/)

###Front-end Testing & Review
&nbsp;[![Karma](../images/assets/images/karma.png "Karma")](https://karma-runner.github.io/0.12/index.html)
&nbsp;[![Jasmine](../images/assets/images/jasmine.png "Jasmine")](https://jasmine.github.io/2.2/introduction.html)
&nbsp;[![JSCS](../images/assets/images/jscs.png "JSCS")](http://jscs.info/)
&nbsp;[![JSHint](../images/assets/images/jshint.png "JSHint")](http://jshint.com/docs/)

###Data Services
&nbsp;[![MongoDB](../images/assets/images/mongo.png "MongoDB")](http://docs.mongodb.org/manual/)
&nbsp;[![redis](../images/assets/images/redis.png "redis")](http://redis.io/documentation/)
&nbsp;[![CouchDB](../images/assets/images/couchdb.png "CouchDB")](http://docs.couchdb.org/en/1.6.1/)

#Folder Structure
    
    +- app
    |   +- models
    |   +- views
    |   +- controllers
    |   +- helpers
    |   |- index.html
    |   |- main.js
    |   \- config.js
    +- assets
    |   +- templates
    |   +- css
    |       |- main.css
    |       \- reset.css
    |   +- images
    |   +- library
    |       +- components
    |       |- require.min.js
    |       \- require.text.js
    +- services
    |   |- Vagrantfile
    +- tests
    |   +- data
    |   +- jasmine
    |       +- spec
    |       +- helper
    +- tasks
    |   \- main.js
    +- documentation
    +- node_modules
    |- LICENSE
    |- package.json
    |- bower.json
    |- GruntFile.js
    |- .gitignore
    |- .bowerrc
    |- .csslintrc
    |- .jshintrc
    \- .jscsrc
     
##Grunt Tasks
- ```grunt lint```
- ```grunt linting``` (watch task)
- ```grunt review``` (watch task)
- ```grunt quick-review``` (watch task)
- ```grunt test```
- ```grunt cover```
- ```grunt covering``` (watch task)

##References
- [Eric Meyer CSS Reset](http://meyerweb.com/eric/tools/css/reset/) ```assets/css/reset.css```
- [Patterns for separating RequireJS config from main module](https://github.com/jrburke/requirejs/wiki/Patterns-for-separating-config-from-the-main-module)
- [RequireJS AMD "Sugar"](http://requirejs.org/docs/whyamd.html#sugar)
- ["Cache busting" RequireJS](http://requirejs.org/docs/api.html#config-urlArgs)
- [Client-side Templating Throwdown](https://engineering.linkedin.com/frontend/client-side-templating-throwdown-mustache-handlebars-dustjs-and-more)
- [HandlebarsJS Template Precompilation](http://handlebarsjs.com/precompilation.html)
- [Marionette: The Backbone Framework (YouTube Video)](https://www.youtube.com/watch?v=EvQnntaqVdE&app=desktop)
- [Building Beautiful Apps with Marionette (YouTube Video)](https://www.youtube.com/watch?v=7yZKsgKxziw&app=desktop)

##Future
- [ ] Build and deploy tasks
- [ ] Continuous Integration server integration and configuration ([Travis](https://travis-ci.org/) and [Coveralls](https://coveralls.io/))
- [ ] Precompile Handlebars templates with [grunt-contrib-jst](https://github.com/gruntjs/grunt-contrib-jst) or the [Handlebars precompiler](http://handlebarsjs.com/precompilation.html)
- [ ] [UnCSS](https://github.com/addyosmani/grunt-uncss) integration
- [ ] [PhantomCSS](https://github.com/Huddle/PhantomCSS) and/or [BackstopJS](https://garris.github.io/BackstopJS/) integration for visual regression testing