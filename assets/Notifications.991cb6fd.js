import v from"./Notification.f48d0d05.js";import{at as g,_ as k,m as w,n as d,f as _,q as $,h,H as y,o as a,c as r,x as N,F as S,v as f,I as b,D as m,b as A,am as B,w as I,A as P,B as U,C as j}from"./entry.217d5785.js";import{t as z}from"./tw-merge.15fb7221.js";import{u as D,L as F}from"./ui.config.cf6e55cf.js";import"./Icon.721ec94f.js";import"./Avatar.c2fc7fd1.js";import"./Button.12f53381.js";import"./Link.71a146bf.js";import"./nuxt-link.61018e0a.js";function L(){const t=g("notifications",()=>[]);function o(n){const e={id:new Date().getTime().toString(),...n};return t.value.findIndex(l=>l.id===e.id)===-1&&t.value.push(e),e}function i(n){t.value=t.value.filter(e=>e.id!==n)}return{add:o,remove:i}}const O=w(d.ui.strategy,d.ui.notifications,F),R=_({components:{UNotification:v},inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(t){const{ui:o,attrs:i}=D("notifications",$(t,"ui"),O),n=L(),e=g("notifications",()=>[]),c=h(()=>z(y(o.value.wrapper,o.value.position,o.value.width),t.class));return{ui:o,attrs:i,toast:n,notifications:e,wrapperClass:c}}});function T(t,o,i,n,e,c){const l=v;return a(),r("div",m({class:t.wrapperClass,role:"region"},t.attrs),[t.notifications.length?(a(),r("div",{key:0,class:N(t.ui.container)},[(a(!0),r(S,null,f(t.notifications,s=>(a(),r("div",{key:s.id},[A(l,m(s,{class:s.click&&"cursor-pointer",onClick:u=>s.click&&s.click(s),onClose:u=>t.toast.remove(s.id)}),B({_:2},[f(t.$slots,(u,p)=>({name:p,fn:I(C=>[P(t.$slots,p,U(j(C)))])}))]),1040,["class","onClick","onClose"])]))),128))],2)):b("",!0)],16)}const Q=k(R,[["render",T]]);export{Q as default};