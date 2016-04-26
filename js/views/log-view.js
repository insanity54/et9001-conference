/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
	'use strict';
	
	app.logView = Backbone.View.extend({
    	initialize: function() {
			this.template = _.template($('#log-template').html());
			this.listenTo(this.model, 'change', this.render);
		},

		render: function(){
			this.$el.html(this.template(this.model.attributes));
		}
	});

})(jQuery);