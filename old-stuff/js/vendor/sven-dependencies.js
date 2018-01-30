/*!
 * Falling Confetti (http://codepen.io/linrock)
 * Linmiao Xu
 * Licensed under the MIT license
 */

 
/*!
 * JavaScript's missing parseBool (https://github.com/bucaran/parsebool)
 * Copyright (c) 2015, Jorge Bucaran <jbucaran@me.com>
 * Licensed under the MIT license
 */
"use strict";function parseBool(e,r){return r=r||{},function(e){return"false"===e?!1:"true"===e?!0:r.force?!!e:e}(r.ignoreCase&&"string"==typeof e?e.toLowerCase():e)}

/*!
 * TextPlugin.min.js
 * VERSION: 0.5.1
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=function(e){var i=e.nodeType,r="";if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)r+=t(e)}else if(3===i||4===i)return e.nodeValue;return r},e=_gsScope._gsDefine.plugin({propName:"text",API:2,version:"0.5.1",init:function(e,i,r){var s,n;if(!("innerHTML"in e))return!1;if(this._target=e,"object"!=typeof i&&(i={value:i}),void 0===i.value)return this._text=this._original=[""],!0;for(this._delimiter=i.delimiter||"",this._original=t(e).replace(/\s+/g," ").split(this._delimiter),this._text=i.value.replace(/\s+/g," ").split(this._delimiter),this._runBackwards=r.vars.runBackwards===!0,this._runBackwards&&(s=this._original,this._original=this._text,this._text=s),"string"==typeof i.newClass&&(this._newClass=i.newClass,this._hasClass=!0),"string"==typeof i.oldClass&&(this._oldClass=i.oldClass,this._hasClass=!0),s=this._original.length-this._text.length,n=0>s?this._original:this._text,this._fillChar=i.fillChar||(i.padSpace?"&nbsp;":""),0>s&&(s=-s);--s>-1;)n.push(this._fillChar);return!0},set:function(t){t>1?t=1:0>t&&(t=0),this._runBackwards&&(t=1-t);var e,i,r,s=this._text.length,n=0|t*s+.5;this._hasClass?(e=this._newClass&&0!==n,i=this._oldClass&&n!==s,r=(e?"<span class='"+this._newClass+"'>":"")+this._text.slice(0,n).join(this._delimiter)+(e?"</span>":"")+(i?"<span class='"+this._oldClass+"'>":"")+this._delimiter+this._original.slice(n).join(this._delimiter)+(i?"</span>":"")):r=this._text.slice(0,n).join(this._delimiter)+this._delimiter+this._original.slice(n).join(this._delimiter),this._target.innerHTML="&nbsp;"===this._fillChar&&-1!==r.indexOf("  ")?r.split("  ").join("&nbsp;&nbsp;"):r}}),i=e.prototype;i._newClass=i._oldClass=i._delimiter=""}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();

/*!
 * SplitText.min.js
 * VERSION: beta 0.3.4
 * DATE: 2015-08-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(function(t){"use strict";var e=t.GreenSockGlobals||t,i=function(t){var i,s=t.split("."),r=e;for(i=0;s.length>i;i++)r[s[i]]=r=r[s[i]]||{};return r},s=i("com.greensock.utils"),r=function(t){var e=t.nodeType,i="";if(1===e||9===e||11===e){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=r(t)}else if(3===e||4===e)return t.nodeValue;return i},n=document,a=n.defaultView?n.defaultView.getComputedStyle:function(){},o=/([A-Z])/g,l=function(t,e,i,s){var r;return(i=i||a(t,null))?(t=i.getPropertyValue(e.replace(o,"-$1").toLowerCase()),r=t||i.length?t:i[e]):t.currentStyle&&(i=t.currentStyle,r=i[e]),s?r:parseInt(r,10)||0},h=function(t){return t.length&&t[0]&&(t[0].nodeType&&t[0].style&&!t.nodeType||t[0].length&&t[0][0])?!0:!1},_=function(t){var e,i,s,r=[],n=t.length;for(e=0;n>e;e++)if(i=t[e],h(i))for(s=i.length,s=0;i.length>s;s++)r.push(i[s]);else r.push(i);return r},u=")eefec303079ad17405c",c=/(?:<br>|<br\/>|<br \/>)/gi,f=n.all&&!n.addEventListener,p="<div style='position:relative;display:inline-block;"+(f?"*display:inline;*zoom:1;'":"'"),m=function(t){t=t||"";var e=-1!==t.indexOf("++"),i=1;return e&&(t=t.split("++").join("")),function(){return p+(t?" class='"+t+(e?i++:"")+"'>":">")}},d=s.SplitText=e.SplitText=function(t,e){if("string"==typeof t&&(t=d.selector(t)),!t)throw"cannot split a null element.";this.elements=h(t)?_(t):[t],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=e||{},this.split(e)},g=function(t,e,i){var s=t.nodeType;if(1===s||9===s||11===s)for(t=t.firstChild;t;t=t.nextSibling)g(t,e,i);else(3===s||4===s)&&(t.nodeValue=t.nodeValue.split(e).join(i))},v=function(t,e){for(var i=e.length;--i>-1;)t.push(e[i])},y=function(t,e,i,s,o){c.test(t.innerHTML)&&(t.innerHTML=t.innerHTML.replace(c,u));var h,_,f,p,d,y,T,w,b,x,P,S,k,C,R=r(t),O=e.type||e.split||"chars,words,lines",A=-1!==O.indexOf("lines")?[]:null,D=-1!==O.indexOf("words"),M=-1!==O.indexOf("chars"),L="absolute"===e.position||e.absolute===!0,F=L?"&#173; ":" ",z=-999,I=a(t),E=l(t,"paddingLeft",I),N=l(t,"borderBottomWidth",I)+l(t,"borderTopWidth",I),X=l(t,"borderLeftWidth",I)+l(t,"borderRightWidth",I),B=l(t,"paddingTop",I)+l(t,"paddingBottom",I),j=l(t,"paddingLeft",I)+l(t,"paddingRight",I),U=l(t,"textAlign",I,!0),Y=t.clientHeight,q=t.clientWidth,V="</div>",G=m(e.wordsClass),Q=m(e.charsClass),W=-1!==(e.linesClass||"").indexOf("++"),Z=e.linesClass,H=-1!==R.indexOf("<"),$=!0,K=[],J=[],te=[];for(W&&(Z=Z.split("++").join("")),H&&(R=R.split("<").join("{{LT}}")),h=R.length,p=G(),d=0;h>d;d++)if(T=R.charAt(d),")"===T&&R.substr(d,20)===u)p+=($?V:"")+"<BR/>",$=!1,d!==h-20&&R.substr(d+20,20)!==u&&(p+=" "+G(),$=!0),d+=19;else if(" "===T&&" "!==R.charAt(d-1)&&d!==h-1&&R.substr(d-20,20)!==u){for(p+=$?V:"",$=!1;" "===R.charAt(d+1);)p+=F,d++;(")"!==R.charAt(d+1)||R.substr(d+1,20)!==u)&&(p+=F+G(),$=!0)}else"{"===T&&"{{LT}}"===R.substr(d,6)?(p+=M?Q()+"{{LT}}"+"</div>":"{{LT}}",d+=5):p+=M&&" "!==T?Q()+T+"</div>":T;for(t.innerHTML=p+($?V:""),H&&g(t,"{{LT}}","<"),y=t.getElementsByTagName("*"),h=y.length,w=[],d=0;h>d;d++)w[d]=y[d];if(A||L)for(d=0;h>d;d++)b=w[d],f=b.parentNode===t,(f||L||M&&!D)&&(x=b.offsetTop,A&&f&&x!==z&&"BR"!==b.nodeName&&(_=[],A.push(_),z=x),L&&(b._x=b.offsetLeft,b._y=x,b._w=b.offsetWidth,b._h=b.offsetHeight),A&&(D!==f&&M||(_.push(b),b._x-=E),f&&d&&(w[d-1]._wordEnd=!0),"BR"===b.nodeName&&b.nextSibling&&"BR"===b.nextSibling.nodeName&&A.push([])));for(d=0;h>d;d++)b=w[d],f=b.parentNode===t,"BR"!==b.nodeName?(L&&(S=b.style,D||f||(b._x+=b.parentNode._x,b._y+=b.parentNode._y),S.left=b._x+"px",S.top=b._y+"px",S.position="absolute",S.display="block",S.width=b._w+1+"px",S.height=b._h+"px"),D?f&&""!==b.innerHTML?J.push(b):M&&K.push(b):f?(t.removeChild(b),w.splice(d--,1),h--):!f&&M&&(x=!A&&!L&&b.nextSibling,t.appendChild(b),x||t.appendChild(n.createTextNode(" ")),K.push(b))):A||L?(t.removeChild(b),w.splice(d--,1),h--):D||t.appendChild(b);if(A){for(L&&(P=n.createElement("div"),t.appendChild(P),k=P.offsetWidth+"px",x=P.offsetParent===t?0:t.offsetLeft,t.removeChild(P)),S=t.style.cssText,t.style.cssText="display:none;";t.firstChild;)t.removeChild(t.firstChild);for(C=!L||!D&&!M,d=0;A.length>d;d++){for(_=A[d],P=n.createElement("div"),P.style.cssText="display:block;text-align:"+U+";position:"+(L?"absolute;":"relative;"),Z&&(P.className=Z+(W?d+1:"")),te.push(P),h=_.length,y=0;h>y;y++)"BR"!==_[y].nodeName&&(b=_[y],P.appendChild(b),C&&(b._wordEnd||D)&&P.appendChild(n.createTextNode(" ")),L&&(0===y&&(P.style.top=b._y+"px",P.style.left=E+x+"px"),b.style.top="0px",x&&(b.style.left=b._x-x+"px")));0===h&&(P.innerHTML="&nbsp;"),D||M||(P.innerHTML=r(P).split(String.fromCharCode(160)).join(" ")),L&&(P.style.width=k,P.style.height=b._h+"px"),t.appendChild(P)}t.style.cssText=S}L&&(Y>t.clientHeight&&(t.style.height=Y-B+"px",Y>t.clientHeight&&(t.style.height=Y+N+"px")),q>t.clientWidth&&(t.style.width=q-j+"px",q>t.clientWidth&&(t.style.width=q+X+"px"))),v(i,K),v(s,J),v(o,te)},T=d.prototype;T.split=function(t){this.isSplit&&this.revert(),this.vars=t||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var e=this.elements.length;--e>-1;)this._originals[e]=this.elements[e].innerHTML,y(this.elements[e],this.vars,this.chars,this.words,this.lines);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},T.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var t=this._originals.length;--t>-1;)this.elements[t].innerHTML=this._originals[t];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},d.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(d.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)},d.version="0.3.4"})(_gsScope),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(module.exports=e())}("SplitText");

/*!
 * isMobile.js v0.3.9
 *
 * A simple library to detect Apple phones and tablets,
 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
 * and any kind of seven inch device, via user agent sniffing.
 *
 * @author: Kai Mallea (kmallea@gmail.com)
 *
 * @license: http://creativecommons.org/publicdomain/zero/1.0/
 */
