const A_="modulepreload",R_=function(s){return"/"+s},jf={},l1=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=l(t.map(c=>{if(c=R_(c),c in jf)return;jf[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":A_,h||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),h)return new Promise((d,_)=>{f.addEventListener("load",d),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};const ao={ROTATE:0,DOLLY:1,PAN:2},io={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},C_=0,Kf=1,P_=2,Nl=1,L_=2,Qo=3,Ts=0,Xn=1,Wi=2,Ss=0,lo=1,Zf=2,Jf=3,Qf=4,D_=5,pr=100,I_=101,N_=102,U_=103,O_=104,F_=200,B_=201,k_=202,z_=203,Dh=204,Ih=205,V_=206,H_=207,G_=208,W_=209,X_=210,Y_=211,$_=212,q_=213,j_=214,Nh=0,Uh=1,Oh=2,xo=3,Fh=4,Bh=5,kh=6,zh=7,om=0,K_=1,Z_=2,Ki=0,am=1,lm=2,cm=3,hm=4,um=5,fm=6,dm=7,ed="attached",J_="detached",pm=300,Ar=301,vo=302,Vh=303,Hh=304,gc=306,yo=1e3,Yi=1001,Kl=1002,nn=1003,mm=1004,ea=1005,sn=1006,Ul=1007,xs=1008,ai=1009,gm=1010,_m=1011,Ea=1012,ef=1013,Qi=1014,Mi=1015,Es=1016,tf=1017,nf=1018,wa=1020,xm=35902,vm=35899,ym=1021,Sm=1022,bi=1023,ws=1026,gr=1027,sf=1028,rf=1029,So=1030,of=1031,af=1033,Ol=33776,Fl=33777,Bl=33778,kl=33779,Gh=35840,Wh=35841,Xh=35842,Yh=35843,$h=36196,qh=37492,jh=37496,Kh=37488,Zh=37489,Jh=37490,Qh=37491,eu=37808,tu=37809,nu=37810,iu=37811,su=37812,ru=37813,ou=37814,au=37815,lu=37816,cu=37817,hu=37818,uu=37819,fu=37820,du=37821,pu=36492,mu=36494,gu=36495,_u=36283,xu=36284,vu=36285,yu=36286,Aa=2300,Ra=2301,Pc=2302,td=2400,nd=2401,id=2402,Q_=2500,e0=0,Mm=1,Su=2,t0=3200,lf=0,n0=1,ks="",pn="srgb",Bn="srgb-linear",Zl="linear",St="srgb",Or=7680,sd=519,i0=512,s0=513,r0=514,cf=515,o0=516,a0=517,hf=518,l0=519,Mu=35044,rd="300 es",$i=2e3,Jl=2001;function bm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function c0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ca(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function h0(){const s=Ca("canvas");return s.style.display="block",s}const od={};function Ql(...s){const e="THREE."+s.shift();console.log(e,...s)}function De(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ye(...s){const e="THREE."+s.shift();console.error(e,...s)}function Pa(...s){const e=s.join(" ");e in od||(od[e]=!0,De(...s))}function u0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class Lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ad=1234567;const ca=Math.PI/180,Mo=180/Math.PI;function Ni(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function st(s,e,t){return Math.max(e,Math.min(t,s))}function uf(s,e){return(s%e+e)%e}function f0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function d0(s,e,t){return s!==e?(t-s)/(e-s):0}function ha(s,e,t){return(1-t)*s+t*e}function p0(s,e,t,n){return ha(s,e,1-Math.exp(-t*n))}function m0(s,e=1){return e-Math.abs(uf(s,e*2)-e)}function g0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function _0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function x0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function v0(s,e){return s+Math.random()*(e-s)}function y0(s){return s*(.5-Math.random())}function S0(s){s!==void 0&&(ad=s);let e=ad+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function M0(s){return s*ca}function b0(s){return s*Mo}function T0(s){return(s&s-1)===0&&s!==0}function E0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function w0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function A0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*_,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*_,a*c);break;case"ZYZ":s.set(l*_,l*d,a*h,a*c);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Di(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Tm={DEG2RAD:ca,RAD2DEG:Mo,generateUUID:Ni,clamp:st,euclideanModulo:uf,mapLinear:f0,inverseLerp:d0,lerp:ha,damp:p0,pingpong:m0,smoothstep:g0,smootherstep:_0,randInt:x0,randFloat:v0,randFloatSpread:y0,seededRandom:S0,degToRad:M0,radToDeg:b0,isPowerOfTwo:T0,ceilPowerOfTwo:E0,floorPowerOfTwo:w0,setQuaternionFromProperEuler:A0,normalize:Mt,denormalize:Di};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class es{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==f||c!==d||h!==_){let m=l*f+c*d+h*_+u*g;m<0&&(f=-f,d=-d,_=-_,g=-g,m=-m);let p=1-a;if(m<.9995){const x=Math.acos(m),S=Math.sin(x);p=Math.sin(p*x)/S,a=Math.sin(a*x)/S,l=l*p+f*a,c=c*p+d*a,h=h*p+_*a,u=u*p+g*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+_*a,u=u*p+g*a;const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*d-c*f,e[t+1]=l*_+h*f+c*u-a*d,e[t+2]=c*_+h*d+a*f-l*u,e[t+3]=h*_-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ld.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ld.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lc=new B,ld=new es;class Qe{constructor(e,t,n,i,r,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],x=i[1],S=i[4],y=i[7],b=i[2],E=i[5],w=i[8];return r[0]=o*g+a*x+l*b,r[3]=o*m+a*S+l*E,r[6]=o*p+a*y+l*w,r[1]=c*g+h*x+u*b,r[4]=c*m+h*S+u*E,r[7]=c*p+h*y+u*w,r[2]=f*g+d*x+_*b,r[5]=f*m+d*S+_*E,r[8]=f*p+d*y+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,_=t*u+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Dc.makeScale(e,t)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dc=new Qe,cd=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hd=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R0(){const s={enabled:!0,workingColorSpace:Bn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(i.r=Ms(i.r),i.g=Ms(i.g),i.b=Ms(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(i.r=co(i.r),i.g=co(i.g),i.b=co(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ks?Zl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Pa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Pa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Bn]:{primaries:e,whitePoint:n,transfer:Zl,toXYZ:cd,fromXYZ:hd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:n,transfer:St,toXYZ:cd,fromXYZ:hd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),s}const ut=R0();function Ms(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function co(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fr;class C0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=Ca("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ca("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ms(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ms(t[n]/255)*255):t[n]=Ms(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P0=0;class ff{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ic(i[o].image)):r.push(Ic(i[o]))}else r=Ic(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ic(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?C0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let L0=0;const Nc=new B;class fn extends Lr{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=Yi,i=Yi,r=sn,o=xs,a=bi,l=ai,c=fn.DEFAULT_ANISOTROPY,h=ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Ni(),this.name="",this.source=new ff(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nc).x}get height(){return this.source.getSize(Nc).y}get depth(){return this.source.getSize(Nc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yo:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case Kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yo:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case Kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=pm;fn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(d+1)/2,b=(p+1)/2,E=(h+f)/4,w=(u+g)/4,R=(_+m)/4;return S>y&&S>b?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=w/n):y>b?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=R/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=w/r,i=R/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(u-g)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class D0 extends Lr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new fn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ff(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends D0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Em extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I0 extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ri):Ri.fromBufferAttribute(r,o),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qa.copy(n.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),ja.subVectors(this.max,zo),Br.subVectors(e.a,zo),kr.subVectors(e.b,zo),zr.subVectors(e.c,zo),Cs.subVectors(kr,Br),Ps.subVectors(zr,kr),nr.subVectors(Br,zr);let t=[0,-Cs.z,Cs.y,0,-Ps.z,Ps.y,0,-nr.z,nr.y,Cs.z,0,-Cs.x,Ps.z,0,-Ps.x,nr.z,0,-nr.x,-Cs.y,Cs.x,0,-Ps.y,Ps.x,0,-nr.y,nr.x,0];return!Uc(t,Br,kr,zr,ja)||(t=[1,0,0,0,1,0,0,0,1],!Uc(t,Br,kr,zr,ja))?!1:(Ka.crossVectors(Cs,Ps),t=[Ka.x,Ka.y,Ka.z],Uc(t,Br,kr,zr,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(os),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const os=[new B,new B,new B,new B,new B,new B,new B,new B],Ri=new B,qa=new Ai,Br=new B,kr=new B,zr=new B,Cs=new B,Ps=new B,nr=new B,zo=new B,ja=new B,Ka=new B,ir=new B;function Uc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ir.fromArray(s,r);const a=i.x*Math.abs(ir.x)+i.y*Math.abs(ir.y)+i.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),h=n.dot(ir);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const N0=new Ai,Vo=new B,Oc=new B;class is{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):N0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const t=Vo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Oc)),this.expandByPoint(Vo.copy(e.center).sub(Oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const as=new B,Fc=new B,Za=new B,Ls=new B,Bc=new B,Ja=new B,kc=new B;class Ga{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,as)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=as.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(as.copy(this.origin).addScaledVector(this.direction,t),as.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fc.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),Ls.copy(this.origin).sub(Fc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Za),a=Ls.dot(this.direction),l=-Ls.dot(Za),c=Ls.lengthSq(),h=Math.abs(1-o*o);let u,f,d,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fc).addScaledVector(Za,f),d}intersectSphere(e,t){as.subVectors(e.center,this.origin);const n=as.dot(this.direction),i=as.dot(as)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,as)!==null}intersectTriangle(e,t,n,i,r){Bc.subVectors(t,e),Ja.subVectors(n,e),kc.crossVectors(Bc,Ja);let o=this.direction.dot(kc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ls.subVectors(this.origin,e);const l=a*this.direction.dot(Ja.crossVectors(Ls,Ja));if(l<0)return null;const c=a*this.direction.dot(Bc.cross(Ls));if(c<0||l+c>o)return null;const h=-a*Ls.dot(kc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,_,g,m){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,_,g,m)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Vr.setFromMatrixColumn(e,0).length(),r=1/Vr.setFromMatrixColumn(e,1).length(),o=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,_=c*h,g=c*u;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,_=c*h,g=c*u;t[0]=f-g*a,t[4]=-o*u,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-f*u,t[8]=_*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+_,t[10]=f-g*u}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+g,t[5]=o*h,t[9]=d*u-_,t[2]=_*u-d,t[6]=a*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U0,e,O0)}lookAt(e,t,n){const i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ds.crossVectors(n,ti),Ds.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ds.crossVectors(n,ti)),Ds.normalize(),Qa.crossVectors(ti,Ds),i[0]=Ds.x,i[4]=Qa.x,i[8]=ti.x,i[1]=Ds.y,i[5]=Qa.y,i[9]=ti.y,i[2]=Ds.z,i[6]=Qa.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],x=n[3],S=n[7],y=n[11],b=n[15],E=i[0],w=i[4],R=i[8],v=i[12],M=i[1],P=i[5],L=i[9],U=i[13],F=i[2],H=i[6],V=i[10],k=i[14],W=i[3],ee=i[7],D=i[11],ne=i[15];return r[0]=o*E+a*M+l*F+c*W,r[4]=o*w+a*P+l*H+c*ee,r[8]=o*R+a*L+l*V+c*D,r[12]=o*v+a*U+l*k+c*ne,r[1]=h*E+u*M+f*F+d*W,r[5]=h*w+u*P+f*H+d*ee,r[9]=h*R+u*L+f*V+d*D,r[13]=h*v+u*U+f*k+d*ne,r[2]=_*E+g*M+m*F+p*W,r[6]=_*w+g*P+m*H+p*ee,r[10]=_*R+g*L+m*V+p*D,r[14]=_*v+g*U+m*k+p*ne,r[3]=x*E+S*M+y*F+b*W,r[7]=x*w+S*P+y*H+b*ee,r[11]=x*R+S*L+y*V+b*D,r[15]=x*v+S*U+y*k+b*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15],x=l*d-c*f,S=a*d-c*u,y=a*f-l*u,b=o*d-c*h,E=o*f-l*h,w=o*u-a*h;return t*(g*x-m*S+p*y)-n*(_*x-m*b+p*E)+i*(_*S-g*b+p*w)-r*(_*y-g*E+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],x=u*m*c-g*f*c+g*l*d-a*m*d-u*l*p+a*f*p,S=_*f*c-h*m*c-_*l*d+o*m*d+h*l*p-o*f*p,y=h*g*c-_*u*c+_*a*d-o*g*d-h*a*p+o*u*p,b=_*u*l-h*g*l-_*a*f+o*g*f+h*a*m-o*u*m,E=t*x+n*S+i*y+r*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=x*w,e[1]=(g*f*r-u*m*r-g*i*d+n*m*d+u*i*p-n*f*p)*w,e[2]=(a*m*r-g*l*r+g*i*c-n*m*c-a*i*p+n*l*p)*w,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*w,e[4]=S*w,e[5]=(h*m*r-_*f*r+_*i*d-t*m*d-h*i*p+t*f*p)*w,e[6]=(_*l*r-o*m*r-_*i*c+t*m*c+o*i*p-t*l*p)*w,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*d+t*l*d)*w,e[8]=y*w,e[9]=(_*u*r-h*g*r-_*n*d+t*g*d+h*n*p-t*u*p)*w,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*p+t*a*p)*w,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*w,e[12]=b*w,e[13]=(h*g*i-_*u*i+_*n*f-t*g*f-h*n*m+t*u*m)*w,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*w,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,_=r*u,g=o*h,m=o*u,p=a*u,x=l*c,S=l*h,y=l*u,b=n.x,E=n.y,w=n.z;return i[0]=(1-(g+p))*b,i[1]=(d+y)*b,i[2]=(_-S)*b,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(f+p))*E,i[6]=(m+x)*E,i[7]=0,i[8]=(_+S)*w,i[9]=(m-x)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Vr.set(i[0],i[1],i[2]).length();const o=Vr.set(i[4],i[5],i[6]).length(),a=Vr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),Ci.copy(this);const c=1/r,h=1/o,u=1/a;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=u,Ci.elements[9]*=u,Ci.elements[10]*=u,t.setFromRotationMatrix(Ci),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=$i,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let _,g;if(l)_=r/(o-r),g=o*r/(o-r);else if(a===$i)_=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Jl)_=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=$i,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let _,g;if(l)_=1/(o-r),g=o/(o-r);else if(a===$i)_=-2/(o-r),g=-(o+r)/(o-r);else if(a===Jl)_=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new B,Ci=new tt,U0=new B(0,0,0),O0=new B(1,1,1),Ds=new B,Qa=new B,ti=new B,ud=new tt,fd=new es;class ts{constructor(e=0,t=0,n=0,i=ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ud,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fd.setFromEuler(this),this.setFromQuaternion(fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ts.DEFAULT_ORDER="XYZ";class wm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F0=0;const dd=new B,Hr=new es,ls=new tt,el=new B,Ho=new B,B0=new B,k0=new es,pd=new B(1,0,0),md=new B(0,1,0),gd=new B(0,0,1),_d={type:"added"},z0={type:"removed"},Gr={type:"childadded",child:null},zc={type:"childremoved",child:null};class kt extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new B,t=new ts,n=new es,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new Qe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(pd,e)}rotateY(e){return this.rotateOnAxis(md,e)}rotateZ(e){return this.rotateOnAxis(gd,e)}translateOnAxis(e,t){return dd.copy(e).applyQuaternion(this.quaternion),this.position.add(dd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pd,e)}translateY(e){return this.translateOnAxis(md,e)}translateZ(e){return this.translateOnAxis(gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ls.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?el.copy(e):el.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ls.lookAt(Ho,el,this.up):ls.lookAt(el,Ho,this.up),this.quaternion.setFromRotationMatrix(ls),i&&(ls.extractRotation(i.matrixWorld),Hr.setFromRotationMatrix(ls),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_d),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z0),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ls.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ls.multiply(e.parent.matrixWorld)),e.applyMatrix4(ls),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_d),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,B0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,k0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}kt.DEFAULT_UP=new B(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new B,cs=new B,Vc=new B,hs=new B,Wr=new B,Xr=new B,xd=new B,Hc=new B,Gc=new B,Wc=new B,Xc=new Nt,Yc=new Nt,$c=new Nt;class Ii{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pi.subVectors(e,t),i.cross(Pi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Pi.subVectors(i,t),cs.subVectors(n,t),Vc.subVectors(e,t);const o=Pi.dot(Pi),a=Pi.dot(cs),l=Pi.dot(Vc),c=cs.dot(cs),h=cs.dot(Vc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hs)===null?!1:hs.x>=0&&hs.y>=0&&hs.x+hs.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,hs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hs.x),l.addScaledVector(o,hs.y),l.addScaledVector(a,hs.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Xc.setScalar(0),Yc.setScalar(0),$c.setScalar(0),Xc.fromBufferAttribute(e,t),Yc.fromBufferAttribute(e,n),$c.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Xc,r.x),o.addScaledVector(Yc,r.y),o.addScaledVector($c,r.z),o}static isFrontFacing(e,t,n,i){return Pi.subVectors(n,t),cs.subVectors(e,t),Pi.cross(cs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),cs.subVectors(this.a,this.b),Pi.cross(cs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Ii.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Wr.subVectors(i,n),Xr.subVectors(r,n),Hc.subVectors(e,n);const l=Wr.dot(Hc),c=Xr.dot(Hc);if(l<=0&&c<=0)return t.copy(n);Gc.subVectors(e,i);const h=Wr.dot(Gc),u=Xr.dot(Gc);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Wr,o);Wc.subVectors(e,r);const d=Wr.dot(Wc),_=Xr.dot(Wc);if(_>=0&&d<=_)return t.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Xr,a);const m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return xd.subVectors(r,i),a=(u-h)/(u-h+(d-_)),t.copy(i).addScaledVector(xd,a);const p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(Wr,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},tl={h:0,s:0,l:0};function qc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=uf(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=qc(o,r,e+1/3),this.g=qc(o,r,e),this.b=qc(o,r,e-1/3)}return ut.colorSpaceToWorking(this,i),this}setStyle(e,t=pn){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const n=Am[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return ut.workingToColorSpace(vn.copy(this),e),Math.round(st(vn.r*255,0,255))*65536+Math.round(st(vn.g*255,0,255))*256+Math.round(st(vn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(vn.copy(this),t);const n=vn.r,i=vn.g,r=vn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=pn){ut.workingToColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,i=vn.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Is),this.setHSL(Is.h+e,Is.s+t,Is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Is),e.getHSL(tl);const n=ha(Is.h,tl.h,t),i=ha(Is.s,tl.s,t),r=ha(Is.l,tl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Ke;Ke.NAMES=Am;let V0=0;class Ui extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=lo,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=Ih,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(n.blending=this.blending),this.side!==Ts&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dh&&(n.blendSrc=this.blendSrc),this.blendDst!==Ih&&(n.blendDst=this.blendDst),this.blendEquation!==pr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _r extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=om,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new B,nl=new Be;let H0=0;class Fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mu,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nl.fromBufferAttribute(this,t),nl.applyMatrix3(e),this.setXY(t,nl.x,nl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mu&&(e.usage=this.usage),e}}class Rm extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cm extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kt extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let G0=0;const _i=new tt,jc=new kt,Yr=new B,ni=new Ai,Go=new Ai,cn=new B;class kn extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bm(e)?Cm:Rm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(ni.min,Go.min),ni.expandByPoint(cn),cn.addVectors(ni.max,Go.max),ni.expandByPoint(cn)):(ni.expandByPoint(Go.min),ni.expandByPoint(Go.max))}ni.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)cn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)cn.fromBufferAttribute(a,c),l&&(Yr.fromBufferAttribute(e,c),cn.add(Yr)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new B,l[R]=new B;const c=new B,h=new B,u=new B,f=new Be,d=new Be,_=new Be,g=new B,m=new B;function p(R,v,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,v),_.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),_.sub(f);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(P),a[R].add(g),a[v].add(g),a[M].add(g),l[R].add(m),l[v].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,v=x.length;R<v;++R){const M=x[R],P=M.start,L=M.count;for(let U=P,F=P+L;U<F;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const S=new B,y=new B,b=new B,E=new B;function w(R){b.fromBufferAttribute(i,R),E.copy(b);const v=a[R];S.copy(v),S.sub(b.multiplyScalar(b.dot(v))).normalize(),y.crossVectors(E,v);const P=y.dot(l[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,P)}for(let R=0,v=x.length;R<v;++R){const M=x[R],P=M.start,L=M.count;for(let U=P,F=P+L;U<F;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let p=0;p<h;p++)f[_++]=c[d++]}return new Fn(f,h,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vd=new tt,sr=new Ga,il=new is,yd=new B,sl=new B,rl=new B,ol=new B,Kc=new B,al=new B,Sd=new B,ll=new B;class wn extends kt{constructor(e=new kn,t=new _r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){al.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Kc.fromBufferAttribute(u,e),o?al.addScaledVector(Kc,h):al.addScaledVector(Kc.sub(t),h))}t.add(al)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(r),sr.copy(e.ray).recast(e.near),!(il.containsPoint(sr.origin)===!1&&(sr.intersectSphere(il,yd)===null||sr.origin.distanceToSquared(yd)>(e.far-e.near)**2))&&(vd.copy(r).invert(),sr.copy(e.ray).applyMatrix4(vd),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],x=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,b=S;y<b;y+=3){const E=a.getX(y),w=a.getX(y+1),R=a.getX(y+2);i=cl(this,p,e,n,c,h,u,E,w,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const x=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);i=cl(this,o,e,n,c,h,u,x,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],x=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=x,b=S;y<b;y+=3){const E=y,w=y+1,R=y+2;i=cl(this,p,e,n,c,h,u,E,w,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const x=m,S=m+1,y=m+2;i=cl(this,o,e,n,c,h,u,x,S,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function W0(s,e,t,n,i,r,o,a){let l;if(e.side===Xn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Ts,a),l===null)return null;ll.copy(a),ll.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ll);return c<t.near||c>t.far?null:{distance:c,point:ll.clone(),object:s}}function cl(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,sl),s.getVertexPosition(l,rl),s.getVertexPosition(c,ol);const h=W0(s,e,t,n,sl,rl,ol,Sd);if(h){const u=new B;Ii.getBarycoord(Sd,sl,rl,ol,u),i&&(h.uv=Ii.getInterpolatedAttribute(i,a,l,c,u,new Be)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,a,l,c,u,new Be)),o&&(h.normal=Ii.getInterpolatedAttribute(o,a,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};Ii.getNormal(sl,rl,ol,f.normal),h.face=f,h.barycoord=u}return h}class Wa extends kn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function _(g,m,p,x,S,y,b,E,w,R,v){const M=y/w,P=b/R,L=y/2,U=b/2,F=E/2,H=w+1,V=R+1;let k=0,W=0;const ee=new B;for(let D=0;D<V;D++){const ne=D*P-U;for(let Ce=0;Ce<H;Ce++){const Ne=Ce*M-L;ee[g]=Ne*x,ee[m]=ne*S,ee[p]=F,c.push(ee.x,ee.y,ee.z),ee[g]=0,ee[m]=0,ee[p]=E>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(Ce/w),u.push(1-D/R),k+=1}}for(let D=0;D<R;D++)for(let ne=0;ne<w;ne++){const Ce=f+ne+H*D,Ne=f+ne+H*(D+1),Ue=f+(ne+1)+H*(D+1),Ve=f+(ne+1)+H*D;l.push(Ce,Ne,Ve),l.push(Ne,Ue,Ve),W+=6}a.addGroup(d,W,v),d+=W,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ln(s){const e={};for(let t=0;t<s.length;t++){const n=bo(s[t]);for(const i in n)e[i]=n[i]}return e}function X0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Pm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Y0={clone:bo,merge:Ln};var $0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _c extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ns=new B,Md=new Be,bd=new Be;class Mn extends _c{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,Md,bd),t.subVectors(bd,Md)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ca*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $r=-90,qr=1;class j0 extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Mn($r,qr,e,t);i.layers=this.layers,this.add(i);const r=new Mn($r,qr,e,t);r.layers=this.layers,this.add(r);const o=new Mn($r,qr,e,t);o.layers=this.layers,this.add(o);const a=new Mn($r,qr,e,t);a.layers=this.layers,this.add(a);const l=new Mn($r,qr,e,t);l.layers=this.layers,this.add(l);const c=new Mn($r,qr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Lm extends fn{constructor(e=[],t=Ar,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dm extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Lm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wa(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:bo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xn,blending:Ss});r.uniforms.tEquirect.value=t;const o=new wn(i,r),a=t.minFilter;return t.minFilter===xs&&(t.minFilter=sn),new j0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class zs extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K0={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(K0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class xc extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Z0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mu,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new B;class df{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Di(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ql("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new df(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ql("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Td=new B,Ed=new Nt,wd=new Nt,J0=new B,Ad=new tt,hl=new B,Jc=new is,Rd=new tt,Qc=new Ga;class Q0 extends wn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ed,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ai),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hl),this.boundingBox.expandByPoint(hl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new is),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hl),this.boundingSphere.expandByPoint(hl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jc.copy(this.boundingSphere),Jc.applyMatrix4(i),e.ray.intersectsSphere(Jc)!==!1&&(Rd.copy(i).invert(),Qc.copy(e.ray).applyMatrix4(Rd),!(this.boundingBox!==null&&Qc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ed?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===J_?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ed.fromBufferAttribute(i.attributes.skinIndex,e),wd.fromBufferAttribute(i.attributes.skinWeight,e),Td.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=wd.getComponent(r);if(o!==0){const a=Ed.getComponent(r);Ad.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(J0.copy(Td).applyMatrix4(Ad),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Im extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pf extends fn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=nn,h=nn,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cd=new tt,ex=new tt;class mf{constructor(e=[],t=[]){this.uuid=Ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:ex;Cd.multiplyMatrices(a,t[r]),Cd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new mf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new pf(t,e,e,bi,Mi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(De("Skeleton: No bone found with UUID:",r),o=new Im),this.bones.push(o),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class bu extends Fn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const jr=new tt,Pd=new tt,ul=[],Ld=new Ai,tx=new tt,Wo=new wn,Xo=new is;class nx extends wn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,tx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jr),Ld.copy(e.boundingBox).applyMatrix4(jr),this.boundingBox.union(Ld)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,jr),Xo.copy(e.boundingSphere).applyMatrix4(jr),this.boundingSphere.union(Xo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Wo.geometry=this.geometry,Wo.material=this.material,Wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(n),e.ray.intersectsSphere(Xo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,jr),Pd.multiplyMatrices(n,jr),Wo.matrixWorld=Pd,Wo.raycast(e,ul);for(let o=0,a=ul.length;o<a;o++){const l=ul[o];l.instanceId=r,l.object=this,t.push(l)}ul.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new pf(new Float32Array(i*this.count),i,this.count,sf,Mi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const eh=new B,ix=new B,sx=new Qe;class Bs{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=eh.subVectors(n,t).cross(ix.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(eh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sx.getNormalMatrix(e),i=this.coplanarPoint(eh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new is,rx=new Be(.5,.5),fl=new B;class gf{constructor(e=new Bs,t=new Bs,n=new Bs,i=new Bs,r=new Bs,o=new Bs){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],_=r[8],g=r[9],m=r[10],p=r[11],x=r[12],S=r[13],y=r[14],b=r[15];if(i[0].setComponents(c-o,d-h,p-_,b-x).normalize(),i[1].setComponents(c+o,d+h,p+_,b+x).normalize(),i[2].setComponents(c+a,d+u,p+g,b+S).normalize(),i[3].setComponents(c-a,d-u,p-g,b-S).normalize(),n)i[4].setComponents(l,f,m,y).normalize(),i[5].setComponents(c-l,d-f,p-m,b-y).normalize();else if(i[4].setComponents(c-l,d-f,p-m,b-y).normalize(),t===$i)i[5].setComponents(c+l,d+f,p+m,b+y).normalize();else if(t===Jl)i[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){rr.center.set(0,0,0);const t=rx.distanceTo(e.center);return rr.radius=.7071067811865476+t,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fl.x=i.normal.x>0?e.max.x:e.min.x,fl.y=i.normal.y>0?e.max.y:e.min.y,fl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nm extends Ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ec=new B,tc=new B,Dd=new tt,Yo=new Ga,dl=new is,th=new B,Id=new B;class _f extends kt{constructor(e=new kn,t=new Nm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ec.fromBufferAttribute(t,i-1),tc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ec.distanceTo(tc);e.setAttribute("lineDistance",new Kt(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(i),dl.radius+=r,e.ray.intersectsSphere(dl)===!1)return;Dd.copy(i).invert(),Yo.copy(e.ray).applyMatrix4(Dd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=h.getX(g),x=h.getX(g+1),S=pl(this,e,Yo,l,p,x,g);S&&t.push(S)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(d),p=pl(this,e,Yo,l,g,m,_-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=pl(this,e,Yo,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=pl(this,e,Yo,l,_-1,d,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pl(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(ec.fromBufferAttribute(a,i),tc.fromBufferAttribute(a,r),t.distanceSqToSegment(ec,tc,th,Id)>n)return;th.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(th);if(!(c<e.near||c>e.far))return{distance:c,point:Id.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Nd=new B,Ud=new B;class ox extends _f{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Nd.fromBufferAttribute(t,i),Ud.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Nd.distanceTo(Ud);e.setAttribute("lineDistance",new Kt(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ax extends _f{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Um extends Ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Od=new tt,Tu=new Ga,ml=new is,gl=new B;class lx extends kt{constructor(e=new kn,t=new Um){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(i),ml.radius+=r,e.ray.intersectsSphere(ml)===!1)return;Od.copy(i).invert(),Tu.copy(e.ray).applyMatrix4(Od);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const m=c.getX(_);gl.fromBufferAttribute(u,m),Fd(gl,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let _=f,g=d;_<g;_++)gl.fromBufferAttribute(u,_),Fd(gl,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fd(s,e,t,n,i,r,o){const a=Tu.distanceSqToPoint(s);if(a<t){const l=new B;Tu.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class La extends fn{constructor(e,t,n=Qi,i,r,o,a=nn,l=nn,c,h=ws,u=1){if(h!==ws&&h!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ff(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cx extends La{constructor(e,t=Qi,n=Ar,i,r,o=nn,a=nn,l,c=ws){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Om extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fm extends kn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let _=0;const g=[],m=n/2;let p=0;x(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(d,2));function x(){const y=new B,b=new B;let E=0;const w=(t-e)/n;for(let R=0;R<=r;R++){const v=[],M=R/r,P=M*(t-e)+e;for(let L=0;L<=i;L++){const U=L/i,F=U*l+a,H=Math.sin(F),V=Math.cos(F);b.x=P*H,b.y=-M*n+m,b.z=P*V,u.push(b.x,b.y,b.z),y.set(H,w,V).normalize(),f.push(y.x,y.y,y.z),d.push(U,1-M),v.push(_++)}g.push(v)}for(let R=0;R<i;R++)for(let v=0;v<r;v++){const M=g[v][R],P=g[v+1][R],L=g[v+1][R+1],U=g[v][R+1];(e>0||v!==0)&&(h.push(M,P,U),E+=3),(t>0||v!==r-1)&&(h.push(P,L,U),E+=3)}c.addGroup(p,E,0),p+=E}function S(y){const b=_,E=new Be,w=new B;let R=0;const v=y===!0?e:t,M=y===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),_++;const P=_;for(let L=0;L<=i;L++){const F=L/i*l+a,H=Math.cos(F),V=Math.sin(F);w.x=v*V,w.y=m*M,w.z=v*H,u.push(w.x,w.y,w.z),f.push(0,M,0),E.x=H*.5+.5,E.y=V*.5*M+.5,d.push(E.x,E.y),_++}for(let L=0;L<i;L++){const U=b+L,F=P+L;y===!0?h.push(F,F+1,U):h.push(F+1,F,U),R+=3}c.addGroup(p,R,y===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fm(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xf extends kn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const S=new B,y=new B,b=new B;for(let E=0;E<t.length;E+=3)d(t[E+0],S),d(t[E+1],y),d(t[E+2],b),l(S,y,b,x)}function l(x,S,y,b){const E=b+1,w=[];for(let R=0;R<=E;R++){w[R]=[];const v=x.clone().lerp(y,R/E),M=S.clone().lerp(y,R/E),P=E-R;for(let L=0;L<=P;L++)L===0&&R===E?w[R][L]=v:w[R][L]=v.clone().lerp(M,L/P)}for(let R=0;R<E;R++)for(let v=0;v<2*(E-R)-1;v++){const M=Math.floor(v/2);v%2===0?(f(w[R][M+1]),f(w[R+1][M]),f(w[R][M])):(f(w[R][M+1]),f(w[R+1][M+1]),f(w[R+1][M]))}}function c(x){const S=new B;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(x),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){const x=new B;for(let S=0;S<r.length;S+=3){x.x=r[S+0],x.y=r[S+1],x.z=r[S+2];const y=m(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;o.push(y,1-b)}_(),u()}function u(){for(let x=0;x<o.length;x+=6){const S=o[x+0],y=o[x+2],b=o[x+4],E=Math.max(S,y,b),w=Math.min(S,y,b);E>.9&&w<.1&&(S<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,S){const y=x*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function _(){const x=new B,S=new B,y=new B,b=new B,E=new Be,w=new Be,R=new Be;for(let v=0,M=0;v<r.length;v+=9,M+=6){x.set(r[v+0],r[v+1],r[v+2]),S.set(r[v+3],r[v+4],r[v+5]),y.set(r[v+6],r[v+7],r[v+8]),E.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),b.copy(x).add(S).add(y).divideScalar(3);const P=m(b);g(E,M+0,x,P),g(w,M+2,S,P),g(R,M+4,y,P)}}function g(x,S,y,b){b<0&&x.x===1&&(o[S]=x.x-1),y.x===0&&y.z===0&&(o[S]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xf(e.vertices,e.indices,e.radius,e.detail)}}class Bm extends xf{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bm(e.radius,e.detail)}}class Dr extends kn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const x=p*f-o;for(let S=0;S<c;S++){const y=S*u-r;_.push(y,-x,0),g.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const S=x+c*p,y=x+c*(p+1),b=x+1+c*(p+1),E=x+1+c*p;d.push(S,y,E),d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new Kt(_,3)),this.setAttribute("normal",new Kt(g,3)),this.setAttribute("uv",new Kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.widthSegments,e.heightSegments)}}class km extends kn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new B,u=new B,f=new B;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){const g=_/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){const g=(i+1)*d+_-1,m=(i+1)*(d-1)+_-1,p=(i+1)*(d-1)+_,x=(i+1)*d+_;o.push(g,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new km(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class hx extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xa extends Ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lf,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ss extends Xa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class c1 extends Ui{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lf,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ux extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=t0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fx extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function _l(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function dx(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Bd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function zm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Ya{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class px extends Ya{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:td,endingEnd:td}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case nd:r=e,a=2*t-n;break;case id:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nd:o=e,l=2*n-t;break;case id:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,x=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,S=(-1-d)*m+(1.5+d)*g+.5*_,y=d*m-d*g;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+x*o[c+b]+S*o[l+b]+y*o[u+b];return r}}class mx extends Ya{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}}class gx extends Ya{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Oi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_l(t,this.TimeBufferType),this.values=_l(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_l(e.times,Array),values:_l(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new px(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Aa:t=this.InterpolantFactoryMethodDiscrete;break;case Ra:t=this.InterpolantFactoryMethodLinear;break;case Pc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return Pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ye("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&c0(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Pc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,f=u-n,d=u+n;for(let _=0;_!==n;++_){const g=t[u+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Oi.prototype.ValueTypeName="";Oi.prototype.TimeBufferType=Float32Array;Oi.prototype.ValueBufferType=Float32Array;Oi.prototype.DefaultInterpolation=Ra;class Uo extends Oi{constructor(e,t,n){super(e,t,n)}}Uo.prototype.ValueTypeName="bool";Uo.prototype.ValueBufferType=Array;Uo.prototype.DefaultInterpolation=Aa;Uo.prototype.InterpolantFactoryMethodLinear=void 0;Uo.prototype.InterpolantFactoryMethodSmooth=void 0;class Vm extends Oi{constructor(e,t,n,i){super(e,t,n,i)}}Vm.prototype.ValueTypeName="color";class To extends Oi{constructor(e,t,n,i){super(e,t,n,i)}}To.prototype.ValueTypeName="number";class _x extends Ya{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)es.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Eo extends Oi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new _x(this.times,this.values,this.getValueSize(),e)}}Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class Oo extends Oi{constructor(e,t,n){super(e,t,n)}}Oo.prototype.ValueTypeName="string";Oo.prototype.ValueBufferType=Array;Oo.prototype.DefaultInterpolation=Aa;Oo.prototype.InterpolantFactoryMethodLinear=void 0;Oo.prototype.InterpolantFactoryMethodSmooth=void 0;class wo extends Oi{constructor(e,t,n,i){super(e,t,n,i)}}wo.prototype.ValueTypeName="vector";class xx{constructor(e="",t=-1,n=[],i=Q_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ni(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(yx(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Oi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=dx(l);l=Bd(l,1,h),c=Bd(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new To(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(De("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ye("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,_,g){if(d.length!==0){const m=[],p=[];zm(d,m,p,_),m.length!==0&&g.push(new u(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let x=0;x!==f[_].morphTargets.length;++x){const S=f[_];m.push(S.time),p.push(S.morphTarget===g?1:0)}i.push(new To(".morphTargetInfluence["+g+"]",m,p))}l=d.length*o}else{const d=".bones["+t[u].name+"]";n(wo,d+".position",f,"pos",i),n(Eo,d+".quaternion",f,"rot",i),n(wo,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function vx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return To;case"vector":case"vector2":case"vector3":case"vector4":return wo;case"color":return Vm;case"quaternion":return Eo;case"bool":case"boolean":return Uo;case"string":return Oo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function yx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vx(s.type);if(s.times===void 0){const t=[],n=[];zm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const vs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Sx{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Mx=new Sx;class Fo{constructor(e){this.manager=e!==void 0?e:Mx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Fo.DEFAULT_MATERIAL_NAME="__DEFAULT";const us={};class bx extends Error{constructor(e,t){super(e),this.response=t}}class Hm extends Fo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=vs.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(us[e]!==void 0){us[e].push({onLoad:t,onProgress:n,onError:i});return}us[e]=[],us[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=us[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:S,value:y})=>{if(S)p.close();else{g+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let E=0,w=h.length;E<w;E++){const R=h[E];R.onProgress&&R.onProgress(b)}p.enqueue(y),x()}},S=>{p.error(S)})}}});return new Response(m)}else throw new bx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{vs.add(`file:${e}`,c);const h=us[e];delete us[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=us[e];if(h===void 0)throw this.manager.itemError(e),c;delete us[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Kr=new WeakMap;class Tx extends Fo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=vs.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Kr.get(o);u===void 0&&(u=[],Kr.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=Ca("img");function l(){h(),t&&t(this);const u=Kr.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}Kr.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),vs.remove(`image:${e}`);const f=Kr.get(this)||[];for(let d=0;d<f.length;d++){const _=f[d];_.onError&&_.onError(u)}Kr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),vs.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Ex extends Fo{constructor(e){super(e)}load(e,t,n,i){const r=new fn,o=new Tx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class vc extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const nh=new tt,kd=new B,zd=new B;class vf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gf,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(kd),zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zd),t.updateMatrixWorld(),nh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wx extends vf{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Mo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ax extends vc{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Rx extends vf{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0}}class Cx extends vc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class yc extends _c{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Px extends vf{constructor(){super(new yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Da extends vc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Px}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Gm extends vc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ua{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ih=new WeakMap;class Lx extends Fo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=vs.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(ih.has(o)===!0)i&&i(ih.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return vs.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ih.set(l,c),vs.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});vs.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Dx extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Sc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const yf="\\[\\]\\.:\\/",Ix=new RegExp("["+yf+"]","g"),Sf="[^"+yf+"]",Nx="[^"+yf.replace("\\.","")+"]",Ux=/((?:WC+[\/:])*)/.source.replace("WC",Sf),Ox=/(WCOD+)?/.source.replace("WCOD",Nx),Fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sf),Bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sf),kx=new RegExp("^"+Ux+Ox+Fx+Bx+"$"),zx=["material","materials","bones","map"];class Vx{constructor(e,t,n){const i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class bt{constructor(e,t,n){this.path=t,this.parsedPath=n||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,n):new bt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ix,"")}static parseTrackName(e){const t=kx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);zx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=Vx;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Vd{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=st(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(st(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Hx extends Lr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){De("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Hd(s,e,t,n){const i=Gx(n);switch(t){case ym:return s*e;case sf:return s*e/i.components*i.byteLength;case rf:return s*e/i.components*i.byteLength;case So:return s*e*2/i.components*i.byteLength;case of:return s*e*2/i.components*i.byteLength;case Sm:return s*e*3/i.components*i.byteLength;case bi:return s*e*4/i.components*i.byteLength;case af:return s*e*4/i.components*i.byteLength;case Ol:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bl:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wh:case Yh:return Math.max(s,16)*Math.max(e,8)/4;case Gh:case Xh:return Math.max(s,8)*Math.max(e,8)/2;case $h:case qh:case Kh:case Zh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jh:case Jh:case Qh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case eu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case nu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case iu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case su:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ru:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ou:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case au:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case lu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case cu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case uu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case fu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case du:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case pu:case mu:case gu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case _u:case xu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case vu:case yu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gx(s){switch(s){case ai:case gm:return{byteLength:1,components:1};case Ea:case _m:case Es:return{byteLength:2,components:1};case tf:case nf:return{byteLength:2,components:4};case Qi:case ef:case Mi:return{byteLength:4,components:1};case xm:case vm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function Wm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Wx(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const g=u[d];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yx=`#ifdef USE_ALPHAHASH
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
#endif`,$x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zx=`#ifdef USE_AOMAP
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
#endif`,Jx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qx=`#ifdef USE_BATCHING
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
#endif`,ev=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sv=`#ifdef USE_IRIDESCENCE
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
#endif`,rv=`#ifdef USE_BUMPMAP
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
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pv=`#define PI 3.141592653589793
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
} // validated`,mv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gv=`vec3 transformedNormal = objectNormal;
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
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bv=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
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
#endif`,wv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,Rv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dv=`#ifdef USE_GRADIENTMAP
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
}`,Iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ov=`uniform bool receiveShadow;
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
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Bv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hv=`PhysicalMaterial material;
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
#endif`,Gv=`uniform sampler2D dfgLUT;
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
}`,Wv=`
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
#endif`,Xv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$v=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ey=`#if defined( USE_POINTS_UV )
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
#endif`,ty=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ny=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oy=`#ifdef USE_MORPHTARGETS
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
#endif`,ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ly=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dy=`#ifdef USE_NORMALMAP
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
#endif`,py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,my=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,My=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,by=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ry=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cy=`float getShadowMask() {
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
}`,Py=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ly=`#ifdef USE_SKINNING
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
#endif`,Dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iy=`#ifdef USE_SKINNING
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
#endif`,Ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,By=`#ifdef USE_TRANSMISSION
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
#endif`,ky=`#ifdef USE_TRANSMISSION
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
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xy=`uniform sampler2D t2D;
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
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`#include <common>
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
}`,Zy=`#if DEPTH_PACKING == 3200
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
}`,Jy=`#define DISTANCE
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
}`,Qy=`#define DISTANCE
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
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`uniform float scale;
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
}`,iS=`uniform vec3 diffuse;
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
}`,sS=`#include <common>
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
}`,rS=`uniform vec3 diffuse;
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
}`,oS=`#define LAMBERT
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
}`,aS=`#define LAMBERT
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
}`,lS=`#define MATCAP
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
}`,cS=`#define MATCAP
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
}`,hS=`#define NORMAL
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
}`,uS=`#define NORMAL
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
}`,fS=`#define PHONG
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
}`,dS=`#define PHONG
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
}`,pS=`#define STANDARD
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
}`,mS=`#define STANDARD
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
}`,gS=`#define TOON
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
}`,_S=`#define TOON
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
}`,xS=`uniform float size;
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
}`,vS=`uniform vec3 diffuse;
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
}`,yS=`#include <common>
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
}`,SS=`uniform vec3 color;
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
}`,MS=`uniform float rotation;
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
}`,bS=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Xx,alphahash_pars_fragment:Yx,alphamap_fragment:$x,alphamap_pars_fragment:qx,alphatest_fragment:jx,alphatest_pars_fragment:Kx,aomap_fragment:Zx,aomap_pars_fragment:Jx,batching_pars_vertex:Qx,batching_vertex:ev,begin_vertex:tv,beginnormal_vertex:nv,bsdfs:iv,iridescence_fragment:sv,bumpmap_pars_fragment:rv,clipping_planes_fragment:ov,clipping_planes_pars_fragment:av,clipping_planes_pars_vertex:lv,clipping_planes_vertex:cv,color_fragment:hv,color_pars_fragment:uv,color_pars_vertex:fv,color_vertex:dv,common:pv,cube_uv_reflection_fragment:mv,defaultnormal_vertex:gv,displacementmap_pars_vertex:_v,displacementmap_vertex:xv,emissivemap_fragment:vv,emissivemap_pars_fragment:yv,colorspace_fragment:Sv,colorspace_pars_fragment:Mv,envmap_fragment:bv,envmap_common_pars_fragment:Tv,envmap_pars_fragment:Ev,envmap_pars_vertex:wv,envmap_physical_pars_fragment:Fv,envmap_vertex:Av,fog_vertex:Rv,fog_pars_vertex:Cv,fog_fragment:Pv,fog_pars_fragment:Lv,gradientmap_pars_fragment:Dv,lightmap_pars_fragment:Iv,lights_lambert_fragment:Nv,lights_lambert_pars_fragment:Uv,lights_pars_begin:Ov,lights_toon_fragment:Bv,lights_toon_pars_fragment:kv,lights_phong_fragment:zv,lights_phong_pars_fragment:Vv,lights_physical_fragment:Hv,lights_physical_pars_fragment:Gv,lights_fragment_begin:Wv,lights_fragment_maps:Xv,lights_fragment_end:Yv,logdepthbuf_fragment:$v,logdepthbuf_pars_fragment:qv,logdepthbuf_pars_vertex:jv,logdepthbuf_vertex:Kv,map_fragment:Zv,map_pars_fragment:Jv,map_particle_fragment:Qv,map_particle_pars_fragment:ey,metalnessmap_fragment:ty,metalnessmap_pars_fragment:ny,morphinstance_vertex:iy,morphcolor_vertex:sy,morphnormal_vertex:ry,morphtarget_pars_vertex:oy,morphtarget_vertex:ay,normal_fragment_begin:ly,normal_fragment_maps:cy,normal_pars_fragment:hy,normal_pars_vertex:uy,normal_vertex:fy,normalmap_pars_fragment:dy,clearcoat_normal_fragment_begin:py,clearcoat_normal_fragment_maps:my,clearcoat_pars_fragment:gy,iridescence_pars_fragment:_y,opaque_fragment:xy,packing:vy,premultiplied_alpha_fragment:yy,project_vertex:Sy,dithering_fragment:My,dithering_pars_fragment:by,roughnessmap_fragment:Ty,roughnessmap_pars_fragment:Ey,shadowmap_pars_fragment:wy,shadowmap_pars_vertex:Ay,shadowmap_vertex:Ry,shadowmask_pars_fragment:Cy,skinbase_vertex:Py,skinning_pars_vertex:Ly,skinning_vertex:Dy,skinnormal_vertex:Iy,specularmap_fragment:Ny,specularmap_pars_fragment:Uy,tonemapping_fragment:Oy,tonemapping_pars_fragment:Fy,transmission_fragment:By,transmission_pars_fragment:ky,uv_pars_fragment:zy,uv_pars_vertex:Vy,uv_vertex:Hy,worldpos_vertex:Gy,background_vert:Wy,background_frag:Xy,backgroundCube_vert:Yy,backgroundCube_frag:$y,cube_vert:qy,cube_frag:jy,depth_vert:Ky,depth_frag:Zy,distance_vert:Jy,distance_frag:Qy,equirect_vert:eS,equirect_frag:tS,linedashed_vert:nS,linedashed_frag:iS,meshbasic_vert:sS,meshbasic_frag:rS,meshlambert_vert:oS,meshlambert_frag:aS,meshmatcap_vert:lS,meshmatcap_frag:cS,meshnormal_vert:hS,meshnormal_frag:uS,meshphong_vert:fS,meshphong_frag:dS,meshphysical_vert:pS,meshphysical_frag:mS,meshtoon_vert:gS,meshtoon_frag:_S,points_vert:xS,points_frag:vS,shadow_vert:yS,shadow_frag:SS,sprite_vert:MS,sprite_frag:bS},me={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Hi={basic:{uniforms:Ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Ln([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Ln([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Ln([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Ln([me.points,me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Ln([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Ln([me.common,me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Ln([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Ln([me.sprite,me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Ln([me.common,me.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Ln([me.lights,me.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Hi.physical={uniforms:Ln([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const xl={r:0,b:0,g:0},or=new ts,TS=new tt;function ES(s,e,t,n,i,r,o){const a=new Ke(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function _(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function g(S){let y=!1;const b=_(S);b===null?p(a,l):b&&b.isColor&&(p(b,1),y=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,y){const b=_(y);b&&(b.isCubeTexture||b.mapping===gc)?(h===void 0&&(h=new wn(new Wa(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:bo(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),or.copy(y.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(TS.makeRotationFromEuler(or)),h.material.toneMapped=ut.getTransfer(b.colorSpace)!==St,(u!==b||f!==b.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new wn(new Dr(2,2),new di({name:"BackgroundMaterial",uniforms:bo(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ut.getTransfer(b.colorSpace)!==St,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,y){S.getRGB(xl,Pm(s)),n.buffers.color.setClear(xl.r,xl.g,xl.b,y,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:g,addToRenderList:m,dispose:x}}function wS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(M,P,L,U,F){let H=!1;const V=u(U,L,P);r!==V&&(r=V,c(r.object)),H=d(M,U,L,F),H&&_(M,U,L,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(M,P,L,U),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,P,L){const U=L.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let H=F[P.id];H===void 0&&(H={},F[P.id]=H);let V=H[U];return V===void 0&&(V=f(l()),H[U]=V),V}function f(M){const P=[],L=[],U=[];for(let F=0;F<t;F++)P[F]=0,L[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:U,object:M,attributes:{},index:null}}function d(M,P,L,U){const F=r.attributes,H=P.attributes;let V=0;const k=L.getAttributes();for(const W in k)if(k[W].location>=0){const D=F[W];let ne=H[W];if(ne===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),D===void 0||D.attribute!==ne||ne&&D.data!==ne.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function _(M,P,L,U){const F={},H=P.attributes;let V=0;const k=L.getAttributes();for(const W in k)if(k[W].location>=0){let D=H[W];D===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(D=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(D=M.instanceColor));const ne={};ne.attribute=D,D&&D.data&&(ne.data=D.data),F[W]=ne,V++}r.attributes=F,r.attributesNum=V,r.index=U}function g(){const M=r.newAttributes;for(let P=0,L=M.length;P<L;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const L=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;L[M]=1,U[M]===0&&(s.enableVertexAttribArray(M),U[M]=1),F[M]!==P&&(s.vertexAttribDivisor(M,P),F[M]=P)}function x(){const M=r.newAttributes,P=r.enabledAttributes;for(let L=0,U=P.length;L<U;L++)P[L]!==M[L]&&(s.disableVertexAttribArray(L),P[L]=0)}function S(M,P,L,U,F,H,V){V===!0?s.vertexAttribIPointer(M,P,L,F,H):s.vertexAttribPointer(M,P,L,U,F,H)}function y(M,P,L,U){g();const F=U.attributes,H=L.getAttributes(),V=P.defaultAttributeValues;for(const k in H){const W=H[k];if(W.location>=0){let ee=F[k];if(ee===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const D=ee.normalized,ne=ee.itemSize,Ce=e.get(ee);if(Ce===void 0)continue;const Ne=Ce.buffer,Ue=Ce.type,Ve=Ce.bytesPerElement,j=Ue===s.INT||Ue===s.UNSIGNED_INT||ee.gpuType===ef;if(ee.isInterleavedBufferAttribute){const J=ee.data,fe=J.stride,Pe=ee.offset;if(J.isInstancedInterleavedBuffer){for(let ye=0;ye<W.locationSize;ye++)p(W.location+ye,J.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<W.locationSize;ye++)m(W.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let ye=0;ye<W.locationSize;ye++)S(W.location+ye,ne/W.locationSize,Ue,D,fe*Ve,(Pe+ne/W.locationSize*ye)*Ve,j)}else{if(ee.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)p(W.location+J,ee.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let J=0;J<W.locationSize;J++)m(W.location+J);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let J=0;J<W.locationSize;J++)S(W.location+J,ne/W.locationSize,Ue,D,ne*Ve,ne/W.locationSize*J*Ve,j)}}else if(V!==void 0){const D=V[k];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(W.location,D);break;case 3:s.vertexAttrib3fv(W.location,D);break;case 4:s.vertexAttrib4fv(W.location,D);break;default:s.vertexAttrib1fv(W.location,D)}}}}x()}function b(){R();for(const M in n){const P=n[M];for(const L in P){const U=P[L];for(const F in U)h(U[F].object),delete U[F];delete P[L]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const L in P){const U=P[L];for(const F in U)h(U[F].object),delete U[F];delete P[L]}delete n[M.id]}function w(M){for(const P in n){const L=n[P];if(L[M.id]===void 0)continue;const U=L[M.id];for(const F in U)h(U[F].object),delete U[F];delete L[M.id]}}function R(){v(),o=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function AS(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function RS(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==bi&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===Es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ai&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Mi&&!R)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(De("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:y,maxSamples:b,samples:E}}function CS(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Bs,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,S=x*4;let y=p.clippingState||null;l.value=y,y=h(_,f,S,d);for(let b=0;b!==S;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=d;S!==g;++S,y+=4)o.copy(u[S]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function PS(s){let e=new WeakMap;function t(o,a){return a===Vh?o.mapping=Ar:a===Hh&&(o.mapping=vo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vh||a===Hh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dm(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Vs=4,Gd=[.125,.215,.35,.446,.526,.582],mr=20,LS=256,$o=new yc,Wd=new Ke;let sh=null,rh=0,oh=0,ah=!1;const DS=new B;class Xd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=DS}=r;sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,rh,oh),this._renderer.xr.enabled=ah,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Es,format:bi,colorSpace:Bn,depthBuffer:!1},i=Yd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IS(r)),this._blurMaterial=US(r,e,t),this._ggxMaterial=NS(r,e,t)}return i}_compileMaterial(e){const t=new wn(new kn,e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,i,r){const l=new Mn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Wd),u.toneMapping=Ki,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new Wa,new _r({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,p=!0):(m.color.copy(Wd),p=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const b=this._cubeSize;Zr(i,y*b,S>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(g,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ar||e.mapping===vo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$d());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Zr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:_}=this,g=this._sizeLods[n],m=3*g*(n>_-Vs?n-_+Vs:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,Zr(r,m,p,3*g,2*g),i.setRenderTarget(r),i.render(a,$o),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Zr(e,m,p,3*g,2*g),i.setRenderTarget(e),i.render(a,$o)}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[i];u.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*mr-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):mr;m>mr&&De(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const p=[];let x=0;for(let w=0;w<mr;++w){const R=w/g,v=Math.exp(-R*R/2);p.push(v),w===0?x+=v:w<m&&(x+=2*v)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;const y=this._sizeLods[i],b=3*y*(i>S-Vs?i-S+Vs:0),E=4*(this._cubeSize-y);Zr(t,b,E,3*y,2*y),l.setRenderTarget(t),l.render(u,$o)}}function IS(s){const e=[],t=[],n=[];let i=s;const r=s-Vs+1+Gd.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Vs?l=Gd[o-s+Vs-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,m=2,p=1,x=new Float32Array(g*_*d),S=new Float32Array(m*_*d),y=new Float32Array(p*_*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,R=E>2?0:-1,v=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];x.set(v,g*_*E),S.set(f,m*_*E);const M=[E,E,E,E,E,E];y.set(M,p*_*E)}const b=new kn;b.setAttribute("position",new Fn(x,g)),b.setAttribute("uv",new Fn(S,m)),b.setAttribute("faceIndex",new Fn(y,p)),n.push(new wn(b,null)),i>Vs&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Yd(s,e,t){const n=new Yn(s,e,t);return n.texture.mapping=gc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function NS(s,e,t){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:LS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function US(s,e,t){const n=new Float32Array(mr),i=new B(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function $d(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function qd(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}function OS(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vh||l===Hh,h=l===Ar||l===vo;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Xd(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Xd(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function FS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Pa("WebGLRenderer: "+n+" extension not supported."),i}}}function BS(s,e,t,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let S=0,y=x.length;S<y;S+=3){const b=x[S+0],E=x[S+1],w=x[S+2];f.push(b,E,E,w,w,b)}}else if(_!==void 0){const x=_.array;g=_.version;for(let S=0,y=x.length/3-1;S<y;S+=3){const b=S+0,E=S+1,w=S+2;f.push(b,E,E,w,w,b)}}else return;const m=new(bm(f)?Cm:Rm)(f,1);m.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function kS(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*o,_),t.update(d,n,_))}function h(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function u(f,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let p=0;for(let x=0;x<_;x++)p+=d[x]*g[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function VS(s,e,t){const n=new WeakMap,i=new Nt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let v=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;d===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let y=a.attributes.position.count*S,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*b*4*u),w=new Em(E,y,b,u);w.type=Mi,w.needsUpdate=!0;const R=S*4;for(let M=0;M<u;M++){const P=m[M],L=p[M],U=x[M],F=y*b*4*M;for(let H=0;H<P.count;H++){const V=H*R;d===!0&&(i.fromBufferAttribute(P,H),E[F+V+0]=i.x,E[F+V+1]=i.y,E[F+V+2]=i.z,E[F+V+3]=0),_===!0&&(i.fromBufferAttribute(L,H),E[F+V+4]=i.x,E[F+V+5]=i.y,E[F+V+6]=i.z,E[F+V+7]=0),g===!0&&(i.fromBufferAttribute(U,H),E[F+V+8]=i.x,E[F+V+9]=i.y,E[F+V+10]=i.z,E[F+V+11]=U.itemSize===4?i.w:1)}}f={count:u,texture:w,size:new Be(y,b)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function HS(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const GS={[am]:"LINEAR_TONE_MAPPING",[lm]:"REINHARD_TONE_MAPPING",[cm]:"CINEON_TONE_MAPPING",[hm]:"ACES_FILMIC_TONE_MAPPING",[fm]:"AGX_TONE_MAPPING",[dm]:"NEUTRAL_TONE_MAPPING",[um]:"CUSTOM_TONE_MAPPING"};function WS(s,e,t,n,i){const r=new Yn(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),o=new Yn(e,t,{type:Es,depthBuffer:!1,stencilBuffer:!1}),a=new kn;a.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const l=new hx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new wn(a,l),h=new yc(-1,1,1,-1,0,1);let u=null,f=null,d=!1,_,g=null,m=[],p=!1;this.setSize=function(x,S){r.setSize(x,S),o.setSize(x,S);for(let y=0;y<m.length;y++){const b=m[y];b.setSize&&b.setSize(x,S)}},this.setEffects=function(x){m=x,p=m.length>0&&m[0].isRenderPass===!0;const S=r.width,y=r.height;for(let b=0;b<m.length;b++){const E=m[b];E.setSize&&E.setSize(S,y)}},this.begin=function(x,S){if(d||x.toneMapping===Ki&&m.length===0)return!1;if(g=S,S!==null){const y=S.width,b=S.height;(r.width!==y||r.height!==b)&&this.setSize(y,b)}return p===!1&&x.setRenderTarget(r),_=x.toneMapping,x.toneMapping=Ki,!0},this.hasRenderPass=function(){return p},this.end=function(x,S){x.toneMapping=_,d=!0;let y=r,b=o;for(let E=0;E<m.length;E++){const w=m[E];if(w.enabled!==!1&&(w.render(x,b,y,S),w.needsSwap!==!1)){const R=y;y=b,b=R}}if(u!==x.outputColorSpace||f!==x.toneMapping){u=x.outputColorSpace,f=x.toneMapping,l.defines={},ut.getTransfer(u)===St&&(l.defines.SRGB_TRANSFER="");const E=GS[f];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(g),x.render(c,h),g=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Xm=new fn,Eu=new La(1,1),Ym=new Em,$m=new I0,qm=new Lm,jd=[],Kd=[],Zd=new Float32Array(16),Jd=new Float32Array(9),Qd=new Float32Array(4);function Bo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=jd[i];if(r===void 0&&(r=new Float32Array(i),jd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function rn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function on(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function bc(s,e){let t=Kd[e];t===void 0&&(t=new Int32Array(e),Kd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function XS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function YS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2fv(this.addr,e),on(t,e)}}function $S(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;s.uniform3fv(this.addr,e),on(t,e)}}function qS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4fv(this.addr,e),on(t,e)}}function jS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;Qd.set(n),s.uniformMatrix2fv(this.addr,!1,Qd),on(t,n)}}function KS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;Jd.set(n),s.uniformMatrix3fv(this.addr,!1,Jd),on(t,n)}}function ZS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(rn(t,n))return;Zd.set(n),s.uniformMatrix4fv(this.addr,!1,Zd),on(t,n)}}function JS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function QS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2iv(this.addr,e),on(t,e)}}function eM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3iv(this.addr,e),on(t,e)}}function tM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4iv(this.addr,e),on(t,e)}}function nM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2uiv(this.addr,e),on(t,e)}}function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3uiv(this.addr,e),on(t,e)}}function rM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4uiv(this.addr,e),on(t,e)}}function oM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Eu.compareFunction=t.isReversedDepthBuffer()?hf:cf,r=Eu):r=Xm,t.setTexture2D(e||r,i)}function aM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$m,i)}function lM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qm,i)}function cM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ym,i)}function hM(s){switch(s){case 5126:return XS;case 35664:return YS;case 35665:return $S;case 35666:return qS;case 35674:return jS;case 35675:return KS;case 35676:return ZS;case 5124:case 35670:return JS;case 35667:case 35671:return QS;case 35668:case 35672:return eM;case 35669:case 35673:return tM;case 5125:return nM;case 36294:return iM;case 36295:return sM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return cM}}function uM(s,e){s.uniform1fv(this.addr,e)}function fM(s,e){const t=Bo(e,this.size,2);s.uniform2fv(this.addr,t)}function dM(s,e){const t=Bo(e,this.size,3);s.uniform3fv(this.addr,t)}function pM(s,e){const t=Bo(e,this.size,4);s.uniform4fv(this.addr,t)}function mM(s,e){const t=Bo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function gM(s,e){const t=Bo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _M(s,e){const t=Bo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xM(s,e){s.uniform1iv(this.addr,e)}function vM(s,e){s.uniform2iv(this.addr,e)}function yM(s,e){s.uniform3iv(this.addr,e)}function SM(s,e){s.uniform4iv(this.addr,e)}function MM(s,e){s.uniform1uiv(this.addr,e)}function bM(s,e){s.uniform2uiv(this.addr,e)}function TM(s,e){s.uniform3uiv(this.addr,e)}function EM(s,e){s.uniform4uiv(this.addr,e)}function wM(s,e,t){const n=this.cache,i=e.length,r=bc(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Eu:o=Xm;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function AM(s,e,t){const n=this.cache,i=e.length,r=bc(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||$m,r[o])}function RM(s,e,t){const n=this.cache,i=e.length,r=bc(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||qm,r[o])}function CM(s,e,t){const n=this.cache,i=e.length,r=bc(t,i);rn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ym,r[o])}function PM(s){switch(s){case 5126:return uM;case 35664:return fM;case 35665:return dM;case 35666:return pM;case 35674:return mM;case 35675:return gM;case 35676:return _M;case 5124:case 35670:return xM;case 35667:case 35671:return vM;case 35668:case 35672:return yM;case 35669:case 35673:return SM;case 5125:return MM;case 36294:return bM;case 36295:return TM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return CM}}class LM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hM(t.type)}}class DM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PM(t.type)}}class IM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function ep(s,e){s.seq.push(e),s.map[e.id]=e}function NM(s,e,t){const n=s.name,i=n.length;for(lh.lastIndex=0;;){const r=lh.exec(n),o=lh.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ep(t,c===void 0?new LM(a,s,e):new DM(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new IM(a),ep(t,u)),t=u}}}class zl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);NM(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function tp(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const UM=37297;let OM=0;function FM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const np=new Qe;function BM(s){ut._getMatrix(np,ut.workingColorSpace,s);const e=`mat3( ${np.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(s)){case Zl:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ip(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+FM(s.getShaderSource(e),a)}else return r}function kM(s,e){const t=BM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zM={[am]:"Linear",[lm]:"Reinhard",[cm]:"Cineon",[hm]:"ACESFilmic",[fm]:"AgX",[dm]:"Neutral",[um]:"Custom"};function VM(s,e){const t=zM[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vl=new B;function HM(){ut.getLuminanceCoefficients(vl);const s=vl.x.toFixed(4),e=vl.y.toFixed(4),t=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function WM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function XM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ta(s){return s!==""}function sp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(s){return s.replace(YM,qM)}const $M=new Map;function qM(s,e){let t=et[e];if(t===void 0){const n=$M.get(e);if(n!==void 0)t=et[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wu(t)}const jM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function op(s){return s.replace(jM,KM)}function KM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ap(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ZM={[Nl]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function JM(s){return ZM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const QM={[Ar]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE",[gc]:"ENVMAP_TYPE_CUBE_UV"};function eb(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":QM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const tb={[vo]:"ENVMAP_MODE_REFRACTION"};function nb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":tb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ib={[om]:"ENVMAP_BLENDING_MULTIPLY",[K_]:"ENVMAP_BLENDING_MIX",[Z_]:"ENVMAP_BLENDING_ADD"};function sb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ib[s.combine]||"ENVMAP_BLENDING_NONE"}function rb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ob(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=JM(t),c=eb(t),h=nb(t),u=sb(t),f=rb(t),d=GM(t),_=WM(r),g=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ta).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ta).join(`
`),p.length>0&&(p+=`
`)):(m=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),p=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?et.tonemapping_pars_fragment:"",t.toneMapping!==Ki?VM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,kM("linearToOutputTexel",t.outputColorSpace),HM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),o=wu(o),o=sp(o,t),o=rp(o,t),a=wu(a),a=sp(a,t),a=rp(a,t),o=op(o),a=op(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=x+m+o,y=x+p+a,b=tp(i,i.VERTEX_SHADER,S),E=tp(i,i.FRAGMENT_SHADER,y);i.attachShader(g,b),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(P){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(g)||"",U=i.getShaderInfoLog(b)||"",F=i.getShaderInfoLog(E)||"",H=L.trim(),V=U.trim(),k=F.trim();let W=!0,ee=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,b,E);else{const D=ip(i,b,"vertex"),ne=ip(i,E,"fragment");Ye("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+D+`
`+ne)}else H!==""?De("WebGLProgram: Program Info Log:",H):(V===""||k==="")&&(ee=!1);ee&&(P.diagnostics={runnable:W,programLog:H,vertexShader:{log:V,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(b),i.deleteShader(E),R=new zl(i,g),v=XM(i,g)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,UM)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=E,this}let ab=0;class lb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cb(e),t.set(e,n)),n}}class cb{constructor(e){this.id=ab++,this.code=e,this.usedTimes=0}}function hb(s,e,t,n,i,r,o){const a=new wm,l=new lb,c=new Set,h=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,M,P,L,U){const F=L.fog,H=U.geometry,V=v.isMeshStandardMaterial?L.environment:null,k=(v.isMeshStandardMaterial?t:e).get(v.envMap||V),W=k&&k.mapping===gc?k.image.height:null,ee=_[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&De("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const D=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ne=D!==void 0?D.length:0;let Ce=0;H.morphAttributes.position!==void 0&&(Ce=1),H.morphAttributes.normal!==void 0&&(Ce=2),H.morphAttributes.color!==void 0&&(Ce=3);let Ne,Ue,Ve,j;if(ee){const ge=Hi[ee];Ne=ge.vertexShader,Ue=ge.fragmentShader}else Ne=v.vertexShader,Ue=v.fragmentShader,l.update(v),Ve=l.getVertexShaderID(v),j=l.getFragmentShaderID(v);const J=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Pe=U.isInstancedMesh===!0,ye=U.isBatchedMesh===!0,We=!!v.map,dt=!!v.matcap,Te=!!k,He=!!v.aoMap,Ze=!!v.lightMap,Fe=!!v.bumpMap,X=!!v.normalMap,N=!!v.displacementMap,_t=!!v.emissiveMap,nt=!!v.metalnessMap,Ge=!!v.roughnessMap,Se=v.anisotropy>0,C=v.clearcoat>0,T=v.dispersion>0,O=v.iridescence>0,K=v.sheen>0,Z=v.transmission>0,q=Se&&!!v.anisotropyMap,ve=C&&!!v.clearcoatMap,re=C&&!!v.clearcoatNormalMap,Ee=C&&!!v.clearcoatRoughnessMap,be=O&&!!v.iridescenceMap,se=O&&!!v.iridescenceThicknessMap,oe=K&&!!v.sheenColorMap,Me=K&&!!v.sheenRoughnessMap,we=!!v.specularMap,ae=!!v.specularColorMap,$e=!!v.specularIntensityMap,I=Z&&!!v.transmissionMap,he=Z&&!!v.thicknessMap,ie=!!v.gradientMap,ue=!!v.alphaMap,te=v.alphaTest>0,Q=!!v.alphaHash,ce=!!v.extensions;let Oe=Ki;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Oe=s.toneMapping);const pt={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:Ne,fragmentShader:Ue,defines:v.defines,customVertexShaderID:Ve,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:ye,batchingColor:ye&&U._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&U.instanceColor!==null,instancingMorph:Pe&&U.morphTexture!==null,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Bn,alphaToCoverage:!!v.alphaToCoverage,map:We,matcap:dt,envMap:Te,envMapMode:Te&&k.mapping,envMapCubeUVHeight:W,aoMap:He,lightMap:Ze,bumpMap:Fe,normalMap:X,displacementMap:N,emissiveMap:_t,normalMapObjectSpace:X&&v.normalMapType===n0,normalMapTangentSpace:X&&v.normalMapType===lf,metalnessMap:nt,roughnessMap:Ge,anisotropy:Se,anisotropyMap:q,clearcoat:C,clearcoatMap:ve,clearcoatNormalMap:re,clearcoatRoughnessMap:Ee,dispersion:T,iridescence:O,iridescenceMap:be,iridescenceThicknessMap:se,sheen:K,sheenColorMap:oe,sheenRoughnessMap:Me,specularMap:we,specularColorMap:ae,specularIntensityMap:$e,transmission:Z,transmissionMap:I,thicknessMap:he,gradientMap:ie,opaque:v.transparent===!1&&v.blending===lo&&v.alphaToCoverage===!1,alphaMap:ue,alphaTest:te,alphaHash:Q,combine:v.combine,mapUv:We&&g(v.map.channel),aoMapUv:He&&g(v.aoMap.channel),lightMapUv:Ze&&g(v.lightMap.channel),bumpMapUv:Fe&&g(v.bumpMap.channel),normalMapUv:X&&g(v.normalMap.channel),displacementMapUv:N&&g(v.displacementMap.channel),emissiveMapUv:_t&&g(v.emissiveMap.channel),metalnessMapUv:nt&&g(v.metalnessMap.channel),roughnessMapUv:Ge&&g(v.roughnessMap.channel),anisotropyMapUv:q&&g(v.anisotropyMap.channel),clearcoatMapUv:ve&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(v.sheenRoughnessMap.channel),specularMapUv:we&&g(v.specularMap.channel),specularColorMapUv:ae&&g(v.specularColorMap.channel),specularIntensityMapUv:$e&&g(v.specularIntensityMap.channel),transmissionMapUv:I&&g(v.transmissionMap.channel),thicknessMapUv:he&&g(v.thicknessMap.channel),alphaMapUv:ue&&g(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(X||Se),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(We||ue),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:We&&v.map.isVideoTexture===!0&&ut.getTransfer(v.map.colorSpace)===St,decodeVideoTextureEmissive:_t&&v.emissiveMap.isVideoTexture===!0&&ut.getTransfer(v.emissiveMap.colorSpace)===St,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Wi,flipSided:v.side===Xn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ce&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&v.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)M.push(P),M.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(x(M,v),S(M,v),M.push(s.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function x(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function S(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function y(v){const M=_[v.type];let P;if(M){const L=Hi[M];P=Y0.clone(L.uniforms)}else P=v.uniforms;return P}function b(v,M){let P=u.get(M);return P!==void 0?++P.usedTimes:(P=new ob(s,M,v,r),h.push(P),u.set(M,P)),P}function E(v){if(--v.usedTimes===0){const M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){l.remove(v)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:R}}function ub(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function fb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function lp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function cp(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,_,g,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function a(u,f,d,_,g,m){const p=o(u,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(u,f,d,_,g,m){const p=o(u,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||fb),n.length>1&&n.sort(f||lp),i.length>1&&i.sort(f||lp)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function db(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new cp,s.set(n,[o])):i>=r.length?(o=new cp,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function pb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ke};break;case"SpotLight":t={position:new B,direction:new B,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function mb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let gb=0;function _b(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xb(s){const e=new pb,t=mb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,r=new tt,o=new tt;function a(c){let h=0,u=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,x=0,S=0,y=0,b=0,E=0,w=0;c.sort(_b);for(let v=0,M=c.length;v<M;v++){const P=c[v],L=P.color,U=P.intensity,F=P.distance;let H=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===So?H=P.shadow.map.texture:H=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=L.r*U,u+=L.g*U,f+=L.b*U;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],U);w++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,W=t.get(P);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=P.shadow.matrix,x++}n.directional[d]=V,d++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(L).multiplyScalar(U),V.distance=F,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[g]=V;const k=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,k.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=k.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=H,y++}g++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(L).multiplyScalar(U),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const k=P.shadow,W=t.get(P);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=H,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=V,_++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(U),V.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==S||R.numSpotShadows!==y||R.numSpotMaps!==b||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=S,R.numSpotShadows=y,R.numSpotMaps=b,R.numLightProbes=w,n.version=gb++)}function l(c,h){let u=0,f=0,d=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const S=c[p];if(S.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(S.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function hp(s){const e=new xb(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function vb(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new hp(s),e.set(i,[a])):r>=o.length?(a=new hp(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sb=`uniform sampler2D shadow_pass;
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
}`,Mb=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],bb=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],up=new tt,qo=new B,ch=new B;function Tb(s,e,t){let n=new gf;const i=new Be,r=new Be,o=new Nt,a=new ux,l=new fx,c={},h=t.maxTextureSize,u={[Ts]:Xn,[Xn]:Ts,[Wi]:Wi},f=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:yb,fragmentShader:Sb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new kn;_.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new wn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let p=this.type;this.render=function(E,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;E.type===L_&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=Nl);const v=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ss),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=p!==this.type;U&&w.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(H=>H.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,H=E.length;F<H;F++){const V=E[F],k=V.shadow;if(k===void 0){De("WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const W=k.getFrameExtents();if(i.multiply(W),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,k.mapSize.y=r.y)),k.map===null||U===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Qo){if(V.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Yn(i.x,i.y,{format:So,type:Es,minFilter:sn,magFilter:sn,generateMipmaps:!1}),k.map.texture.name=V.name+".shadowMap",k.map.depthTexture=new La(i.x,i.y,Mi),k.map.depthTexture.name=V.name+".shadowMapDepth",k.map.depthTexture.format=ws,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=nn,k.map.depthTexture.magFilter=nn}else{V.isPointLight?(k.map=new Dm(i.x),k.map.depthTexture=new cx(i.x,Qi)):(k.map=new Yn(i.x,i.y),k.map.depthTexture=new La(i.x,i.y,Qi)),k.map.depthTexture.name=V.name+".shadowMap",k.map.depthTexture.format=ws;const D=s.state.buffers.depth.getReversed();this.type===Nl?(k.map.depthTexture.compareFunction=D?hf:cf,k.map.depthTexture.minFilter=sn,k.map.depthTexture.magFilter=sn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=nn,k.map.depthTexture.magFilter=nn)}k.camera.updateProjectionMatrix()}const ee=k.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<ee;D++){if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,D),s.clear();else{D===0&&(s.setRenderTarget(k.map),s.clear());const ne=k.getViewport(D);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),L.viewport(o)}if(V.isPointLight){const ne=k.camera,Ce=k.matrix,Ne=V.distance||ne.far;Ne!==ne.far&&(ne.far=Ne,ne.updateProjectionMatrix()),qo.setFromMatrixPosition(V.matrixWorld),ne.position.copy(qo),ch.copy(ne.position),ch.add(Mb[D]),ne.up.copy(bb[D]),ne.lookAt(ch),ne.updateMatrixWorld(),Ce.makeTranslation(-qo.x,-qo.y,-qo.z),up.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),k._frustum.setFromProjectionMatrix(up,ne.coordinateSystem,ne.reversedDepth)}else k.updateMatrices(V);n=k.getFrustum(),y(w,R,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===Qo&&x(k,R),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,M,P)};function x(E,w){const R=e.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Yn(i.x,i.y,{format:So,type:Es})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,R,f,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,R,d,g,null)}function S(E,w,R,v){let M=null;const P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const L=M.uuid,U=w.uuid;let F=c[L];F===void 0&&(F={},c[L]=F);let H=F[U];H===void 0&&(H=M.clone(),F[U]=H,w.addEventListener("dispose",b)),M=H}if(M.visible=w.visible,M.wireframe=w.wireframe,v===Qo?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=s.properties.get(M);L.light=R}return M}function y(E,w,R,v,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Qo)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const U=e.update(E),F=E.material;if(Array.isArray(F)){const H=U.groups;for(let V=0,k=H.length;V<k;V++){const W=H[V],ee=F[W.materialIndex];if(ee&&ee.visible){const D=S(E,ee,v,M);E.onBeforeShadow(s,E,w,R,U,D,W),s.renderBufferDirect(R,null,U,D,E,W),E.onAfterShadow(s,E,w,R,U,D,W)}}}else if(F.visible){const H=S(E,F,v,M);E.onBeforeShadow(s,E,w,R,U,H,null),s.renderBufferDirect(R,null,U,H,E,null),E.onAfterShadow(s,E,w,R,U,H,null)}}const L=E.children;for(let U=0,F=L.length;U<F;U++)y(L[U],w,R,v,M)}function b(E){E.target.removeEventListener("dispose",b);for(const R in c){const v=c[R],M=E.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const Eb={[Nh]:Uh,[Oh]:kh,[Fh]:zh,[xo]:Bh,[Uh]:Nh,[kh]:Oh,[zh]:Fh,[Bh]:xo};function wb(s,e){function t(){let I=!1;const he=new Nt;let ie=null;const ue=new Nt(0,0,0,0);return{setMask:function(te){ie!==te&&!I&&(s.colorMask(te,te,te,te),ie=te)},setLocked:function(te){I=te},setClear:function(te,Q,ce,Oe,pt){pt===!0&&(te*=Oe,Q*=Oe,ce*=Oe),he.set(te,Q,ce,Oe),ue.equals(he)===!1&&(s.clearColor(te,Q,ce,Oe),ue.copy(he))},reset:function(){I=!1,ie=null,ue.set(-1,0,0,0)}}}function n(){let I=!1,he=!1,ie=null,ue=null,te=null;return{setReversed:function(Q){if(he!==Q){const ce=e.get("EXT_clip_control");Q?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),he=Q;const Oe=te;te=null,this.setClear(Oe)}},getReversed:function(){return he},setTest:function(Q){Q?J(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(Q){ie!==Q&&!I&&(s.depthMask(Q),ie=Q)},setFunc:function(Q){if(he&&(Q=Eb[Q]),ue!==Q){switch(Q){case Nh:s.depthFunc(s.NEVER);break;case Uh:s.depthFunc(s.ALWAYS);break;case Oh:s.depthFunc(s.LESS);break;case xo:s.depthFunc(s.LEQUAL);break;case Fh:s.depthFunc(s.EQUAL);break;case Bh:s.depthFunc(s.GEQUAL);break;case kh:s.depthFunc(s.GREATER);break;case zh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=Q}},setLocked:function(Q){I=Q},setClear:function(Q){te!==Q&&(he&&(Q=1-Q),s.clearDepth(Q),te=Q)},reset:function(){I=!1,ie=null,ue=null,te=null,he=!1}}}function i(){let I=!1,he=null,ie=null,ue=null,te=null,Q=null,ce=null,Oe=null,pt=null;return{setTest:function(ge){I||(ge?J(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(ge){he!==ge&&!I&&(s.stencilMask(ge),he=ge)},setFunc:function(ge,Re,Je){(ie!==ge||ue!==Re||te!==Je)&&(s.stencilFunc(ge,Re,Je),ie=ge,ue=Re,te=Je)},setOp:function(ge,Re,Je){(Q!==ge||ce!==Re||Oe!==Je)&&(s.stencilOp(ge,Re,Je),Q=ge,ce=Re,Oe=Je)},setLocked:function(ge){I=ge},setClear:function(ge){pt!==ge&&(s.clearStencil(ge),pt=ge)},reset:function(){I=!1,he=null,ie=null,ue=null,te=null,Q=null,ce=null,Oe=null,pt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,x=null,S=null,y=null,b=null,E=null,w=new Ke(0,0,0),R=0,v=!1,M=null,P=null,L=null,U=null,F=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,k=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=k>=2);let ee=null,D={};const ne=s.getParameter(s.SCISSOR_BOX),Ce=s.getParameter(s.VIEWPORT),Ne=new Nt().fromArray(ne),Ue=new Nt().fromArray(Ce);function Ve(I,he,ie,ue){const te=new Uint8Array(4),Q=s.createTexture();s.bindTexture(I,Q),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ce=0;ce<ie;ce++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(he+ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return Q}const j={};j[s.TEXTURE_2D]=Ve(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(s.DEPTH_TEST),o.setFunc(xo),Fe(!1),X(Kf),J(s.CULL_FACE),He(Ss);function J(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function fe(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Pe(I,he){return u[I]!==he?(s.bindFramebuffer(I,he),u[I]=he,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=he),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=he),!0):!1}function ye(I,he){let ie=d,ue=!1;if(I){ie=f.get(he),ie===void 0&&(ie=[],f.set(he,ie));const te=I.textures;if(ie.length!==te.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,ce=te.length;Q<ce;Q++)ie[Q]=s.COLOR_ATTACHMENT0+Q;ie.length=te.length,ue=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,ue=!0);ue&&s.drawBuffers(ie)}function We(I){return _!==I?(s.useProgram(I),_=I,!0):!1}const dt={[pr]:s.FUNC_ADD,[I_]:s.FUNC_SUBTRACT,[N_]:s.FUNC_REVERSE_SUBTRACT};dt[U_]=s.MIN,dt[O_]=s.MAX;const Te={[F_]:s.ZERO,[B_]:s.ONE,[k_]:s.SRC_COLOR,[Dh]:s.SRC_ALPHA,[X_]:s.SRC_ALPHA_SATURATE,[G_]:s.DST_COLOR,[V_]:s.DST_ALPHA,[z_]:s.ONE_MINUS_SRC_COLOR,[Ih]:s.ONE_MINUS_SRC_ALPHA,[W_]:s.ONE_MINUS_DST_COLOR,[H_]:s.ONE_MINUS_DST_ALPHA,[Y_]:s.CONSTANT_COLOR,[$_]:s.ONE_MINUS_CONSTANT_COLOR,[q_]:s.CONSTANT_ALPHA,[j_]:s.ONE_MINUS_CONSTANT_ALPHA};function He(I,he,ie,ue,te,Q,ce,Oe,pt,ge){if(I===Ss){g===!0&&(fe(s.BLEND),g=!1);return}if(g===!1&&(J(s.BLEND),g=!0),I!==D_){if(I!==m||ge!==v){if((p!==pr||y!==pr)&&(s.blendEquation(s.FUNC_ADD),p=pr,y=pr),ge)switch(I){case lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zf:s.blendFunc(s.ONE,s.ONE);break;case Jf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ye("WebGLState: Invalid blending: ",I);break}else switch(I){case lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Jf:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qf:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",I);break}x=null,S=null,b=null,E=null,w.set(0,0,0),R=0,m=I,v=ge}return}te=te||he,Q=Q||ie,ce=ce||ue,(he!==p||te!==y)&&(s.blendEquationSeparate(dt[he],dt[te]),p=he,y=te),(ie!==x||ue!==S||Q!==b||ce!==E)&&(s.blendFuncSeparate(Te[ie],Te[ue],Te[Q],Te[ce]),x=ie,S=ue,b=Q,E=ce),(Oe.equals(w)===!1||pt!==R)&&(s.blendColor(Oe.r,Oe.g,Oe.b,pt),w.copy(Oe),R=pt),m=I,v=!1}function Ze(I,he){I.side===Wi?fe(s.CULL_FACE):J(s.CULL_FACE);let ie=I.side===Xn;he&&(ie=!ie),Fe(ie),I.blending===lo&&I.transparent===!1?He(Ss):He(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const ue=I.stencilWrite;a.setTest(ue),ue&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(I){M!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),M=I)}function X(I){I!==C_?(J(s.CULL_FACE),I!==P&&(I===Kf?s.cullFace(s.BACK):I===P_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),P=I}function N(I){I!==L&&(V&&s.lineWidth(I),L=I)}function _t(I,he,ie){I?(J(s.POLYGON_OFFSET_FILL),(U!==he||F!==ie)&&(s.polygonOffset(he,ie),U=he,F=ie)):fe(s.POLYGON_OFFSET_FILL)}function nt(I){I?J(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function Ge(I){I===void 0&&(I=s.TEXTURE0+H-1),ee!==I&&(s.activeTexture(I),ee=I)}function Se(I,he,ie){ie===void 0&&(ee===null?ie=s.TEXTURE0+H-1:ie=ee);let ue=D[ie];ue===void 0&&(ue={type:void 0,texture:void 0},D[ie]=ue),(ue.type!==I||ue.texture!==he)&&(ee!==ie&&(s.activeTexture(ie),ee=ie),s.bindTexture(I,he||j[I]),ue.type=I,ue.texture=he)}function C(){const I=D[ee];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(I){Ye("WebGLState:",I)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(I){Ye("WebGLState:",I)}}function K(){try{s.texSubImage2D(...arguments)}catch(I){Ye("WebGLState:",I)}}function Z(){try{s.texSubImage3D(...arguments)}catch(I){Ye("WebGLState:",I)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(I){Ye("WebGLState:",I)}}function ve(){try{s.compressedTexSubImage3D(...arguments)}catch(I){Ye("WebGLState:",I)}}function re(){try{s.texStorage2D(...arguments)}catch(I){Ye("WebGLState:",I)}}function Ee(){try{s.texStorage3D(...arguments)}catch(I){Ye("WebGLState:",I)}}function be(){try{s.texImage2D(...arguments)}catch(I){Ye("WebGLState:",I)}}function se(){try{s.texImage3D(...arguments)}catch(I){Ye("WebGLState:",I)}}function oe(I){Ne.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Ne.copy(I))}function Me(I){Ue.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Ue.copy(I))}function we(I,he){let ie=c.get(he);ie===void 0&&(ie=new WeakMap,c.set(he,ie));let ue=ie.get(I);ue===void 0&&(ue=s.getUniformBlockIndex(he,I.name),ie.set(I,ue))}function ae(I,he){const ue=c.get(he).get(I);l.get(he)!==ue&&(s.uniformBlockBinding(he,ue,I.__bindingPointIndex),l.set(he,ue))}function $e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ee=null,D={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,x=null,S=null,y=null,b=null,E=null,w=new Ke(0,0,0),R=0,v=!1,M=null,P=null,L=null,U=null,F=null,Ne.set(0,0,s.canvas.width,s.canvas.height),Ue.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:fe,bindFramebuffer:Pe,drawBuffers:ye,useProgram:We,setBlending:He,setMaterial:Ze,setFlipSided:Fe,setCullFace:X,setLineWidth:N,setPolygonOffset:_t,setScissorTest:nt,activeTexture:Ge,bindTexture:Se,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:O,texImage2D:be,texImage3D:se,updateUBOMapping:we,uniformBlockBinding:ae,texStorage2D:re,texStorage3D:Ee,texSubImage2D:K,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:ve,scissor:oe,viewport:Me,reset:$e}}function Ab(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,T){return d?new OffscreenCanvas(C,T):Ca("canvas")}function g(C,T,O){let K=1;const Z=Se(C);if((Z.width>O||Z.height>O)&&(K=O/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(K*Z.width),ve=Math.floor(K*Z.height);u===void 0&&(u=_(q,ve));const re=T?_(q,ve):u;return re.width=q,re.height=ve,re.getContext("2d").drawImage(C,0,0,q,ve),De("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+ve+")."),re}else return"data"in C&&De("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(C,T,O,K,Z=!1){if(C!==null){if(s[C]!==void 0)return s[C];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=T;if(T===s.RED&&(O===s.FLOAT&&(q=s.R32F),O===s.HALF_FLOAT&&(q=s.R16F),O===s.UNSIGNED_BYTE&&(q=s.R8)),T===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.R8UI),O===s.UNSIGNED_SHORT&&(q=s.R16UI),O===s.UNSIGNED_INT&&(q=s.R32UI),O===s.BYTE&&(q=s.R8I),O===s.SHORT&&(q=s.R16I),O===s.INT&&(q=s.R32I)),T===s.RG&&(O===s.FLOAT&&(q=s.RG32F),O===s.HALF_FLOAT&&(q=s.RG16F),O===s.UNSIGNED_BYTE&&(q=s.RG8)),T===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RG8UI),O===s.UNSIGNED_SHORT&&(q=s.RG16UI),O===s.UNSIGNED_INT&&(q=s.RG32UI),O===s.BYTE&&(q=s.RG8I),O===s.SHORT&&(q=s.RG16I),O===s.INT&&(q=s.RG32I)),T===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGB8UI),O===s.UNSIGNED_SHORT&&(q=s.RGB16UI),O===s.UNSIGNED_INT&&(q=s.RGB32UI),O===s.BYTE&&(q=s.RGB8I),O===s.SHORT&&(q=s.RGB16I),O===s.INT&&(q=s.RGB32I)),T===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),O===s.UNSIGNED_INT&&(q=s.RGBA32UI),O===s.BYTE&&(q=s.RGBA8I),O===s.SHORT&&(q=s.RGBA16I),O===s.INT&&(q=s.RGBA32I)),T===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),T===s.RGBA){const ve=Z?Zl:ut.getTransfer(K);O===s.FLOAT&&(q=s.RGBA32F),O===s.HALF_FLOAT&&(q=s.RGBA16F),O===s.UNSIGNED_BYTE&&(q=ve===St?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(C,T){let O;return C?T===null||T===Qi||T===wa?O=s.DEPTH24_STENCIL8:T===Mi?O=s.DEPTH32F_STENCIL8:T===Ea&&(O=s.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qi||T===wa?O=s.DEPTH_COMPONENT24:T===Mi?O=s.DEPTH_COMPONENT32F:T===Ea&&(O=s.DEPTH_COMPONENT16),O}function b(C,T){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==nn&&C.minFilter!==sn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function E(C){const T=C.target;T.removeEventListener("dispose",E),R(T),T.isVideoTexture&&h.delete(T)}function w(C){const T=C.target;T.removeEventListener("dispose",w),M(T)}function R(C){const T=n.get(C);if(T.__webglInit===void 0)return;const O=C.source,K=f.get(O);if(K){const Z=K[T.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&v(C),Object.keys(K).length===0&&f.delete(O)}n.remove(C)}function v(C){const T=n.get(C);s.deleteTexture(T.__webglTexture);const O=C.source,K=f.get(O);delete K[T.__cacheKey],o.memory.textures--}function M(C){const T=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let Z=0;Z<T.__webglFramebuffer[K].length;Z++)s.deleteFramebuffer(T.__webglFramebuffer[K][Z]);else s.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)s.deleteFramebuffer(T.__webglFramebuffer[K]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const O=C.textures;for(let K=0,Z=O.length;K<Z;K++){const q=n.get(O[K]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(C)}let P=0;function L(){P=0}function U(){const C=P;return C>=i.maxTextures&&De("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function F(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function H(C,T){const O=n.get(C);if(C.isVideoTexture&&nt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const K=C.image;if(K===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,C,T);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+T)}function V(C,T){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){j(O,C,T);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+T)}function k(C,T){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){j(O,C,T);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+T)}function W(C,T){const O=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){J(O,C,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+T)}const ee={[yo]:s.REPEAT,[Yi]:s.CLAMP_TO_EDGE,[Kl]:s.MIRRORED_REPEAT},D={[nn]:s.NEAREST,[mm]:s.NEAREST_MIPMAP_NEAREST,[ea]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[Ul]:s.LINEAR_MIPMAP_NEAREST,[xs]:s.LINEAR_MIPMAP_LINEAR},ne={[i0]:s.NEVER,[l0]:s.ALWAYS,[s0]:s.LESS,[cf]:s.LEQUAL,[r0]:s.EQUAL,[hf]:s.GEQUAL,[o0]:s.GREATER,[a0]:s.NOTEQUAL};function Ce(C,T){if(T.type===Mi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===sn||T.magFilter===Ul||T.magFilter===ea||T.magFilter===xs||T.minFilter===sn||T.minFilter===Ul||T.minFilter===ea||T.minFilter===xs)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ee[T.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ee[T.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ee[T.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,D[T.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,D[T.minFilter]),T.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ne[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===nn||T.minFilter!==ea&&T.minFilter!==xs||T.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ne(C,T){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",E));const K=T.source;let Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));const q=F(T);if(q!==C.__cacheKey){Z[q]===void 0&&(Z[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[q].usedTimes++;const ve=Z[C.__cacheKey];ve!==void 0&&(Z[C.__cacheKey].usedTimes--,ve.usedTimes===0&&v(T)),C.__cacheKey=q,C.__webglTexture=Z[q].texture}return O}function Ue(C,T,O){return Math.floor(Math.floor(C/O)/T)}function Ve(C,T,O,K){const q=C.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,O,K,T.data);else{q.sort((se,oe)=>se.start-oe.start);let ve=0;for(let se=1;se<q.length;se++){const oe=q[ve],Me=q[se],we=oe.start+oe.count,ae=Ue(Me.start,T.width,4),$e=Ue(oe.start,T.width,4);Me.start<=we+1&&ae===$e&&Ue(Me.start+Me.count-1,T.width,4)===ae?oe.count=Math.max(oe.count,Me.start+Me.count-oe.start):(++ve,q[ve]=Me)}q.length=ve+1;const re=s.getParameter(s.UNPACK_ROW_LENGTH),Ee=s.getParameter(s.UNPACK_SKIP_PIXELS),be=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let se=0,oe=q.length;se<oe;se++){const Me=q[se],we=Math.floor(Me.start/4),ae=Math.ceil(Me.count/4),$e=we%T.width,I=Math.floor(we/T.width),he=ae,ie=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,$e),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),t.texSubImage2D(s.TEXTURE_2D,0,$e,I,he,ie,O,K,T.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),s.pixelStorei(s.UNPACK_SKIP_ROWS,be)}}function j(C,T,O){let K=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=s.TEXTURE_3D);const Z=Ne(C,T),q=T.source;t.bindTexture(K,C.__webglTexture,s.TEXTURE0+O);const ve=n.get(q);if(q.version!==ve.__version||Z===!0){t.activeTexture(s.TEXTURE0+O);const re=ut.getPrimaries(ut.workingColorSpace),Ee=T.colorSpace===ks?null:ut.getPrimaries(T.colorSpace),be=T.colorSpace===ks||re===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let se=g(T.image,!1,i.maxTextureSize);se=Ge(T,se);const oe=r.convert(T.format,T.colorSpace),Me=r.convert(T.type);let we=S(T.internalFormat,oe,Me,T.colorSpace,T.isVideoTexture);Ce(K,T);let ae;const $e=T.mipmaps,I=T.isVideoTexture!==!0,he=ve.__version===void 0||Z===!0,ie=q.dataReady,ue=b(T,se);if(T.isDepthTexture)we=y(T.format===gr,T.type),he&&(I?t.texStorage2D(s.TEXTURE_2D,1,we,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,we,se.width,se.height,0,oe,Me,null));else if(T.isDataTexture)if($e.length>0){I&&he&&t.texStorage2D(s.TEXTURE_2D,ue,we,$e[0].width,$e[0].height);for(let te=0,Q=$e.length;te<Q;te++)ae=$e[te],I?ie&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ae.width,ae.height,oe,Me,ae.data):t.texImage2D(s.TEXTURE_2D,te,we,ae.width,ae.height,0,oe,Me,ae.data);T.generateMipmaps=!1}else I?(he&&t.texStorage2D(s.TEXTURE_2D,ue,we,se.width,se.height),ie&&Ve(T,se,oe,Me)):t.texImage2D(s.TEXTURE_2D,0,we,se.width,se.height,0,oe,Me,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){I&&he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,we,$e[0].width,$e[0].height,se.depth);for(let te=0,Q=$e.length;te<Q;te++)if(ae=$e[te],T.format!==bi)if(oe!==null)if(I){if(ie)if(T.layerUpdates.size>0){const ce=Hd(ae.width,ae.height,T.format,T.type);for(const Oe of T.layerUpdates){const pt=ae.data.subarray(Oe*ce/ae.data.BYTES_PER_ELEMENT,(Oe+1)*ce/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Oe,ae.width,ae.height,1,oe,pt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ae.width,ae.height,se.depth,oe,ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,we,ae.width,ae.height,se.depth,0,ae.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ie&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ae.width,ae.height,se.depth,oe,Me,ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,we,ae.width,ae.height,se.depth,0,oe,Me,ae.data)}else{I&&he&&t.texStorage2D(s.TEXTURE_2D,ue,we,$e[0].width,$e[0].height);for(let te=0,Q=$e.length;te<Q;te++)ae=$e[te],T.format!==bi?oe!==null?I?ie&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(s.TEXTURE_2D,te,we,ae.width,ae.height,0,ae.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ie&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ae.width,ae.height,oe,Me,ae.data):t.texImage2D(s.TEXTURE_2D,te,we,ae.width,ae.height,0,oe,Me,ae.data)}else if(T.isDataArrayTexture)if(I){if(he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,we,se.width,se.height,se.depth),ie)if(T.layerUpdates.size>0){const te=Hd(se.width,se.height,T.format,T.type);for(const Q of T.layerUpdates){const ce=se.data.subarray(Q*te/se.data.BYTES_PER_ELEMENT,(Q+1)*te/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,oe,Me,ce)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,oe,Me,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,se.width,se.height,se.depth,0,oe,Me,se.data);else if(T.isData3DTexture)I?(he&&t.texStorage3D(s.TEXTURE_3D,ue,we,se.width,se.height,se.depth),ie&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,oe,Me,se.data)):t.texImage3D(s.TEXTURE_3D,0,we,se.width,se.height,se.depth,0,oe,Me,se.data);else if(T.isFramebufferTexture){if(he)if(I)t.texStorage2D(s.TEXTURE_2D,ue,we,se.width,se.height);else{let te=se.width,Q=se.height;for(let ce=0;ce<ue;ce++)t.texImage2D(s.TEXTURE_2D,ce,we,te,Q,0,oe,Me,null),te>>=1,Q>>=1}}else if($e.length>0){if(I&&he){const te=Se($e[0]);t.texStorage2D(s.TEXTURE_2D,ue,we,te.width,te.height)}for(let te=0,Q=$e.length;te<Q;te++)ae=$e[te],I?ie&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,oe,Me,ae):t.texImage2D(s.TEXTURE_2D,te,we,oe,Me,ae);T.generateMipmaps=!1}else if(I){if(he){const te=Se(se);t.texStorage2D(s.TEXTURE_2D,ue,we,te.width,te.height)}ie&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe,Me,se)}else t.texImage2D(s.TEXTURE_2D,0,we,oe,Me,se);m(T)&&p(K),ve.__version=q.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function J(C,T,O){if(T.image.length!==6)return;const K=Ne(C,T),Z=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);const q=n.get(Z);if(Z.version!==q.__version||K===!0){t.activeTexture(s.TEXTURE0+O);const ve=ut.getPrimaries(ut.workingColorSpace),re=T.colorSpace===ks?null:ut.getPrimaries(T.colorSpace),Ee=T.colorSpace===ks||ve===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const be=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,oe=[];for(let Q=0;Q<6;Q++)!be&&!se?oe[Q]=g(T.image[Q],!0,i.maxCubemapSize):oe[Q]=se?T.image[Q].image:T.image[Q],oe[Q]=Ge(T,oe[Q]);const Me=oe[0],we=r.convert(T.format,T.colorSpace),ae=r.convert(T.type),$e=S(T.internalFormat,we,ae,T.colorSpace),I=T.isVideoTexture!==!0,he=q.__version===void 0||K===!0,ie=Z.dataReady;let ue=b(T,Me);Ce(s.TEXTURE_CUBE_MAP,T);let te;if(be){I&&he&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,$e,Me.width,Me.height);for(let Q=0;Q<6;Q++){te=oe[Q].mipmaps;for(let ce=0;ce<te.length;ce++){const Oe=te[ce];T.format!==bi?we!==null?I?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Oe.width,Oe.height,we,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,$e,Oe.width,Oe.height,0,Oe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Oe.width,Oe.height,we,ae,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,$e,Oe.width,Oe.height,0,we,ae,Oe.data)}}}else{if(te=T.mipmaps,I&&he){te.length>0&&ue++;const Q=Se(oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,$e,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){I?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,oe[Q].width,oe[Q].height,we,ae,oe[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,oe[Q].width,oe[Q].height,0,we,ae,oe[Q].data);for(let ce=0;ce<te.length;ce++){const pt=te[ce].image[Q].image;I?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,pt.width,pt.height,we,ae,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,$e,pt.width,pt.height,0,we,ae,pt.data)}}else{I?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,we,ae,oe[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,we,ae,oe[Q]);for(let ce=0;ce<te.length;ce++){const Oe=te[ce];I?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,we,ae,Oe.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,$e,we,ae,Oe.image[Q])}}}m(T)&&p(s.TEXTURE_CUBE_MAP),q.__version=Z.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function fe(C,T,O,K,Z,q){const ve=r.convert(O.format,O.colorSpace),re=r.convert(O.type),Ee=S(O.internalFormat,ve,re,O.colorSpace),be=n.get(T),se=n.get(O);if(se.__renderTarget=T,!be.__hasExternalTextures){const oe=Math.max(1,T.width>>q),Me=Math.max(1,T.height>>q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,Ee,oe,Me,T.depth,0,ve,re,null):t.texImage2D(Z,q,Ee,oe,Me,0,ve,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),_t(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Z,se.__webglTexture,0,N(T)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Z,se.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(C,T,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),T.depthBuffer){const K=T.depthTexture,Z=K&&K.isDepthTexture?K.type:null,q=y(T.stencilBuffer,Z),ve=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_t(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N(T),q,T.width,T.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,N(T),q,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,q,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,C)}else{const K=T.textures;for(let Z=0;Z<K.length;Z++){const q=K[Z],ve=r.convert(q.format,q.colorSpace),re=r.convert(q.type),Ee=S(q.internalFormat,ve,re,q.colorSpace);_t(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N(T),Ee,T.width,T.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,N(T),Ee,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(C,T,O){const K=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(T.depthTexture);if(Z.__renderTarget=T,(!Z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,T.depthTexture.addEventListener("dispose",E)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Ce(s.TEXTURE_CUBE_MAP,T.depthTexture);const be=r.convert(T.depthTexture.format),se=r.convert(T.depthTexture.type);let oe;T.depthTexture.format===ws?oe=s.DEPTH_COMPONENT24:T.depthTexture.format===gr&&(oe=s.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,oe,T.width,T.height,0,be,se,null)}}else H(T.depthTexture,0);const q=Z.__webglTexture,ve=N(T),re=K?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,Ee=T.depthTexture.format===gr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===ws)_t(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,re,q,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,re,q,0);else if(T.depthTexture.format===gr)_t(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,re,q,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,re,q,0);else throw new Error("Unknown depthTexture format")}function We(C){const T=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){const Z=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),T.__depthDisposeCallback=Z}T.__boundDepthTexture=K}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(O)for(let K=0;K<6;K++)ye(T.__webglFramebuffer[K],C,K);else{const K=C.texture.mipmaps;K&&K.length>0?ye(T.__webglFramebuffer[0],C,0):ye(T.__webglFramebuffer,C,0)}else if(O){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=s.createRenderbuffer(),Pe(T.__webglDepthbuffer[K],C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=T.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Pe(T.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(C,T,O){const K=n.get(C);T!==void 0&&fe(K.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&We(C)}function Te(C){const T=C.texture,O=n.get(C),K=n.get(T);C.addEventListener("dispose",w);const Z=C.textures,q=C.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=T.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(T.mipmaps&&T.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)O.__webglFramebuffer[re][Ee]=s.createFramebuffer()}else O.__webglFramebuffer[re]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<T.mipmaps.length;re++)O.__webglFramebuffer[re]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ve)for(let re=0,Ee=Z.length;re<Ee;re++){const be=n.get(Z[re]);be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&_t(C)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const Ee=Z[re];O.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[re]);const be=r.convert(Ee.format,Ee.colorSpace),se=r.convert(Ee.type),oe=S(Ee.internalFormat,be,se,Ee.colorSpace,C.isXRRenderTarget===!0),Me=N(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,oe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,O.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ce(s.TEXTURE_CUBE_MAP,T);for(let re=0;re<6;re++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)fe(O.__webglFramebuffer[re][Ee],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee);else fe(O.__webglFramebuffer[re],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(T)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let re=0,Ee=Z.length;re<Ee;re++){const be=Z[re],se=n.get(be);let oe=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,se.__webglTexture),Ce(oe,be),fe(O.__webglFramebuffer,C,be,s.COLOR_ATTACHMENT0+re,oe,0),m(be)&&p(oe)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,K.__webglTexture),Ce(re,T),T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)fe(O.__webglFramebuffer[Ee],C,T,s.COLOR_ATTACHMENT0,re,Ee);else fe(O.__webglFramebuffer,C,T,s.COLOR_ATTACHMENT0,re,0);m(T)&&p(re),t.unbindTexture()}C.depthBuffer&&We(C)}function He(C){const T=C.textures;for(let O=0,K=T.length;O<K;O++){const Z=T[O];if(m(Z)){const q=x(C),ve=n.get(Z).__webglTexture;t.bindTexture(q,ve),p(q),t.unbindTexture()}}}const Ze=[],Fe=[];function X(C){if(C.samples>0){if(_t(C)===!1){const T=C.textures,O=C.width,K=C.height;let Z=s.COLOR_BUFFER_BIT;const q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(C),re=T.length>1;if(re)for(let be=0;be<T.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Ee=C.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let be=0;be<T.length;be++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[be]);const se=n.get(T[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,se,0)}s.blitFramebuffer(0,0,O,K,0,0,O,K,Z,s.NEAREST),l===!0&&(Ze.length=0,Fe.length=0,Ze.push(s.COLOR_ATTACHMENT0+be),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ze.push(q),Fe.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Fe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let be=0;be<T.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,ve.__webglColorRenderbuffer[be]);const se=n.get(T[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const T=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function N(C){return Math.min(i.maxSamples,C.samples)}function _t(C){const T=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function nt(C){const T=o.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function Ge(C,T){const O=C.colorSpace,K=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Bn&&O!==ks&&(ut.getTransfer(O)===St?(K!==bi||Z!==ai)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",O)),T}function Se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=dt,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Rb(s,e){function t(n,i=ks){let r;const o=ut.getTransfer(i);if(n===ai)return s.UNSIGNED_BYTE;if(n===tf)return s.UNSIGNED_SHORT_4_4_4_4;if(n===nf)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xm)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===vm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===gm)return s.BYTE;if(n===_m)return s.SHORT;if(n===Ea)return s.UNSIGNED_SHORT;if(n===ef)return s.INT;if(n===Qi)return s.UNSIGNED_INT;if(n===Mi)return s.FLOAT;if(n===Es)return s.HALF_FLOAT;if(n===ym)return s.ALPHA;if(n===Sm)return s.RGB;if(n===bi)return s.RGBA;if(n===ws)return s.DEPTH_COMPONENT;if(n===gr)return s.DEPTH_STENCIL;if(n===sf)return s.RED;if(n===rf)return s.RED_INTEGER;if(n===So)return s.RG;if(n===of)return s.RG_INTEGER;if(n===af)return s.RGBA_INTEGER;if(n===Ol||n===Fl||n===Bl||n===kl)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ol)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gh||n===Wh||n===Xh||n===Yh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$h||n===qh||n===jh||n===Kh||n===Zh||n===Jh||n===Qh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$h||n===qh)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Kh)return r.COMPRESSED_R11_EAC;if(n===Zh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Jh)return r.COMPRESSED_RG11_EAC;if(n===Qh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===ou||n===au||n===lu||n===cu||n===hu||n===uu||n===fu||n===du)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===iu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===su)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ru)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ou)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===au)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===du)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pu||n===mu||n===gu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===pu)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_u||n===xu||n===vu||n===yu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_u)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wa?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Cb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pb=`
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

}`;class Lb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Om(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new di({vertexShader:Cb,fragmentShader:Pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wn(new Dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Db extends Lr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",m=new Lb,p={},x=t.getContextAttributes();let S=null,y=null;const b=[],E=[],w=new Be;let R=null;const v=new Mn;v.viewport=new Nt;const M=new Mn;M.viewport=new Nt;const P=[v,M],L=new Dx;let U=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=b[j];return J===void 0&&(J=new Zc,b[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=b[j];return J===void 0&&(J=new Zc,b[j]=J),J.getGripSpace()},this.getHand=function(j){let J=b[j];return J===void 0&&(J=new Zc,b[j]=J),J.getHandSpace()};function H(j){const J=E.indexOf(j.inputSource);if(J===-1)return;const fe=b[J];fe!==void 0&&(fe.update(j.inputSource,j.frame,c||o),fe.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",k);for(let j=0;j<b.length;j++){const J=E[j];J!==null&&(E[j]=null,b[j].disconnect(J))}U=null,F=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(S),d=null,f=null,u=null,i=null,y=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",V),i.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Pe=null,ye=null;x.depth&&(ye=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=x.stencil?gr:ws,Pe=x.stencil?wa:Qi);const We={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(We),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Yn(f.textureWidth,f.textureHeight,{format:bi,type:ai,depthTexture:new La(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Yn(d.framebufferWidth,d.framebufferHeight,{format:bi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(j){for(let J=0;J<j.removed.length;J++){const fe=j.removed[J],Pe=E.indexOf(fe);Pe>=0&&(E[Pe]=null,b[Pe].disconnect(fe))}for(let J=0;J<j.added.length;J++){const fe=j.added[J];let Pe=E.indexOf(fe);if(Pe===-1){for(let We=0;We<b.length;We++)if(We>=E.length){E.push(fe),Pe=We;break}else if(E[We]===null){E[We]=fe,Pe=We;break}if(Pe===-1)break}const ye=b[Pe];ye&&ye.connect(fe)}}const W=new B,ee=new B;function D(j,J,fe){W.setFromMatrixPosition(J.matrixWorld),ee.setFromMatrixPosition(fe.matrixWorld);const Pe=W.distanceTo(ee),ye=J.projectionMatrix.elements,We=fe.projectionMatrix.elements,dt=ye[14]/(ye[10]-1),Te=ye[14]/(ye[10]+1),He=(ye[9]+1)/ye[5],Ze=(ye[9]-1)/ye[5],Fe=(ye[8]-1)/ye[0],X=(We[8]+1)/We[0],N=dt*Fe,_t=dt*X,nt=Pe/(-Fe+X),Ge=nt*-Fe;if(J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ge),j.translateZ(nt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ye[10]===-1)j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Se=dt+nt,C=Te+nt,T=N-Ge,O=_t+(Pe-Ge),K=He*Te/C*Se,Z=Ze*Te/C*Se;j.projectionMatrix.makePerspective(T,O,K,Z,Se,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ne(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let J=j.near,fe=j.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),L.near=M.near=v.near=J,L.far=M.far=v.far=fe,(U!==L.near||F!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,F=L.far),L.layers.mask=j.layers.mask|6,v.layers.mask=L.layers.mask&3,M.layers.mask=L.layers.mask&5;const Pe=j.parent,ye=L.cameras;ne(L,Pe);for(let We=0;We<ye.length;We++)ne(ye[We],Pe);ye.length===2?D(L,v,M):L.projectionMatrix.copy(v.projectionMatrix),Ce(j,L,Pe)};function Ce(j,J,fe){fe===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Mo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(j){return p[j]};let Ne=null;function Ue(j,J){if(h=J.getViewerPose(c||o),_=J,h!==null){const fe=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Pe=!1;fe.length!==L.cameras.length&&(L.cameras.length=0,Pe=!0);for(let Te=0;Te<fe.length;Te++){const He=fe[Te];let Ze=null;if(d!==null)Ze=d.getViewport(He);else{const X=u.getViewSubImage(f,He);Ze=X.viewport,Te===0&&(e.setRenderTargetTextures(y,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(y))}let Fe=P[Te];Fe===void 0&&(Fe=new Mn,Fe.layers.enable(Te),Fe.viewport=new Nt,P[Te]=Fe),Fe.matrix.fromArray(He.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(He.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Te===0&&(L.matrix.copy(Fe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Pe===!0&&L.cameras.push(Fe)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const Te=u.getDepthInformation(fe[0]);Te&&Te.isValid&&Te.texture&&m.init(Te,i.renderState)}if(ye&&ye.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let Te=0;Te<fe.length;Te++){const He=fe[Te].camera;if(He){let Ze=p[He];Ze||(Ze=new Om,p[He]=Ze);const Fe=u.getCameraImage(He);Ze.sourceTexture=Fe}}}}for(let fe=0;fe<b.length;fe++){const Pe=E[fe],ye=b[fe];Pe!==null&&ye!==void 0&&ye.update(Pe,J,c||o)}Ne&&Ne(j,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const Ve=new Wm;Ve.setAnimationLoop(Ue),this.setAnimationLoop=function(j){Ne=j},this.dispose=function(){}}}const ar=new ts,Ib=new tt;function Nb(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Pm(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),S=x.envMap,y=x.envMapRotation;S&&(m.envMap.value=S,ar.copy(y),ar.x*=-1,ar.y*=-1,ar.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.envMapRotation.value.setFromMatrix4(Ib.makeRotationFromEuler(ar)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ub(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const y=S.program;n.uniformBlockBinding(x,y)}function c(x,S){let y=i[x.id];y===void 0&&(_(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));const b=S.program;n.updateUBOMapping(x,b);const E=e.render.frame;r[x.id]!==E&&(f(x),r[x.id]=E)}function h(x){const S=u();x.__bindingPointIndex=S;const y=s.createBuffer(),b=x.__size,E=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,b,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const S=i[x.id],y=x.uniforms,b=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,w=y.length;E<w;E++){const R=Array.isArray(y[E])?y[E]:[y[E]];for(let v=0,M=R.length;v<M;v++){const P=R[v];if(d(P,E,v,b)===!0){const L=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let H=0;H<U.length;H++){const V=U[H],k=g(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,L+F,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,F),F+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,S,y,b){const E=x.value,w=S+"_"+y;if(b[w]===void 0)return typeof E=="number"||typeof E=="boolean"?b[w]=E:b[w]=E.clone(),!0;{const R=b[w];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return b[w]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function _(x){const S=x.uniforms;let y=0;const b=16;for(let w=0,R=S.length;w<R;w++){const v=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,P=v.length;M<P;M++){const L=v[M],U=Array.isArray(L.value)?L.value:[L.value];for(let F=0,H=U.length;F<H;F++){const V=U[F],k=g(V),W=y%b,ee=W%k.boundary,D=W+ee;y+=ee,D!==0&&b-D<k.storage&&(y+=b-D),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=k.storage}}}const E=y%b;return E>0&&(y+=b-E),x.__size=y,x.__cache={},this}function g(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):De("WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}const Ob=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function Fb(){return Fi===null&&(Fi=new pf(Ob,16,16,So,Es),Fi.name="DFG_LUT",Fi.minFilter=sn,Fi.magFilter=sn,Fi.wrapS=Yi,Fi.wrapT=Yi,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class Tc{constructor(e={}){const{canvas:t=h0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=ai}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const g=d,m=new Set([af,of,rf]),p=new Set([ai,Qi,Ea,wa,tf,nf]),x=new Uint32Array(4),S=new Int32Array(4);let y=null,b=null;const E=[],w=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let M=!1;this._outputColorSpace=pn;let P=0,L=0,U=null,F=-1,H=null;const V=new Nt,k=new Nt;let W=null;const ee=new Ke(0);let D=0,ne=t.width,Ce=t.height,Ne=1,Ue=null,Ve=null;const j=new Nt(0,0,ne,Ce),J=new Nt(0,0,ne,Ce);let fe=!1;const Pe=new gf;let ye=!1,We=!1;const dt=new tt,Te=new B,He=new Nt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function X(){return U===null?Ne:1}let N=n;function _t(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r182"),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",ge,!1),N===null){const z="webgl2";if(N=_t(z,A),N===null)throw _t(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ye("WebGLRenderer: "+A.message),A}let nt,Ge,Se,C,T,O,K,Z,q,ve,re,Ee,be,se,oe,Me,we,ae,$e,I,he,ie,ue,te;function Q(){nt=new FS(N),nt.init(),ie=new Rb(N,nt),Ge=new RS(N,nt,e,ie),Se=new wb(N,nt),Ge.reversedDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),C=new zS(N),T=new ub,O=new Ab(N,nt,Se,T,Ge,ie,C),K=new PS(v),Z=new OS(v),q=new Wx(N),ue=new wS(N,q),ve=new BS(N,q,C,ue),re=new HS(N,ve,q,C),$e=new VS(N,Ge,O),Me=new CS(T),Ee=new hb(v,K,Z,nt,Ge,ue,Me),be=new Nb(v,T),se=new db,oe=new vb(nt),ae=new ES(v,K,Z,Se,re,_,l),we=new Tb(v,re,Ge),te=new Ub(N,C,Ge,Se),I=new AS(N,nt,C),he=new kS(N,nt,C),C.programs=Ee.programs,v.capabilities=Ge,v.extensions=nt,v.properties=T,v.renderLists=se,v.shadowMap=we,v.state=Se,v.info=C}Q(),g!==ai&&(R=new WS(g,t.width,t.height,i,r));const ce=new Db(v,N);this.xr=ce,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=nt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=nt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(A){A!==void 0&&(Ne=A,this.setSize(ne,Ce,!1))},this.getSize=function(A){return A.set(ne,Ce)},this.setSize=function(A,z,$=!0){if(ce.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,Ce=z,t.width=Math.floor(A*Ne),t.height=Math.floor(z*Ne),$===!0&&(t.style.width=A+"px",t.style.height=z+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(ne*Ne,Ce*Ne).floor()},this.setDrawingBufferSize=function(A,z,$){ne=A,Ce=z,Ne=$,t.width=Math.floor(A*$),t.height=Math.floor(z*$),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(g===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,z,$,Y){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,z,$,Y),Se.viewport(V.copy(j).multiplyScalar(Ne).round())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,z,$,Y){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,z,$,Y),Se.scissor(k.copy(J).multiplyScalar(Ne).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(A){Se.setScissorTest(fe=A)},this.setOpaqueSort=function(A){Ue=A},this.setTransparentSort=function(A){Ve=A},this.getClearColor=function(A){return A.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,$=!0){let Y=0;if(A){let G=!1;if(U!==null){const le=U.texture.format;G=m.has(le)}if(G){const le=U.texture.type,_e=p.has(le),de=ae.getClearColor(),xe=ae.getClearAlpha(),Le=de.r,Xe=de.g,ke=de.b;_e?(x[0]=Le,x[1]=Xe,x[2]=ke,x[3]=xe,N.clearBufferuiv(N.COLOR,0,x)):(S[0]=Le,S[1]=Xe,S[2]=ke,S[3]=xe,N.clearBufferiv(N.COLOR,0,S))}else Y|=N.COLOR_BUFFER_BIT}z&&(Y|=N.DEPTH_BUFFER_BIT),$&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ae.dispose(),se.dispose(),oe.dispose(),T.dispose(),K.dispose(),Z.dispose(),re.dispose(),ue.dispose(),te.dispose(),Ee.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Gt),ce.removeEventListener("sessionend",rt),vt.stop()};function Oe(A){A.preventDefault(),Ql("WebGLRenderer: Context Lost."),M=!0}function pt(){Ql("WebGLRenderer: Context Restored."),M=!1;const A=C.autoReset,z=we.enabled,$=we.autoUpdate,Y=we.needsUpdate,G=we.type;Q(),C.autoReset=A,we.enabled=z,we.autoUpdate=$,we.needsUpdate=Y,we.type=G}function ge(A){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Re(A){const z=A.target;z.removeEventListener("dispose",Re),Je(z)}function Je(A){pe(A),T.remove(A)}function pe(A){const z=T.get(A).programs;z!==void 0&&(z.forEach(function($){Ee.releaseProgram($)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,$,Y,G,le){z===null&&(z=Ze);const _e=G.isMesh&&G.matrixWorld.determinant()<0,de=Zt(A,z,$,Y,G);Se.setMaterial(Y,_e);let xe=$.index,Le=1;if(Y.wireframe===!0){if(xe=ve.getWireframeAttribute($),xe===void 0)return;Le=2}const Xe=$.drawRange,ke=$.attributes.position;let ot=Xe.start*Le,Et=(Xe.start+Xe.count)*Le;le!==null&&(ot=Math.max(ot,le.start*Le),Et=Math.min(Et,(le.start+le.count)*Le)),xe!==null?(ot=Math.max(ot,0),Et=Math.min(Et,xe.count)):ke!=null&&(ot=Math.max(ot,0),Et=Math.min(Et,ke.count));const zt=Et-ot;if(zt<0||zt===1/0)return;ue.setup(G,Y,de,$,xe);let Vt,Rt=I;if(xe!==null&&(Vt=q.get(xe),Rt=he,Rt.setIndex(Vt)),G.isMesh)Y.wireframe===!0?(Se.setLineWidth(Y.wireframeLinewidth*X()),Rt.setMode(N.LINES)):Rt.setMode(N.TRIANGLES);else if(G.isLine){let ze=Y.linewidth;ze===void 0&&(ze=1),Se.setLineWidth(ze*X()),G.isLineSegments?Rt.setMode(N.LINES):G.isLineLoop?Rt.setMode(N.LINE_LOOP):Rt.setMode(N.LINE_STRIP)}else G.isPoints?Rt.setMode(N.POINTS):G.isSprite&&Rt.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Pa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ze=G._multiDrawStarts,yt=G._multiDrawCounts,gt=G._multiDrawCount,Qn=xe?q.get(xe).bytesPerElement:1,Ur=T.get(Y).currentProgram.getUniforms();for(let ei=0;ei<gt;ei++)Ur.setValue(N,"_gl_DrawID",ei),Rt.render(ze[ei]/Qn,yt[ei])}else if(G.isInstancedMesh)Rt.renderInstances(ot,zt,G.count);else if($.isInstancedBufferGeometry){const ze=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,yt=Math.min($.instanceCount,ze);Rt.renderInstances(ot,zt,yt)}else Rt.render(ot,zt)};function qe(A,z,$){A.transparent===!0&&A.side===Wi&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,Tt(A,z,$),A.side=Ts,A.needsUpdate=!0,Tt(A,z,$),A.side=Wi):Tt(A,z,$)}this.compile=function(A,z,$=null){$===null&&($=A),b=oe.get($),b.init(z),w.push(b),$.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),A!==$&&A.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights();const Y=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const le=G.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){const de=le[_e];qe(de,$,G),Y.add(de)}else qe(le,$,G),Y.add(le)}),b=w.pop(),Y},this.compileAsync=function(A,z,$=null){const Y=this.compile(A,z,$);return new Promise(G=>{function le(){if(Y.forEach(function(_e){T.get(_e).currentProgram.isReady()&&Y.delete(_e)}),Y.size===0){G(A);return}setTimeout(le,10)}nt.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ie=null;function je(A){Ie&&Ie(A)}function Gt(){vt.stop()}function rt(){vt.start()}const vt=new Wm;vt.setAnimationLoop(je),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(A){Ie=A,ce.setAnimationLoop(A),A===null?vt.stop():vt.start()},ce.addEventListener("sessionstart",Gt),ce.addEventListener("sessionend",rt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const $=ce.enabled===!0&&ce.isPresenting===!0,Y=R!==null&&(U===null||$)&&R.begin(v,U);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(z),z=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,U),b=oe.get(A,w.length),b.init(z),w.push(b),dt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Pe.setFromProjectionMatrix(dt,$i,z.reversedDepth),We=this.localClippingEnabled,ye=Me.init(this.clippingPlanes,We),y=se.get(A,E.length),y.init(),E.push(y),ce.enabled===!0&&ce.isPresenting===!0){const _e=v.xr.getDepthSensingMesh();_e!==null&&Yt(_e,z,-1/0,v.sortObjects)}Yt(A,z,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(Ue,Ve),Fe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Fe&&ae.addToRenderList(y,A),this.info.render.frame++,ye===!0&&Me.beginShadows();const G=b.state.shadowsArray;if(we.render(G,A,z),ye===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&R.hasRenderPass())===!1){const _e=y.opaque,de=y.transmissive;if(b.setupLights(),z.isArrayCamera){const xe=z.cameras;if(de.length>0)for(let Le=0,Xe=xe.length;Le<Xe;Le++){const ke=xe[Le];At(_e,de,A,ke)}Fe&&ae.render(A);for(let Le=0,Xe=xe.length;Le<Xe;Le++){const ke=xe[Le];It(y,A,ke,ke.viewport)}}else de.length>0&&At(_e,de,A,z),Fe&&ae.render(A),It(y,A,z)}U!==null&&L===0&&(O.updateMultisampleRenderTarget(U),O.updateRenderTargetMipmap(U)),Y&&R.end(v),A.isScene===!0&&A.onAfterRender(v,A,z),ue.resetDefaultState(),F=-1,H=null,w.pop(),w.length>0?(b=w[w.length-1],ye===!0&&Me.setGlobalState(v.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?y=E[E.length-1]:y=null};function Yt(A,z,$,Y){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Pe.intersectsSprite(A)){Y&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4(dt);const _e=re.update(A),de=A.material;de.visible&&y.push(A,_e,de,$,He.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Pe.intersectsObject(A))){const _e=re.update(A),de=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),He.copy(_e.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4(dt)),Array.isArray(de)){const xe=_e.groups;for(let Le=0,Xe=xe.length;Le<Xe;Le++){const ke=xe[Le],ot=de[ke.materialIndex];ot&&ot.visible&&y.push(A,_e,ot,$,He.z,ke)}}else de.visible&&y.push(A,_e,de,$,He.z,null)}}const le=A.children;for(let _e=0,de=le.length;_e<de;_e++)Yt(le[_e],z,$,Y)}function It(A,z,$,Y){const{opaque:G,transmissive:le,transparent:_e}=A;b.setupLightsView($),ye===!0&&Me.setGlobalState(v.clippingPlanes,$),Y&&Se.viewport(V.copy(Y)),G.length>0&&mt(G,z,$),le.length>0&&mt(le,z,$),_e.length>0&&mt(_e,z,$),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function At(A,z,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){const ot=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new Yn(1,1,{generateMipmaps:!0,type:ot?Es:ai,minFilter:xs,samples:Ge.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const le=b.state.transmissionRenderTarget[Y.id],_e=Y.viewport||V;le.setSize(_e.z*v.transmissionResolutionScale,_e.w*v.transmissionResolutionScale);const de=v.getRenderTarget(),xe=v.getActiveCubeFace(),Le=v.getActiveMipmapLevel();v.setRenderTarget(le),v.getClearColor(ee),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear(),Fe&&ae.render($);const Xe=v.toneMapping;v.toneMapping=Ki;const ke=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),ye===!0&&Me.setGlobalState(v.clippingPlanes,Y),mt(A,$,Y),O.updateMultisampleRenderTarget(le),O.updateRenderTargetMipmap(le),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Et=0,zt=z.length;Et<zt;Et++){const Vt=z[Et],{object:Rt,geometry:ze,material:yt,group:gt}=Vt;if(yt.side===Wi&&Rt.layers.test(Y.layers)){const Qn=yt.side;yt.side=Xn,yt.needsUpdate=!0,zn(Rt,$,Y,ze,yt,gt),yt.side=Qn,yt.needsUpdate=!0,ot=!0}}ot===!0&&(O.updateMultisampleRenderTarget(le),O.updateRenderTargetMipmap(le))}v.setRenderTarget(de,xe,Le),v.setClearColor(ee,D),ke!==void 0&&(Y.viewport=ke),v.toneMapping=Xe}function mt(A,z,$){const Y=z.isScene===!0?z.overrideMaterial:null;for(let G=0,le=A.length;G<le;G++){const _e=A[G],{object:de,geometry:xe,group:Le}=_e;let Xe=_e.material;Xe.allowOverride===!0&&Y!==null&&(Xe=Y),de.layers.test($.layers)&&zn(de,z,$,xe,Xe,Le)}}function zn(A,z,$,Y,G,le){A.onBeforeRender(v,z,$,Y,G,le),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(v,z,$,Y,A,le),G.transparent===!0&&G.side===Wi&&G.forceSinglePass===!1?(G.side=Xn,G.needsUpdate=!0,v.renderBufferDirect($,z,Y,G,A,le),G.side=Ts,G.needsUpdate=!0,v.renderBufferDirect($,z,Y,G,A,le),G.side=Wi):v.renderBufferDirect($,z,Y,G,A,le),A.onAfterRender(v,z,$,Y,G,le)}function Tt(A,z,$){z.isScene!==!0&&(z=Ze);const Y=T.get(A),G=b.state.lights,le=b.state.shadowsArray,_e=G.state.version,de=Ee.getParameters(A,G.state,le,z,$),xe=Ee.getProgramCacheKey(de);let Le=Y.programs;Y.environment=A.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(A.isMeshStandardMaterial?Z:K).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Le===void 0&&(A.addEventListener("dispose",Re),Le=new Map,Y.programs=Le);let Xe=Le.get(xe);if(Xe!==void 0){if(Y.currentProgram===Xe&&Y.lightsStateVersion===_e)return Jn(A,de),Xe}else de.uniforms=Ee.getUniforms(A),A.onBeforeCompile(de,v),Xe=Ee.acquireProgram(de,xe),Le.set(xe,Xe),Y.uniforms=de.uniforms;const ke=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=Me.uniform),Jn(A,de),Y.needsLights=an(A),Y.lightsStateVersion=_e,Y.needsLights&&(ke.ambientLightColor.value=G.state.ambient,ke.lightProbe.value=G.state.probe,ke.directionalLights.value=G.state.directional,ke.directionalLightShadows.value=G.state.directionalShadow,ke.spotLights.value=G.state.spot,ke.spotLightShadows.value=G.state.spotShadow,ke.rectAreaLights.value=G.state.rectArea,ke.ltc_1.value=G.state.rectAreaLTC1,ke.ltc_2.value=G.state.rectAreaLTC2,ke.pointLights.value=G.state.point,ke.pointLightShadows.value=G.state.pointShadow,ke.hemisphereLights.value=G.state.hemi,ke.directionalShadowMap.value=G.state.directionalShadowMap,ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ke.spotShadowMap.value=G.state.spotShadowMap,ke.spotLightMatrix.value=G.state.spotLightMatrix,ke.spotLightMap.value=G.state.spotLightMap,ke.pointShadowMap.value=G.state.pointShadowMap,ke.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Xe,Y.uniformsList=null,Xe}function _n(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=zl.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Jn(A,z){const $=T.get(A);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function Zt(A,z,$,Y,G){z.isScene!==!0&&(z=Ze),O.resetTextureUnits();const le=z.fog,_e=Y.isMeshStandardMaterial?z.environment:null,de=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Bn,xe=(Y.isMeshStandardMaterial?Z:K).get(Y.envMap||_e),Le=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Xe=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ke=!!$.morphAttributes.position,ot=!!$.morphAttributes.normal,Et=!!$.morphAttributes.color;let zt=Ki;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(zt=v.toneMapping);const Vt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Rt=Vt!==void 0?Vt.length:0,ze=T.get(Y),yt=b.state.lights;if(ye===!0&&(We===!0||A!==H)){const An=A===H&&Y.id===F;Me.setState(Y,A,An)}let gt=!1;Y.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==yt.state.version||ze.outputColorSpace!==de||G.isBatchedMesh&&ze.batching===!1||!G.isBatchedMesh&&ze.batching===!0||G.isBatchedMesh&&ze.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ze.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ze.instancing===!1||!G.isInstancedMesh&&ze.instancing===!0||G.isSkinnedMesh&&ze.skinning===!1||!G.isSkinnedMesh&&ze.skinning===!0||G.isInstancedMesh&&ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ze.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ze.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ze.instancingMorph===!1&&G.morphTexture!==null||ze.envMap!==xe||Y.fog===!0&&ze.fog!==le||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Me.numPlanes||ze.numIntersection!==Me.numIntersection)||ze.vertexAlphas!==Le||ze.vertexTangents!==Xe||ze.morphTargets!==ke||ze.morphNormals!==ot||ze.morphColors!==Et||ze.toneMapping!==zt||ze.morphTargetsCount!==Rt)&&(gt=!0):(gt=!0,ze.__version=Y.version);let Qn=ze.currentProgram;gt===!0&&(Qn=Tt(Y,z,G));let Ur=!1,ei=!1,ko=!1;const Lt=Qn.getUniforms(),Vn=ze.uniforms;if(Se.useProgram(Qn.program)&&(Ur=!0,ei=!0,ko=!0),Y.id!==F&&(F=Y.id,ei=!0),Ur||H!==A){Se.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Lt.setValue(N,"projectionMatrix",A.projectionMatrix),Lt.setValue(N,"viewMatrix",A.matrixWorldInverse);const Hn=Lt.map.cameraPosition;Hn!==void 0&&Hn.setValue(N,Te.setFromMatrixPosition(A.matrixWorld)),Ge.logarithmicDepthBuffer&&Lt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Lt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,ei=!0,ko=!0)}if(ze.needsLights&&(yt.state.directionalShadowMap.length>0&&Lt.setValue(N,"directionalShadowMap",yt.state.directionalShadowMap,O),yt.state.spotShadowMap.length>0&&Lt.setValue(N,"spotShadowMap",yt.state.spotShadowMap,O),yt.state.pointShadowMap.length>0&&Lt.setValue(N,"pointShadowMap",yt.state.pointShadowMap,O)),G.isSkinnedMesh){Lt.setOptional(N,G,"bindMatrix"),Lt.setOptional(N,G,"bindMatrixInverse");const An=G.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Lt.setValue(N,"boneTexture",An.boneTexture,O))}G.isBatchedMesh&&(Lt.setOptional(N,G,"batchingTexture"),Lt.setValue(N,"batchingTexture",G._matricesTexture,O),Lt.setOptional(N,G,"batchingIdTexture"),Lt.setValue(N,"batchingIdTexture",G._indirectTexture,O),Lt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&Lt.setValue(N,"batchingColorTexture",G._colorsTexture,O));const gi=$.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&$e.update(G,$,Qn),(ei||ze.receiveShadow!==G.receiveShadow)&&(ze.receiveShadow=G.receiveShadow,Lt.setValue(N,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Vn.envMap.value=xe,Vn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(Vn.envMapIntensity.value=z.environmentIntensity),Vn.dfgLUT!==void 0&&(Vn.dfgLUT.value=Fb()),ei&&(Lt.setValue(N,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&Jt(Vn,ko),le&&Y.fog===!0&&be.refreshFogUniforms(Vn,le),be.refreshMaterialUniforms(Vn,Y,Ne,Ce,b.state.transmissionRenderTarget[A.id]),zl.upload(N,_n(ze),Vn,O)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(zl.upload(N,_n(ze),Vn,O),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Lt.setValue(N,"center",G.center),Lt.setValue(N,"modelViewMatrix",G.modelViewMatrix),Lt.setValue(N,"normalMatrix",G.normalMatrix),Lt.setValue(N,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const An=Y.uniformsGroups;for(let Hn=0,Cc=An.length;Hn<Cc;Hn++){const tr=An[Hn];te.update(tr,Qn),te.bind(tr,Qn)}}return Qn}function Jt(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function an(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,z,$){const Y=T.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),T.get(A.texture).__webglTexture=z,T.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const $=T.get(A);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0};const rs=N.createFramebuffer();this.setRenderTarget=function(A,z=0,$=0){U=A,P=z,L=$;let Y=null,G=!1,le=!1;if(A){const de=T.get(A);if(de.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(N.FRAMEBUFFER,de.__webglFramebuffer),V.copy(A.viewport),k.copy(A.scissor),W=A.scissorTest,Se.viewport(V),Se.scissor(k),Se.setScissorTest(W),F=-1;return}else if(de.__webglFramebuffer===void 0)O.setupRenderTarget(A);else if(de.__hasExternalTextures)O.rebindTextures(A,T.get(A.texture).__webglTexture,T.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(de.__boundDepthTexture!==Xe){if(Xe!==null&&T.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(A)}}const xe=A.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(le=!0);const Le=T.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Le[z])?Y=Le[z][$]:Y=Le[z],G=!0):A.samples>0&&O.useMultisampledRTT(A)===!1?Y=T.get(A).__webglMultisampledFramebuffer:Array.isArray(Le)?Y=Le[$]:Y=Le,V.copy(A.viewport),k.copy(A.scissor),W=A.scissorTest}else V.copy(j).multiplyScalar(Ne).floor(),k.copy(J).multiplyScalar(Ne).floor(),W=fe;if($!==0&&(Y=rs),Se.bindFramebuffer(N.FRAMEBUFFER,Y)&&Se.drawBuffers(A,Y),Se.viewport(V),Se.scissor(k),Se.setScissorTest(W),G){const de=T.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,de.__webglTexture,$)}else if(le){const de=z;for(let xe=0;xe<A.textures.length;xe++){const Le=T.get(A.textures[xe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xe,Le.__webglTexture,$,de)}}else if(A!==null&&$!==0){const de=T.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,de.__webglTexture,$)}F=-1},this.readRenderTargetPixels=function(A,z,$,Y,G,le,_e,de=0){if(!(A&&A.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=T.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe){Se.bindFramebuffer(N.FRAMEBUFFER,xe);try{const Le=A.textures[de],Xe=Le.format,ke=Le.type;if(!Ge.textureFormatReadable(Xe)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(ke)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Y&&$>=0&&$<=A.height-G&&(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de),N.readPixels(z,$,Y,G,ie.convert(Xe),ie.convert(ke),le))}finally{const Le=U!==null?T.get(U).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(A,z,$,Y,G,le,_e,de=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=T.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe)if(z>=0&&z<=A.width-Y&&$>=0&&$<=A.height-G){Se.bindFramebuffer(N.FRAMEBUFFER,xe);const Le=A.textures[de],Xe=Le.format,ke=Le.type;if(!Ge.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ot),N.bufferData(N.PIXEL_PACK_BUFFER,le.byteLength,N.STREAM_READ),A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+de),N.readPixels(z,$,Y,G,ie.convert(Xe),ie.convert(ke),0);const Et=U!==null?T.get(U).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,Et);const zt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await u0(N,zt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ot),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,le),N.deleteBuffer(ot),N.deleteSync(zt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,$=0){const Y=Math.pow(2,-$),G=Math.floor(A.image.width*Y),le=Math.floor(A.image.height*Y),_e=z!==null?z.x:0,de=z!==null?z.y:0;O.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,_e,de,G,le),Se.unbindTexture()};const Nr=N.createFramebuffer(),ln=N.createFramebuffer();this.copyTextureToTexture=function(A,z,$=null,Y=null,G=0,le=null){le===null&&(G!==0?(Pa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=G,G=0):le=0);let _e,de,xe,Le,Xe,ke,ot,Et,zt;const Vt=A.isCompressedTexture?A.mipmaps[le]:A.image;if($!==null)_e=$.max.x-$.min.x,de=$.max.y-$.min.y,xe=$.isBox3?$.max.z-$.min.z:1,Le=$.min.x,Xe=$.min.y,ke=$.isBox3?$.min.z:0;else{const gi=Math.pow(2,-G);_e=Math.floor(Vt.width*gi),de=Math.floor(Vt.height*gi),A.isDataArrayTexture?xe=Vt.depth:A.isData3DTexture?xe=Math.floor(Vt.depth*gi):xe=1,Le=0,Xe=0,ke=0}Y!==null?(ot=Y.x,Et=Y.y,zt=Y.z):(ot=0,Et=0,zt=0);const Rt=ie.convert(z.format),ze=ie.convert(z.type);let yt;z.isData3DTexture?(O.setTexture3D(z,0),yt=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(O.setTexture2DArray(z,0),yt=N.TEXTURE_2D_ARRAY):(O.setTexture2D(z,0),yt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const gt=N.getParameter(N.UNPACK_ROW_LENGTH),Qn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ur=N.getParameter(N.UNPACK_SKIP_PIXELS),ei=N.getParameter(N.UNPACK_SKIP_ROWS),ko=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Vt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Vt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Le),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ke);const Lt=A.isDataArrayTexture||A.isData3DTexture,Vn=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const gi=T.get(A),An=T.get(z),Hn=T.get(gi.__renderTarget),Cc=T.get(An.__renderTarget);Se.bindFramebuffer(N.READ_FRAMEBUFFER,Hn.__webglFramebuffer),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,Cc.__webglFramebuffer);for(let tr=0;tr<xe;tr++)Lt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,T.get(A).__webglTexture,G,ke+tr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,T.get(z).__webglTexture,le,zt+tr)),N.blitFramebuffer(Le,Xe,_e,de,ot,Et,_e,de,N.DEPTH_BUFFER_BIT,N.NEAREST);Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||T.has(A)){const gi=T.get(A),An=T.get(z);Se.bindFramebuffer(N.READ_FRAMEBUFFER,Nr),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,ln);for(let Hn=0;Hn<xe;Hn++)Lt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,gi.__webglTexture,G,ke+Hn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,gi.__webglTexture,G),Vn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,An.__webglTexture,le,zt+Hn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,An.__webglTexture,le),G!==0?N.blitFramebuffer(Le,Xe,_e,de,ot,Et,_e,de,N.COLOR_BUFFER_BIT,N.NEAREST):Vn?N.copyTexSubImage3D(yt,le,ot,Et,zt+Hn,Le,Xe,_e,de):N.copyTexSubImage2D(yt,le,ot,Et,Le,Xe,_e,de);Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Vn?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(yt,le,ot,Et,zt,_e,de,xe,Rt,ze,Vt.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(yt,le,ot,Et,zt,_e,de,xe,Rt,Vt.data):N.texSubImage3D(yt,le,ot,Et,zt,_e,de,xe,Rt,ze,Vt):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,le,ot,Et,_e,de,Rt,ze,Vt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,le,ot,Et,Vt.width,Vt.height,Rt,Vt.data):N.texSubImage2D(N.TEXTURE_2D,le,ot,Et,_e,de,Rt,ze,Vt);N.pixelStorei(N.UNPACK_ROW_LENGTH,gt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ur),N.pixelStorei(N.UNPACK_SKIP_ROWS,ei),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ko),le===0&&z.generateMipmaps&&N.generateMipmap(yt),Se.unbindTexture()},this.initRenderTarget=function(A){T.get(A).__webglFramebuffer===void 0&&O.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?O.setTextureCube(A,0):A.isData3DTexture?O.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?O.setTexture2DArray(A,0):O.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){P=0,L=0,U=null,Se.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const fp={type:"change"},Mf={type:"start"},jm={type:"end"},yl=new Ga,dp=new Bs,Bb=Math.cos(70*Tm.DEG2RAD),Qt=new B,Gn=2*Math.PI,wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hh=1e-6;class h1 extends Hx{constructor(e,t=null){super(e,t),this.state=wt.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.touches={ONE:io.ROTATE,TWO:io.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new es,this._lastTargetPosition=new B,this._quat=new es().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vd,this._sphericalDelta=new Vd,this._scale=1,this._panOffset=new B,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new B,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zb.bind(this),this._onPointerDown=kb.bind(this),this._onPointerUp=Vb.bind(this),this._onContextMenu=qb.bind(this),this._onMouseWheel=Wb.bind(this),this._onKeyDown=Xb.bind(this),this._onTouchStart=Yb.bind(this),this._onTouchMove=$b.bind(this),this._onMouseDown=Hb.bind(this),this._onMouseMove=Gb.bind(this),this._interceptControlDown=jb.bind(this),this._interceptControlUp=Kb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fp),this.update(),this.state=wt.NONE}update(e=null){const t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Gn:n>Math.PI&&(n-=Gn),i<-Math.PI?i+=Gn:i>Math.PI&&(i-=Gn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Qt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(yl.origin.copy(this.object.position),yl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yl.direction))<Bb?this.object.lookAt(this.target):(dp.setFromNormalAndCoplanarPoint(this.object.up,this.target),yl.intersectPlane(dp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hh||this._lastTargetPosition.distanceToSquared(this.target)>hh?(this.dispatchEvent(fp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gn/60*this.autoRotateSpeed*e:Gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Qt.copy(i).sub(this.target);let r=Qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function kb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function zb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Vb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jm),this.state=wt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Hb(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ao.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=wt.DOLLY;break;case ao.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=wt.ROTATE}break;case ao.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=wt.PAN}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Mf)}function Gb(s){switch(this.state){case wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Wb(s){this.enabled===!1||this.enableZoom===!1||this.state!==wt.NONE||(s.preventDefault(),this.dispatchEvent(Mf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(jm))}function Xb(s){this.enabled!==!1&&this._handleKeyDown(s)}function Yb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case io.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=wt.TOUCH_ROTATE;break;case io.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=wt.TOUCH_PAN;break;default:this.state=wt.NONE}break;case 2:switch(this.touches.TWO){case io.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=wt.TOUCH_DOLLY_PAN;break;case io.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=wt.TOUCH_DOLLY_ROTATE;break;default:this.state=wt.NONE}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Mf)}function $b(s){switch(this._trackPointer(s),this.state){case wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=wt.NONE}}function qb(s){this.enabled!==!1&&s.preventDefault()}function jb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ms(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Km(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var fi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ao={duration:.5,overwrite:!1,delay:0},bf,gn,Ut,Ti=1e8,Pt=1/Ti,Au=Math.PI*2,Zb=Au/4,Jb=0,Zm=Math.sqrt,Qb=Math.cos,eT=Math.sin,dn=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},As=function(e){return typeof e=="number"},Tf=function(e){return typeof e>"u"},ns=function(e){return typeof e=="object"},$n=function(e){return e!==!1},Ef=function(){return typeof window<"u"},Sl=function(e){return Ht(e)||dn(e)},Jm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,tT=/random\([^)]+\)/g,nT=/,\s*/g,pp=/(?:-?\.?\d|\.)+/gi,Qm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,so=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,uh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,eg=/[+-]=-?[.\d]+/,iT=/[^,'"\[\]\s]+/gi,sT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ft,zi,Ru,wf,pi={},nc={},tg,ng=function(e){return(nc=Ro(e,pi))&&Zn},Af=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ia=function(e,t){return!t&&console.warn(e)},ig=function(e,t){return e&&(pi[e]=t)&&nc&&(nc[e]=t)||pi},Na=function(){return 0},rT={suppressEvents:!0,isStart:!0,kill:!1},Vl={suppressEvents:!0,kill:!1},oT={suppressEvents:!0},Rf={},$s=[],Cu={},sg,ri={},fh={},mp=30,Hl=[],Cf="",Pf=function(e){var t=e[0],n,i;if(ns(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Hl.length;i--&&!Hl[i].targetTest(t););n=Hl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Rg(e[i],n)))||e.splice(i,1);return e},yr=function(e){return e._gsap||Pf(Ei(e))[0]._gsap},rg=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():Tf(n)&&e.getAttribute&&e.getAttribute(t)||n},qn=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},ho=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},aT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ic=function(){var e=$s.length,t=$s.slice(0),n,i;for(Cu={},$s.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Lf=function(e){return!!(e._initted||e._startAt||e.add)},og=function(e,t,n,i){$s.length&&!gn&&ic(),e.render(t,n,!!(gn&&t<0&&Lf(e))),$s.length&&!gn&&ic()},ag=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(iT).length<2?t:dn(e)?e.trim():e},lg=function(e){return e},mi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ro=function(e,t){for(var n in t)e[n]=t[n];return e},gp=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ns(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},sc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},fa=function(e){var t=e.parent||Ft,n=e.keyframes?lT(En(e.keyframes)):mi;if($n(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},cT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},cg=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ec=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Ks=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Sr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},hT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Pu=function(e,t,n,i){return e._startAt&&(gn?e._startAt.revert(Vl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},uT=function s(e){return!e||e._ts&&s(e.parent)},_p=function(e){return e._repeat?Co(e._tTime,e=e.duration()+e._rDelay)*e:0},Co=function(e,t){var n=Math.floor(e=Ot(e/t));return e&&n===e?n-1:n},rc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},wc=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},Ac=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),wc(e),n._dirty||Sr(n,e)),e},hg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=rc(e.rawTime(),t),(!t._dur||$a(0,t.totalDuration(),n)-t._tTime>Pt)&&t.render(n,!0)),Sr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Pt}},Xi=function(e,t,n,i){return t.parent&&Ks(t),t._start=Ot((As(n)?n:n||e!==Ft?xi(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),cg(e,t,"_first","_last",e._sort?"_start":0),Lu(t)||(e._recent=t),i||hg(e,t),e._ts<0&&Ac(e,e._tTime),e},ug=function(e,t){return(pi.ScrollTrigger||Af("scrollTrigger",t))&&pi.ScrollTrigger.create(t,e)},fg=function(e,t,n,i,r){if(If(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sg!==li.frame)return $s.push(e),e._lazy=[r,i],1},fT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Lu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},dT=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&fT(e)&&!(!e._initted&&Lu(e))||(e._ts<0||e._dp._ts<0)&&!Lu(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=$a(0,e._tDur,t),h=Co(l,a),e._yoyo&&h&1&&(o=1-o),h!==Co(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||gn||i||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&fg(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?Pt:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Pu(e,t,n,!0),e._onUpdate&&!n&&hi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&hi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ks(e,1),!n&&!gn&&(hi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},pT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Po=function(e,t,n,i){var r=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Ot(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Ac(e,e._tTime=e._tDur*a),e.parent&&wc(e),n||Sr(e.parent,e),e},xp=function(e){return e instanceof Un?Sr(e):Po(e,e._dur)},mT={_start:0,endTime:Na,totalDuration:Na},xi=function s(e,t,n){var i=e.labels,r=e._recent||mT,o=e.duration()>=Ti?r.endTime(!1):e._dur,a,l,c;return dn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(En(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},da=function(e,t,n){var i=As(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=$n(l.vars.inherit)&&l.parent;o.immediateRender=$n(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new jt(t[0],o,t[r+1])},er=function(e,t){return e||e===0?t(e):t},$a=function(e,t,n){return n<e?e:n>t?t:n},bn=function(e,t){return!dn(e)||!(t=sT.exec(e))?"":t[1]},gT=function(e,t,n){return er(n,function(i){return $a(e,t,i)})},Du=[].slice,dg=function(e,t){return e&&ns(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ns(e[0]))&&!e.nodeType&&e!==zi},_T=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return dn(i)&&!t||dg(i,1)?(r=n).push.apply(r,Ei(i)):n.push(i)})||n},Ei=function(e,t,n){return Ut&&!t&&Ut.selector?Ut.selector(e):dn(e)&&!n&&(Ru||!Lo())?Du.call((t||wf).querySelectorAll(e),0):En(e)?_T(e,n):dg(e)?Du.call(e,0):e?[e]:[]},Iu=function(e){return e=Ei(e)[0]||Ia("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ei(t,n.querySelectorAll?n:n===e?Ia("Invalid scope")||wf.createElement("div"):e)}},pg=function(e){return e.sort(function(){return .5-Math.random()})},mg=function(e){if(Ht(e))return e;var t=ns(e)?e:{each:e},n=Mr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return dn(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,_){var g=(_||t).length,m=o[g],p,x,S,y,b,E,w,R,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,Ti])[1],!v){for(w=-Ti;w<(w=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=o[g]=[],p=l?Math.min(v,g)*h-.5:i%v,x=v===Ti?0:l?g*u/v-.5:i/v|0,w=0,R=Ti,E=0;E<g;E++)S=E%v-p,y=x-(E/v|0),m[E]=b=c?Math.abs(c==="y"?y:S):Zm(S*S+y*y),b>w&&(w=b),b<R&&(R=b);i==="random"&&pg(m),m.max=w-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=bn(t.amount||t.each)||0,n=n&&g<0?Eg(n):n}return g=(m[f]-m.min)/m.max||0,Ot(m.b+(n?n(g):g)*m.v)+m.u}},Nu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ot(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(As(n)?0:bn(n))}},gg=function(e,t){var n=En(e),i,r;return!n&&ns(e)&&(i=n=e.radius||Ti,e.values?(e=Ei(e.values),(r=!As(e[0]))&&(i*=i)):e=Nu(e.increment)),er(t,n?Ht(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Ti,h=0,u=e.length,f,d;u--;)r?(f=e[u].x-a,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:o,r||h===o||As(o)?h:h+bn(o)}:Nu(e))},_g=function(e,t,n,i){return er(En(e)?!t:n===!0?!!(n=0):!i,function(){return En(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},xT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},vT=function(e,t){return function(n){return e(parseFloat(n))+(t||bn(n))}},yT=function(e,t,n){return vg(e,t,0,1,n)},xg=function(e,t,n){return er(n,function(i){return e[~~t(i)]})},ST=function s(e,t,n){var i=t-e;return En(e)?xg(e,s(0,e.length),t):er(n,function(r){return(i+(r-e)%i)%i+e})},MT=function s(e,t,n){var i=t-e,r=i*2;return En(e)?xg(e,s(0,e.length-1),t):er(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Ua=function(e){return e.replace(tT,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(nT);return _g(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},vg=function(e,t,n,i,r){var o=t-e,a=i-n;return er(r,function(l){return n+((l-e)/o*a||0)})},bT=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=dn(e),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(En(e)&&!En(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(s(e[c-1],e[c]));u--,r=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=t}else i||(e=Ro(En(e)?[]:{},e));if(!h){for(l in t)Df.call(a,e,l,"get",t[l]);r=function(_){return Of(_,a)||(o?e.p:e)}}}return er(n,r)},vp=function(e,t,n){var i=e.labels,r=Ti,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},hi=function(e,t,n){var i=e.vars,r=i[t],o=Ut,a=e._ctx,l,c,h;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&$s.length&&ic(),a&&(Ut=a),h=l?r.apply(c,l):r.call(c),Ut=o,h},na=function(e){return Ks(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&hi(e,"onInterrupt"),e},ro,yg=[],Sg=function(e){if(e)if(e=!e.name&&e.default||e,Ef()||e.headless){var t=e.name,n=Ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Na,render:Of,add:Df,kill:kT,modifier:BT,rawVars:0},o={targetTest:0,get:0,getSetter:Uf,aliases:{},register:0};if(Lo(),e!==i){if(ri[t])return;mi(i,mi(sc(e,r),o)),Ro(i.prototype,Ro(r,sc(e,o))),ri[i.prop=t]=i,e.targetTest&&(Hl.push(i),Rf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ig(t,i),e.register&&e.register(Zn,i,jn)}else yg.push(e)},Ct=255,ia={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},dh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ct+.5|0},Mg=function(e,t,n){var i=e?As(e)?[e>>16,e>>8&Ct,e&Ct]:0:ia.black,r,o,a,l,c,h,u,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ia[e])i=ia[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ct,i&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(pp),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=dh(l+1/3,r,o),i[1]=dh(l,r,o),i[2]=dh(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Qm),n&&i.length<4&&(i[3]=1),i}else i=e.match(pp)||ia.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/Ct,o=i[1]/Ct,a=i[2]/Ct,u=Math.max(r,o,a),f=Math.min(r,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===r?(o-a)/d+(o<a?6:0):u===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},bg=function(e){var t=[],n=[],i=-1;return e.split(qs).forEach(function(r){var o=r.match(so)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},yp=function(e,t,n){var i="",r=(e+i).match(qs),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return e;if(r=r.map(function(f){return(f=Mg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=bg(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(qs,"1").split(so),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(qs),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},qs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ia)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),TT=/hsl[a]?\(/,Tg=function(e){var t=e.join(" "),n;if(qs.lastIndex=0,qs.test(t))return n=TT.test(t),e[1]=yp(e[1],n),e[0]=yp(e[0],n,bg(e[1])),!0},Oa,li=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,f,d,_=function g(m){var p=s()-i,x=m===!0,S,y,b,E;if((p>e||p<0)&&(n+=p-t),i+=p,b=i-n,S=b-o,(S>0||x)&&(E=++u.frame,f=b-u.time*1e3,u.time=b=b/1e3,o+=S+(S>=r?4:r-S),y=1),x||(l=c(g)),y)for(d=0;d<a.length;d++)a[d](b,f,E,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){tg&&(!Ru&&Ef()&&(zi=Ru=window,wf=zi.document||{},pi.gsap=Zn,(zi.gsapVersions||(zi.gsapVersions=[])).push(Zn.version),ng(nc||zi.GreenSockGlobals||!zi.gsap&&zi||{}),yg.forEach(Sg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Oa=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Oa=0,c=Na},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,p,x){var S=p?function(y,b,E,w){m(y,b,E,w),u.remove(S)}:m;return u.remove(m),a[x?"unshift":"push"](S),Lo(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},u})(),Lo=function(){return!Oa&&li.wake()},ft={},ET=/^[\d.\-M][\d.\-,\s]/,wT=/["']/g,AT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(wT,"").trim():+c,i=l.substr(a+1).trim();return t},RT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},CT=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[AT(t[1])]:RT(e).split(",").map(ag)):ft._CE&&ET.test(e)?ft._CE("",e):n},Eg=function(e){return function(t){return 1-e(1-t)}},wg=function s(e,t){for(var n=e._first,i;n;)n instanceof Un?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Mr=function(e,t){return e&&(Ht(e)?e:ft[e]||CT(e))||t},Ir=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return qn(e,function(a){ft[a]=pi[a]=r,ft[o=a.toLowerCase()]=n;for(var l in r)ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[a+"."+l]=r[l]}),r},Ag=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ph=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Au*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*eT((h-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ag(a);return r=Au/r,l.config=function(c,h){return s(e,c,h)},l},mh=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Ag(n);return i.config=function(r){return s(e,r)},i};qn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ir(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;Ir("Elastic",ph("in"),ph("out"),ph());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Ir("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ir("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ir("Circ",function(s){return-(Zm(1-s*s)-1)});Ir("Sine",function(s){return s===1?1:-Qb(s*Zb)+1});Ir("Back",mh("in"),mh("out"),mh());ft.SteppedEase=ft.steps=pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Pt;return function(a){return((i*$a(0,o,a)|0)+r)*n}}};Ao.ease=ft["quad.out"];qn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Cf+=s+","+s+"Params,"});var Rg=function(e,t){this.id=Jb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:rg,this.set=t?t.getSetter:Uf},Fa=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Po(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Oa||li.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Po(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Lo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ac(this,n),!r._dp||r.parent||hg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Pt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),og(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_p(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_p(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Co(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?rc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pt?0:this._rts,this.totalTime($a(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),wc(this),hT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Lo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ot(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Xi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+($n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?rc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=oT);var i=gn;return gn=n,Lf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,xp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,xp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(xi(this,n),$n(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$n(i)),this._dur||(this._zTime=-Pt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Pt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Ht(n)?n:lg,l=function(){var h=i.then;i.then=null,r&&r(),Ht(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){na(this)},s})();mi(Fa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var Un=(function(s){Km(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=$n(n.sortChildren),Ft&&Xi(n.parent||Ft,ms(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ug(ms(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return da(0,arguments,this),this},t.from=function(i,r,o){return da(1,arguments,this),this},t.fromTo=function(i,r,o,a){return da(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,fa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new jt(i,r,xi(this,o),1),this},t.call=function(i,r,o){return Xi(this,jt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new jt(i,o,xi(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,fa(o).immediateRender=$n(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},t.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,fa(a).immediateRender=$n(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ot(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,x,S,y,b,E,w;if(this!==Ft&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,y=this._start,S=this._ts,p=!S,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=Ot(h%m),h===l?(g=this._repeat,f=c):(b=Ot(h/m),g=~~b,g&&g===b&&(f=c,g--),f>c&&(f=c)),b=Co(this._tTime,m),!a&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),E&&g&1&&(f=c-f,w=1),g!==b&&!this._lock){var R=E&&b&1,v=R===(E&&g&1);if(g<b&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(w?0:Ot(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&hi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;wg(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=pT(this,Ot(a),Ot(f)),x&&(h-=f-(f=x._start))),this._tTime=h,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!b&&(hi(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!p){x=0,_&&(h+=this._zTime=-Pt);break}}d=_}else{d=this._last;for(var M=i<0?i:f;d;){if(_=d._prev,(d._act||M<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,r,o||gn&&Lf(d)),f!==this._time||!this._ts&&!p){x=0,_&&(h+=this._zTime=M?-Pt:Pt);break}}d=_}}if(x&&!r&&(this.pause(),x.render(f>=a?0:-Pt)._zTime=f>=a?1:-1,this._ts))return this._start=y,wc(this),this.render(i,r,o);this._onUpdate&&!r&&hi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ks(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(hi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(As(r)||(r=xi(this,r,i)),!(i instanceof Fa)){if(En(i))return i.forEach(function(a){return o.add(a,r)}),this;if(dn(i))return this.addLabel(i,r);if(Ht(i))i=jt.delayedCall(0,i);else return this}return this!==i?Xi(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ti);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof jt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return dn(i)?this.removeLabel(i):Ht(i)?this.killTweensOf(i):(i.parent===this&&Ec(this,i),i===this._recent&&(this._recent=this._last),Sr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(li.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=xi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=jt.delayedCall(0,r||Na,o);return a.data="isPause",this._hasPause=1,Xi(this,a,xi(this,i))},t.removePause=function(i){var r=this._first;for(i=xi(this,i);r;)r._start===i&&r.data==="isPause"&&Ks(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Hs!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Ei(i),l=this._first,c=As(r),h;l;)l instanceof jt?aT(l._targets,a)&&(c?(!Hs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=xi(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,_=jt.to(o,mi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Pt,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Po(_,m,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,mi({startAt:{time:xi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),vp(this,xi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),vp(this,xi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ot(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Sr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Sr(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=Ti,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Xi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=Ot(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Po(o,o===Ft&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ft._ts&&(og(Ft,rc(i,Ft)),sg=li.frame),li.frame>=mp){mp+=fi.autoSleep||120;var r=Ft._first;if((!r||!r._ts)&&fi.autoSleep&&li._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||li.sleep()}}},e})(Fa);mi(Un.prototype,{_lock:0,_hasPause:0,_forcing:0});var PT=function(e,t,n,i,r,o,a){var l=new jn(this._pt,e,t,0,1,Ng,null,r),c=0,h=0,u,f,d,_,g,m,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ua(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),f=n.match(uh)||[];u=uh.exec(i);)_=u[0],g=i.substring(c,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?ho(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=uh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(eg.test(i)||p)&&(l.e=0),this._pt=l,l},Df=function(e,t,n,i,r,o,a,l,c,h){Ht(i)&&(i=i(r||0,e,o));var u=e[t],f=n!=="get"?n:Ht(u)?c?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=Ht(u)?c?UT:Dg:Nf,_;if(dn(i)&&(~i.indexOf("random(")&&(i=Ua(i)),i.charAt(1)==="="&&(_=ho(f,i)+(bn(f)||0),(_||_===0)&&(i=_))),!h||f!==i||Uu)return!isNaN(f*i)&&i!==""?(_=new jn(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?FT:Ig,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!u&&!(t in e)&&Af(t,i),PT.call(this,e,t,f,i,d,l||fi.stringFilter,c))},LT=function(e,t,n,i,r){if(Ht(e)&&(e=pa(e,r,t,n,i)),!ns(e)||e.style&&e.nodeType||En(e)||Jm(e))return dn(e)?pa(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=pa(e[a],r,t,n,i);return o},Cg=function(e,t,n,i,r,o){var a,l,c,h;if(ri[e]&&(a=new ri[e]).init(r,a.rawVars?t[e]:LT(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new jn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==ro))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Hs,Uu,If=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!bf,y=e.timeline,b,E,w,R,v,M,P,L,U,F,H,V,k;if(y&&(!f||!r)&&(r="none"),e._ease=Mr(r,Ao.ease),e._yEase=u?Eg(Mr(u===!0?r:u,Ao.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(L=m[0]?yr(m[0]).harness:0,V=L&&i[L.prop],b=sc(i,Rf),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!d?g.render(-1,!0):g.revert(h&&_?Vl:rT),g._lazy=0),o){if(Ks(e._startAt=jt.set(m,mi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&$n(l),startAt:null,delay:0,onUpdate:c&&function(){return hi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!a&&!d)&&e._startAt.revert(Vl),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(a=!1),w=mi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&$n(l),immediateRender:a,stagger:0,parent:p},b),V&&(w[L.prop]=V),Ks(e._startAt=jt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(Vl):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&$n(l)||l&&!_,E=0;E<m.length;E++){if(v=m[E],P=v._gsap||Pf(m)[E]._gsap,e._ptLookup[E]=F={},Cu[P.id]&&$s.length&&ic(),H=x===m?E:x.indexOf(v),L&&(U=new L).init(v,V||b,e,H,x)!==!1&&(e._pt=R=new jn(e._pt,v,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(W){F[W]=R}),U.priority&&(M=1)),!L||V)for(w in b)ri[w]&&(U=Cg(w,b,e,H,v,x))?U.priority&&(M=1):F[w]=R=Df.call(e,v,w,"get",b[w],H,x,0,i.stringFilter);e._op&&e._op[E]&&e.kill(v,e._op[E]),S&&e._pt&&(Hs=e,Ft.killTweensOf(v,F,e.globalTime(t)),k=!e.parent,Hs=0),e._pt&&l&&(Cu[P.id]=1)}M&&Ug(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,f&&t<=0&&y.render(Ti,!0,!0)},DT=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Uu=1,e.vars[t]="+=0",If(e,a),Uu=0,l?Ia(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Wt(n)+bn(u.e)),u.b&&(u.b=h.s+bn(u.b))},IT=function(e,t){var n=e[0]?yr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Ro({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},NT=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(En(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},pa=function(e,t,n,i,r){return Ht(e)?e.call(t,n,i,r):dn(e)&&~e.indexOf("random(")?Ua(e):e},Pg=Cf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Lg={};qn(Pg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Lg[s]=1});var jt=(function(s){Km(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:fa(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,x=i.parent||Ft,S=(En(n)||Jm(n)?As(n[0]):"length"in i)?[n]:Ei(n),y,b,E,w,R,v,M,P;if(a._targets=S.length?Pf(S):Ia("GSAP target "+n+" not found. https://gsap.com",!fi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Sl(c)||Sl(h)){if(i=a.vars,y=a.timeline=new Un({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:S}),y.kill(),y.parent=y._dp=ms(a),y._start=0,f||Sl(c)||Sl(h)){if(w=S.length,M=f&&mg(f),ns(f))for(R in f)~Pg.indexOf(R)&&(P||(P={}),P[R]=f[R]);for(b=0;b<w;b++)E=sc(i,Lg),E.stagger=0,p&&(E.yoyoEase=p),P&&Ro(E,P),v=S[b],E.duration=+pa(c,ms(a),b,v,S),E.delay=(+pa(h,ms(a),b,v,S)||0)-a._delay,!f&&w===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),y.to(v,E,M?M(b,v,S):0),y._ease=ft.none;y.duration()?c=h=0:a.timeline=0}else if(_){fa(mi(y.vars.defaults,{ease:"none"})),y._ease=Mr(_.ease||i.ease||"none");var L=0,U,F,H;if(En(_))_.forEach(function(V){return y.to(S,V,">")}),y.duration();else{E={};for(R in _)R==="ease"||R==="easeEach"||NT(R,_[R],E,_.easeEach);for(R in E)for(U=E[R].sort(function(V,k){return V.t-k.t}),L=0,b=0;b<U.length;b++)F=U[b],H={ease:F.e,duration:(F.t-(b?U[b-1].t:0))/100*c},H[R]=F.v,y.to(S,H,L),L+=H.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!bf&&(Hs=ms(a),Ft.killTweensOf(S),Hs=0),Xi(x,ms(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===Ot(x._time)&&$n(u)&&uT(ms(a))&&x.data!=="nested")&&(a._tTime=-Pt,a.render(Math.max(0,-h)||0)),m&&ug(ms(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Pt&&!h?l:i<Pt?0:i,f,d,_,g,m,p,x,S,y;if(!c)dT(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(f=Ot(u%g),u===l?(_=this._repeat,f=c):(m=Ot(u/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(y=this._yEase,f=c-f),m=Co(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(S&&this._yEase&&wg(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ot(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(fg(this,h?i:f,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(f/c),this._from&&(this.ratio=x=1-x),!a&&u&&!r&&!m&&(hi(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Pu(this,i,r,o),hi(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&hi(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Pu(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ks(this,1),!r&&!(h&&!a)&&(u||a||p)&&(hi(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){Oa||li.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||If(this,c),h=this._ease(c/this._dur),DT(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Ac(this,0),this.parent||cg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?na(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Hs&&Hs.vars.overwrite!==!0)._first||na(this),this.parent&&o!==this.timeline.totalDuration()&&Po(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ei(i):a,c=this._ptLookup,h=this._pt,u,f,d,_,g,m,p;if((!r||r==="all")&&cT(a,l))return r==="all"&&(this._pt=0),na(this);for(u=this._op=this._op||[],r!=="all"&&(dn(r)&&(g={},qn(r,function(x){return g[x]=1}),r=g),r=IT(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],r==="all"?(u[p]=r,_=f,d={}):(d=u[p]=u[p]||{},_=r);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ec(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&na(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return da(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return da(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Ft.killTweensOf(i,r,o)},e})(Fa);mi(jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});qn("staggerTo,staggerFrom,staggerFromTo",function(s){jt[s]=function(){var e=new Un,t=Du.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Nf=function(e,t,n){return e[t]=n},Dg=function(e,t,n){return e[t](n)},UT=function(e,t,n,i){return e[t](i.fp,n)},OT=function(e,t,n){return e.setAttribute(t,n)},Uf=function(e,t){return Ht(e[t])?Dg:Tf(e[t])&&e.setAttribute?OT:Nf},Ig=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},FT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ng=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Of=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},BT=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},kT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ec(this,t,"_pt"):t.dep||(n=1),t=i;return!n},zT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ug=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},jn=(function(){function s(t,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Ig,this.d=l||this,this.set=c||Nf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=zT,this.m=n,this.mt=r,this.tween=i},s})();qn(Cf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Rf[s]=1});pi.TweenMax=pi.TweenLite=jt;pi.TimelineLite=pi.TimelineMax=Un;Ft=new Un({sortChildren:!1,defaults:Ao,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fi.stringFilter=Tg;var br=[],Gl={},VT=[],Sp=0,HT=0,gh=function(e){return(Gl[e]||VT).map(function(t){return t()})},Ou=function(){var e=Date.now(),t=[];e-Sp>2&&(gh("matchMediaInit"),br.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=zi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),gh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Sp=e,gh("matchMedia"))},Og=(function(){function s(t,n){this.selector=n&&Iu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=HT++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Ht(n)&&(r=i,i=n,n=Ht);var o=this,a=function(){var c=Ut,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=Iu(r)),Ut=o,u=i.apply(o,arguments),Ht(u)&&o._r.push(u),Ut=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ht?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ut;Ut=null,n(this),Ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof jt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Un?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof jt)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=br.length;o--;)br[o].id===this.id&&br.splice(o,1)},e.revert=function(n){this.kill(n||{})},s})(),GT=(function(){function s(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){ns(n)||(n={matches:n});var o=new Og(0,r||this.scope),a=o.conditions={},l,c,h;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=zi.matchMedia(n[c]),l&&(br.indexOf(o)<0&&br.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ou):l.addEventListener("change",Ou)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),oc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Sg(i)})},timeline:function(e){return new Un(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,n,i){dn(e)&&(e=Ei(e)[0]);var r=yr(e||{}).get,o=n?lg:ag;return n==="native"&&(n=""),e&&(t?o((ri[t]&&ri[t].get||r)(e,t,n,i)):function(a,l,c){return o((ri[a]&&ri[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Ei(e),e.length>1){var i=e.map(function(h){return Zn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var o=ri[t],a=yr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;ro._pt=0,u.init(e,n?h+n:h,ro,0,[e]),u.render(1,u),ro._pt&&Of(1,ro)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,r=Zn.to(e,mi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(t,l,c,h)};return o.tween=r,o},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Mr(e.ease,Ao.ease)),gp(Ao,e||{})},config:function(e){return gp(fi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ri[a]&&!pi[a]&&Ia(t+" effect requires "+a+" plugin.")}),fh[t]=function(a,l,c){return n(Ei(a),mi(l||{},r),c)},o&&(Un.prototype[t]=function(a,l,c){return this.add(fh[t](a,ns(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=Mr(t)},parseEase:function(e,t){return arguments.length?Mr(e,t):ft},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Un(e),i,r;for(n.smoothChildTiming=$n(e.smoothChildTiming),Ft.remove(n),n._dp=0,n._time=n._tTime=Ft._time,i=Ft._first;i;)r=i._next,(t||!(!i._dur&&i instanceof jt&&i.vars.onComplete===i._targets[0]))&&Xi(n,i,i._start-i._delay),i=r;return Xi(Ft,n,0),n},context:function(e,t){return e?new Og(e,t):Ut},matchMedia:function(e){return new GT(e)},matchMediaRefresh:function(){return br.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ou()},addEventListener:function(e,t){var n=Gl[e]||(Gl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Gl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:ST,wrapYoyo:MT,distribute:mg,random:_g,snap:gg,normalize:yT,getUnit:bn,clamp:gT,splitColor:Mg,toArray:Ei,selector:Iu,mapRange:vg,pipe:xT,unitize:vT,interpolate:bT,shuffle:pg},install:ng,effects:fh,ticker:li,updateRoot:Un.updateRoot,plugins:ri,globalTimeline:Ft,core:{PropTween:jn,globals:ig,Tween:jt,Timeline:Un,Animation:Fa,getCache:yr,_removeLinkedListItem:Ec,reverting:function(){return gn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return bf=e}}};qn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return oc[s]=jt[s]});li.add(Un.updateRoot);ro=oc.to({},{duration:0});var WT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},XT=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=WT(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},_h=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(dn(r)&&(l={},qn(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}XT(a,r)}}}},Zn=oc.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},_h("roundProps",Nu),_h("modifiers"),_h("snap",gg))||oc;jt.version=Un.version=Zn.version="3.14.2";tg=1;Ef()&&Lo();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;var Mp,Gs,uo,Ff,xr,bp,Bf,YT=function(){return typeof window<"u"},Rs={},ur=180/Math.PI,fo=Math.PI/180,Jr=Math.atan2,Tp=1e8,kf=/([A-Z])/g,$T=/(left|right|width|margin|padding|x)/i,qT=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},KT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ZT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},JT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Fg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Bg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},QT=function(e,t,n){return e.style[t]=n},eE=function(e,t,n){return e.style.setProperty(t,n)},tE=function(e,t,n){return e._gsap[t]=n},nE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},iE=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},sE=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Bt="transform",Kn=Bt+"Origin",rE=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Rs&&r){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=gs(i,a)}):this.tfm[e]=o.x?o[e]:gs(i,e),e===Kn&&(this.tfm.zOrigin=o.zOrigin);else return qi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kn,t,"")),e=Bt}(r||t)&&this.props.push(e,t,r[e])},kg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},oE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(kf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Bf(),(!r||!r.isStart)&&!n[Bt]&&(kg(n),i.zOrigin&&n[Kn]&&(n[Kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},zg=function(e,t){var n={target:e,props:[],revert:oE,save:rE};return e._gsap||Zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Vg,Bu=function(e,t){var n=Gs.createElementNS?Gs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Gs.createElement(e);return n&&n.style?n:Gs.createElement(e)},ui=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(kf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Do(t)||t,1)||""},Ep="O,Moz,ms,Ms,Webkit".split(","),Do=function(e,t,n){var i=t||xr,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ep[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Ep[o]:"")+e},ku=function(){YT()&&window.document&&(Mp=window,Gs=Mp.document,uo=Gs.documentElement,xr=Bu("div")||{style:{}},Bu("div"),Bt=Do(Bt),Kn=Bt+"Origin",xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Vg=!!Do("perspective"),Bf=Zn.core.reverting,Ff=1)},wp=function(e){var t=e.ownerSVGElement,n=Bu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),uo.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),uo.removeChild(n),r},Ap=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Hg=function(e){var t,n;try{t=e.getBBox()}catch{t=wp(e),n=1}return t&&(t.width||t.height)||n||(t=wp(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ap(e,["x","cx","x1"])||0,y:+Ap(e,["y","cy","y1"])||0,width:0,height:0}:t},Gg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Hg(e))},Zs=function(e,t){if(t){var n=e.style,i;t in Rs&&t!==Kn&&(t=Bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(kf,"-$1").toLowerCase())):n.removeAttribute(t)}},Ws=function(e,t,n,i,r,o){var a=new jn(e._pt,t,n,0,1,o?Bg:Fg);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Rp={deg:1,rad:1,turn:1},aE={grid:1,flex:1},Js=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=xr.style,l=$T.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",_,g,m,p;if(i===o||!r||Rp[i]||Rp[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&Gg(e),(d||o==="%")&&(Rs[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[h],Wt(d?r/_*u:r/100*_);if(a[l?"width":"height"]=u+(f?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Gs||!g.appendChild)&&(g=Gs.body),m=g._gsap,m&&d&&m.width&&l&&m.time===li.time&&!m.uncache)return Wt(r/m.width*u);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=u+i,_=e[h],x?e.style[t]=x:Zs(e,t)}else(d||o==="%")&&!aE[ui(g,"display")]&&(a.position=ui(e,"position")),g===e&&(a.position="static"),g.appendChild(xr),_=xr[h],g.removeChild(xr),a.position="absolute";return l&&d&&(m=yr(g),m.time=li.time,m.width=g[h]),Wt(f?_*r/u:_&&r?u/_*r:0)},gs=function(e,t,n,i){var r;return Ff||ku(),t in qi&&t!=="transform"&&(t=qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Rs[t]&&t!=="transform"?(r=ka(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:lc(ui(e,Kn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ac[t]&&ac[t](e,t,n)||ui(e,t)||rg(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Js(e,t,r,n)+n:r},lE=function(e,t,n,i){if(!n||n==="none"){var r=Do(t,e,1),o=r&&ui(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=ui(e,"borderTopColor"))}var a=new jn(this._pt,e.style,t,0,1,Ng),l=0,c=0,h,u,f,d,_,g,m,p,x,S,y,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ui(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=ui(e,t)||i,g?e.style[t]=g:Zs(e,t)),h=[n,i],Tg(h),n=h[0],i=h[1],f=n.match(so)||[],b=i.match(so)||[],b.length){for(;u=so.exec(i);)m=u[0],x=i.substring(l,u.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,y=g.substr((d+"").length),m.charAt(1)==="="&&(m=ho(d,m)+y),p=parseFloat(m),S=m.substr((p+"").length),l=so.lastIndex-S.length,S||(S=S||fi.units[t]||y,l===i.length&&(i+=S,a.e+=S)),y!==S&&(d=Js(e,t,g,S)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Bg:Fg;return eg.test(i)&&(a.e=0),this._pt=a,a},Cp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Cp[n]||n,t[1]=Cp[i]||i,t.join(" ")},hE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Rs[a]&&(l=1,a=a==="transformOrigin"?Kn:Bt),Zs(n,a);l&&(Zs(n,Bt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ka(n,1),o.uncache=1,kg(i)))}},ac={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new jn(e._pt,t,n,0,0,hE);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Ba=[1,0,0,1,0,0],Wg={},Xg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Pp=function(e){var t=ui(e,Bt);return Xg(t)?Ba:t.substr(7).match(Qm).map(Wt)},zf=function(e,t){var n=e._gsap||yr(e),i=e.style,r=Pp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ba:r):(r===Ba&&!e.offsetParent&&e!==uo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,uo.appendChild(e)),r=Pp(e),l?i.display=l:Zs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):uo.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},zu=function(e,t,n,i,r,o){var a=e._gsap,l=r||zf(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],x=l[5],S=t.split(" "),y=parseFloat(S[0])||0,b=parseFloat(S[1])||0,E,w,R,v;n?l!==Ba&&(w=d*m-_*g)&&(R=y*(m/w)+b*(-g/w)+(g*x-m*p)/w,v=y*(-_/w)+b*(d/w)-(d*x-_*p)/w,y=R,b=v):(E=Hg(e),y=E.x+(~S[0].indexOf("%")?y/100*E.width:y),b=E.y+(~(S[1]||S[0]).indexOf("%")?b/100*E.height:b)),i||i!==!1&&a.smooth?(p=y-c,x=b-h,a.xOffset=u+(p*d+x*g)-p,a.yOffset=f+(p*_+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Kn]="0px 0px",o&&(Ws(o,a,"xOrigin",c,y),Ws(o,a,"yOrigin",h,b),Ws(o,a,"xOffset",u,a.xOffset),Ws(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},ka=function(e,t){var n=e._gsap||new Rg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ui(e,Kn)||"0",h,u,f,d,_,g,m,p,x,S,y,b,E,w,R,v,M,P,L,U,F,H,V,k,W,ee,D,ne,Ce,Ne,Ue,Ve;return h=u=f=g=m=p=x=S=y=0,d=_=1,n.svg=!!(e.getCTM&&Gg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),i.scale=i.rotate=i.translate="none"),w=zf(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),zu(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,w)),b=n.xOrigin||0,E=n.yOrigin||0,w!==Ba&&(P=w[0],L=w[1],U=w[2],F=w[3],h=H=w[4],u=V=w[5],w.length===6?(d=Math.sqrt(P*P+L*L),_=Math.sqrt(F*F+U*U),g=P||L?Jr(L,P)*ur:0,x=U||F?Jr(U,F)*ur+g:0,x&&(_*=Math.abs(Math.cos(x*fo))),n.svg&&(h-=b-(b*P+E*U),u-=E-(b*L+E*F))):(Ve=w[6],Ne=w[7],D=w[8],ne=w[9],Ce=w[10],Ue=w[11],h=w[12],u=w[13],f=w[14],R=Jr(Ve,Ce),m=R*ur,R&&(v=Math.cos(-R),M=Math.sin(-R),k=H*v+D*M,W=V*v+ne*M,ee=Ve*v+Ce*M,D=H*-M+D*v,ne=V*-M+ne*v,Ce=Ve*-M+Ce*v,Ue=Ne*-M+Ue*v,H=k,V=W,Ve=ee),R=Jr(-U,Ce),p=R*ur,R&&(v=Math.cos(-R),M=Math.sin(-R),k=P*v-D*M,W=L*v-ne*M,ee=U*v-Ce*M,Ue=F*M+Ue*v,P=k,L=W,U=ee),R=Jr(L,P),g=R*ur,R&&(v=Math.cos(R),M=Math.sin(R),k=P*v+L*M,W=H*v+V*M,L=L*v-P*M,V=V*v-H*M,P=k,H=W),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Wt(Math.sqrt(P*P+L*L+U*U)),_=Wt(Math.sqrt(V*V+Ve*Ve)),R=Jr(H,V),x=Math.abs(R)>2e-4?R*ur:0,y=Ue?1/(Ue<0?-Ue:Ue):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Xg(ui(e,Bt)),k&&e.setAttribute("transform",k))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(d*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Wt(d),n.scaleY=Wt(_),n.rotation=Wt(g)+a,n.rotationX=Wt(m)+a,n.rotationY=Wt(p)+a,n.skewX=x+a,n.skewY=S+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Kn]=lc(c)),n.xOffset=n.yOffset=0,n.force3D=fi.force3D,n.renderTransform=n.svg?fE:Vg?Yg:uE,n.uncache=0,n},lc=function(e){return(e=e.split(" "))[0]+" "+e[1]},xh=function(e,t,n){var i=bn(t);return Wt(parseFloat(t)+parseFloat(Js(e,"x",n+"px",i)))+i},uE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Yg(e,t)},lr="0deg",jo="0px",cr=") ",Yg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,S=n.zOrigin,y="",b=p==="auto"&&e&&e!==1||p===!0;if(S&&(u!==lr||h!==lr)){var E=parseFloat(h)*fo,w=Math.sin(E),R=Math.cos(E),v;E=parseFloat(u)*fo,v=Math.cos(E),o=xh(x,o,w*v*-S),a=xh(x,a,-Math.sin(E)*-S),l=xh(x,l,R*v*-S+S)}m!==jo&&(y+="perspective("+m+cr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(b||o!==jo||a!==jo||l!==jo)&&(y+=l!==jo||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+cr),c!==lr&&(y+="rotate("+c+cr),h!==lr&&(y+="rotateY("+h+cr),u!==lr&&(y+="rotateX("+u+cr),(f!==lr||d!==lr)&&(y+="skew("+f+", "+d+cr),(_!==1||g!==1)&&(y+="scale("+_+", "+g+cr),x.style[Bt]=y||"translate(0, 0)"},fE=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,S=parseFloat(o),y=parseFloat(a),b,E,w,R,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=fo,c*=fo,b=Math.cos(l)*u,E=Math.sin(l)*u,w=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(h*=fo,v=Math.tan(c-h),v=Math.sqrt(1+v*v),w*=v,R*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),b*=v,E*=v)),b=Wt(b),E=Wt(E),w=Wt(w),R=Wt(R)):(b=u,R=f,E=w=0),(S&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(S=Js(d,"x",o,"px"),y=Js(d,"y",a,"px")),(_||g||m||p)&&(S=Wt(S+_-(_*b+g*w)+m),y=Wt(y+g-(_*E+g*R)+p)),(i||r)&&(v=d.getBBox(),S=Wt(S+i/100*v.width),y=Wt(y+r/100*v.height)),v="matrix("+b+","+E+","+w+","+R+","+S+","+y+")",d.setAttribute("transform",v),x&&(d.style[Bt]=v)},dE=function(e,t,n,i,r){var o=360,a=dn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?ur:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Tp)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Tp)%o-~~(c/o)*o)),e._pt=f=new jn(e._pt,t,n,i,c,jT),f.e=h,f.u="deg",e._props.push(n),f},Lp=function(e,t){for(var n in t)e[n]=t[n];return e},pE=function(e,t,n){var i=Lp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Bt]=t,a=ka(n,1),Zs(n,Bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Bt],o[Bt]=t,a=ka(n,1),o[Bt]=c);for(l in Rs)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(d=bn(c),_=bn(h),u=d!==_?Js(n,l,c,_):parseFloat(c),f=parseFloat(h),e._pt=new jn(e._pt,a,l,u,f-u,Fu),e._pt.u=_||0,e._props.push(l));Lp(a,i)};qn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});ac[e>1?"border"+s:s]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(_){return gs(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,u)}});var $g={name:"css",register:ku,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,f,d,_,g,m,p,x,S,y,b,E,w,R,v;Ff||ku(),this.styles=this.styles||zg(e),R=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(ri[g]&&Cg(g,t,n,i,e,r)))){if(d=typeof h,_=ac[g],d==="function"&&(h=h.call(n,i,e,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ua(h)),_)_(this,e,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",qs.lastIndex=0,qs.test(c)||(m=bn(c),p=bn(h),p?m!==p&&(c=Js(e,g,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,g),o.push(g),R.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],dn(c)&&~c.indexOf("random(")&&(c=Ua(c)),bn(c+"")||c==="auto"||(c+=fi.units[g]||bn(gs(e,g))||""),(c+"").charAt(1)==="="&&(c=gs(e,g))):c=gs(e,g),f=parseFloat(c),x=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),g in qi&&(g==="autoAlpha"&&(f===1&&gs(e,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,a.visibility),Ws(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=qi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Rs,S){if(this.styles.save(g),v=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=ui(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=h,h=ui(e,"perspective"),M?e.style.perspective=M:Zs(e,"perspective")}u=parseFloat(h)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||ka(e,t.parseTransform),E=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new jn(this._pt,a,Bt,0,1,b.renderTransform,b,0,-1),y.dep=1),g==="scale")this._pt=new jn(this._pt,b,"scaleY",b.scaleY,(x?ho(b.scaleY,x+u):u)-b.scaleY||0,Fu),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Kn,0,a[Kn]),h=cE(h),b.svg?zu(e,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&Ws(this,b,"zOrigin",b.zOrigin,p),Ws(this,a,g,lc(c),lc(h)));continue}else if(g==="svgOrigin"){zu(e,h,1,E,0,this);continue}else if(g in Wg){dE(this,b,g,f,x?ho(f,x+h):h);continue}else if(g==="smoothOrigin"){Ws(this,b,"smooth",b.smooth,h);continue}else if(g==="force3D"){b[g]=h;continue}else if(g==="transform"){pE(this,h,e);continue}}else g in a||(g=Do(g)||g);if(S||(u||u===0)&&(f||f===0)&&!qT.test(h)&&g in a)m=(c+"").substr((f+"").length),u||(u=0),p=bn(h)||(g in fi.units?fi.units[g]:m),m!==p&&(f=Js(e,g,c,p)),this._pt=new jn(this._pt,S?b:a,g,f,(x?ho(f,x+u):u)-f,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?JT:Fu),this._pt.u=p||0,S&&v!==h?(this._pt.b=c,this._pt.e=v,this._pt.r=ZT):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=KT);else if(g in a)lE.call(this,e,g,c,x?x+h:h);else if(g in e)this.add(e,g,c||e[g],x?x+h:h,i,r);else if(g!=="parseTransform"){Af(g,h);continue}S||(g in a?R.push(g,0,a[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,c||e[g])),o.push(g)}}w&&Ug(this)},render:function(e,t){if(t.tween._time||!Bf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:gs,aliases:qi,getSetter:function(e,t,n){var i=qi[t];return i&&i.indexOf(",")<0&&(t=i),t in Rs&&t!==Kn&&(e._gsap.x||gs(e,"x"))?n&&bp===n?t==="scale"?nE:tE:(bp=n||{})&&(t==="scale"?iE:sE):e.style&&!Tf(e.style[t])?QT:~t.indexOf("-")?eE:Uf(e,t)},core:{_removeProperty:Zs,_getMatrix:zf}};Zn.utils.checkPrefix=Do;Zn.core.getStyleSaver=zg;(function(s,e,t,n){var i=qn(s+","+e+","+t,function(r){Rs[r]=1});qn(e,function(r){fi.units[r]="deg",Wg[r]=1}),qi[i[13]]=s+","+e,qn(n,function(r){var o=r.split(":");qi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");qn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){fi.units[s]="px"});Zn.registerPlugin($g);var Gi=Zn.registerPlugin($g)||Zn;Gi.core.Tween;var mE="1.3.17";function qg(s,e,t){return Math.max(s,Math.min(e,t))}function gE(s,e,t){return(1-t)*s+t*e}function _E(s,e,t,n){return gE(s,e,1-Math.exp(-t*n))}function xE(s,e){return(s%e+e)%e}var vE=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(s){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;const t=qg(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=_E(this.value,this.to,this.lerp*60,s),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function yE(s,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(i,n)},e)}}var SE=class{constructor(s,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=s,this.content=e,t&&(this.debouncedResize=yE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},jg=class{events={};emit(s,...e){let t=this.events[s]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(s,e){return this.events[s]?.push(e)||(this.events[s]=[e]),()=>{this.events[s]=this.events[s]?.filter(t=>e!==t)}}off(s,e){this.events[s]=this.events[s]?.filter(t=>e!==t)}destroy(){this.events={}}},Dp=100/6,Us={passive:!1},ME=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Us),this.element.addEventListener("touchstart",this.onTouchStart,Us),this.element.addEventListener("touchmove",this.onTouchMove,Us),this.element.addEventListener("touchend",this.onTouchEnd,Us)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new jg;on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Us),this.element.removeEventListener("touchstart",this.onTouchStart,Us),this.element.removeEventListener("touchmove",this.onTouchMove,Us),this.element.removeEventListener("touchend",this.onTouchEnd,Us)}onTouchStart=s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})};onTouchMove=s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})};onTouchEnd=s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})};onWheel=s=>{let{deltaX:e,deltaY:t,deltaMode:n}=s;const i=n===1?Dp:n===2?this.window.width:1,r=n===1?Dp:n===2?this.window.height:1;e*=i,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Ip=s=>Math.min(1,1.001-Math.pow(2,-10*s)),u1=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new vE;emitter=new jg;dimensions;virtualScroll;constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:f=u==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:x=!0,autoRaf:S=!1,anchors:y=!1,autoToggle:b=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:R=w,stopInertiaOnNavigate:v=!1}={}){window.lenisVersion=mE,(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=Ip:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:u,touchMultiplier:d,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:x,autoRaf:S,anchors:y,autoToggle:b,allowNestedScroll:E,naiveDimensions:R,stopInertiaOnNavigate:v},this.dimensions=new SE(s,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new ME(t,{touchMultiplier:d,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}onScrollEnd=s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=s=>{s.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}onClick=s=>{const t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.split("#")[1]}`;this.scrollTo(o,r)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=s=>{s.button===1&&this.reset()};onVirtualScroll=s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:e,deltaY:t,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),r=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const h=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof h=="function"&&h?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||r&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,g=i&&n.type==="touchend";g&&(f=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=s=>{const e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(s,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:u}={}){if(!((this.isStopped||this.isLocked)&&!h)){if(typeof s=="string"&&["top","left","start","#"].includes(s))s=0;else if(typeof s=="string"&&["bottom","right","end"].includes(s))s=this.limit;else{let f;if(typeof s=="string"?(f=document.querySelector(s),f||(s==="#top"?s=0:console.warn("Lenis: Target not found",s))):s instanceof HTMLElement&&s?.nodeType&&(f=s),f){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?_.left:_.top}const d=f.getBoundingClientRect();s=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof s=="number"){if(s+=e,s=Math.round(s),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const f=s-this.animatedScroll;f>this.limit/2?s=s-this.limit:f<-this.limit/2&&(s=s+this.limit)}}else s=qg(0,s,this.limit);if(s===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=u??{},t){this.animatedScroll=this.targetScroll=s,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=s),typeof o=="number"&&typeof a!="function"?a=Ip:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,s,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),i&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(s,{deltaX:e,deltaY:t}){const n=Date.now(),i=s._lenis??={};let r,o,a,l,c,h,u,f;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const b=window.getComputedStyle(s);i.computedStyle=b;const E=b.overflowX,w=b.overflowY;if(r=["auto","overlay","scroll"].includes(E),o=["auto","overlay","scroll"].includes(w),i.hasOverflowX=r,i.hasOverflowY=o,!r&&!o||d==="vertical"&&!o||d==="horizontal"&&!r)return!1;c=s.scrollWidth,h=s.scrollHeight,u=s.clientWidth,f=s.clientHeight,a=c>u,l=h>f,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=h,i.clientWidth=u,i.clientHeight=f}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,h=i.scrollHeight,u=i.clientWidth,f=i.clientHeight;if(!r&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!r||!a))return!1;let _;if(d==="horizontal")_="x";else if(d==="vertical")_="y";else{const b=e!==0,E=t!==0;b&&r&&a&&(_="x"),E&&o&&l&&(_="y")}if(!_)return!1;let g,m,p,x,S;if(_==="x")g=s.scrollLeft,m=c-u,p=e,x=r,S=a;else if(_==="y")g=s.scrollTop,m=h-f,p=t,x=o,S=l;else return!1;return(p>0?g<m:g>0)&&x&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?xE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Np(s,e){if(e===e0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Su||e===Mm){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Su)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Kg extends Fo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new AE(t)}),this.register(function(t){return new RE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new kE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new IE(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new OE(t)}),this.register(function(t){return new UE(t)}),this.register(function(t){return new TE(t)}),this.register(function(t){return new zE(t)}),this.register(function(t){return new VE(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ua.extractUrlBase(e);o=ua.resolveURL(c,this.path)}else o=ua.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Hm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Zg){try{o[ct.KHR_BINARY_GLTF]=new HE(e)}catch(u){i&&i(u);return}r=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new tw(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ct.KHR_MATERIALS_UNLIT:o[u]=new EE;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[u]=new GE(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[u]=new WE;break;case ct.KHR_MESH_QUANTIZATION:o[u]=new XE;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function bE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class TE{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ke(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Bn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Da(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Cx(h),c.distance=u;break;case"spot":c=new Ax(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class EE{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return _r}extendParams(e,t,n){const i=[];e.color=new Ke(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Bn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,pn))}return Promise.all(i)}}class wE{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class AE{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ss}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(a,a)}return Promise.all(r)}}class RE{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ss}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class CE{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ss}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class PE{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ss}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Bn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,pn)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class LE{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ss}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class DE{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ss}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(a[0],a[1],a[2],Bn),Promise.all(r)}}class IE{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ss}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class NE{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ss}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(a[0],a[1],a[2],Bn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,pn)),Promise.all(r)}}class UE{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ss}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class OE{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ss}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class FE{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class BE{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class kE{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class zE{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class VE{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==vi.TRIANGLES&&c.mode!==vi.TRIANGLE_STRIP&&c.mode!==vi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const _ of u){const g=new tt,m=new B,p=new es,x=new B(1,1,1),S=new nx(_.geometry,_.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&x.fromBufferAttribute(l.SCALE,y),S.setMatrixAt(y,g.compose(m,p,x));for(const y in l)if(y==="_COLOR_0"){const b=l[y];S.instanceColor=new bu(b.array,b.itemSize,b.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,l[y]);kt.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),d.push(S)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Zg="glTF",Ko=12,Up={JSON:1313821514,BIN:5130562};class HE{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ko),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ko,r=new DataView(e,Ko);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Up.JSON){const c=new Uint8Array(e,Ko+o,a);this.content=n.decode(c)}else if(l===Up.BIN){const c=Ko+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class GE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Vu[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Vu[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],d=po[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const _ in d.attributes){const g=d.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}u(d)},a,c,Bn,f)})})}}class WE{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class XE{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class Jg extends Ya{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,_=e*c,g=_-c,m=-2*d+3*f,p=d-f,x=1-m,S=p-f+u;for(let y=0;y!==a;y++){const b=o[g+y+a],E=o[g+y+l]*h,w=o[_+y+a],R=o[_+y]*h;r[y]=x*b+S*E+m*w+p*R}return r}}const YE=new es;class $E extends Jg{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return YE.fromArray(r).normalize().toArray(r),r}}const vi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},po={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Op={9728:nn,9729:sn,9984:mm,9985:Ul,9986:ea,9987:xs},Fp={33071:Yi,33648:Kl,10497:yo},vh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qE={CUBICSPLINE:void 0,LINEAR:Ra,STEP:Aa},yh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Xa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ts})),s.DefaultMaterial}function hr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function KE(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function ZE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function JE(s){let e;const t=s.extensions&&s.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sh(t.attributes):e=s.indices+":"+Sh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Sh(s.targets[n]);return e}function Sh(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Hu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function QE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ew=new tt;class tw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Ex(this.options.manager):this.textureLoader=new Lx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return hr(r,a,i),Bi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ua.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=vh[i.type],a=po[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Fn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=vh[i.type],c=po[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(d&&d!==u){const p=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(x);S||(g=new c(a,p*d,i.count*d/h),S=new Z0(g,d/h),t.cache.add(x,S)),m=new df(S,l,f%d/h,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),m=new Fn(g,l,_);if(i.sparse!==void 0){const p=vh.SCALAR,x=po[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new x(o[1],S,i.sparse.count*p),E=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Fn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,R=b.length;w<R;w++){const v=b[w];if(m.setX(v,E[w*l]),l>=2&&m.setY(v,E[w*l+1]),l>=3&&m.setZ(v,E[w*l+2]),l>=4&&m.setW(v,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Op[f.magFilter]||sn,h.minFilter=Op[f.minFilter]||xs,h.wrapS=Fp[f.wrapS]||yo,h.wrapT=Fp[f.wrapT]||yo,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==nn&&h.minFilter!==sn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const m=new fn(g);m.needsUpdate=!0,f(m)}),t.load(ua.resolveURL(u,r.path),_,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Bi(u,o),u.userData.mimeType=o.mimeType||QE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Um,Ui.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Nm,Ui.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Xa}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){const u=i[ct.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ke(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Bn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,pn)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Wi);const h=r.alphaMode||yh.OPAQUE;if(h===yh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===yh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==_r&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==_r&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==_r){const u=r.emissiveFactor;a.emissive=new Ke().setRGB(u[0],u[1],u[2],Bn)}return r.emissiveTexture!==void 0&&o!==_r&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,pn)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Bi(u,r),t.associations.set(u,{materials:e}),r.extensions&&hr(i,u,r),u})}createUniqueName(e){const t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Bp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=JE(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Bp(new kn,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?jE(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,_=h.length;d<_;d++){const g=h[d],m=o[d];let p;const x=c[d];if(m.mode===vi.TRIANGLES||m.mode===vi.TRIANGLE_STRIP||m.mode===vi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Q0(g,x):new wn(g,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===vi.TRIANGLE_STRIP?p.geometry=Np(p.geometry,Mm):m.mode===vi.TRIANGLE_FAN&&(p.geometry=Np(p.geometry,Su));else if(m.mode===vi.LINES)p=new ox(g,x);else if(m.mode===vi.LINE_STRIP)p=new _f(g,x);else if(m.mode===vi.LINE_LOOP)p=new ax(g,x);else if(m.mode===vi.POINTS)p=new lx(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ZE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Bi(p,r),m.extensions&&hr(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,_=u.length;d<_;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&hr(i,u[0],r),u[0];const f=new zs;r.extensions&&hr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=u.length;d<_;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Mn(Tm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new yc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const f=new tt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new mf(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],_=i.samplers[d.sampler],g=d.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,x=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(_),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],_=u[2],g=u[3],m=u[4],p=[];for(let S=0,y=f.length;S<y;S++){const b=f[S],E=d[S],w=_[S],R=g[S],v=m[S];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const M=n._createAnimationTracks(b,E,w,R,v);if(M)for(let P=0;P<M.length;P++)p.push(M[P])}const x=new xx(r,void 0,p);return Bi(x,i),x})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,ew)});for(let d=0,_=u.length;d<_;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Im:c.length>1?h=new zs:c.length===1?h=c[0]:h=new kt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Bi(h,r),r.extensions&&hr(n,h,r),r.matrix!==void 0){const u=new tt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new zs;n.name&&(r.name=i.createUniqueName(n.name)),Bi(r,n),n.extensions&&hr(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Ui||f instanceof fn)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Os[r.path]===Os.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Os[r.path]){case Os.weights:c=To;break;case Os.rotation:c=Eo;break;case Os.translation:case Os.scale:c=wo;break;default:n.itemSize===1?c=To:c=wo;break}const h=i.interpolation!==void 0?qE[i.interpolation]:Ra,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Os[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Hu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Eo?$E:Jg;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function nw(s,e,t){const n=e.attributes,i=new Ai;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const h=Hu(po[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new B,l=new B;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=Hu(po[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new is;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Bp(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Vu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ut.workingColorSpace!==Bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),Bi(s,e),nw(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?KE(s,e.targets,t):s})}class Zi{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),Zi.nextNameID=Zi.nextNameID||0,this.$name.id=`lil-gui-name-${++Zi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class iw extends Zi{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Gu(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const sw={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Gu,toHexString:Gu},za={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},rw={isPrimitive:!1,match:s=>Array.isArray(s)||ArrayBuffer.isView(s),fromHexString(s,e,t=1){const n=za.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return za.toHexString(i)}},ow={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=za.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return za.toHexString(i)}},aw=[sw,za,rw,ow];function lw(s){return aw.find(e=>e.match(s))}class cw extends Zi{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=lw(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Gu(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Mh extends Zi{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class hw extends Zi{constructor(e,t,n,i,r,o){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,l,c,h,u;const f=5,d=x=>{a=x.clientX,l=c=x.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",g)},_=x=>{if(o){const S=x.clientX-a,y=x.clientY-l;Math.abs(y)>f?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>f&&g()}if(!o){const S=x.clientY-c;u-=S*this._step*this._arrowKeyMultiplier(x),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=x.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,x,S,y,b)=>(p-x)/(S-x)*(b-y)+y,t=p=>{const x=this.$slider.getBoundingClientRect();let S=e(p,x.left,x.right,this._min,this._max);this._snapClampSetValue(S)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",f))},u=p=>{if(o){const x=p.touches[0].clientX-a,S=p.touches[0].clientY-l;Math.abs(x)>Math.abs(S)?c(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f))}else p.preventDefault(),t(p.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",f)},d=this._callOnFinishChange.bind(this),_=400;let g;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const S=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(d,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class uw extends Zi{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class fw extends Zi{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var dw=`.lil-gui {
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
}`;function pw(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let kp=!1;class Qg{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!kp&&a&&(pw(dw),kp=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,r){if(Object(n)===n)return new uw(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new hw(this,e,t,n,i,r);case"boolean":return new iw(this,e,t);case"string":return new fw(this,e,t);case"function":return new Mh(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new cw(this,e,t,n)}addFolder(e){const t=new Qg({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Mh||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Mh)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function mw(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function gw(s,e,t){return e&&mw(s.prototype,e),s}var mn,Wl,ci,Xs,Ys,mo,e_,fr,ma,t_,ys,Li,n_,i_=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},s_=1,oo=[],lt=[],Ji=[],ga=Date.now,Wu=function(e,t){return t},_w=function(){var e=ma.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,Ji),lt=n,Ji=i,Wu=function(o,a){return t[o](a)}},js=function(e,t){return~Ji.indexOf(e)&&Ji[Ji.indexOf(e)+1][t]},_a=function(e){return!!~t_.indexOf(e)},Pn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},Cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ml="scrollLeft",bl="scrollTop",Xu=function(){return ys&&ys.isPressed||lt.cache++},cc=function(e,t){var n=function i(r){if(r||r===0){s_&&(ci.history.scrollRestoration="manual");var o=ys&&ys.isPressed;r=i.v=Math.round(r)||(ys&&ys.iOS?1:0),e(r),i.cacheID=lt.cache,o&&Wu("ss",r)}else(t||lt.cache!==i.cacheID||Wu("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},On={s:Ml,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:cc(function(s){return arguments.length?ci.scrollTo(s,tn.sc()):ci.pageXOffset||Xs[Ml]||Ys[Ml]||mo[Ml]||0})},tn={s:bl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:On,sc:cc(function(s){return arguments.length?ci.scrollTo(On.sc(),s):ci.pageYOffset||Xs[bl]||Ys[bl]||mo[bl]||0})},Wn=function(e,t){return(t&&t._ctx&&t._ctx.selector||mn.utils.toArray)(e)[0]||(typeof e=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},xw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Qs=function(e,t){var n=t.s,i=t.sc;_a(e)&&(e=Xs.scrollingElement||Ys);var r=lt.indexOf(e),o=i===tn.sc?1:2;!~r&&(r=lt.push(e)-1),lt[r+o]||Pn(e,"scroll",Xu);var a=lt[r+o],l=a||(lt[r+o]=cc(js(e,n),!0)||(_a(e)?i:cc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=mn.getProperty(e,"scrollBehavior")==="smooth"),l},Yu=function(e,t,n){var i=e,r=e,o=ga(),a=o,l=t||50,c=Math.max(500,l*3),h=function(_,g){var m=ga();g||m-o>l?(r=i,i=_,a=o,o=m):n?i+=_:i=r+(_-r)/(m-a)*(o-a)},u=function(){r=i=n?0:i,a=o=0},f=function(_){var g=a,m=r,p=ga();return(_||_===0)&&_!==i&&h(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:h,reset:u,getVelocity:f}},Zo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},zp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},r_=function(){ma=mn.core.globals().ScrollTrigger,ma&&ma.core&&_w()},o_=function(e){return mn=e||i_(),!Wl&&mn&&typeof document<"u"&&document.body&&(ci=window,Xs=document,Ys=Xs.documentElement,mo=Xs.body,t_=[ci,Xs,Ys,mo],mn.utils.clamp,n_=mn.core.context||function(){},fr="onpointerenter"in mo?"pointer":"mouse",e_=Xt.isTouch=ci.matchMedia&&ci.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ci||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Li=Xt.eventTypes=("ontouchstart"in Ys?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ys?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return s_=0},500),r_(),Wl=1),Wl};On.op=tn;lt.cache=0;var Xt=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Wl||o_(mn)||console.warn("Please gsap.registerPlugin(Observer)"),ma||r_();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,x=n.onDrag,S=n.onPress,y=n.onRelease,b=n.onRight,E=n.onLeft,w=n.onUp,R=n.onDown,v=n.onChangeX,M=n.onChangeY,P=n.onChange,L=n.onToggleX,U=n.onToggleY,F=n.onHover,H=n.onHoverEnd,V=n.onMove,k=n.ignoreCheck,W=n.isNormalizer,ee=n.onGestureStart,D=n.onGestureEnd,ne=n.onWheel,Ce=n.onEnable,Ne=n.onDisable,Ue=n.onClick,Ve=n.scrollSpeed,j=n.capture,J=n.allowClicks,fe=n.lockAxis,Pe=n.onLockAxis;this.target=a=Wn(a)||Ys,this.vars=n,d&&(d=mn.utils.toArray(d)),i=i||1e-9,r=r||0,_=_||1,Ve=Ve||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ci.getComputedStyle(mo).lineHeight)||22);var ye,We,dt,Te,He,Ze,Fe,X=this,N=0,_t=0,nt=n.passive||!h&&n.passive!==!1,Ge=Qs(a,On),Se=Qs(a,tn),C=Ge(),T=Se(),O=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Li[0]==="pointerdown",K=_a(a),Z=a.ownerDocument||Xs,q=[0,0,0],ve=[0,0,0],re=0,Ee=function(){return re=ga()},be=function(Re,Je){return(X.event=Re)&&d&&xw(Re.target,d)||Je&&O&&Re.pointerType!=="touch"||k&&k(Re,Je)},se=function(){X._vx.reset(),X._vy.reset(),We.pause(),u&&u(X)},oe=function(){var Re=X.deltaX=zp(q),Je=X.deltaY=zp(ve),pe=Math.abs(Re)>=i,qe=Math.abs(Je)>=i;P&&(pe||qe)&&P(X,Re,Je,q,ve),pe&&(b&&X.deltaX>0&&b(X),E&&X.deltaX<0&&E(X),v&&v(X),L&&X.deltaX<0!=N<0&&L(X),N=X.deltaX,q[0]=q[1]=q[2]=0),qe&&(R&&X.deltaY>0&&R(X),w&&X.deltaY<0&&w(X),M&&M(X),U&&X.deltaY<0!=_t<0&&U(X),_t=X.deltaY,ve[0]=ve[1]=ve[2]=0),(Te||dt)&&(V&&V(X),dt&&(m&&dt===1&&m(X),x&&x(X),dt=0),Te=!1),Ze&&!(Ze=!1)&&Pe&&Pe(X),He&&(ne(X),He=!1),ye=0},Me=function(Re,Je,pe){q[pe]+=Re,ve[pe]+=Je,X._vx.update(Re),X._vy.update(Je),c?ye||(ye=requestAnimationFrame(oe)):oe()},we=function(Re,Je){fe&&!Fe&&(X.axis=Fe=Math.abs(Re)>Math.abs(Je)?"x":"y",Ze=!0),Fe!=="y"&&(q[2]+=Re,X._vx.update(Re,!0)),Fe!=="x"&&(ve[2]+=Je,X._vy.update(Je,!0)),c?ye||(ye=requestAnimationFrame(oe)):oe()},ae=function(Re){if(!be(Re,1)){Re=Zo(Re,h);var Je=Re.clientX,pe=Re.clientY,qe=Je-X.x,Ie=pe-X.y,je=X.isDragging;X.x=Je,X.y=pe,(je||(qe||Ie)&&(Math.abs(X.startX-Je)>=r||Math.abs(X.startY-pe)>=r))&&(dt||(dt=je?2:1),je||(X.isDragging=!0),we(qe,Ie))}},$e=X.onPress=function(ge){be(ge,1)||ge&&ge.button||(X.axis=Fe=null,We.pause(),X.isPressed=!0,ge=Zo(ge),N=_t=0,X.startX=X.x=ge.clientX,X.startY=X.y=ge.clientY,X._vx.reset(),X._vy.reset(),Pn(W?a:Z,Li[1],ae,nt,!0),X.deltaX=X.deltaY=0,S&&S(X))},I=X.onRelease=function(ge){if(!be(ge,1)){Cn(W?a:Z,Li[1],ae,!0);var Re=!isNaN(X.y-X.startY),Je=X.isDragging,pe=Je&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),qe=Zo(ge);!pe&&Re&&(X._vx.reset(),X._vy.reset(),h&&J&&mn.delayedCall(.08,function(){if(ga()-re>300&&!ge.defaultPrevented){if(ge.target.click)ge.target.click();else if(Z.createEvent){var Ie=Z.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,ci,1,qe.screenX,qe.screenY,qe.clientX,qe.clientY,!1,!1,!1,!1,0,null),ge.target.dispatchEvent(Ie)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,u&&Je&&!W&&We.restart(!0),dt&&oe(),p&&Je&&p(X),y&&y(X,pe)}},he=function(Re){return Re.touches&&Re.touches.length>1&&(X.isGesturing=!0)&&ee(Re,X.isDragging)},ie=function(){return(X.isGesturing=!1)||D(X)},ue=function(Re){if(!be(Re)){var Je=Ge(),pe=Se();Me((Je-C)*Ve,(pe-T)*Ve,1),C=Je,T=pe,u&&We.restart(!0)}},te=function(Re){if(!be(Re)){Re=Zo(Re,h),ne&&(He=!0);var Je=(Re.deltaMode===1?l:Re.deltaMode===2?ci.innerHeight:1)*_;Me(Re.deltaX*Je,Re.deltaY*Je,0),u&&!W&&We.restart(!0)}},Q=function(Re){if(!be(Re)){var Je=Re.clientX,pe=Re.clientY,qe=Je-X.x,Ie=pe-X.y;X.x=Je,X.y=pe,Te=!0,u&&We.restart(!0),(qe||Ie)&&we(qe,Ie)}},ce=function(Re){X.event=Re,F(X)},Oe=function(Re){X.event=Re,H(X)},pt=function(Re){return be(Re)||Zo(Re,h)&&Ue(X)};We=X._dc=mn.delayedCall(f||.25,se).pause(),X.deltaX=X.deltaY=0,X._vx=Yu(0,50,!0),X._vy=Yu(0,50,!0),X.scrollX=Ge,X.scrollY=Se,X.isDragging=X.isGesturing=X.isPressed=!1,n_(this),X.enable=function(ge){return X.isEnabled||(Pn(K?Z:a,"scroll",Xu),o.indexOf("scroll")>=0&&Pn(K?Z:a,"scroll",ue,nt,j),o.indexOf("wheel")>=0&&Pn(a,"wheel",te,nt,j),(o.indexOf("touch")>=0&&e_||o.indexOf("pointer")>=0)&&(Pn(a,Li[0],$e,nt,j),Pn(Z,Li[2],I),Pn(Z,Li[3],I),J&&Pn(a,"click",Ee,!0,!0),Ue&&Pn(a,"click",pt),ee&&Pn(Z,"gesturestart",he),D&&Pn(Z,"gestureend",ie),F&&Pn(a,fr+"enter",ce),H&&Pn(a,fr+"leave",Oe),V&&Pn(a,fr+"move",Q)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=Te=dt=!1,X._vx.reset(),X._vy.reset(),C=Ge(),T=Se(),ge&&ge.type&&$e(ge),Ce&&Ce(X)),X},X.disable=function(){X.isEnabled&&(oo.filter(function(ge){return ge!==X&&_a(ge.target)}).length||Cn(K?Z:a,"scroll",Xu),X.isPressed&&(X._vx.reset(),X._vy.reset(),Cn(W?a:Z,Li[1],ae,!0)),Cn(K?Z:a,"scroll",ue,j),Cn(a,"wheel",te,j),Cn(a,Li[0],$e,j),Cn(Z,Li[2],I),Cn(Z,Li[3],I),Cn(a,"click",Ee,!0),Cn(a,"click",pt),Cn(Z,"gesturestart",he),Cn(Z,"gestureend",ie),Cn(a,fr+"enter",ce),Cn(a,fr+"leave",Oe),Cn(a,fr+"move",Q),X.isEnabled=X.isPressed=X.isDragging=!1,Ne&&Ne(X))},X.kill=X.revert=function(){X.disable();var ge=oo.indexOf(X);ge>=0&&oo.splice(ge,1),ys===X&&(ys=0)},oo.push(X),W&&_a(a)&&(ys=X),X.enable(g)},gw(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Xt.version="3.14.2";Xt.create=function(s){return new Xt(s)};Xt.register=o_;Xt.getAll=function(){return oo.slice()};Xt.getById=function(s){return oo.filter(function(e){return e.vars.id===s})[0]};i_()&&mn.registerPlugin(Xt);var Ae,to,at,Dt,oi,xt,Vf,hc,Va,xa,sa,Tl,yn,Rc,$u,In,Vp,Hp,no,a_,bh,l_,Dn,qu,c_,h_,Fs,ju,Hf,go,Gf,va,Ku,Th,El=1,Sn=Date.now,Eh=Sn(),wi=0,ra=0,Gp=function(e,t,n){var i=si(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Wp=function(e,t){return t&&(!si(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},vw=function s(){return ra&&requestAnimationFrame(s)},Xp=function(){return Rc=1},Yp=function(){return Rc=0},Vi=function(e){return e},oa=function(e){return Math.round(e*1e5)/1e5||0},u_=function(){return typeof window<"u"},f_=function(){return Ae||u_()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},Rr=function(e){return!!~Vf.indexOf(e)},d_=function(e){return(e==="Height"?Gf:at["inner"+e])||oi["client"+e]||xt["client"+e]},p_=function(e){return js(e,"getBoundingClientRect")||(Rr(e)?function(){return jl.width=at.innerWidth,jl.height=Gf,jl}:function(){return _s(e)})},yw=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=js(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?d_(r):e["client"+r])||0}},Sw=function(e,t){return!t||~Ji.indexOf(e)?p_(e):function(){return jl}},ji=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=js(e,n))?o()-p_(e)()[r]:Rr(e)?(oi[n]||xt[n])-d_(i):e[n]-e["offset"+i])},wl=function(e,t){for(var n=0;n<no.length;n+=3)(!t||~t.indexOf(no[n+1]))&&e(no[n],no[n+1],no[n+2])},si=function(e){return typeof e=="string"},Tn=function(e){return typeof e=="function"},aa=function(e){return typeof e=="number"},dr=function(e){return typeof e=="object"},Jo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},wh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Qr=Math.abs,m_="left",g_="top",Wf="right",Xf="bottom",Tr="width",Er="height",ya="Right",Sa="Left",Ma="Top",ba="Bottom",qt="padding",yi="margin",Io="Width",Yf="Height",en="px",Si=function(e){return at.getComputedStyle(e)},Mw=function(e){var t=Si(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},$p=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_s=function(e,t){var n=t&&Si(e)[$u]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},uc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},__=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},bw=function(e){return function(t){return Ae.utils.snap(__(e),t)}},$f=function(e){var t=Ae.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},Tw=function(e){return function(t,n){return $f(__(e))(t,n.direction)}},Al=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},un=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},hn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Rl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},qp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Cl={toggleActions:"play",anticipatePin:0},fc={top:0,left:0,center:.5,bottom:1,right:1},Xl=function(e,t){if(si(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in fc?fc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Pl=function(e,t,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,u=r.fontSize,f=r.indent,d=r.fontWeight,_=Dt.createElement("div"),g=Rr(n)||js(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?xt:n,x=e.indexOf("start")!==-1,S=x?c:h,y="border-color:"+S+";font-size:"+u+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(i===tn?Wf:Xf)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=x,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Yl(_,0,i,x),_},Yl=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Io]=1,r["border"+a+Io]=0,r[n.p]=t+"px",Ae.set(e,r)},it=[],Zu={},Ha,jp=function(){return Sn()-wi>34&&(Ha||(Ha=requestAnimationFrame(bs)))},eo=function(){(!Dn||!Dn.isPressed||Dn.startX>xt.clientWidth)&&(lt.cache++,Dn?Ha||(Ha=requestAnimationFrame(bs)):bs(),wi||Pr("scrollStart"),wi=Sn())},Ah=function(){h_=at.innerWidth,c_=at.innerHeight},la=function(e){lt.cache++,(e===!0||!yn&&!l_&&!Dt.fullscreenElement&&!Dt.webkitFullscreenElement&&(!qu||h_!==at.innerWidth||Math.abs(at.innerHeight-c_)>at.innerHeight*.25))&&hc.restart(!0)},Cr={},Ew=[],x_=function s(){return hn(ht,"scrollEnd",s)||vr(!0)},Pr=function(e){return Cr[e]&&Cr[e].map(function(t){return t()})||Ew},ii=[],v_=function(e){for(var t=0;t<ii.length;t+=5)(!e||ii[t+4]&&ii[t+4].query===e)&&(ii[t].style.cssText=ii[t+1],ii[t].getBBox&&ii[t].setAttribute("transform",ii[t+2]||""),ii[t+3].uncache=1)},y_=function(){return lt.forEach(function(e){return Tn(e)&&++e.cacheID&&(e.rec=e())})},qf=function(e,t){var n;for(In=0;In<it.length;In++)n=it[In],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));va=!0,t&&v_(t),t||Pr("revert")},S_=function(e,t){lt.cache++,(t||!Nn)&&lt.forEach(function(n){return Tn(n)&&n.cacheID++&&(n.rec=0)}),si(e)&&(at.history.scrollRestoration=Hf=e)},Nn,wr=0,Kp,ww=function(){if(Kp!==wr){var e=Kp=wr;requestAnimationFrame(function(){return e===wr&&vr(!0)})}},M_=function(){xt.appendChild(go),Gf=!Dn&&go.offsetHeight||at.innerHeight,xt.removeChild(go)},Zp=function(e){return Va(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},vr=function(e,t){if(oi=Dt.documentElement,xt=Dt.body,Vf=[at,Dt,oi,xt],wi&&!e&&!va){un(ht,"scrollEnd",x_);return}M_(),Nn=ht.isRefreshing=!0,va||y_();var n=Pr("refreshInit");a_&&ht.sort(),t||qf(),lt.forEach(function(i){Tn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),va=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Ku=1,Zp(!0),it.forEach(function(i){var r=ji(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Zp(!1),Ku=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){Tn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),S_(Hf,1),hc.pause(),wr++,Nn=2,bs(2),it.forEach(function(i){return Tn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Nn=ht.isRefreshing=!1,Pr("refresh")},Ju=0,$l=1,Ta,bs=function(e){if(e===2||!Nn&&!va){ht.isUpdating=!0,Ta&&Ta.update(0);var t=it.length,n=Sn(),i=n-Eh>=50,r=t&&it[0].scroll();if($l=Ju>r?-1:1,Nn||(Ju=r),i&&(wi&&!Rc&&n-wi>200&&(wi=0,Pr("scrollEnd")),sa=Eh,Eh=n),$l<0){for(In=t;In-- >0;)it[In]&&it[In].update(0,i);$l=1}else for(In=0;In<t;In++)it[In]&&it[In].update(0,i);ht.isUpdating=!1}Ha=0},Qu=[m_,g_,Xf,Wf,yi+ba,yi+ya,yi+Ma,yi+Sa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ql=Qu.concat([Tr,Er,"boxSizing","max"+Io,"max"+Yf,"position",yi,qt,qt+Ma,qt+ya,qt+ba,qt+Sa]),Aw=function(e,t,n){_o(n);var i=e._gsap;if(i.spacerIsNative)_o(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Rh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Qu.length,o=t.style,a=e.style,l;r--;)l=Qu[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Xf]=a[Wf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Tr]=uc(e,On)+en,o[Er]=uc(e,tn)+en,o[qt]=a[yi]=a[g_]=a[m_]="0",_o(i),a[Tr]=a["max"+Io]=n[Tr],a[Er]=a["max"+Yf]=n[Er],a[qt]=n[qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Rw=/([A-Z])/g,_o=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(Rw,"-$1").toLowerCase())}},Ll=function(e){for(var t=ql.length,n=e.style,i=[],r=0;r<t;r++)i.push(ql[r],n[ql[r]]);return i.t=e,i},Cw=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},jl={left:0,top:0},Jp=function(e,t,n,i,r,o,a,l,c,h,u,f,d,_){Tn(e)&&(e=e(l)),si(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Xl("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,x;if(d&&d.seek(0),isNaN(e)||(e=+e),aa(e))d&&(e=Ae.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Yl(a,n,i,!0);else{Tn(t)&&(t=t(l));var S=(e||"0").split(" "),y,b,E,w;x=Wn(t,l)||xt,y=_s(x)||{},(!y||!y.left&&!y.top)&&Si(x).display==="none"&&(w=x.style.display,x.style.display="block",y=_s(x),w?x.style.display=w:x.style.removeProperty("display")),b=Xl(S[0],y[i.d]),E=Xl(S[1]||"0",n),e=y[i.p]-c[i.p]-h+b+r-E,a&&Yl(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var R=e+n,v=o._isStart;m="scroll"+i.d2,Yl(o,R,i,v&&R>20||!v&&(u?Math.max(xt[m],oi[m]):o.parentNode[m])<=R+1),u&&(c=_s(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+en))}return d&&x&&(m=_s(x),d.seek(f),p=_s(x),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},Pw=/(webkit|moz|length|cssText|inset)/i,Qp=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===xt){e._stOrig=r.cssText,a=Si(e);for(o in a)!+o&&!Pw.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},b_=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Dl=function(e,t,n){var i={};i[t.p]="+="+n,Ae.set(e,i)},em=function(e,t){var n=Qs(e,t),i="_scroll"+t.p2,r=function o(a,l,c,h,u){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=b_(n,c,function(){f.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&bs()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ae.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},un(e,"wheel",n.wheelHandler),ht.isTouch&&un(e,"touchmove",n.wheelHandler),r},ht=(function(){function s(t,n){to||s.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ju(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ra){this.update=this.refresh=this.kill=Vi;return}n=$p(si(n)||aa(n)||n.nodeType?{trigger:n}:n,Cl);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,u=r.scrub,f=r.trigger,d=r.pin,_=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,x=r.onSnapComplete,S=r.once,y=r.snap,b=r.pinReparent,E=r.pinSpacer,w=r.containerAnimation,R=r.fastScrollEnd,v=r.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?On:tn,P=!u&&u!==0,L=Wn(n.scroller||at),U=Ae.core.getCache(L),F=Rr(L),H=("pinType"in n?n.pinType:js(L,"pinType")||F&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=P&&n.toggleActions.split(" "),W="markers"in n?n.markers:Cl.markers,ee=F?0:parseFloat(Si(L)["border"+M.p2+Io])||0,D=this,ne=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Ce=yw(L,F,M),Ne=Sw(L,F),Ue=0,Ve=0,j=0,J=Qs(L,M),fe,Pe,ye,We,dt,Te,He,Ze,Fe,X,N,_t,nt,Ge,Se,C,T,O,K,Z,q,ve,re,Ee,be,se,oe,Me,we,ae,$e,I,he,ie,ue,te,Q,ce,Oe;if(D._startClamp=D._endClamp=!1,D._dir=M,m*=45,D.scroller=L,D.scroll=w?w.time.bind(w):J,We=J(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(a_=1,n.refreshPriority===-9999&&(Ta=D)),U.tweenScroll=U.tweenScroll||{top:em(L,tn),left:em(L,On)},D.tweenTo=fe=U.tweenScroll[M.p],D.scrubDuration=function(pe){he=aa(pe)&&pe,he?I?I.duration(pe):I=Ae.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:he,paused:!0,onComplete:function(){return p&&p(D)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(u),ae=0,l||(l=i.vars.id)),y&&((!dr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xt.style&&Ae.set(F?[xt,oi]:L,{scrollBehavior:"auto"}),lt.forEach(function(pe){return Tn(pe)&&pe.target===(F?Dt.scrollingElement||oi:L)&&(pe.smooth=!1)}),ye=Tn(y.snapTo)?y.snapTo:y.snapTo==="labels"?bw(i):y.snapTo==="labelsDirectional"?Tw(i):y.directional!==!1?function(pe,qe){return $f(y.snapTo)(pe,Sn()-Ve<500?0:qe.direction)}:Ae.utils.snap(y.snapTo),ie=y.duration||{min:.1,max:2},ie=dr(ie)?xa(ie.min,ie.max):xa(ie,ie),ue=Ae.delayedCall(y.delay||he/2||.1,function(){var pe=J(),qe=Sn()-Ve<500,Ie=fe.tween;if((qe||Math.abs(D.getVelocity())<10)&&!Ie&&!Rc&&Ue!==pe){var je=(pe-Te)/Ge,Gt=i&&!P?i.totalProgress():je,rt=qe?0:(Gt-$e)/(Sn()-sa)*1e3||0,vt=Ae.utils.clamp(-je,1-je,Qr(rt/2)*rt/.185),Yt=je+(y.inertia===!1?0:vt),It,At,mt=y,zn=mt.onStart,Tt=mt.onInterrupt,_n=mt.onComplete;if(It=ye(Yt,D),aa(It)||(It=Yt),At=Math.max(0,Math.round(Te+It*Ge)),pe<=He&&pe>=Te&&At!==pe){if(Ie&&!Ie._initted&&Ie.data<=Qr(At-pe))return;y.inertia===!1&&(vt=It-je),fe(At,{duration:ie(Qr(Math.max(Qr(Yt-Gt),Qr(It-Gt))*.185/rt/.05||0)),ease:y.ease||"power3",data:Qr(At-pe),onInterrupt:function(){return ue.restart(!0)&&Tt&&Tt(D)},onComplete:function(){D.update(),Ue=J(),i&&!P&&(I?I.resetTo("totalProgress",It,i._tTime/i._tDur):i.progress(It)),ae=$e=i&&!P?i.totalProgress():D.progress,x&&x(D),_n&&_n(D)}},pe,vt*Ge,At-pe-vt*Ge),zn&&zn(D,fe.tween)}}else D.isActive&&Ue!==pe&&ue.restart(!0)}).pause()),l&&(Zu[l]=D),f=D.trigger=Wn(f||d!==!0&&d),Oe=f&&f._gsap&&f._gsap.stRevert,Oe&&(Oe=Oe(D)),d=d===!0?f:Wn(d),si(a)&&(a={targets:f,className:a}),d&&(_===!1||_===yi||(_=!_&&d.parentNode&&d.parentNode.style&&Si(d.parentNode).display==="flex"?!1:qt),D.pin=d,Pe=Ae.core.getCache(d),Pe.spacer?Se=Pe.pinState:(E&&(E=Wn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Pe.spacerIsNative=!!E,E&&(Pe.spacerState=Ll(E))),Pe.spacer=O=E||Dt.createElement("div"),O.classList.add("pin-spacer"),l&&O.classList.add("pin-spacer-"+l),Pe.pinState=Se=Ll(d)),n.force3D!==!1&&Ae.set(d,{force3D:!0}),D.spacer=O=Pe.spacer,we=Si(d),Ee=we[_+M.os2],Z=Ae.getProperty(d),q=Ae.quickSetter(d,M.a,en),Rh(d,O,we),T=Ll(d)),W){_t=dr(W)?$p(W,qp):qp,X=Pl("scroller-start",l,L,M,_t,0),N=Pl("scroller-end",l,L,M,_t,0,X),K=X["offset"+M.op.d2];var pt=Wn(js(L,"content")||L);Ze=this.markerStart=Pl("start",l,pt,M,_t,K,0,w),Fe=this.markerEnd=Pl("end",l,pt,M,_t,K,0,w),w&&(ce=Ae.quickSetter([Ze,Fe],M.a,en)),!H&&!(Ji.length&&js(L,"fixedMarkers")===!0)&&(Mw(F?xt:L),Ae.set([X,N],{force3D:!0}),se=Ae.quickSetter(X,M.a,en),Me=Ae.quickSetter(N,M.a,en))}if(w){var ge=w.vars.onUpdate,Re=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){D.update(0,0,1),ge&&ge.apply(w,Re||[])})}if(D.previous=function(){return it[it.indexOf(D)-1]},D.next=function(){return it[it.indexOf(D)+1]},D.revert=function(pe,qe){if(!qe)return D.kill(!0);var Ie=pe!==!1||!D.enabled,je=yn;Ie!==D.isReverted&&(Ie&&(te=Math.max(J(),D.scroll.rec||0),j=D.progress,Q=i&&i.progress()),Ze&&[Ze,Fe,X,N].forEach(function(Gt){return Gt.style.display=Ie?"none":"block"}),Ie&&(yn=D,D.update(Ie)),d&&(!b||!D.isActive)&&(Ie?Aw(d,O,Se):Rh(d,O,Si(d),be)),Ie||D.update(Ie),yn=je,D.isReverted=Ie)},D.refresh=function(pe,qe,Ie,je){if(!((yn||!D.enabled)&&!qe)){if(d&&pe&&wi){un(s,"scrollEnd",x_);return}!Nn&&ne&&ne(D),yn=D,fe.tween&&!Ie&&(fe.tween.kill(),fe.tween=0),I&&I.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(xe){return xe.vars.immediateRender&&xe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Gt=Ce(),rt=Ne(),vt=w?w.duration():ji(L,M),Yt=Ge<=.01||!Ge,It=0,At=je||0,mt=dr(Ie)?Ie.end:n.end,zn=n.endTrigger||f,Tt=dr(Ie)?Ie.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),_n=D.pinnedContainer=n.pinnedContainer&&Wn(n.pinnedContainer,D),Jn=f&&Math.max(0,it.indexOf(D))||0,Zt=Jn,Jt,an,rs,Nr,ln,A,z,$,Y,G,le,_e,de;for(W&&dr(Ie)&&(_e=Ae.getProperty(X,M.p),de=Ae.getProperty(N,M.p));Zt-- >0;)A=it[Zt],A.end||A.refresh(0,1)||(yn=D),z=A.pin,z&&(z===f||z===d||z===_n)&&!A.isReverted&&(G||(G=[]),G.unshift(A),A.revert(!0,!0)),A!==it[Zt]&&(Jn--,Zt--);for(Tn(Tt)&&(Tt=Tt(D)),Tt=Gp(Tt,"start",D),Te=Jp(Tt,f,Gt,M,J(),Ze,X,D,rt,ee,H,vt,w,D._startClamp&&"_startClamp")||(d?-.001:0),Tn(mt)&&(mt=mt(D)),si(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(si(Tt)?Tt.split(" ")[0]:"")+mt:(It=Xl(mt.substr(2),Gt),mt=si(Tt)?Tt:(w?Ae.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Te):Te)+It,zn=f)),mt=Gp(mt,"end",D),He=Math.max(Te,Jp(mt||(zn?"100% 0":vt),zn,Gt,M,J()+It,Fe,N,D,rt,ee,H,vt,w,D._endClamp&&"_endClamp"))||-.001,It=0,Zt=Jn;Zt--;)A=it[Zt]||{},z=A.pin,z&&A.start-A._pinPush<=Te&&!w&&A.end>0&&(Jt=A.end-(D._startClamp?Math.max(0,A.start):A.start),(z===f&&A.start-A._pinPush<Te||z===_n)&&isNaN(Tt)&&(It+=Jt*(1-A.progress)),z===d&&(At+=Jt));if(Te+=It,He+=It,D._startClamp&&(D._startClamp+=It),D._endClamp&&!Nn&&(D._endClamp=He||-.001,He=Math.min(He,ji(L,M))),Ge=He-Te||(Te-=.01)&&.001,Yt&&(j=Ae.utils.clamp(0,1,Ae.utils.normalize(Te,He,te))),D._pinPush=At,Ze&&It&&(Jt={},Jt[M.a]="+="+It,_n&&(Jt[M.p]="-="+J()),Ae.set([Ze,Fe],Jt)),d&&!(Ku&&D.end>=ji(L,M)))Jt=Si(d),Nr=M===tn,rs=J(),ve=parseFloat(Z(M.a))+At,!vt&&He>1&&(le=(F?Dt.scrollingElement||oi:L).style,le={style:le,value:le["overflow"+M.a.toUpperCase()]},F&&Si(xt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(le.style["overflow"+M.a.toUpperCase()]="scroll")),Rh(d,O,Jt),T=Ll(d),an=_s(d,!0),$=H&&Qs(L,Nr?On:tn)(),_?(be=[_+M.os2,Ge+At+en],be.t=O,Zt=_===qt?uc(d,M)+Ge+At:0,Zt&&(be.push(M.d,Zt+en),O.style.flexBasis!=="auto"&&(O.style.flexBasis=Zt+en)),_o(be),_n&&it.forEach(function(xe){xe.pin===_n&&xe.vars.pinSpacing!==!1&&(xe._subPinOffset=!0)}),H&&J(te)):(Zt=uc(d,M),Zt&&O.style.flexBasis!=="auto"&&(O.style.flexBasis=Zt+en)),H&&(ln={top:an.top+(Nr?rs-Te:$)+en,left:an.left+(Nr?$:rs-Te)+en,boxSizing:"border-box",position:"fixed"},ln[Tr]=ln["max"+Io]=Math.ceil(an.width)+en,ln[Er]=ln["max"+Yf]=Math.ceil(an.height)+en,ln[yi]=ln[yi+Ma]=ln[yi+ya]=ln[yi+ba]=ln[yi+Sa]="0",ln[qt]=Jt[qt],ln[qt+Ma]=Jt[qt+Ma],ln[qt+ya]=Jt[qt+ya],ln[qt+ba]=Jt[qt+ba],ln[qt+Sa]=Jt[qt+Sa],C=Cw(Se,ln,b),Nn&&J(0)),i?(Y=i._initted,bh(1),i.render(i.duration(),!0,!0),re=Z(M.a)-ve+Ge+At,oe=Math.abs(Ge-re)>1,H&&oe&&C.splice(C.length-2,2),i.render(0,!0,!0),Y||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),bh(0)):re=Ge,le&&(le.value?le.style["overflow"+M.a.toUpperCase()]=le.value:le.style.removeProperty("overflow-"+M.a));else if(f&&J()&&!w)for(an=f.parentNode;an&&an!==xt;)an._pinOffset&&(Te-=an._pinOffset,He-=an._pinOffset),an=an.parentNode;G&&G.forEach(function(xe){return xe.revert(!1,!0)}),D.start=Te,D.end=He,We=dt=Nn?te:J(),!w&&!Nn&&(We<te&&J(te),D.scroll.rec=0),D.revert(!1,!0),Ve=Sn(),ue&&(Ue=-1,ue.restart(!0)),yn=0,i&&P&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(Yt||j!==D.progress||w||g||i&&!i._initted)&&(i&&!P&&(i._initted||j||i.vars.immediateRender!==!1)&&i.totalProgress(w&&Te<-.001&&!j?Ae.utils.normalize(Te,He,0):j,!0),D.progress=Yt||(We-Te)/Ge===j?0:j),d&&_&&(O._pinOffset=Math.round(D.progress*re)),I&&I.invalidate(),isNaN(_e)||(_e-=Ae.getProperty(X,M.p),de-=Ae.getProperty(N,M.p),Dl(X,M,_e),Dl(Ze,M,_e-(je||0)),Dl(N,M,de),Dl(Fe,M,de-(je||0))),Yt&&!Nn&&D.update(),h&&!Nn&&!nt&&(nt=!0,h(D),nt=!1)}},D.getVelocity=function(){return(J()-dt)/(Sn()-sa)*1e3||0},D.endAnimation=function(){Jo(D.callbackAnimation),i&&(I?I.progress(1):i.paused()?P||Jo(i,D.direction<0,1):Jo(i,i.reversed()))},D.labelToScroll=function(pe){return i&&i.labels&&(Te||D.refresh()||Te)+i.labels[pe]/i.duration()*Ge||0},D.getTrailing=function(pe){var qe=it.indexOf(D),Ie=D.direction>0?it.slice(0,qe).reverse():it.slice(qe+1);return(si(pe)?Ie.filter(function(je){return je.vars.preventOverlaps===pe}):Ie).filter(function(je){return D.direction>0?je.end<=Te:je.start>=He})},D.update=function(pe,qe,Ie){if(!(w&&!Ie&&!pe)){var je=Nn===!0?te:D.scroll(),Gt=pe?0:(je-Te)/Ge,rt=Gt<0?0:Gt>1?1:Gt||0,vt=D.progress,Yt,It,At,mt,zn,Tt,_n,Jn;if(qe&&(dt=We,We=w?J():je,y&&($e=ae,ae=i&&!P?i.totalProgress():rt)),m&&d&&!yn&&!El&&wi&&(!rt&&Te<je+(je-dt)/(Sn()-sa)*m?rt=1e-4:rt===1&&He>je+(je-dt)/(Sn()-sa)*m&&(rt=.9999)),rt!==vt&&D.enabled){if(Yt=D.isActive=!!rt&&rt<1,It=!!vt&&vt<1,Tt=Yt!==It,zn=Tt||!!rt!=!!vt,D.direction=rt>vt?1:-1,D.progress=rt,zn&&!yn&&(At=rt&&!vt?0:rt===1?1:vt===1?2:3,P&&(mt=!Tt&&k[At+1]!=="none"&&k[At+1]||k[At],Jn=i&&(mt==="complete"||mt==="reset"||mt in i))),v&&(Tt||Jn)&&(Jn||u||!i)&&(Tn(v)?v(D):D.getTrailing(v).forEach(function(rs){return rs.endAnimation()})),P||(I&&!yn&&!El?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",rt,i._tTime/i._tDur):(I.vars.totalProgress=rt,I.invalidate().restart())):i&&i.totalProgress(rt,!!(yn&&(Ve||pe)))),d){if(pe&&_&&(O.style[_+M.os2]=Ee),!H)q(oa(ve+re*rt));else if(zn){if(_n=!pe&&rt>vt&&He+1>je&&je+1>=ji(L,M),b)if(!pe&&(Yt||_n)){var Zt=_s(d,!0),Jt=je-Te;Qp(d,xt,Zt.top+(M===tn?Jt:0)+en,Zt.left+(M===tn?0:Jt)+en)}else Qp(d,O);_o(Yt||_n?C:T),oe&&rt<1&&Yt||q(ve+(rt===1&&!_n?re:0))}}y&&!fe.tween&&!yn&&!El&&ue.restart(!0),a&&(Tt||S&&rt&&(rt<1||!Th))&&Va(a.targets).forEach(function(rs){return rs.classList[Yt||S?"add":"remove"](a.className)}),o&&!P&&!pe&&o(D),zn&&!yn?(P&&(Jn&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),o&&o(D)),(Tt||!Th)&&(c&&Tt&&wh(D,c),V[At]&&wh(D,V[At]),S&&(rt===1?D.kill(!1,1):V[At]=0),Tt||(At=rt===1?1:3,V[At]&&wh(D,V[At]))),R&&!Yt&&Math.abs(D.getVelocity())>(aa(R)?R:2500)&&(Jo(D.callbackAnimation),I?I.progress(1):Jo(i,mt==="reverse"?1:!rt,1))):P&&o&&!yn&&o(D)}if(Me){var an=w?je/w.duration()*(w._caScrollDist||0):je;se(an+(X._isFlipped?1:0)),Me(an)}ce&&ce(-je/w.duration()*(w._caScrollDist||0))}},D.enable=function(pe,qe){D.enabled||(D.enabled=!0,un(L,"resize",la),F||un(L,"scroll",eo),ne&&un(s,"refreshInit",ne),pe!==!1&&(D.progress=j=0,We=dt=Ue=J()),qe!==!1&&D.refresh())},D.getTween=function(pe){return pe&&fe?fe.tween:I},D.setPositions=function(pe,qe,Ie,je){if(w){var Gt=w.scrollTrigger,rt=w.duration(),vt=Gt.end-Gt.start;pe=Gt.start+vt*pe/rt,qe=Gt.start+vt*qe/rt}D.refresh(!1,!1,{start:Wp(pe,Ie&&!!D._startClamp),end:Wp(qe,Ie&&!!D._endClamp)},je),D.update()},D.adjustPinSpacing=function(pe){if(be&&pe){var qe=be.indexOf(M.d)+1;be[qe]=parseFloat(be[qe])+pe+en,be[1]=parseFloat(be[1])+pe+en,_o(be)}},D.disable=function(pe,qe){if(pe!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,qe||I&&I.pause(),te=0,Pe&&(Pe.uncache=1),ne&&hn(s,"refreshInit",ne),ue&&(ue.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!F)){for(var Ie=it.length;Ie--;)if(it[Ie].scroller===L&&it[Ie]!==D)return;hn(L,"resize",la),F||hn(L,"scroll",eo)}},D.kill=function(pe,qe){D.disable(pe,qe),I&&!qe&&I.kill(),l&&delete Zu[l];var Ie=it.indexOf(D);Ie>=0&&it.splice(Ie,1),Ie===In&&$l>0&&In--,Ie=0,it.forEach(function(je){return je.scroller===D.scroller&&(Ie=1)}),Ie||Nn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),qe||i.kill()),Ze&&[Ze,Fe,X,N].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),Ta===D&&(Ta=0),d&&(Pe&&(Pe.uncache=1),Ie=0,it.forEach(function(je){return je.pin===d&&Ie++}),Ie||(Pe.spacer=0)),n.onKill&&n.onKill(D)},it.push(D),D.enable(!1,!1),Oe&&Oe(D),i&&i.add&&!Ge){var Je=D.update;D.update=function(){D.update=Je,lt.cache++,Te||He||D.refresh()},Ae.delayedCall(.01,D.update),Ge=.01,Te=He=0}else D.refresh();d&&ww()},s.register=function(n){return to||(Ae=n||f_(),u_()&&window.document&&s.enable(),to=ra),to},s.defaults=function(n){if(n)for(var i in n)Cl[i]=n[i];return Cl},s.disable=function(n,i){ra=0,it.forEach(function(o){return o[i?"kill":"disable"](n)}),hn(at,"wheel",eo),hn(Dt,"scroll",eo),clearInterval(Tl),hn(Dt,"touchcancel",Vi),hn(xt,"touchstart",Vi),Al(hn,Dt,"pointerdown,touchstart,mousedown",Xp),Al(hn,Dt,"pointerup,touchend,mouseup",Yp),hc.kill(),wl(hn);for(var r=0;r<lt.length;r+=3)Rl(hn,lt[r],lt[r+1]),Rl(hn,lt[r],lt[r+2])},s.enable=function(){if(at=window,Dt=document,oi=Dt.documentElement,xt=Dt.body,Ae&&(Va=Ae.utils.toArray,xa=Ae.utils.clamp,ju=Ae.core.context||Vi,bh=Ae.core.suppressOverwrites||Vi,Hf=at.history.scrollRestoration||"auto",Ju=at.pageYOffset||0,Ae.core.globals("ScrollTrigger",s),xt)){ra=1,go=document.createElement("div"),go.style.height="100vh",go.style.position="absolute",M_(),vw(),Xt.register(Ae),s.isTouch=Xt.isTouch,Fs=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),qu=Xt.isTouch===1,un(at,"wheel",eo),Vf=[at,Dt,oi,xt],Ae.matchMedia?(s.matchMedia=function(c){var h=Ae.matchMedia(),u;for(u in c)h.add(u,c[u]);return h},Ae.addEventListener("matchMediaInit",function(){y_(),qf()}),Ae.addEventListener("matchMediaRevert",function(){return v_()}),Ae.addEventListener("matchMedia",function(){vr(0,1),Pr("matchMedia")}),Ae.matchMedia().add("(orientation: portrait)",function(){return Ah(),Ah})):console.warn("Requires GSAP 3.11.0 or later"),Ah(),un(Dt,"scroll",eo);var n=xt.hasAttribute("style"),i=xt.style,r=i.borderTopStyle,o=Ae.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=_s(xt),tn.m=Math.round(a.top+tn.sc())||0,On.m=Math.round(a.left+On.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),Tl=setInterval(jp,250),Ae.delayedCall(.5,function(){return El=0}),un(Dt,"touchcancel",Vi),un(xt,"touchstart",Vi),Al(un,Dt,"pointerdown,touchstart,mousedown",Xp),Al(un,Dt,"pointerup,touchend,mouseup",Yp),$u=Ae.utils.checkPrefix("transform"),ql.push($u),to=Sn(),hc=Ae.delayedCall(.2,vr).pause(),no=[Dt,"visibilitychange",function(){var c=at.innerWidth,h=at.innerHeight;Dt.hidden?(Vp=c,Hp=h):(Vp!==c||Hp!==h)&&la()},Dt,"DOMContentLoaded",vr,at,"load",vr,at,"resize",la],wl(un),it.forEach(function(c){return c.enable(0,1)}),l=0;l<lt.length;l+=3)Rl(hn,lt[l],lt[l+1]),Rl(hn,lt[l],lt[l+2])}},s.config=function(n){"limitCallbacks"in n&&(Th=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Tl)||(Tl=i)&&setInterval(jp,i),"ignoreMobileResize"in n&&(qu=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(wl(hn)||wl(un,n.autoRefreshEvents||"none"),l_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Wn(n),o=lt.indexOf(r),a=Rr(r);~o&&lt.splice(o,a?6:2),i&&(a?Ji.unshift(at,i,xt,i,oi,i):Ji.unshift(r,i))},s.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(si(n)?Wn(n):n).getBoundingClientRect(),a=o[r?Tr:Er]*i||0;return r?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},s.positionInViewport=function(n,i,r){si(n)&&(n=Wn(n));var o=n.getBoundingClientRect(),a=o[r?Tr:Er],l=i==null?a/2:i in fc?fc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},s.killAll=function(n){if(it.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Cr.killAll||[];Cr={},i.forEach(function(r){return r()})}},s})();ht.version="3.14.2";ht.saveStyles=function(s){return s?Va(s).forEach(function(e){if(e&&e.style){var t=ii.indexOf(e);t>=0&&ii.splice(t,5),ii.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),ju())}}):ii};ht.revert=function(s,e){return qf(!s,e)};ht.create=function(s,e){return new ht(s,e)};ht.refresh=function(s){return s?la(!0):(to||ht.register())&&vr(!0)};ht.update=function(s){return++lt.cache&&bs(s===!0?2:0)};ht.clearScrollMemory=S_;ht.maxScroll=function(s,e){return ji(s,e?On:tn)};ht.getScrollFunc=function(s,e){return Qs(Wn(s),e?On:tn)};ht.getById=function(s){return Zu[s]};ht.getAll=function(){return it.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ht.isScrolling=function(){return!!wi};ht.snapDirectional=$f;ht.addEventListener=function(s,e){var t=Cr[s]||(Cr[s]=[]);~t.indexOf(e)||t.push(e)};ht.removeEventListener=function(s,e){var t=Cr[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ht.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,h){var u=[],f=[],d=Ae.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(_){u.length||d.restart(!0),u.push(_.trigger),f.push(_),r<=u.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Tn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Tn(r)&&(r=r(),un(ht,"refresh",function(){return r=e.batchMax()})),Va(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ht.create(c))}),t};var tm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ch=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===oi&&s(xt,t)},Il={auto:1,scroll:1},Lw=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Ae.core.getCache(r),a=Sn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==xt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Il[(l=Si(r)).overflowY]||Il[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Rr(r)&&(Il[(l=Si(r)).overflowY]||Il[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},T_=function(e,t,n,i){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Lw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&un(Dt,Xt.eventTypes[0],im,!1,!0)},onDisable:function(){return hn(Dt,Xt.eventTypes[0],im,!0)}})},Dw=/(input|label|select|textarea)/i,nm,im=function(e){var t=Dw.test(e.target.tagName);(t||nm)&&(e._gsapAllow=!0,nm=t)},Iw=function(e){dr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=Wn(e.target)||oi,h=Ae.core.globals().ScrollSmoother,u=h&&h.get(),f=Fs&&(e.content&&Wn(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),d=Qs(c,tn),_=Qs(c,On),g=1,m=(Xt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,p=0,x=Tn(i)?function(){return i(a)}:function(){return i||2.8},S,y,b=T_(c,e.type,!0,r),E=function(){return y=!1},w=Vi,R=Vi,v=function(){l=ji(c,tn),R=xa(Fs?1:0,l),n&&(w=xa(0,ji(c,On))),S=wr},M=function(){f._gsap.y=oa(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(y){requestAnimationFrame(E);var W=oa(a.deltaY/2),ee=R(d.v-W);if(f&&ee!==d.v+d.offset){d.offset=ee-d.v;var D=oa((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",d.cacheID=lt.cache,bs()}return!0}d.offset&&M(),y=!0},L,U,F,H,V=function(){v(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return f&&Ae.set(f,{y:"+=0"}),e.ignoreCheck=function(k){return Fs&&k.type==="touchmove"&&P()||g>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){y=!1;var k=g;g=oa((at.visualViewport&&at.visualViewport.scale||1)/m),L.pause(),k!==g&&Ch(c,g>1.01?!0:n?!1:"x"),U=_(),F=d(),v(),S=wr},e.onRelease=e.onGestureStart=function(k,W){if(d.offset&&M(),!W)H.restart(!0);else{lt.cache++;var ee=x(),D,ne;n&&(D=_(),ne=D+ee*.05*-k.velocityX/.227,ee*=tm(_,D,ne,ji(c,On)),L.vars.scrollX=w(ne)),D=d(),ne=D+ee*.05*-k.velocityY/.227,ee*=tm(d,D,ne,ji(c,tn)),L.vars.scrollY=R(ne),L.invalidate().duration(ee).play(.01),(Fs&&L.vars.scrollY>=l||D>=l-1)&&Ae.to({},{onUpdate:V,duration:ee})}o&&o(k)},e.onWheel=function(){L._ts&&L.pause(),Sn()-p>1e3&&(S=0,p=Sn())},e.onChange=function(k,W,ee,D,ne){if(wr!==S&&v(),W&&n&&_(w(D[2]===W?U+(k.startX-k.x):_()+W-D[1])),ee){d.offset&&M();var Ce=ne[2]===ee,Ne=Ce?F+k.startY-k.y:d()+ee-ne[1],Ue=R(Ne);Ce&&Ne!==Ue&&(F+=Ue-Ne),d(Ue)}(ee||W)&&bs()},e.onEnable=function(){Ch(c,n?!1:"x"),ht.addEventListener("refresh",V),un(at,"resize",V),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),b.enable()},e.onDisable=function(){Ch(c,!0),hn(at,"resize",V),ht.removeEventListener("refresh",V),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=Fs,Fs&&!d()&&d(1),Fs&&Ae.ticker.add(Vi),H=a._dc,L=Ae.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:b_(d,d(),function(){return L.pause()})},onUpdate:bs,onComplete:H.vars.onComplete}),a};ht.sort=function(s){if(Tn(s))return it.sort(s);var e=at.pageYOffset||0;return ht.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),it.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ht.observe=function(s){return new Xt(s)};ht.normalizeScroll=function(s){if(typeof s>"u")return Dn;if(s===!0&&Dn)return Dn.enable();if(s===!1){Dn&&Dn.kill(),Dn=s;return}var e=s instanceof Xt?s:Iw(s);return Dn&&Dn.target===e.target&&Dn.kill(),Rr(e.target)&&(Dn=e),e};ht.core={_getVelocityProp:Yu,_inputObserver:T_,_scrollers:lt,_proxies:Ji,bridge:{ss:function(){wi||Pr("scrollStart"),wi=Sn()},ref:function(){return yn}}};f_()&&Ae.registerPlugin(ht);const Nw=[{id:"trading",label:"Trading",rotationSpeed:.28,model:{type:"glb",url:"/models/logo.glb",targetSize:6.2,position:[4.8,-.3,0]}},{id:"payments",label:"Payments",rotationSpeed:.2,model:{type:"primitive",primitive:"stack-cylinders",targetSize:5.4,position:[4.8,-.3,0]}},{id:"financial-rails",label:"Financial rails",rotationSpeed:.16,model:{type:"primitive",primitive:"slab-grid",targetSize:5.8,position:[4.8,-.3,0]}},{id:"messaging",label:"Messaging",rotationSpeed:.22,model:{type:"glb",url:"/models/logo_separate.glb",targetSize:6.1,position:[4.8,-.3,0]}},{id:"privacy",label:"Privacy",rotationSpeed:.14,model:{type:"primitive",primitive:"diamond-cluster",targetSize:5.3,position:[4.8,-.3,0]}},{id:"social-coordination",label:"Social Coordination",rotationSpeed:.18,model:{type:"primitive",primitive:"ring-array",targetSize:5.6,position:[4.8,-.3,0]}}],f1=Nw[0].id;function d1({gsap:s,ScrollTrigger:e}){if(!s||!e)return;const t=document.querySelector(".cc-team");if(!t)return;const n=t.querySelectorAll(".row.row-justify-between > .col"),i=t.querySelectorAll('[data-component="team"] > *');n.length&&s.from(n,{autoAlpha:0,y:28,duration:.8,ease:"power2.out",stagger:.12,scrollTrigger:{trigger:t,start:"top 78%",once:!0}}),i.length&&i.forEach((r,o)=>{s.from(r,{autoAlpha:0,y:"+=40",duration:.75,ease:"power2.out",delay:o*.08,scrollTrigger:{trigger:r,start:"top 85%",once:!0}})})}const Uw="#1a1a1a",fs={ramp:".'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:6,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.85,color:Uw,opacity:.5};function dc(s,e,t){return Math.min(t,Math.max(e,s))}function Ow(s,e,t){return .2126*s+.7152*e+.0722*t}function Fw(s,e){return dc((s-.5)*e+.5,0,1)}function Bw(s,e){return dc(Math.pow(s,e),0,1)}function p1(){const s=document.querySelector('canvas[data-component="roadmap-ascii"]');if(!s)return null;const e=s.closest(".section.cc-roadmap"),t=s.getContext("2d");if(!t)return null;const n=document.createElement("canvas"),i=new Tc({canvas:n,antialias:!1,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(1);const r=new xc,o=new _c,a={uTime:{value:0},uScale:{value:2.55},uIntensity:{value:.88},uBase:{value:.05},uAmp:{value:.35},uResolution:{value:new Be(1,1)},uTint:{value:new B(1,1,1)}},l=new di({uniforms:a,depthWrite:!1,depthTest:!1,vertexShader:`
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
    `}),c=new wn(new Dr(2,2),l);c.frustumCulled=!1,r.add(c);let h=null,u=null,f=1,d=1,_=1,g=1,m=1,p=1;const x=()=>{const E=s.getBoundingClientRect(),w=e?.getBoundingClientRect();f=Math.max(1,Math.floor(E.width||w?.width||1)),d=Math.max(1,Math.floor(E.height||w?.height||1));const R=Math.min(window.devicePixelRatio||1,2);s.width=Math.max(1,Math.floor(f*R)),s.height=Math.max(1,Math.floor(d*R)),s.style.width=`${f}px`,s.style.height=`${d}px`,t.setTransform(R,0,0,R,0,0),t.textBaseline="top",_=dc(Math.floor(f/fs.cellSize),32,220),m=f/_,p=m/fs.aspectComp,g=dc(Math.floor(d/p),18,140),h&&h.dispose(),h=new Yn(_,g,{depthBuffer:!1,stencilBuffer:!1}),u=new Uint8Array(_*g*4),a.uResolution.value.set(f,d),i.setSize(_,g,!1)};x();const S=new ResizeObserver(x);S.observe(s),window.addEventListener("resize",x);const y=new Sc,b=()=>{if(!document.body.contains(s)){S.disconnect(),window.removeEventListener("resize",x),h?.dispose(),l.dispose(),c.geometry.dispose(),i.dispose();return}a.uTime.value=y.getElapsedTime(),i.setRenderTarget(h),i.render(r,o),i.setRenderTarget(null),i.readRenderTargetPixels(h,0,0,_,g,u),t.clearRect(0,0,f,d),t.fillStyle=fs.color,t.globalAlpha=fs.opacity;const E=Math.max(8,Math.floor(p*fs.fontScale));t.font=`${E}px monospace`;const w=Math.max(1,t.measureText("M").width),R=m/w;t.save(),t.scale(R,1);for(let v=0;v<g;v++){let M="";for(let L=0;L<_;L++){const F=((g-1-v)*_+L)*4,H=u[F]/255,V=u[F+1]/255,k=u[F+2]/255;let W=Ow(H,V,k);W=Fw(W,fs.contrast),W=Bw(W,fs.gamma);const ee=Math.floor(W*(fs.ramp.length-1));M+=fs.ramp[ee]}const P=Math.max(p,E*1.04);t.fillText(M,0,v*P)}t.restore(),t.globalAlpha=1,requestAnimationFrame(b)};return requestAnimationFrame(b),{resize:x}}const kw="#fafafa",ds={ramp:".'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:6,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.85,color:kw,opacity:.5};function No(s,e,t){return Math.min(t,Math.max(e,s))}function zw(s,e,t){return .2126*s+.7152*e+.0722*t}function Vw(s,e){return No((s-.5)*e+.5,0,1)}function Hw(s,e){return No(Math.pow(s,e),0,1)}function m1(){const s=document.querySelector('canvas[data-component="grid-canvas"]');if(!s)return null;const e=s.closest(".section.cc-on-grid"),t=s.getContext("2d");if(!t)return null;const n=document.createElement("canvas"),i=new Tc({canvas:n,antialias:!1,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(1);const r=new xc,o=new _c,a={uTime:{value:0},uScale:{value:2.55},uIntensity:{value:.88},uBase:{value:.05},uAmp:{value:.35},uResolution:{value:new Be(1,1)},uTint:{value:new B(1,1,1)}},l=new di({uniforms:a,depthWrite:!1,depthTest:!1,vertexShader:`
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
    `}),c=new wn(new Dr(2,2),l);c.frustumCulled=!1,r.add(c);let h=null,u=null,f=1,d=1,_=1,g=1,m=1,p=1;const x=()=>{const E=s.getBoundingClientRect(),w=e?.getBoundingClientRect();f=Math.max(1,Math.floor(E.width||w?.width||1)),d=Math.max(1,Math.floor(E.height||w?.height||1));const R=Math.min(window.devicePixelRatio||1,2);s.width=Math.max(1,Math.floor(f*R)),s.height=Math.max(1,Math.floor(d*R)),s.style.width=`${f}px`,s.style.height=`${d}px`,t.setTransform(R,0,0,R,0,0),t.textBaseline="top",_=No(Math.floor(f/ds.cellSize),32,220),m=f/_,p=m/ds.aspectComp,g=No(Math.floor(d/p),18,140),h&&h.dispose(),h=new Yn(_,g,{depthBuffer:!1,stencilBuffer:!1}),u=new Uint8Array(_*g*4),a.uResolution.value.set(f,d),i.setSize(_,g,!1)};x();const S=new ResizeObserver(x);S.observe(s),window.addEventListener("resize",x);const y=new Sc,b=()=>{if(!document.body.contains(s)){S.disconnect(),window.removeEventListener("resize",x),h?.dispose(),l.dispose(),c.geometry.dispose(),i.dispose();return}a.uTime.value=y.getElapsedTime(),i.setRenderTarget(h),i.render(r,o),i.setRenderTarget(null),i.readRenderTargetPixels(h,0,0,_,g,u),t.clearRect(0,0,f,d),t.fillStyle=ds.color,t.globalAlpha=ds.opacity;const E=Math.max(8,Math.floor(p*ds.fontScale));t.font=`${E}px monospace`;const w=Math.max(1,t.measureText("M").width),R=m/w;t.save(),t.scale(R,1);for(let v=0;v<g;v++){let M="";for(let L=0;L<_;L++){const F=((g-1-v)*_+L)*4,H=u[F]/255,V=u[F+1]/255,k=u[F+2]/255;let W=zw(H,V,k);W=Vw(W,ds.contrast),W=Hw(W,ds.gamma);const ee=Math.floor(W*(ds.ramp.length-1));M+=ds.ramp[ee]}const P=Math.max(p,E*1.04);t.fillText(M,0,v*P)}t.restore(),t.globalAlpha=1,requestAnimationFrame(b)};return requestAnimationFrame(b),{resize:x}}function g1(){const s=document.querySelector('[data-component="grid-stack"]');if(!s)return null;const e=s.closest(".section.cc-on-grid")||s,t=Array.from(s.querySelectorAll("img, .grid_icon-preview"));if(!t.length)return null;const n=(t.length-1)*.5,i=34,r=24,o=window.matchMedia("(hover: none), (pointer: coarse)").matches||window.innerWidth<=940,a=t.length===1,l={tx:0,ty:0,x:0,y:0,active:!1},c={angle:Math.random()*Math.PI*2,speed:Math.PI*2/3500,radiusX:i*.82,radiusY:r*.78,inView:!1};let h=0,u=null;t.forEach(m=>{m.style.willChange="transform"});const f=t.map((m,p)=>a?1:(p-n)*.36),d=()=>{o&&(c.inView&&document.visibilityState==="visible"?(c.angle+=c.speed,l.tx=Math.cos(c.angle)*c.radiusX,l.ty=Math.sin(c.angle)*c.radiusY):(l.tx=0,l.ty=0)),l.x+=(l.tx-l.x)*.14,l.y+=(l.ty-l.y)*.14,t.forEach((m,p)=>{const x=f[p],S=l.x*x*1.05,y=l.y*x*.78;m.style.transform=`translate3d(${S}px, ${y}px, 0)`}),h=requestAnimationFrame(d)},_=m=>{if(m.pointerType==="touch")return;const p=e.getBoundingClientRect(),x=No((m.clientX-p.left)/Math.max(p.width,1),0,1),S=No((m.clientY-p.top)/Math.max(p.height,1),0,1);l.tx=-(x-.5)*2*i,l.ty=-(S-.5)*2*r,l.active=!0},g=()=>{l.active=!1,l.tx=0,l.ty=0};if(!o)e.addEventListener("pointermove",_,{passive:!0}),e.addEventListener("pointerleave",g),window.addEventListener("blur",g);else{const m=()=>{const x=e.getBoundingClientRect(),S=window.innerHeight*.5;return x.top<=S&&x.bottom>=S},p=e.getBoundingClientRect();c.inView=p.bottom>0&&p.top<window.innerHeight&&m(),u=new IntersectionObserver(x=>{c.inView=!!x[0]?.isIntersecting},{threshold:0,rootMargin:"-40% 0px -40% 0px"}),u.observe(e)}return h=requestAnimationFrame(d),{destroy(){h&&cancelAnimationFrame(h),e.removeEventListener("pointermove",_),e.removeEventListener("pointerleave",g),window.removeEventListener("blur",g),u?.disconnect()}}}const E_="#ffffff",ki={ramp:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:7,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.86,color:E_,opacity:.92};function pc(s,e,t){return Math.min(t,Math.max(e,s))}function Gw(s,e,t){return .2126*s+.7152*e+.0722*t}function Ww(s,e){return pc((s-.5)*e+.5,0,1)}function Xw(s,e){return pc(Math.pow(s,e),0,1)}function sm(s,e=2.8){s.updateMatrixWorld(!0);const n=new Ai().setFromObject(s).getSize(new B),i=Math.max(n.x,n.y,n.z);i>0&&s.scale.setScalar(e/i),s.updateMatrixWorld(!0);const o=new Ai().setFromObject(s).getCenter(new B);s.position.sub(o)}function Yw(s){const e=s<=767;return{targetSize:e?2.2:2.8,cameraZ:e?6.8:6,cameraY:e?.08:.14,cellSize:e?ki.cellSize+1:ki.cellSize}}function _1(){const s=document.querySelector('.section.cc-footer canvas[data-component="footer-canvas"]')||document.querySelector('canvas[data-component="footer-canvas"]');if(!s)return null;const e=s.closest(".section.cc-footer"),t=s.getContext("2d",{alpha:!0});if(!t)return null;const n=document.createElement("canvas"),i=new Tc({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"});i.setPixelRatio(1),i.setClearColor(0,0);const r=new xc,o=new Mn(38,1,.1,100),a=new Gm(16777215,.44),l=new Da(16777215,1.12);l.position.set(3.6,2.8,4.2);const c=new Da(16777215,.6);c.position.set(-2.5,1.8,-3.8),r.add(a,l,c);const h={uTime:{value:0},uScale:{value:2.5},uIntensity:{value:.9},uBase:{value:.08},uAmp:{value:.115},uResolution:{value:new Be(1,1)},uTint:{value:new B(1,1,1)}},u=new di({uniforms:h,depthWrite:!1,depthTest:!1,transparent:!0,vertexShader:`
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
    `}),f=new wn(new Dr(2,2),u);f.frustumCulled=!1,f.renderOrder=-1e3,r.add(f);const d=new zs;r.add(d),new Kg().load((()=>{const P=new URL(import.meta.url),L=P.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//);return L?`${L[1]}/models/logo_split.glb`:`${P.origin}/models/logo_split.glb`})(),P=>{const L=P.scene.clone(!0);L.traverse(U=>{if(!U.isMesh)return;U.castShadow=!1,U.receiveShadow=!1;const F=new Xa({color:new Ke(E_),metalness:.08,roughness:.62});U.material=F}),sm(L),d.clear(),d.add(L)},void 0,P=>console.error("Failed to load footer GLB:",P));let g=null,m=null,p=1,x=1,S=1,y=1,b=1,E=1;const w=()=>{const P=s.getBoundingClientRect(),L=e?.getBoundingClientRect();p=Math.max(1,Math.floor(P.width||L?.width||1)),x=Math.max(1,Math.floor(P.height||L?.height||1));const U=Yw(p),F=Math.min(window.devicePixelRatio||1,2);s.width=Math.max(1,Math.floor(p*F)),s.height=Math.max(1,Math.floor(x*F)),s.style.width=`${p}px`,s.style.height=`${x}px`,t.setTransform(F,0,0,F,0,0),t.textBaseline="top",o.aspect=p/x,o.position.set(0,U.cameraY,U.cameraZ),o.lookAt(0,0,0),o.updateProjectionMatrix(),S=pc(Math.floor(p/U.cellSize),24,220),b=p/S,E=b/ki.aspectComp,y=pc(Math.floor(x/E),18,140),g&&g.dispose(),g=new Yn(S,y,{depthBuffer:!0,stencilBuffer:!1}),m=new Uint8Array(S*y*4),i.setSize(S,y,!1),h.uResolution.value.set(p,x),d.children[0]&&sm(d.children[0],U.targetSize)};w();const R=new ResizeObserver(w);R.observe(s),window.addEventListener("resize",w);const v=new Sc,M=()=>{if(!document.body.contains(s)){R.disconnect(),window.removeEventListener("resize",w),g?.dispose(),u.dispose(),f.geometry.dispose(),i.dispose();return}const P=v.getElapsedTime();h.uTime.value=P,d.children[0]&&(d.rotation.y=P*.16,d.rotation.x=Math.sin(P*.35)*.08),i.setRenderTarget(g),i.render(r,o),i.setRenderTarget(null),i.readRenderTargetPixels(g,0,0,S,y,m),t.clearRect(0,0,p,x),t.fillStyle=ki.color,t.globalAlpha=ki.opacity;const L=Math.max(8,Math.floor(E*ki.fontScale));t.font=`${L}px monospace`;const U=Math.max(1,t.measureText("M").width),F=b/U;t.save(),t.scale(F,1);for(let H=0;H<y;H++){let V="";for(let W=0;W<S;W++){const D=((y-1-H)*S+W)*4,ne=m[D]/255,Ce=m[D+1]/255,Ne=m[D+2]/255;let Ue=Gw(ne,Ce,Ne);Ue=Ww(Ue,ki.contrast),Ue=Xw(Ue,ki.gamma);const Ve=Math.floor(Ue*(ki.ramp.length-1));V+=ki.ramp[Ve]}const k=Math.max(E,L*1.04);t.fillText(V,0,H*k)}t.restore(),t.globalAlpha=1,requestAnimationFrame(M)};return requestAnimationFrame(M),{resize:w}}function Ph(s){return s.replace(/\[/g,"").replace(/\]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function x1(){const s=document.querySelector('[data-component="features"]');if(!s)return null;const e=Array.from(s.querySelectorAll(".system-tabs_btn"));if(!e.length)return null;console.log(`[Features Tabs] Found ${e.length} buttons`);const t=o=>{e.forEach(a=>{const l=a===o;a.classList.toggle("is-active",l),a.setAttribute("aria-pressed",String(l)),a.dataset.active=l?"true":"false";const c=a.closest(".system-tabs_list-item");c&&(c.classList.toggle("is-active",l),c.dataset.active=l?"true":"false")})};e.forEach(o=>{o.setAttribute("aria-pressed","false"),o.dataset.active="false",o.addEventListener("click",()=>{t(o),console.log(`[Features Tabs] Activated: ${o.textContent}`)})});const n=e.find(o=>Ph(o.textContent||"")==="trading")||e[0];n&&t(n);const r=(()=>{const o=document.querySelectorAll(".tabs-link");if(!o.length){console.log("[Features Tabs] No Webflow tabs found to sync");return}const a=c=>{const h=Ph(c);return e.find(u=>Ph(u.textContent||"")===h)},l=new MutationObserver(c=>{c.forEach(h=>{if(h.attributeName==="aria-selected"){const u=h.target,f=u.getAttribute("aria-selected")==="true",d=u.dataset.tabLinkName||u.textContent,_=a(d);_&&f&&(_.classList.contains("is-active")||(t(_),console.log(`[Features Tabs] Synced from Webflow: ${d}`)))}})});return o.forEach(c=>{l.observe(c,{attributes:!0})}),console.log(`[Features Tabs] Syncing with ${o.length} Webflow tabs`),l})();return console.log("[Features Tabs] Setup complete (GLB loading removed)"),{buttons:e,setActiveButton:t,destroy(){r?.disconnect()}}}const rm={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.008}};function $w(s){const e=(s.dataset.splitType||s.dataset.split||"").trim().toLowerCase();return e==="lines"||e==="words"||e==="chars"||e==="letters"?e==="letters"?"chars":e:s.tagName.toLowerCase()==="p"?"words":"lines"}function Lh(s,e,t){const n=s.dataset[e],i=Number.parseFloat(n);return Number.isFinite(i)?i:t}function qw(s,e,t){const n=t.create(s,{type:"lines, words, chars",mask:"lines",linesClass:"line",wordsClass:"word",charsClass:"letter"});return e==="words"?n.words||[]:e==="chars"?n.chars||[]:n.lines||[]}function jw(s){s.forEach(e=>{e.style.position="relative",e.style.display="inline-block",e.style.backgroundImage="linear-gradient(var(--_color---neutral--gray-matter), var(--_color---neutral--gray-matter))",e.style.backgroundRepeat="no-repeat",e.style.backgroundPosition="0 100%",e.style.backgroundSize="0% 100%",e.style.boxDecorationBreak="clone",e.style.webkitBoxDecorationBreak="clone",e.style.padding="0.03em 0.18em 0.07em",e.style.margin="0 0 0.08em"})}function v1(s={}){const e=s.gsap||window.gsap,t=s.ScrollTrigger||window.ScrollTrigger,n=window.SplitText,i=window.CustomEase;if(!e||!t||!n)return!1;e.registerPlugin(t,n),i?.create&&(i.create("osmo-ease","0.625, 0.05, 0, 1"),e.registerPlugin(i));const r=document.querySelectorAll('[data-split]:not([data-split-ignore="true"])');return r.length&&(r.forEach(o=>{if(o.dataset.splitInitialized==="true")return;const a=$w(o),l=rm[a]||rm.lines,c=Lh(o,"splitDuration",l.duration),h=Lh(o,"splitStagger",l.stagger),u=o.dataset.splitStart||"top 85%",f=o.dataset.splitOnce!=="false",d=qw(o,a,n);if(!d.length){o.dataset.splitInitialized="true";return}const _=a==="lines"&&o.dataset.splitHighlight==="true";_&&jw(d),e.fromTo(d,{yPercent:110},{yPercent:0,duration:c,stagger:h,ease:"osmo-ease",onComplete:()=>{if(!_)return;const g=Lh(o,"splitHighlightDelay",.02);e.to(d,{backgroundSize:"100% 100%",duration:.34,stagger:.08,delay:g,ease:"power2.out"})},scrollTrigger:{trigger:o,start:u,once:f,toggleActions:f?"play none none none":"play reverse play reverse"}}),o.dataset.splitInitialized="true"}),t.refresh()),!0}function y1(s){if(!s)return null;const e=document.querySelector(".navbar_menu-button.w-nav-button"),t=document.querySelector(".navbar_menu.w-nav-menu");if(!e||!t)return null;const n=window.matchMedia("(prefers-reduced-motion: reduce)");let i=null,r=null,o=null;const a=()=>Array.from(document.querySelectorAll(".navbar_links-wrapper .navbar_link")),l=()=>{const x=a();s.killTweensOf(t),s.set(t,{clearProps:"opacity,visibility,transform,width,overflow,clipPath"}),x.length&&(s.killTweensOf(x),s.set(x,{clearProps:"opacity,visibility,transform"}))},c=()=>{const x=window.getComputedStyle(e);return x.display!=="none"&&x.visibility!=="hidden"},h=()=>c(),u=()=>e.classList.contains("w--open")||t.classList.contains("w--open"),f=()=>{const x=a();if(x.length){if(n.matches){l();return}r?.kill(),i?.kill(),s.set(x,{autoAlpha:0,y:18}),i=s.timeline({defaults:{overwrite:!0}}).to(x,{autoAlpha:1,y:0,delay:.1,duration:1,ease:"sine.out",stagger:.14})}},d=()=>{const x=a();if(x.length){if(n.matches){l();return}i?.kill(),r?.kill(),r=s.timeline({defaults:{overwrite:!0}}).to(x,{autoAlpha:0,y:10,duration:.5,ease:"sine.inOut",stagger:{each:.05,from:"end"}})}},_=(x=!1)=>{if(!h()){o=u(),l();return}const S=u();!x&&S===o||(o=S,S?f():d())},g=new MutationObserver(x=>{for(const S of x)if(S.attributeName==="class"){_();break}});g.observe(e,{attributes:!0,attributeFilter:["class"]}),g.observe(t,{attributes:!0,attributeFilter:["class"]});const m=()=>_(!0),p=()=>_(!0);return window.addEventListener("resize",m,{passive:!0}),window.addEventListener("pageshow",p),_(!0),{destroy(){g.disconnect(),i?.kill(),r?.kill(),window.removeEventListener("resize",m),window.removeEventListener("pageshow",p),l()}}}const Kw=768;function Zw(){return window.innerWidth<=Kw}function Jw(s,e,t,n){const i=Math.max(s/t,e/n),r=t*i,o=n*i,a=(s-r)/2,l=(e-o)/2;return{bw:r,bh:o,offsetX:a,offsetY:l}}function Qw(){const s=Array.from(document.querySelectorAll("[data-spot]"));if(!s.length)return[];const e=[];return s.forEach(t=>{const n=t.querySelector("img"),i=Number(t.dataset.radius??160),r=Number(t.dataset.soft??70),o=(t.dataset.hideOnLeave??"true")!=="false";let a=t.querySelector(".spotlight");a||(a=document.createElement("div"),a.className="spotlight",a.setAttribute("aria-hidden","true"),t.appendChild(a)),window.getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.style.overflow=t.style.overflow||"hidden",t.style.touchAction="none",t.style.setProperty("--spot-soft",`${r}%`),t.style.setProperty("--d",`${i*2}px`),a.style.position="absolute",a.style.left="0",a.style.top="0",a.style.width="var(--d)",a.style.height="var(--d)",a.style.pointerEvents="none",a.style.willChange="transform",a.style.transform="translate3d(var(--tx), var(--ty), 0)",a.style.backgroundRepeat="no-repeat",a.style.backgroundSize="var(--bw) var(--bh)",a.style.backgroundPosition="var(--bpx) var(--bpy)",a.style.webkitMaskImage="radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) calc(100% - var(--spot-soft)), rgba(255,255,255,0) 100%)",a.style.maskImage="radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) calc(100% - var(--spot-soft)), rgba(255,255,255,0) 100%)",a.style.webkitMaskRepeat="no-repeat",a.style.maskRepeat="no-repeat";const l=()=>{const R=n?.currentSrc||n?.src;if(R){a.style.backgroundImage=`url("${R}")`;return}const v=window.getComputedStyle(t).backgroundImage;v&&v!=="none"&&(a.style.backgroundImage=v)};n?.complete?l():n?n.addEventListener("load",l,{once:!0}):l();let c=null;const h=()=>{const R=t.getBoundingClientRect();n?.naturalWidth&&n?.naturalHeight?c=Jw(R.width,R.height,n.naturalWidth,n.naturalHeight):c={bw:R.width,bh:R.height,offsetX:0,offsetY:0},t.style.setProperty("--bw",`${c.bw}px`),t.style.setProperty("--bh",`${c.bh}px`)},u=R=>{t.dataset.active=R?"true":"false",R?(a.style.opacity="1",a.style.transition="opacity 60ms ease"):(a.style.opacity="0",a.style.transition="opacity 160ms ease")};let f=!1,d=0,_=0;const g=()=>{if(f=!1,!c)return;const R=d-i,v=_-i;t.style.setProperty("--tx",`${R}px`),t.style.setProperty("--ty",`${v}px`);const M=c.offsetX-R,P=c.offsetY-v;t.style.setProperty("--bpx",`${M}px`),t.style.setProperty("--bpy",`${P}px`)},m=()=>{f||(f=!0,requestAnimationFrame(g))};let p=null,x=null;const S=(R,v)=>{p=R,x=v;const M=t.getBoundingClientRect();if(!(R>=M.left&&R<=M.right&&v>=M.top&&v<=M.bottom)){o&&u(!1);return}d=Math.min(M.width,Math.max(0,R-M.left)),_=Math.min(M.height,Math.max(0,v-M.top)),u(!0),m()},y=R=>{S(R.clientX,R.clientY)},b=()=>{p==null||x==null||S(p,x)};window.addEventListener("pointermove",y,{passive:!0}),window.addEventListener("mousemove",y,{passive:!0}),window.addEventListener("scroll",b,{passive:!0}),u(!o);const E=()=>{h();const R=t.getBoundingClientRect();d=R.width/2,_=R.height/2,m()};n?.complete?E():n?n.addEventListener("load",E,{once:!0}):E();const w=new ResizeObserver(()=>{h(),m(),p!=null&&x!=null&&S(p,x)});w.observe(t),e.push(w)}),e}function S1(){if(Zw())return null;const s=document.createElement("div");s.id="cursor",s.style.cssText=`
    position: fixed;
    left: 0; top: 0;
    width: 10px; height: 10px;
    border-radius: 999px;
    background: #5491ff;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 2147483647;
    opacity: 0;
    transition: transform 0.15s ease-out, background-color 0.15s ease-out;
  `;const e=document.createElement("div");e.id="cursorLabel",e.style.cssText=`
    position: fixed;
    left: 0; top: 0;
    padding: 0;
    color: #1a1a1a;
    font: 12px/1 Consolas, "Courier New", monospace;
    letter-spacing: 0.2px;
    pointer-events: none;
    z-index: 2147483647;
    opacity: 0;
    white-space: nowrap;
    text-shadow: 0 1px 0 #ffffff;
    transition: color 0.15s ease-out, text-shadow 0.15s ease-out;
  `,document.body.appendChild(s),document.body.appendChild(e);const t={x:window.innerWidth*.5,y:window.innerHeight*.5,active:!1},n={x:0,y:-14},i={x:14,y:-24};let r=t.x,o=t.y,a=t.x+i.x,l=t.y+i.y;const c=.12,h=y=>{t.x=y.clientX,t.y=y.clientY,t.active=!0,s.style.opacity="1",e.style.opacity="1",e.textContent=`${Math.round(t.x)}, ${Math.round(t.y)}`};window.addEventListener("pointermove",h,{passive:!0}),window.addEventListener("pointerdown",h,{passive:!0}),window.addEventListener("pointerleave",()=>{t.active=!1,s.style.opacity="0",e.style.opacity="0"});const u=()=>{if(t.active){const y=t.x+n.x,b=t.y+n.y;r+=(y-r)*c,o+=(b-o)*c,s.style.left=`${r}px`,s.style.top=`${o}px`;const E=t.x+i.x,w=t.y+i.y;a+=(E-a)*c,l+=(w-l)*c,e.style.left=`${a}px`,e.style.top=`${l}px`}requestAnimationFrame(u)};requestAnimationFrame(u);const f=y=>{if(!y)return!1;const b=y.tagName.toLowerCase(),E=y.getAttribute("role"),w=["button","link","menuitem","tab","option"];return b==="button"||b==="a"||b==="input"||b==="textarea"||b==="select"||y.onclick||w.includes(E)||y.style.cursor==="pointer"||window.getComputedStyle(y).cursor==="pointer"},d=()=>{s.style.transform="translate(-50%, -50%) scale(2)"},_=()=>{s.style.transform="translate(-50%, -50%) scale(1)"};document.addEventListener("mouseover",y=>{f(y.target)&&d()}),document.addEventListener("mouseout",y=>{f(y.target)&&_()});const g=[".section.cc-stats",".navbar_menu","#navbar_menu",".w-nav-menu",".nav-menu",'[data-collapse="medium"]'],m=y=>y?g.some(b=>{const E=document.querySelectorAll(b);return Array.from(E).some(w=>w.contains(y))}):!1,p=()=>{s.style.background="#ffffff",e.style.color="#ffffff",e.style.textShadow="0 1px 2px rgba(0,0,0,0.5)"},x=()=>{s.style.background="#5491ff",e.style.color="#1a1a1a",e.style.textShadow="0 1px 0 #ffffff"};document.addEventListener("mouseover",y=>{m(y.target)&&p()}),document.addEventListener("mouseout",y=>{m(y.target)&&x()});const S=Qw();return{cursor:s,cursorLabel:e,spotlightObservers:S}}const e1={blue:{selectors:[".section.cc-stats",".section.cc-resources"],className:"is-on-blue"},dark:{selectors:[".section.cc-on-grid",".section.cc-team",".section.cc-footer"],className:"is-on-dark"},green:{selectors:[".section.cc-roadmap"],className:"is-on-green"}};function t1(s,e,t=""){if(!s)return!1;const n=s.getBoundingClientRect(),i=n.bottom;return e.some(r=>{const o=document.querySelectorAll(r);return t&&o.length&&console.log(`[nav-scroll] ${t}: found ${o.length} for "${r}"`),Array.from(o).some(a=>{const l=a.getBoundingClientRect(),c=i>=l.top&&n.top<=l.bottom;return t&&console.log(`[nav-scroll] ${t}: overlap=${c} | nav[${Math.round(n.top)}-${Math.round(i)}] vs section[${Math.round(l.top)}-${Math.round(l.bottom)}]`),c})})}function n1(){return document.querySelector(".nav")||document.querySelector(".navbar")||document.querySelector(".w-nav")||document.querySelector('[role="navigation"]')}function M1(){const s=n1();if(!s){console.warn('[nav-scroll] No nav found. Tried: .nav, .navbar, .w-nav, [role="navigation"]');return}console.log("[nav-scroll] Found nav:",s.className);const e=20,t=()=>{const n=window.scrollY>e;s.classList.toggle("scrolled",n),Object.entries(e1).forEach(([i,r])=>{const o=t1(s,r.selectors,i);s.classList.toggle(r.className,o)})};return requestAnimationFrame(()=>{t(),setTimeout(t,100)}),window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t,{passive:!0}),{nav:s,threshold:e}}Gi.registerPlugin(ht);const i1=768;function w_(){return window.innerWidth<=i1}function s1(s){if(/^https?:\/\//i.test(s))return s;const e=new URL(import.meta.url),t=e.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//),n=t?t[1]:e.origin,i=s.startsWith("/")?s:`/${s}`;return`${n}${i}`}function mc(s,e,t){return Math.min(t,Math.max(e,s))}function r1(s,e,t){return .2126*s+.7152*e+.0722*t}function o1(s,e){return mc((s-.5)*e+.5,0,1)}function a1(s,e){return mc(Math.pow(s,e),0,1)}const ps={ramp:" .'`^\",:;Il!i<>~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:8,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.85,color:"#ffffff",opacity:.75};function b1(){const s=document.querySelector('[data-component="stats-canvas"]');if(!s)return console.log("[Stats ASCII] Canvas not found"),null;const e=document.querySelector(".cc-stats");if(!e)return console.log("[Stats ASCII] Stats section not found"),null;const t=s.getContext("2d",{alpha:!0});if(!t)return null;let n=!1,i=!1,r=null,o=null,a=null,l=1,c=1,h=1,u=1,f=1,d=1;const _=document.createElement("canvas"),g=new Tc({canvas:_,antialias:!1,alpha:!0,powerPreference:"high-performance"});g.setPixelRatio(1),g.setClearColor(0,0);const m=new xc,p=new Mn(45,1,.1,100);p.position.set(0,6,14),p.lookAt(0,0,0);const x=new Gm(16777215,.5),S=new Da(16777215,1);S.position.set(5,5,5);const y=new Da(16777215,.5);y.position.set(-2,3,-4),m.add(x,S,y);const b=()=>{let L=s,U=0,F=0;for(;L&&L!==document.body;){if(L.offsetWidth>1&&L.offsetHeight>1){U=L.offsetWidth,F=L.offsetHeight;break}L=L.parentElement}return U<2&&(U=window.innerWidth),F<2&&(F=window.innerHeight),{w:Math.max(1,Math.floor(U)),h:Math.max(1,Math.floor(F))}},E=()=>{const{w:L,h:U}=b();f=L,d=U;const F=Math.min(window.devicePixelRatio||1,2);s.width=Math.max(1,Math.floor(f*F)),s.height=Math.max(1,Math.floor(d*F)),s.style.width=`${f}px`,s.style.height=`${d}px`,t.setTransform(F,0,0,F,0,0),t.textBaseline="top",l=mc(Math.floor(f/ps.cellSize),32,180),h=f/l,u=h/ps.aspectComp,c=mc(Math.floor(d/u),20,120),o&&o.dispose(),o=new Yn(l,c,{depthBuffer:!0,stencilBuffer:!1}),a=new Uint8Array(l*c*4),g.setSize(l,c,!1),p.aspect=f/d,p.updateProjectionMatrix();const H=f/d,V=6+H*2,k=1+H*.3;p.position.set(0,k,V),p.lookAt(0,-12,0)},w=()=>{if(n)return;n=!0,console.log("[Stats ASCII] Loading earth model..."),E(),new Kg().load(s1("/models/earth.glb"),U=>{r=U.scene;const F=new Ai().setFromObject(r),H=F.getCenter(new B),V=F.getSize(new B),k=Math.max(V.x,V.y,V.z),W=w_()?14:28,ee=W/k;r.position.sub(H),r.scale.setScalar(ee),r.position.y=-(W*.78),r.traverse(D=>{D.isMesh&&(D.material=new Xa({color:16777215,metalness:.1,roughness:.3}))}),m.add(r),console.log("[Stats ASCII] Model loaded, starting animation"),v()},void 0,U=>{console.error("[Stats ASCII] Failed to load model:",U)})},R=new Sc,v=()=>{if(!document.body.contains(s)){M.disconnect(),window.removeEventListener("resize",P),o?.dispose(),g.dispose();return}if(!i){requestAnimationFrame(v);return}const L=R.getElapsedTime();r&&(r.rotation.y=L*.15),g.setRenderTarget(o),g.render(m,p),g.setRenderTarget(null),g.readRenderTargetPixels(o,0,0,l,c,a),t.clearRect(0,0,f,d),t.fillStyle=ps.color,t.globalAlpha=ps.opacity;const U=Math.max(8,Math.floor(u*ps.fontScale));t.font=`${U}px monospace`;const F=Math.max(1,t.measureText("M").width),H=h/F;t.save(),t.scale(H,1);const V=Math.max(u,U*1.04);for(let k=0;k<c;k++){const W=c-1-k;let ee="";for(let D=0;D<l;D++){const ne=(W*l+D)*4,Ce=a[ne]/255,Ne=a[ne+1]/255,Ue=a[ne+2]/255;let Ve=r1(Ce,Ne,Ue);Ve=o1(Ve,ps.contrast),Ve=a1(Ve,ps.gamma);const j=Math.floor(Ve*(ps.ramp.length-1));ee+=ps.ramp[j]}t.fillText(ee,0,k*V)}t.restore(),t.globalAlpha=1,requestAnimationFrame(v)},M=new IntersectionObserver(L=>{L.forEach(U=>{i=U.isIntersecting,i&&!n&&(console.log("[Stats ASCII] Section in view - loading model"),w())})},{threshold:.05});M.observe(e),console.log("[Stats ASCII] Intersection Observer attached to stats section");const P=()=>{E()};return window.addEventListener("resize",P),{observer:M,resize:E}}function T1(){if(!w_())return null;const s=document.querySelector('[data-component="stats-grid"]');if(!s)return console.log("[Mobile Stats Grid] Grid element not found"),null;const e=s.querySelectorAll(".col");if(!e.length)return console.log("[Mobile Stats Grid] No stat items found"),null;console.log(`[Mobile Stats Grid] Found ${e.length} items`),Gi.set(e,{filter:"blur(10px)",opacity:0,y:20});const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(console.log("[Mobile Stats Grid] In view — animating items"),Gi.to(e,{filter:"blur(0px)",opacity:1,y:0,duration:.6,ease:"power2.out",stagger:.1}),t.disconnect())})},{threshold:.3,rootMargin:"0px 0px -10% 0px"});return t.observe(s),console.log("[Mobile Stats Grid] Intersection Observer attached"),{items:e,observer:t,destroy(){t.disconnect()}}}function E1(){const s=document.querySelector(".roadmap_grid");if(!s)return console.log("[Roadmap] Grid not found"),null;const e=s.querySelectorAll(".roadmap_item");if(!e.length)return console.log("[Roadmap] No items found"),null;console.log(`[Roadmap] Found ${e.length} items`);const t=s.querySelectorAll('[data-component="time-stamp"]');console.log(`[Roadmap] Found ${t.length} timestamp elements`),Gi.set(e,{filter:"blur(10px)",opacity:0}),Gi.set(t,{y:30,opacity:0,"--dot-scale":0});const i=window.innerWidth<=768?"--before-height":"--before-width";Gi.set(s,{[i]:"0%"});const r=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&(console.log("[Roadmap] Grid in view - starting animations"),Gi.to(e,{filter:"blur(0px)",opacity:1,duration:.9,ease:"power2.out",stagger:.15}),Gi.to(t,{y:0,opacity:1,"--dot-scale":1,duration:.9,ease:"power3.out",stagger:.15}),Gi.to(s,{[i]:"100%",duration:1.8,ease:"power2.inOut"}),r.disconnect())})},{threshold:.2,rootMargin:"0px 0px -10% 0px"});return r.observe(s),console.log("[Roadmap] Intersection Observer attached to grid"),{items:e,timestampElements:t,observer:r,destroy(){r.disconnect()}}}export{Gm as A,Ai as B,Sc as C,Da as D,v1 as E,Nw as F,zs as G,Fm as H,Bm as I,f1 as J,u1 as L,wn as M,h1 as O,L_ as P,ht as S,km as T,Be as V,Tc as W,l1 as _,Qg as a,y1 as b,M1 as c,b1 as d,T1 as e,E1 as f,Gi as g,d1 as h,xc as i,Mn as j,di as k,B as l,Dr as m,Xa as n,Kg as o,p1 as p,m1 as q,g1 as r,S1 as s,x1 as t,_1 as u,Wa as v,c1 as w,Ke as x,Tm as y,Yn as z};
