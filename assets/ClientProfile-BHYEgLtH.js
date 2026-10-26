import{j as e}from"./charts-BhgxngkN.js";import{r as n,z as I}from"./utilities-Bs6HhBiT.js";import{c as U,u as W,a as D,U as S,F as P,S as h,X as z}from"./index-B3ZyFYZG.js";import{R as Y}from"./refresh-cw-CpL2moiC.js";import{A as V}from"./activity-DGUBgyrz.js";import{C as A}from"./check-circle-2-DEx8Ul7i.js";import{C as M}from"./clock-3-BQAARNjv.js";import{M as O}from"./mail-DLBLQmGk.js";import{P as T}from"./phone-Ci72eRTY.js";import{I as _}from"./image-BQSZjHWx.js";import{C as q}from"./credit-card-DAkoFQWt.js";import{C as G}from"./camera-D8wvEthA.js";import{E as R}from"./eye-TSDZVzr4.js";import"./react-BJDuBWr9.js";import"./supabase-DN6kyvzN.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=U("Fingerprint",[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",key:"1jc9o5"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",key:"1mxgy1"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",key:"1fgabc"}]]);function xe(){const{user:r}=W(),[s,d]=n.useState(null),[c,o]=n.useState(!0),[f,b]=n.useState(!1),[u,g]=n.useState(""),[j,l]=n.useState(null),x=n.useCallback(t=>t?t.startsWith("data:image/")||t.startsWith("http://")||t.startsWith("https://")?t:t.startsWith("/")?`${D}${t}`:t.startsWith("iVBOR")?`data:image/png;base64,${t}`:t.startsWith("/9j/")?`data:image/jpeg;base64,${t}`:t:"",[]),m=n.useCallback(async(t=!1)=>{if(!(r!=null&&r.id)){o(!1);return}try{t?b(!0):o(!0),g("");const i=await fetch(`${D}/api/client/profile`,{method:"GET",headers:{"Content-Type":"application/json","x-client-id":r.id}}),a=await i.json();if(!i.ok||!a.success)throw new Error((a==null?void 0:a.message)||"Failed to load profile.");d({...a.user,parties:Array.isArray(a.parties)?a.parties:[]}),t&&I.success("Profile refreshed.")}catch(i){console.error("CLIENT PROFILE ERROR:",i);const a=i instanceof Error?i.message:"Failed to load profile.";g(a),t&&I.error(a)}finally{o(!1),b(!1)}},[r==null?void 0:r.id]);n.useEffect(()=>{m()},[m]);const N=s!=null&&s.isVerified?"Verified":"Pending",L=String((s==null?void 0:s.email)||(r==null?void 0:r.email)||"").trim().toLowerCase(),w=((s==null?void 0:s.parties)||[]).filter(t=>String(t.email||"").trim().toLowerCase()===L),v=w.some(t=>{var i,a;return!!(t.passportImage||t.licenseImage||(a=(i=t.identityVerification)==null?void 0:i.selfie)!=null&&a.selfieImage)});return c?e.jsxs("div",{className:"mx-auto w-full max-w-[1100px] space-y-6",children:[e.jsxs("div",{className:"rounded-2xl border border-[#E7E3D8] bg-white p-6",children:[e.jsx("div",{className:"h-4 w-24 animate-pulse rounded bg-gray-200"}),e.jsx("div",{className:"mt-3 h-8 w-52 animate-pulse rounded bg-gray-200"}),e.jsx("div",{className:"mt-3 h-4 w-80 max-w-full animate-pulse rounded bg-gray-100"})]}),e.jsx("div",{className:"h-72 animate-pulse rounded-2xl border border-[#E7E3D8] bg-white"}),e.jsx("div",{className:"h-96 animate-pulse rounded-2xl border border-[#E7E3D8] bg-white"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mx-auto w-full max-w-[1100px] space-y-6",children:[e.jsx("section",{className:"rounded-2xl border border-[#E7E3D8] bg-white p-5 sm:p-7",children:e.jsxs("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B]",children:"Account"}),e.jsx("h1",{className:"mt-2 text-2xl font-bold tracking-tight text-[#172033] sm:text-3xl",children:"My Profile"}),e.jsx("p",{className:"mt-2 max-w-2xl text-sm leading-6 text-gray-500",children:"Manage your account information and view your identity verification documents."})]}),e.jsxs("button",{type:"button",onClick:()=>m(!0),disabled:f,className:`\r
                inline-flex\r
                w-fit\r
                shrink-0\r
                items-center\r
                gap-2\r
                rounded-xl\r
                border\r
                border-[#E7E3D8]\r
                bg-white\r
                px-4\r
                py-2.5\r
                text-sm\r
                font-semibold\r
                text-[#172033]\r
                shadow-sm\r
                transition\r
                hover:bg-[#F8F7F3]\r
                disabled:cursor-not-allowed\r
                disabled:opacity-60\r
              `,children:[e.jsx(Y,{className:f?"h-4 w-4 animate-spin":"h-4 w-4"}),"Refresh"]})]})}),u&&e.jsx("div",{className:"rounded-2xl border border-red-200 bg-red-50 p-4",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(V,{className:"mt-0.5 h-4 w-4 shrink-0 text-red-500"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-red-700",children:"Unable to load profile"}),e.jsx("p",{className:"mt-1 text-xs leading-5 text-red-600",children:u})]})]})}),e.jsxs("section",{className:"overflow-hidden rounded-2xl border border-[#E7E3D8] bg-white",children:[e.jsx("div",{className:"border-b border-[#E7E3D8] p-5 sm:p-6",children:e.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#172033]",children:e.jsx(S,{className:"h-5 w-5 text-[#B8860B]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400",children:"Account Information"}),e.jsx("h2",{className:"mt-1 text-lg font-bold text-[#172033]",children:(s==null?void 0:s.name)||(r==null?void 0:r.name)||"Client"})]})]}),e.jsxs("div",{className:`
                  inline-flex
                  w-fit
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  px-3
                  py-1.5
                  text-xs
                  font-bold
                  ${s!=null&&s.isVerified?"border-green-200 bg-green-50 text-green-700":"border-[#B8860B]/25 bg-[#B8860B]/10 text-[#996515]"}
                `,children:[s!=null&&s.isVerified?e.jsx(A,{className:"h-3.5 w-3.5"}):e.jsx(M,{className:"h-3.5 w-3.5"}),N]})]})}),e.jsxs("div",{className:"grid gap-3 p-5 sm:grid-cols-2 sm:p-6",children:[e.jsxs("div",{className:"rounded-xl border border-[#E7E3D8] bg-[#F8F7F3] p-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(O,{className:"h-4 w-4 text-[#996515]"}),e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide text-gray-400",children:"Email"})]}),e.jsx("p",{className:"mt-2 break-all text-sm font-semibold text-[#172033]",children:(s==null?void 0:s.email)||(r==null?void 0:r.email)||"—"})]}),e.jsxs("div",{className:"rounded-xl border border-[#E7E3D8] bg-[#F8F7F3] p-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(T,{className:"h-4 w-4 text-[#996515]"}),e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide text-gray-400",children:"Phone"})]}),e.jsx("p",{className:"mt-2 text-sm font-semibold text-[#172033]",children:(s==null?void 0:s.phone)||(r==null?void 0:r.phone)||"Not provided"})]}),e.jsxs("div",{className:"rounded-xl border border-[#E7E3D8] bg-[#F8F7F3] p-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(X,{className:"h-4 w-4 text-[#996515]"}),e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide text-gray-400",children:"Client ID"})]}),e.jsx("p",{className:"mt-2 break-all text-xs font-semibold text-[#172033]",children:(s==null?void 0:s.id)||(r==null?void 0:r.id)||"—"})]}),e.jsxs("div",{className:"rounded-xl border border-[#E7E3D8] bg-[#F8F7F3] p-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(V,{className:`h-4 w-4 ${s!=null&&s.isActive?"text-green-600":"text-red-600"}`}),e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide text-gray-400",children:"Account Status"})]}),e.jsx("p",{className:`mt-2 text-sm font-semibold ${s!=null&&s.isActive?"text-green-600":"text-red-600"}`,children:s!=null&&s.isActive?"Active":"Disabled"})]})]})]}),e.jsxs("section",{className:"overflow-hidden rounded-2xl border border-[#E7E3D8] bg-white",children:[e.jsx("div",{className:"border-b border-[#E7E3D8] p-5 sm:p-6",children:e.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#172033]",children:e.jsx(P,{className:"h-4.5 w-4.5 text-[#B8860B]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400",children:"Verification"}),e.jsx("h2",{className:"mt-1 text-lg font-bold text-[#172033]",children:"Identity Documents"}),e.jsx("p",{className:"mt-0.5 text-xs text-gray-400",children:"Your submitted identity documents and verification selfie."})]})]}),v&&e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-gray-400",children:[e.jsx(h,{className:"h-4 w-4 text-[#B8860B]"}),"Documents available"]})]})}),e.jsx("div",{className:"p-5 sm:p-6",children:v?e.jsx("div",{className:"space-y-8",children:w.map(t=>{var C,F,B;const i=x(t.licenseImage),a=x(t.passportImage),y=x((F=(C=t.identityVerification)==null?void 0:C.selfie)==null?void 0:F.selfieImage),E=((B=t.identityVerification)==null?void 0:B.status)||N,k=String(E).toLowerCase().trim()==="verified";return e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"flex flex-col gap-3 border-b border-[#E7E3D8] pb-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8F7F3]",children:e.jsx(S,{className:"h-4 w-4 text-[#996515]"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold text-[#172033]",children:t.name||(s==null?void 0:s.name)||"Identity Documents"}),e.jsx("p",{className:"mt-0.5 text-xs text-gray-400",children:t.role||"Transaction Party"})]})]}),e.jsxs("span",{className:`
                              inline-flex
                              w-fit
                              items-center
                              gap-1.5
                              rounded-full
                              border
                              px-3
                              py-1.5
                              text-xs
                              font-bold
                              ${k?"border-green-200 bg-green-50 text-green-700":"border-[#B8860B]/25 bg-[#B8860B]/10 text-[#996515]"}
                            `,children:[k?e.jsx(A,{className:"h-3.5 w-3.5"}):e.jsx(M,{className:"h-3.5 w-3.5"}),String(E).replace(/_/g," ").replace(/\b\w/g,$=>$.toUpperCase())]})]}),e.jsxs("div",{className:"space-y-3",children:[i&&e.jsx(p,{icon:e.jsx(q,{className:"h-5 w-5 text-[#996515]"}),title:"Driving Licence",description:"Submitted driving licence document",onView:()=>l(i)}),a&&e.jsx(p,{icon:e.jsx(P,{className:"h-5 w-5 text-[#996515]"}),title:"Passport",description:"Submitted passport document",onView:()=>l(a)}),y&&e.jsx(p,{icon:e.jsx(G,{className:"h-5 w-5 text-[#996515]"}),title:"Verification Selfie",description:"Identity verification selfie",onView:()=>l(y)})]})]},t._id)})}):e.jsxs("div",{className:"rounded-xl border border-dashed border-[#E7E3D8] bg-[#F8F7F3] py-12 text-center",children:[e.jsx("div",{className:"mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white",children:e.jsx(_,{className:"h-5 w-5 text-gray-300"})}),e.jsx("p",{className:"mt-4 text-sm font-semibold text-[#172033]",children:"No identity documents found"}),e.jsx("p",{className:"mt-1 text-xs text-gray-400",children:"Your submitted identity documents will appear here."})]})})]}),e.jsx("section",{className:"rounded-2xl bg-[#172033] p-5 sm:p-6",children:e.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10",children:e.jsx(h,{className:"h-5 w-5 text-[#B8860B]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-bold text-white",children:"Your information is protected"}),e.jsx("p",{className:"mt-1 max-w-xl text-xs leading-5 text-white/50",children:"Your client profile and identity information are available only through your authenticated client portal."})]})]}),e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-[#B8860B]",children:[e.jsx(h,{className:"h-3.5 w-3.5"}),"Secure Client Portal"]})]})})]}),j&&e.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm",onClick:()=>l(null),children:[e.jsx("button",{type:"button",onClick:()=>l(null),className:`\r
              absolute\r
              right-4\r
              top-4\r
              flex\r
              h-10\r
              w-10\r
              items-center\r
              justify-center\r
              rounded-full\r
              bg-white/10\r
              text-white\r
              transition\r
              hover:bg-white/20\r
              sm:right-6\r
              sm:top-6\r
            `,children:e.jsx(z,{className:"h-5 w-5"})}),e.jsxs("div",{className:"relative max-h-[90vh] max-w-[95vw]",onClick:t=>t.stopPropagation(),children:[e.jsx("img",{src:j,alt:"Identity document",className:`\r
                max-h-[88vh]\r
                max-w-[95vw]\r
                rounded-xl\r
                object-contain\r
                shadow-2xl\r
              `}),e.jsxs("div",{className:"absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-md",children:[e.jsx(R,{className:"h-3 w-3"}),"Click outside to close"]})]})]})]})}function p({icon:r,title:s,description:d,onView:c}){return e.jsxs("div",{className:"group flex flex-col gap-4 rounded-xl border border-[#E7E3D8] bg-white p-4 transition hover:border-[#B8860B]/30 hover:bg-[#F8F7F3] sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B8860B]/10",children:r}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-sm font-semibold text-[#172033]",children:s}),e.jsx("p",{className:"mt-0.5 text-xs text-gray-400",children:d})]})]}),e.jsxs("button",{type:"button",onClick:c,className:`\r
          inline-flex\r
          w-fit\r
          shrink-0\r
          items-center\r
          gap-2\r
          rounded-lg\r
          border\r
          border-[#E7E3D8]\r
          bg-white\r
          px-3\r
          py-2\r
          text-xs\r
          font-bold\r
          text-[#172033]\r
          transition\r
          hover:border-[#B8860B]/30\r
          hover:text-[#996515]\r
        `,children:[e.jsx(R,{className:"h-3.5 w-3.5"}),"View"]})]})}export{xe as default};
