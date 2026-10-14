import{j as e}from"./charts-BhgxngkN.js";import{r as x,z as N}from"./utilities-Bs6HhBiT.js";import{c as T,u as S,a as P,F as p,S as w,H as R,C as L}from"./index-DbWQHp3R.js";import{R as g}from"./refresh-cw-X3ruEatl.js";import{U as j}from"./users-DWy4NTw8.js";import{C as y}from"./check-circle-2-BbZTax0R.js";import{A as v}from"./activity-CVVdScOL.js";import{M as U}from"./map-pin-BhnMPYGT.js";import{H as I}from"./hash-Oiq7HQYj.js";import{C as H}from"./calendar-days-r0SMIvH0.js";import{A as M}from"./arrow-right-QpWmtM3s.js";import"./react-BJDuBWr9.js";import"./supabase-DN6kyvzN.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=T("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),E=t=>{if(!t)return"—";const r=new Date(t);return Number.isNaN(r.getTime())?"—":r.toLocaleDateString("en-CA",{year:"numeric",month:"short",day:"numeric"})},_=t=>{const r=String(t.status||"").trim();return r?r.replace(/[_-]/g," ").replace(/\b\w/g,c=>c.toUpperCase()):"Active"},V=t=>{const r=String(t||"").toLowerCase().trim();return r==="completed"?"border-green-200 bg-green-50 text-green-700":r==="cancelled"||r==="canceled"||r==="terminated"?"border-red-200 bg-red-50 text-red-700":"border-[#B8860B]/25 bg-[#B8860B]/10 text-[#996515]"},f=t=>String(t||"").toLowerCase().trim()==="completed";function re(){const{user:t}=S(),[r,c]=x.useState([]),[k,m]=x.useState(!0),[l,b]=x.useState(!1),d=x.useCallback(async(s=!1)=>{if(!(t!=null&&t.id)){c([]),m(!1);return}try{s?b(!0):m(!0);const i=await fetch(`${P}/api/client/transactions`,{method:"GET",headers:{"Content-Type":"application/json","x-client-id":t.id}}),a=await i.json();if(!i.ok||!a.success)throw new Error((a==null?void 0:a.message)||"Failed to load transactions.");const o=Array.isArray(a.transactions)?a.transactions:[];c(o),s&&o.length>0&&N.success("Transaction information refreshed.")}catch(i){console.error("CLIENT DASHBOARD ERROR:",i),N.error(i instanceof Error?i.message:"Unable to load transactions."),c([])}finally{m(!1),b(!1)}},[t==null?void 0:t.id]);x.useEffect(()=>{d()},[d]);const C=r.flatMap(s=>Array.isArray(s.parties)?s.parties:[]),B=Array.from(new Map(C.map(s=>[String(s._id),s])).values()),D=r.length,u=r.filter(s=>f(s.status)).length,F=r.filter(s=>!f(s.status)).length;return k?e.jsxs("div",{className:"mx-auto w-full max-w-[1500px] space-y-6",children:[e.jsxs("div",{className:"rounded-2xl border border-[#E7E3D8] bg-white p-6",children:[e.jsx("div",{className:"h-4 w-28 animate-pulse rounded bg-gray-200"}),e.jsx("div",{className:"mt-3 h-8 w-80 animate-pulse rounded bg-gray-200"}),e.jsx("div",{className:"mt-3 h-4 w-[420px] max-w-full animate-pulse rounded bg-gray-100"})]}),e.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:[1,2,3,4].map(s=>e.jsx("div",{className:"h-32 animate-pulse rounded-2xl border border-[#E7E3D8] bg-white"},s))}),e.jsx("div",{className:"h-96 animate-pulse rounded-2xl border border-[#E7E3D8] bg-white"})]}):r.length===0?e.jsxs("div",{className:"mx-auto w-full max-w-[1500px] space-y-6",children:[e.jsx("div",{className:"rounded-2xl border border-[#E7E3D8] bg-white p-6 sm:p-7",children:e.jsxs("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B]",children:"Client Portal"}),e.jsxs("h1",{className:"mt-2 text-2xl font-bold tracking-tight text-[#172033] sm:text-3xl",children:["Welcome,"," ",(t==null?void 0:t.name)||"Client"]}),e.jsx("p",{className:"mt-2 max-w-2xl text-sm leading-6 text-gray-500",children:"View your transactions, associated parties and important transaction information from your client portal."})]}),e.jsxs("button",{type:"button",onClick:()=>d(!0),disabled:l,className:`\r
                inline-flex\r
                w-fit\r
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
              `,children:[e.jsx(g,{className:l?"h-4 w-4 animate-spin":"h-4 w-4"}),"Refresh"]})]})}),e.jsxs("div",{className:"rounded-2xl border border-[#E7E3D8] bg-white px-6 py-16 text-center",children:[e.jsx("div",{className:"mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#172033]",children:e.jsx(p,{className:"h-7 w-7 text-[#B8860B]"})}),e.jsx("h2",{className:"mt-5 text-xl font-bold text-[#172033]",children:"No transaction found"}),e.jsx("p",{className:"mx-auto mt-2 max-w-lg text-sm leading-6 text-gray-500",children:"No transaction has been linked to your client account yet. Your transaction manager must add your client email to a transaction party."}),e.jsxs("button",{type:"button",onClick:()=>d(!0),disabled:l,className:`\r
              mt-6\r
              inline-flex\r
              items-center\r
              gap-2\r
              rounded-xl\r
              bg-[#172033]\r
              px-5\r
              py-3\r
              text-sm\r
              font-semibold\r
              text-white\r
              transition\r
              hover:bg-[#222d43]\r
              disabled:opacity-60\r
            `,children:[e.jsx(g,{className:l?"h-4 w-4 animate-spin":"h-4 w-4"}),"Check Again"]})]})]}):e.jsxs("div",{className:"mx-auto w-full max-w-[1500px] space-y-6",children:[e.jsx("section",{className:"rounded-2xl border border-[#E7E3D8] bg-white p-5 sm:p-7",children:e.jsxs("div",{className:"flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B]",children:"Client Portal"}),e.jsxs("h1",{className:"mt-2 text-2xl font-bold tracking-tight text-[#172033] sm:text-3xl",children:["Welcome,"," ",(t==null?void 0:t.name)||"Client"]}),e.jsx("p",{className:"mt-2 max-w-2xl text-sm leading-6 text-gray-500",children:"View your transaction information, associated parties and current transaction status."})]}),e.jsxs("button",{type:"button",onClick:()=>d(!0),disabled:l,className:`\r
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
            `,children:[e.jsx(g,{className:l?"h-4 w-4 animate-spin":"h-4 w-4"}),"Refresh"]})]})}),e.jsxs("section",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:[e.jsxs("div",{className:"rounded-2xl border border-[#E7E3D8] bg-white p-5 transition hover:shadow-sm",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-[#B8860B]/10",children:e.jsx(p,{className:"h-5 w-5 text-[#996515]"})}),e.jsx("span",{className:"text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400",children:"Transactions"})]}),e.jsx("p",{className:"mt-5 text-2xl font-bold text-[#172033]",children:D}),e.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Total transactions"})]}),e.jsxs("div",{className:"rounded-2xl border border-[#E7E3D8] bg-white p-5 transition hover:shadow-sm",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50",children:e.jsx(j,{className:"h-5 w-5 text-blue-600"})}),e.jsx("span",{className:"text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400",children:"Parties"})]}),e.jsx("p",{className:"mt-5 text-2xl font-bold text-[#172033]",children:B.length}),e.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"People associated with your transactions"})]}),e.jsxs("div",{className:"rounded-2xl border border-[#E7E3D8] bg-white p-5 transition hover:shadow-sm",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-green-50",children:e.jsx(y,{className:"h-5 w-5 text-green-600"})}),e.jsx("span",{className:"text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400",children:"Completed"})]}),e.jsx("p",{className:"mt-5 text-2xl font-bold text-[#172033]",children:u}),e.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Completed transactions"})]}),e.jsxs("div",{className:"rounded-2xl border border-[#E7E3D8] bg-white p-5 transition hover:shadow-sm",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-[#B8860B]/10",children:e.jsx(w,{className:"h-5 w-5 text-[#996515]"})}),e.jsx("span",{className:"text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400",children:"Identity"})]}),e.jsx("p",{className:"mt-5 text-xl font-bold text-[#172033]",children:t!=null&&t.isVerified?"Verified":"Pending"}),e.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Identity verification"})]})]}),e.jsx("section",{className:"rounded-2xl border border-[#E7E3D8] bg-white px-5 py-4 sm:px-6",children:e.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-[#172033]",children:e.jsx(v,{className:"h-4 w-4 text-[#B8860B]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-bold text-[#172033]",children:"Transaction Activity"}),e.jsx("p",{className:"text-xs text-gray-400",children:"Current status across your transactions"})]})]}),e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsxs("div",{className:"text-left sm:text-right",children:[e.jsx("p",{className:"text-lg font-bold text-[#172033]",children:F}),e.jsx("p",{className:"text-[10px] uppercase tracking-wide text-gray-400",children:"Active"})]}),e.jsx("div",{className:"h-8 w-px bg-[#E7E3D8]"}),e.jsxs("div",{className:"text-left sm:text-right",children:[e.jsx("p",{className:"text-lg font-bold text-[#172033]",children:u}),e.jsx("p",{className:"text-[10px] uppercase tracking-wide text-gray-400",children:"Completed"})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-end justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.18em] text-[#B8860B]",children:"Your Transactions"}),e.jsx("h2",{className:"mt-1 text-xl font-bold text-[#172033]",children:"Transaction Overview"})]}),e.jsxs("span",{className:"text-xs font-medium text-gray-400",children:[r.length," ",r.length===1?"transaction":"transactions"]})]}),e.jsx("div",{className:"space-y-4",children:r.map((s,i)=>{const a=Array.isArray(s.parties)?s.parties:[],o=f(s.status);return e.jsxs("article",{className:`\r
                    overflow-hidden\r
                    rounded-2xl\r
                    border\r
                    border-[#E7E3D8]\r
                    bg-white\r
                    transition\r
                    hover:shadow-sm\r
                  `,children:[e.jsx("div",{className:"border-b border-[#E7E3D8] p-5 sm:p-6",children:e.jsxs("div",{className:"flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between",children:[e.jsxs("div",{className:"flex min-w-0 gap-4",children:[e.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#172033]",children:e.jsx(R,{className:"h-5 w-5 text-[#B8860B]"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400",children:"Transaction"}),e.jsx("h3",{className:"mt-1 truncate text-lg font-bold text-[#172033] sm:text-xl",children:s.name||"Transaction"}),s.propertyAddress&&e.jsxs("div",{className:"mt-2 flex items-start gap-2",children:[e.jsx(U,{className:"mt-0.5 h-4 w-4 shrink-0 text-gray-400"}),e.jsx("p",{className:"text-sm leading-5 text-gray-500",children:s.propertyAddress})]})]})]}),e.jsxs("div",{className:`
                          inline-flex
                          w-fit
                          shrink-0
                          items-center
                          gap-2
                          rounded-full
                          border
                          px-3
                          py-2
                          text-xs
                          font-bold
                          ${V(s.status)}
                        `,children:[o?e.jsx(y,{className:"h-3.5 w-3.5"}):e.jsx(Y,{className:"h-3.5 w-3.5"}),_(s)]})]})}),e.jsxs("div",{className:"grid gap-3 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4",children:[e.jsxs("div",{className:"rounded-xl border border-[#E7E3D8] bg-[#F8F7F3] p-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(I,{className:"h-4 w-4 text-gray-400"}),e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide text-gray-400",children:"Agreement Number"})]}),e.jsx("p",{className:"mt-2 break-all text-sm font-semibold text-[#172033]",children:s.agreementnumber||"Not assigned"})]}),e.jsxs("div",{className:"rounded-xl border border-[#E7E3D8] bg-[#F8F7F3] p-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(p,{className:"h-4 w-4 text-gray-400"}),e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide text-gray-400",children:"Transaction Type"})]}),e.jsx("p",{className:"mt-2 text-sm font-semibold text-[#172033]",children:s.type||"Not specified"})]}),e.jsxs("div",{className:"rounded-xl border border-[#E7E3D8] bg-[#F8F7F3] p-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(H,{className:"h-4 w-4 text-gray-400"}),e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide text-gray-400",children:"Created"})]}),e.jsx("p",{className:"mt-2 text-sm font-semibold text-[#172033]",children:E(s.createdAt)})]}),e.jsxs("div",{className:"rounded-xl border border-[#E7E3D8] bg-[#F8F7F3] p-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(j,{className:"h-4 w-4 text-gray-400"}),e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide text-gray-400",children:"Parties"})]}),e.jsx("p",{className:"mt-2 text-sm font-semibold text-[#172033]",children:s.partyCount??a.length})]})]}),s.notes&&e.jsx("div",{className:"px-5 pb-5 sm:px-6",children:e.jsxs("div",{className:"rounded-xl border border-[#E7E3D8] bg-[#F8F7F3] p-4",children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400",children:"Transaction Notes"}),e.jsx("p",{className:"mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-600",children:s.notes})]})}),a.length>0&&e.jsxs("div",{className:"border-t border-[#E7E3D8] p-5 sm:p-6",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-[#172033]",children:e.jsx(j,{className:"h-4 w-4 text-[#B8860B]"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-bold text-[#172033]",children:"Transaction Parties"}),e.jsx("p",{className:"text-xs text-gray-400",children:"People associated with this transaction"})]})]}),e.jsxs("span",{className:"text-xs font-semibold text-gray-400",children:[a.length," ",a.length===1?"party":"parties"]})]}),e.jsx("div",{className:"space-y-2",children:a.map((n,A)=>{const h=String(n.email||"").trim().toLowerCase()===String((t==null?void 0:t.email)||"").trim().toLowerCase();return e.jsxs("div",{className:`
                                  flex
                                  flex-col
                                  gap-4
                                  rounded-xl
                                  border
                                  p-4
                                  transition
                                  sm:flex-row
                                  sm:items-center
                                  sm:justify-between
                                  ${h?"border-[#B8860B]/30 bg-[#B8860B]/5":"border-[#E7E3D8] bg-white"}
                                `,children:[e.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[e.jsx("div",{className:`
                                      flex
                                      h-10
                                      w-10
                                      shrink-0
                                      items-center
                                      justify-center
                                      rounded-full
                                      ${h?"bg-[#172033] text-[#B8860B]":"bg-gray-100 text-gray-500"}
                                    `,children:e.jsx($,{})}),e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("p",{className:"truncate text-sm font-semibold text-[#172033]",children:n.name||"Unnamed Party"}),h&&e.jsx("span",{className:"rounded-full bg-[#172033] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#B8860B]",children:"You"})]}),e.jsxs("div",{className:"mt-1 flex flex-wrap items-center gap-x-3 gap-y-1",children:[n.role&&e.jsx("span",{className:"text-xs font-medium text-[#996515]",children:n.role}),n.email&&e.jsx("span",{className:"break-all text-xs text-gray-400",children:n.email})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between gap-4 sm:justify-end",children:[n.phone&&e.jsx("span",{className:"text-xs text-gray-500",children:n.phone}),e.jsx(L,{className:"h-4 w-4 shrink-0 text-gray-300"})]})]},n._id||A)})})]}),e.jsxs("div",{className:"flex flex-col gap-2 border-t border-[#E7E3D8] bg-[#F8F7F3] px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(v,{className:"h-3.5 w-3.5 text-gray-400"}),e.jsx("span",{className:"text-[11px] text-gray-400",children:"Last updated"})]}),e.jsx("span",{className:"text-[11px] font-semibold text-gray-600",children:E(s.updatedAt||s.createdAt)})]})]},s._id||i)})})]}),e.jsx("section",{className:"rounded-2xl border border-[#E7E3D8] bg-[#172033] p-5 sm:p-6",children:e.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10",children:e.jsx(w,{className:"h-4 w-4 text-[#B8860B]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:"Your transaction information"}),e.jsx("p",{className:"mt-1 text-xs leading-5 text-white/50",children:"Your client portal provides access to information associated with your transaction."})]})]}),e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-[#B8860B]",children:[e.jsx("span",{children:"Secure Client Portal"}),e.jsx(M,{className:"h-3.5 w-3.5"})]})]})})]})}function $(){return e.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",className:"h-4 w-4","aria-hidden":"true",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20 21a8 8 0 0 0-16 0"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}export{re as default};
