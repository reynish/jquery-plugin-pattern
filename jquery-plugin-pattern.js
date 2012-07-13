/**
 * @package [name]
 * @description [description]
 * @author [author]
 * @license [url] [description]
 */
;
( function( $, window, undefined ) {

	/**
	 * Strict mode for better browser compatibility (also more likely to thow an error). Uncomment it if you know it.
	 */
	// "use strict";

	/**
	 * Unique plugin name.
	 * @type {String}
	 */
	var pluginName = 'defaultPluginName',

		/**
		 * Default properties for single instance of your plugin.
		 * @type {Object}
		 */
		defaults = {
			propertyName: "value"
		},

		/**
		 * Global properties defined once are available for each instance of your plugin.
		 * @type {Object}
		 */
		globals = {
			propertyName: "value"
		};

	/**
	 * The actual plugin constructor.
	 * @param {Object} element Which element is your plugin going to be applied on.
	 * @param {Object} options Custom options for selected element extending default ones .
	 */
	function Plugin( element, options ) {
		this.element    = element;
		this.$element   = $(this.element);
		this.options    = $.extend({}, defaults, options);

		this._defaults  = defaults;
		this._defaults  = defaults;
		this._name      = pluginName;

		this.init();
	}

	/**
	 * Plugin private methods.
	 */
	Plugin.prototype = {

		/**
		 * Plugin initialization method
		 */
		init: function() {

		},

		anotherMethod: function() {

		}

	};

	/**
	 * jQuery external plugin definition.
	 * @param  {Object} options
	 */
	$.fn[pluginName] = function( options ) {
		return this.each( function() {
			if ( !$.data( this, 'plugin_' + pluginName ) ) {
				$.data( this, 'plugin_' + pluginName, new Plugin( this, options ) );
			}
		} );
	};

} (jQuery, window) );