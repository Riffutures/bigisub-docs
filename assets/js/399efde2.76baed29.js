"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[132],{6537:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(5893),s=r(1151);const i={sidebar_position:5},a="Bill Payment",o={id:"Bill-Service/bill-payment",title:"Bill Payment",description:"- meter_no: Meter number int",source:"@site/docs/Bill-Service/bill-payment.md",sourceDirName:"Bill-Service",slug:"/Bill-Service/bill-payment",permalink:"/bigisub-docs/docs/Bill-Service/bill-payment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Validate Meter Number",permalink:"/bigisub-docs/docs/Bill-Service/validatemeter"},next:{title:"Cable- API Service",permalink:"/bigisub-docs/docs/category/cable--api-service"}},l={},d=[{value:"Send a post request with the payload",id:"send-a-post-request-with-the-payload",level:3},{value:"Response",id:"response",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"bill-payment",children:"Bill Payment"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"meter_no"}),": Meter number ",(0,t.jsx)(n.code,{children:"int"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"company"}),": disco id ",(0,t.jsx)(n.code,{children:"int"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"amount"}),": amount ",(0,t.jsx)(n.code,{children:"int"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"meter_type"}),": Meter Type ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\r\nimport json\r\npayload = {'company': 'ikeja-electric',\r\n'meter_no': '1111111111111',\r\n'meter_type': 'prepaid',\r\n'phone_number': '08033104248',\r\n'amount': '1000',\r\n'Customer_name': 'Ayo',\r\n'Customer_address': 'Iyana Iyesi'}\r\nuser_token = 'eacf1ab727d134b254361d834c28a2bf6ab0a111'\r\nheaders = {\r\n      \"Content-Type\": \"application/json\",\r\n      \"Authorization\": f'Token {user_token}'\r\n} \r\n# jsonify the payload\r\ndata = json.dumps(payload)\r\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"send-a-post-request-with-the-payload",children:"Send a post request with the payload"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'url = "https://bigisub.ng/api/v1/meter_pay/"\r\nres = requests.post(url, data=data, headers=headers)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\r\n    "id": 24,\r\n    "meter_no": "1111111111111",\r\n    "company": "ikeja-electric",\r\n    "meter_type": "prepaid",\r\n    "token": "Token : 26362054405982757802",\r\n    "phone_number": "08033104248",\r\n    "amount": 1000,\r\n    "pay_amount": "1050.0",\r\n    "tranx_id": "Bill2OYY--cf3b7",\r\n    "api_id": "17036579474092625189531372",\r\n    "Status": "successful",\r\n    "refund": false,\r\n    "date_created": "2023-12-27T07:19:07.544254",\r\n    "Customer_name": "Ayo",\r\n    "Customer_address": "Iyana Iyesi",\r\n    "ident": "X8nI-jtA11f026"\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["View code in other programming languages ",(0,t.jsx)(n.a,{href:"https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99",children:"here"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var t=r(7294);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);