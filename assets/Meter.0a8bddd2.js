import O from"./Icon.c4983977.js";import{_ as w,m as P,n as d,f as I,q as g,h as r,H as l,o as h,c as V,A as k,B as $,D as c,I as m,a as o,x as i,t as B,P as D,y as U,d as q}from"./entry.525198f2.js";import{u as E,m as H}from"./ui.config.a3f0ce08.js";const s=P(d.ui.strategy,d.ui.meter,H),J=I({inheritAttrs:!1,slots:Object,props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},indicator:{type:Boolean,default:!1},label:{type:String,default:null},size:{type:String,default:()=>s.default.size,validator(e){return Object.keys(s.meter.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...d.ui.colors,...Object.keys(s.color)].includes(e)}},icon:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:a,attrs:v}=E("meter",g(e,"ui"),s,g(e,"class"));function f(z,t,n){if(t==n)return z<t?0:100;t>n&&(n=[t,t=n][0]);const j=(z-t)/(n-t)*100;return Math.max(0,Math.min(100,j))}const b=r(()=>l(a.value.indicator.container)),p=r(()=>l(a.value.indicator.text,a.value.indicator.size[e.size])),u=r(()=>l(a.value.meter.base,a.value.meter.background,a.value.meter.ring,a.value.meter.rounded,a.value.meter.shadow,a.value.color[e.color]??a.value.meter.color.replaceAll("{color}",e.color),a.value.meter.size[e.size])),M=r(()=>l(a.value.meter.appearance.inner,a.value.meter.appearance.meter,a.value.meter.appearance.bar,a.value.meter.appearance.value)),S=r(()=>l(a.value.meter.bar.transition,a.value.meter.bar.ring,a.value.meter.bar.rounded,a.value.meter.bar.size[e.size])),A=r(()=>l(a.value.label.base,a.value.label.text,a.value.color[e.color]??a.value.label.color.replaceAll("{color}",e.color),a.value.label.size[e.size])),y=r(()=>e.min>e.max?e.max:e.min),C=r(()=>e.max<e.min?e.min:e.max),N=r(()=>f(Number(e.value),y.value,C.value));return{ui:a,attrs:v,indicatorContainerClass:b,indicatorClass:p,meterClass:u,meterAppearanceClass:M,meterBarClass:S,labelClass:A,normalizedMin:y,normalizedMax:C,percent:N}}}),R=["value","min","max"];function T(e,a,v,f,b,p){const u=O;return h(),V("div",c({class:e.ui.wrapper},e.attrs),[e.indicator||e.$slots.indicator?k(e.$slots,"indicator",$(c({key:0},{percent:e.percent,value:e.value})),()=>[o("div",{class:i(e.indicatorContainerClass),style:D({width:`${e.percent}%`})},[o("div",{class:i(e.indicatorClass)},B(Math.round(e.percent))+"% ",3)],6)]):m("",!0),o("meter",{value:e.value,min:e.normalizedMin,max:e.normalizedMax,class:i([e.meterClass,e.meterAppearanceClass,e.meterBarClass])},null,10,R),e.label||e.$slots.label?k(e.$slots,"label",$(c({key:1},{percent:e.percent,value:e.value})),()=>[o("div",{class:i(e.labelClass)},[e.icon?(h(),U(u,{key:0,name:e.icon},null,8,["name"])):m("",!0),q(" "+B(e.label),1)],2)]):m("",!0)],16)}const L=w(J,[["render",T]]);export{L as default};