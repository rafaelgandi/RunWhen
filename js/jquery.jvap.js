/**
 * This jquery plugin creates an evaporation effect on texts.
 * When it is used on an element containig text it produces 
 * a ghostly text that floats up then disappears.
 * 
 * Just call the function on any jquery event handler then pass
 * it the object of the current element, and thats it the effect
 * takes place once the event is triggered. It also recognizes a
 * custom attribute jvap:text="your text" for its ghostly text
 * effect.
 *
 * HARD TESTED ON JSLint!
 * 
 * @example
 *
 * <script>
 * $('span.evap').live('mousedown', function () {
 *			$.jvap(this);								
 *			return false;
 *	});
 * </script>
 *
 *  //  THE MARKUP //
 *   <div id="con">
 *		<span class="evap"  style="float: left;">test evaporate left</span>
 *		<span class="evap" jvap:text="i am a ghost from the link!!!" style="float: right;">test evaporate right</span>
 *	</div>
 * 
 * 
 * @author Rafael Gandionco <rafaelgandi@yahoo.com>
 * @version 0.1 (beta)
 */
(function ($) {
    /**
     * @param  _obj
     * @return jQuery
     */
    $.jvap = function (_obj) {
        var $o = $(_obj);
        var pos = $o.position();
        var text = $o.attr('jvap:text') || $o.attr('title') || $o.text();
        var $ghostText = $('<span>'+text+'</span>');
        var $parent = $o.parent(); // get the parent of the element for correct appending of the ghost text...

        // adding the ghost text to the element then animating it //
        $ghostText.appendTo($parent)
                .css({
                    position : 'absolute',
                    left : pos.left + 'px',
                    top : pos.top + 'px',
                    fontWeight : 'normal',
					color : $o.css('color')+''
                })
                .stop()
                .animate({
                    opacity : 0,
                    top : (pos.top - 50) + 'px'
                }, 1000, function () {
                    $(this).remove();
                });
        return $;
    };
})(window.jQuery);