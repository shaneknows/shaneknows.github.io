(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{2:function(e){e.exports={siteTitle:"shaneknows",description:"Let's talk code.",stylesheets:["https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css"],topLinks:[{text:"Blog",href:"/"},{text:"Naifu",href:"https://shaneknows.github.io/Naifu"},{text:"React Demo",href:"https://shaneknows.github.io/ReactDemo"},{text:"Github",href:"https://github.com/shaneknows/"}],backgroundClass:"bg-dark-gray",copyright:"Shane Knowles",siteId:"",bodyContent:"",bodyHtml:"",dir:"content",base:"index.json",ext:".json",sourceBase:"index.md",sourceExt:".md"}},224:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(261),{page:e.exports.default}})},261:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(42),i=n(55),o=n(56);var c=n(2),l=n(40);t.default=function(e){return s.a.createElement("div",null,s.a.createElement(r.a,{siteTitle:"".concat(c.siteTitle," - Index"),heroTitle:c.siteTitle,description:c.description,stylesheets:c.stylesheets,topLinks:c.topLinks,backgroundClass:c.backgroundClass,body:function(e){var t,n=(t=e.summaryJson)&&t.fileMap&&Object.keys(t.fileMap).filter(function(e){if(0===e.indexOf("content/posts"))return!0}).map(function(e){return t.fileMap[e]}).sort(function(e,t){var n=Date.parse(e.date),a=Date.parse(t.date);return a>n?1:a<n?-1:0});return s.a.createElement("div",{className:"center mw6 pa3 pa4-ns"},n.map(function(e,t){var n=function(e){return"".concat(e.dir.split("content").join(""),"/").concat(e.base.split(".json").join(""))}(e),a=Object(o.a)(e.date);return s.a.createElement(i.a,{title:e.title,preview:e.preview,date:a,href:n,key:t})}))}({summaryJson:l}),copyright:c.copyright,siteId:c.siteId}))}},40:function(e){e.exports={fileMap:{"content/posts/2015-4-25-MatchUpTackr.json":{title:"MatchUpTrackr",date:"2015-04-25T00:00:00.000Z",preview:"It has been quite some time. I'm starting a new mobile app to track match up statistics for any type of",dir:"content/posts",base:"2015-4-25-MatchUpTackr.json",ext:".json",sourceBase:"2015-4-25-MatchUpTackr.md",sourceExt:".md"},"content/posts/2014-6-3-Hello-Jekyll.json":{title:"Hello, Jekyll",date:"2014-06-03T00:00:00.000Z",preview:"Hey there! I'm still working out learning all this Jekyll stuff, but I hope to get this blog up and running",dir:"content/posts",base:"2014-6-3-Hello-Jekyll.json",ext:".json",sourceBase:"2014-6-3-Hello-Jekyll.md",sourceExt:".md"},"content/index.json":{siteTitle:"shaneknows",description:"Let's talk code.",stylesheets:["https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css"],topLinks:[{text:"Blog",href:"/"},{text:"Naifu",href:"https://shaneknows.github.io/Naifu"},{text:"React Demo",href:"https://shaneknows.github.io/ReactDemo"},{text:"Github",href:"https://github.com/shaneknows/"}],backgroundClass:"bg-dark-gray",copyright:"Shane Knowles",siteId:"",dir:"content",base:"index.json",ext:".json",sourceBase:"index.md",sourceExt:".md"},"content/posts/2017-5-8-ReactUnityGithubPages.json":{title:"React <3 Unity <3 Github Pages",date:"2017-05-08T00:00:00.000Z",preview:"Recently I have been tinkering with React and really digging how easy it is to get up and running using the",dir:"content/posts",base:"2017-5-8-ReactUnityGithubPages.json",ext:".json",sourceBase:"2017-5-8-ReactUnityGithubPages.md",sourceExt:".md"}},sourceFileArray:["content/index.md","content/posts/2014-6-3-Hello-Jekyll.md","content/posts/2015-4-25-MatchUpTackr.md","content/posts/2017-5-8-ReactUnityGithubPages.md"]}},41:function(e,t,n){e.exports=n(82)},42:function(e,t,n){"use strict";var a=n(0),s=n.n(a),r=(n(4),n(41)),i=n.n(r);var o=function(e){return s.a.createElement(i.a,null,s.a.createElement("title",null,e.siteTitle),s.a.createElement("meta",{name:"description",content:e.description}),s.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.stylesheets&&e.stylesheets.length>0&&e.stylesheets.map(function(e,t){return s.a.createElement("link",{key:t,rel:"stylesheet",href:e})}),s.a.createElement("style",null,"\n          body {\n            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\n          }\n      "))},c=n(11),l=n.n(c);function u(e){return s.a.createElement("div",{className:"relative tc ".concat(e.backgroundClass)},s.a.createElement("div",{className:"mw7 center white pv4"},s.a.createElement("div",{className:"pv4"},s.a.createElement("h1",{className:"f1 normal lh-title ma0 pa0"},s.a.createElement(l.a,{prefetch:!0,href:"/"},s.a.createElement("a",{className:"white no-underline",href:"/"},e.heroTitle))),s.a.createElement("h4",{className:"normal o-70 ma0 pt2 pb3 ph1"},e.subtitle),s.a.createElement("div",null,e.topLinks&&e.topLinks.length>0&&e.topLinks.map(function(e,t){return s.a.createElement(l.a,{href:e.href,key:t},s.a.createElement("a",{className:"dib f6 white no-underline pa1 ma1",key:t},e.text))})))))}u.defaultProps={backgroundClass:"bg-mid-gray",topLinks:[],heroTitle:"",subtitle:""};var m=u;var p=function(e){var t=new Date;return s.a.createElement("footer",{className:"center w5 f6 tc mt4"},s.a.createElement("p",null,s.a.createElement("span",null,"© "),s.a.createElement("span",null,t.getFullYear()," "),s.a.createElement("span",null,e.copyright)))};var h=function(e){return s.a.createElement("div",null,s.a.createElement("script",{dangerouslySetInnerHTML:{__html:(t=e.siteId,"\n  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\n  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\n  e=o.createElement(i);r=o.getElementsByTagName(i)[0];\n  e.src='https://www.google-analytics.com/analytics.js';\n  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));\n  ga('create','".concat(t,"','auto');ga('send','pageview');\n"))}}));var t};function d(e){return s.a.createElement("div",null,s.a.createElement(o,{siteTitle:e.siteTitle,description:e.description,stylesheets:e.stylesheets}),s.a.createElement("main",{className:"lh-copy"},s.a.createElement(m,{heroTitle:e.heroTitle,subtitle:e.description,topLinks:e.topLinks,backgroundClass:e.backgroundClass}),e.body,s.a.createElement(p,{copyright:e.copyright}),e.siteId&&s.a.createElement(h,{siteId:e.siteId})))}d.defaultProps={heroTitle:"",description:"",stylesheets:["https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"],backgroundClass:"bg-dark-gray"};t.a=d},55:function(e,t,n){"use strict";var a=n(0),s=n.n(a),r=(n(4),n(11)),i=n.n(r);function o(e){return s.a.createElement(i.a,{href:"post?fullUrl=".concat(e.href),as:"".concat("https://shaneknows.github.io/next-blog/").concat(e.href)},s.a.createElement("a",{className:"b black o-80 glow no-underline lh-solid ".concat(e.className)},e.children))}t.a=function(e){return s.a.createElement("div",{className:"mb4 pb2 bb b--light-gray"},s.a.createElement(o,{href:e.href,className:"f3"},e.title),e.preview&&s.a.createElement("p",{className:"mv1 o-60"},e.preview,s.a.createElement(o,{href:e.href},s.a.createElement("span",null," »"))),e.date&&s.a.createElement("small",{className:"db ttu o-40"},s.a.createElement("time",{key:new Date(e.date).toISOString()},e.date)))}},56:function(e,t,n){"use strict";function a(e){return new Date(e).toUTCString().split(" ").slice(1,4).join(" ")}n.d(t,"a",function(){return a})}},[[224,1,0]]]);