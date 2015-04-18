<div align="center"><h1>Web App Project Template</h1></div>
<div align="center">
<a href="https://david-dm.org/jhwohlgemuth/template-dev-webapp"><img src="https://david-dm.org/jhwohlgemuth/template-dev-webapp.svg"></img></a>
<a href="https://david-dm.org/jhwohlgemuth/template-dev-webapp#info=devDependencies"><img src="https://david-dm.org/jhwohlgemuth/template-dev-webapp/dev-status.svg"></img></a>
<a href="https://tldrlegal.com/license/mit-license"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square"></img></a>
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
&nbsp;[![Marionette.js](../images/assets/images/marionette.png "Marionette.js")](http://marionettejs.com/)
&nbsp;[![Backbone.js](../images/assets/images/backbone.png "Backbone.js")](http://backbonejs.org/)
&nbsp;[![jQuery](../images/assets/images/jquery.png "jQuery")](https://jquery.com/)
&nbsp;[![Handlebars](../images/assets/images/handlebars.png "handlebars")](http://handlebarsjs.com/)
&nbsp;[![RequireJS](../images/assets/images/requirejs.png "RequireJS")](http://requirejs.org/)

###Front-end Tooling
&nbsp;[![node.js](../images/assets/images/node.png "node.js")](https://nodejs.org/)
&nbsp;[![Bower](../images/assets/images/bower.png "Bower")](http://bower.io/)
&nbsp;[![GruntJS](../images/assets/images/grunt.png "GruntJS")](http://gruntjs.com/)

###Front-end Testing & Review
&nbsp;[![Karma](../images/assets/images/karma.png "Karma")](https://karma-runner.github.io/0.12/index.html)
&nbsp;[![Jasmine](../images/assets/images/jasmine.png "Jasmine")](https://jasmine.github.io/2.2/introduction.html)
&nbsp;[![JSCS](../images/assets/images/jscs.png "JSCS")](http://jscs.info/)
&nbsp;[![JSHint](../images/assets/images/jshint.png "JSHint")](http://jshint.com/docs/)
&nbsp;[![JS Inspect](../images/assets/images/jsinspect.png "JS Inspect")](https://github.com/danielstjules/jsinspect)

##Folder Structure
    
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
    +- tasks
    |   \- main.js
    +- tests
    |   +- data
    |   +- jasmine
    |       +- spec
    |       +- helper
    +- vault
    +- documentation
    +- node_modules
    |- LICENSE
    |- package.json
    |- bower.json
    |- GruntFile.js
    |- Vagrantfile
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

#Data Services
&nbsp;[![MongoDB](../images/assets/images/mongodb.png "MongoDB")](#using-mongodb)
&nbsp;[![redis](../images/assets/images/redis.png "redis")](#using-redis)
&nbsp;[![CouchDB](../images/assets/images/couchdb.png "CouchDB")](#using-couchdb)

###Requirements
- [node.js](https://nodejs.org/) is installed
- [Virtualbox](https://www.virtualbox.org/wiki/Downloads) is installed
- [Vagrant](https://www.vagrantup.com/) is installed
- vagrant hostmanager plugin is installed ```vagrant plugin install vagrant-hostmanager```

###Set-up
- Install vagrant hostmanager plugin with ```vagrant plugin install vagrant-hostmanager```
- Choose data service and edit [line 26](Vagrantfile#L26) in the Vagrantfile
- Execute ```vagrant up```

###Using [MongoDB](http://docs.mongodb.org/manual/)

**&#x02713;** Set ```inline``` to ```$install_mongo``` on [line 26](Vagrantfile#L26).

**&#x02713;** Execute ```vagrant up```

**&#x02713;** [Install Mongo for windows](https://github.com/jhwohlgemuth/michi#mongodb-setup-on-windows)

**&#x02713;** In a mongo console, execute ```mongo db.server```

> **Tip:** The default port for MongoDB is 27017.  It can be changed by editing ```/etc/mongod.conf```.

###Using [redis](http://redis.io/documentation/)

**&#x02713;** Set ```inline``` to ```$install_redis``` on [line 26](Vagrantfile#L26).

**&#x02713;** Execute ```vagrant up```

**&#x02713;** Install a redis client.  I like [Redis Commander](https://joeferner.github.io/redis-commander/).

> Install Redis Commander with ```npm install redis-commander --global```

**&#x02713;** Start Redis Commander with ```redis-commander --redis-host db.server```

**&#x02713;** Open your favorite browser and navigate to [localhost:8081](http://localhost:8081)

> **Tip** The default port for redis is 6379.  It can be changed by editing ```/etc/redis/redis.conf```.

###Using [CouchDB](http://docs.couchdb.org/en/1.6.1/)
**&#x02713;** Set  ```inline``` to ```$install_couch``` on [line 26](Vagrantfile#L26).

**&#x02713;** Execute ```vagrant up```

**&#x02713;** Create a ssh tunnel on your host machine (input ```yes```, then ```vagrant```):

    ssh -f -L localhost:5984:127.0.0.1:5984 vagrant@db.server -N

**&#x02713;** Open your favorite browser and navigate to [localhost:5984/_utils](http://localhost:5984/_utils)

> **Tip:** The default port for CouchDB is 5984.  It can be changed by editing ```/etc/couchdb/local.ini```

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
- [ ] Build and deploy tasks
- [ ] Continuous Integration server integration and configuration ([Travis](https://travis-ci.org/) and [Coveralls](https://coveralls.io/))
- [ ] Precompile templates with [grunt-contrib-jst](https://github.com/gruntjs/grunt-contrib-jst) or the [Handlebars precompiler](http://handlebarsjs.com/precompilation.html)
- [ ] [UnCSS](https://github.com/addyosmani/grunt-uncss) integration
- [ ] [PhantomCSS](https://github.com/Huddle/PhantomCSS) and/or [BackstopJS](https://garris.github.io/BackstopJS/) integration for visual regression testing