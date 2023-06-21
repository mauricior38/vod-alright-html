!function(e,t){"function"==typeof define&&define.amd?define([],t.bind(this,e,e.videojs)):"undefined"!=typeof module&&module.exports?module.exports=t(e,e.videojs):t(e,e.videojs)}(window,function(e,t){e.videojs_filters={version:"1.0"};var s=function(e,t){try{return e.querySelector(t)}catch(e){return!1}},i=function(e,t,s){var i=document.createElement(e);return void 0!==t&&""!==t&&(i.className=t),void 0!==s&&""!==s&&(i.innerHTML=s),i},r=100,n=100,v=100,a=!1;function l(e){return e}try{var o=Object.defineProperty({},"passive",{get:function(){return a=!0,!0}});e.addEventListener("testPassive",null,o),e.removeEventListener("testPassive",null,o)}catch(e){l(e)}t.registerPlugin("filters",function(o){this.ready(function(){!function(o,d){d=t.mergeOptions({touchBrightness:!0},d||{});var c=t.dom,u=o.el();if(!0===d.touchBrightness){var f=i("div","vjs-brightness");return f.innerHTML='<div class="vjs-brightness-bar"><div class="bar"></div><div class="bar-level"></div></div>',u.appendChild(f),f.addEventListener("touchstart",function(t){t.preventDefault(),t.stopImmediatePropagation(),c.addClass(u,"vjs-touch-active"),j(t),e.addEventListener("touchmove",h,{passive:!1}),f.addEventListener("touchend",p)},!!a&&{passive:!0}),this}function h(e){e.preventDefault(),e.stopImmediatePropagation(),clearInterval(o.touchtimer),c.addClass(u,"vjs-touch-acitve"),j(e)}function p(t){t.preventDefault(),o.touchtimer=setTimeout(function(){c.removeClass(u,"vjs-touch-active")},1e3),e.removeEventListener("touchmove",h),f.removeEventListener("touchend",p)}function j(e){var t=null;try{t=e.originalEvent.touches[0].pageY}catch(e){l(e)}try{t=e.originalEvent.changedTouches[0].pageY}catch(e){l(e)}try{t=e.changedTouches[0].pageY}catch(e){l(e)}try{t=e.touches[0].clientY}catch(e){l(e)}if(null!==t){var i=f.offsetHeight,a=t-f.getBoundingClientRect().top;a>i&&(a=i),a<0&&(a=0);var o=parseInt(100-a/i*100,10);o<0&&(o=0),o>100&&(o=100),s(f,".bar-level").style.height=o+"%";var d=s(u,".vjs-filters");if(d){var c=s(d,".vjs-filter-brightness");c&&(s(c,".vjs-filter-level").style.width=o+"%")}var h="";100!=(r=100+2*(o-50))&&(h="brightness("+r+"%)"),100!==n&&(""!==h&&(h+=" "),h+="saturate("+n+"%)"),100!==v&&(""!==h&&(h+=" "),h+="contrast("+v+"%)"),s(u,".vjs-tech").style.webkitFilter=h,s(u,".vjs-tech").style.filter=h}}}(this,o)}),this.on("menusReady",function(){!function(o,d){var c=t.dom,u=o.el(),f=t.obj.merge({filtersMenu:!0},d||{});if(d=f,f.filtersMenu){var h=i("li","js-settings-item vjs-filters-button");h.innerHTML=o.localize("Filters")+'<span class="vjs-filters-icon"></span>';var p=s(u,".vjs-settings-list");p&&(p.children.length>0?p.insertBefore(h,p.firstChild.nextSibling):(p.appendChild(h),c.removeClass(s(u,".vjs-cog-menu-button"),"vjs-hidden")));var j=i("div","vjs-filters vjs-hidden");j.setAttribute("aria-label","Video filters"),j.setAttribute("aria-hidden","true"),j.innerHTML='<div class="vjs-filter-body vjs-filter-brightness"><div class="vjs-filter-bar"><div class="vjs-filter-level"></div><div class="filter-tip"></div></div></div><div class="vjs-filter-body vjs-filter-saturation"><div class="vjs-filter-bar"><div class="vjs-filter-level"></div><div class="filter-tip"></div></div></div><div class="vjs-filter-body vjs-filter-contrast"><div class="vjs-filter-bar"><div class="vjs-filter-level"></div><div class="filter-tip"></div></div></div><div class="filter-btn filter-close">Close</div><div class="filter-btn filter-reset">Reset</div>',u.appendChild(j);var g=s(j,".filter-reset"),m=s(j,".filter-close"),b=s(j,".vjs-filter-brightness"),y=s(j,".vjs-filter-saturation"),E=s(j,".vjs-filter-contrast"),L=function(e){var t=null,i=x,a=i;try{t=e.originalEvent.touches[0].pageX}catch(e){l(e)}try{t=e.originalEvent.changedTouches[0].pageX}catch(e){l(e)}try{t=e.changedTouches[0].pageX}catch(e){l(e)}try{t=e.touches[0].clientX}catch(e){l(e)}if(null===t)try{t=e.pageX}catch(e){l(e)}if(null!==t){var o=a.offsetWidth,d=t-a.getBoundingClientRect().left;d>o&&(d=o),d<0&&(d=0);var f=parseInt(d/o*100,10);f<0&&(f=0),f>100&&(f=100),s(i,".vjs-filter-level").style.width=f+"%";var h=s(i,".filter-tip");c.addClass(h,"tip-show"),h.style.left=o*(f/100)-h.offsetWidth/2+"px";var p=s(u,".vjs-brightness-bar");p&&(s(p,".bar-level").style.height=f+"%");var j=100+2*(f-50);h.innerText=j;var g=s(u,".vjs-tech");x===b&&(r=j),x===y&&(n=j),x===E&&(v=j);var m="";100!==r&&(m="brightness("+r+"%)"),100!==n&&(""!==m&&(m+=" "),m+="saturate("+n+"%)"),100!==v&&(""!==m&&(m+=" "),m+="contrast("+v+"%)"),g.style.webkitFilter=m,g.style.filter=m}},C=function(e){e.preventDefault(),e.stopPropagation(),c.addClass(j,"vjs-hidden"),j.setAttribute("aria-hidden","true"),c.removeClass(u,"vjs-filters-on"),o.$(".vjs-tech").style.removeProperty("pointer-events")},w=function(e){e.preventDefault(),e.stopPropagation(),c.removeClass(j,"vjs-hidden"),j.setAttribute("aria-hidden","false"),o.trigger("filters"),o.$(".vjs-tech").style.setProperty("pointer-events","none"),c.addClass(u,"vjs-filters-on");var t=s(u,".vjs-sharing-overlay"),i=s(u,".vjs-grid");t&&c.addClass(t,"vjs-hidden"),i&&c.addClass(i,"vjs-hidden"),c.removeClass(s(u,".vjs-menu-settings"),"vjs-lock-showing")},P=function(e){e.preventDefault(),e.stopPropagation(),r=100,v=100,n=100,s(u,".vjs-tech").removeAttribute("style"),s(b,".vjs-filter-level").style.width="50%",s(y,".vjs-filter-level").style.width="50%",s(E,".vjs-filter-level").style.width="50%"},T=function(t){t.preventDefault(),t.stopPropagation();var s=t.target;x=s,L(t),e.addEventListener("mousemove",D,!1),e.addEventListener("mouseup",k,!1),e.addEventListener("touchmove",D,!!a&&{passive:!1}),x.addEventListener("touchend",k,!!a&&{passive:!1})},D=function(e){e.preventDefault(),L(e)},k=function(t){t.preventDefault(),c.removeClass(u,"vjs-touch-active"),c.removeClass(s(x,".filter-tip"),"tip-show"),e.removeEventListener("mousemove",D),e.removeEventListener("mouseup",k),e.removeEventListener("touchmove",D),x.removeEventListener("touchend",k)};g.addEventListener("click",P,!1),g.addEventListener("touchstart",P,!!a&&{passive:!1}),m.addEventListener("click",C,!1),m.addEventListener("touchstart",C,!!a&&{passive:!1});var M=s(u,".vjs-filters-button");M.addEventListener("click",w,!1),M.addEventListener("touchstart",w,!!a&&{passive:!1});var x=null;b.addEventListener("mousedown",T,!1),b.addEventListener("touchstart",T,!!a&&{passive:!0}),y.addEventListener("mousedown",T,!1),y.addEventListener("touchstart",T,!!a&&{passive:!0}),E.addEventListener("mousedown",T,!1),E.addEventListener("touchstart",T,!!a&&{passive:!0})}}(this,o)})})});