/* global Backbone */
/* global jQuery */

var app = app || {};


(function ($) {
	'use strict';

    var Conferences = Backbone.Collection.extend({
        url: function() {
            return "https://et9001-infra-insanity54-1.c9users.io/api/conferences/" + $("#pageID").text();
        },
        model: app.Conference,
        // url: function() {
        //     return this.url + '?pid=' + pid + '&cid=' + this.id;
    });
    
    app.conferences = new Conferences();
})(jQuery);