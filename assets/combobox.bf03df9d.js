import{u as j,o as y,K as z,H as L,T as X,t as J,N as q,a as F}from"./dom.197a2304.js";import{x as Z,a as C,p as ee,u as te}from"./use-tracked-pointer.3b50359f.js";import{c as oe,l as H,p as ae}from"./open-closed.09dcad86.js";import{b as le}from"./use-resolve-button-type.96f8d4a6.js";import{m as ne,O as ue}from"./focus-management.6f8fc07a.js";import{y as ie}from"./use-outside-click.3660f136.js";import{f as re,a as se}from"./hidden.a1a0cf73.js";import{d as ve,e as pe}from"./use-controllable.5bd9b6ad.js";import{o as de,n as be}from"./disposables.57da4964.js";import{f as K,r as E,h as f,W as c,g as ce,i as G,V as Y,M as Q,F as fe,k as _,j as me,N,l as xe}from"./entry.525198f2.js";function ge(o,I){return o===I}var Oe=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(Oe||{}),Re=(o=>(o[o.Single=0]="Single",o[o.Multi=1]="Multi",o))(Re||{}),Se=(o=>(o[o.Pointer=0]="Pointer",o[o.Other=1]="Other",o))(Se||{});let W=Symbol("ComboboxContext");function U(o){let I=xe(W,null);if(I===null){let P=new Error(`<${o} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(P,U),P}return I}let we=K({name:"Combobox",emits:{"update:modelValue":o=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>ge},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},nullable:{type:Boolean,default:!1},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(o,{slots:I,attrs:P,emit:D}){let e=E(1),t=E(null),h=E(null),v=E(null),r=E(null),d=E({static:!1,hold:!1}),b=E([]),m=E(null),T=E(1),V=E(!1);function B(l=i=>i){let i=m.value!==null?b.value[m.value]:null,s=ue(l(b.value.slice()),p=>y(p.dataRef.domRef)),n=i?s.indexOf(i):null;return n===-1&&(n=null),{options:s,activeOptionIndex:n}}let w=f(()=>o.multiple?1:0),x=f(()=>o.nullable),[a,g]=ve(f(()=>o.modelValue),l=>D("update:modelValue",l),f(()=>o.defaultValue)),O=f(()=>a.value===void 0?j(w.value,{1:[],0:void 0}):a.value),A=null,R=null,u={comboboxState:e,value:O,mode:w,compare(l,i){if(typeof o.by=="string"){let s=o.by;return(l==null?void 0:l[s])===(i==null?void 0:i[s])}return o.by(l,i)},defaultValue:f(()=>o.defaultValue),nullable:x,inputRef:h,labelRef:t,buttonRef:v,optionsRef:r,disabled:f(()=>o.disabled),options:b,change(l){g(l)},activeOptionIndex:f(()=>{if(V.value&&m.value===null&&b.value.length>0){let l=b.value.findIndex(i=>!i.dataRef.disabled);l!==-1&&(m.value=l)}return m.value}),activationTrigger:T,optionsPropsRef:d,closeCombobox(){V.value=!1,!o.disabled&&e.value!==1&&(e.value=1,m.value=null)},openCombobox(){if(V.value=!0,o.disabled||e.value===0)return;let l=b.value.findIndex(i=>{let s=c(i.dataRef.value);return j(w.value,{0:()=>u.compare(c(u.value.value),c(s)),1:()=>c(u.value.value).some(n=>u.compare(c(n),c(s)))})});l!==-1&&(m.value=l),e.value=0},goToOption(l,i,s){V.value=!1,A!==null&&cancelAnimationFrame(A),A=requestAnimationFrame(()=>{if(o.disabled||r.value&&!d.value.static&&e.value===1)return;let n=B();if(n.activeOptionIndex===null){let S=n.options.findIndex(M=>!M.dataRef.disabled);S!==-1&&(n.activeOptionIndex=S)}let p=Z(l===C.Specific?{focus:C.Specific,id:i}:{focus:l},{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:S=>S.id,resolveDisabled:S=>S.dataRef.disabled});m.value=p,T.value=s??1,b.value=n.options})},selectOption(l){let i=b.value.find(n=>n.id===l);if(!i)return;let{dataRef:s}=i;g(j(w.value,{0:()=>s.value,1:()=>{let n=c(u.value.value).slice(),p=c(s.value),S=n.findIndex(M=>u.compare(p,c(M)));return S===-1?n.push(p):n.splice(S,1),n}}))},selectActiveOption(){if(u.activeOptionIndex.value===null)return;let{dataRef:l,id:i}=b.value[u.activeOptionIndex.value];g(j(w.value,{0:()=>l.value,1:()=>{let s=c(u.value.value).slice(),n=c(l.value),p=s.findIndex(S=>u.compare(n,c(S)));return p===-1?s.push(n):s.splice(p,1),s}})),u.goToOption(C.Specific,i)},registerOption(l,i){R&&cancelAnimationFrame(R);let s={id:l,dataRef:i},n=B(p=>(p.push(s),p));if(m.value===null){let p=i.value.value;j(w.value,{0:()=>u.compare(c(u.value.value),c(p)),1:()=>c(u.value.value).some(S=>u.compare(c(S),c(p)))})&&(n.activeOptionIndex=n.options.indexOf(s))}b.value=n.options,m.value=n.activeOptionIndex,T.value=1,n.options.some(p=>!y(p.dataRef.domRef))&&(R=requestAnimationFrame(()=>{let p=B();b.value=p.options,m.value=p.activeOptionIndex}))},unregisterOption(l){var i;u.activeOptionIndex.value!==null&&((i=u.options.value[u.activeOptionIndex.value])==null?void 0:i.id)===l&&(V.value=!0);let s=B(n=>{let p=n.findIndex(S=>S.id===l);return p!==-1&&n.splice(p,1),n});b.value=s.options,m.value=s.activeOptionIndex,T.value=1}};ie([h,v,r],()=>u.closeCombobox(),f(()=>e.value===0)),ce(W,u),oe(f(()=>j(e.value,{0:H.Open,1:H.Closed})));let k=f(()=>u.activeOptionIndex.value===null?null:b.value[u.activeOptionIndex.value].dataRef.value),$=f(()=>{var l;return(l=y(h))==null?void 0:l.closest("form")});return G(()=>{Y([$],()=>{if(!$.value||o.defaultValue===void 0)return;function l(){u.change(o.defaultValue)}return $.value.addEventListener("reset",l),()=>{var i;(i=$.value)==null||i.removeEventListener("reset",l)}},{immediate:!0})}),()=>{let{name:l,disabled:i,form:s,...n}=o,p={open:e.value===0,disabled:i,activeIndex:u.activeOptionIndex.value,activeOption:k.value,value:O.value};return Q(fe,[...l!=null&&O.value!=null?pe({[l]:O.value}).map(([S,M])=>Q(re,z({features:se.Hidden,key:S,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:s,name:S,value:M}))):[],L({theirProps:{...P,...X(n,["modelValue","defaultValue","nullable","multiple","onUpdate:modelValue","by"])},ourProps:{},slot:p,slots:I,attrs:P,name:"Combobox"})])}}}),ke=K({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-combobox-button-${J()}`}},setup(o,{attrs:I,slots:P,expose:D}){let e=U("ComboboxButton");D({el:e.buttonRef,$el:e.buttonRef});function t(r){e.disabled.value||(e.comboboxState.value===0?e.closeCombobox():(r.preventDefault(),e.openCombobox()),N(()=>{var d;return(d=y(e.inputRef))==null?void 0:d.focus({preventScroll:!0})}))}function h(r){switch(r.key){case F.ArrowDown:r.preventDefault(),r.stopPropagation(),e.comboboxState.value===1&&e.openCombobox(),N(()=>{var d;return(d=e.inputRef.value)==null?void 0:d.focus({preventScroll:!0})});return;case F.ArrowUp:r.preventDefault(),r.stopPropagation(),e.comboboxState.value===1&&(e.openCombobox(),N(()=>{e.value.value||e.goToOption(C.Last)})),N(()=>{var d;return(d=e.inputRef.value)==null?void 0:d.focus({preventScroll:!0})});return;case F.Escape:if(e.comboboxState.value!==0)return;r.preventDefault(),e.optionsRef.value&&!e.optionsPropsRef.value.static&&r.stopPropagation(),e.closeCombobox(),N(()=>{var d;return(d=e.inputRef.value)==null?void 0:d.focus({preventScroll:!0})});return}}let v=le(f(()=>({as:o.as,type:I.type})),e.buttonRef);return()=>{var r,d;let b={open:e.comboboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:m,...T}=o,V={ref:e.buttonRef,id:m,type:v.value,tabindex:"-1","aria-haspopup":"listbox","aria-controls":(r=y(e.optionsRef))==null?void 0:r.id,"aria-expanded":e.comboboxState.value===0,"aria-labelledby":e.labelRef.value?[(d=y(e.labelRef))==null?void 0:d.id,m].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:h,onClick:t};return L({ourProps:V,theirProps:T,slot:b,attrs:I,slots:P,name:"ComboboxButton"})}}}),De=K({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function},defaultValue:{type:String,default:void 0},id:{type:String,default:()=>`headlessui-combobox-input-${J()}`}},emits:{change:o=>!0},setup(o,{emit:I,attrs:P,slots:D,expose:e}){let t=U("ComboboxInput"),h=f(()=>ne(y(t.inputRef))),v={value:!1};e({el:t.inputRef,$el:t.inputRef});function r(){t.change(null);let a=y(t.optionsRef);a&&(a.scrollTop=0),t.goToOption(C.Nothing)}let d=f(()=>{var a;let g=t.value.value;return y(t.inputRef)?typeof o.displayValue<"u"&&g!==void 0?(a=o.displayValue(g))!=null?a:"":typeof g=="string"?g:"":""});G(()=>{Y([d,t.comboboxState,h],([a,g],[O,A])=>{if(v.value)return;let R=y(t.inputRef);R&&((A===0&&g===1||a!==O)&&(R.value=a),requestAnimationFrame(()=>{var u;if(v.value||!R||((u=h.value)==null?void 0:u.activeElement)!==R)return;let{selectionStart:k,selectionEnd:$}=R;Math.abs(($??0)-(k??0))===0&&k===0&&R.setSelectionRange(R.value.length,R.value.length)}))},{immediate:!0}),Y([t.comboboxState],([a],[g])=>{if(a===0&&g===1){if(v.value)return;let O=y(t.inputRef);if(!O)return;let A=O.value,{selectionStart:R,selectionEnd:u,selectionDirection:k}=O;O.value="",O.value=A,k!==null?O.setSelectionRange(R,u,k):O.setSelectionRange(R,u)}})});let b=E(!1);function m(){b.value=!0}function T(){de().nextFrame(()=>{b.value=!1})}function V(a){switch(v.value=!0,a.key){case F.Enter:if(v.value=!1,t.comboboxState.value!==0||b.value)return;if(a.preventDefault(),a.stopPropagation(),t.activeOptionIndex.value===null){t.closeCombobox();return}t.selectActiveOption(),t.mode.value===0&&t.closeCombobox();break;case F.ArrowDown:return v.value=!1,a.preventDefault(),a.stopPropagation(),j(t.comboboxState.value,{0:()=>t.goToOption(C.Next),1:()=>t.openCombobox()});case F.ArrowUp:return v.value=!1,a.preventDefault(),a.stopPropagation(),j(t.comboboxState.value,{0:()=>t.goToOption(C.Previous),1:()=>{t.openCombobox(),N(()=>{t.value.value||t.goToOption(C.Last)})}});case F.Home:if(a.shiftKey)break;return v.value=!1,a.preventDefault(),a.stopPropagation(),t.goToOption(C.First);case F.PageUp:return v.value=!1,a.preventDefault(),a.stopPropagation(),t.goToOption(C.First);case F.End:if(a.shiftKey)break;return v.value=!1,a.preventDefault(),a.stopPropagation(),t.goToOption(C.Last);case F.PageDown:return v.value=!1,a.preventDefault(),a.stopPropagation(),t.goToOption(C.Last);case F.Escape:if(v.value=!1,t.comboboxState.value!==0)return;a.preventDefault(),t.optionsRef.value&&!t.optionsPropsRef.value.static&&a.stopPropagation(),t.nullable.value&&t.mode.value===0&&t.value.value===null&&r(),t.closeCombobox();break;case F.Tab:if(v.value=!1,t.comboboxState.value!==0)return;t.mode.value===0&&t.selectActiveOption(),t.closeCombobox();break}}function B(a){I("change",a),t.nullable.value&&t.mode.value===0&&a.target.value===""&&r(),t.openCombobox()}function w(){v.value=!1}let x=f(()=>{var a,g,O,A;return(A=(O=(g=o.defaultValue)!=null?g:t.defaultValue.value!==void 0?(a=o.displayValue)==null?void 0:a.call(o,t.defaultValue.value):null)!=null?O:t.defaultValue.value)!=null?A:""});return()=>{var a,g,O,A,R,u;let k={open:t.comboboxState.value===0},{id:$,displayValue:l,onChange:i,...s}=o,n={"aria-controls":(a=t.optionsRef.value)==null?void 0:a.id,"aria-expanded":t.comboboxState.value===0,"aria-activedescendant":t.activeOptionIndex.value===null||(g=t.options.value[t.activeOptionIndex.value])==null?void 0:g.id,"aria-labelledby":(R=(O=y(t.labelRef))==null?void 0:O.id)!=null?R:(A=y(t.buttonRef))==null?void 0:A.id,"aria-autocomplete":"list",id:$,onCompositionstart:m,onCompositionend:T,onKeydown:V,onInput:B,onBlur:w,role:"combobox",type:(u=P.type)!=null?u:"text",tabIndex:0,ref:t.inputRef,defaultValue:x.value,disabled:t.disabled.value===!0?!0:void 0};return L({ourProps:n,theirProps:s,slot:k,attrs:P,slots:D,features:q.RenderStrategy|q.Static,name:"ComboboxInput"})}}}),Be=K({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(o,{attrs:I,slots:P,expose:D}){let e=U("ComboboxOptions"),t=`headlessui-combobox-options-${J()}`;D({el:e.optionsRef,$el:e.optionsRef}),_(()=>{e.optionsPropsRef.value.static=o.static}),_(()=>{e.optionsPropsRef.value.hold=o.hold});let h=ae(),v=f(()=>h!==null?(h.value&H.Open)===H.Open:e.comboboxState.value===0);return ee({container:f(()=>y(e.optionsRef)),enabled:f(()=>e.comboboxState.value===0),accept(r){return r.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:r.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(r){r.setAttribute("role","none")}}),()=>{var r,d,b;let m={open:e.comboboxState.value===0},T={"aria-labelledby":(b=(r=y(e.labelRef))==null?void 0:r.id)!=null?b:(d=y(e.buttonRef))==null?void 0:d.id,id:t,ref:e.optionsRef,role:"listbox","aria-multiselectable":e.mode.value===1?!0:void 0},V=X(o,["hold"]);return L({ourProps:T,theirProps:V,slot:m,attrs:I,slots:P,features:q.RenderStrategy|q.Static,visible:v.value,name:"ComboboxOptions"})}}}),$e=K({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(o,{slots:I,attrs:P,expose:D}){let e=U("ComboboxOption"),t=`headlessui-combobox-option-${J()}`,h=E(null);D({el:h,$el:h});let v=f(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===t:!1),r=f(()=>j(e.mode.value,{0:()=>e.compare(c(e.value.value),c(o.value)),1:()=>c(e.value.value).some(x=>e.compare(c(x),c(o.value)))})),d=f(()=>({disabled:o.disabled,value:o.value,domRef:h}));G(()=>e.registerOption(t,d)),me(()=>e.unregisterOption(t)),_(()=>{e.comboboxState.value===0&&v.value&&e.activationTrigger.value!==0&&N(()=>{var x,a;return(a=(x=y(h))==null?void 0:x.scrollIntoView)==null?void 0:a.call(x,{block:"nearest"})})});function b(x){if(o.disabled)return x.preventDefault();e.selectOption(t),e.mode.value===0&&e.closeCombobox(),be()||requestAnimationFrame(()=>{var a;return(a=y(e.inputRef))==null?void 0:a.focus()})}function m(){if(o.disabled)return e.goToOption(C.Nothing);e.goToOption(C.Specific,t)}let T=te();function V(x){T.update(x)}function B(x){T.wasMoved(x)&&(o.disabled||v.value||e.goToOption(C.Specific,t,0))}function w(x){T.wasMoved(x)&&(o.disabled||v.value&&(e.optionsPropsRef.value.hold||e.goToOption(C.Nothing)))}return()=>{let{disabled:x}=o,a={active:v.value,selected:r.value,disabled:x},g={id:t,ref:h,role:"option",tabIndex:x===!0?void 0:-1,"aria-disabled":x===!0?!0:void 0,"aria-selected":r.value,disabled:void 0,onClick:b,onFocus:m,onPointerenter:V,onMouseenter:V,onPointermove:B,onMousemove:B,onPointerleave:w,onMouseleave:w};return L({ourProps:g,theirProps:o,slot:a,attrs:P,slots:I,name:"ComboboxOption"})}}});export{ke as G,we as J,De as Q,Be as X,$e as Y};
