<div align="center">
<a href="https://github.com/jhwohlgemuth/template-dev-webapp"><img src="assets/images/banner.png"</img></a>
</div>

> Opinionated boilerplate for MarionetteJS web app development using modern front-end tools

<div align="center">
<a href="https://travis-ci.org/jhwohlgemuth/mn-webapp-template"><img src="https://travis-ci.org/jhwohlgemuth/mn-webapp-template.svg?branch=master"</img></a>
<a href='https://coveralls.io/r/jhwohlgemuth/mn-webapp-template?branch=master'><img src='https://coveralls.io/repos/jhwohlgemuth/mn-webapp-template/badge.svg?branch=master' alt='Coverage Status' /></a>
<a href="https://codeclimate.com/github/jhwohlgemuth/mn-webapp-template"><img src="https://codeclimate.com/github/jhwohlgemuth/mn-webapp-template/badges/gpa.svg"</img></a>
<a href="https://david-dm.org/jhwohlgemuth/template-dev-webapp#info=devDependencies"><img src="https://david-dm.org/jhwohlgemuth/mn-webapp-template/dev-status.svg"></img></a>
<a href="https://tldrlegal.com/license/mit-license"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="MIT License"></img></a>
</div>

##Getting Started
- ```git clone https://github.com/jhwohlgemuth/template-dev-webapp.git```
- ```cd template-dev-webapp```
- ```npm install```
- Write some code and [run some Grunt tasks](#grunt-tasks)
- Enforce code [standards](#jscs-rules-jshint-rules)
- Connect to a [local data service](#data-services)

###Languages
&nbsp;[![JavaScript](../images/assets/images/js.png "JavaScript (ECMAScript 5)")](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf)
&nbsp;![HTML5](../images/assets/images/html5.png "HTML5")
&nbsp;![CSS3](../images/assets/images/css3.png "CSS3")
&nbsp;[![{less}](../images/assets/images/less.png "less CSS")](http://lesscss.org/)

###Frameworks & Libraries
[![Marionette.js](../images/assets/images/marionette.png "Marionette.js")](http://marionettejs.com/)
&nbsp;[![Backbone.js](../images/assets/images/backbone.png "Backbone.js")](http://backbonejs.org/)
&nbsp;[![jQuery](../images/assets/images/jquery.png "jQuery")](https://jquery.com/)
&nbsp;[![Handlebars](../images/assets/images/handlebars.png "handlebars")](http://handlebarsjs.com/)
&nbsp;[![RequireJS](../images/assets/images/requirejs.png "RequireJS")](http://requirejs.org/)
&nbsp;[![Jasmine](../images/assets/images/jasmine.png "Jasmine")](https://jasmine.github.io/2.2/introduction.html)

###Front-end Development
[![node.js](../images/assets/images/node.png "node.js")](https://nodejs.org/)
&nbsp;[![GruntJS](../images/assets/images/grunt.png "GruntJS")](http://gruntjs.com/)
&nbsp;[![Karma](../images/assets/images/karma.png "Karma")](https://karma-runner.github.io/0.12/index.html)
&nbsp;[![JSCS](../images/assets/images/jscs.png "JSCS")](http://jscs.info/)
&nbsp;[![JSHint](../images/assets/images/jshint.png "JSHint")](http://jshint.com/docs/)

###Free DevOps Tools
[![Code Climate](../images/assets/images/devops/code%20climate.png "Code Climate")](https://codeclimate.com/dashboard)
&nbsp;[![Codeship](../images/assets/images/devops/codeship.png "Codeship")](https://codeship.com/)
&nbsp;[![Travis-CI](../images/assets/images/devops/travis.png "Travis-CI")](https://travis-ci.org/)
&nbsp;[![Circle CI](../images/assets/images/devops/circleci.png "Circle CI")](https://circleci.com)

##Folder Structure
    
    +- .config
    |   |- .csslintrc
    |   |- .jscsrc
    |   |- .jshintrc
    |   \- karma.conf.js
    +- app
    |   +- models
    |   +- views
    |   +- controllers
    |   +- modules
    |   +- helpers
    |   |- app.js
    |   |- main.js
    |   |- config.js
    |   \- index.html
    +- assets
    |   +- templates
    |       +- data
    |   +- css
    |       \- reset.css
    |   +- images
    |   +- less
    |       \- styles.less
    |   +- library
    |       +- components
    |       |- require.min.js
    |       \- require.text.js
    +- tasks
    |   \- main.js
    +- tests
    |   +- data
    |   +- jasmine
    |       +- specs
    |   \- test-main.js
    +- vault
    |- .gitignore
    |- GruntFile.js
    |- package.json
    \- Vagrantfile
     
##Grunt Tasks
- ```grunt lint```
- ```grunt linting``` (watch task)
- ```grunt test```
- ```grunt testing``` (watch task)
- ```grunt cover```
- ```grunt covering``` (watch task)
- ```grunt review``` (watch task)
- ```grunt quick-review``` (watch task) **[default task]**
- ```grunt aria```
- ```grunt docs``` (generate documentation in ```./docs``` folder)
- ```grunt plato``` (generate plato report in ```./reports``` folder)
- Read [tasks/main.js](tasks/main.js) for all available tasks

##JSCS Rules ([JSHint rules](.config/.jshintrc))
 - [Disallow Dangling Underscores](http://jscs.info/rule/disallowDanglingUnderscores.html)
 - [Disallow Empty Blocks](http://jscs.info/rule/disallowEmptyBlocks.html)
 - [Disallow Keywords: ("with")](http://jscs.info/rule/disallowKeywords.html)
 - [Disallow Keywords on New Line: ["else"]](http://jscs.info/rule/disallowKeywordsOnNewLine.html)
 - [Disallow Mixed Spaces and Tabs](http://jscs.info/rule/disallowMixedSpacesAndTabs.html)
 - [Disallow Multiple Line Breaks](http://jscs.info/rule/disallowMultipleLineBreaks.html)
 - [Disallow Multiple Line Strings](http://jscs.info/rule/disallowMultipleLineStrings.html)
 - [Disallow Multiple Variable Declarations](http://jscs.info/rule/disallowMultipleVarDecl.html)
 - [Disallow Space After Object Keys](http://jscs.info/rule/disallowSpaceAfterObjectKeys.html)
 - [Disallow Space After Prefix Unary Operators ("++", "--", "+", "-", "~", "!")](http://jscs.info/rule/disallowSpaceAfterPrefixUnaryOperators.html)
 - [Disallow Space Before Postfix Unary Operators: ("++", "--")](http://jscs.info/rule/disallowSpaceBeforePostfixUnaryOperators.html)
 - [Disallow Spaces in Anonymous Function Expressions](http://jscs.info/rule/disallowSpacesInAnonymousFunctionExpression.html)
 - [Disallow Spaces in Function Expressions Before Opening Round Braces](http://jscs.info/rule/disallowSpacesInFunctionDeclaration.html)
 - [Disallow Spaces in Named Function Expressions Before Opening Round Braces](http://jscs.info/rule/disallowSpacesInNamedFunctionExpression.html)
 - [Disallow Spaces Inside Array Brackets](http://jscs.info/rule/disallowSpacesInsideArrayBrackets.html)
 - [Disallow Spaces Inside Object Brackets](http://jscs.info/rule/disallowSpacesInsideObjectBrackets.html)
 - [Disallow Spaces Inside Parentheses](http://jscs.info/rule/disallowSpacesInsideParentheses.html)
 - [Disallow Trailing Commas](http://jscs.info/rule/disallowTrailingComma.html)
 - [Disallow Trailing Whitespaces](http://jscs.info/rule/disallowTrailingWhitespace.html)
 - [Disallow Yoda Conditions](http://jscs.info/rule/disallowYodaConditions.html)
 - [Maximum Line Length (150)](http://jscs.info/rule/maximumLineLength.html)
 - [Require Camel Case or Upper Case Identifiers](http://jscs.info/rule/requireCamelCaseOrUpperCaseIdentifiers.html)
 - [Require Capitalized Constructors](http://jscs.info/rule/requireCapitalizedConstructors.html)
 - [Require Commas Before Line Breaks](http://jscs.info/rule/requireCommaBeforeLineBreak.html)
 - [Require Curly Braces ("else", "for", "while", "do", "try", "catch")](http://jscs.info/rule/requireCurlyBraces.html)
 - [Require Space After Keywords ("if", "else", "for", "while", "do", "switch", "return", "try", "catch")](http://jscs.info/rule/requireSpaceAfterKeywords.html)
 - [Require Space Before Binary Operators ("+", "-", "/", "*", "=", "==", "===", "!=", "!==")](http://jscs.info/rule/requireSpaceAfterBinaryOperators.html)
 - [Require Space Before Block Statements](http://jscs.info/rule/requireSpaceBeforeBlockStatements.html)
 - [Validate Indentation (4)](http://jscs.info/rule/validateIndentation.html)
 - [Validate Line Breaks ("CRLF")](http://jscs.info/rule/validateLineBreaks.html)
 - [Validate Quote Marks (Use single quotes)](http://jscs.info/rule/validateQuoteMarks.html)

#Data Services
&nbsp;[![MongoDB](../images/assets/images/mongodb.png "MongoDB")](#using-mongodb)
&nbsp;[![redis](../images/assets/images/redis.png "redis")](#using-redis)
&nbsp;[![CouchDB](../images/assets/images/couchdb.png "CouchDB")](#using-couchdb)

###Requirements
- [node.js](https://nodejs.org/) is installed
- [Virtualbox](https://www.virtualbox.org/wiki/Downloads) is installed
- [Vagrant](https://www.vagrantup.com/) is installed
- vagrant hostmanager plugin is installed ```vagrant plugin install vagrant-hostmanager```


###Using [MongoDB](http://docs.mongodb.org/manual/)

**&#x02713;** Set ```inline``` to ```$install_mongo``` on [line 27](Vagrantfile#L27).

**&#x02713;** Execute ```vagrant up```

**&#x02713;** [Install Mongo for windows](https://github.com/jhwohlgemuth/michi#mongodb-setup-on-windows)

**&#x02713;** In a mongo console, execute ```mongo db.server```

> **Tip:** The default port for MongoDB is 27017.  It can be changed by editing ```/etc/mongod.conf```.

###Using [redis](http://redis.io/documentation/)

**&#x02713;** Set ```inline``` to ```$install_redis``` on [line 27](Vagrantfile#L27).

**&#x02713;** Execute ```vagrant up```

**&#x02713;** Install a redis client.  I like [Redis Commander](https://joeferner.github.io/redis-commander/).

> Install Redis Commander with ```npm install redis-commander --global```

**&#x02713;** Start Redis Commander with ```redis-commander --redis-host db.server```

**&#x02713;** Open your favorite browser and navigate to [localhost:8081](http://localhost:8081)

> **Tip** The default port for redis is 6379.  It can be changed by editing ```/etc/redis/redis.conf```.

###Using [CouchDB](http://docs.couchdb.org/en/1.6.1/)
**&#x02713;** Set  ```inline``` to ```$install_couch``` on [line 27](Vagrantfile#L27).

**&#x02713;** Execute ```vagrant up```

**&#x02713;** Create a ssh tunnel on your host machine (input ```yes```, then ```vagrant```):

    ssh -f -L localhost:5984:127.0.0.1:5984 vagrant@db.server -N

**&#x02713;** Open your favorite browser and navigate to [localhost:5984/_utils](http://localhost:5984/_utils)

> **Tip:** The default port for CouchDB is 5984.  It can be changed by editing ```/etc/couchdb/local.ini```

#Alternatives
- [Yeoman](http://yeoman.io/) - The web's scaffolding tool for modern web apps
- [Lineman.js](http://linemanjs.com/) - Build awesome web apps, easily
- [Rin](https://sanographix.github.io/rin/) - A lean, gulp-based HTML & SASS boilerplate for better front-end coding
- [Wee](https://www.weepower.com/) - A lightweight front-end framework for logically building complex, responsive web projects
- [Front-end Boilerplate](http://frontendboilerplate.com/) - The easy way to start your web projects from scratch!
- [Component](https://github.com/componentjs/component) - Front-end package manager and build tool for modular web applications.
- [Mixture](http://mixture.io/) - A rapid front-end development toolset for Mac & Windows
- [Volo](http://volojs.org/) - a tool which lets you quickly create projects, add libraries, and automate common tasks using node and JS

#References
- [Eric Meyer CSS Reset](http://meyerweb.com/eric/tools/css/reset/) ```assets/css/reset.css```
- [Patterns for separating RequireJS config from main module](https://github.com/jrburke/requirejs/wiki/Patterns-for-separating-config-from-the-main-module)
- [RequireJS AMD "Sugar"](http://requirejs.org/docs/whyamd.html#sugar)
- ["Cache busting" RequireJS](http://requirejs.org/docs/api.html#config-urlArgs)
- [Parsing JSON files loaded with RequireJS text! plugin while using Karma](https://github.com/karma-runner/karma/issues/740)
- [Client-side Templating Throwdown](https://engineering.linkedin.com/frontend/client-side-templating-throwdown-mustache-handlebars-dustjs-and-more)
- [HandlebarsJS Template Precompilation](http://handlebarsjs.com/precompilation.html)
- [Marionette: The Backbone Framework (YouTube Video)](https://www.youtube.com/watch?v=EvQnntaqVdE&app=desktop)
- [Building Beautiful Apps with Marionette (YouTube Video)](https://www.youtube.com/watch?v=7yZKsgKxziw&app=desktop)

#Future
- [x] Passing tests on [CI servers](#free-devops-tools)
- [x] Add [Plato](https://es-analysis.github.io/plato/examples/marionette/) support
- [x] Add [SinonJS](http://sinonjs.org/) support
- [ ] Create build and deploy tasks
- [ ] Optimize JS code with r.js
- [ ] Precompile templates with [grunt-contrib-jst](https://github.com/gruntjs/grunt-contrib-jst) or the [Handlebars precompiler](http://handlebarsjs.com/precompilation.html)
- [x] Documentation generation with [JSDoc](http://usejsdoc.org/)
- [ ] [PhantomCSS](https://github.com/Huddle/PhantomCSS) and/or [BackstopJS](https://garris.github.io/BackstopJS/) integration for visual regression testing

</br>
<div align="center">
<a href="https://bitdeli.com/free"><img src="https://d2weczhvl823v0.cloudfront.net/jhwohlgemuth/template-dev-webapp/trend.png" alt="Bitdeli Badge"></img></a>
</div>