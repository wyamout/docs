"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[3736],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||s;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<s;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_label:"Set the default implementation",sidebar_position:1},i="Set the default implementation",o={unversionedId:"guides/universal-receiver-delegate/set-default-implementation",id:"guides/universal-receiver-delegate/set-default-implementation",title:"Set the default implementation",description:"Users deploying their Universal Profiles using the guides that utilize lsp-factory or the Browser Extension can skip this guide, as this contract is already deployed and set for their profiles.",source:"@site/docs/guides/universal-receiver-delegate/set-default-implementation.md",sourceDirName:"guides/universal-receiver-delegate",slug:"/guides/universal-receiver-delegate/set-default-implementation",permalink:"/guides/universal-receiver-delegate/set-default-implementation",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/universal-receiver-delegate/set-default-implementation.md",tags:[],version:"current",lastUpdatedAt:1661109600,formattedLastUpdatedAt:"Aug 21, 2022",sidebarPosition:1,frontMatter:{sidebar_label:"Set the default implementation",sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"Upgrade LSP6 Key Manager",permalink:"/guides/key-manager/upgrade-lsp6"},next:{title:"Accept & Reject Assets",permalink:"/guides/universal-receiver-delegate/accept-reject-assets"}},l={},d=[{value:"Deploy the default Universal Receiver Delegate contract",id:"deploy-the-default-universal-receiver-delegate-contract",level:2},{value:"Set the address of the URD in the storage",id:"set-the-address-of-the-urd-in-the-storage",level:3}],c={toc:d};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set-the-default-implementation"},"Set the default implementation"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Users deploying their Universal Profiles using the guides that utilize ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/guides/universal-profile/create-profile"},"lsp-factory"))," or the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/guides/browser-extension/create-a-universal-profile"},"Browser Extension"))," can skip this guide, as this contract is already deployed and set for their profiles.")),(0,a.kt)("p",null,"This guide will teach you how to deploy and set the default implementation of the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/standards/smart-contracts/lsp1-universal-receiver-delegate-up"},"Universal Receiver Delegate"))," (URD) used by the Universal Profile. This contract will register the addresses of the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp5-received-assets"},"received assets"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp10-received-vaults"},"vaults"))," and will remove them on a balance equal to 0. This contract requires the ",(0,a.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager#permissions"},"SETDATA Permission")," to interact with the profile through the KeyManager."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"UniversalReceiverDelegate setting data keys on profile",src:n(1704).Z,width:"1410",height:"610"})),(0,a.kt)("h2",{id:"deploy-the-default-universal-receiver-delegate-contract"},"Deploy the default Universal Receiver Delegate contract"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Deploying the Universal Receiver Delegate of the Universal Profile"',title:'"Deploying',the:!0,Universal:!0,Receiver:!0,Delegate:!0,of:!0,'Profile"':!0},"import Web3 from 'web3';\nimport LSP1UniversalReceiverDelegateUP from '@lukso/lsp-smart-contracts/artifacts/LSP1UniversalReceiverDelegateUP.json';\n\nconst web3 = new Web3('https://rpc.l16.lukso.network');\n\nconst PRIVATE_KEY = '0x...'; // your EOA private key\nconst myEOA = web3.eth.accounts.wallet.add(PRIVATE_KEY);\n\n// create an instance\nlet myURD = new web3.eth.Contract(LSP1UniversalReceiverDelegateUP.abi);\n\n// deploy the URD contract\nawait myURD\n  .deploy({\n    data: LSP1UniversalReceiverDelegateUP.bytecode\n  })\n  .send({\n    from: myEOA.address,\n    gas: 5_000_000,\n    gasPrice: '1000000000',\n  });\n")),(0,a.kt)("h3",{id:"set-the-address-of-the-urd-in-the-storage"},"Set the address of the URD in the storage"),(0,a.kt)("p",null,"After deploying the contract, we need to set its address under the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/standards/generic-standards/lsp1-universal-receiver#extension"},"LSP1-UniversalReceiverDelegate Data Key"))," and grant it the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/standards/universal-profile/lsp6-key-manager#permissions"},"SETDATA"))," permission."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Setting address of the URD in the storage"',title:'"Setting',address:!0,of:!0,the:!0,URD:!0,in:!0,'storage"':!0},'import Web3 from \'web3\';\nimport constants from "@lukso/lsp-smart-contracts/constants.js";\nimport UniversalProfile from \'@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json\';\nimport LSP6KeyManager from \'@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json\';\n\nconst web3 = new Web3(\'https://rpc.l16.lukso.network\');\n\nconst PRIVATE_KEY = \'0x...\'; // your EOA private key\nconst myEOA = web3.eth.accounts.wallet.add(PRIVATE_KEY);\n\nconst URD_DATA_KEY = constants.ERC725YKeys.LSP0.LSP1UniversalReceiverDelegate;\nconst myURDAddress = "0x.." // address of the URD Deployed in Step 1\nconst myUniversalProfileAddress = "0x.." // address of the UP\n\n// create an instance of the UP\nconst myUP = new web3.eth.Contract(UniversalProfile.abi, myUniversalProfileAddress);\n\nconst addressPermissionsOldArrayLengthHex = await myUP.methods[\n  "getData(bytes32)"\n](constants.ERC725YKeys.LSP6["AddressPermissions[]"].length).call();\n\nconst addressPermissionsNewArrayLength =\n  web3.utils.hexToNumber(addressPermissionsOldArrayLengthHex) + 1;\n\nconst addressPermissionsNewArrayLengthHex = web3.utils.padLeft(\n  web3.utils.numberToHex(addressPermissionsNewArrayLength),\n  64\n);\n\n// bytes16 index `addressPermissionsOldArrayLengthHex` will serve as index\nconst URDIndexInArrayHex = addressPermissionsOldArrayLengthHex.substring(34,66);\n\n// encode setData Payload on the Vault\nconst setDataPayload = await myUP.methods["setData(bytes32[],bytes[])"](\n  [\n    URD_DATA_KEY,\n    constants.ERC725YKeys.LSP6["AddressPermissions[]"].length,\n    constants.ERC725YKeys.LSP6["AddressPermissions[]"].index +\n      elementIndexInArrayHex,\n    constants.ERC725YKeys.LSP6["AddressPermissions:Permissions"] +\n      myURDAddress.substring(2),\n  ],\n  [\n    myURDAddress,\n    addressPermissionsNewArrayLengthHex,\n    myURDAddress,\n    constants.PERMISSIONS.SETDATA,\n  ]\n).encodeABI();\n\n// getting the Key Manager address from UP\nconst myKeyManagerAddress = await myUP.methods.owner().call();\n\n// create an instance of the KeyManager\nlet myKM = new web3.eth.Contract(LSP6KeyManager.abi, myKeyManagerAddress);\n\n// execute the executePayload on the KM\nawait myKM.methods.execute(executePayload).send({\n    from: myEOA.address,\n    gasLimit: 600_000,\n});\n')))}p.isMDXComponent=!0},1704:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/token-transfer-4-7db56efafbc48ac08f9d8a37985e31de.jpg"}}]);