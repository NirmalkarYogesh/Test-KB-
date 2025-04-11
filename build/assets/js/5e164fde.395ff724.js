"use strict";(self.webpackChunkdnif_documentation=self.webpackChunkdnif_documentation||[]).push([[415],{3854:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(8168),r=(t(6540),t(5680));const i={},l="Authentication and Access Control",o={unversionedId:"user-management/authentication",id:"user-management/authentication",title:"Authentication and Access Control",description:"DNIF provides comprehensive authentication and access control mechanisms to secure your SIEM platform. This guide explains the authentication methods and how to configure them.",source:"@site/docs/user-management/authentication.md",sourceDirName:"user-management",slug:"/user-management/authentication",permalink:"/Test-KB-/user-management/authentication",draft:!1,editUrl:"https://github.com/NirmalkarYogesh/Test-KB-/tree/main/docs/user-management/authentication.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Signal Suppression",permalink:"/Test-KB-/security-monitoring/signal-suppression"},next:{title:"User Management",permalink:"/Test-KB-/user-management/"}},s={},p=[{value:"Supported Authentication Methods",id:"supported-authentication-methods",level:2},{value:"Configuration Steps",id:"configuration-steps",level:2},{value:"1. Local Authentication",id:"1-local-authentication",level:3},{value:"2. LDAP Authentication",id:"2-ldap-authentication",level:3},{value:"3. SAML Authentication",id:"3-saml-authentication",level:3},{value:"Access Control",id:"access-control",level:2},{value:"Role-Based Access Control (RBAC)",id:"role-based-access-control-rbac",level:3},{value:"Example Role Configuration",id:"example-role-configuration",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"authentication-and-access-control"},"Authentication and Access Control"),(0,r.yg)("p",null,"DNIF provides comprehensive authentication and access control mechanisms to secure your SIEM platform. This guide explains the authentication methods and how to configure them."),(0,r.yg)("h2",{id:"supported-authentication-methods"},"Supported Authentication Methods"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Local Authentication")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Username/password"),(0,r.yg)("li",{parentName:"ul"},"Password policies"),(0,r.yg)("li",{parentName:"ul"},"Account locking"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"LDAP Authentication")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Active Directory integration"),(0,r.yg)("li",{parentName:"ul"},"LDAP server configuration"),(0,r.yg)("li",{parentName:"ul"},"Group mapping"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"SAML Authentication")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Single Sign-On (SSO)"),(0,r.yg)("li",{parentName:"ul"},"Identity Provider configuration"),(0,r.yg)("li",{parentName:"ul"},"Attribute mapping"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Two-Factor Authentication (2FA)")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"TOTP-based 2FA"),(0,r.yg)("li",{parentName:"ul"},"Email-based 2FA"),(0,r.yg)("li",{parentName:"ul"},"SMS-based 2FA")))),(0,r.yg)("h2",{id:"configuration-steps"},"Configuration Steps"),(0,r.yg)("h3",{id:"1-local-authentication"},"1. Local Authentication"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"authentication:\n  local:\n    enabled: true\n    password_policy:\n      min_length: 8\n      require_numbers: true\n      require_special_chars: true\n      expire_days: 90\n    account_lockout:\n      max_attempts: 5\n      lockout_duration: 30m\n")),(0,r.yg)("h3",{id:"2-ldap-authentication"},"2. LDAP Authentication"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'authentication:\n  ldap:\n    enabled: true\n    server:\n      url: "ldap://ldap.example.com:389"\n      base_dn: "dc=example,dc=com"\n      bind_dn: "cn=admin,dc=example,dc=com"\n    group_mapping:\n      - ldap_group: "Security Admins"\n        dnif_role: "admin"\n      - ldap_group: "Security Analysts"\n        dnif_role: "analyst"\n')),(0,r.yg)("h3",{id:"3-saml-authentication"},"3. SAML Authentication"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'authentication:\n  saml:\n    enabled: true\n    idp:\n      entity_id: "https://idp.example.com"\n      sso_url: "https://idp.example.com/sso"\n      certificate: |\n        -----BEGIN CERTIFICATE-----\n        ...\n        -----END CERTIFICATE-----\n    attribute_mapping:\n      username: "email"\n      groups: "memberOf"\n')),(0,r.yg)("h2",{id:"access-control"},"Access Control"),(0,r.yg)("h3",{id:"role-based-access-control-rbac"},"Role-Based Access Control (RBAC)"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Predefined Roles")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Administrator"),(0,r.yg)("li",{parentName:"ul"},"Security Analyst"),(0,r.yg)("li",{parentName:"ul"},"Viewer"),(0,r.yg)("li",{parentName:"ul"},"Custom roles"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Permissions")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Dashboard access"),(0,r.yg)("li",{parentName:"ul"},"Report generation"),(0,r.yg)("li",{parentName:"ul"},"Configuration changes"),(0,r.yg)("li",{parentName:"ul"},"User management")))),(0,r.yg)("h3",{id:"example-role-configuration"},"Example Role Configuration"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'roles:\n  admin:\n    permissions:\n      - "manage_users"\n      - "configure_system"\n      - "view_all_data"\n      - "generate_reports"\n      \n  analyst:\n    permissions:\n      - "view_data"\n      - "create_workbooks"\n      - "generate_reports"\n      \n  viewer:\n    permissions:\n      - "view_data"\n      - "view_reports"\n')),(0,r.yg)("h2",{id:"best-practices"},"Best Practices"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Authentication")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Enable 2FA for all users"),(0,r.yg)("li",{parentName:"ul"},"Use strong password policies"),(0,r.yg)("li",{parentName:"ul"},"Regularly rotate credentials"),(0,r.yg)("li",{parentName:"ul"},"Monitor failed login attempts"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Access Control")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Follow principle of least privilege"),(0,r.yg)("li",{parentName:"ul"},"Regularly review permissions"),(0,r.yg)("li",{parentName:"ul"},"Document role assignments"),(0,r.yg)("li",{parentName:"ul"},"Monitor access patterns"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Security")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Enable audit logging"),(0,r.yg)("li",{parentName:"ul"},"Monitor authentication events"),(0,r.yg)("li",{parentName:"ul"},"Regular security reviews"),(0,r.yg)("li",{parentName:"ul"},"Incident response planning")))),(0,r.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.yg)("p",null,"Common issues and solutions:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Authentication Failures")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Check credentials"),(0,r.yg)("li",{parentName:"ul"},"Verify server connectivity"),(0,r.yg)("li",{parentName:"ul"},"Review error logs"),(0,r.yg)("li",{parentName:"ul"},"Check account status"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Access Issues")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Verify role assignments"),(0,r.yg)("li",{parentName:"ul"},"Check permission settings"),(0,r.yg)("li",{parentName:"ul"},"Review group memberships"),(0,r.yg)("li",{parentName:"ul"},"Check session status"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Configuration Problems")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Validate settings"),(0,r.yg)("li",{parentName:"ul"},"Check server connectivity"),(0,r.yg)("li",{parentName:"ul"},"Review error messages"),(0,r.yg)("li",{parentName:"ul"},"Test configurations")))))}m.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),g=r,y=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return t?a.createElement(y,l(l({ref:n},u),{},{components:t})):a.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);