"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[481],{9578:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=n(5893),s=n(1151);const i={sidebar_position:2},a="Validate Meter Number",o={id:"Bill-Service/validatemeter",title:"Validate Meter Number",description:"- meter_no: Meter number int",source:"@site/docs/Bill-Service/validatemeter.md",sourceDirName:"Bill-Service",slug:"/Bill-Service/validatemeter",permalink:"/bigisub-docs/docs/Bill-Service/validatemeter",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Bill - API Service",permalink:"/bigisub-docs/docs/category/bill---api-service"},next:{title:"Bill Payment",permalink:"/bigisub-docs/docs/Bill-Service/bill-payment"}},d={},l=[{value:"Send a post request with the payload",id:"send-a-post-request-with-the-payload",level:3},{value:"Response",id:"response",level:3}];function c(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"validate-meter-number",children:"Validate Meter Number"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"meter_no"}),": Meter number ",(0,t.jsx)(r.code,{children:"int"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"disco_name"}),": disco name ",(0,t.jsx)(r.code,{children:"string"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"meter_type"}),": Meter Type ",(0,t.jsx)(r.strong,{children:"true"})," ",(0,t.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"import requests\r\nimport json\r\npayload = {'meter_no': '1111111111111',\r\n'disco_name': 'ikeja-electric',\r\n'meter_type': 'prepaid'}\r\nuser_token = 'eacf1ab727d134b254361d834c28a2bf6ab0a111'\r\nheaders = {\r\n      \"Content-Type\": \"application/json\",\r\n      \"Authorization\": f'Token {user_token}'\r\n} \r\n# jsonify the payload\r\ndata = json.dumps(payload)\r\n\n"})}),"\n",(0,t.jsx)(r.h3,{id:"send-a-post-request-with-the-payload",children:"Send a post request with the payload"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'url = "https://www.bigisub.ng/api/v1/meter_validate/"\r\nres = requests.post(url, data=data, headers=headers)\n'})}),"\n",(0,t.jsx)(r.h3,{id:"response",children:"Response"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'{\r\n    "Customer_Name": "TESTMETER1",\r\n    "Meter_Number": "1111111111111",\r\n    "Customer_District": "007903312",\r\n    "Address": "ABULE - EGBA BU ABULE"\r\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["View code in other programming languages ",(0,t.jsx)(r.a,{href:"https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99",children:"here"})]})]})}function u(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>a});var t=n(7294);const s={},i=t.createContext(s);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);