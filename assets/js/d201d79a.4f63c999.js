"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[32],{6187:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=a(5893),s=a(1151);const r={sidebar_position:5},i="Validate IUC",o={id:"Cable-Service/validateiuc",title:"Validate IUC",description:"- card_no: smartcardnumber number string",source:"@site/docs/Cable-Service/validateiuc.md",sourceDirName:"Cable-Service",slug:"/Cable-Service/validateiuc",permalink:"/bigisub-docs/docs/Cable-Service/validateiuc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Cable Payment",permalink:"/bigisub-docs/docs/Cable-Service/cable"},next:{title:"Data - API Service",permalink:"/bigisub-docs/docs/category/data---api-service"}},c={},d=[{value:"Send a post request with the payload",id:"send-a-post-request-with-the-payload",level:3},{value:"Response",id:"response",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"validate-iuc",children:"Validate IUC"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"card_no"}),": smartcardnumber number ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cable_name"}),": cablename ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests\nimport json\npayload = {\n    "card_no": "1212121212",\n    "cable_name": "DSTV"\n}\nuser_token = \'eacf1ab727d134b254361d834c28a2bf6ab0a111\'\nheaders = {\n      "Content-Type": "application/json",\n      "Authorization": f\'Token {user_token}\'\n} \n# jsonify the payload\ndata = json.dumps(payload)\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"send-a-post-request-with-the-payload",children:"Send a post request with the payload"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'url = "https://bigisub.ng/api/verify_cable/"\nres = requests.post(url, data=data, headers=headers)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n    "Customer_Name": "Testermetri",\n    "Status": "OPEN",\n    "Due_Date": "November 24th, 2021",\n    "Customer_Number": 26117953,\n    "Customer_Type": "DSTV",\n    "Current_Bouquet": "DStv  Compact N7900 + ExtraView Access N2,500",\n    "Current_Bouquet_Code": "dstv79, extraview-access",\n    "Renewal_Amount": 63885\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["View code in other programming languages ",(0,t.jsx)(n.a,{href:"https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99",children:"here"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>i});var t=a(7294);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);