"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[803],{1803:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var r=t(2791),o=t(9434),a=t(1232),i=t(1413),s=t(4942),u=t(4925),l=t(9439),c=t(4363),d=t(9886);var f=t(7872),p=t(9219),m=t(2996),h=t(9834),y=t(184),x=["children","styleType","stylePosition","spacing"],v=["as"],g=["as"],C=(0,d.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),j=(0,l.Z)(C,2),b=j[0],w=j[1],k=(0,f.G)((function(e,n){var t=(0,p.jC)("List",e),o=(0,m.Lr)(e),a=o.children,l=o.styleType,c=void 0===l?"none":l,d=o.stylePosition,f=o.spacing,v=(0,u.Z)(o,x),g=function(e){return r.Children.toArray(e).filter((function(e){return(0,r.isValidElement)(e)}))}(a),C=f?(0,s.Z)({},"& > *:not(style) ~ *:not(style)",{mt:f}):{};return(0,y.jsx)(b,{value:t,children:(0,y.jsx)(h.m.ul,(0,i.Z)((0,i.Z)({ref:n,listStyleType:c,listStylePosition:d,role:"list",__css:(0,i.Z)((0,i.Z)({},t.container),C)},v),{},{children:g}))})}));k.displayName="List",(0,f.G)((function(e,n){e.as;var t=(0,u.Z)(e,v);return(0,y.jsx)(k,(0,i.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},t))})).displayName="OrderedList",(0,f.G)((function(e,n){e.as;var t=(0,u.Z)(e,g);return(0,y.jsx)(k,(0,i.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},t))})).displayName="UnorderedList";var I=(0,f.G)((function(e,n){var t=w();return(0,y.jsx)(h.m.li,(0,i.Z)((0,i.Z)({ref:n},e),{},{__css:t.item}))}));I.displayName="ListItem";var A=(0,f.G)((function(e,n){var t=w();return(0,y.jsx)(c.J,(0,i.Z)((0,i.Z)({ref:n,role:"presentation"},e),{},{__css:t.icon}))}));A.displayName="ListIcon";var z=t(4224),Z=t(5903),_=(0,Z.I)({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"}),L=(0,Z.I)({displayName:"DeleteIcon",path:(0,y.jsx)("g",{fill:"currentColor",children:(0,y.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),N=function(e){var n=e.id,t=e.name,r=e.phone,i=(0,o.I0)();return(0,y.jsxs)(I,{mt:0,p:0,alignItems:"center",textAlign:"center",justifyContent:"space-evenly",children:[(0,y.jsx)(A,{as:_,w:4,h:5,ml:1,mt:1,color:"green.300"}),t,": ",r,(0,y.jsx)(z.z,{color:"inherit",w:5,h:5,padding:2,mt:0,ml:2,name:n,onClick:function(e){var n=e.currentTarget.name;console.log(n),i((0,a.Yo)(n))},children:(0,y.jsx)(L,{w:4,h:4,ml:2,mr:2,color:"red.200"})})]})},T="NOT_FOUND";var S=function(e,n){return e===n};function E(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,o=void 0===r?S:r,a=t.maxSize,i=void 0===a?1:a,s=t.resultEqualityCheck,u=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}}(o),l=1===i?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:T},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(u):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return T}return{get:r,put:function(n,o){r(n)===T&&(t.unshift({key:n,value:o}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,u);function c(){var n=l.get(arguments);if(n===T){if(n=e.apply(null,arguments),s){var t=l.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}l.put(arguments,n)}return n}return c.clearCache=function(){return l.clear()},c}function R(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function D(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var a,i=0,s={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(s=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=s,c=l.memoizeOptions,d=void 0===c?t:c,f=Array.isArray(d)?d:[d],p=R(r),m=e.apply(void 0,[function(){return i++,u.apply(null,arguments)}].concat(f)),h=e((function(){for(var e=[],n=p.length,t=0;t<n;t++)e.push(p[t].apply(null,arguments));return a=m.apply(null,e)}));return Object.assign(h,{resultFunc:u,memoizedResultFunc:m,dependencies:p,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return o}var F=D(E),M=t(6351),W=F([function(e){return e.contacts.items},M.RC],(function(e,n){return n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e})),q=function(){var e=(0,o.I0)();(0,r.useEffect)((function(){e((0,a.CL)())}),[e]);var n=(0,o.v9)(W);return(0,y.jsx)("ul",{children:n.map((function(e){return(0,y.jsx)(N,{id:e.id,name:e.name,phone:e.phone},e.id)}))})},O=t(4087),G=t(2701),P=t(4585),B=t(7886),J=function(){var e=(0,o.I0)();return(0,y.jsx)("form",{onSubmit:function(n){n.preventDefault();var t=n.currentTarget,r={name:t.elements.name.value,number:t.elements.number.value};e((0,a.xe)(r)).then((function(e){return"contacts/fetchAddContact/fulfilled"===e.type&&t.reset()}))},children:(0,y.jsxs)(O.xu,{backgroundColor:"Window",shadow:"dark-lg",p:"10",ml:"auto",mr:"auto",mb:5,w:330,h:180,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:20,children:[(0,y.jsxs)(G.NI,{children:[(0,y.jsxs)(P.l,{color:"InfoText",fontSize:15,fontWeight:700,children:["Name",(0,y.jsx)(B.I,{bgColor:"chakra-subtle-bg",shadow:"inner",mt:2,h:7,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)(P.l,{color:"InfoText",fontSize:15,fontWeight:700,children:["Number",(0,y.jsx)(B.I,{bgColor:"chakra-subtle-bg",shadow:"inner",mt:2,h:7,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),(0,y.jsx)(z.z,{color:"ButtonText",w:130,h:8,padding:2,mt:5,mb:2,type:"submit",children:"Add contact"})]})})},V=t(4841),H=function(){var e=(0,o.v9)(M.RC),n=(0,o.I0)();return(0,y.jsx)(O.xu,{backgroundColor:"Window",p:"5",ml:"auto",mr:"auto",mt:0,h:50,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:20,children:(0,y.jsx)(G.NI,{children:(0,y.jsxs)(P.l,{color:"InfoText",fontSize:15,fontWeight:700,children:["Find contacts by name",(0,y.jsx)(B.I,{bgColor:"chakra-subtle-bg",shadow:"inner",mt:2,h:7,onChange:function(e){var t=e.currentTarget.value;n((0,V.j)(t))},value:e,type:"text",name:"filter",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})})})},U=t(2402),X=t(2),Y=t(5946),$=function(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(X.Z,{}),(0,y.jsx)(Y.X,{p:0,m:0,color:"CaptionText",textAlign:"center",mb:10,shadow:"2xl",pb:3,pt:2,bgColor:"AppWorkspace",opacity:.7,position:"relative",zIndex:2,children:"Contacts"}),(0,y.jsx)(O.xu,{backgroundImage:U,position:"fixed",w:"100%",h:"100%",opacity:.1,top:-2}),(0,y.jsxs)(O.xu,{display:"flex",flexDirection:"column",position:"relative",children:[(0,y.jsx)(J,{}),(0,y.jsxs)(O.xu,{backgroundColor:"Window",shadow:"dark-lg",p:"10",m:"auto",mt:5,w:330,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",borderRadius:20,children:[(0,y.jsx)(Y.X,{p:0,m:0,color:"CaptionText",children:"Your contacts"}),(0,y.jsx)(H,{}),(0,y.jsx)(q,{})]})]})]})}},2402:function(e,n,t){e.exports=t.p+"static/media/pngtree-memphis-note-ripped-paper-notebook-background-picture-image_1739025.02f5290567e4f8e4d9aa.jpg"}}]);
//# sourceMappingURL=803.452da7ba.chunk.js.map