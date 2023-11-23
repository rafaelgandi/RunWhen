🕰️ Run When JS
===========
Is a utility function that polls/waits for a certain condion before executing the rest of the code. Returns a Promise.


Example Usage:
==============
Passing a "checker" function as the first argument
```javascript
$.getScript('js/jquery-ui.min.js');
$.getScript('js/jquery.jxdomain.js');
$.getScript('js/jquery.jrumble.1.3.min.js');
$.getScript('js/Ttow.js');

// Make sure that all the necessary js library functions/objects are available before proceeding.
await runwhen(() => {
	try {
		return Ttow && Ttow.Browser && jQuery.fn.datepicker && $.jxdomain && jQuery.fn.jrumble;
	} catch (e) { return false; }
});
console.log(typeof Ttow.Browser + ' - Ttow.Browser');
console.log(typeof jQuery.fn.datepicker + ' - jQuery.fn.datepicker');
console.log(typeof $.jxdomain + ' - $.jxdomain');
console.log(typeof jQuery.fn.jrumble + ' - jQuery.fn.jrumble');	
```

Passing a timeout(milliseconds) value to the second parameter tells runwhen how long to wait before throwing a timeout exception. Defaults to 30 seconds.
```javascript

await runwhen(() => !!document.querySelector('.some-late-elem'), 10e3);
document.querySelector('.some-late-elem').innerHTML = 'Im here!';
```

