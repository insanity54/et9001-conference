/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function($) {
    'use strict';

    app.appView = Backbone.View.extend({
        events: {
            'keypress .new-conference-box': 'createOnEnter', // create a comment if enter was pressed
            'click #submit-conference': 'create' // create a comment when submit button pressed
        },
        el: '.conferenceapp',
        initialize: function() {
            //this.template = _.template($('#hello-template').html());
            //console.log('app-view init');

            this.listenTo(app.conferences, 'change', this.render);
            this.listenTo(app.conferences, 'reset', this.addAll);
            this.$input = this.$('.new-conference-box');
            this.$list = this.$('#conference-log');

            // Suppresses 'add' events with {reset: true} and prevents the app view
            // from being re-rendered for every model. Only renders when the 'reset'
            // event is triggered at the end of the fetch.
            app.conferences.fetch({
                reset: true
            });

        },

        /** add all the conferences to the page */
        addAll: function() {
            this.$list.html('');
            app.conferences.each(this.addOne, this);
        },

        /** add one conference to the page */
        addOne: function(model) {
            var view = new app.LogView({
                model: model
            });
            this.$list.append(view.render().el);
        },

        render: function() {
            this.$el.html(this.template(this.model.attributes));
        },

        createOnEnter: function(e) {
            if (e.which === ENTER_KEY && this.$input.val().trim()) {
                this.create();
            }
        },

        create: function() {
            app.conferences.create({
                communication: this.$input.val().trim()
            });
            this.$input.val('');
        }


    });

})(jQuery);