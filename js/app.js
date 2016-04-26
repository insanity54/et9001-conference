/* global _ */
/* global $ */
/* global Backbone */

var app = app || {};
var ENTER_KEY = 13;


$(function() {
    'use strict';

    // controller
    
    app.conferences.fetch({
        success: function(collection, response, options) {
            console.log(response);
            
        },
        error: function(collection, response, options) {
            console.log(collection);
        }
    });
});