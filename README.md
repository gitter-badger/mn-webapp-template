<div align="center"><h1>Web App Project Template</h1></div>
<div align="center">
<a href="https://travis-ci.org/jhwohlgemuth/template-dev-webapp"><img src="https://travis-ci.org/jhwohlgemuth/template-dev-webapp.svg?branch=master"</img></a>
<a href="https://codeclimate.com/github/jhwohlgemuth/template-dev-webapp"><img src="https://codeclimate.com/github/jhwohlgemuth/template-dev-webapp/badges/gpa.svg"</img></a>
<a href="https://david-dm.org/jhwohlgemuth/template-dev-webapp"><img src="https://david-dm.org/jhwohlgemuth/template-dev-webapp.svg"></img></a>
<a href="https://david-dm.org/jhwohlgemuth/template-dev-webapp#info=devDependencies"><img src="https://david-dm.org/jhwohlgemuth/template-dev-webapp/dev-status.svg"></img></a>
<a href="https://tldrlegal.com/license/mit-license"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="MIT License"></img></a>
</div>
</br>

> Opinionated boilerplate environment for Web App development using modern front-end tooling

##Getting Started
- ```git clone https://github.com/jhwohlgemuth/template-dev-webapp.git```
- ```cd template-dev-webapp```
- ```npm install```
- Write some code and [run some Grunt tasks](#grunt-tasks)
- Connect to a [local data service](#data-services)

###Languages
![HTML5](../images/assets/images/html5.png "HTML5")
&nbsp;![CSS3](../images/assets/images/css3.png "CSS3")
&nbsp;[![JavaScript](../images/assets/images/js.png "JavaScript (ECMAScript 5)")](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf)

###Frameworks & Libraries
[![Marionette.js](../images/assets/images/marionette.png "Marionette.js")](http://marionettejs.com/)
&nbsp;[![Backbone.js](../images/assets/images/backbone.png "Backbone.js")](http://backbonejs.org/)
&nbsp;[![jQuery](../images/assets/images/jquery.png "jQuery")](https://jquery.com/)
&nbsp;[![Handlebars](../images/assets/images/handlebars.png "handlebars")](http://handlebarsjs.com/)
&nbsp;[![RequireJS](../images/assets/images/requirejs.png "RequireJS")](http://requirejs.org/)

###Front-end Tooling
[![node.js](../images/assets/images/node.png "node.js")](https://nodejs.org/)
&nbsp;[![GruntJS](../images/assets/images/grunt.png "GruntJS")](http://gruntjs.com/)

###Front-end Testing & Review
[![Karma](../images/assets/images/karma.png "Karma")](https://karma-runner.github.io/0.12/index.html)
&nbsp;[![Jasmine](../images/assets/images/jasmine.png "Jasmine")](https://jasmine.github.io/2.2/introduction.html)
&nbsp;[![JSCS](../images/assets/images/jscs.png "JSCS")](http://jscs.info/)
&nbsp;[![JSHint](../images/assets/images/jshint.png "JSHint")](http://jshint.com/docs/)
&nbsp;[![JS Inspect](../images/assets/images/jsinspect.png "JS Inspect")](https://github.com/danielstjules/jsinspect)

###Free DevOps Tools
[![Code Climate](../images/assets/images/devops/code%20climate.png "Code Climate")](https://codeclimate.com/dashboard)
&nbsp;[![Codeship](../images/assets/images/devops/codeship.png "Codeship")](https://codeship.com/)
&nbsp;[![Travis-CI](../images/assets/images/devops/travis.png "Travis-CI")](https://travis-ci.org/)
&nbsp;[![Circle CI](../images/assets/images/devops/circleci.png "Circle CI")](https://circleci.com)
&nbsp;[![drone.io](../images/assets/images/devops/drone.io.png "drone.io")](https://drone.io/)
&nbsp;[![Semaphore](../images/assets/images/devops/semaphore.png "Semaphore")](https://semaphoreci.com/)
&nbsp;[![Shippable](../images/assets/images/devops/shippable.png "Shippable")](http://www.shippable.com/)
&nbsp;[![Wercker](../images/assets/images/devops/wercker.png "Wercker")](https://app.wercker.com)


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
    |       |- main.css
    |       \- reset.css
    |   +- images
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
    +- documentation
    +- node_modules
    |- .gitignore
    |- GruntFile.js
    |- package.json
    \- Vagrantfile
     
##Grunt Tasks
- ```grunt lint```
- ```grunt linting``` (watch task)
- ```grunt test```
- ```grunt testing``` (watch task)
- ```grunt review``` (watch task)
- ```grunt quick-review``` (watch task) **[default task]**
- ```grunt aria```
- Read [tasks/main.js](tasks/main.js) for all available tasks

##JSCS Rules
 - [Disallow Dangling Underscores](http://catatron.com/node-jscs/rules/disallow-dangling-underscores)
 - [Disallow Empty Blocks](http://catatron.com/node-jscs/rules/disallow-empty-blocks)
 - [Disallow Keywords: ("with")](http://catatron.com/node-jscs/rules/disallow-keywords)
 - [Disallow Keywords on New Line: ["else"]](http://catatron.com/node-jscs/rules/disallow-keywords-on-new-line)
 - [Disallow Mixed Spaces and Tabs](http://catatron.com/node-jscs/rules/disallow-mixed-spaces-and-tabs)
 - [Disallow Multiple Line Breaks](http://catatron.com/node-jscs/rules/disallow-multiple-line-breaks)
 - [Disallow Multiple Line Strings](http://catatron.com/node-jscs/rules/disallow-multiple-line-strings)
 - [Disallow Multiple Variable Declarations](http://catatron.com/node-jscs/rules/disallow-multiple-var-decl)
 - [Disallow Space After Object Keys](http://catatron.com/node-jscs/rules/disallow-space-after-object-keys)
 - [Disallow Space After Prefix Unary Operators ("++", "--", "+", "-", "~", "!")](http://catatron.com/node-jscs/rules/disallow-space-after-prefix-unary-operators)
 - [Disallow Space Before Postfix Unary Operators: ("++", "--")](http://catatron.com/node-jscs/rules/disallow-space-before-postfix-unary-operators)
 - [Disallow Spaces in Anonymous Function Expressions](http://catatron.com/node-jscs/rules/disallow-spaces-in-anonymous-function-expression)
 - [Disallow Spaces in Function Expressions Before Opening Round Braces](http://catatron.com/node-jscs/rules/disallow-spaces-in-function-expression)
 - [Disallow Spaces in Named Function Expressions Before Opening Round Braces](http://catatron.com/node-jscs/rules/disallow-spaces-in-named-function-expression)
 - [Disallow Spaces Inside Array Brackets](http://catatron.com/node-jscs/rules/disallow-spaces-inside-array-brackets)
 - [Disallow Spaces Inside Object Brackets](http://catatron.com/node-jscs/rules/disallow-spaces-inside-object-brackets)
 - [Disallow Spaces Inside Parentheses](http://catatron.com/node-jscs/rules/disallow-spaces-inside-parentheses)
 - [Disallow Trailing Commas](http://catatron.com/node-jscs/rules/disallow-trailing-comma)
 - [Disallow Trailing Whitespaces](http://catatron.com/node-jscs/rules/disallow-trailing-whitespace)
 - [Disallow Yoda Conditions](http://catatron.com/node-jscs/rules/disallow-yoda-conditions)
 - [Maximum Line Length (150)](http://catatron.com/node-jscs/rules/maximum-line-length)
 - [Require Camel Case or Upper Case Identifiers](http://catatron.com/node-jscs/rules/require-camelcase-or-uppercase-identifiers)
 - [Require Capitalized Constructors](http://catatron.com/node-jscs/rules/require-capitalized-constructors)
 - [Require Commas Before Line Breaks](http://catatron.com/node-jscs/rules/require-comma-before-line-break)
 - [Require Curly Braces ("else", "for", "while", "do", "try", "catch")](http://catatron.com/node-jscs/rules/require-curly-braces)
 - [Require Space After Keywords ("if", "else", "for", "while", "do", "switch", "return", "try", "catch")](http://catatron.com/node-jscs/rules/require-space-after-keywords)
 - [Require Space Before Binary Operators ("+", "-", "/", "*", "=", "==", "===", "!=", "!==")](http://catatron.com/node-jscs/rules/require-space-before-binary-operators)
 - [Require Space Before Block Statements](http://catatron.com/node-jscs/rules/require-space-before-block-statements)
 - [Validate Indentation (4)](http://catatron.com/node-jscs/rules/validate-indentation)
 - [Validate Line Breaks ("CRLF")](http://catatron.com/node-jscs/rules/validate-line-breaks/)
 - [Validate Quote Marks (Use single quotes)](http://catatron.com/node-jscs/rules/validate-quote-marks)

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
- [Client-side Templating Throwdown](https://engineering.linkedin.com/frontend/client-side-templating-throwdown-mustache-handlebars-dustjs-and-more)
- [HandlebarsJS Template Precompilation](http://handlebarsjs.com/precompilation.html)
- [Marionette: The Backbone Framework (YouTube Video)](https://www.youtube.com/watch?v=EvQnntaqVdE&app=desktop)
- [Building Beautiful Apps with Marionette (YouTube Video)](https://www.youtube.com/watch?v=7yZKsgKxziw&app=desktop)

#Future
- [ ] Passing tests on [CI servers](#free-devops-tools)
- [ ] Build and deploy tasks
- [ ] Optimize JS code with r.js
- [ ] Precompile templates with [grunt-contrib-jst](https://github.com/gruntjs/grunt-contrib-jst) or the [Handlebars precompiler](http://handlebarsjs.com/precompilation.html)
- [ ] Documentation generation with [JSDoc](http://usejsdoc.org/)
- [ ] [PhantomCSS](https://github.com/Huddle/PhantomCSS) and/or [BackstopJS](https://garris.github.io/BackstopJS/) integration for visual regression testing

</br>
<div align="center">
<a href="https://bitdeli.com/free"><img src="https://d2weczhvl823v0.cloudfront.net/jhwohlgemuth/template-dev-webapp/trend.png" alt="Bitdeli Badge"></img></a>
</div>