Run When JS
===========

Javascript code dependency checker. This function tries to check a test function or an array of javascript elements (variable, function, object) are
all defined before running a call back function passed to it as the second parameter.

This function is useful to break out of the call back functions found in some loader scripts like jQuery.getScript() or $LAB.script().
You no longer have to nest different callback functions to those loaders when loading multiple script resource that are dependent of
each other, enabling more parallel loading of scripts.

You only specify which js components you want to be defined before running your code. Helps for more code modularity.

Example Usage:
==============
Passing a function as the first argument. [Preferred method]:fireworks:
```javascript
	$.getScript('js/jquery-ui.min.js');
	$.getScript('js/jquery.jxdomain.js');
	$.getScript('js/jquery.jrumble.1.3.min.js');
	$.getScript('js/Ttow.js');
	// Preferred method of using to avoid eval. Pass a function as the first argument. The function should return either 
	// true or false. 
	runwhen(function () {
		try {
			return Ttow && Ttow.Browser && jQuery.fn.datepicker && $.jxdomain && jQuery.fn.jrumble;
		} catch (e) { return false; }
	}, function () {
		console.log(typeof Ttow.Browser + ' - Ttow.Browser');
		console.log(typeof jQuery.fn.datepicker + ' - jQuery.fn.datepicker');
		console.log(typeof $.jxdomain + ' - $.jxdomain');
		console.log(typeof jQuery.fn.jrumble + ' - jQuery.fn.jrumble');	
	});
```

Passing an array of string values to check. This method is discouraged but would work just fine.
```javascript
	$.getScript('js/jquery-ui.min.js');
	$.getScript('js/jquery.jxdomain.js');
	$.getScript('js/jquery.jrumble.1.3.min.js');
	$.getScript('js/Ttow.js');
	
	runwhen(['Ttow.Browser', 'jQuery.fn.datepicker', '$.jxdomain', 'jQuery.fn.jrumble'], function () {
		console.log(typeof Ttow.Browser + ' - Ttow.Browser');
		console.log(typeof jQuery.fn.datepicker + ' - jQuery.fn.datepicker');
		console.log(typeof $.jxdomain + ' - $.jxdomain');
		console.log(typeof jQuery.fn.jrumble + ' - jQuery.fn.jrumble');	
	});
```

