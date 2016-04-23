/* global Backbone */
/* global jQuery */

var app = app || {};


(function ($) {
	'use strict';

    var Conferences = Backbone.Collection.extend({
        url: function() {
            return "https://hook.io/insanity54/et9001-conference/" + $("#pageID").text();
        },
        model: app.Conference
    });
    
    
    
    app.conferences = new Conferences();
})(jQuery);