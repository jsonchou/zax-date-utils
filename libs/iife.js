var zaxDate=function(e){"use strict";var t,n,T,o;(t=e.CompareType||(e.CompareType={}))[t.BIGGER=-1]="BIGGER",t[t.EQUAL=0]="EQUAL",t[t.SMALLER=1]="SMALLER",(n=e.OffsetType||(e.OffsetType={})).TIMEZONEOFFSET="timezoneOffset",n.DATE="date",n.FULLYEAR="fullYear",n.MONTH="month",n.HOURS="hours",n.MINUTES="minutes",n.SECONDS="seconds",n.MILLISECONDS="milliseconds",n.TIME="time",n.UTCDate="UTCDate",n.UTCFullYear="UTCFullYear",n.UTCHours="UTCHours",n.UTCMilliseconds="UTCMilliseconds",n.UTCMinutes="UTCMinutes",n.UTCMonth="UTCMonth",n.UTCSeconds="UTCSeconds",function(e){e.SETDATE="setDate",e.SETFULLYEAR="setFullYear",e.SETMONTH="setMonth",e.SETHOURS="setHours",e.SETMINUTES="setMinutes",e.SETSECONDS="setSeconds",e.SETMILLISECONDS="setMilliseconds",e.SETTIME="setTime",e.SETUTCDate="setUTCDate",e.SETUTCFullYear="setUTCFullYear",e.SETUTCHours="setUTCHours",e.SETUTCMilliseconds="setUTCMilliseconds",e.SETUTCMinutes="setUTCMinutes",e.SETUTCMonth="setUTCMonth",e.SETUTCSeconds="setUTCSeconds"}(T||(T={})),function(e){e.GETTIMEZONEOFFSET="getTimezoneOffset",e.GETDATE="getDate",e.GETFULLYEAR="getFullYear",e.GETMONTH="getMonth",e.GETHOURS="getHours",e.GETMINUTES="getMinutes",e.GETSECONDS="getSeconds",e.GETMILLISECONDS="getMilliseconds",e.GETTIME="getTime",e.GETUTCDate="getUTCDate",e.GETUTCFullYear="getUTCFullYear",e.GETUTCHours="getUTCHours",e.GETUTCMilliseconds="getUTCMilliseconds",e.GETUTCMinutes="getUTCMinutes",e.GETUTCMonth="getUTCMonth",e.GETUTCSeconds="getUTCSeconds"}(o||(o={}));var r=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},s=function(e){return"string"==typeof e?e.indexOf("-")>-1?(e=e.replace(/-/g,"/"),new Date(e)):new Date(Number(e)||e):new Date(e)},a={compare:function(t,n){return void 0===n&&(n=new Date),(t=s(t))>(n=s(n))?e.CompareType.SMALLER:t.getTime()==n.getTime()?e.CompareType.EQUAL:e.CompareType.BIGGER},offset:function(t,n,r){void 0===n&&(n=e.OffsetType.DATE),t=s(t);var a=n.charAt(0).toUpperCase()+n.slice(1),i=("get"+a).toUpperCase(),u=("set"+a).toUpperCase(),S=t[o[i]]()+r;return new Date(t[T[u]](S))},get:function(t,n){void 0===n&&(n=e.OffsetType.DATE),t=s(t);var T=("get"+n.charAt(0).toUpperCase()+n.slice(1)).toUpperCase();return t[o[T]]()},ago:function(e){e=s(e);var t=(new Date).getTime()-new Date(e).getTime();return t<6e4?Math.round(t/1e3)+"秒前":t<36e5?Math.round(t/6e4)+"分钟前":t<864e5?Math.round(t/36e5)+"小时前":t<2592e6?Math.round(t/864e5)+"天前":t<31536e6?Math.round(t/2592e6)+"个月前":Math.round(t/31536e6)+"年前"},format:function(e,t){void 0===t&&(t="yyyy-mm-dd HH:MM:SS"),e=s(e);var n=new Date(e),T=r,o=n.getFullYear(),a=n.getMonth(),i=n.getDate(),u=n.getHours(),S=n.getMinutes(),E=n.getSeconds(),M=n.getMilliseconds(),U={yyyy:String(o),m:String(a+1),mm:T(a+1,2),d:String(i),dd:T(i,2),h:String(u%12||12),hh:T(u%12||12),H:String(u),HH:T(u,2),M:String(S),MM:T(S,2),S:String(E),SS:T(E,2),SSS:String(T(M,3))};return t.replace(/([a-z]+)/gi,function(e){return U[e]||e})},diff:function(e,t){void 0===e&&(e=new Date),void 0===t&&(t=new Date);var n=s(e),T=s(t).getTime()-n.getTime(),o=T%864e5,r=o%36e5,a=r%6e4;return{days:Math.floor(T/864e5),hours:Math.floor(o/36e5),minutes:Math.floor(r/6e4),seconds:Math.round(a/1e3)}},age:function(e,t){void 0===t&&(t=!0);var n=new Date(this.format(e,"yyyy-mm-dd HH:MM:SS:SSS")),T=new Date,o=T.getMonth()<n.getMonth()||T.getMonth()===n.getMonth()&&T.getDate()<n.getDate()?1:0;return t||(o=0),T.getFullYear()-n.getFullYear()-o},isLeapYear:function(t){var n=this.get(t,e.OffsetType.FULLYEAR);return n%4==0&&n%100!=0}};return e.zaxDate=a,e}({});
