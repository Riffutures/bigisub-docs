"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[481],{9578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(5893),s=t(1151);const i={sidebar_position:2},a="Validate Meter Number",o={id:"Bill-Service/validatemeter",title:"Validate Meter Number",description:"- meter_no: Meter number int",source:"@site/docs/Bill-Service/validatemeter.md",sourceDirName:"Bill-Service",slug:"/Bill-Service/validatemeter",permalink:"/bigisub-docs/docs/Bill-Service/validatemeter",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Bill - API Service",permalink:"/bigisub-docs/docs/category/bill---api-service"},next:{title:"Bill Payment",permalink:"/bigisub-docs/docs/Bill-Service/bill-payment"}},d={},l=[{value:"Send a post request with the payload",id:"send-a-post-request-with-the-payload",level:3},{value:"Response",id:"response",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"validate-meter-number",children:"Validate Meter Number"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"meter_no"}),": Meter number ",(0,r.jsx)(n.code,{children:"int"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"disco_name"}),": disco name ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"meter_type"}),": Meter Type ",(0,r.jsx)(n.strong,{children:"true"})," ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import requests\nimport json\npayload = {'meter_no': '1111111111111',\n'disco_name': 'ikeja-electric',\n'meter_type': 'prepaid'}\nuser_token = 'eacf1ab727d134b254361d834c28a2bf6ab0a111'\nheaders = {\n      \"Content-Type\": \"application/json\",\n      \"Authorization\": f'Token {user_token}'\n} \n# jsonify the payload\ndata = json.dumps(payload)\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"send-a-post-request-with-the-payload",children:"Send a post request with the payload"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'url = "https://www.bigisub.ng/api/meter_validate/"\nres = requests.post(url, data=data, headers=headers)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'{\n    "Customer_Name": "TESTMETER1",\n    "Meter_Number": "1111111111111",\n    "Customer_District": "007903312",\n    "Address": "ABULE - EGBA BU ABULE"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["View code in other programming languages ",(0,r.jsx)(n.a,{href:"https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99",children:"here"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(7294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);