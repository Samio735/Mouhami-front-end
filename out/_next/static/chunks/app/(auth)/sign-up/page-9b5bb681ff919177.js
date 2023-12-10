(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[431],{2601:function(e,r,t){"use strict";var n,a;e.exports=(null==(n=t.g.process)?void 0:n.env)&&"object"==typeof(null==(a=t.g.process)?void 0:a.env)?t.g.process:t(8960)},9731:function(e,r,t){Promise.resolve().then(t.bind(t,2152))},2152:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return _}});var n=t(7437),a=t(7613),o=t(6677),i=t(2376);function l(e){let{isSelected:r,disableAnimation:t,...a}=e;return(0,n.jsx)("svg",{"aria-hidden":"true",role:"presentation",viewBox:"0 0 17 18",...a,children:(0,n.jsx)("polyline",{fill:"none",points:"1 9 7 14 15 4",stroke:"currentColor",strokeDasharray:22,strokeDashoffset:r?44:66,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,style:!t&&r?{transition:"stroke-dashoffset 250ms linear 0.2s"}:{}})})}function s(e){let{isSelected:r,disableAnimation:t,...a}=e;return(0,n.jsx)("svg",{stroke:"currentColor",strokeWidth:3,viewBox:"0 0 24 24",...a,children:(0,n.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function d(e){let{isIndeterminate:r,...t}=e,a=r?s:l;return(0,n.jsx)(a,{...t})}var u=t(2265),[c,f]=function(e={}){let{strict:r=!0,errorMessage:t="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:n}=e,a=u.createContext(void 0);return a.displayName=n,[a.Provider,function e(){var n;let o=u.useContext(a);if(!o&&r){let r=Error(t);throw r.name="ContextError",null==(n=Error.captureStackTrace)||n.call(Error,r,e),r}return o},a]}({name:"CheckboxGroupContext",strict:!1}),p=t(4114);function m(e={}){let{isReadOnly:r}=e,[t,n]=(0,p.zk)(e.isSelected,e.defaultSelected||!1,e.onChange);return{isSelected:t,setSelected:function(e){r||n(e)},toggle:function(){r||n(!t)}}}var h=t(9504),b=t(7174),g=(0,h.tv)({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2",wrapper:["relative","inline-flex","items-center","justify-center","flex-shrink-0","overflow-hidden","before:content-['']","before:absolute","before:inset-0","before:border-solid","before:border-2","before:box-border","before:border-default","after:content-['']","after:absolute","after:inset-0","after:scale-50","after:opacity-0","after:origin-center","group-data-[selected=true]:after:scale-100","group-data-[selected=true]:after:opacity-100","group-data-[hover=true]:before:bg-default-100",...b.ID],icon:"z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:"after:bg-default after:text-default-foreground text-default-foreground"},primary:{wrapper:"after:bg-primary after:text-primary-foreground text-primary-foreground"},secondary:{wrapper:"after:bg-secondary after:text-secondary-foreground text-secondary-foreground"},success:{wrapper:"after:bg-success after:text-success-foreground text-success-foreground"},warning:{wrapper:"after:bg-warning after:text-warning-foreground text-warning-foreground"},danger:{wrapper:"after:bg-danger after:text-danger-foreground text-danger-foreground"}},size:{sm:{wrapper:["w-4 h-4 mr-2","rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"],label:"text-small",icon:"w-3 h-2"},md:{wrapper:["w-5 h-5 mr-2","rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"],label:"text-medium",icon:"w-4 h-3"},lg:{wrapper:["w-6 h-6 mr-2","rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"],label:"text-large",icon:"w-5 h-4"}},radius:{none:{wrapper:"rounded-none before:rounded-none after:rounded-none"},sm:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"]},md:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"]},lg:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"]},full:{wrapper:"rounded-full before:rounded-full after:rounded-full"}},lineThrough:{true:{label:["inline-flex","items-center","justify-center","before:content-['']","before:absolute","before:bg-foreground","before:w-0","before:h-0.5","group-data-[selected=true]:opacity-60","group-data-[selected=true]:before:w-full"]}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isInvalid:{true:{wrapper:"before:border-danger",label:"text-danger"}},disableAnimation:{true:{wrapper:"transition-none",icon:"transition-none",label:"transition-none"},false:{wrapper:["before:transition-colors","group-data-[pressed=true]:scale-95","transition-transform","after:transition-transform-opacity","after:!ease-linear","after:!duration-200","motion-reduce:transition-none"],icon:"transition-opacity motion-reduce:transition-none",label:"transition-colors-opacity before:transition-width motion-reduce:transition-none"}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1,lineThrough:!1,disableAnimation:!1}});(0,h.tv)({slots:{base:"relative flex flex-col gap-2",label:"relative text-medium text-foreground-500",wrapper:"flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",description:"text-small text-foreground-400",errorMessage:"text-small text-danger"},variants:{isRequired:{true:{label:"after:content-['*'] after:text-danger after:ml-0.5"}},isInvalid:{true:{description:"text-danger"}},disableAnimation:{true:{},false:{description:"transition-colors !duration-150 motion-reduce:transition-none"}}},defaultVariants:{isInvalid:!1,isRequired:!1,disableAnimation:!1}});var x=t(6820),v=t(6565),y=t(1489),w=t(5312),j=t(8794),k=t(2601),S={};function C(e,r,...t){var n;let a=r?` [${r}]`:" ",o=`[Next UI]${a}: ${e}`;if("undefined"!=typeof console&&!S[o]&&(S[o]=!0,(null==(n=null==k?void 0:k.env)?void 0:n.NODE_ENV)!=="production"))return console.warn(o,t)}var P=t(7901),R=t(9762);function N(e,r,t){let{inputProps:n,isSelected:a,isPressed:o,isDisabled:i,isReadOnly:l,isInvalid:s}=function(e,r,t){let{isDisabled:n=!1,isRequired:a=!1,isReadOnly:o=!1,value:i,name:l,children:s,"aria-label":d,"aria-labelledby":u,validationState:c="valid",isInvalid:f}=e;null!=s||null!=d||null!=u||console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:p,isPressed:m}=(0,x.r7)({isDisabled:n}),{focusableProps:h}=(0,v.kc)(e,t),b=(0,y.dG)(p,h),g=(0,y.zL)(e,{labelable:!0});return(0,y.y$)(t,r.isSelected,r.setSelected),{inputProps:(0,y.dG)(g,{"aria-invalid":f||"invalid"===c||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":o||void 0,"aria-required":a||void 0,onChange:e=>{e.stopPropagation(),r.setSelected(e.target.checked)},disabled:n,...null==i?{}:{value:i},name:l,type:"checkbox",...b}),isSelected:r.isSelected,isPressed:m,isDisabled:n,isReadOnly:o,isInvalid:f||"invalid"===c}}(e,r,t),{isIndeterminate:d}=e;return(0,u.useEffect)(()=>{t.current&&(t.current.indeterminate=d)}),{inputProps:{...n,checked:a},isSelected:a,isPressed:o,isDisabled:i,isReadOnly:l,isInvalid:s}}let T=new WeakMap,O=new WeakMap,I=new WeakMap;var E=t(4480);let D={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function W(e){let{children:r,elementType:t="div",isFocusable:n,style:a,...o}=e,{visuallyHiddenProps:i}=function(e={}){let{style:r,isFocusable:t}=e,[n,a]=(0,u.useState)(!1),{focusWithinProps:o}=(0,x.L_)({isDisabled:!t,onFocusWithinChange:e=>a(e)}),i=(0,u.useMemo)(()=>n?r:r?{...D,...r}:D,[n]);return{visuallyHiddenProps:{...o,style:i}}}(e);return u.createElement(t,(0,y.dG)(o,i),r)}var B=(0,E.Gp)((e,r)=>{let{Component:t,children:a,icon:o=(0,n.jsx)(d,{}),getBaseProps:i,getWrapperProps:l,getInputProps:s,getIconProps:c,getLabelProps:p}=function(e={}){var r,t,n,a,o,i;let l=f(),{as:s,ref:d,value:c="",children:p,icon:h,name:b,isRequired:k=!1,isReadOnly:S=!1,autoFocus:E=!1,isSelected:D,validationState:W,size:B=null!=(r=null==l?void 0:l.size)?r:"md",color:L=null!=(t=null==l?void 0:l.color)?t:"primary",radius:G=null==l?void 0:l.radius,lineThrough:A=null!=(n=null==l?void 0:l.lineThrough)&&n,isDisabled:_=null!=(a=null==l?void 0:l.isDisabled)&&a,disableAnimation:F=null!=(o=null==l?void 0:l.disableAnimation)&&o,isInvalid:z=W?"invalid"===W:null!=(i=null==l?void 0:l.isInvalid)&&i,isIndeterminate:M=!1,defaultSelected:V,classNames:q,onChange:Y,className:U,onValueChange:$,...J}=e;l&&j.Ts&&(D&&C("The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.","Checkbox"),V&&C("The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.","Checkbox"));let H=(0,u.useRef)(null),X=(0,w.rV)(d,H),Z=(0,u.useId)(),K=(0,u.useMemo)(()=>({name:b,value:c,children:p,autoFocus:E,defaultSelected:V,isIndeterminate:M,isRequired:k,isInvalid:z,isSelected:D,isDisabled:_,isReadOnly:S,"aria-label":(0,P.x)(J["aria-label"],p),"aria-labelledby":J["aria-labelledby"]||Z,onChange:$}),[c,b,Z,p,E,z,M,_,S,D,V,J["aria-label"],J["aria-labelledby"],$]),{inputProps:Q,isSelected:ee,isDisabled:er,isReadOnly:et,isPressed:en}=l?function(e,r,t){let n=m({isReadOnly:e.isReadOnly||r.isReadOnly,isSelected:r.isSelected(e.value),onChange(t){t?r.addValue(e.value):r.removeValue(e.value),e.onChange&&e.onChange(t)}}),a=N({...e,isReadOnly:e.isReadOnly||r.isReadOnly,isDisabled:e.isDisabled||r.isDisabled,name:e.name||T.get(r)},n,t);return{...a,inputProps:{...a.inputProps,"aria-describedby":[e["aria-describedby"],r.isInvalid?I.get(r):null,O.get(r)].filter(Boolean).join(" ")||void 0}}}({...K,isInvalid:z},l.groupState,H):N(K,m(K),H),ea=er||et,[eo,ei]=(0,u.useState)(!1),{pressProps:el}=(0,x.r7)({isDisabled:ea,onPressStart(e){"keyboard"!==e.pointerType&&ei(!0)},onPressEnd(e){"keyboard"!==e.pointerType&&ei(!1)}}),es=!ea&&(eo||en);k&&(Q.required=!0);let{hoverProps:ed,isHovered:eu}=(0,x.XI)({isDisabled:Q.disabled}),{focusProps:ec,isFocused:ef,isFocusVisible:ep}=(0,v.Fx)({autoFocus:Q.autoFocus}),em=(0,u.useMemo)(()=>g({color:L,size:B,radius:G,isInvalid:z,lineThrough:A,isDisabled:er,disableAnimation:F}),[L,B,G,z,A,er,F]),eh=(0,R.W)(null==q?void 0:q.base,U),eb=(0,u.useCallback)(()=>({ref:X,className:em.base({class:eh}),"data-disabled":(0,j.PB)(er),"data-selected":(0,j.PB)(ee||M),"data-invalid":(0,j.PB)(z),"data-hover":(0,j.PB)(eu),"data-focus":(0,j.PB)(ef),"data-pressed":(0,j.PB)(es),"data-readonly":(0,j.PB)(Q.readOnly),"data-focus-visible":(0,j.PB)(ep),"data-indeterminate":(0,j.PB)(M),...(0,y.dG)(ed,el,J)}),[em,eh,er,ee,M,z,eu,ef,es,Q.readOnly,ep,ed,el,J]),eg=(0,u.useCallback)((e={})=>({...e,"aria-hidden":!0,className:(0,R.W)(em.wrapper({class:(0,R.W)(null==q?void 0:q.wrapper,null==e?void 0:e.className)}))}),[em,null==q?void 0:q.wrapper]),ex=(0,u.useCallback)(()=>({ref:H,...(0,y.dG)(Q,ec),onChange:(0,y.tS)(Q.onChange,Y)}),[Q,ec,Y]),ev=(0,u.useCallback)(()=>({id:Z,className:em.label({class:null==q?void 0:q.label})}),[em,null==q?void 0:q.label,er,ee,z]),ey=(0,u.useCallback)(()=>({isSelected:ee,isIndeterminate:!!M,disableAnimation:!!F,className:em.icon({class:null==q?void 0:q.icon})}),[em,null==q?void 0:q.icon,ee,M,F]);return{Component:s||"label",icon:h,children:p,isSelected:ee,isDisabled:er,isInvalid:z,isFocused:ef,isHovered:eu,isFocusVisible:ep,getBaseProps:eb,getWrapperProps:eg,getInputProps:ex,getLabelProps:ev,getIconProps:ey}}({...e,ref:r}),h="function"==typeof o?o(c()):(0,u.cloneElement)(o,c());return(0,n.jsxs)(t,{...i(),children:[(0,n.jsx)(W,{children:(0,n.jsx)("input",{...s()})}),(0,n.jsx)("span",{...l(),children:h}),a&&(0,n.jsx)("span",{...p(),children:a})]})});B.displayName="NextUI.Checkbox";var L=t(1396),G=t.n(L),A=t(4033);function _(){let[e,r]=(0,u.useState)(""),[t,l]=(0,u.useState)(""),[s,d]=(0,u.useState)(""),[c,f]=(0,u.useState)(""),[p,m]=(0,u.useState)(""),[h,b]=(0,u.useState)(""),g=(0,A.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)(i.Y,{type:"text",label:"First Name",classNames:{inputWrapper:"bg-backgroundWhite"},onChange:e=>r(e.target.value)}),(0,n.jsx)(i.Y,{type:"text",label:"Last Name",classNames:{inputWrapper:"bg-backgroundWhite"},onChange:e=>l(e.target.value)}),(0,n.jsx)(i.Y,{type:"email",label:"Email",classNames:{inputWrapper:"bg-backgroundWhite"},onChange:e=>f(e.target.value)}),(0,n.jsx)(i.Y,{type:"password",label:"Password ",classNames:{inputWrapper:"bg-backgroundWhite"},onChange:e=>m(e.target.value)}),(0,n.jsxs)("div",{className:"w-full flex flex-col gap-2 p-4  ",children:[(0,n.jsx)(B,{color:"warning",radius:"full",defaultChecked:!0,children:(0,n.jsx)("p",{className:"text-sm",children:"I agree on receiving emails and sms"})}),(0,n.jsxs)(B,{radius:"full",color:"warning",children:[" ",(0,n.jsxs)("p",{className:"text-sm",children:[" ","I agree on"," ",(0,n.jsx)("span",{className:"text-lighOrange underline",children:(0,n.jsx)(G(),{href:"/policy",children:"Privacy Policy and Laws"})})," "]})]})]}),(0,n.jsx)("p",{className:"text-center text-sm text-lighOrange",children:h}),(0,n.jsxs)("button",{className:"w-full",onClick:r=>{r.preventDefault(),(0,a.y7)(e,t,c,p).then(e=>{e.email?(b("Account Created Successfully"),g.push("/sign-in")):b("Something went wrong"),(0,a.x4)(c,p).then(e=>{e.jwt?b("You're loged in !"):b("Login not successfull")})})},children:[(0,n.jsx)(o.Z,{children:(0,n.jsx)("p",{className:"-my-2",children:"Sign up"})}),(0,n.jsx)("div",{className:"h-6"}),(0,n.jsx)(G(),{href:"/sign-in",className:"pt-8",children:(0,n.jsx)("p",{className:" text-md py-2 text-lighOrange underline",children:"Already have an account? login !"})})]})]})}},7613:function(e,r,t){"use strict";t.d(r,{Xx:function(){return l},x6:function(){return a},x4:function(){return i},y7:function(){return o}});let n="https://samyrahim.me/api";async function a(){let e=await fetch("".concat(n,"/surveys/"),{cache:"no-store"});if(!e.ok)throw Error("Something went wrong");let r=await e.json();return r}async function o(e,r,t,a){let o=await fetch("".concat(n,"/register/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:e,last_name:r,email:t,password:a})});if(!o.ok)throw Error("Something went wrong");let i=await o.json();return console.log(i),i}async function i(e,r){try{let t=await fetch("".concat(n,"/login/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:r})});if(!t.ok)throw Error("Something went wrong");let a=await t.json();return a.jwt?localStorage.setItem("jwt",a.jwt):localStorage.removeItem("jwt"),console.log(a),a}catch(e){console.log(e),localStorage.removeItem("jwt")}}async function l(){try{let e=await fetch("".concat(n,"/user/"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({jwt:localStorage.getItem("jwt")})});if(!e.ok)throw Error("Something went wrong");let r=await e.json();return console.log(r),r}catch(e){console.log(e),localStorage.removeItem("jwt");return}}},6677:function(e,r,t){"use strict";var n=t(7437);r.Z=function(e){let{children:r}=e;return(0,n.jsx)("div",{className:"bg-gradient-to-r from-lighOrange to-darkOrange rounded-xl shadow-xl shadow-[#f26f2391] flex flex-col items-center my-1 text-white py-4  px-4 w-full active:opacity-80",children:r})}},8960:function(e){!function(){var r={229:function(e){var r,t,n,a=e.exports={};function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{t="function"==typeof clearTimeout?clearTimeout:i}catch(e){t=i}}();var s=[],d=!1,u=-1;function c(){d&&n&&(d=!1,n.length?s=n.concat(s):u=-1,s.length&&f())}function f(){if(!d){var e=l(c);d=!0;for(var r=s.length;r;){for(n=s,s=[];++u<r;)n&&n[u].run();u=-1,r=s.length}n=null,d=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===i||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(r){try{return t.call(null,e)}catch(r){return t.call(this,e)}}}(e)}}function p(e,r){this.fun=e,this.array=r}function m(){}a.nextTick=function(e){var r=Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];s.push(new p(e,r)),1!==s.length||d||l(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var o=t[e]={exports:{}},i=!0;try{r[e](o,o.exports,n),i=!1}finally{i&&delete t[e]}return o.exports}n.ab="//";var a=n(229);e.exports=a}()}},function(e){e.O(0,[685,799,971,596,744],function(){return e(e.s=9731)}),_N_E=e.O()}]);