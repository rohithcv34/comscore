var lr=Object.defineProperty,ur=Object.defineProperties;var dr=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Jt=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable;var Yt=(d,p,l)=>p in d?lr(d,p,{enumerable:!0,configurable:!0,writable:!0,value:l}):d[p]=l,k=(d,p)=>{for(var l in p||(p={}))Jt.call(p,l)&&Yt(d,l,p[l]);if(q)for(var l of q(p))Qt.call(p,l)&&Yt(d,l,p[l]);return d},gt=(d,p)=>ur(d,dr(p));var te=(d,p)=>{var l={};for(var f in d)Jt.call(d,f)&&p.indexOf(f)<0&&(l[f]=d[f]);if(d!=null&&q)for(var f of q(d))p.indexOf(f)<0&&Qt.call(d,f)&&(l[f]=d[f]);return l};var C=(d,p,l)=>new Promise((f,I)=>{var L=A=>{try{v(l.next(A))}catch(_){I(_)}},j=A=>{try{v(l.throw(A))}catch(_){I(_)}},v=A=>A.done?f(A.value):Promise.resolve(A.value).then(L,j);v((l=l.apply(d,p)).next())});(function(){"use strict";const d=t=>C(this,null,function*(){return yield(yield fetch(t)).json()}),p={AriaEditorValues:[],BrokenLink:[],Contrast:[],EmptyControls:[],ExternalLink:[],Forms:[],Headings:[],Language:[],MissingAlts:[],Pdfs:[],VagueLinks:[]},l=UserWayWidgetApp.ContextHolder.config.remediation,f=UserWayWidgetApp.ContextHolder.config.tunings,I=UserWayWidgetApp.ContextHolder.config.services,L=UserWayWidgetApp.ContextHolder.config.imageAlt;let j={};function v(t){j=k({},t)}function A(){return j}const _=()=>C(this,null,function*(){if(l!=null&&l.consolidated){const t=yield d(l.consolidated);t.MissingAlts.reverse(),v(t);return}v(p)}),Y=["script","noscript","style","path","circle","rect","ellipse","line","polygon","polyline","g"],mt=["data-uw-ignore","data-uw-rm-ignore"],ft=()=>{const t=Y.join(","),e=mt.map(r=>`[${r}]`).join(","),n=`${t},${e}`;return document.body.querySelectorAll(`*:not(${n})`)};var ee=typeof global=="object"&&global&&global.Object===Object&&global;const ne=ee;var re=typeof self=="object"&&self&&self.Object===Object&&self,ie=ne||re||Function("return this")();const ht=ie;var oe=ht.Symbol;const H=oe;var bt=Object.prototype,se=bt.hasOwnProperty,ae=bt.toString,D=H?H.toStringTag:void 0;function ce(t){var e=se.call(t,D),n=t[D];try{t[D]=void 0;var r=!0}catch(o){}var i=ae.call(t);return r&&(e?t[D]=n:delete t[D]),i}var le=Object.prototype,ue=le.toString;function de(t){return ue.call(t)}var pe="[object Null]",ge="[object Undefined]",Et=H?H.toStringTag:void 0;function me(t){return t==null?t===void 0?ge:pe:Et&&Et in Object(t)?ce(t):de(t)}function fe(t){return t!=null&&typeof t=="object"}var he="[object Symbol]";function be(t){return typeof t=="symbol"||fe(t)&&me(t)==he}var Ee=/\s/;function Ae(t){for(var e=t.length;e--&&Ee.test(t.charAt(e)););return e}var ye=/^\s+/;function Ie(t){return t&&t.slice(0,Ae(t)+1).replace(ye,"")}function B(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var At=0/0,Te=/^[-+]0x[0-9a-f]+$/i,Re=/^0b[01]+$/i,_e=/^0o[0-7]+$/i,Se=parseInt;function yt(t){if(typeof t=="number")return t;if(be(t))return At;if(B(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=B(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=Ie(t);var n=Re.test(t);return n||_e.test(t)?Se(t.slice(2),n?2:8):Te.test(t)?At:+t}var Ne=function(){return ht.Date.now()};const J=Ne;var xe="Expected a function",ve=Math.max,we=Math.min;function Q(t,e,n){var r,i,o,s,a,c,u=0,m=!1,b=!1,T=!0;if(typeof t!="function")throw new TypeError(xe);e=yt(e)||0,B(n)&&(m=!!n.leading,b="maxWait"in n,o=b?ve(yt(n.maxWait)||0,e):o,T="trailing"in n?!!n.trailing:T);function x(g){var R=r,P=i;return r=i=void 0,u=g,s=t.apply(P,R),s}function dt(g){return u=g,a=setTimeout(K,e),m?x(g):s}function W(g){var R=g-c,P=g-u,qt=e-R;return b?we(qt,o-P):qt}function U(g){var R=g-c,P=g-u;return c===void 0||R>=e||R<0||b&&P>=o}function K(){var g=J();if(U(g))return Kt(g);a=setTimeout(K,W(g))}function Kt(g){return a=void 0,T&&r?x(g):(r=i=void 0,s)}function ar(){a!==void 0&&clearTimeout(a),u=0,r=c=i=a=void 0}function cr(){return a===void 0?s:Kt(J())}function pt(){var g=J(),R=U(g);if(r=arguments,i=this,c=g,R){if(a===void 0)return dt(c);if(b)return clearTimeout(a),a=setTimeout(K,e),x(c)}return a===void 0&&(a=setTimeout(K,e)),s}return pt.cancel=ar,pt.flush=cr,pt}var Me="Expected a function";function Oe(t,e,n){var r=!0,i=!0;if(typeof t!="function")throw new TypeError(Me);return B(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Q(t,e,{leading:r,maxWait:e,trailing:i})}const Ce=300,Le=500,De=2e3,We=2e3,Ue=500;let It=!0;const Pe=t=>{setTimeout(()=>{It=!1},We);const e=Oe(i=>t(i),Ce,{leading:!0,trailing:!0}),n=Q(i=>t(i),Le,{maxWait:De,leading:!0,trailing:!0});return{run:i=>It?e(i):n(i)}},ke="https://cdn.userway.org/";var G=(t=>(t.Remediation="remediation",t.AriaEditor="aria-editor",t))(G||{}),tt=(t=>(t.KeyboardNavEnabled="app-key-nav-enabled",t))(tt||{});const Tt=(t,e)=>{const n=i=>{const{data:o}=i,{isUserWay:s,action:a,type:c}=o;!s||a!==G.Remediation||c!==t||e()};return window.addEventListener("message",n),()=>{window.removeEventListener("message",n)}},Rt=(()=>{let t=!1,e=[],n=[];const r=a=>{t||(t=!0,e.forEach(c=>{c.run(a)}),t=!1,n=[])},{run:i}=Pe(r);return{run:i,init:()=>C(this,null,function*(){if(e=(yield Promise.resolve().then(()=>sr)).RulesList,!f.tech_rem_on_tab){const u=ft();i([...u])}const c=Tt(tt.KeyboardNavEnabled,()=>{const u=ft();i([...u]),c()})}),onDomUpdates:a=>{n.push(...a),i(n)}}})(),_t=t=>!(t instanceof HTMLElement)||mt.some(e=>t.hasAttribute(e))||Y.includes(t.nodeName.toLowerCase()),je=(t,e)=>e==="childList"?[].filter.call(t.addedNodes,n=>!_t(n)):e==="attributes"?_t(t.target)?[]:[t.target]:[],He=t=>{const e=[];for(const n of t)e.push(...je(n,n.type));return e},Be=["aria-label","alt"],Ge=document.body,Fe={attributes:!0,attributeFilter:Be,childList:!0,subtree:!0},St=new MutationObserver(t=>{const e=He(t);e.length&&Rt.onDomUpdates(e)}),$e=(t=Ge,e=Fe)=>{f.tech_rem_on_tab||St.observe(t,e);const n=Tt(tt.KeyboardNavEnabled,()=>{St.observe(t,e),n()})};(()=>C(this,null,function*(){var e;yield _();const t=(e=f.tech_rem_in_throttle_ms)!=null?e:Ue;setTimeout(()=>{Rt.init(),$e()},t)}))();const Xe=()=>{const t=a=>a.length>1?a.slice(0,-1):a,{hostname:e,pathname:n}=window.location,r=e.replace("www.","").split("."),i=t(r).join("-"),s=n.split("/").filter(a=>a).join(" ").replace(/^\d+|\s\d+/g,"").trim();return(s+(s?" - ":" ")+i).trim()},et=({ruleId:t,isTargetElement:e,rule:n,postMessageApi:r})=>{const i=o=>!o.hasAttribute(`uw-ignore-${t}`);return r&&window.addEventListener("message",o=>{const{data:s}=o,{isUserWay:a,action:c,type:u}=s;!a||c!==G.Remediation&&c!==G.AriaEditor||r[u]&&r[u](s.data?s.data:s)}),{run:o=>{if(!e){n({context:{elements:o}});return}const s=o.filter(a=>i(a)&&e(a));s.length&&n({context:{elements:s}})},stop:()=>{},rerun:()=>{},ruleId:t}},Nt="data-uw-rm-title",xt={UNKNOWN:"un",GENERIC:"gn"},vt=(t,e)=>{t.setAttribute(Nt,e?xt.GENERIC:xt.UNKNOWN)},Ve=et({ruleId:"header-title",rule:()=>{var e;const t=document.getElementsByTagName("title")[0];try{const n=Xe();if(t)!((e=t.innerHTML)!=null&&e.trim())&&!t.hasAttribute(Nt)&&(t.innerHTML=n,vt(t,n));else{const r=document.createElement("title");r.innerHTML=n,vt(r,n),document.head.appendChild(r)}}catch(n){n instanceof Error&&console.error(n)}}}),S=(t,e=0)=>{let n=3735928559^e,r=1103547991^e;for(let i=0,o;i<t.length;i++)o=t.charCodeAt(i),n=Math.imul(n^o,2654435761),r=Math.imul(r^o,1597334677);return n=Math.imul(n^n>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),r=Math.imul(r^r>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),4294967296*(2097151&r)+(n>>>0)},ze=(t,e)=>{if(e===null)return!0;const n=t.innerText?S(t.innerText).toString():"";if(e.innerText.toString()!==n)return!1;const r=t.hasAttribute("href")?S(t.getAttribute("href")).toString():"";if(e.href&&e.href!==r)return!1;const i=t.hasAttribute("src")?S(t.getAttribute("src")).toString():"";return!(e.src&&e.src!==i)},Ze="|",Ke={i:"innerText",s:"src",h:"href"},qe=t=>{const[e,n]=t.split(Ze);let r={innerText:""};if(n){const[i,...o]=n.split(";");r.innerText=i,o.forEach(s=>{const[a,c]=s.split(":"),u=Ke[a];r[u]=c})}return{xpath:e,params:r}},N=t=>{const{xpath:e,params:n}=qe(t),r=document.evaluate(e,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;return ze(r,n)?r:null},w="uwAccessibilityEditor",Ye=I.editorBuildUrl,Je="aria-editor",nt="data-uw-rm-heading",F="aria-editor",$=(t,e=["userway"])=>{const n=gt(k({},t),{isUserWay:!0});e.forEach(r=>{let i=window.frames[r];if(!i||typeof i.postMessage!="function")try{i=document.querySelector(`iframe[name=${r}]`),i=i?i.contentWindow:null}catch(o){console.error(o)}i&&i.postMessage(n,"*")})},X=(t,e=!1)=>{var i;if(t.nodeName.toLowerCase()==="html")return"/HTML";if(t.nodeName.toLowerCase()==="body")return"/HTML/BODY";if(t.nodeName.toLowerCase()==="head")return"/HTML/HEAD";let n=0;const r=(i=t.parentElement)==null?void 0:i.children;if(!r)return"";for(let o=0;o<r.length;o++){let s=r[o];if(s===t)return X(t.parentElement,!0)+`/${t.tagName}[${n+1}]`+(e?"":Qe(t));s.tagName===t.tagName&&n++}return""};function Qe(t){const e={s:"src",h:"href"},n=t.innerText?S(t.innerText):"";return Object.keys(e).reduce((r,i)=>{const o=e[i],s=t.getAttribute(o)||"";return!t.hasAttribute||!t.hasAttribute(o)||s===""?r:r+";"+i+":"+S(s)},"|"+n)}const tn=new RegExp("^(data:)"),en=new RegExp("(.)(gif|jpe?g|tiff?|png|webp|bmp)","i"),V=t=>{if(tn.test(t))return t;t&&(t=t.replace(/^(http|https)(:\/\/)/,"").replace(/^(www\.)/,""));const e=t.match(en);return e!=null&&e.index&&(e!=null&&e.length)?t.substring(0,e.index+e[0].length):t.split("?")[0]},nn=t=>{try{const e=new URL(t);return e.search="",e.toString()}catch(e){return t}},rn="|",on=t=>{const e=t.split(rn)[0];return document.evaluate(e,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue},wt=t=>["input","select","button","textarea","a"].includes(t.tagName.toLowerCase())?!0:["button","checkbox","link","option"].includes((t.getAttribute("role")||"").toLowerCase()),Mt=t=>{const e=t.getAttribute("tabindex");if(e!==null){const n=parseInt(e,10);if(!Number.isNaN(n))return n}},sn=t=>{if(wt(t))return!0;const e=Mt(t);return e!==void 0&&!Number.isNaN(e)&&e>=0},rt=t=>!!Y.includes(t.toLowerCase()),an=(t,e)=>(t==="img"?e.getAttribute("alt"):e.getAttribute("aria-label"))||null,cn=t=>t.getAttribute("aria-hidden")==="true"||t.getAttribute("role")==="presentation",ln=t=>t.getAttribute("role")||null,un=t=>t.getAttribute("aria-level")||null,dn=(t,e)=>t==="img"?e.getAttribute("src"):null,it=UserWayWidgetApp.getLib("accessibility_tree_observer"),Ot=t=>{if(t!=null&&t.nextElementSibling){const e=t.nextElementSibling;return rt(e.tagName)?Ot(e):e}return null},Ct=t=>{if(t!=null&&t.previousElementSibling){const e=t.previousElementSibling;return rt(e.tagName)?Ct(e):e}return null},pn=t=>{var e;return(e=t.uwAtoId)!=null?e:null},Lt=t=>{if(!t.parentElement)return null;const{parentElement:e}=t,n=X(e);return it.nodes.find(r=>r.xpath===n)?n:Lt(e)},gn=t=>{const n=Array.from(t.childNodes).find(r=>r.uwAtoId);if(n){const r=X(n);return it.nodes.find(i=>i.xpath===r)?r:null}return null},Dt=(t,e)=>{if(!t)return;const a=t,{tabindex:n,el:r}=a,i=te(a,["tabindex","el"]),o=t.el?[...t.el.children]:[],s=e.filter(c=>o.includes(c.el));if(s.length){const c=s.map(u=>Dt(u,e));return gt(k({},i),{children:c})}return i},Wt=(t,e="")=>{const n=[t];t.parentElement&&n.push(t.parentElement);let r=0;const i=t!=null&&t.children?[...t.children].filter(c=>!rt(c.tagName)).reverse():[];i.length&&(n.unshift(...i),r+=i.length);const o=Ot(t);o&&!n.includes(o)&&(n.splice(r,0,o),r+=1);const s=Ct(t);s&&!n.includes(s)&&n.splice(r+1,0,s);const a=n.map(c=>{const u=c.tagName.toLowerCase(),m=it.buildAccessibilityTreeNode(c,!0);if(!m)return null;const{type:b,label:T,id:x}=m,dt=typeof c.getAttribute=="function"?{label:an(u,c),isHidden:cn(c),role:ln(c),ariaLevel:un(c),src:dn(u,c),isControl:wt(c),focusable:sn(c),tabindex:Mt(c)}:{};return k({tagName:u,text:[...c.childNodes].filter(W=>W.nodeType===Node.TEXT_NODE).map(W=>{var U;return(U=W.textContent)==null?void 0:U.trim()}).join(" ").trim(),id:x,xpath:X(c),selected:c===t,el:c,semanticType:b,textToRead:T,uwAtoId:pn(c),accessibleParentXpath:Lt(c),accessibleChildXpath:gn(c)},dt)}).filter(Boolean).reverse();if(a){const c=Dt(a[0],a);c&&$({action:F,type:"elements-selected",data:{tree:c,source:e}},[w])}},mn=t=>{const{xpath:e}=t,n=N(e);n==null||n.removeAttribute(nt),_()},fn=t=>{const{xpath:e,label:n}=t;if(!e||n==null)return;const r=N(e);(r==null?void 0:r.nodeType)===Node.ELEMENT_NODE&&r.setAttribute("aria-label",t.label)},hn=t=>{const{xpath:e,ariaLevel:n}=t;if(!e)return;const r=N(e);(r==null?void 0:r.nodeType)===Node.ELEMENT_NODE&&(n?r.setAttribute("aria-level",n):r.removeAttribute("aria-level"))},bn=t=>{const{xpath:e,role:n}=t;if(!e)return;const r=N(e);(r==null?void 0:r.nodeType)===Node.ELEMENT_NODE&&(n&&n!=="no role"?r.setAttribute("role",n):r.removeAttribute("role"))},En=t=>{const{xpath:e,focusable:n,isControl:r}=t;if(!e)return;const i=N(e);(i==null?void 0:i.nodeType)===Node.ELEMENT_NODE&&(r?i[n?"removeAttribute":"setAttribute"]("tabindex","-1"):i[n?"setAttribute":"removeAttribute"]("tabindex","0"))},An=t=>{const{xpath:e,hidden:n}=t;if(!e)return;const r=N(e);(r==null?void 0:r.nodeType)===Node.ELEMENT_NODE&&(n?r.setAttribute("aria-hidden","true"):r.removeAttribute("aria-hidden"))},yn=t=>{const{position:{x:e,y:n}}=t;let r=document.elementsFromPoint(e,n);const i=r.findIndex(o=>o.getAttribute("name")===w);i!==-1&&r.splice(i,1),r=r.filter(o=>!["HTML","BODY"].includes(o.tagName)).slice(0,2),r.length&&Wt(r[0])},In=t=>{const{xpath:e,source:n}=t;if(!e)return;const r=N(e);r&&Wt(r,n)};let Ut,h;const Tn=()=>{h=document.querySelector(`iframe[name=${w}]`),h||(Ut=new Promise(t=>{const n={class:"userway_iframe_aria_editor",name:"uwAccessibilityEditor",title:"Aria Editor",style:`
            z-index: 2147483647;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%!important;
            max-width: 100%!important;
            height: 100%!important;
            max-height: 100%!important;
            visibility: hidden;
            opacity: 0!important;
            border: none;
          `,src:Ye};h=document.createElement("iframe"),Object.entries(n).forEach(([r,i])=>{h==null||h.setAttribute(r,i)}),h.onload=()=>{t()},h&&document.body.appendChild(h)}))},Rn=()=>{const t=I,e=!!t&&(!!t.CUSTOM_BRANDING||!!t.WHITE_LABEL);$({action:F,type:"open-aria-editor",data:{siteId:I.siteId,showTutorial:!0,whiteLabel:e,hash:S(window.location.pathname)}},[w])},_n=()=>{Ut.then(()=>{window.parent.postMessage({action:"close",isUserWay:!0}),window.parent.postMessage({action:"manageIconVisibility",isUserWay:!0,type:"hidden"}),h&&(h.style.visibility="visible",h.style.opacity="1"),$({action:F,type:"aria-editor-open-request"},[w])})},Sn=()=>{window.parent.postMessage({action:"open",isUserWay:!0}),window.parent.postMessage({action:"manageIconVisibility",isUserWay:!0,type:"visible"}),h&&(h.style.visibility="hidden",h.style.opacity="0"),$({action:F,type:"aria-editor-closed"},[w])};let ot;const Nn=()=>{let t=A().AriaEditorValues;const e=`${S(window.location.pathname)}`;return t=t.filter(n=>!n.page||n.page===e).sort(n=>n.page?-1:1),t},xn=t=>{t.setAttribute("aria-hidden","true")},vn=(t,e)=>{const n=(t==null?void 0:t.tagName.toLowerCase())==="img";e&&!n&&t.setAttribute("aria-label",e)},wn=(t,e)=>{const{tabindex:n,role:r,ariaLevel:i}=e;n&&t.setAttribute("tabindex",n),r&&r!=="no role"?t.setAttribute("role",r):(!r||r==="no role")&&t.removeAttribute("role"),i&&t.setAttribute("aria-level",i)},Mn=et({ruleId:Je,rule:()=>{if(l.ariaEditor.enabled&&(ot=Nn(),ot))for(const t of ot){if(t.processed)return;const e=on(t.xpath);if(e&&e.nodeType===Node.ELEMENT_NODE){if(e.hasAttribute(nt))return;const{hidden:n,correction:r}=t;n&&xn(e),vn(e,r),wn(e,t),e.setAttribute(nt,""),t.processed=!0}}},postMessageApi:{"add-aria-editor":Tn,"open-aria-editor":_n,"close-aria-editor":Sn,"editor-init":Rn,"update-aria-hidden":An,"update-tabindex":En,"update-aria-label":fn,"update-aria-level":hn,"update-role":bn,"update-corrections":mn,"select-elements-by-xpath":In,"select-elements-at-point":yn}}),On={automaticcoupons:/automaticcoupons/,"shopping.yahoo":/shopping\.yahoo/,shopperapproved:/shopperapproved/,rakuten:/rakuten/,"translate.google":/translate\.google/,"maps.googleapis.com":/maps\.googleapis\.com/,"s.w.org":/s\.w\.org/,avatar:/avatar/,companylogos:/companylogos/,favicon:/favicon/,activecampaign:/lt\.php(.*)?l=open/,aweber:/openrate\.aweber\.com/,bananatag:/bl-1\.com/,boomerang:/mailstat\.us\/tr/,"campaign monitor":/cmail(\d+)\.com\/t\//,"cirrus insight":/tracking\.cirrusinsight\.com/,close:/close\.com\/email_opened/,"constant contact":/rs6\.net\/on\.jsp/,contactmonkey:/contactmonkey\.com\/api\/v1\/tracker/,convertkit:/convertkit-mail\.com\/o/,"critical impact":/portal\.criticalimpact\.com\/c2\//,emarsys:/emarsys\.com\/e2t\/o/,gem:/zen\.sr\/o/,getnotify:/email81\.com\/case/,getresponse:/getresponse\.com\/open\.html/,growthdot:/growthdot\.com\/api\/mail-tracking/,front:/app\.frontapp\.com\/(.*)?\/seen/,hubspot:/t\.(hubspotemail|hubspotfree|signaux|senal|sidekickopen|sigopn)/,icontact:/click\.icptrack\.com\/icp/,intercom:/(via\.intercom\.io\/o)|(intercom-mail\.com\/via\/o)/,litmus:/emltrk\.com/,mailchimp:/list-manage\.com\/track/,mailgun:/email\.(mailgun|mg)(.*)?\/o/,mailjet:/mjt\.lu\/oo/,mailspring:/getmailspring\.com\/open/,mailtrack:/(mailtrack\.io\/trace)|(mltrk\.io\/pixel)/,mandrill:/mandrillapp\.com\/track/,marketo:/resources\.marketo\.com\/trk/,mixmax:/(email|track)\.mixmax\.com/,mixpanel:/api\.mixpanel\.com\/track/,nethunt:/nethunt\.co(.*)?\/pixel\.gif/,newton:/tr\.cloudmagic\.com/,outreach:/api\/mailings\/opened/,phplist:/phplist\.com\/lists\/ut\.php/,polymail:/polymail\.io/,postmark:/pstmrk\.it\/open/,"return path":/returnpath\.net\/pixel\.gif/,sailthru:/sailthru\.com\/trk/,salesforce:/nova\.collect\.igodigital\.com/,sendgrid:/wf\/open\?upn/,sendy:/sendy\/t\//,streak:/mailfoogae\.appspot\.com/,superhuman:/r\.superhuman\.com/,thunderhead:/na5\.thunderhead\.com/,tinyletter:/tinyletterapp\.com.*open\.gif/,yamm:/yamm-track\.appspot/,yesware:/t\.yesware\.com/,"zendesk sell":/futuresimple\.com\/api\/v1\/sprite\.png/},Pt=new RegExp("^(data:)"),kt=new RegExp(/^.+\.svg$/),Cn=50,st=10,Ln=5,jt=10,Dn=255;var y=(t=>(t.EXCLUDED_SRC="EXCLUDED_SRC",t.HIDDEN_FROM_SCREEN_READER="HIDDEN_FROM_SCREEN_READER",t.BASE64="BASE64",t.SVG="SVG",t.SMALL_SIZE="SMALL_SIZE",t.MICRO_SIZE="MICRO_SIZE",t.WRONG_SRC="WRONG_SRC",t.ASPECT_RATIO="ASPECT_RATIO",t))(y||{});const Ht=["SVG","SMALL_SIZE","HIDDEN_FROM_SCREEN_READER"],z="data-uw-rm-alt-original",Bt="REMEDIATION_IMAGE_MISSING_ALT",M="data-uw-rm-alt",Wn=1e3,Un=2e3,Gt=["jpg","jpeg","png","gif","bmp","tiff","tif","svg","webp","ico","apng","heif","heic","avif","eps","raw","cr2","nef","orf","sr2"],Pn=t=>{const e=t.tagName.toLowerCase()==="img",n=t.hasAttribute(M);if(!e||n)return!1;const r=t.getAttribute("src"),i=t.getAttribute("srcset");return!!(r!=null?r:i)||!!t.closest("picture")},E=({currentSrc:t,src:e})=>t||e,at=(t,e)=>{try{const{width:r,height:i}=window.getComputedStyle(t);return parseInt(r,10)>e&&parseInt(i,10)>e}catch(r){return!1}},O=(t,{decorative:e,approved:n,fixedByUserWay:r,loadingFromMS:i})=>{var o;return{src:E(t),alt:t.alt,originalAlt:(o=t.getAttribute(z))!=null?o:"",decorative:e,approved:n,fixedByUserWay:r,loadingFromMS:i}},ct=t=>{t.setAttribute("role","presentation"),t.removeAttribute("aria-hidden"),t.setAttribute("alt","")},Ft=t=>{if(!t)return"";const{hostname:e}=new URL(t);return e.replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\.[a-zA-Z0-9]*$/,"")},kn=t=>{const e=[];return t.forEach(r=>{const i=E(r),o=Ft(i);if(o){let s=e.find(a=>a.name===o);s||(s={name:o,weight:0},e.push(s)),s.weight+=1}}),e.sort((r,i)=>r.weight<i.weight?1:-1)[0].name},jn=(t,e)=>{const n=E(t);return Ft(n)!==e&&!at(t,st)},Z=t=>{const n=new RegExp(`\\.(${Gt.join("|")})$`,"i").test(t),r=t.length>Dn,i=!t.trim(),o=/[0-9]{5,}/.test(t),a=new RegExp(/^[!@#$%^&*()_+{}[\]`:;<>,.?~\\|\-="'/]+$/,"u").test(t);return o||n||r||i||a},Hn=(t,e)=>{const n=e.alt.trim(),r=E(e),i=t.find(x=>V(x.src)===V(r));if(!i||i.alt===null)return null;const{decorative:o,alt:s,approved:a,reverted:c}=i;if(c)return e.setAttribute(M,"true"),O(e,{approved:!0,decorative:!n,fixedByUserWay:!1});const m=!(!l||l.strategy==="AUTO")&&!a;o&&!m&&ct(e);const b=a||!n||Z(n);s&&!m&&b&&!o&&e.setAttribute("alt",s),e.setAttribute(M,"true");const T=O(e,{approved:a,decorative:o,fixedByUserWay:!0});return m&&(T.alt=s),T},Bn=t=>{if(typeof t!="string")return!1;for(const e of Object.values(On)){const n=new RegExp(e,"i");if(t.match(n))return!0}return!1},Gn=t=>t?t.match(Pt)?!1:!new RegExp(`^https?://.{1,256}\\.[a-z]{2,6}/.*\\.(${Gt.join("|")})(\\?.*)?$`,"i").test(t):!0,Fn=t=>{try{const{width:n,height:r}=window.getComputedStyle(t),i=parseInt(n,10),o=parseInt(r,10),s=i<=st&&o>=i*jt,a=o<=st&&i>=o*jt;return!!(s||a)}catch(n){return!1}},lt=t=>{const e=E(t),n=Z(t.alt);return Gn(e)?y.WRONG_SRC:Bn(e)?y.EXCLUDED_SRC:at(t,Ln)?Fn(t)?y.ASPECT_RATIO:Pt.test(e)?y.BASE64:t.getAttribute("aria-hidden")==="true"||t.getAttribute("role")==="presentation"||t.getAttribute("role")==="none"?y.HIDDEN_FROM_SCREEN_READER:kt.test(e)&&n?y.SVG:!at(t,Cn)&&n?y.SMALL_SIZE:null:y.MICRO_SIZE},$n=(t,e,n,r)=>{const i=UserWayWidgetApp.getLib("remediation_manager"),o=UserWayWidgetApp.getLib("remediation_helper_outcome");if(!o.of)return;const s=o.of(t,{items:e},null,n,r);i.HelperCallbackAggregator.onHelperRemediationCompleted(s)},$t=t=>$n(Bt,t,t.filter(e=>e.fixedByUserWay).length,t.filter(e=>!e.approved).length),Xn=t=>{t.hasAttribute(z)||t.setAttribute(z,t.alt)},Xt=(t,e=[])=>{var i;if(t.length===0)return;const{paidAi:n}=I,r=[];for(const o of t){const s=o,a=Z(s.alt),c=E(s);Xn(s),kt.test(c)&&n&&s.setAttribute("role","img");const u=Hn(e,s);if(u){r.push(u);continue}if(!n)continue;const m=lt(s);if(!a&&!m){s.setAttribute(M,"true"),r.push(O(s,{approved:!0,decorative:!1,fixedByUserWay:!1}));continue}if(m!==null||(i=l.alt)!=null&&i.quotaExceeded){ct(s),s.setAttribute(M,"true"),m&&Ht.includes(m)&&r.push(O(s,{approved:!1,decorative:!0,fixedByUserWay:!0}));continue}s.setAttribute(M,"true"),r.push(O(s,{approved:!1,decorative:!1,fixedByUserWay:!0,loadingFromMS:!0}))}$t(r)},Vt=t=>{const e=t.replace(/^https?:\/\//,"");return document.querySelectorAll(`img[src*="${e}" i],img[srcset*="${e}" i]`)},Vn=({src:t})=>{const e=Vt(t);for(const n of e){const r=n.getAttribute(z);r!==null&&n.setAttribute("alt",r)}},zn=({src:t,decorative:e,alt:n,role:r})=>{const i=Vt(t);if(i.length){for(const o of i)o.setAttribute("alt",n!=null?n:""),e?ct(o):((o.getAttribute("role")==="presentation"||o.getAttribute("role")==="none")&&o.removeAttribute("role"),o.hasAttribute("aria-hidden")&&o.removeAttribute("aria-hidden")),["link","button","heading"].includes(r)&&o.setAttribute("aria-label",n);$t([O(i[0],{approved:!0,decorative:e,fixedByUserWay:!1})])}},Zn=()=>{_()},Kn=t=>C(this,null,function*(){const{account:e}=UserWayWidgetApp.ContextHolder.config,{siteId:n}=I,{resourceHash:r}=L,i=encodeURIComponent(t);return(yield(yield fetch(`${ke}api/img-dscr/v2/${e}/${n}/${r}/alts.json?dto=${i}`,{method:"GET",headers:{"Content-Type":"application/json"}})).json()).payload});var zt=(t=>(t.RO="RO",t))(zt||{});const qn=(t,e)=>t.src.localeCompare(e.src),Yn=t=>{const e=t,n=e.filter((r,i)=>i===e.findIndex(o=>E(r)===E(o))).map(r=>{const i=r,o=i.alt.trim(),s=o&&!Z(o),a=E(i);return{src:nn(a),alt:i.alt.trim(),dir:s||lt(i)?zt.RO:void 0}});return n.sort(qn),n},Jn=(t,e)=>{const n=Math.ceil(t.length/e),r=[];for(let i=0;i<t.length;i+=n)r.push(t.slice(i,i+n));return r},Qn=t=>encodeURIComponent(t).length/1024,tr=8,er=12,Zt=(t,e=1)=>{if(e>=er)throw new Error("Max split level exceed");const n=Jn(t,e),r=[];for(const i of n){const o={sorted:i,tier:L.tier},s=JSON.stringify(o);if(Qn(s)>tr)return Zt(t,e+1);r.push(s)}return r},ut=[],nr=()=>{ut.length=0},rr=t=>{const{state:e}=L;if(e==="ALTS_OFF")return;const n=kn(t),r=[],i=[];for(const o of t){const s=o,a=jn(s,n),c=lt(s);c&&!Ht.includes(c)||a?i.push(s):r.push(s)}try{const o=Yn(r),s=Zt(o);for(const a of s)Kn(a).then(({missingAlts:c})=>{const u=r.filter(m=>c.find(b=>V(b.src)===V(E(m))));Xt(u,c)})}catch(o){console.error(o)}Xt(i),nr()},ir=Q(t=>rr(t),Wn,{maxWait:Un,leading:!0,trailing:!0}),or=et({ruleId:Bt,rule:({context:{elements:t}})=>{ut.push(...t),ir(ut)},isTargetElement:Pn,postMessageApi:{"image-alt-update":zn,"image-alt-revert":Vn,"image-alt-update-config":Zn}}),sr=Object.freeze(Object.defineProperty({__proto__:null,RulesList:[Ve,or,Mn]},Symbol.toStringTag,{value:"Module"}))})();
//# sourceMappingURL=remediation-tool.js.map
