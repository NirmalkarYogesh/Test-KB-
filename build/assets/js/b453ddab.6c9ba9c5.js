"use strict";(self.webpackChunkdnif_documentation=self.webpackChunkdnif_documentation||[]).push([[276],{3429:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(8168),t=(n(6540),n(5680));const i={},l="User Management",s={unversionedId:"user-management/user-management",id:"user-management/user-management",title:"User Management",description:"DNIF provides comprehensive user management capabilities to help you manage users, roles, and permissions effectively. This guide explains how to manage users in DNIF.",source:"@site/docs/user-management/user-management.md",sourceDirName:"user-management",slug:"/user-management/",permalink:"/Test-KB-/user-management/",draft:!1,editUrl:"https://github.com/NirmalkarYogesh/Test-KB-/tree/main/docs/user-management/user-management.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication and Access Control",permalink:"/Test-KB-/user-management/authentication"},next:{title:"Tenant Management",permalink:"/Test-KB-/user-management/tenant-management"}},o={},m=[{value:"User Management Features",id:"user-management-features",level:2},{value:"Managing Users",id:"managing-users",level:2},{value:"1. Creating a New User",id:"1-creating-a-new-user",level:3},{value:"2. User Roles and Permissions",id:"2-user-roles-and-permissions",level:3},{value:"3. Group Management",id:"3-group-management",level:3},{value:"User Lifecycle Management",id:"user-lifecycle-management",level:2},{value:"1. Onboarding",id:"1-onboarding",level:3},{value:"2. Role Changes",id:"2-role-changes",level:3},{value:"3. Offboarding",id:"3-offboarding",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],g={toc:m},u="wrapper";function p(e){let{components:a,...n}=e;return(0,t.yg)(u,(0,r.A)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"user-management"},"User Management"),(0,t.yg)("p",null,"DNIF provides comprehensive user management capabilities to help you manage users, roles, and permissions effectively. This guide explains how to manage users in DNIF."),(0,t.yg)("h2",{id:"user-management-features"},"User Management Features"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"User Creation and Management")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Create new users"),(0,t.yg)("li",{parentName:"ul"},"Edit user details"),(0,t.yg)("li",{parentName:"ul"},"Disable/enable users"),(0,t.yg)("li",{parentName:"ul"},"Delete users"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Role Management")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Create custom roles"),(0,t.yg)("li",{parentName:"ul"},"Assign permissions"),(0,t.yg)("li",{parentName:"ul"},"Manage role hierarchies"),(0,t.yg)("li",{parentName:"ul"},"Role-based access control"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Group Management")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Create user groups"),(0,t.yg)("li",{parentName:"ul"},"Assign group permissions"),(0,t.yg)("li",{parentName:"ul"},"Manage group membership"),(0,t.yg)("li",{parentName:"ul"},"Group-based policies")))),(0,t.yg)("h2",{id:"managing-users"},"Managing Users"),(0,t.yg)("h3",{id:"1-creating-a-new-user"},"1. Creating a New User"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'user:\n  username: "john.doe"\n  email: "john.doe@example.com"\n  full_name: "John Doe"\n  role: "security_analyst"\n  groups:\n    - "security_team"\n    - "incident_response"\n  authentication:\n    method: "local"\n    password_policy: "strict"\n')),(0,t.yg)("h3",{id:"2-user-roles-and-permissions"},"2. User Roles and Permissions"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'roles:\n  security_analyst:\n    permissions:\n      - "view_security_data"\n      - "create_alerts"\n      - "manage_workbooks"\n      - "generate_reports"\n      \n  incident_responder:\n    permissions:\n      - "view_incidents"\n      - "update_incidents"\n      - "create_cases"\n      - "manage_playbooks"\n')),(0,t.yg)("h3",{id:"3-group-management"},"3. Group Management"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'groups:\n  security_team:\n    members:\n      - "john.doe"\n      - "jane.smith"\n    permissions:\n      - "view_security_data"\n      - "manage_alerts"\n      \n  incident_response:\n    members:\n      - "john.doe"\n      - "mike.jones"\n    permissions:\n      - "view_incidents"\n      - "update_incidents"\n')),(0,t.yg)("h2",{id:"user-lifecycle-management"},"User Lifecycle Management"),(0,t.yg)("h3",{id:"1-onboarding"},"1. Onboarding"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Create user account"),(0,t.yg)("li",{parentName:"ul"},"Assign initial role"),(0,t.yg)("li",{parentName:"ul"},"Set up authentication"),(0,t.yg)("li",{parentName:"ul"},"Provide access credentials")),(0,t.yg)("h3",{id:"2-role-changes"},"2. Role Changes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Update permissions"),(0,t.yg)("li",{parentName:"ul"},"Change group membership"),(0,t.yg)("li",{parentName:"ul"},"Modify access levels"),(0,t.yg)("li",{parentName:"ul"},"Document changes")),(0,t.yg)("h3",{id:"3-offboarding"},"3. Offboarding"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Disable account"),(0,t.yg)("li",{parentName:"ul"},"Revoke access"),(0,t.yg)("li",{parentName:"ul"},"Archive data"),(0,t.yg)("li",{parentName:"ul"},"Document process")),(0,t.yg)("h2",{id:"best-practices"},"Best Practices"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"User Management")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Regular access reviews"),(0,t.yg)("li",{parentName:"ul"},"Document role changes"),(0,t.yg)("li",{parentName:"ul"},"Monitor user activity"),(0,t.yg)("li",{parentName:"ul"},"Maintain audit logs"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Security")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Follow least privilege"),(0,t.yg)("li",{parentName:"ul"},"Regular password rotation"),(0,t.yg)("li",{parentName:"ul"},"Enable 2FA"),(0,t.yg)("li",{parentName:"ul"},"Monitor suspicious activity"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Compliance")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Document access policies"),(0,t.yg)("li",{parentName:"ul"},"Maintain audit trails"),(0,t.yg)("li",{parentName:"ul"},"Regular compliance checks"),(0,t.yg)("li",{parentName:"ul"},"Update documentation")))),(0,t.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,t.yg)("p",null,"Common issues and solutions:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Access Problems")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Verify role assignments"),(0,t.yg)("li",{parentName:"ul"},"Check group membership"),(0,t.yg)("li",{parentName:"ul"},"Review permissions"),(0,t.yg)("li",{parentName:"ul"},"Check authentication status"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Account Issues")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Verify account status"),(0,t.yg)("li",{parentName:"ul"},"Check authentication method"),(0,t.yg)("li",{parentName:"ul"},"Review error logs"),(0,t.yg)("li",{parentName:"ul"},"Test access"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"Permission Problems")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Verify role permissions"),(0,t.yg)("li",{parentName:"ul"},"Check group permissions"),(0,t.yg)("li",{parentName:"ul"},"Review access policies"),(0,t.yg)("li",{parentName:"ul"},"Test permissions")))))}p.isMDXComponent=!0},5680:(e,a,n)=>{n.d(a,{xA:()=>g,yg:()=>y});var r=n(6540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var o=r.createContext({}),m=function(e){var a=r.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},g=function(e){var a=m(e.components);return r.createElement(o.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=m(n),c=t,y=u["".concat(o,".").concat(c)]||u[c]||p[c]||i;return n?r.createElement(y,l(l({ref:a},g),{},{components:n})):r.createElement(y,l({ref:a},g))}));function y(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[u]="string"==typeof e?e:t,l[1]=s;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);