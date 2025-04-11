"use strict";(self.webpackChunkdnif_documentation=self.webpackChunkdnif_documentation||[]).push([[902],{328:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(8168),r=(a(6540),a(5680));const l={},o="Collection Status Monitoring",i={unversionedId:"operations/collection-status",id:"operations/collection-status",title:"Collection Status Monitoring",description:"DNIF provides comprehensive tools for monitoring the status of your log collection and data ingestion. This guide explains how to monitor and manage collection status.",source:"@site/docs/operations/collection-status.md",sourceDirName:"operations",slug:"/operations/collection-status",permalink:"/Test-KB-/operations/collection-status",draft:!1,editUrl:"https://github.com/NirmalkarYogesh/Test-KB-/tree/main/docs/operations/collection-status.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating Workbooks",permalink:"/Test-KB-/hunting-with-workbooks/getting-started/create-workbook"},next:{title:"Signal Suppression",permalink:"/Test-KB-/security-monitoring/signal-suppression"}},s={},p=[{value:"Collection Status Dashboard",id:"collection-status-dashboard",level:2},{value:"Accessing the Dashboard",id:"accessing-the-dashboard",level:3},{value:"Dashboard Components",id:"dashboard-components",level:3},{value:"Monitoring Collection Status",id:"monitoring-collection-status",level:2},{value:"1. Real-time Monitoring",id:"1-real-time-monitoring",level:3},{value:"2. Scheduled Reports",id:"2-scheduled-reports",level:3},{value:"Troubleshooting Collection Issues",id:"troubleshooting-collection-issues",level:2},{value:"Common Issues",id:"common-issues",level:3},{value:"Resolution Steps",id:"resolution-steps",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Maintenance Tasks",id:"maintenance-tasks",level:2}],g={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"collection-status-monitoring"},"Collection Status Monitoring"),(0,r.yg)("p",null,"DNIF provides comprehensive tools for monitoring the status of your log collection and data ingestion. This guide explains how to monitor and manage collection status."),(0,r.yg)("h2",{id:"collection-status-dashboard"},"Collection Status Dashboard"),(0,r.yg)("h3",{id:"accessing-the-dashboard"},"Accessing the Dashboard"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Log in to the DNIF console"),(0,r.yg)("li",{parentName:"ol"},"Navigate to ",(0,r.yg)("strong",{parentName:"li"},"Operations")," > ",(0,r.yg)("strong",{parentName:"li"},"Collection Status")),(0,r.yg)("li",{parentName:"ol"},"View the collection status dashboard")),(0,r.yg)("h3",{id:"dashboard-components"},"Dashboard Components"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Data Sources")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Active sources"),(0,r.yg)("li",{parentName:"ul"},"Inactive sources"),(0,r.yg)("li",{parentName:"ul"},"Source health status"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Collection Metrics")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Log volume"),(0,r.yg)("li",{parentName:"ul"},"Collection rate"),(0,r.yg)("li",{parentName:"ul"},"Error rate"),(0,r.yg)("li",{parentName:"ul"},"Latency"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"System Health")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Resource utilization"),(0,r.yg)("li",{parentName:"ul"},"Performance metrics"),(0,r.yg)("li",{parentName:"ul"},"Alert status")))),(0,r.yg)("h2",{id:"monitoring-collection-status"},"Monitoring Collection Status"),(0,r.yg)("h3",{id:"1-real-time-monitoring"},"1. Real-time Monitoring"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'monitoring:\n  metrics:\n    - name: "log_volume"\n      type: "counter"\n      threshold: "1000 events/second"\n      \n    - name: "collection_latency"\n      type: "gauge"\n      threshold: "5 seconds"\n      \n    - name: "error_rate"\n      type: "rate"\n      threshold: "1%"\n')),(0,r.yg)("h3",{id:"2-scheduled-reports"},"2. Scheduled Reports"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Configure report schedule"),(0,r.yg)("li",{parentName:"ol"},"Select metrics to include"),(0,r.yg)("li",{parentName:"ol"},"Set alert thresholds"),(0,r.yg)("li",{parentName:"ol"},"Define recipients")),(0,r.yg)("h2",{id:"troubleshooting-collection-issues"},"Troubleshooting Collection Issues"),(0,r.yg)("h3",{id:"common-issues"},"Common Issues"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Collection Stopped")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Check network connectivity"),(0,r.yg)("li",{parentName:"ul"},"Verify source configuration"),(0,r.yg)("li",{parentName:"ul"},"Review system logs"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"High Latency")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Monitor system resources"),(0,r.yg)("li",{parentName:"ul"},"Check network bandwidth"),(0,r.yg)("li",{parentName:"ul"},"Review collection settings"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Data Gaps")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Verify source availability"),(0,r.yg)("li",{parentName:"ul"},"Check collection configuration"),(0,r.yg)("li",{parentName:"ul"},"Review error logs")))),(0,r.yg)("h3",{id:"resolution-steps"},"Resolution Steps"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Diagnose the Issue")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Review error messages"),(0,r.yg)("li",{parentName:"ul"},"Check system logs"),(0,r.yg)("li",{parentName:"ul"},"Analyze metrics"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Take Corrective Action")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Restart collection"),(0,r.yg)("li",{parentName:"ul"},"Adjust configuration"),(0,r.yg)("li",{parentName:"ul"},"Scale resources"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Verify Resolution")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Monitor metrics"),(0,r.yg)("li",{parentName:"ul"},"Check data flow"),(0,r.yg)("li",{parentName:"ul"},"Validate collection")))),(0,r.yg)("h2",{id:"best-practices"},"Best Practices"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Regular Monitoring")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Set up alerts"),(0,r.yg)("li",{parentName:"ul"},"Review dashboards"),(0,r.yg)("li",{parentName:"ul"},"Monitor trends"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Capacity Planning")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Track growth"),(0,r.yg)("li",{parentName:"ul"},"Plan for scaling"),(0,r.yg)("li",{parentName:"ul"},"Monitor resources"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Documentation")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Document configurations"),(0,r.yg)("li",{parentName:"ul"},"Record issues"),(0,r.yg)("li",{parentName:"ul"},"Update procedures")))),(0,r.yg)("h2",{id:"maintenance-tasks"},"Maintenance Tasks"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Daily Tasks")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Review collection status"),(0,r.yg)("li",{parentName:"ul"},"Check alerts"),(0,r.yg)("li",{parentName:"ul"},"Monitor performance"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Weekly Tasks")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Analyze trends"),(0,r.yg)("li",{parentName:"ul"},"Review capacity"),(0,r.yg)("li",{parentName:"ul"},"Update documentation"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Monthly Tasks")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Performance review"),(0,r.yg)("li",{parentName:"ul"},"Capacity planning"),(0,r.yg)("li",{parentName:"ul"},"System optimization")))))}u.isMDXComponent=!0},5680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>y});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(y,o(o({ref:t},g),{},{components:a})):n.createElement(y,o({ref:t},g))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);