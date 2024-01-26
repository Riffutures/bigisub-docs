"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[32],{6187:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=r(5893),t=r(1151);const s={sidebar_position:5},i="Validate IUC",o={id:"Cable-Service/validateiuc",title:"Validate IUC",description:"- card_no: smartcardnumber number string",source:"@site/docs/Cable-Service/validateiuc.md",sourceDirName:"Cable-Service",slug:"/Cable-Service/validateiuc",permalink:"/bigisub-docs/docs/Cable-Service/validateiuc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Cable Payment",permalink:"/bigisub-docs/docs/Cable-Service/cable"},next:{title:"Data - API Service",permalink:"/bigisub-docs/docs/category/data---api-service"}},c={},d=[{value:"Send a post request with the payload",id:"send-a-post-request-with-the-payload",level:3},{value:"Response",id:"response",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"validate-iuc",children:"Validate IUC"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"card_no"}),": smartcardnumber number ",(0,a.jsx)(n.code,{children:"string"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"cable_name"}),": cablename ",(0,a.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests\r\nimport json\r\npayload = {\r\n    "card_no": "1212121212",\r\n    "cable_name": "DSTV"\r\n}\r\nuser_token = \'eacf1ab727d134b254361d834c28a2bf6ab0a111\'\r\nheaders = {\r\n      "Content-Type": "application/json",\r\n      "Authorization": f\'Token {user_token}\'\r\n} \r\n# jsonify the payload\r\ndata = json.dumps(payload)\r\n\n'})}),"\n",(0,a.jsx)(n.h3,{id:"send-a-post-request-with-the-payload",children:"Send a post request with the payload"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'url = "https://bigisub.ng/api/v1/verify_cable/"\r\nres = requests.post(url, data=data, headers=headers)\n'})}),"\n",(0,a.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'{\r\n    "Customer_Name": "Testermetri",\r\n    "Status": "OPEN",\r\n    "Due_Date": "November 24th, 2021",\r\n    "Customer_Number": 26117953,\r\n    "Customer_Type": "DSTV",\r\n    "Current_Bouquet": "DStv  Compact N7900 + ExtraView Access N2,500",\r\n    "Current_Bouquet_Code": "dstv79, extraview-access",\r\n    "Renewal_Amount": 63885\r\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["View code in other programming languages ",(0,a.jsx)(n.a,{href:"https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99",children:"here"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var a=r(7294);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);