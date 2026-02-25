const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/style.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const $0="modulepreload",j0=function(r){return"/"+r},ep={},K0=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=l(t.map(c=>{if(c=j0(c),c in ep)return;ep[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":$0,u||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((d,g)=>{f.addEventListener("load",d),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};const ed="182",Xo={ROTATE:0,DOLLY:1,PAN:2},ko={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Z0=0,tp=1,J0=2,Ec=1,bg=2,Va=3,Xr=0,oi=1,cr=2,Hr=0,Yo=1,np=2,ip=3,rp=4,Q0=5,Gs=100,ev=101,tv=102,nv=103,iv=104,rv=200,sv=201,ov=202,av=203,Rh=204,Ch=205,lv=206,cv=207,uv=208,hv=209,fv=210,dv=211,pv=212,mv=213,gv=214,Ph=0,Lh=1,Dh=2,na=3,Ih=4,Nh=5,Uh=6,Oh=7,Tg=0,_v=1,vv=2,mr=0,wg=1,Eg=2,Ag=3,Rg=4,Cg=5,Pg=6,Lg=7,sp="attached",xv="detached",Dg=300,so=301,ia=302,Fh=303,Bh=304,uu=306,ra=1e3,hr=1001,Hc=1002,hn=1003,Ig=1004,Ha=1005,fn=1006,Ac=1007,kr=1008,bi=1009,Ng=1010,Ug=1011,ml=1012,td=1013,vr=1014,ki=1015,Yr=1016,nd=1017,id=1018,gl=1020,Og=35902,Fg=35899,Bg=1021,kg=1022,zi=1023,qr=1026,Xs=1027,rd=1028,sd=1029,sa=1030,od=1031,ad=1033,Rc=33776,Cc=33777,Pc=33778,Lc=33779,kh=35840,zh=35841,Vh=35842,Hh=35843,Gh=36196,Wh=37492,Xh=37496,Yh=37488,qh=37489,$h=37490,jh=37491,Kh=37808,Zh=37809,Jh=37810,Qh=37811,ef=37812,tf=37813,nf=37814,rf=37815,sf=37816,of=37817,af=37818,lf=37819,cf=37820,uf=37821,hf=36492,ff=36494,df=36495,pf=36283,mf=36284,gf=36285,_f=36286,_l=2300,vl=2301,Su=2302,op=2400,ap=2401,lp=2402,yv=2500,Sv=0,zg=1,vf=2,Mv=3200,ld=0,bv=1,ls="",wn="srgb",Jn="srgb-linear",Gc="linear",Mt="srgb",vo=7680,cp=519,Tv=512,wv=513,Ev=514,cd=515,Av=516,Rv=517,ud=518,Cv=519,xf=35044,up="300 es",fr=2e3,Wc=2001;function Vg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Pv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function xl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Lv(){const r=xl("canvas");return r.style.display="block",r}const hp={};function Xc(...r){const e="THREE."+r.shift();console.log(e,...r)}function He(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Ke(...r){const e="THREE."+r.shift();console.error(e,...r)}function yl(...r){const e=r.join(" ");e in hp||(hp[e]=!0,He(...r))}function Dv(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class uo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fp=1234567;const Ja=Math.PI/180,oa=180/Math.PI;function Ji(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function hd(r,e){return(r%e+e)%e}function Iv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Nv(r,e,t){return r!==e?(t-r)/(e-r):0}function Qa(r,e,t){return(1-t)*r+t*e}function Uv(r,e,t,n){return Qa(r,e,1-Math.exp(-t*n))}function Ov(r,e=1){return e-Math.abs(hd(r,e*2)-e)}function Fv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Bv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function kv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function zv(r,e){return r+Math.random()*(e-r)}function Vv(r){return r*(.5-Math.random())}function Hv(r){r!==void 0&&(fp=r);let e=fp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gv(r){return r*Ja}function Wv(r){return r*oa}function Xv(r){return(r&r-1)===0&&r!==0}function Yv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function qv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $v(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ki(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Qi={DEG2RAD:Ja,RAD2DEG:oa,generateUUID:Ji,clamp:ot,euclideanModulo:hd,mapLinear:Iv,inverseLerp:Nv,lerp:Qa,damp:Uv,pingpong:Ov,smoothstep:Fv,smootherstep:Bv,randInt:kv,randFloat:zv,randFloatSpread:Vv,seededRandom:Hv,degToRad:Gv,radToDeg:Wv,isPowerOfTwo:Xv,ceilPowerOfTwo:Yv,floorPowerOfTwo:qv,setQuaternionFromProperEuler:$v,normalize:bt,denormalize:Ki};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=l*f+c*d+u*g+h*_;m<0&&(f=-f,d=-d,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const v=Math.acos(m),x=Math.sin(v);p=Math.sin(p*v)/x,a=Math.sin(a*v)/x,l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+_*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+_*a;const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mu.copy(this).projectOnVector(e),this.sub(Mu)}reflect(e){return this.sub(Mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mu=new F,dp=new xr;class nt{constructor(e,t,n,i,s,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],S=i[7],b=i[2],w=i[5],E=i[8];return s[0]=o*_+a*v+l*b,s[3]=o*m+a*x+l*w,s[6]=o*p+a*S+l*E,s[1]=c*_+u*v+h*b,s[4]=c*m+u*x+h*w,s[7]=c*p+u*S+h*E,s[2]=f*_+d*v+g*b,s[5]=f*m+d*x+g*w,s[8]=f*p+d*S+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bu.makeScale(e,t)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,t){return this.premultiply(bu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new nt,pp=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mp=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jv(){const r={enabled:!0,workingColorSpace:Jn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(i.r=Gr(i.r),i.g=Gr(i.g),i.b=Gr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(i.r=qo(i.r),i.g=qo(i.g),i.b=qo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ls?Gc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return yl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return yl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Jn]:{primaries:e,whitePoint:n,transfer:Gc,toXYZ:pp,fromXYZ:mp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:pp,fromXYZ:mp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),r}const dt=jv();function Gr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xo;class Kv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xo===void 0&&(xo=xl("canvas")),xo.width=e.width,xo.height=e.height;const i=xo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Gr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gr(t[n]/255)*255):t[n]=Gr(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zv=0;class fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Tu(i[o].image)):s.push(Tu(i[o]))}else s=Tu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Tu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Kv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let Jv=0;const wu=new F;class Mn extends uo{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,n=hr,i=hr,s=fn,o=kr,a=zi,l=bi,c=Mn.DEFAULT_ANISOTROPY,u=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Ji(),this.name="",this.source=new fd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wu).x}get height(){return this.source.getSize(wu).y}get depth(){return this.source.getSize(wu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ra:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case Hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ra:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case Hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Dg;Mn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,i=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(d+1)/2,b=(p+1)/2,w=(u+f)/4,E=(h+_)/4,R=(g+m)/4;return x>S&&x>b?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=E/n):S>b?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=R/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=E/s,i=R/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qv extends uo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Mn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new fd(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends Qv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hg extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ex extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ct{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wi):Wi.fromBufferAttribute(s,o),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kl.copy(n.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),zl.subVectors(this.max,Ea),yo.subVectors(e.a,Ea),So.subVectors(e.b,Ea),Mo.subVectors(e.c,Ea),Zr.subVectors(So,yo),Jr.subVectors(Mo,So),Cs.subVectors(yo,Mo);let t=[0,-Zr.z,Zr.y,0,-Jr.z,Jr.y,0,-Cs.z,Cs.y,Zr.z,0,-Zr.x,Jr.z,0,-Jr.x,Cs.z,0,-Cs.x,-Zr.y,Zr.x,0,-Jr.y,Jr.x,0,-Cs.y,Cs.x,0];return!Eu(t,yo,So,Mo,zl)||(t=[1,0,0,0,1,0,0,0,1],!Eu(t,yo,So,Mo,zl))?!1:(Vl.crossVectors(Zr,Jr),t=[Vl.x,Vl.y,Vl.z],Eu(t,yo,So,Mo,zl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rr=[new F,new F,new F,new F,new F,new F,new F,new F],Wi=new F,kl=new Ct,yo=new F,So=new F,Mo=new F,Zr=new F,Jr=new F,Cs=new F,Ea=new F,zl=new F,Vl=new F,Ps=new F;function Eu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ps.fromArray(r,s);const a=i.x*Math.abs(Ps.x)+i.y*Math.abs(Ps.y)+i.z*Math.abs(Ps.z),l=e.dot(Ps),c=t.dot(Ps),u=n.dot(Ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const tx=new Ct,Aa=new F,Au=new F;class br{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);const t=Aa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Aa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Au)),this.expandByPoint(Aa.copy(e.center).sub(Au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Cr=new F,Ru=new F,Hl=new F,Qr=new F,Cu=new F,Gl=new F,Pu=new F;class Il{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cr.copy(this.origin).addScaledVector(this.direction,t),Cr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ru.copy(e).add(t).multiplyScalar(.5),Hl.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Ru);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Hl),a=Qr.dot(this.direction),l=-Qr.dot(Hl),c=Qr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ru).addScaledVector(Hl,f),d}intersectSphere(e,t){Cr.subVectors(e.center,this.origin);const n=Cr.dot(this.direction),i=Cr.dot(Cr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Cr)!==null}intersectTriangle(e,t,n,i,s){Cu.subVectors(t,e),Gl.subVectors(n,e),Pu.crossVectors(Cu,Gl);let o=this.direction.dot(Pu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qr.subVectors(this.origin,e);const l=a*this.direction.dot(Gl.crossVectors(Qr,Gl));if(l<0)return null;const c=a*this.direction.dot(Cu.cross(Qr));if(c<0||l+c>o)return null;const u=-a*Qr.dot(Pu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/bo.setFromMatrixColumn(e,0).length(),s=1/bo.setFromMatrixColumn(e,1).length(),o=1/bo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nx,e,ix)}lookAt(e,t,n){const i=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),es.crossVectors(n,gi),es.lengthSq()===0&&(Math.abs(n.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),es.crossVectors(n,gi)),es.normalize(),Wl.crossVectors(gi,es),i[0]=es.x,i[4]=Wl.x,i[8]=gi.x,i[1]=es.y,i[5]=Wl.y,i[9]=gi.y,i[2]=es.z,i[6]=Wl.z,i[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],S=n[11],b=n[15],w=i[0],E=i[4],R=i[8],y=i[12],T=i[1],C=i[5],L=i[9],N=i[13],B=i[2],V=i[6],z=i[10],k=i[14],W=i[3],Q=i[7],D=i[11],ie=i[15];return s[0]=o*w+a*T+l*B+c*W,s[4]=o*E+a*C+l*V+c*Q,s[8]=o*R+a*L+l*z+c*D,s[12]=o*y+a*N+l*k+c*ie,s[1]=u*w+h*T+f*B+d*W,s[5]=u*E+h*C+f*V+d*Q,s[9]=u*R+h*L+f*z+d*D,s[13]=u*y+h*N+f*k+d*ie,s[2]=g*w+_*T+m*B+p*W,s[6]=g*E+_*C+m*V+p*Q,s[10]=g*R+_*L+m*z+p*D,s[14]=g*y+_*N+m*k+p*ie,s[3]=v*w+x*T+S*B+b*W,s[7]=v*E+x*C+S*V+b*Q,s[11]=v*R+x*L+S*z+b*D,s[15]=v*y+x*N+S*k+b*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],v=l*d-c*f,x=a*d-c*h,S=a*f-l*h,b=o*d-c*u,w=o*f-l*u,E=o*h-a*u;return t*(_*v-m*x+p*S)-n*(g*v-m*b+p*w)+i*(g*x-_*b+p*E)-s*(g*S-_*w+m*E)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,x=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,S=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,b=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,w=t*v+n*x+i*S+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=v*E,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*E,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*E,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*E,e[4]=x*E,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*E,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*E,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*E,e[8]=S*E,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*E,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*E,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*E,e[12]=b*E,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*E,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,v=l*c,x=l*u,S=l*h,b=n.x,w=n.y,E=n.z;return i[0]=(1-(_+p))*b,i[1]=(d+S)*b,i[2]=(g-x)*b,i[3]=0,i[4]=(d-S)*w,i[5]=(1-(f+p))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(g+x)*E,i[9]=(m-v)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=bo.set(i[0],i[1],i[2]).length();const o=bo.set(i[4],i[5],i[6]).length(),a=bo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Xi.copy(this);const c=1/s,u=1/o,h=1/a;return Xi.elements[0]*=c,Xi.elements[1]*=c,Xi.elements[2]*=c,Xi.elements[4]*=u,Xi.elements[5]*=u,Xi.elements[6]*=u,Xi.elements[8]*=h,Xi.elements[9]*=h,Xi.elements[10]*=h,t.setFromRotationMatrix(Xi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=fr,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===fr)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Wc)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=fr,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===fr)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Wc)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bo=new F,Xi=new rt,nx=new F(0,0,0),ix=new F(1,1,1),es=new F,Wl=new F,gi=new F,gp=new rt,_p=new xr;class yr{constructor(e=0,t=0,n=0,i=yr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _p.setFromEuler(this),this.setFromQuaternion(_p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yr.DEFAULT_ORDER="XYZ";class Gg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rx=0;const vp=new F,To=new xr,Pr=new rt,Xl=new F,Ra=new F,sx=new F,ox=new xr,xp=new F(1,0,0),yp=new F(0,1,0),Sp=new F(0,0,1),Mp={type:"added"},ax={type:"removed"},wo={type:"childadded",child:null},Lu={type:"childremoved",child:null};class Wt extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new F,t=new yr,n=new xr,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new nt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return To.setFromAxisAngle(e,t),this.quaternion.multiply(To),this}rotateOnWorldAxis(e,t){return To.setFromAxisAngle(e,t),this.quaternion.premultiply(To),this}rotateX(e){return this.rotateOnAxis(xp,e)}rotateY(e){return this.rotateOnAxis(yp,e)}rotateZ(e){return this.rotateOnAxis(Sp,e)}translateOnAxis(e,t){return vp.copy(e).applyQuaternion(this.quaternion),this.position.add(vp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xp,e)}translateY(e){return this.translateOnAxis(yp,e)}translateZ(e){return this.translateOnAxis(Sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xl.copy(e):Xl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pr.lookAt(Ra,Xl,this.up):Pr.lookAt(Xl,Ra,this.up),this.quaternion.setFromRotationMatrix(Pr),i&&(Pr.extractRotation(i.matrixWorld),To.setFromRotationMatrix(Pr),this.quaternion.premultiply(To.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mp),wo.child=e,this.dispatchEvent(wo),wo.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ax),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mp),wo.child=e,this.dispatchEvent(wo),wo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,sx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,ox,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Wt.DEFAULT_UP=new F(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yi=new F,Lr=new F,Du=new F,Dr=new F,Eo=new F,Ao=new F,bp=new F,Iu=new F,Nu=new F,Uu=new F,Ou=new Bt,Fu=new Bt,Bu=new Bt;class Zi{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yi.subVectors(e,t),i.cross(Yi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Yi.subVectors(i,t),Lr.subVectors(n,t),Du.subVectors(e,t);const o=Yi.dot(Yi),a=Yi.dot(Lr),l=Yi.dot(Du),c=Lr.dot(Lr),u=Lr.dot(Du),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Dr)===null?!1:Dr.x>=0&&Dr.y>=0&&Dr.x+Dr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Dr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dr.x),l.addScaledVector(o,Dr.y),l.addScaledVector(a,Dr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Ou.setScalar(0),Fu.setScalar(0),Bu.setScalar(0),Ou.fromBufferAttribute(e,t),Fu.fromBufferAttribute(e,n),Bu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ou,s.x),o.addScaledVector(Fu,s.y),o.addScaledVector(Bu,s.z),o}static isFrontFacing(e,t,n,i){return Yi.subVectors(n,t),Lr.subVectors(e,t),Yi.cross(Lr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),Lr.subVectors(this.a,this.b),Yi.cross(Lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Zi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Eo.subVectors(i,n),Ao.subVectors(s,n),Iu.subVectors(e,n);const l=Eo.dot(Iu),c=Ao.dot(Iu);if(l<=0&&c<=0)return t.copy(n);Nu.subVectors(e,i);const u=Eo.dot(Nu),h=Ao.dot(Nu);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Eo,o);Uu.subVectors(e,s);const d=Eo.dot(Uu),g=Ao.dot(Uu);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ao,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return bp.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(bp,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Eo,o).addScaledVector(Ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function ku(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=hd(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ku(o,s,e+1/3),this.g=ku(o,s,e),this.b=ku(o,s,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=wn){function n(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){const n=Wg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}copyLinearToSRGB(e){return this.r=qo(e.r),this.g=qo(e.g),this.b=qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return dt.workingToColorSpace(Dn.copy(this),e),Math.round(ot(Dn.r*255,0,255))*65536+Math.round(ot(Dn.g*255,0,255))*256+Math.round(ot(Dn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Dn.copy(this),t);const n=Dn.r,i=Dn.g,s=Dn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=wn){dt.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,i=Dn.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(Yl);const n=Qa(ts.h,Yl.h,t),i=Qa(ts.s,Yl.s,t),s=Qa(ts.l,Yl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ze;Ze.NAMES=Wg;let lx=0;class er extends uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Yo,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ch,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yo&&(n.blending=this.blending),this.side!==Xr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rh&&(n.blendSrc=this.blendSrc),this.blendDst!==Ch&&(n.blendDst=this.blendDst),this.blendEquation!==Gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ys extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yr,this.combine=Tg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new F,ql=new Ge;let cx=0;class Zn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xf,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ql.fromBufferAttribute(this,t),ql.applyMatrix3(e),this.setXY(t,ql.x,ql.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xf&&(e.usage=this.usage),e}}class Xg extends Zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yg extends Zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rn extends Zn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ux=0;const Ii=new rt,zu=new Wt,Ro=new F,_i=new Ct,Ca=new Ct,_n=new F;class Qn extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vg(e)?Yg:Xg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,n){return Ii.makeTranslation(e,t,n),this.applyMatrix4(Ii),this}scale(e,t,n){return Ii.makeScale(e,t,n),this.applyMatrix4(Ii),this}lookAt(e){return zu.lookAt(e),zu.updateMatrix(),this.applyMatrix4(zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ct);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ca.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(_i.min,Ca.min),_i.expandByPoint(_n),_n.addVectors(_i.max,Ca.max),_i.expandByPoint(_n)):(_i.expandByPoint(Ca.min),_i.expandByPoint(Ca.max))}_i.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)_n.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_n));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_n.fromBufferAttribute(a,c),l&&(Ro.fromBufferAttribute(e,c),_n.add(Ro)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new F,l[R]=new F;const c=new F,u=new F,h=new F,f=new Ge,d=new Ge,g=new Ge,_=new F,m=new F;function p(R,y,T){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,T),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[R].add(_),a[y].add(_),a[T].add(_),l[R].add(m),l[y].add(m),l[T].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,y=v.length;R<y;++R){const T=v[R],C=T.start,L=T.count;for(let N=C,B=C+L;N<B;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new F,S=new F,b=new F,w=new F;function E(R){b.fromBufferAttribute(i,R),w.copy(b);const y=a[R];x.copy(y),x.sub(b.multiplyScalar(b.dot(y))).normalize(),S.crossVectors(w,y);const C=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,C)}for(let R=0,y=v.length;R<y;++R){const T=v[R],C=T.start,L=T.count;for(let N=C,B=C+L;N<B;N+=3)E(e.getX(N+0)),E(e.getX(N+1)),E(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Zn(f,u,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tp=new rt,Ls=new Il,$l=new br,wp=new F,jl=new F,Kl=new F,Zl=new F,Vu=new F,Jl=new F,Ep=new F,Ql=new F;class wt extends Wt{constructor(e=new Qn,t=new Ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Jl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Vu.fromBufferAttribute(h,e),o?Jl.addScaledVector(Vu,u):Jl.addScaledVector(Vu.sub(t),u))}t.add(Jl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(s),Ls.copy(e.ray).recast(e.near),!($l.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere($l,wp)===null||Ls.origin.distanceToSquared(wp)>(e.far-e.near)**2))&&(Tp.copy(s).invert(),Ls.copy(e.ray).applyMatrix4(Tp),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=v,b=x;S<b;S+=3){const w=a.getX(S),E=a.getX(S+1),R=a.getX(S+2);i=ec(this,p,e,n,c,u,h,w,E,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);i=ec(this,o,e,n,c,u,h,v,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=v,b=x;S<b;S+=3){const w=S,E=S+1,R=S+2;i=ec(this,p,e,n,c,u,h,w,E,R),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,S=m+2;i=ec(this,o,e,n,c,u,h,v,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function hx(r,e,t,n,i,s,o,a){let l;if(e.side===oi?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Xr,a),l===null)return null;Ql.copy(a),Ql.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ql);return c<t.near||c>t.far?null:{distance:c,point:Ql.clone(),object:r}}function ec(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,jl),r.getVertexPosition(l,Kl),r.getVertexPosition(c,Zl);const u=hx(r,e,t,n,jl,Kl,Zl,Ep);if(u){const h=new F;Zi.getBarycoord(Ep,jl,Kl,Zl,h),i&&(u.uv=Zi.getInterpolatedAttribute(i,a,l,c,h,new Ge)),s&&(u.uv1=Zi.getInterpolatedAttribute(s,a,l,c,h,new Ge)),o&&(u.normal=Zi.getInterpolatedAttribute(o,a,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};Zi.getNormal(jl,Kl,Zl,f.normal),u.face=f,u.barycoord=h}return u}class ys extends Qn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(h,2));function g(_,m,p,v,x,S,b,w,E,R,y){const T=S/E,C=b/R,L=S/2,N=b/2,B=w/2,V=E+1,z=R+1;let k=0,W=0;const Q=new F;for(let D=0;D<z;D++){const ie=D*C-N;for(let se=0;se<V;se++){const ue=se*T-L;Q[_]=ue*v,Q[m]=ie*x,Q[p]=B,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=w>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(se/E),h.push(1-D/R),k+=1}}for(let D=0;D<R;D++)for(let ie=0;ie<E;ie++){const se=f+ie+V*D,ue=f+ie+V*(D+1),pe=f+(ie+1)+V*(D+1),ce=f+(ie+1)+V*D;l.push(se,ue,ce),l.push(ue,pe,ce),W+=6}a.addGroup(d,W,y),d+=W,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function aa(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gn(r){const e={};for(let t=0;t<r.length;t++){const n=aa(r[t]);for(const i in n)e[i]=n[i]}return e}function fx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function qg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const dx={clone:aa,merge:Gn};var px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=px,this.fragmentShader=mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=fx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class hu extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=fr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new F,Ap=new Ge,Rp=new Ge;class un extends hu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,Ap,Rp),t.subVectors(Rp,Ap)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ja*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Co=-90,Po=1;class gx extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new un(Co,Po,e,t);i.layers=this.layers,this.add(i);const s=new un(Co,Po,e,t);s.layers=this.layers,this.add(s);const o=new un(Co,Po,e,t);o.layers=this.layers,this.add(o);const a=new un(Co,Po,e,t);a.layers=this.layers,this.add(a);const l=new un(Co,Po,e,t);l.layers=this.layers,this.add(l);const c=new un(Co,Po,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===fr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $g extends Mn{constructor(e=[],t=so,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jg extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $g(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ys(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:aa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:oi,blending:Hr});s.uniforms.tEquirect.value=t;const o=new wt(i,s),a=t.minFilter;return t.minFilter===kr&&(t.minFilter=fn),new gx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Ht extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _x={type:"move"};class Hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_x)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ho extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yr,this.environmentIntensity=1,this.environmentRotation=new yr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xf,this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new F;class dd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Xc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Zn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Cp=new F,Pp=new Bt,Lp=new Bt,xx=new F,Dp=new rt,tc=new F,Gu=new br,Ip=new rt,Wu=new Il;class yx extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sp,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ct),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tc),this.boundingBox.expandByPoint(tc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new br),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tc),this.boundingSphere.expandByPoint(tc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gu.copy(this.boundingSphere),Gu.applyMatrix4(i),e.ray.intersectsSphere(Gu)!==!1&&(Ip.copy(i).invert(),Wu.copy(e.ray).applyMatrix4(Ip),!(this.boundingBox!==null&&Wu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xv?this.bindMatrixInverse.copy(this.bindMatrix).invert():He("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Pp.fromBufferAttribute(i.attributes.skinIndex,e),Lp.fromBufferAttribute(i.attributes.skinWeight,e),Cp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Lp.getComponent(s);if(o!==0){const a=Pp.getComponent(s);Dp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(xx.copy(Cp).applyMatrix4(Dp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Kg extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pd extends Mn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=hn,u=hn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Np=new rt,Sx=new rt;class md{constructor(e=[],t=[]){this.uuid=Ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){He("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Sx;Np.multiplyMatrices(a,t[s]),Np.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new md(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new pd(t,e,e,zi,ki);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(He("Skeleton: No bone found with UUID:",s),o=new Kg),this.bones.push(o),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class yf extends Zn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Lo=new rt,Up=new rt,nc=[],Op=new Ct,Mx=new rt,Pa=new wt,La=new br;class bx extends wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Mx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ct),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Lo),Op.copy(e.boundingBox).applyMatrix4(Lo),this.boundingBox.union(Op)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new br),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Lo),La.copy(e.boundingSphere).applyMatrix4(Lo),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(n),e.ray.intersectsSphere(La)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Lo),Up.multiplyMatrices(n,Lo),Pa.matrixWorld=Up,Pa.raycast(e,nc);for(let o=0,a=nc.length;o<a;o++){const l=nc[o];l.instanceId=s,l.object=this,t.push(l)}nc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new pd(new Float32Array(i*this.count),i,this.count,rd,ki));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Xu=new F,Tx=new F,wx=new nt;class as{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xu.subVectors(n,t).cross(Tx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wx.getNormalMatrix(e),i=this.coplanarPoint(Xu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new br,Ex=new Ge(.5,.5),ic=new F;class gd{constructor(e=new as,t=new as,n=new as,i=new as,s=new as,o=new as){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fr,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],v=s[12],x=s[13],S=s[14],b=s[15];if(i[0].setComponents(c-o,d-u,p-g,b-v).normalize(),i[1].setComponents(c+o,d+u,p+g,b+v).normalize(),i[2].setComponents(c+a,d+h,p+_,b+x).normalize(),i[3].setComponents(c-a,d-h,p-_,b-x).normalize(),n)i[4].setComponents(l,f,m,S).normalize(),i[5].setComponents(c-l,d-f,p-m,b-S).normalize();else if(i[4].setComponents(c-l,d-f,p-m,b-S).normalize(),t===fr)i[5].setComponents(c+l,d+f,p+m,b+S).normalize();else if(t===Wc)i[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);const t=Ex.distanceTo(e.center);return Ds.radius=.7071067811865476+t,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ic.x=i.normal.x>0?e.max.x:e.min.x,ic.y=i.normal.y>0?e.max.y:e.min.y,ic.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zg extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yc=new F,qc=new F,Fp=new rt,Da=new Il,rc=new br,Yu=new F,Bp=new F;class _d extends Wt{constructor(e=new Qn,t=new Zg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Yc.fromBufferAttribute(t,i-1),qc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Yc.distanceTo(qc);e.setAttribute("lineDistance",new rn(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(i),rc.radius+=s,e.ray.intersectsSphere(rc)===!1)return;Fp.copy(i).invert(),Da.copy(e.ray).applyMatrix4(Fp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),v=u.getX(_+1),x=sc(this,e,Da,l,p,v,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=sc(this,e,Da,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=sc(this,e,Da,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=sc(this,e,Da,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sc(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Yc.fromBufferAttribute(a,i),qc.fromBufferAttribute(a,s),t.distanceSqToSegment(Yc,qc,Yu,Bp)>n)return;Yu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Yu);if(!(c<e.near||c>e.far))return{distance:c,point:Bp.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const kp=new F,zp=new F;class Ax extends _d{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)kp.fromBufferAttribute(t,i),zp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kp.distanceTo(zp);e.setAttribute("lineDistance",new rn(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rx extends _d{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Jg extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vp=new rt,Sf=new Il,oc=new br,ac=new F;class Cx extends Wt{constructor(e=new Qn,t=new Jg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oc.copy(n.boundingSphere),oc.applyMatrix4(i),oc.radius+=s,e.ray.intersectsSphere(oc)===!1)return;Vp.copy(i).invert(),Sf.copy(e.ray).applyMatrix4(Vp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);ac.fromBufferAttribute(h,m),Hp(ac,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)ac.fromBufferAttribute(h,g),Hp(ac,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Hp(r,e,t,n,i,s,o){const a=Sf.distanceSqToPoint(r);if(a<t){const l=new F;Sf.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Sl extends Mn{constructor(e,t,n=vr,i,s,o,a=hn,l=hn,c,u=qr,h=1){if(u!==qr&&u!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Px extends Sl{constructor(e,t=vr,n=so,i,s,o=hn,a=hn,l,c=qr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Qg extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $c extends Qn{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new rn(h,3)),this.setAttribute("normal",new rn(f,3)),this.setAttribute("uv",new rn(d,2));function v(){const S=new F,b=new F;let w=0;const E=(t-e)/n;for(let R=0;R<=s;R++){const y=[],T=R/s,C=T*(t-e)+e;for(let L=0;L<=i;L++){const N=L/i,B=N*l+a,V=Math.sin(B),z=Math.cos(B);b.x=C*V,b.y=-T*n+m,b.z=C*z,h.push(b.x,b.y,b.z),S.set(V,E,z).normalize(),f.push(S.x,S.y,S.z),d.push(N,1-T),y.push(g++)}_.push(y)}for(let R=0;R<i;R++)for(let y=0;y<s;y++){const T=_[y][R],C=_[y+1][R],L=_[y+1][R+1],N=_[y][R+1];(e>0||y!==0)&&(u.push(T,C,N),w+=3),(t>0||y!==s-1)&&(u.push(C,L,N),w+=3)}c.addGroup(p,w,0),p+=w}function x(S){const b=g,w=new Ge,E=new F;let R=0;const y=S===!0?e:t,T=S===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,m*T,0),f.push(0,T,0),d.push(.5,.5),g++;const C=g;for(let L=0;L<=i;L++){const B=L/i*l+a,V=Math.cos(B),z=Math.sin(B);E.x=y*z,E.y=m*T,E.z=y*V,h.push(E.x,E.y,E.z),f.push(0,T,0),w.x=V*.5+.5,w.y=z*.5*T+.5,d.push(w.x,w.y),g++}for(let L=0;L<i;L++){const N=b+L,B=C+L;S===!0?u.push(B,B+1,N):u.push(B+1,B,N),R+=3}c.addGroup(p,R,S===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vd extends Qn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new rn(s,3)),this.setAttribute("normal",new rn(s.slice(),3)),this.setAttribute("uv",new rn(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new F,S=new F,b=new F;for(let w=0;w<t.length;w+=3)d(t[w+0],x),d(t[w+1],S),d(t[w+2],b),l(x,S,b,v)}function l(v,x,S,b){const w=b+1,E=[];for(let R=0;R<=w;R++){E[R]=[];const y=v.clone().lerp(S,R/w),T=x.clone().lerp(S,R/w),C=w-R;for(let L=0;L<=C;L++)L===0&&R===w?E[R][L]=y:E[R][L]=y.clone().lerp(T,L/C)}for(let R=0;R<w;R++)for(let y=0;y<2*(w-R)-1;y++){const T=Math.floor(y/2);y%2===0?(f(E[R][T+1]),f(E[R+1][T]),f(E[R][T])):(f(E[R][T+1]),f(E[R+1][T+1]),f(E[R+1][T]))}}function c(v){const x=new F;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(v),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function u(){const v=new F;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const S=m(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;o.push(S,1-b)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const x=o[v+0],S=o[v+2],b=o[v+4],w=Math.max(x,S,b),E=Math.min(x,S,b);w>.9&&E<.1&&(x<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function d(v,x){const S=v*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function g(){const v=new F,x=new F,S=new F,b=new F,w=new Ge,E=new Ge,R=new Ge;for(let y=0,T=0;y<s.length;y+=9,T+=6){v.set(s[y+0],s[y+1],s[y+2]),x.set(s[y+3],s[y+4],s[y+5]),S.set(s[y+6],s[y+7],s[y+8]),w.set(o[T+0],o[T+1]),E.set(o[T+2],o[T+3]),R.set(o[T+4],o[T+5]),b.copy(v).add(x).add(S).divideScalar(3);const C=m(b);_(w,T+0,v,C),_(E,T+2,x,C),_(R,T+4,S,C)}}function _(v,x,S,b){b<0&&v.x===1&&(o[x]=v.x-1),S.x===0&&S.z===0&&(o[x]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vd(e.vertices,e.indices,e.radius,e.detail)}}class xd extends vd{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new xd(e.radius,e.detail)}}class Tr extends Qn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*f-o;for(let x=0;x<c;x++){const S=x*h-s;g.push(S,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+c*p,S=v+c*(p+1),b=v+1+c*(p+1),w=v+1+c*p;d.push(x,S,w),d.push(S,b,w)}this.setIndex(d),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(_,3)),this.setAttribute("uv",new rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.widthSegments,e.heightSegments)}}class yd extends Qn{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new F,h=new F,f=new F;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*s,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,v=(i+1)*d+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new rn(a,3)),this.setAttribute("normal",new rn(l,3)),this.setAttribute("uv",new rn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Lx extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Es extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wr extends Es{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Dx extends er{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Ix extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nx extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function lc(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ux(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function e_(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Nl{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ox extends Nl{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:op,endingEnd:op}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ap:s=e,a=2*t-n;break;case lp:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ap:o=e,l=2*n-t;break;case lp:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,S=d*m-d*_;for(let b=0;b!==a;++b)s[b]=p*o[u+b]+v*o[c+b]+x*o[l+b]+S*o[h+b];return s}}class Fx extends Nl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class Bx extends Nl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class tr{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lc(t,this.TimeBufferType),this.values=lc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lc(e.times,Array),values:lc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ox(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _l:t=this.InterpolantFactoryMethodDiscrete;break;case vl:t=this.InterpolantFactoryMethodLinear;break;case Su:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _l;case this.InterpolantFactoryMethodLinear:return vl;case this.InterpolantFactoryMethodSmooth:return Su}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ke("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Pv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Su,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}tr.prototype.ValueTypeName="";tr.prototype.TimeBufferType=Float32Array;tr.prototype.ValueBufferType=Float32Array;tr.prototype.DefaultInterpolation=vl;class Sa extends tr{constructor(e,t,n){super(e,t,n)}}Sa.prototype.ValueTypeName="bool";Sa.prototype.ValueBufferType=Array;Sa.prototype.DefaultInterpolation=_l;Sa.prototype.InterpolantFactoryMethodLinear=void 0;Sa.prototype.InterpolantFactoryMethodSmooth=void 0;class t_ extends tr{constructor(e,t,n,i){super(e,t,n,i)}}t_.prototype.ValueTypeName="color";class la extends tr{constructor(e,t,n,i){super(e,t,n,i)}}la.prototype.ValueTypeName="number";class kx extends Nl{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)xr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ca extends tr{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new kx(this.times,this.values,this.getValueSize(),e)}}ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;class Ma extends tr{constructor(e,t,n){super(e,t,n)}}Ma.prototype.ValueTypeName="string";Ma.prototype.ValueBufferType=Array;Ma.prototype.DefaultInterpolation=_l;Ma.prototype.InterpolantFactoryMethodLinear=void 0;Ma.prototype.InterpolantFactoryMethodSmooth=void 0;class ua extends tr{constructor(e,t,n,i){super(e,t,n,i)}}ua.prototype.ValueTypeName="vector";class zx{constructor(e="",t=-1,n=[],i=yv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ji(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Hx(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(tr.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Ux(l);l=Gp(l,1,u),c=Gp(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new la(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(He("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ke("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];e_(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){const x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new la(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(ua,d+".position",f,"pos",i),n(ca,d+".quaternion",f,"rot",i),n(ua,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Vx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return la;case"vector":case"vector2":case"vector3":case"vector4":return ua;case"color":return t_;case"quaternion":return ca;case"bool":case"boolean":return Sa;case"string":return Ma}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Hx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Vx(r.type);if(r.times===void 0){const t=[],n=[];e_(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const zr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Gx{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Wx=new Gx;class ba{constructor(e){this.manager=e!==void 0?e:Wx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ba.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ir={};class Xx extends Error{constructor(e,t){super(e),this.response=t}}class n_ extends ba{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=zr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ir[e]!==void 0){Ir[e].push({onLoad:t,onProgress:n,onError:i});return}Ir[e]=[],Ir[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&He("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ir[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:x,value:S})=>{if(x)p.close();else{_+=S.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,E=u.length;w<E;w++){const R=u[w];R.onProgress&&R.onProgress(b)}p.enqueue(S),v()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Xx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{zr.add(`file:${e}`,c);const u=Ir[e];delete Ir[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ir[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ir[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Do=new WeakMap;class Yx extends ba{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=zr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Do.get(o);h===void 0&&(h=[],Do.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=xl("img");function l(){u(),t&&t(this);const h=Do.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Do.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),zr.remove(`image:${e}`);const f=Do.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}Do.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),zr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class qx extends ba{constructor(e){super(e)}load(e,t,n,i){const s=new Mn,o=new Yx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class fu extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const qu=new rt,Wp=new F,Xp=new F;class Sd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gd,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wp),Xp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xp),t.updateMatrixWorld(),qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $x extends Sd{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=oa*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jx extends fu{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new $x}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Kx extends Sd{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class Zx extends fu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class du extends hu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jx extends Sd{constructor(){super(new du(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ai extends fu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Jx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ul extends fu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class el{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const $u=new WeakMap;class Qx extends ba{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&He("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&He("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=zr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if($u.has(o)===!0)i&&i($u.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return zr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),$u.set(l,c),zr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});zr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ey extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class fo{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Md="\\[\\]\\.:\\/",ty=new RegExp("["+Md+"]","g"),bd="[^"+Md+"]",ny="[^"+Md.replace("\\.","")+"]",iy=/((?:WC+[\/:])*)/.source.replace("WC",bd),ry=/(WCOD+)?/.source.replace("WCOD",ny),sy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bd),oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bd),ay=new RegExp("^"+iy+ry+sy+oy+"$"),ly=["material","materials","bones","map"];class cy{constructor(e,t,n){const i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ty,"")}static parseTrackName(e){const t=ay.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);ly.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=cy;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yp{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uy extends uo{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){He("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function qp(r,e,t,n){const i=hy(n);switch(t){case Bg:return r*e;case rd:return r*e/i.components*i.byteLength;case sd:return r*e/i.components*i.byteLength;case sa:return r*e*2/i.components*i.byteLength;case od:return r*e*2/i.components*i.byteLength;case kg:return r*e*3/i.components*i.byteLength;case zi:return r*e*4/i.components*i.byteLength;case ad:return r*e*4/i.components*i.byteLength;case Rc:case Cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Lc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zh:case Hh:return Math.max(r,16)*Math.max(e,8)/4;case kh:case Vh:return Math.max(r,8)*Math.max(e,8)/2;case Gh:case Wh:case Yh:case qh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xh:case $h:case jh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ef:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case tf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case nf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case rf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case sf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case of:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case af:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case lf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case cf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case uf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case hf:case ff:case df:return Math.ceil(r/4)*Math.ceil(e/4)*16;case pf:case mf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case gf:case _f:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hy(r){switch(r){case bi:case Ng:return{byteLength:1,components:1};case ml:case Ug:case Yr:return{byteLength:2,components:1};case nd:case id:return{byteLength:2,components:4};case vr:case td:case ki:return{byteLength:4,components:1};case Og:case Fg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ed}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ed);function i_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function fy(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var dy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,py=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,My=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,by=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ey=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ay=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,By=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_S=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,MS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ES=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,LS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,US=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$S=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,WM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:dy,alphahash_pars_fragment:py,alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:_y,alphatest_pars_fragment:vy,aomap_fragment:xy,aomap_pars_fragment:yy,batching_pars_vertex:Sy,batching_vertex:My,begin_vertex:by,beginnormal_vertex:Ty,bsdfs:wy,iridescence_fragment:Ey,bumpmap_pars_fragment:Ay,clipping_planes_fragment:Ry,clipping_planes_pars_fragment:Cy,clipping_planes_pars_vertex:Py,clipping_planes_vertex:Ly,color_fragment:Dy,color_pars_fragment:Iy,color_pars_vertex:Ny,color_vertex:Uy,common:Oy,cube_uv_reflection_fragment:Fy,defaultnormal_vertex:By,displacementmap_pars_vertex:ky,displacementmap_vertex:zy,emissivemap_fragment:Vy,emissivemap_pars_fragment:Hy,colorspace_fragment:Gy,colorspace_pars_fragment:Wy,envmap_fragment:Xy,envmap_common_pars_fragment:Yy,envmap_pars_fragment:qy,envmap_pars_vertex:$y,envmap_physical_pars_fragment:sS,envmap_vertex:jy,fog_vertex:Ky,fog_pars_vertex:Zy,fog_fragment:Jy,fog_pars_fragment:Qy,gradientmap_pars_fragment:eS,lightmap_pars_fragment:tS,lights_lambert_fragment:nS,lights_lambert_pars_fragment:iS,lights_pars_begin:rS,lights_toon_fragment:oS,lights_toon_pars_fragment:aS,lights_phong_fragment:lS,lights_phong_pars_fragment:cS,lights_physical_fragment:uS,lights_physical_pars_fragment:hS,lights_fragment_begin:fS,lights_fragment_maps:dS,lights_fragment_end:pS,logdepthbuf_fragment:mS,logdepthbuf_pars_fragment:gS,logdepthbuf_pars_vertex:_S,logdepthbuf_vertex:vS,map_fragment:xS,map_pars_fragment:yS,map_particle_fragment:SS,map_particle_pars_fragment:MS,metalnessmap_fragment:bS,metalnessmap_pars_fragment:TS,morphinstance_vertex:wS,morphcolor_vertex:ES,morphnormal_vertex:AS,morphtarget_pars_vertex:RS,morphtarget_vertex:CS,normal_fragment_begin:PS,normal_fragment_maps:LS,normal_pars_fragment:DS,normal_pars_vertex:IS,normal_vertex:NS,normalmap_pars_fragment:US,clearcoat_normal_fragment_begin:OS,clearcoat_normal_fragment_maps:FS,clearcoat_pars_fragment:BS,iridescence_pars_fragment:kS,opaque_fragment:zS,packing:VS,premultiplied_alpha_fragment:HS,project_vertex:GS,dithering_fragment:WS,dithering_pars_fragment:XS,roughnessmap_fragment:YS,roughnessmap_pars_fragment:qS,shadowmap_pars_fragment:$S,shadowmap_pars_vertex:jS,shadowmap_vertex:KS,shadowmask_pars_fragment:ZS,skinbase_vertex:JS,skinning_pars_vertex:QS,skinning_vertex:eM,skinnormal_vertex:tM,specularmap_fragment:nM,specularmap_pars_fragment:iM,tonemapping_fragment:rM,tonemapping_pars_fragment:sM,transmission_fragment:oM,transmission_pars_fragment:aM,uv_pars_fragment:lM,uv_pars_vertex:cM,uv_vertex:uM,worldpos_vertex:hM,background_vert:fM,background_frag:dM,backgroundCube_vert:pM,backgroundCube_frag:mM,cube_vert:gM,cube_frag:_M,depth_vert:vM,depth_frag:xM,distance_vert:yM,distance_frag:SM,equirect_vert:MM,equirect_frag:bM,linedashed_vert:TM,linedashed_frag:wM,meshbasic_vert:EM,meshbasic_frag:AM,meshlambert_vert:RM,meshlambert_frag:CM,meshmatcap_vert:PM,meshmatcap_frag:LM,meshnormal_vert:DM,meshnormal_frag:IM,meshphong_vert:NM,meshphong_frag:UM,meshphysical_vert:OM,meshphysical_frag:FM,meshtoon_vert:BM,meshtoon_frag:kM,points_vert:zM,points_frag:VM,shadow_vert:HM,shadow_frag:GM,sprite_vert:WM,sprite_frag:XM},Re={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},lr={basic:{uniforms:Gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Gn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Gn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Gn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Gn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Gn([Re.points,Re.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Gn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Gn([Re.common,Re.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Gn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Gn([Re.sprite,Re.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Gn([Re.common,Re.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Gn([Re.lights,Re.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};lr.physical={uniforms:Gn([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const cc={r:0,b:0,g:0},Is=new yr,YM=new rt;function qM(r,e,t,n,i,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?t:e).get(S)),S}function _(x){let S=!1;const b=g(x);b===null?p(a,l):b&&b.isColor&&(p(b,1),S=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,S){const b=g(S);b&&(b.isCubeTexture||b.mapping===uu)?(u===void 0&&(u=new wt(new ys(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:aa(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Is.copy(S.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(YM.makeRotationFromEuler(Is)),u.material.toneMapped=dt.getTransfer(b.colorSpace)!==Mt,(h!==b||f!==b.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new wt(new Tr(2,2),new Cn({name:"BackgroundMaterial",uniforms:aa(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=dt.getTransfer(b.colorSpace)!==Mt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,S){x.getRGB(cc,qg(r)),n.buffers.color.setClear(cc.r,cc.g,cc.b,S,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m,dispose:v}}function $M(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(T,C,L,N,B){let V=!1;const z=h(N,L,C);s!==z&&(s=z,c(s.object)),V=d(T,N,L,B),V&&g(T,N,L,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,S(T,C,L,N),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(T){return r.bindVertexArray(T)}function u(T){return r.deleteVertexArray(T)}function h(T,C,L){const N=L.wireframe===!0;let B=n[T.id];B===void 0&&(B={},n[T.id]=B);let V=B[C.id];V===void 0&&(V={},B[C.id]=V);let z=V[N];return z===void 0&&(z=f(l()),V[N]=z),z}function f(T){const C=[],L=[],N=[];for(let B=0;B<t;B++)C[B]=0,L[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:N,object:T,attributes:{},index:null}}function d(T,C,L,N){const B=s.attributes,V=C.attributes;let z=0;const k=L.getAttributes();for(const W in k)if(k[W].location>=0){const D=B[W];let ie=V[W];if(ie===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(ie=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(ie=T.instanceColor)),D===void 0||D.attribute!==ie||ie&&D.data!==ie.data)return!0;z++}return s.attributesNum!==z||s.index!==N}function g(T,C,L,N){const B={},V=C.attributes;let z=0;const k=L.getAttributes();for(const W in k)if(k[W].location>=0){let D=V[W];D===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(D=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(D=T.instanceColor));const ie={};ie.attribute=D,D&&D.data&&(ie.data=D.data),B[W]=ie,z++}s.attributes=B,s.attributesNum=z,s.index=N}function _(){const T=s.newAttributes;for(let C=0,L=T.length;C<L;C++)T[C]=0}function m(T){p(T,0)}function p(T,C){const L=s.newAttributes,N=s.enabledAttributes,B=s.attributeDivisors;L[T]=1,N[T]===0&&(r.enableVertexAttribArray(T),N[T]=1),B[T]!==C&&(r.vertexAttribDivisor(T,C),B[T]=C)}function v(){const T=s.newAttributes,C=s.enabledAttributes;for(let L=0,N=C.length;L<N;L++)C[L]!==T[L]&&(r.disableVertexAttribArray(L),C[L]=0)}function x(T,C,L,N,B,V,z){z===!0?r.vertexAttribIPointer(T,C,L,B,V):r.vertexAttribPointer(T,C,L,N,B,V)}function S(T,C,L,N){_();const B=N.attributes,V=L.getAttributes(),z=C.defaultAttributeValues;for(const k in V){const W=V[k];if(W.location>=0){let Q=B[k];if(Q===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor)),Q!==void 0){const D=Q.normalized,ie=Q.itemSize,se=e.get(Q);if(se===void 0)continue;const ue=se.buffer,pe=se.type,ce=se.bytesPerElement,$=pe===r.INT||pe===r.UNSIGNED_INT||Q.gpuType===td;if(Q.isInterleavedBufferAttribute){const K=Q.data,he=K.stride,Ee=Q.offset;if(K.isInstancedInterleavedBuffer){for(let te=0;te<W.locationSize;te++)p(W.location+te,K.meshPerAttribute);T.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let te=0;te<W.locationSize;te++)m(W.location+te);r.bindBuffer(r.ARRAY_BUFFER,ue);for(let te=0;te<W.locationSize;te++)x(W.location+te,ie/W.locationSize,pe,D,he*ce,(Ee+ie/W.locationSize*te)*ce,$)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<W.locationSize;K++)p(W.location+K,Q.meshPerAttribute);T.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<W.locationSize;K++)m(W.location+K);r.bindBuffer(r.ARRAY_BUFFER,ue);for(let K=0;K<W.locationSize;K++)x(W.location+K,ie/W.locationSize,pe,D,ie*ce,ie/W.locationSize*K*ce,$)}}else if(z!==void 0){const D=z[k];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(W.location,D);break;case 3:r.vertexAttrib3fv(W.location,D);break;case 4:r.vertexAttrib4fv(W.location,D);break;default:r.vertexAttrib1fv(W.location,D)}}}}v()}function b(){R();for(const T in n){const C=n[T];for(const L in C){const N=C[L];for(const B in N)u(N[B].object),delete N[B];delete C[L]}delete n[T]}}function w(T){if(n[T.id]===void 0)return;const C=n[T.id];for(const L in C){const N=C[L];for(const B in N)u(N[B].object),delete N[B];delete C[L]}delete n[T.id]}function E(T){for(const C in n){const L=n[C];if(L[T.id]===void 0)continue;const N=L[T.id];for(const B in N)u(N[B].object),delete N[B];delete L[T.id]}}function R(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function jM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function KM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==zi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===Yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==bi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ki&&!R)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,maxSamples:b,samples:w}}function ZM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new as,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,x=v*4;let S=p.clippingState||null;l.value=S,S=u(g,f,x,d);for(let b=0;b!==x;++b)S[b]=t[b];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=d;x!==_;++x,S+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function JM(r){let e=new WeakMap;function t(o,a){return a===Fh?o.mapping=so:a===Bh&&(o.mapping=ia),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fh||a===Bh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jg(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const cs=4,$p=[.125,.215,.35,.446,.526,.582],Ws=20,QM=256,Ia=new du,jp=new Ze;let ju=null,Ku=0,Zu=0,Ju=!1;const eb=new F;class Kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=eb}=s;ju=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,Ku,Zu),this._renderer.xr.enabled=Ju,e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===so||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Yr,format:zi,colorSpace:Jn,depthBuffer:!1},i=Zp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zp(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tb(s)),this._blurMaterial=ib(s,e,t),this._ggxMaterial=nb(s,e,t)}return i}_compileMaterial(e){const t=new wt(new Qn,e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,n,i,s){const l=new un(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(jp),h.toneMapping=mr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wt(new ys,new Ys({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(jp),p=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const b=this._cubeSize;Io(i,S*b,x>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(_,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===so||e.mapping===ia;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Io(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-cs?n-g+cs:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Io(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(a,Ia),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Io(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(a,Ia)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ws-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ws;m>Ws&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ws}`);const p=[];let v=0;for(let E=0;E<Ws;++E){const R=E/_,y=Math.exp(-R*R/2);p.push(y),E===0?v+=y:E<m&&(v+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const S=this._sizeLods[i],b=3*S*(i>x-cs?i-x+cs:0),w=4*(this._cubeSize-S);Io(t,b,w,3*S,2*S),l.setRenderTarget(t),l.render(h,Ia)}}function tb(r){const e=[],t=[],n=[];let i=r;const s=r-cs+1+$p.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-cs?l=$p[o-r+cs-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),x=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,R=w>2?0:-1,y=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];v.set(y,_*g*w),x.set(f,m*g*w);const T=[w,w,w,w,w,w];S.set(T,p*g*w)}const b=new Qn;b.setAttribute("position",new Zn(v,_)),b.setAttribute("uv",new Zn(x,m)),b.setAttribute("faceIndex",new Zn(S,p)),n.push(new wt(b,null)),i>cs&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Zp(r,e,t){const n=new An(r,e,t);return n.texture.mapping=uu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Io(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function nb(r,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function ib(r,e,t){const n=new Float32Array(Ws),i=new F(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function Jp(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function Qp(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rb(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fh||l===Bh,u=l===so||l===ia;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Kp(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Kp(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&yl("WebGLRenderer: "+n+" extension not supported."),i}}}function ob(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let x=0,S=v.length;x<S;x+=3){const b=v[x+0],w=v[x+1],E=v[x+2];f.push(b,w,w,E,E,b)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const b=x+0,w=x+1,E=x+2;f.push(b,w,w,E,E,b)}}else return;const m=new(Vg(f)?Yg:Xg)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ab(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function lb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cb(r,e,t){const n=new WeakMap,i=new Bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let y=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let S=a.attributes.position.count*x,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*b*4*h),E=new Hg(w,S,b,h);E.type=ki,E.needsUpdate=!0;const R=x*4;for(let T=0;T<h;T++){const C=m[T],L=p[T],N=v[T],B=S*b*4*T;for(let V=0;V<C.count;V++){const z=V*R;d===!0&&(i.fromBufferAttribute(C,V),w[B+z+0]=i.x,w[B+z+1]=i.y,w[B+z+2]=i.z,w[B+z+3]=0),g===!0&&(i.fromBufferAttribute(L,V),w[B+z+4]=i.x,w[B+z+5]=i.y,w[B+z+6]=i.z,w[B+z+7]=0),_===!0&&(i.fromBufferAttribute(N,V),w[B+z+8]=i.x,w[B+z+9]=i.y,w[B+z+10]=i.z,w[B+z+11]=N.itemSize===4?i.w:1)}}f={count:h,texture:E,size:new Ge(S,b)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function ub(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const hb={[wg]:"LINEAR_TONE_MAPPING",[Eg]:"REINHARD_TONE_MAPPING",[Ag]:"CINEON_TONE_MAPPING",[Rg]:"ACES_FILMIC_TONE_MAPPING",[Pg]:"AGX_TONE_MAPPING",[Lg]:"NEUTRAL_TONE_MAPPING",[Cg]:"CUSTOM_TONE_MAPPING"};function fb(r,e,t,n,i){const s=new An(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new An(e,t,{type:Yr,depthBuffer:!1,stencilBuffer:!1}),a=new Qn;a.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new rn([0,2,0,0,2,0],2));const l=new Lx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new wt(a,l),u=new du(-1,1,1,-1,0,1);let h=null,f=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(v,x){s.setSize(v,x),o.setSize(v,x);for(let S=0;S<m.length;S++){const b=m[S];b.setSize&&b.setSize(v,x)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const x=s.width,S=s.height;for(let b=0;b<m.length;b++){const w=m[b];w.setSize&&w.setSize(x,S)}},this.begin=function(v,x){if(d||v.toneMapping===mr&&m.length===0)return!1;if(_=x,x!==null){const S=x.width,b=x.height;(s.width!==S||s.height!==b)&&this.setSize(S,b)}return p===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=mr,!0},this.hasRenderPass=function(){return p},this.end=function(v,x){v.toneMapping=g,d=!0;let S=s,b=o;for(let w=0;w<m.length;w++){const E=m[w];if(E.enabled!==!1&&(E.render(v,b,S,x),E.needsSwap!==!1)){const R=S;S=b,b=R}}if(h!==v.outputColorSpace||f!==v.toneMapping){h=v.outputColorSpace,f=v.toneMapping,l.defines={},dt.getTransfer(h)===Mt&&(l.defines.SRGB_TRANSFER="");const w=hb[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(_),v.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const r_=new Mn,Mf=new Sl(1,1),s_=new Hg,o_=new ex,a_=new $g,em=[],tm=[],nm=new Float32Array(16),im=new Float32Array(9),rm=new Float32Array(4);function Ta(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=em[i];if(s===void 0&&(s=new Float32Array(i),em[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function dn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function pn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function mu(r,e){let t=tm[e];t===void 0&&(t=new Int32Array(e),tm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function db(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function pb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2fv(this.addr,e),pn(t,e)}}function mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;r.uniform3fv(this.addr,e),pn(t,e)}}function gb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4fv(this.addr,e),pn(t,e)}}function _b(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,n))return;rm.set(n),r.uniformMatrix2fv(this.addr,!1,rm),pn(t,n)}}function vb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,n))return;im.set(n),r.uniformMatrix3fv(this.addr,!1,im),pn(t,n)}}function xb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,n))return;nm.set(n),r.uniformMatrix4fv(this.addr,!1,nm),pn(t,n)}}function yb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Sb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2iv(this.addr,e),pn(t,e)}}function Mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3iv(this.addr,e),pn(t,e)}}function bb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4iv(this.addr,e),pn(t,e)}}function Tb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function wb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2uiv(this.addr,e),pn(t,e)}}function Eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3uiv(this.addr,e),pn(t,e)}}function Ab(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4uiv(this.addr,e),pn(t,e)}}function Rb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Mf.compareFunction=t.isReversedDepthBuffer()?ud:cd,s=Mf):s=r_,t.setTexture2D(e||s,i)}function Cb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||o_,i)}function Pb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||a_,i)}function Lb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||s_,i)}function Db(r){switch(r){case 5126:return db;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return _b;case 35675:return vb;case 35676:return xb;case 5124:case 35670:return yb;case 35667:case 35671:return Sb;case 35668:case 35672:return Mb;case 35669:case 35673:return bb;case 5125:return Tb;case 36294:return wb;case 36295:return Eb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Lb}}function Ib(r,e){r.uniform1fv(this.addr,e)}function Nb(r,e){const t=Ta(e,this.size,2);r.uniform2fv(this.addr,t)}function Ub(r,e){const t=Ta(e,this.size,3);r.uniform3fv(this.addr,t)}function Ob(r,e){const t=Ta(e,this.size,4);r.uniform4fv(this.addr,t)}function Fb(r,e){const t=Ta(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Bb(r,e){const t=Ta(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function kb(r,e){const t=Ta(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function zb(r,e){r.uniform1iv(this.addr,e)}function Vb(r,e){r.uniform2iv(this.addr,e)}function Hb(r,e){r.uniform3iv(this.addr,e)}function Gb(r,e){r.uniform4iv(this.addr,e)}function Wb(r,e){r.uniform1uiv(this.addr,e)}function Xb(r,e){r.uniform2uiv(this.addr,e)}function Yb(r,e){r.uniform3uiv(this.addr,e)}function qb(r,e){r.uniform4uiv(this.addr,e)}function $b(r,e,t){const n=this.cache,i=e.length,s=mu(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Mf:o=r_;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function jb(r,e,t){const n=this.cache,i=e.length,s=mu(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||o_,s[o])}function Kb(r,e,t){const n=this.cache,i=e.length,s=mu(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a_,s[o])}function Zb(r,e,t){const n=this.cache,i=e.length,s=mu(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||s_,s[o])}function Jb(r){switch(r){case 5126:return Ib;case 35664:return Nb;case 35665:return Ub;case 35666:return Ob;case 35674:return Fb;case 35675:return Bb;case 35676:return kb;case 5124:case 35670:return zb;case 35667:case 35671:return Vb;case 35668:case 35672:return Hb;case 35669:case 35673:return Gb;case 5125:return Wb;case 36294:return Xb;case 36295:return Yb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return jb;case 35680:case 36300:case 36308:case 36293:return Kb;case 36289:case 36303:case 36311:case 36292:return Zb}}class Qb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Db(t.type)}}class eT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jb(t.type)}}class tT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Qu=/(\w+)(\])?(\[|\.)?/g;function sm(r,e){r.seq.push(e),r.map[e.id]=e}function nT(r,e,t){const n=r.name,i=n.length;for(Qu.lastIndex=0;;){const s=Qu.exec(n),o=Qu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){sm(t,c===void 0?new Qb(a,r,e):new eT(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new tT(a),sm(t,h)),t=h}}}class Dc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);nT(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function om(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const iT=37297;let rT=0;function sT(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const am=new nt;function oT(r){dt._getMatrix(am,dt.workingColorSpace,r);const e=`mat3( ${am.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(r)){case Gc:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function lm(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+sT(r.getShaderSource(e),a)}else return s}function aT(r,e){const t=oT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lT={[wg]:"Linear",[Eg]:"Reinhard",[Ag]:"Cineon",[Rg]:"ACESFilmic",[Pg]:"AgX",[Lg]:"Neutral",[Cg]:"Custom"};function cT(r,e){const t=lT[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uc=new F;function uT(){dt.getLuminanceCoefficients(uc);const r=uc.x.toFixed(4),e=uc.y.toFixed(4),t=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function fT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ga(r){return r!==""}function cm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function um(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pT=/^[ \t]*#include +<([\w\d./]+)>/gm;function bf(r){return r.replace(pT,gT)}const mT=new Map;function gT(r,e){let t=it[e];if(t===void 0){const n=mT.get(e);if(n!==void 0)t=it[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bf(t)}const _T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hm(r){return r.replace(_T,vT)}function vT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function fm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xT={[Ec]:"SHADOWMAP_TYPE_PCF",[Va]:"SHADOWMAP_TYPE_VSM"};function yT(r){return xT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ST={[so]:"ENVMAP_TYPE_CUBE",[ia]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function MT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":ST[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const bT={[ia]:"ENVMAP_MODE_REFRACTION"};function TT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":bT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wT={[Tg]:"ENVMAP_BLENDING_MULTIPLY",[_v]:"ENVMAP_BLENDING_MIX",[vv]:"ENVMAP_BLENDING_ADD"};function ET(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":wT[r.combine]||"ENVMAP_BLENDING_NONE"}function AT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function RT(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=yT(t),c=MT(t),u=TT(t),h=ET(t),f=AT(t),d=hT(t),g=fT(s),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ga).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ga).join(`
`),p.length>0&&(p+=`
`)):(m=[fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),p=[fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?it.tonemapping_pars_fragment:"",t.toneMapping!==mr?cT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,aT("linearToOutputTexel",t.outputColorSpace),uT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),o=bf(o),o=cm(o,t),o=um(o,t),a=bf(a),a=cm(a,t),a=um(a,t),o=hm(o),a=hm(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===up?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,S=v+p+a,b=om(i,i.VERTEX_SHADER,x),w=om(i,i.FRAGMENT_SHADER,S);i.attachShader(_,b),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(C){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(_)||"",N=i.getShaderInfoLog(b)||"",B=i.getShaderInfoLog(w)||"",V=L.trim(),z=N.trim(),k=B.trim();let W=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,w);else{const D=lm(i,b,"vertex"),ie=lm(i,w,"fragment");Ke("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+D+`
`+ie)}else V!==""?He("WebGLProgram: Program Info Log:",V):(z===""||k==="")&&(Q=!1);Q&&(C.diagnostics={runnable:W,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(b),i.deleteShader(w),R=new Dc(i,_),y=dT(i,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(_,iT)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let CT=0;class PT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new LT(e),t.set(e,n)),n}}class LT{constructor(e){this.id=CT++,this.code=e,this.usedTimes=0}}function DT(r,e,t,n,i,s,o){const a=new Gg,l=new PT,c=new Set,u=[],h=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,T,C,L,N){const B=L.fog,V=N.geometry,z=y.isMeshStandardMaterial?L.environment:null,k=(y.isMeshStandardMaterial?t:e).get(y.envMap||z),W=k&&k.mapping===uu?k.image.height:null,Q=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&He("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const D=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ie=D!==void 0?D.length:0;let se=0;V.morphAttributes.position!==void 0&&(se=1),V.morphAttributes.normal!==void 0&&(se=2),V.morphAttributes.color!==void 0&&(se=3);let ue,pe,ce,$;if(Q){const Pe=lr[Q];ue=Pe.vertexShader,pe=Pe.fragmentShader}else ue=y.vertexShader,pe=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),$=l.getFragmentShaderID(y);const K=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),Ee=N.isInstancedMesh===!0,te=N.isBatchedMesh===!0,ze=!!y.map,Je=!!y.matcap,we=!!k,Ne=!!y.aoMap,xe=!!y.lightMap,Fe=!!y.bumpMap,X=!!y.normalMap,O=!!y.displacementMap,Oe=!!y.emissiveMap,Ie=!!y.metalnessMap,ke=!!y.roughnessMap,Se=y.anisotropy>0,P=y.clearcoat>0,M=y.dispersion>0,I=y.iridescence>0,Y=y.sheen>0,Z=y.transmission>0,q=Se&&!!y.anisotropyMap,fe=P&&!!y.clearcoatMap,le=P&&!!y.clearcoatNormalMap,ye=P&&!!y.clearcoatRoughnessMap,de=I&&!!y.iridescenceMap,ee=I&&!!y.iridescenceThicknessMap,oe=Y&&!!y.sheenColorMap,be=Y&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,me=!!y.specularColorMap,$e=!!y.specularIntensityMap,U=Z&&!!y.transmissionMap,ge=Z&&!!y.thicknessMap,ae=!!y.gradientMap,Me=!!y.alphaMap,re=y.alphaTest>0,ne=!!y.alphaHash,ve=!!y.extensions;let Xe=mr;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Xe=r.toneMapping);const mt={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:ue,fragmentShader:pe,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:te,batchingColor:te&&N._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&N.instanceColor!==null,instancingMorph:Ee&&N.morphTexture!==null,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Jn,alphaToCoverage:!!y.alphaToCoverage,map:ze,matcap:Je,envMap:we,envMapMode:we&&k.mapping,envMapCubeUVHeight:W,aoMap:Ne,lightMap:xe,bumpMap:Fe,normalMap:X,displacementMap:O,emissiveMap:Oe,normalMapObjectSpace:X&&y.normalMapType===bv,normalMapTangentSpace:X&&y.normalMapType===ld,metalnessMap:Ie,roughnessMap:ke,anisotropy:Se,anisotropyMap:q,clearcoat:P,clearcoatMap:fe,clearcoatNormalMap:le,clearcoatRoughnessMap:ye,dispersion:M,iridescence:I,iridescenceMap:de,iridescenceThicknessMap:ee,sheen:Y,sheenColorMap:oe,sheenRoughnessMap:be,specularMap:Ce,specularColorMap:me,specularIntensityMap:$e,transmission:Z,transmissionMap:U,thicknessMap:ge,gradientMap:ae,opaque:y.transparent===!1&&y.blending===Yo&&y.alphaToCoverage===!1,alphaMap:Me,alphaTest:re,alphaHash:ne,combine:y.combine,mapUv:ze&&_(y.map.channel),aoMapUv:Ne&&_(y.aoMap.channel),lightMapUv:xe&&_(y.lightMap.channel),bumpMapUv:Fe&&_(y.bumpMap.channel),normalMapUv:X&&_(y.normalMap.channel),displacementMapUv:O&&_(y.displacementMap.channel),emissiveMapUv:Oe&&_(y.emissiveMap.channel),metalnessMapUv:Ie&&_(y.metalnessMap.channel),roughnessMapUv:ke&&_(y.roughnessMap.channel),anisotropyMapUv:q&&_(y.anisotropyMap.channel),clearcoatMapUv:fe&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(y.sheenRoughnessMap.channel),specularMapUv:Ce&&_(y.specularMap.channel),specularColorMapUv:me&&_(y.specularColorMap.channel),specularIntensityMapUv:$e&&_(y.specularIntensityMap.channel),transmissionMapUv:U&&_(y.transmissionMap.channel),thicknessMapUv:ge&&_(y.thicknessMap.channel),alphaMapUv:Me&&_(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(X||Se),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(ze||Me),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ze&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===Mt,decodeVideoTextureEmissive:Oe&&y.emissiveMap.isVideoTexture===!0&&dt.getTransfer(y.emissiveMap.colorSpace)===Mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cr,flipSided:y.side===oi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ve&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&y.extensions.multiDraw===!0||te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)T.push(C),T.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(v(T,y),x(T,y),T.push(r.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function v(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function x(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){const T=g[y.type];let C;if(T){const L=lr[T];C=dx.clone(L.uniforms)}else C=y.uniforms;return C}function b(y,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new RT(r,T,y,s),u.push(C),h.set(T,C)),C}function w(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:b,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:R}}function IT(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function NT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function dm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function pm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||NT),n.length>1&&n.sort(f||dm),i.length>1&&i.sort(f||dm)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function UT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new pm,r.set(n,[o])):i>=s.length?(o=new pm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function OT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ze};break;case"SpotLight":t={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function FT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let BT=0;function kT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function zT(r){const e=new OT,t=FT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,s=new rt,o=new rt;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,x=0,S=0,b=0,w=0,E=0;c.sort(kT);for(let y=0,T=c.length;y<T;y++){const C=c[y],L=C.color,N=C.intensity,B=C.distance;let V=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===sa?V=C.shadow.map.texture:V=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=L.r*N,h+=L.g*N,f+=L.b*N;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],N);E++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const k=C.shadow,W=t.get(C);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=C.shadow.matrix,v++}n.directional[d]=z,d++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(L).multiplyScalar(N),z.distance=B,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[_]=z;const k=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,k.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=k.matrix,C.castShadow){const W=t.get(C);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=V,S++}_++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(L).multiplyScalar(N),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=z,m++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const k=C.shadow,W=t.get(C);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=C.shadow.matrix,x++}n.point[g]=z,g++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(N),z.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[p]=z,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==b||R.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=b,R.numLightProbes=E,n.version=BT++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const x=c[p];if(x.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function mm(r){const e=new zT(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function VT(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new mm(r),e.set(i,[a])):s>=o.length?(a=new mm(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const HT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,WT=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],XT=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],gm=new rt,Na=new F,eh=new F;function YT(r,e,t){let n=new gd;const i=new Ge,s=new Ge,o=new Bt,a=new Ix,l=new Nx,c={},u=t.maxTextureSize,h={[Xr]:oi,[oi]:Xr,[cr]:cr},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:HT,fragmentShader:GT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Qn;g.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let p=this.type;this.render=function(w,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===bg&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=Ec);const y=r.getRenderTarget(),T=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Hr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=p!==this.type;N&&E.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(V=>V.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,V=w.length;B<V;B++){const z=w[B],k=z.shadow;if(k===void 0){He("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const W=k.getFrameExtents();if(i.multiply(W),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/W.x),i.x=s.x*W.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/W.y),i.y=s.y*W.y,k.mapSize.y=s.y)),k.map===null||N===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Va){if(z.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new An(i.x,i.y,{format:sa,type:Yr,minFilter:fn,magFilter:fn,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new Sl(i.x,i.y,ki),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=qr,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=hn,k.map.depthTexture.magFilter=hn}else{z.isPointLight?(k.map=new jg(i.x),k.map.depthTexture=new Px(i.x,vr)):(k.map=new An(i.x,i.y),k.map.depthTexture=new Sl(i.x,i.y,vr)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=qr;const D=r.state.buffers.depth.getReversed();this.type===Ec?(k.map.depthTexture.compareFunction=D?ud:cd,k.map.depthTexture.minFilter=fn,k.map.depthTexture.magFilter=fn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=hn,k.map.depthTexture.magFilter=hn)}k.camera.updateProjectionMatrix()}const Q=k.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<Q;D++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,D),r.clear();else{D===0&&(r.setRenderTarget(k.map),r.clear());const ie=k.getViewport(D);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),L.viewport(o)}if(z.isPointLight){const ie=k.camera,se=k.matrix,ue=z.distance||ie.far;ue!==ie.far&&(ie.far=ue,ie.updateProjectionMatrix()),Na.setFromMatrixPosition(z.matrixWorld),ie.position.copy(Na),eh.copy(ie.position),eh.add(WT[D]),ie.up.copy(XT[D]),ie.lookAt(eh),ie.updateMatrixWorld(),se.makeTranslation(-Na.x,-Na.y,-Na.z),gm.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),k._frustum.setFromProjectionMatrix(gm,ie.coordinateSystem,ie.reversedDepth)}else k.updateMatrices(z);n=k.getFrustum(),S(E,R,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===Va&&v(k,R),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,T,C)};function v(w,E){const R=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new An(i.x,i.y,{format:sa,type:Yr})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,R,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,R,d,_,null)}function x(w,E,R,y){let T=null;const C=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)T=C;else if(T=R.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const L=T.uuid,N=E.uuid;let B=c[L];B===void 0&&(B={},c[L]=B);let V=B[N];V===void 0&&(V=T.clone(),B[N]=V,E.addEventListener("dispose",b)),T=V}if(T.visible=E.visible,T.wireframe=E.wireframe,y===Va?T.side=E.shadowSide!==null?E.shadowSide:E.side:T.side=E.shadowSide!==null?E.shadowSide:h[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,R.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const L=r.properties.get(T);L.light=R}return T}function S(w,E,R,y,T){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Va)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const N=e.update(w),B=w.material;if(Array.isArray(B)){const V=N.groups;for(let z=0,k=V.length;z<k;z++){const W=V[z],Q=B[W.materialIndex];if(Q&&Q.visible){const D=x(w,Q,y,T);w.onBeforeShadow(r,w,E,R,N,D,W),r.renderBufferDirect(R,null,N,D,w,W),w.onAfterShadow(r,w,E,R,N,D,W)}}}else if(B.visible){const V=x(w,B,y,T);w.onBeforeShadow(r,w,E,R,N,V,null),r.renderBufferDirect(R,null,N,V,w,null),w.onAfterShadow(r,w,E,R,N,V,null)}}const L=w.children;for(let N=0,B=L.length;N<B;N++)S(L[N],E,R,y,T)}function b(w){w.target.removeEventListener("dispose",b);for(const R in c){const y=c[R],T=w.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}const qT={[Ph]:Lh,[Dh]:Uh,[Ih]:Oh,[na]:Nh,[Lh]:Ph,[Uh]:Dh,[Oh]:Ih,[Nh]:na};function $T(r,e){function t(){let U=!1;const ge=new Bt;let ae=null;const Me=new Bt(0,0,0,0);return{setMask:function(re){ae!==re&&!U&&(r.colorMask(re,re,re,re),ae=re)},setLocked:function(re){U=re},setClear:function(re,ne,ve,Xe,mt){mt===!0&&(re*=Xe,ne*=Xe,ve*=Xe),ge.set(re,ne,ve,Xe),Me.equals(ge)===!1&&(r.clearColor(re,ne,ve,Xe),Me.copy(ge))},reset:function(){U=!1,ae=null,Me.set(-1,0,0,0)}}}function n(){let U=!1,ge=!1,ae=null,Me=null,re=null;return{setReversed:function(ne){if(ge!==ne){const ve=e.get("EXT_clip_control");ne?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ge=ne;const Xe=re;re=null,this.setClear(Xe)}},getReversed:function(){return ge},setTest:function(ne){ne?K(r.DEPTH_TEST):he(r.DEPTH_TEST)},setMask:function(ne){ae!==ne&&!U&&(r.depthMask(ne),ae=ne)},setFunc:function(ne){if(ge&&(ne=qT[ne]),Me!==ne){switch(ne){case Ph:r.depthFunc(r.NEVER);break;case Lh:r.depthFunc(r.ALWAYS);break;case Dh:r.depthFunc(r.LESS);break;case na:r.depthFunc(r.LEQUAL);break;case Ih:r.depthFunc(r.EQUAL);break;case Nh:r.depthFunc(r.GEQUAL);break;case Uh:r.depthFunc(r.GREATER);break;case Oh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Me=ne}},setLocked:function(ne){U=ne},setClear:function(ne){re!==ne&&(ge&&(ne=1-ne),r.clearDepth(ne),re=ne)},reset:function(){U=!1,ae=null,Me=null,re=null,ge=!1}}}function i(){let U=!1,ge=null,ae=null,Me=null,re=null,ne=null,ve=null,Xe=null,mt=null;return{setTest:function(Pe){U||(Pe?K(r.STENCIL_TEST):he(r.STENCIL_TEST))},setMask:function(Pe){ge!==Pe&&!U&&(r.stencilMask(Pe),ge=Pe)},setFunc:function(Pe,Be,tt){(ae!==Pe||Me!==Be||re!==tt)&&(r.stencilFunc(Pe,Be,tt),ae=Pe,Me=Be,re=tt)},setOp:function(Pe,Be,tt){(ne!==Pe||ve!==Be||Xe!==tt)&&(r.stencilOp(Pe,Be,tt),ne=Pe,ve=Be,Xe=tt)},setLocked:function(Pe){U=Pe},setClear:function(Pe){mt!==Pe&&(r.clearStencil(Pe),mt=Pe)},reset:function(){U=!1,ge=null,ae=null,Me=null,re=null,ne=null,ve=null,Xe=null,mt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,x=null,S=null,b=null,w=null,E=new Ze(0,0,0),R=0,y=!1,T=null,C=null,L=null,N=null,B=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=k>=2);let Q=null,D={};const ie=r.getParameter(r.SCISSOR_BOX),se=r.getParameter(r.VIEWPORT),ue=new Bt().fromArray(ie),pe=new Bt().fromArray(se);function ce(U,ge,ae,Me){const re=new Uint8Array(4),ne=r.createTexture();r.bindTexture(U,ne),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ve=0;ve<ae;ve++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ge,0,r.RGBA,1,1,Me,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(ge+ve,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return ne}const $={};$[r.TEXTURE_2D]=ce(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(r.DEPTH_TEST),o.setFunc(na),Fe(!1),X(tp),K(r.CULL_FACE),Ne(Hr);function K(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function he(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function Ee(U,ge){return h[U]!==ge?(r.bindFramebuffer(U,ge),h[U]=ge,U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ge),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ge),!0):!1}function te(U,ge){let ae=d,Me=!1;if(U){ae=f.get(ge),ae===void 0&&(ae=[],f.set(ge,ae));const re=U.textures;if(ae.length!==re.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let ne=0,ve=re.length;ne<ve;ne++)ae[ne]=r.COLOR_ATTACHMENT0+ne;ae.length=re.length,Me=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,Me=!0);Me&&r.drawBuffers(ae)}function ze(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const Je={[Gs]:r.FUNC_ADD,[ev]:r.FUNC_SUBTRACT,[tv]:r.FUNC_REVERSE_SUBTRACT};Je[nv]=r.MIN,Je[iv]=r.MAX;const we={[rv]:r.ZERO,[sv]:r.ONE,[ov]:r.SRC_COLOR,[Rh]:r.SRC_ALPHA,[fv]:r.SRC_ALPHA_SATURATE,[uv]:r.DST_COLOR,[lv]:r.DST_ALPHA,[av]:r.ONE_MINUS_SRC_COLOR,[Ch]:r.ONE_MINUS_SRC_ALPHA,[hv]:r.ONE_MINUS_DST_COLOR,[cv]:r.ONE_MINUS_DST_ALPHA,[dv]:r.CONSTANT_COLOR,[pv]:r.ONE_MINUS_CONSTANT_COLOR,[mv]:r.CONSTANT_ALPHA,[gv]:r.ONE_MINUS_CONSTANT_ALPHA};function Ne(U,ge,ae,Me,re,ne,ve,Xe,mt,Pe){if(U===Hr){_===!0&&(he(r.BLEND),_=!1);return}if(_===!1&&(K(r.BLEND),_=!0),U!==Q0){if(U!==m||Pe!==y){if((p!==Gs||S!==Gs)&&(r.blendEquation(r.FUNC_ADD),p=Gs,S=Gs),Pe)switch(U){case Yo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case np:r.blendFunc(r.ONE,r.ONE);break;case ip:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ke("WebGLState: Invalid blending: ",U);break}else switch(U){case Yo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case np:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ip:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rp:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",U);break}v=null,x=null,b=null,w=null,E.set(0,0,0),R=0,m=U,y=Pe}return}re=re||ge,ne=ne||ae,ve=ve||Me,(ge!==p||re!==S)&&(r.blendEquationSeparate(Je[ge],Je[re]),p=ge,S=re),(ae!==v||Me!==x||ne!==b||ve!==w)&&(r.blendFuncSeparate(we[ae],we[Me],we[ne],we[ve]),v=ae,x=Me,b=ne,w=ve),(Xe.equals(E)===!1||mt!==R)&&(r.blendColor(Xe.r,Xe.g,Xe.b,mt),E.copy(Xe),R=mt),m=U,y=!1}function xe(U,ge){U.side===cr?he(r.CULL_FACE):K(r.CULL_FACE);let ae=U.side===oi;ge&&(ae=!ae),Fe(ae),U.blending===Yo&&U.transparent===!1?Ne(Hr):Ne(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Me=U.stencilWrite;a.setTest(Me),Me&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Oe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):he(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(U){T!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),T=U)}function X(U){U!==Z0?(K(r.CULL_FACE),U!==C&&(U===tp?r.cullFace(r.BACK):U===J0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):he(r.CULL_FACE),C=U}function O(U){U!==L&&(z&&r.lineWidth(U),L=U)}function Oe(U,ge,ae){U?(K(r.POLYGON_OFFSET_FILL),(N!==ge||B!==ae)&&(r.polygonOffset(ge,ae),N=ge,B=ae)):he(r.POLYGON_OFFSET_FILL)}function Ie(U){U?K(r.SCISSOR_TEST):he(r.SCISSOR_TEST)}function ke(U){U===void 0&&(U=r.TEXTURE0+V-1),Q!==U&&(r.activeTexture(U),Q=U)}function Se(U,ge,ae){ae===void 0&&(Q===null?ae=r.TEXTURE0+V-1:ae=Q);let Me=D[ae];Me===void 0&&(Me={type:void 0,texture:void 0},D[ae]=Me),(Me.type!==U||Me.texture!==ge)&&(Q!==ae&&(r.activeTexture(ae),Q=ae),r.bindTexture(U,ge||$[U]),Me.type=U,Me.texture=ge)}function P(){const U=D[Q];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Y(){try{r.texSubImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function Z(){try{r.texSubImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function fe(){try{r.compressedTexSubImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function le(){try{r.texStorage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function ye(){try{r.texStorage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function de(){try{r.texImage2D(...arguments)}catch(U){Ke("WebGLState:",U)}}function ee(){try{r.texImage3D(...arguments)}catch(U){Ke("WebGLState:",U)}}function oe(U){ue.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),ue.copy(U))}function be(U){pe.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),pe.copy(U))}function Ce(U,ge){let ae=c.get(ge);ae===void 0&&(ae=new WeakMap,c.set(ge,ae));let Me=ae.get(U);Me===void 0&&(Me=r.getUniformBlockIndex(ge,U.name),ae.set(U,Me))}function me(U,ge){const Me=c.get(ge).get(U);l.get(ge)!==Me&&(r.uniformBlockBinding(ge,Me,U.__bindingPointIndex),l.set(ge,Me))}function $e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,D={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,x=null,S=null,b=null,w=null,E=new Ze(0,0,0),R=0,y=!1,T=null,C=null,L=null,N=null,B=null,ue.set(0,0,r.canvas.width,r.canvas.height),pe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:he,bindFramebuffer:Ee,drawBuffers:te,useProgram:ze,setBlending:Ne,setMaterial:xe,setFlipSided:Fe,setCullFace:X,setLineWidth:O,setPolygonOffset:Oe,setScissorTest:Ie,activeTexture:ke,bindTexture:Se,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:I,texImage2D:de,texImage3D:ee,updateUBOMapping:Ce,uniformBlockBinding:me,texStorage2D:le,texStorage3D:ye,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:fe,scissor:oe,viewport:be,reset:$e}}function jT(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return d?new OffscreenCanvas(P,M):xl("canvas")}function _(P,M,I){let Y=1;const Z=Se(P);if((Z.width>I||Z.height>I)&&(Y=I/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor(Y*Z.width),fe=Math.floor(Y*Z.height);h===void 0&&(h=g(q,fe));const le=M?g(q,fe):h;return le.width=q,le.height=fe,le.getContext("2d").drawImage(P,0,0,q,fe),He("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+fe+")."),le}else return"data"in P&&He("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(P,M,I,Y,Z=!1){if(P!==null){if(r[P]!==void 0)return r[P];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=M;if(M===r.RED&&(I===r.FLOAT&&(q=r.R32F),I===r.HALF_FLOAT&&(q=r.R16F),I===r.UNSIGNED_BYTE&&(q=r.R8)),M===r.RED_INTEGER&&(I===r.UNSIGNED_BYTE&&(q=r.R8UI),I===r.UNSIGNED_SHORT&&(q=r.R16UI),I===r.UNSIGNED_INT&&(q=r.R32UI),I===r.BYTE&&(q=r.R8I),I===r.SHORT&&(q=r.R16I),I===r.INT&&(q=r.R32I)),M===r.RG&&(I===r.FLOAT&&(q=r.RG32F),I===r.HALF_FLOAT&&(q=r.RG16F),I===r.UNSIGNED_BYTE&&(q=r.RG8)),M===r.RG_INTEGER&&(I===r.UNSIGNED_BYTE&&(q=r.RG8UI),I===r.UNSIGNED_SHORT&&(q=r.RG16UI),I===r.UNSIGNED_INT&&(q=r.RG32UI),I===r.BYTE&&(q=r.RG8I),I===r.SHORT&&(q=r.RG16I),I===r.INT&&(q=r.RG32I)),M===r.RGB_INTEGER&&(I===r.UNSIGNED_BYTE&&(q=r.RGB8UI),I===r.UNSIGNED_SHORT&&(q=r.RGB16UI),I===r.UNSIGNED_INT&&(q=r.RGB32UI),I===r.BYTE&&(q=r.RGB8I),I===r.SHORT&&(q=r.RGB16I),I===r.INT&&(q=r.RGB32I)),M===r.RGBA_INTEGER&&(I===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),I===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),I===r.UNSIGNED_INT&&(q=r.RGBA32UI),I===r.BYTE&&(q=r.RGBA8I),I===r.SHORT&&(q=r.RGBA16I),I===r.INT&&(q=r.RGBA32I)),M===r.RGB&&(I===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),I===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),M===r.RGBA){const fe=Z?Gc:dt.getTransfer(Y);I===r.FLOAT&&(q=r.RGBA32F),I===r.HALF_FLOAT&&(q=r.RGBA16F),I===r.UNSIGNED_BYTE&&(q=fe===Mt?r.SRGB8_ALPHA8:r.RGBA8),I===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),I===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(P,M){let I;return P?M===null||M===vr||M===gl?I=r.DEPTH24_STENCIL8:M===ki?I=r.DEPTH32F_STENCIL8:M===ml&&(I=r.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===vr||M===gl?I=r.DEPTH_COMPONENT24:M===ki?I=r.DEPTH_COMPONENT32F:M===ml&&(I=r.DEPTH_COMPONENT16),I}function b(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==hn&&P.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function w(P){const M=P.target;M.removeEventListener("dispose",w),R(M),M.isVideoTexture&&u.delete(M)}function E(P){const M=P.target;M.removeEventListener("dispose",E),T(M)}function R(P){const M=n.get(P);if(M.__webglInit===void 0)return;const I=P.source,Y=f.get(I);if(Y){const Z=Y[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(P),Object.keys(Y).length===0&&f.delete(I)}n.remove(P)}function y(P){const M=n.get(P);r.deleteTexture(M.__webglTexture);const I=P.source,Y=f.get(I);delete Y[M.__cacheKey],o.memory.textures--}function T(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let Z=0;Z<M.__webglFramebuffer[Y].length;Z++)r.deleteFramebuffer(M.__webglFramebuffer[Y][Z]);else r.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)r.deleteFramebuffer(M.__webglFramebuffer[Y]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const I=P.textures;for(let Y=0,Z=I.length;Y<Z;Y++){const q=n.get(I[Y]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(I[Y])}n.remove(P)}let C=0;function L(){C=0}function N(){const P=C;return P>=i.maxTextures&&He("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),C+=1,P}function B(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function V(P,M){const I=n.get(P);if(P.isVideoTexture&&Ie(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&I.__version!==P.version){const Y=P.image;if(Y===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{$(I,P,M);return}}else P.isExternalTexture&&(I.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,I.__webglTexture,r.TEXTURE0+M)}function z(P,M){const I=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&I.__version!==P.version){$(I,P,M);return}else P.isExternalTexture&&(I.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,I.__webglTexture,r.TEXTURE0+M)}function k(P,M){const I=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&I.__version!==P.version){$(I,P,M);return}t.bindTexture(r.TEXTURE_3D,I.__webglTexture,r.TEXTURE0+M)}function W(P,M){const I=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&I.__version!==P.version){K(I,P,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+M)}const Q={[ra]:r.REPEAT,[hr]:r.CLAMP_TO_EDGE,[Hc]:r.MIRRORED_REPEAT},D={[hn]:r.NEAREST,[Ig]:r.NEAREST_MIPMAP_NEAREST,[Ha]:r.NEAREST_MIPMAP_LINEAR,[fn]:r.LINEAR,[Ac]:r.LINEAR_MIPMAP_NEAREST,[kr]:r.LINEAR_MIPMAP_LINEAR},ie={[Tv]:r.NEVER,[Cv]:r.ALWAYS,[wv]:r.LESS,[cd]:r.LEQUAL,[Ev]:r.EQUAL,[ud]:r.GEQUAL,[Av]:r.GREATER,[Rv]:r.NOTEQUAL};function se(P,M){if(M.type===ki&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===fn||M.magFilter===Ac||M.magFilter===Ha||M.magFilter===kr||M.minFilter===fn||M.minFilter===Ac||M.minFilter===Ha||M.minFilter===kr)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Q[M.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Q[M.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Q[M.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,D[M.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,D[M.minFilter]),M.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ie[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===hn||M.minFilter!==Ha&&M.minFilter!==kr||M.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ue(P,M){let I=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",w));const Y=M.source;let Z=f.get(Y);Z===void 0&&(Z={},f.set(Y,Z));const q=B(M);if(q!==P.__cacheKey){Z[q]===void 0&&(Z[q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Z[q].usedTimes++;const fe=Z[P.__cacheKey];fe!==void 0&&(Z[P.__cacheKey].usedTimes--,fe.usedTimes===0&&y(M)),P.__cacheKey=q,P.__webglTexture=Z[q].texture}return I}function pe(P,M,I){return Math.floor(Math.floor(P/I)/M)}function ce(P,M,I,Y){const q=P.updateRanges;if(q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,I,Y,M.data);else{q.sort((ee,oe)=>ee.start-oe.start);let fe=0;for(let ee=1;ee<q.length;ee++){const oe=q[fe],be=q[ee],Ce=oe.start+oe.count,me=pe(be.start,M.width,4),$e=pe(oe.start,M.width,4);be.start<=Ce+1&&me===$e&&pe(be.start+be.count-1,M.width,4)===me?oe.count=Math.max(oe.count,be.start+be.count-oe.start):(++fe,q[fe]=be)}q.length=fe+1;const le=r.getParameter(r.UNPACK_ROW_LENGTH),ye=r.getParameter(r.UNPACK_SKIP_PIXELS),de=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let ee=0,oe=q.length;ee<oe;ee++){const be=q[ee],Ce=Math.floor(be.start/4),me=Math.ceil(be.count/4),$e=Ce%M.width,U=Math.floor(Ce/M.width),ge=me,ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,$e),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,$e,U,ge,ae,I,Y,M.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function $(P,M,I){let Y=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=r.TEXTURE_3D);const Z=ue(P,M),q=M.source;t.bindTexture(Y,P.__webglTexture,r.TEXTURE0+I);const fe=n.get(q);if(q.version!==fe.__version||Z===!0){t.activeTexture(r.TEXTURE0+I);const le=dt.getPrimaries(dt.workingColorSpace),ye=M.colorSpace===ls?null:dt.getPrimaries(M.colorSpace),de=M.colorSpace===ls||le===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let ee=_(M.image,!1,i.maxTextureSize);ee=ke(M,ee);const oe=s.convert(M.format,M.colorSpace),be=s.convert(M.type);let Ce=x(M.internalFormat,oe,be,M.colorSpace,M.isVideoTexture);se(Y,M);let me;const $e=M.mipmaps,U=M.isVideoTexture!==!0,ge=fe.__version===void 0||Z===!0,ae=q.dataReady,Me=b(M,ee);if(M.isDepthTexture)Ce=S(M.format===Xs,M.type),ge&&(U?t.texStorage2D(r.TEXTURE_2D,1,Ce,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Ce,ee.width,ee.height,0,oe,be,null));else if(M.isDataTexture)if($e.length>0){U&&ge&&t.texStorage2D(r.TEXTURE_2D,Me,Ce,$e[0].width,$e[0].height);for(let re=0,ne=$e.length;re<ne;re++)me=$e[re],U?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,me.width,me.height,oe,be,me.data):t.texImage2D(r.TEXTURE_2D,re,Ce,me.width,me.height,0,oe,be,me.data);M.generateMipmaps=!1}else U?(ge&&t.texStorage2D(r.TEXTURE_2D,Me,Ce,ee.width,ee.height),ae&&ce(M,ee,oe,be)):t.texImage2D(r.TEXTURE_2D,0,Ce,ee.width,ee.height,0,oe,be,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){U&&ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Ce,$e[0].width,$e[0].height,ee.depth);for(let re=0,ne=$e.length;re<ne;re++)if(me=$e[re],M.format!==zi)if(oe!==null)if(U){if(ae)if(M.layerUpdates.size>0){const ve=qp(me.width,me.height,M.format,M.type);for(const Xe of M.layerUpdates){const mt=me.data.subarray(Xe*ve/me.data.BYTES_PER_ELEMENT,(Xe+1)*ve/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,Xe,me.width,me.height,1,oe,mt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,ee.depth,oe,me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Ce,me.width,me.height,ee.depth,0,me.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,ee.depth,oe,be,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Ce,me.width,me.height,ee.depth,0,oe,be,me.data)}else{U&&ge&&t.texStorage2D(r.TEXTURE_2D,Me,Ce,$e[0].width,$e[0].height);for(let re=0,ne=$e.length;re<ne;re++)me=$e[re],M.format!==zi?oe!==null?U?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,me.width,me.height,oe,me.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Ce,me.width,me.height,0,me.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,me.width,me.height,oe,be,me.data):t.texImage2D(r.TEXTURE_2D,re,Ce,me.width,me.height,0,oe,be,me.data)}else if(M.isDataArrayTexture)if(U){if(ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Me,Ce,ee.width,ee.height,ee.depth),ae)if(M.layerUpdates.size>0){const re=qp(ee.width,ee.height,M.format,M.type);for(const ne of M.layerUpdates){const ve=ee.data.subarray(ne*re/ee.data.BYTES_PER_ELEMENT,(ne+1)*re/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ne,ee.width,ee.height,1,oe,be,ve)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,oe,be,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,oe,be,ee.data);else if(M.isData3DTexture)U?(ge&&t.texStorage3D(r.TEXTURE_3D,Me,Ce,ee.width,ee.height,ee.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,oe,be,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,oe,be,ee.data);else if(M.isFramebufferTexture){if(ge)if(U)t.texStorage2D(r.TEXTURE_2D,Me,Ce,ee.width,ee.height);else{let re=ee.width,ne=ee.height;for(let ve=0;ve<Me;ve++)t.texImage2D(r.TEXTURE_2D,ve,Ce,re,ne,0,oe,be,null),re>>=1,ne>>=1}}else if($e.length>0){if(U&&ge){const re=Se($e[0]);t.texStorage2D(r.TEXTURE_2D,Me,Ce,re.width,re.height)}for(let re=0,ne=$e.length;re<ne;re++)me=$e[re],U?ae&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,oe,be,me):t.texImage2D(r.TEXTURE_2D,re,Ce,oe,be,me);M.generateMipmaps=!1}else if(U){if(ge){const re=Se(ee);t.texStorage2D(r.TEXTURE_2D,Me,Ce,re.width,re.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,be,ee)}else t.texImage2D(r.TEXTURE_2D,0,Ce,oe,be,ee);m(M)&&p(Y),fe.__version=q.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function K(P,M,I){if(M.image.length!==6)return;const Y=ue(P,M),Z=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+I);const q=n.get(Z);if(Z.version!==q.__version||Y===!0){t.activeTexture(r.TEXTURE0+I);const fe=dt.getPrimaries(dt.workingColorSpace),le=M.colorSpace===ls?null:dt.getPrimaries(M.colorSpace),ye=M.colorSpace===ls||fe===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const de=M.isCompressedTexture||M.image[0].isCompressedTexture,ee=M.image[0]&&M.image[0].isDataTexture,oe=[];for(let ne=0;ne<6;ne++)!de&&!ee?oe[ne]=_(M.image[ne],!0,i.maxCubemapSize):oe[ne]=ee?M.image[ne].image:M.image[ne],oe[ne]=ke(M,oe[ne]);const be=oe[0],Ce=s.convert(M.format,M.colorSpace),me=s.convert(M.type),$e=x(M.internalFormat,Ce,me,M.colorSpace),U=M.isVideoTexture!==!0,ge=q.__version===void 0||Y===!0,ae=Z.dataReady;let Me=b(M,be);se(r.TEXTURE_CUBE_MAP,M);let re;if(de){U&&ge&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,$e,be.width,be.height);for(let ne=0;ne<6;ne++){re=oe[ne].mipmaps;for(let ve=0;ve<re.length;ve++){const Xe=re[ve];M.format!==zi?Ce!==null?U?ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,Xe.width,Xe.height,Ce,Xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,$e,Xe.width,Xe.height,0,Xe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,Xe.width,Xe.height,Ce,me,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,$e,Xe.width,Xe.height,0,Ce,me,Xe.data)}}}else{if(re=M.mipmaps,U&&ge){re.length>0&&Me++;const ne=Se(oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,$e,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ee){U?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,oe[ne].width,oe[ne].height,Ce,me,oe[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,$e,oe[ne].width,oe[ne].height,0,Ce,me,oe[ne].data);for(let ve=0;ve<re.length;ve++){const mt=re[ve].image[ne].image;U?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,mt.width,mt.height,Ce,me,mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,$e,mt.width,mt.height,0,Ce,me,mt.data)}}else{U?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,me,oe[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,$e,Ce,me,oe[ne]);for(let ve=0;ve<re.length;ve++){const Xe=re[ve];U?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,Ce,me,Xe.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,$e,Ce,me,Xe.image[ne])}}}m(M)&&p(r.TEXTURE_CUBE_MAP),q.__version=Z.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function he(P,M,I,Y,Z,q){const fe=s.convert(I.format,I.colorSpace),le=s.convert(I.type),ye=x(I.internalFormat,fe,le,I.colorSpace),de=n.get(M),ee=n.get(I);if(ee.__renderTarget=M,!de.__hasExternalTextures){const oe=Math.max(1,M.width>>q),be=Math.max(1,M.height>>q);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,ye,oe,be,M.depth,0,fe,le,null):t.texImage2D(Z,q,ye,oe,be,0,fe,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Oe(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,Z,ee.__webglTexture,0,O(M)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,Z,ee.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(P,M,I){if(r.bindRenderbuffer(r.RENDERBUFFER,P),M.depthBuffer){const Y=M.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,q=S(M.stencilBuffer,Z),fe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Oe(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O(M),q,M.width,M.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,O(M),q,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,q,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,P)}else{const Y=M.textures;for(let Z=0;Z<Y.length;Z++){const q=Y[Z],fe=s.convert(q.format,q.colorSpace),le=s.convert(q.type),ye=x(q.internalFormat,fe,le,q.colorSpace);Oe(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O(M),ye,M.width,M.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,O(M),ye,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ye,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function te(P,M,I){const Y=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(M.depthTexture);if(Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),se(r.TEXTURE_CUBE_MAP,M.depthTexture);const de=s.convert(M.depthTexture.format),ee=s.convert(M.depthTexture.type);let oe;M.depthTexture.format===qr?oe=r.DEPTH_COMPONENT24:M.depthTexture.format===Xs&&(oe=r.DEPTH24_STENCIL8);for(let be=0;be<6;be++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,oe,M.width,M.height,0,de,ee,null)}}else V(M.depthTexture,0);const q=Z.__webglTexture,fe=O(M),le=Y?r.TEXTURE_CUBE_MAP_POSITIVE_X+I:r.TEXTURE_2D,ye=M.depthTexture.format===Xs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===qr)Oe(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,le,q,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,ye,le,q,0);else if(M.depthTexture.format===Xs)Oe(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,le,q,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,ye,le,q,0);else throw new Error("Unknown depthTexture format")}function ze(P){const M=n.get(P),I=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const Y=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=Y}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(I)for(let Y=0;Y<6;Y++)te(M.__webglFramebuffer[Y],P,Y);else{const Y=P.texture.mipmaps;Y&&Y.length>0?te(M.__webglFramebuffer[0],P,0):te(M.__webglFramebuffer,P,0)}else if(I){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=r.createRenderbuffer(),Ee(M.__webglDepthbuffer[Y],P,!1);else{const Z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,q)}}else{const Y=P.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ee(M.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(P,M,I){const Y=n.get(P);M!==void 0&&he(Y.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),I!==void 0&&ze(P)}function we(P){const M=P.texture,I=n.get(P),Y=n.get(M);P.addEventListener("dispose",E);const Z=P.textures,q=P.isWebGLCubeRenderTarget===!0,fe=Z.length>1;if(fe||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=M.version,o.memory.textures++),q){I.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer[le]=[];for(let ye=0;ye<M.mipmaps.length;ye++)I.__webglFramebuffer[le][ye]=r.createFramebuffer()}else I.__webglFramebuffer[le]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)I.__webglFramebuffer[le]=r.createFramebuffer()}else I.__webglFramebuffer=r.createFramebuffer();if(fe)for(let le=0,ye=Z.length;le<ye;le++){const de=n.get(Z[le]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&Oe(P)===!1){I.__webglMultisampledFramebuffer=r.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){const ye=Z[le];I.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,I.__webglColorRenderbuffer[le]);const de=s.convert(ye.format,ye.colorSpace),ee=s.convert(ye.type),oe=x(ye.internalFormat,de,ee,ye.colorSpace,P.isXRRenderTarget===!0),be=O(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,be,oe,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,I.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(I.__webglDepthRenderbuffer=r.createRenderbuffer(),Ee(I.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),se(r.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)he(I.__webglFramebuffer[le][ye],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,ye);else he(I.__webglFramebuffer[le],P,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(M)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let le=0,ye=Z.length;le<ye;le++){const de=Z[le],ee=n.get(de);let oe=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(oe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,ee.__webglTexture),se(oe,de),he(I.__webglFramebuffer,P,de,r.COLOR_ATTACHMENT0+le,oe,0),m(de)&&p(oe)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,Y.__webglTexture),se(le,M),M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)he(I.__webglFramebuffer[ye],P,M,r.COLOR_ATTACHMENT0,le,ye);else he(I.__webglFramebuffer,P,M,r.COLOR_ATTACHMENT0,le,0);m(M)&&p(le),t.unbindTexture()}P.depthBuffer&&ze(P)}function Ne(P){const M=P.textures;for(let I=0,Y=M.length;I<Y;I++){const Z=M[I];if(m(Z)){const q=v(P),fe=n.get(Z).__webglTexture;t.bindTexture(q,fe),p(q),t.unbindTexture()}}}const xe=[],Fe=[];function X(P){if(P.samples>0){if(Oe(P)===!1){const M=P.textures,I=P.width,Y=P.height;let Z=r.COLOR_BUFFER_BIT;const q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=n.get(P),le=M.length>1;if(le)for(let de=0;de<M.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ye=P.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<M.length;de++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const ee=n.get(M[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,I,Y,0,0,I,Y,Z,r.NEAREST),l===!0&&(xe.length=0,Fe.length=0,xe.push(r.COLOR_ATTACHMENT0+de),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xe.push(q),Fe.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Fe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let de=0;de<M.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const ee=n.get(M[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function O(P){return Math.min(i.maxSamples,P.samples)}function Oe(P){const M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(P){const M=o.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function ke(P,M){const I=P.colorSpace,Y=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||I!==Jn&&I!==ls&&(dt.getTransfer(I)===Mt?(Y!==zi||Z!==bi)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",I)),M}function Se(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=Je,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function KT(r,e){function t(n,i=ls){let s;const o=dt.getTransfer(i);if(n===bi)return r.UNSIGNED_BYTE;if(n===nd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===id)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Og)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Fg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ng)return r.BYTE;if(n===Ug)return r.SHORT;if(n===ml)return r.UNSIGNED_SHORT;if(n===td)return r.INT;if(n===vr)return r.UNSIGNED_INT;if(n===ki)return r.FLOAT;if(n===Yr)return r.HALF_FLOAT;if(n===Bg)return r.ALPHA;if(n===kg)return r.RGB;if(n===zi)return r.RGBA;if(n===qr)return r.DEPTH_COMPONENT;if(n===Xs)return r.DEPTH_STENCIL;if(n===rd)return r.RED;if(n===sd)return r.RED_INTEGER;if(n===sa)return r.RG;if(n===od)return r.RG_INTEGER;if(n===ad)return r.RGBA_INTEGER;if(n===Rc||n===Cc||n===Pc||n===Lc)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Rc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Rc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kh||n===zh||n===Vh||n===Hh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===kh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gh||n===Wh||n===Xh||n===Yh||n===qh||n===$h||n===jh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Gh||n===Wh)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yh)return s.COMPRESSED_R11_EAC;if(n===qh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===$h)return s.COMPRESSED_RG11_EAC;if(n===jh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kh||n===Zh||n===Jh||n===Qh||n===ef||n===tf||n===nf||n===rf||n===sf||n===of||n===af||n===lf||n===cf||n===uf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Kh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ef)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===of)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===af)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hf||n===ff||n===df)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===hf)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ff)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===df)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pf||n===mf||n===gf||n===_f)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===pf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===mf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_f)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gl?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const ZT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Qg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:ZT,fragmentShader:JT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Tr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ew extends uo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new QT,p={},v=t.getContextAttributes();let x=null,S=null;const b=[],w=[],E=new Ge;let R=null;const y=new un;y.viewport=new Bt;const T=new un;T.viewport=new Bt;const C=[y,T],L=new ey;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=b[$];return K===void 0&&(K=new Hu,b[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=b[$];return K===void 0&&(K=new Hu,b[$]=K),K.getGripSpace()},this.getHand=function($){let K=b[$];return K===void 0&&(K=new Hu,b[$]=K),K.getHandSpace()};function V($){const K=w.indexOf($.inputSource);if(K===-1)return;const he=b[K];he!==void 0&&(he.update($.inputSource,$.frame,c||o),he.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",k);for(let $=0;$<b.length;$++){const K=w[$];K!==null&&(w[$]=null,b[$].disconnect(K))}N=null,B=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(x),d=null,f=null,h=null,i=null,S=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",z),i.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ee=null,te=null;v.depth&&(te=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=v.stencil?Xs:qr,Ee=v.stencil?gl:vr);const ze={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ze),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new An(f.textureWidth,f.textureHeight,{format:zi,type:bi,depthTexture:new Sl(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const he={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new An(d.framebufferWidth,d.framebufferHeight,{format:zi,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k($){for(let K=0;K<$.removed.length;K++){const he=$.removed[K],Ee=w.indexOf(he);Ee>=0&&(w[Ee]=null,b[Ee].disconnect(he))}for(let K=0;K<$.added.length;K++){const he=$.added[K];let Ee=w.indexOf(he);if(Ee===-1){for(let ze=0;ze<b.length;ze++)if(ze>=w.length){w.push(he),Ee=ze;break}else if(w[ze]===null){w[ze]=he,Ee=ze;break}if(Ee===-1)break}const te=b[Ee];te&&te.connect(he)}}const W=new F,Q=new F;function D($,K,he){W.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(he.matrixWorld);const Ee=W.distanceTo(Q),te=K.projectionMatrix.elements,ze=he.projectionMatrix.elements,Je=te[14]/(te[10]-1),we=te[14]/(te[10]+1),Ne=(te[9]+1)/te[5],xe=(te[9]-1)/te[5],Fe=(te[8]-1)/te[0],X=(ze[8]+1)/ze[0],O=Je*Fe,Oe=Je*X,Ie=Ee/(-Fe+X),ke=Ie*-Fe;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ke),$.translateZ(Ie),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),te[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Se=Je+Ie,P=we+Ie,M=O-ke,I=Oe+(Ee-ke),Y=Ne*we/P*Se,Z=xe*we/P*Se;$.projectionMatrix.makePerspective(M,I,Y,Z,Se,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ie($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let K=$.near,he=$.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(he=m.depthFar)),L.near=T.near=y.near=K,L.far=T.far=y.far=he,(N!==L.near||B!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,B=L.far),L.layers.mask=$.layers.mask|6,y.layers.mask=L.layers.mask&3,T.layers.mask=L.layers.mask&5;const Ee=$.parent,te=L.cameras;ie(L,Ee);for(let ze=0;ze<te.length;ze++)ie(te[ze],Ee);te.length===2?D(L,y,T):L.projectionMatrix.copy(y.projectionMatrix),se($,L,Ee)};function se($,K,he){he===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(he.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=oa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function($){return p[$]};let ue=null;function pe($,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const he=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Ee=!1;he.length!==L.cameras.length&&(L.cameras.length=0,Ee=!0);for(let we=0;we<he.length;we++){const Ne=he[we];let xe=null;if(d!==null)xe=d.getViewport(Ne);else{const X=h.getViewSubImage(f,Ne);xe=X.viewport,we===0&&(e.setRenderTargetTextures(S,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(S))}let Fe=C[we];Fe===void 0&&(Fe=new un,Fe.layers.enable(we),Fe.viewport=new Bt,C[we]=Fe),Fe.matrix.fromArray(Ne.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ne.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(xe.x,xe.y,xe.width,xe.height),we===0&&(L.matrix.copy(Fe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ee===!0&&L.cameras.push(Fe)}const te=i.enabledFeatures;if(te&&te.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const we=h.getDepthInformation(he[0]);we&&we.isValid&&we.texture&&m.init(we,i.renderState)}if(te&&te.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let we=0;we<he.length;we++){const Ne=he[we].camera;if(Ne){let xe=p[Ne];xe||(xe=new Qg,p[Ne]=xe);const Fe=h.getCameraImage(Ne);xe.sourceTexture=Fe}}}}for(let he=0;he<b.length;he++){const Ee=w[he],te=b[he];Ee!==null&&te!==void 0&&te.update(Ee,K,c||o)}ue&&ue($,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const ce=new i_;ce.setAnimationLoop(pe),this.setAnimationLoop=function($){ue=$},this.dispose=function(){}}}const Ns=new yr,tw=new rt;function nw(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qg(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===oi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===oi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,S=v.envMapRotation;x&&(m.envMap.value=x,Ns.copy(S),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),m.envMapRotation.value.setFromMatrix4(tw.makeRotationFromEuler(Ns)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===oi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function iw(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;n.uniformBlockBinding(v,S)}function c(v,x){let S=i[v.id];S===void 0&&(g(v),S=u(v),i[v.id]=S,v.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(v,b);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function u(v){const x=h();v.__bindingPointIndex=x;const S=r.createBuffer(),b=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,b,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=i[v.id],S=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,E=S.length;w<E;w++){const R=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,T=R.length;y<T;y++){const C=R[y];if(d(C,w,y,b)===!0){const L=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let V=0;V<N.length;V++){const z=N[V],k=_(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,L+B,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,B),B+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(v,x,S,b){const w=v.value,E=x+"_"+S;if(b[E]===void 0)return typeof w=="number"||typeof w=="boolean"?b[E]=w:b[E]=w.clone(),!0;{const R=b[E];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return b[E]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(v){const x=v.uniforms;let S=0;const b=16;for(let E=0,R=x.length;E<R;E++){const y=Array.isArray(x[E])?x[E]:[x[E]];for(let T=0,C=y.length;T<C;T++){const L=y[T],N=Array.isArray(L.value)?L.value:[L.value];for(let B=0,V=N.length;B<V;B++){const z=N[B],k=_(z),W=S%b,Q=W%k.boundary,D=W+Q;S+=Q,D!==0&&b-D<k.storage&&(S+=b-D),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=k.storage}}}const w=S%b;return w>0&&(S+=b-w),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}const rw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let nr=null;function sw(){return nr===null&&(nr=new pd(rw,16,16,sa,Yr),nr.name="DFG_LUT",nr.minFilter=fn,nr.magFilter=fn,nr.wrapS=hr,nr.wrapT=hr,nr.generateMipmaps=!1,nr.needsUpdate=!0),nr}class po{constructor(e={}){const{canvas:t=Lv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=bi}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=d,m=new Set([ad,od,sd]),p=new Set([bi,vr,ml,gl,nd,id]),v=new Uint32Array(4),x=new Int32Array(4);let S=null,b=null;const w=[],E=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let T=!1;this._outputColorSpace=wn;let C=0,L=0,N=null,B=-1,V=null;const z=new Bt,k=new Bt;let W=null;const Q=new Ze(0);let D=0,ie=t.width,se=t.height,ue=1,pe=null,ce=null;const $=new Bt(0,0,ie,se),K=new Bt(0,0,ie,se);let he=!1;const Ee=new gd;let te=!1,ze=!1;const Je=new rt,we=new F,Ne=new Bt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function X(){return N===null?ue:1}let O=n;function Oe(A,H){return t.getContext(A,H)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ed}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),O===null){const H="webgl2";if(O=Oe(H,A),O===null)throw Oe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ke("WebGLRenderer: "+A.message),A}let Ie,ke,Se,P,M,I,Y,Z,q,fe,le,ye,de,ee,oe,be,Ce,me,$e,U,ge,ae,Me,re;function ne(){Ie=new sb(O),Ie.init(),ae=new KT(O,Ie),ke=new KM(O,Ie,e,ae),Se=new $T(O,Ie),ke.reversedDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),P=new lb(O),M=new IT,I=new jT(O,Ie,Se,M,ke,ae,P),Y=new JM(y),Z=new rb(y),q=new fy(O),Me=new $M(O,q),fe=new ob(O,q,P,Me),le=new ub(O,fe,q,P),$e=new cb(O,ke,I),be=new ZM(M),ye=new DT(y,Y,Z,Ie,ke,Me,be),de=new nw(y,M),ee=new UT,oe=new VT(Ie),me=new qM(y,Y,Z,Se,le,g,l),Ce=new YT(y,le,ke),re=new iw(O,P,ke,Se),U=new jM(O,Ie,P),ge=new ab(O,Ie,P),P.programs=ye.programs,y.capabilities=ke,y.extensions=Ie,y.properties=M,y.renderLists=ee,y.shadowMap=Ce,y.state=Se,y.info=P}ne(),_!==bi&&(R=new fb(_,t.width,t.height,i,s));const ve=new ew(y,O);this.xr=ve,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(A){A!==void 0&&(ue=A,this.setSize(ie,se,!1))},this.getSize=function(A){return A.set(ie,se)},this.setSize=function(A,H,J=!0){if(ve.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,se=H,t.width=Math.floor(A*ue),t.height=Math.floor(H*ue),J===!0&&(t.style.width=A+"px",t.style.height=H+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(ie*ue,se*ue).floor()},this.setDrawingBufferSize=function(A,H,J){ie=A,se=H,ue=J,t.width=Math.floor(A*J),t.height=Math.floor(H*J),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(_===bi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,H,J,j){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,H,J,j),Se.viewport(z.copy($).multiplyScalar(ue).round())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,H,J,j){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,H,J,j),Se.scissor(k.copy(K).multiplyScalar(ue).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(A){Se.setScissorTest(he=A)},this.setOpaqueSort=function(A){pe=A},this.setTransparentSort=function(A){ce=A},this.getClearColor=function(A){return A.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,J=!0){let j=0;if(A){let G=!1;if(N!==null){const _e=N.texture.format;G=m.has(_e)}if(G){const _e=N.texture.type,Le=p.has(_e),Te=me.getClearColor(),De=me.getClearAlpha(),Ve=Te.r,je=Te.g,Ye=Te.b;Le?(v[0]=Ve,v[1]=je,v[2]=Ye,v[3]=De,O.clearBufferuiv(O.COLOR,0,v)):(x[0]=Ve,x[1]=je,x[2]=Ye,x[3]=De,O.clearBufferiv(O.COLOR,0,x))}else j|=O.COLOR_BUFFER_BIT}H&&(j|=O.DEPTH_BUFFER_BIT),J&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),me.dispose(),ee.dispose(),oe.dispose(),M.dispose(),Y.dispose(),Z.dispose(),le.dispose(),Me.dispose(),re.dispose(),ye.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",jt),ve.removeEventListener("sessionend",at),yt.stop()};function Xe(A){A.preventDefault(),Xc("WebGLRenderer: Context Lost."),T=!0}function mt(){Xc("WebGLRenderer: Context Restored."),T=!1;const A=P.autoReset,H=Ce.enabled,J=Ce.autoUpdate,j=Ce.needsUpdate,G=Ce.type;ne(),P.autoReset=A,Ce.enabled=H,Ce.autoUpdate=J,Ce.needsUpdate=j,Ce.type=G}function Pe(A){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Be(A){const H=A.target;H.removeEventListener("dispose",Be),tt(H)}function tt(A){Ae(A),M.remove(A)}function Ae(A){const H=M.get(A).programs;H!==void 0&&(H.forEach(function(J){ye.releaseProgram(J)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,J,j,G,_e){H===null&&(H=xe);const Le=G.isMesh&&G.matrixWorld.determinant()<0,Te=sn(A,H,J,j,G);Se.setMaterial(j,Le);let De=J.index,Ve=1;if(j.wireframe===!0){if(De=fe.getWireframeAttribute(J),De===void 0)return;Ve=2}const je=J.drawRange,Ye=J.attributes.position;let lt=je.start*Ve,At=(je.start+je.count)*Ve;_e!==null&&(lt=Math.max(lt,_e.start*Ve),At=Math.min(At,(_e.start+_e.count)*Ve)),De!==null?(lt=Math.max(lt,0),At=Math.min(At,De.count)):Ye!=null&&(lt=Math.max(lt,0),At=Math.min(At,Ye.count));const Xt=At-lt;if(Xt<0||Xt===1/0)return;Me.setup(G,j,Te,J,De);let Yt,Lt=U;if(De!==null&&(Yt=q.get(De),Lt=ge,Lt.setIndex(Yt)),G.isMesh)j.wireframe===!0?(Se.setLineWidth(j.wireframeLinewidth*X()),Lt.setMode(O.LINES)):Lt.setMode(O.TRIANGLES);else if(G.isLine){let qe=j.linewidth;qe===void 0&&(qe=1),Se.setLineWidth(qe*X()),G.isLineSegments?Lt.setMode(O.LINES):G.isLineLoop?Lt.setMode(O.LINE_LOOP):Lt.setMode(O.LINE_STRIP)}else G.isPoints?Lt.setMode(O.POINTS):G.isSprite&&Lt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)yl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))Lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const qe=G._multiDrawStarts,St=G._multiDrawCounts,_t=G._multiDrawCount,pi=De?q.get(De).bytesPerElement:1,_o=M.get(j).currentProgram.getUniforms();for(let mi=0;mi<_t;mi++)_o.setValue(O,"_gl_DrawID",mi),Lt.render(qe[mi]/pi,St[mi])}else if(G.isInstancedMesh)Lt.renderInstances(lt,Xt,G.count);else if(J.isInstancedBufferGeometry){const qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,St=Math.min(J.instanceCount,qe);Lt.renderInstances(lt,Xt,St)}else Lt.render(lt,Xt)};function Qe(A,H,J){A.transparent===!0&&A.side===cr&&A.forceSinglePass===!1?(A.side=oi,A.needsUpdate=!0,Et(A,H,J),A.side=Xr,A.needsUpdate=!0,Et(A,H,J),A.side=cr):Et(A,H,J)}this.compile=function(A,H,J=null){J===null&&(J=A),b=oe.get(J),b.init(H),E.push(b),J.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),A!==J&&A.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights();const j=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _e=G.material;if(_e)if(Array.isArray(_e))for(let Le=0;Le<_e.length;Le++){const Te=_e[Le];Qe(Te,J,G),j.add(Te)}else Qe(_e,J,G),j.add(_e)}),b=E.pop(),j},this.compileAsync=function(A,H,J=null){const j=this.compile(A,H,J);return new Promise(G=>{function _e(){if(j.forEach(function(Le){M.get(Le).currentProgram.isReady()&&j.delete(Le)}),j.size===0){G(A);return}setTimeout(_e,10)}Ie.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let We=null;function et(A){We&&We(A)}function jt(){yt.stop()}function at(){yt.start()}const yt=new i_;yt.setAnimationLoop(et),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(A){We=A,ve.setAnimationLoop(A),A===null?yt.stop():yt.start()},ve.addEventListener("sessionstart",jt),ve.addEventListener("sessionend",at),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const J=ve.enabled===!0&&ve.isPresenting===!0,j=R!==null&&(N===null||J)&&R.begin(y,N);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(H),H=ve.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,H,N),b=oe.get(A,E.length),b.init(H),E.push(b),Je.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ee.setFromProjectionMatrix(Je,fr,H.reversedDepth),ze=this.localClippingEnabled,te=be.init(this.clippingPlanes,ze),S=ee.get(A,w.length),S.init(),w.push(S),ve.enabled===!0&&ve.isPresenting===!0){const Le=y.xr.getDepthSensingMesh();Le!==null&&Jt(Le,H,-1/0,y.sortObjects)}Jt(A,H,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(pe,ce),Fe=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Fe&&me.addToRenderList(S,A),this.info.render.frame++,te===!0&&be.beginShadows();const G=b.state.shadowsArray;if(Ce.render(G,A,H),te===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&R.hasRenderPass())===!1){const Le=S.opaque,Te=S.transmissive;if(b.setupLights(),H.isArrayCamera){const De=H.cameras;if(Te.length>0)for(let Ve=0,je=De.length;Ve<je;Ve++){const Ye=De[Ve];Pt(Le,Te,A,Ye)}Fe&&me.render(A);for(let Ve=0,je=De.length;Ve<je;Ve++){const Ye=De[Ve];Ot(S,A,Ye,Ye.viewport)}}else Te.length>0&&Pt(Le,Te,A,H),Fe&&me.render(A),Ot(S,A,H)}N!==null&&L===0&&(I.updateMultisampleRenderTarget(N),I.updateRenderTargetMipmap(N)),j&&R.end(y),A.isScene===!0&&A.onAfterRender(y,A,H),Me.resetDefaultState(),B=-1,V=null,E.pop(),E.length>0?(b=E[E.length-1],te===!0&&be.setGlobalState(y.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function Jt(A,H,J,j){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ee.intersectsSprite(A)){j&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Je);const Le=le.update(A),Te=A.material;Te.visible&&S.push(A,Le,Te,J,Ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ee.intersectsObject(A))){const Le=le.update(A),Te=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ne.copy(Le.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(Je)),Array.isArray(Te)){const De=Le.groups;for(let Ve=0,je=De.length;Ve<je;Ve++){const Ye=De[Ve],lt=Te[Ye.materialIndex];lt&&lt.visible&&S.push(A,Le,lt,J,Ne.z,Ye)}}else Te.visible&&S.push(A,Le,Te,J,Ne.z,null)}}const _e=A.children;for(let Le=0,Te=_e.length;Le<Te;Le++)Jt(_e[Le],H,J,j)}function Ot(A,H,J,j){const{opaque:G,transmissive:_e,transparent:Le}=A;b.setupLightsView(J),te===!0&&be.setGlobalState(y.clippingPlanes,J),j&&Se.viewport(z.copy(j)),G.length>0&&gt(G,H,J),_e.length>0&&gt(_e,H,J),Le.length>0&&gt(Le,H,J),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Pt(A,H,J,j){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[j.id]===void 0){const lt=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[j.id]=new An(1,1,{generateMipmaps:!0,type:lt?Yr:bi,minFilter:kr,samples:ke.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const _e=b.state.transmissionRenderTarget[j.id],Le=j.viewport||z;_e.setSize(Le.z*y.transmissionResolutionScale,Le.w*y.transmissionResolutionScale);const Te=y.getRenderTarget(),De=y.getActiveCubeFace(),Ve=y.getActiveMipmapLevel();y.setRenderTarget(_e),y.getClearColor(Q),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear(),Fe&&me.render(J);const je=y.toneMapping;y.toneMapping=mr;const Ye=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),b.setupLightsView(j),te===!0&&be.setGlobalState(y.clippingPlanes,j),gt(A,J,j),I.updateMultisampleRenderTarget(_e),I.updateRenderTargetMipmap(_e),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let At=0,Xt=H.length;At<Xt;At++){const Yt=H[At],{object:Lt,geometry:qe,material:St,group:_t}=Yt;if(St.side===cr&&Lt.layers.test(j.layers)){const pi=St.side;St.side=oi,St.needsUpdate=!0,ei(Lt,J,j,qe,St,_t),St.side=pi,St.needsUpdate=!0,lt=!0}}lt===!0&&(I.updateMultisampleRenderTarget(_e),I.updateRenderTargetMipmap(_e))}y.setRenderTarget(Te,De,Ve),y.setClearColor(Q,D),Ye!==void 0&&(j.viewport=Ye),y.toneMapping=je}function gt(A,H,J){const j=H.isScene===!0?H.overrideMaterial:null;for(let G=0,_e=A.length;G<_e;G++){const Le=A[G],{object:Te,geometry:De,group:Ve}=Le;let je=Le.material;je.allowOverride===!0&&j!==null&&(je=j),Te.layers.test(J.layers)&&ei(Te,H,J,De,je,Ve)}}function ei(A,H,J,j,G,_e){A.onBeforeRender(y,H,J,j,G,_e),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(y,H,J,j,A,_e),G.transparent===!0&&G.side===cr&&G.forceSinglePass===!1?(G.side=oi,G.needsUpdate=!0,y.renderBufferDirect(J,H,j,G,A,_e),G.side=Xr,G.needsUpdate=!0,y.renderBufferDirect(J,H,j,G,A,_e),G.side=cr):y.renderBufferDirect(J,H,j,G,A,_e),A.onAfterRender(y,H,J,j,G,_e)}function Et(A,H,J){H.isScene!==!0&&(H=xe);const j=M.get(A),G=b.state.lights,_e=b.state.shadowsArray,Le=G.state.version,Te=ye.getParameters(A,G.state,_e,H,J),De=ye.getProgramCacheKey(Te);let Ve=j.programs;j.environment=A.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(A.isMeshStandardMaterial?Z:Y).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",Be),Ve=new Map,j.programs=Ve);let je=Ve.get(De);if(je!==void 0){if(j.currentProgram===je&&j.lightsStateVersion===Le)return di(A,Te),je}else Te.uniforms=ye.getUniforms(A),A.onBeforeCompile(Te,y),je=ye.acquireProgram(Te,De),Ve.set(De,je),j.uniforms=Te.uniforms;const Ye=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=be.uniform),di(A,Te),j.needsLights=mn(A),j.lightsStateVersion=Le,j.needsLights&&(Ye.ambientLightColor.value=G.state.ambient,Ye.lightProbe.value=G.state.probe,Ye.directionalLights.value=G.state.directional,Ye.directionalLightShadows.value=G.state.directionalShadow,Ye.spotLights.value=G.state.spot,Ye.spotLightShadows.value=G.state.spotShadow,Ye.rectAreaLights.value=G.state.rectArea,Ye.ltc_1.value=G.state.rectAreaLTC1,Ye.ltc_2.value=G.state.rectAreaLTC2,Ye.pointLights.value=G.state.point,Ye.pointLightShadows.value=G.state.pointShadow,Ye.hemisphereLights.value=G.state.hemi,Ye.directionalShadowMap.value=G.state.directionalShadowMap,Ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ye.spotShadowMap.value=G.state.spotShadowMap,Ye.spotLightMatrix.value=G.state.spotLightMatrix,Ye.spotLightMap.value=G.state.spotLightMap,Ye.pointShadowMap.value=G.state.pointShadowMap,Ye.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=je,j.uniformsList=null,je}function Pn(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Dc.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function di(A,H){const J=M.get(A);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function sn(A,H,J,j,G){H.isScene!==!0&&(H=xe),I.resetTextureUnits();const _e=H.fog,Le=j.isMeshStandardMaterial?H.environment:null,Te=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Jn,De=(j.isMeshStandardMaterial?Z:Y).get(j.envMap||Le),Ve=j.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,je=!!J.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ye=!!J.morphAttributes.position,lt=!!J.morphAttributes.normal,At=!!J.morphAttributes.color;let Xt=mr;j.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Xt=y.toneMapping);const Yt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Lt=Yt!==void 0?Yt.length:0,qe=M.get(j),St=b.state.lights;if(te===!0&&(ze===!0||A!==V)){const kn=A===V&&j.id===B;be.setState(j,A,kn)}let _t=!1;j.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==St.state.version||qe.outputColorSpace!==Te||G.isBatchedMesh&&qe.batching===!1||!G.isBatchedMesh&&qe.batching===!0||G.isBatchedMesh&&qe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&qe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&qe.instancing===!1||!G.isInstancedMesh&&qe.instancing===!0||G.isSkinnedMesh&&qe.skinning===!1||!G.isSkinnedMesh&&qe.skinning===!0||G.isInstancedMesh&&qe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&qe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&qe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&qe.instancingMorph===!1&&G.morphTexture!==null||qe.envMap!==De||j.fog===!0&&qe.fog!==_e||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==be.numPlanes||qe.numIntersection!==be.numIntersection)||qe.vertexAlphas!==Ve||qe.vertexTangents!==je||qe.morphTargets!==Ye||qe.morphNormals!==lt||qe.morphColors!==At||qe.toneMapping!==Xt||qe.morphTargetsCount!==Lt)&&(_t=!0):(_t=!0,qe.__version=j.version);let pi=qe.currentProgram;_t===!0&&(pi=Et(j,H,G));let _o=!1,mi=!1,wa=!1;const Nt=pi.getUniforms(),ti=qe.uniforms;if(Se.useProgram(pi.program)&&(_o=!0,mi=!0,wa=!0),j.id!==B&&(B=j.id,mi=!0),_o||V!==A){Se.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Nt.setValue(O,"projectionMatrix",A.projectionMatrix),Nt.setValue(O,"viewMatrix",A.matrixWorldInverse);const ni=Nt.map.cameraPosition;ni!==void 0&&ni.setValue(O,we.setFromMatrixPosition(A.matrixWorld)),ke.logarithmicDepthBuffer&&Nt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Nt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,mi=!0,wa=!0)}if(qe.needsLights&&(St.state.directionalShadowMap.length>0&&Nt.setValue(O,"directionalShadowMap",St.state.directionalShadowMap,I),St.state.spotShadowMap.length>0&&Nt.setValue(O,"spotShadowMap",St.state.spotShadowMap,I),St.state.pointShadowMap.length>0&&Nt.setValue(O,"pointShadowMap",St.state.pointShadowMap,I)),G.isSkinnedMesh){Nt.setOptional(O,G,"bindMatrix"),Nt.setOptional(O,G,"bindMatrixInverse");const kn=G.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),Nt.setValue(O,"boneTexture",kn.boneTexture,I))}G.isBatchedMesh&&(Nt.setOptional(O,G,"batchingTexture"),Nt.setValue(O,"batchingTexture",G._matricesTexture,I),Nt.setOptional(O,G,"batchingIdTexture"),Nt.setValue(O,"batchingIdTexture",G._indirectTexture,I),Nt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&Nt.setValue(O,"batchingColorTexture",G._colorsTexture,I));const Di=J.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&$e.update(G,J,pi),(mi||qe.receiveShadow!==G.receiveShadow)&&(qe.receiveShadow=G.receiveShadow,Nt.setValue(O,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ti.envMap.value=De,ti.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&H.environment!==null&&(ti.envMapIntensity.value=H.environmentIntensity),ti.dfgLUT!==void 0&&(ti.dfgLUT.value=sw()),mi&&(Nt.setValue(O,"toneMappingExposure",y.toneMappingExposure),qe.needsLights&&on(ti,wa),_e&&j.fog===!0&&de.refreshFogUniforms(ti,_e),de.refreshMaterialUniforms(ti,j,ue,se,b.state.transmissionRenderTarget[A.id]),Dc.upload(O,Pn(qe),ti,I)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Dc.upload(O,Pn(qe),ti,I),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Nt.setValue(O,"center",G.center),Nt.setValue(O,"modelViewMatrix",G.modelViewMatrix),Nt.setValue(O,"normalMatrix",G.normalMatrix),Nt.setValue(O,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const kn=j.uniformsGroups;for(let ni=0,yu=kn.length;ni<yu;ni++){const Rs=kn[ni];re.update(Rs,pi),re.bind(Rs,pi)}}return pi}function on(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function mn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,H,J){const j=M.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=H,M.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:J,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const J=M.get(A);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0};const Ar=O.createFramebuffer();this.setRenderTarget=function(A,H=0,J=0){N=A,C=H,L=J;let j=null,G=!1,_e=!1;if(A){const Te=M.get(A);if(Te.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(O.FRAMEBUFFER,Te.__webglFramebuffer),z.copy(A.viewport),k.copy(A.scissor),W=A.scissorTest,Se.viewport(z),Se.scissor(k),Se.setScissorTest(W),B=-1;return}else if(Te.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(Te.__hasExternalTextures)I.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(Te.__boundDepthTexture!==je){if(je!==null&&M.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(_e=!0);const Ve=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?j=Ve[H][J]:j=Ve[H],G=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?j=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?j=Ve[J]:j=Ve,z.copy(A.viewport),k.copy(A.scissor),W=A.scissorTest}else z.copy($).multiplyScalar(ue).floor(),k.copy(K).multiplyScalar(ue).floor(),W=he;if(J!==0&&(j=Ar),Se.bindFramebuffer(O.FRAMEBUFFER,j)&&Se.drawBuffers(A,j),Se.viewport(z),Se.scissor(k),Se.setScissorTest(W),G){const Te=M.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,Te.__webglTexture,J)}else if(_e){const Te=H;for(let De=0;De<A.textures.length;De++){const Ve=M.get(A.textures[De]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+De,Ve.__webglTexture,J,Te)}}else if(A!==null&&J!==0){const Te=M.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Te.__webglTexture,J)}B=-1},this.readRenderTargetPixels=function(A,H,J,j,G,_e,Le,Te=0){if(!(A&&A.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De){Se.bindFramebuffer(O.FRAMEBUFFER,De);try{const Ve=A.textures[Te],je=Ve.format,Ye=Ve.type;if(!ke.textureFormatReadable(je)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Ye)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-j&&J>=0&&J<=A.height-G&&(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Te),O.readPixels(H,J,j,G,ae.convert(je),ae.convert(Ye),_e))}finally{const Ve=N!==null?M.get(N).__webglFramebuffer:null;Se.bindFramebuffer(O.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,H,J,j,G,_e,Le,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De)if(H>=0&&H<=A.width-j&&J>=0&&J<=A.height-G){Se.bindFramebuffer(O.FRAMEBUFFER,De);const Ve=A.textures[Te],je=Ve.format,Ye=Ve.type;if(!ke.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,lt),O.bufferData(O.PIXEL_PACK_BUFFER,_e.byteLength,O.STREAM_READ),A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Te),O.readPixels(H,J,j,G,ae.convert(je),ae.convert(Ye),0);const At=N!==null?M.get(N).__webglFramebuffer:null;Se.bindFramebuffer(O.FRAMEBUFFER,At);const Xt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Dv(O,Xt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,lt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_e),O.deleteBuffer(lt),O.deleteSync(Xt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,J=0){const j=Math.pow(2,-J),G=Math.floor(A.image.width*j),_e=Math.floor(A.image.height*j),Le=H!==null?H.x:0,Te=H!==null?H.y:0;I.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Le,Te,G,_e),Se.unbindTexture()};const go=O.createFramebuffer(),gn=O.createFramebuffer();this.copyTextureToTexture=function(A,H,J=null,j=null,G=0,_e=null){_e===null&&(G!==0?(yl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=G,G=0):_e=0);let Le,Te,De,Ve,je,Ye,lt,At,Xt;const Yt=A.isCompressedTexture?A.mipmaps[_e]:A.image;if(J!==null)Le=J.max.x-J.min.x,Te=J.max.y-J.min.y,De=J.isBox3?J.max.z-J.min.z:1,Ve=J.min.x,je=J.min.y,Ye=J.isBox3?J.min.z:0;else{const Di=Math.pow(2,-G);Le=Math.floor(Yt.width*Di),Te=Math.floor(Yt.height*Di),A.isDataArrayTexture?De=Yt.depth:A.isData3DTexture?De=Math.floor(Yt.depth*Di):De=1,Ve=0,je=0,Ye=0}j!==null?(lt=j.x,At=j.y,Xt=j.z):(lt=0,At=0,Xt=0);const Lt=ae.convert(H.format),qe=ae.convert(H.type);let St;H.isData3DTexture?(I.setTexture3D(H,0),St=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(I.setTexture2DArray(H,0),St=O.TEXTURE_2D_ARRAY):(I.setTexture2D(H,0),St=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const _t=O.getParameter(O.UNPACK_ROW_LENGTH),pi=O.getParameter(O.UNPACK_IMAGE_HEIGHT),_o=O.getParameter(O.UNPACK_SKIP_PIXELS),mi=O.getParameter(O.UNPACK_SKIP_ROWS),wa=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Yt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Yt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ve),O.pixelStorei(O.UNPACK_SKIP_ROWS,je),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ye);const Nt=A.isDataArrayTexture||A.isData3DTexture,ti=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const Di=M.get(A),kn=M.get(H),ni=M.get(Di.__renderTarget),yu=M.get(kn.__renderTarget);Se.bindFramebuffer(O.READ_FRAMEBUFFER,ni.__webglFramebuffer),Se.bindFramebuffer(O.DRAW_FRAMEBUFFER,yu.__webglFramebuffer);for(let Rs=0;Rs<De;Rs++)Nt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,M.get(A).__webglTexture,G,Ye+Rs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,M.get(H).__webglTexture,_e,Xt+Rs)),O.blitFramebuffer(Ve,je,Le,Te,lt,At,Le,Te,O.DEPTH_BUFFER_BIT,O.NEAREST);Se.bindFramebuffer(O.READ_FRAMEBUFFER,null),Se.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||M.has(A)){const Di=M.get(A),kn=M.get(H);Se.bindFramebuffer(O.READ_FRAMEBUFFER,go),Se.bindFramebuffer(O.DRAW_FRAMEBUFFER,gn);for(let ni=0;ni<De;ni++)Nt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Di.__webglTexture,G,Ye+ni):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Di.__webglTexture,G),ti?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,kn.__webglTexture,_e,Xt+ni):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,kn.__webglTexture,_e),G!==0?O.blitFramebuffer(Ve,je,Le,Te,lt,At,Le,Te,O.COLOR_BUFFER_BIT,O.NEAREST):ti?O.copyTexSubImage3D(St,_e,lt,At,Xt+ni,Ve,je,Le,Te):O.copyTexSubImage2D(St,_e,lt,At,Ve,je,Le,Te);Se.bindFramebuffer(O.READ_FRAMEBUFFER,null),Se.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ti?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(St,_e,lt,At,Xt,Le,Te,De,Lt,qe,Yt.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(St,_e,lt,At,Xt,Le,Te,De,Lt,Yt.data):O.texSubImage3D(St,_e,lt,At,Xt,Le,Te,De,Lt,qe,Yt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_e,lt,At,Le,Te,Lt,qe,Yt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_e,lt,At,Yt.width,Yt.height,Lt,Yt.data):O.texSubImage2D(O.TEXTURE_2D,_e,lt,At,Le,Te,Lt,qe,Yt);O.pixelStorei(O.UNPACK_ROW_LENGTH,_t),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pi),O.pixelStorei(O.UNPACK_SKIP_PIXELS,_o),O.pixelStorei(O.UNPACK_SKIP_ROWS,mi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,wa),_e===0&&H.generateMipmaps&&O.generateMipmap(St),Se.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){C=0,L=0,N=null,Se.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const _m={type:"change"},Td={type:"start"},l_={type:"end"},hc=new Il,vm=new as,ow=Math.cos(70*Qi.DEG2RAD),an=new F,ii=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},th=1e-6;class aw extends uy{constructor(e,t=null){super(e,t),this.state=Rt.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xo.ROTATE,MIDDLE:Xo.DOLLY,RIGHT:Xo.PAN},this.touches={ONE:ko.ROTATE,TWO:ko.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new xr,this._lastTargetPosition=new F,this._quat=new xr().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yp,this._sphericalDelta=new Yp,this._scale=1,this._panOffset=new F,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new F,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cw.bind(this),this._onPointerDown=lw.bind(this),this._onPointerUp=uw.bind(this),this._onContextMenu=_w.bind(this),this._onMouseWheel=dw.bind(this),this._onKeyDown=pw.bind(this),this._onTouchStart=mw.bind(this),this._onTouchMove=gw.bind(this),this._onMouseDown=hw.bind(this),this._onMouseMove=fw.bind(this),this._interceptControlDown=vw.bind(this),this._interceptControlUp=xw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_m),this.update(),this.state=Rt.NONE}update(e=null){const t=this.object.position;an.copy(t).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ii:n>Math.PI&&(n-=ii),i<-Math.PI?i+=ii:i>Math.PI&&(i-=ii),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),t.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=an.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(hc.origin.copy(this.object.position),hc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hc.direction))<ow?this.object.lookAt(this.target):(vm.setFromNormalAndCoplanarPoint(this.object.up,this.target),hc.intersectPlane(vm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>th||8*(1-this._lastQuaternion.dot(this.object.quaternion))>th||this._lastTargetPosition.distanceToSquared(this.target)>th?(this.dispatchEvent(_m),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ii/60*this.autoRotateSpeed*e:ii/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){an.setFromMatrixColumn(t,0),an.multiplyScalar(-e),this._panOffset.add(an)}_panUp(e,t){this.screenSpacePanning===!0?an.setFromMatrixColumn(t,1):(an.setFromMatrixColumn(t,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(e),this._panOffset.add(an)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;an.copy(i).sub(this.target);let s=an.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/t.clientHeight),this._rotateUp(ii*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/t.clientHeight),this._rotateUp(ii*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function lw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function cw(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function uw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(l_),this.state=Rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function hw(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Rt.DOLLY;break;case Xo.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Rt.ROTATE}break;case Xo.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Rt.PAN}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Td)}function fw(r){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function dw(r){this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE||(r.preventDefault(),this.dispatchEvent(Td),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(l_))}function pw(r){this.enabled!==!1&&this._handleKeyDown(r)}function mw(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case ko.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Rt.TOUCH_ROTATE;break;case ko.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case ko.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Rt.TOUCH_DOLLY_PAN;break;case ko.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(Td)}function gw(r){switch(this._trackPointer(r),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Rt.NONE}}function _w(r){this.enabled!==!1&&r.preventDefault()}function vw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Or(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function c_(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ha={duration:.5,overwrite:!1,delay:0},wd,Rn,kt,Vi=1e8,It=1/Vi,Tf=Math.PI*2,yw=Tf/4,Sw=0,u_=Math.sqrt,Mw=Math.cos,bw=Math.sin,bn=function(e){return typeof e=="string"},$t=function(e){return typeof e=="function"},$r=function(e){return typeof e=="number"},Ed=function(e){return typeof e>"u"},Sr=function(e){return typeof e=="object"},li=function(e){return e!==!1},Ad=function(){return typeof window<"u"},fc=function(e){return $t(e)||bn(e)},h_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bn=Array.isArray,Tw=/random\([^)]+\)/g,ww=/,\s*/g,xm=/(?:-?\.?\d|\.)+/gi,f_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,d_=/[+-]=-?[.\d]+/,Ew=/[^,'"\[\]\s]+/gi,Aw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,or,wf,Rd,Pi={},jc={},p_,m_=function(e){return(jc=fa(e,Pi))&&fi},Cd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ml=function(e,t){return!t&&console.warn(e)},g_=function(e,t){return e&&(Pi[e]=t)&&jc&&(jc[e]=t)||Pi},bl=function(){return 0},Rw={suppressEvents:!0,isStart:!0,kill:!1},Ic={suppressEvents:!0,kill:!1},Cw={suppressEvents:!0},Pd={},gs=[],Ef={},__,Si={},ih={},ym=30,Nc=[],Ld="",Dd=function(e){var t=e[0],n,i;if(Sr(t)||$t(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Nc.length;i--&&!Nc[i].targetTest(t););n=Nc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new V_(e[i],n)))||e.splice(i,1);return e},Zs=function(e){return e._gsap||Dd(Hi(e))[0]._gsap},v_=function(e,t,n){return(n=e[t])&&$t(n)?e[t]():Ed(n)&&e.getAttribute&&e.getAttribute(t)||n},ci=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},$o=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Pw=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Kc=function(){var e=gs.length,t=gs.slice(0),n,i;for(Ef={},gs.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Id=function(e){return!!(e._initted||e._startAt||e.add)},x_=function(e,t,n,i){gs.length&&!Rn&&Kc(),e.render(t,n,!!(Rn&&t<0&&Id(e))),gs.length&&!Rn&&Kc()},y_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ew).length<2?t:bn(e)?e.trim():e},S_=function(e){return e},Li=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Lw=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},fa=function(e,t){for(var n in t)e[n]=t[n];return e},Sm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Sr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Zc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},tl=function(e){var t=e.parent||Vt,n=e.keyframes?Lw(Bn(e.keyframes)):Li;if(li(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Dw=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},M_=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},gu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ss=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Js=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Iw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Af=function(e,t,n,i){return e._startAt&&(Rn?e._startAt.revert(Ic):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Nw=function r(e){return!e||e._ts&&r(e.parent)},Mm=function(e){return e._repeat?da(e._tTime,e=e.duration()+e._rDelay)*e:0},da=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},Jc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_u=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},vu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_u(e),n._dirty||Js(n,e)),e},b_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Jc(e.rawTime(),t),(!t._dur||Ol(0,t.totalDuration(),n)-t._tTime>It)&&t.render(n,!0)),Js(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-It}},ur=function(e,t,n,i){return t.parent&&Ss(t),t._start=zt(($r(n)?n:n||e!==Vt?Ni(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),M_(e,t,"_first","_last",e._sort?"_start":0),Rf(t)||(e._recent=t),i||b_(e,t),e._ts<0&&vu(e,e._tTime),e},T_=function(e,t){return(Pi.ScrollTrigger||Cd("scrollTrigger",t))&&Pi.ScrollTrigger.create(t,e)},w_=function(e,t,n,i,s){if(Ud(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&__!==Ti.frame)return gs.push(e),e._lazy=[s,i],1},Uw=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Rf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ow=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Uw(e)&&!(!e._initted&&Rf(e))||(e._ts<0||e._dp._ts<0)&&!Rf(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ol(0,e._tDur,t),u=da(l,a),e._yoyo&&u&1&&(o=1-o),u!==da(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Rn||i||e._zTime===It||!t&&e._zTime){if(!e._initted&&w_(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?It:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Af(e,t,n,!0),e._onUpdate&&!n&&Ei(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ss(e,1),!n&&!Rn&&(Ei(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Fw=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},pa=function(e,t,n,i){var s=e._repeat,o=zt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:zt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&vu(e,e._tTime=e._tDur*a),e.parent&&_u(e),n||Js(e.parent,e),e},bm=function(e){return e instanceof $n?Js(e):pa(e,e._dur)},Bw={_start:0,endTime:bl,totalDuration:bl},Ni=function r(e,t,n){var i=e.labels,s=e._recent||Bw,o=e.duration()>=Vi?s.endTime(!1):e._dur,a,l,c;return bn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Bn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},nl=function(e,t,n){var i=$r(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=li(l.vars.inherit)&&l.parent;o.immediateRender=li(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new nn(t[0],o,t[s+1])},As=function(e,t){return e||e===0?t(e):t},Ol=function(e,t,n){return n<e?e:n>t?t:n},On=function(e,t){return!bn(e)||!(t=Aw.exec(e))?"":t[1]},kw=function(e,t,n){return As(n,function(i){return Ol(e,t,i)})},Cf=[].slice,E_=function(e,t){return e&&Sr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Sr(e[0]))&&!e.nodeType&&e!==or},zw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return bn(i)&&!t||E_(i,1)?(s=n).push.apply(s,Hi(i)):n.push(i)})||n},Hi=function(e,t,n){return kt&&!t&&kt.selector?kt.selector(e):bn(e)&&!n&&(wf||!ma())?Cf.call((t||Rd).querySelectorAll(e),0):Bn(e)?zw(e,n):E_(e)?Cf.call(e,0):e?[e]:[]},Pf=function(e){return e=Hi(e)[0]||Ml("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Hi(t,n.querySelectorAll?n:n===e?Ml("Invalid scope")||Rd.createElement("div"):e)}},A_=function(e){return e.sort(function(){return .5-Math.random()})},R_=function(e){if($t(e))return e;var t=Sr(e)?e:{each:e},n=Qs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return bn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,v,x,S,b,w,E,R,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,Vi])[1],!y){for(E=-Vi;E<(E=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=l?Math.min(y,_)*u-.5:i%y,v=y===Vi?0:l?_*h/y-.5:i/y|0,E=0,R=Vi,w=0;w<_;w++)x=w%y-p,S=v-(w/y|0),m[w]=b=c?Math.abs(c==="y"?S:x):u_(x*x+S*S),b>E&&(E=b),b<R&&(R=b);i==="random"&&A_(m),m.max=E-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=On(t.amount||t.each)||0,n=n&&_<0?B_(n):n}return _=(m[f]-m.min)/m.max||0,zt(m.b+(n?n(_):_)*m.v)+m.u}},Lf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+($r(n)?0:On(n))}},C_=function(e,t){var n=Bn(e),i,s;return!n&&Sr(e)&&(i=n=e.radius||Vi,e.values?(e=Hi(e.values),(s=!$r(e[0]))&&(i*=i)):e=Lf(e.increment)),As(t,n?$t(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Vi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||$r(o)?u:u+On(o)}:Lf(e))},P_=function(e,t,n,i){return As(Bn(e)?!t:n===!0?!!(n=0):!i,function(){return Bn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Vw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Hw=function(e,t){return function(n){return e(parseFloat(n))+(t||On(n))}},Gw=function(e,t,n){return D_(e,t,0,1,n)},L_=function(e,t,n){return As(n,function(i){return e[~~t(i)]})},Ww=function r(e,t,n){var i=t-e;return Bn(e)?L_(e,r(0,e.length),t):As(n,function(s){return(i+(s-e)%i)%i+e})},Xw=function r(e,t,n){var i=t-e,s=i*2;return Bn(e)?L_(e,r(0,e.length-1),t):As(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Tl=function(e){return e.replace(Tw,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(ww);return P_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},D_=function(e,t,n,i,s){var o=t-e,a=i-n;return As(s,function(l){return n+((l-e)/o*a||0)})},Yw=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=bn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Bn(e)&&!Bn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=fa(Bn(e)?[]:{},e));if(!u){for(l in t)Nd.call(a,e,l,"get",t[l]);s=function(g){return Bd(g,a)||(o?e.p:e)}}}return As(n,s)},Tm=function(e,t,n){var i=e.labels,s=Vi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ei=function(e,t,n){var i=e.vars,s=i[t],o=kt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&gs.length&&Kc(),a&&(kt=a),u=l?s.apply(c,l):s.call(c),kt=o,u},Wa=function(e){return Ss(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Rn),e.progress()<1&&Ei(e,"onInterrupt"),e},Vo,I_=[],N_=function(e){if(e)if(e=!e.name&&e.default||e,Ad()||e.headless){var t=e.name,n=$t(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:bl,render:Bd,add:Nd,kill:lE,modifier:aE,rawVars:0},o={targetTest:0,get:0,getSetter:Fd,aliases:{},register:0};if(ma(),e!==i){if(Si[t])return;Li(i,Li(Zc(e,s),o)),fa(i.prototype,fa(s,Zc(e,o))),Si[i.prop=t]=i,e.targetTest&&(Nc.push(i),Pd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}g_(t,i),e.register&&e.register(fi,i,ui)}else I_.push(e)},Dt=255,Xa={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},rh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},U_=function(e,t,n){var i=e?$r(e)?[e>>16,e>>8&Dt,e&Dt]:0:Xa.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Xa[e])i=Xa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Dt,i&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(xm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=rh(l+1/3,s,o),i[1]=rh(l,s,o),i[2]=rh(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(f_),n&&i.length<4&&(i[3]=1),i}else i=e.match(xm)||Xa.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Dt,o=i[1]/Dt,a=i[2]/Dt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},O_=function(e){var t=[],n=[],i=-1;return e.split(_s).forEach(function(s){var o=s.match(zo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},wm=function(e,t,n){var i="",s=(e+i).match(_s),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=U_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=O_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(_s,"1").split(zo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(_s),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},_s=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Xa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),qw=/hsl[a]?\(/,F_=function(e){var t=e.join(" "),n;if(_s.lastIndex=0,_s.test(t))return n=qw.test(t),e[1]=wm(e[1],n),e[0]=wm(e[0],n,O_(e[1])),!0},wl,Ti=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,v=m===!0,x,S,b,w;if((p>e||p<0)&&(n+=p-t),i+=p,b=i-n,x=b-o,(x>0||v)&&(w=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,o+=x+(x>=s?4:s-x),S=1),v||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](b,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){p_&&(!wf&&Ad()&&(or=wf=window,Rd=or.document||{},Pi.gsap=fi,(or.gsapVersions||(or.gsapVersions=[])).push(fi.version),m_(jc||or.GreenSockGlobals||!or.gsap&&or||{}),I_.forEach(N_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},wl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),wl=0,c=bl},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,v){var x=p?function(S,b,w,E){m(S,b,w,E),h.remove(x)}:m;return h.remove(m),a[v?"unshift":"push"](x),ma(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),ma=function(){return!wl&&Ti.wake()},pt={},$w=/^[\d.\-M][\d.\-,\s]/,jw=/["']/g,Kw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(jw,"").trim():+c,i=l.substr(a+1).trim();return t},Zw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Jw=function(e){var t=(e+"").split("("),n=pt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Kw(t[1])]:Zw(e).split(",").map(y_)):pt._CE&&$w.test(e)?pt._CE("",e):n},B_=function(e){return function(t){return 1-e(1-t)}},k_=function r(e,t){for(var n=e._first,i;n;)n instanceof $n?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Qs=function(e,t){return e&&($t(e)?e:pt[e]||Jw(e))||t},mo=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return ci(e,function(a){pt[a]=Pi[a]=s,pt[o=a.toLowerCase()]=n;for(var l in s)pt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pt[a+"."+l]=s[l]}),s},z_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sh=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Tf*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*bw((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:z_(a);return s=Tf/s,l.config=function(c,u){return r(e,c,u)},l},oh=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:z_(n);return i.config=function(s){return r(e,s)},i};ci("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;mo(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;mo("Elastic",sh("in"),sh("out"),sh());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};mo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);mo("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});mo("Circ",function(r){return-(u_(1-r*r)-1)});mo("Sine",function(r){return r===1?1:-Mw(r*yw)+1});mo("Back",oh("in"),oh("out"),oh());pt.SteppedEase=pt.steps=Pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-It;return function(a){return((i*Ol(0,o,a)|0)+s)*n}}};ha.ease=pt["quad.out"];ci("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ld+=r+","+r+"Params,"});var V_=function(e,t){this.id=Sw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:v_,this.set=t?t.getSetter:Fd},El=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,pa(this,+t.duration,1,1),this.data=t.data,kt&&(this._ctx=kt,kt.data.push(this)),wl||Ti.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,pa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ma(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(vu(this,n),!s._dp||s.parent||b_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ur(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===It||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),x_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?da(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Jc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-It?0:this._rts,this.totalTime(Ol(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),_u(this),Iw(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ma(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==It&&(this._tTime-=It)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=zt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ur(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(li(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Jc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Cw);var i=Rn;return Rn=n,Id(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Rn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,bm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,bm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ni(this,n),li(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,li(i)),this._dur||(this._zTime=-It),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-It:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-It)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=$t(n)?n:S_,l=function(){var u=i.then;i.then=null,s&&s(),$t(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Wa(this)},r})();Li(El.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});var $n=(function(r){c_(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=li(n.sortChildren),Vt&&ur(n.parent||Vt,Or(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&T_(Or(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return nl(0,arguments,this),this},t.from=function(i,s,o){return nl(1,arguments,this),this},t.fromTo=function(i,s,o,a){return nl(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,tl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new nn(i,s,Ni(this,o),1),this},t.call=function(i,s,o){return ur(this,nn.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new nn(i,o,Ni(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,tl(o).immediateRender=li(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,tl(a).immediateRender=li(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:zt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,v,x,S,b,w,E;if(this!==Vt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,x=this._ts,p=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=zt(u%m),u===l?(_=this._repeat,f=c):(b=zt(u/m),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=da(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),w&&_&1&&(f=c-f,E=1),_!==b&&!this._lock){var R=w&&b&1,y=R===(w&&_&1);if(_<b&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(E?0:zt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ei(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;k_(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Fw(this,zt(a),zt(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!b&&(Ei(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){v=0,g&&(u+=this._zTime=-It);break}}d=g}else{d=this._last;for(var T=i<0?i:f;d;){if(g=d._prev,(d._act||T<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,o||Rn&&Id(d)),f!==this._time||!this._ts&&!p){v=0,g&&(u+=this._zTime=T?-It:It);break}}d=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-It)._zTime=f>=a?1:-1,this._ts))return this._start=S,_u(this),this.render(i,s,o);this._onUpdate&&!s&&Ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ss(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Ei(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if($r(s)||(s=Ni(this,s,i)),!(i instanceof El)){if(Bn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(bn(i))return this.addLabel(i,s);if($t(i))i=nn.delayedCall(0,i);else return this}return this!==i?ur(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Vi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof nn?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return bn(i)?this.removeLabel(i):$t(i)?this.killTweensOf(i):(i.parent===this&&gu(this,i),i===this._recent&&(this._recent=this._last),Js(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(Ti.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Ni(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=nn.delayedCall(0,s||bl,o);return a.data="isPause",this._hasPause=1,ur(this,a,Ni(this,i))},t.removePause=function(i){var s=this._first;for(i=Ni(this,i);s;)s._start===i&&s.data==="isPause"&&Ss(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)us!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Hi(i),l=this._first,c=$r(s),u;l;)l instanceof nn?Pw(l._targets,a)&&(c?(!us||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Ni(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=nn.to(o,Li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||It,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&pa(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Li({startAt:{time:Ni(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Tm(this,Ni(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Tm(this,Ni(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+It)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=zt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Js(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Js(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Vi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ur(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=zt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;pa(o,o===Vt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Vt._ts&&(x_(Vt,Jc(i,Vt)),__=Ti.frame),Ti.frame>=ym){ym+=Ri.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&Ri.autoSleep&&Ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ti.sleep()}}},e})(El);Li($n.prototype,{_lock:0,_hasPause:0,_forcing:0});var Qw=function(e,t,n,i,s,o,a){var l=new ui(this._pt,e,t,0,1,q_,null,s),c=0,u=0,h,f,d,g,_,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Tl(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),f=n.match(nh)||[];h=nh.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?$o(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=nh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(d_.test(i)||p)&&(l.e=0),this._pt=l,l},Nd=function(e,t,n,i,s,o,a,l,c,u){$t(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:$t(h)?c?e[t.indexOf("set")||!$t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=$t(h)?c?rE:X_:Od,g;if(bn(i)&&(~i.indexOf("random(")&&(i=Tl(i)),i.charAt(1)==="="&&(g=$o(f,i)+(On(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Df)return!isNaN(f*i)&&i!==""?(g=new ui(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?oE:Y_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Cd(t,i),Qw.call(this,e,t,f,i,d,l||Ri.stringFilter,c))},eE=function(e,t,n,i,s){if($t(e)&&(e=il(e,s,t,n,i)),!Sr(e)||e.style&&e.nodeType||Bn(e)||h_(e))return bn(e)?il(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=il(e[a],s,t,n,i);return o},H_=function(e,t,n,i,s,o){var a,l,c,u;if(Si[e]&&(a=new Si[e]).init(s,a.rawVars?t[e]:eE(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new ui(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Vo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},us,Df,Ud=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!wd,S=e.timeline,b,w,E,R,y,T,C,L,N,B,V,z,k;if(S&&(!f||!s)&&(s="none"),e._ease=Qs(s,ha.ease),e._yEase=h?B_(Qs(h===!0?s:h,ha.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||f&&!i.stagger){if(L=m[0]?Zs(m[0]).harness:0,z=L&&i[L.prop],b=Zc(i,Pd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Ic:Rw),_._lazy=0),o){if(Ss(e._startAt=nn.set(m,Li({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&li(l),startAt:null,delay:0,onUpdate:c&&function(){return Ei(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn||!a&&!d)&&e._startAt.revert(Ic),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),E=Li({overwrite:!1,data:"isFromStart",lazy:a&&!_&&li(l),immediateRender:a,stagger:0,parent:p},b),z&&(E[L.prop]=z),Ss(e._startAt=nn.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn?e._startAt.revert(Ic):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,It,It);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&li(l)||l&&!g,w=0;w<m.length;w++){if(y=m[w],C=y._gsap||Dd(m)[w]._gsap,e._ptLookup[w]=B={},Ef[C.id]&&gs.length&&Kc(),V=v===m?w:v.indexOf(y),L&&(N=new L).init(y,z||b,e,V,v)!==!1&&(e._pt=R=new ui(e._pt,y,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(W){B[W]=R}),N.priority&&(T=1)),!L||z)for(E in b)Si[E]&&(N=H_(E,b,e,V,y,v))?N.priority&&(T=1):B[E]=R=Nd.call(e,y,E,"get",b[E],V,v,0,i.stringFilter);e._op&&e._op[w]&&e.kill(y,e._op[w]),x&&e._pt&&(us=e,Vt.killTweensOf(y,B,e.globalTime(t)),k=!e.parent,us=0),e._pt&&l&&(Ef[C.id]=1)}T&&$_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,f&&t<=0&&S.render(Vi,!0,!0)},tE=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Df=1,e.vars[t]="+=0",Ud(e,a),Df=0,l?Ml(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Kt(n)+On(h.e)),h.b&&(h.b=u.s+On(h.b))},nE=function(e,t){var n=e[0]?Zs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=fa({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},iE=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Bn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},il=function(e,t,n,i,s){return $t(e)?e.call(t,n,i,s):bn(e)&&~e.indexOf("random(")?Tl(e):e},G_=Ld+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",W_={};ci(G_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return W_[r]=1});var nn=(function(r){c_(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:tl(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=i.parent||Vt,x=(Bn(n)||h_(n)?$r(n[0]):"length"in i)?[n]:Hi(n),S,b,w,E,R,y,T,C;if(a._targets=x.length?Dd(x):Ml("GSAP target "+n+" not found. https://gsap.com",!Ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||fc(c)||fc(u)){if(i=a.vars,S=a.timeline=new $n({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),S.kill(),S.parent=S._dp=Or(a),S._start=0,f||fc(c)||fc(u)){if(E=x.length,T=f&&R_(f),Sr(f))for(R in f)~G_.indexOf(R)&&(C||(C={}),C[R]=f[R]);for(b=0;b<E;b++)w=Zc(i,W_),w.stagger=0,p&&(w.yoyoEase=p),C&&fa(w,C),y=x[b],w.duration=+il(c,Or(a),b,y,x),w.delay=(+il(u,Or(a),b,y,x)||0)-a._delay,!f&&E===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),S.to(y,w,T?T(b,y,x):0),S._ease=pt.none;S.duration()?c=u=0:a.timeline=0}else if(g){tl(Li(S.vars.defaults,{ease:"none"})),S._ease=Qs(g.ease||i.ease||"none");var L=0,N,B,V;if(Bn(g))g.forEach(function(z){return S.to(x,z,">")}),S.duration();else{w={};for(R in g)R==="ease"||R==="easeEach"||iE(R,g[R],w,g.easeEach);for(R in w)for(N=w[R].sort(function(z,k){return z.t-k.t}),L=0,b=0;b<N.length;b++)B=N[b],V={ease:B.e,duration:(B.t-(b?N[b-1].t:0))/100*c},V[R]=B.v,S.to(x,V,L),L+=V.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!wd&&(us=Or(a),Vt.killTweensOf(x),us=0),ur(v,Or(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===zt(v._time)&&li(h)&&Nw(Or(a))&&v.data!=="nested")&&(a._tTime=-It,a.render(Math.max(0,-u)||0)),m&&T_(Or(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-It&&!u?l:i<It?0:i,f,d,g,_,m,p,v,x,S;if(!c)Ow(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=zt(h%_),h===l?(g=this._repeat,f=c):(m=zt(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(S=this._yEase,f=c-f),m=da(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(x&&this._yEase&&k_(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(zt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(w_(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(S||this._ease)(f/c),this._from&&(this.ratio=v=1-v),!a&&h&&!s&&!m&&(Ei(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Af(this,i,s,o),Ei(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Ei(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Af(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ss(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Ei(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){wl||Ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ud(this,c),u=this._ease(c/this._dur),tE(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(vu(this,0),this.parent||M_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Wa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,us&&us.vars.overwrite!==!0)._first||Wa(this),this.parent&&o!==this.timeline.totalDuration()&&pa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Hi(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&Dw(a,l))return s==="all"&&(this._pt=0),Wa(this);for(h=this._op=this._op||[],s!=="all"&&(bn(s)&&(_={},ci(s,function(v){return _[v]=1}),s=_),s=nE(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&gu(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Wa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return nl(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return nl(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Vt.killTweensOf(i,s,o)},e})(El);Li(nn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ci("staggerTo,staggerFrom,staggerFromTo",function(r){nn[r]=function(){var e=new $n,t=Cf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Od=function(e,t,n){return e[t]=n},X_=function(e,t,n){return e[t](n)},rE=function(e,t,n,i){return e[t](i.fp,n)},sE=function(e,t,n){return e.setAttribute(t,n)},Fd=function(e,t){return $t(e[t])?X_:Ed(e[t])&&e.setAttribute?sE:Od},Y_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},oE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},q_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Bd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},aE=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},lE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?gu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},cE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},$_=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},ui=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Y_,this.d=l||this,this.set=c||Od,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=cE,this.m=n,this.mt=s,this.tween=i},r})();ci(Ld+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Pd[r]=1});Pi.TweenMax=Pi.TweenLite=nn;Pi.TimelineLite=Pi.TimelineMax=$n;Vt=new $n({sortChildren:!1,defaults:ha,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ri.stringFilter=F_;var eo=[],Uc={},uE=[],Em=0,hE=0,ah=function(e){return(Uc[e]||uE).map(function(t){return t()})},If=function(){var e=Date.now(),t=[];e-Em>2&&(ah("matchMediaInit"),eo.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=or.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),ah("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Em=e,ah("matchMedia"))},j_=(function(){function r(t,n){this.selector=n&&Pf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=hE++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){$t(n)&&(s=i,i=n,n=$t);var o=this,a=function(){var c=kt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Pf(s)),kt=o,h=i.apply(o,arguments),$t(h)&&o._r.push(h),kt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===$t?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=kt;kt=null,n(this),kt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof nn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof $n?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof nn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=eo.length;o--;)eo[o].id===this.id&&eo.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),fE=(function(){function r(t){this.contexts=[],this.scope=t,kt&&kt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Sr(n)||(n={matches:n});var o=new j_(0,s||this.scope),a=o.conditions={},l,c,u;kt&&!o.selector&&(o.selector=kt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=or.matchMedia(n[c]),l&&(eo.indexOf(o)<0&&eo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(If):l.addEventListener("change",If)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Qc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return N_(i)})},timeline:function(e){return new $n(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){bn(e)&&(e=Hi(e)[0]);var s=Zs(e||{}).get,o=n?S_:y_;return n==="native"&&(n=""),e&&(t?o((Si[t]&&Si[t].get||s)(e,t,n,i)):function(a,l,c){return o((Si[a]&&Si[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Hi(e),e.length>1){var i=e.map(function(u){return fi.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Si[t],a=Zs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Vo._pt=0,h.init(e,n?u+n:u,Vo,0,[e]),h.render(1,h),Vo._pt&&Bd(1,Vo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=fi.to(e,Li((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qs(e.ease,ha.ease)),Sm(ha,e||{})},config:function(e){return Sm(Ri,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Si[a]&&!Pi[a]&&Ml(t+" effect requires "+a+" plugin.")}),ih[t]=function(a,l,c){return n(Hi(a),Li(l||{},s),c)},o&&($n.prototype[t]=function(a,l,c){return this.add(ih[t](a,Sr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){pt[e]=Qs(t)},parseEase:function(e,t){return arguments.length?Qs(e,t):pt},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new $n(e),i,s;for(n.smoothChildTiming=li(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,i=Vt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof nn&&i.vars.onComplete===i._targets[0]))&&ur(n,i,i._start-i._delay),i=s;return ur(Vt,n,0),n},context:function(e,t){return e?new j_(e,t):kt},matchMedia:function(e){return new fE(e)},matchMediaRefresh:function(){return eo.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||If()},addEventListener:function(e,t){var n=Uc[e]||(Uc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Uc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Ww,wrapYoyo:Xw,distribute:R_,random:P_,snap:C_,normalize:Gw,getUnit:On,clamp:kw,splitColor:U_,toArray:Hi,selector:Pf,mapRange:D_,pipe:Vw,unitize:Hw,interpolate:Yw,shuffle:A_},install:m_,effects:ih,ticker:Ti,updateRoot:$n.updateRoot,plugins:Si,globalTimeline:Vt,core:{PropTween:ui,globals:g_,Tween:nn,Timeline:$n,Animation:El,getCache:Zs,_removeLinkedListItem:gu,reverting:function(){return Rn},context:function(e){return e&&kt&&(kt.data.push(e),e._ctx=kt),kt},suppressOverwrites:function(e){return wd=e}}};ci("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Qc[r]=nn[r]});Ti.add($n.updateRoot);Vo=Qc.to({},{duration:0});var dE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},pE=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=dE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},lh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(bn(s)&&(l={},ci(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}pE(a,s)}}}},fi=Qc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Rn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},lh("roundProps",Lf),lh("modifiers"),lh("snap",C_))||Qc;nn.version=$n.version=fi.version="3.14.2";p_=1;Ad()&&ma();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;var Am,hs,jo,kd,qs,Rm,zd,mE=function(){return typeof window<"u"},jr={},zs=180/Math.PI,Ko=Math.PI/180,No=Math.atan2,Cm=1e8,Vd=/([A-Z])/g,gE=/(left|right|width|margin|padding|x)/i,_E=/[\s,\(]\S/,dr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},yE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},SE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},K_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Z_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ME=function(e,t,n){return e.style[t]=n},bE=function(e,t,n){return e.style.setProperty(t,n)},TE=function(e,t,n){return e._gsap[t]=n},wE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},EE=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},AE=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Gt="transform",hi=Gt+"Origin",RE=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in jr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=dr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Fr(i,a)}):this.tfm[e]=o.x?o[e]:Fr(i,e),e===hi&&(this.tfm.zOrigin=o.zOrigin);else return dr.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Gt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hi,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},J_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},CE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Vd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=zd(),(!s||!s.isStart)&&!n[Gt]&&(J_(n),i.zOrigin&&n[hi]&&(n[hi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Q_=function(e,t){var n={target:e,props:[],revert:CE,save:RE};return e._gsap||fi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},e0,Uf=function(e,t){var n=hs.createElementNS?hs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hs.createElement(e);return n&&n.style?n:hs.createElement(e)},Ai=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Vd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ga(t)||t,1)||""},Pm="O,Moz,ms,Ms,Webkit".split(","),ga=function(e,t,n){var i=t||qs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Pm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Pm[o]:"")+e},Of=function(){mE()&&window.document&&(Am=window,hs=Am.document,jo=hs.documentElement,qs=Uf("div")||{style:{}},Uf("div"),Gt=ga(Gt),hi=Gt+"Origin",qs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",e0=!!ga("perspective"),zd=fi.core.reverting,kd=1)},Lm=function(e){var t=e.ownerSVGElement,n=Uf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),jo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),jo.removeChild(n),s},Dm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},t0=function(e){var t,n;try{t=e.getBBox()}catch{t=Lm(e),n=1}return t&&(t.width||t.height)||n||(t=Lm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Dm(e,["x","cx","x1"])||0,y:+Dm(e,["y","cy","y1"])||0,width:0,height:0}:t},n0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&t0(e))},Ms=function(e,t){if(t){var n=e.style,i;t in jr&&t!==hi&&(t=Gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Vd,"-$1").toLowerCase())):n.removeAttribute(t)}},fs=function(e,t,n,i,s,o){var a=new ui(e._pt,t,n,0,1,o?Z_:K_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Im={deg:1,rad:1,turn:1},PE={grid:1,flex:1},bs=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=qs.style,l=gE.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Im[i]||Im[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&n0(e),(d||o==="%")&&(jr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Kt(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===hs||!_.appendChild)&&(_=hs.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Ti.time&&!m.uncache)return Kt(s/m.width*h);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+i,g=e[u],v?e.style[t]=v:Ms(e,t)}else(d||o==="%")&&!PE[Ai(_,"display")]&&(a.position=Ai(e,"position")),_===e&&(a.position="static"),_.appendChild(qs),g=qs[u],_.removeChild(qs),a.position="absolute";return l&&d&&(m=Zs(_),m.time=Ti.time,m.width=_[u]),Kt(f?g*s/h:g&&s?h/g*s:0)},Fr=function(e,t,n,i){var s;return kd||Of(),t in dr&&t!=="transform"&&(t=dr[t],~t.indexOf(",")&&(t=t.split(",")[0])),jr[t]&&t!=="transform"?(s=Rl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:tu(Ai(e,hi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=eu[t]&&eu[t](e,t,n)||Ai(e,t)||v_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?bs(e,t,s,n)+n:s},LE=function(e,t,n,i){if(!n||n==="none"){var s=ga(t,e,1),o=s&&Ai(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ai(e,"borderTopColor"))}var a=new ui(this._pt,e.style,t,0,1,q_),l=0,c=0,u,h,f,d,g,_,m,p,v,x,S,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ai(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ai(e,t)||i,_?e.style[t]=_:Ms(e,t)),u=[n,i],F_(u),n=u[0],i=u[1],f=n.match(zo)||[],b=i.match(zo)||[],b.length){for(;h=zo.exec(i);)m=h[0],v=i.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=$o(d,m)+S),p=parseFloat(m),x=m.substr((p+"").length),l=zo.lastIndex-x.length,x||(x=x||Ri.units[t]||S,l===i.length&&(i+=x,a.e+=x)),S!==x&&(d=bs(e,t,_,x)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Z_:K_;return d_.test(i)&&(a.e=0),this._pt=a,a},Nm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},DE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Nm[n]||n,t[1]=Nm[i]||i,t.join(" ")},IE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],jr[a]&&(l=1,a=a==="transformOrigin"?hi:Gt),Ms(n,a);l&&(Ms(n,Gt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Rl(n,1),o.uncache=1,J_(i)))}},eu={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new ui(e._pt,t,n,0,0,IE);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Al=[1,0,0,1,0,0],i0={},r0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Um=function(e){var t=Ai(e,Gt);return r0(t)?Al:t.substr(7).match(f_).map(Kt)},Hd=function(e,t){var n=e._gsap||Zs(e),i=e.style,s=Um(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Al:s):(s===Al&&!e.offsetParent&&e!==jo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,jo.appendChild(e)),s=Um(e),l?i.display=l:Ms(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):jo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ff=function(e,t,n,i,s,o){var a=e._gsap,l=s||Hd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,b=parseFloat(x[1])||0,w,E,R,y;n?l!==Al&&(E=d*m-g*_)&&(R=S*(m/E)+b*(-_/E)+(_*v-m*p)/E,y=S*(-g/E)+b*(d/E)-(d*v-g*p)/E,S=R,b=y):(w=t0(e),S=w.x+(~x[0].indexOf("%")?S/100*w.width:S),b=w.y+(~(x[1]||x[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&a.smooth?(p=S-c,v=b-u,a.xOffset=h+(p*d+v*_)-p,a.yOffset=f+(p*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[hi]="0px 0px",o&&(fs(o,a,"xOrigin",c,S),fs(o,a,"yOrigin",u,b),fs(o,a,"xOffset",h,a.xOffset),fs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+b)},Rl=function(e,t){var n=e._gsap||new V_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ai(e,hi)||"0",u,h,f,d,g,_,m,p,v,x,S,b,w,E,R,y,T,C,L,N,B,V,z,k,W,Q,D,ie,se,ue,pe,ce;return u=h=f=_=m=p=v=x=S=0,d=g=1,n.svg=!!(e.getCTM&&n0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),i.scale=i.rotate=i.translate="none"),E=Hd(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),Ff(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,E)),b=n.xOrigin||0,w=n.yOrigin||0,E!==Al&&(C=E[0],L=E[1],N=E[2],B=E[3],u=V=E[4],h=z=E[5],E.length===6?(d=Math.sqrt(C*C+L*L),g=Math.sqrt(B*B+N*N),_=C||L?No(L,C)*zs:0,v=N||B?No(N,B)*zs+_:0,v&&(g*=Math.abs(Math.cos(v*Ko))),n.svg&&(u-=b-(b*C+w*N),h-=w-(b*L+w*B))):(ce=E[6],ue=E[7],D=E[8],ie=E[9],se=E[10],pe=E[11],u=E[12],h=E[13],f=E[14],R=No(ce,se),m=R*zs,R&&(y=Math.cos(-R),T=Math.sin(-R),k=V*y+D*T,W=z*y+ie*T,Q=ce*y+se*T,D=V*-T+D*y,ie=z*-T+ie*y,se=ce*-T+se*y,pe=ue*-T+pe*y,V=k,z=W,ce=Q),R=No(-N,se),p=R*zs,R&&(y=Math.cos(-R),T=Math.sin(-R),k=C*y-D*T,W=L*y-ie*T,Q=N*y-se*T,pe=B*T+pe*y,C=k,L=W,N=Q),R=No(L,C),_=R*zs,R&&(y=Math.cos(R),T=Math.sin(R),k=C*y+L*T,W=V*y+z*T,L=L*y-C*T,z=z*y-V*T,C=k,V=W),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Kt(Math.sqrt(C*C+L*L+N*N)),g=Kt(Math.sqrt(z*z+ce*ce)),R=No(V,z),v=Math.abs(R)>2e-4?R*zs:0,S=pe?1/(pe<0?-pe:pe):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!r0(Ai(e,Gt)),k&&e.setAttribute("transform",k))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Kt(d),n.scaleY=Kt(g),n.rotation=Kt(_)+a,n.rotationX=Kt(m)+a,n.rotationY=Kt(p)+a,n.skewX=v+a,n.skewY=x+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[hi]=tu(c)),n.xOffset=n.yOffset=0,n.force3D=Ri.force3D,n.renderTransform=n.svg?UE:e0?s0:NE,n.uncache=0,n},tu=function(e){return(e=e.split(" "))[0]+" "+e[1]},ch=function(e,t,n){var i=On(t);return Kt(parseFloat(t)+parseFloat(bs(e,"x",n+"px",i)))+i},NE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,s0(e,t)},Us="0deg",Ua="0px",Os=") ",s0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,x=n.zOrigin,S="",b=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==Us||u!==Us)){var w=parseFloat(u)*Ko,E=Math.sin(w),R=Math.cos(w),y;w=parseFloat(h)*Ko,y=Math.cos(w),o=ch(v,o,E*y*-x),a=ch(v,a,-Math.sin(w)*-x),l=ch(v,l,R*y*-x+x)}m!==Ua&&(S+="perspective("+m+Os),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(b||o!==Ua||a!==Ua||l!==Ua)&&(S+=l!==Ua||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Os),c!==Us&&(S+="rotate("+c+Os),u!==Us&&(S+="rotateY("+u+Os),h!==Us&&(S+="rotateX("+h+Os),(f!==Us||d!==Us)&&(S+="skew("+f+", "+d+Os),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Os),v.style[Gt]=S||"translate(0, 0)"},UE=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,x=parseFloat(o),S=parseFloat(a),b,w,E,R,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ko,c*=Ko,b=Math.cos(l)*h,w=Math.sin(l)*h,E=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=Ko,y=Math.tan(c-u),y=Math.sqrt(1+y*y),E*=y,R*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),b*=y,w*=y)),b=Kt(b),w=Kt(w),E=Kt(E),R=Kt(R)):(b=h,R=f,w=E=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=bs(d,"x",o,"px"),S=bs(d,"y",a,"px")),(g||_||m||p)&&(x=Kt(x+g-(g*b+_*E)+m),S=Kt(S+_-(g*w+_*R)+p)),(i||s)&&(y=d.getBBox(),x=Kt(x+i/100*y.width),S=Kt(S+s/100*y.height)),y="matrix("+b+","+w+","+E+","+R+","+x+","+S+")",d.setAttribute("transform",y),v&&(d.style[Gt]=y)},OE=function(e,t,n,i,s){var o=360,a=bn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?zs:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Cm)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Cm)%o-~~(c/o)*o)),e._pt=f=new ui(e._pt,t,n,i,c,vE),f.e=u,f.u="deg",e._props.push(n),f},Om=function(e,t){for(var n in t)e[n]=t[n];return e},FE=function(e,t,n){var i=Om({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Gt]=t,a=Rl(n,1),Ms(n,Gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Gt],o[Gt]=t,a=Rl(n,1),o[Gt]=c);for(l in jr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=On(c),g=On(u),h=d!==g?bs(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new ui(e._pt,a,l,h,f-h,Nf),e._pt.u=g||0,e._props.push(l));Om(a,i)};ci("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});eu[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Fr(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var o0={name:"css",register:Of,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,v,x,S,b,w,E,R,y;kd||Of(),this.styles=this.styles||Q_(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Si[_]&&H_(_,t,n,i,e,s)))){if(d=typeof u,g=eu[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Tl(u)),g)g(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",_s.lastIndex=0,_s.test(c)||(m=On(c),p=On(u),p?m!==p&&(c=bs(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],bn(c)&&~c.indexOf("random(")&&(c=Tl(c)),On(c+"")||c==="auto"||(c+=Ri.units[_]||On(Fr(e,_))||""),(c+"").charAt(1)==="="&&(c=Fr(e,_))):c=Fr(e,_),f=parseFloat(c),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),_ in dr&&(_==="autoAlpha"&&(f===1&&Fr(e,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,a.visibility),fs(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=dr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in jr,x){if(this.styles.save(_),y=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Ai(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=u,u=Ai(e,"perspective"),T?e.style.perspective=T:Ms(e,"perspective")}h=parseFloat(u)}if(S||(b=e._gsap,b.renderTransform&&!t.parseTransform||Rl(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,S=this._pt=new ui(this._pt,a,Gt,0,1,b.renderTransform,b,0,-1),S.dep=1),_==="scale")this._pt=new ui(this._pt,b,"scaleY",b.scaleY,(v?$o(b.scaleY,v+h):h)-b.scaleY||0,Nf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(hi,0,a[hi]),u=DE(u),b.svg?Ff(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&fs(this,b,"zOrigin",b.zOrigin,p),fs(this,a,_,tu(c),tu(u)));continue}else if(_==="svgOrigin"){Ff(e,u,1,w,0,this);continue}else if(_ in i0){OE(this,b,_,f,v?$o(f,v+u):u);continue}else if(_==="smoothOrigin"){fs(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){FE(this,u,e);continue}}else _ in a||(_=ga(_)||_);if(x||(h||h===0)&&(f||f===0)&&!_E.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=On(u)||(_ in Ri.units?Ri.units[_]:m),m!==p&&(f=bs(e,_,c,p)),this._pt=new ui(this._pt,x?b:a,_,f,(v?$o(f,v+h):h)-f,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?SE:Nf),this._pt.u=p||0,x&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=yE):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=xE);else if(_ in a)LE.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,i,s);else if(_!=="parseTransform"){Cd(_,u);continue}x||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),o.push(_)}}E&&$_(this)},render:function(e,t){if(t.tween._time||!zd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Fr,aliases:dr,getSetter:function(e,t,n){var i=dr[t];return i&&i.indexOf(",")<0&&(t=i),t in jr&&t!==hi&&(e._gsap.x||Fr(e,"x"))?n&&Rm===n?t==="scale"?wE:TE:(Rm=n||{})&&(t==="scale"?EE:AE):e.style&&!Ed(e.style[t])?ME:~t.indexOf("-")?bE:Fd(e,t)},core:{_removeProperty:Ms,_getMatrix:Hd}};fi.utils.checkPrefix=ga;fi.core.getStyleSaver=Q_;(function(r,e,t,n){var i=ci(r+","+e+","+t,function(s){jr[s]=1});ci(e,function(s){Ri.units[s]="deg",i0[s]=1}),dr[i[13]]=r+","+e,ci(n,function(s){var o=s.split(":");dr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ci("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ri.units[r]="px"});fi.registerPlugin(o0);var a0=fi.registerPlugin(o0)||fi;a0.core.Tween;var BE="1.3.17";function l0(r,e,t){return Math.max(r,Math.min(e,t))}function kE(r,e,t){return(1-t)*r+t*e}function zE(r,e,t,n){return kE(r,e,1-Math.exp(-t*n))}function VE(r,e){return(r%e+e)%e}var HE=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=l0(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=zE(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function GE(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var WE=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=GE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},c0=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},Fm=100/6,is={passive:!1},XE=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,is),this.element.addEventListener("touchstart",this.onTouchStart,is),this.element.addEventListener("touchmove",this.onTouchMove,is),this.element.addEventListener("touchend",this.onTouchEnd,is)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new c0;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,is),this.element.removeEventListener("touchstart",this.onTouchStart,is),this.element.removeEventListener("touchmove",this.onTouchMove,is),this.element.removeEventListener("touchend",this.onTouchEnd,is)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Fm:n===2?this.window.width:1,s=n===1?Fm:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Bm=r=>Math.min(1,1.001-Math.pow(2,-10*r)),YE=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new HE;emitter=new c0;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:v=!0,autoRaf:x=!1,anchors:S=!1,autoToggle:b=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:R=E,stopInertiaOnNavigate:y=!1}={}){window.lenisVersion=BE,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Bm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:v,autoRaf:x,anchors:S,autoToggle:b,allowNestedScroll:w,naiveDimensions:R,stopInertiaOnNavigate:y},this.dimensions=new WE(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new XE(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,_=i&&n.type==="touchend";_&&(f=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?(f=document.querySelector(r),f||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(f=r),f){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const f=r-this.animatedScroll;f>this.limit/2?r=r-this.limit:f<-this.limit/2&&(r=r+this.limit)}}else r=l0(0,r,this.limit);if(r===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=r),typeof o=="number"&&typeof a!="function"?a=Bm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,r,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),i&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,h,f;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const b=window.getComputedStyle(r);i.computedStyle=b;const w=b.overflowX,E=b.overflowY;if(s=["auto","overlay","scroll"].includes(w),o=["auto","overlay","scroll"].includes(E),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,f=r.clientHeight,a=c>h,l=u>f,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=f}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let g;if(d==="horizontal")g="x";else if(d==="vertical")g="y";else{const b=e!==0,w=t!==0;b&&s&&a&&(g="x"),w&&o&&l&&(g="y")}if(!g)return!1;let _,m,p,v,x;if(g==="x")_=r.scrollLeft,m=c-h,p=e,v=s,x=a;else if(g==="y")_=r.scrollTop,m=u-f,p=t,v=o,x=l;else return!1;return(p>0?_<m:_>0)&&v&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?VE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function km(r,e){if(e===Sv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===vf||e===zg){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===vf)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Fl extends ba{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ZE(t)}),this.register(function(t){return new JE(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new e1(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new n1(t)}),this.register(function(t){return new i1(t)}),this.register(function(t){return new KE(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new QE(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new s1(t)}),this.register(function(t){return new $E(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new h1(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=el.extractUrlBase(e);o=el.resolveURL(c,this.path)}else o=el.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new n_(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===u0){try{o[ht.KHR_BINARY_GLTF]=new f1(e)}catch(h){i&&i(h);return}s=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new w1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ht.KHR_MATERIALS_UNLIT:o[h]=new jE;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[h]=new d1(s,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[h]=new p1;break;case ht.KHR_MESH_QUANTIZATION:o[h]=new m1;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function qE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $E{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ze(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Jn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ai(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zx(u),c.distance=h;break;case"spot":c=new jx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),rr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class jE{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return Ys}extendParams(e,t,n){const i=[];e.color=new Ze(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Jn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,wn))}return Promise.all(i)}}class KE{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class ZE{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(a,a)}return Promise.all(s)}}class JE{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class QE{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class e1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Jn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,wn)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class t1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class n1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ze().setRGB(a[0],a[1],a[2],Jn),Promise.all(s)}}class i1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class r1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ze().setRGB(a[0],a[1],a[2],Jn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,wn)),Promise.all(s)}}class s1{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class o1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class a1{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class l1{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class c1{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class u1{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class h1{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ui.TRIANGLES&&c.mode!==Ui.TRIANGLE_STRIP&&c.mode!==Ui.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new rt,m=new F,p=new xr,v=new F(1,1,1),x=new bx(g.geometry,g.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&v.fromBufferAttribute(l.SCALE,S),x.setMatrixAt(S,_.compose(m,p,v));for(const S in l)if(S==="_COLOR_0"){const b=l[S];x.instanceColor=new yf(b.array,b.itemSize,b.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);Wt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const u0="glTF",Oa=12,zm={JSON:1313821514,BIN:5130562};class f1{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Oa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==u0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Oa,s=new DataView(e,Oa);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===zm.JSON){const c=new Uint8Array(e,Oa+o,a);this.content=n.decode(c)}else if(l===zm.BIN){const c=Oa+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class d1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Bf[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Bf[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Zo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,Jn,f)})})}}class p1{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class m1{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class h0 extends Nl{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,v=1-m,x=p-f+h;for(let S=0;S!==a;S++){const b=o[_+S+a],w=o[_+S+l]*u,E=o[g+S+a],R=o[g+S]*u;s[S]=v*b+x*w+m*E+p*R}return s}}const g1=new xr;class _1 extends h0{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return g1.fromArray(s).normalize().toArray(s),s}}const Ui={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Zo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vm={9728:hn,9729:fn,9984:Ig,9985:Ac,9986:Ha,9987:kr},Hm={33071:hr,33648:Hc,10497:ra},uh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},v1={CUBICSPLINE:void 0,LINEAR:vl,STEP:_l},hh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function x1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Es({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xr})),r.DefaultMaterial}function Fs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function rr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function y1(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function S1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function M1(r){let e;const t=r.extensions&&r.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fh(t.attributes):e=r.indices+":"+fh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+fh(r.targets[n]);return e}function fh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function kf(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function b1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const T1=new rt;class w1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new qx(this.options.manager):this.textureLoader=new Qx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new n_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Fs(s,a,i),rr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(el.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=uh[i.type],a=Zo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Zn(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=uh[i.type],c=Zo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(v);x||(_=new c(a,p*d,i.count*d/u),x=new vx(_,d/u),t.cache.add(v,x)),m=new dd(x,l,f%d/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new Zn(_,l,g);if(i.sparse!==void 0){const p=uh.SCALAR,v=Zo[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,b=new v(o[1],x,i.sparse.count*p),w=new c(o[2],S,i.sparse.count*l);a!==null&&(m=new Zn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,R=b.length;E<R;E++){const y=b[E];if(m.setX(y,w[E*l]),l>=2&&m.setY(y,w[E*l+1]),l>=3&&m.setZ(y,w[E*l+2]),l>=4&&m.setW(y,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Vm[f.magFilter]||fn,u.minFilter=Vm[f.minFilter]||kr,u.wrapS=Hm[f.wrapS]||ra,u.wrapT=Hm[f.wrapT]||ra,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==hn&&u.minFilter!==fn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Mn(_);m.needsUpdate=!0,f(m)}),t.load(el.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),rr(h,o),h.userData.mimeType=o.mimeType||b1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ht.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Jg,er.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Zg,er.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Es}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){const h=i[ht.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ze(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Jn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,wn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=cr);const u=s.alphaMode||hh.OPAQUE;if(u===hh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===hh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ys&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ge(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Ys&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ys){const h=s.emissiveFactor;a.emissive=new Ze().setRGB(h[0],h[1],h[2],Jn)}return s.emissiveTexture!==void 0&&o!==Ys&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,wn)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),rr(h,s),t.associations.set(h,{materials:e}),s.extensions&&Fs(i,h,s),h})}createUniqueName(e){const t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Gm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=M1(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Gm(new Qn,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?x1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const v=c[d];if(m.mode===Ui.TRIANGLES||m.mode===Ui.TRIANGLE_STRIP||m.mode===Ui.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new yx(_,v):new wt(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Ui.TRIANGLE_STRIP?p.geometry=km(p.geometry,zg):m.mode===Ui.TRIANGLE_FAN&&(p.geometry=km(p.geometry,vf));else if(m.mode===Ui.LINES)p=new Ax(_,v);else if(m.mode===Ui.LINE_STRIP)p=new _d(_,v);else if(m.mode===Ui.LINE_LOOP)p=new Rx(_,v);else if(m.mode===Ui.POINTS)p=new Cx(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&S1(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),rr(p,s),m.extensions&&Fs(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Fs(i,h[0],s),h[0];const f=new Ht;s.extensions&&Fs(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new un(Qi.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new du(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),rr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new rt;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new md(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let x=0,S=f.length;x<S;x++){const b=f[x],w=d[x],E=g[x],R=_[x],y=m[x];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const T=n._createAnimationTracks(b,w,E,R,y);if(T)for(let C=0;C<T.length;C++)p.push(T[C])}const v=new zx(s,void 0,p);return rr(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,T1)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Kg:c.length>1?u=new Ht:c.length===1?u=c[0]:u=new Wt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),rr(u,s),s.extensions&&Fs(n,u,s),s.matrix!==void 0){const h=new rt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Ht;n.name&&(s.name=i.createUniqueName(n.name)),rr(s,n),n.extensions&&Fs(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof er||f instanceof Mn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];rs[s.path]===rs.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(rs[s.path]){case rs.weights:c=la;break;case rs.rotation:c=ca;break;case rs.translation:case rs.scale:c=ua;break;default:n.itemSize===1?c=la:c=ua;break}const u=i.interpolation!==void 0?v1[i.interpolation]:vl,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+rs[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=kf(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ca?_1:h0;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function E1(r,e,t){const n=e.attributes,i=new Ct;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const u=kf(Zo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new F,l=new F;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=kf(Zo[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new br;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Gm(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Bf[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return dt.workingColorSpace!==Jn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),rr(r,e),E1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?y1(r,e.targets,t):r})}class gr{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),gr.nextNameID=gr.nextNameID||0,this.$name.id=`lil-gui-name-${++gr.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class A1 extends gr{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function zf(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const R1={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:zf,toHexString:zf},Cl={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},C1={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,e,t=1){const n=Cl.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Cl.toHexString(i)}},P1={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=Cl.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Cl.toHexString(i)}},L1=[R1,Cl,C1,P1];function D1(r){return L1.find(e=>e.match(r))}class I1 extends gr{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=D1(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=zf(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class dh extends gr{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class N1 extends gr{constructor(e,t,n,i,s,o){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+v),this.$input.value=this.getValue())},i=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let o=!1,a,l,c,u,h;const f=5,d=v=>{a=v.clientX,l=c=v.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=v=>{if(o){const x=v.clientX-a,S=v.clientY-l;Math.abs(S)>f?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>f&&_()}if(!o){const x=v.clientY-c;h-=x*this._step*this._arrowKeyMultiplier(v),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=v.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,v,x,S,b)=>(p-v)/(x-v)*(b-S)+S,t=p=>{const v=this.$slider.getBoundingClientRect();let x=e(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(x)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=p=>{if(o){const v=p.touches[0].clientX-a,x=p.touches[0].clientY-l;Math.abs(v)>Math.abs(x)?c(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else p.preventDefault(),t(p.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},d=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const x=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(d,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class U1 extends gr{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class O1 extends gr{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var F1=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function B1(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Wm=!1;class Gd{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Wm&&a&&(B1(F1),Wm=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new U1(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new N1(this,e,t,n,i,s);case"boolean":return new A1(this,e,t);case"string":return new O1(this,e,t);case"function":return new dh(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new I1(this,e,t,n)}addFolder(e){const t=new Gd({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof dh||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof dh)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function k1(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function z1(r,e,t){return e&&k1(r.prototype,e),r}var En,Oc,wi,ds,ps,Jo,f0,Vs,rl,d0,Vr,qi,p0,m0=function(){return En||typeof window<"u"&&(En=window.gsap)&&En.registerPlugin&&En},g0=1,Ho=[],ut=[],_r=[],sl=Date.now,Vf=function(e,t){return t},V1=function(){var e=rl.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ut),i.push.apply(i,_r),ut=n,_r=i,Vf=function(o,a){return t[o](a)}},vs=function(e,t){return~_r.indexOf(e)&&_r[_r.indexOf(e)+1][t]},ol=function(e){return!!~d0.indexOf(e)},Hn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Vn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},dc="scrollLeft",pc="scrollTop",Hf=function(){return Vr&&Vr.isPressed||ut.cache++},nu=function(e,t){var n=function i(s){if(s||s===0){g0&&(wi.history.scrollRestoration="manual");var o=Vr&&Vr.isPressed;s=i.v=Math.round(s)||(Vr&&Vr.iOS?1:0),e(s),i.cacheID=ut.cache,o&&Vf("ss",s)}else(t||ut.cache!==i.cacheID||Vf("ref"))&&(i.cacheID=ut.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},jn={s:dc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nu(function(r){return arguments.length?wi.scrollTo(r,cn.sc()):wi.pageXOffset||ds[dc]||ps[dc]||Jo[dc]||0})},cn={s:pc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:jn,sc:nu(function(r){return arguments.length?wi.scrollTo(jn.sc(),r):wi.pageYOffset||ds[pc]||ps[pc]||Jo[pc]||0})},si=function(e,t){return(t&&t._ctx&&t._ctx.selector||En.utils.toArray)(e)[0]||(typeof e=="string"&&En.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},H1=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ts=function(e,t){var n=t.s,i=t.sc;ol(e)&&(e=ds.scrollingElement||ps);var s=ut.indexOf(e),o=i===cn.sc?1:2;!~s&&(s=ut.push(e)-1),ut[s+o]||Hn(e,"scroll",Hf);var a=ut[s+o],l=a||(ut[s+o]=nu(vs(e,n),!0)||(ol(e)?i:nu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=En.getProperty(e,"scrollBehavior")==="smooth"),l},Gf=function(e,t,n){var i=e,s=e,o=sl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=sl();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=sl();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Fa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Xm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},_0=function(){rl=En.core.globals().ScrollTrigger,rl&&rl.core&&V1()},v0=function(e){return En=e||m0(),!Oc&&En&&typeof document<"u"&&document.body&&(wi=window,ds=document,ps=ds.documentElement,Jo=ds.body,d0=[wi,ds,ps,Jo],En.utils.clamp,p0=En.core.context||function(){},Vs="onpointerenter"in Jo?"pointer":"mouse",f0=Zt.isTouch=wi.matchMedia&&wi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in wi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,qi=Zt.eventTypes=("ontouchstart"in ps?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ps?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return g0=0},500),_0(),Oc=1),Oc};jn.op=cn;ut.cache=0;var Zt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Oc||v0(En)||console.warn("Please gsap.registerPlugin(Observer)"),rl||_0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,v=n.onDrag,x=n.onPress,S=n.onRelease,b=n.onRight,w=n.onLeft,E=n.onUp,R=n.onDown,y=n.onChangeX,T=n.onChangeY,C=n.onChange,L=n.onToggleX,N=n.onToggleY,B=n.onHover,V=n.onHoverEnd,z=n.onMove,k=n.ignoreCheck,W=n.isNormalizer,Q=n.onGestureStart,D=n.onGestureEnd,ie=n.onWheel,se=n.onEnable,ue=n.onDisable,pe=n.onClick,ce=n.scrollSpeed,$=n.capture,K=n.allowClicks,he=n.lockAxis,Ee=n.onLockAxis;this.target=a=si(a)||ps,this.vars=n,d&&(d=En.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,ce=ce||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(wi.getComputedStyle(Jo).lineHeight)||22);var te,ze,Je,we,Ne,xe,Fe,X=this,O=0,Oe=0,Ie=n.passive||!u&&n.passive!==!1,ke=Ts(a,jn),Se=Ts(a,cn),P=ke(),M=Se(),I=~o.indexOf("touch")&&!~o.indexOf("pointer")&&qi[0]==="pointerdown",Y=ol(a),Z=a.ownerDocument||ds,q=[0,0,0],fe=[0,0,0],le=0,ye=function(){return le=sl()},de=function(Be,tt){return(X.event=Be)&&d&&H1(Be.target,d)||tt&&I&&Be.pointerType!=="touch"||k&&k(Be,tt)},ee=function(){X._vx.reset(),X._vy.reset(),ze.pause(),h&&h(X)},oe=function(){var Be=X.deltaX=Xm(q),tt=X.deltaY=Xm(fe),Ae=Math.abs(Be)>=i,Qe=Math.abs(tt)>=i;C&&(Ae||Qe)&&C(X,Be,tt,q,fe),Ae&&(b&&X.deltaX>0&&b(X),w&&X.deltaX<0&&w(X),y&&y(X),L&&X.deltaX<0!=O<0&&L(X),O=X.deltaX,q[0]=q[1]=q[2]=0),Qe&&(R&&X.deltaY>0&&R(X),E&&X.deltaY<0&&E(X),T&&T(X),N&&X.deltaY<0!=Oe<0&&N(X),Oe=X.deltaY,fe[0]=fe[1]=fe[2]=0),(we||Je)&&(z&&z(X),Je&&(m&&Je===1&&m(X),v&&v(X),Je=0),we=!1),xe&&!(xe=!1)&&Ee&&Ee(X),Ne&&(ie(X),Ne=!1),te=0},be=function(Be,tt,Ae){q[Ae]+=Be,fe[Ae]+=tt,X._vx.update(Be),X._vy.update(tt),c?te||(te=requestAnimationFrame(oe)):oe()},Ce=function(Be,tt){he&&!Fe&&(X.axis=Fe=Math.abs(Be)>Math.abs(tt)?"x":"y",xe=!0),Fe!=="y"&&(q[2]+=Be,X._vx.update(Be,!0)),Fe!=="x"&&(fe[2]+=tt,X._vy.update(tt,!0)),c?te||(te=requestAnimationFrame(oe)):oe()},me=function(Be){if(!de(Be,1)){Be=Fa(Be,u);var tt=Be.clientX,Ae=Be.clientY,Qe=tt-X.x,We=Ae-X.y,et=X.isDragging;X.x=tt,X.y=Ae,(et||(Qe||We)&&(Math.abs(X.startX-tt)>=s||Math.abs(X.startY-Ae)>=s))&&(Je||(Je=et?2:1),et||(X.isDragging=!0),Ce(Qe,We))}},$e=X.onPress=function(Pe){de(Pe,1)||Pe&&Pe.button||(X.axis=Fe=null,ze.pause(),X.isPressed=!0,Pe=Fa(Pe),O=Oe=0,X.startX=X.x=Pe.clientX,X.startY=X.y=Pe.clientY,X._vx.reset(),X._vy.reset(),Hn(W?a:Z,qi[1],me,Ie,!0),X.deltaX=X.deltaY=0,x&&x(X))},U=X.onRelease=function(Pe){if(!de(Pe,1)){Vn(W?a:Z,qi[1],me,!0);var Be=!isNaN(X.y-X.startY),tt=X.isDragging,Ae=tt&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),Qe=Fa(Pe);!Ae&&Be&&(X._vx.reset(),X._vy.reset(),u&&K&&En.delayedCall(.08,function(){if(sl()-le>300&&!Pe.defaultPrevented){if(Pe.target.click)Pe.target.click();else if(Z.createEvent){var We=Z.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,wi,1,Qe.screenX,Qe.screenY,Qe.clientX,Qe.clientY,!1,!1,!1,!1,0,null),Pe.target.dispatchEvent(We)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,h&&tt&&!W&&ze.restart(!0),Je&&oe(),p&&tt&&p(X),S&&S(X,Ae)}},ge=function(Be){return Be.touches&&Be.touches.length>1&&(X.isGesturing=!0)&&Q(Be,X.isDragging)},ae=function(){return(X.isGesturing=!1)||D(X)},Me=function(Be){if(!de(Be)){var tt=ke(),Ae=Se();be((tt-P)*ce,(Ae-M)*ce,1),P=tt,M=Ae,h&&ze.restart(!0)}},re=function(Be){if(!de(Be)){Be=Fa(Be,u),ie&&(Ne=!0);var tt=(Be.deltaMode===1?l:Be.deltaMode===2?wi.innerHeight:1)*g;be(Be.deltaX*tt,Be.deltaY*tt,0),h&&!W&&ze.restart(!0)}},ne=function(Be){if(!de(Be)){var tt=Be.clientX,Ae=Be.clientY,Qe=tt-X.x,We=Ae-X.y;X.x=tt,X.y=Ae,we=!0,h&&ze.restart(!0),(Qe||We)&&Ce(Qe,We)}},ve=function(Be){X.event=Be,B(X)},Xe=function(Be){X.event=Be,V(X)},mt=function(Be){return de(Be)||Fa(Be,u)&&pe(X)};ze=X._dc=En.delayedCall(f||.25,ee).pause(),X.deltaX=X.deltaY=0,X._vx=Gf(0,50,!0),X._vy=Gf(0,50,!0),X.scrollX=ke,X.scrollY=Se,X.isDragging=X.isGesturing=X.isPressed=!1,p0(this),X.enable=function(Pe){return X.isEnabled||(Hn(Y?Z:a,"scroll",Hf),o.indexOf("scroll")>=0&&Hn(Y?Z:a,"scroll",Me,Ie,$),o.indexOf("wheel")>=0&&Hn(a,"wheel",re,Ie,$),(o.indexOf("touch")>=0&&f0||o.indexOf("pointer")>=0)&&(Hn(a,qi[0],$e,Ie,$),Hn(Z,qi[2],U),Hn(Z,qi[3],U),K&&Hn(a,"click",ye,!0,!0),pe&&Hn(a,"click",mt),Q&&Hn(Z,"gesturestart",ge),D&&Hn(Z,"gestureend",ae),B&&Hn(a,Vs+"enter",ve),V&&Hn(a,Vs+"leave",Xe),z&&Hn(a,Vs+"move",ne)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=we=Je=!1,X._vx.reset(),X._vy.reset(),P=ke(),M=Se(),Pe&&Pe.type&&$e(Pe),se&&se(X)),X},X.disable=function(){X.isEnabled&&(Ho.filter(function(Pe){return Pe!==X&&ol(Pe.target)}).length||Vn(Y?Z:a,"scroll",Hf),X.isPressed&&(X._vx.reset(),X._vy.reset(),Vn(W?a:Z,qi[1],me,!0)),Vn(Y?Z:a,"scroll",Me,$),Vn(a,"wheel",re,$),Vn(a,qi[0],$e,$),Vn(Z,qi[2],U),Vn(Z,qi[3],U),Vn(a,"click",ye,!0),Vn(a,"click",mt),Vn(Z,"gesturestart",ge),Vn(Z,"gestureend",ae),Vn(a,Vs+"enter",ve),Vn(a,Vs+"leave",Xe),Vn(a,Vs+"move",ne),X.isEnabled=X.isPressed=X.isDragging=!1,ue&&ue(X))},X.kill=X.revert=function(){X.disable();var Pe=Ho.indexOf(X);Pe>=0&&Ho.splice(Pe,1),Vr===X&&(Vr=0)},Ho.push(X),W&&ol(a)&&(Vr=X),X.enable(_)},z1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Zt.version="3.14.2";Zt.create=function(r){return new Zt(r)};Zt.register=v0;Zt.getAll=function(){return Ho.slice()};Zt.getById=function(r){return Ho.filter(function(e){return e.vars.id===r})[0]};m0()&&En.registerPlugin(Zt);var Ue,Fo,ct,Ut,Mi,xt,Wd,iu,Pl,al,Ya,mc,In,xu,Wf,Yn,Ym,qm,Bo,x0,ph,y0,Xn,Xf,S0,M0,os,Yf,Xd,Qo,Yd,ll,qf,mh,gc=1,Nn=Date.now,gh=Nn(),Gi=0,qa=0,$m=function(e,t,n){var i=yi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},jm=function(e,t){return t&&(!yi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},G1=function r(){return qa&&requestAnimationFrame(r)},Km=function(){return xu=1},Zm=function(){return xu=0},ar=function(e){return e},$a=function(e){return Math.round(e*1e5)/1e5||0},b0=function(){return typeof window<"u"},T0=function(){return Ue||b0()&&(Ue=window.gsap)&&Ue.registerPlugin&&Ue},oo=function(e){return!!~Wd.indexOf(e)},w0=function(e){return(e==="Height"?Yd:ct["inner"+e])||Mi["client"+e]||xt["client"+e]},E0=function(e){return vs(e,"getBoundingClientRect")||(oo(e)?function(){return Vc.width=ct.innerWidth,Vc.height=Yd,Vc}:function(){return Br(e)})},W1=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=vs(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?w0(s):e["client"+s])||0}},X1=function(e,t){return!t||~_r.indexOf(e)?E0(e):function(){return Vc}},pr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=vs(e,n))?o()-E0(e)()[s]:oo(e)?(Mi[n]||xt[n])-w0(i):e[n]-e["offset"+i])},_c=function(e,t){for(var n=0;n<Bo.length;n+=3)(!t||~t.indexOf(Bo[n+1]))&&e(Bo[n],Bo[n+1],Bo[n+2])},yi=function(e){return typeof e=="string"},Fn=function(e){return typeof e=="function"},ja=function(e){return typeof e=="number"},Hs=function(e){return typeof e=="object"},Ba=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},_h=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Uo=Math.abs,A0="left",R0="top",qd="right",$d="bottom",to="width",no="height",cl="Right",ul="Left",hl="Top",fl="Bottom",tn="padding",Oi="margin",_a="Width",jd="Height",ln="px",Fi=function(e){return ct.getComputedStyle(e)},Y1=function(e){var t=Fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Jm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Br=function(e,t){var n=t&&Fi(e)[Wf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ue.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},ru=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},C0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},q1=function(e){return function(t){return Ue.utils.snap(C0(e),t)}},Kd=function(e){var t=Ue.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},$1=function(e){return function(t,n){return Kd(C0(e))(t,n.direction)}},vc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},yn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},xc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Qm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},yc={toggleActions:"play",anticipatePin:0},su={top:0,left:0,center:.5,bottom:1,right:1},Fc=function(e,t){if(yi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in su?su[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Sc=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Ut.createElement("div"),_=oo(n)||vs(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?xt:n,v=e.indexOf("start")!==-1,x=v?c:u,S="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(i===cn?qd:$d)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Bc(g,0,i,v),g},Bc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+_a]=1,s["border"+a+_a]=0,s[n.p]=t+"px",Ue.set(e,s)},st=[],$f={},Ll,eg=function(){return Nn()-Gi>34&&(Ll||(Ll=requestAnimationFrame(Wr)))},Oo=function(){(!Xn||!Xn.isPressed||Xn.startX>xt.clientWidth)&&(ut.cache++,Xn?Ll||(Ll=requestAnimationFrame(Wr)):Wr(),Gi||lo("scrollStart"),Gi=Nn())},vh=function(){M0=ct.innerWidth,S0=ct.innerHeight},Ka=function(e){ut.cache++,(e===!0||!In&&!y0&&!Ut.fullscreenElement&&!Ut.webkitFullscreenElement&&(!Xf||M0!==ct.innerWidth||Math.abs(ct.innerHeight-S0)>ct.innerHeight*.25))&&iu.restart(!0)},ao={},j1=[],P0=function r(){return xn(ft,"scrollEnd",r)||$s(!0)},lo=function(e){return ao[e]&&ao[e].map(function(t){return t()})||j1},xi=[],L0=function(e){for(var t=0;t<xi.length;t+=5)(!e||xi[t+4]&&xi[t+4].query===e)&&(xi[t].style.cssText=xi[t+1],xi[t].getBBox&&xi[t].setAttribute("transform",xi[t+2]||""),xi[t+3].uncache=1)},D0=function(){return ut.forEach(function(e){return Fn(e)&&++e.cacheID&&(e.rec=e())})},Zd=function(e,t){var n;for(Yn=0;Yn<st.length;Yn++)n=st[Yn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ll=!0,t&&L0(t),t||lo("revert")},I0=function(e,t){ut.cache++,(t||!qn)&&ut.forEach(function(n){return Fn(n)&&n.cacheID++&&(n.rec=0)}),yi(e)&&(ct.history.scrollRestoration=Xd=e)},qn,io=0,tg,K1=function(){if(tg!==io){var e=tg=io;requestAnimationFrame(function(){return e===io&&$s(!0)})}},N0=function(){xt.appendChild(Qo),Yd=!Xn&&Qo.offsetHeight||ct.innerHeight,xt.removeChild(Qo)},ng=function(e){return Pl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},$s=function(e,t){if(Mi=Ut.documentElement,xt=Ut.body,Wd=[ct,Ut,Mi,xt],Gi&&!e&&!ll){yn(ft,"scrollEnd",P0);return}N0(),qn=ft.isRefreshing=!0,ll||D0();var n=lo("refreshInit");x0&&ft.sort(),t||Zd(),ut.forEach(function(i){Fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),st.slice(0).forEach(function(i){return i.refresh()}),ll=!1,st.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),qf=1,ng(!0),st.forEach(function(i){var s=pr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),ng(!1),qf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ut.forEach(function(i){Fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),I0(Xd,1),iu.pause(),io++,qn=2,Wr(2),st.forEach(function(i){return Fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),qn=ft.isRefreshing=!1,lo("refresh")},jf=0,kc=1,dl,Wr=function(e){if(e===2||!qn&&!ll){ft.isUpdating=!0,dl&&dl.update(0);var t=st.length,n=Nn(),i=n-gh>=50,s=t&&st[0].scroll();if(kc=jf>s?-1:1,qn||(jf=s),i&&(Gi&&!xu&&n-Gi>200&&(Gi=0,lo("scrollEnd")),Ya=gh,gh=n),kc<0){for(Yn=t;Yn-- >0;)st[Yn]&&st[Yn].update(0,i);kc=1}else for(Yn=0;Yn<t;Yn++)st[Yn]&&st[Yn].update(0,i);ft.isUpdating=!1}Ll=0},Kf=[A0,R0,$d,qd,Oi+fl,Oi+cl,Oi+hl,Oi+ul,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],zc=Kf.concat([to,no,"boxSizing","max"+_a,"max"+jd,"position",Oi,tn,tn+hl,tn+cl,tn+fl,tn+ul]),Z1=function(e,t,n){ea(n);var i=e._gsap;if(i.spacerIsNative)ea(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},xh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Kf.length,o=t.style,a=e.style,l;s--;)l=Kf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[$d]=a[qd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[to]=ru(e,jn)+ln,o[no]=ru(e,cn)+ln,o[tn]=a[Oi]=a[R0]=a[A0]="0",ea(i),a[to]=a["max"+_a]=n[to],a[no]=a["max"+jd]=n[no],a[tn]=n[tn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},J1=/([A-Z])/g,ea=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ue.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(J1,"-$1").toLowerCase())}},Mc=function(e){for(var t=zc.length,n=e.style,i=[],s=0;s<t;s++)i.push(zc[s],n[zc[s]]);return i.t=e,i},Q1=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Vc={left:0,top:0},ig=function(e,t,n,i,s,o,a,l,c,u,h,f,d,g){Fn(e)&&(e=e(l)),yi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Fc("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,v;if(d&&d.seek(0),isNaN(e)||(e=+e),ja(e))d&&(e=Ue.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Bc(a,n,i,!0);else{Fn(t)&&(t=t(l));var x=(e||"0").split(" "),S,b,w,E;v=si(t,l)||xt,S=Br(v)||{},(!S||!S.left&&!S.top)&&Fi(v).display==="none"&&(E=v.style.display,v.style.display="block",S=Br(v),E?v.style.display=E:v.style.removeProperty("display")),b=Fc(x[0],S[i.d]),w=Fc(x[1]||"0",n),e=S[i.p]-c[i.p]-u+b+s-w,a&&Bc(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+n,y=o._isStart;m="scroll"+i.d2,Bc(o,R,i,y&&R>20||!y&&(h?Math.max(xt[m],Mi[m]):o.parentNode[m])<=R+1),h&&(c=Br(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+ln))}return d&&v&&(m=Br(v),d.seek(f),p=Br(v),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},eA=/(webkit|moz|length|cssText|inset)/i,rg=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===xt){e._stOrig=s.cssText,a=Fi(e);for(o in a)!+o&&!eA.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ue.core.getCache(e).uncache=1,t.appendChild(e)}},U0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},bc=function(e,t,n){var i={};i[t.p]="+="+n,Ue.set(e,i)},sg=function(e,t){var n=Ts(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=U0(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&Wr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ue.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},yn(e,"wheel",n.wheelHandler),ft.isTouch&&yn(e,"touchmove",n.wheelHandler),s},ft=(function(){function r(t,n){Fo||r.register(Ue)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Yf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!qa){this.update=this.refresh=this.kill=ar;return}n=Jm(yi(n)||ja(n)||n.nodeType?{trigger:n}:n,yc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,x=s.once,S=s.snap,b=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,R=s.fastScrollEnd,y=s.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?jn:cn,C=!h&&h!==0,L=si(n.scroller||ct),N=Ue.core.getCache(L),B=oo(L),V=("pinType"in n?n.pinType:vs(L,"pinType")||B&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=C&&n.toggleActions.split(" "),W="markers"in n?n.markers:yc.markers,Q=B?0:parseFloat(Fi(L)["border"+T.p2+_a])||0,D=this,ie=n.onRefreshInit&&function(){return n.onRefreshInit(D)},se=W1(L,B,T),ue=X1(L,B),pe=0,ce=0,$=0,K=Ts(L,T),he,Ee,te,ze,Je,we,Ne,xe,Fe,X,O,Oe,Ie,ke,Se,P,M,I,Y,Z,q,fe,le,ye,de,ee,oe,be,Ce,me,$e,U,ge,ae,Me,re,ne,ve,Xe;if(D._startClamp=D._endClamp=!1,D._dir=T,m*=45,D.scroller=L,D.scroll=E?E.time.bind(E):K,ze=K(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(x0=1,n.refreshPriority===-9999&&(dl=D)),N.tweenScroll=N.tweenScroll||{top:sg(L,cn),left:sg(L,jn)},D.tweenTo=he=N.tweenScroll[T.p],D.scrubDuration=function(Ae){ge=ja(Ae)&&Ae,ge?U?U.duration(Ae):U=Ue.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ge,paused:!0,onComplete:function(){return p&&p(D)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),me=0,l||(l=i.vars.id)),S&&((!Hs(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in xt.style&&Ue.set(B?[xt,Mi]:L,{scrollBehavior:"auto"}),ut.forEach(function(Ae){return Fn(Ae)&&Ae.target===(B?Ut.scrollingElement||Mi:L)&&(Ae.smooth=!1)}),te=Fn(S.snapTo)?S.snapTo:S.snapTo==="labels"?q1(i):S.snapTo==="labelsDirectional"?$1(i):S.directional!==!1?function(Ae,Qe){return Kd(S.snapTo)(Ae,Nn()-ce<500?0:Qe.direction)}:Ue.utils.snap(S.snapTo),ae=S.duration||{min:.1,max:2},ae=Hs(ae)?al(ae.min,ae.max):al(ae,ae),Me=Ue.delayedCall(S.delay||ge/2||.1,function(){var Ae=K(),Qe=Nn()-ce<500,We=he.tween;if((Qe||Math.abs(D.getVelocity())<10)&&!We&&!xu&&pe!==Ae){var et=(Ae-we)/ke,jt=i&&!C?i.totalProgress():et,at=Qe?0:(jt-$e)/(Nn()-Ya)*1e3||0,yt=Ue.utils.clamp(-et,1-et,Uo(at/2)*at/.185),Jt=et+(S.inertia===!1?0:yt),Ot,Pt,gt=S,ei=gt.onStart,Et=gt.onInterrupt,Pn=gt.onComplete;if(Ot=te(Jt,D),ja(Ot)||(Ot=Jt),Pt=Math.max(0,Math.round(we+Ot*ke)),Ae<=Ne&&Ae>=we&&Pt!==Ae){if(We&&!We._initted&&We.data<=Uo(Pt-Ae))return;S.inertia===!1&&(yt=Ot-et),he(Pt,{duration:ae(Uo(Math.max(Uo(Jt-jt),Uo(Ot-jt))*.185/at/.05||0)),ease:S.ease||"power3",data:Uo(Pt-Ae),onInterrupt:function(){return Me.restart(!0)&&Et&&Et(D)},onComplete:function(){D.update(),pe=K(),i&&!C&&(U?U.resetTo("totalProgress",Ot,i._tTime/i._tDur):i.progress(Ot)),me=$e=i&&!C?i.totalProgress():D.progress,v&&v(D),Pn&&Pn(D)}},Ae,yt*ke,Pt-Ae-yt*ke),ei&&ei(D,he.tween)}}else D.isActive&&pe!==Ae&&Me.restart(!0)}).pause()),l&&($f[l]=D),f=D.trigger=si(f||d!==!0&&d),Xe=f&&f._gsap&&f._gsap.stRevert,Xe&&(Xe=Xe(D)),d=d===!0?f:si(d),yi(a)&&(a={targets:f,className:a}),d&&(g===!1||g===Oi||(g=!g&&d.parentNode&&d.parentNode.style&&Fi(d.parentNode).display==="flex"?!1:tn),D.pin=d,Ee=Ue.core.getCache(d),Ee.spacer?Se=Ee.pinState:(w&&(w=si(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ee.spacerIsNative=!!w,w&&(Ee.spacerState=Mc(w))),Ee.spacer=I=w||Ut.createElement("div"),I.classList.add("pin-spacer"),l&&I.classList.add("pin-spacer-"+l),Ee.pinState=Se=Mc(d)),n.force3D!==!1&&Ue.set(d,{force3D:!0}),D.spacer=I=Ee.spacer,Ce=Fi(d),ye=Ce[g+T.os2],Z=Ue.getProperty(d),q=Ue.quickSetter(d,T.a,ln),xh(d,I,Ce),M=Mc(d)),W){Oe=Hs(W)?Jm(W,Qm):Qm,X=Sc("scroller-start",l,L,T,Oe,0),O=Sc("scroller-end",l,L,T,Oe,0,X),Y=X["offset"+T.op.d2];var mt=si(vs(L,"content")||L);xe=this.markerStart=Sc("start",l,mt,T,Oe,Y,0,E),Fe=this.markerEnd=Sc("end",l,mt,T,Oe,Y,0,E),E&&(ve=Ue.quickSetter([xe,Fe],T.a,ln)),!V&&!(_r.length&&vs(L,"fixedMarkers")===!0)&&(Y1(B?xt:L),Ue.set([X,O],{force3D:!0}),ee=Ue.quickSetter(X,T.a,ln),be=Ue.quickSetter(O,T.a,ln))}if(E){var Pe=E.vars.onUpdate,Be=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){D.update(0,0,1),Pe&&Pe.apply(E,Be||[])})}if(D.previous=function(){return st[st.indexOf(D)-1]},D.next=function(){return st[st.indexOf(D)+1]},D.revert=function(Ae,Qe){if(!Qe)return D.kill(!0);var We=Ae!==!1||!D.enabled,et=In;We!==D.isReverted&&(We&&(re=Math.max(K(),D.scroll.rec||0),$=D.progress,ne=i&&i.progress()),xe&&[xe,Fe,X,O].forEach(function(jt){return jt.style.display=We?"none":"block"}),We&&(In=D,D.update(We)),d&&(!b||!D.isActive)&&(We?Z1(d,I,Se):xh(d,I,Fi(d),de)),We||D.update(We),In=et,D.isReverted=We)},D.refresh=function(Ae,Qe,We,et){if(!((In||!D.enabled)&&!Qe)){if(d&&Ae&&Gi){yn(r,"scrollEnd",P0);return}!qn&&ie&&ie(D),In=D,he.tween&&!We&&(he.tween.kill(),he.tween=0),U&&U.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(De){return De.vars.immediateRender&&De.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var jt=se(),at=ue(),yt=E?E.duration():pr(L,T),Jt=ke<=.01||!ke,Ot=0,Pt=et||0,gt=Hs(We)?We.end:n.end,ei=n.endTrigger||f,Et=Hs(We)?We.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Pn=D.pinnedContainer=n.pinnedContainer&&si(n.pinnedContainer,D),di=f&&Math.max(0,st.indexOf(D))||0,sn=di,on,mn,Ar,go,gn,A,H,J,j,G,_e,Le,Te;for(W&&Hs(We)&&(Le=Ue.getProperty(X,T.p),Te=Ue.getProperty(O,T.p));sn-- >0;)A=st[sn],A.end||A.refresh(0,1)||(In=D),H=A.pin,H&&(H===f||H===d||H===Pn)&&!A.isReverted&&(G||(G=[]),G.unshift(A),A.revert(!0,!0)),A!==st[sn]&&(di--,sn--);for(Fn(Et)&&(Et=Et(D)),Et=$m(Et,"start",D),we=ig(Et,f,jt,T,K(),xe,X,D,at,Q,V,yt,E,D._startClamp&&"_startClamp")||(d?-.001:0),Fn(gt)&&(gt=gt(D)),yi(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(yi(Et)?Et.split(" ")[0]:"")+gt:(Ot=Fc(gt.substr(2),jt),gt=yi(Et)?Et:(E?Ue.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,we):we)+Ot,ei=f)),gt=$m(gt,"end",D),Ne=Math.max(we,ig(gt||(ei?"100% 0":yt),ei,jt,T,K()+Ot,Fe,O,D,at,Q,V,yt,E,D._endClamp&&"_endClamp"))||-.001,Ot=0,sn=di;sn--;)A=st[sn]||{},H=A.pin,H&&A.start-A._pinPush<=we&&!E&&A.end>0&&(on=A.end-(D._startClamp?Math.max(0,A.start):A.start),(H===f&&A.start-A._pinPush<we||H===Pn)&&isNaN(Et)&&(Ot+=on*(1-A.progress)),H===d&&(Pt+=on));if(we+=Ot,Ne+=Ot,D._startClamp&&(D._startClamp+=Ot),D._endClamp&&!qn&&(D._endClamp=Ne||-.001,Ne=Math.min(Ne,pr(L,T))),ke=Ne-we||(we-=.01)&&.001,Jt&&($=Ue.utils.clamp(0,1,Ue.utils.normalize(we,Ne,re))),D._pinPush=Pt,xe&&Ot&&(on={},on[T.a]="+="+Ot,Pn&&(on[T.p]="-="+K()),Ue.set([xe,Fe],on)),d&&!(qf&&D.end>=pr(L,T)))on=Fi(d),go=T===cn,Ar=K(),fe=parseFloat(Z(T.a))+Pt,!yt&&Ne>1&&(_e=(B?Ut.scrollingElement||Mi:L).style,_e={style:_e,value:_e["overflow"+T.a.toUpperCase()]},B&&Fi(xt)["overflow"+T.a.toUpperCase()]!=="scroll"&&(_e.style["overflow"+T.a.toUpperCase()]="scroll")),xh(d,I,on),M=Mc(d),mn=Br(d,!0),J=V&&Ts(L,go?jn:cn)(),g?(de=[g+T.os2,ke+Pt+ln],de.t=I,sn=g===tn?ru(d,T)+ke+Pt:0,sn&&(de.push(T.d,sn+ln),I.style.flexBasis!=="auto"&&(I.style.flexBasis=sn+ln)),ea(de),Pn&&st.forEach(function(De){De.pin===Pn&&De.vars.pinSpacing!==!1&&(De._subPinOffset=!0)}),V&&K(re)):(sn=ru(d,T),sn&&I.style.flexBasis!=="auto"&&(I.style.flexBasis=sn+ln)),V&&(gn={top:mn.top+(go?Ar-we:J)+ln,left:mn.left+(go?J:Ar-we)+ln,boxSizing:"border-box",position:"fixed"},gn[to]=gn["max"+_a]=Math.ceil(mn.width)+ln,gn[no]=gn["max"+jd]=Math.ceil(mn.height)+ln,gn[Oi]=gn[Oi+hl]=gn[Oi+cl]=gn[Oi+fl]=gn[Oi+ul]="0",gn[tn]=on[tn],gn[tn+hl]=on[tn+hl],gn[tn+cl]=on[tn+cl],gn[tn+fl]=on[tn+fl],gn[tn+ul]=on[tn+ul],P=Q1(Se,gn,b),qn&&K(0)),i?(j=i._initted,ph(1),i.render(i.duration(),!0,!0),le=Z(T.a)-fe+ke+Pt,oe=Math.abs(ke-le)>1,V&&oe&&P.splice(P.length-2,2),i.render(0,!0,!0),j||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ph(0)):le=ke,_e&&(_e.value?_e.style["overflow"+T.a.toUpperCase()]=_e.value:_e.style.removeProperty("overflow-"+T.a));else if(f&&K()&&!E)for(mn=f.parentNode;mn&&mn!==xt;)mn._pinOffset&&(we-=mn._pinOffset,Ne-=mn._pinOffset),mn=mn.parentNode;G&&G.forEach(function(De){return De.revert(!1,!0)}),D.start=we,D.end=Ne,ze=Je=qn?re:K(),!E&&!qn&&(ze<re&&K(re),D.scroll.rec=0),D.revert(!1,!0),ce=Nn(),Me&&(pe=-1,Me.restart(!0)),In=0,i&&C&&(i._initted||ne)&&i.progress()!==ne&&i.progress(ne||0,!0).render(i.time(),!0,!0),(Jt||$!==D.progress||E||_||i&&!i._initted)&&(i&&!C&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(E&&we<-.001&&!$?Ue.utils.normalize(we,Ne,0):$,!0),D.progress=Jt||(ze-we)/ke===$?0:$),d&&g&&(I._pinOffset=Math.round(D.progress*le)),U&&U.invalidate(),isNaN(Le)||(Le-=Ue.getProperty(X,T.p),Te-=Ue.getProperty(O,T.p),bc(X,T,Le),bc(xe,T,Le-(et||0)),bc(O,T,Te),bc(Fe,T,Te-(et||0))),Jt&&!qn&&D.update(),u&&!qn&&!Ie&&(Ie=!0,u(D),Ie=!1)}},D.getVelocity=function(){return(K()-Je)/(Nn()-Ya)*1e3||0},D.endAnimation=function(){Ba(D.callbackAnimation),i&&(U?U.progress(1):i.paused()?C||Ba(i,D.direction<0,1):Ba(i,i.reversed()))},D.labelToScroll=function(Ae){return i&&i.labels&&(we||D.refresh()||we)+i.labels[Ae]/i.duration()*ke||0},D.getTrailing=function(Ae){var Qe=st.indexOf(D),We=D.direction>0?st.slice(0,Qe).reverse():st.slice(Qe+1);return(yi(Ae)?We.filter(function(et){return et.vars.preventOverlaps===Ae}):We).filter(function(et){return D.direction>0?et.end<=we:et.start>=Ne})},D.update=function(Ae,Qe,We){if(!(E&&!We&&!Ae)){var et=qn===!0?re:D.scroll(),jt=Ae?0:(et-we)/ke,at=jt<0?0:jt>1?1:jt||0,yt=D.progress,Jt,Ot,Pt,gt,ei,Et,Pn,di;if(Qe&&(Je=ze,ze=E?K():et,S&&($e=me,me=i&&!C?i.totalProgress():at)),m&&d&&!In&&!gc&&Gi&&(!at&&we<et+(et-Je)/(Nn()-Ya)*m?at=1e-4:at===1&&Ne>et+(et-Je)/(Nn()-Ya)*m&&(at=.9999)),at!==yt&&D.enabled){if(Jt=D.isActive=!!at&&at<1,Ot=!!yt&&yt<1,Et=Jt!==Ot,ei=Et||!!at!=!!yt,D.direction=at>yt?1:-1,D.progress=at,ei&&!In&&(Pt=at&&!yt?0:at===1?1:yt===1?2:3,C&&(gt=!Et&&k[Pt+1]!=="none"&&k[Pt+1]||k[Pt],di=i&&(gt==="complete"||gt==="reset"||gt in i))),y&&(Et||di)&&(di||h||!i)&&(Fn(y)?y(D):D.getTrailing(y).forEach(function(Ar){return Ar.endAnimation()})),C||(U&&!In&&!gc?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",at,i._tTime/i._tDur):(U.vars.totalProgress=at,U.invalidate().restart())):i&&i.totalProgress(at,!!(In&&(ce||Ae)))),d){if(Ae&&g&&(I.style[g+T.os2]=ye),!V)q($a(fe+le*at));else if(ei){if(Pn=!Ae&&at>yt&&Ne+1>et&&et+1>=pr(L,T),b)if(!Ae&&(Jt||Pn)){var sn=Br(d,!0),on=et-we;rg(d,xt,sn.top+(T===cn?on:0)+ln,sn.left+(T===cn?0:on)+ln)}else rg(d,I);ea(Jt||Pn?P:M),oe&&at<1&&Jt||q(fe+(at===1&&!Pn?le:0))}}S&&!he.tween&&!In&&!gc&&Me.restart(!0),a&&(Et||x&&at&&(at<1||!mh))&&Pl(a.targets).forEach(function(Ar){return Ar.classList[Jt||x?"add":"remove"](a.className)}),o&&!C&&!Ae&&o(D),ei&&!In?(C&&(di&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),o&&o(D)),(Et||!mh)&&(c&&Et&&_h(D,c),z[Pt]&&_h(D,z[Pt]),x&&(at===1?D.kill(!1,1):z[Pt]=0),Et||(Pt=at===1?1:3,z[Pt]&&_h(D,z[Pt]))),R&&!Jt&&Math.abs(D.getVelocity())>(ja(R)?R:2500)&&(Ba(D.callbackAnimation),U?U.progress(1):Ba(i,gt==="reverse"?1:!at,1))):C&&o&&!In&&o(D)}if(be){var mn=E?et/E.duration()*(E._caScrollDist||0):et;ee(mn+(X._isFlipped?1:0)),be(mn)}ve&&ve(-et/E.duration()*(E._caScrollDist||0))}},D.enable=function(Ae,Qe){D.enabled||(D.enabled=!0,yn(L,"resize",Ka),B||yn(L,"scroll",Oo),ie&&yn(r,"refreshInit",ie),Ae!==!1&&(D.progress=$=0,ze=Je=pe=K()),Qe!==!1&&D.refresh())},D.getTween=function(Ae){return Ae&&he?he.tween:U},D.setPositions=function(Ae,Qe,We,et){if(E){var jt=E.scrollTrigger,at=E.duration(),yt=jt.end-jt.start;Ae=jt.start+yt*Ae/at,Qe=jt.start+yt*Qe/at}D.refresh(!1,!1,{start:jm(Ae,We&&!!D._startClamp),end:jm(Qe,We&&!!D._endClamp)},et),D.update()},D.adjustPinSpacing=function(Ae){if(de&&Ae){var Qe=de.indexOf(T.d)+1;de[Qe]=parseFloat(de[Qe])+Ae+ln,de[1]=parseFloat(de[1])+Ae+ln,ea(de)}},D.disable=function(Ae,Qe){if(Ae!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Qe||U&&U.pause(),re=0,Ee&&(Ee.uncache=1),ie&&xn(r,"refreshInit",ie),Me&&(Me.pause(),he.tween&&he.tween.kill()&&(he.tween=0)),!B)){for(var We=st.length;We--;)if(st[We].scroller===L&&st[We]!==D)return;xn(L,"resize",Ka),B||xn(L,"scroll",Oo)}},D.kill=function(Ae,Qe){D.disable(Ae,Qe),U&&!Qe&&U.kill(),l&&delete $f[l];var We=st.indexOf(D);We>=0&&st.splice(We,1),We===Yn&&kc>0&&Yn--,We=0,st.forEach(function(et){return et.scroller===D.scroller&&(We=1)}),We||qn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,Ae&&i.revert({kill:!1}),Qe||i.kill()),xe&&[xe,Fe,X,O].forEach(function(et){return et.parentNode&&et.parentNode.removeChild(et)}),dl===D&&(dl=0),d&&(Ee&&(Ee.uncache=1),We=0,st.forEach(function(et){return et.pin===d&&We++}),We||(Ee.spacer=0)),n.onKill&&n.onKill(D)},st.push(D),D.enable(!1,!1),Xe&&Xe(D),i&&i.add&&!ke){var tt=D.update;D.update=function(){D.update=tt,ut.cache++,we||Ne||D.refresh()},Ue.delayedCall(.01,D.update),ke=.01,we=Ne=0}else D.refresh();d&&K1()},r.register=function(n){return Fo||(Ue=n||T0(),b0()&&window.document&&r.enable(),Fo=qa),Fo},r.defaults=function(n){if(n)for(var i in n)yc[i]=n[i];return yc},r.disable=function(n,i){qa=0,st.forEach(function(o){return o[i?"kill":"disable"](n)}),xn(ct,"wheel",Oo),xn(Ut,"scroll",Oo),clearInterval(mc),xn(Ut,"touchcancel",ar),xn(xt,"touchstart",ar),vc(xn,Ut,"pointerdown,touchstart,mousedown",Km),vc(xn,Ut,"pointerup,touchend,mouseup",Zm),iu.kill(),_c(xn);for(var s=0;s<ut.length;s+=3)xc(xn,ut[s],ut[s+1]),xc(xn,ut[s],ut[s+2])},r.enable=function(){if(ct=window,Ut=document,Mi=Ut.documentElement,xt=Ut.body,Ue&&(Pl=Ue.utils.toArray,al=Ue.utils.clamp,Yf=Ue.core.context||ar,ph=Ue.core.suppressOverwrites||ar,Xd=ct.history.scrollRestoration||"auto",jf=ct.pageYOffset||0,Ue.core.globals("ScrollTrigger",r),xt)){qa=1,Qo=document.createElement("div"),Qo.style.height="100vh",Qo.style.position="absolute",N0(),G1(),Zt.register(Ue),r.isTouch=Zt.isTouch,os=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Xf=Zt.isTouch===1,yn(ct,"wheel",Oo),Wd=[ct,Ut,Mi,xt],Ue.matchMedia?(r.matchMedia=function(c){var u=Ue.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Ue.addEventListener("matchMediaInit",function(){D0(),Zd()}),Ue.addEventListener("matchMediaRevert",function(){return L0()}),Ue.addEventListener("matchMedia",function(){$s(0,1),lo("matchMedia")}),Ue.matchMedia().add("(orientation: portrait)",function(){return vh(),vh})):console.warn("Requires GSAP 3.11.0 or later"),vh(),yn(Ut,"scroll",Oo);var n=xt.hasAttribute("style"),i=xt.style,s=i.borderTopStyle,o=Ue.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Br(xt),cn.m=Math.round(a.top+cn.sc())||0,jn.m=Math.round(a.left+jn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),mc=setInterval(eg,250),Ue.delayedCall(.5,function(){return gc=0}),yn(Ut,"touchcancel",ar),yn(xt,"touchstart",ar),vc(yn,Ut,"pointerdown,touchstart,mousedown",Km),vc(yn,Ut,"pointerup,touchend,mouseup",Zm),Wf=Ue.utils.checkPrefix("transform"),zc.push(Wf),Fo=Nn(),iu=Ue.delayedCall(.2,$s).pause(),Bo=[Ut,"visibilitychange",function(){var c=ct.innerWidth,u=ct.innerHeight;Ut.hidden?(Ym=c,qm=u):(Ym!==c||qm!==u)&&Ka()},Ut,"DOMContentLoaded",$s,ct,"load",$s,ct,"resize",Ka],_c(yn),st.forEach(function(c){return c.enable(0,1)}),l=0;l<ut.length;l+=3)xc(xn,ut[l],ut[l+1]),xc(xn,ut[l],ut[l+2])}},r.config=function(n){"limitCallbacks"in n&&(mh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(mc)||(mc=i)&&setInterval(eg,i),"ignoreMobileResize"in n&&(Xf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(_c(xn)||_c(yn,n.autoRefreshEvents||"none"),y0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=si(n),o=ut.indexOf(s),a=oo(s);~o&&ut.splice(o,a?6:2),i&&(a?_r.unshift(ct,i,xt,i,Mi,i):_r.unshift(s,i))},r.clearMatchMedia=function(n){st.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(yi(n)?si(n):n).getBoundingClientRect(),a=o[s?to:no]*i||0;return s?o.right-a>0&&o.left+a<ct.innerWidth:o.bottom-a>0&&o.top+a<ct.innerHeight},r.positionInViewport=function(n,i,s){yi(n)&&(n=si(n));var o=n.getBoundingClientRect(),a=o[s?to:no],l=i==null?a/2:i in su?su[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ct.innerWidth:(o.top+l)/ct.innerHeight},r.killAll=function(n){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ao.killAll||[];ao={},i.forEach(function(s){return s()})}},r})();ft.version="3.14.2";ft.saveStyles=function(r){return r?Pl(r).forEach(function(e){if(e&&e.style){var t=xi.indexOf(e);t>=0&&xi.splice(t,5),xi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ue.core.getCache(e),Yf())}}):xi};ft.revert=function(r,e){return Zd(!r,e)};ft.create=function(r,e){return new ft(r,e)};ft.refresh=function(r){return r?Ka(!0):(Fo||ft.register())&&$s(!0)};ft.update=function(r){return++ut.cache&&Wr(r===!0?2:0)};ft.clearScrollMemory=I0;ft.maxScroll=function(r,e){return pr(r,e?jn:cn)};ft.getScrollFunc=function(r,e){return Ts(si(r),e?jn:cn)};ft.getById=function(r){return $f[r]};ft.getAll=function(){return st.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ft.isScrolling=function(){return!!Gi};ft.snapDirectional=Kd;ft.addEventListener=function(r,e){var t=ao[r]||(ao[r]=[]);~t.indexOf(e)||t.push(e)};ft.removeEventListener=function(r,e){var t=ao[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ft.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ue.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Fn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Fn(s)&&(s=s(),yn(ft,"refresh",function(){return s=e.batchMax()})),Pl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ft.create(c))}),t};var og=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},yh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===Mi&&r(xt,t)},Tc={auto:1,scroll:1},tA=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ue.core.getCache(s),a=Nn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Tc[(l=Fi(s)).overflowY]||Tc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!oo(s)&&(Tc[(l=Fi(s)).overflowY]||Tc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},O0=function(e,t,n,i){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&tA,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&yn(Ut,Zt.eventTypes[0],lg,!1,!0)},onDisable:function(){return xn(Ut,Zt.eventTypes[0],lg,!0)}})},nA=/(input|label|select|textarea)/i,ag,lg=function(e){var t=nA.test(e.target.tagName);(t||ag)&&(e._gsapAllow=!0,ag=t)},iA=function(e){Hs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=si(e.target)||Mi,u=Ue.core.globals().ScrollSmoother,h=u&&u.get(),f=os&&(e.content&&si(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Ts(c,cn),g=Ts(c,jn),_=1,m=(Zt.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,p=0,v=Fn(i)?function(){return i(a)}:function(){return i||2.8},x,S,b=O0(c,e.type,!0,s),w=function(){return S=!1},E=ar,R=ar,y=function(){l=pr(c,cn),R=al(os?1:0,l),n&&(E=al(0,pr(c,jn))),x=io},T=function(){f._gsap.y=$a(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},C=function(){if(S){requestAnimationFrame(w);var W=$a(a.deltaY/2),Q=R(d.v-W);if(f&&Q!==d.v+d.offset){d.offset=Q-d.v;var D=$a((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",d.cacheID=ut.cache,Wr()}return!0}d.offset&&T(),S=!0},L,N,B,V,z=function(){y(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return f&&Ue.set(f,{y:"+=0"}),e.ignoreCheck=function(k){return os&&k.type==="touchmove"&&C()||_>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){S=!1;var k=_;_=$a((ct.visualViewport&&ct.visualViewport.scale||1)/m),L.pause(),k!==_&&yh(c,_>1.01?!0:n?!1:"x"),N=g(),B=d(),y(),x=io},e.onRelease=e.onGestureStart=function(k,W){if(d.offset&&T(),!W)V.restart(!0);else{ut.cache++;var Q=v(),D,ie;n&&(D=g(),ie=D+Q*.05*-k.velocityX/.227,Q*=og(g,D,ie,pr(c,jn)),L.vars.scrollX=E(ie)),D=d(),ie=D+Q*.05*-k.velocityY/.227,Q*=og(d,D,ie,pr(c,cn)),L.vars.scrollY=R(ie),L.invalidate().duration(Q).play(.01),(os&&L.vars.scrollY>=l||D>=l-1)&&Ue.to({},{onUpdate:z,duration:Q})}o&&o(k)},e.onWheel=function(){L._ts&&L.pause(),Nn()-p>1e3&&(x=0,p=Nn())},e.onChange=function(k,W,Q,D,ie){if(io!==x&&y(),W&&n&&g(E(D[2]===W?N+(k.startX-k.x):g()+W-D[1])),Q){d.offset&&T();var se=ie[2]===Q,ue=se?B+k.startY-k.y:d()+Q-ie[1],pe=R(ue);se&&ue!==pe&&(B+=pe-ue),d(pe)}(Q||W)&&Wr()},e.onEnable=function(){yh(c,n?!1:"x"),ft.addEventListener("refresh",z),yn(ct,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){yh(c,!0),xn(ct,"resize",z),ft.removeEventListener("refresh",z),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new Zt(e),a.iOS=os,os&&!d()&&d(1),os&&Ue.ticker.add(ar),V=a._dc,L=Ue.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:U0(d,d(),function(){return L.pause()})},onUpdate:Wr,onComplete:V.vars.onComplete}),a};ft.sort=function(r){if(Fn(r))return st.sort(r);var e=ct.pageYOffset||0;return ft.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ct.innerHeight}),st.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ft.observe=function(r){return new Zt(r)};ft.normalizeScroll=function(r){if(typeof r>"u")return Xn;if(r===!0&&Xn)return Xn.enable();if(r===!1){Xn&&Xn.kill(),Xn=r;return}var e=r instanceof Zt?r:iA(r);return Xn&&Xn.target===e.target&&Xn.kill(),oo(e.target)&&(Xn=e),e};ft.core={_getVelocityProp:Gf,_inputObserver:O0,_scrollers:ut,_proxies:_r,bridge:{ss:function(){Gi||lo("scrollStart"),Gi=Nn()},ref:function(){return In}}};T0()&&Ue.registerPlugin(ft);const ou=[{id:"trading",label:"Trading",rotationSpeed:.28,model:{type:"glb",url:"/models/logo.glb",targetSize:6.2,position:[4.8,-.3,0]}},{id:"payments",label:"Payments",rotationSpeed:.2,model:{type:"primitive",primitive:"stack-cylinders",targetSize:5.4,position:[4.8,-.3,0]}},{id:"financial-rails",label:"Financial rails",rotationSpeed:.16,model:{type:"primitive",primitive:"slab-grid",targetSize:5.8,position:[4.8,-.3,0]}},{id:"messaging",label:"Messaging",rotationSpeed:.22,model:{type:"glb",url:"/models/logo_separate.glb",targetSize:6.1,position:[4.8,-.3,0]}},{id:"privacy",label:"Privacy",rotationSpeed:.14,model:{type:"primitive",primitive:"diamond-cluster",targetSize:5.3,position:[4.8,-.3,0]}},{id:"social-coordination",label:"Social Coordination",rotationSpeed:.18,model:{type:"primitive",primitive:"ring-array",targetSize:5.6,position:[4.8,-.3,0]}}],rA=ou[0].id;function sA({gsap:r,ScrollTrigger:e}){if(!r||!e)return;const t=document.querySelector(".cc-team");if(!t)return;const n=t.querySelectorAll(".row.row-justify-between > .col"),i=t.querySelectorAll('[data-component="team"] > *');n.length&&r.from(n,{autoAlpha:0,y:28,duration:.8,ease:"power2.out",stagger:.12,scrollTrigger:{trigger:t,start:"top 78%",once:!0}}),i.length&&i.forEach((s,o)=>{r.from(s,{autoAlpha:0,y:"+=40",duration:.75,ease:"power2.out",delay:o*.08,scrollTrigger:{trigger:s,start:"top 85%",once:!0}})})}const oA={ramp:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",invert:!1,cellSize:5,aspectComp:.55,fontFamily:"monospace",fontScale:1,contrast:1.15,gamma:.9,bg:"#ffffff",fg:"#125fee"},ir={enterEnd:.4,holdEnd:.44,mergeEnd:.92,rotateEnd:.975};function ta(r,e,t){return Math.min(t,Math.max(e,r))}function vi(r,e,t){return r+(e-r)*t}function ss(r,e,t){return t<=e?0:ta((r-e)/(t-e),0,1)}function aA(r,e,t){return t<=e?0:(r-e)/(t-e)}function cg(r){return r*r*r}function Sh(r){return r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)*.5}function lA(r,e){return ta((r-.5)*e+.5,0,1)}function cA(r,e){return ta(Math.pow(r,e),0,1)}function uA(r,e,t){return .2126*r+.7152*e+.0722*t}function hA(r,e=0){const t=Qi.degToRad(r.fov),n=Math.max(.001,Math.abs(r.position.z-e));return Math.tan(t*.5)*n*r.aspect}function fA(r,e=0){const t=Qi.degToRad(r.fov),n=Math.max(.001,Math.abs(r.position.z-e));return Math.tan(t*.5)*n}function dA(r){if(!r||/^https?:\/\//i.test(r))return r;const e=new URL(import.meta.url),t=e.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//),n=t?t[1]:e.origin,i=r.startsWith("/")?r:`/${r}`;return`${n}${i}`}function pA({gsap:r,canvasSelector:e="#features, .cc-convergence canvas",meshNames:t={left:"clogo_L",right:"clogo_R"},modelUrl:n="/models/logo_split.glb",modelTargetSize:i=7.8,modelVerticalOffset:s=.1,modelVerticalOffsetMobile:o=null,mobileBreakpoint:a=767,stageProgressRange:l=[.5,1],getStageProgress:c=()=>window.__pageTL?.progress()??null,getVisibilityProgress:u=null,visibilityProgressRange:h=[0,1],visibilityFadeInStart:f=0,visibilityFadeInEnd:d=0,visibilityFadeOutStart:g=.985,visibilityFadeOutEnd:_=1,useAsciiCrossfade:m=!0,useContainerSize:p=!1,asciiOverrides:v={}}={}){if(!r)return null;const x=document.querySelector(e);if(!x)return null;const S=document.querySelector("#ascii"),b={...oA,...v},w=x.getContext("2d",{alpha:!1});if(!w)return null;function E(){if(p){const M=x.parentElement;if(M){const I=M.getBoundingClientRect();if(I.width>0&&I.height>0)return{width:I.width,height:I.height}}}return{width:window.innerWidth,height:window.innerHeight}}const R=E();x.style.opacity="0",x.style.display="block";function y(){const M=Math.min(window.devicePixelRatio||1,2);x.width=Math.floor(R.width*M),x.height=Math.floor(R.height*M),x.style.width=`${R.width}px`,x.style.height=`${R.height}px`,w.setTransform(M,0,0,M,0,0),w.fillStyle=b.bg,w.fillRect(0,0,R.width,R.height),w.textBaseline="top"}y();const T=document.createElement("canvas"),C=new po({canvas:T,antialias:!0,alpha:!1,powerPreference:"high-performance"});C.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),C.setSize(R.width,R.height);const L=new ho,N=new un(45,R.width/R.height,.01,1e4);L.add(N);const B=new Ul(16777215,.28),V=new ai(16777215,1.2);V.position.set(6,4,5);const z=new ai(16777215,.45);z.position.set(-5,3,4);const k=new ai(16777215,.55);k.position.set(0,5,-5),L.add(B,V,z,k);const W={uTime:{value:0},uScale:{value:2.3},uIntensity:{value:.86},uBase:{value:.025},uAmp:{value:.015},uResolution:{value:new Ge(R.width,R.height)},uTint:{value:new F(1,1,1)}},Q=new Cn({uniforms:W,depthWrite:!1,depthTest:!1,vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;

      uniform vec3 uTint;
      uniform float uTime;
      uniform float uScale;
      uniform float uIntensity;
      uniform float uBase;
      uniform float uAmp;
      uniform vec2 uResolution;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);

        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));

        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;

        for (int i = 0; i < 5; i++) {
          value += amplitude * noise(p);
          p *= 2.0;
          amplitude *= 0.5;
        }

        return value;
      }

      void main() {
        vec2 uv = vUv - 0.5;
        uv.x *= uResolution.x / uResolution.y;

        float t = uTime;
        vec2 warp = vec2(
          fbm(uv * (uScale * 0.75) + vec2(0.0, t * 0.10)),
          fbm(uv * (uScale * 0.75) + vec2(t * 0.10, 0.0))
        );

        vec2 warp2 = vec2(
          fbm((uv + warp) * (uScale * 0.55) + vec2(t * 0.07, 0.0)),
          fbm((uv + warp) * (uScale * 0.55) + vec2(0.0, t * 0.09))
        );

        float field = fbm((uv + 0.30 * warp + 0.18 * warp2) * uScale + vec2(t * 0.04, -t * 0.03));
        field = pow(field, 1.35) * uIntensity;

        float shade = uBase + field * uAmp;
        gl_FragColor = vec4(vec3(shade) * uTint, 1.0);
      }
    `}),D=new wt(new Tr(2,2),Q);D.frustumCulled=!1,D.renderOrder=-1e3,L.add(D);const ie=new Ht,se=new Ht,ue=new Ht,pe=new Ht;ie.add(se),se.add(ue,pe),L.add(ie);const ce={baseScale:1,centerY:0,holdLeftX:-1,holdRightX:1,holdLeftY:0,holdRightY:0,startLeftX:-2,startRightX:2,cameraStartZ:16,cameraEndZ:-8},$={ready:!1,splitMode:!0},K={maxDim:1,width:1,height:1,depth:1,leftWidth:1,rightWidth:1},he=new Fl,Ee=new Es({color:new Ze("#ffffff"),metalness:.1,roughness:.58});function te(){ue.position.set(0,0,0),pe.position.set(0,0,0),se.rotation.set(0,0,0),se.scale.setScalar(ce.baseScale),se.updateMatrixWorld(!0);const I=new Ct().setFromObject(se).getSize(new F),Y=new Ct().setFromObject(ue),Z=new Ct().setFromObject(pe),q=Y.getSize(new F),fe=Z.getSize(new F);K.maxDim=Math.max(I.x,I.y,I.z,.001),K.width=Math.max(I.x,.001),K.height=Math.max(I.y,.001),K.depth=Math.max(I.z,.001),K.leftWidth=Math.max(q.x,.001),K.rightWidth=Math.max(fe.x,.001)}function ze(){if(!$.ready)return;const M=R.width<=a,I=M&&typeof o=="number"?o:s,Y=Qi.degToRad(N.fov),Z=Math.tan(Y*.5),q=Math.max(1e-4,Z*N.aspect),fe=K.height*.5/Math.max(1e-4,Z),le=K.width*.5/q,ye=Math.max(le,fe);ce.cameraStartZ=ye*(M?1.7:1.45),ce.cameraEndZ=-Math.max(K.maxDim*(M?2.3:2.6),ye*(M?1.2:1.4)),N.position.set(0,0,ce.cameraStartZ),N.rotation.set(0,0,0),N.near=.01,N.far=Math.max(2e3,Math.abs(ce.cameraEndZ)*4),N.updateProjectionMatrix();const de=fA(N,0);ce.centerY=de*I,ie.position.set(0,ce.centerY,0);const ee=hA(N,0),oe=Math.max(.01,Math.min(.05,ee*.004));ce.startLeftX=-ee-K.leftWidth*.5-oe,ce.startRightX=ee+K.rightWidth*.5+oe;const be=Math.max((K.leftWidth+K.rightWidth)*.28,ee*.22),Ce=ta(K.maxDim*.05,.06,.34);ce.holdLeftX=-be,ce.holdRightX=be,ce.holdLeftY=-Ce,ce.holdRightY=Ce}he.load(dA(n),M=>{const I=M.scene;I.updateMatrixWorld(!0),ue.clear(),pe.clear();const Y=t?.left,Z=t?.right,q=Y?I.getObjectByName(Y):null,fe=Z?I.getObjectByName(Z):null;q&&fe?(q.removeFromParent(),fe.removeFromParent(),ue.add(q),pe.add(fe),$.splitMode=!0):(ue.add(I),$.splitMode=!1),se.updateMatrixWorld(!0);const le=new Ct().setFromObject(se),ye=le.getSize(new F),de=le.getCenter(new F);se.position.sub(de);const ee=Math.max(ye.x,ye.y,ye.z,.001);ce.baseScale=i/ee,se.scale.setScalar(ce.baseScale),se.traverse(be=>{be.isMesh&&(be.castShadow=!1,be.receiveShadow=!1,be.material=Ee,be.material.needsUpdate=!0)}),te(),$.ready=!0,ze();const oe=Ie();typeof oe=="number"&&X(oe)},void 0,M=>{console.error("[features] Failed to load split logo:",M)});let Je=null,we=null;function Ne(){const M=Math.max(20,Math.floor(R.width/b.cellSize)),I=R.width/M,Y=I/b.aspectComp,Z=Math.max(20,Math.floor(R.height/Y)),q=M,fe=Z;Je&&Je.dispose(),Je=new An(q,fe,{depthBuffer:!0,stencilBuffer:!1}),we=new Uint8Array(q*fe*4),Ne.width=q,Ne.height=fe,Ne.cellW=I,Ne.cellH=Y}Ne();function xe(){const M=Ne.width,I=Ne.height;w.fillStyle=b.bg,w.fillRect(0,0,R.width,R.height),w.fillStyle=b.fg;const Y=Math.max(8,Math.floor(Ne.cellH*b.fontScale));w.font=`${Y}px ${b.fontFamily}`,w.textAlign="left";const Z=w.measureText("M").width||1,q=Ne.cellW/Z;w.save(),w.scale(q,1);const fe=b.ramp,le=fe.length,ye=Math.max(Ne.cellH,Y*1.05);for(let de=0;de<I;de+=1){let ee="";for(let oe=0;oe<M;oe+=1){const Ce=((I-1-de)*M+oe)*4,me=we[Ce]/255,$e=we[Ce+1]/255,U=we[Ce+2]/255;let ge=uA(me,$e,U);ge=lA(ge,b.contrast),ge=cA(ge,b.gamma),b.invert&&(ge=1-ge);const ae=Math.floor(ge*(le-1));ee+=fe[ae]}w.fillText(ee,0,de*ye)}w.restore()}const Fe={alpha:0};function X(M){if(!$.ready)return;const I=ta(M,0,1);if(!$.splitMode){ue.position.set(0,0,0),pe.position.set(0,0,0);const de=cg(ss(I,ir.rotateEnd,1)),ee=Sh(ss(I,0,ir.rotateEnd));se.rotation.set(0,vi(0,Math.PI*.85,ee),vi(0,Math.PI*.12,ee)),se.scale.setScalar(ce.baseScale*vi(1,1.35,de)),N.position.set(0,0,vi(ce.cameraStartZ,ce.cameraEndZ,de)),N.rotation.set(0,0,0);return}let Y=ce.startLeftX,Z=ce.startRightX,q=ce.holdLeftY,fe=ce.holdRightY;if(I<=ir.enterEnd){const de=ss(I,0,ir.enterEnd);Y=vi(ce.startLeftX,ce.holdLeftX,de),Z=vi(ce.startRightX,ce.holdRightX,de)}else if(I<=ir.holdEnd)Y=ce.holdLeftX,Z=ce.holdRightX;else{const de=Sh(ss(I,ir.holdEnd,ir.mergeEnd));Y=vi(ce.holdLeftX,0,de),Z=vi(ce.holdRightX,0,de),q=vi(ce.holdLeftY,0,de),fe=vi(ce.holdRightY,0,de)}const le=Sh(ss(I,ir.mergeEnd,ir.rotateEnd)),ye=cg(ss(I,ir.rotateEnd,1));ue.position.set(Y,q,0),pe.position.set(Z,fe,0),se.rotation.set(0,0,vi(0,Math.PI*.25,le)),se.scale.setScalar(ce.baseScale*vi(1,1.35,ye)),N.position.set(0,0,vi(ce.cameraStartZ,ce.cameraEndZ,ye)),N.rotation.set(0,0,0)}function O(M){const I=d>f?ss(M,f,d):M>=f?1:0,Y=g===null?1:1-ss(M,g,_);return ta(I*Y,0,1)}function Oe(M,I){const Y=M?.();return typeof Y=="number"&&Number.isFinite(Y)?aA(Y,I[0],I[1]):null}function Ie(){return Oe(c,l)}function ke(){return typeof u=="function"?Oe(u,h):Ie()}const Se=new fo;function P(){W.uTime.value=Se.getElapsedTime();const M=Ie(),I=ke(),Y=$.ready&&typeof I=="number"?O(I):0;Math.abs(Y-Fe.alpha)>.001&&(Fe.alpha=Y,x.style.opacity=`${Y}`,S&&m&&(S.style.opacity=`${1-Y}`)),$.ready&&Y>.001&&typeof M=="number"&&(X(M),C.setRenderTarget(Je),C.render(L,N),C.setRenderTarget(null),C.readRenderTargetPixels(Je,0,0,Je.width,Je.height,we),xe()),requestAnimationFrame(P)}return P(),window.addEventListener("resize",()=>{const M=E();if(R.width=M.width,R.height=M.height,N.aspect=R.width/R.height,N.updateProjectionMatrix(),C.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),C.setSize(R.width,R.height),y(),Ne(),W.uResolution.value.set(R.width,R.height),ze(),$.ready){const I=Ie();typeof I=="number"&&X(I)}}),{canvas:x}}const mA="#1a1a1a",Nr={ramp:".'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:6,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.85,color:mA,opacity:.5};function au(r,e,t){return Math.min(t,Math.max(e,r))}function gA(r,e,t){return .2126*r+.7152*e+.0722*t}function _A(r,e){return au((r-.5)*e+.5,0,1)}function vA(r,e){return au(Math.pow(r,e),0,1)}function xA(){const r=document.querySelector('canvas[data-component="roadmap-ascii"]');if(!r)return null;const e=r.closest(".section.cc-roadmap"),t=r.getContext("2d");if(!t)return null;const n=document.createElement("canvas"),i=new po({canvas:n,antialias:!1,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(1);const s=new ho,o=new hu,a={uTime:{value:0},uScale:{value:2.55},uIntensity:{value:.88},uBase:{value:.05},uAmp:{value:.35},uResolution:{value:new Ge(1,1)},uTint:{value:new F(1,1,1)}},l=new Cn({uniforms:a,depthWrite:!1,depthTest:!1,vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform float uTime;
      uniform float uScale;
      uniform float uIntensity;
      uniform float uBase;
      uniform float uAmp;
      uniform vec2 uResolution;
      uniform vec3 uTint;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);

        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));

        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p *= 2.0;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = vUv - 0.5;
        uv.x *= uResolution.x / uResolution.y;

        float t = uTime;

        vec2 warp = vec2(
          fbm(uv * (uScale * 0.75) + vec2(0.0, t * 0.10)),
          fbm(uv * (uScale * 0.75) + vec2(t * 0.10, 0.0))
        );

        vec2 warp2 = vec2(
          fbm((uv + warp) * (uScale * 0.55) + vec2(t * 0.07, 0.0)),
          fbm((uv + warp) * (uScale * 0.55) + vec2(0.0, t * 0.09))
        );

        float n = fbm((uv + 0.30 * warp + 0.18 * warp2) * uScale + vec2(t * 0.04, -t * 0.03));
        n = pow(n, 1.35) * uIntensity;

        float v = uBase + n * uAmp;
        gl_FragColor = vec4(vec3(v) * uTint, 1.0);
      }
    `}),c=new wt(new Tr(2,2),l);c.frustumCulled=!1,s.add(c);let u=null,h=null,f=1,d=1,g=1,_=1,m=1,p=1;const v=()=>{const w=r.getBoundingClientRect(),E=e?.getBoundingClientRect();f=Math.max(1,Math.floor(w.width||E?.width||1)),d=Math.max(1,Math.floor(w.height||E?.height||1));const R=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.floor(f*R)),r.height=Math.max(1,Math.floor(d*R)),r.style.width=`${f}px`,r.style.height=`${d}px`,t.setTransform(R,0,0,R,0,0),t.textBaseline="top",g=au(Math.floor(f/Nr.cellSize),32,220),m=f/g,p=m/Nr.aspectComp,_=au(Math.floor(d/p),18,140),u&&u.dispose(),u=new An(g,_,{depthBuffer:!1,stencilBuffer:!1}),h=new Uint8Array(g*_*4),a.uResolution.value.set(f,d),i.setSize(g,_,!1)};v();const x=new ResizeObserver(v);x.observe(r),window.addEventListener("resize",v);const S=new fo,b=()=>{if(!document.body.contains(r)){x.disconnect(),window.removeEventListener("resize",v),u?.dispose(),l.dispose(),c.geometry.dispose(),i.dispose();return}a.uTime.value=S.getElapsedTime(),i.setRenderTarget(u),i.render(s,o),i.setRenderTarget(null),i.readRenderTargetPixels(u,0,0,g,_,h),t.clearRect(0,0,f,d),t.fillStyle=Nr.color,t.globalAlpha=Nr.opacity;const w=Math.max(8,Math.floor(p*Nr.fontScale));t.font=`${w}px monospace`;const E=Math.max(1,t.measureText("M").width),R=m/E;t.save(),t.scale(R,1);for(let y=0;y<_;y++){let T="";for(let L=0;L<g;L++){const B=((_-1-y)*g+L)*4,V=h[B]/255,z=h[B+1]/255,k=h[B+2]/255;let W=gA(V,z,k);W=_A(W,Nr.contrast),W=vA(W,Nr.gamma);const Q=Math.floor(W*(Nr.ramp.length-1));T+=Nr.ramp[Q]}const C=Math.max(p,w*1.04);t.fillText(T,0,y*C)}t.restore(),t.globalAlpha=1,requestAnimationFrame(b)};return requestAnimationFrame(b),{resize:v}}const yA="#fafafa",Ur={ramp:".'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:6,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.85,color:yA,opacity:.5};function va(r,e,t){return Math.min(t,Math.max(e,r))}function SA(r,e,t){return .2126*r+.7152*e+.0722*t}function MA(r,e){return va((r-.5)*e+.5,0,1)}function bA(r,e){return va(Math.pow(r,e),0,1)}function TA(){const r=document.querySelector('canvas[data-component="grid-canvas"]');if(!r)return null;const e=r.closest(".section.cc-on-grid"),t=r.getContext("2d");if(!t)return null;const n=document.createElement("canvas"),i=new po({canvas:n,antialias:!1,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(1);const s=new ho,o=new hu,a={uTime:{value:0},uScale:{value:2.55},uIntensity:{value:.88},uBase:{value:.05},uAmp:{value:.35},uResolution:{value:new Ge(1,1)},uTint:{value:new F(1,1,1)}},l=new Cn({uniforms:a,depthWrite:!1,depthTest:!1,vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform float uTime;
      uniform float uScale;
      uniform float uIntensity;
      uniform float uBase;
      uniform float uAmp;
      uniform vec2 uResolution;
      uniform vec3 uTint;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);

        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));

        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p *= 2.0;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = vUv - 0.5;
        uv.x *= uResolution.x / uResolution.y;

        float t = uTime;

        vec2 warp = vec2(
          fbm(uv * (uScale * 0.75) + vec2(0.0, t * 0.10)),
          fbm(uv * (uScale * 0.75) + vec2(t * 0.10, 0.0))
        );

        vec2 warp2 = vec2(
          fbm((uv + warp) * (uScale * 0.55) + vec2(t * 0.07, 0.0)),
          fbm((uv + warp) * (uScale * 0.55) + vec2(0.0, t * 0.09))
        );

        float n = fbm((uv + 0.30 * warp + 0.18 * warp2) * uScale + vec2(t * 0.04, -t * 0.03));
        n = pow(n, 1.35) * uIntensity;

        float v = uBase + n * uAmp;
        gl_FragColor = vec4(vec3(v) * uTint, 1.0);
      }
    `}),c=new wt(new Tr(2,2),l);c.frustumCulled=!1,s.add(c);let u=null,h=null,f=1,d=1,g=1,_=1,m=1,p=1;const v=()=>{const w=r.getBoundingClientRect(),E=e?.getBoundingClientRect();f=Math.max(1,Math.floor(w.width||E?.width||1)),d=Math.max(1,Math.floor(w.height||E?.height||1));const R=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.floor(f*R)),r.height=Math.max(1,Math.floor(d*R)),r.style.width=`${f}px`,r.style.height=`${d}px`,t.setTransform(R,0,0,R,0,0),t.textBaseline="top",g=va(Math.floor(f/Ur.cellSize),32,220),m=f/g,p=m/Ur.aspectComp,_=va(Math.floor(d/p),18,140),u&&u.dispose(),u=new An(g,_,{depthBuffer:!1,stencilBuffer:!1}),h=new Uint8Array(g*_*4),a.uResolution.value.set(f,d),i.setSize(g,_,!1)};v();const x=new ResizeObserver(v);x.observe(r),window.addEventListener("resize",v);const S=new fo,b=()=>{if(!document.body.contains(r)){x.disconnect(),window.removeEventListener("resize",v),u?.dispose(),l.dispose(),c.geometry.dispose(),i.dispose();return}a.uTime.value=S.getElapsedTime(),i.setRenderTarget(u),i.render(s,o),i.setRenderTarget(null),i.readRenderTargetPixels(u,0,0,g,_,h),t.clearRect(0,0,f,d),t.fillStyle=Ur.color,t.globalAlpha=Ur.opacity;const w=Math.max(8,Math.floor(p*Ur.fontScale));t.font=`${w}px monospace`;const E=Math.max(1,t.measureText("M").width),R=m/E;t.save(),t.scale(R,1);for(let y=0;y<_;y++){let T="";for(let L=0;L<g;L++){const B=((_-1-y)*g+L)*4,V=h[B]/255,z=h[B+1]/255,k=h[B+2]/255;let W=SA(V,z,k);W=MA(W,Ur.contrast),W=bA(W,Ur.gamma);const Q=Math.floor(W*(Ur.ramp.length-1));T+=Ur.ramp[Q]}const C=Math.max(p,w*1.04);t.fillText(T,0,y*C)}t.restore(),t.globalAlpha=1,requestAnimationFrame(b)};return requestAnimationFrame(b),{resize:v}}function wA(){const r=document.querySelector('[data-component="grid-stack"]');if(!r)return null;const e=r.closest(".section.cc-on-grid")||r,t=Array.from(r.querySelectorAll("img, .grid_icon-preview"));if(!t.length)return null;const n=(t.length-1)*.5,i=34,s=24,o={tx:0,ty:0,x:0,y:0,active:!1};t.forEach(u=>{u.style.willChange="transform"});const a=()=>{o.x+=(o.tx-o.x)*.14,o.y+=(o.ty-o.y)*.14,t.forEach((u,h)=>{const d=h-n,g=o.x*d*1.05,_=o.y*d*.78;u.style.transform=`translate3d(${g}px, ${_}px, 0)`}),requestAnimationFrame(a)},l=u=>{if(u.pointerType==="touch")return;const h=e.getBoundingClientRect(),f=va((u.clientX-h.left)/Math.max(h.width,1),0,1),d=va((u.clientY-h.top)/Math.max(h.height,1),0,1);o.tx=-(f-.5)*2*i,o.ty=-(d-.5)*2*s,o.active=!0},c=()=>{o.active=!1,o.tx=0,o.ty=0};return e.addEventListener("pointermove",l,{passive:!0}),e.addEventListener("pointerleave",c),window.addEventListener("blur",c),requestAnimationFrame(a),{destroy(){e.removeEventListener("pointermove",l),e.removeEventListener("pointerleave",c),window.removeEventListener("blur",c)}}}const F0="#ffffff",sr={ramp:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:7,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.86,color:F0,opacity:.92};function lu(r,e,t){return Math.min(t,Math.max(e,r))}function EA(r,e,t){return .2126*r+.7152*e+.0722*t}function AA(r,e){return lu((r-.5)*e+.5,0,1)}function RA(r,e){return lu(Math.pow(r,e),0,1)}function ug(r,e=2.8){r.updateMatrixWorld(!0);const n=new Ct().setFromObject(r).getSize(new F),i=Math.max(n.x,n.y,n.z);i>0&&r.scale.setScalar(e/i),r.updateMatrixWorld(!0);const o=new Ct().setFromObject(r).getCenter(new F);r.position.sub(o)}function CA(r){const e=r<=767;return{targetSize:e?2.2:2.8,cameraZ:e?6.8:6,cameraY:e?.08:.14,cellSize:e?sr.cellSize+1:sr.cellSize}}function PA(){const r=document.querySelector('.section.cc-footer canvas[data-component="footer-canvas"]')||document.querySelector('canvas[data-component="footer-canvas"]');if(!r)return null;const e=r.closest(".section.cc-footer"),t=r.getContext("2d",{alpha:!0});if(!t)return null;const n=document.createElement("canvas"),i=new po({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"});i.setPixelRatio(1),i.setClearColor(0,0);const s=new ho,o=new un(38,1,.1,100),a=new Ul(16777215,.44),l=new ai(16777215,1.12);l.position.set(3.6,2.8,4.2);const c=new ai(16777215,.6);c.position.set(-2.5,1.8,-3.8),s.add(a,l,c);const u={uTime:{value:0},uScale:{value:2.5},uIntensity:{value:.9},uBase:{value:.08},uAmp:{value:.115},uResolution:{value:new Ge(1,1)},uTint:{value:new F(1,1,1)}},h=new Cn({uniforms:u,depthWrite:!1,depthTest:!1,transparent:!0,vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform float uTime;
      uniform float uScale;
      uniform float uIntensity;
      uniform float uBase;
      uniform float uAmp;
      uniform vec2 uResolution;
      uniform vec3 uTint;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);

        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));

        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p *= 2.0;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = vUv - 0.5;
        uv.x *= uResolution.x / uResolution.y;

        float t = uTime;

        vec2 warp = vec2(
          fbm(uv * (uScale * 0.75) + vec2(0.0, t * 0.10)),
          fbm(uv * (uScale * 0.75) + vec2(t * 0.10, 0.0))
        );

        vec2 warp2 = vec2(
          fbm((uv + warp) * (uScale * 0.55) + vec2(t * 0.07, 0.0)),
          fbm((uv + warp) * (uScale * 0.55) + vec2(0.0, t * 0.09))
        );

        float n = fbm((uv + 0.30 * warp + 0.18 * warp2) * uScale + vec2(t * 0.04, -t * 0.03));
        n = pow(n, 1.35) * uIntensity;

        float v = uBase + n * uAmp;
        gl_FragColor = vec4(vec3(v) * uTint, 1.0);
      }
    `}),f=new wt(new Tr(2,2),h);f.frustumCulled=!1,f.renderOrder=-1e3,s.add(f);const d=new Ht;s.add(d),new Fl().load((()=>{const C=new URL(import.meta.url),L=C.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//);return L?`${L[1]}/models/logo_split.glb`:`${C.origin}/models/logo_split.glb`})(),C=>{const L=C.scene.clone(!0);L.traverse(N=>{if(!N.isMesh)return;N.castShadow=!1,N.receiveShadow=!1;const B=new Es({color:new Ze(F0),metalness:.08,roughness:.62});N.material=B}),ug(L),d.clear(),d.add(L)},void 0,C=>console.error("Failed to load footer GLB:",C));let _=null,m=null,p=1,v=1,x=1,S=1,b=1,w=1;const E=()=>{const C=r.getBoundingClientRect(),L=e?.getBoundingClientRect();p=Math.max(1,Math.floor(C.width||L?.width||1)),v=Math.max(1,Math.floor(C.height||L?.height||1));const N=CA(p),B=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.floor(p*B)),r.height=Math.max(1,Math.floor(v*B)),r.style.width=`${p}px`,r.style.height=`${v}px`,t.setTransform(B,0,0,B,0,0),t.textBaseline="top",o.aspect=p/v,o.position.set(0,N.cameraY,N.cameraZ),o.lookAt(0,0,0),o.updateProjectionMatrix(),x=lu(Math.floor(p/N.cellSize),24,220),b=p/x,w=b/sr.aspectComp,S=lu(Math.floor(v/w),18,140),_&&_.dispose(),_=new An(x,S,{depthBuffer:!0,stencilBuffer:!1}),m=new Uint8Array(x*S*4),i.setSize(x,S,!1),u.uResolution.value.set(p,v),d.children[0]&&ug(d.children[0],N.targetSize)};E();const R=new ResizeObserver(E);R.observe(r),window.addEventListener("resize",E);const y=new fo,T=()=>{if(!document.body.contains(r)){R.disconnect(),window.removeEventListener("resize",E),_?.dispose(),h.dispose(),f.geometry.dispose(),i.dispose();return}const C=y.getElapsedTime();u.uTime.value=C,d.children[0]&&(d.rotation.y=C*.16,d.rotation.x=Math.sin(C*.35)*.08),i.setRenderTarget(_),i.render(s,o),i.setRenderTarget(null),i.readRenderTargetPixels(_,0,0,x,S,m),t.clearRect(0,0,p,v),t.fillStyle=sr.color,t.globalAlpha=sr.opacity;const L=Math.max(8,Math.floor(w*sr.fontScale));t.font=`${L}px monospace`;const N=Math.max(1,t.measureText("M").width),B=b/N;t.save(),t.scale(B,1);for(let V=0;V<S;V++){let z="";for(let W=0;W<x;W++){const D=((S-1-V)*x+W)*4,ie=m[D]/255,se=m[D+1]/255,ue=m[D+2]/255;let pe=EA(ie,se,ue);pe=AA(pe,sr.contrast),pe=RA(pe,sr.gamma);const ce=Math.floor(pe*(sr.ramp.length-1));z+=sr.ramp[ce]}const k=Math.max(w,L*1.04);t.fillText(z,0,V*k)}t.restore(),t.globalAlpha=1,requestAnimationFrame(T)};return requestAnimationFrame(T),{resize:E}}const LA="#5491ff",DA={trading:"trading.glb",payments:"payements.glb","financial rails":"railways.glb",messaging:"messaging.glb",privacy:"security.glb","social coordination":"social.glb"},$i={ramp:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:4,aspectComp:.55,fontScale:1,contrast:1.2,gamma:.9,color:LA,backgroundCutoff:.08,modelAlphaCutoff:.02};function cu(r,e,t){return Math.min(t,Math.max(e,r))}function hg(r){return r.replace(/\[/g,"").replace(/\]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function IA(r){const e=new URL(import.meta.url),t=e.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//);return`${t?t[1]:e.origin}/models/features/${r}`}function fg(r,e=3.2){r.updateMatrixWorld(!0);const n=new Ct().setFromObject(r).getSize(new F),i=Math.max(n.x,n.y,n.z);if(i>0){const a=e/i;r.scale.setScalar(a)}r.updateMatrixWorld(!0);const o=new Ct().setFromObject(r).getCenter(new F);r.position.sub(o)}function dg(r){const e=r<=767;return{isMobile:e,targetModelSize:e?2.45:3.2,cameraY:e?.1:.15,cameraZ:e?6.8:6,asciiCellSize:e?$i.cellSize+1:$i.cellSize}}function NA(r,e,t){return .2126*r+.7152*e+.0722*t}function UA(r,e){return cu((r-.5)*e+.5,0,1)}function OA(r,e){return cu(Math.pow(r,e),0,1)}function FA(){const r=document.querySelector('[data-component="features"]');if(!r)return null;const t=r.closest(".section, .cc-system, .cc-features")?.querySelector('canvas[data-component="features-canvas"]')??null;if(!t)return null;const n=t.getContext("2d",{alpha:!0});if(!n)return null;const i=Array.from(r.querySelectorAll(".system-tabs_btn"));if(!i.length)return null;const s=se=>{i.forEach(ue=>{const pe=ue===se;ue.classList.toggle("is-active",pe),ue.setAttribute("aria-pressed",String(pe)),ue.dataset.active=pe?"true":"false";const ce=ue.closest(".system-tabs_list-item");ce&&(ce.classList.toggle("is-active",pe),ce.dataset.active=pe?"true":"false")})},o=document.createElement("canvas"),a=new po({canvas:o,antialias:!0,alpha:!0,powerPreference:"high-performance"});a.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),a.setClearColor(0,0);const l=new ho,c=new un(36,1,.1,100);c.position.set(0,.15,6);const u=new Ul(16777215,.45),h=new ai(16777215,1.25);h.position.set(3.5,3,4.5);const f=new ai(16777215,.55);f.position.set(-3,2,-4),l.add(u,h,f);const d={uTime:{value:0},uScale:{value:2.5},uIntensity:{value:.88},uBase:{value:0},uAmp:{value:0},uResolution:{value:new Ge(1,1)},uTint:{value:new F(1,1,1)}};new Cn({uniforms:d,depthWrite:!1,depthTest:!1,vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform float uTime;
      uniform float uScale;
      uniform float uIntensity;
      uniform float uBase;
      uniform float uAmp;
      uniform vec2 uResolution;
      uniform vec3 uTint;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);

        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));

        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p *= 2.0;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = vUv - 0.5;
        uv.x *= uResolution.x / uResolution.y;

        float t = uTime;
        vec2 warp = vec2(
          fbm(uv * (uScale * 0.75) + vec2(0.0, t * 0.10)),
          fbm(uv * (uScale * 0.75) + vec2(t * 0.10, 0.0))
        );
        vec2 warp2 = vec2(
          fbm((uv + warp) * (uScale * 0.55) + vec2(t * 0.07, 0.0)),
          fbm((uv + warp) * (uScale * 0.55) + vec2(0.0, t * 0.09))
        );

        float n = fbm((uv + 0.30 * warp + 0.18 * warp2) * uScale + vec2(t * 0.04, -t * 0.03));
        n = pow(n, 1.35) * uIntensity;
        float v = uBase + n * uAmp;

        gl_FragColor = vec4(vec3(v) * uTint, 1.0);
      }
    `});const g=new Ht;l.add(g);const _=new Fl,m=new Map;let p=null,v=0,x=null,S=null,b=1,w=1,E=1,R=1,y=1,T=1;const C=()=>{const se=t.getBoundingClientRect();b=Math.max(1,Math.floor(se.width)),w=Math.max(1,Math.floor(se.height));const ue=dg(b),pe=Math.min(window.devicePixelRatio||1,2);t.width=Math.max(1,Math.floor(b*pe)),t.height=Math.max(1,Math.floor(w*pe)),t.style.width=`${b}px`,t.style.height=`${w}px`,n.setTransform(pe,0,0,pe,0,0),n.textBaseline="top",c.aspect=b/w,c.position.set(0,ue.cameraY,ue.cameraZ),c.updateProjectionMatrix(),E=cu(Math.floor(b/ue.asciiCellSize),22,220),y=b/E,T=y/$i.aspectComp,R=cu(Math.floor(w/T),16,140),x&&x.dispose(),x=new An(E,R,{depthBuffer:!0,stencilBuffer:!1}),S=new Uint8Array(E*R*4),a.setSize(E,R,!1),d.uResolution.value.set(b,w),p&&fg(p,ue.targetModelSize)};C();const L=new ResizeObserver(C);L.observe(t),window.addEventListener("resize",C);const N=se=>new Promise((ue,pe)=>{_.load(se,ce=>ue(ce.scene),void 0,pe)}),B=async se=>{const ue=hg(se.textContent||""),pe=DA[ue];if(!pe)return;s(se);const ce=++v,$=IA(pe);try{if(!m.has($)){const Ee=await N($);m.set($,Ee)}if(ce!==v)return;const K=m.get($).clone(!0);K.traverse(Ee=>{Ee.isMesh&&(Ee.castShadow=!1,Ee.receiveShadow=!1,Ee.material=Ee.material.clone(),Ee.material.color&&Ee.material.color.set("#ffffff"))});const he=dg(b);fg(K,he.targetModelSize),g.clear(),g.add(K),p=K}catch(K){console.error(`Failed to load feature model: ${pe}`,K)}};i.forEach(se=>{se.setAttribute("aria-pressed","false"),se.dataset.active="false",se.addEventListener("click",()=>{B(se)})});const V=i.find(se=>hg(se.textContent||"")==="trading")||i[0];B(V);const z=new fo;let k=0,W=0;const Q=se=>{const ue=t.getBoundingClientRect(),pe=(se.clientX-ue.left)/ue.width*2-1,ce=(se.clientY-ue.top)/ue.height*2-1;W=pe*.6,k=-ce*.25};t.addEventListener("mousemove",Q);const D=()=>{if(!S)return;n.clearRect(0,0,b,w),n.fillStyle=$i.color;const se=Math.max(8,Math.floor(T*$i.fontScale));n.font=`${se}px monospace`;const ue=Math.max(1,n.measureText("M").width),pe=y/ue;n.save(),n.scale(pe,1);for(let ce=0;ce<R;ce++){let $="";for(let he=0;he<E;he++){const te=((R-1-ce)*E+he)*4,ze=S[te]/255,Je=S[te+1]/255,we=S[te+2]/255;if(S[te+3]/255<$i.modelAlphaCutoff){$+=" ";continue}let xe=NA(ze,Je,we);if(xe=UA(xe,$i.contrast),xe=OA(xe,$i.gamma),xe<$i.backgroundCutoff){$+=" ";continue}const Fe=Math.floor(xe*($i.ramp.length-1));$+=$i.ramp[Fe]}const K=Math.max(T,se*1.04);n.fillText($,0,ce*K)}n.restore()},ie=()=>{if(!document.body.contains(t)){L.disconnect(),window.removeEventListener("resize",C),x?.dispose(),a.dispose();return}z.getElapsedTime(),p&&(g.rotation.y+=(W-g.rotation.y)*.08,g.rotation.x+=(k-g.rotation.x)*.08),a.setRenderTarget(x),a.render(l,c),a.setRenderTarget(null),a.readRenderTargetPixels(x,0,0,E,R,S),D(),requestAnimationFrame(ie)};return requestAnimationFrame(ie),{destroy(){L.disconnect(),window.removeEventListener("resize",C),t.removeEventListener("mousemove",Q),x?.dispose(),a.dispose()}}}const pg={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.008}};function BA(r){const e=(r.dataset.splitType||r.dataset.split||"").trim().toLowerCase();return e==="lines"||e==="words"||e==="chars"||e==="letters"?e==="letters"?"chars":e:r.tagName.toLowerCase()==="p"?"words":"lines"}function Mh(r,e,t){const n=r.dataset[e],i=Number.parseFloat(n);return Number.isFinite(i)?i:t}function kA(r,e,t){const n=t.create(r,{type:"lines, words, chars",mask:"lines",linesClass:"line",wordsClass:"word",charsClass:"letter"});return e==="words"?n.words||[]:e==="chars"?n.chars||[]:n.lines||[]}function zA(r){r.forEach(e=>{e.style.position="relative",e.style.display="inline-block",e.style.backgroundImage="linear-gradient(var(--_color---neutral--gray-matter), var(--_color---neutral--gray-matter))",e.style.backgroundRepeat="no-repeat",e.style.backgroundPosition="0 100%",e.style.backgroundSize="0% 100%",e.style.boxDecorationBreak="clone",e.style.webkitBoxDecorationBreak="clone",e.style.padding="0.03em 0.18em 0.07em",e.style.margin="0 0 0.08em"})}function VA(r={}){const e=r.gsap||window.gsap,t=r.ScrollTrigger||window.ScrollTrigger,n=window.SplitText,i=window.CustomEase;if(!e||!t||!n)return!1;e.registerPlugin(t,n),i?.create&&(i.create("osmo-ease","0.625, 0.05, 0, 1"),e.registerPlugin(i));const s=document.querySelectorAll('[data-split]:not([data-split-ignore="true"])');return s.length&&(s.forEach(o=>{if(o.dataset.splitInitialized==="true")return;const a=BA(o),l=pg[a]||pg.lines,c=Mh(o,"splitDuration",l.duration),u=Mh(o,"splitStagger",l.stagger),h=o.dataset.splitStart||"top 85%",f=o.dataset.splitOnce!=="false",d=kA(o,a,n);if(!d.length){o.dataset.splitInitialized="true";return}const g=a==="lines"&&o.dataset.splitHighlight==="true";g&&zA(d),e.fromTo(d,{yPercent:110},{yPercent:0,duration:c,stagger:u,ease:"osmo-ease",onComplete:()=>{if(!g)return;const _=Mh(o,"splitHighlightDelay",.02);e.to(d,{backgroundSize:"100% 100%",duration:.34,stagger:.08,delay:_,ease:"power2.out"})},scrollTrigger:{trigger:o,start:h,once:f,toggleActions:f?"play none none none":"play reverse play reverse"}}),o.dataset.splitInitialized="true"}),t.refresh()),!0}const B0=location.hostname.includes(".webflow.io")||location.hostname.endsWith("webflow.io");B0||K0(()=>Promise.resolve({}),__vite__mapDeps([0]));const vt=window.gsap||a0,Ci=window.ScrollTrigger||ft;if(window.__GENLABS_MAIN_BOOTED__)throw new Error("GEN Labs main.js initialized more than once");window.__GENLABS_MAIN_BOOTED__=!0;Ci&&vt.registerPlugin(Ci);let wc=null;function HA(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;wc=new YE({duration:1,smoothWheel:!0,smoothTouch:!1,wheelMultiplier:1,touchMultiplier:1}),wc.on("scroll",()=>{Ci?.update()});const e=t=>{wc.raf(t),requestAnimationFrame(e)};requestAnimationFrame(e),window.__GENLABS_LENIS__=wc}HA();const k0=new URL(import.meta.url),mg=k0.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//),GA=mg?mg[1]:k0.origin;function Dl(r){const e=r.replace(/^\//,"");return`${GA}/${e}`}function Go(...r){return document.querySelector(r.join(", "))}const Kn={panelHero:Go(".cc-hero",".panel-hero"),panelUnder:Go(".cc-about",".panel-under"),panelConverge:Go(".cc-convergence",".cc-benefits",".panel-converge"),panelStats:Go(".cc-stats")};Kn.underCopy=Go('[data-text="about-intro"]','[data-text="about-into"]',".under-copy",".cc-about .h3.u-text-center:not(.u-text-primary)");Kn.underHighlight=Go('[data-text="about-outro"]',".under-highlight",".cc-about .u-text-primary");Kn.underCopy&&(Kn.underCopy.dataset.splitIgnore="true");Kn.underHighlight&&(Kn.underHighlight.dataset.splitIgnore="true");const WA=940,en=()=>window.innerWidth<=WA;en()||(Kn.panelConverge&&(Kn.panelConverge.style.opacity="0"),Kn.panelStats&&(Kn.panelStats.style.opacity="0",Kn.panelStats.style.visibility="visible"));const XA=document.fonts?.ready||Promise.resolve();XA.then(()=>{let r=0;const e=40,t=()=>{VA({gsap:vt,ScrollTrigger:Ci})||(r+=1,r<=e&&window.setTimeout(t,120))};t()});const Wn={heroTitle:'[data-text="hero-title"], .hero-title',panelHero:".cc-hero, .panel-hero",panelUnder:".cc-about, .panel-under",panelConverge:".cc-convergence, .cc-benefits, .panel-converge",panelStats:".cc-stats",underCopy:'[data-text="about-intro"], [data-text="about-into"], .under-copy, .cc-about .h3.u-text-center:not(.u-text-primary)',underHighlight:'[data-text="about-outro"], .under-highlight, .cc-about .u-text-primary'},YA=document.querySelector("#grid-stage")||document.querySelector("#grid-stage-scroll")||document.querySelector("#scroll-spacer")||document.body;B0&&("scrollRestoration"in history&&(history.scrollRestoration="manual"),window.scrollTo(0,0),window.addEventListener("load",()=>{window.scrollTo(0,0),requestAnimationFrame(()=>window.scrollTo(0,0))},{once:!0}));let Jd=!0;console.log("ASCII enabled:",Jd);let bh=null,vn=null,Bs=null,ks=null;const Th=new Map,js=new Ht;let Zf=null,Jf=null,z0=.16,wh=0;const Sn={ramp:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",invert:!1,cellSize:5,aspectComp:.55,fontFamily:"monospace",fontScale:1,contrast:1.15,gamma:.9,bg:"#ffffff",fg:"#125fee"},ws=new Gd({title:"ASCII"});ws.hide();let Eh=!1;window.addEventListener("keydown",r=>{if(r.repeat||r.key.toLowerCase()!=="g"||r.ctrlKey||r.metaKey||r.altKey)return;const e=document.activeElement?.tagName;e==="INPUT"||e==="TEXTAREA"||document.activeElement?.isContentEditable||(Eh=!Eh,Eh?ws.show():ws.hide())});const xa={pixelation:Sn.cellSize,matrix:!1,characters:Sn.ramp,fontSize:Math.round(Sn.fontScale*58),invert:Sn.invert,asciiColor:Sn.fg,noiseTint:"#5491FF",logoColor:"#ffffff"};ws.addColor(xa,"asciiColor").name("ASCII COLOR").onChange(r=>{Sn.fg=r});ws.add(xa,"pixelation",4,24,1).name("PIXELATION").onChange(r=>{Sn.cellSize=r,Bi()});ws.add(xa,"characters").name("CHARACTERS").onFinishChange(r=>{xa.characters=r,Sn.ramp=r});const qA={ascii:!0};ws.add(qA,"ascii").name("ASCII MODE").onChange(r=>{Jd=r,ms.style.display=r?"block":"none",Kr.style.display=r?"none":"block"});const Ft={width:window.innerWidth,height:window.innerHeight},ms=document.querySelector("#ascii");if(!ms)throw new Error("Missing #ascii canvas in DOM");const ri=ms.getContext("2d",{alpha:!1});function V0(){const r=Math.min(window.devicePixelRatio||1,2);ms.width=Math.floor(Ft.width*r),ms.height=Math.floor(Ft.height*r),ms.style.width=`${Ft.width}px`,ms.style.height=`${Ft.height}px`,ri.setTransform(r,0,0,r,0,0),ri.fillStyle=Sn.bg,ri.fillRect(0,0,Ft.width,Ft.height),ri.textBaseline="top"}V0();const Kr=document.createElement("canvas"),ji=new po({canvas:Kr,antialias:!0,alpha:!1,powerPreference:"high-performance"});Kr.className="webgl";document.body.appendChild(Kr);Kr.style.position="fixed";Kr.style.inset="0";Kr.style.width="100%";Kr.style.height="100%";Kr.style.display="none";ji.setPixelRatio(Math.min(window.devicePixelRatio,2));ji.setSize(Ft.width,Ft.height);ji.shadowMap.enabled=!1;ji.shadowMap.type=bg;const co=document.createElement("div");co.id="cursor";co.style.cssText=`
  position: fixed;
  left: 0; top: 0;
  width: 10px; height: 10px;
  border-radius: 999px;
  background: #5491ff;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
`;const xs=document.createElement("div");xs.id="cursorLabel";xs.style.cssText=`
  position: fixed;
  left: 0; top: 0;
  padding: 0;
  border-radius: 0;
  background: transparent;
  color: #1a1a1a;
  font: 12px/1 Consolas, "Courier New", monospace;
  letter-spacing: 0.2px;
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  white-space: nowrap;
  text-shadow: 0 px 0 #1a1a1a;
`;document.body.appendChild(co);document.body.appendChild(xs);const ro={x:window.innerWidth*.5,y:window.innerHeight*.5,active:!1},H0=r=>{ro.x=r.clientX,ro.y=r.clientY,ro.active=!0,co.style.opacity="1",xs.style.opacity="1"};window.addEventListener("pointermove",H0,{passive:!0});window.addEventListener("pointerdown",H0,{passive:!0});window.addEventListener("pointerleave",()=>{ro.active=!1,co.style.opacity="0",xs.style.opacity="0"});const gg={x:10,y:-24},_g={x:0,y:-14};let ka=window.innerWidth*.5,za=window.innerHeight*.5;const vg=.12,xg="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",Ah=new WeakMap;function $A(r){const e=r.dataset.scrambleText||r.textContent.trim();r.dataset.scrambleText=e;const t=Ah.get(r);t?.tween&&t.tween.kill();const n={progress:0},i=.32,s=vt.to(n,{progress:1,duration:.55,ease:"power2.out",onUpdate:()=>{const o=Math.max(0,(n.progress-i)/(1-i)),a=Math.floor(e.length*o);let l="";for(let c=0;c<e.length;c++){const u=e[c];if(u===" "){l+=" ";continue}if(c<a){l+=u;continue}const h=Math.floor(Math.random()*xg.length);l+=xg[h]}r.textContent=l},onComplete:()=>{r.textContent=e,Ah.set(r,{tween:null})}});Ah.set(r,{tween:s})}function jA(){document.querySelectorAll(".nav-links a, .nav-link.w-nav-link").forEach(e=>{e.dataset.scrambleText=e.textContent.trim();const t=()=>{$A(e)};e.addEventListener("pointerenter",t),e.addEventListener("focus",t)})}jA();function KA(){const r=document.querySelector(Wn.panelConverge),e=r?.querySelector(".converge-label-left"),t=r?.querySelector(".converge-label-right"),n=r?.querySelector(".converge-hover-card-left"),i=r?.querySelector(".converge-hover-card-right");if(!r||!e||!t||!n||!i)return;const s=(a,l,c)=>Math.min(c,Math.max(l,a));[{label:e,card:n,side:"left"},{label:t,card:i,side:"right"}].forEach(({label:a,card:l,side:c})=>{const u={active:!1,pointerX:window.innerWidth*.5,pointerY:window.innerHeight*.5},h=vt.quickTo(l,"x",{duration:.3,ease:"power3.out"}),f=vt.quickTo(l,"y",{duration:.3,ease:"power3.out"}),d=()=>{const v=a.getBoundingClientRect();if(v.width<8||v.height<8)return!1;const x=Number(vt.getProperty(r,"opacity"))||0,S=Number(vt.getProperty(a,"opacity"))||0;return x>.12&&S>.12},g=(v,x)=>{const S=a.getBoundingClientRect(),b=Math.max(24,S.width*.3),w=Math.max(14,S.height*.8);return v>=S.left-b&&v<=S.right+b&&x>=S.top-w&&x<=S.bottom+w},_=(v=!1)=>{const x=a.getBoundingClientRect(),S=l.offsetWidth,b=l.offsetHeight,w=x.left+x.width*.5-S*.5,E=x.bottom+18,R=x.width>0?(u.pointerX-x.left)/x.width-.5:0,y=x.height>0?(u.pointerY-x.top)/x.height-.5:0,T=R*54,C=y*20,L=18,N=14,B=c==="left"?L:window.innerWidth*.5+N,V=c==="left"?window.innerWidth*.5-S-N:window.innerWidth-S-L,z=s(w+T,B,Math.max(B,V)),k=s(E+C,x.bottom+8,window.innerHeight-b-L);if(v){vt.set(l,{x:z,y:k});return}h(z),f(k)},m=()=>{u.active||(u.active=!0,vt.to(l,{autoAlpha:1,scale:1,duration:.2,ease:"power2.out",overwrite:!0}),_(!0))},p=()=>{u.active&&(u.active=!1,vt.to(l,{autoAlpha:0,scale:.96,duration:.16,ease:"power2.out",overwrite:!0}))};window.addEventListener("pointermove",v=>{if(v.pointerType!=="touch"){if(u.pointerX=v.clientX,u.pointerY=v.clientY,!d()||!g(u.pointerX,u.pointerY)){p();return}m(),_()}},{passive:!0}),window.addEventListener("scroll",()=>{if(u.active){if(!d()||!g(u.pointerX,u.pointerY)){p();return}_(!0)}},{passive:!0}),window.addEventListener("pointerleave",p),window.addEventListener("resize",()=>{u.active&&_(!0)})}),vt.set(".converge-hover-card",{autoAlpha:0,scale:.96})}KA();function G0(r){return new Promise(e=>{let t=0;const n=80,i=()=>{try{const s=window.Webflow?.require?.("lottie")?.lottie;if(s){const o=document.querySelector(r);if(o){const l=s.getRegisteredAnimations()?.find(c=>c.wrapper?c.wrapper===o||o.contains(c.wrapper)||c.wrapper.contains(o):!1);if(l&&l.isLoaded!==!1&&(l.animationData||l.totalFrames>0)){l.pause(),l.autoplay=!1,l.loop=!1;const c=l.animationData?.ip??0;l.goToAndStop(c,!0),console.log(`[getWebflowLottie] found "${r}" after ${t+1} attempts, totalFrames:`,l.totalFrames,"currentFrame:",l.currentFrame),e(l);return}}}}catch(s){t%20===0&&console.warn(`[getWebflowLottie] polling "${r}", attempt ${t}:`,s.message)}++t<n?setTimeout(i,100):(console.warn(`[getWebflowLottie] gave up looking for "${r}" after ${n} attempts`),e(null))};window.Webflow&&typeof window.Webflow.push=="function"?window.Webflow.push(()=>i()):i()})}function ZA(){if(!document.querySelector(".stats-arc")){console.warn("[Stats Lottie] .stats-arc element not found in DOM");return}console.log("[Stats Lottie] .stats-arc found, starting getWebflowLottie poll");const e=0;G0(".stats-arc").then(t=>{if(!t){console.warn("[Stats Lottie] ❌ could not find Webflow lottie for .stats-arc after polling");try{const u=window.Webflow?.require?.("lottie")?.lottie?.getRegisteredAnimations()??[];console.log("[Stats Lottie] registered animations:",u.map(h=>({wrapper:h.wrapper?.className,isLoaded:h.isLoaded,totalFrames:h.totalFrames,isPaused:h.isPaused})))}catch(u){console.warn("[Stats Lottie] could not read registry:",u)}return}const n=t.animationData?.ip??0,i=t.animationData?.op??t.totalFrames,s=i-n;let o=-1,a=0,l=!1;console.log("[Stats Lottie] ✅ found — ip:",n,"op:",i,"totalFrames:",s,"wrapper:",t.wrapper?.className,"wrapperRect:",JSON.stringify(t.wrapper?.getBoundingClientRect()));const c=u=>{const h=Math.round(n+Math.max(0,Math.min(1,u))*s);h!==o&&(o=h,t.goToAndStop(h,!0))};if(t.playSegments([n,i],!0),t.pause(),t.goToAndStop(n,!0),typeof t.resize=="function"&&t.resize(),en()){console.log("[Stats Lottie] mobile path — using IntersectionObserver ScrollTrigger");const u=document.querySelector(".cc-stats");u&&Ci?Ci.create({trigger:u,start:"top 80%",end:"bottom 20%",scrub:.6,onUpdate:h=>{!l&&h.progress>0&&(l=!0,typeof t.resize=="function"&&t.resize()),c(h.progress)}}):console.warn("[Stats Lottie] mobile: .cc-stats not found or no ScrollTrigger",{statsSection:u,ScrollTrigger:Ci})}else{console.log("[Stats Lottie] desktop path — polling __pageTL");const u=d=>{const g=window.__GENLABS_STAGE_TIMING__?.statsIn??.835,_=g+e,m=Math.max(.01,1-g);return Math.max(0,Math.min(1,(d-_)/m))};let h=0;const f=()=>{if(!window.__pageTL){h++%120===0&&console.log("[Stats Lottie] waiting for __pageTL..."),a=requestAnimationFrame(f);return}const d=window.__pageTL.progress();if(typeof d=="number"){const g=u(d);if(!l&&g>0&&(l=!0,console.log("[Stats Lottie] first visible — forcing resize. stage:",d.toFixed(4)),typeof t.resize=="function"&&t.resize()),h++%120===0){const _=document.querySelector("#grid-stage-scroll");console.log("[Stats Lottie] tick —","stage:",d.toFixed(4),"lottie:",g.toFixed(4),"frame:",o,"statsIn:",window.__GENLABS_STAGE_TIMING__?.statsIn,"runwayH:",_?.offsetHeight,"scrollY:",window.scrollY)}c(g)}a=requestAnimationFrame(f)};a=requestAnimationFrame(f)}window.__GENLABS_STATS_LOTTIE__=t,window.addEventListener("pagehide",()=>{a&&cancelAnimationFrame(a)},{once:!0})})}ZA();function JA(){document.querySelector(".convergence-lottie")&&G0(".convergence-lottie").then(r=>{if(!r){console.warn("[Convergence Lottie] could not find Webflow lottie for .convergence-lottie");return}const e=r.animationData?.ip??0,t=r.animationData?.op??r.totalFrames,n=t-e;let i=-1,s=0,o=!1;const a=l=>{const c=Math.round(e+Math.max(0,Math.min(1,l))*n);c!==i&&(i=c,r.goToAndStop(c,!0))};if(r.playSegments([e,t],!0),r.pause(),r.goToAndStop(e,!0),typeof r.resize=="function"&&r.resize(),console.log("[Convergence Lottie] ready — ip:",e,"op:",t,"span:",n,"totalFrames:",r.totalFrames),en()){const l=document.querySelector(".cc-convergence")||document.querySelector(".cc-benefits");l&&Ci&&Ci.create({trigger:l,start:"top 80%",end:"bottom 20%",scrub:.6,onUpdate:c=>{!o&&c.progress>0&&(o=!0,typeof r.resize=="function"&&r.resize()),a(c.progress)}})}else{const l=u=>{const h=window.__GENLABS_STAGE_TIMING__,f=h?.convergeIn??.56,d=h?.statsIn??.835;return Math.max(0,Math.min(1,(u-f)/(d-f)))},c=()=>{if(!window.__pageTL){s=requestAnimationFrame(c);return}const u=window.__pageTL.progress();if(typeof u=="number"){const h=l(u);h>0&&!o&&(o=!0,typeof r.resize=="function"&&r.resize()),a(h)}s=requestAnimationFrame(c)};s=requestAnimationFrame(c)}window.__GENLABS_CONVERGE_LOTTIE__=r,window.addEventListener("pagehide",()=>{s&&cancelAnimationFrame(s)},{once:!0})})}JA();function Za(r){if(!r||r.dataset.splitReady==="true")return r?.querySelectorAll(".split-word")||[];const e=[],t=i=>{const s=i.textContent;if(!s)return;const o=s.split(/(\s+)/),a=document.createDocumentFragment();o.forEach(l=>{if(!l)return;if(/^\s+$/.test(l)){a.appendChild(document.createTextNode(l));return}const c=document.createElement("span");c.className="split-word-mask";const u=document.createElement("span");u.className="split-word",u.textContent=l,c.appendChild(u),a.appendChild(c),e.push(u)}),i.parentNode.replaceChild(a,i)},n=i=>{if(!i)return;if(i.nodeType===Node.TEXT_NODE){t(i);return}if(i.nodeType!==Node.ELEMENT_NODE||i.tagName==="BR"||i.classList.contains("split-word-mask"))return;Array.from(i.childNodes).forEach(n)};return n(r),r.dataset.splitReady="true",e}function QA(r){if(!r||r.dataset.lineSplitReady==="true")return{lineWords:r?Array.from(r.querySelectorAll(".split-line .split-word")):[],lineBgs:r?Array.from(r.querySelectorAll(".split-line-bg")):[]};Za(r);const e=Array.from(r.querySelectorAll(".split-word-mask"));if(!e.length)return{lineWords:[],lineBgs:[]};const t=[],n=6;return e.forEach(i=>{const s=i.getBoundingClientRect().top,o=t.find(a=>Math.abs(a.top-s)<=n);if(o){o.masks.push(i);return}t.push({top:s,masks:[i]})}),t.sort((i,s)=>i.top-s.top),r.innerHTML="",r.style.display="block",t.forEach((i,s)=>{const o=document.createElement("span");o.className="split-line",o.style.position="relative",o.style.display="block",o.style.width="fit-content",o.style.margin=s===0?"0 auto 0.12em":"0 auto",o.style.padding="0.03em 0.18em 0.07em";const a=document.createElement("span");a.className="split-line-bg",a.style.position="absolute",a.style.inset="0",a.style.background="var(--_color---neutral--gray-matter)",a.style.transformOrigin="left center",a.style.transform="scaleX(0)",a.style.zIndex="0";const l=document.createElement("span");l.style.position="relative",l.style.zIndex="1",i.masks.forEach((c,u)=>{l.appendChild(c),u<i.masks.length-1&&l.appendChild(document.createTextNode(" "))}),o.appendChild(a),o.appendChild(l),r.appendChild(o)}),r.dataset.lineSplitReady="true",{lineWords:Array.from(r.querySelectorAll(".split-line .split-word")),lineBgs:Array.from(r.querySelectorAll(".split-line-bg"))}}const Un={hero:Za(document.querySelector(Wn.heroTitle)),underCopy:Za(Kn.underCopy),underHighlight:Za(Kn.underHighlight),convergeFinal:Za(document.querySelector(".converge-final"))},ya=Kn.underHighlight?.dataset.split==="lines"?QA(Kn.underHighlight):{lineWords:[],lineBgs:[]};ya.lineWords.length&&(Un.underHighlight=ya.lineWords);Un.hero.length&&(vt.set(Un.hero,{y:50,opacity:0}),vt.to(Un.hero,{y:0,opacity:1,duration:.9,ease:"power3.out",delay:.12,stagger:.035}));Un.underCopy.length&&vt.set(Un.underCopy,{y:50,opacity:0});Un.underHighlight.length&&vt.set(Un.underHighlight,{y:50,opacity:0});ya.lineBgs.length&&vt.set(ya.lineBgs,{scaleX:0,transformOrigin:"left center"});Un.convergeFinal.length&&vt.set(Un.convergeFinal,{y:42,opacity:0});function eR(){const r=document.querySelector(".explore-btn");if(!r)return;const e=24;let t=!0;const n=(i,s=!1)=>{i!==t&&(t=i,vt.to(r,{autoAlpha:i?1:0,y:i?0:18,duration:s?0:.24,ease:"power2.out",overwrite:!0}),r.classList.toggle("is-hidden",!i))};window.addEventListener("scroll",()=>{n(window.scrollY<=e)},{passive:!0}),r.addEventListener("click",()=>{n(!1),window.scrollTo({top:Math.round(window.innerHeight*.5),behavior:"smooth"})}),n(window.scrollY<=e,!0)}eR();sA({gsap:vt,ScrollTrigger:Ci});pA({gsap:vt,canvasSelector:"#features, .cc-convergence canvas",modelUrl:Dl("/models/logo_split.glb"),modelVerticalOffset:.14,modelVerticalOffsetMobile:.1,stageProgressRange:[0,1],getStageProgress:()=>{const r=window.__pageTL?.progress();return typeof r!="number"||!Number.isFinite(r)?null:r},getVisibilityProgress:()=>{const r=window.__pageTL?.progress();if(typeof r!="number"||!Number.isFinite(r))return null;const e=window.__GENLABS_STAGE_TIMING__?.underOut??.58;return(r-e)/Math.max(1e-4,1-e)}});(function(){const e=document.querySelector('[data-component="convergence-mobile"]');if(!e||!en())return;function t(){const C=e.parentElement;if(C){const L=C.getBoundingClientRect();if(L.width>0&&L.height>0)return{width:L.width,height:L.height}}return{width:window.innerWidth,height:window.innerHeight}}let n=t();const i=Math.min(window.devicePixelRatio||1,2);e.width=Math.floor(n.width*i),e.height=Math.floor(n.height*i),e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,e.style.opacity="0";const s=e.getContext("2d",{alpha:!1});s.setTransform(i,0,0,i,0,0),s.textBaseline="top";const o=document.createElement("canvas"),a=new po({canvas:o,antialias:!0,alpha:!1});a.setPixelRatio(i),a.setSize(n.width,n.height);const l=new ho,c=new un(45,n.width/n.height,.01,1e3);l.add(c),l.add(new Ul(16777215,.25));const u=new ai(16777215,1.25);u.position.set(6,4,6),l.add(u);const h=new ai(16777215,.35);h.position.set(-6,2,4),l.add(h);const f=new ai(16777215,.6);f.position.set(0,6,-6),l.add(f);const d={uTime:{value:0},uScale:{value:2.4},uIntensity:{value:.85},uBase:{value:.025},uAmp:{value:.015},uResolution:{value:new Ge(n.width,n.height)},uTint:{value:new F(1,1,1)}},g=new Cn({uniforms:d,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }",fragmentShader:`
      varying vec2 vUv;
      uniform float uTime,uScale,uIntensity,uBase,uAmp; uniform vec2 uResolution; uniform vec3 uTint;
      float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);float a=hash(i),b=hash(i+vec2(1,0)),c=hash(i+vec2(0,1)),d=hash(i+vec2(1,1));vec2 u=f*f*(3.-2.*f);return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;}
      float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p*=2.;a*=.5;}return v;}
      void main(){
        vec2 uv=vUv-.5; uv.x*=uResolution.x/uResolution.y; float t=uTime;
        vec2 w=vec2(fbm(uv*(uScale*.75)+vec2(0,t*.1)),fbm(uv*(uScale*.75)+vec2(t*.1,0)));
        vec2 w2=vec2(fbm((uv+w)*(uScale*.55)+vec2(t*.07,0)),fbm((uv+w)*(uScale*.55)+vec2(0,t*.09)));
        float n=fbm((uv+.3*w+.18*w2)*uScale+vec2(t*.04,-t*.03));
        n=pow(n,1.35)*uIntensity;
        gl_FragColor=vec4(vec3(uBase+n*uAmp)*uTint,1.);
      }`}),_=new wt(new Tr(2,2),g);_.frustumCulled=!1,_.renderOrder=-1e3,l.add(_);let m=null,p=null;function v(){const C={cellSize:5,aspectComp:.55},L=Math.max(20,Math.floor(n.width/C.cellSize)),N=n.width/L,B=N/C.aspectComp,V=Math.max(20,Math.floor(n.height/B));m&&m.dispose(),m=new An(L,V,{depthBuffer:!0,stencilBuffer:!1}),p=new Uint8Array(L*V*4),v.cols=L,v.rows=V,v.cellW=N,v.cellH=B}v();const x=" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";function S(){const{cols:C,rows:L,cellW:N,cellH:B}=v;s.fillStyle="#ffffff",s.fillRect(0,0,n.width,n.height),s.fillStyle="#125fee";const V=Math.max(8,Math.floor(B*1));s.font=`${V}px monospace`,s.textAlign="left";const z=s.measureText("M").width||1,k=N/z;s.save(),s.scale(k,1);const W=Math.max(B,V*1.05);for(let Q=0;Q<L;Q++){let D="";for(let ie=0;ie<C;ie++){const se=L-1-Q,ue=(se*C+ie)*4;let pe=.2126*(p[ue]/255)+.7152*(p[ue+1]/255)+.0722*(p[ue+2]/255);pe=Math.min(1,Math.max(0,(pe-.5)*1.15+.5)),pe=Math.min(1,Math.max(0,Math.pow(pe,.9))),D+=x[Math.floor(pe*(x.length-1))]}s.fillText(D,0,Q*W)}s.restore()}const b=new Ht;l.add(b);let w=!1;const E=new Es({color:16777215,metalness:.1,roughness:.6});new Fl().load(Dl("/models/logo_split.glb"),C=>{const L=C.scene;L.updateMatrixWorld(!0),L.traverse(ue=>{ue.isMesh&&(ue.material=E,ue.castShadow=!1,ue.receiveShadow=!1)}),b.add(L),b.updateMatrixWorld(!0);const N=new Ct().setFromObject(b),B=N.getSize(new F),V=N.getCenter(new F);b.position.sub(V);const z=Math.max(B.x,B.y,B.z);b.scale.setScalar(7/z),b.updateMatrixWorld(!0);const Q=new Ct().setFromObject(b).getSize(new F),D=Math.max(Q.x,Q.y,Q.z),ie=c.fov*Math.PI/180,se=D/2/Math.tan(ie/2);c.position.set(0,D*.2,se*1.4),c.near=Math.max(.01,se/100),c.far=se*100,c.updateProjectionMatrix(),c.lookAt(0,0,0),w=!0});let R=!1;new IntersectionObserver(C=>{C[0].isIntersecting?(R=!0,e.style.opacity="1"):(R=!1,e.style.opacity="0")},{threshold:.1}).observe(e);const y=new fo,T=Math.PI*2/12;(function C(){if(requestAnimationFrame(C),!w||!R)return;const L=y.getElapsedTime();d.uTime.value=L,b.rotation.y=L*T,a.setRenderTarget(m),a.render(l,c),a.setRenderTarget(null),a.readRenderTargetPixels(m,0,0,m.width,m.height,p),S()})(),window.addEventListener("resize",()=>{n=t();const C=Math.min(window.devicePixelRatio||1,2);e.width=Math.floor(n.width*C),e.height=Math.floor(n.height*C),e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,s.setTransform(C,0,0,C,0,0),c.aspect=n.width/n.height,c.updateProjectionMatrix(),a.setSize(n.width,n.height),d.uResolution.value.set(n.width,n.height),v()})})();xA();TA();wA();FA();PA();const Mr=new ho;Mr.add(js);js.position.set(5.2,-.4,0);const tR=new Ul(16777215,.25);Mr.add(tR);const Er=new ai(16777215,1.25);Er.position.set(6,4,6);Er.castShadow=!1;Er.shadow.mapSize.set(1024,1024);Er.shadow.camera.near=.1;Er.shadow.camera.far=50;Er.shadow.camera.left=-15;Er.shadow.camera.right=15;Er.shadow.camera.top=15;Er.shadow.camera.bottom=-15;Mr.add(Er);const W0=new ai(16777215,.35);W0.position.set(-6,2,4);Mr.add(W0);const X0=new ai(16777215,.6);X0.position.set(0,6,-6);Mr.add(X0);const nR=new fo,Bl={uTime:{value:0},uScale:{value:2.4},uIntensity:{value:.85},uBase:{value:.025},uAmp:{value:.015},uResolution:{value:new Ge(Ft.width,Ft.height)},uTint:{value:new F(1,1,1)}},iR=new Cn({uniforms:Bl,depthWrite:!1,depthTest:!1,vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,fragmentShader:`
  uniform vec3 uTint;
    varying vec2 vUv;

    uniform float uTime;
    uniform float uScale;
    uniform float uIntensity;
    uniform float uBase;
    uniform float uAmp;
    uniform vec2 uResolution;

    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);

      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));

      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      for (int i = 0; i < 5; i++) {
        v += a * noise(p);
        p *= 2.0;
        a *= 0.5;
      }
      return v;
    }

    void main() {
      // Aspect-correct UV (prevents "borders"/stretching on wide screens)
      vec2 uv = vUv - 0.5;
      uv.x *= uResolution.x / uResolution.y;

      float t = uTime;

      // Evolving (domain-warped) noise: changes in place, not panning
      vec2 warp = vec2(
        fbm(uv * (uScale * 0.75) + vec2(0.0, t * 0.10)),
        fbm(uv * (uScale * 0.75) + vec2(t * 0.10, 0.0))
      );

     // Second warp layer (breaks up repetition & removes "breathing" feel)
vec2 warp2 = vec2(
  fbm((uv + warp) * (uScale * 0.55) + vec2(t * 0.07, 0.0)),
  fbm((uv + warp) * (uScale * 0.55) + vec2(0.0, t * 0.09))
);

// Evolving field (no sinusoidal brightness pulsing)
float n = fbm((uv + 0.30 * warp + 0.18 * warp2) * uScale
              + vec2(t * 0.04, -t * 0.03));

// Keep your shaping/contrast
n = pow(n, 1.35) * uIntensity;


      // "Opacity" control (really brightness compression before ASCII)
      float v = uBase + n * uAmp;

      gl_FragColor = vec4(vec3(v) * uTint, 1.0);

    }
  `});xa.noise=Bl.uAmp.value;ws.add(xa,"noise",.06,.3,.005).name("NOISE").onChange(r=>{Bl.uAmp.value=r});const Qd=new wt(new Tr(2,2),iR);Qd.frustumCulled=!1;Qd.renderOrder=-1e3;Mr.add(Qd);const Wo=new Ht;Mr.add(Wo);const rR=new wt(new ys(1,1,1),new Dx);Wo.add(rR);const qt=new un(45,Ft.width/Ft.height,.1,5e3);Mr.add(qt);qt.position.set(0,0,20);qt.lookAt(0,0,0);const Tn=new aw(qt,ms);Tn.enableDamping=!0;Tn.enablePan=!1;Tn.enableZoom=!1;Tn.enableRotate=!1;Tn.target.set(0,0,0);Tn.update();const Qf=new Fl;function sR(r){const e=new Es({color:new Ze("#ffffff"),metalness:.08,roughness:.62}),t=new Ht;if(r==="stack-cylinders"){const i=new $c(.55,.55,1.7,32),s=new $c(.75,.75,.12,40),o=new wt(i,e),a=new wt(i,e),l=new wt(s,e);return o.position.set(-.75,.2,0),a.position.set(.75,-.2,0),l.position.set(0,1.1,0),t.add(o,a,l),t}if(r==="slab-grid"){for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++){const o=new wt(new ys(.9,.36,.9),e);o.position.set(i*.95,s*.45,(i+s)*.06),t.add(o)}return t}if(r==="diamond-cluster"){const i=new xd(.66,0),s=new wt(i,e),o=new wt(i,e),a=new wt(i,e);return s.position.set(-.9,-.15,0),o.position.set(.85,-.05,-.05),a.position.set(0,.9,0),t.add(s,o,a),t}if(r==="ring-array"){const i=new yd(.55,.18,18,72);for(let s=0;s<4;s++){const o=new wt(i,e);o.position.set((s-1.5)*.85,s%2?-.35:.35,s*-.12),o.rotation.x=Math.PI*.5,o.rotation.y=s*.45,t.add(o)}return t}const n=new wt(new ys(1,1,1),e);return t.add(n),t}function yg(r,e=5.5){r.updateMatrixWorld(!0);const n=new Ct().setFromObject(r).getSize(new F),i=Math.max(n.x,n.y,n.z);if(i>0){const a=e/i;r.scale.setScalar(a)}r.updateMatrixWorld(!0);const o=new Ct().setFromObject(r).getCenter(new F);r.position.sub(o),r.updateMatrixWorld(!0)}function Sg(r,e=0){const t=Qi.degToRad(r.fov),n=Math.max(.001,Math.abs(r.position.z-e));return Math.tan(t*.5)*n*r.aspect}function oR(r){const e=r.clone(!0);return e.traverse(t=>{t.isMesh&&(t.castShadow=!1,t.receiveShadow=!1,t.material=t.material.clone(),t.material.color=new Ze("#ffffff"),t.material.needsUpdate=!0)}),e}function aR(r){return new Promise((e,t)=>{Qf.load(r,n=>e(n.scene),void 0,n=>t(n))})}function lR(r){return ou.find(e=>e.id===r)||ou[0]}async function cR(r){const{model:e}=r;if(e.type==="primitive"){const i=sR(e.primitive);return yg(i,e.targetSize),i}const t=Dl(e.url);if(!Th.has(t)){const i=await aR(t);Th.set(t,i)}const n=oR(Th.get(t));return yg(n,e.targetSize),n}function uR(){const r=document.querySelector("#tab-buttons");r&&(r.innerHTML="",ou.forEach(e=>{const t=document.createElement("button");t.type="button",t.className="tab-button",t.dataset.tabId=e.id,t.textContent=e.label;const n=()=>{Y0(e.id)};t.addEventListener("pointerenter",n),t.addEventListener("focus",n),t.addEventListener("click",n),r.appendChild(t)}))}function hR(r){document.querySelectorAll(".tab-button").forEach(e=>{e.classList.toggle("is-active",e.dataset.tabId===r)})}async function Y0(r){const e=lR(r);wh+=1;const t=wh;try{const n=await cR(e);if(t!==wh)return;js.clear(),js.position.fromArray(e.model.position||[5.2,-.4,0]),js.add(n),Zf=n,Jf=e.id,z0=e.rotationSpeed||.16,Tn.target.copy(js.position),Tn.update(),hR(Jf)}catch(n){console.error(`Failed to load tab model for ${e.id}:`,n)}}const fR=!!document.querySelector("#tab-buttons");fR&&(uR(),Y0(rA));Qf.load(Dl("/models/logo_separate.glb"),r=>{Wo.clear(),vn=new Ht,Bs=new Ht,ks=new Ht,Wo.add(vn),vn.add(Bs,ks);const e=r.scene;e.updateMatrixWorld(!0);const t=e.getObjectByName("Logo_L"),n=e.getObjectByName("Logo_R");if(!t||!n){console.log("Could not find Logo_L / Logo_R. Available objects:"),e.traverse(Oe=>{Oe.name&&console.log(Oe.name)});return}t.removeFromParent(),n.removeFromParent(),Bs.add(t),ks.add(n),vn.updateMatrixWorld(!0);const i=new Ct().setFromObject(vn),s=i.getSize(new F),o=i.getCenter(new F);vn.position.sub(o);const a=Math.max(s.x,s.y,s.z),c=(en()?6.5:10)/a;vn.scale.setScalar(c);const u=en()?-3:0;Wo.position.set(0,u,0),vn.updateMatrixWorld(!0);const f=new Ct().setFromObject(vn).getSize(new F),d=Math.max(f.x,f.y,f.z),g=qt.fov*(Math.PI/180),_=d/2/Math.tan(g/2);qt.position.set(0,u+d*.2,_*1.4),qt.near=Math.max(.01,_/100),qt.far=_*100,qt.updateProjectionMatrix(),Tn.target.set(0,u,0),Tn.update();const m=qt.position.y,p=qt.position.z;bh=new Es({color:new Ze("#ffffff"),metalness:.1,roughness:.6}),vn.traverse(Oe=>{if(!Oe.isMesh)return;Oe.castShadow=!1,Oe.receiveShadow=!1;const Ie=Oe.material;Oe.material=bh,Ie?.map&&(Oe.material.map=Ie.map),Ie?.normalMap&&(Oe.material.normalMap=Ie.normalMap),Ie?.roughnessMap&&(Oe.material.roughnessMap=Ie.roughnessMap),Ie?.metalnessMap&&(Oe.material.metalnessMap=Ie.metalnessMap),Oe.material.needsUpdate=!0});const v=vt.to(vn.rotation,{y:`+=${Math.PI*2}`,duration:12,repeat:-1,ease:"none"}),x=new Ht,S=new Ht,b=new Ht,w=[],E={value:0},R=()=>{for(const Oe of w)Oe.opacity=E.value},y=.88,T=3.6,C=5,L=.42,N=7.2,B=new F(1,1,1),V={holdLeftX:0,holdRightX:0,holdLeftY:0,holdRightY:0,cameraStartZ:p,cameraEndZ:-Math.max(d*2.6,p*1.4)};let z=!1,k=c*2.8;const W={value:L},Q=()=>{x.scale.setScalar(k*W.value)},D=()=>{if(!z)return;const Oe=Sg(qt,0),Ie=Oe/Math.max(qt.aspect,.001),ke=Oe*2*y/Math.max(B.x,.001),Se=Ie*2*y/Math.max(B.y,.001),P=Math.min(ke,Se);k=Math.max(P*T,c*C),Q()};window.__refreshConvergeScale=D,Wo.add(x),x.add(S,b),x.visible=!1,Qf.load(Dl("/models/logo_split.glb"),Oe=>{const Ie=Oe.scene;Ie.updateMatrixWorld(!0);const ke=Ie.getObjectByName("clogo_L"),Se=Ie.getObjectByName("clogo_R");if(!ke||!Se){console.log("Could not find clogo_L / clogo_R. Available:"),Ie.traverse(ee=>{ee.name&&console.log(ee.name)});return}ke.removeFromParent(),Se.removeFromParent(),S.add(ke),b.add(Se),x.updateMatrixWorld(!0);const P=new Ct().setFromObject(x),M=P.getSize(new F),I=P.getCenter(new F),Y=new Ct().setFromObject(S),Z=new Ct().setFromObject(b),q=Y.getSize(new F),fe=Z.getSize(new F);x.position.sub(I),B.copy(M),z=!0,D();const le=Sg(qt,0),ye=Math.max((q.x+fe.x)*.28,le*.22),de=Qi.clamp(M.y*.05,.06,.34);if(V.holdLeftX=-ye,V.holdRightX=ye,V.holdLeftY=-de,V.holdRightY=de,x.traverse(ee=>{if(!ee.isMesh)return;ee.castShadow=!1,ee.receiveShadow=!1;const oe=bh.clone();oe.transparent=!0,oe.opacity=E.value,oe.needsUpdate=!0,w.push(oe),ee.material=oe}),S.position.set(V.holdLeftX,V.holdLeftY,0),b.position.set(V.holdRightX,V.holdRightY,0),x.rotation.set(0,0,0),R(),x.visible=!1,window.__pageTL){const ee=window.__pageTL.progress();window.__pageTL.progress(0),window.__pageTL.progress(ee)}},void 0,Oe=>console.error("Failed to load convergence logo:",Oe)),window.__pageTL&&(window.__pageTL.scrollTrigger?.kill(),window.__pageTL.kill(),window.__pageTL=null),Bs.position.set(0,0,0),ks.position.set(0,0,0),Bs.scale.set(1,1,1),ks.scale.set(1,1,1),S.position.set(V.holdLeftX,V.holdLeftY,0),b.position.set(V.holdRightX,V.holdRightY,0),x.rotation.set(0,0,0),W.value=L,Q(),E.value=0,R(),x.visible=!1,vn.visible=!0,vn.rotation.set(0,0,0),vn.scale.setScalar(c),qt.position.set(0,m,V.cameraStartZ),vn.updateMatrixWorld(!0);const ie=new Ct().setFromObject(Bs),se=new Ct().setFromObject(ks),ue=ie.getSize(new F),pe=se.getSize(new F),ce=Math.max((ue.x+pe.x)*.5,f.x*.35),$=Qi.clamp(ce*.18,.38,1.25),K=Qi.clamp($*.2,.05,.22),he=new F(-$,-K,0),Ee=new F($,K,0),te={heroSplitOut:en()?.2:.35,copySwapStart:en()?.4:.28,underOut:en()?.95:.5,convergeIn:en()?2:.56,convergeGlbStart:en()?2:.63,centralizedIn:en()?2:.63,convergeFadeIn:.06,convergeGrowStart:en()?2:.65,modelFadeOutStart:en()?2:.805,modelFadeOut:.03,statsIn:en()?2:.835};window.__GENLABS_STAGE_TIMING__=te;let ze=!1;const Je=document.querySelector("#grid-stage-scroll"),we=en()?Je?Je.offsetHeight/window.innerHeight:.75:10,Ne=Ci?{scrollTrigger:{trigger:YA,start:"top top",end:()=>{const Oe=document.querySelector("#grid-stage"),Ie=document.querySelector("#grid-stage-scroll");return Oe?`+=${Oe.offsetHeight-window.innerHeight}`:Ie?`+=${Ie.offsetHeight}`:`+=${window.innerHeight*we}`},scrub:.8,invalidateOnRefresh:!0,onUpdate:Oe=>{const Ie=Oe.progress>=te.convergeIn;Ie!==ze&&(ze=Ie,ze?v.pause():v.resume())}}}:{},xe=vt.timeline(Ne),Fe=!!(document.querySelector(".converge-label-left")&&document.querySelector(".converge-label-right")),X=!!document.querySelector(".converge-hover-card"),O=!!document.querySelector(".converge-final");if(vt.set(Wn.panelHero,{autoAlpha:1,y:0}),vt.set(Wn.panelUnder,{autoAlpha:0,y:40}),vt.set(Wn.underCopy,{autoAlpha:1}),vt.set(Wn.underHighlight,{autoAlpha:1}),en()||(vt.set(Wn.panelConverge,{autoAlpha:0}),vt.set(Wn.panelStats,{opacity:0,visibility:"visible"}),Fe&&vt.set(".converge-label",{autoAlpha:0,y:18}),X&&vt.set(".converge-hover-card",{autoAlpha:0,scale:.96}),O&&vt.set(".converge-final",{autoAlpha:0})),xe.to(Wn.panelHero,{autoAlpha:0,y:-50,ease:"none",duration:.12},0),xe.to(Wn.panelUnder,{autoAlpha:1,y:0,ease:"none",duration:.22},0),Un.underCopy.length&&xe.to(Un.underCopy,{y:0,opacity:1,ease:"power3.out",duration:.18,stagger:.008},.08),Un.underHighlight.length&&xe.to(Un.underHighlight,{y:0,opacity:1,ease:"power3.out",duration:.15,stagger:.012},te.copySwapStart),ya.lineBgs.length&&xe.to(ya.lineBgs,{scaleX:1,ease:"power2.out",duration:.14,stagger:.08},te.copySwapStart+.06),xe.to(Wn.panelUnder,{autoAlpha:0,y:-40,ease:"none",duration:.06},te.underOut),en()||xe.set(Wn.panelUnder,{autoAlpha:0},te.convergeIn),xe.to(Bs.position,{x:he.x,y:he.y,z:he.z,ease:"none",duration:te.heroSplitOut},0),xe.to(ks.position,{x:Ee.x,y:Ee.y,z:Ee.z,ease:"none",duration:te.heroSplitOut},0),xe.to(vn.rotation,{z:Math.PI*.25,ease:"power2.out",duration:.08},te.underOut),en()&&xe.to(vn,{visible:!1,duration:.001},te.underOut+.07),!en()){xe.to(Wn.panelConverge,{autoAlpha:1,ease:"none",duration:.02},te.convergeIn),Fe&&(xe.to(".converge-label",{autoAlpha:0,y:18,ease:"none",duration:.001},te.convergeIn),xe.to(".converge-label-left",{autoAlpha:1,y:0,ease:"power2.out",duration:.08},te.convergeIn),xe.to(".converge-label-right",{autoAlpha:1,y:0,ease:"power2.out",duration:.08},te.centralizedIn));const Oe={value:0};xe.to(Oe,{value:1,duration:.001,ease:"none",onUpdate:()=>{const P=Oe.value>.5;vn.visible=!P,x.visible=P}},te.convergeGlbStart),xe.to(E,{value:1,ease:"none",duration:te.convergeFadeIn,onUpdate:R},te.convergeGlbStart);const Ie=Math.max(.001,te.modelFadeOutStart-te.convergeGrowStart),ke=N*1.35;xe.to(W,{value:N,ease:"power3.in",duration:Ie,onUpdate:Q},te.convergeGrowStart);const Se=Math.max(.001,te.modelFadeOutStart-te.centralizedIn);xe.to(S.position,{x:0,y:0,ease:"power2.inOut",duration:Se},te.centralizedIn),xe.to(b.position,{x:0,y:0,ease:"power2.inOut",duration:Se},te.centralizedIn),xe.to(x.rotation,{z:Math.PI*.25,ease:"power2.inOut",duration:Math.max(.001,te.modelFadeOutStart-te.convergeGrowStart)},te.convergeGrowStart),xe.to(qt.position,{y:0,z:V.cameraEndZ,ease:"power3.in",duration:Math.max(.001,te.modelFadeOutStart-te.convergeGrowStart)},te.convergeGrowStart),xe.to(W,{value:ke,ease:"none",duration:Math.max(.001,te.modelFadeOut),onUpdate:Q},te.modelFadeOutStart),xe.to({},{duration:.001,onStart:()=>{Tn.target.set(0,0,0),Tn.update(),qt.lookAt(0,0,0)},onReverseComplete:()=>{Tn.target.set(0,0,0),Tn.update(),qt.lookAt(0,0,0)}},te.convergeIn),X&&xe.to(".converge-hover-card",{autoAlpha:0,scale:.96,ease:"none",duration:.03,overwrite:!0},te.labelOut),xe.to(E,{value:0,ease:"power2.out",duration:te.modelFadeOut,onUpdate:R},te.modelFadeOutStart),O&&xe.to(".converge-final",{autoAlpha:1,ease:"none",duration:.05},te.finalTextIn),Un.convergeFinal.length&&xe.to(Un.convergeFinal,{y:0,opacity:1,ease:"power3.out",duration:.08,stagger:.02},te.finalTextIn),xe.to(Wn.panelConverge,{autoAlpha:0,ease:"none",duration:.015},te.statsIn),xe.to(Wn.panelStats,{opacity:1,ease:"none",duration:.015,onStart:()=>{const P=window.__GENLABS_STATS_LOTTIE__;P&&typeof P.resize=="function"&&P.resize()}},te.statsIn)}window.__pageTL=xe,Ci?.refresh(),Jf&&(Tn.target.copy(js.position),Tn.update())},void 0,r=>console.error("Failed to load GLB:",r));let Ks=null,pl=null;function Bi(){const r=Math.max(20,Math.floor(Ft.width/Sn.cellSize)),e=Ft.width/r,t=e/Sn.aspectComp,n=Math.max(20,Math.floor(Ft.height/t)),i=r,s=n;Ks&&Ks.dispose(),Ks=new An(i,s,{depthBuffer:!0,stencilBuffer:!1}),pl=new Uint8Array(i*s*4),Bi.w=i,Bi.h=s,Bi.cellW=e,Bi.cellH=t}Bi();function dR(r,e){return Qi.clamp((r-.5)*e+.5,0,1)}function pR(r,e){return Qi.clamp(Math.pow(r,e),0,1)}function mR(r,e,t){return .2126*r+.7152*e+.0722*t}function gR(){const r=Bi.w,e=Bi.h,t=Sn.ramp,n=t.length;ri.fillStyle=Sn.bg,ri.fillRect(0,0,Ft.width,Ft.height),ri.fillStyle=Sn.fg;const i=Bi.cellH,s=Math.max(8,Math.floor(i*Sn.fontScale));ri.font=`${s}px ${Sn.fontFamily}`,ri.textAlign="left";const o=ri.measureText("M").width,a=Bi.cellW/o;ri.save(),ri.scale(a,1);for(let l=0;l<e;l++){let c="";for(let h=0;h<r;h++){const d=((e-1-l)*r+h)*4,g=pl[d]/255,_=pl[d+1]/255,m=pl[d+2]/255;let p=mR(g,_,m);p=dR(p,Sn.contrast),p=pR(p,Sn.gamma);const v=Math.floor(p*(n-1));c+=t[v]}const u=Math.max(Bi.cellH,s*1.05);ri.fillText(c,0,l*u)}ri.restore()}window.addEventListener("resize",()=>{const r=window.__pageTL,e=r?.scrollTrigger||null,t=e?e.progress:null;if(Ft.width=window.innerWidth,Ft.height=window.innerHeight,qt.aspect=Ft.width/Ft.height,qt.updateProjectionMatrix(),ji.setSize(Ft.width,Ft.height),V0(),Bi(),Bl.uResolution.value.set(Ft.width,Ft.height),window.__refreshConvergeScale?.(),Ci?.refresh(),e&&t!==null){const n=e.start+(e.end-e.start)*t;e.scroll(n);const i=e.progress;r.progress(0),r.progress(i)}});let Mg=0;const q0=()=>{const r=nR.getElapsedTime(),e=r-Mg;if(Mg=r,Zf&&(Zf.rotation.y+=e*z0),Tn.update(),Bl.uTime.value=r,ro.active){const t=ro.x+_g.x,n=ro.y+_g.y;ka+=(t-ka)*vg,za+=(n-za)*vg,co.style.left=`${ka}px`,co.style.top=`${za}px`,xs.style.left=`${ka+gg.x}px`,xs.style.top=`${za+gg.y}px`,xs.textContent=`x:${ka.toFixed(3)}  y:${za.toFixed(3)}`}Jd?(ji.setRenderTarget(Ks),ji.render(Mr,qt),ji.setRenderTarget(null),ji.readRenderTargetPixels(Ks,0,0,Ks.width,Ks.height,pl),gR()):(ji.setRenderTarget(null),ji.render(Mr,qt)),requestAnimationFrame(q0)};q0();
