(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2666:function(s,e,r){"use strict";var i=r(9782),n=r(7437);e.Z=(0,i.Z)((0,n.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew")},3625:function(s,e,r){"use strict";var i=r(9782),n=r(7437);e.Z=(0,i.Z)((0,n.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos")},3216:function(s,e,r){"use strict";var i=r(9782),n=r(7437);e.Z=(0,i.Z)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},5717:function(s,e,r){"use strict";var i=r(9782),n=r(7437);e.Z=(0,i.Z)((0,n.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite")},2113:function(s,e,r){"use strict";var i=r(9782),n=r(7437);e.Z=(0,i.Z)((0,n.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder")},7901:function(s,e,r){Promise.resolve().then(r.bind(r,5302)),Promise.resolve().then(r.bind(r,2921))},5302:function(s,e,r){"use strict";r.r(e),r.d(e,{default:function(){return o}});var i=r(7437),n=r(377),a=r(2265);r(4214);var t=r(4642),c=r(1594);function o(){let[s,e]=(0,a.useState)(!0),[r,o]=(0,a.useState)("All"),[l,d]=(0,a.useState)([]);(0,a.useEffect)(()=>{h()},[r]);let h=async()=>{let s=await fetch("/api/work/list/".concat(r)),i=await s.json();d(i),e(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"categories",children:null===n.b||void 0===n.b?void 0:n.b.map(s=>(0,i.jsx)("p",{className:s===r?"selected":"",onClick:()=>o(s),children:s},s))}),s?(0,i.jsx)(t.Z,{}):(0,i.jsx)(c.Z,{data:l})]})}},4642:function(s,e,r){"use strict";var i=r(7437);r(3572),e.Z=()=>(0,i.jsx)("div",{className:"loader",children:(0,i.jsx)("div",{className:"loader-inner"})})},2921:function(s,e,r){"use strict";r.r(e),r.d(e,{default:function(){return j}});var i=r(7437);r(6652);var n=r(98),a=r(3700),t=r(8457),c=r(6013),o=r(9617),l=r(2749),d=r(1396),h=r.n(d),u=r(2265),x=r(4033);r(72);var v=()=>(0,i.jsxs)("div",{className:"logo-holder logo-3",children:[(0,i.jsx)("h2",{children:"Mimarket"}),(0,i.jsx)("p",{children:"Delivering Dreams"})]}),j=()=>{let{data:s}=(0,l.useSession)(),e=null==s?void 0:s.user,[r,d]=(0,u.useState)(!1),j=async()=>{(0,l.signOut)({callbackUrl:"/"})},[f,p]=(0,u.useState)(""),m=(0,x.useRouter)(),g=async()=>{m.push("/search/".concat(f))},k=null==e?void 0:e.cart;return(0,i.jsxs)("div",{className:"navbar",children:[(0,i.jsx)("a",{href:"/",children:(0,i.jsx)(v,{})}),(0,i.jsxs)("div",{className:"navbar_search",children:[(0,i.jsx)("input",{type:"text",placeholder:"Search...",value:f,onChange:s=>p(s.target.value)}),(0,i.jsx)(o.Z,{disabled:""===f,onClick:g,children:(0,i.jsx)(n.Z,{sx:{color:"red"}})})]}),(0,i.jsxs)("div",{className:"navbar_right",children:[e&&(0,i.jsxs)("a",{href:"/cart",className:"cart",children:[(0,i.jsx)(a.Z,{sx:{color:"gray"}}),"Cart ",(0,i.jsxs)("span",{children:["(",null==k?void 0:k.length,")"]})]}),(0,i.jsxs)("div",{className:"navbar_right_account",children:[(0,i.jsx)(o.Z,{onClick:()=>d(!r),children:(0,i.jsx)(t.Z,{sx:{color:"gray"}})}),e?(0,i.jsx)(o.Z,{onClick:()=>d(!r),children:(0,i.jsx)("img",{src:e.profileImagePath,alt:"profile",style:{objectFit:"cover",borderRadius:"50%"}})}):(0,i.jsx)(o.Z,{onClick:()=>d(!r),children:(0,i.jsx)(c.Z,{sx:{color:"gray"}})})]}),r&&!e&&(0,i.jsxs)("div",{className:"navbar_right_accountmenu",children:[(0,i.jsx)(h(),{href:"/login",children:"Log In"}),(0,i.jsx)(h(),{href:"/register",children:"Sign Up"})]}),r&&e&&(0,i.jsxs)("div",{className:"navbar_right_accountmenu",children:[(0,i.jsx)(h(),{href:"/wishlist",children:"Wishlist"}),(0,i.jsx)(h(),{href:"/cart",children:"Cart"}),(0,i.jsx)(h(),{href:"/order",children:"Orders"}),(0,i.jsx)(h(),{href:"/shop?id=".concat(e._id),children:"Your Shop"}),(0,i.jsx)(h(),{href:"/create-work",children:"Sell Your Work"}),(0,i.jsx)("a",{onClick:j,children:"Log Out"})]})]})]})}},1594:function(s,e,r){"use strict";r.d(e,{Z:function(){return x}});var i=r(7437);r(5921);var n=r(2666),a=r(3625),t=r(3216),c=r(5717),o=r(2113);r(3618);var l=r(2749),d=r(4033),h=r(2265),u=s=>{var e,r,u;let{work:x}=s,[v,j]=(0,h.useState)(0),f=()=>{j(s=>(s+1)%x.workPhotoPaths.length)},p=()=>{j(s=>(s-1+x.workPhotoPaths.length)%x.workPhotoPaths.length)},m=(0,d.useRouter)(),g=async()=>{let s=confirm("Are you sure you want to delete this work?");if(s)try{await fetch("api/work/".concat(x._id),{method:"DELETE"}),window.location.reload()}catch(s){console.log(s)}},{data:k,update:w}=(0,l.useSession)(),N=null==k?void 0:null===(e=k.user)||void 0===e?void 0:e._id,b=null==k?void 0:null===(r=k.user)||void 0===r?void 0:r.wishlist,C=null==b?void 0:b.find(s=>(null==s?void 0:s._id)===x._id),Z=async()=>{let s=await fetch("api/user/".concat(N,"/wishlist/").concat(x._id),{method:"PATCH"}),e=await s.json();w({user:{wishlist:e.wishlist}})};return(0,i.jsxs)("div",{className:"work-card",onClick:()=>{m.push("/work-details?id=".concat(x._id))},children:[(0,i.jsx)("div",{className:"slider-container",children:(0,i.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*v,"%)")},children:null===(u=x.workPhotoPaths)||void 0===u?void 0:u.map((s,e)=>(0,i.jsxs)("div",{className:"slide",children:[(0,i.jsx)("img",{src:s,alt:"work"}),(0,i.jsx)("div",{className:"prev-button",onClick:s=>{s.stopPropagation(),p(s)},children:(0,i.jsx)(n.Z,{sx:{fontSize:"15px"}})}),(0,i.jsx)("div",{className:"next-button",onClick:s=>{s.stopPropagation(),f(s)},children:(0,i.jsx)(a.Z,{sx:{fontSize:"15px"}})})]},e))})}),(0,i.jsxs)("div",{className:"info",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:x.title}),(0,i.jsxs)("div",{className:"creator",children:[(0,i.jsx)("img",{src:x.creator.profileImagePath,alt:"creator"}),(0,i.jsx)("span",{children:x.creator.username})," in ",(0,i.jsx)("span",{children:x.category})]})]}),(0,i.jsxs)("div",{className:"price",children:["#",x.price]})]}),N===(null==x?void 0:x.creator._id)?(0,i.jsx)("div",{className:"icon",onClick:s=>{s.stopPropagation(),g()},children:(0,i.jsx)(t.Z,{sx:{borderRadius:"50%",backgroundColor:"white",padding:"5px",fontSize:"30px"}})}):(0,i.jsx)("div",{className:"icon",onClick:s=>{s.stopPropagation(),Z()},children:C?(0,i.jsx)(c.Z,{sx:{borderRadius:"50%",backgroundColor:"white",color:"red",padding:"5px",fontSize:"30px"}}):(0,i.jsx)(o.Z,{sx:{borderRadius:"50%",backgroundColor:"white",padding:"5px",fontSize:"30px"}})})]})},x=s=>{let{data:e}=s;return(0,i.jsx)("div",{className:"work-list",children:e.map(s=>(0,i.jsx)(u,{work:s},s._id))})}},377:function(s,e,r){"use strict";r.d(e,{b:function(){return i}});let i=["All","Food","Fashion","Electronics","Grocery","Supliments","Chops","Kitchen","Kiddies","Mobile"]},4214:function(){},3572:function(){},72:function(){},6652:function(){},3618:function(){},5921:function(){}},function(s){s.O(0,[749,437,971,472,744],function(){return s(s.s=7901)}),_N_E=s.O()}]);