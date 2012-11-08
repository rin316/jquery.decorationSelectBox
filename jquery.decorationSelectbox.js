/*!
 * jquery.decorationSelectbox.js
 *
 * @varsion   1.0
 * @require   jquery.js
 * @create    2012-11-08
 * @modify    2012-11-08
 * @author    rin316 [Yuta Hayashi]
 * @link      https://github.com/rin316/jquery.decorationSelectbox/
 */
;(function ($, window, undefined) {
'use strict'

var DecorationSelectbox
	,DEFAULT_OPTIONS
	;

/**
 * DEFAULT_OPTIONS
 */
DEFAULT_OPTIONS = {
	selectBoxSelector: '.mod-decorationSelectBox-select'
};

/**
 * DecorationSelectbox
 */
DecorationSelectbox = function ($element, options) {
	var self = this;

	self.o = $.extend({}, DEFAULT_OPTIONS, options);
	self.$element = $element;
	self.$select  = $element.next();
	self.init();
};


/**
 * DecorationSelectbox.prototype
 */
(function (fn) {
	/**
	 * init
	 */
	fn.init = function () {
		var self = this;

		//Change Event
		self.$select.on('change', function () {
			self.updateContents();
		});

		self.$select.trigger('change');
	};

	/**
	 * updateContents
	 * self.$elementのcontentsを、selectboxの選択されたcontentsで書き換える
	 */
	fn.updateContents = function () {
		var self = this
			,contents = self.$select.find(':selected').text()
			;
		self.$element.html(contents);

	};

})(DecorationSelectbox.prototype);//DecorationSelectbox.prototype


/**
 * $.fn.DecorationSelectbox
 */
$.fn.decorationSelectbox = function (options) {
	return this.each(function () {
		var $this = $(this);
		$this.data('decorationSelectbox', new DecorationSelectbox($this, options));
	});
};//$.fn.DecorationSelectbox


})(jQuery, this);
