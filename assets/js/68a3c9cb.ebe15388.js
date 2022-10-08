"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[5742],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),d=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,v=u["".concat(o,".").concat(m)]||u[m]||c[m]||s;return a?r.createElement(v,l(l({ref:t},p),{},{components:a})):r.createElement(v,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<s;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1645:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_label:"LSP10 - Received Vaults",sidebar_position:8},l="LSP10 - Received Vaults",i={unversionedId:"standards/universal-profile/lsp10-received-vaults",id:"standards/universal-profile/lsp10-received-vaults",title:"LSP10 - Received Vaults",description:"LSP10 - Received Vaults",source:"@site/docs/standards/universal-profile/lsp10-received-vaults.md",sourceDirName:"standards/universal-profile",slug:"/standards/universal-profile/lsp10-received-vaults",permalink:"/standards/universal-profile/lsp10-received-vaults",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/standards/universal-profile/lsp10-received-vaults.md",tags:[],version:"current",lastUpdatedAt:1664922948,formattedLastUpdatedAt:"Oct 4, 2022",sidebarPosition:8,frontMatter:{sidebar_label:"LSP10 - Received Vaults",sidebar_position:8},sidebar:"standardsSidebar",previous:{title:"LSP9 - Vault",permalink:"/standards/universal-profile/lsp9-vault"},next:{title:"LSP12 - Issued Assets",permalink:"/standards/universal-profile/lsp12-issued-assets"}},o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"What does this standard represent ?",id:"what-does-this-standard-represent-",level:2},{value:"<code>LSP10Vaults[]</code>",id:"lsp10vaults",level:3},{value:"<code>LSP10VaultsMap</code>",id:"lsp10vaultsmap",level:3},{value:"Flow",id:"flow",level:3}],p={toc:d};function c(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lsp10---received-vaults"},"LSP10 - Received Vaults"),(0,n.kt)("admonition",{title:"Standard Document",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-10-ReceivedVaults.md"},"LSP10 - Received Vaults"))),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"To keep track of all the vaults that an address owns, we should avoid the same problem mentioned in ",(0,n.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp5-received-assets"},"LSP5-ReceivedAssets"),", which is not informing recipients and senders about the ownership transfer of ",(0,n.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp9-vault"},"LSP9-Vaults"),"."),(0,n.kt)("p",null,"One way to avoid this problem is to create generic metadata keys that developers should register in the smart contract storage, representing how many different vaults you own, their type, and the address of the transferred vault contract."),(0,n.kt)("h2",{id:"what-does-this-standard-represent-"},"What does this standard represent ?"),(0,n.kt)("admonition",{title:"Recommendation",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to understand the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/standards/lsp-background/erc725#erc725y---generic-data-keyvalue-store"},"ERC725Y Generic Key/Value Store"))," and ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp2-json-schema"},"LSP2 - ERC725YJSONSchema"))," Standards before going through the ERC725Y Data Keys.")),(0,n.kt)("p",null,"This Metadata standard describes two data keys that can be added to an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-725.md"},"ERC725Y")," smart contract to keep track of received and owned ",(0,n.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp9-vault"},"LSP9-Vaults"),"."),(0,n.kt)("h3",{id:"lsp10vaults"},(0,n.kt)("inlineCode",{parentName:"h3"},"LSP10Vaults[]")),(0,n.kt)("p",null,"This data key represents a list of all the vaults owned by the contract."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP10Vaults[]",\n  "key": "0x55482936e01da86729a45d2b87a6b1d3bc582bea0ec00e38bdb340e3af6f9f06",\n  "keyType": "Array",\n  "valueType": "address",\n  "valueContent": "Address"\n}\n')),(0,n.kt)("admonition",{title:"Recommendation",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"It is recommended to query the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"LSP10Vaults[]"))," data key to check if a smart contract supports the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp10-received-vaults"},"LSP10 - ReceivedVaults"))," standard.")),(0,n.kt)("h3",{id:"lsp10vaultsmap"},(0,n.kt)("inlineCode",{parentName:"h3"},"LSP10VaultsMap")),(0,n.kt)("p",null,"This data key represents a map key holding both:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"an ",(0,n.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC165 interface ID")," to quickly identify the standard used by each vault's smart contract (without the need to query the assets contracts directly)."),(0,n.kt)("li",{parentName:"ul"},"the index in the ",(0,n.kt)("a",{parentName:"li",href:"#lsp10vaults-"},(0,n.kt)("inlineCode",{parentName:"a"},"LSP10Vaults[]"))," array where the received vaults addresses are stored.")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"LSP10VaultsMap")," data key also helps prevent adding duplications to the array when automatically added via smart contract (",(0,n.kt)("em",{parentName:"p"},"e.g.,")," an ",(0,n.kt)("a",{parentName:"p",href:"/standards/generic-standards/lsp1-universal-receiver-delegate"},"LSP1-UniversalReceiverDelegate"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "LSP10VaultsMap:<address>",\n  "key": "0x192448c3c0f88c7f238c0000<address>",\n  "keyType": "Mapping",\n  "valueType": "(bytes4,bytes8)",\n  "valueContent": "(Bytes4,Number)"\n}\n')),(0,n.kt)("h3",{id:"flow"},"Flow"),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The data keys are also set on the ",(0,n.kt)("strong",{parentName:"p"},"sender's Universal Profile")," to remove the vault contract address when sent to the recipient.")),(0,n.kt)("p",null,"If set when transferring vaults, these data keys are automatically updated in the UniversalProfile storage via the ",(0,n.kt)("a",{parentName:"p",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-up"},"LSP1UniversalReceiverDelegateUP")," contract."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Vault transfer detailed flow",src:a(9355).Z,width:"2902",height:"1378"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"LSP10 Received Vaults Flow",src:a(2543).Z,width:"3158",height:"1266"})))}c.isMDXComponent=!0},9355:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/detailed-vault-transfer-9061f07fd381fbe41681c60d9a732000.jpeg"},2543:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/lsp10-received-vaults-97da43fff9adfb7ecc6dc067be84f7ec.jpeg"}}]);