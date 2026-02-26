const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/style.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const j0="modulepreload",K0=function(r){return"/"+r},Qd={},Z0=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=l(t.map(c=>{if(c=K0(c),c in Qd)return;Qd[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":j0,u||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((d,g)=>{f.addEventListener("load",d),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};const Jf="182",Go={ROTATE:0,DOLLY:1,PAN:2},Fo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},J0=0,ep=1,Q0=2,bc=1,yg=2,ka=3,Yr=0,ai=1,ur=2,Gr=0,Wo=1,tp=2,np=3,ip=4,ev=5,Ys=100,tv=101,nv=102,iv=103,rv=104,sv=200,ov=201,av=202,lv=203,Eh=204,Ah=205,cv=206,uv=207,hv=208,fv=209,dv=210,pv=211,mv=212,gv=213,_v=214,Rh=0,Ch=1,Ph=2,ea=3,Lh=4,Dh=5,Ih=6,Nh=7,Sg=0,vv=1,xv=2,gr=0,Mg=1,bg=2,wg=3,Tg=4,Eg=5,Ag=6,Rg=7,rp="attached",yv="detached",Cg=300,ao=301,ta=302,Oh=303,Uh=304,lu=306,na=1e3,fr=1001,kc=1002,hn=1003,Pg=1004,za=1005,fn=1006,wc=1007,zr=1008,bi=1009,Lg=1010,Dg=1011,dl=1012,Qf=1013,xr=1014,Bi=1015,qr=1016,ed=1017,td=1018,pl=1020,Ig=35902,Ng=35899,Og=1021,Ug=1022,ki=1023,$r=1026,$s=1027,nd=1028,id=1029,ia=1030,rd=1031,sd=1033,Tc=33776,Ec=33777,Ac=33778,Rc=33779,Fh=35840,Bh=35841,kh=35842,zh=35843,Vh=36196,Hh=37492,Gh=37496,Wh=37488,Xh=37489,Yh=37490,qh=37491,$h=37808,jh=37809,Kh=37810,Zh=37811,Jh=37812,Qh=37813,ef=37814,tf=37815,nf=37816,rf=37817,sf=37818,of=37819,af=37820,lf=37821,cf=36492,uf=36494,hf=36495,ff=36283,df=36284,pf=36285,mf=36286,ml=2300,gl=2301,xu=2302,sp=2400,op=2401,ap=2402,Sv=2500,Mv=0,Fg=1,gf=2,bv=3200,od=0,wv=1,us="",En="srgb",Qn="srgb-linear",zc="linear",Mt="srgb",go=7680,lp=519,Tv=512,Ev=513,Av=514,ad=515,Rv=516,Cv=517,ld=518,Pv=519,_f=35044,cp="300 es",dr=2e3,Vc=2001;function Bg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Lv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function _l(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Dv(){const r=_l("canvas");return r.style.display="block",r}const up={};function Hc(...r){const e="THREE."+r.shift();console.log(e,...r)}function ke(...r){const e="THREE."+r.shift();console.warn(e,...r)}function je(...r){const e="THREE."+r.shift();console.error(e,...r)}function vl(...r){const e=r.join(" ");e in up||(up[e]=!0,ke(...r))}function Iv(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class ho{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hp=1234567;const Ka=Math.PI/180,ra=180/Math.PI;function Ji(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function st(r,e,t){return Math.max(e,Math.min(t,r))}function cd(r,e){return(r%e+e)%e}function Nv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Ov(r,e,t){return r!==e?(t-r)/(e-r):0}function Za(r,e,t){return(1-t)*r+t*e}function Uv(r,e,t,n){return Za(r,e,1-Math.exp(-t*n))}function Fv(r,e=1){return e-Math.abs(cd(r,e*2)-e)}function Bv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function kv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function zv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Vv(r,e){return r+Math.random()*(e-r)}function Hv(r){return r*(.5-Math.random())}function Gv(r){r!==void 0&&(hp=r);let e=hp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wv(r){return r*Ka}function Xv(r){return r*ra}function Yv(r){return(r&r-1)===0&&r!==0}function qv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function $v(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function jv(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ki(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Qi={DEG2RAD:Ka,RAD2DEG:ra,generateUUID:Ji,clamp:st,euclideanModulo:cd,mapLinear:Nv,inverseLerp:Ov,lerp:Za,damp:Uv,pingpong:Fv,smoothstep:Bv,smootherstep:kv,randInt:zv,randFloat:Vv,randFloatSpread:Hv,seededRandom:Gv,degToRad:Wv,radToDeg:Xv,isPowerOfTwo:Yv,ceilPowerOfTwo:qv,floorPowerOfTwo:$v,setQuaternionFromProperEuler:jv,normalize:bt,denormalize:Ki};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=l*f+c*d+u*g+h*_;m<0&&(f=-f,d=-d,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const v=Math.acos(m),x=Math.sin(v);p=Math.sin(p*v)/x,a=Math.sin(a*v)/x,l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+_*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+_*a;const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yu.copy(this).projectOnVector(e),this.sub(yu)}reflect(e){return this.sub(yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yu=new F,fp=new yr;class tt{constructor(e,t,n,i,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],y=i[7],b=i[2],T=i[5],E=i[8];return s[0]=o*_+a*v+l*b,s[3]=o*m+a*x+l*T,s[6]=o*p+a*y+l*E,s[1]=c*_+u*v+h*b,s[4]=c*m+u*x+h*T,s[7]=c*p+u*y+h*E,s[2]=f*_+d*v+g*b,s[5]=f*m+d*x+g*T,s[8]=f*p+d*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Su.makeScale(e,t)),this}rotate(e){return this.premultiply(Su.makeRotation(-e)),this}translate(e,t){return this.premultiply(Su.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Su=new tt,dp=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pp=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kv(){const r={enabled:!0,workingColorSpace:Qn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(i.r=Wr(i.r),i.g=Wr(i.g),i.b=Wr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(i.r=Xo(i.r),i.g=Xo(i.g),i.b=Xo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===us?zc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return vl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return vl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Qn]:{primaries:e,whitePoint:n,transfer:zc,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),r}const dt=Kv();function Wr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let _o;class Zv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_o===void 0&&(_o=_l("canvas")),_o.width=e.width,_o.height=e.height;const i=_o.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=_o}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_l("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Wr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wr(t[n]/255)*255):t[n]=Wr(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jv=0;class ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Mu(i[o].image)):s.push(Mu(i[o]))}else s=Mu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Mu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let Qv=0;const bu=new F;class Mn extends ho{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,n=fr,i=fr,s=fn,o=zr,a=ki,l=bi,c=Mn.DEFAULT_ANISOTROPY,u=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Ji(),this.name="",this.source=new ud(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bu).x}get height(){return this.source.getSize(bu).y}get depth(){return this.source.getSize(bu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case kc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case kc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Cg;Mn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,i=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(d+1)/2,b=(p+1)/2,T=(u+f)/4,E=(h+_)/4,R=(g+m)/4;return x>y&&x>b?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=E/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=R/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=E/s,i=R/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ex extends ho{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Mn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ud(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends ex{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kg extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tx extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Et{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wi):Wi.fromBufferAttribute(s,o),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ul.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ul.copy(n.boundingBox)),Ul.applyMatrix4(e.matrixWorld),this.union(Ul)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),Fl.subVectors(this.max,Ea),vo.subVectors(e.a,Ea),xo.subVectors(e.b,Ea),yo.subVectors(e.c,Ea),Qr.subVectors(xo,vo),es.subVectors(yo,xo),Ds.subVectors(vo,yo);let t=[0,-Qr.z,Qr.y,0,-es.z,es.y,0,-Ds.z,Ds.y,Qr.z,0,-Qr.x,es.z,0,-es.x,Ds.z,0,-Ds.x,-Qr.y,Qr.x,0,-es.y,es.x,0,-Ds.y,Ds.x,0];return!wu(t,vo,xo,yo,Fl)||(t=[1,0,0,0,1,0,0,0,1],!wu(t,vo,xo,yo,Fl))?!1:(Bl.crossVectors(Qr,es),t=[Bl.x,Bl.y,Bl.z],wu(t,vo,xo,yo,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cr=[new F,new F,new F,new F,new F,new F,new F,new F],Wi=new F,Ul=new Et,vo=new F,xo=new F,yo=new F,Qr=new F,es=new F,Ds=new F,Ea=new F,Fl=new F,Bl=new F,Is=new F;function wu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Is.fromArray(r,s);const a=i.x*Math.abs(Is.x)+i.y*Math.abs(Is.y)+i.z*Math.abs(Is.z),l=e.dot(Is),c=t.dot(Is),u=n.dot(Is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const nx=new Et,Aa=new F,Tu=new F;class wr{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);const t=Aa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Aa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Tu)),this.expandByPoint(Aa.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pr=new F,Eu=new F,kl=new F,ts=new F,Au=new F,zl=new F,Ru=new F;class Dl{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,t),Pr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Eu.copy(e).add(t).multiplyScalar(.5),kl.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(Eu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(kl),a=ts.dot(this.direction),l=-ts.dot(kl),c=ts.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Eu).addScaledVector(kl,f),d}intersectSphere(e,t){Pr.subVectors(e.center,this.origin);const n=Pr.dot(this.direction),i=Pr.dot(Pr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,t,n,i,s){Au.subVectors(t,e),zl.subVectors(n,e),Ru.crossVectors(Au,zl);let o=this.direction.dot(Ru),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,e);const l=a*this.direction.dot(zl.crossVectors(ts,zl));if(l<0)return null;const c=a*this.direction.dot(Au.cross(ts));if(c<0||l+c>o)return null;const u=-a*ts.dot(Ru);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/So.setFromMatrixColumn(e,0).length(),s=1/So.setFromMatrixColumn(e,1).length(),o=1/So.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ix,e,rx)}lookAt(e,t,n){const i=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),ns.crossVectors(n,gi),ns.lengthSq()===0&&(Math.abs(n.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),ns.crossVectors(n,gi)),ns.normalize(),Vl.crossVectors(gi,ns),i[0]=ns.x,i[4]=Vl.x,i[8]=gi.x,i[1]=ns.y,i[5]=Vl.y,i[9]=gi.y,i[2]=ns.z,i[6]=Vl.z,i[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],y=n[11],b=n[15],T=i[0],E=i[4],R=i[8],S=i[12],w=i[1],C=i[5],P=i[9],N=i[13],B=i[2],V=i[6],k=i[10],z=i[14],W=i[3],ee=i[7],D=i[11],Q=i[15];return s[0]=o*T+a*w+l*B+c*W,s[4]=o*E+a*C+l*V+c*ee,s[8]=o*R+a*P+l*k+c*D,s[12]=o*S+a*N+l*z+c*Q,s[1]=u*T+h*w+f*B+d*W,s[5]=u*E+h*C+f*V+d*ee,s[9]=u*R+h*P+f*k+d*D,s[13]=u*S+h*N+f*z+d*Q,s[2]=g*T+_*w+m*B+p*W,s[6]=g*E+_*C+m*V+p*ee,s[10]=g*R+_*P+m*k+p*D,s[14]=g*S+_*N+m*z+p*Q,s[3]=v*T+x*w+y*B+b*W,s[7]=v*E+x*C+y*V+b*ee,s[11]=v*R+x*P+y*k+b*D,s[15]=v*S+x*N+y*z+b*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],v=l*d-c*f,x=a*d-c*h,y=a*f-l*h,b=o*d-c*u,T=o*f-l*u,E=o*h-a*u;return t*(_*v-m*x+p*y)-n*(g*v-m*b+p*T)+i*(g*x-_*b+p*E)-s*(g*y-_*T+m*E)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,x=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,y=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,b=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,T=t*v+n*x+i*y+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=v*E,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*E,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*E,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*E,e[4]=x*E,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*E,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*E,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*E,e[8]=y*E,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*E,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*E,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*E,e[12]=b*E,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*E,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,v=l*c,x=l*u,y=l*h,b=n.x,T=n.y,E=n.z;return i[0]=(1-(_+p))*b,i[1]=(d+y)*b,i[2]=(g-x)*b,i[3]=0,i[4]=(d-y)*T,i[5]=(1-(f+p))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+x)*E,i[9]=(m-v)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=So.set(i[0],i[1],i[2]).length();const o=So.set(i[4],i[5],i[6]).length(),a=So.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Xi.copy(this);const c=1/s,u=1/o,h=1/a;return Xi.elements[0]*=c,Xi.elements[1]*=c,Xi.elements[2]*=c,Xi.elements[4]*=u,Xi.elements[5]*=u,Xi.elements[6]*=u,Xi.elements[8]*=h,Xi.elements[9]*=h,Xi.elements[10]*=h,t.setFromRotationMatrix(Xi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=dr,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===dr)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Vc)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=dr,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===dr)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Vc)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const So=new F,Xi=new it,ix=new F(0,0,0),rx=new F(1,1,1),ns=new F,Vl=new F,gi=new F,mp=new it,gp=new yr;class Sr{constructor(e=0,t=0,n=0,i=Sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gp.setFromEuler(this),this.setFromQuaternion(gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sr.DEFAULT_ORDER="XYZ";class zg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sx=0;const _p=new F,Mo=new yr,Lr=new it,Hl=new F,Ra=new F,ox=new F,ax=new yr,vp=new F(1,0,0),xp=new F(0,1,0),yp=new F(0,0,1),Sp={type:"added"},lx={type:"removed"},bo={type:"childadded",child:null},Cu={type:"childremoved",child:null};class Wt extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new F,t=new Sr,n=new yr,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new tt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(e,t){return Mo.setFromAxisAngle(e,t),this.quaternion.premultiply(Mo),this}rotateX(e){return this.rotateOnAxis(vp,e)}rotateY(e){return this.rotateOnAxis(xp,e)}rotateZ(e){return this.rotateOnAxis(yp,e)}translateOnAxis(e,t){return _p.copy(e).applyQuaternion(this.quaternion),this.position.add(_p.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vp,e)}translateY(e){return this.translateOnAxis(xp,e)}translateZ(e){return this.translateOnAxis(yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Lr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hl.copy(e):Hl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Lr.lookAt(Ra,Hl,this.up):Lr.lookAt(Hl,Ra,this.up),this.quaternion.setFromRotationMatrix(Lr),i&&(Lr.extractRotation(i.matrixWorld),Mo.setFromRotationMatrix(Lr),this.quaternion.premultiply(Mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sp),bo.child=e,this.dispatchEvent(bo),bo.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lx),Cu.child=e,this.dispatchEvent(Cu),Cu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sp),bo.child=e,this.dispatchEvent(bo),bo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,ox),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,ax,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Wt.DEFAULT_UP=new F(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yi=new F,Dr=new F,Pu=new F,Ir=new F,wo=new F,To=new F,Mp=new F,Lu=new F,Du=new F,Iu=new F,Nu=new Bt,Ou=new Bt,Uu=new Bt;class Zi{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yi.subVectors(e,t),i.cross(Yi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Yi.subVectors(i,t),Dr.subVectors(n,t),Pu.subVectors(e,t);const o=Yi.dot(Yi),a=Yi.dot(Dr),l=Yi.dot(Pu),c=Dr.dot(Dr),u=Dr.dot(Pu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ir)===null?!1:Ir.x>=0&&Ir.y>=0&&Ir.x+Ir.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ir.x),l.addScaledVector(o,Ir.y),l.addScaledVector(a,Ir.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Nu.setScalar(0),Ou.setScalar(0),Uu.setScalar(0),Nu.fromBufferAttribute(e,t),Ou.fromBufferAttribute(e,n),Uu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Nu,s.x),o.addScaledVector(Ou,s.y),o.addScaledVector(Uu,s.z),o}static isFrontFacing(e,t,n,i){return Yi.subVectors(n,t),Dr.subVectors(e,t),Yi.cross(Dr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),Dr.subVectors(this.a,this.b),Yi.cross(Dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Zi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;wo.subVectors(i,n),To.subVectors(s,n),Lu.subVectors(e,n);const l=wo.dot(Lu),c=To.dot(Lu);if(l<=0&&c<=0)return t.copy(n);Du.subVectors(e,i);const u=wo.dot(Du),h=To.dot(Du);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(wo,o);Iu.subVectors(e,s);const d=wo.dot(Iu),g=To.dot(Iu);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(To,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Mp.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Mp,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(wo,o).addScaledVector(To,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function Fu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=cd(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Fu(o,s,e+1/3),this.g=Fu(o,s,e),this.b=Fu(o,s,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=En){function n(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=Vg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return dt.workingToColorSpace(Dn.copy(this),e),Math.round(st(Dn.r*255,0,255))*65536+Math.round(st(Dn.g*255,0,255))*256+Math.round(st(Dn.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Dn.copy(this),t);const n=Dn.r,i=Dn.g,s=Dn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=En){dt.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,n=Dn.g,i=Dn.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(Gl);const n=Za(is.h,Gl.h,t),i=Za(is.s,Gl.s,t),s=Za(is.l,Gl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ke;Ke.NAMES=Vg;let cx=0;class er extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Wo,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Ah,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wo&&(n.blending=this.blending),this.side!==Yr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eh&&(n.blendSrc=this.blendSrc),this.blendDst!==Ah&&(n.blendDst=this.blendDst),this.blendEquation!==Ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(n.stencilFail=this.stencilFail),this.stencilZFail!==go&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class js extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.combine=Sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new F,Wl=new ze;let ux=0;class Jn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ux++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_f,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wl.fromBufferAttribute(this,t),Wl.applyMatrix3(e),this.setXY(t,Wl.x,Wl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_f&&(e.usage=this.usage),e}}class Hg extends Jn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gg extends Jn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sn extends Jn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hx=0;const Di=new it,Bu=new Wt,Eo=new F,_i=new Et,Ca=new Et,_n=new F;class ei extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bg(e)?Gg:Hg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,n){return Di.makeTranslation(e,t,n),this.applyMatrix4(Di),this}scale(e,t,n){return Di.makeScale(e,t,n),this.applyMatrix4(Di),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Et);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ca.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(_i.min,Ca.min),_i.expandByPoint(_n),_n.addVectors(_i.max,Ca.max),_i.expandByPoint(_n)):(_i.expandByPoint(Ca.min),_i.expandByPoint(Ca.max))}_i.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)_n.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_n));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_n.fromBufferAttribute(a,c),l&&(Eo.fromBufferAttribute(e,c),_n.add(Eo)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new F,l[R]=new F;const c=new F,u=new F,h=new F,f=new ze,d=new ze,g=new ze,_=new F,m=new F;function p(R,S,w){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,w),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,w),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[R].add(_),a[S].add(_),a[w].add(_),l[R].add(m),l[S].add(m),l[w].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,S=v.length;R<S;++R){const w=v[R],C=w.start,P=w.count;for(let N=C,B=C+P;N<B;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new F,y=new F,b=new F,T=new F;function E(R){b.fromBufferAttribute(i,R),T.copy(b);const S=a[R];x.copy(S),x.sub(b.multiplyScalar(b.dot(S))).normalize(),y.crossVectors(T,S);const C=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,C)}for(let R=0,S=v.length;R<S;++R){const w=v[R],C=w.start,P=w.count;for(let N=C,B=C+P;N<B;N+=3)E(e.getX(N+0)),E(e.getX(N+1)),E(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Jn(f,u,h)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bp=new it,Ns=new Dl,Xl=new wr,wp=new F,Yl=new F,ql=new F,$l=new F,ku=new F,jl=new F,Tp=new F,Kl=new F;class Tt extends Wt{constructor(e=new ei,t=new js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){jl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ku.fromBufferAttribute(h,e),o?jl.addScaledVector(ku,u):jl.addScaledVector(ku.sub(t),u))}t.add(jl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xl.copy(n.boundingSphere),Xl.applyMatrix4(s),Ns.copy(e.ray).recast(e.near),!(Xl.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Xl,wp)===null||Ns.origin.distanceToSquared(wp)>(e.far-e.near)**2))&&(bp.copy(s).invert(),Ns.copy(e.ray).applyMatrix4(bp),!(n.boundingBox!==null&&Ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,b=x;y<b;y+=3){const T=a.getX(y),E=a.getX(y+1),R=a.getX(y+2);i=Zl(this,p,e,n,c,u,h,T,E,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=Zl(this,o,e,n,c,u,h,v,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,b=x;y<b;y+=3){const T=y,E=y+1,R=y+2;i=Zl(this,p,e,n,c,u,h,T,E,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,y=m+2;i=Zl(this,o,e,n,c,u,h,v,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function fx(r,e,t,n,i,s,o,a){let l;if(e.side===ai?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Yr,a),l===null)return null;Kl.copy(a),Kl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Kl);return c<t.near||c>t.far?null:{distance:c,point:Kl.clone(),object:r}}function Zl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Yl),r.getVertexPosition(l,ql),r.getVertexPosition(c,$l);const u=fx(r,e,t,n,Yl,ql,$l,Tp);if(u){const h=new F;Zi.getBarycoord(Tp,Yl,ql,$l,h),i&&(u.uv=Zi.getInterpolatedAttribute(i,a,l,c,h,new ze)),s&&(u.uv1=Zi.getInterpolatedAttribute(s,a,l,c,h,new ze)),o&&(u.normal=Zi.getInterpolatedAttribute(o,a,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};Zi.getNormal(Yl,ql,$l,f.normal),u.face=f,u.barycoord=h}return u}class Ss extends ei{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(h,2));function g(_,m,p,v,x,y,b,T,E,R,S){const w=y/E,C=b/R,P=y/2,N=b/2,B=T/2,V=E+1,k=R+1;let z=0,W=0;const ee=new F;for(let D=0;D<k;D++){const Q=D*C-N;for(let re=0;re<V;re++){const he=re*w-P;ee[_]=he*v,ee[m]=Q*x,ee[p]=B,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=T>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(re/E),h.push(1-D/R),z+=1}}for(let D=0;D<R;D++)for(let Q=0;Q<E;Q++){const re=f+Q+V*D,he=f+Q+V*(D+1),ye=f+(Q+1)+V*(D+1),ae=f+(Q+1)+V*D;l.push(re,he,ae),l.push(he,ye,ae),W+=6}a.addGroup(d,W,S),d+=W,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sa(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wn(r){const e={};for(let t=0;t<r.length;t++){const n=sa(r[t]);for(const i in n)e[i]=n[i]}return e}function dx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Wg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const px={clone:sa,merge:Wn};var mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mx,this.fragmentShader=gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=dx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cu extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=dr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rs=new F,Ep=new ze,Ap=new ze;class rn extends cu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,Ep,Ap),t.subVectors(Ap,Ep)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ka*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ao=-90,Ro=1;class _x extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new rn(Ao,Ro,e,t);i.layers=this.layers,this.add(i);const s=new rn(Ao,Ro,e,t);s.layers=this.layers,this.add(s);const o=new rn(Ao,Ro,e,t);o.layers=this.layers,this.add(o);const a=new rn(Ao,Ro,e,t);a.layers=this.layers,this.add(a);const l=new rn(Ao,Ro,e,t);l.layers=this.layers,this.add(l);const c=new rn(Ao,Ro,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===dr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xg extends Mn{constructor(e=[],t=ao,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yg extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xg(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ss(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ai,blending:Gr});s.uniforms.tEquirect.value=t;const o=new Tt(i,s),a=t.minFilter;return t.minFilter===zr&&(t.minFilter=fn),new _x(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Ht extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vx={type:"move"};class zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class As extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sr,this.environmentIntensity=1,this.environmentRotation=new Sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_f,this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new F;class hd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Hc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Jn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Hc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Rp=new F,Cp=new Bt,Pp=new Bt,yx=new F,Lp=new it,Jl=new F,Vu=new wr,Dp=new it,Hu=new Dl;class Sx extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rp,this.bindMatrix=new it,this.bindMatrixInverse=new it,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Et),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jl),this.boundingBox.expandByPoint(Jl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jl),this.boundingSphere.expandByPoint(Jl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vu.copy(this.boundingSphere),Vu.applyMatrix4(i),e.ray.intersectsSphere(Vu)!==!1&&(Dp.copy(i).invert(),Hu.copy(e.ray).applyMatrix4(Dp),!(this.boundingBox!==null&&Hu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yv?this.bindMatrixInverse.copy(this.bindMatrix).invert():ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Cp.fromBufferAttribute(i.attributes.skinIndex,e),Pp.fromBufferAttribute(i.attributes.skinWeight,e),Rp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Pp.getComponent(s);if(o!==0){const a=Cp.getComponent(s);Lp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yx.copy(Rp).applyMatrix4(Lp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class qg extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fd extends Mn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=hn,u=hn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ip=new it,Mx=new it;class dd{constructor(e=[],t=[]){this.uuid=Ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new it)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new it;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Mx;Ip.multiplyMatrices(a,t[s]),Ip.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new dd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new fd(t,e,e,ki,Bi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(ke("Skeleton: No bone found with UUID:",s),o=new qg),this.bones.push(o),this.boneInverses.push(new it().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class vf extends Jn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Co=new it,Np=new it,Ql=[],Op=new Et,bx=new it,Pa=new Tt,La=new wr;class wx extends Tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Et),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Co),Op.copy(e.boundingBox).applyMatrix4(Co),this.boundingBox.union(Op)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Co),La.copy(e.boundingSphere).applyMatrix4(Co),this.boundingSphere.union(La)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),La.copy(this.boundingSphere),La.applyMatrix4(n),e.ray.intersectsSphere(La)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Co),Np.multiplyMatrices(n,Co),Pa.matrixWorld=Np,Pa.raycast(e,Ql);for(let o=0,a=Ql.length;o<a;o++){const l=Ql[o];l.instanceId=s,l.object=this,t.push(l)}Ql.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fd(new Float32Array(i*this.count),i,this.count,nd,Bi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gu=new F,Tx=new F,Ex=new tt;class cs{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Gu.subVectors(n,t).cross(Tx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ex.getNormalMatrix(e),i=this.coplanarPoint(Gu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new wr,Ax=new ze(.5,.5),ec=new F;class pd{constructor(e=new cs,t=new cs,n=new cs,i=new cs,s=new cs,o=new cs){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dr,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],v=s[12],x=s[13],y=s[14],b=s[15];if(i[0].setComponents(c-o,d-u,p-g,b-v).normalize(),i[1].setComponents(c+o,d+u,p+g,b+v).normalize(),i[2].setComponents(c+a,d+h,p+_,b+x).normalize(),i[3].setComponents(c-a,d-h,p-_,b-x).normalize(),n)i[4].setComponents(l,f,m,y).normalize(),i[5].setComponents(c-l,d-f,p-m,b-y).normalize();else if(i[4].setComponents(c-l,d-f,p-m,b-y).normalize(),t===dr)i[5].setComponents(c+l,d+f,p+m,b+y).normalize();else if(t===Vc)i[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){Os.center.set(0,0,0);const t=Ax.distanceTo(e.center);return Os.radius=.7071067811865476+t,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ec.x=i.normal.x>0?e.max.x:e.min.x,ec.y=i.normal.y>0?e.max.y:e.min.y,ec.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $g extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gc=new F,Wc=new F,Up=new it,Da=new Dl,tc=new wr,Wu=new F,Fp=new F;class md extends Wt{constructor(e=new ei,t=new $g){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Gc.fromBufferAttribute(t,i-1),Wc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Gc.distanceTo(Wc);e.setAttribute("lineDistance",new sn(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(i),tc.radius+=s,e.ray.intersectsSphere(tc)===!1)return;Up.copy(i).invert(),Da.copy(e.ray).applyMatrix4(Up);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),v=u.getX(_+1),x=nc(this,e,Da,l,p,v,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=nc(this,e,Da,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=nc(this,e,Da,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=nc(this,e,Da,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nc(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Gc.fromBufferAttribute(a,i),Wc.fromBufferAttribute(a,s),t.distanceSqToSegment(Gc,Wc,Wu,Fp)>n)return;Wu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Wu);if(!(c<e.near||c>e.far))return{distance:c,point:Fp.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Bp=new F,kp=new F;class Rx extends md{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Bp.fromBufferAttribute(t,i),kp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Bp.distanceTo(kp);e.setAttribute("lineDistance",new sn(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cx extends md{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class jg extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zp=new it,xf=new Dl,ic=new wr,rc=new F;class Px extends Wt{constructor(e=new ei,t=new jg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(i),ic.radius+=s,e.ray.intersectsSphere(ic)===!1)return;zp.copy(i).invert(),xf.copy(e.ray).applyMatrix4(zp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);rc.fromBufferAttribute(h,m),Vp(rc,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)rc.fromBufferAttribute(h,g),Vp(rc,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vp(r,e,t,n,i,s,o){const a=xf.distanceSqToPoint(r);if(a<t){const l=new F;xf.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class xl extends Mn{constructor(e,t,n=xr,i,s,o,a=hn,l=hn,c,u=$r,h=1){if(u!==$r&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ud(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lx extends xl{constructor(e,t=xr,n=ao,i,s,o=hn,a=hn,l,c=$r){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kg extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xc extends ei{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new sn(h,3)),this.setAttribute("normal",new sn(f,3)),this.setAttribute("uv",new sn(d,2));function v(){const y=new F,b=new F;let T=0;const E=(t-e)/n;for(let R=0;R<=s;R++){const S=[],w=R/s,C=w*(t-e)+e;for(let P=0;P<=i;P++){const N=P/i,B=N*l+a,V=Math.sin(B),k=Math.cos(B);b.x=C*V,b.y=-w*n+m,b.z=C*k,h.push(b.x,b.y,b.z),y.set(V,E,k).normalize(),f.push(y.x,y.y,y.z),d.push(N,1-w),S.push(g++)}_.push(S)}for(let R=0;R<i;R++)for(let S=0;S<s;S++){const w=_[S][R],C=_[S+1][R],P=_[S+1][R+1],N=_[S][R+1];(e>0||S!==0)&&(u.push(w,C,N),T+=3),(t>0||S!==s-1)&&(u.push(C,P,N),T+=3)}c.addGroup(p,T,0),p+=T}function x(y){const b=g,T=new ze,E=new F;let R=0;const S=y===!0?e:t,w=y===!0?1:-1;for(let P=1;P<=i;P++)h.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),g++;const C=g;for(let P=0;P<=i;P++){const B=P/i*l+a,V=Math.cos(B),k=Math.sin(B);E.x=S*k,E.y=m*w,E.z=S*V,h.push(E.x,E.y,E.z),f.push(0,w,0),T.x=V*.5+.5,T.y=k*.5*w+.5,d.push(T.x,T.y),g++}for(let P=0;P<i;P++){const N=b+P,B=C+P;y===!0?u.push(B,B+1,N):u.push(B+1,B,N),R+=3}c.addGroup(p,R,y===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gd extends ei{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new sn(s,3)),this.setAttribute("normal",new sn(s.slice(),3)),this.setAttribute("uv",new sn(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new F,y=new F,b=new F;for(let T=0;T<t.length;T+=3)d(t[T+0],x),d(t[T+1],y),d(t[T+2],b),l(x,y,b,v)}function l(v,x,y,b){const T=b+1,E=[];for(let R=0;R<=T;R++){E[R]=[];const S=v.clone().lerp(y,R/T),w=x.clone().lerp(y,R/T),C=T-R;for(let P=0;P<=C;P++)P===0&&R===T?E[R][P]=S:E[R][P]=S.clone().lerp(w,P/C)}for(let R=0;R<T;R++)for(let S=0;S<2*(T-R)-1;S++){const w=Math.floor(S/2);S%2===0?(f(E[R][w+1]),f(E[R+1][w]),f(E[R][w])):(f(E[R][w+1]),f(E[R+1][w+1]),f(E[R+1][w]))}}function c(v){const x=new F;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(v),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function u(){const v=new F;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const y=m(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;o.push(y,1-b)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const x=o[v+0],y=o[v+2],b=o[v+4],T=Math.max(x,y,b),E=Math.min(x,y,b);T>.9&&E<.1&&(x<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function d(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function g(){const v=new F,x=new F,y=new F,b=new F,T=new ze,E=new ze,R=new ze;for(let S=0,w=0;S<s.length;S+=9,w+=6){v.set(s[S+0],s[S+1],s[S+2]),x.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),T.set(o[w+0],o[w+1]),E.set(o[w+2],o[w+3]),R.set(o[w+4],o[w+5]),b.copy(v).add(x).add(y).divideScalar(3);const C=m(b);_(T,w+0,v,C),_(E,w+2,x,C),_(R,w+4,y,C)}}function _(v,x,y,b){b<0&&v.x===1&&(o[x]=v.x-1),y.x===0&&y.z===0&&(o[x]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gd(e.vertices,e.indices,e.radius,e.detail)}}class _d extends gd{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _d(e.radius,e.detail)}}class Tr extends ei{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*f-o;for(let x=0;x<c;x++){const y=x*h-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+c*p,y=v+c*(p+1),b=v+1+c*(p+1),T=v+1+c*p;d.push(x,y,T),d.push(y,b,T)}this.setIndex(d),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.widthSegments,e.heightSegments)}}class vd extends ei{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new F,h=new F,f=new F;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*s,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,v=(i+1)*d+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new sn(a,3)),this.setAttribute("normal",new sn(l,3)),this.setAttribute("uv",new sn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Dx extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zr extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Er extends Zr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ix extends er{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Nx extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ox extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function sc(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ux(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Hp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Zg(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Il{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Fx extends Il{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sp,endingEnd:sp}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case op:s=e,a=2*t-n;break;case ap:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case op:o=e,l=2*n-t;break;case ap:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let b=0;b!==a;++b)s[b]=p*o[u+b]+v*o[c+b]+x*o[l+b]+y*o[h+b];return s}}class Bx extends Il{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class kx extends Il{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class tr{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sc(t,this.TimeBufferType),this.values=sc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sc(e.times,Array),values:sc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ml:t=this.InterpolantFactoryMethodDiscrete;break;case gl:t=this.InterpolantFactoryMethodLinear;break;case xu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ml;case this.InterpolantFactoryMethodLinear:return gl;case this.InterpolantFactoryMethodSmooth:return xu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Lv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}tr.prototype.ValueTypeName="";tr.prototype.TimeBufferType=Float32Array;tr.prototype.ValueBufferType=Float32Array;tr.prototype.DefaultInterpolation=gl;class xa extends tr{constructor(e,t,n){super(e,t,n)}}xa.prototype.ValueTypeName="bool";xa.prototype.ValueBufferType=Array;xa.prototype.DefaultInterpolation=ml;xa.prototype.InterpolantFactoryMethodLinear=void 0;xa.prototype.InterpolantFactoryMethodSmooth=void 0;class Jg extends tr{constructor(e,t,n,i){super(e,t,n,i)}}Jg.prototype.ValueTypeName="color";class oa extends tr{constructor(e,t,n,i){super(e,t,n,i)}}oa.prototype.ValueTypeName="number";class zx extends Il{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)yr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class aa extends tr{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new zx(this.times,this.values,this.getValueSize(),e)}}aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;class ya extends tr{constructor(e,t,n){super(e,t,n)}}ya.prototype.ValueTypeName="string";ya.prototype.ValueBufferType=Array;ya.prototype.DefaultInterpolation=ml;ya.prototype.InterpolantFactoryMethodLinear=void 0;ya.prototype.InterpolantFactoryMethodSmooth=void 0;class la extends tr{constructor(e,t,n,i){super(e,t,n,i)}}la.prototype.ValueTypeName="vector";class Vx{constructor(e="",t=-1,n=[],i=Sv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ji(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Gx(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(tr.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Ux(l);l=Hp(l,1,u),c=Hp(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new oa(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(ke("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return je("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];Zg(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){const x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new oa(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(la,d+".position",f,"pos",i),n(aa,d+".quaternion",f,"rot",i),n(la,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Hx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oa;case"vector":case"vector2":case"vector3":case"vector4":return la;case"color":return Jg;case"quaternion":return aa;case"bool":case"boolean":return xa;case"string":return ya}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Gx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Hx(r.type);if(r.times===void 0){const t=[],n=[];Zg(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Vr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Wx{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Xx=new Wx;class Sa{constructor(e){this.manager=e!==void 0?e:Xx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Sa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nr={};class Yx extends Error{constructor(e,t){super(e),this.response=t}}class Qg extends Sa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Nr[e]!==void 0){Nr[e].push({onLoad:t,onProgress:n,onError:i});return}Nr[e]=[],Nr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Nr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let T=0,E=u.length;T<E;T++){const R=u[T];R.onProgress&&R.onProgress(b)}p.enqueue(y),v()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Yx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Vr.add(`file:${e}`,c);const u=Nr[e];delete Nr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Nr[e];if(u===void 0)throw this.manager.itemError(e),c;delete Nr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Po=new WeakMap;class qx extends Sa{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Po.get(o);h===void 0&&(h=[],Po.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=_l("img");function l(){u(),t&&t(this);const h=Po.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Po.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),Vr.remove(`image:${e}`);const f=Po.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}Po.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Vr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class $x extends Sa{constructor(e){super(e)}load(e,t,n,i){const s=new Mn,o=new qx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class uu extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Xu=new it,Gp=new F,Wp=new F;class xd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pd,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gp),Wp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wp),t.updateMatrixWorld(),Xu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jx extends xd{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ra*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Kx extends uu{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new jx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Zx extends xd{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}}class Jx extends uu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Zx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class hu extends cu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Qx extends xd{constructor(){super(new hu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bn extends uu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Qx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ma extends uu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ja{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Yu=new WeakMap;class ey extends Sa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(Yu.has(o)===!0)i&&i(Yu.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Yu.set(l,c),Vr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Vr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ty extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Rs{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const yd="\\[\\]\\.:\\/",ny=new RegExp("["+yd+"]","g"),Sd="[^"+yd+"]",iy="[^"+yd.replace("\\.","")+"]",ry=/((?:WC+[\/:])*)/.source.replace("WC",Sd),sy=/(WCOD+)?/.source.replace("WCOD",iy),oy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sd),ay=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sd),ly=new RegExp("^"+ry+sy+oy+ay+"$"),cy=["material","materials","bones","map"];class uy{constructor(e,t,n){const i=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class wt{constructor(e,t,n){this.path=t,this.parsedPath=n||wt.parseTrackName(t),this.node=wt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new wt.Composite(e,t,n):new wt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ny,"")}static parseTrackName(e){const t=ly.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);cy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=wt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}wt.Composite=uy;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Xp{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=st(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(st(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hy extends ho{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ke("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Yp(r,e,t,n){const i=fy(n);switch(t){case Og:return r*e;case nd:return r*e/i.components*i.byteLength;case id:return r*e/i.components*i.byteLength;case ia:return r*e*2/i.components*i.byteLength;case rd:return r*e*2/i.components*i.byteLength;case Ug:return r*e*3/i.components*i.byteLength;case ki:return r*e*4/i.components*i.byteLength;case sd:return r*e*4/i.components*i.byteLength;case Tc:case Ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ac:case Rc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bh:case zh:return Math.max(r,16)*Math.max(e,8)/4;case Fh:case kh:return Math.max(r,8)*Math.max(e,8)/2;case Vh:case Hh:case Wh:case Xh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gh:case Yh:case qh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ef:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case tf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case nf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case rf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case sf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case of:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case af:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case lf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case cf:case uf:case hf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ff:case df:return Math.ceil(r/4)*Math.ceil(e/4)*8;case pf:case mf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fy(r){switch(r){case bi:case Lg:return{byteLength:1,components:1};case dl:case Dg:case qr:return{byteLength:2,components:1};case ed:case td:return{byteLength:2,components:4};case xr:case Qf:case Bi:return{byteLength:4,components:1};case Ig:case Ng:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);function e_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function dy(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,my=`#ifdef USE_ALPHAHASH
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
#endif`,gy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yy=`#ifdef USE_AOMAP
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
#endif`,Sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,My=`#ifdef USE_BATCHING
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
#endif`,by=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ey=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ay=`#ifdef USE_IRIDESCENCE
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
#endif`,Ry=`#ifdef USE_BUMPMAP
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
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fy=`#define PI 3.141592653589793
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
} // validated`,By=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ky=`vec3 transformedNormal = objectNormal;
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
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yy=`#ifdef USE_ENVMAP
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
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
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
#endif`,Zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tS=`#ifdef USE_GRADIENTMAP
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
}`,nS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sS=`uniform bool receiveShadow;
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
#endif`,oS=`#ifdef USE_ENVMAP
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
#endif`,aS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hS=`PhysicalMaterial material;
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
#endif`,fS=`uniform sampler2D dfgLUT;
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
}`,dS=`
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
#endif`,pS=`#if defined( RE_IndirectDiffuse )
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
#endif`,mS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_S=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bS=`#if defined( USE_POINTS_UV )
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
#endif`,wS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ES=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CS=`#ifdef USE_MORPHTARGETS
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
#endif`,PS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OS=`#ifndef FLAT_SHADED
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
#endif`,FS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,GS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$S=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JS=`float getShadowMask() {
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
}`,QS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eM=`#ifdef USE_SKINNING
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
#endif`,tM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nM=`#ifdef USE_SKINNING
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
#endif`,iM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aM=`#ifdef USE_TRANSMISSION
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
#endif`,lM=`#ifdef USE_TRANSMISSION
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pM=`uniform sampler2D t2D;
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`#include <common>
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
}`,yM=`#if DEPTH_PACKING == 3200
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
}`,SM=`#define DISTANCE
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
}`,MM=`#define DISTANCE
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
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wM=`uniform sampler2D tEquirect;
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
}`,EM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,RM=`uniform vec3 diffuse;
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
}`,CM=`#define LAMBERT
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
}`,PM=`#define LAMBERT
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
}`,LM=`#define MATCAP
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
}`,DM=`#define MATCAP
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
}`,IM=`#define NORMAL
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
}`,NM=`#define NORMAL
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
}`,OM=`#define PHONG
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
}`,FM=`#define STANDARD
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
}`,BM=`#define STANDARD
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
}`,kM=`#define TOON
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
}`,zM=`#define TOON
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
}`,VM=`uniform float size;
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
}`,HM=`uniform vec3 diffuse;
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
}`,GM=`#include <common>
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
}`,WM=`uniform vec3 color;
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
}`,XM=`uniform float rotation;
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
}`,YM=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:py,alphahash_pars_fragment:my,alphamap_fragment:gy,alphamap_pars_fragment:_y,alphatest_fragment:vy,alphatest_pars_fragment:xy,aomap_fragment:yy,aomap_pars_fragment:Sy,batching_pars_vertex:My,batching_vertex:by,begin_vertex:wy,beginnormal_vertex:Ty,bsdfs:Ey,iridescence_fragment:Ay,bumpmap_pars_fragment:Ry,clipping_planes_fragment:Cy,clipping_planes_pars_fragment:Py,clipping_planes_pars_vertex:Ly,clipping_planes_vertex:Dy,color_fragment:Iy,color_pars_fragment:Ny,color_pars_vertex:Oy,color_vertex:Uy,common:Fy,cube_uv_reflection_fragment:By,defaultnormal_vertex:ky,displacementmap_pars_vertex:zy,displacementmap_vertex:Vy,emissivemap_fragment:Hy,emissivemap_pars_fragment:Gy,colorspace_fragment:Wy,colorspace_pars_fragment:Xy,envmap_fragment:Yy,envmap_common_pars_fragment:qy,envmap_pars_fragment:$y,envmap_pars_vertex:jy,envmap_physical_pars_fragment:oS,envmap_vertex:Ky,fog_vertex:Zy,fog_pars_vertex:Jy,fog_fragment:Qy,fog_pars_fragment:eS,gradientmap_pars_fragment:tS,lightmap_pars_fragment:nS,lights_lambert_fragment:iS,lights_lambert_pars_fragment:rS,lights_pars_begin:sS,lights_toon_fragment:aS,lights_toon_pars_fragment:lS,lights_phong_fragment:cS,lights_phong_pars_fragment:uS,lights_physical_fragment:hS,lights_physical_pars_fragment:fS,lights_fragment_begin:dS,lights_fragment_maps:pS,lights_fragment_end:mS,logdepthbuf_fragment:gS,logdepthbuf_pars_fragment:_S,logdepthbuf_pars_vertex:vS,logdepthbuf_vertex:xS,map_fragment:yS,map_pars_fragment:SS,map_particle_fragment:MS,map_particle_pars_fragment:bS,metalnessmap_fragment:wS,metalnessmap_pars_fragment:TS,morphinstance_vertex:ES,morphcolor_vertex:AS,morphnormal_vertex:RS,morphtarget_pars_vertex:CS,morphtarget_vertex:PS,normal_fragment_begin:LS,normal_fragment_maps:DS,normal_pars_fragment:IS,normal_pars_vertex:NS,normal_vertex:OS,normalmap_pars_fragment:US,clearcoat_normal_fragment_begin:FS,clearcoat_normal_fragment_maps:BS,clearcoat_pars_fragment:kS,iridescence_pars_fragment:zS,opaque_fragment:VS,packing:HS,premultiplied_alpha_fragment:GS,project_vertex:WS,dithering_fragment:XS,dithering_pars_fragment:YS,roughnessmap_fragment:qS,roughnessmap_pars_fragment:$S,shadowmap_pars_fragment:jS,shadowmap_pars_vertex:KS,shadowmap_vertex:ZS,shadowmask_pars_fragment:JS,skinbase_vertex:QS,skinning_pars_vertex:eM,skinning_vertex:tM,skinnormal_vertex:nM,specularmap_fragment:iM,specularmap_pars_fragment:rM,tonemapping_fragment:sM,tonemapping_pars_fragment:oM,transmission_fragment:aM,transmission_pars_fragment:lM,uv_pars_fragment:cM,uv_pars_vertex:uM,uv_vertex:hM,worldpos_vertex:fM,background_vert:dM,background_frag:pM,backgroundCube_vert:mM,backgroundCube_frag:gM,cube_vert:_M,cube_frag:vM,depth_vert:xM,depth_frag:yM,distance_vert:SM,distance_frag:MM,equirect_vert:bM,equirect_frag:wM,linedashed_vert:TM,linedashed_frag:EM,meshbasic_vert:AM,meshbasic_frag:RM,meshlambert_vert:CM,meshlambert_frag:PM,meshmatcap_vert:LM,meshmatcap_frag:DM,meshnormal_vert:IM,meshnormal_frag:NM,meshphong_vert:OM,meshphong_frag:UM,meshphysical_vert:FM,meshphysical_frag:BM,meshtoon_vert:kM,meshtoon_frag:zM,points_vert:VM,points_frag:HM,shadow_vert:GM,shadow_frag:WM,sprite_vert:XM,sprite_frag:YM},Ce={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},cr={basic:{uniforms:Wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Wn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Wn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Wn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Wn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Wn([Ce.points,Ce.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Wn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Wn([Ce.common,Ce.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Wn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Wn([Ce.sprite,Ce.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Wn([Ce.common,Ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Wn([Ce.lights,Ce.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};cr.physical={uniforms:Wn([cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const oc={r:0,b:0,g:0},Us=new Sr,qM=new it;function $M(r,e,t,n,i,s,o){const a=new Ke(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const b=g(x);b===null?p(a,l):b&&b.isColor&&(p(b,1),y=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===lu)?(u===void 0&&(u=new Tt(new Ss(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:sa(cr.backgroundCube.uniforms),vertexShader:cr.backgroundCube.vertexShader,fragmentShader:cr.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Us.copy(y.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(qM.makeRotationFromEuler(Us)),u.material.toneMapped=dt.getTransfer(b.colorSpace)!==Mt,(h!==b||f!==b.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Tt(new Tr(2,2),new Cn({name:"BackgroundMaterial",uniforms:sa(cr.background.uniforms),vertexShader:cr.background.vertexShader,fragmentShader:cr.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=dt.getTransfer(b.colorSpace)!==Mt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(oc,Wg(r)),n.buffers.color.setClear(oc.r,oc.g,oc.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m,dispose:v}}function jM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(w,C,P,N,B){let V=!1;const k=h(N,P,C);s!==k&&(s=k,c(s.object)),V=d(w,N,P,B),V&&g(w,N,P,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(w,C,P,N),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(w){return r.bindVertexArray(w)}function u(w){return r.deleteVertexArray(w)}function h(w,C,P){const N=P.wireframe===!0;let B=n[w.id];B===void 0&&(B={},n[w.id]=B);let V=B[C.id];V===void 0&&(V={},B[C.id]=V);let k=V[N];return k===void 0&&(k=f(l()),V[N]=k),k}function f(w){const C=[],P=[],N=[];for(let B=0;B<t;B++)C[B]=0,P[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:N,object:w,attributes:{},index:null}}function d(w,C,P,N){const B=s.attributes,V=C.attributes;let k=0;const z=P.getAttributes();for(const W in z)if(z[W].location>=0){const D=B[W];let Q=V[W];if(Q===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),D===void 0||D.attribute!==Q||Q&&D.data!==Q.data)return!0;k++}return s.attributesNum!==k||s.index!==N}function g(w,C,P,N){const B={},V=C.attributes;let k=0;const z=P.getAttributes();for(const W in z)if(z[W].location>=0){let D=V[W];D===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(D=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(D=w.instanceColor));const Q={};Q.attribute=D,D&&D.data&&(Q.data=D.data),B[W]=Q,k++}s.attributes=B,s.attributesNum=k,s.index=N}function _(){const w=s.newAttributes;for(let C=0,P=w.length;C<P;C++)w[C]=0}function m(w){p(w,0)}function p(w,C){const P=s.newAttributes,N=s.enabledAttributes,B=s.attributeDivisors;P[w]=1,N[w]===0&&(r.enableVertexAttribArray(w),N[w]=1),B[w]!==C&&(r.vertexAttribDivisor(w,C),B[w]=C)}function v(){const w=s.newAttributes,C=s.enabledAttributes;for(let P=0,N=C.length;P<N;P++)C[P]!==w[P]&&(r.disableVertexAttribArray(P),C[P]=0)}function x(w,C,P,N,B,V,k){k===!0?r.vertexAttribIPointer(w,C,P,B,V):r.vertexAttribPointer(w,C,P,N,B,V)}function y(w,C,P,N){_();const B=N.attributes,V=P.getAttributes(),k=C.defaultAttributeValues;for(const z in V){const W=V[z];if(W.location>=0){let ee=B[z];if(ee===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(ee=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(ee=w.instanceColor)),ee!==void 0){const D=ee.normalized,Q=ee.itemSize,re=e.get(ee);if(re===void 0)continue;const he=re.buffer,ye=re.type,ae=re.bytesPerElement,$=ye===r.INT||ye===r.UNSIGNED_INT||ee.gpuType===Qf;if(ee.isInterleavedBufferAttribute){const J=ee.data,ce=J.stride,Ne=ee.offset;if(J.isInstancedInterleavedBuffer){for(let Te=0;Te<W.locationSize;Te++)p(W.location+Te,J.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Te=0;Te<W.locationSize;Te++)m(W.location+Te);r.bindBuffer(r.ARRAY_BUFFER,he);for(let Te=0;Te<W.locationSize;Te++)x(W.location+Te,Q/W.locationSize,ye,D,ce*ae,(Ne+Q/W.locationSize*Te)*ae,$)}else{if(ee.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)p(W.location+J,ee.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let J=0;J<W.locationSize;J++)m(W.location+J);r.bindBuffer(r.ARRAY_BUFFER,he);for(let J=0;J<W.locationSize;J++)x(W.location+J,Q/W.locationSize,ye,D,Q*ae,Q/W.locationSize*J*ae,$)}}else if(k!==void 0){const D=k[z];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(W.location,D);break;case 3:r.vertexAttrib3fv(W.location,D);break;case 4:r.vertexAttrib4fv(W.location,D);break;default:r.vertexAttrib1fv(W.location,D)}}}}v()}function b(){R();for(const w in n){const C=n[w];for(const P in C){const N=C[P];for(const B in N)u(N[B].object),delete N[B];delete C[P]}delete n[w]}}function T(w){if(n[w.id]===void 0)return;const C=n[w.id];for(const P in C){const N=C[P];for(const B in N)u(N[B].object),delete N[B];delete C[P]}delete n[w.id]}function E(w){for(const C in n){const P=n[C];if(P[w.id]===void 0)continue;const N=P[w.id];for(const B in N)u(N[B].object),delete N[B];delete P[w.id]}}function R(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function KM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ZM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==ki&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==bi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Bi&&!R)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,maxSamples:b,samples:T}}function JM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new cs,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,x=v*4;let y=p.clippingState||null;l.value=y,y=u(g,f,x,d);for(let b=0;b!==x;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=d;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function QM(r){let e=new WeakMap;function t(o,a){return a===Oh?o.mapping=ao:a===Uh&&(o.mapping=ta),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oh||a===Uh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yg(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const hs=4,qp=[.125,.215,.35,.446,.526,.582],qs=20,eb=256,Ia=new hu,$p=new Ke;let qu=null,$u=0,ju=0,Ku=!1;const tb=new F;class jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=tb}=s;qu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qu,$u,ju),this._renderer.xr.enabled=Ku,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ao||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:qr,format:ki,colorSpace:Qn,depthBuffer:!1},i=Kp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nb(s)),this._blurMaterial=rb(s,e,t),this._ggxMaterial=ib(s,e,t)}return i}_compileMaterial(e){const t=new Tt(new ei,e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,n,i,s){const l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor($p),h.toneMapping=gr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tt(new Ss,new js({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy($p),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const b=this._cubeSize;Lo(i,y*b,x>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(_,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ao||e.mapping===ta;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Lo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-hs?n-g+hs:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Lo(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(a,Ia),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Lo(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(a,Ia)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*qs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):qs;m>qs&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qs}`);const p=[];let v=0;for(let E=0;E<qs;++E){const R=E/_,S=Math.exp(-R*R/2);p.push(S),E===0?v+=S:E<m&&(v+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[i],b=3*y*(i>x-hs?i-x+hs:0),T=4*(this._cubeSize-y);Lo(t,b,T,3*y,2*y),l.setRenderTarget(t),l.render(h,Ia)}}function nb(r){const e=[],t=[],n=[];let i=r;const s=r-hs+1+qp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-hs?l=qp[o-r+hs-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),x=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,R=T>2?0:-1,S=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];v.set(S,_*g*T),x.set(f,m*g*T);const w=[T,T,T,T,T,T];y.set(w,p*g*T)}const b=new ei;b.setAttribute("position",new Jn(v,_)),b.setAttribute("uv",new Jn(x,m)),b.setAttribute("faceIndex",new Jn(y,p)),n.push(new Tt(b,null)),i>hs&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Kp(r,e,t){const n=new bn(r,e,t);return n.texture.mapping=lu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ib(r,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fu(),fragmentShader:`

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
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function rb(r,e,t){const n=new Float32Array(qs),i=new F(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fu(),fragmentShader:`

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
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function Zp(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

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
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function Jp(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gr,depthTest:!1,depthWrite:!1})}function fu(){return`

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
	`}function sb(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Oh||l===Uh,u=l===ao||l===ta;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new jp(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new jp(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ob(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&vl("WebGLRenderer: "+n+" extension not supported."),i}}}function ab(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let x=0,y=v.length;x<y;x+=3){const b=v[x+0],T=v[x+1],E=v[x+2];f.push(b,T,T,E,E,b)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const b=x+0,T=x+1,E=x+2;f.push(b,T,T,E,E,b)}}else return;const m=new(Bg(f)?Gg:Hg)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function lb(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ub(r,e,t){const n=new WeakMap,i=new Bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*b*4*h),E=new kg(T,y,b,h);E.type=Bi,E.needsUpdate=!0;const R=x*4;for(let w=0;w<h;w++){const C=m[w],P=p[w],N=v[w],B=y*b*4*w;for(let V=0;V<C.count;V++){const k=V*R;d===!0&&(i.fromBufferAttribute(C,V),T[B+k+0]=i.x,T[B+k+1]=i.y,T[B+k+2]=i.z,T[B+k+3]=0),g===!0&&(i.fromBufferAttribute(P,V),T[B+k+4]=i.x,T[B+k+5]=i.y,T[B+k+6]=i.z,T[B+k+7]=0),_===!0&&(i.fromBufferAttribute(N,V),T[B+k+8]=i.x,T[B+k+9]=i.y,T[B+k+10]=i.z,T[B+k+11]=N.itemSize===4?i.w:1)}}f={count:h,texture:E,size:new ze(y,b)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function hb(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const fb={[Mg]:"LINEAR_TONE_MAPPING",[bg]:"REINHARD_TONE_MAPPING",[wg]:"CINEON_TONE_MAPPING",[Tg]:"ACES_FILMIC_TONE_MAPPING",[Ag]:"AGX_TONE_MAPPING",[Rg]:"NEUTRAL_TONE_MAPPING",[Eg]:"CUSTOM_TONE_MAPPING"};function db(r,e,t,n,i){const s=new bn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new bn(e,t,{type:qr,depthBuffer:!1,stencilBuffer:!1}),a=new ei;a.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new sn([0,2,0,0,2,0],2));const l=new Dx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Tt(a,l),u=new hu(-1,1,1,-1,0,1);let h=null,f=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(v,x){s.setSize(v,x),o.setSize(v,x);for(let y=0;y<m.length;y++){const b=m[y];b.setSize&&b.setSize(v,x)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const x=s.width,y=s.height;for(let b=0;b<m.length;b++){const T=m[b];T.setSize&&T.setSize(x,y)}},this.begin=function(v,x){if(d||v.toneMapping===gr&&m.length===0)return!1;if(_=x,x!==null){const y=x.width,b=x.height;(s.width!==y||s.height!==b)&&this.setSize(y,b)}return p===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=gr,!0},this.hasRenderPass=function(){return p},this.end=function(v,x){v.toneMapping=g,d=!0;let y=s,b=o;for(let T=0;T<m.length;T++){const E=m[T];if(E.enabled!==!1&&(E.render(v,b,y,x),E.needsSwap!==!1)){const R=y;y=b,b=R}}if(h!==v.outputColorSpace||f!==v.toneMapping){h=v.outputColorSpace,f=v.toneMapping,l.defines={},dt.getTransfer(h)===Mt&&(l.defines.SRGB_TRANSFER="");const T=fb[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(_),v.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const t_=new Mn,yf=new xl(1,1),n_=new kg,i_=new tx,r_=new Xg,Qp=[],em=[],tm=new Float32Array(16),nm=new Float32Array(9),im=new Float32Array(4);function ba(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Qp[i];if(s===void 0&&(s=new Float32Array(i),Qp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function dn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function pn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function du(r,e){let t=em[e];t===void 0&&(t=new Int32Array(e),em[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function pb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2fv(this.addr,e),pn(t,e)}}function gb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;r.uniform3fv(this.addr,e),pn(t,e)}}function _b(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4fv(this.addr,e),pn(t,e)}}function vb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,n))return;im.set(n),r.uniformMatrix2fv(this.addr,!1,im),pn(t,n)}}function xb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,n))return;nm.set(n),r.uniformMatrix3fv(this.addr,!1,nm),pn(t,n)}}function yb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,n))return;tm.set(n),r.uniformMatrix4fv(this.addr,!1,tm),pn(t,n)}}function Sb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2iv(this.addr,e),pn(t,e)}}function bb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3iv(this.addr,e),pn(t,e)}}function wb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4iv(this.addr,e),pn(t,e)}}function Tb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2uiv(this.addr,e),pn(t,e)}}function Ab(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3uiv(this.addr,e),pn(t,e)}}function Rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4uiv(this.addr,e),pn(t,e)}}function Cb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(yf.compareFunction=t.isReversedDepthBuffer()?ld:ad,s=yf):s=t_,t.setTexture2D(e||s,i)}function Pb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||i_,i)}function Lb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||r_,i)}function Db(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||n_,i)}function Ib(r){switch(r){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return _b;case 35674:return vb;case 35675:return xb;case 35676:return yb;case 5124:case 35670:return Sb;case 35667:case 35671:return Mb;case 35668:case 35672:return bb;case 35669:case 35673:return wb;case 5125:return Tb;case 36294:return Eb;case 36295:return Ab;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Lb;case 36289:case 36303:case 36311:case 36292:return Db}}function Nb(r,e){r.uniform1fv(this.addr,e)}function Ob(r,e){const t=ba(e,this.size,2);r.uniform2fv(this.addr,t)}function Ub(r,e){const t=ba(e,this.size,3);r.uniform3fv(this.addr,t)}function Fb(r,e){const t=ba(e,this.size,4);r.uniform4fv(this.addr,t)}function Bb(r,e){const t=ba(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function kb(r,e){const t=ba(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function zb(r,e){const t=ba(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Vb(r,e){r.uniform1iv(this.addr,e)}function Hb(r,e){r.uniform2iv(this.addr,e)}function Gb(r,e){r.uniform3iv(this.addr,e)}function Wb(r,e){r.uniform4iv(this.addr,e)}function Xb(r,e){r.uniform1uiv(this.addr,e)}function Yb(r,e){r.uniform2uiv(this.addr,e)}function qb(r,e){r.uniform3uiv(this.addr,e)}function $b(r,e){r.uniform4uiv(this.addr,e)}function jb(r,e,t){const n=this.cache,i=e.length,s=du(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=yf:o=t_;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function Kb(r,e,t){const n=this.cache,i=e.length,s=du(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||i_,s[o])}function Zb(r,e,t){const n=this.cache,i=e.length,s=du(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||r_,s[o])}function Jb(r,e,t){const n=this.cache,i=e.length,s=du(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||n_,s[o])}function Qb(r){switch(r){case 5126:return Nb;case 35664:return Ob;case 35665:return Ub;case 35666:return Fb;case 35674:return Bb;case 35675:return kb;case 35676:return zb;case 5124:case 35670:return Vb;case 35667:case 35671:return Hb;case 35668:case 35672:return Gb;case 35669:case 35673:return Wb;case 5125:return Xb;case 36294:return Yb;case 36295:return qb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return Zb;case 36289:case 36303:case 36311:case 36292:return Jb}}class ew{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ib(t.type)}}class tw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qb(t.type)}}class nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Zu=/(\w+)(\])?(\[|\.)?/g;function rm(r,e){r.seq.push(e),r.map[e.id]=e}function iw(r,e,t){const n=r.name,i=n.length;for(Zu.lastIndex=0;;){const s=Zu.exec(n),o=Zu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rm(t,c===void 0?new ew(a,r,e):new tw(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new nw(a),rm(t,h)),t=h}}}class Cc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);iw(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function sm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const rw=37297;let sw=0;function ow(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const om=new tt;function aw(r){dt._getMatrix(om,dt.workingColorSpace,r);const e=`mat3( ${om.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(r)){case zc:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function am(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+ow(r.getShaderSource(e),a)}else return s}function lw(r,e){const t=aw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const cw={[Mg]:"Linear",[bg]:"Reinhard",[wg]:"Cineon",[Tg]:"ACESFilmic",[Ag]:"AgX",[Rg]:"Neutral",[Eg]:"Custom"};function uw(r,e){const t=cw[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ac=new F;function hw(){dt.getLuminanceCoefficients(ac);const r=ac.x.toFixed(4),e=ac.y.toFixed(4),t=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function dw(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pw(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Va(r){return r!==""}function lm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(r){return r.replace(mw,_w)}const gw=new Map;function _w(r,e){let t=nt[e];if(t===void 0){const n=gw.get(e);if(n!==void 0)t=nt[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sf(t)}const vw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function um(r){return r.replace(vw,xw)}function xw(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function hm(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const yw={[bc]:"SHADOWMAP_TYPE_PCF",[ka]:"SHADOWMAP_TYPE_VSM"};function Sw(r){return yw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Mw={[ao]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE",[lu]:"ENVMAP_TYPE_CUBE_UV"};function bw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Mw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const ww={[ta]:"ENVMAP_MODE_REFRACTION"};function Tw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":ww[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ew={[Sg]:"ENVMAP_BLENDING_MULTIPLY",[vv]:"ENVMAP_BLENDING_MIX",[xv]:"ENVMAP_BLENDING_ADD"};function Aw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Ew[r.combine]||"ENVMAP_BLENDING_NONE"}function Rw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Cw(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Sw(t),c=bw(t),u=Tw(t),h=Aw(t),f=Rw(t),d=fw(t),g=dw(s),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Va).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Va).join(`
`),p.length>0&&(p+=`
`)):(m=[hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),p=[hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gr?"#define TONE_MAPPING":"",t.toneMapping!==gr?nt.tonemapping_pars_fragment:"",t.toneMapping!==gr?uw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,lw("linearToOutputTexel",t.outputColorSpace),hw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),o=Sf(o),o=lm(o,t),o=cm(o,t),a=Sf(a),a=lm(a,t),a=cm(a,t),o=um(o),a=um(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,y=v+p+a,b=sm(i,i.VERTEX_SHADER,x),T=sm(i,i.FRAGMENT_SHADER,y);i.attachShader(_,b),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(C){if(r.debug.checkShaderErrors){const P=i.getProgramInfoLog(_)||"",N=i.getShaderInfoLog(b)||"",B=i.getShaderInfoLog(T)||"",V=P.trim(),k=N.trim(),z=B.trim();let W=!0,ee=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,T);else{const D=am(i,b,"vertex"),Q=am(i,T,"fragment");je("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+D+`
`+Q)}else V!==""?ke("WebGLProgram: Program Info Log:",V):(k===""||z==="")&&(ee=!1);ee&&(C.diagnostics={runnable:W,programLog:V,vertexShader:{log:k,prefix:m},fragmentShader:{log:z,prefix:p}})}i.deleteShader(b),i.deleteShader(T),R=new Cc(i,_),S=pw(i,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(_,rw)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}let Pw=0;class Lw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dw(e),t.set(e,n)),n}}class Dw{constructor(e){this.id=Pw++,this.code=e,this.usedTimes=0}}function Iw(r,e,t,n,i,s,o){const a=new zg,l=new Lw,c=new Set,u=[],h=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,w,C,P,N){const B=P.fog,V=N.geometry,k=S.isMeshStandardMaterial?P.environment:null,z=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),W=z&&z.mapping===lu?z.image.height:null,ee=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&ke("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const D=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Q=D!==void 0?D.length:0;let re=0;V.morphAttributes.position!==void 0&&(re=1),V.morphAttributes.normal!==void 0&&(re=2),V.morphAttributes.color!==void 0&&(re=3);let he,ye,ae,$;if(ee){const Le=cr[ee];he=Le.vertexShader,ye=Le.fragmentShader}else he=S.vertexShader,ye=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),$=l.getFragmentShaderID(S);const J=r.getRenderTarget(),ce=r.state.buffers.depth.getReversed(),Ne=N.isInstancedMesh===!0,Te=N.isBatchedMesh===!0,He=!!S.map,xe=!!S.matcap,Ee=!!z,Pe=!!S.aoMap,qe=!!S.lightMap,Fe=!!S.bumpMap,H=!!S.normalMap,U=!!S.displacementMap,ft=!!S.emissiveMap,Ze=!!S.metalnessMap,Se=!!S.roughnessMap,ue=S.anisotropy>0,L=S.clearcoat>0,M=S.dispersion>0,I=S.iridescence>0,Y=S.sheen>0,K=S.transmission>0,q=ue&&!!S.anisotropyMap,fe=L&&!!S.clearcoatMap,le=L&&!!S.clearcoatNormalMap,Me=L&&!!S.clearcoatRoughnessMap,de=I&&!!S.iridescenceMap,ne=I&&!!S.iridescenceThicknessMap,se=Y&&!!S.sheenColorMap,pe=Y&&!!S.sheenRoughnessMap,we=!!S.specularMap,me=!!S.specularColorMap,Ye=!!S.specularIntensityMap,O=K&&!!S.transmissionMap,ge=K&&!!S.thicknessMap,oe=!!S.gradientMap,be=!!S.alphaMap,ie=S.alphaTest>0,te=!!S.alphaHash,ve=!!S.extensions;let Ge=gr;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ge=r.toneMapping);const mt={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:he,fragmentShader:ye,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Te,batchingColor:Te&&N._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&N.instanceColor!==null,instancingMorph:Ne&&N.morphTexture!==null,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Qn,alphaToCoverage:!!S.alphaToCoverage,map:He,matcap:xe,envMap:Ee,envMapMode:Ee&&z.mapping,envMapCubeUVHeight:W,aoMap:Pe,lightMap:qe,bumpMap:Fe,normalMap:H,displacementMap:U,emissiveMap:ft,normalMapObjectSpace:H&&S.normalMapType===wv,normalMapTangentSpace:H&&S.normalMapType===od,metalnessMap:Ze,roughnessMap:Se,anisotropy:ue,anisotropyMap:q,clearcoat:L,clearcoatMap:fe,clearcoatNormalMap:le,clearcoatRoughnessMap:Me,dispersion:M,iridescence:I,iridescenceMap:de,iridescenceThicknessMap:ne,sheen:Y,sheenColorMap:se,sheenRoughnessMap:pe,specularMap:we,specularColorMap:me,specularIntensityMap:Ye,transmission:K,transmissionMap:O,thicknessMap:ge,gradientMap:oe,opaque:S.transparent===!1&&S.blending===Wo&&S.alphaToCoverage===!1,alphaMap:be,alphaTest:ie,alphaHash:te,combine:S.combine,mapUv:He&&_(S.map.channel),aoMapUv:Pe&&_(S.aoMap.channel),lightMapUv:qe&&_(S.lightMap.channel),bumpMapUv:Fe&&_(S.bumpMap.channel),normalMapUv:H&&_(S.normalMap.channel),displacementMapUv:U&&_(S.displacementMap.channel),emissiveMapUv:ft&&_(S.emissiveMap.channel),metalnessMapUv:Ze&&_(S.metalnessMap.channel),roughnessMapUv:Se&&_(S.roughnessMap.channel),anisotropyMapUv:q&&_(S.anisotropyMap.channel),clearcoatMapUv:fe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:pe&&_(S.sheenRoughnessMap.channel),specularMapUv:we&&_(S.specularMap.channel),specularColorMapUv:me&&_(S.specularColorMap.channel),specularIntensityMapUv:Ye&&_(S.specularIntensityMap.channel),transmissionMapUv:O&&_(S.transmissionMap.channel),thicknessMapUv:ge&&_(S.thicknessMap.channel),alphaMapUv:be&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(H||ue),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(He||be),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ge,decodeVideoTexture:He&&S.map.isVideoTexture===!0&&dt.getTransfer(S.map.colorSpace)===Mt,decodeVideoTextureEmissive:ft&&S.emissiveMap.isVideoTexture===!0&&dt.getTransfer(S.emissiveMap.colorSpace)===Mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ur,flipSided:S.side===ai,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ve&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&S.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)w.push(C),w.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(v(w,S),x(w,S),w.push(r.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function v(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function x(S,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const w=g[S.type];let C;if(w){const P=cr[w];C=px.clone(P.uniforms)}else C=S.uniforms;return C}function b(S,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new Cw(r,w,S,s),u.push(C),h.set(w,C)),C}function T(S){if(--S.usedTimes===0){const w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),h.delete(S.cacheKey),S.destroy()}}function E(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:R}}function Nw(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Ow(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function fm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function dm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Ow),n.length>1&&n.sort(f||fm),i.length>1&&i.sort(f||fm)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Uw(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new dm,r.set(n,[o])):i>=s.length?(o=new dm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Fw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ke};break;case"SpotLight":t={position:new F,direction:new F,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function Bw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let kw=0;function zw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Vw(r){const e=new Fw,t=Bw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,s=new it,o=new it;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,x=0,y=0,b=0,T=0,E=0;c.sort(zw);for(let S=0,w=c.length;S<w;S++){const C=c[S],P=C.color,N=C.intensity,B=C.distance;let V=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ia?V=C.shadow.map.texture:V=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=P.r*N,h+=P.g*N,f+=P.b*N;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],N);E++}else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const z=C.shadow,W=t.get(C);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=C.shadow.matrix,v++}n.directional[d]=k,d++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(P).multiplyScalar(N),k.distance=B,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[_]=k;const z=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,z.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=z.matrix,C.castShadow){const W=t.get(C);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=V,y++}_++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(P).multiplyScalar(N),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=k,m++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const z=C.shadow,W=t.get(C);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,W.shadowCameraNear=z.camera.near,W.shadowCameraFar=z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=C.shadow.matrix,x++}n.point[g]=k,g++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(N),k.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[p]=k,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==b||R.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=b,R.numLightProbes=E,n.version=kw++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const x=c[p];if(x.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(x.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function pm(r){const e=new Vw(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Hw(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new pm(r),e.set(i,[a])):s>=o.length?(a=new pm(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Gw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ww=`uniform sampler2D shadow_pass;
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
}`,Xw=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Yw=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],mm=new it,Na=new F,Ju=new F;function qw(r,e,t){let n=new pd;const i=new ze,s=new ze,o=new Bt,a=new Nx,l=new Ox,c={},u=t.maxTextureSize,h={[Yr]:ai,[ai]:Yr,[ur]:ur},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Gw,fragmentShader:Ww}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ei;g.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let p=this.type;this.render=function(T,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;T.type===yg&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=bc);const S=r.getRenderTarget(),w=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Gr),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const N=p!==this.type;N&&E.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(V=>V.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,V=T.length;B<V;B++){const k=T[B],z=k.shadow;if(z===void 0){ke("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const W=z.getFrameExtents();if(i.multiply(W),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/W.x),i.x=s.x*W.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/W.y),i.y=s.y*W.y,z.mapSize.y=s.y)),z.map===null||N===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ka){if(k.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new bn(i.x,i.y,{format:ia,type:qr,minFilter:fn,magFilter:fn,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new xl(i.x,i.y,Bi),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=$r,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=hn,z.map.depthTexture.magFilter=hn}else{k.isPointLight?(z.map=new Yg(i.x),z.map.depthTexture=new Lx(i.x,xr)):(z.map=new bn(i.x,i.y),z.map.depthTexture=new xl(i.x,i.y,xr)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=$r;const D=r.state.buffers.depth.getReversed();this.type===bc?(z.map.depthTexture.compareFunction=D?ld:ad,z.map.depthTexture.minFilter=fn,z.map.depthTexture.magFilter=fn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=hn,z.map.depthTexture.magFilter=hn)}z.camera.updateProjectionMatrix()}const ee=z.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<ee;D++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,D),r.clear();else{D===0&&(r.setRenderTarget(z.map),r.clear());const Q=z.getViewport(D);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),P.viewport(o)}if(k.isPointLight){const Q=z.camera,re=z.matrix,he=k.distance||Q.far;he!==Q.far&&(Q.far=he,Q.updateProjectionMatrix()),Na.setFromMatrixPosition(k.matrixWorld),Q.position.copy(Na),Ju.copy(Q.position),Ju.add(Xw[D]),Q.up.copy(Yw[D]),Q.lookAt(Ju),Q.updateMatrixWorld(),re.makeTranslation(-Na.x,-Na.y,-Na.z),mm.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),z._frustum.setFromProjectionMatrix(mm,Q.coordinateSystem,Q.reversedDepth)}else z.updateMatrices(k);n=z.getFrustum(),y(E,R,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===ka&&v(z,R),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,w,C)};function v(T,E){const R=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new bn(i.x,i.y,{format:ia,type:qr})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(E,null,R,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(E,null,R,d,_,null)}function x(T,E,R,S){let w=null;const C=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)w=C;else if(w=R.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const P=w.uuid,N=E.uuid;let B=c[P];B===void 0&&(B={},c[P]=B);let V=B[N];V===void 0&&(V=w.clone(),B[N]=V,E.addEventListener("dispose",b)),w=V}if(w.visible=E.visible,w.wireframe=E.wireframe,S===ka?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:h[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,R.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const P=r.properties.get(w);P.light=R}return w}function y(T,E,R,S,w){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===ka)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const N=e.update(T),B=T.material;if(Array.isArray(B)){const V=N.groups;for(let k=0,z=V.length;k<z;k++){const W=V[k],ee=B[W.materialIndex];if(ee&&ee.visible){const D=x(T,ee,S,w);T.onBeforeShadow(r,T,E,R,N,D,W),r.renderBufferDirect(R,null,N,D,T,W),T.onAfterShadow(r,T,E,R,N,D,W)}}}else if(B.visible){const V=x(T,B,S,w);T.onBeforeShadow(r,T,E,R,N,V,null),r.renderBufferDirect(R,null,N,V,T,null),T.onAfterShadow(r,T,E,R,N,V,null)}}const P=T.children;for(let N=0,B=P.length;N<B;N++)y(P[N],E,R,S,w)}function b(T){T.target.removeEventListener("dispose",b);for(const R in c){const S=c[R],w=T.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}const $w={[Rh]:Ch,[Ph]:Ih,[Lh]:Nh,[ea]:Dh,[Ch]:Rh,[Ih]:Ph,[Nh]:Lh,[Dh]:ea};function jw(r,e){function t(){let O=!1;const ge=new Bt;let oe=null;const be=new Bt(0,0,0,0);return{setMask:function(ie){oe!==ie&&!O&&(r.colorMask(ie,ie,ie,ie),oe=ie)},setLocked:function(ie){O=ie},setClear:function(ie,te,ve,Ge,mt){mt===!0&&(ie*=Ge,te*=Ge,ve*=Ge),ge.set(ie,te,ve,Ge),be.equals(ge)===!1&&(r.clearColor(ie,te,ve,Ge),be.copy(ge))},reset:function(){O=!1,oe=null,be.set(-1,0,0,0)}}}function n(){let O=!1,ge=!1,oe=null,be=null,ie=null;return{setReversed:function(te){if(ge!==te){const ve=e.get("EXT_clip_control");te?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ge=te;const Ge=ie;ie=null,this.setClear(Ge)}},getReversed:function(){return ge},setTest:function(te){te?J(r.DEPTH_TEST):ce(r.DEPTH_TEST)},setMask:function(te){oe!==te&&!O&&(r.depthMask(te),oe=te)},setFunc:function(te){if(ge&&(te=$w[te]),be!==te){switch(te){case Rh:r.depthFunc(r.NEVER);break;case Ch:r.depthFunc(r.ALWAYS);break;case Ph:r.depthFunc(r.LESS);break;case ea:r.depthFunc(r.LEQUAL);break;case Lh:r.depthFunc(r.EQUAL);break;case Dh:r.depthFunc(r.GEQUAL);break;case Ih:r.depthFunc(r.GREATER);break;case Nh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}be=te}},setLocked:function(te){O=te},setClear:function(te){ie!==te&&(ge&&(te=1-te),r.clearDepth(te),ie=te)},reset:function(){O=!1,oe=null,be=null,ie=null,ge=!1}}}function i(){let O=!1,ge=null,oe=null,be=null,ie=null,te=null,ve=null,Ge=null,mt=null;return{setTest:function(Le){O||(Le?J(r.STENCIL_TEST):ce(r.STENCIL_TEST))},setMask:function(Le){ge!==Le&&!O&&(r.stencilMask(Le),ge=Le)},setFunc:function(Le,Ue,et){(oe!==Le||be!==Ue||ie!==et)&&(r.stencilFunc(Le,Ue,et),oe=Le,be=Ue,ie=et)},setOp:function(Le,Ue,et){(te!==Le||ve!==Ue||Ge!==et)&&(r.stencilOp(Le,Ue,et),te=Le,ve=Ue,Ge=et)},setLocked:function(Le){O=Le},setClear:function(Le){mt!==Le&&(r.clearStencil(Le),mt=Le)},reset:function(){O=!1,ge=null,oe=null,be=null,ie=null,te=null,ve=null,Ge=null,mt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,x=null,y=null,b=null,T=null,E=new Ke(0,0,0),R=0,S=!1,w=null,C=null,P=null,N=null,B=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,z=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=z>=1):W.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=z>=2);let ee=null,D={};const Q=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),he=new Bt().fromArray(Q),ye=new Bt().fromArray(re);function ae(O,ge,oe,be){const ie=new Uint8Array(4),te=r.createTexture();r.bindTexture(O,te),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ve=0;ve<oe;ve++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(ge,0,r.RGBA,1,1,be,0,r.RGBA,r.UNSIGNED_BYTE,ie):r.texImage2D(ge+ve,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ie);return te}const $={};$[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(r.DEPTH_TEST),o.setFunc(ea),Fe(!1),H(ep),J(r.CULL_FACE),Pe(Gr);function J(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function ce(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function Ne(O,ge){return h[O]!==ge?(r.bindFramebuffer(O,ge),h[O]=ge,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ge),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ge),!0):!1}function Te(O,ge){let oe=d,be=!1;if(O){oe=f.get(ge),oe===void 0&&(oe=[],f.set(ge,oe));const ie=O.textures;if(oe.length!==ie.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let te=0,ve=ie.length;te<ve;te++)oe[te]=r.COLOR_ATTACHMENT0+te;oe.length=ie.length,be=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,be=!0);be&&r.drawBuffers(oe)}function He(O){return g!==O?(r.useProgram(O),g=O,!0):!1}const xe={[Ys]:r.FUNC_ADD,[tv]:r.FUNC_SUBTRACT,[nv]:r.FUNC_REVERSE_SUBTRACT};xe[iv]=r.MIN,xe[rv]=r.MAX;const Ee={[sv]:r.ZERO,[ov]:r.ONE,[av]:r.SRC_COLOR,[Eh]:r.SRC_ALPHA,[dv]:r.SRC_ALPHA_SATURATE,[hv]:r.DST_COLOR,[cv]:r.DST_ALPHA,[lv]:r.ONE_MINUS_SRC_COLOR,[Ah]:r.ONE_MINUS_SRC_ALPHA,[fv]:r.ONE_MINUS_DST_COLOR,[uv]:r.ONE_MINUS_DST_ALPHA,[pv]:r.CONSTANT_COLOR,[mv]:r.ONE_MINUS_CONSTANT_COLOR,[gv]:r.CONSTANT_ALPHA,[_v]:r.ONE_MINUS_CONSTANT_ALPHA};function Pe(O,ge,oe,be,ie,te,ve,Ge,mt,Le){if(O===Gr){_===!0&&(ce(r.BLEND),_=!1);return}if(_===!1&&(J(r.BLEND),_=!0),O!==ev){if(O!==m||Le!==S){if((p!==Ys||y!==Ys)&&(r.blendEquation(r.FUNC_ADD),p=Ys,y=Ys),Le)switch(O){case Wo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tp:r.blendFunc(r.ONE,r.ONE);break;case np:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ip:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:je("WebGLState: Invalid blending: ",O);break}else switch(O){case Wo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tp:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case np:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ip:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",O);break}v=null,x=null,b=null,T=null,E.set(0,0,0),R=0,m=O,S=Le}return}ie=ie||ge,te=te||oe,ve=ve||be,(ge!==p||ie!==y)&&(r.blendEquationSeparate(xe[ge],xe[ie]),p=ge,y=ie),(oe!==v||be!==x||te!==b||ve!==T)&&(r.blendFuncSeparate(Ee[oe],Ee[be],Ee[te],Ee[ve]),v=oe,x=be,b=te,T=ve),(Ge.equals(E)===!1||mt!==R)&&(r.blendColor(Ge.r,Ge.g,Ge.b,mt),E.copy(Ge),R=mt),m=O,S=!1}function qe(O,ge){O.side===ur?ce(r.CULL_FACE):J(r.CULL_FACE);let oe=O.side===ai;ge&&(oe=!oe),Fe(oe),O.blending===Wo&&O.transparent===!1?Pe(Gr):Pe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const be=O.stencilWrite;a.setTest(be),be&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ft(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(O){w!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),w=O)}function H(O){O!==J0?(J(r.CULL_FACE),O!==C&&(O===ep?r.cullFace(r.BACK):O===Q0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ce(r.CULL_FACE),C=O}function U(O){O!==P&&(k&&r.lineWidth(O),P=O)}function ft(O,ge,oe){O?(J(r.POLYGON_OFFSET_FILL),(N!==ge||B!==oe)&&(r.polygonOffset(ge,oe),N=ge,B=oe)):ce(r.POLYGON_OFFSET_FILL)}function Ze(O){O?J(r.SCISSOR_TEST):ce(r.SCISSOR_TEST)}function Se(O){O===void 0&&(O=r.TEXTURE0+V-1),ee!==O&&(r.activeTexture(O),ee=O)}function ue(O,ge,oe){oe===void 0&&(ee===null?oe=r.TEXTURE0+V-1:oe=ee);let be=D[oe];be===void 0&&(be={type:void 0,texture:void 0},D[oe]=be),(be.type!==O||be.texture!==ge)&&(ee!==oe&&(r.activeTexture(oe),ee=oe),r.bindTexture(O,ge||$[O]),be.type=O,be.texture=ge)}function L(){const O=D[ee];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(O){je("WebGLState:",O)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(O){je("WebGLState:",O)}}function Y(){try{r.texSubImage2D(...arguments)}catch(O){je("WebGLState:",O)}}function K(){try{r.texSubImage3D(...arguments)}catch(O){je("WebGLState:",O)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(O){je("WebGLState:",O)}}function fe(){try{r.compressedTexSubImage3D(...arguments)}catch(O){je("WebGLState:",O)}}function le(){try{r.texStorage2D(...arguments)}catch(O){je("WebGLState:",O)}}function Me(){try{r.texStorage3D(...arguments)}catch(O){je("WebGLState:",O)}}function de(){try{r.texImage2D(...arguments)}catch(O){je("WebGLState:",O)}}function ne(){try{r.texImage3D(...arguments)}catch(O){je("WebGLState:",O)}}function se(O){he.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),he.copy(O))}function pe(O){ye.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),ye.copy(O))}function we(O,ge){let oe=c.get(ge);oe===void 0&&(oe=new WeakMap,c.set(ge,oe));let be=oe.get(O);be===void 0&&(be=r.getUniformBlockIndex(ge,O.name),oe.set(O,be))}function me(O,ge){const be=c.get(ge).get(O);l.get(ge)!==be&&(r.uniformBlockBinding(ge,be,O.__bindingPointIndex),l.set(ge,be))}function Ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ee=null,D={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,x=null,y=null,b=null,T=null,E=new Ke(0,0,0),R=0,S=!1,w=null,C=null,P=null,N=null,B=null,he.set(0,0,r.canvas.width,r.canvas.height),ye.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:ce,bindFramebuffer:Ne,drawBuffers:Te,useProgram:He,setBlending:Pe,setMaterial:qe,setFlipSided:Fe,setCullFace:H,setLineWidth:U,setPolygonOffset:ft,setScissorTest:Ze,activeTexture:Se,bindTexture:ue,unbindTexture:L,compressedTexImage2D:M,compressedTexImage3D:I,texImage2D:de,texImage3D:ne,updateUBOMapping:we,uniformBlockBinding:me,texStorage2D:le,texStorage3D:Me,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:fe,scissor:se,viewport:pe,reset:Ye}}function Kw(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,M){return d?new OffscreenCanvas(L,M):_l("canvas")}function _(L,M,I){let Y=1;const K=ue(L);if((K.width>I||K.height>I)&&(Y=I/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const q=Math.floor(Y*K.width),fe=Math.floor(Y*K.height);h===void 0&&(h=g(q,fe));const le=M?g(q,fe):h;return le.width=q,le.height=fe,le.getContext("2d").drawImage(L,0,0,q,fe),ke("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+fe+")."),le}else return"data"in L&&ke("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){r.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(L,M,I,Y,K=!1){if(L!==null){if(r[L]!==void 0)return r[L];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let q=M;if(M===r.RED&&(I===r.FLOAT&&(q=r.R32F),I===r.HALF_FLOAT&&(q=r.R16F),I===r.UNSIGNED_BYTE&&(q=r.R8)),M===r.RED_INTEGER&&(I===r.UNSIGNED_BYTE&&(q=r.R8UI),I===r.UNSIGNED_SHORT&&(q=r.R16UI),I===r.UNSIGNED_INT&&(q=r.R32UI),I===r.BYTE&&(q=r.R8I),I===r.SHORT&&(q=r.R16I),I===r.INT&&(q=r.R32I)),M===r.RG&&(I===r.FLOAT&&(q=r.RG32F),I===r.HALF_FLOAT&&(q=r.RG16F),I===r.UNSIGNED_BYTE&&(q=r.RG8)),M===r.RG_INTEGER&&(I===r.UNSIGNED_BYTE&&(q=r.RG8UI),I===r.UNSIGNED_SHORT&&(q=r.RG16UI),I===r.UNSIGNED_INT&&(q=r.RG32UI),I===r.BYTE&&(q=r.RG8I),I===r.SHORT&&(q=r.RG16I),I===r.INT&&(q=r.RG32I)),M===r.RGB_INTEGER&&(I===r.UNSIGNED_BYTE&&(q=r.RGB8UI),I===r.UNSIGNED_SHORT&&(q=r.RGB16UI),I===r.UNSIGNED_INT&&(q=r.RGB32UI),I===r.BYTE&&(q=r.RGB8I),I===r.SHORT&&(q=r.RGB16I),I===r.INT&&(q=r.RGB32I)),M===r.RGBA_INTEGER&&(I===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),I===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),I===r.UNSIGNED_INT&&(q=r.RGBA32UI),I===r.BYTE&&(q=r.RGBA8I),I===r.SHORT&&(q=r.RGBA16I),I===r.INT&&(q=r.RGBA32I)),M===r.RGB&&(I===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),I===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),M===r.RGBA){const fe=K?zc:dt.getTransfer(Y);I===r.FLOAT&&(q=r.RGBA32F),I===r.HALF_FLOAT&&(q=r.RGBA16F),I===r.UNSIGNED_BYTE&&(q=fe===Mt?r.SRGB8_ALPHA8:r.RGBA8),I===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),I===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(L,M){let I;return L?M===null||M===xr||M===pl?I=r.DEPTH24_STENCIL8:M===Bi?I=r.DEPTH32F_STENCIL8:M===dl&&(I=r.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===xr||M===pl?I=r.DEPTH_COMPONENT24:M===Bi?I=r.DEPTH_COMPONENT32F:M===dl&&(I=r.DEPTH_COMPONENT16),I}function b(L,M){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==hn&&L.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function T(L){const M=L.target;M.removeEventListener("dispose",T),R(M),M.isVideoTexture&&u.delete(M)}function E(L){const M=L.target;M.removeEventListener("dispose",E),w(M)}function R(L){const M=n.get(L);if(M.__webglInit===void 0)return;const I=L.source,Y=f.get(I);if(Y){const K=Y[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(L),Object.keys(Y).length===0&&f.delete(I)}n.remove(L)}function S(L){const M=n.get(L);r.deleteTexture(M.__webglTexture);const I=L.source,Y=f.get(I);delete Y[M.__cacheKey],o.memory.textures--}function w(L){const M=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let K=0;K<M.__webglFramebuffer[Y].length;K++)r.deleteFramebuffer(M.__webglFramebuffer[Y][K]);else r.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)r.deleteFramebuffer(M.__webglFramebuffer[Y]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const I=L.textures;for(let Y=0,K=I.length;Y<K;Y++){const q=n.get(I[Y]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(I[Y])}n.remove(L)}let C=0;function P(){C=0}function N(){const L=C;return L>=i.maxTextures&&ke("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),C+=1,L}function B(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function V(L,M){const I=n.get(L);if(L.isVideoTexture&&Ze(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&I.__version!==L.version){const Y=L.image;if(Y===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{$(I,L,M);return}}else L.isExternalTexture&&(I.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,I.__webglTexture,r.TEXTURE0+M)}function k(L,M){const I=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&I.__version!==L.version){$(I,L,M);return}else L.isExternalTexture&&(I.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,I.__webglTexture,r.TEXTURE0+M)}function z(L,M){const I=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&I.__version!==L.version){$(I,L,M);return}t.bindTexture(r.TEXTURE_3D,I.__webglTexture,r.TEXTURE0+M)}function W(L,M){const I=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&I.__version!==L.version){J(I,L,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+M)}const ee={[na]:r.REPEAT,[fr]:r.CLAMP_TO_EDGE,[kc]:r.MIRRORED_REPEAT},D={[hn]:r.NEAREST,[Pg]:r.NEAREST_MIPMAP_NEAREST,[za]:r.NEAREST_MIPMAP_LINEAR,[fn]:r.LINEAR,[wc]:r.LINEAR_MIPMAP_NEAREST,[zr]:r.LINEAR_MIPMAP_LINEAR},Q={[Tv]:r.NEVER,[Pv]:r.ALWAYS,[Ev]:r.LESS,[ad]:r.LEQUAL,[Av]:r.EQUAL,[ld]:r.GEQUAL,[Rv]:r.GREATER,[Cv]:r.NOTEQUAL};function re(L,M){if(M.type===Bi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===fn||M.magFilter===wc||M.magFilter===za||M.magFilter===zr||M.minFilter===fn||M.minFilter===wc||M.minFilter===za||M.minFilter===zr)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,ee[M.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,ee[M.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,ee[M.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,D[M.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,D[M.minFilter]),M.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===hn||M.minFilter!==za&&M.minFilter!==zr||M.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function he(L,M){let I=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",T));const Y=M.source;let K=f.get(Y);K===void 0&&(K={},f.set(Y,K));const q=B(M);if(q!==L.__cacheKey){K[q]===void 0&&(K[q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,I=!0),K[q].usedTimes++;const fe=K[L.__cacheKey];fe!==void 0&&(K[L.__cacheKey].usedTimes--,fe.usedTimes===0&&S(M)),L.__cacheKey=q,L.__webglTexture=K[q].texture}return I}function ye(L,M,I){return Math.floor(Math.floor(L/I)/M)}function ae(L,M,I,Y){const q=L.updateRanges;if(q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,I,Y,M.data);else{q.sort((ne,se)=>ne.start-se.start);let fe=0;for(let ne=1;ne<q.length;ne++){const se=q[fe],pe=q[ne],we=se.start+se.count,me=ye(pe.start,M.width,4),Ye=ye(se.start,M.width,4);pe.start<=we+1&&me===Ye&&ye(pe.start+pe.count-1,M.width,4)===me?se.count=Math.max(se.count,pe.start+pe.count-se.start):(++fe,q[fe]=pe)}q.length=fe+1;const le=r.getParameter(r.UNPACK_ROW_LENGTH),Me=r.getParameter(r.UNPACK_SKIP_PIXELS),de=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let ne=0,se=q.length;ne<se;ne++){const pe=q[ne],we=Math.floor(pe.start/4),me=Math.ceil(pe.count/4),Ye=we%M.width,O=Math.floor(we/M.width),ge=me,oe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,Ye,O,ge,oe,I,Y,M.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Me),r.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function $(L,M,I){let Y=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=r.TEXTURE_3D);const K=he(L,M),q=M.source;t.bindTexture(Y,L.__webglTexture,r.TEXTURE0+I);const fe=n.get(q);if(q.version!==fe.__version||K===!0){t.activeTexture(r.TEXTURE0+I);const le=dt.getPrimaries(dt.workingColorSpace),Me=M.colorSpace===us?null:dt.getPrimaries(M.colorSpace),de=M.colorSpace===us||le===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let ne=_(M.image,!1,i.maxTextureSize);ne=Se(M,ne);const se=s.convert(M.format,M.colorSpace),pe=s.convert(M.type);let we=x(M.internalFormat,se,pe,M.colorSpace,M.isVideoTexture);re(Y,M);let me;const Ye=M.mipmaps,O=M.isVideoTexture!==!0,ge=fe.__version===void 0||K===!0,oe=q.dataReady,be=b(M,ne);if(M.isDepthTexture)we=y(M.format===$s,M.type),ge&&(O?t.texStorage2D(r.TEXTURE_2D,1,we,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,we,ne.width,ne.height,0,se,pe,null));else if(M.isDataTexture)if(Ye.length>0){O&&ge&&t.texStorage2D(r.TEXTURE_2D,be,we,Ye[0].width,Ye[0].height);for(let ie=0,te=Ye.length;ie<te;ie++)me=Ye[ie],O?oe&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,me.width,me.height,se,pe,me.data):t.texImage2D(r.TEXTURE_2D,ie,we,me.width,me.height,0,se,pe,me.data);M.generateMipmaps=!1}else O?(ge&&t.texStorage2D(r.TEXTURE_2D,be,we,ne.width,ne.height),oe&&ae(M,ne,se,pe)):t.texImage2D(r.TEXTURE_2D,0,we,ne.width,ne.height,0,se,pe,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,we,Ye[0].width,Ye[0].height,ne.depth);for(let ie=0,te=Ye.length;ie<te;ie++)if(me=Ye[ie],M.format!==ki)if(se!==null)if(O){if(oe)if(M.layerUpdates.size>0){const ve=Yp(me.width,me.height,M.format,M.type);for(const Ge of M.layerUpdates){const mt=me.data.subarray(Ge*ve/me.data.BYTES_PER_ELEMENT,(Ge+1)*ve/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,Ge,me.width,me.height,1,se,mt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,me.width,me.height,ne.depth,se,me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,we,me.width,me.height,ne.depth,0,me.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,me.width,me.height,ne.depth,se,pe,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,we,me.width,me.height,ne.depth,0,se,pe,me.data)}else{O&&ge&&t.texStorage2D(r.TEXTURE_2D,be,we,Ye[0].width,Ye[0].height);for(let ie=0,te=Ye.length;ie<te;ie++)me=Ye[ie],M.format!==ki?se!==null?O?oe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,me.width,me.height,se,me.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,we,me.width,me.height,0,me.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?oe&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,me.width,me.height,se,pe,me.data):t.texImage2D(r.TEXTURE_2D,ie,we,me.width,me.height,0,se,pe,me.data)}else if(M.isDataArrayTexture)if(O){if(ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,we,ne.width,ne.height,ne.depth),oe)if(M.layerUpdates.size>0){const ie=Yp(ne.width,ne.height,M.format,M.type);for(const te of M.layerUpdates){const ve=ne.data.subarray(te*ie/ne.data.BYTES_PER_ELEMENT,(te+1)*ie/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,ne.width,ne.height,1,se,pe,ve)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,se,pe,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,ne.width,ne.height,ne.depth,0,se,pe,ne.data);else if(M.isData3DTexture)O?(ge&&t.texStorage3D(r.TEXTURE_3D,be,we,ne.width,ne.height,ne.depth),oe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,se,pe,ne.data)):t.texImage3D(r.TEXTURE_3D,0,we,ne.width,ne.height,ne.depth,0,se,pe,ne.data);else if(M.isFramebufferTexture){if(ge)if(O)t.texStorage2D(r.TEXTURE_2D,be,we,ne.width,ne.height);else{let ie=ne.width,te=ne.height;for(let ve=0;ve<be;ve++)t.texImage2D(r.TEXTURE_2D,ve,we,ie,te,0,se,pe,null),ie>>=1,te>>=1}}else if(Ye.length>0){if(O&&ge){const ie=ue(Ye[0]);t.texStorage2D(r.TEXTURE_2D,be,we,ie.width,ie.height)}for(let ie=0,te=Ye.length;ie<te;ie++)me=Ye[ie],O?oe&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,se,pe,me):t.texImage2D(r.TEXTURE_2D,ie,we,se,pe,me);M.generateMipmaps=!1}else if(O){if(ge){const ie=ue(ne);t.texStorage2D(r.TEXTURE_2D,be,we,ie.width,ie.height)}oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,pe,ne)}else t.texImage2D(r.TEXTURE_2D,0,we,se,pe,ne);m(M)&&p(Y),fe.__version=q.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function J(L,M,I){if(M.image.length!==6)return;const Y=he(L,M),K=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+I);const q=n.get(K);if(K.version!==q.__version||Y===!0){t.activeTexture(r.TEXTURE0+I);const fe=dt.getPrimaries(dt.workingColorSpace),le=M.colorSpace===us?null:dt.getPrimaries(M.colorSpace),Me=M.colorSpace===us||fe===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const de=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,se=[];for(let te=0;te<6;te++)!de&&!ne?se[te]=_(M.image[te],!0,i.maxCubemapSize):se[te]=ne?M.image[te].image:M.image[te],se[te]=Se(M,se[te]);const pe=se[0],we=s.convert(M.format,M.colorSpace),me=s.convert(M.type),Ye=x(M.internalFormat,we,me,M.colorSpace),O=M.isVideoTexture!==!0,ge=q.__version===void 0||Y===!0,oe=K.dataReady;let be=b(M,pe);re(r.TEXTURE_CUBE_MAP,M);let ie;if(de){O&&ge&&t.texStorage2D(r.TEXTURE_CUBE_MAP,be,Ye,pe.width,pe.height);for(let te=0;te<6;te++){ie=se[te].mipmaps;for(let ve=0;ve<ie.length;ve++){const Ge=ie[ve];M.format!==ki?we!==null?O?oe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,Ge.width,Ge.height,we,Ge.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,Ye,Ge.width,Ge.height,0,Ge.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,Ge.width,Ge.height,we,me,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,Ye,Ge.width,Ge.height,0,we,me,Ge.data)}}}else{if(ie=M.mipmaps,O&&ge){ie.length>0&&be++;const te=ue(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,be,Ye,te.width,te.height)}for(let te=0;te<6;te++)if(ne){O?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,se[te].width,se[te].height,we,me,se[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,se[te].width,se[te].height,0,we,me,se[te].data);for(let ve=0;ve<ie.length;ve++){const mt=ie[ve].image[te].image;O?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,mt.width,mt.height,we,me,mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,Ye,mt.width,mt.height,0,we,me,mt.data)}}else{O?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,we,me,se[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,we,me,se[te]);for(let ve=0;ve<ie.length;ve++){const Ge=ie[ve];O?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,we,me,Ge.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,Ye,we,me,Ge.image[te])}}}m(M)&&p(r.TEXTURE_CUBE_MAP),q.__version=K.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ce(L,M,I,Y,K,q){const fe=s.convert(I.format,I.colorSpace),le=s.convert(I.type),Me=x(I.internalFormat,fe,le,I.colorSpace),de=n.get(M),ne=n.get(I);if(ne.__renderTarget=M,!de.__hasExternalTextures){const se=Math.max(1,M.width>>q),pe=Math.max(1,M.height>>q);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,q,Me,se,pe,M.depth,0,fe,le,null):t.texImage2D(K,q,Me,se,pe,0,fe,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),ft(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,K,ne.__webglTexture,0,U(M)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,K,ne.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(L,M,I){if(r.bindRenderbuffer(r.RENDERBUFFER,L),M.depthBuffer){const Y=M.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,q=y(M.stencilBuffer,K),fe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ft(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(M),q,M.width,M.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(M),q,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,q,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,L)}else{const Y=M.textures;for(let K=0;K<Y.length;K++){const q=Y[K],fe=s.convert(q.format,q.colorSpace),le=s.convert(q.type),Me=x(q.internalFormat,fe,le,q.colorSpace);ft(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(M),Me,M.width,M.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(M),Me,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Me,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(L,M,I){const Y=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(M.depthTexture);if(K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y){if(K.__webglInit===void 0&&(K.__webglInit=!0,M.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),re(r.TEXTURE_CUBE_MAP,M.depthTexture);const de=s.convert(M.depthTexture.format),ne=s.convert(M.depthTexture.type);let se;M.depthTexture.format===$r?se=r.DEPTH_COMPONENT24:M.depthTexture.format===$s&&(se=r.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,se,M.width,M.height,0,de,ne,null)}}else V(M.depthTexture,0);const q=K.__webglTexture,fe=U(M),le=Y?r.TEXTURE_CUBE_MAP_POSITIVE_X+I:r.TEXTURE_2D,Me=M.depthTexture.format===$s?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===$r)ft(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,le,q,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,Me,le,q,0);else if(M.depthTexture.format===$s)ft(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Me,le,q,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,Me,le,q,0);else throw new Error("Unknown depthTexture format")}function He(L){const M=n.get(L),I=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const Y=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=Y}if(L.depthTexture&&!M.__autoAllocateDepthBuffer)if(I)for(let Y=0;Y<6;Y++)Te(M.__webglFramebuffer[Y],L,Y);else{const Y=L.texture.mipmaps;Y&&Y.length>0?Te(M.__webglFramebuffer[0],L,0):Te(M.__webglFramebuffer,L,0)}else if(I){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=r.createRenderbuffer(),Ne(M.__webglDepthbuffer[Y],L,!1);else{const K=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,q)}}else{const Y=L.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ne(M.__webglDepthbuffer,L,!1);else{const K=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(L,M,I){const Y=n.get(L);M!==void 0&&ce(Y.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),I!==void 0&&He(L)}function Ee(L){const M=L.texture,I=n.get(L),Y=n.get(M);L.addEventListener("dispose",E);const K=L.textures,q=L.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=M.version,o.memory.textures++),q){I.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer[le]=[];for(let Me=0;Me<M.mipmaps.length;Me++)I.__webglFramebuffer[le][Me]=r.createFramebuffer()}else I.__webglFramebuffer[le]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){I.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)I.__webglFramebuffer[le]=r.createFramebuffer()}else I.__webglFramebuffer=r.createFramebuffer();if(fe)for(let le=0,Me=K.length;le<Me;le++){const de=n.get(K[le]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&ft(L)===!1){I.__webglMultisampledFramebuffer=r.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let le=0;le<K.length;le++){const Me=K[le];I.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,I.__webglColorRenderbuffer[le]);const de=s.convert(Me.format,Me.colorSpace),ne=s.convert(Me.type),se=x(Me.internalFormat,de,ne,Me.colorSpace,L.isXRRenderTarget===!0),pe=U(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,se,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,I.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(I.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(I.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),re(r.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)ce(I.__webglFramebuffer[le][Me],L,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me);else ce(I.__webglFramebuffer[le],L,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(M)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let le=0,Me=K.length;le<Me;le++){const de=K[le],ne=n.get(de);let se=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(se=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,ne.__webglTexture),re(se,de),ce(I.__webglFramebuffer,L,de,r.COLOR_ATTACHMENT0+le,se,0),m(de)&&p(se)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(le=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,Y.__webglTexture),re(le,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)ce(I.__webglFramebuffer[Me],L,M,r.COLOR_ATTACHMENT0,le,Me);else ce(I.__webglFramebuffer,L,M,r.COLOR_ATTACHMENT0,le,0);m(M)&&p(le),t.unbindTexture()}L.depthBuffer&&He(L)}function Pe(L){const M=L.textures;for(let I=0,Y=M.length;I<Y;I++){const K=M[I];if(m(K)){const q=v(L),fe=n.get(K).__webglTexture;t.bindTexture(q,fe),p(q),t.unbindTexture()}}}const qe=[],Fe=[];function H(L){if(L.samples>0){if(ft(L)===!1){const M=L.textures,I=L.width,Y=L.height;let K=r.COLOR_BUFFER_BIT;const q=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=n.get(L),le=M.length>1;if(le)for(let de=0;de<M.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const Me=L.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<M.length;de++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const ne=n.get(M[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,I,Y,0,0,I,Y,K,r.NEAREST),l===!0&&(qe.length=0,Fe.length=0,qe.push(r.COLOR_ATTACHMENT0+de),L.depthBuffer&&L.resolveDepthBuffer===!1&&(qe.push(q),Fe.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Fe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let de=0;de<M.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const ne=n.get(M[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const M=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function U(L){return Math.min(i.maxSamples,L.samples)}function ft(L){const M=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ze(L){const M=o.render.frame;u.get(L)!==M&&(u.set(L,M),L.update())}function Se(L,M){const I=L.colorSpace,Y=L.format,K=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||I!==Qn&&I!==us&&(dt.getTransfer(I)===Mt?(Y!==ki||K!==bi)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",I)),M}function ue(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=P,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=xe,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Zw(r,e){function t(n,i=us){let s;const o=dt.getTransfer(i);if(n===bi)return r.UNSIGNED_BYTE;if(n===ed)return r.UNSIGNED_SHORT_4_4_4_4;if(n===td)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ig)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ng)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lg)return r.BYTE;if(n===Dg)return r.SHORT;if(n===dl)return r.UNSIGNED_SHORT;if(n===Qf)return r.INT;if(n===xr)return r.UNSIGNED_INT;if(n===Bi)return r.FLOAT;if(n===qr)return r.HALF_FLOAT;if(n===Og)return r.ALPHA;if(n===Ug)return r.RGB;if(n===ki)return r.RGBA;if(n===$r)return r.DEPTH_COMPONENT;if(n===$s)return r.DEPTH_STENCIL;if(n===nd)return r.RED;if(n===id)return r.RED_INTEGER;if(n===ia)return r.RG;if(n===rd)return r.RG_INTEGER;if(n===sd)return r.RGBA_INTEGER;if(n===Tc||n===Ec||n===Ac||n===Rc)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Tc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Tc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ec)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ac)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fh||n===Bh||n===kh||n===zh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===Yh||n===qh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vh||n===Hh)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Gh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wh)return s.COMPRESSED_R11_EAC;if(n===Xh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Yh)return s.COMPRESSED_RG11_EAC;if(n===qh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$h||n===jh||n===Kh||n===Zh||n===Jh||n===Qh||n===ef||n===tf||n===nf||n===rf||n===sf||n===of||n===af||n===lf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$h)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ef)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===of)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===af)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lf)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cf||n===uf||n===hf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===cf)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ff||n===df||n===pf||n===mf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ff)return s.COMPRESSED_RED_RGTC1_EXT;if(n===df)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pl?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Jw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qw=`
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

}`;class eT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Kg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:Jw,fragmentShader:Qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Tr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tT extends ho{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new eT,p={},v=t.getContextAttributes();let x=null,y=null;const b=[],T=[],E=new ze;let R=null;const S=new rn;S.viewport=new Bt;const w=new rn;w.viewport=new Bt;const C=[S,w],P=new ty;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=b[$];return J===void 0&&(J=new zu,b[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=b[$];return J===void 0&&(J=new zu,b[$]=J),J.getGripSpace()},this.getHand=function($){let J=b[$];return J===void 0&&(J=new zu,b[$]=J),J.getHandSpace()};function V($){const J=T.indexOf($.inputSource);if(J===-1)return;const ce=b[J];ce!==void 0&&(ce.update($.inputSource,$.frame,c||o),ce.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",z);for(let $=0;$<b.length;$++){const J=T[$];J!==null&&(T[$]=null,b[$].disconnect(J))}N=null,B=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(x),d=null,f=null,h=null,i=null,y=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",k),i.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Ne=null,Te=null;v.depth&&(Te=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=v.stencil?$s:$r,Ne=v.stencil?pl:xr);const He={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(He),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new bn(f.textureWidth,f.textureHeight,{format:ki,type:bi,depthTexture:new xl(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new bn(d.framebufferWidth,d.framebufferHeight,{format:ki,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z($){for(let J=0;J<$.removed.length;J++){const ce=$.removed[J],Ne=T.indexOf(ce);Ne>=0&&(T[Ne]=null,b[Ne].disconnect(ce))}for(let J=0;J<$.added.length;J++){const ce=$.added[J];let Ne=T.indexOf(ce);if(Ne===-1){for(let He=0;He<b.length;He++)if(He>=T.length){T.push(ce),Ne=He;break}else if(T[He]===null){T[He]=ce,Ne=He;break}if(Ne===-1)break}const Te=b[Ne];Te&&Te.connect(ce)}}const W=new F,ee=new F;function D($,J,ce){W.setFromMatrixPosition(J.matrixWorld),ee.setFromMatrixPosition(ce.matrixWorld);const Ne=W.distanceTo(ee),Te=J.projectionMatrix.elements,He=ce.projectionMatrix.elements,xe=Te[14]/(Te[10]-1),Ee=Te[14]/(Te[10]+1),Pe=(Te[9]+1)/Te[5],qe=(Te[9]-1)/Te[5],Fe=(Te[8]-1)/Te[0],H=(He[8]+1)/He[0],U=xe*Fe,ft=xe*H,Ze=Ne/(-Fe+H),Se=Ze*-Fe;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Se),$.translateZ(Ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Te[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ue=xe+Ze,L=Ee+Ze,M=U-Se,I=ft+(Ne-Se),Y=Pe*Ee/L*ue,K=qe*Ee/L*ue;$.projectionMatrix.makePerspective(M,I,Y,K,ue,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Q($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let J=$.near,ce=$.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),P.near=w.near=S.near=J,P.far=w.far=S.far=ce,(N!==P.near||B!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),N=P.near,B=P.far),P.layers.mask=$.layers.mask|6,S.layers.mask=P.layers.mask&3,w.layers.mask=P.layers.mask&5;const Ne=$.parent,Te=P.cameras;Q(P,Ne);for(let He=0;He<Te.length;He++)Q(Te[He],Ne);Te.length===2?D(P,S,w):P.projectionMatrix.copy(S.projectionMatrix),re($,P,Ne)};function re($,J,ce){ce===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ra*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function($){return p[$]};let he=null;function ye($,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ne=!1;ce.length!==P.cameras.length&&(P.cameras.length=0,Ne=!0);for(let Ee=0;Ee<ce.length;Ee++){const Pe=ce[Ee];let qe=null;if(d!==null)qe=d.getViewport(Pe);else{const H=h.getViewSubImage(f,Pe);qe=H.viewport,Ee===0&&(e.setRenderTargetTextures(y,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(y))}let Fe=C[Ee];Fe===void 0&&(Fe=new rn,Fe.layers.enable(Ee),Fe.viewport=new Bt,C[Ee]=Fe),Fe.matrix.fromArray(Pe.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Pe.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(qe.x,qe.y,qe.width,qe.height),Ee===0&&(P.matrix.copy(Fe.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ne===!0&&P.cameras.push(Fe)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Ee=h.getDepthInformation(ce[0]);Ee&&Ee.isValid&&Ee.texture&&m.init(Ee,i.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Ee=0;Ee<ce.length;Ee++){const Pe=ce[Ee].camera;if(Pe){let qe=p[Pe];qe||(qe=new Kg,p[Pe]=qe);const Fe=h.getCameraImage(Pe);qe.sourceTexture=Fe}}}}for(let ce=0;ce<b.length;ce++){const Ne=T[ce],Te=b[ce];Ne!==null&&Te!==void 0&&Te.update(Ne,J,c||o)}he&&he($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ae=new e_;ae.setAnimationLoop(ye),this.setAnimationLoop=function($){he=$},this.dispose=function(){}}}const Fs=new Sr,nT=new it;function iT(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Wg(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ai&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ai&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,Fs.copy(y),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),m.envMapRotation.value.setFromMatrix4(nT.makeRotationFromEuler(Fs)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ai&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rT(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(v,b);const T=e.render.frame;s[v.id]!==T&&(f(v),s[v.id]=T)}function u(v){const x=h();v.__bindingPointIndex=x;const y=r.createBuffer(),b=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,b,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=i[v.id],y=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let T=0,E=y.length;T<E;T++){const R=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,w=R.length;S<w;S++){const C=R[S];if(d(C,T,S,b)===!0){const P=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let V=0;V<N.length;V++){const k=N[V],z=_(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,P+B,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(v,x,y,b){const T=v.value,E=x+"_"+y;if(b[E]===void 0)return typeof T=="number"||typeof T=="boolean"?b[E]=T:b[E]=T.clone(),!0;{const R=b[E];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return b[E]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(v){const x=v.uniforms;let y=0;const b=16;for(let E=0,R=x.length;E<R;E++){const S=Array.isArray(x[E])?x[E]:[x[E]];for(let w=0,C=S.length;w<C;w++){const P=S[w],N=Array.isArray(P.value)?P.value:[P.value];for(let B=0,V=N.length;B<V;B++){const k=N[B],z=_(k),W=y%b,ee=W%z.boundary,D=W+ee;y+=ee,D!==0&&b-D<z.storage&&(y+=b-D),P.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=z.storage}}}const T=y%b;return T>0&&(y+=b-T),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}const sT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let nr=null;function oT(){return nr===null&&(nr=new fd(sT,16,16,ia,qr),nr.name="DFG_LUT",nr.minFilter=fn,nr.magFilter=fn,nr.wrapS=fr,nr.wrapT=fr,nr.generateMipmaps=!1,nr.needsUpdate=!0),nr}class Cs{constructor(e={}){const{canvas:t=Dv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=bi}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=d,m=new Set([sd,rd,id]),p=new Set([bi,xr,dl,pl,ed,td]),v=new Uint32Array(4),x=new Int32Array(4);let y=null,b=null;const T=[],E=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let w=!1;this._outputColorSpace=En;let C=0,P=0,N=null,B=-1,V=null;const k=new Bt,z=new Bt;let W=null;const ee=new Ke(0);let D=0,Q=t.width,re=t.height,he=1,ye=null,ae=null;const $=new Bt(0,0,Q,re),J=new Bt(0,0,Q,re);let ce=!1;const Ne=new pd;let Te=!1,He=!1;const xe=new it,Ee=new F,Pe=new Bt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function H(){return N===null?he:1}let U=n;function ft(A,G){return t.getContext(A,G)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jf}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Le,!1),U===null){const G="webgl2";if(U=ft(G,A),U===null)throw ft(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw je("WebGLRenderer: "+A.message),A}let Ze,Se,ue,L,M,I,Y,K,q,fe,le,Me,de,ne,se,pe,we,me,Ye,O,ge,oe,be,ie;function te(){Ze=new ob(U),Ze.init(),oe=new Zw(U,Ze),Se=new ZM(U,Ze,e,oe),ue=new jw(U,Ze),Se.reversedDepthBuffer&&f&&ue.buffers.depth.setReversed(!0),L=new cb(U),M=new Nw,I=new Kw(U,Ze,ue,M,Se,oe,L),Y=new QM(S),K=new sb(S),q=new dy(U),be=new jM(U,q),fe=new ab(U,q,L,be),le=new hb(U,fe,q,L),Ye=new ub(U,Se,I),pe=new JM(M),Me=new Iw(S,Y,K,Ze,Se,be,pe),de=new iT(S,M),ne=new Uw,se=new Hw(Ze),me=new $M(S,Y,K,ue,le,g,l),we=new qw(S,le,Se),ie=new rT(U,L,Se,ue),O=new KM(U,Ze,L),ge=new lb(U,Ze,L),L.programs=Me.programs,S.capabilities=Se,S.extensions=Ze,S.properties=M,S.renderLists=ne,S.shadowMap=we,S.state=ue,S.info=L}te(),_!==bi&&(R=new db(_,t.width,t.height,i,s));const ve=new tT(S,U);this.xr=ve,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=Ze.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ze.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(A){A!==void 0&&(he=A,this.setSize(Q,re,!1))},this.getSize=function(A){return A.set(Q,re)},this.setSize=function(A,G,Z=!0){if(ve.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=A,re=G,t.width=Math.floor(A*he),t.height=Math.floor(G*he),Z===!0&&(t.style.width=A+"px",t.style.height=G+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(Q*he,re*he).floor()},this.setDrawingBufferSize=function(A,G,Z){Q=A,re=G,he=Z,t.width=Math.floor(A*Z),t.height=Math.floor(G*Z),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(_===bi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,G,Z,j){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,G,Z,j),ue.viewport(k.copy($).multiplyScalar(he).round())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,G,Z,j){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,G,Z,j),ue.scissor(z.copy(J).multiplyScalar(he).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(A){ue.setScissorTest(ce=A)},this.setOpaqueSort=function(A){ye=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,Z=!0){let j=0;if(A){let X=!1;if(N!==null){const _e=N.texture.format;X=m.has(_e)}if(X){const _e=N.texture.type,De=p.has(_e),Ae=me.getClearColor(),Ie=me.getClearAlpha(),Be=Ae.r,$e=Ae.g,We=Ae.b;De?(v[0]=Be,v[1]=$e,v[2]=We,v[3]=Ie,U.clearBufferuiv(U.COLOR,0,v)):(x[0]=Be,x[1]=$e,x[2]=We,x[3]=Ie,U.clearBufferiv(U.COLOR,0,x))}else j|=U.COLOR_BUFFER_BIT}G&&(j|=U.DEPTH_BUFFER_BIT),Z&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),me.dispose(),ne.dispose(),se.dispose(),M.dispose(),Y.dispose(),K.dispose(),le.dispose(),be.dispose(),ie.dispose(),Me.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",jt),ve.removeEventListener("sessionend",at),yt.stop()};function Ge(A){A.preventDefault(),Hc("WebGLRenderer: Context Lost."),w=!0}function mt(){Hc("WebGLRenderer: Context Restored."),w=!1;const A=L.autoReset,G=we.enabled,Z=we.autoUpdate,j=we.needsUpdate,X=we.type;te(),L.autoReset=A,we.enabled=G,we.autoUpdate=Z,we.needsUpdate=j,we.type=X}function Le(A){je("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ue(A){const G=A.target;G.removeEventListener("dispose",Ue),et(G)}function et(A){Re(A),M.remove(A)}function Re(A){const G=M.get(A).programs;G!==void 0&&(G.forEach(function(Z){Me.releaseProgram(Z)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,Z,j,X,_e){G===null&&(G=qe);const De=X.isMesh&&X.matrixWorld.determinant()<0,Ae=on(A,G,Z,j,X);ue.setMaterial(j,De);let Ie=Z.index,Be=1;if(j.wireframe===!0){if(Ie=fe.getWireframeAttribute(Z),Ie===void 0)return;Be=2}const $e=Z.drawRange,We=Z.attributes.position;let lt=$e.start*Be,Rt=($e.start+$e.count)*Be;_e!==null&&(lt=Math.max(lt,_e.start*Be),Rt=Math.min(Rt,(_e.start+_e.count)*Be)),Ie!==null?(lt=Math.max(lt,0),Rt=Math.min(Rt,Ie.count)):We!=null&&(lt=Math.max(lt,0),Rt=Math.min(Rt,We.count));const Xt=Rt-lt;if(Xt<0||Xt===1/0)return;be.setup(X,j,Ae,Z,Ie);let Yt,Lt=O;if(Ie!==null&&(Yt=q.get(Ie),Lt=ge,Lt.setIndex(Yt)),X.isMesh)j.wireframe===!0?(ue.setLineWidth(j.wireframeLinewidth*H()),Lt.setMode(U.LINES)):Lt.setMode(U.TRIANGLES);else if(X.isLine){let Xe=j.linewidth;Xe===void 0&&(Xe=1),ue.setLineWidth(Xe*H()),X.isLineSegments?Lt.setMode(U.LINES):X.isLineLoop?Lt.setMode(U.LINE_LOOP):Lt.setMode(U.LINE_STRIP)}else X.isPoints?Lt.setMode(U.POINTS):X.isSprite&&Lt.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)vl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Lt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Xe=X._multiDrawStarts,St=X._multiDrawCounts,_t=X._multiDrawCount,pi=Ie?q.get(Ie).bytesPerElement:1,mo=M.get(j).currentProgram.getUniforms();for(let mi=0;mi<_t;mi++)mo.setValue(U,"_gl_DrawID",mi),Lt.render(Xe[mi]/pi,St[mi])}else if(X.isInstancedMesh)Lt.renderInstances(lt,Xt,X.count);else if(Z.isInstancedBufferGeometry){const Xe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,St=Math.min(Z.instanceCount,Xe);Lt.renderInstances(lt,Xt,St)}else Lt.render(lt,Xt)};function Je(A,G,Z){A.transparent===!0&&A.side===ur&&A.forceSinglePass===!1?(A.side=ai,A.needsUpdate=!0,At(A,G,Z),A.side=Yr,A.needsUpdate=!0,At(A,G,Z),A.side=ur):At(A,G,Z)}this.compile=function(A,G,Z=null){Z===null&&(Z=A),b=se.get(Z),b.init(G),E.push(b),Z.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),A!==Z&&A.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights();const j=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const _e=X.material;if(_e)if(Array.isArray(_e))for(let De=0;De<_e.length;De++){const Ae=_e[De];Je(Ae,Z,X),j.add(Ae)}else Je(_e,Z,X),j.add(_e)}),b=E.pop(),j},this.compileAsync=function(A,G,Z=null){const j=this.compile(A,G,Z);return new Promise(X=>{function _e(){if(j.forEach(function(De){M.get(De).currentProgram.isReady()&&j.delete(De)}),j.size===0){X(A);return}setTimeout(_e,10)}Ze.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ve=null;function Qe(A){Ve&&Ve(A)}function jt(){yt.stop()}function at(){yt.start()}const yt=new e_;yt.setAnimationLoop(Qe),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(A){Ve=A,ve.setAnimationLoop(A),A===null?yt.stop():yt.start()},ve.addEventListener("sessionstart",jt),ve.addEventListener("sessionend",at),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const Z=ve.enabled===!0&&ve.isPresenting===!0,j=R!==null&&(N===null||Z)&&R.begin(S,N);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(G),G=ve.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,G,N),b=se.get(A,E.length),b.init(G),E.push(b),xe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ne.setFromProjectionMatrix(xe,dr,G.reversedDepth),He=this.localClippingEnabled,Te=pe.init(this.clippingPlanes,He),y=ne.get(A,T.length),y.init(),T.push(y),ve.enabled===!0&&ve.isPresenting===!0){const De=S.xr.getDepthSensingMesh();De!==null&&Jt(De,G,-1/0,S.sortObjects)}Jt(A,G,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(ye,ae),Fe=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Fe&&me.addToRenderList(y,A),this.info.render.frame++,Te===!0&&pe.beginShadows();const X=b.state.shadowsArray;if(we.render(X,A,G),Te===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&R.hasRenderPass())===!1){const De=y.opaque,Ae=y.transmissive;if(b.setupLights(),G.isArrayCamera){const Ie=G.cameras;if(Ae.length>0)for(let Be=0,$e=Ie.length;Be<$e;Be++){const We=Ie[Be];Pt(De,Ae,A,We)}Fe&&me.render(A);for(let Be=0,$e=Ie.length;Be<$e;Be++){const We=Ie[Be];Ut(y,A,We,We.viewport)}}else Ae.length>0&&Pt(De,Ae,A,G),Fe&&me.render(A),Ut(y,A,G)}N!==null&&P===0&&(I.updateMultisampleRenderTarget(N),I.updateRenderTargetMipmap(N)),j&&R.end(S),A.isScene===!0&&A.onAfterRender(S,A,G),be.resetDefaultState(),B=-1,V=null,E.pop(),E.length>0?(b=E[E.length-1],Te===!0&&pe.setGlobalState(S.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function Jt(A,G,Z,j){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ne.intersectsSprite(A)){j&&Pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);const De=le.update(A),Ae=A.material;Ae.visible&&y.push(A,De,Ae,Z,Pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ne.intersectsObject(A))){const De=le.update(A),Ae=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pe.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Pe.copy(De.boundingSphere.center)),Pe.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(Ae)){const Ie=De.groups;for(let Be=0,$e=Ie.length;Be<$e;Be++){const We=Ie[Be],lt=Ae[We.materialIndex];lt&&lt.visible&&y.push(A,De,lt,Z,Pe.z,We)}}else Ae.visible&&y.push(A,De,Ae,Z,Pe.z,null)}}const _e=A.children;for(let De=0,Ae=_e.length;De<Ae;De++)Jt(_e[De],G,Z,j)}function Ut(A,G,Z,j){const{opaque:X,transmissive:_e,transparent:De}=A;b.setupLightsView(Z),Te===!0&&pe.setGlobalState(S.clippingPlanes,Z),j&&ue.viewport(k.copy(j)),X.length>0&&gt(X,G,Z),_e.length>0&&gt(_e,G,Z),De.length>0&&gt(De,G,Z),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Pt(A,G,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[j.id]===void 0){const lt=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[j.id]=new bn(1,1,{generateMipmaps:!0,type:lt?qr:bi,minFilter:zr,samples:Se.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const _e=b.state.transmissionRenderTarget[j.id],De=j.viewport||k;_e.setSize(De.z*S.transmissionResolutionScale,De.w*S.transmissionResolutionScale);const Ae=S.getRenderTarget(),Ie=S.getActiveCubeFace(),Be=S.getActiveMipmapLevel();S.setRenderTarget(_e),S.getClearColor(ee),D=S.getClearAlpha(),D<1&&S.setClearColor(16777215,.5),S.clear(),Fe&&me.render(Z);const $e=S.toneMapping;S.toneMapping=gr;const We=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),b.setupLightsView(j),Te===!0&&pe.setGlobalState(S.clippingPlanes,j),gt(A,Z,j),I.updateMultisampleRenderTarget(_e),I.updateRenderTargetMipmap(_e),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Rt=0,Xt=G.length;Rt<Xt;Rt++){const Yt=G[Rt],{object:Lt,geometry:Xe,material:St,group:_t}=Yt;if(St.side===ur&&Lt.layers.test(j.layers)){const pi=St.side;St.side=ai,St.needsUpdate=!0,ti(Lt,Z,j,Xe,St,_t),St.side=pi,St.needsUpdate=!0,lt=!0}}lt===!0&&(I.updateMultisampleRenderTarget(_e),I.updateRenderTargetMipmap(_e))}S.setRenderTarget(Ae,Ie,Be),S.setClearColor(ee,D),We!==void 0&&(j.viewport=We),S.toneMapping=$e}function gt(A,G,Z){const j=G.isScene===!0?G.overrideMaterial:null;for(let X=0,_e=A.length;X<_e;X++){const De=A[X],{object:Ae,geometry:Ie,group:Be}=De;let $e=De.material;$e.allowOverride===!0&&j!==null&&($e=j),Ae.layers.test(Z.layers)&&ti(Ae,G,Z,Ie,$e,Be)}}function ti(A,G,Z,j,X,_e){A.onBeforeRender(S,G,Z,j,X,_e),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(S,G,Z,j,A,_e),X.transparent===!0&&X.side===ur&&X.forceSinglePass===!1?(X.side=ai,X.needsUpdate=!0,S.renderBufferDirect(Z,G,j,X,A,_e),X.side=Yr,X.needsUpdate=!0,S.renderBufferDirect(Z,G,j,X,A,_e),X.side=ur):S.renderBufferDirect(Z,G,j,X,A,_e),A.onAfterRender(S,G,Z,j,X,_e)}function At(A,G,Z){G.isScene!==!0&&(G=qe);const j=M.get(A),X=b.state.lights,_e=b.state.shadowsArray,De=X.state.version,Ae=Me.getParameters(A,X.state,_e,G,Z),Ie=Me.getProgramCacheKey(Ae);let Be=j.programs;j.environment=A.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(A.isMeshStandardMaterial?K:Y).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",Ue),Be=new Map,j.programs=Be);let $e=Be.get(Ie);if($e!==void 0){if(j.currentProgram===$e&&j.lightsStateVersion===De)return di(A,Ae),$e}else Ae.uniforms=Me.getUniforms(A),A.onBeforeCompile(Ae,S),$e=Me.acquireProgram(Ae,Ie),Be.set(Ie,$e),j.uniforms=Ae.uniforms;const We=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=pe.uniform),di(A,Ae),j.needsLights=mn(A),j.lightsStateVersion=De,j.needsLights&&(We.ambientLightColor.value=X.state.ambient,We.lightProbe.value=X.state.probe,We.directionalLights.value=X.state.directional,We.directionalLightShadows.value=X.state.directionalShadow,We.spotLights.value=X.state.spot,We.spotLightShadows.value=X.state.spotShadow,We.rectAreaLights.value=X.state.rectArea,We.ltc_1.value=X.state.rectAreaLTC1,We.ltc_2.value=X.state.rectAreaLTC2,We.pointLights.value=X.state.point,We.pointLightShadows.value=X.state.pointShadow,We.hemisphereLights.value=X.state.hemi,We.directionalShadowMap.value=X.state.directionalShadowMap,We.directionalShadowMatrix.value=X.state.directionalShadowMatrix,We.spotShadowMap.value=X.state.spotShadowMap,We.spotLightMatrix.value=X.state.spotLightMatrix,We.spotLightMap.value=X.state.spotLightMap,We.pointShadowMap.value=X.state.pointShadowMap,We.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=$e,j.uniformsList=null,$e}function Pn(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Cc.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function di(A,G){const Z=M.get(A);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function on(A,G,Z,j,X){G.isScene!==!0&&(G=qe),I.resetTextureUnits();const _e=G.fog,De=j.isMeshStandardMaterial?G.environment:null,Ae=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Qn,Ie=(j.isMeshStandardMaterial?K:Y).get(j.envMap||De),Be=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$e=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),We=!!Z.morphAttributes.position,lt=!!Z.morphAttributes.normal,Rt=!!Z.morphAttributes.color;let Xt=gr;j.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Xt=S.toneMapping);const Yt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Lt=Yt!==void 0?Yt.length:0,Xe=M.get(j),St=b.state.lights;if(Te===!0&&(He===!0||A!==V)){const zn=A===V&&j.id===B;pe.setState(j,A,zn)}let _t=!1;j.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==St.state.version||Xe.outputColorSpace!==Ae||X.isBatchedMesh&&Xe.batching===!1||!X.isBatchedMesh&&Xe.batching===!0||X.isBatchedMesh&&Xe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Xe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Xe.instancing===!1||!X.isInstancedMesh&&Xe.instancing===!0||X.isSkinnedMesh&&Xe.skinning===!1||!X.isSkinnedMesh&&Xe.skinning===!0||X.isInstancedMesh&&Xe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Xe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Xe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Xe.instancingMorph===!1&&X.morphTexture!==null||Xe.envMap!==Ie||j.fog===!0&&Xe.fog!==_e||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==pe.numPlanes||Xe.numIntersection!==pe.numIntersection)||Xe.vertexAlphas!==Be||Xe.vertexTangents!==$e||Xe.morphTargets!==We||Xe.morphNormals!==lt||Xe.morphColors!==Rt||Xe.toneMapping!==Xt||Xe.morphTargetsCount!==Lt)&&(_t=!0):(_t=!0,Xe.__version=j.version);let pi=Xe.currentProgram;_t===!0&&(pi=At(j,G,X));let mo=!1,mi=!1,Ta=!1;const Nt=pi.getUniforms(),ni=Xe.uniforms;if(ue.useProgram(pi.program)&&(mo=!0,mi=!0,Ta=!0),j.id!==B&&(B=j.id,mi=!0),mo||V!==A){ue.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Nt.setValue(U,"projectionMatrix",A.projectionMatrix),Nt.setValue(U,"viewMatrix",A.matrixWorldInverse);const ii=Nt.map.cameraPosition;ii!==void 0&&ii.setValue(U,Ee.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&Nt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Nt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,mi=!0,Ta=!0)}if(Xe.needsLights&&(St.state.directionalShadowMap.length>0&&Nt.setValue(U,"directionalShadowMap",St.state.directionalShadowMap,I),St.state.spotShadowMap.length>0&&Nt.setValue(U,"spotShadowMap",St.state.spotShadowMap,I),St.state.pointShadowMap.length>0&&Nt.setValue(U,"pointShadowMap",St.state.pointShadowMap,I)),X.isSkinnedMesh){Nt.setOptional(U,X,"bindMatrix"),Nt.setOptional(U,X,"bindMatrixInverse");const zn=X.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Nt.setValue(U,"boneTexture",zn.boneTexture,I))}X.isBatchedMesh&&(Nt.setOptional(U,X,"batchingTexture"),Nt.setValue(U,"batchingTexture",X._matricesTexture,I),Nt.setOptional(U,X,"batchingIdTexture"),Nt.setValue(U,"batchingIdTexture",X._indirectTexture,I),Nt.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&Nt.setValue(U,"batchingColorTexture",X._colorsTexture,I));const Li=Z.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Ye.update(X,Z,pi),(mi||Xe.receiveShadow!==X.receiveShadow)&&(Xe.receiveShadow=X.receiveShadow,Nt.setValue(U,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ni.envMap.value=Ie,ni.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(ni.envMapIntensity.value=G.environmentIntensity),ni.dfgLUT!==void 0&&(ni.dfgLUT.value=oT()),mi&&(Nt.setValue(U,"toneMappingExposure",S.toneMappingExposure),Xe.needsLights&&an(ni,Ta),_e&&j.fog===!0&&de.refreshFogUniforms(ni,_e),de.refreshMaterialUniforms(ni,j,he,re,b.state.transmissionRenderTarget[A.id]),Cc.upload(U,Pn(Xe),ni,I)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Cc.upload(U,Pn(Xe),ni,I),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Nt.setValue(U,"center",X.center),Nt.setValue(U,"modelViewMatrix",X.modelViewMatrix),Nt.setValue(U,"normalMatrix",X.normalMatrix),Nt.setValue(U,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const zn=j.uniformsGroups;for(let ii=0,vu=zn.length;ii<vu;ii++){const Ls=zn[ii];ie.update(Ls,pi),ie.bind(Ls,pi)}}return pi}function an(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function mn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,G,Z){const j=M.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=G,M.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Z,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const Z=M.get(A);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0};const Rr=U.createFramebuffer();this.setRenderTarget=function(A,G=0,Z=0){N=A,C=G,P=Z;let j=null,X=!1,_e=!1;if(A){const Ae=M.get(A);if(Ae.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(U.FRAMEBUFFER,Ae.__webglFramebuffer),k.copy(A.viewport),z.copy(A.scissor),W=A.scissorTest,ue.viewport(k),ue.scissor(z),ue.setScissorTest(W),B=-1;return}else if(Ae.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(Ae.__hasExternalTextures)I.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Ae.__boundDepthTexture!==$e){if($e!==null&&M.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}const Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(_e=!0);const Be=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[G])?j=Be[G][Z]:j=Be[G],X=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?j=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?j=Be[Z]:j=Be,k.copy(A.viewport),z.copy(A.scissor),W=A.scissorTest}else k.copy($).multiplyScalar(he).floor(),z.copy(J).multiplyScalar(he).floor(),W=ce;if(Z!==0&&(j=Rr),ue.bindFramebuffer(U.FRAMEBUFFER,j)&&ue.drawBuffers(A,j),ue.viewport(k),ue.scissor(z),ue.setScissorTest(W),X){const Ae=M.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ae.__webglTexture,Z)}else if(_e){const Ae=G;for(let Ie=0;Ie<A.textures.length;Ie++){const Be=M.get(A.textures[Ie]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ie,Be.__webglTexture,Z,Ae)}}else if(A!==null&&Z!==0){const Ae=M.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ae.__webglTexture,Z)}B=-1},this.readRenderTargetPixels=function(A,G,Z,j,X,_e,De,Ae=0){if(!(A&&A.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De]),Ie){ue.bindFramebuffer(U.FRAMEBUFFER,Ie);try{const Be=A.textures[Ae],$e=Be.format,We=Be.type;if(!Se.textureFormatReadable($e)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(We)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-j&&Z>=0&&Z<=A.height-X&&(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae),U.readPixels(G,Z,j,X,oe.convert($e),oe.convert(We),_e))}finally{const Be=N!==null?M.get(N).__webglFramebuffer:null;ue.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,G,Z,j,X,_e,De,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De]),Ie)if(G>=0&&G<=A.width-j&&Z>=0&&Z<=A.height-X){ue.bindFramebuffer(U.FRAMEBUFFER,Ie);const Be=A.textures[Ae],$e=Be.format,We=Be.type;if(!Se.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,lt),U.bufferData(U.PIXEL_PACK_BUFFER,_e.byteLength,U.STREAM_READ),A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae),U.readPixels(G,Z,j,X,oe.convert($e),oe.convert(We),0);const Rt=N!==null?M.get(N).__webglFramebuffer:null;ue.bindFramebuffer(U.FRAMEBUFFER,Rt);const Xt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Iv(U,Xt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,lt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,_e),U.deleteBuffer(lt),U.deleteSync(Xt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,Z=0){const j=Math.pow(2,-Z),X=Math.floor(A.image.width*j),_e=Math.floor(A.image.height*j),De=G!==null?G.x:0,Ae=G!==null?G.y:0;I.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,De,Ae,X,_e),ue.unbindTexture()};const po=U.createFramebuffer(),gn=U.createFramebuffer();this.copyTextureToTexture=function(A,G,Z=null,j=null,X=0,_e=null){_e===null&&(X!==0?(vl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=X,X=0):_e=0);let De,Ae,Ie,Be,$e,We,lt,Rt,Xt;const Yt=A.isCompressedTexture?A.mipmaps[_e]:A.image;if(Z!==null)De=Z.max.x-Z.min.x,Ae=Z.max.y-Z.min.y,Ie=Z.isBox3?Z.max.z-Z.min.z:1,Be=Z.min.x,$e=Z.min.y,We=Z.isBox3?Z.min.z:0;else{const Li=Math.pow(2,-X);De=Math.floor(Yt.width*Li),Ae=Math.floor(Yt.height*Li),A.isDataArrayTexture?Ie=Yt.depth:A.isData3DTexture?Ie=Math.floor(Yt.depth*Li):Ie=1,Be=0,$e=0,We=0}j!==null?(lt=j.x,Rt=j.y,Xt=j.z):(lt=0,Rt=0,Xt=0);const Lt=oe.convert(G.format),Xe=oe.convert(G.type);let St;G.isData3DTexture?(I.setTexture3D(G,0),St=U.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(I.setTexture2DArray(G,0),St=U.TEXTURE_2D_ARRAY):(I.setTexture2D(G,0),St=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const _t=U.getParameter(U.UNPACK_ROW_LENGTH),pi=U.getParameter(U.UNPACK_IMAGE_HEIGHT),mo=U.getParameter(U.UNPACK_SKIP_PIXELS),mi=U.getParameter(U.UNPACK_SKIP_ROWS),Ta=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Yt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Yt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),U.pixelStorei(U.UNPACK_SKIP_ROWS,$e),U.pixelStorei(U.UNPACK_SKIP_IMAGES,We);const Nt=A.isDataArrayTexture||A.isData3DTexture,ni=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const Li=M.get(A),zn=M.get(G),ii=M.get(Li.__renderTarget),vu=M.get(zn.__renderTarget);ue.bindFramebuffer(U.READ_FRAMEBUFFER,ii.__webglFramebuffer),ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,vu.__webglFramebuffer);for(let Ls=0;Ls<Ie;Ls++)Nt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,M.get(A).__webglTexture,X,We+Ls),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,M.get(G).__webglTexture,_e,Xt+Ls)),U.blitFramebuffer(Be,$e,De,Ae,lt,Rt,De,Ae,U.DEPTH_BUFFER_BIT,U.NEAREST);ue.bindFramebuffer(U.READ_FRAMEBUFFER,null),ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||M.has(A)){const Li=M.get(A),zn=M.get(G);ue.bindFramebuffer(U.READ_FRAMEBUFFER,po),ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,gn);for(let ii=0;ii<Ie;ii++)Nt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Li.__webglTexture,X,We+ii):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Li.__webglTexture,X),ni?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,zn.__webglTexture,_e,Xt+ii):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,zn.__webglTexture,_e),X!==0?U.blitFramebuffer(Be,$e,De,Ae,lt,Rt,De,Ae,U.COLOR_BUFFER_BIT,U.NEAREST):ni?U.copyTexSubImage3D(St,_e,lt,Rt,Xt+ii,Be,$e,De,Ae):U.copyTexSubImage2D(St,_e,lt,Rt,Be,$e,De,Ae);ue.bindFramebuffer(U.READ_FRAMEBUFFER,null),ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ni?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(St,_e,lt,Rt,Xt,De,Ae,Ie,Lt,Xe,Yt.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(St,_e,lt,Rt,Xt,De,Ae,Ie,Lt,Yt.data):U.texSubImage3D(St,_e,lt,Rt,Xt,De,Ae,Ie,Lt,Xe,Yt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,_e,lt,Rt,De,Ae,Lt,Xe,Yt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,_e,lt,Rt,Yt.width,Yt.height,Lt,Yt.data):U.texSubImage2D(U.TEXTURE_2D,_e,lt,Rt,De,Ae,Lt,Xe,Yt);U.pixelStorei(U.UNPACK_ROW_LENGTH,_t),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pi),U.pixelStorei(U.UNPACK_SKIP_PIXELS,mo),U.pixelStorei(U.UNPACK_SKIP_ROWS,mi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ta),_e===0&&G.generateMipmaps&&U.generateMipmap(St),ue.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),ue.unbindTexture()},this.resetState=function(){C=0,P=0,N=null,ue.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const gm={type:"change"},Md={type:"start"},s_={type:"end"},lc=new Dl,_m=new cs,aT=Math.cos(70*Qi.DEG2RAD),ln=new F,ri=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qu=1e-6;class lT extends hy{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Go.ROTATE,MIDDLE:Go.DOLLY,RIGHT:Go.PAN},this.touches={ONE:Fo.ROTATE,TWO:Fo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new yr,this._lastTargetPosition=new F,this._quat=new yr().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xp,this._sphericalDelta=new Xp,this._scale=1,this._panOffset=new F,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new F,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uT.bind(this),this._onPointerDown=cT.bind(this),this._onPointerUp=hT.bind(this),this._onContextMenu=vT.bind(this),this._onMouseWheel=pT.bind(this),this._onKeyDown=mT.bind(this),this._onTouchStart=gT.bind(this),this._onTouchMove=_T.bind(this),this._onMouseDown=fT.bind(this),this._onMouseMove=dT.bind(this),this._interceptControlDown=xT.bind(this),this._interceptControlUp=yT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gm),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;ln.copy(t).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ri:n>Math.PI&&(n-=ri),i<-Math.PI?i+=ri:i>Math.PI&&(i-=ri),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ln.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(lc.origin.copy(this.object.position),lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lc.direction))<aT?this.object.lookAt(this.target):(_m.setFromNormalAndCoplanarPoint(this.object.up,this.target),lc.intersectPlane(_m,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Qu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qu||this._lastTargetPosition.distanceToSquared(this.target)>Qu?(this.dispatchEvent(gm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ri/60*this.autoRotateSpeed*e:ri/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ln.setFromMatrixColumn(t,0),ln.multiplyScalar(-e),this._panOffset.add(ln)}_panUp(e,t){this.screenSpacePanning===!0?ln.setFromMatrixColumn(t,1):(ln.setFromMatrixColumn(t,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(e),this._panOffset.add(ln)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;ln.copy(i).sub(this.target);let s=ln.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/t.clientHeight),this._rotateUp(ri*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ri*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ri*this._rotateDelta.x/t.clientHeight),this._rotateUp(ri*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function cT(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function uT(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function hT(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(s_),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function fT(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Go.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ct.DOLLY;break;case Go.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ct.ROTATE}break;case Go.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Md)}function dT(r){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function pT(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(r.preventDefault(),this.dispatchEvent(Md),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(s_))}function mT(r){this.enabled!==!1&&this._handleKeyDown(r)}function gT(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Fo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ct.TOUCH_ROTATE;break;case Fo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case Fo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ct.TOUCH_DOLLY_PAN;break;case Fo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(Md)}function _T(r){switch(this._trackPointer(r),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ct.NONE}}function vT(r){this.enabled!==!1&&r.preventDefault()}function xT(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yT(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Fr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function o_(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ca={duration:.5,overwrite:!1,delay:0},bd,Rn,kt,zi=1e8,It=1/zi,Mf=Math.PI*2,ST=Mf/4,MT=0,a_=Math.sqrt,bT=Math.cos,wT=Math.sin,wn=function(e){return typeof e=="string"},$t=function(e){return typeof e=="function"},jr=function(e){return typeof e=="number"},wd=function(e){return typeof e>"u"},Mr=function(e){return typeof e=="object"},li=function(e){return e!==!1},Td=function(){return typeof window<"u"},cc=function(e){return $t(e)||wn(e)},l_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kn=Array.isArray,TT=/random\([^)]+\)/g,ET=/,\s*/g,vm=/(?:-?\.?\d|\.)+/gi,c_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,u_=/[+-]=-?[.\d]+/,AT=/[^,'"\[\]\s]+/gi,RT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,ar,bf,Ed,Ci={},Yc={},h_,f_=function(e){return(Yc=ua(e,Ci))&&fi},Ad=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},yl=function(e,t){return!t&&console.warn(e)},d_=function(e,t){return e&&(Ci[e]=t)&&Yc&&(Yc[e]=t)||Ci},Sl=function(){return 0},CT={suppressEvents:!0,isStart:!0,kill:!1},Pc={suppressEvents:!0,kill:!1},PT={suppressEvents:!0},Rd={},vs=[],wf={},p_,Si={},th={},xm=30,Lc=[],Cd="",Pd=function(e){var t=e[0],n,i;if(Mr(t)||$t(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Lc.length;i--&&!Lc[i].targetTest(t););n=Lc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new B_(e[i],n)))||e.splice(i,1);return e},eo=function(e){return e._gsap||Pd(Vi(e))[0]._gsap},m_=function(e,t,n){return(n=e[t])&&$t(n)?e[t]():wd(n)&&e.getAttribute&&e.getAttribute(t)||n},ci=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},Yo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},LT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},qc=function(){var e=vs.length,t=vs.slice(0),n,i;for(wf={},vs.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ld=function(e){return!!(e._initted||e._startAt||e.add)},g_=function(e,t,n,i){vs.length&&!Rn&&qc(),e.render(t,n,!!(Rn&&t<0&&Ld(e))),vs.length&&!Rn&&qc()},__=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(AT).length<2?t:wn(e)?e.trim():e},v_=function(e){return e},Pi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},DT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ua=function(e,t){for(var n in t)e[n]=t[n];return e},ym=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Mr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},$c=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Qa=function(e){var t=e.parent||Vt,n=e.keyframes?DT(kn(e.keyframes)):Pi;if(li(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},IT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},x_=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},pu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ms=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},to=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},NT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Tf=function(e,t,n,i){return e._startAt&&(Rn?e._startAt.revert(Pc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},OT=function r(e){return!e||e._ts&&r(e.parent)},Sm=function(e){return e._repeat?ha(e._tTime,e=e.duration()+e._rDelay)*e:0},ha=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},jc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},mu=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},gu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),mu(e),n._dirty||to(n,e)),e},y_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=jc(e.rawTime(),t),(!t._dur||Nl(0,t.totalDuration(),n)-t._tTime>It)&&t.render(n,!0)),to(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-It}},hr=function(e,t,n,i){return t.parent&&Ms(t),t._start=zt((jr(n)?n:n||e!==Vt?Ii(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),x_(e,t,"_first","_last",e._sort?"_start":0),Ef(t)||(e._recent=t),i||y_(e,t),e._ts<0&&gu(e,e._tTime),e},S_=function(e,t){return(Ci.ScrollTrigger||Ad("scrollTrigger",t))&&Ci.ScrollTrigger.create(t,e)},M_=function(e,t,n,i,s){if(Id(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&p_!==wi.frame)return vs.push(e),e._lazy=[s,i],1},UT=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ef=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},FT=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&UT(e)&&!(!e._initted&&Ef(e))||(e._ts<0||e._dp._ts<0)&&!Ef(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Nl(0,e._tDur,t),u=ha(l,a),e._yoyo&&u&1&&(o=1-o),u!==ha(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Rn||i||e._zTime===It||!t&&e._zTime){if(!e._initted&&M_(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?It:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Tf(e,t,n,!0),e._onUpdate&&!n&&Ei(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ms(e,1),!n&&!Rn&&(Ei(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},BT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},fa=function(e,t,n,i){var s=e._repeat,o=zt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:zt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&gu(e,e._tTime=e._tDur*a),e.parent&&mu(e),n||to(e.parent,e),e},Mm=function(e){return e instanceof jn?to(e):fa(e,e._dur)},kT={_start:0,endTime:Sl,totalDuration:Sl},Ii=function r(e,t,n){var i=e.labels,s=e._recent||kT,o=e.duration()>=zi?s.endTime(!1):e._dur,a,l,c;return wn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(kn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},el=function(e,t,n){var i=jr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=li(l.vars.inherit)&&l.parent;o.immediateRender=li(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new nn(t[0],o,t[s+1])},Ps=function(e,t){return e||e===0?t(e):t},Nl=function(e,t,n){return n<e?e:n>t?t:n},Un=function(e,t){return!wn(e)||!(t=RT.exec(e))?"":t[1]},zT=function(e,t,n){return Ps(n,function(i){return Nl(e,t,i)})},Af=[].slice,b_=function(e,t){return e&&Mr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mr(e[0]))&&!e.nodeType&&e!==ar},VT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return wn(i)&&!t||b_(i,1)?(s=n).push.apply(s,Vi(i)):n.push(i)})||n},Vi=function(e,t,n){return kt&&!t&&kt.selector?kt.selector(e):wn(e)&&!n&&(bf||!da())?Af.call((t||Ed).querySelectorAll(e),0):kn(e)?VT(e,n):b_(e)?Af.call(e,0):e?[e]:[]},Rf=function(e){return e=Vi(e)[0]||yl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Vi(t,n.querySelectorAll?n:n===e?yl("Invalid scope")||Ed.createElement("div"):e)}},w_=function(e){return e.sort(function(){return .5-Math.random()})},T_=function(e){if($t(e))return e;var t=Mr(e)?e:{each:e},n=no(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return wn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,v,x,y,b,T,E,R,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,zi])[1],!S){for(E=-zi;E<(E=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],p=l?Math.min(S,_)*u-.5:i%S,v=S===zi?0:l?_*h/S-.5:i/S|0,E=0,R=zi,T=0;T<_;T++)x=T%S-p,y=v-(T/S|0),m[T]=b=c?Math.abs(c==="y"?y:x):a_(x*x+y*y),b>E&&(E=b),b<R&&(R=b);i==="random"&&w_(m),m.max=E-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Un(t.amount||t.each)||0,n=n&&_<0?O_(n):n}return _=(m[f]-m.min)/m.max||0,zt(m.b+(n?n(_):_)*m.v)+m.u}},Cf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(jr(n)?0:Un(n))}},E_=function(e,t){var n=kn(e),i,s;return!n&&Mr(e)&&(i=n=e.radius||zi,e.values?(e=Vi(e.values),(s=!jr(e[0]))&&(i*=i)):e=Cf(e.increment)),Ps(t,n?$t(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=zi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||jr(o)?u:u+Un(o)}:Cf(e))},A_=function(e,t,n,i){return Ps(kn(e)?!t:n===!0?!!(n=0):!i,function(){return kn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},HT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},GT=function(e,t){return function(n){return e(parseFloat(n))+(t||Un(n))}},WT=function(e,t,n){return C_(e,t,0,1,n)},R_=function(e,t,n){return Ps(n,function(i){return e[~~t(i)]})},XT=function r(e,t,n){var i=t-e;return kn(e)?R_(e,r(0,e.length),t):Ps(n,function(s){return(i+(s-e)%i)%i+e})},YT=function r(e,t,n){var i=t-e,s=i*2;return kn(e)?R_(e,r(0,e.length-1),t):Ps(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ml=function(e){return e.replace(TT,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(ET);return A_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},C_=function(e,t,n,i,s){var o=t-e,a=i-n;return Ps(s,function(l){return n+((l-e)/o*a||0)})},qT=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=wn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(kn(e)&&!kn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=ua(kn(e)?[]:{},e));if(!u){for(l in t)Dd.call(a,e,l,"get",t[l]);s=function(g){return Ud(g,a)||(o?e.p:e)}}}return Ps(n,s)},bm=function(e,t,n){var i=e.labels,s=zi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ei=function(e,t,n){var i=e.vars,s=i[t],o=kt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&vs.length&&qc(),a&&(kt=a),u=l?s.apply(c,l):s.call(c),kt=o,u},Ha=function(e){return Ms(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Rn),e.progress()<1&&Ei(e,"onInterrupt"),e},ko,P_=[],L_=function(e){if(e)if(e=!e.name&&e.default||e,Td()||e.headless){var t=e.name,n=$t(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Sl,render:Ud,add:Dd,kill:cE,modifier:lE,rawVars:0},o={targetTest:0,get:0,getSetter:Od,aliases:{},register:0};if(da(),e!==i){if(Si[t])return;Pi(i,Pi($c(e,s),o)),ua(i.prototype,ua(s,$c(e,o))),Si[i.prop=t]=i,e.targetTest&&(Lc.push(i),Rd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}d_(t,i),e.register&&e.register(fi,i,ui)}else P_.push(e)},Dt=255,Ga={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},nh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},D_=function(e,t,n){var i=e?jr(e)?[e>>16,e>>8&Dt,e&Dt]:0:Ga.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ga[e])i=Ga[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Dt,i&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(vm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=nh(l+1/3,s,o),i[1]=nh(l,s,o),i[2]=nh(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(c_),n&&i.length<4&&(i[3]=1),i}else i=e.match(vm)||Ga.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Dt,o=i[1]/Dt,a=i[2]/Dt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},I_=function(e){var t=[],n=[],i=-1;return e.split(xs).forEach(function(s){var o=s.match(Bo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},wm=function(e,t,n){var i="",s=(e+i).match(xs),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=D_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=I_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(xs,"1").split(Bo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(xs),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},xs=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ga)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),$T=/hsl[a]?\(/,N_=function(e){var t=e.join(" "),n;if(xs.lastIndex=0,xs.test(t))return n=$T.test(t),e[1]=wm(e[1],n),e[0]=wm(e[0],n,I_(e[1])),!0},bl,wi=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,v=m===!0,x,y,b,T;if((p>e||p<0)&&(n+=p-t),i+=p,b=i-n,x=b-o,(x>0||v)&&(T=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](b,f,T,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){h_&&(!bf&&Td()&&(ar=bf=window,Ed=ar.document||{},Ci.gsap=fi,(ar.gsapVersions||(ar.gsapVersions=[])).push(fi.version),f_(Yc||ar.GreenSockGlobals||!ar.gsap&&ar||{}),P_.forEach(L_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},bl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),bl=0,c=Sl},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,v){var x=p?function(y,b,T,E){m(y,b,T,E),h.remove(x)}:m;return h.remove(m),a[v?"unshift":"push"](x),da(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),da=function(){return!bl&&wi.wake()},pt={},jT=/^[\d.\-M][\d.\-,\s]/,KT=/["']/g,ZT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(KT,"").trim():+c,i=l.substr(a+1).trim();return t},JT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},QT=function(e){var t=(e+"").split("("),n=pt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ZT(t[1])]:JT(e).split(",").map(__)):pt._CE&&jT.test(e)?pt._CE("",e):n},O_=function(e){return function(t){return 1-e(1-t)}},U_=function r(e,t){for(var n=e._first,i;n;)n instanceof jn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},no=function(e,t){return e&&($t(e)?e:pt[e]||QT(e))||t},fo=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return ci(e,function(a){pt[a]=Ci[a]=s,pt[o=a.toLowerCase()]=n;for(var l in s)pt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pt[a+"."+l]=s[l]}),s},F_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ih=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Mf*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*wT((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:F_(a);return s=Mf/s,l.config=function(c,u){return r(e,c,u)},l},rh=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:F_(n);return i.config=function(s){return r(e,s)},i};ci("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;fo(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;fo("Elastic",ih("in"),ih("out"),ih());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};fo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);fo("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});fo("Circ",function(r){return-(a_(1-r*r)-1)});fo("Sine",function(r){return r===1?1:-bT(r*ST)+1});fo("Back",rh("in"),rh("out"),rh());pt.SteppedEase=pt.steps=Ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-It;return function(a){return((i*Nl(0,o,a)|0)+s)*n}}};ca.ease=pt["quad.out"];ci("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Cd+=r+","+r+"Params,"});var B_=function(e,t){this.id=MT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:m_,this.set=t?t.getSetter:Od},wl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,fa(this,+t.duration,1,1),this.data=t.data,kt&&(this._ctx=kt,kt.data.push(this)),bl||wi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,fa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(da(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(gu(this,n),!s._dp||s.parent||y_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&hr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===It||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),g_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ha(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?jc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-It?0:this._rts,this.totalTime(Nl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),mu(this),NT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(da(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==It&&(this._tTime-=It)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=zt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&hr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(li(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=PT);var i=Rn;return Rn=n,Ld(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Rn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Mm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Mm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ii(this,n),li(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,li(i)),this._dur||(this._zTime=-It),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-It:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-It)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=$t(n)?n:v_,l=function(){var u=i.then;i.then=null,s&&s(),$t(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Ha(this)},r})();Pi(wl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});var jn=(function(r){o_(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=li(n.sortChildren),Vt&&hr(n.parent||Vt,Fr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&S_(Fr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return el(0,arguments,this),this},t.from=function(i,s,o){return el(1,arguments,this),this},t.fromTo=function(i,s,o,a){return el(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Qa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new nn(i,s,Ii(this,o),1),this},t.call=function(i,s,o){return hr(this,nn.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new nn(i,o,Ii(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Qa(o).immediateRender=li(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Qa(a).immediateRender=li(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:zt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,v,x,y,b,T,E;if(this!==Vt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,y=this._start,x=this._ts,p=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=zt(u%m),u===l?(_=this._repeat,f=c):(b=zt(u/m),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=ha(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),T&&_&1&&(f=c-f,E=1),_!==b&&!this._lock){var R=T&&b&1,S=R===(T&&_&1);if(_<b&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(E?0:zt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ei(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;U_(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=BT(this,zt(a),zt(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!b&&(Ei(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){v=0,g&&(u+=this._zTime=-It);break}}d=g}else{d=this._last;for(var w=i<0?i:f;d;){if(g=d._prev,(d._act||w<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(w-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(w-d._start)*d._ts,s,o||Rn&&Ld(d)),f!==this._time||!this._ts&&!p){v=0,g&&(u+=this._zTime=w?-It:It);break}}d=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-It)._zTime=f>=a?1:-1,this._ts))return this._start=y,mu(this),this.render(i,s,o);this._onUpdate&&!s&&Ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ms(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Ei(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(jr(s)||(s=Ii(this,s,i)),!(i instanceof wl)){if(kn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(wn(i))return this.addLabel(i,s);if($t(i))i=nn.delayedCall(0,i);else return this}return this!==i?hr(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-zi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof nn?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return wn(i)?this.removeLabel(i):$t(i)?this.killTweensOf(i):(i.parent===this&&pu(this,i),i===this._recent&&(this._recent=this._last),to(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(wi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Ii(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=nn.delayedCall(0,s||Sl,o);return a.data="isPause",this._hasPause=1,hr(this,a,Ii(this,i))},t.removePause=function(i){var s=this._first;for(i=Ii(this,i);s;)s._start===i&&s.data==="isPause"&&Ms(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)fs!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Vi(i),l=this._first,c=jr(s),u;l;)l instanceof nn?LT(l._targets,a)&&(c?(!fs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Ii(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=nn.to(o,Pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||It,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&fa(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Pi({startAt:{time:Ii(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),bm(this,Ii(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),bm(this,Ii(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+It)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=zt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return to(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),to(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=zi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,hr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=zt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;fa(o,o===Vt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Vt._ts&&(g_(Vt,jc(i,Vt)),p_=wi.frame),wi.frame>=xm){xm+=Ri.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&Ri.autoSleep&&wi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||wi.sleep()}}},e})(wl);Pi(jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var eE=function(e,t,n,i,s,o,a){var l=new ui(this._pt,e,t,0,1,W_,null,s),c=0,u=0,h,f,d,g,_,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ml(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),f=n.match(eh)||[];h=eh.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Yo(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=eh.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(u_.test(i)||p)&&(l.e=0),this._pt=l,l},Dd=function(e,t,n,i,s,o,a,l,c,u){$t(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:$t(h)?c?e[t.indexOf("set")||!$t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=$t(h)?c?sE:H_:Nd,g;if(wn(i)&&(~i.indexOf("random(")&&(i=Ml(i)),i.charAt(1)==="="&&(g=Yo(f,i)+(Un(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Pf)return!isNaN(f*i)&&i!==""?(g=new ui(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?aE:G_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Ad(t,i),eE.call(this,e,t,f,i,d,l||Ri.stringFilter,c))},tE=function(e,t,n,i,s){if($t(e)&&(e=tl(e,s,t,n,i)),!Mr(e)||e.style&&e.nodeType||kn(e)||l_(e))return wn(e)?tl(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=tl(e[a],s,t,n,i);return o},k_=function(e,t,n,i,s,o){var a,l,c,u;if(Si[e]&&(a=new Si[e]).init(s,a.rawVars?t[e]:tE(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new ui(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ko))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},fs,Pf,Id=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!bd,y=e.timeline,b,T,E,R,S,w,C,P,N,B,V,k,z;if(y&&(!f||!s)&&(s="none"),e._ease=no(s,ca.ease),e._yEase=h?O_(no(h===!0?s:h,ca.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(P=m[0]?eo(m[0]).harness:0,k=P&&i[P.prop],b=$c(i,Rd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Pc:CT),_._lazy=0),o){if(Ms(e._startAt=nn.set(m,Pi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&li(l),startAt:null,delay:0,onUpdate:c&&function(){return Ei(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn||!a&&!d)&&e._startAt.revert(Pc),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),E=Pi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&li(l),immediateRender:a,stagger:0,parent:p},b),k&&(E[P.prop]=k),Ms(e._startAt=nn.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn?e._startAt.revert(Pc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,It,It);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&li(l)||l&&!g,T=0;T<m.length;T++){if(S=m[T],C=S._gsap||Pd(m)[T]._gsap,e._ptLookup[T]=B={},wf[C.id]&&vs.length&&qc(),V=v===m?T:v.indexOf(S),P&&(N=new P).init(S,k||b,e,V,v)!==!1&&(e._pt=R=new ui(e._pt,S,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(W){B[W]=R}),N.priority&&(w=1)),!P||k)for(E in b)Si[E]&&(N=k_(E,b,e,V,S,v))?N.priority&&(w=1):B[E]=R=Dd.call(e,S,E,"get",b[E],V,v,0,i.stringFilter);e._op&&e._op[T]&&e.kill(S,e._op[T]),x&&e._pt&&(fs=e,Vt.killTweensOf(S,B,e.globalTime(t)),z=!e.parent,fs=0),e._pt&&l&&(wf[C.id]=1)}w&&X_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,f&&t<=0&&y.render(zi,!0,!0)},nE=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Pf=1,e.vars[t]="+=0",Id(e,a),Pf=0,l?yl(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Kt(n)+Un(h.e)),h.b&&(h.b=u.s+Un(h.b))},iE=function(e,t){var n=e[0]?eo(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=ua({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},rE=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(kn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},tl=function(e,t,n,i,s){return $t(e)?e.call(t,n,i,s):wn(e)&&~e.indexOf("random(")?Ml(e):e},z_=Cd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",V_={};ci(z_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return V_[r]=1});var nn=(function(r){o_(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Qa(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=i.parent||Vt,x=(kn(n)||l_(n)?jr(n[0]):"length"in i)?[n]:Vi(n),y,b,T,E,R,S,w,C;if(a._targets=x.length?Pd(x):yl("GSAP target "+n+" not found. https://gsap.com",!Ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||cc(c)||cc(u)){if(i=a.vars,y=a.timeline=new jn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=Fr(a),y._start=0,f||cc(c)||cc(u)){if(E=x.length,w=f&&T_(f),Mr(f))for(R in f)~z_.indexOf(R)&&(C||(C={}),C[R]=f[R]);for(b=0;b<E;b++)T=$c(i,V_),T.stagger=0,p&&(T.yoyoEase=p),C&&ua(T,C),S=x[b],T.duration=+tl(c,Fr(a),b,S,x),T.delay=(+tl(u,Fr(a),b,S,x)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),y.to(S,T,w?w(b,S,x):0),y._ease=pt.none;y.duration()?c=u=0:a.timeline=0}else if(g){Qa(Pi(y.vars.defaults,{ease:"none"})),y._ease=no(g.ease||i.ease||"none");var P=0,N,B,V;if(kn(g))g.forEach(function(k){return y.to(x,k,">")}),y.duration();else{T={};for(R in g)R==="ease"||R==="easeEach"||rE(R,g[R],T,g.easeEach);for(R in T)for(N=T[R].sort(function(k,z){return k.t-z.t}),P=0,b=0;b<N.length;b++)B=N[b],V={ease:B.e,duration:(B.t-(b?N[b-1].t:0))/100*c},V[R]=B.v,y.to(x,V,P),P+=V.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!bd&&(fs=Fr(a),Vt.killTweensOf(x),fs=0),hr(v,Fr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===zt(v._time)&&li(h)&&OT(Fr(a))&&v.data!=="nested")&&(a._tTime=-It,a.render(Math.max(0,-u)||0)),m&&S_(Fr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-It&&!u?l:i<It?0:i,f,d,g,_,m,p,v,x,y;if(!c)FT(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=zt(h%_),h===l?(g=this._repeat,f=c):(m=zt(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(y=this._yEase,f=c-f),m=ha(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(x&&this._yEase&&U_(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(zt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(M_(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(f/c),this._from&&(this.ratio=v=1-v),!a&&h&&!s&&!m&&(Ei(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Tf(this,i,s,o),Ei(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Ei(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Tf(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ms(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Ei(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){bl||wi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Id(this,c),u=this._ease(c/this._dur),nE(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(gu(this,0),this.parent||x_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ha(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,fs&&fs.vars.overwrite!==!0)._first||Ha(this),this.parent&&o!==this.timeline.totalDuration()&&fa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Vi(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&IT(a,l))return s==="all"&&(this._pt=0),Ha(this);for(h=this._op=this._op||[],s!=="all"&&(wn(s)&&(_={},ci(s,function(v){return _[v]=1}),s=_),s=iE(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&pu(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Ha(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return el(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return el(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Vt.killTweensOf(i,s,o)},e})(wl);Pi(nn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ci("staggerTo,staggerFrom,staggerFromTo",function(r){nn[r]=function(){var e=new jn,t=Af.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Nd=function(e,t,n){return e[t]=n},H_=function(e,t,n){return e[t](n)},sE=function(e,t,n,i){return e[t](i.fp,n)},oE=function(e,t,n){return e.setAttribute(t,n)},Od=function(e,t){return $t(e[t])?H_:wd(e[t])&&e.setAttribute?oE:Nd},G_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},aE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},W_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ud=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},lE=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},cE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?pu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},uE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},X_=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},ui=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||G_,this.d=l||this,this.set=c||Nd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=uE,this.m=n,this.mt=s,this.tween=i},r})();ci(Cd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Rd[r]=1});Ci.TweenMax=Ci.TweenLite=nn;Ci.TimelineLite=Ci.TimelineMax=jn;Vt=new jn({sortChildren:!1,defaults:ca,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ri.stringFilter=N_;var io=[],Dc={},hE=[],Tm=0,fE=0,sh=function(e){return(Dc[e]||hE).map(function(t){return t()})},Lf=function(){var e=Date.now(),t=[];e-Tm>2&&(sh("matchMediaInit"),io.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ar.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),sh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Tm=e,sh("matchMedia"))},Y_=(function(){function r(t,n){this.selector=n&&Rf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=fE++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){$t(n)&&(s=i,i=n,n=$t);var o=this,a=function(){var c=kt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Rf(s)),kt=o,h=i.apply(o,arguments),$t(h)&&o._r.push(h),kt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===$t?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=kt;kt=null,n(this),kt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof nn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof jn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof nn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=io.length;o--;)io[o].id===this.id&&io.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),dE=(function(){function r(t){this.contexts=[],this.scope=t,kt&&kt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Mr(n)||(n={matches:n});var o=new Y_(0,s||this.scope),a=o.conditions={},l,c,u;kt&&!o.selector&&(o.selector=kt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ar.matchMedia(n[c]),l&&(io.indexOf(o)<0&&io.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Lf):l.addEventListener("change",Lf)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Kc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return L_(i)})},timeline:function(e){return new jn(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){wn(e)&&(e=Vi(e)[0]);var s=eo(e||{}).get,o=n?v_:__;return n==="native"&&(n=""),e&&(t?o((Si[t]&&Si[t].get||s)(e,t,n,i)):function(a,l,c){return o((Si[a]&&Si[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Vi(e),e.length>1){var i=e.map(function(u){return fi.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Si[t],a=eo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;ko._pt=0,h.init(e,n?u+n:u,ko,0,[e]),h.render(1,h),ko._pt&&Ud(1,ko)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=fi.to(e,Pi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=no(e.ease,ca.ease)),ym(ca,e||{})},config:function(e){return ym(Ri,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Si[a]&&!Ci[a]&&yl(t+" effect requires "+a+" plugin.")}),th[t]=function(a,l,c){return n(Vi(a),Pi(l||{},s),c)},o&&(jn.prototype[t]=function(a,l,c){return this.add(th[t](a,Mr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){pt[e]=no(t)},parseEase:function(e,t){return arguments.length?no(e,t):pt},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new jn(e),i,s;for(n.smoothChildTiming=li(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,i=Vt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof nn&&i.vars.onComplete===i._targets[0]))&&hr(n,i,i._start-i._delay),i=s;return hr(Vt,n,0),n},context:function(e,t){return e?new Y_(e,t):kt},matchMedia:function(e){return new dE(e)},matchMediaRefresh:function(){return io.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Lf()},addEventListener:function(e,t){var n=Dc[e]||(Dc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Dc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:XT,wrapYoyo:YT,distribute:T_,random:A_,snap:E_,normalize:WT,getUnit:Un,clamp:zT,splitColor:D_,toArray:Vi,selector:Rf,mapRange:C_,pipe:HT,unitize:GT,interpolate:qT,shuffle:w_},install:f_,effects:th,ticker:wi,updateRoot:jn.updateRoot,plugins:Si,globalTimeline:Vt,core:{PropTween:ui,globals:d_,Tween:nn,Timeline:jn,Animation:wl,getCache:eo,_removeLinkedListItem:pu,reverting:function(){return Rn},context:function(e){return e&&kt&&(kt.data.push(e),e._ctx=kt),kt},suppressOverwrites:function(e){return bd=e}}};ci("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Kc[r]=nn[r]});wi.add(jn.updateRoot);ko=Kc.to({},{duration:0});var pE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},mE=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=pE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},oh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(wn(s)&&(l={},ci(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}mE(a,s)}}}},fi=Kc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Rn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},oh("roundProps",Cf),oh("modifiers"),oh("snap",E_))||Kc;nn.version=jn.version=fi.version="3.14.2";h_=1;Td()&&da();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;var Em,ds,qo,Fd,Ks,Am,Bd,gE=function(){return typeof window<"u"},Kr={},Gs=180/Math.PI,$o=Math.PI/180,Do=Math.atan2,Rm=1e8,kd=/([A-Z])/g,_E=/(left|right|width|margin|padding|x)/i,vE=/[\s,\(]\S/,pr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Df=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},SE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ME=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},q_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},$_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},bE=function(e,t,n){return e.style[t]=n},wE=function(e,t,n){return e.style.setProperty(t,n)},TE=function(e,t,n){return e._gsap[t]=n},EE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},AE=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},RE=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Gt="transform",hi=Gt+"Origin",CE=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Kr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=pr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Br(i,a)}):this.tfm[e]=o.x?o[e]:Br(i,e),e===hi&&(this.tfm.zOrigin=o.zOrigin);else return pr.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Gt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hi,t,"")),e=Gt}(s||t)&&this.props.push(e,t,s[e])},j_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},PE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(kd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Bd(),(!s||!s.isStart)&&!n[Gt]&&(j_(n),i.zOrigin&&n[hi]&&(n[hi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},K_=function(e,t){var n={target:e,props:[],revert:PE,save:CE};return e._gsap||fi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Z_,If=function(e,t){var n=ds.createElementNS?ds.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ds.createElement(e);return n&&n.style?n:ds.createElement(e)},Ai=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(kd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,pa(t)||t,1)||""},Cm="O,Moz,ms,Ms,Webkit".split(","),pa=function(e,t,n){var i=t||Ks,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Cm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Cm[o]:"")+e},Nf=function(){gE()&&window.document&&(Em=window,ds=Em.document,qo=ds.documentElement,Ks=If("div")||{style:{}},If("div"),Gt=pa(Gt),hi=Gt+"Origin",Ks.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Z_=!!pa("perspective"),Bd=fi.core.reverting,Fd=1)},Pm=function(e){var t=e.ownerSVGElement,n=If("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),qo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),qo.removeChild(n),s},Lm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},J_=function(e){var t,n;try{t=e.getBBox()}catch{t=Pm(e),n=1}return t&&(t.width||t.height)||n||(t=Pm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Lm(e,["x","cx","x1"])||0,y:+Lm(e,["y","cy","y1"])||0,width:0,height:0}:t},Q_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&J_(e))},bs=function(e,t){if(t){var n=e.style,i;t in Kr&&t!==hi&&(t=Gt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(kd,"-$1").toLowerCase())):n.removeAttribute(t)}},ps=function(e,t,n,i,s,o){var a=new ui(e._pt,t,n,0,1,o?$_:q_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Dm={deg:1,rad:1,turn:1},LE={grid:1,flex:1},ws=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ks.style,l=_E.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Dm[i]||Dm[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&Q_(e),(d||o==="%")&&(Kr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Kt(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ds||!_.appendChild)&&(_=ds.body),m=_._gsap,m&&d&&m.width&&l&&m.time===wi.time&&!m.uncache)return Kt(s/m.width*h);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+i,g=e[u],v?e.style[t]=v:bs(e,t)}else(d||o==="%")&&!LE[Ai(_,"display")]&&(a.position=Ai(e,"position")),_===e&&(a.position="static"),_.appendChild(Ks),g=Ks[u],_.removeChild(Ks),a.position="absolute";return l&&d&&(m=eo(_),m.time=wi.time,m.width=_[u]),Kt(f?g*s/h:g&&s?h/g*s:0)},Br=function(e,t,n,i){var s;return Fd||Nf(),t in pr&&t!=="transform"&&(t=pr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Kr[t]&&t!=="transform"?(s=El(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Jc(Ai(e,hi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Zc[t]&&Zc[t](e,t,n)||Ai(e,t)||m_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ws(e,t,s,n)+n:s},DE=function(e,t,n,i){if(!n||n==="none"){var s=pa(t,e,1),o=s&&Ai(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ai(e,"borderTopColor"))}var a=new ui(this._pt,e.style,t,0,1,W_),l=0,c=0,u,h,f,d,g,_,m,p,v,x,y,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ai(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ai(e,t)||i,_?e.style[t]=_:bs(e,t)),u=[n,i],N_(u),n=u[0],i=u[1],f=n.match(Bo)||[],b=i.match(Bo)||[],b.length){for(;h=Bo.exec(i);)m=h[0],v=i.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=Yo(d,m)+y),p=parseFloat(m),x=m.substr((p+"").length),l=Bo.lastIndex-x.length,x||(x=x||Ri.units[t]||y,l===i.length&&(i+=x,a.e+=x)),y!==x&&(d=ws(e,t,_,x)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?$_:q_;return u_.test(i)&&(a.e=0),this._pt=a,a},Im={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},IE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Im[n]||n,t[1]=Im[i]||i,t.join(" ")},NE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Kr[a]&&(l=1,a=a==="transformOrigin"?hi:Gt),bs(n,a);l&&(bs(n,Gt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",El(n,1),o.uncache=1,j_(i)))}},Zc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new ui(e._pt,t,n,0,0,NE);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Tl=[1,0,0,1,0,0],e0={},t0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Nm=function(e){var t=Ai(e,Gt);return t0(t)?Tl:t.substr(7).match(c_).map(Kt)},zd=function(e,t){var n=e._gsap||eo(e),i=e.style,s=Nm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Tl:s):(s===Tl&&!e.offsetParent&&e!==qo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,qo.appendChild(e)),s=Nm(e),l?i.display=l:bs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):qo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Of=function(e,t,n,i,s,o){var a=e._gsap,l=s||zd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,b=parseFloat(x[1])||0,T,E,R,S;n?l!==Tl&&(E=d*m-g*_)&&(R=y*(m/E)+b*(-_/E)+(_*v-m*p)/E,S=y*(-g/E)+b*(d/E)-(d*v-g*p)/E,y=R,b=S):(T=J_(e),y=T.x+(~x[0].indexOf("%")?y/100*T.width:y),b=T.y+(~(x[1]||x[0]).indexOf("%")?b/100*T.height:b)),i||i!==!1&&a.smooth?(p=y-c,v=b-u,a.xOffset=h+(p*d+v*_)-p,a.yOffset=f+(p*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[hi]="0px 0px",o&&(ps(o,a,"xOrigin",c,y),ps(o,a,"yOrigin",u,b),ps(o,a,"xOffset",h,a.xOffset),ps(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},El=function(e,t){var n=e._gsap||new B_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ai(e,hi)||"0",u,h,f,d,g,_,m,p,v,x,y,b,T,E,R,S,w,C,P,N,B,V,k,z,W,ee,D,Q,re,he,ye,ae;return u=h=f=_=m=p=v=x=y=0,d=g=1,n.svg=!!(e.getCTM&&Q_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Gt]!=="none"?l[Gt]:"")),i.scale=i.rotate=i.translate="none"),E=zd(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),Of(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,E)),b=n.xOrigin||0,T=n.yOrigin||0,E!==Tl&&(C=E[0],P=E[1],N=E[2],B=E[3],u=V=E[4],h=k=E[5],E.length===6?(d=Math.sqrt(C*C+P*P),g=Math.sqrt(B*B+N*N),_=C||P?Do(P,C)*Gs:0,v=N||B?Do(N,B)*Gs+_:0,v&&(g*=Math.abs(Math.cos(v*$o))),n.svg&&(u-=b-(b*C+T*N),h-=T-(b*P+T*B))):(ae=E[6],he=E[7],D=E[8],Q=E[9],re=E[10],ye=E[11],u=E[12],h=E[13],f=E[14],R=Do(ae,re),m=R*Gs,R&&(S=Math.cos(-R),w=Math.sin(-R),z=V*S+D*w,W=k*S+Q*w,ee=ae*S+re*w,D=V*-w+D*S,Q=k*-w+Q*S,re=ae*-w+re*S,ye=he*-w+ye*S,V=z,k=W,ae=ee),R=Do(-N,re),p=R*Gs,R&&(S=Math.cos(-R),w=Math.sin(-R),z=C*S-D*w,W=P*S-Q*w,ee=N*S-re*w,ye=B*w+ye*S,C=z,P=W,N=ee),R=Do(P,C),_=R*Gs,R&&(S=Math.cos(R),w=Math.sin(R),z=C*S+P*w,W=V*S+k*w,P=P*S-C*w,k=k*S-V*w,C=z,V=W),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Kt(Math.sqrt(C*C+P*P+N*N)),g=Kt(Math.sqrt(k*k+ae*ae)),R=Do(V,k),v=Math.abs(R)>2e-4?R*Gs:0,y=ye?1/(ye<0?-ye:ye):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!t0(Ai(e,Gt)),z&&e.setAttribute("transform",z))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Kt(d),n.scaleY=Kt(g),n.rotation=Kt(_)+a,n.rotationX=Kt(m)+a,n.rotationY=Kt(p)+a,n.skewX=v+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[hi]=Jc(c)),n.xOffset=n.yOffset=0,n.force3D=Ri.force3D,n.renderTransform=n.svg?UE:Z_?n0:OE,n.uncache=0,n},Jc=function(e){return(e=e.split(" "))[0]+" "+e[1]},ah=function(e,t,n){var i=Un(t);return Kt(parseFloat(t)+parseFloat(ws(e,"x",n+"px",i)))+i},OE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,n0(e,t)},Bs="0deg",Oa="0px",ks=") ",n0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,x=n.zOrigin,y="",b=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==Bs||u!==Bs)){var T=parseFloat(u)*$o,E=Math.sin(T),R=Math.cos(T),S;T=parseFloat(h)*$o,S=Math.cos(T),o=ah(v,o,E*S*-x),a=ah(v,a,-Math.sin(T)*-x),l=ah(v,l,R*S*-x+x)}m!==Oa&&(y+="perspective("+m+ks),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(b||o!==Oa||a!==Oa||l!==Oa)&&(y+=l!==Oa||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ks),c!==Bs&&(y+="rotate("+c+ks),u!==Bs&&(y+="rotateY("+u+ks),h!==Bs&&(y+="rotateX("+h+ks),(f!==Bs||d!==Bs)&&(y+="skew("+f+", "+d+ks),(g!==1||_!==1)&&(y+="scale("+g+", "+_+ks),v.style[Gt]=y||"translate(0, 0)"},UE=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,x=parseFloat(o),y=parseFloat(a),b,T,E,R,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=$o,c*=$o,b=Math.cos(l)*h,T=Math.sin(l)*h,E=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=$o,S=Math.tan(c-u),S=Math.sqrt(1+S*S),E*=S,R*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),b*=S,T*=S)),b=Kt(b),T=Kt(T),E=Kt(E),R=Kt(R)):(b=h,R=f,T=E=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=ws(d,"x",o,"px"),y=ws(d,"y",a,"px")),(g||_||m||p)&&(x=Kt(x+g-(g*b+_*E)+m),y=Kt(y+_-(g*T+_*R)+p)),(i||s)&&(S=d.getBBox(),x=Kt(x+i/100*S.width),y=Kt(y+s/100*S.height)),S="matrix("+b+","+T+","+E+","+R+","+x+","+y+")",d.setAttribute("transform",S),v&&(d.style[Gt]=S)},FE=function(e,t,n,i,s){var o=360,a=wn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Gs:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Rm)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Rm)%o-~~(c/o)*o)),e._pt=f=new ui(e._pt,t,n,i,c,xE),f.e=u,f.u="deg",e._props.push(n),f},Om=function(e,t){for(var n in t)e[n]=t[n];return e},BE=function(e,t,n){var i=Om({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Gt]=t,a=El(n,1),bs(n,Gt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Gt],o[Gt]=t,a=El(n,1),o[Gt]=c);for(l in Kr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Un(c),g=Un(u),h=d!==g?ws(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new ui(e._pt,a,l,h,f-h,Df),e._pt.u=g||0,e._props.push(l));Om(a,i)};ci("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Zc[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Br(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var i0={name:"css",register:Nf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,v,x,y,b,T,E,R,S;Fd||Nf(),this.styles=this.styles||K_(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Si[_]&&k_(_,t,n,i,e,s)))){if(d=typeof u,g=Zc[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ml(u)),g)g(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",xs.lastIndex=0,xs.test(c)||(m=Un(c),p=Un(u),p?m!==p&&(c=ws(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],wn(c)&&~c.indexOf("random(")&&(c=Ml(c)),Un(c+"")||c==="auto"||(c+=Ri.units[_]||Un(Br(e,_))||""),(c+"").charAt(1)==="="&&(c=Br(e,_))):c=Br(e,_),f=parseFloat(c),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),_ in pr&&(_==="autoAlpha"&&(f===1&&Br(e,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,a.visibility),ps(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=pr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Kr,x){if(this.styles.save(_),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Ai(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var w=e.style.perspective;e.style.perspective=u,u=Ai(e,"perspective"),w?e.style.perspective=w:bs(e,"perspective")}h=parseFloat(u)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||El(e,t.parseTransform),T=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new ui(this._pt,a,Gt,0,1,b.renderTransform,b,0,-1),y.dep=1),_==="scale")this._pt=new ui(this._pt,b,"scaleY",b.scaleY,(v?Yo(b.scaleY,v+h):h)-b.scaleY||0,Df),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(hi,0,a[hi]),u=IE(u),b.svg?Of(e,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&ps(this,b,"zOrigin",b.zOrigin,p),ps(this,a,_,Jc(c),Jc(u)));continue}else if(_==="svgOrigin"){Of(e,u,1,T,0,this);continue}else if(_ in e0){FE(this,b,_,f,v?Yo(f,v+u):u);continue}else if(_==="smoothOrigin"){ps(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){BE(this,u,e);continue}}else _ in a||(_=pa(_)||_);if(x||(h||h===0)&&(f||f===0)&&!vE.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=Un(u)||(_ in Ri.units?Ri.units[_]:m),m!==p&&(f=ws(e,_,c,p)),this._pt=new ui(this._pt,x?b:a,_,f,(v?Yo(f,v+h):h)-f,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?ME:Df),this._pt.u=p||0,x&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=SE):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=yE);else if(_ in a)DE.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,i,s);else if(_!=="parseTransform"){Ad(_,u);continue}x||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),o.push(_)}}E&&X_(this)},render:function(e,t){if(t.tween._time||!Bd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Br,aliases:pr,getSetter:function(e,t,n){var i=pr[t];return i&&i.indexOf(",")<0&&(t=i),t in Kr&&t!==hi&&(e._gsap.x||Br(e,"x"))?n&&Am===n?t==="scale"?EE:TE:(Am=n||{})&&(t==="scale"?AE:RE):e.style&&!wd(e.style[t])?bE:~t.indexOf("-")?wE:Od(e,t)},core:{_removeProperty:bs,_getMatrix:zd}};fi.utils.checkPrefix=pa;fi.core.getStyleSaver=K_;(function(r,e,t,n){var i=ci(r+","+e+","+t,function(s){Kr[s]=1});ci(e,function(s){Ri.units[s]="deg",e0[s]=1}),pr[i[13]]=r+","+e,ci(n,function(s){var o=s.split(":");pr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ci("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ri.units[r]="px"});fi.registerPlugin(i0);var Al=fi.registerPlugin(i0)||fi;Al.core.Tween;var kE="1.3.17";function r0(r,e,t){return Math.max(r,Math.min(e,t))}function zE(r,e,t){return(1-t)*r+t*e}function VE(r,e,t,n){return zE(r,e,1-Math.exp(-t*n))}function HE(r,e){return(r%e+e)%e}var GE=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=r0(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=VE(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function WE(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var XE=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=WE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},s0=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},Um=100/6,ss={passive:!1},YE=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ss),this.element.addEventListener("touchstart",this.onTouchStart,ss),this.element.addEventListener("touchmove",this.onTouchMove,ss),this.element.addEventListener("touchend",this.onTouchEnd,ss)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new s0;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,ss),this.element.removeEventListener("touchstart",this.onTouchStart,ss),this.element.removeEventListener("touchmove",this.onTouchMove,ss),this.element.removeEventListener("touchend",this.onTouchEnd,ss)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Um:n===2?this.window.width:1,s=n===1?Um:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Fm=r=>Math.min(1,1.001-Math.pow(2,-10*r)),qE=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new GE;emitter=new s0;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:v=!0,autoRaf:x=!1,anchors:y=!1,autoToggle:b=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:R=E,stopInertiaOnNavigate:S=!1}={}){window.lenisVersion=kE,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Fm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:v,autoRaf:x,anchors:y,autoToggle:b,allowNestedScroll:T,naiveDimensions:R,stopInertiaOnNavigate:S},this.dimensions=new XE(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new YE(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,_=i&&n.type==="touchend";_&&(f=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?(f=document.querySelector(r),f||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(f=r),f){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const f=r-this.animatedScroll;f>this.limit/2?r=r-this.limit:f<-this.limit/2&&(r=r+this.limit)}}else r=r0(0,r,this.limit);if(r===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=r),typeof o=="number"&&typeof a!="function"?a=Fm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,r,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),i&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,h,f;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const b=window.getComputedStyle(r);i.computedStyle=b;const T=b.overflowX,E=b.overflowY;if(s=["auto","overlay","scroll"].includes(T),o=["auto","overlay","scroll"].includes(E),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,f=r.clientHeight,a=c>h,l=u>f,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=f}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let g;if(d==="horizontal")g="x";else if(d==="vertical")g="y";else{const b=e!==0,T=t!==0;b&&s&&a&&(g="x"),T&&o&&l&&(g="y")}if(!g)return!1;let _,m,p,v,x;if(g==="x")_=r.scrollLeft,m=c-h,p=e,v=s,x=a;else if(g==="y")_=r.scrollTop,m=u-f,p=t,v=o,x=l;else return!1;return(p>0?_<m:_>0)&&v&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?HE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Bm(r,e){if(e===Mv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===gf||e===Fg){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===gf)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class wa extends Sa{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new JE(t)}),this.register(function(t){return new QE(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new n1(t)}),this.register(function(t){return new i1(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new ZE(t)}),this.register(function(t){return new s1(t)}),this.register(function(t){return new e1(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new jE(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new f1(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ja.extractUrlBase(e);o=Ja.resolveURL(c,this.path)}else o=Ja.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Qg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===o0){try{o[ht.KHR_BINARY_GLTF]=new d1(e)}catch(h){i&&i(h);return}s=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new E1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ht.KHR_MATERIALS_UNLIT:o[h]=new KE;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[h]=new p1(s,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[h]=new m1;break;case ht.KHR_MESH_QUANTIZATION:o[h]=new g1;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function $E(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class jE{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Qn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Bn(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Jx(u),c.distance=h;break;case"spot":c=new Kx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),sr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class KE{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return js}extendParams(e,t,n){const i=[];e.color=new Ke(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,En))}return Promise.all(i)}}class ZE{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class JE{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(a,a)}return Promise.all(s)}}class QE{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class e1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class t1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Qn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,En)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class n1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class i1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(a[0],a[1],a[2],Qn),Promise.all(s)}}class r1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class s1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(a[0],a[1],a[2],Qn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,En)),Promise.all(s)}}class o1{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class a1{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Er}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class l1{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class c1{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class u1{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class h1{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class f1{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ni.TRIANGLES&&c.mode!==Ni.TRIANGLE_STRIP&&c.mode!==Ni.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new it,m=new F,p=new yr,v=new F(1,1,1),x=new wx(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,_.compose(m,p,v));for(const y in l)if(y==="_COLOR_0"){const b=l[y];x.instanceColor=new vf(b.array,b.itemSize,b.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Wt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const o0="glTF",Ua=12,km={JSON:1313821514,BIN:5130562};class d1{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ua),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==o0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ua,s=new DataView(e,Ua);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===km.JSON){const c=new Uint8Array(e,Ua+o,a);this.content=n.decode(c)}else if(l===km.BIN){const c=Ua+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class p1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Uf[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Uf[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=jo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,Qn,f)})})}}class m1{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class g1{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class a0 extends Il{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,v=1-m,x=p-f+h;for(let y=0;y!==a;y++){const b=o[_+y+a],T=o[_+y+l]*u,E=o[g+y+a],R=o[g+y]*u;s[y]=v*b+x*T+m*E+p*R}return s}}const _1=new yr;class v1 extends a0{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return _1.fromArray(s).normalize().toArray(s),s}}const Ni={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},jo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zm={9728:hn,9729:fn,9984:Pg,9985:wc,9986:za,9987:zr},Vm={33071:fr,33648:kc,10497:na},lh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},x1={CUBICSPLINE:void 0,LINEAR:gl,STEP:ml},ch={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function y1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Zr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yr})),r.DefaultMaterial}function zs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function sr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function S1(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function M1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function b1(r){let e;const t=r.extensions&&r.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+uh(t.attributes):e=r.indices+":"+uh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+uh(r.targets[n]);return e}function uh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ff(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function w1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const T1=new it;class E1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $E,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new $x(this.options.manager):this.textureLoader=new ey(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return zs(s,a,i),sr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Ja.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=lh[i.type],a=jo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Jn(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=lh[i.type],c=jo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(v);x||(_=new c(a,p*d,i.count*d/u),x=new xx(_,d/u),t.cache.add(v,x)),m=new hd(x,l,f%d/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new Jn(_,l,g);if(i.sparse!==void 0){const p=lh.SCALAR,v=jo[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new v(o[1],x,i.sparse.count*p),T=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Jn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,R=b.length;E<R;E++){const S=b[E];if(m.setX(S,T[E*l]),l>=2&&m.setY(S,T[E*l+1]),l>=3&&m.setZ(S,T[E*l+2]),l>=4&&m.setW(S,T[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=zm[f.magFilter]||fn,u.minFilter=zm[f.minFilter]||zr,u.wrapS=Vm[f.wrapS]||na,u.wrapT=Vm[f.wrapT]||na,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==hn&&u.minFilter!==fn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Mn(_);m.needsUpdate=!0,f(m)}),t.load(Ja.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),sr(h,o),h.userData.mimeType=o.mimeType||w1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ht.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new jg,er.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new $g,er.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Zr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){const h=i[ht.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ke(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Qn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,En)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ur);const u=s.alphaMode||ch.OPAQUE;if(u===ch.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ch.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==js&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ze(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==js&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==js){const h=s.emissiveFactor;a.emissive=new Ke().setRGB(h[0],h[1],h[2],Qn)}return s.emissiveTexture!==void 0&&o!==js&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,En)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),sr(h,s),t.associations.set(h,{materials:e}),s.extensions&&zs(i,h,s),h})}createUniqueName(e){const t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Hm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=b1(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Hm(new ei,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?y1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const v=c[d];if(m.mode===Ni.TRIANGLES||m.mode===Ni.TRIANGLE_STRIP||m.mode===Ni.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Sx(_,v):new Tt(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Ni.TRIANGLE_STRIP?p.geometry=Bm(p.geometry,Fg):m.mode===Ni.TRIANGLE_FAN&&(p.geometry=Bm(p.geometry,gf));else if(m.mode===Ni.LINES)p=new Rx(_,v);else if(m.mode===Ni.LINE_STRIP)p=new md(_,v);else if(m.mode===Ni.LINE_LOOP)p=new Cx(_,v);else if(m.mode===Ni.POINTS)p=new Px(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&M1(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),sr(p,s),m.extensions&&zs(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&zs(i,h[0],s),h[0];const f=new Ht;s.extensions&&zs(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new rn(Qi.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new hu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),sr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new it;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new dd(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let x=0,y=f.length;x<y;x++){const b=f[x],T=d[x],E=g[x],R=_[x],S=m[x];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const w=n._createAnimationTracks(b,T,E,R,S);if(w)for(let C=0;C<w.length;C++)p.push(w[C])}const v=new Vx(s,void 0,p);return sr(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,T1)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new qg:c.length>1?u=new Ht:c.length===1?u=c[0]:u=new Wt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),sr(u,s),s.extensions&&zs(n,u,s),s.matrix!==void 0){const h=new it;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Ht;n.name&&(s.name=i.createUniqueName(n.name)),sr(s,n),n.extensions&&zs(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof er||f instanceof Mn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];os[s.path]===os.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(os[s.path]){case os.weights:c=oa;break;case os.rotation:c=aa;break;case os.translation:case os.scale:c=la;break;default:n.itemSize===1?c=oa:c=la;break}const u=i.interpolation!==void 0?x1[i.interpolation]:gl,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+os[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ff(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof aa?v1:a0;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function A1(r,e,t){const n=e.attributes,i=new Et;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const u=Ff(jo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new F,l=new F;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Ff(jo[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new wr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Hm(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Uf[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return dt.workingColorSpace!==Qn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),sr(r,e),A1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?S1(r,e.targets,t):r})}class _r{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),_r.nextNameID=_r.nextNameID||0,this.$name.id=`lil-gui-name-${++_r.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class R1 extends _r{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Bf(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const C1={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Bf,toHexString:Bf},Rl={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},P1={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,e,t=1){const n=Rl.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Rl.toHexString(i)}},L1={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=Rl.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Rl.toHexString(i)}},D1=[C1,Rl,P1,L1];function I1(r){return D1.find(e=>e.match(r))}class N1 extends _r{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=I1(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Bf(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class hh extends _r{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class O1 extends _r{constructor(e,t,n,i,s,o){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+v),this.$input.value=this.getValue())},i=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let o=!1,a,l,c,u,h;const f=5,d=v=>{a=v.clientX,l=c=v.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=v=>{if(o){const x=v.clientX-a,y=v.clientY-l;Math.abs(y)>f?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>f&&_()}if(!o){const x=v.clientY-c;h-=x*this._step*this._arrowKeyMultiplier(v),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=v.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,v,x,y,b)=>(p-v)/(x-v)*(b-y)+y,t=p=>{const v=this.$slider.getBoundingClientRect();let x=e(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(x)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=p=>{if(o){const v=p.touches[0].clientX-a,x=p.touches[0].clientY-l;Math.abs(v)>Math.abs(x)?c(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else p.preventDefault(),t(p.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},d=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const x=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(d,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class U1 extends _r{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class F1 extends _r{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var B1=`.lil-gui {
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
}`;function k1(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Gm=!1;class Vd{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Gm&&a&&(k1(B1),Gm=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new U1(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new O1(this,e,t,n,i,s);case"boolean":return new R1(this,e,t);case"string":return new F1(this,e,t);case"function":return new hh(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new N1(this,e,t,n)}addFolder(e){const t=new Vd({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof hh||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof hh)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function z1(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function V1(r,e,t){return e&&z1(r.prototype,e),r}var An,Ic,Ti,ms,gs,Ko,l0,Ws,nl,c0,Hr,qi,u0,h0=function(){return An||typeof window<"u"&&(An=window.gsap)&&An.registerPlugin&&An},f0=1,zo=[],ut=[],vr=[],il=Date.now,kf=function(e,t){return t},H1=function(){var e=nl.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ut),i.push.apply(i,vr),ut=n,vr=i,kf=function(o,a){return t[o](a)}},ys=function(e,t){return~vr.indexOf(e)&&vr[vr.indexOf(e)+1][t]},rl=function(e){return!!~c0.indexOf(e)},Gn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Hn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},uc="scrollLeft",hc="scrollTop",zf=function(){return Hr&&Hr.isPressed||ut.cache++},Qc=function(e,t){var n=function i(s){if(s||s===0){f0&&(Ti.history.scrollRestoration="manual");var o=Hr&&Hr.isPressed;s=i.v=Math.round(s)||(Hr&&Hr.iOS?1:0),e(s),i.cacheID=ut.cache,o&&kf("ss",s)}else(t||ut.cache!==i.cacheID||kf("ref"))&&(i.cacheID=ut.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Kn={s:uc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Qc(function(r){return arguments.length?Ti.scrollTo(r,un.sc()):Ti.pageXOffset||ms[uc]||gs[uc]||Ko[uc]||0})},un={s:hc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Kn,sc:Qc(function(r){return arguments.length?Ti.scrollTo(Kn.sc(),r):Ti.pageYOffset||ms[hc]||gs[hc]||Ko[hc]||0})},oi=function(e,t){return(t&&t._ctx&&t._ctx.selector||An.utils.toArray)(e)[0]||(typeof e=="string"&&An.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},G1=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ts=function(e,t){var n=t.s,i=t.sc;rl(e)&&(e=ms.scrollingElement||gs);var s=ut.indexOf(e),o=i===un.sc?1:2;!~s&&(s=ut.push(e)-1),ut[s+o]||Gn(e,"scroll",zf);var a=ut[s+o],l=a||(ut[s+o]=Qc(ys(e,n),!0)||(rl(e)?i:Qc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=An.getProperty(e,"scrollBehavior")==="smooth"),l},Vf=function(e,t,n){var i=e,s=e,o=il(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=il();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=il();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Fa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Wm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},d0=function(){nl=An.core.globals().ScrollTrigger,nl&&nl.core&&H1()},p0=function(e){return An=e||h0(),!Ic&&An&&typeof document<"u"&&document.body&&(Ti=window,ms=document,gs=ms.documentElement,Ko=ms.body,c0=[Ti,ms,gs,Ko],An.utils.clamp,u0=An.core.context||function(){},Ws="onpointerenter"in Ko?"pointer":"mouse",l0=Zt.isTouch=Ti.matchMedia&&Ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,qi=Zt.eventTypes=("ontouchstart"in gs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in gs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return f0=0},500),d0(),Ic=1),Ic};Kn.op=un;ut.cache=0;var Zt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ic||p0(An)||console.warn("Please gsap.registerPlugin(Observer)"),nl||d0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,v=n.onDrag,x=n.onPress,y=n.onRelease,b=n.onRight,T=n.onLeft,E=n.onUp,R=n.onDown,S=n.onChangeX,w=n.onChangeY,C=n.onChange,P=n.onToggleX,N=n.onToggleY,B=n.onHover,V=n.onHoverEnd,k=n.onMove,z=n.ignoreCheck,W=n.isNormalizer,ee=n.onGestureStart,D=n.onGestureEnd,Q=n.onWheel,re=n.onEnable,he=n.onDisable,ye=n.onClick,ae=n.scrollSpeed,$=n.capture,J=n.allowClicks,ce=n.lockAxis,Ne=n.onLockAxis;this.target=a=oi(a)||gs,this.vars=n,d&&(d=An.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,ae=ae||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ti.getComputedStyle(Ko).lineHeight)||22);var Te,He,xe,Ee,Pe,qe,Fe,H=this,U=0,ft=0,Ze=n.passive||!u&&n.passive!==!1,Se=Ts(a,Kn),ue=Ts(a,un),L=Se(),M=ue(),I=~o.indexOf("touch")&&!~o.indexOf("pointer")&&qi[0]==="pointerdown",Y=rl(a),K=a.ownerDocument||ms,q=[0,0,0],fe=[0,0,0],le=0,Me=function(){return le=il()},de=function(Ue,et){return(H.event=Ue)&&d&&G1(Ue.target,d)||et&&I&&Ue.pointerType!=="touch"||z&&z(Ue,et)},ne=function(){H._vx.reset(),H._vy.reset(),He.pause(),h&&h(H)},se=function(){var Ue=H.deltaX=Wm(q),et=H.deltaY=Wm(fe),Re=Math.abs(Ue)>=i,Je=Math.abs(et)>=i;C&&(Re||Je)&&C(H,Ue,et,q,fe),Re&&(b&&H.deltaX>0&&b(H),T&&H.deltaX<0&&T(H),S&&S(H),P&&H.deltaX<0!=U<0&&P(H),U=H.deltaX,q[0]=q[1]=q[2]=0),Je&&(R&&H.deltaY>0&&R(H),E&&H.deltaY<0&&E(H),w&&w(H),N&&H.deltaY<0!=ft<0&&N(H),ft=H.deltaY,fe[0]=fe[1]=fe[2]=0),(Ee||xe)&&(k&&k(H),xe&&(m&&xe===1&&m(H),v&&v(H),xe=0),Ee=!1),qe&&!(qe=!1)&&Ne&&Ne(H),Pe&&(Q(H),Pe=!1),Te=0},pe=function(Ue,et,Re){q[Re]+=Ue,fe[Re]+=et,H._vx.update(Ue),H._vy.update(et),c?Te||(Te=requestAnimationFrame(se)):se()},we=function(Ue,et){ce&&!Fe&&(H.axis=Fe=Math.abs(Ue)>Math.abs(et)?"x":"y",qe=!0),Fe!=="y"&&(q[2]+=Ue,H._vx.update(Ue,!0)),Fe!=="x"&&(fe[2]+=et,H._vy.update(et,!0)),c?Te||(Te=requestAnimationFrame(se)):se()},me=function(Ue){if(!de(Ue,1)){Ue=Fa(Ue,u);var et=Ue.clientX,Re=Ue.clientY,Je=et-H.x,Ve=Re-H.y,Qe=H.isDragging;H.x=et,H.y=Re,(Qe||(Je||Ve)&&(Math.abs(H.startX-et)>=s||Math.abs(H.startY-Re)>=s))&&(xe||(xe=Qe?2:1),Qe||(H.isDragging=!0),we(Je,Ve))}},Ye=H.onPress=function(Le){de(Le,1)||Le&&Le.button||(H.axis=Fe=null,He.pause(),H.isPressed=!0,Le=Fa(Le),U=ft=0,H.startX=H.x=Le.clientX,H.startY=H.y=Le.clientY,H._vx.reset(),H._vy.reset(),Gn(W?a:K,qi[1],me,Ze,!0),H.deltaX=H.deltaY=0,x&&x(H))},O=H.onRelease=function(Le){if(!de(Le,1)){Hn(W?a:K,qi[1],me,!0);var Ue=!isNaN(H.y-H.startY),et=H.isDragging,Re=et&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Je=Fa(Le);!Re&&Ue&&(H._vx.reset(),H._vy.reset(),u&&J&&An.delayedCall(.08,function(){if(il()-le>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(K.createEvent){var Ve=K.createEvent("MouseEvents");Ve.initMouseEvent("click",!0,!0,Ti,1,Je.screenX,Je.screenY,Je.clientX,Je.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(Ve)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,h&&et&&!W&&He.restart(!0),xe&&se(),p&&et&&p(H),y&&y(H,Re)}},ge=function(Ue){return Ue.touches&&Ue.touches.length>1&&(H.isGesturing=!0)&&ee(Ue,H.isDragging)},oe=function(){return(H.isGesturing=!1)||D(H)},be=function(Ue){if(!de(Ue)){var et=Se(),Re=ue();pe((et-L)*ae,(Re-M)*ae,1),L=et,M=Re,h&&He.restart(!0)}},ie=function(Ue){if(!de(Ue)){Ue=Fa(Ue,u),Q&&(Pe=!0);var et=(Ue.deltaMode===1?l:Ue.deltaMode===2?Ti.innerHeight:1)*g;pe(Ue.deltaX*et,Ue.deltaY*et,0),h&&!W&&He.restart(!0)}},te=function(Ue){if(!de(Ue)){var et=Ue.clientX,Re=Ue.clientY,Je=et-H.x,Ve=Re-H.y;H.x=et,H.y=Re,Ee=!0,h&&He.restart(!0),(Je||Ve)&&we(Je,Ve)}},ve=function(Ue){H.event=Ue,B(H)},Ge=function(Ue){H.event=Ue,V(H)},mt=function(Ue){return de(Ue)||Fa(Ue,u)&&ye(H)};He=H._dc=An.delayedCall(f||.25,ne).pause(),H.deltaX=H.deltaY=0,H._vx=Vf(0,50,!0),H._vy=Vf(0,50,!0),H.scrollX=Se,H.scrollY=ue,H.isDragging=H.isGesturing=H.isPressed=!1,u0(this),H.enable=function(Le){return H.isEnabled||(Gn(Y?K:a,"scroll",zf),o.indexOf("scroll")>=0&&Gn(Y?K:a,"scroll",be,Ze,$),o.indexOf("wheel")>=0&&Gn(a,"wheel",ie,Ze,$),(o.indexOf("touch")>=0&&l0||o.indexOf("pointer")>=0)&&(Gn(a,qi[0],Ye,Ze,$),Gn(K,qi[2],O),Gn(K,qi[3],O),J&&Gn(a,"click",Me,!0,!0),ye&&Gn(a,"click",mt),ee&&Gn(K,"gesturestart",ge),D&&Gn(K,"gestureend",oe),B&&Gn(a,Ws+"enter",ve),V&&Gn(a,Ws+"leave",Ge),k&&Gn(a,Ws+"move",te)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=Ee=xe=!1,H._vx.reset(),H._vy.reset(),L=Se(),M=ue(),Le&&Le.type&&Ye(Le),re&&re(H)),H},H.disable=function(){H.isEnabled&&(zo.filter(function(Le){return Le!==H&&rl(Le.target)}).length||Hn(Y?K:a,"scroll",zf),H.isPressed&&(H._vx.reset(),H._vy.reset(),Hn(W?a:K,qi[1],me,!0)),Hn(Y?K:a,"scroll",be,$),Hn(a,"wheel",ie,$),Hn(a,qi[0],Ye,$),Hn(K,qi[2],O),Hn(K,qi[3],O),Hn(a,"click",Me,!0),Hn(a,"click",mt),Hn(K,"gesturestart",ge),Hn(K,"gestureend",oe),Hn(a,Ws+"enter",ve),Hn(a,Ws+"leave",Ge),Hn(a,Ws+"move",te),H.isEnabled=H.isPressed=H.isDragging=!1,he&&he(H))},H.kill=H.revert=function(){H.disable();var Le=zo.indexOf(H);Le>=0&&zo.splice(Le,1),Hr===H&&(Hr=0)},zo.push(H),W&&rl(a)&&(Hr=H),H.enable(_)},V1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Zt.version="3.14.2";Zt.create=function(r){return new Zt(r)};Zt.register=p0;Zt.getAll=function(){return zo.slice()};Zt.getById=function(r){return zo.filter(function(e){return e.vars.id===r})[0]};h0()&&An.registerPlugin(Zt);var Oe,Oo,ct,Ot,Mi,xt,Hd,eu,Cl,sl,Wa,fc,In,_u,Hf,qn,Xm,Ym,Uo,m0,fh,g0,Yn,Gf,_0,v0,ls,Wf,Gd,Zo,Wd,ol,Xf,dh,dc=1,Nn=Date.now,ph=Nn(),Hi=0,Xa=0,qm=function(e,t,n){var i=yi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},$m=function(e,t){return t&&(!yi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},W1=function r(){return Xa&&requestAnimationFrame(r)},jm=function(){return _u=1},Km=function(){return _u=0},lr=function(e){return e},Ya=function(e){return Math.round(e*1e5)/1e5||0},x0=function(){return typeof window<"u"},y0=function(){return Oe||x0()&&(Oe=window.gsap)&&Oe.registerPlugin&&Oe},lo=function(e){return!!~Hd.indexOf(e)},S0=function(e){return(e==="Height"?Wd:ct["inner"+e])||Mi["client"+e]||xt["client"+e]},M0=function(e){return ys(e,"getBoundingClientRect")||(lo(e)?function(){return Bc.width=ct.innerWidth,Bc.height=Wd,Bc}:function(){return kr(e)})},X1=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=ys(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?S0(s):e["client"+s])||0}},Y1=function(e,t){return!t||~vr.indexOf(e)?M0(e):function(){return Bc}},mr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=ys(e,n))?o()-M0(e)()[s]:lo(e)?(Mi[n]||xt[n])-S0(i):e[n]-e["offset"+i])},pc=function(e,t){for(var n=0;n<Uo.length;n+=3)(!t||~t.indexOf(Uo[n+1]))&&e(Uo[n],Uo[n+1],Uo[n+2])},yi=function(e){return typeof e=="string"},Fn=function(e){return typeof e=="function"},qa=function(e){return typeof e=="number"},Xs=function(e){return typeof e=="object"},Ba=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},mh=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Io=Math.abs,b0="left",w0="top",Xd="right",Yd="bottom",ro="width",so="height",al="Right",ll="Left",cl="Top",ul="Bottom",tn="padding",Oi="margin",ma="Width",qd="Height",cn="px",Ui=function(e){return ct.getComputedStyle(e)},q1=function(e){var t=Ui(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Zm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},kr=function(e,t){var n=t&&Ui(e)[Hf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Oe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},tu=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},T0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},$1=function(e){return function(t){return Oe.utils.snap(T0(e),t)}},$d=function(e){var t=Oe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},j1=function(e){return function(t,n){return $d(T0(e))(t,n.direction)}},mc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},yn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},xn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},gc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Jm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_c={toggleActions:"play",anticipatePin:0},nu={top:0,left:0,center:.5,bottom:1,right:1},Nc=function(e,t){if(yi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in nu?nu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},vc=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Ot.createElement("div"),_=lo(n)||ys(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?xt:n,v=e.indexOf("start")!==-1,x=v?c:u,y="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(i===un?Xd:Yd)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Oc(g,0,i,v),g},Oc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+ma]=1,s["border"+a+ma]=0,s[n.p]=t+"px",Oe.set(e,s)},rt=[],Yf={},Pl,Qm=function(){return Nn()-Hi>34&&(Pl||(Pl=requestAnimationFrame(Xr)))},No=function(){(!Yn||!Yn.isPressed||Yn.startX>xt.clientWidth)&&(ut.cache++,Yn?Pl||(Pl=requestAnimationFrame(Xr)):Xr(),Hi||uo("scrollStart"),Hi=Nn())},gh=function(){v0=ct.innerWidth,_0=ct.innerHeight},$a=function(e){ut.cache++,(e===!0||!In&&!g0&&!Ot.fullscreenElement&&!Ot.webkitFullscreenElement&&(!Gf||v0!==ct.innerWidth||Math.abs(ct.innerHeight-_0)>ct.innerHeight*.25))&&eu.restart(!0)},co={},K1=[],E0=function r(){return xn(ot,"scrollEnd",r)||Zs(!0)},uo=function(e){return co[e]&&co[e].map(function(t){return t()})||K1},xi=[],A0=function(e){for(var t=0;t<xi.length;t+=5)(!e||xi[t+4]&&xi[t+4].query===e)&&(xi[t].style.cssText=xi[t+1],xi[t].getBBox&&xi[t].setAttribute("transform",xi[t+2]||""),xi[t+3].uncache=1)},R0=function(){return ut.forEach(function(e){return Fn(e)&&++e.cacheID&&(e.rec=e())})},jd=function(e,t){var n;for(qn=0;qn<rt.length;qn++)n=rt[qn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ol=!0,t&&A0(t),t||uo("revert")},C0=function(e,t){ut.cache++,(t||!$n)&&ut.forEach(function(n){return Fn(n)&&n.cacheID++&&(n.rec=0)}),yi(e)&&(ct.history.scrollRestoration=Gd=e)},$n,oo=0,eg,Z1=function(){if(eg!==oo){var e=eg=oo;requestAnimationFrame(function(){return e===oo&&Zs(!0)})}},P0=function(){xt.appendChild(Zo),Wd=!Yn&&Zo.offsetHeight||ct.innerHeight,xt.removeChild(Zo)},tg=function(e){return Cl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Zs=function(e,t){if(Mi=Ot.documentElement,xt=Ot.body,Hd=[ct,Ot,Mi,xt],Hi&&!e&&!ol){yn(ot,"scrollEnd",E0);return}P0(),$n=ot.isRefreshing=!0,ol||R0();var n=uo("refreshInit");m0&&ot.sort(),t||jd(),ut.forEach(function(i){Fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),ol=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Xf=1,tg(!0),rt.forEach(function(i){var s=mr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),tg(!1),Xf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ut.forEach(function(i){Fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),C0(Gd,1),eu.pause(),oo++,$n=2,Xr(2),rt.forEach(function(i){return Fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),$n=ot.isRefreshing=!1,uo("refresh")},qf=0,Uc=1,hl,Xr=function(e){if(e===2||!$n&&!ol){ot.isUpdating=!0,hl&&hl.update(0);var t=rt.length,n=Nn(),i=n-ph>=50,s=t&&rt[0].scroll();if(Uc=qf>s?-1:1,$n||(qf=s),i&&(Hi&&!_u&&n-Hi>200&&(Hi=0,uo("scrollEnd")),Wa=ph,ph=n),Uc<0){for(qn=t;qn-- >0;)rt[qn]&&rt[qn].update(0,i);Uc=1}else for(qn=0;qn<t;qn++)rt[qn]&&rt[qn].update(0,i);ot.isUpdating=!1}Pl=0},$f=[b0,w0,Yd,Xd,Oi+ul,Oi+al,Oi+cl,Oi+ll,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Fc=$f.concat([ro,so,"boxSizing","max"+ma,"max"+qd,"position",Oi,tn,tn+cl,tn+al,tn+ul,tn+ll]),J1=function(e,t,n){Jo(n);var i=e._gsap;if(i.spacerIsNative)Jo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},_h=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=$f.length,o=t.style,a=e.style,l;s--;)l=$f[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Yd]=a[Xd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ro]=tu(e,Kn)+cn,o[so]=tu(e,un)+cn,o[tn]=a[Oi]=a[w0]=a[b0]="0",Jo(i),a[ro]=a["max"+ma]=n[ro],a[so]=a["max"+qd]=n[so],a[tn]=n[tn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Q1=/([A-Z])/g,Jo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Oe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Q1,"-$1").toLowerCase())}},xc=function(e){for(var t=Fc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Fc[s],n[Fc[s]]);return i.t=e,i},eA=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Bc={left:0,top:0},ng=function(e,t,n,i,s,o,a,l,c,u,h,f,d,g){Fn(e)&&(e=e(l)),yi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Nc("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,v;if(d&&d.seek(0),isNaN(e)||(e=+e),qa(e))d&&(e=Oe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Oc(a,n,i,!0);else{Fn(t)&&(t=t(l));var x=(e||"0").split(" "),y,b,T,E;v=oi(t,l)||xt,y=kr(v)||{},(!y||!y.left&&!y.top)&&Ui(v).display==="none"&&(E=v.style.display,v.style.display="block",y=kr(v),E?v.style.display=E:v.style.removeProperty("display")),b=Nc(x[0],y[i.d]),T=Nc(x[1]||"0",n),e=y[i.p]-c[i.p]-u+b+s-T,a&&Oc(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+n,S=o._isStart;m="scroll"+i.d2,Oc(o,R,i,S&&R>20||!S&&(h?Math.max(xt[m],Mi[m]):o.parentNode[m])<=R+1),h&&(c=kr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+cn))}return d&&v&&(m=kr(v),d.seek(f),p=kr(v),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},tA=/(webkit|moz|length|cssText|inset)/i,ig=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===xt){e._stOrig=s.cssText,a=Ui(e);for(o in a)!+o&&!tA.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Oe.core.getCache(e).uncache=1,t.appendChild(e)}},L0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},yc=function(e,t,n){var i={};i[t.p]="+="+n,Oe.set(e,i)},rg=function(e,t){var n=Ts(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=L0(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&Xr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Oe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},yn(e,"wheel",n.wheelHandler),ot.isTouch&&yn(e,"touchmove",n.wheelHandler),s},ot=(function(){function r(t,n){Oo||r.register(Oe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Wf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Xa){this.update=this.refresh=this.kill=lr;return}n=Zm(yi(n)||qa(n)||n.nodeType?{trigger:n}:n,_c);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,b=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,R=s.fastScrollEnd,S=s.preventOverlaps,w=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Kn:un,C=!h&&h!==0,P=oi(n.scroller||ct),N=Oe.core.getCache(P),B=lo(P),V=("pinType"in n?n.pinType:ys(P,"pinType")||B&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=C&&n.toggleActions.split(" "),W="markers"in n?n.markers:_c.markers,ee=B?0:parseFloat(Ui(P)["border"+w.p2+ma])||0,D=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(D)},re=X1(P,B,w),he=Y1(P,B),ye=0,ae=0,$=0,J=Ts(P,w),ce,Ne,Te,He,xe,Ee,Pe,qe,Fe,H,U,ft,Ze,Se,ue,L,M,I,Y,K,q,fe,le,Me,de,ne,se,pe,we,me,Ye,O,ge,oe,be,ie,te,ve,Ge;if(D._startClamp=D._endClamp=!1,D._dir=w,m*=45,D.scroller=P,D.scroll=E?E.time.bind(E):J,He=J(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(m0=1,n.refreshPriority===-9999&&(hl=D)),N.tweenScroll=N.tweenScroll||{top:rg(P,un),left:rg(P,Kn)},D.tweenTo=ce=N.tweenScroll[w.p],D.scrubDuration=function(Re){ge=qa(Re)&&Re,ge?O?O.duration(Re):O=Oe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ge,paused:!0,onComplete:function(){return p&&p(D)}}):(O&&O.progress(1).kill(),O=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),me=0,l||(l=i.vars.id)),y&&((!Xs(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xt.style&&Oe.set(B?[xt,Mi]:P,{scrollBehavior:"auto"}),ut.forEach(function(Re){return Fn(Re)&&Re.target===(B?Ot.scrollingElement||Mi:P)&&(Re.smooth=!1)}),Te=Fn(y.snapTo)?y.snapTo:y.snapTo==="labels"?$1(i):y.snapTo==="labelsDirectional"?j1(i):y.directional!==!1?function(Re,Je){return $d(y.snapTo)(Re,Nn()-ae<500?0:Je.direction)}:Oe.utils.snap(y.snapTo),oe=y.duration||{min:.1,max:2},oe=Xs(oe)?sl(oe.min,oe.max):sl(oe,oe),be=Oe.delayedCall(y.delay||ge/2||.1,function(){var Re=J(),Je=Nn()-ae<500,Ve=ce.tween;if((Je||Math.abs(D.getVelocity())<10)&&!Ve&&!_u&&ye!==Re){var Qe=(Re-Ee)/Se,jt=i&&!C?i.totalProgress():Qe,at=Je?0:(jt-Ye)/(Nn()-Wa)*1e3||0,yt=Oe.utils.clamp(-Qe,1-Qe,Io(at/2)*at/.185),Jt=Qe+(y.inertia===!1?0:yt),Ut,Pt,gt=y,ti=gt.onStart,At=gt.onInterrupt,Pn=gt.onComplete;if(Ut=Te(Jt,D),qa(Ut)||(Ut=Jt),Pt=Math.max(0,Math.round(Ee+Ut*Se)),Re<=Pe&&Re>=Ee&&Pt!==Re){if(Ve&&!Ve._initted&&Ve.data<=Io(Pt-Re))return;y.inertia===!1&&(yt=Ut-Qe),ce(Pt,{duration:oe(Io(Math.max(Io(Jt-jt),Io(Ut-jt))*.185/at/.05||0)),ease:y.ease||"power3",data:Io(Pt-Re),onInterrupt:function(){return be.restart(!0)&&At&&At(D)},onComplete:function(){D.update(),ye=J(),i&&!C&&(O?O.resetTo("totalProgress",Ut,i._tTime/i._tDur):i.progress(Ut)),me=Ye=i&&!C?i.totalProgress():D.progress,v&&v(D),Pn&&Pn(D)}},Re,yt*Se,Pt-Re-yt*Se),ti&&ti(D,ce.tween)}}else D.isActive&&ye!==Re&&be.restart(!0)}).pause()),l&&(Yf[l]=D),f=D.trigger=oi(f||d!==!0&&d),Ge=f&&f._gsap&&f._gsap.stRevert,Ge&&(Ge=Ge(D)),d=d===!0?f:oi(d),yi(a)&&(a={targets:f,className:a}),d&&(g===!1||g===Oi||(g=!g&&d.parentNode&&d.parentNode.style&&Ui(d.parentNode).display==="flex"?!1:tn),D.pin=d,Ne=Oe.core.getCache(d),Ne.spacer?ue=Ne.pinState:(T&&(T=oi(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Ne.spacerIsNative=!!T,T&&(Ne.spacerState=xc(T))),Ne.spacer=I=T||Ot.createElement("div"),I.classList.add("pin-spacer"),l&&I.classList.add("pin-spacer-"+l),Ne.pinState=ue=xc(d)),n.force3D!==!1&&Oe.set(d,{force3D:!0}),D.spacer=I=Ne.spacer,we=Ui(d),Me=we[g+w.os2],K=Oe.getProperty(d),q=Oe.quickSetter(d,w.a,cn),_h(d,I,we),M=xc(d)),W){ft=Xs(W)?Zm(W,Jm):Jm,H=vc("scroller-start",l,P,w,ft,0),U=vc("scroller-end",l,P,w,ft,0,H),Y=H["offset"+w.op.d2];var mt=oi(ys(P,"content")||P);qe=this.markerStart=vc("start",l,mt,w,ft,Y,0,E),Fe=this.markerEnd=vc("end",l,mt,w,ft,Y,0,E),E&&(ve=Oe.quickSetter([qe,Fe],w.a,cn)),!V&&!(vr.length&&ys(P,"fixedMarkers")===!0)&&(q1(B?xt:P),Oe.set([H,U],{force3D:!0}),ne=Oe.quickSetter(H,w.a,cn),pe=Oe.quickSetter(U,w.a,cn))}if(E){var Le=E.vars.onUpdate,Ue=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){D.update(0,0,1),Le&&Le.apply(E,Ue||[])})}if(D.previous=function(){return rt[rt.indexOf(D)-1]},D.next=function(){return rt[rt.indexOf(D)+1]},D.revert=function(Re,Je){if(!Je)return D.kill(!0);var Ve=Re!==!1||!D.enabled,Qe=In;Ve!==D.isReverted&&(Ve&&(ie=Math.max(J(),D.scroll.rec||0),$=D.progress,te=i&&i.progress()),qe&&[qe,Fe,H,U].forEach(function(jt){return jt.style.display=Ve?"none":"block"}),Ve&&(In=D,D.update(Ve)),d&&(!b||!D.isActive)&&(Ve?J1(d,I,ue):_h(d,I,Ui(d),de)),Ve||D.update(Ve),In=Qe,D.isReverted=Ve)},D.refresh=function(Re,Je,Ve,Qe){if(!((In||!D.enabled)&&!Je)){if(d&&Re&&Hi){yn(r,"scrollEnd",E0);return}!$n&&Q&&Q(D),In=D,ce.tween&&!Ve&&(ce.tween.kill(),ce.tween=0),O&&O.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ie){return Ie.vars.immediateRender&&Ie.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var jt=re(),at=he(),yt=E?E.duration():mr(P,w),Jt=Se<=.01||!Se,Ut=0,Pt=Qe||0,gt=Xs(Ve)?Ve.end:n.end,ti=n.endTrigger||f,At=Xs(Ve)?Ve.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Pn=D.pinnedContainer=n.pinnedContainer&&oi(n.pinnedContainer,D),di=f&&Math.max(0,rt.indexOf(D))||0,on=di,an,mn,Rr,po,gn,A,G,Z,j,X,_e,De,Ae;for(W&&Xs(Ve)&&(De=Oe.getProperty(H,w.p),Ae=Oe.getProperty(U,w.p));on-- >0;)A=rt[on],A.end||A.refresh(0,1)||(In=D),G=A.pin,G&&(G===f||G===d||G===Pn)&&!A.isReverted&&(X||(X=[]),X.unshift(A),A.revert(!0,!0)),A!==rt[on]&&(di--,on--);for(Fn(At)&&(At=At(D)),At=qm(At,"start",D),Ee=ng(At,f,jt,w,J(),qe,H,D,at,ee,V,yt,E,D._startClamp&&"_startClamp")||(d?-.001:0),Fn(gt)&&(gt=gt(D)),yi(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(yi(At)?At.split(" ")[0]:"")+gt:(Ut=Nc(gt.substr(2),jt),gt=yi(At)?At:(E?Oe.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ee):Ee)+Ut,ti=f)),gt=qm(gt,"end",D),Pe=Math.max(Ee,ng(gt||(ti?"100% 0":yt),ti,jt,w,J()+Ut,Fe,U,D,at,ee,V,yt,E,D._endClamp&&"_endClamp"))||-.001,Ut=0,on=di;on--;)A=rt[on]||{},G=A.pin,G&&A.start-A._pinPush<=Ee&&!E&&A.end>0&&(an=A.end-(D._startClamp?Math.max(0,A.start):A.start),(G===f&&A.start-A._pinPush<Ee||G===Pn)&&isNaN(At)&&(Ut+=an*(1-A.progress)),G===d&&(Pt+=an));if(Ee+=Ut,Pe+=Ut,D._startClamp&&(D._startClamp+=Ut),D._endClamp&&!$n&&(D._endClamp=Pe||-.001,Pe=Math.min(Pe,mr(P,w))),Se=Pe-Ee||(Ee-=.01)&&.001,Jt&&($=Oe.utils.clamp(0,1,Oe.utils.normalize(Ee,Pe,ie))),D._pinPush=Pt,qe&&Ut&&(an={},an[w.a]="+="+Ut,Pn&&(an[w.p]="-="+J()),Oe.set([qe,Fe],an)),d&&!(Xf&&D.end>=mr(P,w)))an=Ui(d),po=w===un,Rr=J(),fe=parseFloat(K(w.a))+Pt,!yt&&Pe>1&&(_e=(B?Ot.scrollingElement||Mi:P).style,_e={style:_e,value:_e["overflow"+w.a.toUpperCase()]},B&&Ui(xt)["overflow"+w.a.toUpperCase()]!=="scroll"&&(_e.style["overflow"+w.a.toUpperCase()]="scroll")),_h(d,I,an),M=xc(d),mn=kr(d,!0),Z=V&&Ts(P,po?Kn:un)(),g?(de=[g+w.os2,Se+Pt+cn],de.t=I,on=g===tn?tu(d,w)+Se+Pt:0,on&&(de.push(w.d,on+cn),I.style.flexBasis!=="auto"&&(I.style.flexBasis=on+cn)),Jo(de),Pn&&rt.forEach(function(Ie){Ie.pin===Pn&&Ie.vars.pinSpacing!==!1&&(Ie._subPinOffset=!0)}),V&&J(ie)):(on=tu(d,w),on&&I.style.flexBasis!=="auto"&&(I.style.flexBasis=on+cn)),V&&(gn={top:mn.top+(po?Rr-Ee:Z)+cn,left:mn.left+(po?Z:Rr-Ee)+cn,boxSizing:"border-box",position:"fixed"},gn[ro]=gn["max"+ma]=Math.ceil(mn.width)+cn,gn[so]=gn["max"+qd]=Math.ceil(mn.height)+cn,gn[Oi]=gn[Oi+cl]=gn[Oi+al]=gn[Oi+ul]=gn[Oi+ll]="0",gn[tn]=an[tn],gn[tn+cl]=an[tn+cl],gn[tn+al]=an[tn+al],gn[tn+ul]=an[tn+ul],gn[tn+ll]=an[tn+ll],L=eA(ue,gn,b),$n&&J(0)),i?(j=i._initted,fh(1),i.render(i.duration(),!0,!0),le=K(w.a)-fe+Se+Pt,se=Math.abs(Se-le)>1,V&&se&&L.splice(L.length-2,2),i.render(0,!0,!0),j||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),fh(0)):le=Se,_e&&(_e.value?_e.style["overflow"+w.a.toUpperCase()]=_e.value:_e.style.removeProperty("overflow-"+w.a));else if(f&&J()&&!E)for(mn=f.parentNode;mn&&mn!==xt;)mn._pinOffset&&(Ee-=mn._pinOffset,Pe-=mn._pinOffset),mn=mn.parentNode;X&&X.forEach(function(Ie){return Ie.revert(!1,!0)}),D.start=Ee,D.end=Pe,He=xe=$n?ie:J(),!E&&!$n&&(He<ie&&J(ie),D.scroll.rec=0),D.revert(!1,!0),ae=Nn(),be&&(ye=-1,be.restart(!0)),In=0,i&&C&&(i._initted||te)&&i.progress()!==te&&i.progress(te||0,!0).render(i.time(),!0,!0),(Jt||$!==D.progress||E||_||i&&!i._initted)&&(i&&!C&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Ee<-.001&&!$?Oe.utils.normalize(Ee,Pe,0):$,!0),D.progress=Jt||(He-Ee)/Se===$?0:$),d&&g&&(I._pinOffset=Math.round(D.progress*le)),O&&O.invalidate(),isNaN(De)||(De-=Oe.getProperty(H,w.p),Ae-=Oe.getProperty(U,w.p),yc(H,w,De),yc(qe,w,De-(Qe||0)),yc(U,w,Ae),yc(Fe,w,Ae-(Qe||0))),Jt&&!$n&&D.update(),u&&!$n&&!Ze&&(Ze=!0,u(D),Ze=!1)}},D.getVelocity=function(){return(J()-xe)/(Nn()-Wa)*1e3||0},D.endAnimation=function(){Ba(D.callbackAnimation),i&&(O?O.progress(1):i.paused()?C||Ba(i,D.direction<0,1):Ba(i,i.reversed()))},D.labelToScroll=function(Re){return i&&i.labels&&(Ee||D.refresh()||Ee)+i.labels[Re]/i.duration()*Se||0},D.getTrailing=function(Re){var Je=rt.indexOf(D),Ve=D.direction>0?rt.slice(0,Je).reverse():rt.slice(Je+1);return(yi(Re)?Ve.filter(function(Qe){return Qe.vars.preventOverlaps===Re}):Ve).filter(function(Qe){return D.direction>0?Qe.end<=Ee:Qe.start>=Pe})},D.update=function(Re,Je,Ve){if(!(E&&!Ve&&!Re)){var Qe=$n===!0?ie:D.scroll(),jt=Re?0:(Qe-Ee)/Se,at=jt<0?0:jt>1?1:jt||0,yt=D.progress,Jt,Ut,Pt,gt,ti,At,Pn,di;if(Je&&(xe=He,He=E?J():Qe,y&&(Ye=me,me=i&&!C?i.totalProgress():at)),m&&d&&!In&&!dc&&Hi&&(!at&&Ee<Qe+(Qe-xe)/(Nn()-Wa)*m?at=1e-4:at===1&&Pe>Qe+(Qe-xe)/(Nn()-Wa)*m&&(at=.9999)),at!==yt&&D.enabled){if(Jt=D.isActive=!!at&&at<1,Ut=!!yt&&yt<1,At=Jt!==Ut,ti=At||!!at!=!!yt,D.direction=at>yt?1:-1,D.progress=at,ti&&!In&&(Pt=at&&!yt?0:at===1?1:yt===1?2:3,C&&(gt=!At&&z[Pt+1]!=="none"&&z[Pt+1]||z[Pt],di=i&&(gt==="complete"||gt==="reset"||gt in i))),S&&(At||di)&&(di||h||!i)&&(Fn(S)?S(D):D.getTrailing(S).forEach(function(Rr){return Rr.endAnimation()})),C||(O&&!In&&!dc?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",at,i._tTime/i._tDur):(O.vars.totalProgress=at,O.invalidate().restart())):i&&i.totalProgress(at,!!(In&&(ae||Re)))),d){if(Re&&g&&(I.style[g+w.os2]=Me),!V)q(Ya(fe+le*at));else if(ti){if(Pn=!Re&&at>yt&&Pe+1>Qe&&Qe+1>=mr(P,w),b)if(!Re&&(Jt||Pn)){var on=kr(d,!0),an=Qe-Ee;ig(d,xt,on.top+(w===un?an:0)+cn,on.left+(w===un?0:an)+cn)}else ig(d,I);Jo(Jt||Pn?L:M),se&&at<1&&Jt||q(fe+(at===1&&!Pn?le:0))}}y&&!ce.tween&&!In&&!dc&&be.restart(!0),a&&(At||x&&at&&(at<1||!dh))&&Cl(a.targets).forEach(function(Rr){return Rr.classList[Jt||x?"add":"remove"](a.className)}),o&&!C&&!Re&&o(D),ti&&!In?(C&&(di&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),o&&o(D)),(At||!dh)&&(c&&At&&mh(D,c),k[Pt]&&mh(D,k[Pt]),x&&(at===1?D.kill(!1,1):k[Pt]=0),At||(Pt=at===1?1:3,k[Pt]&&mh(D,k[Pt]))),R&&!Jt&&Math.abs(D.getVelocity())>(qa(R)?R:2500)&&(Ba(D.callbackAnimation),O?O.progress(1):Ba(i,gt==="reverse"?1:!at,1))):C&&o&&!In&&o(D)}if(pe){var mn=E?Qe/E.duration()*(E._caScrollDist||0):Qe;ne(mn+(H._isFlipped?1:0)),pe(mn)}ve&&ve(-Qe/E.duration()*(E._caScrollDist||0))}},D.enable=function(Re,Je){D.enabled||(D.enabled=!0,yn(P,"resize",$a),B||yn(P,"scroll",No),Q&&yn(r,"refreshInit",Q),Re!==!1&&(D.progress=$=0,He=xe=ye=J()),Je!==!1&&D.refresh())},D.getTween=function(Re){return Re&&ce?ce.tween:O},D.setPositions=function(Re,Je,Ve,Qe){if(E){var jt=E.scrollTrigger,at=E.duration(),yt=jt.end-jt.start;Re=jt.start+yt*Re/at,Je=jt.start+yt*Je/at}D.refresh(!1,!1,{start:$m(Re,Ve&&!!D._startClamp),end:$m(Je,Ve&&!!D._endClamp)},Qe),D.update()},D.adjustPinSpacing=function(Re){if(de&&Re){var Je=de.indexOf(w.d)+1;de[Je]=parseFloat(de[Je])+Re+cn,de[1]=parseFloat(de[1])+Re+cn,Jo(de)}},D.disable=function(Re,Je){if(Re!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Je||O&&O.pause(),ie=0,Ne&&(Ne.uncache=1),Q&&xn(r,"refreshInit",Q),be&&(be.pause(),ce.tween&&ce.tween.kill()&&(ce.tween=0)),!B)){for(var Ve=rt.length;Ve--;)if(rt[Ve].scroller===P&&rt[Ve]!==D)return;xn(P,"resize",$a),B||xn(P,"scroll",No)}},D.kill=function(Re,Je){D.disable(Re,Je),O&&!Je&&O.kill(),l&&delete Yf[l];var Ve=rt.indexOf(D);Ve>=0&&rt.splice(Ve,1),Ve===qn&&Uc>0&&qn--,Ve=0,rt.forEach(function(Qe){return Qe.scroller===D.scroller&&(Ve=1)}),Ve||$n||(D.scroll.rec=0),i&&(i.scrollTrigger=null,Re&&i.revert({kill:!1}),Je||i.kill()),qe&&[qe,Fe,H,U].forEach(function(Qe){return Qe.parentNode&&Qe.parentNode.removeChild(Qe)}),hl===D&&(hl=0),d&&(Ne&&(Ne.uncache=1),Ve=0,rt.forEach(function(Qe){return Qe.pin===d&&Ve++}),Ve||(Ne.spacer=0)),n.onKill&&n.onKill(D)},rt.push(D),D.enable(!1,!1),Ge&&Ge(D),i&&i.add&&!Se){var et=D.update;D.update=function(){D.update=et,ut.cache++,Ee||Pe||D.refresh()},Oe.delayedCall(.01,D.update),Se=.01,Ee=Pe=0}else D.refresh();d&&Z1()},r.register=function(n){return Oo||(Oe=n||y0(),x0()&&window.document&&r.enable(),Oo=Xa),Oo},r.defaults=function(n){if(n)for(var i in n)_c[i]=n[i];return _c},r.disable=function(n,i){Xa=0,rt.forEach(function(o){return o[i?"kill":"disable"](n)}),xn(ct,"wheel",No),xn(Ot,"scroll",No),clearInterval(fc),xn(Ot,"touchcancel",lr),xn(xt,"touchstart",lr),mc(xn,Ot,"pointerdown,touchstart,mousedown",jm),mc(xn,Ot,"pointerup,touchend,mouseup",Km),eu.kill(),pc(xn);for(var s=0;s<ut.length;s+=3)gc(xn,ut[s],ut[s+1]),gc(xn,ut[s],ut[s+2])},r.enable=function(){if(ct=window,Ot=document,Mi=Ot.documentElement,xt=Ot.body,Oe&&(Cl=Oe.utils.toArray,sl=Oe.utils.clamp,Wf=Oe.core.context||lr,fh=Oe.core.suppressOverwrites||lr,Gd=ct.history.scrollRestoration||"auto",qf=ct.pageYOffset||0,Oe.core.globals("ScrollTrigger",r),xt)){Xa=1,Zo=document.createElement("div"),Zo.style.height="100vh",Zo.style.position="absolute",P0(),W1(),Zt.register(Oe),r.isTouch=Zt.isTouch,ls=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gf=Zt.isTouch===1,yn(ct,"wheel",No),Hd=[ct,Ot,Mi,xt],Oe.matchMedia?(r.matchMedia=function(c){var u=Oe.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Oe.addEventListener("matchMediaInit",function(){R0(),jd()}),Oe.addEventListener("matchMediaRevert",function(){return A0()}),Oe.addEventListener("matchMedia",function(){Zs(0,1),uo("matchMedia")}),Oe.matchMedia().add("(orientation: portrait)",function(){return gh(),gh})):console.warn("Requires GSAP 3.11.0 or later"),gh(),yn(Ot,"scroll",No);var n=xt.hasAttribute("style"),i=xt.style,s=i.borderTopStyle,o=Oe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=kr(xt),un.m=Math.round(a.top+un.sc())||0,Kn.m=Math.round(a.left+Kn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),fc=setInterval(Qm,250),Oe.delayedCall(.5,function(){return dc=0}),yn(Ot,"touchcancel",lr),yn(xt,"touchstart",lr),mc(yn,Ot,"pointerdown,touchstart,mousedown",jm),mc(yn,Ot,"pointerup,touchend,mouseup",Km),Hf=Oe.utils.checkPrefix("transform"),Fc.push(Hf),Oo=Nn(),eu=Oe.delayedCall(.2,Zs).pause(),Uo=[Ot,"visibilitychange",function(){var c=ct.innerWidth,u=ct.innerHeight;Ot.hidden?(Xm=c,Ym=u):(Xm!==c||Ym!==u)&&$a()},Ot,"DOMContentLoaded",Zs,ct,"load",Zs,ct,"resize",$a],pc(yn),rt.forEach(function(c){return c.enable(0,1)}),l=0;l<ut.length;l+=3)gc(xn,ut[l],ut[l+1]),gc(xn,ut[l],ut[l+2])}},r.config=function(n){"limitCallbacks"in n&&(dh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(fc)||(fc=i)&&setInterval(Qm,i),"ignoreMobileResize"in n&&(Gf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(pc(xn)||pc(yn,n.autoRefreshEvents||"none"),g0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=oi(n),o=ut.indexOf(s),a=lo(s);~o&&ut.splice(o,a?6:2),i&&(a?vr.unshift(ct,i,xt,i,Mi,i):vr.unshift(s,i))},r.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(yi(n)?oi(n):n).getBoundingClientRect(),a=o[s?ro:so]*i||0;return s?o.right-a>0&&o.left+a<ct.innerWidth:o.bottom-a>0&&o.top+a<ct.innerHeight},r.positionInViewport=function(n,i,s){yi(n)&&(n=oi(n));var o=n.getBoundingClientRect(),a=o[s?ro:so],l=i==null?a/2:i in nu?nu[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ct.innerWidth:(o.top+l)/ct.innerHeight},r.killAll=function(n){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=co.killAll||[];co={},i.forEach(function(s){return s()})}},r})();ot.version="3.14.2";ot.saveStyles=function(r){return r?Cl(r).forEach(function(e){if(e&&e.style){var t=xi.indexOf(e);t>=0&&xi.splice(t,5),xi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Oe.core.getCache(e),Wf())}}):xi};ot.revert=function(r,e){return jd(!r,e)};ot.create=function(r,e){return new ot(r,e)};ot.refresh=function(r){return r?$a(!0):(Oo||ot.register())&&Zs(!0)};ot.update=function(r){return++ut.cache&&Xr(r===!0?2:0)};ot.clearScrollMemory=C0;ot.maxScroll=function(r,e){return mr(r,e?Kn:un)};ot.getScrollFunc=function(r,e){return Ts(oi(r),e?Kn:un)};ot.getById=function(r){return Yf[r]};ot.getAll=function(){return rt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ot.isScrolling=function(){return!!Hi};ot.snapDirectional=$d;ot.addEventListener=function(r,e){var t=co[r]||(co[r]=[]);~t.indexOf(e)||t.push(e)};ot.removeEventListener=function(r,e){var t=co[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ot.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Oe.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Fn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Fn(s)&&(s=s(),yn(ot,"refresh",function(){return s=e.batchMax()})),Cl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ot.create(c))}),t};var sg=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},vh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===Mi&&r(xt,t)},Sc={auto:1,scroll:1},nA=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Oe.core.getCache(s),a=Nn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Sc[(l=Ui(s)).overflowY]||Sc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!lo(s)&&(Sc[(l=Ui(s)).overflowY]||Sc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},D0=function(e,t,n,i){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&nA,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&yn(Ot,Zt.eventTypes[0],ag,!1,!0)},onDisable:function(){return xn(Ot,Zt.eventTypes[0],ag,!0)}})},iA=/(input|label|select|textarea)/i,og,ag=function(e){var t=iA.test(e.target.tagName);(t||og)&&(e._gsapAllow=!0,og=t)},rA=function(e){Xs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=oi(e.target)||Mi,u=Oe.core.globals().ScrollSmoother,h=u&&u.get(),f=ls&&(e.content&&oi(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Ts(c,un),g=Ts(c,Kn),_=1,m=(Zt.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,p=0,v=Fn(i)?function(){return i(a)}:function(){return i||2.8},x,y,b=D0(c,e.type,!0,s),T=function(){return y=!1},E=lr,R=lr,S=function(){l=mr(c,un),R=sl(ls?1:0,l),n&&(E=sl(0,mr(c,Kn))),x=oo},w=function(){f._gsap.y=Ya(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},C=function(){if(y){requestAnimationFrame(T);var W=Ya(a.deltaY/2),ee=R(d.v-W);if(f&&ee!==d.v+d.offset){d.offset=ee-d.v;var D=Ya((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",d.cacheID=ut.cache,Xr()}return!0}d.offset&&w(),y=!0},P,N,B,V,k=function(){S(),P.isActive()&&P.vars.scrollY>l&&(d()>l?P.progress(1)&&d(l):P.resetTo("scrollY",l))};return f&&Oe.set(f,{y:"+=0"}),e.ignoreCheck=function(z){return ls&&z.type==="touchmove"&&C()||_>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){y=!1;var z=_;_=Ya((ct.visualViewport&&ct.visualViewport.scale||1)/m),P.pause(),z!==_&&vh(c,_>1.01?!0:n?!1:"x"),N=g(),B=d(),S(),x=oo},e.onRelease=e.onGestureStart=function(z,W){if(d.offset&&w(),!W)V.restart(!0);else{ut.cache++;var ee=v(),D,Q;n&&(D=g(),Q=D+ee*.05*-z.velocityX/.227,ee*=sg(g,D,Q,mr(c,Kn)),P.vars.scrollX=E(Q)),D=d(),Q=D+ee*.05*-z.velocityY/.227,ee*=sg(d,D,Q,mr(c,un)),P.vars.scrollY=R(Q),P.invalidate().duration(ee).play(.01),(ls&&P.vars.scrollY>=l||D>=l-1)&&Oe.to({},{onUpdate:k,duration:ee})}o&&o(z)},e.onWheel=function(){P._ts&&P.pause(),Nn()-p>1e3&&(x=0,p=Nn())},e.onChange=function(z,W,ee,D,Q){if(oo!==x&&S(),W&&n&&g(E(D[2]===W?N+(z.startX-z.x):g()+W-D[1])),ee){d.offset&&w();var re=Q[2]===ee,he=re?B+z.startY-z.y:d()+ee-Q[1],ye=R(he);re&&he!==ye&&(B+=ye-he),d(ye)}(ee||W)&&Xr()},e.onEnable=function(){vh(c,n?!1:"x"),ot.addEventListener("refresh",k),yn(ct,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){vh(c,!0),xn(ct,"resize",k),ot.removeEventListener("refresh",k),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new Zt(e),a.iOS=ls,ls&&!d()&&d(1),ls&&Oe.ticker.add(lr),V=a._dc,P=Oe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:L0(d,d(),function(){return P.pause()})},onUpdate:Xr,onComplete:V.vars.onComplete}),a};ot.sort=function(r){if(Fn(r))return rt.sort(r);var e=ct.pageYOffset||0;return ot.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ct.innerHeight}),rt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ot.observe=function(r){return new Zt(r)};ot.normalizeScroll=function(r){if(typeof r>"u")return Yn;if(r===!0&&Yn)return Yn.enable();if(r===!1){Yn&&Yn.kill(),Yn=r;return}var e=r instanceof Zt?r:rA(r);return Yn&&Yn.target===e.target&&Yn.kill(),lo(e.target)&&(Yn=e),e};ot.core={_getVelocityProp:Vf,_inputObserver:D0,_scrollers:ut,_proxies:vr,bridge:{ss:function(){Hi||uo("scrollStart"),Hi=Nn()},ref:function(){return In}}};y0()&&Oe.registerPlugin(ot);const iu=[{id:"trading",label:"Trading",rotationSpeed:.28,model:{type:"glb",url:"/models/logo.glb",targetSize:6.2,position:[4.8,-.3,0]}},{id:"payments",label:"Payments",rotationSpeed:.2,model:{type:"primitive",primitive:"stack-cylinders",targetSize:5.4,position:[4.8,-.3,0]}},{id:"financial-rails",label:"Financial rails",rotationSpeed:.16,model:{type:"primitive",primitive:"slab-grid",targetSize:5.8,position:[4.8,-.3,0]}},{id:"messaging",label:"Messaging",rotationSpeed:.22,model:{type:"glb",url:"/models/logo_separate.glb",targetSize:6.1,position:[4.8,-.3,0]}},{id:"privacy",label:"Privacy",rotationSpeed:.14,model:{type:"primitive",primitive:"diamond-cluster",targetSize:5.3,position:[4.8,-.3,0]}},{id:"social-coordination",label:"Social Coordination",rotationSpeed:.18,model:{type:"primitive",primitive:"ring-array",targetSize:5.6,position:[4.8,-.3,0]}}],sA=iu[0].id;function oA({gsap:r,ScrollTrigger:e}){if(!r||!e)return;const t=document.querySelector(".cc-team");if(!t)return;const n=t.querySelectorAll(".row.row-justify-between > .col"),i=t.querySelectorAll('[data-component="team"] > *');n.length&&r.from(n,{autoAlpha:0,y:28,duration:.8,ease:"power2.out",stagger:.12,scrollTrigger:{trigger:t,start:"top 78%",once:!0}}),i.length&&i.forEach((s,o)=>{r.from(s,{autoAlpha:0,y:"+=40",duration:.75,ease:"power2.out",delay:o*.08,scrollTrigger:{trigger:s,start:"top 85%",once:!0}})})}const aA={ramp:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",invert:!1,cellSize:5,aspectComp:.55,fontFamily:"monospace",fontScale:1,contrast:1.15,gamma:.9,bg:"#ffffff",fg:"#125fee"},ir={enterEnd:.4,holdEnd:.44,mergeEnd:.92,rotateEnd:.975};function Qo(r,e,t){return Math.min(t,Math.max(e,r))}function vi(r,e,t){return r+(e-r)*t}function as(r,e,t){return t<=e?0:Qo((r-e)/(t-e),0,1)}function lA(r,e,t){return t<=e?0:(r-e)/(t-e)}function lg(r){return r*r*r}function xh(r){return r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)*.5}function cA(r,e){return Qo((r-.5)*e+.5,0,1)}function uA(r,e){return Qo(Math.pow(r,e),0,1)}function hA(r,e,t){return .2126*r+.7152*e+.0722*t}function fA(r,e=0){const t=Qi.degToRad(r.fov),n=Math.max(.001,Math.abs(r.position.z-e));return Math.tan(t*.5)*n*r.aspect}function dA(r,e=0){const t=Qi.degToRad(r.fov),n=Math.max(.001,Math.abs(r.position.z-e));return Math.tan(t*.5)*n}function pA(r){if(!r||/^https?:\/\//i.test(r))return r;const e=new URL(import.meta.url),t=e.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//),n=t?t[1]:e.origin,i=r.startsWith("/")?r:`/${r}`;return`${n}${i}`}function mA({gsap:r,canvasSelector:e="#features, .cc-convergence canvas",meshNames:t={left:"clogo_L",right:"clogo_R"},modelUrl:n="/models/logo_split.glb",modelTargetSize:i=7.8,modelVerticalOffset:s=.1,modelVerticalOffsetMobile:o=null,mobileBreakpoint:a=767,stageProgressRange:l=[.5,1],getStageProgress:c=()=>window.__pageTL?.progress()??null,getVisibilityProgress:u=null,visibilityProgressRange:h=[0,1],visibilityFadeInStart:f=0,visibilityFadeInEnd:d=0,visibilityFadeOutStart:g=.985,visibilityFadeOutEnd:_=1,useAsciiCrossfade:m=!0,useContainerSize:p=!1,asciiOverrides:v={}}={}){if(!r)return null;const x=document.querySelector(e);if(!x)return null;const y=document.querySelector("#ascii"),b={...aA,...v},T=x.getContext("2d",{alpha:!1});if(!T)return null;function E(){if(p){const M=x.parentElement;if(M){const I=M.getBoundingClientRect();if(I.width>0&&I.height>0)return{width:I.width,height:I.height}}}return{width:window.innerWidth,height:window.innerHeight}}const R=E();x.style.opacity="0",x.style.display="block";function S(){const M=Math.min(window.devicePixelRatio||1,2);x.width=Math.floor(R.width*M),x.height=Math.floor(R.height*M),x.style.width=`${R.width}px`,x.style.height=`${R.height}px`,T.setTransform(M,0,0,M,0,0),T.fillStyle=b.bg,T.fillRect(0,0,R.width,R.height),T.textBaseline="top"}S();const w=document.createElement("canvas"),C=new Cs({canvas:w,antialias:!0,alpha:!1,powerPreference:"high-performance"});C.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),C.setSize(R.width,R.height);const P=new As,N=new rn(45,R.width/R.height,.01,1e4);P.add(N);const B=new Ma(16777215,.28),V=new Bn(16777215,1.2);V.position.set(6,4,5);const k=new Bn(16777215,.45);k.position.set(-5,3,4);const z=new Bn(16777215,.55);z.position.set(0,5,-5),P.add(B,V,k,z);const W={uTime:{value:0},uScale:{value:2.3},uIntensity:{value:.86},uBase:{value:.025},uAmp:{value:.015},uResolution:{value:new ze(R.width,R.height)},uTint:{value:new F(1,1,1)}},ee=new Cn({uniforms:W,depthWrite:!1,depthTest:!1,vertexShader:`
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
    `}),D=new Tt(new Tr(2,2),ee);D.frustumCulled=!1,D.renderOrder=-1e3,P.add(D);const Q=new Ht,re=new Ht,he=new Ht,ye=new Ht;Q.add(re),re.add(he,ye),P.add(Q);const ae={baseScale:1,centerY:0,holdLeftX:-1,holdRightX:1,holdLeftY:0,holdRightY:0,startLeftX:-2,startRightX:2,cameraStartZ:16,cameraEndZ:-8},$={ready:!1,splitMode:!0},J={maxDim:1,width:1,height:1,depth:1,leftWidth:1,rightWidth:1},ce=new wa,Ne=new Zr({color:new Ke("#ffffff"),metalness:.1,roughness:.58});function Te(){he.position.set(0,0,0),ye.position.set(0,0,0),re.rotation.set(0,0,0),re.scale.setScalar(ae.baseScale),re.updateMatrixWorld(!0);const I=new Et().setFromObject(re).getSize(new F),Y=new Et().setFromObject(he),K=new Et().setFromObject(ye),q=Y.getSize(new F),fe=K.getSize(new F);J.maxDim=Math.max(I.x,I.y,I.z,.001),J.width=Math.max(I.x,.001),J.height=Math.max(I.y,.001),J.depth=Math.max(I.z,.001),J.leftWidth=Math.max(q.x,.001),J.rightWidth=Math.max(fe.x,.001)}function He(){if(!$.ready)return;const M=R.width<=a,I=M&&typeof o=="number"?o:s,Y=Qi.degToRad(N.fov),K=Math.tan(Y*.5),q=Math.max(1e-4,K*N.aspect),fe=J.height*.5/Math.max(1e-4,K),le=J.width*.5/q,Me=Math.max(le,fe);ae.cameraStartZ=Me*(M?1.7:1.45),ae.cameraEndZ=-Math.max(J.maxDim*(M?2.3:2.6),Me*(M?1.2:1.4)),N.position.set(0,0,ae.cameraStartZ),N.rotation.set(0,0,0),N.near=.01,N.far=Math.max(2e3,Math.abs(ae.cameraEndZ)*4),N.updateProjectionMatrix();const de=dA(N,0);ae.centerY=de*I,Q.position.set(0,ae.centerY,0);const ne=fA(N,0),se=Math.max(.01,Math.min(.05,ne*.004));ae.startLeftX=-ne-J.leftWidth*.5-se,ae.startRightX=ne+J.rightWidth*.5+se;const pe=Math.max((J.leftWidth+J.rightWidth)*.28,ne*.22),we=Qo(J.maxDim*.05,.06,.34);ae.holdLeftX=-pe,ae.holdRightX=pe,ae.holdLeftY=-we,ae.holdRightY=we}ce.load(pA(n),M=>{const I=M.scene;I.updateMatrixWorld(!0),he.clear(),ye.clear();const Y=t?.left,K=t?.right,q=Y?I.getObjectByName(Y):null,fe=K?I.getObjectByName(K):null;q&&fe?(q.removeFromParent(),fe.removeFromParent(),he.add(q),ye.add(fe),$.splitMode=!0):(he.add(I),$.splitMode=!1),re.updateMatrixWorld(!0);const le=new Et().setFromObject(re),Me=le.getSize(new F),de=le.getCenter(new F);re.position.sub(de);const ne=Math.max(Me.x,Me.y,Me.z,.001);ae.baseScale=i/ne,re.scale.setScalar(ae.baseScale),re.traverse(pe=>{pe.isMesh&&(pe.castShadow=!1,pe.receiveShadow=!1,pe.material=Ne,pe.material.needsUpdate=!0)}),Te(),$.ready=!0,He();const se=Ze();typeof se=="number"&&H(se)},void 0,M=>{console.error("[features] Failed to load split logo:",M)});let xe=null,Ee=null;function Pe(){const M=Math.max(20,Math.floor(R.width/b.cellSize)),I=R.width/M,Y=I/b.aspectComp,K=Math.max(20,Math.floor(R.height/Y)),q=M,fe=K;xe&&xe.dispose(),xe=new bn(q,fe,{depthBuffer:!0,stencilBuffer:!1}),Ee=new Uint8Array(q*fe*4),Pe.width=q,Pe.height=fe,Pe.cellW=I,Pe.cellH=Y}Pe();function qe(){const M=Pe.width,I=Pe.height;T.fillStyle=b.bg,T.fillRect(0,0,R.width,R.height),T.fillStyle=b.fg;const Y=Math.max(8,Math.floor(Pe.cellH*b.fontScale));T.font=`${Y}px ${b.fontFamily}`,T.textAlign="left";const K=T.measureText("M").width||1,q=Pe.cellW/K;T.save(),T.scale(q,1);const fe=b.ramp,le=fe.length,Me=Math.max(Pe.cellH,Y*1.05);for(let de=0;de<I;de+=1){let ne="";for(let se=0;se<M;se+=1){const we=((I-1-de)*M+se)*4,me=Ee[we]/255,Ye=Ee[we+1]/255,O=Ee[we+2]/255;let ge=hA(me,Ye,O);ge=cA(ge,b.contrast),ge=uA(ge,b.gamma),b.invert&&(ge=1-ge);const oe=Math.floor(ge*(le-1));ne+=fe[oe]}T.fillText(ne,0,de*Me)}T.restore()}const Fe={alpha:0};function H(M){if(!$.ready)return;const I=Qo(M,0,1);if(!$.splitMode){he.position.set(0,0,0),ye.position.set(0,0,0);const de=lg(as(I,ir.rotateEnd,1)),ne=xh(as(I,0,ir.rotateEnd));re.rotation.set(0,vi(0,Math.PI*.85,ne),vi(0,Math.PI*.12,ne)),re.scale.setScalar(ae.baseScale*vi(1,1.35,de)),N.position.set(0,0,vi(ae.cameraStartZ,ae.cameraEndZ,de)),N.rotation.set(0,0,0);return}let Y=ae.startLeftX,K=ae.startRightX,q=ae.holdLeftY,fe=ae.holdRightY;if(I<=ir.enterEnd){const de=as(I,0,ir.enterEnd);Y=vi(ae.startLeftX,ae.holdLeftX,de),K=vi(ae.startRightX,ae.holdRightX,de)}else if(I<=ir.holdEnd)Y=ae.holdLeftX,K=ae.holdRightX;else{const de=xh(as(I,ir.holdEnd,ir.mergeEnd));Y=vi(ae.holdLeftX,0,de),K=vi(ae.holdRightX,0,de),q=vi(ae.holdLeftY,0,de),fe=vi(ae.holdRightY,0,de)}const le=xh(as(I,ir.mergeEnd,ir.rotateEnd)),Me=lg(as(I,ir.rotateEnd,1));he.position.set(Y,q,0),ye.position.set(K,fe,0),re.rotation.set(0,0,vi(0,Math.PI*.25,le)),re.scale.setScalar(ae.baseScale*vi(1,1.35,Me)),N.position.set(0,0,vi(ae.cameraStartZ,ae.cameraEndZ,Me)),N.rotation.set(0,0,0)}function U(M){const I=d>f?as(M,f,d):M>=f?1:0,Y=g===null?1:1-as(M,g,_);return Qo(I*Y,0,1)}function ft(M,I){const Y=M?.();return typeof Y=="number"&&Number.isFinite(Y)?lA(Y,I[0],I[1]):null}function Ze(){return ft(c,l)}function Se(){return typeof u=="function"?ft(u,h):Ze()}const ue=new Rs;function L(){W.uTime.value=ue.getElapsedTime();const M=Ze(),I=Se(),Y=$.ready&&typeof I=="number"?U(I):0;Math.abs(Y-Fe.alpha)>.001&&(Fe.alpha=Y,x.style.opacity=`${Y}`,y&&m&&(y.style.opacity=`${1-Y}`)),$.ready&&Y>.001&&typeof M=="number"&&(H(M),C.setRenderTarget(xe),C.render(P,N),C.setRenderTarget(null),C.readRenderTargetPixels(xe,0,0,xe.width,xe.height,Ee),qe()),requestAnimationFrame(L)}return L(),window.addEventListener("resize",()=>{const M=E();if(R.width=M.width,R.height=M.height,N.aspect=R.width/R.height,N.updateProjectionMatrix(),C.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),C.setSize(R.width,R.height),S(),Pe(),W.uResolution.value.set(R.width,R.height),He(),$.ready){const I=Ze();typeof I=="number"&&H(I)}}),{canvas:x}}const gA="#1a1a1a",Or={ramp:".'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:6,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.85,color:gA,opacity:.5};function ru(r,e,t){return Math.min(t,Math.max(e,r))}function _A(r,e,t){return .2126*r+.7152*e+.0722*t}function vA(r,e){return ru((r-.5)*e+.5,0,1)}function xA(r,e){return ru(Math.pow(r,e),0,1)}function yA(){const r=document.querySelector('canvas[data-component="roadmap-ascii"]');if(!r)return null;const e=r.closest(".section.cc-roadmap"),t=r.getContext("2d");if(!t)return null;const n=document.createElement("canvas"),i=new Cs({canvas:n,antialias:!1,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(1);const s=new As,o=new cu,a={uTime:{value:0},uScale:{value:2.55},uIntensity:{value:.88},uBase:{value:.05},uAmp:{value:.35},uResolution:{value:new ze(1,1)},uTint:{value:new F(1,1,1)}},l=new Cn({uniforms:a,depthWrite:!1,depthTest:!1,vertexShader:`
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
    `}),c=new Tt(new Tr(2,2),l);c.frustumCulled=!1,s.add(c);let u=null,h=null,f=1,d=1,g=1,_=1,m=1,p=1;const v=()=>{const T=r.getBoundingClientRect(),E=e?.getBoundingClientRect();f=Math.max(1,Math.floor(T.width||E?.width||1)),d=Math.max(1,Math.floor(T.height||E?.height||1));const R=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.floor(f*R)),r.height=Math.max(1,Math.floor(d*R)),r.style.width=`${f}px`,r.style.height=`${d}px`,t.setTransform(R,0,0,R,0,0),t.textBaseline="top",g=ru(Math.floor(f/Or.cellSize),32,220),m=f/g,p=m/Or.aspectComp,_=ru(Math.floor(d/p),18,140),u&&u.dispose(),u=new bn(g,_,{depthBuffer:!1,stencilBuffer:!1}),h=new Uint8Array(g*_*4),a.uResolution.value.set(f,d),i.setSize(g,_,!1)};v();const x=new ResizeObserver(v);x.observe(r),window.addEventListener("resize",v);const y=new Rs,b=()=>{if(!document.body.contains(r)){x.disconnect(),window.removeEventListener("resize",v),u?.dispose(),l.dispose(),c.geometry.dispose(),i.dispose();return}a.uTime.value=y.getElapsedTime(),i.setRenderTarget(u),i.render(s,o),i.setRenderTarget(null),i.readRenderTargetPixels(u,0,0,g,_,h),t.clearRect(0,0,f,d),t.fillStyle=Or.color,t.globalAlpha=Or.opacity;const T=Math.max(8,Math.floor(p*Or.fontScale));t.font=`${T}px monospace`;const E=Math.max(1,t.measureText("M").width),R=m/E;t.save(),t.scale(R,1);for(let S=0;S<_;S++){let w="";for(let P=0;P<g;P++){const B=((_-1-S)*g+P)*4,V=h[B]/255,k=h[B+1]/255,z=h[B+2]/255;let W=_A(V,k,z);W=vA(W,Or.contrast),W=xA(W,Or.gamma);const ee=Math.floor(W*(Or.ramp.length-1));w+=Or.ramp[ee]}const C=Math.max(p,T*1.04);t.fillText(w,0,S*C)}t.restore(),t.globalAlpha=1,requestAnimationFrame(b)};return requestAnimationFrame(b),{resize:v}}const SA="#fafafa",Ur={ramp:".'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:6,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.85,color:SA,opacity:.5};function ga(r,e,t){return Math.min(t,Math.max(e,r))}function MA(r,e,t){return .2126*r+.7152*e+.0722*t}function bA(r,e){return ga((r-.5)*e+.5,0,1)}function wA(r,e){return ga(Math.pow(r,e),0,1)}function TA(){const r=document.querySelector('canvas[data-component="grid-canvas"]');if(!r)return null;const e=r.closest(".section.cc-on-grid"),t=r.getContext("2d");if(!t)return null;const n=document.createElement("canvas"),i=new Cs({canvas:n,antialias:!1,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(1);const s=new As,o=new cu,a={uTime:{value:0},uScale:{value:2.55},uIntensity:{value:.88},uBase:{value:.05},uAmp:{value:.35},uResolution:{value:new ze(1,1)},uTint:{value:new F(1,1,1)}},l=new Cn({uniforms:a,depthWrite:!1,depthTest:!1,vertexShader:`
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
    `}),c=new Tt(new Tr(2,2),l);c.frustumCulled=!1,s.add(c);let u=null,h=null,f=1,d=1,g=1,_=1,m=1,p=1;const v=()=>{const T=r.getBoundingClientRect(),E=e?.getBoundingClientRect();f=Math.max(1,Math.floor(T.width||E?.width||1)),d=Math.max(1,Math.floor(T.height||E?.height||1));const R=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.floor(f*R)),r.height=Math.max(1,Math.floor(d*R)),r.style.width=`${f}px`,r.style.height=`${d}px`,t.setTransform(R,0,0,R,0,0),t.textBaseline="top",g=ga(Math.floor(f/Ur.cellSize),32,220),m=f/g,p=m/Ur.aspectComp,_=ga(Math.floor(d/p),18,140),u&&u.dispose(),u=new bn(g,_,{depthBuffer:!1,stencilBuffer:!1}),h=new Uint8Array(g*_*4),a.uResolution.value.set(f,d),i.setSize(g,_,!1)};v();const x=new ResizeObserver(v);x.observe(r),window.addEventListener("resize",v);const y=new Rs,b=()=>{if(!document.body.contains(r)){x.disconnect(),window.removeEventListener("resize",v),u?.dispose(),l.dispose(),c.geometry.dispose(),i.dispose();return}a.uTime.value=y.getElapsedTime(),i.setRenderTarget(u),i.render(s,o),i.setRenderTarget(null),i.readRenderTargetPixels(u,0,0,g,_,h),t.clearRect(0,0,f,d),t.fillStyle=Ur.color,t.globalAlpha=Ur.opacity;const T=Math.max(8,Math.floor(p*Ur.fontScale));t.font=`${T}px monospace`;const E=Math.max(1,t.measureText("M").width),R=m/E;t.save(),t.scale(R,1);for(let S=0;S<_;S++){let w="";for(let P=0;P<g;P++){const B=((_-1-S)*g+P)*4,V=h[B]/255,k=h[B+1]/255,z=h[B+2]/255;let W=MA(V,k,z);W=bA(W,Ur.contrast),W=wA(W,Ur.gamma);const ee=Math.floor(W*(Ur.ramp.length-1));w+=Ur.ramp[ee]}const C=Math.max(p,T*1.04);t.fillText(w,0,S*C)}t.restore(),t.globalAlpha=1,requestAnimationFrame(b)};return requestAnimationFrame(b),{resize:v}}function EA(){const r=document.querySelector('[data-component="grid-stack"]');if(!r)return null;const e=r.closest(".section.cc-on-grid")||r,t=Array.from(r.querySelectorAll("img, .grid_icon-preview"));if(!t.length)return null;const n=(t.length-1)*.5,i=34,s=24,o={tx:0,ty:0,x:0,y:0,active:!1};t.forEach(u=>{u.style.willChange="transform"});const a=()=>{o.x+=(o.tx-o.x)*.14,o.y+=(o.ty-o.y)*.14,t.forEach((u,h)=>{const d=h-n,g=o.x*d*1.05,_=o.y*d*.78;u.style.transform=`translate3d(${g}px, ${_}px, 0)`}),requestAnimationFrame(a)},l=u=>{if(u.pointerType==="touch")return;const h=e.getBoundingClientRect(),f=ga((u.clientX-h.left)/Math.max(h.width,1),0,1),d=ga((u.clientY-h.top)/Math.max(h.height,1),0,1);o.tx=-(f-.5)*2*i,o.ty=-(d-.5)*2*s,o.active=!0},c=()=>{o.active=!1,o.tx=0,o.ty=0};return e.addEventListener("pointermove",l,{passive:!0}),e.addEventListener("pointerleave",c),window.addEventListener("blur",c),requestAnimationFrame(a),{destroy(){e.removeEventListener("pointermove",l),e.removeEventListener("pointerleave",c),window.removeEventListener("blur",c)}}}const I0="#ffffff",or={ramp:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:7,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.86,color:I0,opacity:.92};function su(r,e,t){return Math.min(t,Math.max(e,r))}function AA(r,e,t){return .2126*r+.7152*e+.0722*t}function RA(r,e){return su((r-.5)*e+.5,0,1)}function CA(r,e){return su(Math.pow(r,e),0,1)}function cg(r,e=2.8){r.updateMatrixWorld(!0);const n=new Et().setFromObject(r).getSize(new F),i=Math.max(n.x,n.y,n.z);i>0&&r.scale.setScalar(e/i),r.updateMatrixWorld(!0);const o=new Et().setFromObject(r).getCenter(new F);r.position.sub(o)}function PA(r){const e=r<=767;return{targetSize:e?2.2:2.8,cameraZ:e?6.8:6,cameraY:e?.08:.14,cellSize:e?or.cellSize+1:or.cellSize}}function LA(){const r=document.querySelector('.section.cc-footer canvas[data-component="footer-canvas"]')||document.querySelector('canvas[data-component="footer-canvas"]');if(!r)return null;const e=r.closest(".section.cc-footer"),t=r.getContext("2d",{alpha:!0});if(!t)return null;const n=document.createElement("canvas"),i=new Cs({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"});i.setPixelRatio(1),i.setClearColor(0,0);const s=new As,o=new rn(38,1,.1,100),a=new Ma(16777215,.44),l=new Bn(16777215,1.12);l.position.set(3.6,2.8,4.2);const c=new Bn(16777215,.6);c.position.set(-2.5,1.8,-3.8),s.add(a,l,c);const u={uTime:{value:0},uScale:{value:2.5},uIntensity:{value:.9},uBase:{value:.08},uAmp:{value:.115},uResolution:{value:new ze(1,1)},uTint:{value:new F(1,1,1)}},h=new Cn({uniforms:u,depthWrite:!1,depthTest:!1,transparent:!0,vertexShader:`
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
    `}),f=new Tt(new Tr(2,2),h);f.frustumCulled=!1,f.renderOrder=-1e3,s.add(f);const d=new Ht;s.add(d),new wa().load((()=>{const C=new URL(import.meta.url),P=C.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//);return P?`${P[1]}/models/logo_split.glb`:`${C.origin}/models/logo_split.glb`})(),C=>{const P=C.scene.clone(!0);P.traverse(N=>{if(!N.isMesh)return;N.castShadow=!1,N.receiveShadow=!1;const B=new Zr({color:new Ke(I0),metalness:.08,roughness:.62});N.material=B}),cg(P),d.clear(),d.add(P)},void 0,C=>console.error("Failed to load footer GLB:",C));let _=null,m=null,p=1,v=1,x=1,y=1,b=1,T=1;const E=()=>{const C=r.getBoundingClientRect(),P=e?.getBoundingClientRect();p=Math.max(1,Math.floor(C.width||P?.width||1)),v=Math.max(1,Math.floor(C.height||P?.height||1));const N=PA(p),B=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.floor(p*B)),r.height=Math.max(1,Math.floor(v*B)),r.style.width=`${p}px`,r.style.height=`${v}px`,t.setTransform(B,0,0,B,0,0),t.textBaseline="top",o.aspect=p/v,o.position.set(0,N.cameraY,N.cameraZ),o.lookAt(0,0,0),o.updateProjectionMatrix(),x=su(Math.floor(p/N.cellSize),24,220),b=p/x,T=b/or.aspectComp,y=su(Math.floor(v/T),18,140),_&&_.dispose(),_=new bn(x,y,{depthBuffer:!0,stencilBuffer:!1}),m=new Uint8Array(x*y*4),i.setSize(x,y,!1),u.uResolution.value.set(p,v),d.children[0]&&cg(d.children[0],N.targetSize)};E();const R=new ResizeObserver(E);R.observe(r),window.addEventListener("resize",E);const S=new Rs,w=()=>{if(!document.body.contains(r)){R.disconnect(),window.removeEventListener("resize",E),_?.dispose(),h.dispose(),f.geometry.dispose(),i.dispose();return}const C=S.getElapsedTime();u.uTime.value=C,d.children[0]&&(d.rotation.y=C*.16,d.rotation.x=Math.sin(C*.35)*.08),i.setRenderTarget(_),i.render(s,o),i.setRenderTarget(null),i.readRenderTargetPixels(_,0,0,x,y,m),t.clearRect(0,0,p,v),t.fillStyle=or.color,t.globalAlpha=or.opacity;const P=Math.max(8,Math.floor(T*or.fontScale));t.font=`${P}px monospace`;const N=Math.max(1,t.measureText("M").width),B=b/N;t.save(),t.scale(B,1);for(let V=0;V<y;V++){let k="";for(let W=0;W<x;W++){const D=((y-1-V)*x+W)*4,Q=m[D]/255,re=m[D+1]/255,he=m[D+2]/255;let ye=AA(Q,re,he);ye=RA(ye,or.contrast),ye=CA(ye,or.gamma);const ae=Math.floor(ye*(or.ramp.length-1));k+=or.ramp[ae]}const z=Math.max(T,P*1.04);t.fillText(k,0,V*z)}t.restore(),t.globalAlpha=1,requestAnimationFrame(w)};return requestAnimationFrame(w),{resize:E}}const DA="#5491ff",IA={trading:"trading.glb",payments:"payements.glb","financial rails":"railways.glb",messaging:"messaging.glb",privacy:"security.glb","social coordination":"social.glb"},$i={ramp:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:4,aspectComp:.55,fontScale:1,contrast:1.2,gamma:.9,color:DA,backgroundCutoff:.08,modelAlphaCutoff:.02};function ou(r,e,t){return Math.min(t,Math.max(e,r))}function ug(r){return r.replace(/\[/g,"").replace(/\]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function NA(r){const e=new URL(import.meta.url),t=e.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//);return`${t?t[1]:e.origin}/models/features/${r}`}function hg(r,e=3.2){r.updateMatrixWorld(!0);const n=new Et().setFromObject(r).getSize(new F),i=Math.max(n.x,n.y,n.z);if(i>0){const a=e/i;r.scale.setScalar(a)}r.updateMatrixWorld(!0);const o=new Et().setFromObject(r).getCenter(new F);r.position.sub(o)}function fg(r){const e=r<=767;return{isMobile:e,targetModelSize:e?2.45:3.2,cameraY:e?.1:.15,cameraZ:e?6.8:6,asciiCellSize:e?$i.cellSize+1:$i.cellSize}}function OA(r,e,t){return .2126*r+.7152*e+.0722*t}function UA(r,e){return ou((r-.5)*e+.5,0,1)}function FA(r,e){return ou(Math.pow(r,e),0,1)}function BA(){const r=document.querySelector('[data-component="features"]');if(!r)return null;const t=r.closest(".section, .cc-system, .cc-features")?.querySelector('canvas[data-component="features-canvas"]')??null;if(!t)return null;const n=t.getContext("2d",{alpha:!0});if(!n)return null;const i=Array.from(r.querySelectorAll(".system-tabs_btn"));if(!i.length)return null;const s=Q=>{i.forEach(re=>{const he=re===Q;re.classList.toggle("is-active",he),re.setAttribute("aria-pressed",String(he)),re.dataset.active=he?"true":"false";const ye=re.closest(".system-tabs_list-item");ye&&(ye.classList.toggle("is-active",he),ye.dataset.active=he?"true":"false")})},o=document.createElement("canvas"),a=new Cs({canvas:o,antialias:!0,alpha:!0,powerPreference:"high-performance"});a.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),a.setClearColor(0,0);const l=new As,c=new rn(36,1,.1,100);c.position.set(0,.15,6);const u=new Ma(16777215,.45),h=new Bn(16777215,1.25);h.position.set(3.5,3,4.5);const f=new Bn(16777215,.55);f.position.set(-3,2,-4),l.add(u,h,f);const d={uTime:{value:0},uScale:{value:2.5},uIntensity:{value:.88},uBase:{value:0},uAmp:{value:0},uResolution:{value:new ze(1,1)},uTint:{value:new F(1,1,1)}};new Cn({uniforms:d,depthWrite:!1,depthTest:!1,vertexShader:`
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
    `});const g=new Ht;l.add(g);const _=new wa,m=new Map;let p=null,v=0,x=null,y=null,b=1,T=1,E=1,R=1,S=1,w=1;const C=()=>{const Q=t.getBoundingClientRect();b=Math.max(1,Math.floor(Q.width)),T=Math.max(1,Math.floor(Q.height));const re=fg(b),he=Math.min(window.devicePixelRatio||1,2);t.width=Math.max(1,Math.floor(b*he)),t.height=Math.max(1,Math.floor(T*he)),t.style.width=`${b}px`,t.style.height=`${T}px`,n.setTransform(he,0,0,he,0,0),n.textBaseline="top",c.aspect=b/T,c.position.set(0,re.cameraY,re.cameraZ),c.updateProjectionMatrix(),E=ou(Math.floor(b/re.asciiCellSize),22,220),S=b/E,w=S/$i.aspectComp,R=ou(Math.floor(T/w),16,140),x&&x.dispose(),x=new bn(E,R,{depthBuffer:!0,stencilBuffer:!1}),y=new Uint8Array(E*R*4),a.setSize(E,R,!1),d.uResolution.value.set(b,T),p&&hg(p,re.targetModelSize)};C();const P=new ResizeObserver(C);P.observe(t),window.addEventListener("resize",C);const N=Q=>new Promise((re,he)=>{_.load(Q,ye=>re(ye.scene),void 0,he)}),B=async Q=>{const re=ug(Q.textContent||""),he=IA[re];if(!he)return;s(Q);const ye=++v,ae=NA(he);try{if(!m.has(ae)){const ce=await N(ae);m.set(ae,ce)}if(ye!==v)return;const $=m.get(ae).clone(!0);$.traverse(ce=>{ce.isMesh&&(ce.castShadow=!1,ce.receiveShadow=!1,ce.material=ce.material.clone(),ce.material.color&&ce.material.color.set("#ffffff"))});const J=fg(b);hg($,J.targetModelSize),g.clear(),g.add($),p=$}catch($){console.error(`Failed to load feature model: ${he}`,$)}};i.forEach(Q=>{Q.setAttribute("aria-pressed","false"),Q.dataset.active="false",Q.addEventListener("click",()=>{B(Q)})});const V=i.find(Q=>ug(Q.textContent||"")==="trading")||i[0];B(V);const k=new Rs,z=.6,W=.12,ee=()=>{if(!y)return;n.clearRect(0,0,b,T),n.fillStyle=$i.color;const Q=Math.max(8,Math.floor(w*$i.fontScale));n.font=`${Q}px monospace`;const re=Math.max(1,n.measureText("M").width),he=S/re;n.save(),n.scale(he,1);for(let ye=0;ye<R;ye++){let ae="";for(let J=0;J<E;J++){const Ne=((R-1-ye)*E+J)*4,Te=y[Ne]/255,He=y[Ne+1]/255,xe=y[Ne+2]/255;if(y[Ne+3]/255<$i.modelAlphaCutoff){ae+=" ";continue}let Pe=OA(Te,He,xe);if(Pe=UA(Pe,$i.contrast),Pe=FA(Pe,$i.gamma),Pe<$i.backgroundCutoff){ae+=" ";continue}const qe=Math.floor(Pe*($i.ramp.length-1));ae+=$i.ramp[qe]}const $=Math.max(w,Q*1.04);n.fillText(ae,0,ye*$)}n.restore()},D=()=>{if(!document.body.contains(t)){P.disconnect(),window.removeEventListener("resize",C),x?.dispose(),a.dispose();return}const Q=k.getDelta(),re=k.elapsedTime;p&&(g.rotation.y+=z*Q,g.rotation.x=Math.sin(re*.85)*W),a.setRenderTarget(x),a.render(l,c),a.setRenderTarget(null),a.readRenderTargetPixels(x,0,0,E,R,y),ee(),requestAnimationFrame(D)};return requestAnimationFrame(D),{destroy(){P.disconnect(),window.removeEventListener("resize",C),x?.dispose(),a.dispose()}}}const dg={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.008}};function kA(r){const e=(r.dataset.splitType||r.dataset.split||"").trim().toLowerCase();return e==="lines"||e==="words"||e==="chars"||e==="letters"?e==="letters"?"chars":e:r.tagName.toLowerCase()==="p"?"words":"lines"}function yh(r,e,t){const n=r.dataset[e],i=Number.parseFloat(n);return Number.isFinite(i)?i:t}function zA(r,e,t){const n=t.create(r,{type:"lines, words, chars",mask:"lines",linesClass:"line",wordsClass:"word",charsClass:"letter"});return e==="words"?n.words||[]:e==="chars"?n.chars||[]:n.lines||[]}function VA(r){r.forEach(e=>{e.style.position="relative",e.style.display="inline-block",e.style.backgroundImage="linear-gradient(var(--_color---neutral--gray-matter), var(--_color---neutral--gray-matter))",e.style.backgroundRepeat="no-repeat",e.style.backgroundPosition="0 100%",e.style.backgroundSize="0% 100%",e.style.boxDecorationBreak="clone",e.style.webkitBoxDecorationBreak="clone",e.style.padding="0.03em 0.18em 0.07em",e.style.margin="0 0 0.08em"})}function HA(r={}){const e=r.gsap||window.gsap,t=r.ScrollTrigger||window.ScrollTrigger,n=window.SplitText,i=window.CustomEase;if(!e||!t||!n)return!1;e.registerPlugin(t,n),i?.create&&(i.create("osmo-ease","0.625, 0.05, 0, 1"),e.registerPlugin(i));const s=document.querySelectorAll('[data-split]:not([data-split-ignore="true"])');return s.length&&(s.forEach(o=>{if(o.dataset.splitInitialized==="true")return;const a=kA(o),l=dg[a]||dg.lines,c=yh(o,"splitDuration",l.duration),u=yh(o,"splitStagger",l.stagger),h=o.dataset.splitStart||"top 85%",f=o.dataset.splitOnce!=="false",d=zA(o,a,n);if(!d.length){o.dataset.splitInitialized="true";return}const g=a==="lines"&&o.dataset.splitHighlight==="true";g&&VA(d),e.fromTo(d,{yPercent:110},{yPercent:0,duration:c,stagger:u,ease:"osmo-ease",onComplete:()=>{if(!g)return;const _=yh(o,"splitHighlightDelay",.02);e.to(d,{backgroundSize:"100% 100%",duration:.34,stagger:.08,delay:_,ease:"power2.out"})},scrollTrigger:{trigger:o,start:h,once:f,toggleActions:f?"play none none none":"play reverse play reverse"}}),o.dataset.splitInitialized="true"}),t.refresh()),!0}const GA=768;function WA(){return window.innerWidth<=GA}function XA(){if(WA())return null;const r=document.createElement("div");r.id="cursor",r.style.cssText=`
    position: fixed;
    left: 0; top: 0;
    width: 10px; height: 10px;
    border-radius: 999px;
    background: #5491ff;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 9999;
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
    z-index: 10000;
    opacity: 0;
    white-space: nowrap;
    text-shadow: 0 1px 0 #ffffff;
    transition: color 0.15s ease-out, text-shadow 0.15s ease-out;
  `,document.body.appendChild(r),document.body.appendChild(e);const t={x:window.innerWidth*.5,y:window.innerHeight*.5,active:!1},n={x:0,y:-14},i={x:14,y:-24};let s=t.x,o=t.y,a=t.x+i.x,l=t.y+i.y;const c=.12,u=x=>{t.x=x.clientX,t.y=x.clientY,t.active=!0,r.style.opacity="1",e.style.opacity="1",e.textContent=`${Math.round(t.x)}, ${Math.round(t.y)}`};window.addEventListener("pointermove",u,{passive:!0}),window.addEventListener("pointerdown",u,{passive:!0}),window.addEventListener("pointerleave",()=>{t.active=!1,r.style.opacity="0",e.style.opacity="0"});const h=()=>{if(t.active){const x=t.x+n.x,y=t.y+n.y;s+=(x-s)*c,o+=(y-o)*c,r.style.left=`${s}px`,r.style.top=`${o}px`;const b=t.x+i.x,T=t.y+i.y;a+=(b-a)*c,l+=(T-l)*c,e.style.left=`${a}px`,e.style.top=`${l}px`}requestAnimationFrame(h)};requestAnimationFrame(h);const f=x=>{if(!x)return!1;const y=x.tagName.toLowerCase(),b=x.getAttribute("role"),T=["button","link","menuitem","tab","option"];return y==="button"||y==="a"||y==="input"||y==="textarea"||y==="select"||x.onclick||T.includes(b)||x.style.cursor==="pointer"||window.getComputedStyle(x).cursor==="pointer"},d=()=>{r.style.transform="translate(-50%, -50%) scale(2)"},g=()=>{r.style.transform="translate(-50%, -50%) scale(1)"};document.addEventListener("mouseover",x=>{f(x.target)&&d()}),document.addEventListener("mouseout",x=>{f(x.target)&&g()});const _=[".section.cc-stats"],m=x=>x?_.some(y=>{const b=document.querySelectorAll(y);return Array.from(b).some(T=>T.contains(x))}):!1,p=()=>{r.style.background="#ffffff",e.style.color="#ffffff",e.style.textShadow="0 1px 2px rgba(0,0,0,0.5)"},v=()=>{r.style.background="#5491ff",e.style.color="#1a1a1a",e.style.textShadow="0 1px 0 #ffffff"};return document.addEventListener("mouseover",x=>{m(x.target)&&p()}),document.addEventListener("mouseout",x=>{m(x.target)&&v()}),{cursor:r,cursorLabel:e}}const YA=[".section.cc-stats"];function qA(r){if(!r)return!1;const e=r.getBoundingClientRect(),t=e.bottom;return YA.some(n=>{const i=document.querySelectorAll(n);return Array.from(i).some(s=>{const o=s.getBoundingClientRect();return t>o.top&&e.top<o.bottom})})}function $A(){const r=document.querySelector(".nav");if(!r)return;const e=20,t=()=>{const n=window.scrollY>e;r.classList.toggle("scrolled",n);const i=qA(r);r.classList.toggle("is-on-blue",i)};return t(),window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t,{passive:!0}),{nav:r,threshold:e}}const jA=768;function KA(){return window.innerWidth<=jA}function ZA(r){if(/^https?:\/\//i.test(r))return r;const e=new URL(import.meta.url),t=e.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//),n=t?t[1]:e.origin,i=r.startsWith("/")?r:`/${r}`;return`${n}${i}`}function au(r,e,t){return Math.min(t,Math.max(e,r))}function JA(r,e,t){return .2126*r+.7152*e+.0722*t}function QA(r,e){return au((r-.5)*e+.5,0,1)}function eR(r,e){return au(Math.pow(r,e),0,1)}const rr={ramp:" .'`^\",:;Il!i<>~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:8,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.85,color:"#ffffff",opacity:.75,verticalStart:.7};function tR(){const r=document.querySelector('[data-component="stats-canvas"]');if(!r)return console.log("[Stats ASCII] Canvas not found"),null;const e=document.querySelector(".cc-stats");if(!e)return console.log("[Stats ASCII] Stats section not found"),null;const t=r.getContext("2d",{alpha:!0});if(!t)return null;let n=!1,i=null,s=null,o=null,a=1,l=1,c=1,u=1,h=1,f=1;const d=document.createElement("canvas"),g=new Cs({canvas:d,antialias:!1,alpha:!0,powerPreference:"high-performance"});g.setPixelRatio(1),g.setClearColor(0,0);const _=new As,m=new rn(45,1,.1,100),p=new Ma(16777215,.5),v=new Bn(16777215,1);v.position.set(5,5,5);const x=new Bn(16777215,.5);x.position.set(-2,3,-4),_.add(p,v,x);const y=()=>{const w=r.getBoundingClientRect(),C=e?.getBoundingClientRect();h=Math.max(1,Math.floor(w.width||C?.width||1)),f=Math.max(1,Math.floor(w.height||C?.height||1));const P=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.floor(h*P)),r.height=Math.max(1,Math.floor(f*P)),r.style.width=`${h}px`,r.style.height=`${f}px`,t.setTransform(P,0,0,P,0,0),t.textBaseline="top",a=au(Math.floor(h/rr.cellSize),32,180),c=h/a,u=c/rr.aspectComp,l=au(Math.floor(f/u),20,120),s&&s.dispose(),s=new bn(a,l,{depthBuffer:!0,stencilBuffer:!1}),o=new Uint8Array(a*l*4),g.setSize(a,l,!1),m.aspect=h/f,m.updateProjectionMatrix(),m.position.set(0,4,8),m.lookAt(0,-2,0)},b=()=>{if(n)return;n=!0,console.log("[Stats ASCII] Loading earth model..."),y(),new wa().load(ZA("/models/earth.glb"),C=>{i=C.scene;const P=new Et().setFromObject(i),N=P.getCenter(new F),B=P.getSize(new F),V=Math.max(B.x,B.y,B.z),z=(KA()?2.2:3)/V;i.position.sub(N),i.scale.setScalar(z),i.position.y=-2.8,i.traverse(W=>{W.isMesh&&(W.material=new Zr({color:16777215,metalness:.1,roughness:.3}))}),_.add(i),console.log("[Stats ASCII] Model loaded, starting animation"),E()},void 0,C=>{console.error("[Stats ASCII] Failed to load model:",C)})},T=new Rs,E=()=>{if(!document.body.contains(r)){R.disconnect(),window.removeEventListener("resize",y),s?.dispose(),g.dispose();return}const w=T.getElapsedTime();i&&(i.rotation.y=w*.15),g.setRenderTarget(s),g.render(_,m),g.setRenderTarget(null),g.readRenderTargetPixels(s,0,0,a,l,o),t.clearRect(0,0,h,f),t.fillStyle=rr.color,t.globalAlpha=rr.opacity;const C=Math.max(8,Math.floor(u*rr.fontScale));t.font=`${C}px monospace`;const P=Math.max(1,t.measureText("M").width),N=c/P;t.save(),t.scale(N,1);const B=Math.floor(l*(1-rr.verticalStart)),V=l-B;for(let k=0;k<B;k++){let z="";const W=V+(B-1-k);for(let D=0;D<a;D++){const Q=(W*a+D)*4,re=o[Q]/255,he=o[Q+1]/255,ye=o[Q+2]/255;let ae=JA(re,he,ye);ae=QA(ae,rr.contrast),ae=eR(ae,rr.gamma);const $=Math.floor(ae*(rr.ramp.length-1));z+=rr.ramp[$]}const ee=Math.max(u,C*1.04);t.fillText(z,0,k*ee)}t.restore(),t.globalAlpha=1,requestAnimationFrame(E)},R=new IntersectionObserver(w=>{w.forEach(C=>{C.isIntersecting&&!n&&(console.log("[Stats ASCII] Section in view - loading model"),b())})},{threshold:.1,rootMargin:"0px 0px -10% 0px"});return R.observe(e),console.log("[Stats ASCII] Intersection Observer attached to stats section"),new ResizeObserver(y).observe(r),window.addEventListener("resize",y),{observer:R,resize:y}}Al.registerPlugin(ot);function nR(){const r=document.querySelector(".roadmap_grid");if(!r)return console.log("[Roadmap] Grid not found"),null;const e=r.querySelectorAll(".roadmap_item");if(!e.length)return console.log("[Roadmap] No items found"),null;console.log(`[Roadmap] Found ${e.length} items, setting up animations`),Al.set(e,{filter:"blur(8px)",scale:1.125,opacity:.8});const t=[];return e.forEach((n,i)=>{const s=ot.create({trigger:n,start:"top 85%",end:"top 50%",scrub:.5,onUpdate:o=>{const a=o.progress;Al.to(n,{filter:`blur(${8*(1-a)}px)`,scale:1.125-.125*a,opacity:.8+.2*a,duration:.1,ease:"none",overwrite:!0})}});t.push(s)}),console.log("[Roadmap] Animations setup complete"),{items:e,triggers:t,destroy(){t.forEach(n=>n.kill())}}}const N0=location.hostname.includes(".webflow.io")||location.hostname.endsWith("webflow.io");N0||Z0(()=>Promise.resolve({}),__vite__mapDeps([0]));const vt=window.gsap||Al,Gi=window.ScrollTrigger||ot;if(window.__GENLABS_MAIN_BOOTED__)throw new Error("GEN Labs main.js initialized more than once");window.__GENLABS_MAIN_BOOTED__=!0;Gi&&vt.registerPlugin(Gi);let Mc=null;function iR(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;Mc=new qE({duration:1,smoothWheel:!0,smoothTouch:!1,wheelMultiplier:1,touchMultiplier:1}),Mc.on("scroll",()=>{Gi?.update()});const e=t=>{Mc.raf(t),requestAnimationFrame(e)};requestAnimationFrame(e),window.__GENLABS_LENIS__=Mc}iR();const O0=new URL(import.meta.url),pg=O0.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//),rR=pg?pg[1]:O0.origin;function Ll(r){const e=r.replace(/^\//,"");return`${rR}/${e}`}function Vo(...r){return document.querySelector(r.join(", "))}const Zn={panelHero:Vo(".cc-hero",".panel-hero"),panelUnder:Vo(".cc-about",".panel-under"),panelConverge:Vo(".cc-convergence",".cc-benefits",".panel-converge"),panelStats:Vo(".cc-stats")};Zn.underCopy=Vo('[data-text="about-intro"]','[data-text="about-into"]',".under-copy",".cc-about .h3.u-text-center:not(.u-text-primary)");Zn.underHighlight=Vo('[data-text="about-outro"]',".under-highlight",".cc-about .u-text-primary");Zn.underCopy&&(Zn.underCopy.dataset.splitIgnore="true");Zn.underHighlight&&(Zn.underHighlight.dataset.splitIgnore="true");const sR=940,en=()=>window.innerWidth<=sR,oR=()=>document.querySelector("#grid-stage .grid-stage-sticky")||document.querySelector(".grid-stage-sticky"),U0=()=>{const r=oR(),e=document.querySelector(".cc-stats");return!!(r&&e&&r.contains(e))},aR=U0();en()||(Zn.panelConverge&&(Zn.panelConverge.style.opacity="0"),Zn.panelStats&&aR&&(Zn.panelStats.style.opacity="0",Zn.panelStats.style.visibility="visible"));const lR=document.fonts?.ready||Promise.resolve();lR.then(()=>{let r=0;const e=40,t=()=>{HA({gsap:vt,ScrollTrigger:Gi})||(r+=1,r<=e&&window.setTimeout(t,120))};t()});const Xn={heroTitle:'[data-text="hero-title"], .hero-title',panelHero:".cc-hero, .panel-hero",panelUnder:".cc-about, .panel-under",panelConverge:".cc-convergence, .cc-benefits, .panel-converge",panelStats:".cc-stats",underCopy:'[data-text="about-intro"], [data-text="about-into"], .under-copy, .cc-about .h3.u-text-center:not(.u-text-primary)',underHighlight:'[data-text="about-outro"], .under-highlight, .cc-about .u-text-primary'},Kd=()=>!!document.querySelector(".cc-convergence .convergence-video, .cc-benefits .convergence-video, .convergence-video"),mg=()=>{const r=document.querySelector("#grid-stage"),e=document.querySelector("#grid-stage-scroll"),t=document.querySelector("#scroll-spacer");return{stage:r,runway:e,trigger:r||e||t||document.body}};N0&&("scrollRestoration"in history&&(history.scrollRestoration="manual"),window.scrollTo(0,0),window.addEventListener("load",()=>{window.scrollTo(0,0),requestAnimationFrame(()=>window.scrollTo(0,0))},{once:!0}));let Zd=!0;console.log("ASCII enabled:",Zd);let Sh=null,vn=null,Vs=null,Hs=null;const Mh=new Map,Js=new Ht;let jf=null,Kf=null,F0=.16,bh=0;const Sn={ramp:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",invert:!1,cellSize:5,aspectComp:.55,fontFamily:"monospace",fontScale:1,contrast:1.15,gamma:.9,bg:"#ffffff",fg:"#125fee"},Es=new Vd({title:"ASCII"});Es.hide();let wh=!1;window.addEventListener("keydown",r=>{if(r.repeat||r.key.toLowerCase()!=="g"||r.ctrlKey||r.metaKey||r.altKey)return;const e=document.activeElement?.tagName;e==="INPUT"||e==="TEXTAREA"||document.activeElement?.isContentEditable||(wh=!wh,wh?Es.show():Es.hide())});const _a={pixelation:Sn.cellSize,matrix:!1,characters:Sn.ramp,fontSize:Math.round(Sn.fontScale*58),invert:Sn.invert,asciiColor:Sn.fg,noiseTint:"#5491FF",logoColor:"#ffffff"};Es.addColor(_a,"asciiColor").name("ASCII COLOR").onChange(r=>{Sn.fg=r});Es.add(_a,"pixelation",4,24,1).name("PIXELATION").onChange(r=>{Sn.cellSize=r,Fi()});Es.add(_a,"characters").name("CHARACTERS").onFinishChange(r=>{_a.characters=r,Sn.ramp=r});const cR={ascii:!0};Es.add(cR,"ascii").name("ASCII MODE").onChange(r=>{Zd=r,_s.style.display=r?"block":"none",Jr.style.display=r?"none":"block"});const Ft={width:window.innerWidth,height:window.innerHeight},_s=document.querySelector("#ascii");if(!_s)throw new Error("Missing #ascii canvas in DOM");const si=_s.getContext("2d",{alpha:!1});function B0(){const r=Math.min(window.devicePixelRatio||1,2);_s.width=Math.floor(Ft.width*r),_s.height=Math.floor(Ft.height*r),_s.style.width=`${Ft.width}px`,_s.style.height=`${Ft.height}px`,si.setTransform(r,0,0,r,0,0),si.fillStyle=Sn.bg,si.fillRect(0,0,Ft.width,Ft.height),si.textBaseline="top"}B0();const Jr=document.createElement("canvas"),ji=new Cs({canvas:Jr,antialias:!0,alpha:!1,powerPreference:"high-performance"});Jr.className="webgl";document.body.appendChild(Jr);Jr.style.position="fixed";Jr.style.inset="0";Jr.style.width="100%";Jr.style.height="100%";Jr.style.display="none";ji.setPixelRatio(Math.min(window.devicePixelRatio,2));ji.setSize(Ft.width,Ft.height);ji.shadowMap.enabled=!1;ji.shadowMap.type=yg;const{cursor:NR}=XA()||{},gg="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",Th=new WeakMap;function uR(r){const e=r.dataset.scrambleText||r.textContent.trim();r.dataset.scrambleText=e;const t=Th.get(r);t?.tween&&t.tween.kill();const n={progress:0},i=.32,s=vt.to(n,{progress:1,duration:.55,ease:"power2.out",onUpdate:()=>{const o=Math.max(0,(n.progress-i)/(1-i)),a=Math.floor(e.length*o);let l="";for(let c=0;c<e.length;c++){const u=e[c];if(u===" "){l+=" ";continue}if(c<a){l+=u;continue}const h=Math.floor(Math.random()*gg.length);l+=gg[h]}r.textContent=l},onComplete:()=>{r.textContent=e,Th.set(r,{tween:null})}});Th.set(r,{tween:s})}function hR(){document.querySelectorAll(".nav-links a, .nav-link.w-nav-link").forEach(e=>{e.dataset.scrambleText=e.textContent.trim();const t=()=>{uR(e)};e.addEventListener("pointerenter",t),e.addEventListener("focus",t)})}hR();$A();tR();nR();function fR(){const r=document.querySelector(Xn.panelConverge),e=r?.querySelector(".converge-label-left"),t=r?.querySelector(".converge-label-right"),n=r?.querySelector(".converge-hover-card-left"),i=r?.querySelector(".converge-hover-card-right");if(!r||!e||!t||!n||!i)return;const s=(a,l,c)=>Math.min(c,Math.max(l,a));[{label:e,card:n,side:"left"},{label:t,card:i,side:"right"}].forEach(({label:a,card:l,side:c})=>{const u={active:!1,pointerX:window.innerWidth*.5,pointerY:window.innerHeight*.5},h=vt.quickTo(l,"x",{duration:.3,ease:"power3.out"}),f=vt.quickTo(l,"y",{duration:.3,ease:"power3.out"}),d=()=>{const v=a.getBoundingClientRect();if(v.width<8||v.height<8)return!1;const x=Number(vt.getProperty(r,"opacity"))||0,y=Number(vt.getProperty(a,"opacity"))||0;return x>.12&&y>.12},g=(v,x)=>{const y=a.getBoundingClientRect(),b=Math.max(24,y.width*.3),T=Math.max(14,y.height*.8);return v>=y.left-b&&v<=y.right+b&&x>=y.top-T&&x<=y.bottom+T},_=(v=!1)=>{const x=a.getBoundingClientRect(),y=l.offsetWidth,b=l.offsetHeight,T=x.left+x.width*.5-y*.5,E=x.bottom+18,R=x.width>0?(u.pointerX-x.left)/x.width-.5:0,S=x.height>0?(u.pointerY-x.top)/x.height-.5:0,w=R*54,C=S*20,P=18,N=14,B=c==="left"?P:window.innerWidth*.5+N,V=c==="left"?window.innerWidth*.5-y-N:window.innerWidth-y-P,k=s(T+w,B,Math.max(B,V)),z=s(E+C,x.bottom+8,window.innerHeight-b-P);if(v){vt.set(l,{x:k,y:z});return}h(k),f(z)},m=()=>{u.active||(u.active=!0,vt.to(l,{autoAlpha:1,scale:1,duration:.2,ease:"power2.out",overwrite:!0}),_(!0))},p=()=>{u.active&&(u.active=!1,vt.to(l,{autoAlpha:0,scale:.96,duration:.16,ease:"power2.out",overwrite:!0}))};window.addEventListener("pointermove",v=>{if(v.pointerType!=="touch"){if(u.pointerX=v.clientX,u.pointerY=v.clientY,!d()||!g(u.pointerX,u.pointerY)){p();return}m(),_()}},{passive:!0}),window.addEventListener("scroll",()=>{if(u.active){if(!d()||!g(u.pointerX,u.pointerY)){p();return}_(!0)}},{passive:!0}),window.addEventListener("pointerleave",p),window.addEventListener("resize",()=>{u.active&&_(!0)})}),vt.set(".converge-hover-card",{autoAlpha:0,scale:.96})}fR();function k0(r){return new Promise(e=>{let t=0;const n=80,i=()=>{try{const s=window.Webflow?.require?.("lottie")?.lottie;if(s){const o=document.querySelector(r);if(o){const l=s.getRegisteredAnimations()?.find(c=>c.wrapper?c.wrapper===o||o.contains(c.wrapper)||c.wrapper.contains(o):!1);if(l&&l.isLoaded!==!1&&(l.animationData||l.totalFrames>0)){l.pause(),l.autoplay=!1,l.loop=!1;const c=l.animationData?.ip??0;l.goToAndStop(c,!0),console.log(`[getWebflowLottie] found "${r}" after ${t+1} attempts, totalFrames:`,l.totalFrames,"currentFrame:",l.currentFrame),e(l);return}}}}catch(s){t%20===0&&console.warn(`[getWebflowLottie] polling "${r}", attempt ${t}:`,s.message)}++t<n?setTimeout(i,100):(console.warn(`[getWebflowLottie] gave up looking for "${r}" after ${n} attempts`),e(null))};window.Webflow&&typeof window.Webflow.push=="function"?window.Webflow.push(()=>i()):i()})}function dR(){const r=document.querySelector(".stats-arc");if(!r){console.warn("[Stats Lottie] .stats-arc element not found in DOM");return}console.log("[Stats Lottie] .stats-arc found, waiting for Webflow lottie"),k0(".stats-arc").then(e=>{if(!e){console.warn("[Stats Lottie] ❌ could not find Webflow lottie for .stats-arc after polling");return}e.goToAndStop(0,!0),e.pause(),console.log("[Stats Lottie] ✅ Webflow lottie ready, paused at frame 0");const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(console.log("[Stats Lottie] in view — playing animation"),e.play(),t.disconnect())})},{threshold:.3,rootMargin:"0px 0px -10% 0px"});t.observe(r),console.log("[Stats Lottie] Intersection Observer attached"),window.__GENLABS_STATS_LOTTIE__=e})}dR();const z0="top top",V0="bottom top",H0=.6,G0=r=>Math.max(0,Math.min(1,r));function W0(r){const e=window.__GENLABS_STAGE_TIMING__,t=e?.convergeIn??.56,n=e?.convergeGlbStart??t,i=e?.statsIn??DESKTOP_STATS_IN,s=Math.min(i-1e-4,Math.max(t,n)),o=Math.max(1e-4,i-s);return G0((r-s)/o)}function pR(){document.querySelector(".convergence-lottie")&&k0(".convergence-lottie").then(r=>{if(!r){console.warn("[Convergence Lottie] could not find Webflow lottie for .convergence-lottie");return}const e=r.animationData?.ip??0,t=r.animationData?.op??r.totalFrames,n=t-e;let i=-1,s=0,o=!1;const a=l=>{const c=Math.round(e+Math.max(0,Math.min(1,l))*n);c!==i&&(i=c,r.goToAndStop(c,!0))};if(r.playSegments([e,t],!0),r.pause(),r.goToAndStop(e,!0),typeof r.resize=="function"&&r.resize(),console.log("[Convergence Lottie] ready — ip:",e,"op:",t,"span:",n,"totalFrames:",r.totalFrames),en()){const l=document.querySelector(".cc-convergence")||document.querySelector(".cc-benefits");l&&Gi&&Gi.create({trigger:l,start:z0,end:V0,scrub:H0,onUpdate:c=>{!o&&c.progress>0&&(o=!0,typeof r.resize=="function"&&r.resize()),a(c.progress)}})}else{const l=()=>{if(!window.__pageTL){s=requestAnimationFrame(l);return}const c=window.__pageTL.progress();if(typeof c=="number"){const u=W0(c);u>0&&!o&&(o=!0,typeof r.resize=="function"&&r.resize()),a(u)}s=requestAnimationFrame(l)};s=requestAnimationFrame(l)}window.__GENLABS_CONVERGE_LOTTIE__=r,window.addEventListener("pagehide",()=>{s&&cancelAnimationFrame(s)},{once:!0})})}pR();function mR(){const r=document.querySelector(".convergence-video");if(!r)return;let e=0,t=!1,n=0,i=-1;const s=()=>{const c=r.duration;n=Number.isFinite(c)&&c>0?c:0,t=n>0};let o=0;const a=c=>{if(!t||n<=0)return;const u=.15,h=c<u?0:(c-u)/(1-u),f=Math.max(0,n-.001),d=G0(h)*f;if(!(Math.abs(d-i)<1/60)){i=d,o++%60===0&&console.log("[Convergence Video Debug] progress:",c.toFixed(3),"targetTime:",d.toFixed(2),"actualCurrentTime:",r.currentTime.toFixed(2));try{r.currentTime=d}catch{}}};r.autoplay=!1,r.loop=!1,r.muted=!0,r.pause();const l=()=>{r.readyState>=1&&(r.currentTime=0,console.log("[Convergence Video] Set to start (0s)"))};if(s(),a(0),setTimeout(()=>{l()},1e3),r.addEventListener("loadedmetadata",()=>{s(),a(0),setTimeout(l,1e3)}),r.addEventListener("loadeddata",()=>{setTimeout(l,1e3)}),en()){const c=document.querySelector(".cc-convergence")||document.querySelector(".cc-benefits");c&&Gi&&Gi.create({trigger:c,start:z0,end:V0,scrub:H0,onUpdate:u=>{a(u.progress)}})}else{let c=!1;const u=()=>{if(!window.__pageTL){e=requestAnimationFrame(u);return}const h=window.__pageTL.progress();if(typeof h=="number"){const f=W0(h);f>0&&!c&&(c=!0,console.log("[Convergence Video] Section became visible at stage progress:",h.toFixed(3),"media progress:",f.toFixed(3),"video time:",r.currentTime.toFixed(2),"duration:",n.toFixed(2))),a(f)}e=requestAnimationFrame(u)};e=requestAnimationFrame(u)}window.__GENLABS_CONVERGENCE_VIDEO__=r,window.addEventListener("pagehide",()=>{e&&cancelAnimationFrame(e)},{once:!0})}mR();function ja(r){if(!r||r.dataset.splitReady==="true")return r?.querySelectorAll(".split-word")||[];const e=[],t=i=>{const s=i.textContent;if(!s)return;const o=s.split(/(\s+)/),a=document.createDocumentFragment();o.forEach(l=>{if(!l)return;if(/^\s+$/.test(l)){a.appendChild(document.createTextNode(l));return}const c=document.createElement("span");c.className="split-word-mask";const u=document.createElement("span");u.className="split-word",u.textContent=l,c.appendChild(u),a.appendChild(c),e.push(u)}),i.parentNode.replaceChild(a,i)},n=i=>{if(!i)return;if(i.nodeType===Node.TEXT_NODE){t(i);return}if(i.nodeType!==Node.ELEMENT_NODE||i.tagName==="BR"||i.classList.contains("split-word-mask"))return;Array.from(i.childNodes).forEach(n)};return n(r),r.dataset.splitReady="true",e}function gR(r){if(!r||r.dataset.lineSplitReady==="true")return{lineWords:r?Array.from(r.querySelectorAll(".split-line .split-word")):[],lineBgs:r?Array.from(r.querySelectorAll(".split-line-bg")):[]};ja(r);const e=Array.from(r.querySelectorAll(".split-word-mask"));if(!e.length)return{lineWords:[],lineBgs:[]};const t=[],n=6;return e.forEach(i=>{const s=i.getBoundingClientRect().top,o=t.find(a=>Math.abs(a.top-s)<=n);if(o){o.masks.push(i);return}t.push({top:s,masks:[i]})}),t.sort((i,s)=>i.top-s.top),r.innerHTML="",r.style.display="block",t.forEach((i,s)=>{const o=document.createElement("span");o.className="split-line",o.style.position="relative",o.style.display="block",o.style.width="fit-content",o.style.margin=s===0?"0 auto 0.12em":"0 auto",o.style.padding="0.03em 0.18em 0.07em";const a=document.createElement("span");a.className="split-line-bg",a.style.position="absolute",a.style.inset="0",a.style.background="var(--_color---neutral--gray-matter)",a.style.transformOrigin="left center",a.style.transform="scaleX(0)",a.style.zIndex="0";const l=document.createElement("span");l.style.position="relative",l.style.zIndex="1",i.masks.forEach((c,u)=>{l.appendChild(c),u<i.masks.length-1&&l.appendChild(document.createTextNode(" "))}),o.appendChild(a),o.appendChild(l),r.appendChild(o)}),r.dataset.lineSplitReady="true",{lineWords:Array.from(r.querySelectorAll(".split-line .split-word")),lineBgs:Array.from(r.querySelectorAll(".split-line-bg"))}}const On={hero:ja(document.querySelector(Xn.heroTitle)),underCopy:ja(Zn.underCopy),underHighlight:ja(Zn.underHighlight),convergeFinal:ja(document.querySelector(".converge-final"))},va=Zn.underHighlight?.dataset.split==="lines"?gR(Zn.underHighlight):{lineWords:[],lineBgs:[]};va.lineWords.length&&(On.underHighlight=va.lineWords);On.hero.length&&(vt.set(On.hero,{y:50,opacity:0}),vt.to(On.hero,{y:0,opacity:1,duration:.9,ease:"power3.out",delay:.12,stagger:.035}));On.underCopy.length&&vt.set(On.underCopy,{y:50,opacity:0});On.underHighlight.length&&vt.set(On.underHighlight,{y:50,opacity:0});va.lineBgs.length&&vt.set(va.lineBgs,{scaleX:0,transformOrigin:"left center"});On.convergeFinal.length&&vt.set(On.convergeFinal,{y:42,opacity:0});function _R(){const r=document.querySelector(".explore-btn");if(!r)return;const e=24;let t=!0;const n=(i,s=!1)=>{i!==t&&(t=i,vt.to(r,{autoAlpha:i?1:0,y:i?0:18,duration:s?0:.24,ease:"power2.out",overwrite:!0}),r.classList.toggle("is-hidden",!i))};window.addEventListener("scroll",()=>{n(window.scrollY<=e)},{passive:!0}),r.addEventListener("click",()=>{n(!1),window.scrollTo({top:Math.round(window.innerHeight*.5),behavior:"smooth"})}),n(window.scrollY<=e,!0)}_R();oA({gsap:vt,ScrollTrigger:Gi});Kd()||mA({gsap:vt,canvasSelector:"#features, .cc-convergence canvas",modelUrl:Ll("/models/logo_split.glb"),modelVerticalOffset:.14,modelVerticalOffsetMobile:.1,stageProgressRange:[0,1],getStageProgress:()=>{const r=window.__pageTL?.progress();return typeof r!="number"||!Number.isFinite(r)?null:r},getVisibilityProgress:()=>{const r=window.__pageTL?.progress();if(typeof r!="number"||!Number.isFinite(r))return null;const e=window.__GENLABS_STAGE_TIMING__?.underOut??.58;return(r-e)/Math.max(1e-4,1-e)}});(function(){const e=document.querySelector('[data-component="convergence-mobile"]');if(!e||!en()||Kd())return;function t(){const C=e.parentElement;if(C){const P=C.getBoundingClientRect();if(P.width>0&&P.height>0)return{width:P.width,height:P.height}}return{width:window.innerWidth,height:window.innerHeight}}let n=t();const i=Math.min(window.devicePixelRatio||1,2);e.width=Math.floor(n.width*i),e.height=Math.floor(n.height*i),e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,e.style.opacity="0";const s=e.getContext("2d",{alpha:!1});s.setTransform(i,0,0,i,0,0),s.textBaseline="top";const o=document.createElement("canvas"),a=new Cs({canvas:o,antialias:!0,alpha:!1});a.setPixelRatio(i),a.setSize(n.width,n.height);const l=new As,c=new rn(45,n.width/n.height,.01,1e3);l.add(c),l.add(new Ma(16777215,.25));const u=new Bn(16777215,1.25);u.position.set(6,4,6),l.add(u);const h=new Bn(16777215,.35);h.position.set(-6,2,4),l.add(h);const f=new Bn(16777215,.6);f.position.set(0,6,-6),l.add(f);const d={uTime:{value:0},uScale:{value:2.4},uIntensity:{value:.85},uBase:{value:.025},uAmp:{value:.015},uResolution:{value:new ze(n.width,n.height)},uTint:{value:new F(1,1,1)}},g=new Cn({uniforms:d,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }",fragmentShader:`
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
      }`}),_=new Tt(new Tr(2,2),g);_.frustumCulled=!1,_.renderOrder=-1e3,l.add(_);let m=null,p=null;function v(){const C={cellSize:5,aspectComp:.55},P=Math.max(20,Math.floor(n.width/C.cellSize)),N=n.width/P,B=N/C.aspectComp,V=Math.max(20,Math.floor(n.height/B));m&&m.dispose(),m=new bn(P,V,{depthBuffer:!0,stencilBuffer:!1}),p=new Uint8Array(P*V*4),v.cols=P,v.rows=V,v.cellW=N,v.cellH=B}v();const x=" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";function y(){const{cols:C,rows:P,cellW:N,cellH:B}=v;s.fillStyle="#ffffff",s.fillRect(0,0,n.width,n.height),s.fillStyle="#125fee";const V=Math.max(8,Math.floor(B*1));s.font=`${V}px monospace`,s.textAlign="left";const k=s.measureText("M").width||1,z=N/k;s.save(),s.scale(z,1);const W=Math.max(B,V*1.05);for(let ee=0;ee<P;ee++){let D="";for(let Q=0;Q<C;Q++){const re=P-1-ee,he=(re*C+Q)*4;let ye=.2126*(p[he]/255)+.7152*(p[he+1]/255)+.0722*(p[he+2]/255);ye=Math.min(1,Math.max(0,(ye-.5)*1.15+.5)),ye=Math.min(1,Math.max(0,Math.pow(ye,.9))),D+=x[Math.floor(ye*(x.length-1))]}s.fillText(D,0,ee*W)}s.restore()}const b=new Ht;l.add(b);let T=!1;const E=new Zr({color:16777215,metalness:.1,roughness:.6});new wa().load(Ll("/models/logo_split.glb"),C=>{const P=C.scene;P.updateMatrixWorld(!0),P.traverse(he=>{he.isMesh&&(he.material=E,he.castShadow=!1,he.receiveShadow=!1)}),b.add(P),b.updateMatrixWorld(!0);const N=new Et().setFromObject(b),B=N.getSize(new F),V=N.getCenter(new F);b.position.sub(V);const k=Math.max(B.x,B.y,B.z);b.scale.setScalar(7/k),b.updateMatrixWorld(!0);const ee=new Et().setFromObject(b).getSize(new F),D=Math.max(ee.x,ee.y,ee.z),Q=c.fov*Math.PI/180,re=D/2/Math.tan(Q/2);c.position.set(0,D*.2,re*1.4),c.near=Math.max(.01,re/100),c.far=re*100,c.updateProjectionMatrix(),c.lookAt(0,0,0),T=!0});let R=!1;new IntersectionObserver(C=>{C[0].isIntersecting?(R=!0,e.style.opacity="1"):(R=!1,e.style.opacity="0")},{threshold:.1}).observe(e);const S=new Rs,w=Math.PI*2/12;(function C(){if(requestAnimationFrame(C),!T||!R)return;const P=S.getElapsedTime();d.uTime.value=P,b.rotation.y=P*w,a.setRenderTarget(m),a.render(l,c),a.setRenderTarget(null),a.readRenderTargetPixels(m,0,0,m.width,m.height,p),y()})(),window.addEventListener("resize",()=>{n=t();const C=Math.min(window.devicePixelRatio||1,2);e.width=Math.floor(n.width*C),e.height=Math.floor(n.height*C),e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,s.setTransform(C,0,0,C,0,0),c.aspect=n.width/n.height,c.updateProjectionMatrix(),a.setSize(n.width,n.height),d.uResolution.value.set(n.width,n.height),v()})})();yA();TA();EA();BA();LA();const br=new As;br.add(Js);Js.position.set(5.2,-.4,0);const vR=new Ma(16777215,.25);br.add(vR);const Ar=new Bn(16777215,1.25);Ar.position.set(6,4,6);Ar.castShadow=!1;Ar.shadow.mapSize.set(1024,1024);Ar.shadow.camera.near=.1;Ar.shadow.camera.far=50;Ar.shadow.camera.left=-15;Ar.shadow.camera.right=15;Ar.shadow.camera.top=15;Ar.shadow.camera.bottom=-15;br.add(Ar);const X0=new Bn(16777215,.35);X0.position.set(-6,2,4);br.add(X0);const Y0=new Bn(16777215,.6);Y0.position.set(0,6,-6);br.add(Y0);const xR=new Rs,Ol={uTime:{value:0},uScale:{value:2.4},uIntensity:{value:.85},uBase:{value:.025},uAmp:{value:.015},uResolution:{value:new ze(Ft.width,Ft.height)},uTint:{value:new F(1,1,1)}},yR=new Cn({uniforms:Ol,depthWrite:!1,depthTest:!1,vertexShader:`
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
  `});_a.noise=Ol.uAmp.value;Es.add(_a,"noise",.06,.3,.005).name("NOISE").onChange(r=>{Ol.uAmp.value=r});const Jd=new Tt(new Tr(2,2),yR);Jd.frustumCulled=!1;Jd.renderOrder=-1e3;br.add(Jd);const Ho=new Ht;br.add(Ho);const SR=new Tt(new Ss(1,1,1),new Ix);Ho.add(SR);const qt=new rn(45,Ft.width/Ft.height,.1,5e3);br.add(qt);qt.position.set(0,0,20);qt.lookAt(0,0,0);const Tn=new lT(qt,_s);Tn.enableDamping=!0;Tn.enablePan=!1;Tn.enableZoom=!1;Tn.enableRotate=!1;Tn.target.set(0,0,0);Tn.update();const Zf=new wa;function MR(r){const e=new Zr({color:new Ke("#ffffff"),metalness:.08,roughness:.62}),t=new Ht;if(r==="stack-cylinders"){const i=new Xc(.55,.55,1.7,32),s=new Xc(.75,.75,.12,40),o=new Tt(i,e),a=new Tt(i,e),l=new Tt(s,e);return o.position.set(-.75,.2,0),a.position.set(.75,-.2,0),l.position.set(0,1.1,0),t.add(o,a,l),t}if(r==="slab-grid"){for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++){const o=new Tt(new Ss(.9,.36,.9),e);o.position.set(i*.95,s*.45,(i+s)*.06),t.add(o)}return t}if(r==="diamond-cluster"){const i=new _d(.66,0),s=new Tt(i,e),o=new Tt(i,e),a=new Tt(i,e);return s.position.set(-.9,-.15,0),o.position.set(.85,-.05,-.05),a.position.set(0,.9,0),t.add(s,o,a),t}if(r==="ring-array"){const i=new vd(.55,.18,18,72);for(let s=0;s<4;s++){const o=new Tt(i,e);o.position.set((s-1.5)*.85,s%2?-.35:.35,s*-.12),o.rotation.x=Math.PI*.5,o.rotation.y=s*.45,t.add(o)}return t}const n=new Tt(new Ss(1,1,1),e);return t.add(n),t}function _g(r,e=5.5){r.updateMatrixWorld(!0);const n=new Et().setFromObject(r).getSize(new F),i=Math.max(n.x,n.y,n.z);if(i>0){const a=e/i;r.scale.setScalar(a)}r.updateMatrixWorld(!0);const o=new Et().setFromObject(r).getCenter(new F);r.position.sub(o),r.updateMatrixWorld(!0)}function vg(r,e=0){const t=Qi.degToRad(r.fov),n=Math.max(.001,Math.abs(r.position.z-e));return Math.tan(t*.5)*n*r.aspect}function bR(r){const e=r.clone(!0);return e.traverse(t=>{t.isMesh&&(t.castShadow=!1,t.receiveShadow=!1,t.material=t.material.clone(),t.material.color=new Ke("#ffffff"),t.material.needsUpdate=!0)}),e}function wR(r){return new Promise((e,t)=>{Zf.load(r,n=>e(n.scene),void 0,n=>t(n))})}function TR(r){return iu.find(e=>e.id===r)||iu[0]}async function ER(r){const{model:e}=r;if(e.type==="primitive"){const i=MR(e.primitive);return _g(i,e.targetSize),i}const t=Ll(e.url);if(!Mh.has(t)){const i=await wR(t);Mh.set(t,i)}const n=bR(Mh.get(t));return _g(n,e.targetSize),n}function AR(){const r=document.querySelector("#tab-buttons");r&&(r.innerHTML="",iu.forEach(e=>{const t=document.createElement("button");t.type="button",t.className="tab-button",t.dataset.tabId=e.id,t.textContent=e.label;const n=()=>{q0(e.id)};t.addEventListener("pointerenter",n),t.addEventListener("focus",n),t.addEventListener("click",n),r.appendChild(t)}))}function RR(r){document.querySelectorAll(".tab-button").forEach(e=>{e.classList.toggle("is-active",e.dataset.tabId===r)})}async function q0(r){const e=TR(r);bh+=1;const t=bh;try{const n=await ER(e);if(t!==bh)return;Js.clear(),Js.position.fromArray(e.model.position||[5.2,-.4,0]),Js.add(n),jf=n,Kf=e.id,F0=e.rotationSpeed||.16,Tn.target.copy(Js.position),Tn.update(),RR(Kf)}catch(n){console.error(`Failed to load tab model for ${e.id}:`,n)}}const CR=!!document.querySelector("#tab-buttons");CR&&(AR(),q0(sA));Zf.load(Ll("/models/logo_separate.glb"),r=>{Ho.clear(),vn=new Ht,Vs=new Ht,Hs=new Ht,Ho.add(vn),vn.add(Vs,Hs);const e=r.scene;e.updateMatrixWorld(!0);const t=e.getObjectByName("Logo_L"),n=e.getObjectByName("Logo_R");if(!t||!n){console.log("Could not find Logo_L / Logo_R. Available objects:"),e.traverse(Se=>{Se.name&&console.log(Se.name)});return}t.removeFromParent(),n.removeFromParent(),Vs.add(t),Hs.add(n),vn.updateMatrixWorld(!0);const i=new Et().setFromObject(vn),s=i.getSize(new F),o=i.getCenter(new F);vn.position.sub(o);const a=Math.max(s.x,s.y,s.z),c=(en()?6.5:10)/a;vn.scale.setScalar(c);const u=en()?-3:0;Ho.position.set(0,u,0),vn.updateMatrixWorld(!0);const f=new Et().setFromObject(vn).getSize(new F),d=Math.max(f.x,f.y,f.z),g=qt.fov*(Math.PI/180),_=d/2/Math.tan(g/2);qt.position.set(0,u+d*.2,_*1.4),qt.near=Math.max(.01,_/100),qt.far=_*100,qt.updateProjectionMatrix(),Tn.target.set(0,u,0),Tn.update();const m=qt.position.y,p=qt.position.z;Sh=new Zr({color:new Ke("#ffffff"),metalness:.1,roughness:.6}),vn.traverse(Se=>{if(!Se.isMesh)return;Se.castShadow=!1,Se.receiveShadow=!1;const ue=Se.material;Se.material=Sh,ue?.map&&(Se.material.map=ue.map),ue?.normalMap&&(Se.material.normalMap=ue.normalMap),ue?.roughnessMap&&(Se.material.roughnessMap=ue.roughnessMap),ue?.metalnessMap&&(Se.material.metalnessMap=ue.metalnessMap),Se.material.needsUpdate=!0});const v=vt.to(vn.rotation,{y:`+=${Math.PI*2}`,duration:12,repeat:-1,ease:"none"}),x=new Ht,y=new Ht,b=new Ht,T=[],E={value:0},R=()=>{for(const Se of T)Se.opacity=E.value},S=.88,w=3.6,C=5,P=.42,N=7.2,B=new F(1,1,1),V={holdLeftX:0,holdRightX:0,holdLeftY:0,holdRightY:0,cameraStartZ:p,cameraEndZ:-Math.max(d*2.6,p*1.4)};let k=!1,z=c*2.8;const W={value:P},ee=()=>{x.scale.setScalar(z*W.value)},D=()=>{if(!k)return;const Se=vg(qt,0),ue=Se/Math.max(qt.aspect,.001),L=Se*2*S/Math.max(B.x,.001),M=ue*2*S/Math.max(B.y,.001),I=Math.min(L,M);z=Math.max(I*w,c*C),ee()};window.__refreshConvergeScale=D,Ho.add(x),x.add(y,b),x.visible=!1,Kd()||Zf.load(Ll("/models/logo_split.glb"),Se=>{const ue=Se.scene;ue.updateMatrixWorld(!0);const L=ue.getObjectByName("clogo_L"),M=ue.getObjectByName("clogo_R");if(!L||!M){console.log("Could not find clogo_L / clogo_R. Available:"),ue.traverse(pe=>{pe.name&&console.log(pe.name)});return}L.removeFromParent(),M.removeFromParent(),y.add(L),b.add(M),x.updateMatrixWorld(!0);const I=new Et().setFromObject(x),Y=I.getSize(new F),K=I.getCenter(new F),q=new Et().setFromObject(y),fe=new Et().setFromObject(b),le=q.getSize(new F),Me=fe.getSize(new F);x.position.sub(K),B.copy(Y),k=!0,D();const de=vg(qt,0),ne=Math.max((le.x+Me.x)*.28,de*.22),se=Qi.clamp(Y.y*.05,.06,.34);if(V.holdLeftX=-ne,V.holdRightX=ne,V.holdLeftY=-se,V.holdRightY=se,x.traverse(pe=>{if(!pe.isMesh)return;pe.castShadow=!1,pe.receiveShadow=!1;const we=Sh.clone();we.transparent=!0,we.opacity=E.value,we.needsUpdate=!0,T.push(we),pe.material=we}),y.position.set(V.holdLeftX,V.holdLeftY,0),b.position.set(V.holdRightX,V.holdRightY,0),x.rotation.set(0,0,0),R(),x.visible=!1,window.__pageTL){const pe=window.__pageTL.progress();window.__pageTL.progress(0),window.__pageTL.progress(pe)}},void 0,Se=>console.error("Failed to load convergence logo:",Se)),window.__pageTL&&(window.__pageTL.scrollTrigger?.kill(),window.__pageTL.kill(),window.__pageTL=null),Vs.position.set(0,0,0),Hs.position.set(0,0,0),Vs.scale.set(1,1,1),Hs.scale.set(1,1,1),y.position.set(V.holdLeftX,V.holdLeftY,0),b.position.set(V.holdRightX,V.holdRightY,0),x.rotation.set(0,0,0),W.value=P,ee(),E.value=0,R(),x.visible=!1,vn.visible=!0,vn.rotation.set(0,0,0),vn.scale.setScalar(c),qt.position.set(0,m,V.cameraStartZ),vn.updateMatrixWorld(!0);const Q=new Et().setFromObject(Vs),re=new Et().setFromObject(Hs),he=Q.getSize(new F),ye=re.getSize(new F),ae=Math.max((he.x+ye.x)*.5,f.x*.35),$=Qi.clamp(ae*.18,.38,1.25),J=Qi.clamp($*.2,.05,.22),ce=new F(-$,-J,0),Ne=new F($,J,0),Te=U0(),He=Te?DESKTOP_STATS_IN:1,xe={heroSplitOut:en()?.2:.35,copySwapStart:en()?.4:.28,underOut:en()?.95:.5,convergeIn:en()?2:.56,convergeGlbStart:en()?2:.63,centralizedIn:en()?2:.63,convergeFadeIn:.06,convergeGrowStart:en()?2:.65,modelFadeOutStart:en()?2:.805,modelFadeOut:.03,statsIn:en()?2:He};window.__GENLABS_STAGE_TIMING__=xe;let Ee=!1;const Pe=document.querySelector("#grid-stage-scroll"),qe=en()?Pe?Pe.offsetHeight/window.innerHeight:.75:10,Fe=Gi?{scrollTrigger:{trigger:mg().trigger,start:"top top",end:()=>{const{stage:Se,runway:ue}=mg();return Se?`+=${Math.max(0,Se.offsetHeight-window.innerHeight)}`:ue?`+=${ue.offsetHeight}`:`+=${window.innerHeight*qe}`},scrub:.8,invalidateOnRefresh:!0,onUpdate:Se=>{const ue=Se.progress>=xe.convergeIn;ue!==Ee&&(Ee=ue,Ee?v.pause():v.resume())}}}:{},H=vt.timeline(Fe),U=!!(document.querySelector(".converge-label-left")&&document.querySelector(".converge-label-right")),ft=!!document.querySelector(".converge-hover-card"),Ze=!!document.querySelector(".converge-final");if(vt.set(Xn.panelHero,{autoAlpha:1,y:0}),vt.set(Xn.panelUnder,{autoAlpha:0,y:40}),vt.set(Xn.underCopy,{autoAlpha:1}),vt.set(Xn.underHighlight,{autoAlpha:1}),en()||(vt.set(Xn.panelConverge,{autoAlpha:0}),Te&&vt.set(Xn.panelStats,{opacity:0,visibility:"visible"}),U&&vt.set(".converge-label",{autoAlpha:0,y:18}),ft&&vt.set(".converge-hover-card",{autoAlpha:0,scale:.96}),Ze&&vt.set(".converge-final",{autoAlpha:0})),H.to(Xn.panelHero,{autoAlpha:0,y:-50,ease:"none",duration:.12},0),H.to(Xn.panelUnder,{autoAlpha:1,y:0,ease:"none",duration:.22},0),On.underCopy.length&&H.to(On.underCopy,{y:0,opacity:1,ease:"power3.out",duration:.18,stagger:.008},.08),On.underHighlight.length&&H.to(On.underHighlight,{y:0,opacity:1,ease:"power3.out",duration:.15,stagger:.012},xe.copySwapStart),va.lineBgs.length&&H.to(va.lineBgs,{scaleX:1,ease:"power2.out",duration:.14,stagger:.08},xe.copySwapStart+.06),H.to(Xn.panelUnder,{autoAlpha:0,y:-40,ease:"none",duration:.06},xe.underOut),en()||H.set(Xn.panelUnder,{autoAlpha:0},xe.convergeIn),H.to(Vs.position,{x:ce.x,y:ce.y,z:ce.z,ease:"none",duration:xe.heroSplitOut},0),H.to(Hs.position,{x:Ne.x,y:Ne.y,z:Ne.z,ease:"none",duration:xe.heroSplitOut},0),H.to(vn.rotation,{z:Math.PI*.25,ease:"power2.out",duration:.08},xe.underOut),en()&&H.to(vn,{visible:!1,duration:.001},xe.underOut+.07),!en()){H.to(Xn.panelConverge,{autoAlpha:1,ease:"none",duration:.02},xe.convergeIn),U&&(H.to(".converge-label",{autoAlpha:0,y:18,ease:"none",duration:.001},xe.convergeIn),H.to(".converge-label-left",{autoAlpha:1,y:0,ease:"power2.out",duration:.08},xe.convergeIn),H.to(".converge-label-right",{autoAlpha:1,y:0,ease:"power2.out",duration:.08},xe.centralizedIn));const Se={value:0};H.to(Se,{value:1,duration:.001,ease:"none",onUpdate:()=>{const I=Se.value>.5;vn.visible=!I,x.visible=I}},xe.convergeGlbStart),H.to(E,{value:1,ease:"none",duration:xe.convergeFadeIn,onUpdate:R},xe.convergeGlbStart);const ue=Math.max(.001,xe.modelFadeOutStart-xe.convergeGrowStart),L=N*1.35;H.to(W,{value:N,ease:"power3.in",duration:ue,onUpdate:ee},xe.convergeGrowStart);const M=Math.max(.001,xe.modelFadeOutStart-xe.centralizedIn);H.to(y.position,{x:0,y:0,ease:"power2.inOut",duration:M},xe.centralizedIn),H.to(b.position,{x:0,y:0,ease:"power2.inOut",duration:M},xe.centralizedIn),H.to(x.rotation,{z:Math.PI*.25,ease:"power2.inOut",duration:Math.max(.001,xe.modelFadeOutStart-xe.convergeGrowStart)},xe.convergeGrowStart),H.to(qt.position,{y:0,z:V.cameraEndZ,ease:"power3.in",duration:Math.max(.001,xe.modelFadeOutStart-xe.convergeGrowStart)},xe.convergeGrowStart),H.to(W,{value:L,ease:"none",duration:Math.max(.001,xe.modelFadeOut),onUpdate:ee},xe.modelFadeOutStart),H.to({},{duration:.001,onStart:()=>{Tn.target.set(0,0,0),Tn.update(),qt.lookAt(0,0,0)},onReverseComplete:()=>{Tn.target.set(0,0,0),Tn.update(),qt.lookAt(0,0,0)}},xe.convergeIn),ft&&H.to(".converge-hover-card",{autoAlpha:0,scale:.96,ease:"none",duration:.03,overwrite:!0},xe.labelOut),Te&&H.to(E,{value:0,ease:"power2.out",duration:xe.modelFadeOut,onUpdate:R},xe.modelFadeOutStart),Ze&&H.to(".converge-final",{autoAlpha:1,ease:"none",duration:.05},xe.finalTextIn),On.convergeFinal.length&&H.to(On.convergeFinal,{y:0,opacity:1,ease:"power3.out",duration:.08,stagger:.02},xe.finalTextIn),Te&&(H.to(Xn.panelConverge,{autoAlpha:0,ease:"none",duration:.015},xe.statsIn),H.to(Xn.panelStats,{opacity:1,ease:"none",duration:.015,onStart:()=>{const I=window.__GENLABS_STATS_LOTTIE__;I&&typeof I.resize=="function"&&I.resize()}},xe.statsIn))}window.__pageTL=H,Gi?.refresh(),Kf&&(Tn.target.copy(Js.position),Tn.update())},void 0,r=>console.error("Failed to load GLB:",r));let Qs=null,fl=null;function Fi(){const r=Math.max(20,Math.floor(Ft.width/Sn.cellSize)),e=Ft.width/r,t=e/Sn.aspectComp,n=Math.max(20,Math.floor(Ft.height/t)),i=r,s=n;Qs&&Qs.dispose(),Qs=new bn(i,s,{depthBuffer:!0,stencilBuffer:!1}),fl=new Uint8Array(i*s*4),Fi.w=i,Fi.h=s,Fi.cellW=e,Fi.cellH=t}Fi();function PR(r,e){return Qi.clamp((r-.5)*e+.5,0,1)}function LR(r,e){return Qi.clamp(Math.pow(r,e),0,1)}function DR(r,e,t){return .2126*r+.7152*e+.0722*t}function IR(){const r=Fi.w,e=Fi.h,t=Sn.ramp,n=t.length;si.fillStyle=Sn.bg,si.fillRect(0,0,Ft.width,Ft.height),si.fillStyle=Sn.fg;const i=Fi.cellH,s=Math.max(8,Math.floor(i*Sn.fontScale));si.font=`${s}px ${Sn.fontFamily}`,si.textAlign="left";const o=si.measureText("M").width,a=Fi.cellW/o;si.save(),si.scale(a,1);for(let l=0;l<e;l++){let c="";for(let h=0;h<r;h++){const d=((e-1-l)*r+h)*4,g=fl[d]/255,_=fl[d+1]/255,m=fl[d+2]/255;let p=DR(g,_,m);p=PR(p,Sn.contrast),p=LR(p,Sn.gamma);const v=Math.floor(p*(n-1));c+=t[v]}const u=Math.max(Fi.cellH,s*1.05);si.fillText(c,0,l*u)}si.restore()}window.addEventListener("resize",()=>{const r=window.__pageTL,e=r?.scrollTrigger||null,t=e?e.progress:null;if(Ft.width=window.innerWidth,Ft.height=window.innerHeight,qt.aspect=Ft.width/Ft.height,qt.updateProjectionMatrix(),ji.setSize(Ft.width,Ft.height),B0(),Fi(),Ol.uResolution.value.set(Ft.width,Ft.height),window.__refreshConvergeScale?.(),Gi?.refresh(),e&&t!==null){const n=e.start+(e.end-e.start)*t;e.scroll(n);const i=e.progress;r.progress(0),r.progress(i)}});let xg=0;const $0=()=>{const r=xR.getElapsedTime(),e=r-xg;xg=r,jf&&(jf.rotation.y+=e*F0),Tn.update(),Ol.uTime.value=r,Zd?(ji.setRenderTarget(Qs),ji.render(br,qt),ji.setRenderTarget(null),ji.readRenderTargetPixels(Qs,0,0,Qs.width,Qs.height,fl),IR()):(ji.setRenderTarget(null),ji.render(br,qt)),requestAnimationFrame($0)};$0();
