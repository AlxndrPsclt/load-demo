import{a as M,b as R,_ as j}from"./NameField.vue_vue_type_script_setup_true_lang.bf45e95c.js";import{d as q,k as G,l as a,z as b,A as H,u as J,o as d,c as x,b as u,q as S,t as p,e as i,a as V,D as I,T as N,C as f,i as Q,E as C,_ as W}from"./app.f756863f.js";import{b as B}from"./route-block.011d1056.js";import"./InputField.vue_vue_type_script_setup_true_lang.351a33a3.js";const X={flex:"","flex-col":"","h-full":"","justify-center":""},Y={"text-4xl":"","m-3":""},Z={"opacity-75":""},ee=Q(" \xB7 "),ae={key:0},se=["disabled"],le={key:1},ne=["disabled"],E=q({__name:"signup",setup(oe){G();const v=a(),s=a("INITIAL"),y=a(),K=a("INITIAL"),O=a(""),o=a("INITIAL"),m=a(!1),t=a(!1),r=a(!1),_=a(!1),n=a(!1),w=a(null),g=a(null);function h(){m.value=m.value||s.value=="OK",t.value=t.value||s.value=="OK"&&o.value=="OK"&&!n.value,_.value=s.value=="OK"&&n.value,r.value=s.value=="OK"&&!n.value,n.value&&s.value=="OK"&&o.value=="OK"&&g.value.focus()}function F(){t.value=t.value||s.value=="OK"&&o.value=="OK"&&!n.value,n.value&&s.value=="OK"&&o.value=="OK"&&g.value.focus()}function P(){k.value&&w.value.focus()}const k=b(()=>!n.value&&s.value=="OK"&&K.value=="OK"&&o.value=="OK"),T=b(()=>n.value&&s.value=="OK"&&o.value=="OK");H(v,async(D,e)=>{s.value!="OK"?(console.log("Email not validated yet"),n.value=!1):console.log("Does user already exist?")}),b(()=>"~@"+v.value);async function A(){}async function U(){}const{t:c}=J();return(D,e)=>{const L=M,$=R,z=j;return d(),x("div",X,[u("div",Y,[u("p",Z,[u("span",{class:S(_.value?"text-5xl":"text-2xl")},p(i(c)("signup.signin")),3),ee,u("span",{class:S(r.value?"text-5xl":"text-2xl")},p(i(c)("signup.signup")),3)])]),V(L,{ref:"emailFocusRef",modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=l=>v.value=l),"field-domain":"signup",onEmailValidationChanged:e[1]||(e[1]=l=>{s.value=l}),onEmailSubmission:h},null,8,["modelValue"]),V(N,null,{default:I(()=>[m.value?(d(),C($,{key:0,modelValue:O.value,"onUpdate:modelValue":e[2]||(e[2]=l=>O.value=l),"field-domain":"signup",onPasswordValidationChanged:e[3]||(e[3]=l=>{o.value=l}),onPasswordSubmission:F},null,8,["modelValue"])):f("",!0)]),_:1}),V(N,null,{default:I(()=>[t.value&&r.value?(d(),C(z,{key:0,modelValue:y.value,"onUpdate:modelValue":e[4]||(e[4]=l=>y.value=l),"field-domain":"signup",onNameValidationChanged:e[5]||(e[5]=l=>{K.value=l}),onNameSubmission:P},null,8,["modelValue"])):f("",!0)]),_:1}),t.value&&r.value?(d(),x("div",ae,[u("button",{ref_key:"signupButton",ref:w,btn:"","m-5":"","text-2xl":"",class:"border-rounded-10 bg-#6622aa",disabled:!i(k),onClick:A},p(i(c)("signup.signup-prompt")),9,se)])):f("",!0),m.value&&_.value?(d(),x("div",le,[u("button",{ref_key:"signinButton",ref:g,btn:"","m-3":"","p-2":"","p-x-4":"","text-lg":"",class:"border-rounded-10 bg-#6622aa",disabled:!i(T),onClick:U},p(i(c)("signup.signin-prompt")),9,ne)])):f("",!0)])}}});typeof B=="function"&&B(E);const ve=W(E,[["__scopeId","data-v-be78a359"]]);export{ve as default};
