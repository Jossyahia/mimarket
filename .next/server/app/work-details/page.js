(()=>{var e={};e.id=466,e.ids=[466],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},1846:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>h,pages:()=>d,routeModule:()=>u,tree:()=>c});var t=r(67096),a=r(16132),i=r(37284),o=r.n(i),l=r(32564),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);r.d(s,n);let c=["",{children:["work-details",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,43020)),"C:\\Users\\HP\\Desktop\\mimarket\\app\\work-details\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5839)),"C:\\Users\\HP\\Desktop\\mimarket\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\HP\\Desktop\\mimarket\\app\\work-details\\page.jsx"],h="/work-details/page",x={require:r,loadChunk:()=>Promise.resolve()},u=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/work-details/page",pathname:"/work-details",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},29548:(e,s,r)=>{Promise.resolve().then(r.bind(r,93226))},81758:(e,s,r)=>{Promise.resolve().then(r.bind(r,3966))},10609:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,53579,23)),Promise.resolve().then(r.t.bind(r,30619,23)),Promise.resolve().then(r.t.bind(r,81459,23)),Promise.resolve().then(r.t.bind(r,13456,23)),Promise.resolve().then(r.t.bind(r,50847,23)),Promise.resolve().then(r.t.bind(r,57303,23))},93226:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>j});var t=r(53854);r(90313);var a=r(51018),i=r(34218),o=r(89538),l=r(47658),n=r(14405);let c=(0,n.Z)((0,t.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");var d=r(5237),h=r(69965),x=r(53054),u=r(37295),p=r(55987),m=r(66609);let j=()=>{let[e,s]=(0,i.useState)(!0),[r,n]=(0,i.useState)({}),j=(0,a.useSearchParams)(),v=j.get("id");(0,i.useEffect)(()=>{let e=async()=>{let e=await fetch(`api/work/${v}`,{method:"GET"}),r=await e.json();n(r),s(!1)};v&&e()},[v]);let{data:g,update:k}=(0,m.useSession)(),P=g?.user?._id,[f,w]=(0,i.useState)(0),y=()=>{w(e=>(e+1)%r.workPhotoPaths.length)},b=()=>{w(e=>(e-1+r.workPhotoPaths.length)%r.workPhotoPaths.length)},[C,_]=(0,i.useState)(5),[S,N]=(0,i.useState)(0),Z=e=>{N(e),w(e)},q=(0,a.useRouter)(),M=g?.user?.wishlist,z=M?.find(e=>e?._id===r._id),A=async()=>{let e=await fetch(`api/user/${P}/wishlist/${r._id}`,{method:"PATCH"}),s=await e.json();k({user:{wishlist:s.wishlist}})},$=g?.user?.cart,D=$?.find(e=>e?.workId===v),E=async()=>{let e={workId:v,image:r.workPhotoPaths[0],title:r.title,category:r.category,creator:r.creator,price:r.price,quantity:1};if(D){confirm("This item is already in your cart");return}{let s=[...$,e];try{await fetch(`/api/user/${P}/cart`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:s})}),k({user:{cart:s}})}catch(e){console.log(e)}}};return console.log(g?.user?.cart),e?t.jsx(o.Z,{}):(0,t.jsxs)(t.Fragment,{children:[t.jsx(l.default,{}),(0,t.jsxs)("div",{className:"work-details",children:[(0,t.jsxs)("div",{className:"title",children:[t.jsx("h1",{children:r.title}),r?.creator?._id===P?(0,t.jsxs)("div",{className:"save",onClick:()=>{q.push(`/update-work?id=${v}`)},children:[t.jsx(c,{}),t.jsx("p",{children:"Edit"})]}):(0,t.jsxs)("div",{className:"save",onClick:A,children:[z?t.jsx(d.Z,{sx:{color:"red"}}):t.jsx(h.Z,{}),t.jsx("p",{children:"Save"})]})]}),t.jsx("div",{className:"slider-container",children:t.jsx("div",{className:"slider",style:{transform:`translateX(-${100*f}%)`},children:r.workPhotoPaths?.map((e,s)=>t.jsxs("div",{className:"slide",children:[t.jsx("img",{src:e,alt:"work"}),t.jsx("div",{className:"prev-button",onClick:e=>b(e),children:t.jsx(x.Z,{sx:{fontSize:"15px"}})}),t.jsx("div",{className:"next-button",onClick:e=>y(e),children:t.jsx(u.Z,{sx:{fontSize:"15px"}})})]},s))})}),(0,t.jsxs)("div",{className:"photos",children:[r.workPhotoPaths?.slice(0,C).map((e,s)=>t.jsx("img",{src:e,alt:"work-demo",onClick:()=>Z(s),className:S===s?"selected":""},s)),C<r.workPhotoPaths.length&&(0,t.jsxs)("div",{className:"show-more",onClick:()=>{_(r.workPhotoPaths.length)},children:[t.jsx(u.Z,{sx:{fontSize:"40px"}}),"Show More"]})]}),t.jsx("hr",{}),(0,t.jsxs)("div",{className:"profile",children:[t.jsx("img",{src:r.creator.profileImagePath,alt:"profile",onClick:()=>q.push(`/shop?id=${r.creator._id}`)}),(0,t.jsxs)("h3",{children:["Created by ",r.creator.username]})]}),t.jsx("hr",{}),t.jsx("h3",{children:"About this product"}),t.jsx("p",{children:r.description}),(0,t.jsxs)("h1",{children:["#",r.price]}),(0,t.jsxs)("button",{type:"submit",onClick:E,children:[t.jsx(p.Z,{}),"ADD TO CART"]})]})]})}},89538:(e,s,r)=>{"use strict";r.d(s,{Z:()=>a});var t=r(53854);r(3796);let a=()=>t.jsx("div",{className:"loader",children:t.jsx("div",{className:"loader-inner"})})},47658:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>j});var t=r(53854);r(23219);var a=r(78725),i=r(55987),o=r(30339),l=r(70124),n=r(59632),c=r.n(n),d=r(66609),h=r(75548),x=r.n(h),u=r(34218),p=r(51018);r(7164);let m=()=>(0,t.jsxs)("div",{className:"logo-holder logo-3",children:[t.jsx("h2",{children:"Mimarket"}),t.jsx("p",{children:"Delivering Dreams"})]}),j=()=>{let{data:e}=(0,d.useSession)(),s=e?.user,[r,n]=(0,u.useState)(!1),h=async()=>{(0,d.signOut)({callbackUrl:"/"})},[j,v]=(0,u.useState)(""),g=(0,p.useRouter)(),k=async()=>{g.push(`/search/${j}`)},P=s?.cart;return(0,t.jsxs)("div",{className:"navbar",children:[t.jsx("a",{href:"/",children:t.jsx(m,{})}),(0,t.jsxs)("div",{className:"navbar_search",children:[t.jsx("input",{type:"text",placeholder:"Search...",value:j,onChange:e=>v(e.target.value)}),t.jsx(c(),{disabled:""===j,onClick:k,children:t.jsx(a.Z,{sx:{color:"red"}})})]}),(0,t.jsxs)("div",{className:"navbar_right",children:[s&&(0,t.jsxs)("a",{href:"/cart",className:"cart",children:[t.jsx(i.Z,{sx:{color:"gray"}}),"Cart ",(0,t.jsxs)("span",{children:["(",P?.length,")"]})]}),(0,t.jsxs)("div",{className:"navbar_right_account",children:[t.jsx(c(),{onClick:()=>n(!r),children:t.jsx(o.Z,{sx:{color:"gray"}})}),s?t.jsx(c(),{onClick:()=>n(!r),children:t.jsx("img",{src:s.profileImagePath,alt:"profile",style:{objectFit:"cover",borderRadius:"50%"}})}):t.jsx(c(),{onClick:()=>n(!r),children:t.jsx(l.Z,{sx:{color:"gray"}})})]}),r&&!s&&(0,t.jsxs)("div",{className:"navbar_right_accountmenu",children:[t.jsx(x(),{href:"/login",children:"Log In"}),t.jsx(x(),{href:"/register",children:"Sign Up"})]}),r&&s&&(0,t.jsxs)("div",{className:"navbar_right_accountmenu",children:[t.jsx(x(),{href:"/wishlist",children:"Wishlist"}),t.jsx(x(),{href:"/cart",children:"Cart"}),t.jsx(x(),{href:"/order",children:"Orders"}),t.jsx(x(),{href:`/shop?id=${s._id}`,children:"Your Shop"}),t.jsx(x(),{href:"/create-work",children:"Sell Your Work"}),t.jsx("a",{onClick:h,children:"Log Out"})]})]})]})}},3966:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>i});var t=r(53854),a=r(66609);let i=({children:e,session:s})=>t.jsx(a.SessionProvider,{session:s,children:e})},53054:(e,s,r)=>{"use strict";r.d(s,{Z:()=>i});var t=r(14405),a=r(53854);let i=(0,t.Z)((0,a.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew")},37295:(e,s,r)=>{"use strict";r.d(s,{Z:()=>i});var t=r(14405),a=r(53854);let i=(0,t.Z)((0,a.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos")},5237:(e,s,r)=>{"use strict";r.d(s,{Z:()=>i});var t=r(14405),a=r(53854);let i=(0,t.Z)((0,a.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite")},69965:(e,s,r)=>{"use strict";r.d(s,{Z:()=>i});var t=r(14405),a=r(53854);let i=(0,t.Z)((0,a.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder")},5839:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>d,metadata:()=>c});var t=r(4656);r(7633);var a=r(95153);let i=(0,a.createProxy)(String.raw`C:\Users\HP\Desktop\mimarket\components\Provider.jsx`),{__esModule:o,$$typeof:l}=i,n=i.default,c={title:"Mimarket",description:"Discover, Buy And Sell"},d=({children:e})=>t.jsx("html",{lang:"en",children:t.jsx("body",{children:t.jsx(n,{children:t.jsx("main",{children:e})})})})},43020:(e,s,r)=>{"use strict";r.r(s),r.d(s,{$$typeof:()=>o,__esModule:()=>i,default:()=>n});var t=r(95153);let a=(0,t.createProxy)(String.raw`C:\Users\HP\Desktop\mimarket\app\work-details\page.jsx`),{__esModule:i,$$typeof:o}=a,l=a.default,n=l},57481:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a});var t=r(31323);let a=e=>{let s=(0,t.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:s+""}]}},3796:()=>{},7164:()=>{},23219:()=>{},90313:()=>{},7633:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[271,208,323,315],()=>r(1846));module.exports=t})();