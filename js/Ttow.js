/*********************************************************************
	Ttow.js
	-------
	
	This is my toolkit...
	
	LM: 11-09-10
	@author Rafael G. (http://elrafa.0fees.net or http://www.rafaelgandi.tk)
	@dependencies > jQuery 1.3.2 
	@version 2.7.1

**********************************************************************/

var Ttow = (function ($, window, document, undef) {
	
	var $head = $('head'),
	
		__error = function (_msg) {
			throw 'Ttow Error: [' + _msg + ']';
		};
	
	if ($ === undef) {
		__error('jQuery Library is not loaded!');
		return;
	}
	// See: http://www.codenothing.com/archives/2010/8-jquery-micro-optimization-tips/
	window.jQuery.root = jQuery(document); // they say would make querying a bit faster...ie: $.root.find('a')
	
	// inject ie browser detection comments for windows //
	// http://www.quirksmode.org/css/condcom.html
	(function () {		
		var iecc = '<!--[if IE 6]><script id="Ttow-Browser-ie6">var TtowBrowserIE6 = true;</script><![endif]-->' +
				   '<!--[if IE 7]><script id="Ttow-Browser-ie7">var TtowBrowserIE7 = true;</script><![endif]-->' +
			       '<!--[if IE 8]><script id="Ttow-Browser-ie8">var TtowBrowserIE8 = true;</script><![endif]-->' +
				   '<!--[if IE 9]><script id="Ttow-Browser-ie9">var TtowBrowserIE9 = true;</script><![endif]-->';		
		$head.prepend(iecc);		
	})();
	
	if (!window.dominoes) {
		/*
		 Dominoes v.1.0 (rc1) [1/22/10 13:35:22.328 - CET]
		 Copyright 2010, Julian Aubourg
		 Dual licensed under the MIT and GPL Version 2 licenses
		 See: http://code.google.com/p/javascript-dominoes/wiki/HandsOn
		 		 
		 Syntax:		 
		 action1 action2 	        action1 & action2 are independant
		 action1 > action2 	   		action2 depends on the completion of action1
		 action1 >| action2 	    action2 depends on the completion of action1 and on the DOM being ready for manipulation
		 ( sub-rule ) 	            sub-rule (the completion of this action is determined by the completion of the whole sub-rule)
		 (( optional-sub-rule )) 	optional sub-rule (same as a normal sub-rule but the completion of this action is not needed down the line, i.e. fire & forget) 
		
		*/
		(function(E,s,m,j,F,y,M){E[M]||function(ja,o,Z,w,$,N,O,k,z,G,H,p,P,u){function Q(a,b){throw[M,a,b].join(": ");}function r(){v(A[o](arguments,0),{},{},R);return this}function R(){}function B(a,b){setTimeout(function(){a[y](b||E,A[o](arguments,2))},0);return this}function ka(){for(var a=[],b;x[k];){b=x.shift();try{b[0][y](A[o](b,1))!==m&&a[p](b)}catch(c){}}x=a;x[k]||clearInterval(aa)}function ba(){for(;S[k];){args=S.shift();args[0][y](s,A[o](args,1))}I=j}function ca(){if(s.body&&s[N]&&s[N]("body")[k]){da=
		I=m;B(ba);return m}}function la(a){if(C(a)){S[p](arguments);if(ea){if(da&&!I){I=m;ba()}}else{ea=m;ca()||fa(ca)}}return j}function T(a){var b={};return function(c,d){var f=arguments[k];if(f>1)if(d===j)b[c]&&delete b[c];else if(a)a[y](b,arguments);else b[c]=d;else if(c===j)b={};else if(f)return b[c];return this}}function v(a,b,c,d){var f,e;if(a){if(a.O&&d){d();d=R}if(a[Z]){b=a;a=a[Z]}if(a[u])f=a[u];else if(t(a))f=a;if(f){f=J(f,b,c);if(t(f)){if(t(a))a={url:f};else a[u]=f;ma(a,d)}else v(f,b,c,d)}else if(C(a))a[o](b,
		d,c)!==j&&d();else if(na(a)&&(e=a[k]))if(a.P){f=0;for(var h=e;f<e;)v(a[f++],b,c,function(){--h||d()})}else{function g(i){i<e?v(a[i++],b,c,function(){g(i)}):d()}g(0)}else d()}else d()}function oa(a){a=a.split(U);var b=0,c=a[k],d=[],f=[],e=f,h,g;for(e.P=m;b<c;b++)if(g=a[b])if(V[g]){g=V[g];if(g===1||g===2){g===2&&e[p](la);if(e[k]){h=e.splice(0,e[k]);h.P=e.P;e[p](h,[]);e.P=j;e=e[1];e.P=m}}else if(g===3||g===5){h=[];e[p](h);d[p](e);e=h;e.P=m;e.O=g===5}else if(g===4||g===6)if(d[k])e=d.pop();else Q("unexpected symbol",
		a[b])}else e[p](g);return f}function pa(a,b,c){function d(l){return(i=/^ { ([0-9]+) } $/.exec(l))?h[1*i[1]]:l.replace(/ { ([0-9]+) } /g,function(q,n){i=h[1*n];t(i)||Q("type mismatch","string expected");return i})}for(var f,e,h={},g=0,i;!f;){f=m;a=a.replace(/\$([^$()]*)\(([^$()]*)\)/g,function(l,q,n){f=j;if(q&&!(e=ga[q]||K(q)))Q("unknown functor",q);n=d(n);if(t(n))n=J(n,b,c);h[++g]=q?e[o](b,n,c):qa(n);if(t(h[g]))h[g]=J(h[g],b,c);return" { "+g+" } "})}return d(a)}function J(a,b,c){var d;return d=U.test(a)?
		oa(a):(d=b[a]||ra(a))?t(d)?J(d,b,c):d:pa(a,b,c)}function W(a){var b={},c={};return function(d,f){var e={},h,g=d[u],i;if(d[ja]===j){for(i in d)e[i]=d[i];d=e;d[u]+=(/\?/.test(g)?"&":"?")+"_="+(new Date).getTime();a(d,f)}else if(b[g])f();else if(h=c[g])h[p](f);else{c[g]=h=[f];a(d,function(){for(;h[k];)h.shift()();delete c[g];b[g]=m})}}}function sa(a){var b={},c=j;return W(function(d,f){b[d[u]]=f;if(!c){c=m;B(function(){var e=[],h,g=b;b={};c=j;for(h in g)e[p](h);e.sort();v(a(e),{},{},function(){for(h in g)g[h]()})})}})}
		var L=s[N]("head")[0]||s.documentElement,ta={}.toString,A=[].slice,ha=/loaded|complete/,D;r.later=B;for(D in{Array:1,Function:1,String:1})(function(a,b){b="[object "+a+"]";r["is"+a]=function(c){return ta[o](c)===b}})(D);var na=r.isArray,C=r.isFunction,t=r.isString,aa,x=[],fa=r.poll=function(){if(C(arguments[0])){x[k]||(aa=setInterval(ka,13));x[p](arguments)}},S=[],ea=j,da=j,I=j,qa=r.property=T(),ga={},K=r.functor=T(function(a,b){var c=/^([^$()]+)(?:\(([|SOF+]*)\))?$/.exec(a);if(c)if(C(b)){var d=this;
		a=c[1];a=d[a]=d[a]||function(g,i){var l=g,q=this;if(l)if(e[H]&&t(l)){if(e[H]!==h){h=e[H];f=sa(h)}l=function(n){f({url:g},n);return j}}else if(t(l)&&(e.S||e.O))if(e.S)l=e.S[o](q,l,i);else{if(e.O)l=e.O[o](q,{url:l},i)}else if(l.url&&e.O)l=e.O[o](q,l,i);else if(e.F)l=e.F[o](q,C(l)?l:function(n,ua){v(g,this,ua,n);return j},i);return l};var f=a.A,e=a.S=a.S||{},h=e[H];c=(c[2]||"F|S|O").split(/\|/);for(a=c[k];a--;)e[c[a]]=b}}),ra=r.rule=T(function(a){var b=this,c=j,d=[];b=b[a]=b[a]||function(e,h){e&&e!==
		R&&d[p](e);if(!c){c=m;var g=this;(function i(){if(f[k])v(f.splice(0,f[k]),g,h,i);else if(d[k]){for(;d[k];)d.shift()();i()}else c=j})()}return j};var f=b.A=b.A||[];f[p](A[o](arguments,1))}),U=/\s+/,V={};D="0 > >| ( ) (( ))".split(U);for(var X=D[k];--X;V[D[X]]=X);var ma=W(function(a,b){var c=s[$]("script"),d;c.async=m;if(a[w])c[w]=a[w];c.src=a[u];c[z]=c[G]=function(){if(!(d=c[P])||ha.test(d)){c[z]=c[G]=F;L.removeChild(c);b&&B(b)}};L.insertBefore(c,L.firstChild)}),ia=0,Y={},va=function(){for(var a,b,
		c=s.styleSheets,d,f=c[k];f--;){b=c[f];if((d=b[O])&&(a=Y[d]))try{a.r=b.cssRules;throw"SECURITY";}catch(e){if(/SECURITY/.test(e)){B(a);delete Y[d];if(!--ia)return m}}}},wa=function(a,b){if(a[P])a[G]=function(){if(ha.test(a[P])){a[G]=F;b()}};else if(a[z]===F&&a.all)a[z]=function(){a[z]=F;b()};else{Y[a[O]]=b;ia++||fa(va)}};(function(a,b,c){K(a+"("+b+")",function(d){return function(f){c(d,f);return j}});ga[a]=K(a);K(a,j)})("css","O",W(function(a,b){var c=s[$]("link"),d=a.title;c.rel="stylesheet";c.type=
		"text/css";c.media=a.media||"screen";c[O]=a[u];if(a[w])c[w]=a[w];wa(c,function(){if(d)c.title=d;b()});L.appendChild(c)}));E[M]=r}[y](E,"cache call chain charset createElement getElementsByTagName href length onload onreadystatechange + push readyState url".split(" "))})(window,document,true,false,null,"apply","dominoes");
	}
	/* 
		Code borrowed from:
		http://adamv.com/dev/javascript/querystring
		
		Client-side access to querystring name=value pairs
		Version 1.3
		28 May 2008					
		License (Simplified BSD):
		http://adamv.com/dev/javascript/qslicense.txt
	*/
	var __queryStringParser=function(a){var d={};if(a==undefined){a=location.search.substring(1,location.search.length);a=a.replace(/\+/g," ")}if(a.length!=0){a=a.split("&");for(var b,e,c=0;c<a.length;c++){b=a[c].split("=");e=decodeURIComponent(b[0]);b=b.length==2?decodeURIComponent(b[1]):undefined;d[e]=b}return d}};	
	
	
	/* 
	   Ttow jQuery Custom Selectors
	   See: http://jquery-howto.blogspot.com/2009/06/custom-jquery-selectors.html
       See: http://jquery-howto.blogspot.com/2009/06/jquery-custom-selectors-with-parameters.html
	   
	   Parameters:
	   _this - is a current DOM element
       _index - the current loop index in stack
       _meta - meta data about your selector !!!
       _stack - stack of all elements to loop
   
       Return true to include current element
       Return false to explude current element
    */
	
	// gets all form elements with an empty("") value, ie: $('input:ttowEmptyVal')
	$.expr[':'].ttowEmptyVal = function (_this) { 
		return $.trim(_this.value) === '';
	}
	// gets all elements containing the exact text passed to it as a parameter(a more strict :contains), ie: $('input:ttowTextEqualTo(test)')	
	$.expr[':'].ttowTextEqualTo = function (_this,_index, _meta, _stack) { 
		// use _meta[3] to get the parameter(s)
		return $.trim($(_this).text()) === $.trim(_meta[3])
	}
	// gets all elements NOT containing the exact text passed to it as a parameter, ie: $('input:ttowTextNotEqualTo(test)')
	$.expr[':'].ttowTextNotEqualTo = function (_this,_index, _meta, _stack) {
		return $.trim($(_this).text()) !== $.trim(_meta[3])
	}
		
	
	// Ttow jQuery extension //
	$.fn.Ttow = function () {
		var $jquery = this,
			// See: http://debuggable.com/posts/turning-javascripts-arguments-object-into-an-array:4ac50ef8-3bd0-4a2d-8c2e-535ccbdd56cb
			args = Array.prototype.slice.call(arguments),
			m = args.shift(),
			// $.Ttow methods //
			methods = {						
				scrollToMe : function (_speed) {
					return  $jquery.each(function () {
						var $me = $(this),
							speed = _speed || 700;
						$([document.documentElement, document.body]).animate({ 
							scrollTop: $me.offset().top
						}, speed, function () {
							$(this).stop();
						});	
					});
				},
				
				slice : function (_numberOfChars) {
					return  $jquery.each(function () {
						this.innerHTML = $(this).text().slice(0,(1*_numberOfChars));
					});
				}
					
			};
			
		return methods[m].apply(undefined, args);	
		
	};
	
	/*************************************************************
		Simple Javascript Encrytion 
		by Justin Smith
		http://www.java-scripts.net/javascripts/Simple-Encryption.phtml		
	**************************************************************/
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('m y(5){2 a=z(5);2 b="o%@#$^&*()-3=+.:";2 c="p +=3-)(*&^$#@:.";2 d;2 h;2 i;2 j="";2 f=a.q;2 e=0;2 g=1;n(e!=f){d=a.w(e,g);h=b.r(d);i=c.v(h);e++;g++;j+=i}t j}m A(5){2 8=5;2 s="o @#$^&*()-3=+.:";2 u="p +=3-)(*&^$#@:.";2 k;2 l;2 6;2 7="";2 x=8.q;2 4=0;2 9=1;n(4!=x){k=8.w(4,9);l=u.r(k);6=s.v(l);4++;9++;7+=6}t 7}',37,37,'||var|_|ee|_val|ii|jj|aa|gg|||||||||||dd|hh|function|while|1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ|zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA0987654321|length|indexOf|bb|return|cc|charAt|substring|ff|convert_It|escape|unconvert_It'.split('|'),0,{}))

	return {
	
		Util : {
				
			// * basename method
			basename : function (_filename) {						
				return (_filename) ? (function () {
					var p = _filename.split('/');
					return p[(p.length - 1)].replace(/\?.{1,}$/, '');
				})() : '';
			},
			
			// * getFileExtension method
			getFileExtension : function (_filename) {				
				var fname = this.basename(_filename),
					p = fname.split('.');						
				return $.trim(p[p.length - 1]);				
			},				
			
			// * require method
			require : function (_filename, _callback) { 
				_callback = _callback || function () {};
				if ($.isArray(_filename)) {_filename = _filename.join(' > ');}
				dominoes(_filename, _callback);	
			},
			
			// * preload method
			preload : function (_imgs) {
				var o;
				_imgs = $.makeArray(_imgs);
				for (var i=0, len=_imgs.length; i<len; i++) {
					o = new Image().src = _imgs[i];
				}
			},
			
			// * stripTags method
			stripTags : function (_s) {
				return _s.replace(/(<\/?[\S][^>]*>)/gi, '');	
			},
			
			// * entities method
			// http://javascript.crockford.com/remedial.html
			entities : function (_str) {
				return _str.replace(/&/g, "&amp;")
						   .replace(/</g,"&lt;")
						   .replace(/>/g, "&gt;")
						   .replace(/"/g, "&quot;")
						   .replace(/'/g, "&#039;");
			},
			// * deentities method
			dentities : function (_str) {
				return _str.replace(/&amp;/g, "&")
						   .replace(/&lt;/g,"<")
						   .replace(/&gt;/g, ">")
						   .replace(/&quot;/g, '"')
						   .replace(/&#039;/g, "'");
			},
			
			// * randomize method
			randomize : function (_limit) {					
				parseInt(_limit, 10);
				_limit = (_limit+'' !== 'NaN') ? _limit : 10;
				return Math.floor(Math.random() * ((+_limit)+1));
			},
			
			// * stripScript
			stripScript : function (_str) {
				return _str.replace(/<script(.|\s)*?\/script>/gi, '');
			},
			
			// * stripTags
			stripTags : function (_str) {
				// See: http://phpjs.org/functions/strip_tags:535
				return _str.replace(/(<\/?[\S][^>]*>)/gi, '');
			},
			
			// * ucwords
			ucwords : function (str) {
				// Uppercase the first character of every word in a string  
				// version: 1006.1915
				// discuss at: http://phpjs.org/functions/ucwords
				// +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
				// See: http://phpjs.org/functions/ucwords:569
				return (str + '').replace(/^(.)|\s(.)/g, function ($1) {
					return $1.toUpperCase();
				});
			},
			
			// * encrypt
			encrypt : function (_str) {
				return convert_It(_str+'');
			},
			
			// * decrypt
			decrypt : function (_str) {
				return unconvert_It(_str+'');
			},
			
			//* stringify
			// Code borrowed form http://code.google.com/p/jquery-json/
			stringify : function(a){quoteString=function(i){var j=/["\\\x00-\x1f\x7f-\x9f]/g,l={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};if(i.match(j))return'"'+i.replace(j,function(k){var f=l[k];if(typeof f==="string")return f;f=k.charCodeAt();return"\\u00"+Math.floor(f/16).toString(16)+(f%16).toString(16)})+'"';return'"'+i+'"'};if(typeof JSON=="object"&&JSON.stringify)return JSON.stringify(a);var c=typeof a;if(a===null)return"null";if(c!="undefined"){if(c=="number"||c=="boolean")return a+"";if(c=="string")return quoteString(a);if(c=="object"){if(typeof a.toJSON=="function")return Ttow.Util.stringify(a.toJSON());if(a.constructor===Date){var d=a.getUTCMonth()+1;if(d<10)d="0"+d;var b=a.getUTCDate();if(b<10)b="0"+b;c=a.getUTCFullYear();var e=a.getUTCHours();if(e<10)e="0"+e;var g=a.getUTCMinutes();if(g<10)g="0"+g;var h=a.getUTCSeconds();if(h<10)h="0"+h;a=a.getUTCMilliseconds();if(a<100)a="0"+a;if(a<10)a="0"+a;return'"'+c+"-"+d+"-"+b+"T"+e+":"+g+":"+h+"."+a+'Z"'}if(a.constructor===Array){d=[];for(b=0;b<a.length;b++)d.push(Ttow.Util.stringify(a[b])||"null");return"["+d.join(",")+"]"}d=[];for(b in a){c=typeof b;if(c=="number")c='"'+b+'"';else if(c=="string")c=quoteString(b);else continue;if(typeof a[b]!="function"){e=Ttow.Util.stringify(a[b]);d.push(c+":"+e)}}return"{"+d.join(", ")+"}"}}},
						
			//* supplant
			//See: http://javascript.crockford.com/remedial.html
			supplant : function (_str, o) {
				return _str.replace(/{([^{}]*)}/g,
					function (a, b) {
						var r = o[b];
						return typeof r === 'string' || typeof r === 'number' ? r : a;
					}
				);
			},
			
			// * imports
			imports : function (_path) {
				// WARNING: use sparingly! LM: 11-09-10
				var p = _path.split('.');	
				if ($.trim(p[(p.length-1)].toLowerCase()) === 'css') {
					Ttow.Util.require('$css('+_path+')');
					return;		
				}
				$.ajax({
					url : _path+'?'+(new Date().getTime()), async: false,
					success : function (res) {$.globalEval(res);}
				});
			}
			
		},	
		
		require : function (_filename, _callback) { // shortcut method, from Ttow.Util.require() to Ttow.require()  
			return Ttow.Util.require(_filename, _callback);
		},
		
		imports : function (_path) { // shortcut method, from Ttow.Util.imports() to Ttow.imports()  
			return Ttow.Util.imports(_path);
		},
		
		Browser : (function () {			
			var commentCheck4IE = (function () {
				var chk = {ie6:!1,ie7:!1,ie8:!1,ie9:!1};
				
				if (window.TtowBrowserIE6 !== undef) {chk.ie6 = !0;}
				else if (window.TtowBrowserIE7 !== undef) {chk.ie7 = !0;}
				else if (window.TtowBrowserIE8 !== undef) {chk.ie8 = !0;}
				else if (window.TtowBrowserIE9 !== undef) {chk.ie9 = !0;}
				// remove ie conditional script tags //
				$('#Ttow-Browser-ie6,#Ttow-Browser-ie7,#Ttow-Browser-ie8,#Ttow-Browser-ie9').each(function () {
					$(this).remove();
				});
				
				return chk;				
			})(),
			UA = navigator.userAgent.toLowerCase(),
			APPVERSION = navigator.appVersion;
			
			
			// See: http://www.upsdell.com/BrowserNews/res_sniff.htm
			// See: http://www.thespanner.co.uk/2009/01/29/detecting-browsers-javascript-hacks/
			return {
				mozilla : (UA.indexOf('firefox') !== -1 || $.browser.mozilla),
				ff2 :     ((function x(){})[-6]=='x'),
				chrome :  (UA.indexOf('chrome/') !== -1),
				opera :   (UA.indexOf('opera') !== -1 && window.opera instanceof Object || Object.prototype.toString.call(window.opera) == '[object Opera]' || $.browser.opera),
				safari :  (UA.indexOf('safari') !== -1 && UA.indexOf('chrome/') === -1 && /a/.__proto__ == '//'),
				msie :    (UA.indexOf('msie') !== -1 && '\v'=='v' || /*@cc_on!@*/false || $.browser.msie),
				msie5 :   (/*@cc_on @_jscript_version == 5.5 ? true : @*/false),
				msie6 :   (UA.indexOf('msie 6') > -1 || commentCheck4IE.ie6 !== false || /*@cc_on @_jscript_version == 5.6 ? true : @*/false),
				msie7 :   (UA.indexOf('msie 7') > -1 || commentCheck4IE.ie7 !== false),
				msie8 :   (UA.indexOf('msie 8') > -1 || commentCheck4IE.ie8 && document.documentMode === 8),
				msie9 :   (UA.indexOf('msie 9') > -1 && UA.indexOf('trident/5.0') > -1 || commentCheck4IE.ie9 !== false || /*@cc_on @_jscript_version == 9 ? true : @*/false), //See: http://blogs.msdn.com/b/ie/archive/2010/03/23/introducing-ie9-s-user-agent-string.aspx	
				mac :     (APPVERSION.indexOf("Mac") !== -1 || APPVERSION.indexOf("PowerPC") !== -1 || UA.indexOf('macintosh') !== -1) 
			};					
		})(),
		
		Qs : (function () {
			// output the query string from the uri as a property of the Ttow.Qs object
			var uri = self.location.href
				QS = {};			
			
			// * parse method
			QS.parse = __queryStringParser;
			
			$.extend(QS, QS.parse()); // extend QS making the name/value pares a property of Ttow.Qs object
			
			// * makeQueryString method
			QS.makeQueryString = function (_o) {
				return '?' + $.param(_o);
			};
			
			return QS;			
		})()
	
	};
		
})(this.jQuery, this, document);
