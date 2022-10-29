import{_ as r}from"./InputField.vue_vue_type_script_setup_true_lang.79ab1d9f.js";import{d as p,l as c,z as f,A as d,o as g,c as V,a as v,e as _}from"./app.2d6ca54b.js";const b={flex:"","justify-center":"","items-center":""},x=p({__name:"PasswordField",props:{fieldDomain:null,modelValue:null},emits:["passwordValidationChanged","passwordSubmission","update:modelValue"],setup(u,{emit:l}){const t=u,o=c(""),i=f(()=>o.value.length>7?(console.log("Valid password!"),"OK"):(console.log("Invalid password! Too short."),"NOK"));return d(i,async(n,e)=>{l("passwordValidationChanged",n)}),d(o,async(n,e)=>{console.log("Watching passwords..."),l("update:modelValue",n)}),(n,e)=>{const s=r;return g(),V("div",b,[v(s,{"m-1":"","field-name":"password","field-domain":t.fieldDomain,"field-type":"password","field-icon":"i-carbon-password","field-status":_(i),modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),value:t.modelValue,onFocusout:e[1]||(e[1]=a=>l("passwordSubmission")),onInputSubmission:e[2]||(e[2]=a=>l("passwordSubmission"))},null,8,["field-domain","field-status","modelValue","value"])])}}}),S={flex:"","justify-center":"","items-center":""},F=p({__name:"EmailField",props:{fieldDomain:null,modelValue:null},emits:["emailValidationChanged","emailSubmission","update:modelValue"],setup(u,{emit:l}){const t=u,o=c(""),i=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,n=f(()=>(console.log("validate email, put it green if ok, red if incorrect"),o.value.match(i)?(console.log("Valid email address!"),"OK"):(console.log("Invalid email address!"),"NOK")));return d(n,async(e,s)=>{l("emailValidationChanged",e)}),d(o,async(e,s)=>{console.log("Watching emails..."),l("update:modelValue",e)}),(e,s)=>{const a=r;return g(),V("div",S,[v(a,{"m-1":"","field-name":"email","field-domain":t.fieldDomain,"field-type":"text","field-size":80,"field-icon":"i-carbon-email","field-status":_(n),modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=m=>o.value=m),onFocusout:s[1]||(s[1]=m=>l("emailSubmission")),onInputSubmission:s[2]||(s[2]=m=>l("emailSubmission"))},null,8,["field-domain","field-status","modelValue"])])}}}),w={flex:"","justify-center":"","items-center":""},I=p({__name:"NameField",props:{fieldDomain:null,modelValue:null},emits:["nameValidationChanged","nameSubmission","update:modelValue"],setup(u,{emit:l}){const t=u,o=c(""),i=f(()=>(console.log(o.length),o.value.length>4?(console.log("Valid name!"),"OK"):(console.log("Invalid name! Too short."),"NOK")));return d(i,async(n,e)=>{console.log("Watching..."),console.log(e),console.log(n),l("nameValidationChanged",n)}),d(o,async(n,e)=>{console.log("Watching names..."),l("update:modelValue",n)}),(n,e)=>{const s=r;return g(),V("div",w,[v(s,{"m-1":"","field-name":"name","field-domain":t.fieldDomain,"field-type":"text","field-icon":"i-carbon-user","field-status":_(i),modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),onFocusout:e[1]||(e[1]=a=>l("nameSubmission")),onInputSubmission:e[2]||(e[2]=a=>l("nameSubmission"))},null,8,["field-domain","field-status","modelValue"])])}}});export{I as _,F as a,x as b};
