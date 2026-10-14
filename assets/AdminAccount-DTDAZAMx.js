import{j as e}from"./charts-BhgxngkN.js";import{r as m,z as o}from"./utilities-Bs6HhBiT.js";import{u as E}from"./react-BJDuBWr9.js";import{A as C}from"./arrow-left-DGfu1uKW.js";import{B as h}from"./building-2-B13QUkLJ.js";import{C as S}from"./check-circle-2-BbZTax0R.js";import{P as N}from"./phone-BLGuXPvB.js";import{M as v}from"./mail-Ct2QnhDx.js";import{M as w}from"./map-pin-BhnMPYGT.js";import{U as B}from"./user-round-BvXA8pWl.js";import{L as P}from"./loader-2-ZCZXmPLQ.js";import{S as F}from"./save-Gftc26p2.js";import"./index-DbWQHp3R.js";import"./supabase-DN6kyvzN.js";function H(){const d=E(),[u]=m.useState("http://100.121.62.83:8081"),[n,f]=m.useState({brokerageName:"",brokerageStreetNum:"",brokerageStreet:"",brokerageCity:"",brokerageState:"",brokeragePostalCode:"",brokeragePhone:"",brokerageEmail:"",repName:"",repPhone:"",repEmail:""}),[A,y]=m.useState(!0),[p,k]=m.useState(!0),[b,j]=m.useState(!1),g=()=>{try{const r=localStorage.getItem("transactionUser");if(!r)return null;const s=JSON.parse(r);return s!=null&&s.id?s:null}catch(r){return console.error("Invalid transactionUser:",r),null}};m.useEffect(()=>{if(!g()){o.error("Please login to access transaction account"),d("/admin/transactions/login",{replace:!0});return}k(!1)},[d]),m.useEffect(()=>{if(p)return;(async()=>{const s=g();if(!(s!=null&&s.id)){o.error("User not found. Please login again."),d("/admin/transactions/login",{replace:!0});return}try{const l=new AbortController,x=setTimeout(()=>{l.abort()},1e4),i=await fetch(`${u}/api/admin/settings/${s.id}`,{signal:l.signal});clearTimeout(x);let c;try{c=await i.json()}catch{throw new Error("Invalid server response")}if(!i.ok)throw new Error((c==null?void 0:c.message)||`Error ${i.status}`);if(c!=null&&c.data){const t=c.data;f({brokerageName:(t==null?void 0:t.brokerageName)||"",brokerageStreetNum:(t==null?void 0:t.brokerageStreetNum)||"",brokerageStreet:(t==null?void 0:t.brokerageStreet)||"",brokerageCity:(t==null?void 0:t.brokerageCity)||"",brokerageState:(t==null?void 0:t.brokerageState)||"",brokeragePostalCode:(t==null?void 0:t.brokeragePostalCode)||"",brokeragePhone:(t==null?void 0:t.brokeragePhone)||"",brokerageEmail:(t==null?void 0:t.brokerageEmail)||"",repName:(t==null?void 0:t.repName)||"",repPhone:(t==null?void 0:t.repPhone)||"",repEmail:(t==null?void 0:t.repEmail)||""})}}catch(l){console.error("Fetch Settings Error:",l),l.name==="AbortError"?o.error("Request timed out"):l.name==="TypeError"?o.error("Network error"):o.error(l.message||"Failed to load settings")}finally{y(!1)}})()},[p,d,u]);const a=(r,s)=>{f(l=>({...l,[r]:s}))},D=async()=>{const r=g();if(!(r!=null&&r.id)){o.error("User not found. Please login again."),d("/admin/transactions/login",{replace:!0});return}if(!n.brokerageName.trim()||!n.repName.trim()){o.error("Brokerage name and representative name are required");return}try{j(!0);const s=new AbortController,l=setTimeout(()=>{s.abort()},1e4),x=await fetch(`${u}/api/admin/settings/save`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:r.id,...n}),signal:s.signal});clearTimeout(l);let i;try{i=await x.json()}catch{throw new Error("Invalid server response")}if(!x.ok)throw new Error((i==null?void 0:i.message)||`Error ${x.status}`);if(!i.success)throw new Error(i.message||"Failed to save settings");o.success("Settings saved successfully")}catch(s){console.error("Save Settings Error:",s),s.name==="AbortError"?o.error("Request timed out"):s.name==="TypeError"?o.error("Network error"):o.error(s.message||"Something went wrong")}finally{j(!1)}};return p?e.jsx("div",{className:"min-h-screen bg-[#F8F7F3] flex items-center justify-center px-6",children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx("div",{className:"h-11 w-11 rounded-full border-4 border-[#E7E3D8] border-t-[#B8860B] animate-spin"}),e.jsx("p",{className:"text-sm font-medium text-[#596174]",children:"Checking authentication..."})]})}):e.jsxs("div",{className:"min-h-screen bg-[#F8F7F3] text-[#172033]",children:[e.jsx("header",{className:"sticky top-0 z-30 border-b border-[#E7E3D8] bg-white/95 backdrop-blur",children:e.jsx("div",{className:"w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"min-h-[76px] flex items-center justify-between gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[e.jsx("button",{type:"button",onClick:()=>d("/transactions"),className:`\r
                  flex h-10 w-10 shrink-0 items-center justify-center\r
                  rounded-xl\r
                  border border-[#E7E3D8]\r
                  bg-white\r
                  text-[#596174]\r
                  transition\r
                  hover:border-[#B8860B]\r
                  hover:text-[#B8860B]\r
                  hover:bg-[#FBF8EF]\r
                `,title:"Back to Transactions",children:e.jsx(C,{className:"h-5 w-5"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#172033]",children:e.jsx(h,{className:"h-4 w-4 text-[#D7B45A]"})}),e.jsx("h1",{className:"truncate text-lg sm:text-xl font-bold text-[#172033]",children:"Account Settings"})]}),e.jsx("p",{className:"mt-1 hidden sm:block text-xs text-[#7A8191]",children:"Manage brokerage and representative details"})]})]}),e.jsxs("div",{className:"hidden sm:flex items-center gap-2 rounded-full border border-[#E7E3D8] bg-[#FBFAF7] px-3 py-1.5",children:[e.jsx(S,{className:"h-4 w-4 text-[#B8860B]"}),e.jsx("span",{className:"text-xs font-semibold text-[#596174]",children:"Account Settings"})]})]})})}),e.jsx("main",{className:"w-full max-w-[1800px] mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8",children:A?e.jsx("div",{className:"flex min-h-[400px] items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx("div",{className:"h-10 w-10 rounded-full border-4 border-[#E7E3D8] border-t-[#B8860B] animate-spin"}),e.jsx("p",{className:"text-sm font-medium text-[#596174]",children:"Loading account settings..."})]})}):e.jsxs("div",{className:"mx-auto w-full max-w-[1200px] space-y-6",children:[e.jsx("div",{className:"rounded-2xl border border-[#E7E3D8] bg-white p-5 sm:p-6",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#172033]",children:e.jsx(h,{className:"h-6 w-6 text-[#D7B45A]"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("h2",{className:"text-base sm:text-lg font-bold text-[#172033]",children:"Brokerage Account"}),e.jsx("p",{className:"mt-1 max-w-2xl text-sm leading-6 text-[#7A8191]",children:"Keep your brokerage and representative information up to date. These details may be used throughout your transaction documents."})]})]})}),e.jsxs("section",{className:"overflow-hidden rounded-2xl border border-[#E7E3D8] bg-white",children:[e.jsx("div",{className:"border-b border-[#E7E3D8] bg-[#FBFAF7] px-5 py-4 sm:px-6",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2E9D3]",children:e.jsx(h,{className:"h-5 w-5 text-[#B8860B]"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-[#172033]",children:"Brokerage Information"}),e.jsx("p",{className:"text-xs text-[#7A8191]",children:"Business and office details"})]})]})}),e.jsx("div",{className:"p-5 sm:p-6",children:e.jsxs("div",{className:"grid grid-cols-1 gap-5 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1.5 block text-sm font-semibold text-[#3E4657]",children:"Brokerage Name"}),e.jsxs("div",{className:"relative",children:[e.jsx(h,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9AA0AD]"}),e.jsx("input",{type:"text",placeholder:"Brokerage Name",value:n.brokerageName,onChange:r=>a("brokerageName",r.target.value),className:`\r
                          w-full rounded-xl\r
                          border border-[#DCD9D1]\r
                          bg-white\r
                          py-2.5 pl-10 pr-3\r
                          text-sm text-[#172033]\r
                          outline-none\r
                          transition\r
                          placeholder:text-[#A4A9B3]\r
                          focus:border-[#B8860B]\r
                          focus:ring-2\r
                          focus:ring-[#B8860B]/10\r
                        `})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1.5 block text-sm font-semibold text-[#3E4657]",children:"Phone"}),e.jsxs("div",{className:"relative",children:[e.jsx(N,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9AA0AD]"}),e.jsx("input",{type:"text",placeholder:"Phone",value:n.brokeragePhone,onChange:r=>a("brokeragePhone",r.target.value),className:`\r
                          w-full rounded-xl\r
                          border border-[#DCD9D1]\r
                          bg-white\r
                          py-2.5 pl-10 pr-3\r
                          text-sm text-[#172033]\r
                          outline-none\r
                          transition\r
                          placeholder:text-[#A4A9B3]\r
                          focus:border-[#B8860B]\r
                          focus:ring-2\r
                          focus:ring-[#B8860B]/10\r
                        `})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1.5 block text-sm font-semibold text-[#3E4657]",children:"Email"}),e.jsxs("div",{className:"relative",children:[e.jsx(v,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9AA0AD]"}),e.jsx("input",{type:"email",placeholder:"Brokerage Email",value:n.brokerageEmail,onChange:r=>a("brokerageEmail",r.target.value),className:`\r
                          w-full rounded-xl\r
                          border border-[#DCD9D1]\r
                          bg-white\r
                          py-2.5 pl-10 pr-3\r
                          text-sm text-[#172033]\r
                          outline-none\r
                          transition\r
                          placeholder:text-[#A4A9B3]\r
                          focus:border-[#B8860B]\r
                          focus:ring-2\r
                          focus:ring-[#B8860B]/10\r
                        `})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1.5 block text-sm font-semibold text-[#3E4657]",children:"Street Number"}),e.jsxs("div",{className:"relative",children:[e.jsx(w,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9AA0AD]"}),e.jsx("input",{type:"text",placeholder:"Street Number",value:n.brokerageStreetNum,maxLength:10,onChange:r=>{const s=r.target.value.replace(/\D/g,"").slice(0,10);a("brokerageStreetNum",s)},className:`\r
                          w-full rounded-xl\r
                          border border-[#DCD9D1]\r
                          bg-white\r
                          py-2.5 pl-10 pr-3\r
                          text-sm text-[#172033]\r
                          outline-none\r
                          transition\r
                          placeholder:text-[#A4A9B3]\r
                          focus:border-[#B8860B]\r
                          focus:ring-2\r
                          focus:ring-[#B8860B]/10\r
                        `})]}),e.jsx("div",{className:"mt-1 flex justify-end",children:e.jsxs("span",{className:"text-[11px] text-[#9AA0AD]",children:[n.brokerageStreetNum.length,"/10"]})})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"mb-1.5 block text-sm font-semibold text-[#3E4657]",children:"Street"}),e.jsxs("div",{className:"relative",children:[e.jsx(w,{className:"pointer-events-none absolute left-3 top-3 h-4 w-4 text-[#9AA0AD]"}),e.jsx("input",{type:"text",placeholder:"Street Address",value:n.brokerageStreet,onChange:r=>a("brokerageStreet",r.target.value),className:`\r
                          w-full rounded-xl\r
                          border border-[#DCD9D1]\r
                          bg-white\r
                          py-2.5 pl-10 pr-3\r
                          text-sm text-[#172033]\r
                          outline-none\r
                          transition\r
                          placeholder:text-[#A4A9B3]\r
                          focus:border-[#B8860B]\r
                          focus:ring-2\r
                          focus:ring-[#B8860B]/10\r
                        `})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1.5 block text-sm font-semibold text-[#3E4657]",children:"City"}),e.jsx("input",{type:"text",placeholder:"City",value:n.brokerageCity,onChange:r=>a("brokerageCity",r.target.value),className:`\r
                        w-full rounded-xl\r
                        border border-[#DCD9D1]\r
                        bg-white\r
                        px-3 py-2.5\r
                        text-sm text-[#172033]\r
                        outline-none\r
                        transition\r
                        placeholder:text-[#A4A9B3]\r
                        focus:border-[#B8860B]\r
                        focus:ring-2\r
                        focus:ring-[#B8860B]/10\r
                      `})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1.5 block text-sm font-semibold text-[#3E4657]",children:"State / Province"}),e.jsx("input",{type:"text",placeholder:"State",value:n.brokerageState,maxLength:2,onChange:r=>{const s=r.target.value.replace(/[^a-zA-Z]/g,"").slice(0,2).toUpperCase();a("brokerageState",s)},className:`\r
                        w-full rounded-xl\r
                        border border-[#DCD9D1]\r
                        bg-white\r
                        px-3 py-2.5\r
                        text-sm text-[#172033]\r
                        outline-none\r
                        transition\r
                        placeholder:text-[#A4A9B3]\r
                        focus:border-[#B8860B]\r
                        focus:ring-2\r
                        focus:ring-[#B8860B]/10\r
                      `}),e.jsx("div",{className:"mt-1 flex justify-end",children:e.jsxs("span",{className:"text-[11px] text-[#9AA0AD]",children:[n.brokerageState.length,"/2"]})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1.5 block text-sm font-semibold text-[#3E4657]",children:"Postal Code"}),e.jsx("input",{type:"text",placeholder:"Postal Code",value:n.brokeragePostalCode,onChange:r=>a("brokeragePostalCode",r.target.value),className:`\r
                        w-full rounded-xl\r
                        border border-[#DCD9D1]\r
                        bg-white\r
                        px-3 py-2.5\r
                        text-sm text-[#172033]\r
                        outline-none\r
                        transition\r
                        placeholder:text-[#A4A9B3]\r
                        focus:border-[#B8860B]\r
                        focus:ring-2\r
                        focus:ring-[#B8860B]/10\r
                      `})]})]})})]}),e.jsxs("section",{className:"overflow-hidden rounded-2xl border border-[#E7E3D8] bg-white",children:[e.jsx("div",{className:"border-b border-[#E7E3D8] bg-[#FBFAF7] px-5 py-4 sm:px-6",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2E9D3]",children:e.jsx(B,{className:"h-5 w-5 text-[#B8860B]"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-[#172033]",children:"Brokerage Representative"}),e.jsx("p",{className:"text-xs text-[#7A8191]",children:"Primary representative contact details"})]})]})}),e.jsx("div",{className:"p-5 sm:p-6",children:e.jsxs("div",{className:"grid grid-cols-1 gap-5 md:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1.5 block text-sm font-semibold text-[#3E4657]",children:"Name"}),e.jsxs("div",{className:"relative",children:[e.jsx(B,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9AA0AD]"}),e.jsx("input",{type:"text",placeholder:"Representative Name",value:n.repName,maxLength:120,onChange:r=>a("repName",r.target.value.slice(0,120)),className:`\r
                          w-full rounded-xl\r
                          border border-[#DCD9D1]\r
                          bg-white\r
                          py-2.5 pl-10 pr-3\r
                          text-sm text-[#172033]\r
                          outline-none\r
                          transition\r
                          placeholder:text-[#A4A9B3]\r
                          focus:border-[#B8860B]\r
                          focus:ring-2\r
                          focus:ring-[#B8860B]/10\r
                        `})]}),e.jsx("div",{className:"mt-1 flex justify-end",children:e.jsxs("span",{className:"text-[11px] text-[#9AA0AD]",children:[n.repName.length,"/120"]})})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1.5 block text-sm font-semibold text-[#3E4657]",children:"Phone"}),e.jsxs("div",{className:"relative",children:[e.jsx(N,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9AA0AD]"}),e.jsx("input",{type:"text",placeholder:"Representative Phone",value:n.repPhone,maxLength:20,onChange:r=>{const s=r.target.value.replace(/[^\d()+\-\s]/g,"").slice(0,20);a("repPhone",s)},className:`\r
                          w-full rounded-xl\r
                          border border-[#DCD9D1]\r
                          bg-white\r
                          py-2.5 pl-10 pr-3\r
                          text-sm text-[#172033]\r
                          outline-none\r
                          transition\r
                          placeholder:text-[#A4A9B3]\r
                          focus:border-[#B8860B]\r
                          focus:ring-2\r
                          focus:ring-[#B8860B]/10\r
                        `})]}),e.jsx("div",{className:"mt-1 flex justify-end",children:e.jsxs("span",{className:"text-[11px] text-[#9AA0AD]",children:[n.repPhone.length,"/20"]})})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"mb-1.5 block text-sm font-semibold text-[#3E4657]",children:"Email"}),e.jsxs("div",{className:"relative",children:[e.jsx(v,{className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9AA0AD]"}),e.jsx("input",{type:"email",placeholder:"Representative Email",value:n.repEmail,maxLength:120,onChange:r=>a("repEmail",r.target.value.slice(0,120)),className:`\r
                          w-full rounded-xl\r
                          border border-[#DCD9D1]\r
                          bg-white\r
                          py-2.5 pl-10 pr-3\r
                          text-sm text-[#172033]\r
                          outline-none\r
                          transition\r
                          placeholder:text-[#A4A9B3]\r
                          focus:border-[#B8860B]\r
                          focus:ring-2\r
                          focus:ring-[#B8860B]/10\r
                        `})]}),e.jsx("div",{className:"mt-1 flex justify-end",children:e.jsxs("span",{className:"text-[11px] text-[#9AA0AD]",children:[n.repEmail.length,"/120"]})})]})]})})]}),e.jsxs("div",{className:"flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end",children:[e.jsx("button",{type:"button",onClick:()=>d("/admin/transactions"),disabled:b,className:`\r
                  rounded-xl\r
                  border border-[#DCD9D1]\r
                  bg-white\r
                  px-5 py-2.5\r
                  text-sm font-semibold\r
                  text-[#596174]\r
                  transition\r
                  hover:border-[#B8860B]\r
                  hover:text-[#B8860B]\r
                  disabled:cursor-not-allowed\r
                  disabled:opacity-50\r
                `,children:"Cancel"}),e.jsx("button",{type:"button",onClick:D,disabled:b,className:`\r
                  inline-flex items-center justify-center gap-2\r
                  rounded-xl\r
                  bg-[#172033]\r
                  px-6 py-2.5\r
                  text-sm font-semibold\r
                  text-white\r
                  shadow-sm\r
                  transition\r
                  hover:bg-[#222D43]\r
                  hover:shadow-md\r
                  disabled:cursor-not-allowed\r
                  disabled:opacity-60\r
                `,children:b?e.jsxs(e.Fragment,{children:[e.jsx(P,{className:"h-4 w-4 animate-spin"}),"Saving..."]}):e.jsxs(e.Fragment,{children:[e.jsx(F,{className:"h-4 w-4 text-[#D7B45A]"}),"Save Settings"]})})]})]})})]})}export{H as default};
