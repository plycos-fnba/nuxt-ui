import{_ as n,m as r,n as a,f as l,q as u,h as c,H as i,o as p,c as f,D as d}from"./entry.525198f2.js";import{t as m}from"./tw-merge.1b24747d.js";import{u as g,D as k}from"./ui.config.a3f0ce08.js";const _=r(a.ui.strategy,a.ui.skeleton,k),v=l({inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:s,attrs:t}=g("skeleton",u(e,"ui"),_),o=c(()=>m(i(s.value.base,s.value.background,s.value.rounded),e.class));return{ui:s,attrs:t,skeletonClass:o}}});function C(e,s,t,o,b,y){return p(),f("div",d({class:e.skeletonClass},e.attrs),null,16)}const w=n(v,[["render",C]]);export{w as default};