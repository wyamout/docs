"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[6173],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(y,i(i({ref:t},d),{},{components:a})):n.createElement(y,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9564:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Execute Relay Transactions",sidebar_position:3},i="Execute Relay Transactions",l={unversionedId:"guides/key-manager/execute-relay-call",id:"guides/key-manager/execute-relay-call",title:"Execute Relay Transactions",description:"The LSP6 KeyManager standard enables anybody to execute a transaction on behalf of a Universal Profile, given they have a valid transaction which has been signed by a key that controls the Universal Profile.",source:"@site/docs/guides/key-manager/execute-relay-call.md",sourceDirName:"guides/key-manager",slug:"/guides/key-manager/execute-relay-call",permalink:"/guides/key-manager/execute-relay-call",draft:!1,editUrl:"https://github.com/lukso-network/docs/tree/main/docs/guides/key-manager/execute-relay-call.md",tags:[],version:"current",lastUpdatedAt:1660627281,formattedLastUpdatedAt:"Aug 16, 2022",sidebarPosition:3,frontMatter:{sidebar_label:"Execute Relay Transactions",sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"Get controller addresses",permalink:"/guides/key-manager/get-controllers"},next:{title:"Upgrade LSP6 Key Manager",permalink:"/guides/key-manager/upgrade-lsp6"}},s={},c=[{value:"Generate the signed transaction payload",id:"generate-the-signed-transaction-payload",level:2},{value:"Execute via <code>executeRelayCall</code>",id:"execute-via-executerelaycall",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"execute-relay-transactions"},"Execute Relay Transactions"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager"},"LSP6 KeyManager")," standard enables anybody to execute a transaction on behalf of a Universal Profile, given they have a valid transaction which has been signed by a key that controls the Universal Profile."),(0,r.kt)("p",null,"Relayed execution enables use cases such as Transaction Relayer Services to be possible where users can send their transaction details to a third party to be executed, moving the gas cost burden away from the user who owns the Universal Profile."),(0,r.kt)("p",null,"For example, Alice can send an encoded transaction which updates the ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp3-universal-profile-metadata"},"LSP3Profile")," picture on her Universal Profile to a second user, Bob, who executes the transaction and pays the gas cost of the transaction on behalf of Alice."),(0,r.kt)("p",null,"To execute the transaction, Bob needs to know:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the encoded ABI of the transaction that will get executed,"),(0,r.kt)("li",{parentName:"ul"},"the transaction signature,"),(0,r.kt)("li",{parentName:"ul"},"the nonce of the key that signed the transaction.")),(0,r.kt)("p",null,"The transaction is then executed via the ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager"},"LSP6KeyManager")," function ",(0,r.kt)("inlineCode",{parentName:"p"},"executeRelayCall"),"."),(0,r.kt)("p",null,"You will need the ",(0,r.kt)("a",{parentName:"p",href:"../../standards/smart-contracts/introduction"},(0,r.kt)("inlineCode",{parentName:"a"},"@lukso/lsp-smart-contracts"))," package."),(0,r.kt)("h2",{id:"generate-the-signed-transaction-payload"},"Generate the signed transaction payload"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This example shows how to prepare a transaction to be executed by a third party. This logic can be implemented client-side and then sent to a third-party application or service such as a Transaction Relay service to be executed.")),(0,r.kt)("p",null,"To encode a transaction, we need the address of the Universal Profile smart contract and the private key of a controller key with sufficient ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager#permissions"},"LSP6 permissions")," to execute the transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const controllingAccountPrivateKey = '0x...';\nconst myUpAddress = '0x...';\n")),(0,r.kt)("p",null,"Get the ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce")," of the controller key from the KeyManager by instantiating the KeyManager smart contract instance and calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"getNonce")," function."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"channelId")," is used to prevent nonce conflicts when multiple apps send transactions to the same KeyManager at the same time. Read more about ",(0,r.kt)("a",{parentName:"p",href:"/standards/universal-profile/lsp6-key-manager#out-of-order-execution"},"out of order execution here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Get the controller key nonce"',title:'"Get',the:!0,controller:!0,key:!0,'nonce"':!0},"import UniversalProfileContract from '@lukso/lsp-smart-contracts/artifacts/UniversalProfile.json';\nimport KeyManagerContract from '@lukso/lsp-smart-contracts/artifacts/LSP6KeyManager.json';\n\nconst myUniversalProfile = new web3.eth.Contract(\n  UniversalProfileContract.abi,\n  myUpAddress,\n);\n\nconst keyManagerAddress = await myUniversalProfile.methods.owner().call();\nconst KeyManager = new web3.eth.Contract(\n  KeyManagerContract.abi,\n  keyManagerAddress,\n);\n\nconst controllerAccount =\n  web3.eth.accounts.wallet.add(controllerPrivateKey);\nconst channelId = 0;\n\nconst nonce = await KeyManager.methods\n  .getNonce(controllerAccount.address, channelId)\n  .call();\n")),(0,r.kt)("p",null,"Encode the ABI of the transaction you want to be executed. In this case, a LYX transfer to a recipient address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Encode transaction ABI"',title:'"Encode',transaction:!0,'ABI"':!0},"const abiPayload = myUniversalProfile.methods.execute(\n    0, // Operation type: CALL\n    '0x...', // Recipient address\n    web3.utils.toWei('1'), // Value\n    '0x' // Data\n).encodeABI()) ;\n")),(0,r.kt)("admonition",{title:"ERC725X execute",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find more information about the ",(0,r.kt)("a",{parentName:"p",href:"../../standards/smart-contracts/erc725-contract#execute---erc725x"},"ERC725X ",(0,r.kt)("inlineCode",{parentName:"a"},"execute")," call here"),".")),(0,r.kt)("p",null,"Afterward, sign the transaction message from the controller key of the Universal Profile."),(0,r.kt)("p",null,"The message is constructed by signing the ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keyManagerAddress"),", signer ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"abiPayload"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Sign the transaction"',title:'"Sign',the:!0,'transaction"':!0},"const chainId = await web3.eth.getChainId(); // will be 2828 on L16\n\nconst message = web3.utils.soliditySha3(chainId, keyManagerAddress, nonce, {\n  t: 'bytes',\n  v: abiPayload,\n});\n\nconst signatureObject = controllerAccount.sign(message);\nconst signature = signatureObject.signature;\n")),(0,r.kt)("p",null,"Now the ",(0,r.kt)("inlineCode",{parentName:"p"},"signature"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"abiPayload"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"keyManagerAddress")," can be sent to a third party to execute the transaction using ",(0,r.kt)("a",{parentName:"p",href:"../../standards/smart-contracts/lsp6-key-manager#executerelaycall"},(0,r.kt)("inlineCode",{parentName:"a"},"executeRelayCall")),"."),(0,r.kt)("h2",{id:"execute-via-executerelaycall"},"Execute via ",(0,r.kt)("inlineCode",{parentName:"h2"},"executeRelayCall")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This example shows how a third party can execute a transaction on behalf of another user.")),(0,r.kt)("p",null,"To execute a signed transaction ABI payload requires:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("strong",{parentName:"li"},"KeyManager contract address")),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("strong",{parentName:"li"},"transaction ABI payload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"signed transaction payload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nonce")," of the controller key which signed the transaction.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To get the KeyManager address from the UniversalProfile address, call the ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," function on the Universal Profile contract.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title='Send the transaction'",title:"'Send",the:!0,"transaction'":!0},"const executeRelayCallTransaction = await KeyManager.methods\n  .executeRelayCall(signature, nonce, abiPayload)\n  .send({from: controllerAccount.address, gasLimit: 300_000});\n")),(0,r.kt)("admonition",{title:"LSP6KeyManager executeRelayCall",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find more information about the ",(0,r.kt)("a",{parentName:"p",href:"../../standards/smart-contracts/lsp6-key-manager#executerelaycall"},"LSP6KeyManager ",(0,r.kt)("inlineCode",{parentName:"a"},"executeRelayCall")," here"),".")))}p.isMDXComponent=!0}}]);