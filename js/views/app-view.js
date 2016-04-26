/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
	'use strict';
	
	app.appView = Backbone.View.extend({
		events: {
			'keypress .new-conference-box': 'createOnEnter', // create a comment if enter was pressed
			'click .submit-conference': 'create' // create a comment when submit button pressed
		},
		
    	initialize: function() {
			this.template = _.template($('#hello-template').html());
			this.listenTo(this.model, 'change', this.render);
			this.$input = this.$('.new-conference-box');
		},

		render: function(){
			this.$el.html(this.template(this.model.attributes));
		},
		
		createOnEnter: function(e) {
			if (e.which === ENTER_KEY && this.$input.val().trim()) {
				this.create();
			}
		},
		
		create: function() {
			this.conferences.create({
				
			})
		}
		
		
	});

})(jQuery);