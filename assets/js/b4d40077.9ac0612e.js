"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[881],{6328:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=s(5893),r=s(1151);const a={sidebar_position:5},i="Buy Bulk Data",o={id:"Data-Service/bulk-data",title:"Buy Bulk Data",description:"- network: Network Provider int",source:"@site/docs/Data-Service/bulk-data.md",sourceDirName:"Data-Service",slug:"/Data-Service/bulk-data",permalink:"/subpadi-docs/docs/Data-Service/bulk-data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Buy Data",permalink:"/subpadi-docs/docs/Data-Service/buy-data"},next:{title:"Result Checker - API Service",permalink:"/subpadi-docs/docs/category/result-checker---api-service"}},d={},c=[{value:"Send a post request with the payload",id:"send-a-post-request-with-the-payload",level:3},{value:"Response",id:"response",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"buy-bulk-data",children:"Buy Bulk Data"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"network"}),": Network Provider ",(0,t.jsx)(n.code,{children:"int"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"1: 'MTN'"}),"\n",(0,t.jsx)(n.li,{children:"2: 'GLO'"}),"\n",(0,t.jsx)(n.li,{children:"3: '9MOBILE'"}),"\n",(0,t.jsx)(n.li,{children:"4: 'AIRTEL'"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"mobile_number"}),": Recipient number ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"plan"}),": plan id ",(0,t.jsx)(n.code,{children:"int"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Port_number"}),": Port number default to ",(0,t.jsx)(n.strong,{children:"true"})," ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests\nimport json\npayload = {\n    "network": 1,\n    "mobile_number": "07062198687",\n    "plan": 6,\n    "Ported_number": true\n}\nuser_token = \'eacf1ab727d134b254361d834c28a2bf6ab0a111\'\nheaders = {\n      "Content-Type": "application/json",\n      "Authorization": f\'Token {user_token}\'\n} \n# jsonify the payload\ndata = json.dumps(payload)\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"send-a-post-request-with-the-payload",children:"Send a post request with the payload"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'url = "https://subpadi.com/api/bulk-data/"\nres = requests.post(url, data=data, headers=headers)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n    "id": 137538,\n    "network": 1,\n    "balance_before": "754.0",\n    "balance_after": "631.0",\n    "mobile_number": "070628790687",\n    "tran_id": "DATA-SVKjDfker7634",\n    "plan": 6,\n    "Status": "successful",\n    "plan_network": "MTN",\n    "api_response": "You have successfully subscribed to SME data 500.0MB valid for 30days",\n    "plan_name": "500.0MB",\n    "plan_amount": "\u20a6123.0",\n    "create_date": "2023-07-03T13:10:34.071638",\n    "Ported_number": true\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["View code in other programming languages ",(0,t.jsx)(n.a,{href:"https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99",children:"here"})]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(7294);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);