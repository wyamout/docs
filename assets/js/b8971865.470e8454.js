"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[8226],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7377:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],c={sidebar_label:"LSP0 - ERC725Account",sidebar_position:2},l="The Foundation - LSP0 (ERC725Account)",s={unversionedId:"standards/universal-profile/LSP0-Foundation",id:"standards/universal-profile/LSP0-Foundation",title:"The Foundation - LSP0 (ERC725Account)",description:"Once deployed on a network, smart contracts cannot be changed",source:"@site/docs/standards/universal-profile/01-LSP0-Foundation.md",sourceDirName:"standards/universal-profile",slug:"/standards/universal-profile/LSP0-Foundation",permalink:"/standards/universal-profile/LSP0-Foundation",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/universal-profile/01-LSP0-Foundation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"LSP0 - ERC725Account",sidebar_position:2},sidebar:"standardsSidebar",previous:{title:"Introduction",permalink:"/standards/universal-profile/introduction"},next:{title:"LSP1 - Universal Receiver Delegate",permalink:"/standards/universal-profile/lsp1-universal-receiver-delegate"}},u=[{value:"ERC725X - Generic Executor",id:"erc725x---generic-executor",children:[],level:2},{value:"ERC725Y - Generic Key-Value Store",id:"erc725y---generic-key-value-store",children:[],level:2},{value:"Features of ERC725Account",id:"features-of-erc725account",children:[{value:"Ownership",id:"ownership",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-foundation---lsp0-erc725account"},"The Foundation - LSP0 (ERC725Account)"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"This section is a work in progress.")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})),(0,o.kt)("p",null,"Once deployed on a network, smart contracts cannot be changed: ",(0,o.kt)("strong",{parentName:"p"},"they are set in stone"),". This means that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you cannot add or remove state variables inside the contract."),(0,o.kt)("li",{parentName:"ul"},"you cannot change the functionality or behaviours of the functions defined inside the contract.")),(0,o.kt)("p",null,"An ERC725Account aims to make a smart contract act like a generic account. It can change, evolve and be edited over time. It is composed of two substandards: ERC725",(0,o.kt)("strong",{parentName:"p"},"X")," and ERC725",(0,o.kt)("strong",{parentName:"p"},"Y"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4055).Z})),(0,o.kt)("h2",{id:"erc725x---generic-executor"},"ERC725X - Generic Executor"),(0,o.kt)("p",null,"This substandard enables a contract to execute any arbitrary function of another smart contract, transfer tokens, or deploy new contracts."),(0,o.kt)("p",null,"The operation types available are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CALL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CREATE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CREATE2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DELEGATECALL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"STATICCALL"))),(0,o.kt)("h2",{id:"erc725y---generic-key-value-store"},"ERC725Y - Generic Key-Value Store"),(0,o.kt)("p",null,"This substandard enables a contract to hold arbitrary data through a generic key/value store."),(0,o.kt)("p",null,"It gives flexibility to the contract storage, by enabling to attach any type of information to the contract, and update it easily. The data can easily be changed, linked or unlinked."),(0,o.kt)("h2",{id:"features-of-erc725account"},"Features of ERC725Account"),(0,o.kt)("h3",{id:"ownership"},"Ownership"),(0,o.kt)("p",null,"ERC725Account are owned account, meaning they can be controlled only by their account owner.\nHowever, ownership is not restricted to a single owner. An ERC725Account can be managed by multiple private keys, including multi-signature wallets."),(0,o.kt)("p",null,"Finally, ownership of an ERC725Account can be transfered from one party to another. This \xf8ffers the possibility to use an ERC725Account to represent more than just user accounts. For instance, it can represent assets with specific data attached to them, that are transfered between owners during their lifetime."))}p.isMDXComponent=!0},4055:function(e,t,n){t.Z=n.p+"assets/images/erc725-3d73a6faf37cc766aa78300e65fe63b3.jpg"}}]);