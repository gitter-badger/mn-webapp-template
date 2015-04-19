require(['app', 'marionette', 'handlebars','text!../tests/data/ERRORS.json', 'modules/myModule'],
    function (WebApp, Mn, handlebars, data){

    WebApp.start();
    var ErrorModel = Backbone.Model.extend({
        initialize: function() {
            console.log('Creating an ErrorModel');
        },
        defaults: {
            timestamp: null,
            type: null,
            data: null,
            code: null,
            index: null,
            _id: null
        }
    });
    var ErrorCollection = Backbone.Collection.extend({
        model: ErrorModel
    });
    var ErrorView = Mn.ItemView.extend({
        tagName: 'li',
        template: handlebars.compile('<a href="#">{{ type }}</a>')
    });
    var ErrorsView = Mn.CollectionView.extend({
        tagName: 'ul',
        childView: ErrorView,
        events: {
            'click li>a': function(){
                WebApp.vent.trigger('foo');
            }
        }
    });
    var errorsView = new ErrorsView({
        collection: (new ErrorCollection(JSON.parse(data)))
    });

    WebApp.navigation.show(errorsView);
});