!function(a){"use strict";var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/IEMobile/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");return"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);

/*!
 * Fullscreen background is a small jQuery plugin that allows you to create fullscreen background.

 * Author:     Gaya Kessler
 * Date:       04-25-2012
 * URL:        http://www.gayadesign.com
*/
!function(i){"use strict";function t(t,e){var n=i(window).height(),h=i(window).width();i(t,e).each(function(){var t=i(this).attr("height"),e=i(this).attr("width"),s=h,o=h/e*t,d=(o-n)/2*-1,c=0;if(n>o)var s=n/t*e,o=n,d=0,c=(s-h)/2*-1;i(this).css({height:o+"px",width:s+"px",marginLeft:c+"px",marginTop:d+"px",display:"block"})})}var e="",n={selector:"img",fillOnResize:!0,defaultCss:!0};i.fn.fullscreenBackground=function(h){h&&i.extend(n,h),this.each(function(){e=this,1==n.defaultCss&&(i("html,body").css({width:"100%",height:"100%"}),i(e).css({height:"100%",width:"100%",overflow:"hidden",position:"fixed",top:"0px",left:"0px",zIndex:1})),1==n.fillOnResize&&i(window).resize(function(){t(n.selector,e)}),t(n.selector,e)})}}(jQuery);

/*!
 * Vertical Center Bootstrap Modal

 * Author: Cory LaViska
*/
$(function(){"use strict";function i(){var i=$(this),o=i.find(".modal-dialog");i.css("display","block"),o.css("margin-top",Math.max(0,($(window).height()-o.height())/2))}$(".modal").on("show.bs.modal",i),$(window).on("resize",function(){$(".modal:visible").each(i)})});

