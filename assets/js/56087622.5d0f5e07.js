"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[41],{4916:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=i(5893),t=i(1151);const s={sidebar_position:2},o="Buy Airtime",a={id:"Airtime-Service/airtime",title:"Buy Airtime",description:"- network: Network Provider int",source:"@site/docs/Airtime-Service/airtime.md",sourceDirName:"Airtime-Service",slug:"/Airtime-Service/airtime",permalink:"/bigisub-docs/docs/Airtime-Service/airtime",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Airtime - API Service",permalink:"/bigisub-docs/docs/category/airtime---api-service"},next:{title:"Buy Bulk Airtime",permalink:"/bigisub-docs/docs/Airtime-Service/bulk-airtime"}},c={},d=[{value:"Send a post request with the payload",id:"send-a-post-request-with-the-payload",level:3},{value:"Response",id:"response",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"buy-airtime",children:"Buy Airtime"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"network"}),": Network Provider ",(0,r.jsx)(n.code,{children:"int"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"1: 'MTN'"}),"\n",(0,r.jsx)(n.li,{children:"2: 'GLO'"}),"\n",(0,r.jsx)(n.li,{children:"3: '9MOBILE'"}),"\n",(0,r.jsx)(n.li,{children:"4: 'AIRTEL'"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"amount"}),": Your password ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"phone_number"}),": Recipient number ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"airtime_type"}),": Airtime type ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests\nimport json\npayload = {\n"network": 1,\n"amount" :"200",\n"phone_number": "08011111111",\n"airtime_type":"vtu"\n}\nuser_token = \'eacf1ab727d134b254361d834c28a2bf6ab0a111\'\nheaders = {\n      "Content-Type": "application/json",\n      "Authorization": f\'Token {user_token}\'\n} \n# jsonify the payload\ndata = json.dumps(payload)\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"send-a-post-request-with-the-payload",children:"Send a post request with the payload"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'url = "https://bigisub.com/api/airtime_topup/"\nres = requests.post(url, data=data, headers=headers)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'{\n    "Status": "successful",\n    "id": 68,\n    "network_name": "mtn",\n    "network": 1,\n    "amount": "200",\n    "phone_number": "08011111111",\n    "pay_amount": 198,\n    "airtime_type": "vtu",\n    "tran_id": "AirvrutjDE2cb2",\n    "request_id": "202312270709kUte",\n    "date_created": "2023-12-27T07:09:29.073951",\n    "response": "TRANSACTION SUCCESSFUL",\n    "api_id": "17036573689415260585333325"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["View code in other programming languages ",(0,r.jsx)(n.a,{href:"https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99",children:"here"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var r=i(7294);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);