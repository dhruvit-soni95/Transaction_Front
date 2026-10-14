const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TransactionLanding-DC0Mgpsu.js","assets/charts-BhgxngkN.js","assets/utilities-Bs6HhBiT.js","assets/react-BJDuBWr9.js","assets/TransactionFooter-DpypZTuN.js","assets/arrow-right-BMIL6LGO.js","assets/chevron-down-B7D73wzU.js","assets/lock-keyhole-BwXDHV5R.js","assets/check-BY601Va0.js","assets/sparkles-CNwLpmNc.js","assets/pen-line-BaC0YxOy.js","assets/check-circle-2-Doz0ysSr.js","assets/file-check-2-Dlh8QwKz.js","assets/users-Ceejowya.js","assets/supabase-DN6kyvzN.js","assets/TransactionContact-DkNrTxDZ.js","assets/clock-3--20h5RZV.js","assets/mail-CbsWP_NP.js","assets/phone-DuQd7Xka.js","assets/map-pin-CuLHezhm.js","assets/TransactionPayment-ueUEASlI.js","assets/credit-card-B7dFSS2f.js","assets/arrow-left-DkRuqxD8.js","assets/PaymentSuccess-xYkaRaaK.js","assets/refresh-cw-ClUOCWKu.js","assets/x-circle-B_6ePyVg.js","assets/PaymentCancel-BG-d5-mH.js","assets/TransactionLayout-DjdTWhh-.js","assets/TransactionsList-DyXQIbBv.js","assets/archive-Cn4E5IeV.js","assets/external-link-BBQ6mIA9.js","assets/plus-B0z1kLeI.js","assets/building-2-B-3hpZRo.js","assets/calendar-days-Cy9jiuEM.js","assets/ArchivedTransactions-CTh0s3gZ.js","assets/rotate-ccw-n0y23kR9.js","assets/loader-2-BpTsPAhC.js","assets/CreateTransaction-E6f3wvNC.js","assets/hash-BVlvoHUO.js","assets/save-cM7h5MXp.js","assets/AddParties-CvP_H_-u.js","assets/user-round-Awz8UPOg.js","assets/Partiespdfdata-DcljjZM2.js","assets/download-DcQmZcbr.js","assets/image-DtFpb24m.js","assets/TransactionLogin-DrtO2c3V.js","assets/eye-off-BafABbIZ.js","assets/eye-_CaduNI4.js","assets/TransactionRegister-BhHJJ9Sh.js","assets/AdminAccount-CkOiGGr3.js","assets/Partiesdata-qZf_m6ih.js","assets/camera-B12Q0hkN.js","assets/FintracForm-8xCVTWWQ.js","assets/PoliticallyExposedForm-4fN6Tt0F.js","assets/CrgForm-CbeStp2r.js","assets/TransactionType-CgnF_wpQ.js","assets/Documents-BKvZzkDD.js","assets/EBRADA-CjAlnvIH.js","assets/EBRAA-C5YyAjWA.js","assets/EBRATDA-D1znkLdq.js","assets/RPC-Ck4V5kHs.js","assets/SCSAAFA-C1Tmn2bI.js","assets/IDMMGOL-CJCPKKMx.js","assets/ESRAA-DDoc_P2i.js","assets/SignRedirect-Z0erTvlA.js","assets/SignatureComplete-TnrOTbEH.js","assets/ClientLogin-C-OMYHXK.js","assets/lock-DQYwtQWc.js","assets/ClientRegister-B2BHr0wo.js","assets/ClientVerify-MB4t-z7M.js","assets/ClientDashboard-DVmnSEQj.js","assets/activity-Cy1VNElq.js","assets/ClientDocuments-D9lN-z2U.js","assets/ClientProfile-BJjjuBg6.js"])))=>i.map(i=>d[i]);
import{j as e}from"./charts-BhgxngkN.js";import{r as t,F as D}from"./utilities-Bs6HhBiT.js";import{r as O,u as T,N as z,O as F,a as L,B as V,R as B,b as s}from"./react-BJDuBWr9.js";import{c as M,_ as n}from"./supabase-DN6kyvzN.js";(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))h(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const j of u.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&h(j)}).observe(document,{childList:!0,subtree:!0});function x(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function h(a){if(a.ep)return;a.ep=!0;const u=x(a);fetch(a.href,u)}})();var R,k=O;R=k.createRoot,k.hydrateRoot;const U="https://teezlvujpblgiruoipkr.supabase.co",H="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlZXpsdnVqcGJsZ2lydW9pcGtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MjA3NzYsImV4cCI6MjA4NTI5Njc3Nn0.5jFMstZVp2r8cgoByVgiYjQS_-uM-p6krJDNaaiDfHs",_=M(U,H),J=t.createContext(void 0);function $({children:p}){const[d,x]=t.useState(null),[h,a]=t.useState(null),[u,j]=t.useState(!0);t.useEffect(()=>{(async()=>{var l;const{data:m}=await _.auth.getSession();if((l=m==null?void 0:m.session)!=null&&l.user){x({id:m.session.user.id,email:m.session.user.email,created_at:m.session.user.created_at});const{data:o}=await _.from("profiles").select("*").eq("id",m.session.user.id).maybeSingle();o&&a(o)}j(!1)})();const{data:c}=_.auth.onAuthStateChange(async(m,l)=>{if(l!=null&&l.user){x({id:l.user.id,email:l.user.email,created_at:l.user.created_at});const{data:o}=await _.from("profiles").select("*").eq("id",l.user.id).maybeSingle();o&&a(o)}else x(null),a(null)});return()=>{c==null||c.subscription.unsubscribe()}},[]);const i=async(c,m)=>{var v;const{data:l,error:o}=await _.auth.signUp({email:c,password:m});if(o)throw o;if((v=l==null?void 0:l.user)!=null&&v.id){const{error:y}=await _.from("profiles").insert({id:l.user.id,role:c==="hello@realtorparth.ca"?"admin":"user"});if(y)throw y}return{data:l,error:o}},g=async(c,m)=>{const{error:l}=await _.auth.signInWithPassword({email:c,password:m});if(l)throw l},f=async()=>{const{error:c}=await _.auth.signOut();if(c)throw c;x(null),a(null)};return e.jsx(J.Provider,{value:{user:d,profile:h,loading:u,signUp:i,signIn:g,signOut:f,isAdmin:(h==null?void 0:h.role)==="admin"||(d==null?void 0:d.email)==="hello@realtorparth.ca"},children:p})}const Y="http://46.225.18.186:8081/api/",P=t.createContext(void 0);function E({children:p}){const[d,x]=t.useState(null),[h,a]=t.useState(!0);t.useEffect(()=>{let i=!0;return(async()=>{try{const f=localStorage.getItem("clientUser");if(!f){i&&x(null);return}let c;try{c=JSON.parse(f)}catch{localStorage.removeItem("clientUser"),localStorage.removeItem("clientToken"),i&&x(null);return}if(!(c!=null&&c.id)){i&&x(c||null);return}try{const m=await fetch(`${Y}/api/client/me`,{method:"GET",headers:{"Content-Type":"application/json","x-client-id":c.id}});if(m.status===404||m.status===403){localStorage.removeItem("clientUser"),localStorage.removeItem("clientToken"),i&&x(null);return}if(!m.ok){i&&x(c);return}const l=await m.json();if(l!=null&&l.success&&(l!=null&&l.user)){const o={...c,...l.user};localStorage.setItem("clientUser",JSON.stringify(o)),i&&x(o)}else i&&x(c)}catch(m){console.error("CLIENT AUTH REFRESH ERROR:",m),i&&x(c)}}catch(f){console.error("FAILED TO LOAD CLIENT:",f),localStorage.removeItem("clientUser"),localStorage.removeItem("clientToken"),i&&x(null)}finally{i&&a(!1)}})(),()=>{i=!1}},[]);const u=i=>{localStorage.setItem("clientUser",JSON.stringify(i)),x(i)},j=()=>{localStorage.removeItem("clientUser"),localStorage.removeItem("clientToken"),x(null)};return e.jsx(P.Provider,{value:{user:d,loading:h,login:u,logout:j},children:p})}function C(){const p=t.useContext(P);if(!p)throw new Error("useClientAuth must be used inside ClientAuthProvider");return p}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var q={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=p=>p.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),b=(p,d)=>{const x=t.forwardRef(({color:h="currentColor",size:a=24,strokeWidth:u=2,absoluteStrokeWidth:j,className:i="",children:g,...f},c)=>t.createElement("svg",{ref:c,...q,width:a,height:a,stroke:h,strokeWidth:j?Number(u)*24/Number(a):u,className:["lucide",`lucide-${Z(p)}`,i].join(" "),...f},[...d.map(([m,l])=>t.createElement(m,l)),...Array.isArray(g)?g:[g]]));return x.displayName=`${p}`,x};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=b("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=b("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=b("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=b("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=b("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=b("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=b("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=b("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=b("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function ee(){const p=T(),{user:d,logout:x}=C(),[h,a]=t.useState(!1),[u,j]=t.useState(!1),[i,g]=t.useState(!1),f=()=>{i||j(!0)},c=()=>{i||j(!1)},m=()=>{if(!i)try{g(!0),x(),a(!1),j(!1),p("/client/login",{replace:!0})}catch(o){console.error("Client logout failed:",o),g(!1)}};t.useEffect(()=>{if(!u)return;const o=v=>{v.key==="Escape"&&!i&&j(!1)};return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[u,i]);const l=[{name:"Dashboard",description:"Overview & activity",path:"/client",icon:K,end:!0},{name:"Documents",description:"Forms & signatures",path:"/client/documents",icon:W},{name:"Profile",description:"Your account details",path:"/client/profile",icon:N}];return e.jsxs("div",{className:"flex h-screen overflow-hidden bg-[#F8F7F3]",children:[u&&e.jsx("div",{className:`\r
            fixed\r
            inset-0\r
            z-[100]\r
            flex\r
            items-center\r
            justify-center\r
            bg-[#172033]/60\r
            p-4\r
            backdrop-blur-sm\r
          `,onMouseDown:o=>{o.target===o.currentTarget&&c()},children:e.jsxs("div",{className:`\r
              w-full\r
              max-w-[420px]\r
              overflow-hidden\r
              rounded-3xl\r
              border\r
              border-[#E7E3D8]\r
              bg-white\r
              shadow-[0_25px_80px_rgba(23,32,51,0.25)]\r
              animate-[modalIn_0.2s_ease-out]\r
            `,onMouseDown:o=>o.stopPropagation(),children:[e.jsxs("div",{className:"px-6 pb-5 pt-7 sm:px-7 sm:pt-8",children:[e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`\r
                    flex\r
                    h-14\r
                    w-14\r
                    shrink-0\r
                    items-center\r
                    justify-center\r
                    rounded-2xl\r
                    bg-[#172033]\r
                    shadow-sm\r
                  `,children:e.jsx(w,{className:"h-6 w-6 text-[#B8860B]"})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h2",{className:"text-lg font-bold tracking-tight text-[#172033] sm:text-xl",children:"Sign out?"}),e.jsx("button",{type:"button",onClick:c,disabled:i,className:`\r
                        flex\r
                        h-9\r
                        w-9\r
                        shrink-0\r
                        items-center\r
                        justify-center\r
                        rounded-xl\r
                        text-gray-400\r
                        transition\r
                        hover:bg-gray-100\r
                        hover:text-gray-700\r
                        disabled:cursor-not-allowed\r
                        disabled:opacity-50\r
                      `,"aria-label":"Close",children:e.jsx(A,{className:"h-5 w-5"})})]}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"End your current client portal session."})]})]}),e.jsxs("div",{className:"mt-6 flex items-start gap-3 rounded-2xl border border-[#E7E3D8] bg-[#F8F7F3] p-4",children:[e.jsx(G,{className:`\r
                    mt-0.5\r
                    h-4\r
                    w-4\r
                    shrink-0\r
                    text-[#B8860B]\r
                  `}),e.jsx("p",{className:"text-xs leading-5 text-gray-600",children:"You will need to sign in again to access your transactions, documents, and account information."})]})]}),e.jsxs("div",{className:"flex flex-col-reverse gap-3 border-t border-[#E7E3D8] bg-[#FCFBF8] px-6 py-5 sm:flex-row sm:justify-end sm:px-7",children:[e.jsx("button",{type:"button",onClick:c,disabled:i,className:`\r
                  inline-flex\r
                  h-11\r
                  items-center\r
                  justify-center\r
                  rounded-xl\r
                  border\r
                  border-[#E7E3D8]\r
                  bg-white\r
                  px-5\r
                  text-sm\r
                  font-semibold\r
                  text-[#172033]\r
                  shadow-sm\r
                  transition\r
                  hover:bg-[#F8F7F3]\r
                  disabled:cursor-not-allowed\r
                  disabled:opacity-50\r
                `,children:"Cancel"}),e.jsx("button",{type:"button",onClick:m,disabled:i,className:`\r
                  inline-flex\r
                  h-11\r
                  items-center\r
                  justify-center\r
                  gap-2\r
                  rounded-xl\r
                  bg-[#172033]\r
                  px-5\r
                  text-sm\r
                  font-semibold\r
                  text-white\r
                  shadow-sm\r
                  transition\r
                  hover:bg-[#202c45]\r
                  disabled:cursor-not-allowed\r
                  disabled:opacity-70\r
                `,children:i?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:`\r
                        h-4\r
                        w-4\r
                        animate-spin\r
                        rounded-full\r
                        border-2\r
                        border-white/30\r
                        border-t-white\r
                      `}),"Signing out..."]}):e.jsxs(e.Fragment,{children:[e.jsx(w,{className:"h-4 w-4 text-[#B8860B]"}),"Sign Out"]})})]})]})}),h&&e.jsx("div",{className:`\r
            fixed\r
            inset-0\r
            z-30\r
            bg-black/40\r
            backdrop-blur-[2px]\r
            lg:hidden\r
          `,onClick:()=>a(!1)}),e.jsxs("aside",{className:`
          fixed
          inset-y-0
          left-0
          z-40
          flex
          h-screen
          w-[270px]
          flex-col
          border-r
          border-[#E7E3D8]
          bg-white
          shadow-[4px_0_20px_rgba(0,0,0,0.03)]
          transition-transform
          duration-300
          lg:relative
          lg:translate-x-0
          ${h?"translate-x-0":"-translate-x-full"}
        `,children:[e.jsxs("div",{className:"flex h-[76px] shrink-0 items-center justify-between border-b border-[#E7E3D8] px-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-[#172033] shadow-sm",children:e.jsx("span",{className:"text-lg font-bold text-[#B8860B]",children:"RP"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-[15px] font-bold tracking-tight text-[#172033]",children:"RealtorParth"}),e.jsx("p",{className:"mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#B8860B]",children:"Client Portal"})]})]}),e.jsx("button",{type:"button",onClick:()=>a(!1),className:`\r
              rounded-lg\r
              p-2\r
              text-gray-500\r
              transition\r
              hover:bg-gray-100\r
              hover:text-gray-800\r
              lg:hidden\r
            `,children:e.jsx(A,{className:"h-5 w-5"})})]}),e.jsx("div",{className:"shrink-0 border-b border-[#E7E3D8] p-5",children:e.jsxs("div",{className:"rounded-2xl bg-[#F8F7F3] p-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#172033]",children:e.jsx(N,{className:"h-4 w-4 text-[#B8860B]"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"truncate text-sm font-semibold text-[#172033]",children:(d==null?void 0:d.name)||"Client"}),e.jsx("p",{className:"mt-0.5 truncate text-xs text-gray-500",children:(d==null?void 0:d.email)||""})]})]}),e.jsxs("div",{className:"mt-3 flex items-center gap-2 border-t border-[#E7E3D8] pt-3",children:[e.jsx(S,{className:"h-3.5 w-3.5 text-[#B8860B]"}),e.jsx("span",{className:"text-[11px] font-medium text-gray-500",children:"Secure client account"})]})]})}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-5",children:[e.jsx("p",{className:"mb-3 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400",children:"Portal"}),e.jsx("nav",{className:"space-y-1.5",children:l.map(o=>{const v=o.icon;return e.jsx(z,{to:o.path,end:o.end,onClick:()=>a(!1),className:({isActive:y})=>`
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-3
                    transition-all
                    duration-200
                    ${y?"bg-[#172033] text-white shadow-sm":"text-gray-600 hover:bg-[#F8F7F3] hover:text-[#172033]"}
                    `,children:({isActive:y})=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          transition
                          ${y?"bg-white/10":"bg-gray-100 group-hover:bg-white"}
                        `,children:e.jsx(v,{className:`
                            h-[17px]
                            w-[17px]
                            ${y?"text-[#B8860B]":"text-gray-500"}
                          `})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("p",{className:`
                            text-sm
                            font-semibold
                            ${y?"text-white":"text-gray-700"}
                          `,children:o.name}),e.jsx("p",{className:`
                            mt-0.5
                            text-[10px]
                            ${y?"text-white/60":"text-gray-400"}
                          `,children:o.description})]}),e.jsx(X,{className:`
                          h-4
                          w-4
                          transition-transform
                          ${y?"translate-x-0.5 text-[#B8860B]":"text-gray-300 group-hover:translate-x-0.5"}
                        `})]})},o.path)})})]}),e.jsx("div",{className:"shrink-0 border-t border-[#E7E3D8] p-4",children:e.jsxs("button",{type:"button",onClick:f,disabled:i,className:`\r
              group\r
              flex\r
              w-full\r
              items-center\r
              gap-3\r
              rounded-xl\r
              px-3\r
              py-3\r
              text-sm\r
              font-medium\r
              text-gray-600\r
              transition\r
              hover:bg-red-50\r
              hover:text-red-600\r
              disabled:cursor-not-allowed\r
              disabled:opacity-60\r
            `,children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 transition group-hover:bg-red-100",children:e.jsx(w,{className:"h-4 w-4"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("p",{className:"font-semibold",children:"Sign Out"}),e.jsx("p",{className:"text-[10px] text-gray-400 group-hover:text-red-400",children:"End your session"})]})]})})]}),e.jsxs("div",{className:"flex min-w-0 flex-1 flex-col overflow-hidden",children:[e.jsxs("header",{className:`\r
            z-20\r
            flex\r
            min-h-[76px]\r
            shrink-0\r
            items-center\r
            border-b\r
            border-[#E7E3D8]\r
            bg-white/95\r
            px-4\r
            backdrop-blur-md\r
            sm:px-6\r
            lg:px-8\r
          `,children:[e.jsxs("div",{className:"flex min-w-0 flex-1 items-center",children:[e.jsx("button",{type:"button",onClick:()=>a(!0),className:`\r
                mr-3\r
                flex\r
                h-10\r
                w-10\r
                shrink-0\r
                items-center\r
                justify-center\r
                rounded-xl\r
                border\r
                border-[#E7E3D8]\r
                bg-white\r
                text-gray-600\r
                shadow-sm\r
                transition\r
                hover:bg-[#F8F7F3]\r
                lg:hidden\r
              `,children:e.jsx(Q,{className:"h-5 w-5"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:"truncate text-sm font-bold text-[#172033] sm:text-base",children:"Client Portal"}),e.jsx("span",{className:"hidden h-1 w-1 rounded-full bg-[#B8860B] sm:block"}),e.jsx("span",{className:"hidden text-xs font-medium text-gray-400 sm:block",children:"RealtorParth"})]}),e.jsx("p",{className:"mt-0.5 hidden truncate text-xs text-gray-400 sm:block",children:"Manage your transaction information and documents"})]})]}),e.jsxs("div",{className:"ml-3 flex items-center gap-3",children:[e.jsxs("div",{className:"hidden text-right sm:block",children:[e.jsx("p",{className:"max-w-[180px] truncate text-xs font-semibold text-[#172033]",children:(d==null?void 0:d.name)||"Client"}),e.jsx("p",{className:"mt-0.5 max-w-[180px] truncate text-[10px] text-gray-400",children:(d==null?void 0:d.email)||""})]}),e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-full border border-[#E7E3D8] bg-[#F8F7F3]",children:e.jsx(N,{className:"h-4 w-4 text-[#172033]"})})]})]}),e.jsx("main",{className:`\r
            min-h-0\r
            flex-1\r
            overflow-y-auto\r
            overflow-x-hidden\r
            p-4\r
            sm:p-6\r
            lg:p-8\r
          `,children:e.jsx("div",{className:"mx-auto w-full max-w-[1500px]",children:e.jsx(F,{})})}),e.jsx("footer",{className:`\r
            shrink-0\r
            border-t\r
            border-[#E7E3D8]\r
            bg-white\r
            px-4\r
            py-4\r
            sm:px-6\r
            lg:px-8\r
          `,children:e.jsxs("div",{className:"mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-2 sm:flex-row",children:[e.jsxs("p",{className:"text-[11px] text-gray-400",children:["© ",new Date().getFullYear()," RealtorParth. All rights reserved."]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(S,{className:"h-3.5 w-3.5 text-[#B8860B]"}),e.jsx("span",{className:"text-[11px] font-medium text-gray-400",children:"Secure Client Portal"})]})]})})]}),e.jsx("style",{children:`
          @keyframes modalIn {
            from {
              opacity: 0;
              transform: scale(0.96) translateY(8px);
            }

            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `})]})}function te({children:p}){const{user:d,loading:x}=C();return x?e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-50",children:e.jsx("p",{className:"text-gray-500",children:"Loading..."})}):d?e.jsx(e.Fragment,{children:p}):e.jsx(L,{to:"/client/login",replace:!0})}const I=t.lazy(()=>n(()=>import("./TransactionLanding-DC0Mgpsu.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))),se=t.lazy(()=>n(()=>import("./TransactionContact-DkNrTxDZ.js"),__vite__mapDeps([15,1,2,3,4,5,6,7,8,16,17,18,19,12,9,11,14]))),re=t.lazy(()=>n(()=>import("./TransactionPayment-ueUEASlI.js"),__vite__mapDeps([20,1,2,3,4,5,6,7,8,9,11,21,22,14]))),ne=t.lazy(()=>n(()=>import("./PaymentSuccess-xYkaRaaK.js"),__vite__mapDeps([23,1,2,3,4,5,6,7,8,24,16,11,25,12,14]))),ae=t.lazy(()=>n(()=>import("./PaymentCancel-BG-d5-mH.js"),__vite__mapDeps([26,1,2,3,4,5,6,7,8,25,21,24,22,14]))),le=t.lazy(()=>n(()=>import("./TransactionLayout-DjdTWhh-.js"),__vite__mapDeps([27,1,2,3,22,14]))),ie=t.lazy(()=>n(()=>import("./TransactionsList-DyXQIbBv.js"),__vite__mapDeps([28,1,2,3,29,30,24,31,32,33,13,11,14]))),oe=t.lazy(()=>n(()=>import("./ArchivedTransactions-CTh0s3gZ.js"),__vite__mapDeps([34,1,2,3,29,22,11,35,32,19,33,36,14]))),ce=t.lazy(()=>n(()=>import("./CreateTransaction-E6f3wvNC.js"),__vite__mapDeps([37,1,2,3,24,31,38,19,39,5,11,14]))),de=t.lazy(()=>n(()=>import("./AddParties-CvP_H_-u.js"),__vite__mapDeps([40,1,2,3,13,17,11,6,41,31,5,24,36,14]))),xe=t.lazy(()=>n(()=>import("./Partiespdfdata-DcljjZM2.js"),__vite__mapDeps([42,1,2,3,22,24,11,16,30,41,33,43,38,19,21,44,6,14]))),me=t.lazy(()=>n(()=>import("./TransactionLogin-DrtO2c3V.js"),__vite__mapDeps([45,1,2,3,22,9,11,12,7,17,46,47,5,14]))),ue=t.lazy(()=>n(()=>import("./TransactionRegister-BhHJJ9Sh.js"),__vite__mapDeps([48,1,2,3,22,9,11,12,41,17,7,46,47,5,14]))),pe=t.lazy(()=>n(()=>import("./AdminAccount-CkOiGGr3.js"),__vite__mapDeps([49,1,2,3,22,32,11,18,17,19,41,36,39,14]))),he=t.lazy(()=>n(()=>import("./Partiesdata-qZf_m6ih.js"),__vite__mapDeps([50,1,2,3,36,24,9,11,8,12,51,21,35,5,14]))),je=t.lazy(()=>n(()=>import("./FintracForm-8xCVTWWQ.js"),__vite__mapDeps([52,1,2,3]))),fe=t.lazy(()=>n(()=>import("./PoliticallyExposedForm-4fN6Tt0F.js"),__vite__mapDeps([53,1,2,3]))),ye=t.lazy(()=>n(()=>import("./CrgForm-CbeStp2r.js"),__vite__mapDeps([54,1,2,3]))),ge=t.lazy(()=>n(()=>import("./TransactionType-CgnF_wpQ.js"),__vite__mapDeps([55,1,2,3]))),be=t.lazy(()=>n(()=>import("./Documents-BKvZzkDD.js"),__vite__mapDeps([56,1,2,3]))),_e=t.lazy(()=>n(()=>import("./EBRADA-CjAlnvIH.js"),__vite__mapDeps([57,1,2,3]))),ve=t.lazy(()=>n(()=>import("./EBRAA-C5YyAjWA.js"),__vite__mapDeps([58,1,2,3]))),Ee=t.lazy(()=>n(()=>import("./EBRATDA-D1znkLdq.js"),__vite__mapDeps([59,1,2,3]))),we=t.lazy(()=>n(()=>import("./RPC-Ck4V5kHs.js"),__vite__mapDeps([60,1,2,3]))),Ne=t.lazy(()=>n(()=>import("./SCSAAFA-C1Tmn2bI.js"),__vite__mapDeps([61,1,2,3]))),ke=t.lazy(()=>n(()=>import("./IDMMGOL-CJCPKKMx.js"),__vite__mapDeps([62,1,2,3]))),Se=t.lazy(()=>n(()=>import("./ESRAA-DDoc_P2i.js"),__vite__mapDeps([63,1,2,3]))),Ae=t.lazy(()=>n(()=>import("./SignRedirect-Z0erTvlA.js"),__vite__mapDeps([64,1,2,3]))),Ie=t.lazy(()=>n(()=>import("./SignatureComplete-TnrOTbEH.js"),__vite__mapDeps([65,1,2,3,11,14]))),Le=t.lazy(()=>n(()=>import("./ClientLogin-C-OMYHXK.js"),__vite__mapDeps([66,1,2,3,17,67,46,47,5,11,14]))),Re=t.lazy(()=>n(()=>import("./ClientRegister-B2BHr0wo.js"),__vite__mapDeps([68,1,2,3,17,11,67,46,47,5,14]))),Pe=t.lazy(()=>n(()=>import("./ClientVerify-MB4t-z7M.js"),__vite__mapDeps([69,1,2,3,51,11,14]))),Ce=t.lazy(()=>n(()=>import("./ClientDashboard-DVmnSEQj.js"),__vite__mapDeps([70,1,2,3,24,13,11,71,19,38,33,5,14]))),De=t.lazy(()=>n(()=>import("./ClientDocuments-D9lN-z2U.js"),__vite__mapDeps([72,1,2,3,36,9,24,10,11,47,43,16,7,12,14]))),Oe=t.lazy(()=>n(()=>import("./ClientProfile-BJjjuBg6.js"),__vite__mapDeps([73,1,2,3,24,71,11,16,17,18,44,21,51,47,14])));function r(){return e.jsx("div",{className:"flex min-h-screen items-center justify-center bg-[#f7f9fc]",children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"h-10 w-10 rounded-full border-2 border-slate-200"}),e.jsx("div",{className:"absolute inset-0 h-10 w-10 animate-spin rounded-full border-2 border-transparent border-t-blue-600"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-sm font-bold text-slate-800",children:"RealtorParth"}),e.jsx("p",{className:"mt-1 text-xs font-medium text-slate-400",children:"Loading workspace..."})]})]})})}function Te(){return e.jsxs("div",{className:"min-h-screen",children:[e.jsx(D,{position:"top-right",reverseOrder:!1,toastOptions:{duration:5e3,style:{background:"#0f172a",color:"#ffffff",borderRadius:"12px",padding:"12px 16px",fontSize:"14px",fontWeight:"500"}}}),e.jsxs(B,{children:[e.jsx(s,{path:"/",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(I,{})})}),e.jsx(s,{path:"/transactions/landing",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(I,{})})}),e.jsx(s,{path:"/transactions/contact",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(se,{})})}),e.jsx(s,{path:"/transactions/payment",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(re,{})})}),e.jsx(s,{path:"/transactions/payment/success",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(ne,{})})}),e.jsx(s,{path:"/transactions/payment/cancel",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(ae,{})})}),e.jsx(s,{path:"/transactions/login",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(me,{})})}),e.jsx(s,{path:"/transactions/register",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(ue,{})})}),e.jsxs(s,{path:"/transactions",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(le,{})}),children:[e.jsx(s,{index:!0,element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(ie,{})})}),e.jsx(s,{path:"archived",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(oe,{})})}),e.jsx(s,{path:"create",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(ce,{})})}),e.jsx(s,{path:"parties",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(de,{})})}),e.jsx(s,{path:"partypdfdata/:id",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(xe,{})})}),e.jsx(s,{path:"adminaccount",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(pe,{})})})]}),e.jsx(s,{path:"/party/onboarding/:id",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(he,{})})}),e.jsx(s,{path:"/party/fintrac/:id",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(je,{})})}),e.jsx(s,{path:"/party/politically-exposed/:id",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(fe,{})})}),e.jsx(s,{path:"/party/crg/:id",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(ye,{})})}),e.jsx(s,{path:"/party/type/:id",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(ge,{})})}),e.jsx(s,{path:"/party/documents/:id",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(be,{})})}),e.jsx(s,{path:"/party/forms/EBRADA/:id",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(_e,{})})}),e.jsx(s,{path:"/party/forms/EBRAA/:id",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(ve,{})})}),e.jsx(s,{path:"/party/forms/EBRATDA/:id",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(Ee,{})})}),e.jsx(s,{path:"/party/forms/RPC/:id",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(we,{})})}),e.jsx(s,{path:"/party/forms/SCSAAFA/:id",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(Ne,{})})}),e.jsx(s,{path:"/party/forms/ESRAA/:id",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(Se,{})})}),e.jsx(s,{path:"/party/forms/IDMMGOL/:id",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(ke,{})})}),e.jsx(s,{path:"/sign-redirect",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(Ae,{})})}),e.jsx(s,{path:"/signature-complete",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(Ie,{})})}),e.jsx(s,{path:"/client/login",element:e.jsx(E,{children:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(Le,{})})})}),e.jsx(s,{path:"/client/register",element:e.jsx(E,{children:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(Re,{})})})}),e.jsx(s,{path:"/client/verify/:id",element:e.jsx(E,{children:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(Pe,{})})})}),e.jsxs(s,{path:"/client",element:e.jsx(E,{children:e.jsx(te,{children:e.jsx(ee,{})})}),children:[e.jsx(s,{index:!0,element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(Ce,{})})}),e.jsx(s,{path:"documents",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(De,{})})}),e.jsx(s,{path:"profile",element:e.jsx(t.Suspense,{fallback:e.jsx(r,{}),children:e.jsx(Oe,{})})})]}),e.jsx(s,{path:"*",element:e.jsx(L,{to:"/",replace:!0})})]})]})}function ze(){return e.jsx(V,{children:e.jsx($,{children:e.jsx(Te,{})})})}R(document.getElementById("root")).render(e.jsx(t.StrictMode,{children:e.jsx(ze,{})}));export{G as A,X as C,W as F,K as H,w as L,Q as M,S,N as U,A as X,Y as a,b as c,C as u};
