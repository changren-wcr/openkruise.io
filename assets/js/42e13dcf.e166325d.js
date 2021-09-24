"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[5383],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2235:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(7462),o=n(3366),l=(n(7294),n(3905)),i=["components"],r={title:"ImagePullJob"},s=void 0,u={unversionedId:"user-manuals/imagepulljob",id:"version-v0.10.0/user-manuals/imagepulljob",isDocsHomePage:!1,title:"ImagePullJob",description:"NodeImage and ImagePullJob are new CRDs provided since Kruise v0.8.0 version.",source:"@site/versioned_docs/version-v0.10.0/user-manuals/imagepulljob.md",sourceDirName:"user-manuals",slug:"/user-manuals/imagepulljob",permalink:"/docs/user-manuals/imagepulljob",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/imagepulljob.md",tags:[],version:"v0.10.0",lastUpdatedBy:"FillZpp",lastUpdatedAt:1632468169,formattedLastUpdatedAt:"9/24/2021",frontMatter:{title:"ImagePullJob"},sidebar:"version-v0.10.0/docs",previous:{title:"Container Restart",permalink:"/docs/user-manuals/containerrecreaterequest"},next:{title:"Deletion Protection",permalink:"/docs/user-manuals/deletionprotection"}},p=[{value:"ImagePullJob (high-level)",id:"imagepulljob-high-level",children:[{value:"configure secrets",id:"configure-secrets",children:[]}]},{value:"NodeImage (low-level)",id:"nodeimage-low-level",children:[]}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"NodeImage and ImagePullJob are new CRDs provided since Kruise v0.8.0 version."),(0,l.kt)("p",null,"Kruise will create a NodeImage for each Node, and it contains images that should be downloaded on this Node."),(0,l.kt)("p",null,"Users can create an ImagePullJob to declare an image should be downloaded on which nodes."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Image Pulling",src:n(9487).Z})),(0,l.kt)("p",null,"Note that the NodeImage is quite ",(0,l.kt)("strong",{parentName:"p"},"a low-level API"),". You should only use it when you prepare to pull an image on a definite Node.\nOtherwise, you should ",(0,l.kt)("strong",{parentName:"p"},"use the ImagePullJob to pull an image on a batch of Nodes.")),(0,l.kt)("h2",{id:"imagepulljob-high-level"},"ImagePullJob (high-level)"),(0,l.kt)("p",null,"ImagePullJob is a ",(0,l.kt)("strong",{parentName:"p"},"namespaced-scope")," resource."),(0,l.kt)("p",null,"API definition: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/apis/apps/v1alpha1/imagepulljob_types.go"},"https://github.com/openkruise/kruise/blob/master/apis/apps/v1alpha1/imagepulljob_types.go")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ImagePullJob\nmetadata:\n  name: job-with-always\nspec:\n  image: nginx:1.9.1   # [required] image to pull\n  parallelism: 10      # [optional] the maximal number of Nodes that pull this image at the same time, defaults to 1\n  selector:            # [optional] the names or label selector to assign Nodes (only one of them can be set)\n    names:\n    - node-1\n    - node-2\n    matchLabels:\n      node-type: xxx\n  # podSelector:         # [optional] label selector over pods that should pull image on nodes of these pods. Mutually exclusive with selector.\n  #  pod-label: xxx\n  completionPolicy:\n    type: Always                  # [optional] defaults to Always\n    activeDeadlineSeconds: 1200   # [optional] no default, only work for Alway type\n    ttlSecondsAfterFinished: 300  # [optional] no default, only work for Alway type\n  pullPolicy:                     # [optional] defaults to backoffLimit=3, timeoutSeconds=600\n    backoffLimit: 3\n    timeoutSeconds: 300\n")),(0,l.kt)("p",null,"You can write the names or label selector in the ",(0,l.kt)("inlineCode",{parentName:"p"},"selector")," field to assign Nodes ",(0,l.kt)("strong",{parentName:"p"},"(only one of them can be set)"),".\nIf no ",(0,l.kt)("inlineCode",{parentName:"p"},"selector")," is set, the image will be pulled on all Nodes in the cluster."),(0,l.kt)("p",null,"Or you can write the podSelector to pull image on nodes of these pods. ",(0,l.kt)("inlineCode",{parentName:"p"},"podSelector")," is mutually exclusive with ",(0,l.kt)("inlineCode",{parentName:"p"},"selector"),"."),(0,l.kt)("p",null,"Also, ImagePullJob has two completionPolicy types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Always")," means this job will eventually complete with either failed or succeeded.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"activeDeadlineSeconds"),": timeout duration for this job"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ttlSecondsAfterFinished"),": after this job finished (including success or failure) over this time, this job will be removed"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Never")," means this job will never complete, it will continuously pull image on the desired Nodes every day.")),(0,l.kt)("h3",{id:"configure-secrets"},"configure secrets"),(0,l.kt)("p",null,"If the image is in a private registry, you may want to configure the pull secrets for the image:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\nspec:\n  pullSecrets:\n  - secret-name1\n  - secret-name2\n")),(0,l.kt)("p",null,"Because of ImagePullJob is a namespaced-scope resource, the secrets should be in the same namespace of this ImagePullJob,\nand you should only put the secret names into ",(0,l.kt)("inlineCode",{parentName:"p"},"pullSecrets")," field."),(0,l.kt)("h2",{id:"nodeimage-low-level"},"NodeImage (low-level)"),(0,l.kt)("p",null,"NodeImage is a ",(0,l.kt)("strong",{parentName:"p"},"cluster-scope")," resource."),(0,l.kt)("p",null,"API definition: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/apis/apps/v1alpha1/nodeimage_types.go"},"https://github.com/openkruise/kruise/blob/master/apis/apps/v1alpha1/nodeimage_types.go")),(0,l.kt)("p",null,"When Kruise has been installed, nodeimage-controller will create NodeImages for Nodes with the same names immediately.\nAnd when a Node has been added or removed, nodeimage-controller will also create or delete NodeImage for this Node."),(0,l.kt)("p",null,"What's more, nodeimage-controller will also synchronize labels from Node to NodeImage. So the NodeImage and Node always have\nthe same name and labels. You can get NodeImage with the Node name, or list NodeImage with the Node labels as selector."),(0,l.kt)("p",null,"Typically, an empty NodeImage looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: NodeImage\nmetadata:\n  labels:\n    kubernetes.io/arch: amd64\n    kubernetes.io/os: linux\n    # ...\n  name: node-xxx\n  # ...\nspec: {}\nstatus:\n  desired: 0\n  failed: 0\n  pulling: 0\n  succeeded: 0\n")),(0,l.kt)("p",null,"If you want to pull an image such as ",(0,l.kt)("inlineCode",{parentName:"p"},"ubuntu:latest")," on this Node, you can:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"kubectl edit nodeimage node-xxx")," and write below into it (ignore the comments):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\nspec:\n  images:\n    ubuntu:  # image name\n      tags:\n      - tag: latest  # image tag\n        pullPolicy:\n          ttlSecondsAfterFinished: 300  # [required] after this image pulling finished (including success or failure) over 300s, this task will be removed\n          timeoutSeconds: 600           # [optional] timeout duration for once pulling, defaults to 600\n          backoffLimit: 3               # [optional] retry times for pulling, defaults to 3\n          activeDeadlineSeconds: 1200   # [optional] timeout duration for this task, no default\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},'kubectl patch nodeimage node-xxx --type=merge -p \'{"spec":{"images":{"ubuntu":{"tags":[{"tag":"latest","pullPolicy":{"ttlSecondsAfterFinished":300}}]}}}}\''))),(0,l.kt)("p",null,"You can read the NodeImage status using ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get nodeimage node-xxx -o yaml"),",\nand you will find the task removed from spec and status after it has finished over 600s."))}m.isMDXComponent=!0},9487:function(e,t,n){t.Z=n.p+"assets/images/imagepulling-7b933d1fbde99eea7743443bbea3b8fd.png"}}]);