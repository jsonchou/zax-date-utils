!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.zaxDate={})}(this,function(e){"use strict";var t,n,o,T;(t=e.CompareType||(e.CompareType={}))[t.BIGGER=-1]="BIGGER",t[t.EQUAL=0]="EQUAL",t[t.SMALLER=1]="SMALLER",(n=e.OffsetType||(e.OffsetType={})).TIMEZONEOFFSET="timezoneOffset",n.DATE="date",n.FULLYEAR="fullYear",n.MONTH="month",n.HOURS="hours",n.MINUTES="minutes",n.SECONDS="seconds",n.MILLISECONDS="milliseconds",n.TIME="time",n.UTCDate="UTCDate",n.UTCFullYear="UTCFullYear",n.UTCHours="UTCHours",n.UTCMilliseconds="UTCMilliseconds",n.UTCMinutes="UTCMinutes",n.UTCMonth="UTCMonth",n.UTCSeconds="UTCSeconds",function(e){e.SETDATE="setDate",e.SETFULLYEAR="setFullYear",e.SETMONTH="setMonth",e.SETHOURS="setHours",e.SETMINUTES="setMinutes",e.SETSECONDS="setSeconds",e.SETMILLISECONDS="setMilliseconds",e.SETTIME="setTime",e.SETUTCDate="setUTCDate",e.SETUTCFullYear="setUTCFullYear",e.SETUTCHours="setUTCHours",e.SETUTCMilliseconds="setUTCMilliseconds",e.SETUTCMinutes="setUTCMinutes",e.SETUTCMonth="setUTCMonth",e.SETUTCSeconds="setUTCSeconds"}(o||(o={})),function(e){e.GETTIMEZONEOFFSET="getTimezoneOffset",e.GETDATE="getDate",e.GETFULLYEAR="getFullYear",e.GETMONTH="getMonth",e.GETHOURS="getHours",e.GETMINUTES="getMinutes",e.GETSECONDS="getSeconds",e.GETMILLISECONDS="getMilliseconds",e.GETTIME="getTime",e.GETUTCDate="getUTCDate",e.GETUTCFullYear="getUTCFullYear",e.GETUTCHours="getUTCHours",e.GETUTCMilliseconds="getUTCMilliseconds",e.GETUTCMinutes="getUTCMinutes",e.GETUTCMonth="getUTCMonth",e.GETUTCSeconds="getUTCSeconds"}(T||(T={}));var r=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},s=function(e){return"string"==typeof e?e.indexOf("-")>-1?(e=e.replace(/-/g,"/"),new Date(e)):new Date(Number(e)||e):new Date(e)},i={compare:function(t,n){return void 0===n&&(n=new Date),(t=s(t))>(n=s(n))?e.CompareType.SMALLER:t.getTime()==n.getTime()?e.CompareType.EQUAL:e.CompareType.BIGGER},offset:function(t,n,r){void 0===n&&(n=e.OffsetType.DATE),t=s(t);var i=n.charAt(0).toUpperCase()+n.slice(1),a=("get"+i).toUpperCase(),u=("set"+i).toUpperCase(),S=t[T[a]]()+r;return new Date(t[o[u]](S))},get:function(t,n){void 0===n&&(n=e.OffsetType.DATE),t=s(t);var o=("get"+n.charAt(0).toUpperCase()+n.slice(1)).toUpperCase();return t[T[o]]()},ago:function(e){e=s(e);var t=(new Date).getTime()-new Date(e).getTime();return t<6e4?Math.round(t/1e3)+"秒前":t<36e5?Math.round(t/6e4)+"分钟前":t<864e5?Math.round(t/36e5)+"小时前":t<2592e6?Math.round(t/864e5)+"天前":t<31536e6?Math.round(t/2592e6)+"个月前":Math.round(t/31536e6)+"年前"},format:function(e,t){void 0===t&&(t="yyyy-mm-dd HH:MM:SS"),e=s(e);var n=new Date(e),o=r,T=n.getFullYear(),i=n.getMonth(),a=n.getDate(),u=n.getHours(),S=n.getMinutes(),E=n.getSeconds(),M=n.getMilliseconds(),U={yyyy:String(T),m:String(i+1),mm:o(i+1,2),d:String(a),dd:o(a,2),h:String(u%12||12),hh:o(u%12||12),H:String(u),HH:o(u,2),M:String(S),MM:o(S,2),S:String(E),SS:o(E,2),SSS:String(o(M,3))};return t.replace(/([a-z]+)/gi,function(e){return U[e]||e})},diff:function(e,t){void 0===e&&(e=new Date),void 0===t&&(t=new Date);var n=s(e),o=s(t).getTime()-n.getTime(),T=o%864e5,r=T%36e5,i=r%6e4;return{days:Math.floor(o/864e5),hours:Math.floor(T/36e5),minutes:Math.floor(r/6e4),seconds:Math.round(i/1e3)}},age:function(e,t){void 0===t&&(t=!0);var n=new Date(this.format(e,"yyyy-mm-dd HH:MM:SS:SSS")),o=new Date,T=o.getMonth()<n.getMonth()||o.getMonth()===n.getMonth()&&o.getDate()<n.getDate()?1:0;return t||(T=0),o.getFullYear()-n.getFullYear()-T},isLeapYear:function(t){var n=this.get(t,e.OffsetType.FULLYEAR);return n%4==0&&n%100!=0}};e.zaxDate=i,Object.defineProperty(e,"__esModule",{value:!0})});
