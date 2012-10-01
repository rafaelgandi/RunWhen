/**!
 * project-site: http://plugins.jquery.com/project/AjaxManager
 * repository: http://github.com/aFarkas/Ajaxmanager
 * See: http://www.protofunc.com/scripts/jquery/ajaxManager/
 * @author Alexander Farkas
 * @version 3.10
 * Copyright 2010, Alexander Farkas
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

(function(b){var n={},i={};b.manageAjax=function(){return{create:function(a,c){n[a]=new b.manageAjax._manager(a,c);return n[a]},destroy:function(a){if(n[a]){n[a].clear(true);delete n[a]}}}}();b.manageAjax._manager=function(a,c){this.requests={};this.inProgress=0;this.qName=this.name=a;this.opts=b.extend({},b.ajaxSettings,b.manageAjax.defaults,c);if(c&&c.queue&&c.queue!==true&&typeof c.queue==="string"&&c.queue!=="clear")this.qName=c.queue};b.manageAjax._manager.prototype={add:function(a){a=b.extend({},
this.opts,a);var c=a.complete||b.noop,e=a.success||b.noop,g=a.beforeSend||b.noop,d=a.error||b.noop,f=typeof a.data=="string"?a.data:b.param(a.data||{}),k=a.type+a.url+f,o=this,m=this._createAjax(k,a,e,c);if(a.preventDoubbleRequests&&a.queueDuplicateRequests){if(a.preventDoubbleRequests)a.queueDuplicateRequests=false;setTimeout(function(){throw"preventDoubbleRequests and queueDuplicateRequests can't be both true";},0)}if(!(this.requests[k]&&a.preventDoubbleRequests)){m.xhrID=k;a.xhrID=k;a.beforeSend=
function(j,h){var l=g.call(this,j,h);l===false&&o._removeXHR(k);return l};a.complete=function(j,h){o._complete.call(o,this,c,j,h,k,a)};a.success=function(j,h,l){o._success.call(o,this,e,j,h,l,a)};a.error=function(j,h,l){var p="",q="";if(h!=="timeout"&&j){p=j.status;q=j.responseXML||j.responseText}d?d.call(this,j,h,l,a):setTimeout(function(){throw h+"| status: "+p+" | URL: "+a.url+" | data: "+f+" | thrown: "+l+" | response: "+q;},0);j=null};a.queue==="clear"&&b(document).clearQueue(this.qName);if(a.queue||
a.queueDuplicateRequests&&this.requests[k]){b.queue(document,this.qName,m);if(this.inProgress<a.maxRequests&&(!this.requests[k]||!a.queueDuplicateRequests))b.dequeue(document,this.qName);return k}return m()}},_createAjax:function(a,c,e,g){var d=this;return function(){if(c.beforeCreate.call(c.context||d,a,c)!==false){d.inProgress++;d.inProgress===1&&b.event.trigger(d.name+"AjaxStart");if(c.cacheResponse&&i[a])if(!i[a].cacheTTL||i[a].cacheTTL<0||(new Date).getTime()-i[a].timestamp<i[a].cacheTTL){d.requests[a]=
{};setTimeout(function(){d._success.call(d,c.context||c,e,i[a]._successData,"success",i[a],c);d._complete.call(d,c.context||c,g,i[a],"success",a,c)},0)}else delete i[a];if(!c.cacheResponse||!i[a])if(c.async)d.requests[a]=b.ajax(c);else b.ajax(c);return a}}},_removeXHR:function(a){if(this.opts.queue||this.opts.queueDuplicateRequests)b.dequeue(document,this.qName);this.inProgress--;this.requests[a]=null;delete this.requests[a]},clearCache:function(){i={}},_isAbort:function(a,c,e){if(!e.abortIsNoSuccess||
!a&&!c)return false;return!!(!a||a.readyState===0||this.lastAbort===e.xhrID)},_complete:function(a,c,e,g,d,f){if(this._isAbort(e,g,f)){g="abort";f.abort.call(a,e,g,f)}c.call(a,e,g,f);b.event.trigger(this.name+"AjaxComplete",[e,g,f]);f.domCompleteTrigger&&b(f.domCompleteTrigger).trigger(this.name+"DOMComplete",[e,g,f]).trigger("DOMComplete",[e,g,f]);this._removeXHR(d);this.inProgress||b.event.trigger(this.name+"AjaxStop")},_success:function(a,c,e,g,d,f){var k=this;if(!this._isAbort(d,g,f)){f.abortOld&&
b.each(this.requests,function(h){if(h===f.xhrID)return false;k.abort(h)});if(f.cacheResponse&&!i[f.xhrID]){d||(d={});i[f.xhrID]={status:d.status,statusText:d.statusText,responseText:d.responseText,responseXML:d.responseXML,_successData:e,cacheTTL:f.cacheTTL,timestamp:(new Date).getTime()};if("getAllResponseHeaders"in d){var o=d.getAllResponseHeaders(),m,j=function(){if(!m){m={};b.each(o.split("\n"),function(h,l){var p=l.indexOf(":");m[l.substr(0,p)]=l.substr(p+2)})}};b.extend(i[f.xhrID],{getAllResponseHeaders:function(){return o},
getResponseHeader:function(h){j();return h in m?m[h]:null}})}}c.call(a,e,g,d,f);b.event.trigger(this.name+"AjaxSuccess",[d,f,e]);f.domSuccessTrigger&&b(f.domSuccessTrigger).trigger(this.name+"DOMSuccess",[e,f]).trigger("DOMSuccess",[e,f])}d=null},getData:function(a){if(a){var c=this.requests[a];if(!c&&this.opts.queue)c=b.grep(b(document).queue(this.qName),function(e){return e.xhrID===a})[0];return c}return{requests:this.requests,queue:this.opts.queue?b(document).queue(this.qName):[],inProgress:this.inProgress}},
abort:function(a){var c;if(a){if((c=this.getData(a))&&c.abort){this.lastAbort=a;c.abort();this.lastAbort=false}else b(document).queue(this.qName,b.grep(b(document).queue(this.qName),function(d){return d!==c}));c=null}else{var e=this,g=[];b.each(this.requests,function(d){g.push(d)});b.each(g,function(d,f){e.abort(f)})}},clear:function(a){b(document).clearQueue(this.qName);a&&this.abort()}};b.manageAjax._manager.prototype.getXHR=b.manageAjax._manager.prototype.getData;b.manageAjax.defaults={beforeCreate:b.noop,
abort:b.noop,abortIsNoSuccess:true,maxRequests:1,cacheResponse:false,domCompleteTrigger:false,domSuccessTrigger:false,preventDoubbleRequests:true,queueDuplicateRequests:false,cacheTTL:-1,queue:false};b.each(b.manageAjax._manager.prototype,function(a,c){a.indexOf("_")===0||!b.isFunction(c)||(b.manageAjax[a]=function(e,g){if(!n[e])if(a==="add")b.manageAjax.create(e,g);else return;var d=Array.prototype.slice.call(arguments,1);n[e][a].apply(n[e],d)})})})(jQuery);