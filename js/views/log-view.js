/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function($) {
    'use strict';

    app.LogView = Backbone.View.extend({
        tagName: 'li',
        // Cache the template function for a single item.
        template: _.template($('#log-template').html()),

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            //console.log(_.template($('#log-template').html()));
        },

        render: function() {
            // Backbone LocalStorage is adding `id` attribute instantly after
            // creating a model.  This causes our TodoView to render twice. Once
            // after creating a model and once on `id` change.  We want to
            // filter out the second redundant render, which is caused by this
            // `id` change.  It's known Backbone LocalStorage bug, therefore
            // we've to create a workaround.
            // https://github.com/tastejs/todomvc/issues/469
            if (this.model.changed.id !== undefined) {
                return;
            }
            console.log(this.model);
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

})(jQuery);