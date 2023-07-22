"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{135:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(439),a=n(474),c=n(791),s=n(689),i=n(87),o=n(228),u=n(352),l="MovieDetails_button__uXZxd",d="MovieDetails_wrapper__YMWLn",f="MovieDetails_poster__yO7gD",p="MovieDetails_leftSide__bCB-+",m="MovieDetails_rightSide__rGGPq",v="MovieDetails_additionalInfoWrapper__URkTY",h="MovieDetails_additionalInformation__GkKou",x="MovieDetails_additionalInformationList__afd1o",b="MovieDetails_additionalInfoListWrapper__kxx4v",j="MovieDetails_link__U+v+7",A=n(184),_=function(){var e,t,n=(0,s.s0)(),_=(0,s.TH)(),g=(0,s.UO)().movieId,N=null!==(e=null===(t=_.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",W=(0,c.useState)({}),k=(0,r.Z)(W,2),z=k[0],w=k[1],Z=z.title,Y=z.overview,y=z.vote_average,M=z.genres,V=z.poster_path;return(0,c.useEffect)((function(){(0,o.BG)(g,w).catch(console.error)}),[g]),(0,A.jsxs)("section",{children:[(0,A.jsx)("button",{className:l,onClick:function(){return n(N,{replace:!0})},children:"Go back"}),(0,A.jsxs)("div",{className:d,children:[(0,A.jsx)("div",{className:p,children:V?(0,A.jsx)("img",{className:f,src:"https://image.tmdb.org/t/p/w500".concat(V),alt:Z}):(0,A.jsx)("img",{className:f,src:u,alt:"Placeholder"})}),(0,A.jsxs)("div",{className:m,children:[(0,A.jsx)("h1",{children:Z}),(0,A.jsxs)("p",{children:["User Score: ",(10*y).toFixed(0),"%"]}),(0,A.jsx)("h2",{children:"Overview"}),(0,A.jsx)("p",{children:Y}),(0,A.jsx)("h2",{children:"Genres"}),(0,A.jsx)("p",{children:null===M||void 0===M?void 0:M.map((function(e){return e.name+", "}))})]})]}),(0,A.jsxs)("div",{className:v,children:[(0,A.jsx)("h3",{className:h,children:"Additional information"}),(0,A.jsxs)("ul",{className:b,children:[(0,A.jsx)("li",{className:x,children:(0,A.jsx)(i.OL,{className:j,to:"cast",state:_.state,children:"Cast"})}),(0,A.jsx)("li",{className:x,children:(0,A.jsx)(i.OL,{className:j,to:"reviews",state:_.state,children:"Reviews"})})]}),(0,A.jsx)(c.Suspense,{fallback:(0,A.jsx)(a.Z,{}),children:(0,A.jsx)(s.j3,{})})]})]})}},228:function(e,t,n){n.d(t,{BG:function(){return d},Bt:function(){return p},LI:function(){return l},wr:function(){return u},y:function(){return f}});var r=n(861),a=n(757),c=n.n(a),s=n(243),i="ef7bbc65cde0a77a652ac5d100215648",o="https://api.themoviedb.org/3/",u=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"trending/movie/day?api_key=").concat(i));case 3:return n=e.sent,e.abrupt("return",t(n.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(t,"&page=1&include_adult=true"));case 3:return r=e.sent,a=r.data.results,e.abrupt("return",n(a));case 8:e.prev=8,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",n(r.data));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",n(r.data.cast));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",n(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log("".concat(e.t0.name,": ").concat(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()},352:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAACzCAIAAAAi6yTMAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAzlJREFUeJzt3cFq6kAYQOH0EkEhAV34/o/nMoEJKJjFXQh30ZsZU2c8OvZ8Sysxcwhp4m/t1+l0aoT48+od+EVszbE1x9YcW3NszbE1x9YcW3NszbE1x9acduXzxnG8Xq9P3ZWqbTab/X6ffs6q49rQd12v13Ec089Z1drQa9yt5PmaY2uOrTmrrkPmeX72fvwGHtccW3NszVl737hot9t1Xde23zcyz/M0TefzOWfjL1d8dVnH9eKuNE3Ttm3XdTlbfgfFV5fVenFX7v6oFsVX5/maY2uOrTm25tiak9U68T7JB7yFUnx1Wa2naVp81dvVfs6W30Hx1WVdBZ/P59pvDhOKr87zNcfWHFtzbM2xNcfWHFtzbM1xBhblDIzjDIzjDKxitubYmmNrjq05zsCinIFxnIFxnIFVzNYcW3NszbE1x9YcW3NszbE1x9YcZ7tRznY5znY5xVf3xO+0+IC3sBMeWJ2/Gzm25tiaY2uOs90oZ7uc95rthhBCCDlbeGfFV+f5mmNrjq05tubYmmNrjq05tubYmpN139j3fWIiV/stZfHVOW+Mct7I8W9JK2Zrjq05tubYmuO8Mcp5I8d5I8d5Y8VszbE1x9YcW3NszbE1x9YcW3Oy7hu32+3hcFicyA3DcLlccjb+csVXl3VcL+5K0zRt2x4Oh5wtv4Piq3PeGOW8sWK25tiaY2uOrTnOG6OKry7rexaGYej7frvdfnv8crmEEGrPXXx1WVfB0zR9wAw3pvjqPF9zbM2xNcfWHFtzbM2xNcfWHFtzsu4bu65L3MXWfktZfHW5f0v6/640TXN7sPbWxVeXdQ5Z3JW7P6pF8dV5vubYmmNrjq05tuZktU58pq32D/M1yaHiY6vLah1CWHzV29V+zpbfQewDkg+vznljlPPGitmaY2uOrTm25tiaY2uOrTm25tia42w3ytkux9kux9luxWzNsTXH1hxbc5ztRjnb5Tjb5TjbrZitObbm2JqT9Z0W+hGPa46tS0qfAFa1/oB/WgeI/V+8f1a1Ph6P5k7ruu54PKaf83U6nZi9kedrjq05tubYmmNrjq05tubYmmNrjq05tubYmmNrjq05fwGcoQnTWwlgjwAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=135.87fbd8e9.chunk.js.map