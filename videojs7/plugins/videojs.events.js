/**
 * @license
 * Copyright (c) 2022 The Nuevodevel Team. All rights reserved.
 * Events plugin for video.js v 8.* with Nuevo plugin v11
 * Version 2.5.0
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("video.js")):"function"==typeof define&&define.amd?define(["video.js"],t):e.videojsEventTracking=t(e.videojs)}(this,function(e){"use strict";e="default"in e?e.default:e;var t,i=null,n="",r=function(e){if(!e.match(/^([0-9]{1,3}\.){3}[0-9]{1,3}$/))return!1;var t=e.split(".");for(let e of t){if(Number(e)>255)return!1}return!0},o=function(e,t=8){if("::"===(e=e.toLowerCase()))return!0;if(!e.match(/^([0-9a-f]{0,4}:?){2,8}$/))return!1;if(":"===e[e.length-1]&&":"!==e[e.length-2])return!1;if(e.split("::").length>2)return!1;if(1===e.split("::").length&&e.split(":").length!==t)return!1;if(2===e.split("::").length){var i=e.split("::")[1];i=i.split(":");for(let e=0;e<i.length-1;e++)if(""===i[e])return!1}return!0},a=function(e){var[t,i]=v(e);return o(t,6)&&r(i)},s=function(e,t,i="0"){for(;e.length<t;)e+=i;return e},u=function(e,t,i="0"){for(;e.length<t;)e=i+e;return e},d=function(e,t){for(var i=[];e.length>0;){var n=e.substring(0,t);i.push(n),e=e.substring(t)}return i},l=function(e){return Number(e).toString(2)},c=function(e){return parseInt(e,2)},g=function(e){return e.split(".").map(e=>u(l(e),8)).join("")},f=function(e){return e.toString(16)},v=function(e){var t=e.lastIndexOf(":"),i=e.substring(0,t),n=e.substring(t+1);return":"===i[i.length-1]&&(i+=":"),[i,n]},p=function(e){var[t,i]=v(e),[n,r]=t.split("::");for(n=n.split(":"),r=void 0!==r?r.split(":"):[];n.length+r.length<6;)n.push("0");var o=n.concat(r);for(let e=0;e<o.length;e++)0===o[e].length&&(o[e]="0");return o.map(e=>parseInt(e,16)).map(e=>u(l(e),16)).join("")+g(i)},y=function(e){return d(e,8).map(c).join(".")},h=function(e){return function(e){var t=e.split(":"),i=0,n=null,r=!1,o=0,a=null;for(let e=0;e<t.length;e++)r?"0"===t[e]?o++:(o>i&&(i=o,n=a),r=!1,o=0,a=null):"0"===t[e]&&(r=!0,o=1,a=e);return null!==a&&o>i&&(i=o,n=a),i<2?e:t.slice(0,n).join(":")+"::"+t.slice(n+i).join(":")}(d(e,16).map(c).map(f).join(":"))},m=function(e,t){var i=function(e){var[t,i]=e.split("::");for(t=t.split(":"),i=void 0!==i?i.split(":"):[];t.length+i.length<8;)t.push("0");var n=t.concat(i);for(let e=0;e<n.length;e++)0===n[e].length&&(n[e]="0");return n.map(e=>parseInt(e,16)).map(e=>u(l(e),16)).join("")}(e).substring(0,t),n=s(i,128);return h(n)},b=function(e,t){var i,n,r,o,a,u,d=p(e).substring(0,t),l=s(d,128);return n=(i=l).substring(0,96),r=i.substring(96),o=h(n),a=y(r),":"!==(u=o)[u.length-1]&&(u+=":"),u+a},T=function(e,t=24,i=24){if("string"!=typeof e)return null;var n=function(e){return r(e)?"IPv4":o(e)?"IPv6":a(e)?"IPv6_4":"None"}(e=e.trim().toLowerCase());return"IPv4"===n?function(e,t){var i=g(e).substring(0,t),n=s(i,32);return y(n)}(e,t):"IPv6"===n?m(e,i):"IPv6_4"===n?function(e){return a(e)&&(!p(e).substring(0,96).includes("1")||!p(e).substring(0,80).includes("1")&&!p(e).substring(80,96).includes("0"))}(e)?b(e,t+96):b(e,i):null};function I(e,t,n){if(""!==e.trackingUrl&&navigator.sendBeacon&&"undefined"!==e.trackingUrl&&void 0!==e.trackingUrl&&""!==i.label&&""!==t){n=JSON.stringify(n);var r={sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label,event:t,value:n};navigator.sendBeacon(e.trackingUrl,JSON.stringify(r))}}function k(e,t){""===i.label&&(i.label=i.id);""!==i.label&&""!==e&&(window.gtag?window.gtag("event",e,{event_category:i.category,event_label:i.label,value:t,eventNonInteraction:!0}):window._ga?window.ga("send","event",i.category,e,i.label,t,{transport:"beacon"}):window._gaq?window._gaq.push(["_trackEvent",i.category,e,i.label,t,!0,{transport:"beacon"}]):window._paq&&window._paq.push(["trackEvent",i.category,e,i.label,t]))}var w=function(e){var r=this,o=0,a=0,s=0,u=0,d=0,l=0,c=0,g=[],f=0,v=!1,p=function(){var e={event:"summary",initialLoadTime:c,totalDuration:u,watchedDuration:d,pauseCount:a,seekCount:o,bufferCount:s,lastTime:f,bufferDuration:l,video_id:"",video_category:"Videos",video_label:"",analytics:v};e.watchedDuration>1&&(e.analytics&&k("watchedTime",e.watchedDuration),null!==i&&I(r,"watchedTime",e.watchedDuration)),o=0,a=0,s=0,u=0,d=0,l=0,c=0,f=0,g=[]};if("function"==typeof window.addEventListener){var y=!1,h=function(e){y||("pagehide"===e.type?(y=!0,p(),i=null,n=""):"pageshow"===e.type&&clearTimeout(t),"visibilitychange"===e.type&&"hidden"===document.visibilityState&&(t=setTimeout(function(){p(),i=null,n=""},1e4)))};document.addEventListener("visibilitychange",h),window.addEventListener("pagehide",h),window.addEventListener("beforeunload",function(e){p(),i=null,n=""})}r.on("ended",function(){var e={event:"summary",initialLoadTime:c,totalDuration:u,watchedDuration:d,pauseCount:a,seekCount:o,bufferCount:s,lastTime:f,bufferDuration:l,video_id:"",video_category:"Videos",video_label:"",analytics:v,sessionId:i.uid};r&&r.trigger("track",e)}),r.on("dispose",function(){p(),i=null,n=""}),r.on("timeupdate",function(){var e=+r.currentTime().toFixed(0);0!==e&&(g.indexOf(e)<0&&g.push(e),d=g.length,i.watchedDuration=g.length,f=r.currentTime().toFixed(0))}),r.on("loadeddata",function(e,t){u=+r.duration().toFixed(0)}),r.on("track",function(e,t){switch(t.event){case"seek":o=t.seekCount;break;case"pause":a=t.pauseCount;break;case"buffered":s=t.bufferCount,l+=parseFloat(t.bufferTime);break;case"loaded":c=t.initialLoadTime;break;case"start":r.analytics&&(v=!0)}})},_=function(e){this.on("dispose",function(){i={}}),this.on("loadeddata",function(){null!==i&&i.watchedDuration>1&&(this.analytics&&k("watchedTime",i.watchedDuration),I(this,"watchedTime",i.watchedDuration)),i={}}),this.on("playing",function(){clearTimeout(t);if(n!==this.currentSource()){if(n=this.currentSource(),null!==i){if(i.id&&"function"==typeof this.video_id&&i.id.length>0&&i.id===this.video_id())return;if(i.label&&"function"==typeof this.video_title&&i.label.length>0&&i.label===this.video_title())return}i={},void 0!==this.trackingUrl?i.trackingUrl=this.trackingUrl:i.trackingUrl="";var e=Date.now();i.uid=e,"function"==typeof this.video_title&&this.video_title()&&(i.label=this.video_title()),"function"==typeof this.video_id&&this.video_id()&&(i.id=this.video_id());var r=this.el_.className;i.category="Video",this.isAudio()&&(i.category="Audio"),r.indexOf("vjs-live")>-1&&(i.category="Live video"),this.trigger("track",{event:"firstPlay",sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label,initialPlayTime:this.currentTime().toFixed(0)}),I(this,"firstPlay",this.currentTime().toFixed(0)),function(e){if(e.abstractApiKey)var t="//ipgeolocation.abstractapi.com/v1/?api_key="+e.abstractApiKey;else if(e.ipdataApiKey)var t="//api.ipdata.co?api-key="+e.ipdataApiKey;else var t="//ipapi.co/json/";!function(t,n){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState&&200===r.status&&r.responseText){var t=r.responseText;t=JSON.parse(t);var n={ip_address:"Unknown"};t.ip&&(e.anonymizeIP?n.ip_address=T(t.ip):n.ip_address=t.ip),t.ip_address&&(e.anonymizeIP?n.ip_address=T(t.ip_address):n.ip_address=t.ip_address),n.country="N/A",n.country_code="N/A",n.city="N/A",n.region="N/A",t.city&&(n.city=t.city),t.region&&(n.region=t.region),t.country&&(n.country=t.country),t.country_name&&(n.country=t.country_name),t.country_code&&(n.country_code=t.country_code),n.browser=-1!==navigator.userAgent.indexOf("Chrome")?"Google Chrome":-1!==navigator.userAgent.indexOf("Firefox")?"Mozilla Firefox":-1!==navigator.userAgent.indexOf("MSIE")?"Internet Exploder":-1!==navigator.userAgent.indexOf("Edge")?"Edge":-1!==navigator.userAgent.indexOf("Safari")?"Safari":-1!==navigator.userAgent.indexOf("Opera")?"Opera":-1!==navigator.userAgent.indexOf("YaBrowser")?"Yandex":"Other",n.device="undefined"!==window.orientation&&void 0!==window.orientation?"Mobile":"Desktop",i.userInfo=n,I(e,"user",i.userInfo),e.trigger("track",{event:"user",sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label,userInfo:n})}},r.open("GET",t,!0),r.send(null)}(t)}(this),this.analytics&&k("firstPlay",this.currentTime().toFixed(0))}})},x={analytics:!1,trackingUrl:void 0,abstractApiKey:void 0,ipdataApiKey:void 0,anonymizeIP:!1,base64:!1},A=function(n){n=e.mergeOptions(x,n),this.analytics=n.analytics,this.anonymizeIP=n.anonymizeIP,this.abstractApiKey=n.abstractApiKey,this.ipdataApiKey=n.ipdataApiKey,this.trackingUrl=n.trackingUrl,this.base64=n.base64,function(e){var t=this,n=0,r=null,o=!1,a=function(e){r&&clearTimeout(r),n=0,o=!1};t.on("dispose",a),t.on("loadstart",a),t.on("pause",function(){t.scrubbing()||t.seeking()||o||(r=setTimeout(function(){n++,t.trigger("track",{event:"pause",sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label,pauseCount:n})},300))})}.apply(this,arguments),function(e){var n=this,r=0,o=null,a=!1,s=function(e){o&&clearTimeout(o),r=0,a=!1};n.on("dispose",s),n.on("loadstart",s),n.on("ended",s),n.on("play",function(){n.scrubbing()||n.seeking()||a||n.currentTime()<1||(clearTimeout(t),o=setTimeout(function(){r++,n.trigger("track",{event:"resume",sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label,resumeCount:r})},300))})}.apply(this,arguments),function(e){var t=this;t.on("volumechange",function(){t.currentTime()>1&&(t.muted()&&t.trigger("track",{event:"mute",sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label}),!0!==t.muted()&&t.trigger("track",{event:"unmute",sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label}))})}.apply(this,arguments),function(e){var t=this;t.on("ratechanged",function(e,n){n.oldRate!==n.newRate&&t.trigger("track",{event:"rateChange",sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label,rate:n.newRate})})}.apply(this,arguments),function(e){var t=this,n=null,r=!1,o=!1,a=!1,s=0;this.on("loadstart",function(){n&&clearTimeout(n),r=!1,o=!1,a=!1,s=0}),this.on("pause",function(){a=!1,!t.scrubbing()||e.bufferingConfig&&e.bufferingConfig.includeScrub||(r=!0,n=setTimeout(function(){r=!1},200))}),this.on("waiting",function(){!1===a&&!1===r&&t.currentTime()>0&&(a=new Date,o=+t.currentTime().toFixed(2))}),this.on("timeupdate",function(){var e=+t.currentTime().toFixed(2);if(a&&e!==o){var n=(new Date-a)/1e3;a=!1,o=!1,s++,t.trigger("track",{event:"buffered",sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label,bufferTime:n.toFixed(3),bufferCount:s})}})}.apply(this,arguments),function(e){var t=this,n=!1,r=!1,o=!1,a=!0,s=!1,u=!0,d=!1,l=!0,c=!1,g=!0,f=0,v=0,p=0,y=0,h=function(e){n=!1,r=!0,o=!1,a=!0,s=!1,u=!0,d=!1,l=!0,c=!1,g=!0,f=0,v=0,p=0,y=0};t.on("dispose",h),t.on("loadstart",h),t.on("tracking:pause",function(){return v++}),t.on("tracking:resume",function(){return p++}),t.on("tracking:seek",function(){return y++}),t.on("timeupdate",function(){var e=t.currentTime().toFixed(0);f=+t.duration().toFixed(0),null!==i&&(n>0&&e>n&&e<s&&!1!==r&&(r=!1,t.trigger("track",{event:"10%",sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label,currentTime:e,duration:f}),t.analytics&&k("10%",n),I(t,"progress","10%")),s>0&&e>s&&e<d&&!1!==u&&(u=!1,t.trigger("track",{event:"25%",sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label,currentTime:e,duration:f}),t.analytics&&k("25%",s),I(t,"progress","25%")),d>0&&e>d&&e<c&&!1!==l&&(l=!1,t.trigger("track",{event:"50%",sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label,currentTime:e,duration:f}),t.analytics&&k("50%",d),I(t,"progress","50%")),c>0&&e>c&&e<o&&!1!==g&&(g=!1,t.trigger("track",{event:"75%",sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label,currentTime:e,duration:f}),t.analytics&&k("75%",c),I(t,"progress","75%")),o>0&&e>o&&!1!==a&&(a=!1,t.trigger("track",{event:"90%",sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label,currentTime:e,duration:f}),t.analytics&&k("90%",o),I(t,"progress","90%")))}),t.on("replay",function(){null!==i&&(this.trigger("track",{event:"replay",sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label}),this.analytics&&k("replay",null),null!==i&&I(t,"replay",null))}),t.on("loadeddata",function(){if((f=+t.duration().toFixed(0))>0){var e=(f/4).toFixed(0),i=(f/10).toFixed(0),r=(.9*f).toFixed(0);o=+r,n=+i,s=+e,d=2*+e,c=3*+e}}),t.on("ended",function(){var e=this.duration();this.el_.className.indexOf("vjs-live")>-1&&(e=0),this.trigger("track",{event:"ended",sessionId:i.uid,videoId:i.id,category:i.category,videoTitle:i.title,duration:e}),this.analytics&&k("completed",e),null!==i&&I(this,"completed",e)}),t.on("fullscreenchange",function(){this.isFullscreen()?(this.trigger("track",{event:"enterFullscreen",sessionId:i.uid,videoId:i.id,category:i.category,videoTitle:i.label,mode:"on"}),this.analytics&&k("fullscreen",1),null!==i&&I(this,"fullscreen",1)):(this.trigger("track",{event:"exitFullscreen",sessionId:i.uid,videoId:i.id,category:i.category,videoTitle:i.label,mode:"on"}),this.analytics&&k("fullscreen",0),null!==i&&I(this,"fullscreen",0))})}.apply(this,arguments),_.apply(this,arguments),function(e){var t=this;if(!(t.el_.className.indexOf("vjs-live")>-1)){var n=0,r=0,o=function(){n=0,r=0};t.on("dispose",o),t.on("loadstart",o);var a=t.el().querySelector(".vjs-progress-holder");a.onmouseup=a.ontouchend=function(){r=t.currentTime().toFixed(2),n++,setTimeout(function(){t.trigger("track",{event:"seek",sessionId:i.uid,videoId:i.id,category:i.category,videoTitle:i.label,seekTo:r,seekCount:n})},200)}}}.apply(this,arguments),w.apply(this,arguments),function(e){var t=this;t.on("resolutionchange",function(e,n){t.trigger("track",{event:"resolutionChange",sessionId:i.uid,category:i.category,videoId:i.id,videoTitle:i.label,resolution:n.res})})}.apply(this,arguments)},F=e.registerPlugin||e.plugin;return void 0===(e.getPlugin||e.plugin)("events")&&F("events",A),A.VERSION="2.5.0",A});
