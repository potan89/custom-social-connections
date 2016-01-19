module.exports=function(t){function e(s){if(n[s])return n[s].exports;var a=n[s]={exports:{},id:s,loaded:!1};return t[s].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var s=n(2),a=n(3),r=n(4),i=s(),c=n(5);i.use(a({scopes:"read:connections create:connections update:connections delete:connections read:clients"})),i.get("/",function(t,e){e.header("Content-Type","text/html"),e.status(200).send(c({baseUrl:e.locals.baseUrl}))}),t.exports=r.fromExpress(i)},,function(t,e){t.exports=require("express")},function(t,e){t.exports=require("auth0-oauth2-express")},function(t,e){t.exports=require("webtask-tools")},function(t,e,n){var s=n(6);t.exports=function(t){var e,n=[],a=t||{};return function(t,a){n.push('<!DOCTYPE html><html><head><title>Custom OAuth2 Connections</title><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"'+s.attr("content",""+a,!0,!0)+'><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/2.0.1/lib/logos/img/favicon.png"><link rel="apple-touch-icon" href="apple-touch-icon.png"><link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/manage/v0.3.973/css/index.min.css"><link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/auth0/custom-oauth2-dashboard/master/dist/public/css/style.css"><script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script><script type="text/javascript" src="https://fb.me/react-0.14.0.min.js"></script><script type="text/javascript" src="https://fb.me/react-dom-0.14.0.js"></script><script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script><script type="text/javascript" src="https://cdn.auth0.com/js/jwt-decode-1.4.0.min.js"></script><script type="text/javascript" src="https://cdn.auth0.com/js/navbar-1.0.0.min.js"></script><script type="text/javascript">if (!sessionStorage.getItem("token")) {\n  window.location.href = \''+s.escape(null==(e=t)?"":e)+'/login\';\n}\n</script></head><body><header style="background-color: #fbfbfb" class="dashboard-header"><nav role="navigation" class="navbar navbar-default"><div class="container"><div class="navbar-header"><h1 class="navbar-brand"><a href="http://manage.auth0.com/"><span>Auth0</span></a></h1></div><div id="navbar-collapse" class="collapse navbar-collapse"></div><script type="text/babel">ReactDOM.render(\n  <Navbar baseUrl="'+s.escape(null==(e=t)?"":e)+'"/>,\n  document.getElementById(\'navbar-collapse\')\n);</script></div></nav></header><div class="container"><div class="row"><div id="sidebar" class="col-xs-2"><a href="#" class="visible-phone hide"><i class="icon icon-budicon-497">Dashboard</i></a><div class="sidebar-fixed"><ul><li class="connections-tab submenu active"><a href="#"><i class="icon icon-budicon-339"></i><span> Connections</span></a><ul><li class="active"><a href="#"><i class="icon icon-budicon-519"></i><span>Custom</span></a></li></ul></li><li><a href="https://manage.auth0.com"><span>Back to Dashboard</span></a></li></ul><div class="sidebar-footer-links"></div></div></div><section id="dashboard" class="content-page current"><script type="text/javascript">window.env = {\n  webtasks: {\n    shareUrl:     \'https://webtask.it.auth0.com/api/run/wt-centurion_javier-gmail_com-0/share-task?webtask_no_cache=1\',\n    templatesUrl: \'https://webtask.it.auth0.com/api/run/wt-centurion_javier-gmail_com-0/sync?webtask_no_cache=1\'\n  }\n};</script><script src="https://raw.githubusercontent.com/auth0/custom-oauth2-dashboard/master/dist/public/scripts/bundle.js"></script></section></div></div></body></html>')}.call(this,"baseUrl"in a?a.baseUrl:"undefined"!=typeof baseUrl?baseUrl:void 0,"description"in a?a.description:"undefined"!=typeof description?description:void 0),n.join("")}},function(t,e,n){"use strict";function s(t){return null!=t&&""!==t}function a(t){return(Array.isArray(t)?t.map(a):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(s).join(" ")}function r(t){return c[t]||t}function i(t){var e=String(t).replace(o,r);return e===""+t?t:e}e.merge=function l(t,e){if(1===arguments.length){for(var n=t[0],a=1;a<t.length;a++)n=l(n,t[a]);return n}var r=t["class"],i=e["class"];(r||i)&&(r=r||[],i=i||[],Array.isArray(r)||(r=[r]),Array.isArray(i)||(i=[i]),t["class"]=r.concat(i).filter(s));for(var c in e)"class"!=c&&(t[c]=e[c]);return t},e.joinClasses=a,e.cls=function(t,n){for(var s=[],r=0;r<t.length;r++)n&&n[r]?s.push(e.escape(a([t[r]]))):s.push(a(t[r]));var i=a(s);return i.length?' class="'+i+'"':""},e.style=function(t){return t&&"object"==typeof t?Object.keys(t).map(function(e){return e+":"+t[e]}).join(";"):t},e.attr=function(t,n,s,a){return"style"===t&&(n=e.style(n)),"boolean"==typeof n||null==n?n?" "+(a?t:t+'="'+t+'"'):"":0==t.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+t+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):s?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+e.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+n+'"')},e.attrs=function(t,n){var s=[],r=Object.keys(t);if(r.length)for(var i=0;i<r.length;++i){var c=r[i],o=t[c];"class"==c?(o=a(o))&&s.push(" "+c+'="'+o+'"'):s.push(e.attr(c,o,!1,n))}return s.join("")};var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},o=/[&<>"]/g;e.escape=i,e.rethrow=function p(t,e,s,a){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&e||a))throw t.message+=" on line "+s,t;try{a=a||n(7).readFileSync(e,"utf8")}catch(r){p(t,null,s)}var i=3,c=a.split("\n"),o=Math.max(s-i,0),l=Math.min(c.length,s+i),i=c.slice(o,l).map(function(t,e){var n=e+o+1;return(n==s?"  > ":"    ")+n+"| "+t}).join("\n");throw t.path=e,t.message=(e||"Jade")+":"+s+"\n"+i+"\n\n"+t.message,t},e.DebugItem=function(t,e){this.lineno=t,this.filename=e}},function(t,e){t.exports=require("fs")}]);