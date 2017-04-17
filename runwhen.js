/* 
	Run When JS
		- Javascript code dependency checker	
	See: https://github.com/rafaelgandi/RunWhen
	LM: 2017-04-12
	Version: 1.0
 */
var runwhen = (function (self) {
	// See: https://www.nczonline.net/blog/2012/03/13/its-time-to-start-using-javascript-strict-mode/
	"use strict";
	var cachedChecks = {},
		TIMEOUT = 800,
		check = function (_checks) {
			var i = _checks.length;
			while (i--) {
				if (!! cachedChecks[_checks[i]]) { continue; } // Check cache, try to avoid eval()
				try {
					eval('if(typeof '+_checks[i]+' === \'undefined\'){throw \'e\';}');
					cachedChecks[_checks[i]] = !0;
				} 
				catch(e) { return !1; }	
			}	
			return !0;
		};
	return function (_checks, _run) {	
		var CHECK_DURATION = 1,
			IS_FUNCTION_PASSED = typeof _checks === 'function';
		if (! IS_FUNCTION_PASSED) {
			if (! (_checks instanceof Array)) { _checks = [_checks]; } // Force _checks to be array	
		}
		// See: https://www.paulirish.com/2008/best-practice-poll-instead-of-a-settimeout-hack/
		(function loop () {
			var checking = (! IS_FUNCTION_PASSED) ? check(_checks) : _checks.call(self);
			if (checking) { _run.call(self); }
			else {
				// After 800 checks throw an exception //
				if (CHECK_DURATION > TIMEOUT) { 
					throw 'RunWhen timeout reached for ['+_checks.join(', ')+']';
					return; 
				}
				CHECK_DURATION++;
				self.setTimeout(loop, 10);
			}			
		})();
	};
})(self);