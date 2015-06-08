define(function(require) {
    'use strict';

    var app           = require('app');
    var Marionette    = require('marionette');
    var _             = require('underscore');
    var $             = require('jquery');
    var TabularRow    = require('models/TabularEditorRow');
    var rowTemplate   = require('text!../../assets/templates/tabularEditorRow.html');
    var tableTemplate = require('text!../../assets/templates/tabularEditor.html');

    var RowView = Marionette.ItemView.extend({
        tagName: "tr",
        template: rowTemplate
    });
    return Marionette.CompositeView.extend({
        _defaultColumnOrder: {
            _id:       '_id',
            index:     42,
            guid:      'guid',
            select:    'select',
            number:    'number',
            toggle:    'toggle',
            latitude:  'lat',
            longitude: 'long',
            word:      'words'
        },
        tagName: 'table',
        childView: RowView,
        childViewContainer: "tbody",
        template: tableTemplate,
        ui: {
            'addRowBtn':   '#add-row',
            'changeOrderBtn': '#change-order',
            'header': 'th',
            'cell':   'td',
            'input':  '.data'
        },
        events: {
            'click @ui.addRowBtn':        'addRow',
            'click @ui.changeOrderBtn':   'reverseColumnOrder',
            'click @ui.header': 'sortByColumn',
            'blur  @ui.input':  'onEditComplete'
        },
        initialize: function(options) {
            var view = this;
            view.setDimensions(options.width, options.height);
            view.model = new TabularRow.model();
            view.model.set('headers', Object.keys(view.collection.at(0).attributes));
            $(window).on('resize', function() {
                view.triggerMethod('update:dimensions');
            });
        },
        onEditComplete: function(e) {
            var $el = $(e.currentTarget);
            var columnName = $el.closest('td').attr('data-column');
            var row = $('tr').index($el.closest('tr'));
            var rowModel = this.collection.at(row - 1);
            rowModel.set(columnName, $el.text());
        },
        onUpdateDimensions: function() {
            this.updateDimensions(this.width, this.height);
        },
        onShow: function() {
            var view = this;
            view.updateDimensions(view.width, view.height);
        },
        reverseColumnOrder: function() {
            var view = this;
            var headers = _.clone(view.model.get('headers'));
            view.model.set('headers',headers.reverse());
            $('th').each(function(index){
                $(this).find('.data').text(headers[index]);
            });
            var models = this.collection.models;
            view.collection.reset(null);
            models.forEach(function(model) {
                view.addRow(model.attributes);
            });
            this.triggerMethod('update:dimensions');
        },
        addRow: function(options) {
            options = _.extend(this._defaultColumnOrder, options);
            var _options = Object.create(null);
            var columns = this.model.get('headers');
            for (var name in columns) {
                if (options.hasOwnProperty(columns[name])) {
                    _options[columns[name]] = options[columns[name]];
                }
            }
            this.collection.add(new TabularRow.model(_options));
            this.triggerMethod('update:dimensions');

        },
        sortByColumn: function(e) {
            this.collection.comparator = this.model.get('headers')[$(e.currentTarget).attr('data-column')];
            this.collection.sort();
            this.collection.trigger('reset');
            this.triggerMethod('update:dimensions');
        },
        setDimensions: function(width, height) {
            this.width  = width;
            this.height = height;
        },
        updateDimensions: function(outerWidth, outerHeight) {
            function stringToNumber(str, units) {return parseInt(str.substring(0, str.length - units.length), 10);}
            function percentToNumber(str) {
                if (/\d*%$/.test(str)) {
                    return parseInt(str.substring(0, str.length - 1), 10) / 100;
                } else {
                    console.error(str + ' is not a percentage.')
                }
            }
            var em = stringToNumber($('body').css('font-size'), 'px');
            var cellBorder = stringToNumber($('td').css('border-right-width'), 'px');
            var scrollbarWidth = 17;//TODO: replace with function
            var view = this;
            var parentWidth = view._parent.$el.width();
            var width = outerWidth ? outerWidth : view._parent.$el.width();
            if (_.isString(width)) {
                if (/\d*%$/.test(width)) {
                    width = percentToNumber(width) * parentWidth;
                } else {
                    width = parentWidth;
                }
            }
            var height = outerHeight ? outerHeight : 'auto';
            var $head = view.$el.find('thead');
            var $body = view.$el.find('tbody');
            var colNum = view.model.get('headers').length;
            var rowNum = view.collection.length;
            var padding = 0.5 * em;
            var columnWidth = ((width - scrollbarWidth) / colNum) - 2 * (cellBorder + padding);
            var calculatedWidth = (scrollbarWidth + colNum * (columnWidth + 2 * (cellBorder + padding)));
            var calculatedHeight = ((((2 * padding) + em) + rowNum) * rowNum) + (3 * em);
            $body
                .height(height)
                .add($head).find('.data').width(columnWidth);

        }
    });
});