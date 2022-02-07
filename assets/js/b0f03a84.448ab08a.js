"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[3637],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5096:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"How to publish Kruise workload (CloneSet) using GitOps (Argo-cd)?"},l=void 0,p={unversionedId:"best-practices/gitops-with-kruise",id:"best-practices/gitops-with-kruise",title:"How to publish Kruise workload (CloneSet) using GitOps (Argo-cd)?",description:"What is GitOps\uff1f",source:"@site/docs/best-practices/gitops-with-kruise.md",sourceDirName:"best-practices",slug:"/best-practices/gitops-with-kruise",permalink:"/docs/next/best-practices/gitops-with-kruise",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/best-practices/gitops-with-kruise.md",tags:[],version:"current",lastUpdatedBy:"berg",lastUpdatedAt:1644221022,formattedLastUpdatedAt:"2/7/2022",frontMatter:{title:"How to publish Kruise workload (CloneSet) using GitOps (Argo-cd)?"},sidebar:"docs",previous:{title:"HPA configuration",permalink:"/docs/next/best-practices/hpa-configuration"},next:{title:"Extreme Elastic Schedule Solution Based on HPA and WorkloadSpread",permalink:"/docs/next/best-practices/elastic-deployment"}},c=[{value:"What is GitOps\uff1f",id:"what-is-gitops",children:[],level:2},{value:"Deploying kruise workloads with argo-cd",id:"deploying-kruise-workloads-with-argo-cd",children:[{value:"Requirements",id:"requirements",children:[],level:3},{value:"Install OpenKruise\uff08Enable: TemplateNoDefaults\uff09",id:"install-openkruiseenable-templatenodefaults",children:[],level:3},{value:"Declarative Applications in Git Repository",id:"declarative-applications-in-git-repository",children:[],level:3},{value:"Configuring Argo Application And Resource Health",id:"configuring-argo-application-and-resource-health",children:[],level:3},{value:"Argo-cd Sync (Deploy) The Application",id:"argo-cd-sync-deploy-the-application",children:[],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2}],u={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-gitops"},"What is GitOps\uff1f"),(0,o.kt)("p",null,"GitOps is an approach to continuous delivery. Its core idea is to store the declarative infrastructure and applications of an application in a Git repository."),(0,o.kt)("p",null,"With Git at the core of the delivery pipeline, every developer can submit Pull Requests and use Git to accelerate and simplify application deployment and maintenance tasks for Kubernetes. By using a simple tool like Git, developers can more efficiently focus on creating new features rather than operations-related tasks (e.g., application installation, configuration, migration, etc.)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"argo-cd",src:n(4421).Z})),(0,o.kt)("h2",{id:"deploying-kruise-workloads-with-argo-cd"},"Deploying kruise workloads with argo-cd"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install Kubernetes Cluster, Since v1.0.0 (alpha/beta), OpenKruise requires Kubernetes version >= 1.16."),(0,o.kt)("li",{parentName:"ul"},"Install argo-cd, Reference ",(0,o.kt)("a",{parentName:"li",href:"https://argo-cd.readthedocs.io/en/stable/getting_started/"},"Official Documents"))),(0,o.kt)("h3",{id:"install-openkruiseenable-templatenodefaults"},"Install OpenKruise\uff08Enable: TemplateNoDefaults\uff09"),(0,o.kt)("p",null,"Openkruse installed by default will inject the default value of pod / PVC template, which will conflict with the sync judgment logic of Argo CD.\nTherefore, when installing openkruse, you need to open gates ",(0,o.kt)("strong",{parentName:"p"},"TemplateNoDefaults"),", as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# Firstly add openkruise charts repository if you haven\'t do this.\n$ helm repo add openkruise https://openkruise.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install kruise openkruise/kruise --set featureGates="TemplateNoDefaults=true"\n\n# Those that have been installed need to be upgraded\n$ helm upgrade kruise openkruise/kruise --set featureGates="TemplateNoDefaults=true"\n')),(0,o.kt)("h3",{id:"declarative-applications-in-git-repository"},"Declarative Applications in Git Repository"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"OpenKruise provides a guestbook application ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/openkruise/samples"},"demo"),".\n",(0,o.kt)("strong",{parentName:"li"},"It consists of guestbook, redis, through openKruise CloneSet to complete the deployment of the application.")," As follows:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"guestbook",src:n(7005).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"## CloneSet & Service\napiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\n...\nspec:\n  replicas: 3\n  ...\n  template:\n  spec:\n    containers:\n    - name: guestbook\n      image: 'k8s.gcr.io/guestbook:v3'\n      env:\n      - name: \"VERSION\"\n        value: \"v1\"\n      ports:\n      - name: http-server\n        containerPort: 3000\n---\nkind: Service\napiVersion: v1\n...\nspec:\n  ports:\n  - port: 3000\n    targetPort: http-server\n  selector:\n    app: guestbook\n    type: LoadBalancer\n\n### redis master/slave is also similar configuration\napiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\n...\nspec:\n  replicas: 1\n  ...\n  template:\n    spec:\n    containers:\n    - name: redis-master\n      image: 'k8s.gcr.io/redis:e2e'\n      ports:\n      - name: redis-server\n        containerPort: 6379\n---\nkind: Service\n...\nspec:\n  ports:\n  - port: 6379\n    targetPort: redis-server\n  selector:\n    app: redis\n    role: master\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"For a variety of environments such as test, pre, and prd, different branches can be used to represent them.\nFor example, there exists ",(0,o.kt)("strong",{parentName:"li"},"dev_branch")," and ",(0,o.kt)("strong",{parentName:"li"},"master")," corresponding to the git configuration for test and prd environments, as follows:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"git_envs",src:n(1368).Z})),(0,o.kt)("h3",{id:"configuring-argo-application-and-resource-health"},"Configuring Argo Application And Resource Health"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Argo-cd provides a ",(0,o.kt)("a",{parentName:"li",href:"https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/"},"Declarative Setup"),", as follows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  ## Represents dev env deployment configuration\n  name: guestbook-dev\n  namespace: argocd\nspec:\n  project: default\n  source:\n    repoURL: https://github.com/zmberg/samples.git\n    ## dev branch\n    targetRevision: dev_branch\n    path: guestbook\n  destination:\n    server: https://kubernetes.default.svc\n    ## deploy in default namespace\n    namespace: default\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Configuring CloneSet Argo-cd ",(0,o.kt)("a",{parentName:"li",href:"https://argo-cd.readthedocs.io/en/stable/operator-manual/health/#custom-health-checks"},"Custom CRD Health Checks"),".\n",(0,o.kt)("strong",{parentName:"li"},"With this configuration argo-cd is able to perform a healthy check of the CloneSet, such as whether the CloneSet is published and whether the Pods are ready.")," as follows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  labels:\n    app.kubernetes.io/name: argocd-cm\n    app.kubernetes.io/part-of: argocd\n  name: argocd-cm\n  namespace: argocd\ndata:\n  resource.customizations.health.apps.kruise.io_CloneSet: |\n    hs = {}\n    -- if paused\n    if obj.spec.updateStrategy.paused then\n      hs.status = "Suspended"\n      hs.message = "CloneSet is Suspended"\n      return hs\n    end\n\n    -- check cloneSet status\n    if obj.status ~= nil then\n      if obj.status.observedGeneration < obj.metadata.generation then\n        hs.status = "Progressing"\n        hs.message = "Waiting for rollout to finish: observed cloneSet generation less then desired generation"\n        return hs\n      end\n\n      if obj.status.updatedReplicas < obj.spec.replicas then\n        hs.status = "Progressing"\n        hs.message = "Waiting for rollout to finish: replicas hasn\'t finished updating..."\n        return hs\n      end\n\n      if obj.status.updatedReadyReplicas < obj.status.updatedReplicas then\n        hs.status = "Progressing"\n        hs.message = "Waiting for rollout to finish: replicas hasn\'t finished updating..."\n        return hs\n      end\n\n      hs.status = "Healthy"\n      return hs\n    end\n\n    -- if status == nil\n    hs.status = "Progressing"\n    hs.message = "Waiting for cloneSet"\n    return hs\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"OpenKruise internal CRD resources in addition to CloneSet, others such as: Advanced StatefulSet, SidecarSet, etc. can be similar to the above way to achieve Custom Resource Health.")),(0,o.kt)("h3",{id:"argo-cd-sync-deploy-the-application"},"Argo-cd Sync (Deploy) The Application"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Complete the deployment of the guestbook service via the argo-cd command line tool (",(0,o.kt)("strong",{parentName:"li"},"argocd app sync guestbook"),"), as follows:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"guestbook",src:n(8909).Z})),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"OpenKruise is more of a Kubernetes level extended capability, such as in-place upgrade, preImageDownload, etc. So many community users using OpenKruise in production environments have some additional costs, need to integrate or self-research container PaaS.\nThe main purpose of this article is to combine some of the best Paas solutions in the community with OpenKruise, so that as many people as possible get to enjoy the dividends of cloud-native at a lower cost."),(0,o.kt)("p",null,'Argo-cd is a very good product for the community, and it is very user-friendly for OpenKruise\'s many custom CRD resources. This article is hope that many partners in the community can provide more ideas in "How to use OpenKruise easily", and also we will try to combine it with some CI/CD pipelines later to better practice the devops concept.'))}d.isMDXComponent=!0},8909:function(e,t,n){t.Z=n.p+"assets/images/argo_sync_healthy-47754891eaf67731ab458189bd61ce7b.png"},4421:function(e,t,n){t.Z=n.p+"assets/images/argocd-9b2263b3527910a6a839509239e3ebbf.jpeg"},1368:function(e,t,n){t.Z=n.p+"assets/images/git_envs-f0f7f29f6c1200a691043f2b960e2eec.png"},7005:function(e,t,n){t.Z=n.p+"assets/images/guestbook-59471519dab59b8d0b63ae5285904573.png"}}]);