import{_ as I}from"./FullscreenModal.vue_vue_type_script_setup_true_lang.c56a5e75.js";import{_ as S}from"./vue-scrollto.97163b16.js";import{d as k,k as T,u as C,l as e,o as D,c as B,b as o,t as f,e as $,a as r,w as c,v as d,F,p as N,m as A,f as P,_ as Y}from"./app.f756863f.js";const _=t=>(N("data-v-483d2eeb"),t=t(),A(),t),j={ref:"barPage","h-screen":"","px-4":"","py-10":"",flex:"","flex-col":"","justify-between":"","items-center":""},E={flex:"","flex-col":"","mt-4":"","mb-2":"","justify-center":""},O={"text-4xl":""},R={flex:"","flex-col":"","items-center":"",class:"-translate-y-6rem"},V=_(()=>o("div",{class:"i-mdi:gesture-swipe-up","text-5xl":""},null,-1)),H=_(()=>o("div",{invisible:"","h-40vh":""}," HIDDEN ",-1)),L=k({__name:"bar",setup(t){const p=P();T();const{t:v}=C(),b=e(null),a=e(0),h=e(!1);e("INITIAL"),e(""),e(""),e({}),e(!1),e(5),e(!1);const l=e(!1),i=e(!1);function g(s){a.value=s,h.value=!0}function w(){return console.log(window.scrollY),window.scrollY}function x(){console.log("Transaction over; hide modal"),l.value=!1,i.value=!0}function y(){console.log("Transaction over; hide modal"),a.value=0,i.value=!1,p.push("/bar")}return(s,n)=>{const M=S,u=I;return D(),B(F,null,[o("div",j,[o("div",E,[o("p",O,f($(v)("bar.title")),1),r(M,{showRemaining:!1,onAmountSubmitted:n[0]||(n[0]=m=>{g(m)})})]),o("div",null,[c(o("div",R,[o("button",{ref_key:"finalButton",ref:b,"p-5":"","text-4xl":"",class:"bg-#551188 flex flex-row items-center",border:"rounded-20",onClick:n[1]||(n[1]=m=>l.value=!0)},[V,o("div",null,[o("p",null,f(s.$t("bar.pay")),1)])],512)],512),[[d,a.value>0]])]),H,o("div",{invisible:"",id:"bottomd",onClick:w}," BOTTOM ")],512),c(r(u,{onDismissModal:x,modalMessage:s.$t("bar.scan-to-pay",{amountToPay:a.value}),modalIcon:"i-mdi:cellphone-nfc",modalColor:"bg-blue"},null,8,["modalMessage"]),[[d,l.value]]),c(r(u,{onDismissModal:y,modalMessage:s.$t("modal.succes"),modalIcon:"i-carbon-checkmark",modalColor:"bg-green"},null,8,["modalMessage"]),[[d,i.value]])],64)}}});const G=Y(L,[["__scopeId","data-v-483d2eeb"]]);export{G as default};
