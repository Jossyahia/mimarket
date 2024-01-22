(()=>{var e={};e.id=626,e.ids=[626],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},7461:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(67096),a=r(16132),n=r(37284),i=r.n(n),o=r(32564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,93432)),"C:\\Users\\HP\\Desktop\\mimarket\\app\\login\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5839)),"C:\\Users\\HP\\Desktop\\mimarket\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\HP\\Desktop\\mimarket\\app\\login\\page.jsx"],p="/login/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},92935:(e,t,r)=>{Promise.resolve().then(r.bind(r,29195))},81758:(e,t,r)=>{Promise.resolve().then(r.bind(r,3966))},10609:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,53579,23)),Promise.resolve().then(r.t.bind(r,30619,23)),Promise.resolve().then(r.t.bind(r,81459,23)),Promise.resolve().then(r.t.bind(r,13456,23)),Promise.resolve().then(r.t.bind(r,50847,23)),Promise.resolve().then(r.t.bind(r,57303,23))},29195:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(53854);r(28230);var a=r(66609),n=r(51018),i=r(34218),o=r(15588);let l=()=>{let[e,t]=(0,i.useState)(""),[r,l]=(0,i.useState)(""),[d,c]=(0,i.useState)(""),p=(0,n.useRouter)(),u=async t=>{t.preventDefault();try{let t=await (0,a.signIn)("credentials",{redirect:!1,email:e,password:r});t.ok&&p.push("/"),t.error&&c("Invalid email or password. Please try again!")}catch(e){console.log(e)}};return(0,s.jsxs)("div",{className:"login",children:[s.jsx("img",{src:"/assets/login.jpg",alt:"login",className:"login_decor"}),(0,s.jsxs)("div",{className:"login_content",children:[(0,s.jsxs)("form",{className:"login_content_form",onSubmit:u,children:[s.jsx("input",{placeholder:"Email",name:"email",type:"email",value:e,onChange:e=>t(e.target.value),required:!0}),s.jsx("input",{placeholder:"Password",name:"password",type:"password",value:r,onChange:e=>l(e.target.value),required:!0}),d&&s.jsx("p",{className:"error",children:d}),s.jsx("button",{type:"submit",children:"Log In"})]}),(0,s.jsxs)("button",{className:"google",onClick:()=>{(0,a.signIn)("google",{callbackUrl:"/"})},children:[s.jsx("p",{children:"Log In with Google"}),s.jsx(o.JM8,{})]}),s.jsx("a",{href:"/register",children:"Don't have an account? Sign In Here"})]})]})}},3966:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(53854),a=r(66609);let n=({children:e,session:t})=>s.jsx(a.SessionProvider,{session:t,children:e})},5839:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>d});var s=r(4656);r(7633);var a=r(95153);let n=(0,a.createProxy)(String.raw`C:\Users\HP\Desktop\mimarket\components\Provider.jsx`),{__esModule:i,$$typeof:o}=n,l=n.default,d={title:"Mimarket",description:"Discover, Buy And Sell"},c=({children:e})=>s.jsx("html",{lang:"en",children:s.jsx("body",{children:s.jsx(l,{children:s.jsx("main",{children:e})})})})},93432:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>l});var s=r(95153);let a=(0,s.createProxy)(String.raw`C:\Users\HP\Desktop\mimarket\app\login\page.jsx`),{__esModule:n,$$typeof:i}=a,o=a.default,l=o},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(31323);let a=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},28230:()=>{},7633:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[271,208,323,701],()=>r(7461));module.exports=s})();