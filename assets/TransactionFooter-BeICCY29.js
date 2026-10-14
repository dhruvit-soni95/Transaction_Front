import{j as e}from"./charts-BhgxngkN.js";import{r as h}from"./utilities-Bs6HhBiT.js";import{u as S,d as $}from"./react-BJDuBWr9.js";import{A as w}from"./arrow-right-DOSG1Dq_.js";import{c as A,X as R,M as E,S as _}from"./index-BjfySP0b.js";import{C as I}from"./chevron-down-D3fgytCL.js";import{L as H}from"./lock-keyhole-B4QNqlFo.js";import{C as M}from"./check-D0eclrdV.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=A("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),U=()=>{const o=S(),a=$(),[r,s]=h.useState(!1),[n,c]=h.useState(!0),[d,m]=h.useState(!1),[t,g]=h.useState(!1);h.useEffect(()=>{let l=window.scrollY;const i=()=>{const x=window.scrollY;if(m(x>18),x<=10){c(!0),l=x;return}x>l+4&&c(!1),x<l-4&&c(!0),l=x};return window.addEventListener("scroll",i,{passive:!0}),()=>{window.removeEventListener("scroll",i)}},[]),h.useEffect(()=>{if(a.pathname!=="/"){g(!1);return}const l=Array.from(document.querySelectorAll("[data-header-theme]"));if(!l.length){g(!1);return}const i=new IntersectionObserver(x=>{const P=x.some(C=>C.isIntersecting&&C.target.getAttribute("data-header-theme")==="dark");g(P)},{root:null,rootMargin:"-82px 0px -55% 0px",threshold:0});return l.forEach(x=>{i.observe(x)}),()=>{i.disconnect()}},[a.pathname]),h.useEffect(()=>{s(!1)},[a.pathname]);const f=()=>{if(s(!1),a.pathname==="/"){window.scrollTo({top:0,behavior:"smooth"});return}o("/")},p=l=>{if(s(!1),a.pathname==="/"){const i=document.getElementById(l);i&&i.scrollIntoView({behavior:"smooth",block:"start"});return}o("/"),window.setTimeout(()=>{const i=document.getElementById(l);i&&i.scrollIntoView({behavior:"smooth",block:"start"})},180)},j=()=>{s(!1),o("/transactions/contact")},v=()=>{s(!1),o("/transactions/login")},N=()=>{s(!1),o("/transactions/payment")},y=a.pathname==="/",k=a.pathname==="/transactions/contact",T=a.pathname==="/transactions/payment";return e.jsx(e.Fragment,{children:e.jsxs("header",{className:`
                    fixed
                    left-0
                    right-0
                    top-0
                    z-[60]
                    transition-transform
                    duration-300
                    ease-out
                    ${n?"translate-y-0":"-translate-y-full"}
                `,children:[e.jsx("div",{className:`
                        absolute
                        inset-x-0
                        top-0
                        h-[82px]
                        border-b
                        transition-all
                        duration-300

                        ${t?`
                                    border-white/10
                                    bg-slate-950/65
                                    shadow-[0_12px_40px_rgba(0,0,0,0.18)]
                                    backdrop-blur-2xl
                                `:d?`
                                        border-slate-200/80
                                        bg-white/94
                                        shadow-[0_12px_40px_rgba(15,23,42,0.08)]
                                        backdrop-blur-2xl
                                    `:`
                                        border-white/50
                                        bg-white/72
                                        backdrop-blur-xl
                                    `}
                    `}),e.jsx("div",{className:`
                        pointer-events-none
                        absolute
                        left-0
                        right-0
                        top-0
                        h-[2px]
                        bg-gradient-to-r
                        from-blue-600
                        via-indigo-500
                        to-cyan-400
                        transition-opacity
                        duration-300
                        ${d?"opacity-100":"opacity-60"}
                    `}),e.jsxs("div",{className:"relative mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12",children:[e.jsxs("button",{type:"button",onClick:f,"aria-label":"RealtorParth Home",className:`
                            group
                            flex
                            shrink-0
                            items-center
                            gap-3
                            rounded-2xl
                            py-1
                            pr-3
                            transition
                            duration-200
                            ${t?"hover:bg-white/10":"hover:bg-slate-50/80"}
                        `,children:[e.jsx("img",{src:"/logo_black.png",alt:"RealtorParth",className:`
                                h-[58px]
                                w-auto
                                object-contain
                                transition
                                duration-300
                                group-hover:scale-[1.025]
                                ${t?"brightness-0 invert":""}
                            `}),e.jsxs("div",{className:`
                                hidden
                                border-l
                                pl-3
                                xl:block
                                ${t?"border-white/20":"border-slate-200"}
                            `,children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:`
                                        text-[11px]
                                        font-black
                                        tracking-wide
                                        ${t?"text-white":"text-slate-950"}
                                    `,children:"TRANSACTION"}),e.jsx("span",{className:`
                                        rounded-full
                                        px-1.5
                                        py-0.5
                                        text-[8px]
                                        font-black
                                        uppercase
                                        tracking-[0.12em]
                                        ${t?"bg-white/10 text-cyan-300":"bg-blue-50 text-blue-600"}
                                    `,children:"PRO"})]}),e.jsx("p",{className:`
                                    mt-0.5
                                    text-[9px]
                                    font-medium
                                    ${t?"text-white/50":"text-slate-400"}
                                `,children:"Secure transaction workspace"})]})]}),e.jsxs("nav",{className:"hidden items-center gap-1 lg:flex",children:[e.jsx(b,{active:y,darkBackground:t,onClick:f,children:"Home"}),e.jsx(b,{darkBackground:t,onClick:()=>p("platform"),children:"Platform"}),e.jsx(b,{darkBackground:t,onClick:()=>p("security"),children:"Security"}),e.jsx(b,{onClick:j,active:k,darkBackground:t,children:"Contact"})]}),e.jsxs("div",{className:"hidden items-center gap-2 lg:flex",children:[e.jsx("button",{type:"button",onClick:v,className:`
                                rounded-xl
                                px-4
                                py-2.5
                                text-sm
                                font-semibold
                                transition
                                duration-200
                                ${t?"text-white/80 hover:bg-white/10 hover:text-white":"text-slate-600 hover:bg-slate-100 hover:text-slate-950"}
                            `,children:"Sign in"}),e.jsx("div",{className:`
                                mx-1
                                h-6
                                w-px
                                ${t?"bg-white/15":"bg-slate-200"}
                            `}),e.jsxs("button",{type:"button",onClick:N,className:`
                                group
                                relative
                                inline-flex
                                items-center
                                gap-2
                                overflow-hidden
                                rounded-xl
                                px-5
                                py-3
                                text-sm
                                font-bold
                                text-white
                                shadow-[0_10px_25px_rgba(37,99,235,0.18)]
                                transition
                                duration-300
                                hover:-translate-y-0.5
                                hover:shadow-[0_15px_32px_rgba(37,99,235,0.28)]
                                ${T?"bg-blue-700":"bg-slate-950 hover:bg-blue-700"}
                            `,children:[e.jsx("span",{className:`\r
                                    pointer-events-none\r
                                    absolute\r
                                    inset-y-0\r
                                    -left-10\r
                                    w-8\r
                                    rotate-[20deg]\r
                                    bg-white/20\r
                                    blur-sm\r
                                    transition\r
                                    duration-700\r
                                    group-hover:left-[110%]\r
                                `}),e.jsx("span",{className:"relative",children:"Get started"}),e.jsx(w,{className:`\r
                                    relative\r
                                    h-4\r
                                    w-4\r
                                    transition\r
                                    duration-300\r
                                    group-hover:translate-x-1\r
                                `})]})]}),e.jsx("button",{type:"button",onClick:()=>s(l=>!l),className:`
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-xl
                            border
                            transition
                            duration-200
                            lg:hidden
                            ${r?t?"border-white/20 bg-white/10 text-white":"border-blue-200 bg-blue-50 text-blue-700":t?"border-white/15 bg-white/10 text-white hover:bg-white/15":"border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50"}
                        `,"aria-label":r?"Close menu":"Open menu","aria-expanded":r,children:r?e.jsx(R,{className:"h-5 w-5"}):e.jsx(E,{className:"h-5 w-5"})})]}),e.jsx("div",{className:`
                        relative
                        overflow-hidden
                        border-b
                        transition-all
                        duration-300
                        lg:hidden
                        ${t?`
                                    border-white/10
                                    bg-slate-950/98
                                    shadow-[0_20px_40px_rgba(0,0,0,0.2)]
                                    backdrop-blur-2xl
                                `:`
                                    border-slate-200
                                    bg-white/98
                                    shadow-[0_20px_40px_rgba(15,23,42,0.08)]
                                    backdrop-blur-2xl
                                `}
                        ${r?"max-h-[700px] opacity-100":"max-h-0 opacity-0"}
                    `,children:e.jsxs("div",{className:"mx-auto max-w-[1440px] px-5 pb-7 pt-4 sm:px-8",children:[e.jsxs("div",{className:`
                                mb-5
                                flex
                                items-center
                                gap-3
                                rounded-2xl
                                border
                                p-3.5
                                ${t?"border-white/10 bg-white/5":"border-slate-100 bg-slate-50/70"}
                            `,children:[e.jsx("div",{className:`
                                    flex
                                    h-11
                                    w-11
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    shadow-sm
                                    ${t?"bg-white/10":"bg-white"}
                                `,children:e.jsx("img",{src:"/realtorparth-logo.svg",alt:"RealtorParth",className:`
                                        h-7
                                        w-auto
                                        object-contain
                                        ${t?"brightness-0 invert":""}
                                    `})}),e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:`
                                            text-xs
                                            font-black
                                            ${t?"text-white":"text-slate-950"}
                                        `,children:"Transaction Platform"}),e.jsx("span",{className:`
                                            rounded-full
                                            px-1.5
                                            py-0.5
                                            text-[8px]
                                            font-black
                                            uppercase
                                            tracking-[0.12em]
                                            ${t?"bg-white/10 text-cyan-300":"bg-blue-100 text-blue-700"}
                                        `,children:"PRO"})]}),e.jsx("p",{className:`
                                        mt-0.5
                                        text-[10px]
                                        font-medium
                                        ${t?"text-white/50":"text-slate-400"}
                                    `,children:"Secure transaction management"})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx(u,{active:y,darkBackground:t,onClick:f,children:"Home"}),e.jsx(u,{darkBackground:t,onClick:()=>p("platform"),children:"Platform"}),e.jsx(u,{darkBackground:t,onClick:()=>p("security"),children:"Security"}),e.jsx(u,{active:k,darkBackground:t,onClick:j,children:"Contact"})]}),e.jsx("div",{className:`
                                my-5
                                h-px
                                ${t?"bg-white/10":"bg-slate-200"}
                            `}),e.jsxs("div",{className:`
                                mb-4
                                flex
                                items-center
                                gap-2
                                text-[10px]
                                font-semibold
                                ${t?"text-white/50":"text-slate-400"}
                            `,children:[e.jsx(_,{className:"h-3.5 w-3.5 text-emerald-500"}),"Secure transaction workspace"]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2.5",children:[e.jsx("button",{type:"button",onClick:v,className:`
                                    rounded-xl
                                    border
                                    px-4
                                    py-3.5
                                    text-sm
                                    font-bold
                                    shadow-sm
                                    transition
                                    duration-200
                                    ${t?"border-white/15 bg-white/10 text-white hover:bg-white/15":"border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}
                                `,children:"Sign in"}),e.jsxs("button",{type:"button",onClick:N,className:`\r
                                    group\r
                                    inline-flex\r
                                    items-center\r
                                    justify-center\r
                                    gap-2\r
                                    rounded-xl\r
                                    bg-slate-950\r
                                    px-4\r
                                    py-3.5\r
                                    text-sm\r
                                    font-bold\r
                                    text-white\r
                                    shadow-[0_10px_25px_rgba(15,23,42,0.16)]\r
                                    transition\r
                                    duration-200\r
                                    hover:bg-blue-700\r
                                `,children:["Get started",e.jsx(w,{className:`\r
                                        h-4\r
                                        w-4\r
                                        transition\r
                                        duration-200\r
                                        group-hover:translate-x-1\r
                                    `})]})]})]})})]})})},b=({children:o,onClick:a,active:r=!1,darkBackground:s=!1})=>e.jsxs("button",{type:"button",onClick:a,className:`
                group
                relative
                rounded-xl
                px-4
                py-2.5
                text-sm
                transition
                duration-200
                ${r?s?"font-bold text-white":"font-bold text-slate-950":s?"font-medium text-white/70 hover:bg-white/10 hover:text-white":"font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-950"}
            `,children:[e.jsx("span",{className:"relative z-10",children:o}),r&&e.jsx("span",{className:`
                        absolute
                        bottom-1
                        left-1/2
                        h-1
                        w-5
                        -translate-x-1/2
                        rounded-full
                        ${s?"bg-gradient-to-r from-cyan-300 to-blue-400":"bg-gradient-to-r from-blue-600 to-cyan-500"}
                    `}),!r&&e.jsx("span",{className:`
                        absolute
                        bottom-1
                        left-1/2
                        h-1
                        w-0
                        -translate-x-1/2
                        rounded-full
                        transition-all
                        duration-200
                        group-hover:w-3
                        ${s?"bg-cyan-300":"bg-blue-500"}
                    `})]}),u=({children:o,onClick:a,active:r=!1,darkBackground:s=!1})=>e.jsxs("button",{type:"button",onClick:a,className:`
                group
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                px-4
                py-3.5
                text-left
                text-sm
                transition
                duration-200
                ${r?s?"bg-white/10 font-bold text-white":"bg-blue-50 font-bold text-blue-700":s?"font-semibold text-white/70 hover:bg-white/10 hover:text-white":"font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-950"}
            `,children:[e.jsxs("span",{className:"flex items-center gap-2.5",children:[r&&e.jsx("span",{className:`
                            h-1.5
                            w-1.5
                            rounded-full
                            ${s?"bg-cyan-300":"bg-blue-600"}
                        `}),o]}),e.jsx(I,{className:`
                    h-4
                    w-4
                    transition
                    duration-200
                    ${r?s?"rotate-[-90deg] text-cyan-300":"rotate-[-90deg] text-blue-500":s?"text-white/30 group-hover:translate-x-0.5":"text-slate-300 group-hover:translate-x-0.5"}
                `})]}),W=()=>{const o=S(),a=$(),r=c=>{o(c),window.scrollTo({top:0,behavior:"smooth"})},s=c=>{var d;if(a.pathname!=="/"){o("/"),setTimeout(()=>{var m;(m=document.getElementById(c))==null||m.scrollIntoView({behavior:"smooth",block:"start"})},100);return}(d=document.getElementById(c))==null||d.scrollIntoView({behavior:"smooth",block:"start"})},n=({children:c,onClick:d})=>e.jsxs("button",{type:"button",onClick:d,className:`\r
        group\r
        inline-flex\r
        items-center\r
        gap-1.5\r
        text-left\r
        text-[14px]\r
        font-medium\r
        text-slate-400\r
        transition-all\r
        duration-200\r
        hover:text-white\r
      `,children:[e.jsx("span",{children:c}),e.jsx(z,{size:13,className:`\r
          opacity-0\r
          -translate-x-1\r
          translate-y-1\r
          transition-all\r
          duration-200\r
          group-hover:translate-x-0\r
          group-hover:translate-y-0\r
          group-hover:opacity-100\r
        `})]});return e.jsxs("footer",{className:"relative overflow-hidden bg-[#06152f] text-white",children:[e.jsx("div",{className:"h-px w-full bg-white/[0.08]"}),e.jsxs("div",{className:"mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10",children:[e.jsxs("div",{className:"grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]",children:[e.jsxs("div",{className:"max-w-sm",children:[e.jsx("button",{type:"button",onClick:()=>r("/"),className:"inline-flex items-center","aria-label":"RealtorParth home",children:e.jsx("img",{src:"/logo_black.png",alt:"RealtorParth",className:"h-20 w-auto brightness-0 invert"})}),e.jsx("p",{className:"mt-5 max-w-xs text-[14px] leading-6 text-slate-400",children:"A secure transaction workspace built to simplify real estate transactions from start to finish."}),e.jsxs("div",{className:"mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2",children:[e.jsx("span",{className:"flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/10",children:e.jsx(H,{size:11,className:"text-emerald-400"})}),e.jsx("span",{className:"text-[12px] font-medium text-slate-300",children:"Secure transaction platform"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-[13px] font-semibold uppercase tracking-[0.16em] text-white",children:"Platform"}),e.jsxs("div",{className:"mt-5 flex flex-col items-start gap-3.5",children:[e.jsx(n,{onClick:()=>r("/"),children:"Home"}),e.jsx(n,{onClick:()=>s("platform"),children:"Platform"}),e.jsx(n,{onClick:()=>s("workflow"),children:"Workflow"}),e.jsx(n,{onClick:()=>s("security"),children:"Security"}),e.jsx(n,{onClick:()=>r("/transactions/contact"),children:"Contact"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-[13px] font-semibold uppercase tracking-[0.16em] text-white",children:"Workflow"}),e.jsxs("div",{className:"mt-5 flex flex-col items-start gap-3.5",children:[e.jsx(n,{onClick:()=>s("workflow"),children:"Create transaction"}),e.jsx(n,{onClick:()=>s("workflow"),children:"Add parties"}),e.jsx(n,{onClick:()=>s("workflow"),children:"Compliance"}),e.jsx(n,{onClick:()=>s("workflow"),children:"Documents"}),e.jsx(n,{onClick:()=>s("workflow"),children:"Signatures"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-[13px] font-semibold uppercase tracking-[0.16em] text-white",children:"Account"}),e.jsxs("div",{className:"mt-5 flex flex-col items-start gap-3.5",children:[e.jsx(n,{onClick:()=>r("/transactions/login"),children:"Sign in"}),e.jsx(n,{onClick:()=>r("/transactions/payment"),children:"Start a transaction"}),e.jsx(n,{onClick:()=>r("/transactions/contact"),children:"Contact support"})]})]})]}),e.jsxs("div",{className:"mt-12 flex flex-col gap-5 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(M,{size:14,className:"text-emerald-400"}),e.jsx("span",{className:"text-[13px] text-slate-400",children:"Built for secure transactions"})]}),e.jsx("div",{className:"hidden h-4 w-px bg-white/10 sm:block"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(_,{size:14,className:"text-blue-400"}),e.jsx("span",{className:"text-[13px] text-slate-400",children:"Security focused"})]})]}),e.jsxs("button",{type:"button",onClick:()=>r("/transactions/payment"),className:`\r
              group\r
              inline-flex\r
              w-fit\r
              items-center\r
              gap-2\r
              rounded-lg\r
              bg-white\r
              px-4\r
              py-2.5\r
              text-[13px]\r
              font-semibold\r
              text-[#06152f]\r
              shadow-sm\r
              transition-all\r
              duration-200\r
              hover:-translate-y-0.5\r
              hover:bg-slate-100\r
            `,children:["Start a transaction",e.jsx(w,{size:15,className:`\r
                transition-transform\r
                duration-200\r
                group-hover:translate-x-0.5\r
              `})]})]})]}),e.jsx("div",{className:"border-t border-white/[0.08]",children:e.jsxs("div",{className:"mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10",children:[e.jsxs("p",{className:"text-[12px] text-slate-500",children:["© ",new Date().getFullYear()," RealtorParth. All rights reserved."]}),e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx("button",{type:"button",onClick:()=>r("/transactions/contact"),className:`\r
                text-[12px]\r
                font-medium\r
                text-slate-500\r
                transition-colors\r
                hover:text-slate-300\r
              `,children:"Support"}),e.jsx("span",{className:"h-3 w-px bg-white/10"}),e.jsx("span",{className:"text-[12px] text-slate-500",children:"Secure & private"})]})]})})]})};export{U as T,W as a};