/*!
 * BigText - a jQuery plugin, calculates the font-size and word-spacing needed to match a line of text to a specific width.

 * Author: Zach Leatherman
 * URL:    https://github.com/zachleat/BigText
*/
!function(e,t){"use strict";function i(e,t,i,n,s,r,o){var a;if(o="number"==typeof o?o:0,e.css(i,n+r),a=e.width(),a>=t){if(e.css(i,""),a===t)return{match:"exact",size:parseFloat((parseFloat(n)-.1).toFixed(3))};var c=t-o,l=a-t;return{match:"estimate",size:parseFloat((parseFloat(n)-("word-spacing"===i&&o&&c>l?0:s)).toFixed(3))}}return a}function n(e,n,s,r,o){var a=e.clone(!0).addClass("bigtext-cloned").css({fontFamily:e.css("font-family"),textTransform:e.css("text-transform"),wordSpacing:e.css("word-spacing"),letterSpacing:e.css("letter-spacing"),position:"absolute",left:c.DEBUG_MODE?0:-9999,top:c.DEBUG_MODE?0:-9999}).appendTo(document.body),l=[],u=[],p=[],f=[];return n.css("float","left").each(function(){var e,n,a=t(this),u=c.supports.wholeNumberFontSizeOnly?[8,4,1]:[8,4,1,.1];if(a.hasClass(c.EXEMPT_CLASS))return l.push(null),f.push(null),void p.push(!1);var d=32,g=parseFloat(a.css("font-size")),S=(a.width()/g).toFixed(6);n=parseInt(s/S,10)-d;e:for(var h=0,_=u.length;_>h;h++)t:for(var E=1,x=10;x>=E;E++){if(n+E*u[h]>r){n=r;break e}if(e=i(a,s,"font-size",n+E*u[h],u[h],"px",e),"number"!=typeof e){if(n=e.size,"exact"===e.match)break e;break t}}f.push(s/n),n>r?(l.push(r),p.push(!1)):o&&o>n?(l.push(o),p.push(!0)):(l.push(n),p.push(!1))}).each(function(e){var n,r=t(this),o=0,a=1;if(r.hasClass(c.EXEMPT_CLASS))return void u.push(null);r.css("font-size",l[e]+"px");for(var p=1,f=3;f>p;p+=a)if(n=i(r,s,"word-spacing",p,a,"px",n),"number"!=typeof n){o=n.size;break}r.css("font-size",""),u.push(o)}).removeAttr("style"),c.DEBUG_MODE?a.css({"background-color":"rgba(255,255,255,.4)"}):a.remove(),{fontSizes:l,wordSpacings:u,ratios:f,minFontSizes:p}}var s=0,r=t("head"),o=e.BigText,a=t.fn.bigtext,c={DEBUG_MODE:!1,DEFAULT_MIN_FONT_SIZE_PX:null,DEFAULT_MAX_FONT_SIZE_PX:528,GLOBAL_STYLE_ID:"bigtext-style",STYLE_ID:"bigtext-id",LINE_CLASS_PREFIX:"bigtext-line",EXEMPT_CLASS:"bigtext-exempt",noConflict:function(i){return i&&(t.fn.bigtext=a,e.BigText=o),c},supports:{wholeNumberFontSizeOnly:function(){if(!("getComputedStyle"in e))return!0;var i=t("<div/>").css({position:"absolute","font-size":"14.1px"}).insertBefore(t("script").eq(0)),n=e.getComputedStyle(i[0],null),s=n&&"14px"===n.getPropertyValue("font-size");return i.remove(),s}()},init:function(){t("#"+c.GLOBAL_STYLE_ID).length||r.append(c.generateStyleTag(c.GLOBAL_STYLE_ID,[".bigtext * { white-space: nowrap; } .bigtext > * { display: block; }",".bigtext ."+c.EXEMPT_CLASS+", .bigtext ."+c.EXEMPT_CLASS+" * { white-space: normal; }"]))},bindResize:function(i,n){var s;t(e).unbind(i).bind(i,function(){s&&clearTimeout(s),s=setTimeout(n,100)})},getStyleId:function(e){return c.STYLE_ID+"-"+e},generateStyleTag:function(e,i){return t("<style>"+i.join("\n")+"</style>").attr("id",e)},clearCss:function(e){var i=c.getStyleId(e);t("#"+i).remove()},generateCss:function(e,t,i,n){var s=[];c.clearCss(e);for(var r=0,o=t.length;o>r;r++)s.push("#"+e+" ."+c.LINE_CLASS_PREFIX+r+" {"+(n[r]?" white-space: normal;":"")+(t[r]?" font-size: "+t[r]+"px;":"")+(i[r]?" word-spacing: "+i[r]+"px;":"")+"}");return c.generateStyleTag(c.getStyleId(e),s)},jQueryMethod:function(e){return c.init(),e=t.extend({minfontsize:c.DEFAULT_MIN_FONT_SIZE_PX,maxfontsize:c.DEFAULT_MAX_FONT_SIZE_PX,childSelector:"",resize:!0},e||{}),this.each(function(){var i=t(this).addClass("bigtext"),o=i.width(),a=i.attr("id"),l=e.childSelector?i.find(e.childSelector):i.children();a||(a="bigtext-id"+s++,i.attr("id",a)),e.resize&&c.bindResize("resize.bigtext-event-"+a,function(){c.jQueryMethod.call(t("#"+a),e)}),c.clearCss(a),l.addClass(function(e,t){return[t.replace(new RegExp("\\b"+c.LINE_CLASS_PREFIX+"\\d+\\b"),""),c.LINE_CLASS_PREFIX+e].join(" ")});var u=n(i,l,o,e.maxfontsize,e.minfontsize);r.append(c.generateCss(a,u.fontSizes,u.wordSpacings,u.minFontSizes))}),this.trigger("bigtext:complete")}};t.fn.bigtext=c.jQueryMethod,e.BigText=c}(this,jQuery);

/*!
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work? 
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
!function(e){"use strict";var n,t,i=e.event;n=i.special.debouncedresize={setup:function(){e(this).on("resize",n.handler)},teardown:function(){e(this).off("resize",n.handler)},handler:function(e,r){var o=this,s=arguments,u=function(){e.type="debouncedresize",i.dispatch.apply(o,s)};t&&clearTimeout(t),r?u():t=setTimeout(u,n.threshold)},threshold:150}}(jQuery);