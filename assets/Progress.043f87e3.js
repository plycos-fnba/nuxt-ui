import{_ as M,m as O,n as f,f as V,q as A,h as r,H as t,o,c as u,A as k,B as S,D as p,I as g,a as $,t as m,x as d,F as D,v as R,P as q,d as E,C as H}from"./entry.525198f2.js";import{u as J,p as L}from"./ui.config.a3f0ce08.js";const i=O(f.ui.strategy,f.ui.progress,L),T=V({inheritAttrs:!1,props:{value:{type:[Number,null,void 0],default:null},max:{type:[Number,Array],default:100},indicator:{type:Boolean,default:!1},animation:{type:String,default:()=>i.default.animation,validator(e){return Object.keys(i.animation).includes(e)}},size:{type:String,default:()=>i.default.size,validator(e){return Object.keys(i.progress.size).includes(e)}},color:{type:String,default:()=>i.default.color,validator(e){return f.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:s,attrs:y}=J("progress",A(e,"ui"),i,A(e,"class")),C=r(()=>t(s.value.indicator.container.base,s.value.indicator.container.width,s.value.indicator.container.transition)),b=r(()=>t(s.value.indicator.align,s.value.indicator.width,s.value.indicator.color,s.value.indicator.size[e.size])),h=r(()=>{var n;const a=[s.value.progress.base,s.value.progress.width,s.value.progress.size[e.size],s.value.progress.rounded,s.value.progress.track,s.value.progress.bar,(n=s.value.progress.color)==null?void 0:n.replaceAll("{color}",e.color),s.value.progress.background,s.value.progress.indeterminate.base,s.value.progress.indeterminate.rounded];return v.value&&a.push(s.value.animation[e.animation]),t(...a)}),c=r(()=>{var a;return t(s.value.steps.base,(a=s.value.steps.color)==null?void 0:a.replaceAll("{color}",e.color),s.value.steps.size[e.size])}),l=r(()=>t(s.value.step.base,s.value.step.align)),N=r(()=>t(s.value.step.active)),w=r(()=>t(s.value.step.first));function P(a){return a===Number(e.value)}function j(a){return a===0}function B(a){a=Number(a);const n=[l.value];return j(a)&&n.push(w.value),P(a)&&n.push(N.value),n.join(" ")}const v=r(()=>[void 0,null].includes(e.value)),F=r(()=>Array.isArray(e.max)),z=r(()=>v.value?null:Array.isArray(e.max)?e.max.length-1:Number(e.max)),I=r(()=>{switch(!0){case e.value<0:return 0;case e.value>100:return 100;default:return e.value/z.value*100}});return{ui:s,attrs:y,indicatorContainerClass:C,indicatorClass:b,progressClass:h,stepsClass:c,stepClasses:B,isIndeterminate:v,isSteps:F,realMax:z,percent:I}}});function U(e,s,y,C,b,h){return o(),u("div",p({class:e.ui.wrapper},e.attrs),[e.indicator||e.$slots.indicator?k(e.$slots,"indicator",S(p({key:0},{percent:e.percent})),()=>[e.isSteps?g("",!0):(o(),u("div",{key:0,class:d(e.indicatorContainerClass),style:q({width:`${e.percent}%`})},[$("div",{class:d(e.indicatorClass)},m(Math.round(e.percent))+"% ",3)],6))],!0):g("",!0),$("progress",p({class:e.progressClass},{value:e.value,max:e.realMax}),m(Math.round(e.percent))+"% ",17),e.isSteps?(o(),u("div",{key:1,class:d(e.stepsClass)},[(o(!0),u(D,null,R(e.max,(c,l)=>(o(),u("div",{key:l,class:d(e.stepClasses(l))},[k(e.$slots,`step-${l}`,S(H({step:c})),()=>[E(m(c),1)],!0)],2))),128))],2)):g("",!0)],16)}const Q=M(T,[["render",U],["__scopeId","data-v-c8e4d150"]]);export{Q as default};
