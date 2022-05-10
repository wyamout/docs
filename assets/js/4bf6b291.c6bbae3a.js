"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[5292],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=p(a),u=r,f=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(f,l(l({ref:e},d),{},{components:a})):n.createElement(f,l({ref:e},d))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2736:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],s={sidebar_position:2,title:"LSP4DigitalAssetMetadata"},o="LSP4DigitalAssetMetadata",p={unversionedId:"tools/lsp-factoryjs/classes/lsp4-digital-asset-metadata",id:"tools/lsp-factoryjs/classes/lsp4-digital-asset-metadata",title:"LSP4DigitalAssetMetadata",description:"uploadMetadata",source:"@site/docs/tools/lsp-factoryjs/classes/lsp4-digital-asset-metadata.md",sourceDirName:"tools/lsp-factoryjs/classes",slug:"/tools/lsp-factoryjs/classes/lsp4-digital-asset-metadata",permalink:"/tools/lsp-factoryjs/classes/lsp4-digital-asset-metadata",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/lsp-factoryjs/classes/lsp4-digital-asset-metadata.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"LSP4DigitalAssetMetadata"},sidebar:"toolsSidebar",previous:{title:"LSP3UniversalProfile",permalink:"/tools/lsp-factoryjs/classes/lsp3-universal-profile"},next:{title:"LSP7DigitalAsset",permalink:"/tools/lsp-factoryjs/classes/lsp7-digital-asset"}},d={},m=[{value:"uploadMetadata",id:"uploadmetadata",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Parameters of <code>metaData</code>",id:"parameters-of-metadata",level:4},{value:"Parameters of <code>uploadOptions?</code>",id:"parameters-of-uploadoptions",level:4},{value:"Returns",id:"returns",level:4},{value:"Upload LSP4 Metadata Example",id:"upload-lsp4-metadata-example",level:4},{value:"Upload Custom LSP4 Metadata Example",id:"upload-custom-lsp4-metadata-example",level:4},{value:"Upload Custom LSP4 Metadata with LSP Factory Example",id:"upload-custom-lsp4-metadata-with-lsp-factory-example",level:4}],c={toc:m};function u(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lsp4digitalassetmetadata"},"LSP4DigitalAssetMetadata"),(0,i.kt)("h2",{id:"uploadmetadata"},"uploadMetadata"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"LSP4DigitalAssetMetadata.uploadMetadata(lsp4Metadata, uploadOptions?);\n")),(0,i.kt)("p",null,"Uploads and processes passed assets and images, and uploads the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md"},"LSP4 Digital Asset Metadata")," to IPFS.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"uploadMetadata")," function is available as a static or non-static function callable on the ",(0,i.kt)("inlineCode",{parentName:"p"},"LSPFactory")," library instance."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"uploadOptions")," are not specified in the function call, and the function is used on an ",(0,i.kt)("inlineCode",{parentName:"p"},"LSPFactory")," instance, the specified options in ",(0,i.kt)("inlineCode",{parentName:"p"},"uploadOptions")," that were passed to the LSPFactory during instantiation will be used."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"metaData")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The metadata to be uploaded.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"uploadOptions?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The specification how the metadata should be uploaded.")))),(0,i.kt)("h4",{id:"parameters-of-metadata"},"Parameters of ",(0,i.kt)("inlineCode",{parentName:"h4"},"metaData")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"description")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A description of the digital asset.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"links?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{","\xa0","title: string, url: string","\xa0","}","[\xa0]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The links of the digital asset.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"icon?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"File, AssetBuffer, or AssetMetadata","[\xa0]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The icon of the digital asset.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"images?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"File, AssetBuffer, or AssetMetadata","[\xa0]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The images of the digital asset.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"assets?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"File, AssetBuffer, or AssetMetadata","[\xa0]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The assets of the digital asset.")))),(0,i.kt)("h4",{id:"parameters-of-uploadoptions"},"Parameters of ",(0,i.kt)("inlineCode",{parentName:"h4"},"uploadOptions?")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ipfsClientOptions?")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"IPFS Client Options as defined by the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client#createoptions"},"ipfs-http-client library")," used internally.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Promise")),(0,i.kt)("td",{parentName:"tr",align:"left"},"<LSP4MetadataForEncoding",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The processed ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/lukso-network/LIPs/blob/main/LSPs/LSP-4-DigitalAsset-Metadata.md"},"LSP4")," data and upload URL.")))),(0,i.kt)("h4",{id:"upload-lsp4-metadata-example"},"Upload LSP4 Metadata Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Uploading LSP4Metadata"',title:'"Uploading','LSP4Metadata"':!0},'const image = new File();\nconst icon = new File();\nconst asset = new File();\nawait LSP4DigitalAssetMetadata.uploadMetadata(\n    {\n        description: "Digital Asset",\n        assets: [asset],\n        images: [image],\n        icon: icon,\n        links: [{ title: "Cool", url: "cool.com" }],\n    };\n);\n/**\n{\n  lsp4Metadata: {\n    LSP4Metadata: {\n      description: \'Digital Asset\',\n      assets: [Array],\n      images: [Array],\n      icon: [Array],\n      links: [Array]\n    }\n  },\n  url: \'ipfs://QmXJxJePjm6A9TSC4m32GN6h3PknVY2C4HqNaBEF6EeuGB\'\n}\n*/\n')),(0,i.kt)("h4",{id:"upload-custom-lsp4-metadata-example"},"Upload Custom LSP4 Metadata Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Uploading LSP4Metadata using custom uploadOptions"',title:'"Uploading',LSP4Metadata:!0,using:!0,custom:!0,'uploadOptions"':!0},"await LSP4DigitalAssetMetadata.uploadMetadata(\n  {\n    description: 'Digital Asset',\n    assets: [asset],\n    images: [image],\n    icon: icon,\n    links: [{ title: 'Cool', url: 'cool.com' }],\n  },\n  {\n    ipfsUploadOptions: {\n      host: 'ipfs.infura.io',\n      port: 5001,\n      protocol: 'https',\n    },\n  }\n);\n/**\n{\n  lsp4Metadata: {\n    LSP4Metadata: {\n      description: 'Digital Asset',\n      assets: [Array],\n      images: [Array],\n      icon: [Array],\n      links: [Array]\n    }\n  },\n  url: 'ipfs://QmXJxJePjm6A9TSC4m32GN6h3PknVY2C4HqNaBEF6EeuGB'\n}\n*/\n")),(0,i.kt)("h4",{id:"upload-custom-lsp4-metadata-with-lsp-factory-example"},"Upload Custom LSP4 Metadata with LSP Factory Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Uploading LSP4Metadata using uploadOptions passed when instantiating LSPFactory"',title:'"Uploading',LSP4Metadata:!0,using:!0,uploadOptions:!0,passed:!0,when:!0,instantiating:!0,'LSPFactory"':!0},"const lspFactory = new LSPFactory(provider, {\n  deployKey: myDeployKey,\n  chainId: myChainId,\n  uploadOptions: {\n    ipfsClientOptions: {\n      host: 'ipfs.infura.io',\n      port: 5001,\n      protocol: 'https',\n    },\n  },\n});\nawait lspFactory.LSP4DigitalAssetMetadata.uploadMetadata({\n  description: 'Digital Asset',\n  assets: [asset],\n  images: [image],\n  icon: icon,\n  links: [{ title: 'Cool', url: 'cool.com' }],\n});\n/**\n{\n  lsp4Metadata: {\n    LSP4Metadata: {\n      description: 'Digital Asset',\n      assets: [Array],\n      images: [Array],\n      icon: [Array],\n      links: [Array]\n    }\n  },\n  url: 'ipfs://QmXJxJePjm6A9TSC4m32GN6h3PknVY2C4HqNaBEF6EeuGB'\n}\n*/\n")))}u.isMDXComponent=!0}}]);