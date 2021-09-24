/*! For license information please see c4f5d8e4.7ac6e038.js.LICENSE.txt */
"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[4195],{9636:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var o=r(7462),a=r(7294),n=r(6010),l=r(6698),i=r(6742),c=r(4973),s=r(2263),d=r(4996);class u extends a.PureComponent{constructor(e){super(e),this.$=a.createRef(),this._=a.createRef()}render(){return a.createElement("span",{ref:this.$},a.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(r.bind(r,9984)).then((({render:t})=>{null!=this._.current&&t(e.appendChild(this._.current),(function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}}))}))}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}var h=u,m={hero:"hero_39XR",heroLogoWrapper:"heroLogoWrapper_MNlE",heroLogo:"heroLogo_17HU",heroTitle:"heroTitle_3Th-",heroBanner:"heroBanner_1ZBZ",buttons:"buttons_irzW",feature:"feature_2oFu",featureReverse:"featureReverse_3dMY",featureImage:"featureImage_3Q9E",featureDesc:"featureDesc_1Bie",whiteboard:"whiteboard_vzcT",whiteboardCol:"whiteboardCol_3_EW",logoWrapper:"logoWrapper_9Ypb",cncfLogo:"cncfLogo_q9cW",heroButtons:"heroButtons_DM2f"},g=[{title:a.createElement(a.Fragment,null,a.createElement(c.Z,null,"Advanced Workloads")),imgUrl:"img/feature1.png",description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement(c.Z,null,"OpenKruise contains a set of advanced workloads, such as CloneSet, Advanced StatefulSet, Advanced DaemonSet, BroadcastJob."),a.createElement(c.Z,null,"They all support not only the basic features which are similar to the original Workloads in Kubernetes, but also more advanced abilities like in-place update, configurable scale/upgrade strategies, parallel operations."),a.createElement("br",null),a.createElement(c.Z,null,"In-place Update is a new methodology to update container images and even environments."),a.createElement(c.Z,null,"It only restarts the specific container with the new image and the Pod will not be recreated, which leads to much faster update process and much less side effects on other sub-systems such as scheduler, CNI or CSI.")))},{title:a.createElement(a.Fragment,null,a.createElement(c.Z,null,"Bypass Application Management")),imgUrl:"img/feature2.png",description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement(c.Z,null,"OpenKruise provides several bypass ways to manage sidecar container, multi-domain deployment for applications, which means you can manage these things without modifying the Workloads of applications."),a.createElement("br",null),a.createElement(c.Z,null,"For example, SidecarSet can help you inject sidecar containers into all matching Pods during creation and even update them in-place with no effect on other containers in Pod."),a.createElement(c.Z,null,"WorkloadSpread constrains the spread of stateless workload, which empowers single workload the abilities for multi-domain and elastic deployment."))),reverse:!0},{title:a.createElement(a.Fragment,null,a.createElement(c.Z,null,"High-avalibility Protection")),imgUrl:"img/feature3.png",description:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement(c.Z,null,"OpenKruise works hard on protecting high-avalibility for applications."),a.createElement(c.Z,null,"Now it can prevent your Kubernetes resources from the cascading deletion mechanism, including CRD, Namespace and almost all kinds of Workloads."),a.createElement(c.Z,null,"In voluntary disruption scenarios, PodUnavailableBudget can achieve the effect of preventing application disruption or SLA degradation, which is not only compatible with Kubernetes PDB protection for Eviction API, but also able to support the protection ability of above scenarios.")))}];function p(e){var t=e.imgUrl,r=e.title,o=e.description,l=e.reverse;return a.createElement("div",{className:(0,n.Z)("row",m.feature,l?m.featureReverse:"")},a.createElement("div",{className:"col col--3"},a.createElement("div",{className:"text--center"},t&&a.createElement("img",{className:m.featureImage,src:(0,d.Z)(t),alt:r}))),a.createElement("div",{className:(0,n.Z)("col col--9",m.featureDesc)},a.createElement("div",null,a.createElement("h2",null,r),a.createElement("div",null,o))))}var f=function(e){var t=e.children,r=e.href;return a.createElement("div",{className:"col col--2 margin-horiz--sm"},a.createElement(i.Z,{className:"button button--outline button--primary button--lg",to:r},t))};function b(){var e=(0,s.Z)().siteConfig;return a.createElement(l.Z,{title:e.tagline,description:e.tagline},a.createElement("header",{className:(0,n.Z)("hero",m.hero)},a.createElement("div",{className:"container text--center"},a.createElement("h2",{className:(0,n.Z)("hero__title",m.heroTitle)},e.title),a.createElement(h,{href:"https://github.com/openkruise/kruise","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star facebook/metro on GitHub"},"Star"),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("div",{className:(0,n.Z)(m.heroButtons,"name","margin-vert--md")},a.createElement(f,{href:(0,d.Z)("docs/installation")},a.createElement(c.Z,null,"Getting Started")),a.createElement(f,{href:(0,d.Z)("docs/")},a.createElement(c.Z,null,"Learn More"))))),a.createElement(v,null),a.createElement("main",{className:(0,n.Z)("hero",m.hero)},a.createElement("div",{className:"container"},a.createElement("section",{className:m.features},a.createElement("div",{className:"container"},g.map((function(e,t){return a.createElement(p,(0,o.Z)({key:t},e))})))))),a.createElement("div",{className:(0,n.Z)("hero",m.hero)},a.createElement("div",{className:"container text--center"},a.createElement("h3",{className:"hero__subtitle"},a.createElement(c.Z,null,"OpenKruise is a")," ",a.createElement("a",{href:"https://cncf.io/"},"Cloud Native Computing Foundation")," ",a.createElement(c.Z,null,"sandbox project")),a.createElement("div",{className:(0,n.Z)("cncf-logo",m.cncfLogo)}))))}var v=function(){return a.createElement("div",{className:(0,n.Z)("hero",m.hero)},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--7"},a.createElement("h1",null,a.createElement(c.Z,null,"What is OpenKruise?")),a.createElement("p",{className:"hero__subtitle"},a.createElement("small",null,a.createElement(c.Z,null,"OpenKruise is an extended component suite for Kubernetes, which mainly focuses on application automations, such as")," ",a.createElement("i",null,a.createElement(c.Z,null,"deployment, upgrade, ops and avalibility protection.")),a.createElement("br",null),a.createElement("br",null),a.createElement(c.Z,null,"Mostly features provided by OpenKruise are built primarily based on CRD extensions. They can work in pure Kubernetes clusters without any other dependences.")))),a.createElement("div",{className:"col"},a.createElement("img",{className:"image",src:(0,d.Z)("img/what-is-kruise.png"),align:"right",alt:"what is OpenKruise"})))))}},9984:function(e,t,r){r.r(t),r.d(t,{render:function(){return M}});var o=window.document,a=window.Math,n=window.HTMLElement,l=window.XMLHttpRequest,i=function(e,t){for(var r=0,o=e.length;r<o;r++)t(e[r])},c=function(e){return function(t,r,o){var a=e.createElement(t);if(null!=r)for(var n in r){var l=r[n];null!=l&&(null!=a[n]?a[n]=l:a.setAttribute(n,l))}return null!=o&&i(o,(function(t){a.appendChild("string"==typeof t?e.createTextNode(t):t)})),a}},s=c(o),d=function(e,t){return{}.hasOwnProperty.call(e,t)},u=function(e){return(""+e).toLowerCase()},h="github.com",m=l&&"prototype"in l&&"withCredentials"in l.prototype,g=m&&n&&"attachShadow"in n.prototype&&!("prototype"in n.prototype.attachShadow),p=function(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)},f=function(e,t,r){e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)},b={light:".btn{color:#24292f;background-color:#ebf0f4;border-color:#ccd1d5;border-color:rgba(27,31,36,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f6f8fa'/%3e%3cstop offset='90%25' stop-color='%23ebf0f4'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);background-image:linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF6F8FA', endColorstr='#FFEAEFF3')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e9ebef;background-position:0 -0.5em;border-color:#caccd1;border-color:rgba(27,31,36,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e5e9ed;border-color:#c7cbcf;border-color:rgba(27,31,36,.15);box-shadow:inset 0 .15em .3em rgba(27,31,36,.15);background-image:none;filter:none}.social-count{color:#24292f;background-color:#fff;border-color:#ddddde;border-color:rgba(27,31,36,.15)}.social-count:focus,.social-count:hover{color:#0969da}.octicon-heart{color:#bf3989}",dark:".btn{color:#c9d1d9;background-color:#1a1e23;border-color:#2f3439;border-color:rgba(240,246,252,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15);background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#0d1117;border-color:#24282e;border-color:rgba(240,246,252,.1)}.social-count:focus,.social-count:hover{color:#58a6ff}.octicon-heart{color:#db61a2}",dark_dimmed:".btn{color:#adbac7;background-color:#30363d;border-color:#40464e;border-color:rgba(205,217,229,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;box-shadow:inset 0 .15em .3em rgba(28,33,40,.15);background-image:none;filter:none}.social-count{color:#adbac7;background-color:#22272e;border-color:#333940;border-color:rgba(205,217,229,.1)}.social-count:focus,.social-count:hover{color:#539bf5}.octicon-heart{color:#c96198}",dark_high_contrast:".btn{color:#f0f3f6;background-color:#202329;border-color:#7a828e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23272b33'/%3e%3cstop offset='90%25' stop-color='%23202329'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #272b33, #202329 90%);background-image:linear-gradient(180deg, #272b33, #202329 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF272B33', endColorstr='#FF1F2228')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#4a515b;background-position:0 -0.5em;border-color:#bdc4cc;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23525964'/%3e%3cstop offset='90%25' stop-color='%234a515b'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #525964, #4a515b 90%);background-image:linear-gradient(180deg, #525964, #4a515b 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF525964', endColorstr='#FF49505A')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#1d1d1f;border-color:#bdc4cc;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15);background-image:none;filter:none}.social-count{color:#f0f3f6;background-color:#0a0c10;border-color:#7a828e}.social-count:focus,.social-count:hover{color:#71b7ff}.octicon-heart{color:#ef6eb1}"},v=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+b[d(b,t)?t:e]+"}"},w=function(e){if(null==e)return b.light;if(d(b,e))return b[e];var t=function(e,t,r,o){null==t&&(t="&"),null==r&&(r="="),null==o&&(o=window.decodeURIComponent);var a={};return i(e.split(t),(function(e){if(""!==e){var t=e.split(r);a[o(t[0])]=null!=t[1]?o(t.slice(1).join(r)):void 0}})),a}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return b[d(b,t["no-preference"])?t["no-preference"]:"light"]+v("light",t.light)+v("dark",t.dark)},E={"comment-discussion":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>'}}},download:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>'}}},eye:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>'}}},heart:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>'}}},"mark-github":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'}}},package:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>'}}},play:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>'}}},star:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>'}}}},k=function(e,t){e=u(e).replace(/^octicon-/,""),d(E,e)||(e="mark-github");var r=t>=24&&24 in E[e].heights?24:16,o=E[e].heights[r];return'<svg viewBox="0 0 '+o.width+" "+r+'" width="'+t*o.width/r+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+o.path+"</svg>"},y={},x=function(e,t){var r=y[e]||(y[e]=[]);if(!(r.push(t)>1)){var o=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete y[e];t=r.shift();)t.apply(null,arguments)}));if(m){var a=new l;p(a,"abort",o),p(a,"error",o),p(a,"load",(function(){var e;try{e=JSON.parse(this.responseText)}catch(t){return void o(t)}o(200!==this.status,e)})),a.open("GET",e),a.send()}else{var n=this||window;n._=function(e){n._=null,o(200!==e.meta.status,e.data)};var i=c(n.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),s=function(){n._&&n._({meta:{}})};p(i,"load",s),p(i,"error",s),function(e,t,r){if(null!=e.readyState){var o="readystatechange",a=function(){if(t.test(e.readyState))return f(e,o,a),r.apply(this,arguments)};p(e,o,a)}}(i,/de|m/,s),n.document.getElementsByTagName("head")[0].appendChild(i)}}},C=function(e,t,r){var o=c(e.ownerDocument),a=e.appendChild(o("style",{type:"text/css"})),n="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}"+w(t["data-color-scheme"]);a.styleSheet?a.styleSheet.cssText=n:a.appendChild(e.ownerDocument.createTextNode(n));var l="large"===u(t["data-size"]),i=o("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:k(t["data-icon"],l?16:14)+"&nbsp;"},[o("span",{},[t["data-text"]||""])]),s=e.appendChild(o("div",{className:"widget"+(l?" widget-lg":"")},[i])),d=i.hostname.replace(/\.$/,"");if(("."+d).substring(d.length-h.length)!=="."+h)return i.removeAttribute("href"),void r(s);var m=(" /"+i.pathname).split(/\/+/);if(((d===h||d==="gist."+h)&&"archive"===m[3]||d===h&&"releases"===m[3]&&("download"===m[4]||"latest"===m[4]&&"download"===m[5])||d==="codeload."+h)&&(i.target="_top"),"true"===u(t["data-show-count"])&&d===h&&"marketplace"!==m[1]&&"sponsors"!==m[1]&&"orgs"!==m[1]&&"users"!==m[1]&&"-"!==m[1]){var g,p;if(!m[2]&&m[1])p="followers",g="?tab=followers";else if(!m[3]&&m[2])p="stargazers_count",g="/stargazers";else if(m[4]||"subscription"!==m[3])if(m[4]||"fork"!==m[3]){if("issues"!==m[3])return void r(s);p="open_issues_count",g="/issues"}else p="forks_count",g="/network/members";else p="subscribers_count",g="/watchers";var f=m[2]?"/repos/"+m[1]+"/"+m[2]:"/users/"+m[1];x.call(this,"https://api.github.com"+f,(function(e,t){if(!e){var a=t[p];s.appendChild(o("a",{className:"social-count",href:t.html_url+g,rel:"noopener",target:"_blank","aria-label":a+" "+p.replace(/_count$/,"").replace("_"," ").slice(0,a<2?-1:void 0)+" on GitHub"},[(""+a).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}r(s)}))}else r(s)},z=window.devicePixelRatio||1,F=function(e){return(z>1?a.ceil(a.round(e*z)/z*2)/2:a.ceil(e))||0},_=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},M=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")};return i(["icon","color-scheme","text","size","show-count"],(function(r){var o="data-"+r;t[o]=e.getAttribute(o)})),null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),g){var r=s("span");C(r.attachShadow({mode:"closed"}),e,(function(){t(r)}))}else{var n=s("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});_(n,[0,0]),n.style.border="none";var l=function(){var r,i=n.contentWindow;try{r=i.document.body}catch(c){return void o.body.appendChild(n.parentNode.removeChild(n))}f(n,"load",l),C.call(i,r,e,(function(r){var o=function(e){var t=e.offsetWidth,r=e.offsetHeight;if(e.getBoundingClientRect){var o=e.getBoundingClientRect();t=a.max(t,F(o.width)),r=a.max(r,F(o.height))}return[t,r]}(r);n.parentNode.removeChild(n),function(e,t,r){var o=function(){return f(e,t,o),r.apply(this,arguments)};p(e,t,o)}(n,"load",(function(){_(n,o)})),n.src="https://unpkg.com/github-buttons@2.19.0/dist/buttons.html#"+(n.name=function(e,t,r,o){null==t&&(t="&"),null==r&&(r="="),null==o&&(o=window.encodeURIComponent);var a=[];for(var n in e){var l=e[n];null!=l&&a.push(o(n)+r+o(l))}return a.join(t)}(e)),t(n)}))};p(n,"load",l),o.body.appendChild(n)}}}}]);