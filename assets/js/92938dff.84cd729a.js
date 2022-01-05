"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[1025],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(t),p=s,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||a;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function p(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:s},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(3117),s=t(7294),a=t(2389),o=t(9443);var i=function(){var e=(0,s.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(6681),u=t(6010),c="tabItem_1uMI";function d(e){var n,t,a,o=e.lazy,d=e.block,f=e.defaultValue,p=e.values,m=e.groupId,b=e.className,v=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,l.lx)(g,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===f?f:null!=(n=null!=f?f:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=v[0])?void 0:a.props.value;if(null!==h&&!g.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var S=i(),E=S.tabGroupChoices,P=S.setTabGroupChoices,A=(0,s.useState)(h),w=A[0],k=A[1],I=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var R=E[m];null!=R&&R!==w&&g.some((function(e){return e.value===R}))&&k(R)}var N=function(e){var n=e.currentTarget,t=I.indexOf(n),r=g[t].value;r!==w&&(O(n),k(r),null!=m&&P(m,r))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;t=I[r]||I[0];break;case"ArrowLeft":var s=I.indexOf(e.currentTarget)-1;t=I[s]||I[I.length-1]}null==(n=t)||n.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},b)},g.map((function(e){var n=e.value,t=e.label,a=e.attributes;return s.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return I.push(e)},onKeyDown:x,onFocus:N,onClick:N},a,{className:(0,u.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),o?(0,s.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function f(e){var n=(0,a.Z)();return s.createElement(d,(0,r.Z)({key:String(n)},e))}},4212:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return f},default:function(){return m}});var r=t(3117),s=t(102),a=(t(7294),t(3905)),o=t(6396),i=t(8215),l=["components"],u={sidebar_label:"Giving Permissions to addresses",sidebar_position:2.3},c="Giving permissions to addresses",d={unversionedId:"guides/key-manager/giving-permissions",id:"guides/key-manager/giving-permissions",title:"Giving permissions to addresses",description:"The Key Manager (KM) enables us to give permissions to other addresses, so they can edit data on our Universal Profile (UP) or interact with it on our behalf. In this section, we will see how to set up these permissions.",source:"@site/docs/guides/key-manager/03-giving-permissions.md",sourceDirName:"guides/key-manager",slug:"/guides/key-manager/giving-permissions",permalink:"/guides/key-manager/giving-permissions",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/key-manager/03-giving-permissions.md",tags:[],version:"current",sidebarPosition:2.3,frontMatter:{sidebar_label:"Giving Permissions to addresses",sidebar_position:2.3},sidebar:"guidesSidebar",previous:{title:"Interact with other contracts",permalink:"/guides/universal-profile/interact-with-contracts"},next:{title:"Create a LSP7 Digital Asset (Token)",permalink:"/guides/create-lsp7-digital-asset"}},f=[],p={toc:f};function m(e){var n=e.components,t=(0,s.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"giving-permissions-to-addresses"},"Giving permissions to addresses"),(0,a.kt)("p",null,"The Key Manager (KM) enables us to give permissions to other addresses, so they can edit data on our Universal Profile (UP) or interact with it on our behalf. In this section, we will see how to set up these permissions."),(0,a.kt)("p",null,"Below is a list of ERC725Y Permission Keys related to the Key Manager.\nWe will store these values in a file ",(0,a.kt)("inlineCode",{parentName:"p"},"constants.js"),", and reuse them through the next code snippets."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="constants.js"',title:'"constants.js"'},'// keccak256(\'AddressPermissions[]\')\nconst PERMISSIONS_ARRAY =\n  \'0xdf30dba06db6a30e65354d9a64c609861f089545ca58c6b4dbe31a5f338cb0e3\';\n\n// prettier-ignore\nconst ADDRESSES = {\n  PERMISSIONS:      "0x4b80742d0000000082ac0000", // AddressPermissions:Permissions:<address> --\x3e bytes32\n  ALLOWEDADDRESSES: "0x4b80742d00000000c6dd0000", // AddressPermissions:AllowedAddresses:<address> --\x3e address[]\n  ALLOWEDFUNCTIONS: "0x4b80742d000000008efe0000", // AddressPermissions:AllowedFunctions:<address> --\x3e bytes4[]\n}\n\n// prettier-ignore\nconst PERMISSIONS = {\n  CHANGEOWNER:      "0x0000000000000000000000000000000000000000000000000000000000000001", // 0000 0000 0000 0001\n  CHANGEPERMISSIONS:"0x0000000000000000000000000000000000000000000000000000000000000002", // .... .... .... 0010\n  ADDPERMISSIONS:   "0x0000000000000000000000000000000000000000000000000000000000000004", // .... .... .... 0100\n  SETDATA:          "0x0000000000000000000000000000000000000000000000000000000000000008", // .... .... .... 1000\n  CALL:             "0x0000000000000000000000000000000000000000000000000000000000000010", // .... .... 0001 ....\n  STATICCALL:       "0x0000000000000000000000000000000000000000000000000000000000000020", // .... .... 0010 ....\n  DELEGATECALL:     "0x0000000000000000000000000000000000000000000000000000000000000040", // .... .... 0100 ....\n  DEPLOY:           "0x0000000000000000000000000000000000000000000000000000000000000080", // .... .... 1000 ....\n  TRANSFERVALUE:    "0x0000000000000000000000000000000000000000000000000000000000000100", // .... 0001 .... ....\n  SIGN:             "0x0000000000000000000000000000000000000000000000000000000000000200", // .... 0010 .... ....\n}\n\nmodule.exports = {\n  ADDRESSES,\n  PERMISSIONS,\n  PERMISSIONS_ARRAY,\n};\n')),(0,a.kt)("p",null,"The code snippets below show how to set permissions for ",(0,a.kt)("strong",{parentName:"p"},"Bob")," on a Universal Profile owned by ",(0,a.kt)("inlineCode",{parentName:"p"},"myEOA"),".\nIt assumes that the profile has been deployed with our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.lukso.tech/tools/lsp-factoryjs/introduction/getting-started.md"},"lsp-factory.js")," tool."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"web3js",label:"web3.js",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// see file above constants.js\nconst { ADDRESSES, PERMISSIONS, PERMISSIONS_ARRAY } = require('./constants');\n\nconst UniversalProfile = require('@lukso/universalprofile-smart-contracts/build/artifacts/UniversalProfile.json');\nconst KeyManager = require('@lukso/universalprofile-smart-contracts/build/artifacts/KeyManager.json');\n\nconst universalProfile = new web3.eth.Contract(\n  UniversalProfile.abi,\n  '<my-UniversalProfile-address>',\n);\nconst keyManager = new web3.eth.Contract(\n  KeyManager.abi,\n  '<my-KeyManager-Address>',\n);\n\nlet bobAddress = '0xcafecafecafecafecafecafecafecafecafecafe';\nlet bobPermissions = PERMISSIONS.SETDATA;\n\n// give the permission SETDATA to Bob\nasync function setBobPermission() {\n  let payload = await universalProfile.methods\n    .setData(\n      [\n        ADDRESSES.PERMISSIONS + bobAddress.substr(2), // allow Bob to setData on your UP\n        PERMISSIONS_ARRAY, // length of AddressPermissions[]\n        PERMISSIONS_ARRAY.slice(0, 34) + '00000000000000000000000000000001', // add Bob's address into the list of permissions\n      ],\n      [\n        bobPermissions,\n        3, // 3 because UP owner + Universal Receiver Delegate permission have already been set by lsp-factory\n        bobAddress,\n      ],\n    )\n    .encodeABI();\n\n  keyManager\n    .execute(payload)\n    .send({ from: '<my-eoa-address>', gasLimit: 300_000 });\n}\n\nsetBobPermission();\n"))),(0,a.kt)(i.Z,{value:"etherjs",label:"ether.js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// see file above constants.js\nconst { ADDRESSES, PERMISSIONS, PERMISSIONS_ARRAY } = require('./constants');\n\nconst UniversalProfile = require('@lukso/universalprofile-smart-contracts/build/artifacts/UniversalProfile.json');\nconst KeyManager = require('@lukso/universalprofile-smart-contracts/build/artifacts/KeyManager.json');\n\nconst universalProfile = new ethers.Contract(\n  '<my-UniversalProfile-address>',\n  UniversalProfile.abi,\n);\nconst keyManager = new ethers.Contract(\n  '<my-KeyManager-Address>',\n  KeyManager.abi,\n);\n\nlet bobAddress = '0xcafecafecafecafecafecafecafecafecafecafe';\nlet bobPermissions = ethers.utils.hexZeroPad(PERMISSIONS.SETDATA, 32);\n\n// give the permission SETDATA to Bob\nasync function setBobPermission() {\n  let payload = universalProfile.interface.encodeFunctionData('setData', [\n    [\n      ADDRESSES.PERMISSIONS + bobAddress.substr(2),\n      PERMISSIONS_ARRAY, // length of AddressPermissions[]\n      PERMISSIONS_ARRAY.slice(0, 34) + '00000000000000000000000000000001', // add Bob's address into the list of\n    ],\n    [\n      bobPermissions,\n      3, // 3 because UP owner + Universal Receiver Delegate permission have already been set by lsp-factory\n      bobAddress,\n    ],\n  ]);\n\n  await keyManager.connect(myEOA).execute(payload);\n}\n\nsetBobPermission();\n")))))}m.isMDXComponent=!0}}]);