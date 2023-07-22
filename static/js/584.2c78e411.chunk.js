"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[584],{510:function(t,e,r){r.d(e,{Z:function(){return l}});var n=r(689),c=r(87),a=r(352),s="MovieList_movieList__uFrOZ",u="MovieList_movieListItem__6DqRG",o="MovieList_movieImage__txbdB",i="MovieList_movieTitle__RhENm",m="MovieList_movieLink__kzavH",f=r(184),l=function(t){var e=t.movies,r=(0,n.TH)();return(0,f.jsx)("ul",{className:s,children:e.map((function(t){var e=t.title,n=t.id,s=t.poster_path;return(0,f.jsx)("li",{className:u,children:(0,f.jsxs)(c.rU,{className:m,to:"/movies/".concat(n),state:{from:r},children:[s?(0,f.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w500".concat(s),alt:"Poster of ".concat(e)}):(0,f.jsx)("img",{className:o,src:a,alt:"Placeholder"}),(0,f.jsx)("p",{className:i,children:e})]})},n)}))})}},584:function(t,e,r){r.r(e),r.d(e,{default:function(){return b}});var n=r(439),c=r(510),a=r(984),s="Searchbar_form__D-hp5",u="Searchbar_wrapper__GBjqw",o="Searchbar_input__19umw",i="Searchbar_button__nkcjk",m=r(184),f=function(t){var e=t.onSubmit;return(0,m.jsx)("form",{className:s,onSubmit:function(t){return e(t)},children:(0,m.jsxs)("div",{className:u,children:[(0,m.jsx)("input",{className:o,type:"text",name:"query"},(0,a.x0)()),(0,m.jsx)("button",{className:i,type:"submit",children:"Search"})]})})},l=r(791),p=r(689),v=r(87),d=r(228),h="Movies_wrapper__RVmCE",b=function(){var t,e=(0,p.UO)(),r=(0,l.useState)([]),a=(0,n.Z)(r,2),s=a[0],u=a[1],o=(0,l.useState)(""),i=(0,n.Z)(o,2),b=i[0],x=i[1],A=(0,v.lr)(),g=(0,n.Z)(A,2),j=g[0],_=g[1],N=null!==(t=j.get("query"))&&void 0!==t?t:"";return(0,l.useEffect)((function(){N&&(0,d.LI)(N,u).catch(console.error)}),[N]),(0,m.jsx)("main",{className:h,children:e.movieId?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(p.j3,{})}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f,{onSubmit:function(t){t.preventDefault();var e=t.currentTarget,r=e.elements.query.value;if(""===r)return x("The search field cannot be empty!");_({query:r}),x(""),e.reset()}}),b?(0,m.jsx)("div",{children:b}):(0,m.jsx)(c.Z,{movies:s})]})})}},228:function(t,e,r){r.d(e,{BG:function(){return f},Bt:function(){return p},LI:function(){return m},wr:function(){return i},y:function(){return l}});var n=r(861),c=r(757),a=r.n(c),s=r(243),u="ef7bbc65cde0a77a652ac5d100215648",o="https://api.themoviedb.org/3/",i=function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(o,"trending/movie/day?api_key=").concat(u));case 3:return r=t.sent,t.abrupt("return",e(r.data.results));case 7:t.prev=7,t.t0=t.catch(0),console.log("".concat(t.t0.name,": ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,n.Z)(a().mark((function t(e,r){var n,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(o,"search/movie?api_key=").concat(u,"&query=").concat(e,"&page=1&include_adult=true"));case 3:return n=t.sent,c=n.data.results,t.abrupt("return",r(c));case 8:t.prev=8,t.t0=t.catch(0),console.log("".concat(t.t0.name,": ").concat(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(u));case 3:return n=t.sent,t.abrupt("return",r(n.data));case 7:t.prev=7,t.t0=t.catch(0),console.log("".concat(t.t0.name,": ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(u));case 3:return n=t.sent,t.abrupt("return",r(n.data.cast));case 7:t.prev=7,t.t0=t.catch(0),console.log("".concat(t.t0.name,": ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(u));case 3:return n=t.sent,t.abrupt("return",r(n.data.results));case 7:t.prev=7,t.t0=t.catch(0),console.log("".concat(t.t0.name,": ").concat(t.t0.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}()},352:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAACzCAIAAAAi6yTMAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAzlJREFUeJzt3cFq6kAYQOH0EkEhAV34/o/nMoEJKJjFXQh30ZsZU2c8OvZ8Sysxcwhp4m/t1+l0aoT48+od+EVszbE1x9YcW3NszbE1x9YcW3NszbE1x9acduXzxnG8Xq9P3ZWqbTab/X6ffs6q49rQd12v13Ec089Z1drQa9yt5PmaY2uOrTmrrkPmeX72fvwGHtccW3NszVl737hot9t1Xde23zcyz/M0TefzOWfjL1d8dVnH9eKuNE3Ttm3XdTlbfgfFV5fVenFX7v6oFsVX5/maY2uOrTm25tiak9U68T7JB7yFUnx1Wa2naVp81dvVfs6W30Hx1WVdBZ/P59pvDhOKr87zNcfWHFtzbM2xNcfWHFtzbM1xBhblDIzjDIzjDKxitubYmmNrjq05zsCinIFxnIFxnIFVzNYcW3NszbE1x9YcW3NszbE1x9YcZ7tRznY5znY5xVf3xO+0+IC3sBMeWJ2/Gzm25tiaY2uOs90oZ7uc95rthhBCCDlbeGfFV+f5mmNrjq05tubYmmNrjq05tubYmpN139j3fWIiV/stZfHVOW+Mct7I8W9JK2Zrjq05tubYmuO8Mcp5I8d5I8d5Y8VszbE1x9YcW3NszbE1x9YcW3Oy7hu32+3hcFicyA3DcLlccjb+csVXl3VcL+5K0zRt2x4Oh5wtv4Piq3PeGOW8sWK25tiaY2uOrTnOG6OKry7rexaGYej7frvdfnv8crmEEGrPXXx1WVfB0zR9wAw3pvjqPF9zbM2xNcfWHFtzbM2xNcfWHFtzsu4bu65L3MXWfktZfHW5f0v6/640TXN7sPbWxVeXdQ5Z3JW7P6pF8dV5vubYmmNrjq05tuZktU58pq32D/M1yaHiY6vLah1CWHzV29V+zpbfQewDkg+vznljlPPGitmaY2uOrTm25tiaY2uOrTm25tia42w3ytkux9kux9luxWzNsTXH1hxbc5ztRjnb5Tjb5TjbrZitObbm2JqT9Z0W+hGPa46tS0qfAFa1/oB/WgeI/V+8f1a1Ph6P5k7ruu54PKaf83U6nZi9kedrjq05tubYmmNrjq05tubYmmNrjq05tubYmmNrjq05fwGcoQnTWwlgjwAAAABJRU5ErkJggg=="},984:function(t,e,r){r.d(e,{x0:function(){return n}});var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=584.2c78e411.chunk.js.map