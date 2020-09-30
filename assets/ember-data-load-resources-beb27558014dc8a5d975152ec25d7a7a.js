"use strict"
define("ember-data-load-resources/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-data-load-resources/adapters/application",["exports","@ember-data/adapter/json-api"],(function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=l(e)
if(t){var o=l(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return a(this,r)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(r,e)
var t=i(r)
function r(){var e
n(this,r)
for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a]
return c(u(e=t.call.apply(t,[this].concat(i))),"namespace","api"),e}return r}(t.default)
e.default=f})),define("ember-data-load-resources/app",["exports","ember-resolver","ember-load-initializers","ember-data-load-resources/config/environment"],(function(e,t,r,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=f(e)
if(t){var o=f(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return l(this,r)}}function l(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var d=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)})(o,Ember.Application)
var r=u(o)
function o(){var e
i(this,o)
for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l]
return s(c(e=r.call.apply(r,[this].concat(u))),"modulePrefix",n.default.modulePrefix),s(c(e),"podModulePrefix",n.default.podModulePrefix),s(c(e),"Resolver",t.default),e}return o}()
e.default=d,(0,r.default)(d,n.default.modulePrefix)})),define("ember-data-load-resources/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-data-load-resources/controllers/application",["exports","ember-concurrency-decorators"],(function(e,t){var r,n,o
function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=p(e)
if(t){var o=p(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return s(this,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var m=(r=(0,t.lastValue)("loadComments"),o=b((n=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)})(s,Ember.Controller)
var t,r,n,i=f(s)
function s(){var e
u(this,s)
for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
return a(d(e=i.call.apply(i,[this].concat(r))),"comments",o,d(e)),e}return t=s,(r=[{key:"loadComments",value:regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.model.hasMany("comments").load()
case 2:return e.abrupt("return",e.sent)
case 3:case"end":return e.stop()}}),e,this)}))}])&&l(t.prototype,r),n&&l(t,n),s}()).prototype,"comments",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b(n.prototype,"loadComments",[t.dropTask],Object.getOwnPropertyDescriptor(n.prototype,"loadComments"),n.prototype),n)
e.default=m})),define("ember-data-load-resources/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-data-load-resources/helpers/app-version",["exports","ember-data-load-resources/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=n.versionOnly||n.hideSha,a=n.shaOnly||n.hideVersion,u=null
return i&&(n.showExtended&&(u=o.match(r.versionExtendedRegExp)),u||(u=o.match(r.versionRegExp))),a&&(u=o.match(r.shaRegExp)),u?u[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var o=Ember.Helper.helper(n)
e.default=o})),define("ember-data-load-resources/helpers/cancel-all",["exports","ember-concurrency/helpers/cancel-all"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-data-load-resources/helpers/perform",["exports","ember-concurrency/helpers/perform"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-data-load-resources/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-data-load-resources/helpers/set",["exports","ember-set-helper/helpers/set"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-data-load-resources/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("ember-data-load-resources/helpers/task",["exports","ember-concurrency/helpers/task"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-data-load-resources/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-data-load-resources/config/environment"],(function(e,t,r){var n,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,o=r.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(n,o)}
e.default=i})),define("ember-data-load-resources/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r})),define("ember-data-load-resources/initializers/ember-cli-mirage",["exports","ember-data-load-resources/config/environment","ember-data-load-resources/mirage/config","ember-cli-mirage/get-rfc232-test-context","ember-cli-mirage/start-mirage"],(function(e,t,r,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.startMirage=a,e.default=void 0
var i={name:"ember-cli-mirage",initialize:function(e){r.default&&e.register("mirage:base-config",r.default,{instantiate:!1}),r.testConfig&&e.register("mirage:test-config",r.testConfig,{instantiate:!1}),t.default["ember-cli-mirage"]=t.default["ember-cli-mirage"]||{},function(e,t){if("undefined"!=typeof FastBoot)return!1
if((0,n.default)())return!1
var r=void 0!==t.enabled,o=function(e,t){var r="development"===e&&!t.usingProxy,n="test"===e
return r||n}(e,t)
return r?t.enabled:o}(t.default.environment,t.default["ember-cli-mirage"])&&a(t.default)}}
function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.default
return(0,o.default)(null,{env:e,baseConfig:r.default,testConfig:r.testConfig})}e.default=i})),define("ember-data-load-resources/initializers/ember-concurrency",["exports","ember-concurrency/initializers/ember-concurrency"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-data-load-resources/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-data-load-resources/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:r.default}
e.default=n})),define("ember-data-load-resources/initializers/export-application-global",["exports","ember-data-load-resources/config/environment"],(function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default=void 0
var n={name:"export-application-global",initialize:r}
e.default=n})),define("ember-data-load-resources/instance-initializers/ember-cli-mirage-autostart",["exports","ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-data-load-resources/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-data",initialize:function(){}}})),define("ember-data-load-resources/mirage/config",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){this.namespace="/api",this.get("posts/:id"),this.get("posts/:id/comments",(function(e,t){return e.posts.find(t.params.id).comments}))}})),define("ember-data-load-resources/mirage/factories/comment",["exports","ember-cli-mirage","faker"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.Factory.extend({body:function(){return r.default.lorem.paragraphs(2)}})
e.default=n})),define("ember-data-load-resources/mirage/factories/post",["exports","ember-cli-mirage","faker"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.Factory.extend({name:function(){return r.default.lorem.sentence()},body:function(){return r.default.lorem.paragraphs(2)}})
e.default=n})),define("ember-data-load-resources/mirage/scenarios/default",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){var t=e.create("post")
e.createList("comment",3,{post:t})}})),define("ember-data-load-resources/mirage/serializers/application",["exports","ember-cli-mirage"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.JSONAPISerializer.extend({alwaysIncludeLinkageData:!0})
e.default=r})),define("ember-data-load-resources/mirage/serializers/post",["exports","ember-data-load-resources/mirage/serializers/application"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default.extend({links:function(e){return{comments:{related:"/api/posts/".concat(e.id,"/comments")}}}})
e.default=r})),define("ember-data-load-resources/models/comment",["exports","@ember-data/model"],(function(e,t){var r,n,o,i,a,u
function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=m(e)
if(t){var o=m(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return p(this,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var v=(r=(0,t.attr)("string"),n=(0,t.belongsTo)("post"),u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)})(r,e)
var t=d(r)
function r(){var e
f(this,r)
for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u]
return c(b(e=t.call.apply(t,[this].concat(o))),"body",i,b(e)),c(b(e),"post",a,b(e)),e}return r}(t.default),i=y((o=u).prototype,"body",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=y(o.prototype,"post",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o)
e.default=v})),define("ember-data-load-resources/models/post",["exports","@ember-data/model"],(function(e,t){var r,n,o,i,a,u,l,c
function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=v(e)
if(t){var o=v(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return m(this,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var h=(r=(0,t.attr)("string"),n=(0,t.attr)("string"),o=(0,t.hasMany)("comment"),c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(r,e)
var t=b(r)
function r(){var e
d(this,r)
for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i]
return s(y(e=t.call.apply(t,[this].concat(o))),"name",a,y(e)),s(y(e),"body",u,y(e)),s(y(e),"comments",l,y(e)),e}return r}(t.default),a=g((i=c).prototype,"name",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=g(i.prototype,"body",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=g(i.prototype,"comments",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i)
e.default=h}))
define("ember-data-load-resources/router",["exports","ember-data-load-resources/config/environment"],(function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=l(e)
if(t){var o=l(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return a(this,r)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var f=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(a,Ember.Router)
var r=i(a)
function a(){var e
n(this,a)
for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l]
return c(u(e=r.call.apply(r,[this].concat(i))),"location",t.default.locationType),c(u(e),"rootURL",t.default.rootURL),e}return a}()
e.default=f,f.map((function(){}))})),define("ember-data-load-resources/routes/application",["exports"],(function(e){var t,r,n
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=d(e)
if(t){var o=d(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return f(this,r)}}function f(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p,b,m,y,v,g,h=(t=Ember.inject.service,p=(r=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(d,Ember.Route)
var t,r,o,f=c(d)
function d(){var e
a(this,d)
for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o]
return i(s(e=f.call.apply(f,[this].concat(r))),"store",n,s(e)),e}return t=d,(r=[{key:"model",value:function(){return this.store.findRecord("post",1)}}])&&u(t.prototype,r),o&&u(t,o),d}()).prototype,b="store",m=[t],y={configurable:!0,enumerable:!0,writable:!0,initializer:null},g={},Object.keys(y).forEach((function(e){g[e]=y[e]})),g.enumerable=!!g.enumerable,g.configurable=!!g.configurable,("value"in g||g.initializer)&&(g.writable=!0),g=m.slice().reverse().reduce((function(e,t){return t(p,b,e)||e}),g),v&&void 0!==g.initializer&&(g.value=g.initializer?g.initializer.call(v):void 0,g.initializer=void 0),void 0===g.initializer&&(Object.defineProperty(p,b,g),g=null),n=g,r)
e.default=h})),define("ember-data-load-resources/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-data-load-resources/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-data-load-resources/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-data-load-resources/serializers/application",["exports","@ember-data/serializer/json-api"],(function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var r,n=u(e)
if(t){var o=u(this).constructor
r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments)
return a(this,r)}}function a(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(r,e)
var t=i(r)
function r(){return n(this,r),t.apply(this,arguments)}return r}(t.default)
e.default=l})),define("ember-data-load-resources/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("ember-data-load-resources/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"7+vfjDc7",block:'{"symbols":["comment"],"statements":[[10,"h1"],[12],[2,"\\n  "],[1,[32,0,["model","name"]]],[2,"\\n"],[13],[2,"\\n\\n"],[10,"p"],[12],[2,"\\n  "],[1,[32,0,["model","body"]]],[2,"\\n"],[13],[2,"\\n\\n"],[6,[37,2],[[32,0,["comments"]]],null,[["default","else"],[{"statements":[[2,"  "],[10,"ul"],[12],[2,"\\n"],[6,[37,4],[[30,[36,3],[[30,[36,3],[[32,0,["comments"]]],null]],null]],null,[["default"],[{"statements":[[2,"      "],[10,"li"],[12],[2,"\\n        "],[1,[32,1,["body"]]],[2,"\\n      "],[13],[2,"\\n"]],"parameters":[1]}]]],[2,"  "],[13],[2,"\\n"]],"parameters":[]},{"statements":[[6,[37,2],[[32,0,["loadComments","isRunning"]]],null,[["default","else"],[{"statements":[[2,"  "],[10,"p"],[12],[2,"\\n    Loading comments...\\n  "],[13],[2,"\\n"]],"parameters":[]},{"statements":[[2,"  "],[11,"button"],[24,4,"button"],[4,[38,1],["click",[30,[36,0],[[32,0,["loadComments"]]],null]],null],[12],[2,"\\n    Load Comments\\n  "],[13],[2,"\\n"]],"parameters":[]}]]]],"parameters":[]}]]]],"hasEval":false,"upvars":["perform","on","if","-track-array","each"]}',meta:{moduleName:"ember-data-load-resources/templates/application.hbs"}})
e.default=t})),define("ember-data-load-resources/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("ember-data-load-resources/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("ember-data-load-resources/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("ember-data-load-resources/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("ember-data-load-resources/config/environment",[],(function(){try{var e="ember-data-load-resources/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("ember-data-load-resources/app").default.create({name:"ember-data-load-resources",version:"0.0.0+d773a410"})
