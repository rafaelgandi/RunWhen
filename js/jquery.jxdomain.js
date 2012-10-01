/*************************************************************************************************************
	jQuery.jxdomain (beta)
	----------------------
	
	Does a cross domain request by using the built in jQuery.getScript() method.
	Expects the return of the server to be javascript code or json data. Takes in
	an object(options) as its paramater. Tested on JSLint(http://jslint.com/)
	
	Options:
	--------	
	* url 	     -> location of the server to call
	* data       -> data to be passed to the server
	* beforeSend -> method called before the data is sent
	* complete   -> method called when the data has arrived
	* error      -> method called when the request did not respond
	* timeout    -> the time it takes for the request before the error method is called
	
	@example
	
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
		<script src="jquery.jxdomain.js"></script>
		<script>
		$(function () {
			  $('#yahoo-cont').click(function () {
				$.jxdomain({
					url : 'http://www.bigblue007.com/qbb/get-codes.ajax.php',
					
					data : {
						'test' : true
					},
					
					beforeSend : function () {
						$('#yahoo-cont').text('sending...');
					},
					
					complete : function () {
						alert(res['cdesc']);
						$('#yahoo-cont').text('Done!');
					},
					
					error : function () {
						alert('an error occurred');
					}
				});
			  }); 
		});
		</script>
	
	Be WARNED that OPERA asks for permission if its a cross domain request, and sometimes
	it is denied!.
	
	LM: 11-18-09
	@author Rafael Gandionco < http://elrafa.0fees.net > "Write Less, Destroy More"
	@version 0.1
	
**************************************************************************************************************/
(function ($) {
	var _defOpt = {
		url : 'about:blank',
		data : {},
		beforeSend : function () {},
		complete : function () {},
		error : function () {},
		timeout : 10000
	},
	_timer;	
	
	$.jxdomain = function (_o) {		
		var opt = $.extend({}, _defOpt, _o),
			TIMEOUT = opt.timeout;
			
		var __resolveDataURL = function () {
			var url = opt.url,
				data = opt.data,
				qs = '';			
			for (var p in data) {
				if (data.hasOwnProperty(p) && !$.isFunction(data[p])) {
					qs += p + '=' + data[p] + '&';
				}
			}
			qs = qs.replace(/&$/i, '');
			return url + ((/\?/.test(url) ? '&' : '?')) + qs;
		};		
		opt.beforeSend();
		
		_timer = window.setTimeout(function () {
			opt.error();
		}, TIMEOUT);
		
		$.getScript(__resolveDataURL(), function () {
			window.clearTimeout(_timer);
			opt.complete();
		});		
	};	
})(window.jQuery);