(this["webpackJsonpremote-faces-web"]=this["webpackJsonpremote-faces-web"]||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},18:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=18},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),o=n.n(c),u=(n(16),n(1)),i=n.n(u),s=n(2),l=n(3),f=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r,a,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new TextEncoder,r=n.encode(t),e.next=4,crypto.subtle.digest("SHA-256",r);case 4:return a=e.sent,c=Array.from(new Uint8Array(a)),o=c.map((function(e){return e.toString(16).padStart(2,"0")})).join(""),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=n(10),p=n(9),d=n(8),v=n.n(d),b=function(e){return new Promise((function(t){return setTimeout(t,e)}))},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return!1;var n=e.peerConnection;if(!n)return!1;var r=n.connectionState;return"connected"===r||(!(t||"connecting"!==r&&"new"!==r)||!r&&"stable"===n.signalingState)},E=function(e){return Object.keys(e.connections).filter((function(t){return e.connections[t].some((function(e){return g(e,!0)}))}))},h=function(e){return Number(e.split("_")[1])<5},y=function e(t,n,r){r({type:"INITIALIZING_PEER",index:t});var a=t<5?t:1e3+Math.floor(9e3*Math.random()),c="".concat(n,"_").concat(a);console.log("createMyPeer",t,c);var o=new v.a(c);return new Promise((function(a){o.on("open",(function(){a(o)})),o.on("error",(function(c){"unavailable-id"===c.type?(o.destroy(),e(t+1,n,r).then(a)):"peer-unavailable"===c.type||("network"===c.type?(console.log("createMyPeer network error",c),r({type:"NETWORK_ERROR"})):(console.error("createMyPeer",c.type,c),r({type:"UNKNOWN_ERROR"})))}))}))},w=function(e,t,n){var r=null,a=null,c=function(e){if(r){var n=E(r).map((function(e){return Number(e.split("_")[1])})).filter((function(t){return t!==e}));t({type:"CONNECTED_PEERS",peerIds:n})}},o=function(e){if(r&&r.id!==e){var t=r.connections[e];if(!(t&&t.some(g))){console.log("connectPeer",e,t&&t.map((function(e){return e.peerConnection&&e.peerConnection.connectionState})));var n=r.connect(e,{serialization:"json"});u(n)}}},u=function(t){t.on("open",(function(){c(),r&&a&&t.send({data:a,peers:E(r)})})),t.on("data",(function(r){return function(t,r){try{var a=Number(t.peer.split("_")[1]);r&&"object"===typeof r&&(n(a,r.data),Array.isArray(r.peers)&&r.peers.forEach((function(t){"string"===typeof t&&t.startsWith("".concat(e,"_"))&&o(t)})))}catch(c){console.error("handlePayload",c)}}(t,r)})),t.on("close",Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("dataConnection closed",t),c(Number(t.peer.split("_")[1])),h(t.peer)&&f(t.peer);case 3:case"end":return e.stop()}}),e)})))),t.on("error",function(){var e=Object(s.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.error("dataConnection error",t,n),c(Number(t.peer.split("_")[1])),h(t.peer)&&f(t.peer);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},l=function(){var n=Object(s.a)(i.a.mark((function n(){var a,c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,y(0,e,t);case 4:for((r=n.sent).on("connection",(function(e){console.log("new connection received",e);var n=Number(e.peer.split("_")[1]);t({type:"NEW_CONNECTION",peerId:n}),u(e)})),t({type:"CONNECTING_SEED_PEERS"}),a=0;a<5;a+=1)c="".concat(e,"_").concat(a),o(c);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();l();var f=function(){var t=Object(s.a)(i.a.mark((function t(n){var a,o,u,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:if(!h(r.id)){t.next=4;break}return t.abrupt("return");case 4:return a=30+Math.floor(60*Math.random()),console.log("Disconnected seed peer: "+n.split("_")[1]+", reinit in "+a+"sec..."),t.next=8,b(1e3*a);case 8:if(r){t.next=10;break}return t.abrupt("return");case 10:if(!h(r.id)){t.next=12;break}return t.abrupt("return");case 12:for(o=!0,u=0;u<5;u+=1)s="".concat(e,"_").concat(u),(r.connections[s]||[]).some(g)||(o=!1);if(!o){t.next=17;break}return c(),t.abrupt("return");case 17:r.destroy(),r=null,l();case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{broadcastData:function(e){a=e,r&&Object.keys(r.connections).forEach((function(t){if(r){var n=E(r);r.connections[t].forEach((function(t){if(t.open)try{t.send({data:e,peers:n})}catch(r){console.error("broadcastData",r)}}))}}))},dispose:function(){r&&r.destroy()}}},O=function(){var e=Object(s.a)(i.a.mark((function e(t,n){var r,a,c,o,u,s,l,f,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof ImageCapture){e.next=21;break}return r=new ImageCapture(n),e.next=4,b(2e3);case 4:return e.prev=4,e.next=7,r.takePhoto();case 7:return c=e.sent,e.next=10,createImageBitmap(c);case 10:a=e.sent,e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(4),e.next=17,r.grabFrame();case 17:a=e.sent;case 18:return o=a.width,u=a.height,e.abrupt("return",{srcImg:a,srcW:o,srcH:u});case 21:return(s=document.getElementById("internal-video")).style.display="block",s.srcObject=t,e.next=26,b(2e3);case 26:return l=s,f=s.videoWidth,m=s.videoHeight,e.abrupt("return",{srcImg:l,srcW:f,srcH:m});case 30:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,r,a,c,o,u,s,l,f,m,p,d,v,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0});case 2:return t=e.sent,n=t.getVideoTracks()[0],r=document.getElementById("internal-canvas"),a=r.getContext("2d"),c=r.width=72,o=r.height=72,e.next=10,O(t,n);case 10:return u=e.sent,s=u.srcImg,l=u.srcW,f=u.srcH,m=Math.max(c/l,o/f),p=Math.min(l,c/m),d=Math.min(f,o/m),v=(l-p)/2,b=(f-d)/2,a.drawImage(s,v,b,p,d,0,0,c,o),n.stop(),e.abrupt("return",r.toDataURL("image/png"));case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(e){var t=e.roomId,n=e.userId,c=e.nickname,o=Object(r.useRef)(""),u=function(e,t,n){var a=Object(r.useState)(),c=Object(l.a)(a,2),o=c[0],u=c[1],f=Object(r.useState)([]),d=Object(l.a)(f,2),v=d[0],b=d[1],g=Object(r.useState)(),E=Object(l.a)(g,2),h=E[0],y=E[1];return Object(r.useEffect)((function(){var r=w(e,y,(function(e,t){if(t&&"object"===typeof t&&"string"===typeof t.userId&&"string"===typeof t.image&&((r=t.info)&&"object"===typeof r&&"string"===typeof r.nickname&&"string"===typeof r.message)){var n={userId:t.userId,image:t.image,info:t.info,received:Date.now(),obsoleted:!1};b((function(e){var t=!1,r=e.map((function(e){return e.userId===n.userId?(t=!0,n):e}));return t?r:[].concat(Object(p.a)(e),[n])}))}var r})),a=r.broadcastData,c=r.dispose,o=function(){var e=Date.now()-12e4;b((function(t){var n=!1,r=t.map((function(t){return t.received<e&&!t.obsoleted?(n=!0,Object(m.a)({},t,{obsoleted:!0})):t}));return n?r:t}))},l=function(){var e=Object(s.a)(i.a.mark((function e(){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(),e.next=4,k();case 4:r=e.sent,u(r),c={userId:t,image:r,info:n()},a(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();l();var f=setInterval(l,12e4);return function(){c(),clearTimeout(f)}}),[e,t,n]),{myImage:o,roomImages:v,networkStatus:h}}(t,n,Object(r.useCallback)((function(){return{nickname:c,message:o.current}}),[c])),f=u.myImage,d=u.roomImages,v=u.networkStatus;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"status"},JSON.stringify(v)),a.a.createElement("div",null,a.a.createElement("div",{className:"card"},a.a.createElement("img",{src:f||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=",className:"photo",alt:"myself"}),a.a.createElement("div",{className:"name"},c),a.a.createElement("div",{className:"mesg"},a.a.createElement("form",null,a.a.createElement("input",{onChange:function(e){o.current=e.target.value}})))),d.map((function(e){return a.a.createElement("div",{key:e.userId,className:"card",style:{opacity:e.obsoleted?.2:1}},a.a.createElement("img",{src:e.image,className:"photo",alt:"friend"}),a.a.createElement("div",{className:"name"},e.info.nickname),a.a.createElement("div",{className:"mesg"},e.info.message))}))))},N=function(){var e=Object(r.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(),u=Object(l.a)(o,2),m=u[0],p=u[1],d=Object(r.useState)(""),v=Object(l.a)(d,2),b=v[0],g=v[1],E=Object(r.useState)(""),h=Object(l.a)(E,2),y=h[0],w=h[1],O=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.t0=c,e.next=4,f(b);case 4:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=p,e.next=9,f("".concat(b,"_").concat(Date.now()));case 9:e.t3=e.sent,(0,e.t2)(e.t3);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n&&m&&y?a.a.createElement(A,{roomId:n,userId:m,nickname:y}):a.a.createElement("form",{className:"init",onSubmit:O},a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"Room Name:"),a.a.createElement("td",null,a.a.createElement("input",{value:b,onChange:function(e){return g(e.target.value)}}))),a.a.createElement("tr",null,a.a.createElement("td",null,"Your Name:"),a.a.createElement("td",null,a.a.createElement("input",{value:y,onChange:function(e){return w(e.target.value)}}))),a.a.createElement("tr",null,a.a.createElement("td",null),a.a.createElement("td",null,a.a.createElement("input",{type:"submit",value:"Enter",disabled:!b||!y}))))))},I=(n(19),function(){return a.a.createElement("div",{className:"SingleRoomEntrance"},a.a.createElement(N,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.00577093.chunk.js.map