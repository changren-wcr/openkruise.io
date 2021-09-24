"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2248],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return t?a.createElement(g,l(l({ref:n},s),{},{components:t})):a.createElement(g,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3609:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),l=["components"],i={title:"Advanced DaemonSet"},p=void 0,d={unversionedId:"user-manuals/advanceddaemonset",id:"version-v0.10.0/user-manuals/advanceddaemonset",isDocsHomePage:!1,title:"Advanced DaemonSet",description:"\u8fd9\u4e2a\u63a7\u5236\u5668\u57fa\u4e8e\u539f\u751f DaemonSet \u4e0a\u589e\u5f3a\u4e86\u53d1\u5e03\u80fd\u529b\uff0c\u6bd4\u5982 \u7070\u5ea6\u5206\u6279\u3001\u6309 Node label \u9009\u62e9\u3001\u6682\u505c\u3001\u70ed\u5347\u7ea7\u7b49\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.10.0/user-manuals/advanceddaemonset.md",sourceDirName:"user-manuals",slug:"/user-manuals/advanceddaemonset",permalink:"/zh/docs/user-manuals/advanceddaemonset",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/advanceddaemonset.md",tags:[],version:"v0.10.0",lastUpdatedBy:"FillZpp",lastUpdatedAt:1632468169,formattedLastUpdatedAt:"2021/9/24",frontMatter:{title:"Advanced DaemonSet"},sidebar:"version-v0.10.0/docs",previous:{title:"Advanced StatefulSet",permalink:"/zh/docs/user-manuals/advancedstatefulset"},next:{title:"BroadcastJob",permalink:"/zh/docs/user-manuals/broadcastjob"}},s=[{value:"\u589e\u5f3a\u7b56\u7565",id:"\u589e\u5f3a\u7b56\u7565",children:[{value:"\u5347\u7ea7\u65b9\u5f0f",id:"\u5347\u7ea7\u65b9\u5f0f",children:[]},{value:"Selector \u6807\u7b7e\u9009\u62e9\u5347\u7ea7",id:"selector-\u6807\u7b7e\u9009\u62e9\u5347\u7ea7",children:[]},{value:"\u5206\u6279\u7070\u5ea6\u5347\u7ea7",id:"\u5206\u6279\u7070\u5ea6\u5347\u7ea7",children:[]},{value:"\u70ed\u5347\u7ea7",id:"\u70ed\u5347\u7ea7",children:[]},{value:"\u6682\u505c\u5347\u7ea7",id:"\u6682\u505c\u5347\u7ea7",children:[]}]}],u={toc:s};function c(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63a7\u5236\u5668\u57fa\u4e8e\u539f\u751f ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet")," \u4e0a\u589e\u5f3a\u4e86\u53d1\u5e03\u80fd\u529b\uff0c\u6bd4\u5982 \u7070\u5ea6\u5206\u6279\u3001\u6309 Node label \u9009\u62e9\u3001\u6682\u505c\u3001\u70ed\u5347\u7ea7\u7b49\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced DaemonSet")," \u662f\u4e00\u4e2a CRD\uff0ckind \u540d\u5b57\u4e5f\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"DaemonSet"),"\uff0c\u4f46\u662f apiVersion \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/v1alpha1"),"\u3002\n\u8fd9\u4e2a CRD \u7684\u6240\u6709\u9ed8\u8ba4\u5b57\u6bb5\u3001\u9ed8\u8ba4\u884c\u4e3a\u4e0e\u539f\u751f DaemonSet \u5b8c\u5168\u4e00\u81f4\uff0c\u9664\u6b64\u4e4b\u5916\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b optional \u5b57\u6bb5\u6765\u6269\u5c55\u589e\u5f3a\u7684\u7b56\u7565\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u7528\u6237\u4ece\u539f\u751f ",(0,r.kt)("inlineCode",{parentName:"p"},"DaemonSet")," \u8fc1\u79fb\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced DaemonSet"),"\uff0c\u53ea\u9700\u8981\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion")," \u4fee\u6539\u540e\u63d0\u4ea4\u5373\u53ef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"-  apiVersion: apps/v1\n+  apiVersion: apps.kruise.io/v1alpha1\n   kind: DaemonSet\n   metadata:\n     name: sample-ds\n   spec:\n     #...\n")),(0,r.kt)("h2",{id:"\u589e\u5f3a\u7b56\u7565"},"\u589e\u5f3a\u7b56\u7565"),(0,r.kt)("p",null,"\u5728 RollingUpdateDaemonSet \u4e2d\u6211\u4eec\u65b0\u589e\u4e86\u4ee5\u4e0b\u5b57\u6bb5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'const (\n+    // StandardRollingUpdateType replace the old daemons by new ones using rolling update i.e replace them on each node one after the other.\n+    // this is the default type for RollingUpdate.\n+    StandardRollingUpdateType RollingUpdateType = "Standard"\n\n+    // SurgingRollingUpdateType replaces the old daemons by new ones using rolling update i.e replace them on each node one\n+    // after the other, creating the new pod and then killing the old one.\n+    SurgingRollingUpdateType RollingUpdateType = "Surging"\n)\n\n// Spec to control the desired behavior of daemon set rolling update.\ntype RollingUpdateDaemonSet struct {\n+    // Type is to specify which kind of rollingUpdate.\n+    Type RollingUpdateType `json:"rollingUpdateType,omitempty" protobuf:"bytes,1,opt,name=rollingUpdateType"`\n\n    // ...\n    MaxUnavailable *intstr.IntOrString `json:"maxUnavailable,omitempty" protobuf:"bytes,2,opt,name=maxUnavailable"`\n\n+    // A label query over nodes that are managed by the daemon set RollingUpdate.\n+    // Must match in order to be controlled.\n+    // It must match the node\'s labels.\n+    Selector *metav1.LabelSelector `json:"selector,omitempty" protobuf:"bytes,3,opt,name=selector"`\n\n+    // The number of DaemonSet pods remained to be old version.\n+    // Default value is 0.\n+    // Maximum value is status.DesiredNumberScheduled, which means no pod will be updated.\n+    // +optional\n+    Partition *int32 `json:"partition,omitempty" protobuf:"varint,4,opt,name=partition"`\n\n+    // Indicates that the daemon set is paused and will not be processed by the\n+    // daemon set controller.\n+    // +optional\n+    Paused *bool `json:"paused,omitempty" protobuf:"varint,5,opt,name=paused"`\n\n+    // ...\n+    MaxSurge *intstr.IntOrString `json:"maxSurge,omitempty" protobuf:"bytes,7,opt,name=maxSurge"`\n}\n')),(0,r.kt)("h3",{id:"\u5347\u7ea7\u65b9\u5f0f"},"\u5347\u7ea7\u65b9\u5f0f"),(0,r.kt)("p",null,"Advanced DaemonSet \u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.updateStrategy.rollingUpdate")," \u4e2d\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"rollingUpdateType")," \u5b57\u6bb5\uff0c\u6807\u8bc6\u4e86\u5982\u4f55\u8fdb\u884c\u6eda\u52a8\u5347\u7ea7\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Standard"),": \u5bf9\u4e8e\u6bcf\u4e2a node\uff0c\u63a7\u5236\u5668\u4f1a\u5148\u5220\u9664\u65e7\u7684 daemon Pod\uff0c\u518d\u521b\u5efa\u4e00\u4e2a\u65b0 Pod\uff0c\u548c\u539f\u751f DaemonSet \u884c\u4e3a\u4e00\u81f4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Surging"),": \u5bf9\u4e8e\u6bcf\u4e2a node\uff0c\u63a7\u5236\u5668\u4f1a\u5148\u521b\u5efa\u4e00\u4e2a\u65b0 Pod\uff0c\u7b49\u5b83 ready \u4e4b\u540e\u518d\u5220\u9664\u8001 Pod\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: DaemonSet\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      rollingUpdateType: Standard\n")),(0,r.kt)("h3",{id:"selector-\u6807\u7b7e\u9009\u62e9\u5347\u7ea7"},"Selector \u6807\u7b7e\u9009\u62e9\u5347\u7ea7"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u7b56\u7565\u652f\u6301\u7528\u6237\u901a\u8fc7\u914d\u7f6e node \u6807\u7b7e\u7684 selector\uff0c\u6765\u6307\u5b9a\u7070\u5ea6\u5347\u7ea7\u67d0\u4e9b\u7279\u5b9a\u7c7b\u578b node \u4e0a\u7684 Pod\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: DaemonSet\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      selector:\n        matchLabels:\n          nodeType: canary\n")),(0,r.kt)("h3",{id:"\u5206\u6279\u7070\u5ea6\u5347\u7ea7"},"\u5206\u6279\u7070\u5ea6\u5347\u7ea7"),(0,r.kt)("p",null,"Partition \u7684\u8bed\u4e49\u662f ",(0,r.kt)("strong",{parentName:"p"},"\u4fdd\u7559\u65e7\u7248\u672c Pod \u7684\u6570\u91cf"),"\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u3002\n\u5982\u679c\u5728\u53d1\u5e03\u8fc7\u7a0b\u4e2d\u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"partition"),"\uff0c\u5219\u63a7\u5236\u5668\u53ea\u4f1a\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"(status.DesiredNumberScheduled - partition)")," \u6570\u91cf\u7684 Pod \u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: DaemonSet\nspec:\n  # ...\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      partition: 10\n")),(0,r.kt)("h3",{id:"\u70ed\u5347\u7ea7"},"\u70ed\u5347\u7ea7"),(0,r.kt)("p",null,"MaxSurge \u662f DaemonSet pods \u6700\u5927\u6269\u51fa\u6765\u8d85\u8fc7\u9884\u671f\u7684\u6570\u91cf\uff0c\u53ea\u6709\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"rollingUpdateType=Surging")," \u7684\u65f6\u5019\u4f1a\u751f\u6548\u3002"),(0,r.kt)("p",null,"MaxSurge \u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u7edd\u5bf9\u503c\u6216\u8005\u4e00\u4e2a\u767e\u5206\u6bd4\uff0c\u63a7\u5236\u5668\u9488\u5bf9\u767e\u5206\u6bd4\u4f1a\u57fa\u4e8e status.desiredNumberScheduled \u505a\u8ba1\u7b97\u5e76\u5411\u4e0a\u53d6\u6574\uff0c\u9ed8\u8ba4\u503c\u4e3a 1\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\u5f53\u8bbe\u7f6e\u4e3a 30% \u65f6\uff0c\u6700\u591a\u6709\u603b\u6570\u7684 30% \u7684 node \u4e0a\u4f1a\u540c\u65f6\u6709 2 \u4e2a Pod \u5728\u8fd0\u884c\u3002\n\u5f53\u65b0 Pod \u53d8\u4e3a available \u4e4b\u540e\u63a7\u5236\u5668\u4f1a\u4e0b\u7ebf\u8001 Pod\uff0c\u7136\u540e\u5f00\u59cb\u66f4\u65b0\u4e0b\u4e00\u4e2a node\uff0c\u5728\u6574\u4e2a\u8fc7\u7a0b\u4e2d\u6240\u6709\u6b63\u5e38 Pod \u6570\u91cf\u4e0d\u4f1a\u8d85\u8fc7\u603b node \u6570\u91cf\u7684 130%\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: DaemonSet\nspec:\n  # ...\n  updateStrategy:\n    rollingUpdate:\n      rollingUpdateType: Surging\n      maxSurge: 30%\n")),(0,r.kt)("h3",{id:"\u6682\u505c\u5347\u7ea7"},"\u6682\u505c\u5347\u7ea7"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e paused \u4e3a true \u6682\u505c\u53d1\u5e03\uff0c\u4e0d\u8fc7\u63a7\u5236\u5668\u8fd8\u662f\u4f1a\u505a replicas \u6570\u91cf\u7ba1\u7406\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: DaemonSet\nspec:\n  # ...\n  updateStrategy:\n    rollingUpdate:\n      paused: true\n")))}c.isMDXComponent=!0}}]);