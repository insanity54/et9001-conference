/* global Backbone */
/* global jQuery */

var app = app || {};

(function ($) {
	'use strict';
	
	app.Conference = Backbone.Model.extend({
		defaults: {
			communication: 'I like this learning tool for reasons x y and z'
		},
//         url: function() {
//         	var pid = $("#pageID").text();
//         	// url plus the page ID plus the new communication id
// 			return this.urlRoot + '?pid=' + pid + '&cid=' + this.id;
		//}
	});
	
})(jQuery);