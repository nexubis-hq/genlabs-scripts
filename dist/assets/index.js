const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/style.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const B0="modulepreload",k0=function(r){return"/"+r},Xd={},z0=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=l(t.map(c=>{if(c=k0(c),c in Xd)return;Xd[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":B0,u||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((d,g)=>{f.addEventListener("load",d),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};const Xf="182",Uo={ROTATE:0,DOLLY:1,PAN:2},Po={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},V0=0,Yd=1,H0=2,mc=1,lg=2,Da=3,Vr=0,oi=1,or=2,Br=0,Fo=1,qd=2,$d=3,jd=4,G0=5,ks=100,W0=101,X0=102,Y0=103,q0=104,$0=200,j0=201,K0=202,Z0=203,xh=204,yh=205,J0=206,Q0=207,ev=208,tv=209,nv=210,iv=211,rv=212,sv=213,ov=214,Sh=0,Mh=1,bh=2,Yo=3,Th=4,Eh=5,wh=6,Ah=7,cg=0,av=1,lv=2,fr=0,ug=1,hg=2,fg=3,dg=4,pg=5,mg=6,gg=7,Kd="attached",cv="detached",_g=300,eo=301,qo=302,Ch=303,Rh=304,eu=306,$o=1e3,lr=1001,Lc=1002,cn=1003,vg=1004,Ia=1005,un=1006,gc=1007,Or=1008,Si=1009,xg=1010,yg=1011,ol=1012,Yf=1013,mr=1014,Ui=1015,Hr=1016,qf=1017,$f=1018,al=1020,Sg=35902,Mg=35899,bg=1021,Tg=1022,Fi=1023,Gr=1026,Vs=1027,jf=1028,Kf=1029,jo=1030,Zf=1031,Jf=1033,_c=33776,vc=33777,xc=33778,yc=33779,Ph=35840,Lh=35841,Dh=35842,Ih=35843,Nh=36196,Oh=37492,Uh=37496,Fh=37488,Bh=37489,kh=37490,zh=37491,Vh=37808,Hh=37809,Gh=37810,Wh=37811,Xh=37812,Yh=37813,qh=37814,$h=37815,jh=37816,Kh=37817,Zh=37818,Jh=37819,Qh=37820,ef=37821,tf=36492,nf=36494,rf=36495,sf=36283,of=36284,af=36285,lf=36286,ll=2300,cl=2301,du=2302,Zd=2400,Jd=2401,Qd=2402,uv=2500,hv=0,Eg=1,cf=2,fv=3200,Qf=0,dv=1,rs="",En="srgb",Zn="srgb-linear",Dc="linear",Mt="srgb",lo=7680,ep=519,pv=512,mv=513,gv=514,ed=515,_v=516,vv=517,td=518,xv=519,uf=35044,tp="300 es",cr=2e3,Ic=2001;function wg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ul(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Sv(){const r=ul("canvas");return r.style.display="block",r}const np={};function Nc(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ue(...r){const e="THREE."+r.shift();console.warn(e,...r)}function qe(...r){const e="THREE."+r.shift();console.error(e,...r)}function hl(...r){const e=r.join(" ");e in np||(np[e]=!0,Ue(...r))}function Mv(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ip=1234567;const Ga=Math.PI/180,Ko=180/Math.PI;function ji(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function st(r,e,t){return Math.max(e,Math.min(t,r))}function nd(r,e){return(r%e+e)%e}function bv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Tv(r,e,t){return r!==e?(t-r)/(e-r):0}function Wa(r,e,t){return(1-t)*r+t*e}function Ev(r,e,t,n){return Wa(r,e,1-Math.exp(-t*n))}function wv(r,e=1){return e-Math.abs(nd(r,e*2)-e)}function Av(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Cv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Rv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Pv(r,e){return r+Math.random()*(e-r)}function Lv(r){return r*(.5-Math.random())}function Dv(r){r!==void 0&&(ip=r);let e=ip+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Iv(r){return r*Ga}function Nv(r){return r*Ko}function Ov(r){return(r&r-1)===0&&r!==0}function Uv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Fv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Bv(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*u,a*c);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const fs={DEG2RAD:Ga,RAD2DEG:Ko,generateUUID:ji,clamp:st,euclideanModulo:nd,mapLinear:bv,inverseLerp:Tv,lerp:Wa,damp:Ev,pingpong:wv,smoothstep:Av,smootherstep:Cv,randInt:Rv,randFloat:Pv,randFloatSpread:Lv,seededRandom:Dv,degToRad:Iv,radToDeg:Nv,isPowerOfTwo:Ov,ceilPowerOfTwo:Uv,floorPowerOfTwo:Fv,setQuaternionFromProperEuler:Bv,normalize:bt,denormalize:qi};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=l*f+c*d+u*g+h*_;m<0&&(f=-f,d=-d,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const v=Math.acos(m),x=Math.sin(v);p=Math.sin(p*v)/x,a=Math.sin(a*v)/x,l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+_*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+g*a,h=h*p+_*a;const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pu=new U,rp=new gr;class tt{constructor(e,t,n,i,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],y=i[7],b=i[2],E=i[5],w=i[8];return s[0]=o*_+a*v+l*b,s[3]=o*m+a*x+l*E,s[6]=o*p+a*y+l*w,s[1]=c*_+u*v+h*b,s[4]=c*m+u*x+h*E,s[7]=c*p+u*y+h*w,s[2]=f*_+d*v+g*b,s[5]=f*m+d*x+g*E,s[8]=f*p+d*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mu.makeScale(e,t)),this}rotate(e){return this.premultiply(mu.makeRotation(-e)),this}translate(e,t){return this.premultiply(mu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mu=new tt,sp=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),op=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kv(){const r={enabled:!0,workingColorSpace:Zn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(i.r=kr(i.r),i.g=kr(i.g),i.b=kr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(i.r=Bo(i.r),i.g=Bo(i.g),i.b=Bo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===rs?Dc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return hl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return hl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Zn]:{primaries:e,whitePoint:n,transfer:Dc,toXYZ:sp,fromXYZ:op,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:sp,fromXYZ:op,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),r}const ft=kv();function kr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Bo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let co;class zv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{co===void 0&&(co=ul("canvas")),co.width=e.width,co.height=e.height;const i=co.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=co}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ul("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=kr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kr(t[n]/255)*255):t[n]=kr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vv=0;class id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(gu(i[o].image)):s.push(gu(i[o]))}else s=gu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function gu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let Hv=0;const _u=new U;class Mn extends ro{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,n=lr,i=lr,s=un,o=Or,a=Fi,l=Si,c=Mn.DEFAULT_ANISOTROPY,u=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=ji(),this.name="",this.source=new id(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_u).x}get height(){return this.source.getSize(_u).y}get depth(){return this.source.getSize(_u).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_g)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $o:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $o:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=_g;Mn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,i=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(d+1)/2,b=(p+1)/2,E=(u+f)/4,w=(h+_)/4,C=(g+m)/4;return x>y&&x>b?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=E/n,s=w/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=C/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=w/s,i=C/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gv extends ro{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Mn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new id(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Gv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ag extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wv extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vt{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hi):Hi.fromBufferAttribute(s,o),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cl.copy(n.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xa),Rl.subVectors(this.max,xa),uo.subVectors(e.a,xa),ho.subVectors(e.b,xa),fo.subVectors(e.c,xa),$r.subVectors(ho,uo),jr.subVectors(fo,ho),Es.subVectors(uo,fo);let t=[0,-$r.z,$r.y,0,-jr.z,jr.y,0,-Es.z,Es.y,$r.z,0,-$r.x,jr.z,0,-jr.x,Es.z,0,-Es.x,-$r.y,$r.x,0,-jr.y,jr.x,0,-Es.y,Es.x,0];return!vu(t,uo,ho,fo,Rl)||(t=[1,0,0,0,1,0,0,0,1],!vu(t,uo,ho,fo,Rl))?!1:(Pl.crossVectors($r,jr),t=[Pl.x,Pl.y,Pl.z],vu(t,uo,ho,fo,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tr=[new U,new U,new U,new U,new U,new U,new U,new U],Hi=new U,Cl=new Vt,uo=new U,ho=new U,fo=new U,$r=new U,jr=new U,Es=new U,xa=new U,Rl=new U,Pl=new U,ws=new U;function vu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ws.fromArray(r,s);const a=i.x*Math.abs(ws.x)+i.y*Math.abs(ws.y)+i.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),u=n.dot(ws);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xv=new Vt,ya=new U,xu=new U;class yr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);const t=ya.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ya,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(xu)),this.expandByPoint(ya.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Er=new U,yu=new U,Ll=new U,Kr=new U,Su=new U,Dl=new U,Mu=new U;class Tl{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Er.copy(this.origin).addScaledVector(this.direction,t),Er.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yu.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(yu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ll),a=Kr.dot(this.direction),l=-Kr.dot(Ll),c=Kr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(yu).addScaledVector(Ll,f),d}intersectSphere(e,t){Er.subVectors(e.center,this.origin);const n=Er.dot(this.direction),i=Er.dot(Er)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Er)!==null}intersectTriangle(e,t,n,i,s){Su.subVectors(t,e),Dl.subVectors(n,e),Mu.crossVectors(Su,Dl);let o=this.direction.dot(Mu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kr.subVectors(this.origin,e);const l=a*this.direction.dot(Dl.crossVectors(Kr,Dl));if(l<0)return null;const c=a*this.direction.dot(Su.cross(Kr));if(c<0||l+c>o)return null;const u=-a*Kr.dot(Mu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/po.setFromMatrixColumn(e,0).length(),s=1/po.setFromMatrixColumn(e,1).length(),o=1/po.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yv,e,qv)}lookAt(e,t,n){const i=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Zr.crossVectors(n,mi),Zr.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Zr.crossVectors(n,mi)),Zr.normalize(),Il.crossVectors(mi,Zr),i[0]=Zr.x,i[4]=Il.x,i[8]=mi.x,i[1]=Zr.y,i[5]=Il.y,i[9]=mi.y,i[2]=Zr.z,i[6]=Il.z,i[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],y=n[11],b=n[15],E=i[0],w=i[4],C=i[8],S=i[12],M=i[1],R=i[5],P=i[9],O=i[13],B=i[2],V=i[6],k=i[10],z=i[14],X=i[3],Q=i[7],D=i[11],te=i[15];return s[0]=o*E+a*M+l*B+c*X,s[4]=o*w+a*R+l*V+c*Q,s[8]=o*C+a*P+l*k+c*D,s[12]=o*S+a*O+l*z+c*te,s[1]=u*E+h*M+f*B+d*X,s[5]=u*w+h*R+f*V+d*Q,s[9]=u*C+h*P+f*k+d*D,s[13]=u*S+h*O+f*z+d*te,s[2]=g*E+_*M+m*B+p*X,s[6]=g*w+_*R+m*V+p*Q,s[10]=g*C+_*P+m*k+p*D,s[14]=g*S+_*O+m*z+p*te,s[3]=v*E+x*M+y*B+b*X,s[7]=v*w+x*R+y*V+b*Q,s[11]=v*C+x*P+y*k+b*D,s[15]=v*S+x*O+y*z+b*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],v=l*d-c*f,x=a*d-c*h,y=a*f-l*h,b=o*d-c*u,E=o*f-l*u,w=o*h-a*u;return t*(_*v-m*x+p*y)-n*(g*v-m*b+p*E)+i*(g*x-_*b+p*w)-s*(g*y-_*E+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,x=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,y=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,b=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,E=t*v+n*x+i*y+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*w,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*w,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*w,e[4]=x*w,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*w,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*w,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*w,e[8]=y*w,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*w,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*w,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*w,e[12]=b*w,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*w,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*w,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,v=l*c,x=l*u,y=l*h,b=n.x,E=n.y,w=n.z;return i[0]=(1-(_+p))*b,i[1]=(d+y)*b,i[2]=(g-x)*b,i[3]=0,i[4]=(d-y)*E,i[5]=(1-(f+p))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(g+x)*w,i[9]=(m-v)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=po.set(i[0],i[1],i[2]).length();const o=po.set(i[4],i[5],i[6]).length(),a=po.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Gi.copy(this);const c=1/s,u=1/o,h=1/a;return Gi.elements[0]*=c,Gi.elements[1]*=c,Gi.elements[2]*=c,Gi.elements[4]*=u,Gi.elements[5]*=u,Gi.elements[6]*=u,Gi.elements[8]*=h,Gi.elements[9]*=h,Gi.elements[10]*=h,t.setFromRotationMatrix(Gi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=cr,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===cr)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ic)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=cr,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===cr)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Ic)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const po=new U,Gi=new it,Yv=new U(0,0,0),qv=new U(1,1,1),Zr=new U,Il=new U,mi=new U,ap=new it,lp=new gr;class _r{constructor(e=0,t=0,n=0,i=_r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ap,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lp.setFromEuler(this),this.setFromQuaternion(lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_r.DEFAULT_ORDER="XYZ";class Cg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $v=0;const cp=new U,mo=new gr,wr=new it,Nl=new U,Sa=new U,jv=new U,Kv=new gr,up=new U(1,0,0),hp=new U(0,1,0),fp=new U(0,0,1),dp={type:"added"},Zv={type:"removed"},go={type:"childadded",child:null},bu={type:"childremoved",child:null};class Gt extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new U,t=new _r,n=new gr,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new tt}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.multiply(mo),this}rotateOnWorldAxis(e,t){return mo.setFromAxisAngle(e,t),this.quaternion.premultiply(mo),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(hp,e)}rotateZ(e){return this.rotateOnAxis(fp,e)}translateOnAxis(e,t){return cp.copy(e).applyQuaternion(this.quaternion),this.position.add(cp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(hp,e)}translateZ(e){return this.translateOnAxis(fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nl.copy(e):Nl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wr.lookAt(Sa,Nl,this.up):wr.lookAt(Nl,Sa,this.up),this.quaternion.setFromRotationMatrix(wr),i&&(wr.extractRotation(i.matrixWorld),mo.setFromRotationMatrix(wr),this.quaternion.premultiply(mo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dp),go.child=e,this.dispatchEvent(go),go.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zv),bu.child=e,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(wr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dp),go.child=e,this.dispatchEvent(go),go.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,Kv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Gt.DEFAULT_UP=new U(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new U,Ar=new U,Tu=new U,Cr=new U,_o=new U,vo=new U,pp=new U,Eu=new U,wu=new U,Au=new U,Cu=new Ft,Ru=new Ft,Pu=new Ft;class $i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wi.subVectors(e,t),i.cross(Wi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Wi.subVectors(i,t),Ar.subVectors(n,t),Tu.subVectors(e,t);const o=Wi.dot(Wi),a=Wi.dot(Ar),l=Wi.dot(Tu),c=Ar.dot(Ar),u=Ar.dot(Tu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Cr)===null?!1:Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cr.x),l.addScaledVector(o,Cr.y),l.addScaledVector(a,Cr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Cu.setScalar(0),Ru.setScalar(0),Pu.setScalar(0),Cu.fromBufferAttribute(e,t),Ru.fromBufferAttribute(e,n),Pu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Cu,s.x),o.addScaledVector(Ru,s.y),o.addScaledVector(Pu,s.z),o}static isFrontFacing(e,t,n,i){return Wi.subVectors(n,t),Ar.subVectors(e,t),Wi.cross(Ar).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),Ar.subVectors(this.a,this.b),Wi.cross(Ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return $i.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return $i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;_o.subVectors(i,n),vo.subVectors(s,n),Eu.subVectors(e,n);const l=_o.dot(Eu),c=vo.dot(Eu);if(l<=0&&c<=0)return t.copy(n);wu.subVectors(e,i);const u=_o.dot(wu),h=vo.dot(wu);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(_o,o);Au.subVectors(e,s);const d=_o.dot(Au),g=vo.dot(Au);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(vo,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return pp.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(pp,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(_o,o).addScaledVector(vo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jr={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function Lu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=nd(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Lu(o,s,e+1/3),this.g=Lu(o,s,e),this.b=Lu(o,s,e-1/3)}return ft.colorSpaceToWorking(this,i),this}setStyle(e,t=En){function n(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=Rg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}copyLinearToSRGB(e){return this.r=Bo(e.r),this.g=Bo(e.g),this.b=Bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return ft.workingToColorSpace(Pn.copy(this),e),Math.round(st(Pn.r*255,0,255))*65536+Math.round(st(Pn.g*255,0,255))*256+Math.round(st(Pn.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Pn.copy(this),t);const n=Pn.r,i=Pn.g,s=Pn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=En){ft.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,n=Pn.g,i=Pn.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Jr),this.setHSL(Jr.h+e,Jr.s+t,Jr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jr),e.getHSL(Ol);const n=Wa(Jr.h,Ol.h,t),i=Wa(Jr.s,Ol.s,t),s=Wa(Jr.l,Ol.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new je;je.NAMES=Rg;let Jv=0;class Ki extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=Fo,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=yh,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fo&&(n.blending=this.blending),this.side!==Vr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xh&&(n.blendSrc=this.blendSrc),this.blendDst!==yh&&(n.blendDst=this.blendDst),this.blendEquation!==ks&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ep&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==lo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==lo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hs extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.combine=cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new U,Ul=new ke;let Qv=0;class Kn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uf,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uf&&(e.usage=this.usage),e}}class Pg extends Kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lg extends Kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nn extends Kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ex=0;const Pi=new it,Du=new Gt,xo=new U,gi=new Vt,Ma=new Vt,mn=new U;class Qn extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wg(e)?Lg:Pg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,n){return Pi.makeTranslation(e,t,n),this.applyMatrix4(Pi),this}scale(e,t,n){return Pi.makeScale(e,t,n),this.applyMatrix4(Pi),this}lookAt(e){return Du.lookAt(e),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ma.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(gi.min,Ma.min),gi.expandByPoint(mn),mn.addVectors(gi.max,Ma.max),gi.expandByPoint(mn)):(gi.expandByPoint(Ma.min),gi.expandByPoint(Ma.max))}gi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)mn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(mn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mn.fromBufferAttribute(a,c),l&&(xo.fromBufferAttribute(e,c),mn.add(xo)),i=Math.max(i,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new U,l[C]=new U;const c=new U,u=new U,h=new U,f=new ke,d=new ke,g=new ke,_=new U,m=new U;function p(C,S,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),a[C].add(_),a[S].add(_),a[M].add(_),l[C].add(m),l[S].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,S=v.length;C<S;++C){const M=v[C],R=M.start,P=M.count;for(let O=R,B=R+P;O<B;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new U,y=new U,b=new U,E=new U;function w(C){b.fromBufferAttribute(i,C),E.copy(b);const S=a[C];x.copy(S),x.sub(b.multiplyScalar(b.dot(S))).normalize(),y.crossVectors(E,S);const R=y.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,R)}for(let C=0,S=v.length;C<S;++C){const M=v[C],R=M.start,P=M.count;for(let O=R,B=R+P;O<B;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Kn(f,u,h)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mp=new it,As=new Tl,Fl=new yr,gp=new U,Bl=new U,kl=new U,zl=new U,Iu=new U,Vl=new U,_p=new U,Hl=new U;class At extends Gt{constructor(e=new Qn,t=new Hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Iu.fromBufferAttribute(h,e),o?Vl.addScaledVector(Iu,u):Vl.addScaledVector(Iu.sub(t),u))}t.add(Vl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(s),As.copy(e.ray).recast(e.near),!(Fl.containsPoint(As.origin)===!1&&(As.intersectSphere(Fl,gp)===null||As.origin.distanceToSquared(gp)>(e.far-e.near)**2))&&(mp.copy(s).invert(),As.copy(e.ray).applyMatrix4(mp),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,b=x;y<b;y+=3){const E=a.getX(y),w=a.getX(y+1),C=a.getX(y+2);i=Gl(this,p,e,n,c,u,h,E,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=Gl(this,o,e,n,c,u,h,v,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,b=x;y<b;y+=3){const E=y,w=y+1,C=y+2;i=Gl(this,p,e,n,c,u,h,E,w,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,y=m+2;i=Gl(this,o,e,n,c,u,h,v,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function tx(r,e,t,n,i,s,o,a){let l;if(e.side===oi?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Vr,a),l===null)return null;Hl.copy(a),Hl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Hl);return c<t.near||c>t.far?null:{distance:c,point:Hl.clone(),object:r}}function Gl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Bl),r.getVertexPosition(l,kl),r.getVertexPosition(c,zl);const u=tx(r,e,t,n,Bl,kl,zl,_p);if(u){const h=new U;$i.getBarycoord(_p,Bl,kl,zl,h),i&&(u.uv=$i.getInterpolatedAttribute(i,a,l,c,h,new ke)),s&&(u.uv1=$i.getInterpolatedAttribute(s,a,l,c,h,new ke)),o&&(u.normal=$i.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};$i.getNormal(Bl,kl,zl,f.normal),u.face=f,u.barycoord=h}return u}class gs extends Qn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(h,2));function g(_,m,p,v,x,y,b,E,w,C,S){const M=y/w,R=b/C,P=y/2,O=b/2,B=E/2,V=w+1,k=C+1;let z=0,X=0;const Q=new U;for(let D=0;D<k;D++){const te=D*R-O;for(let Re=0;Re<V;Re++){const Pe=Re*M-P;Q[_]=Pe*v,Q[m]=te*x,Q[p]=B,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(Re/w),h.push(1-D/C),z+=1}}for(let D=0;D<C;D++)for(let te=0;te<w;te++){const Re=f+te+V*D,Pe=f+te+V*(D+1),De=f+(te+1)+V*(D+1),He=f+(te+1)+V*D;l.push(Re,Pe,He),l.push(Pe,De,He),X+=6}a.addGroup(d,X,S),d+=X,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Hn(r){const e={};for(let t=0;t<r.length;t++){const n=Zo(r[t]);for(const i in n)e[i]=n[i]}return e}function nx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Dg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const ix={clone:Zo,merge:Hn};var rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rx,this.fragmentShader=sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zo(e.uniforms),this.uniformsGroups=nx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tu extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=cr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new U,vp=new ke,xp=new ke;class yn extends tu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,vp,xp),t.subVectors(xp,vp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ga*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yo=-90,So=1;class ox extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yn(yo,So,e,t);i.layers=this.layers,this.add(i);const s=new yn(yo,So,e,t);s.layers=this.layers,this.add(s);const o=new yn(yo,So,e,t);o.layers=this.layers,this.add(o);const a=new yn(yo,So,e,t);a.layers=this.layers,this.add(a);const l=new yn(yo,So,e,t);l.layers=this.layers,this.add(l);const c=new yn(yo,So,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===cr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ic)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ig extends Mn{constructor(e=[],t=eo,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ng extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ig(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gs(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:Zo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:oi,blending:Br});s.uniforms.tEquirect.value=t;const o=new At(i,s),a=t.minFilter;return t.minFilter===Or&&(t.minFilter=un),new ox(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Sn extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ax={type:"move"};class Nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ax)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ha extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _r,this.environmentIntensity=1,this.environmentRotation=new _r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uf,this.updateRanges=[],this.version=0,this.uuid=ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new U;class rd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Nc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Kn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Nc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const yp=new U,Sp=new Ft,Mp=new Ft,cx=new U,bp=new it,Wl=new U,Ou=new yr,Tp=new it,Uu=new Tl;class ux extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kd,this.bindMatrix=new it,this.bindMatrixInverse=new it,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wl),this.boundingBox.expandByPoint(Wl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wl),this.boundingSphere.expandByPoint(Wl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ou.copy(this.boundingSphere),Ou.applyMatrix4(i),e.ray.intersectsSphere(Ou)!==!1&&(Tp.copy(i).invert(),Uu.copy(e.ray).applyMatrix4(Tp),!(this.boundingBox!==null&&Uu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cv?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ue("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Sp.fromBufferAttribute(i.attributes.skinIndex,e),Mp.fromBufferAttribute(i.attributes.skinWeight,e),yp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Mp.getComponent(s);if(o!==0){const a=Sp.getComponent(s);bp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(cx.copy(yp).applyMatrix4(bp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Og extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sd extends Mn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=cn,u=cn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ep=new it,hx=new it;class od{constructor(e=[],t=[]){this.uuid=ji(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ue("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new it)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new it;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:hx;Ep.multiplyMatrices(a,t[s]),Ep.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new od(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new sd(t,e,e,Fi,Ui);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(Ue("Skeleton: No bone found with UUID:",s),o=new Og),this.bones.push(o),this.boneInverses.push(new it().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class hf extends Kn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mo=new it,wp=new it,Xl=[],Ap=new Vt,fx=new it,ba=new At,Ta=new yr;class dx extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,fx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mo),Ap.copy(e.boundingBox).applyMatrix4(Mo),this.boundingBox.union(Ap)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mo),Ta.copy(e.boundingSphere).applyMatrix4(Mo),this.boundingSphere.union(Ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(n),e.ray.intersectsSphere(Ta)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Mo),wp.multiplyMatrices(n,Mo),ba.matrixWorld=wp,ba.raycast(e,Xl);for(let o=0,a=Xl.length;o<a;o++){const l=Xl[o];l.instanceId=s,l.object=this,t.push(l)}Xl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new sd(new Float32Array(i*this.count),i,this.count,jf,Ui));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fu=new U,px=new U,mx=new tt;class is{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Fu.subVectors(n,t).cross(px.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||mx.getNormalMatrix(e),i=this.coplanarPoint(Fu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new yr,gx=new ke(.5,.5),Yl=new U;class ad{constructor(e=new is,t=new is,n=new is,i=new is,s=new is,o=new is){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cr,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],v=s[12],x=s[13],y=s[14],b=s[15];if(i[0].setComponents(c-o,d-u,p-g,b-v).normalize(),i[1].setComponents(c+o,d+u,p+g,b+v).normalize(),i[2].setComponents(c+a,d+h,p+_,b+x).normalize(),i[3].setComponents(c-a,d-h,p-_,b-x).normalize(),n)i[4].setComponents(l,f,m,y).normalize(),i[5].setComponents(c-l,d-f,p-m,b-y).normalize();else if(i[4].setComponents(c-l,d-f,p-m,b-y).normalize(),t===cr)i[5].setComponents(c+l,d+f,p+m,b+y).normalize();else if(t===Ic)i[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);const t=gx.distanceTo(e.center);return Cs.radius=.7071067811865476+t,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Yl.x=i.normal.x>0?e.max.x:e.min.x,Yl.y=i.normal.y>0?e.max.y:e.min.y,Yl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ug extends Ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oc=new U,Uc=new U,Cp=new it,Ea=new Tl,ql=new yr,Bu=new U,Rp=new U;class ld extends Gt{constructor(e=new Qn,t=new Ug){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Oc.fromBufferAttribute(t,i-1),Uc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Oc.distanceTo(Uc);e.setAttribute("lineDistance",new nn(n,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ql.copy(n.boundingSphere),ql.applyMatrix4(i),ql.radius+=s,e.ray.intersectsSphere(ql)===!1)return;Cp.copy(i).invert(),Ea.copy(e.ray).applyMatrix4(Cp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),v=u.getX(_+1),x=$l(this,e,Ea,l,p,v,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=$l(this,e,Ea,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=$l(this,e,Ea,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=$l(this,e,Ea,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $l(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Oc.fromBufferAttribute(a,i),Uc.fromBufferAttribute(a,s),t.distanceSqToSegment(Oc,Uc,Bu,Rp)>n)return;Bu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Bu);if(!(c<e.near||c>e.far))return{distance:c,point:Rp.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Pp=new U,Lp=new U;class _x extends ld{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Pp.fromBufferAttribute(t,i),Lp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pp.distanceTo(Lp);e.setAttribute("lineDistance",new nn(n,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vx extends ld{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fg extends Ki{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dp=new it,ff=new Tl,jl=new yr,Kl=new U;class xx extends Gt{constructor(e=new Qn,t=new Fg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jl.copy(n.boundingSphere),jl.applyMatrix4(i),jl.radius+=s,e.ray.intersectsSphere(jl)===!1)return;Dp.copy(i).invert(),ff.copy(e.ray).applyMatrix4(Dp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Kl.fromBufferAttribute(h,m),Ip(Kl,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Kl.fromBufferAttribute(h,g),Ip(Kl,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ip(r,e,t,n,i,s,o){const a=ff.distanceSqToPoint(r);if(a<t){const l=new U;ff.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class fl extends Mn{constructor(e,t,n=mr,i,s,o,a=cn,l=cn,c,u=Gr,h=1){if(u!==Gr&&u!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new id(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yx extends fl{constructor(e,t=mr,n=eo,i,s,o=cn,a=cn,l,c=Gr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bg extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fc extends Qn{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new nn(h,3)),this.setAttribute("normal",new nn(f,3)),this.setAttribute("uv",new nn(d,2));function v(){const y=new U,b=new U;let E=0;const w=(t-e)/n;for(let C=0;C<=s;C++){const S=[],M=C/s,R=M*(t-e)+e;for(let P=0;P<=i;P++){const O=P/i,B=O*l+a,V=Math.sin(B),k=Math.cos(B);b.x=R*V,b.y=-M*n+m,b.z=R*k,h.push(b.x,b.y,b.z),y.set(V,w,k).normalize(),f.push(y.x,y.y,y.z),d.push(O,1-M),S.push(g++)}_.push(S)}for(let C=0;C<i;C++)for(let S=0;S<s;S++){const M=_[S][C],R=_[S+1][C],P=_[S+1][C+1],O=_[S][C+1];(e>0||S!==0)&&(u.push(M,R,O),E+=3),(t>0||S!==s-1)&&(u.push(R,P,O),E+=3)}c.addGroup(p,E,0),p+=E}function x(y){const b=g,E=new ke,w=new U;let C=0;const S=y===!0?e:t,M=y===!0?1:-1;for(let P=1;P<=i;P++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const R=g;for(let P=0;P<=i;P++){const B=P/i*l+a,V=Math.cos(B),k=Math.sin(B);w.x=S*k,w.y=m*M,w.z=S*V,h.push(w.x,w.y,w.z),f.push(0,M,0),E.x=V*.5+.5,E.y=k*.5*M+.5,d.push(E.x,E.y),g++}for(let P=0;P<i;P++){const O=b+P,B=R+P;y===!0?u.push(B,B+1,O):u.push(B+1,B,O),C+=3}c.addGroup(p,C,y===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cd extends Qn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new nn(s,3)),this.setAttribute("normal",new nn(s.slice(),3)),this.setAttribute("uv",new nn(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new U,y=new U,b=new U;for(let E=0;E<t.length;E+=3)d(t[E+0],x),d(t[E+1],y),d(t[E+2],b),l(x,y,b,v)}function l(v,x,y,b){const E=b+1,w=[];for(let C=0;C<=E;C++){w[C]=[];const S=v.clone().lerp(y,C/E),M=x.clone().lerp(y,C/E),R=E-C;for(let P=0;P<=R;P++)P===0&&C===E?w[C][P]=S:w[C][P]=S.clone().lerp(M,P/R)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){const M=Math.floor(S/2);S%2===0?(f(w[C][M+1]),f(w[C+1][M]),f(w[C][M])):(f(w[C][M+1]),f(w[C+1][M+1]),f(w[C+1][M]))}}function c(v){const x=new U;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(v),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function u(){const v=new U;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const y=m(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;o.push(y,1-b)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const x=o[v+0],y=o[v+2],b=o[v+4],E=Math.max(x,y,b),w=Math.min(x,y,b);E>.9&&w<.1&&(x<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function d(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function g(){const v=new U,x=new U,y=new U,b=new U,E=new ke,w=new ke,C=new ke;for(let S=0,M=0;S<s.length;S+=9,M+=6){v.set(s[S+0],s[S+1],s[S+2]),x.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),E.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),b.copy(v).add(x).add(y).divideScalar(3);const R=m(b);_(E,M+0,v,R),_(w,M+2,x,R),_(C,M+4,y,R)}}function _(v,x,y,b){b<0&&v.x===1&&(o[x]=v.x-1),y.x===0&&y.z===0&&(o[x]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cd(e.vertices,e.indices,e.radius,e.detail)}}class ud extends cd{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ud(e.radius,e.detail)}}class Yr extends Qn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*f-o;for(let x=0;x<c;x++){const y=x*h-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+c*p,y=v+c*(p+1),b=v+1+c*(p+1),E=v+1+c*p;d.push(x,y,E),d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.width,e.height,e.widthSegments,e.heightSegments)}}class hd extends Qn{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new U,h=new U,f=new U;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*s,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,v=(i+1)*d+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new nn(a,3)),this.setAttribute("normal",new nn(l,3)),this.setAttribute("uv",new nn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Sx extends Jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ms extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sr extends Ms{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Mx extends Ki{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class bx extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tx extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Zl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ex(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Np(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function kg(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class El{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wx extends El{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zd,endingEnd:Zd}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jd:s=e,a=2*t-n;break;case Qd:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jd:o=e,l=2*n-t;break;case Qd:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let b=0;b!==a;++b)s[b]=p*o[u+b]+v*o[c+b]+x*o[l+b]+y*o[h+b];return s}}class Ax extends El{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class Cx extends El{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ji{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zl(t,this.TimeBufferType),this.values=Zl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zl(e.times,Array),values:Zl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ax(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ll:t=this.InterpolantFactoryMethodDiscrete;break;case cl:t=this.InterpolantFactoryMethodLinear;break;case du:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ue("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ll;case this.InterpolantFactoryMethodLinear:return cl;case this.InterpolantFactoryMethodSmooth:return du}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&yv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===du,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ji.prototype.ValueTypeName="";Ji.prototype.TimeBufferType=Float32Array;Ji.prototype.ValueBufferType=Float32Array;Ji.prototype.DefaultInterpolation=cl;class fa extends Ji{constructor(e,t,n){super(e,t,n)}}fa.prototype.ValueTypeName="bool";fa.prototype.ValueBufferType=Array;fa.prototype.DefaultInterpolation=ll;fa.prototype.InterpolantFactoryMethodLinear=void 0;fa.prototype.InterpolantFactoryMethodSmooth=void 0;class zg extends Ji{constructor(e,t,n,i){super(e,t,n,i)}}zg.prototype.ValueTypeName="color";class Jo extends Ji{constructor(e,t,n,i){super(e,t,n,i)}}Jo.prototype.ValueTypeName="number";class Rx extends El{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)gr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Qo extends Ji{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Rx(this.times,this.values,this.getValueSize(),e)}}Qo.prototype.ValueTypeName="quaternion";Qo.prototype.InterpolantFactoryMethodSmooth=void 0;class da extends Ji{constructor(e,t,n){super(e,t,n)}}da.prototype.ValueTypeName="string";da.prototype.ValueBufferType=Array;da.prototype.DefaultInterpolation=ll;da.prototype.InterpolantFactoryMethodLinear=void 0;da.prototype.InterpolantFactoryMethodSmooth=void 0;class ea extends Ji{constructor(e,t,n,i){super(e,t,n,i)}}ea.prototype.ValueTypeName="vector";class Px{constructor(e="",t=-1,n=[],i=uv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ji(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Dx(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Ji.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Ex(l);l=Np(l,1,u),c=Np(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Jo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Ue("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return qe("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];kg(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){const x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Jo(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(ea,d+".position",f,"pos",i),n(Qo,d+".quaternion",f,"rot",i),n(ea,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Lx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Jo;case"vector":case"vector2":case"vector3":case"vector4":return ea;case"color":return zg;case"quaternion":return Qo;case"bool":case"boolean":return fa;case"string":return da}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Dx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Lx(r.type);if(r.times===void 0){const t=[],n=[];kg(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ur={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ix{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Nx=new Ix;class pa{constructor(e){this.manager=e!==void 0?e:Nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}pa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rr={};class Ox extends Error{constructor(e,t){super(e),this.response=t}}class Vg extends pa{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ur.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Rr[e]!==void 0){Rr[e].push({onLoad:t,onProgress:n,onError:i});return}Rr[e]=[],Rr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ue("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Rr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let E=0,w=u.length;E<w;E++){const C=u[E];C.onProgress&&C.onProgress(b)}p.enqueue(y),v()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Ox(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ur.add(`file:${e}`,c);const u=Rr[e];delete Rr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Rr[e];if(u===void 0)throw this.manager.itemError(e),c;delete Rr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const bo=new WeakMap;class Ux extends pa{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ur.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=bo.get(o);h===void 0&&(h=[],bo.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=ul("img");function l(){u(),t&&t(this);const h=bo.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}bo.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),Ur.remove(`image:${e}`);const f=bo.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}bo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ur.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class Fx extends pa{constructor(e){super(e)}load(e,t,n,i){const s=new Mn,o=new Ux(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class nu extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ku=new it,Op=new U,Up=new U;class fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ad,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Op.setFromMatrixPosition(e.matrixWorld),t.position.copy(Op),Up.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Up),t.updateMatrixWorld(),ku.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ku,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bx extends fd{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ko*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kx extends nu{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Bx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class zx extends fd{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}}class Vx extends nu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class iu extends tu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hx extends fd{constructor(){super(new iu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zi extends nu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Hx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ru extends nu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const zu=new WeakMap;class Gx extends pa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ue("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ue("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ur.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(zu.has(o)===!0)i&&i(zu.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ur.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),zu.set(l,c),Ur.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ur.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Wx extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ma{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const dd="\\[\\]\\.:\\/",Xx=new RegExp("["+dd+"]","g"),pd="[^"+dd+"]",Yx="[^"+dd.replace("\\.","")+"]",qx=/((?:WC+[\/:])*)/.source.replace("WC",pd),$x=/(WCOD+)?/.source.replace("WCOD",Yx),jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pd),Kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pd),Zx=new RegExp("^"+qx+$x+jx+Kx+"$"),Jx=["material","materials","bones","map"];class Qx{constructor(e,t,n){const i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xx,"")}static parseTrackName(e){const t=Zx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Jx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=Qx;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fp{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=st(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(st(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ey extends ro{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ue("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Bp(r,e,t,n){const i=ty(n);switch(t){case bg:return r*e;case jf:return r*e/i.components*i.byteLength;case Kf:return r*e/i.components*i.byteLength;case jo:return r*e*2/i.components*i.byteLength;case Zf:return r*e*2/i.components*i.byteLength;case Tg:return r*e*3/i.components*i.byteLength;case Fi:return r*e*4/i.components*i.byteLength;case Jf:return r*e*4/i.components*i.byteLength;case _c:case vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xc:case yc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lh:case Ih:return Math.max(r,16)*Math.max(e,8)/4;case Ph:case Dh:return Math.max(r,8)*Math.max(e,8)/2;case Nh:case Oh:case Fh:case Bh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Uh:case kh:case zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case qh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case $h:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case jh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ef:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case tf:case nf:case rf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case sf:case of:return Math.ceil(r/4)*Math.ceil(e/4)*8;case af:case lf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ty(r){switch(r){case Si:case xg:return{byteLength:1,components:1};case ol:case yg:case Hr:return{byteLength:2,components:1};case qf:case $f:return{byteLength:2,components:4};case mr:case Yf:case Ui:return{byteLength:4,components:1};case Sg:case Mg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xf}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xf);function Hg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ny(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var iy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ry=`#ifdef USE_ALPHAHASH
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
#endif`,sy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ay=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ly=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cy=`#ifdef USE_AOMAP
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
#endif`,uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hy=`#ifdef USE_BATCHING
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
#endif`,fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,py=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,my=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gy=`#ifdef USE_IRIDESCENCE
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
#endif`,_y=`#ifdef USE_BUMPMAP
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
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wy=`#define PI 3.141592653589793
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
} // validated`,Ay=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Py=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ny=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wy=`#ifdef USE_GRADIENTMAP
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
}`,Xy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$y=`uniform bool receiveShadow;
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
#endif`,jy=`#ifdef USE_ENVMAP
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
#endif`,Ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eS=`PhysicalMaterial material;
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
#endif`,tS=`uniform sampler2D dfgLUT;
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
}`,nS=`
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
#endif`,iS=`#if defined( RE_IndirectDiffuse )
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
#endif`,rS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fS=`#if defined( USE_POINTS_UV )
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
#endif`,dS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_S=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vS=`#ifdef USE_MORPHTARGETS
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
#endif`,xS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,SS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,MS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ES=`#ifdef USE_NORMALMAP
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
#endif`,wS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,US=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VS=`float getShadowMask() {
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
}`,HS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GS=`#ifdef USE_SKINNING
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
#endif`,WS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XS=`#ifdef USE_SKINNING
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
#endif`,YS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$S=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KS=`#ifdef USE_TRANSMISSION
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
#endif`,ZS=`#ifdef USE_TRANSMISSION
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
#endif`,JS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iM=`uniform sampler2D t2D;
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`#include <common>
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
}`,cM=`#if DEPTH_PACKING == 3200
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
}`,uM=`#define DISTANCE
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
}`,hM=`#define DISTANCE
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
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pM=`uniform float scale;
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
}`,mM=`uniform vec3 diffuse;
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
}`,gM=`#include <common>
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
}`,_M=`uniform vec3 diffuse;
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
}`,vM=`#define LAMBERT
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
}`,xM=`#define LAMBERT
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
}`,yM=`#define MATCAP
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
}`,SM=`#define MATCAP
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
}`,MM=`#define NORMAL
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
}`,bM=`#define NORMAL
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
}`,TM=`#define PHONG
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
}`,EM=`#define PHONG
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
}`,wM=`#define STANDARD
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
}`,AM=`#define STANDARD
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
}`,CM=`#define TOON
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
}`,RM=`#define TOON
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
}`,PM=`uniform float size;
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
}`,LM=`uniform vec3 diffuse;
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
}`,DM=`#include <common>
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
}`,IM=`uniform vec3 color;
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
}`,NM=`uniform float rotation;
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
}`,OM=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:iy,alphahash_pars_fragment:ry,alphamap_fragment:sy,alphamap_pars_fragment:oy,alphatest_fragment:ay,alphatest_pars_fragment:ly,aomap_fragment:cy,aomap_pars_fragment:uy,batching_pars_vertex:hy,batching_vertex:fy,begin_vertex:dy,beginnormal_vertex:py,bsdfs:my,iridescence_fragment:gy,bumpmap_pars_fragment:_y,clipping_planes_fragment:vy,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:yy,clipping_planes_vertex:Sy,color_fragment:My,color_pars_fragment:by,color_pars_vertex:Ty,color_vertex:Ey,common:wy,cube_uv_reflection_fragment:Ay,defaultnormal_vertex:Cy,displacementmap_pars_vertex:Ry,displacementmap_vertex:Py,emissivemap_fragment:Ly,emissivemap_pars_fragment:Dy,colorspace_fragment:Iy,colorspace_pars_fragment:Ny,envmap_fragment:Oy,envmap_common_pars_fragment:Uy,envmap_pars_fragment:Fy,envmap_pars_vertex:By,envmap_physical_pars_fragment:jy,envmap_vertex:ky,fog_vertex:zy,fog_pars_vertex:Vy,fog_fragment:Hy,fog_pars_fragment:Gy,gradientmap_pars_fragment:Wy,lightmap_pars_fragment:Xy,lights_lambert_fragment:Yy,lights_lambert_pars_fragment:qy,lights_pars_begin:$y,lights_toon_fragment:Ky,lights_toon_pars_fragment:Zy,lights_phong_fragment:Jy,lights_phong_pars_fragment:Qy,lights_physical_fragment:eS,lights_physical_pars_fragment:tS,lights_fragment_begin:nS,lights_fragment_maps:iS,lights_fragment_end:rS,logdepthbuf_fragment:sS,logdepthbuf_pars_fragment:oS,logdepthbuf_pars_vertex:aS,logdepthbuf_vertex:lS,map_fragment:cS,map_pars_fragment:uS,map_particle_fragment:hS,map_particle_pars_fragment:fS,metalnessmap_fragment:dS,metalnessmap_pars_fragment:pS,morphinstance_vertex:mS,morphcolor_vertex:gS,morphnormal_vertex:_S,morphtarget_pars_vertex:vS,morphtarget_vertex:xS,normal_fragment_begin:yS,normal_fragment_maps:SS,normal_pars_fragment:MS,normal_pars_vertex:bS,normal_vertex:TS,normalmap_pars_fragment:ES,clearcoat_normal_fragment_begin:wS,clearcoat_normal_fragment_maps:AS,clearcoat_pars_fragment:CS,iridescence_pars_fragment:RS,opaque_fragment:PS,packing:LS,premultiplied_alpha_fragment:DS,project_vertex:IS,dithering_fragment:NS,dithering_pars_fragment:OS,roughnessmap_fragment:US,roughnessmap_pars_fragment:FS,shadowmap_pars_fragment:BS,shadowmap_pars_vertex:kS,shadowmap_vertex:zS,shadowmask_pars_fragment:VS,skinbase_vertex:HS,skinning_pars_vertex:GS,skinning_vertex:WS,skinnormal_vertex:XS,specularmap_fragment:YS,specularmap_pars_fragment:qS,tonemapping_fragment:$S,tonemapping_pars_fragment:jS,transmission_fragment:KS,transmission_pars_fragment:ZS,uv_pars_fragment:JS,uv_pars_vertex:QS,uv_vertex:eM,worldpos_vertex:tM,background_vert:nM,background_frag:iM,backgroundCube_vert:rM,backgroundCube_frag:sM,cube_vert:oM,cube_frag:aM,depth_vert:lM,depth_frag:cM,distance_vert:uM,distance_frag:hM,equirect_vert:fM,equirect_frag:dM,linedashed_vert:pM,linedashed_frag:mM,meshbasic_vert:gM,meshbasic_frag:_M,meshlambert_vert:vM,meshlambert_frag:xM,meshmatcap_vert:yM,meshmatcap_frag:SM,meshnormal_vert:MM,meshnormal_frag:bM,meshphong_vert:TM,meshphong_frag:EM,meshphysical_vert:wM,meshphysical_frag:AM,meshtoon_vert:CM,meshtoon_frag:RM,points_vert:PM,points_frag:LM,shadow_vert:DM,shadow_frag:IM,sprite_vert:NM,sprite_frag:OM},xe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},sr={basic:{uniforms:Hn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Hn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Hn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Hn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Hn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new je(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Hn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Hn([xe.points,xe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Hn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Hn([xe.common,xe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Hn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Hn([xe.sprite,xe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Hn([xe.common,xe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Hn([xe.lights,xe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};sr.physical={uniforms:Hn([sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Jl={r:0,b:0,g:0},Rs=new _r,UM=new it;function FM(r,e,t,n,i,s,o){const a=new je(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const b=g(x);b===null?p(a,l):b&&b.isColor&&(p(b,1),y=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===eu)?(u===void 0&&(u=new At(new gs(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Zo(sr.backgroundCube.uniforms),vertexShader:sr.backgroundCube.vertexShader,fragmentShader:sr.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Rs.copy(y.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(UM.makeRotationFromEuler(Rs)),u.material.toneMapped=ft.getTransfer(b.colorSpace)!==Mt,(h!==b||f!==b.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new At(new Yr(2,2),new Jn({name:"BackgroundMaterial",uniforms:Zo(sr.background.uniforms),vertexShader:sr.background.vertexShader,fragmentShader:sr.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ft.getTransfer(b.colorSpace)!==Mt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Jl,Dg(r)),n.buffers.color.setClear(Jl.r,Jl.g,Jl.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m,dispose:v}}function BM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(M,R,P,O,B){let V=!1;const k=h(O,P,R);s!==k&&(s=k,c(s.object)),V=d(M,O,P,B),V&&g(M,O,P,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(M,R,P,O),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function h(M,R,P){const O=P.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let V=B[R.id];V===void 0&&(V={},B[R.id]=V);let k=V[O];return k===void 0&&(k=f(l()),V[O]=k),k}function f(M){const R=[],P=[],O=[];for(let B=0;B<t;B++)R[B]=0,P[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:P,attributeDivisors:O,object:M,attributes:{},index:null}}function d(M,R,P,O){const B=s.attributes,V=R.attributes;let k=0;const z=P.getAttributes();for(const X in z)if(z[X].location>=0){const D=B[X];let te=V[X];if(te===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),D===void 0||D.attribute!==te||te&&D.data!==te.data)return!0;k++}return s.attributesNum!==k||s.index!==O}function g(M,R,P,O){const B={},V=R.attributes;let k=0;const z=P.getAttributes();for(const X in z)if(z[X].location>=0){let D=V[X];D===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(D=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(D=M.instanceColor));const te={};te.attribute=D,D&&D.data&&(te.data=D.data),B[X]=te,k++}s.attributes=B,s.attributesNum=k,s.index=O}function _(){const M=s.newAttributes;for(let R=0,P=M.length;R<P;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const P=s.newAttributes,O=s.enabledAttributes,B=s.attributeDivisors;P[M]=1,O[M]===0&&(r.enableVertexAttribArray(M),O[M]=1),B[M]!==R&&(r.vertexAttribDivisor(M,R),B[M]=R)}function v(){const M=s.newAttributes,R=s.enabledAttributes;for(let P=0,O=R.length;P<O;P++)R[P]!==M[P]&&(r.disableVertexAttribArray(P),R[P]=0)}function x(M,R,P,O,B,V,k){k===!0?r.vertexAttribIPointer(M,R,P,B,V):r.vertexAttribPointer(M,R,P,O,B,V)}function y(M,R,P,O){_();const B=O.attributes,V=P.getAttributes(),k=R.defaultAttributeValues;for(const z in V){const X=V[z];if(X.location>=0){let Q=B[z];if(Q===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const D=Q.normalized,te=Q.itemSize,Re=e.get(Q);if(Re===void 0)continue;const Pe=Re.buffer,De=Re.type,He=Re.bytesPerElement,j=De===r.INT||De===r.UNSIGNED_INT||Q.gpuType===Yf;if(Q.isInterleavedBufferAttribute){const J=Q.data,he=J.stride,Ie=Q.offset;if(J.isInstancedInterleavedBuffer){for(let ye=0;ye<X.locationSize;ye++)p(X.location+ye,J.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<X.locationSize;ye++)m(X.location+ye);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let ye=0;ye<X.locationSize;ye++)x(X.location+ye,te/X.locationSize,De,D,he*He,(Ie+te/X.locationSize*ye)*He,j)}else{if(Q.isInstancedBufferAttribute){for(let J=0;J<X.locationSize;J++)p(X.location+J,Q.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let J=0;J<X.locationSize;J++)m(X.location+J);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let J=0;J<X.locationSize;J++)x(X.location+J,te/X.locationSize,De,D,te*He,te/X.locationSize*J*He,j)}}else if(k!==void 0){const D=k[z];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(X.location,D);break;case 3:r.vertexAttrib3fv(X.location,D);break;case 4:r.vertexAttrib4fv(X.location,D);break;default:r.vertexAttrib1fv(X.location,D)}}}}v()}function b(){C();for(const M in n){const R=n[M];for(const P in R){const O=R[P];for(const B in O)u(O[B].object),delete O[B];delete R[P]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const P in R){const O=R[P];for(const B in O)u(O[B].object),delete O[B];delete R[P]}delete n[M.id]}function w(M){for(const R in n){const P=n[R];if(P[M.id]===void 0)continue;const O=P[M.id];for(const B in O)u(O[B].object),delete O[B];delete P[M.id]}}function C(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function kM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Fi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===Hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Si&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ui&&!C)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ue("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,maxSamples:b,samples:E}}function VM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new is,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,x=v*4;let y=p.clippingState||null;l.value=y,y=u(g,f,x,d);for(let b=0;b!==x;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=d;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function HM(r){let e=new WeakMap;function t(o,a){return a===Ch?o.mapping=eo:a===Rh&&(o.mapping=qo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ch||a===Rh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ng(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const ss=4,kp=[.125,.215,.35,.446,.526,.582],zs=20,GM=256,wa=new iu,zp=new je;let Vu=null,Hu=0,Gu=0,Wu=!1;const WM=new U;class Vp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=WM}=s;Vu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vu,Hu,Gu),this._renderer.xr.enabled=Wu,e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===eo||e.mapping===qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Hr,format:Fi,colorSpace:Zn,depthBuffer:!1},i=Hp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hp(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XM(s)),this._blurMaterial=qM(s,e,t),this._ggxMaterial=YM(s,e,t)}return i}_compileMaterial(e){const t=new At(new Qn,e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,i,s){const l=new yn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(zp),h.toneMapping=fr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new gs,new Hs({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(zp),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const b=this._cubeSize;To(i,y*b,x>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(_,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===eo||e.mapping===qo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;To(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-ss?n-g+ss:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,To(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(a,wa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,To(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(a,wa)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*zs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):zs;m>zs&&Ue(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zs}`);const p=[];let v=0;for(let w=0;w<zs;++w){const C=w/_,S=Math.exp(-C*C/2);p.push(S),w===0?v+=S:w<m&&(v+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[i],b=3*y*(i>x-ss?i-x+ss:0),E=4*(this._cubeSize-y);To(t,b,E,3*y,2*y),l.setRenderTarget(t),l.render(h,wa)}}function XM(r){const e=[],t=[],n=[];let i=r;const s=r-ss+1+kp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-ss?l=kp[o-r+ss-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),x=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,C=E>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];v.set(S,_*g*E),x.set(f,m*g*E);const M=[E,E,E,E,E,E];y.set(M,p*g*E)}const b=new Qn;b.setAttribute("position",new Kn(v,_)),b.setAttribute("uv",new Kn(x,m)),b.setAttribute("faceIndex",new Kn(y,p)),n.push(new At(b,null)),i>ss&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Hp(r,e,t){const n=new Un(r,e,t);return n.texture.mapping=eu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function To(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function YM(r,e,t){return new Jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function qM(r,e,t){const n=new Float32Array(zs),i=new U(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:su(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Gp(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Wp(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function su(){return`

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
	`}function $M(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ch||l===Rh,u=l===eo||l===qo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Vp(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Vp(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function jM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&hl("WebGLRenderer: "+n+" extension not supported."),i}}}function KM(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let x=0,y=v.length;x<y;x+=3){const b=v[x+0],E=v[x+1],w=v[x+2];f.push(b,E,E,w,w,b)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const b=x+0,E=x+1,w=x+2;f.push(b,E,E,w,w,b)}}else return;const m=new(wg(f)?Lg:Pg)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ZM(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function JM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function QM(r,e,t){const n=new WeakMap,i=new Ft;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*b*4*h),w=new Ag(E,y,b,h);w.type=Ui,w.needsUpdate=!0;const C=x*4;for(let M=0;M<h;M++){const R=m[M],P=p[M],O=v[M],B=y*b*4*M;for(let V=0;V<R.count;V++){const k=V*C;d===!0&&(i.fromBufferAttribute(R,V),E[B+k+0]=i.x,E[B+k+1]=i.y,E[B+k+2]=i.z,E[B+k+3]=0),g===!0&&(i.fromBufferAttribute(P,V),E[B+k+4]=i.x,E[B+k+5]=i.y,E[B+k+6]=i.z,E[B+k+7]=0),_===!0&&(i.fromBufferAttribute(O,V),E[B+k+8]=i.x,E[B+k+9]=i.y,E[B+k+10]=i.z,E[B+k+11]=O.itemSize===4?i.w:1)}}f={count:h,texture:w,size:new ke(y,b)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function eb(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const tb={[ug]:"LINEAR_TONE_MAPPING",[hg]:"REINHARD_TONE_MAPPING",[fg]:"CINEON_TONE_MAPPING",[dg]:"ACES_FILMIC_TONE_MAPPING",[mg]:"AGX_TONE_MAPPING",[gg]:"NEUTRAL_TONE_MAPPING",[pg]:"CUSTOM_TONE_MAPPING"};function nb(r,e,t,n,i){const s=new Un(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new Un(e,t,{type:Hr,depthBuffer:!1,stencilBuffer:!1}),a=new Qn;a.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new nn([0,2,0,0,2,0],2));const l=new Sx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new At(a,l),u=new iu(-1,1,1,-1,0,1);let h=null,f=null,d=!1,g,_=null,m=[],p=!1;this.setSize=function(v,x){s.setSize(v,x),o.setSize(v,x);for(let y=0;y<m.length;y++){const b=m[y];b.setSize&&b.setSize(v,x)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const x=s.width,y=s.height;for(let b=0;b<m.length;b++){const E=m[b];E.setSize&&E.setSize(x,y)}},this.begin=function(v,x){if(d||v.toneMapping===fr&&m.length===0)return!1;if(_=x,x!==null){const y=x.width,b=x.height;(s.width!==y||s.height!==b)&&this.setSize(y,b)}return p===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=fr,!0},this.hasRenderPass=function(){return p},this.end=function(v,x){v.toneMapping=g,d=!0;let y=s,b=o;for(let E=0;E<m.length;E++){const w=m[E];if(w.enabled!==!1&&(w.render(v,b,y,x),w.needsSwap!==!1)){const C=y;y=b,b=C}}if(h!==v.outputColorSpace||f!==v.toneMapping){h=v.outputColorSpace,f=v.toneMapping,l.defines={},ft.getTransfer(h)===Mt&&(l.defines.SRGB_TRANSFER="");const E=tb[f];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(_),v.render(c,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Gg=new Mn,df=new fl(1,1),Wg=new Ag,Xg=new Wv,Yg=new Ig,Xp=[],Yp=[],qp=new Float32Array(16),$p=new Float32Array(9),jp=new Float32Array(4);function ga(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Xp[i];if(s===void 0&&(s=new Float32Array(i),Xp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function hn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function fn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ou(r,e){let t=Yp[e];t===void 0&&(t=new Int32Array(e),Yp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ib(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2fv(this.addr,e),fn(t,e)}}function sb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;r.uniform3fv(this.addr,e),fn(t,e)}}function ob(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4fv(this.addr,e),fn(t,e)}}function ab(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;jp.set(n),r.uniformMatrix2fv(this.addr,!1,jp),fn(t,n)}}function lb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;$p.set(n),r.uniformMatrix3fv(this.addr,!1,$p),fn(t,n)}}function cb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;qp.set(n),r.uniformMatrix4fv(this.addr,!1,qp),fn(t,n)}}function ub(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function hb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2iv(this.addr,e),fn(t,e)}}function fb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3iv(this.addr,e),fn(t,e)}}function db(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4iv(this.addr,e),fn(t,e)}}function pb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2uiv(this.addr,e),fn(t,e)}}function gb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3uiv(this.addr,e),fn(t,e)}}function _b(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4uiv(this.addr,e),fn(t,e)}}function vb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(df.compareFunction=t.isReversedDepthBuffer()?td:ed,s=df):s=Gg,t.setTexture2D(e||s,i)}function xb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xg,i)}function yb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Yg,i)}function Sb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wg,i)}function Mb(r){switch(r){case 5126:return ib;case 35664:return rb;case 35665:return sb;case 35666:return ob;case 35674:return ab;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return ub;case 35667:case 35671:return hb;case 35668:case 35672:return fb;case 35669:case 35673:return db;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return Sb}}function bb(r,e){r.uniform1fv(this.addr,e)}function Tb(r,e){const t=ga(e,this.size,2);r.uniform2fv(this.addr,t)}function Eb(r,e){const t=ga(e,this.size,3);r.uniform3fv(this.addr,t)}function wb(r,e){const t=ga(e,this.size,4);r.uniform4fv(this.addr,t)}function Ab(r,e){const t=ga(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Cb(r,e){const t=ga(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Rb(r,e){const t=ga(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Pb(r,e){r.uniform1iv(this.addr,e)}function Lb(r,e){r.uniform2iv(this.addr,e)}function Db(r,e){r.uniform3iv(this.addr,e)}function Ib(r,e){r.uniform4iv(this.addr,e)}function Nb(r,e){r.uniform1uiv(this.addr,e)}function Ob(r,e){r.uniform2uiv(this.addr,e)}function Ub(r,e){r.uniform3uiv(this.addr,e)}function Fb(r,e){r.uniform4uiv(this.addr,e)}function Bb(r,e,t){const n=this.cache,i=e.length,s=ou(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=df:o=Gg;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function kb(r,e,t){const n=this.cache,i=e.length,s=ou(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Xg,s[o])}function zb(r,e,t){const n=this.cache,i=e.length,s=ou(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Yg,s[o])}function Vb(r,e,t){const n=this.cache,i=e.length,s=ou(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),fn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wg,s[o])}function Hb(r){switch(r){case 5126:return bb;case 35664:return Tb;case 35665:return Eb;case 35666:return wb;case 35674:return Ab;case 35675:return Cb;case 35676:return Rb;case 5124:case 35670:return Pb;case 35667:case 35671:return Lb;case 35668:case 35672:return Db;case 35669:case 35673:return Ib;case 5125:return Nb;case 36294:return Ob;case 36295:return Ub;case 36296:return Fb;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return zb;case 36289:case 36303:case 36311:case 36292:return Vb}}class Gb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mb(t.type)}}class Wb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hb(t.type)}}class Xb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Xu=/(\w+)(\])?(\[|\.)?/g;function Kp(r,e){r.seq.push(e),r.map[e.id]=e}function Yb(r,e,t){const n=r.name,i=n.length;for(Xu.lastIndex=0;;){const s=Xu.exec(n),o=Xu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Kp(t,c===void 0?new Gb(a,r,e):new Wb(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Xb(a),Kp(t,h)),t=h}}}class Sc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Yb(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Zp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const qb=37297;let $b=0;function jb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Jp=new tt;function Kb(r){ft._getMatrix(Jp,ft.workingColorSpace,r);const e=`mat3( ${Jp.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case Dc:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Qp(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+jb(r.getShaderSource(e),a)}else return s}function Zb(r,e){const t=Kb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Jb={[ug]:"Linear",[hg]:"Reinhard",[fg]:"Cineon",[dg]:"ACESFilmic",[mg]:"AgX",[gg]:"Neutral",[pg]:"Custom"};function Qb(r,e){const t=Jb[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ql=new U;function eT(){ft.getLuminanceCoefficients(Ql);const r=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function nT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Na(r){return r!==""}function em(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rT=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(r){return r.replace(rT,oT)}const sT=new Map;function oT(r,e){let t=nt[e];if(t===void 0){const n=sT.get(e);if(n!==void 0)t=nt[n],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pf(t)}const aT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nm(r){return r.replace(aT,lT)}function lT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function im(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const cT={[mc]:"SHADOWMAP_TYPE_PCF",[Da]:"SHADOWMAP_TYPE_VSM"};function uT(r){return cT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hT={[eo]:"ENVMAP_TYPE_CUBE",[qo]:"ENVMAP_TYPE_CUBE",[eu]:"ENVMAP_TYPE_CUBE_UV"};function fT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":hT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const dT={[qo]:"ENVMAP_MODE_REFRACTION"};function pT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":dT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mT={[cg]:"ENVMAP_BLENDING_MULTIPLY",[av]:"ENVMAP_BLENDING_MIX",[lv]:"ENVMAP_BLENDING_ADD"};function gT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":mT[r.combine]||"ENVMAP_BLENDING_NONE"}function _T(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vT(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=uT(t),c=fT(t),u=pT(t),h=gT(t),f=_T(t),d=tT(t),g=nT(s),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Na).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Na).join(`
`),p.length>0&&(p+=`
`)):(m=[im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),p=[im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?nt.tonemapping_pars_fragment:"",t.toneMapping!==fr?Qb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Zb("linearToOutputTexel",t.outputColorSpace),eT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),o=pf(o),o=em(o,t),o=tm(o,t),a=pf(a),a=em(a,t),a=tm(a,t),o=nm(o),a=nm(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,y=v+p+a,b=Zp(i,i.VERTEX_SHADER,x),E=Zp(i,i.FRAGMENT_SHADER,y);i.attachShader(_,b),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(R){if(r.debug.checkShaderErrors){const P=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(b)||"",B=i.getShaderInfoLog(E)||"",V=P.trim(),k=O.trim(),z=B.trim();let X=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,E);else{const D=Qp(i,b,"vertex"),te=Qp(i,E,"fragment");qe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+D+`
`+te)}else V!==""?Ue("WebGLProgram: Program Info Log:",V):(k===""||z==="")&&(Q=!1);Q&&(R.diagnostics={runnable:X,programLog:V,vertexShader:{log:k,prefix:m},fragmentShader:{log:z,prefix:p}})}i.deleteShader(b),i.deleteShader(E),C=new Sc(i,_),S=iT(i,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,qb)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$b++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=E,this}let xT=0;class yT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ST(e),t.set(e,n)),n}}class ST{constructor(e){this.id=xT++,this.code=e,this.usedTimes=0}}function MT(r,e,t,n,i,s,o){const a=new Cg,l=new yT,c=new Set,u=[],h=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,P,O){const B=P.fog,V=O.geometry,k=S.isMeshStandardMaterial?P.environment:null,z=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),X=z&&z.mapping===eu?z.image.height:null,Q=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&Ue("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const D=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,te=D!==void 0?D.length:0;let Re=0;V.morphAttributes.position!==void 0&&(Re=1),V.morphAttributes.normal!==void 0&&(Re=2),V.morphAttributes.color!==void 0&&(Re=3);let Pe,De,He,j;if(Q){const be=sr[Q];Pe=be.vertexShader,De=be.fragmentShader}else Pe=S.vertexShader,De=S.fragmentShader,l.update(S),He=l.getVertexShaderID(S),j=l.getFragmentShaderID(S);const J=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),Ie=O.isInstancedMesh===!0,ye=O.isBatchedMesh===!0,Xe=!!S.map,_e=!!S.matcap,we=!!z,ze=!!S.aoMap,Je=!!S.lightMap,Be=!!S.bumpMap,G=!!S.normalMap,N=!!S.displacementMap,pt=!!S.emissiveMap,Qe=!!S.metalnessMap,fe=!!S.roughnessMap,se=S.anisotropy>0,L=S.clearcoat>0,T=S.dispersion>0,F=S.iridescence>0,K=S.sheen>0,Z=S.transmission>0,$=se&&!!S.anisotropyMap,Se=L&&!!S.clearcoatMap,oe=L&&!!S.clearcoatNormalMap,Ce=L&&!!S.clearcoatRoughnessMap,Ae=F&&!!S.iridescenceMap,ie=F&&!!S.iridescenceThicknessMap,ae=K&&!!S.sheenColorMap,me=K&&!!S.sheenRoughnessMap,Me=!!S.specularMap,le=!!S.specularColorMap,$e=!!S.specularIntensityMap,I=Z&&!!S.transmissionMap,de=Z&&!!S.thicknessMap,re=!!S.gradientMap,pe=!!S.alphaMap,ne=S.alphaTest>0,ee=!!S.alphaHash,ue=!!S.extensions;let Ve=fr;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ve=r.toneMapping);const mt={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Pe,fragmentShader:De,defines:S.defines,customVertexShaderID:He,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:ye,batchingColor:ye&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Zn,alphaToCoverage:!!S.alphaToCoverage,map:Xe,matcap:_e,envMap:we,envMapMode:we&&z.mapping,envMapCubeUVHeight:X,aoMap:ze,lightMap:Je,bumpMap:Be,normalMap:G,displacementMap:N,emissiveMap:pt,normalMapObjectSpace:G&&S.normalMapType===dv,normalMapTangentSpace:G&&S.normalMapType===Qf,metalnessMap:Qe,roughnessMap:fe,anisotropy:se,anisotropyMap:$,clearcoat:L,clearcoatMap:Se,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ce,dispersion:T,iridescence:F,iridescenceMap:Ae,iridescenceThicknessMap:ie,sheen:K,sheenColorMap:ae,sheenRoughnessMap:me,specularMap:Me,specularColorMap:le,specularIntensityMap:$e,transmission:Z,transmissionMap:I,thicknessMap:de,gradientMap:re,opaque:S.transparent===!1&&S.blending===Fo&&S.alphaToCoverage===!1,alphaMap:pe,alphaTest:ne,alphaHash:ee,combine:S.combine,mapUv:Xe&&_(S.map.channel),aoMapUv:ze&&_(S.aoMap.channel),lightMapUv:Je&&_(S.lightMap.channel),bumpMapUv:Be&&_(S.bumpMap.channel),normalMapUv:G&&_(S.normalMap.channel),displacementMapUv:N&&_(S.displacementMap.channel),emissiveMapUv:pt&&_(S.emissiveMap.channel),metalnessMapUv:Qe&&_(S.metalnessMap.channel),roughnessMapUv:fe&&_(S.roughnessMap.channel),anisotropyMapUv:$&&_(S.anisotropyMap.channel),clearcoatMapUv:Se&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(S.sheenRoughnessMap.channel),specularMapUv:Me&&_(S.specularMap.channel),specularColorMapUv:le&&_(S.specularColorMap.channel),specularIntensityMapUv:$e&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:de&&_(S.thicknessMap.channel),alphaMapUv:pe&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(G||se),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Xe||pe),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Xe&&S.map.isVideoTexture===!0&&ft.getTransfer(S.map.colorSpace)===Mt,decodeVideoTextureEmissive:pt&&S.emissiveMap.isVideoTexture===!0&&ft.getTransfer(S.emissiveMap.colorSpace)===Mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===or,flipSided:S.side===oi,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ue&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&S.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(v(M,S),x(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const M=g[S.type];let R;if(M){const P=sr[M];R=ix.clone(P.uniforms)}else R=S.uniforms;return R}function b(S,M){let R=h.get(M);return R!==void 0?++R.usedTimes:(R=new vT(r,M,S,s),u.push(R),h.set(M,R)),R}function E(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),h.delete(S.cacheKey),S.destroy()}}function w(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:C}}function bT(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function TT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function rm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sm(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||TT),n.length>1&&n.sort(f||rm),i.length>1&&i.sort(f||rm)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function ET(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new sm,r.set(n,[o])):i>=s.length?(o=new sm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function wT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new je};break;case"SpotLight":t={position:new U,direction:new U,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function AT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let CT=0;function RT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function PT(r){const e=new wT,t=AT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new it,o=new it;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,x=0,y=0,b=0,E=0,w=0;c.sort(RT);for(let S=0,M=c.length;S<M;S++){const R=c[S],P=R.color,O=R.intensity,B=R.distance;let V=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===jo?V=R.shadow.map.texture:V=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=P.r*O,h+=P.g*O,f+=P.b*O;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],O);w++}else if(R.isDirectionalLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,X=t.get(R);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=R.shadow.matrix,v++}n.directional[d]=k,d++}else if(R.isSpotLight){const k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(P).multiplyScalar(O),k.distance=B,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[_]=k;const z=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,z.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=z.matrix,R.castShadow){const X=t.get(R);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=V,y++}_++}else if(R.isRectAreaLight){const k=e.get(R);k.color.copy(P).multiplyScalar(O),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=k,m++}else if(R.isPointLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const z=R.shadow,X=t.get(R);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,X.shadowCameraNear=z.camera.near,X.shadowCameraFar=z.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=k,g++}else if(R.isHemisphereLight){const k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(O),k.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[p]=k,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==x||C.numSpotShadows!==y||C.numSpotMaps!==b||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=x,C.numSpotShadows=y,C.numSpotMaps=b,C.numLightProbes=w,n.version=CT++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const x=c[p];if(x.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(x.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function om(r){const e=new PT(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function LT(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new om(r),e.set(i,[a])):s>=o.length?(a=new om(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const DT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IT=`uniform sampler2D shadow_pass;
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
}`,NT=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],OT=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],am=new it,Aa=new U,Yu=new U;function UT(r,e,t){let n=new ad;const i=new ke,s=new ke,o=new Ft,a=new bx,l=new Tx,c={},u=t.maxTextureSize,h={[Vr]:oi,[oi]:Vr,[or]:or},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:DT,fragmentShader:IT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Qn;g.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mc;let p=this.type;this.render=function(E,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;E.type===lg&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=mc);const S=r.getRenderTarget(),M=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Br),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const O=p!==this.type;O&&w.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(V=>V.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,V=E.length;B<V;B++){const k=E[B],z=k.shadow;if(z===void 0){Ue("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const X=z.getFrameExtents();if(i.multiply(X),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/X.x),i.x=s.x*X.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/X.y),i.y=s.y*X.y,z.mapSize.y=s.y)),z.map===null||O===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Da){if(k.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Un(i.x,i.y,{format:jo,type:Hr,minFilter:un,magFilter:un,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new fl(i.x,i.y,Ui),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=Gr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=cn,z.map.depthTexture.magFilter=cn}else{k.isPointLight?(z.map=new Ng(i.x),z.map.depthTexture=new yx(i.x,mr)):(z.map=new Un(i.x,i.y),z.map.depthTexture=new fl(i.x,i.y,mr)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=Gr;const D=r.state.buffers.depth.getReversed();this.type===mc?(z.map.depthTexture.compareFunction=D?td:ed,z.map.depthTexture.minFilter=un,z.map.depthTexture.magFilter=un):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=cn,z.map.depthTexture.magFilter=cn)}z.camera.updateProjectionMatrix()}const Q=z.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<Q;D++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,D),r.clear();else{D===0&&(r.setRenderTarget(z.map),r.clear());const te=z.getViewport(D);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),P.viewport(o)}if(k.isPointLight){const te=z.camera,Re=z.matrix,Pe=k.distance||te.far;Pe!==te.far&&(te.far=Pe,te.updateProjectionMatrix()),Aa.setFromMatrixPosition(k.matrixWorld),te.position.copy(Aa),Yu.copy(te.position),Yu.add(NT[D]),te.up.copy(OT[D]),te.lookAt(Yu),te.updateMatrixWorld(),Re.makeTranslation(-Aa.x,-Aa.y,-Aa.z),am.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),z._frustum.setFromProjectionMatrix(am,te.coordinateSystem,te.reversedDepth)}else z.updateMatrices(k);n=z.getFrustum(),y(w,C,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===Da&&v(z,C),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,M,R)};function v(E,w){const C=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Un(i.x,i.y,{format:jo,type:Hr})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,C,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,C,d,_,null)}function x(E,w,C,S){let M=null;const R=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=C.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const P=M.uuid,O=w.uuid;let B=c[P];B===void 0&&(B={},c[P]=B);let V=B[O];V===void 0&&(V=M.clone(),B[O]=V,w.addEventListener("dispose",b)),M=V}if(M.visible=w.visible,M.wireframe=w.wireframe,S===Da?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=r.properties.get(M);P.light=C}return M}function y(E,w,C,S,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Da)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const O=e.update(E),B=E.material;if(Array.isArray(B)){const V=O.groups;for(let k=0,z=V.length;k<z;k++){const X=V[k],Q=B[X.materialIndex];if(Q&&Q.visible){const D=x(E,Q,S,M);E.onBeforeShadow(r,E,w,C,O,D,X),r.renderBufferDirect(C,null,O,D,E,X),E.onAfterShadow(r,E,w,C,O,D,X)}}}else if(B.visible){const V=x(E,B,S,M);E.onBeforeShadow(r,E,w,C,O,V,null),r.renderBufferDirect(C,null,O,V,E,null),E.onAfterShadow(r,E,w,C,O,V,null)}}const P=E.children;for(let O=0,B=P.length;O<B;O++)y(P[O],w,C,S,M)}function b(E){E.target.removeEventListener("dispose",b);for(const C in c){const S=c[C],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const FT={[Sh]:Mh,[bh]:wh,[Th]:Ah,[Yo]:Eh,[Mh]:Sh,[wh]:bh,[Ah]:Th,[Eh]:Yo};function BT(r,e){function t(){let I=!1;const de=new Ft;let re=null;const pe=new Ft(0,0,0,0);return{setMask:function(ne){re!==ne&&!I&&(r.colorMask(ne,ne,ne,ne),re=ne)},setLocked:function(ne){I=ne},setClear:function(ne,ee,ue,Ve,mt){mt===!0&&(ne*=Ve,ee*=Ve,ue*=Ve),de.set(ne,ee,ue,Ve),pe.equals(de)===!1&&(r.clearColor(ne,ee,ue,Ve),pe.copy(de))},reset:function(){I=!1,re=null,pe.set(-1,0,0,0)}}}function n(){let I=!1,de=!1,re=null,pe=null,ne=null;return{setReversed:function(ee){if(de!==ee){const ue=e.get("EXT_clip_control");ee?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),de=ee;const Ve=ne;ne=null,this.setClear(Ve)}},getReversed:function(){return de},setTest:function(ee){ee?J(r.DEPTH_TEST):he(r.DEPTH_TEST)},setMask:function(ee){re!==ee&&!I&&(r.depthMask(ee),re=ee)},setFunc:function(ee){if(de&&(ee=FT[ee]),pe!==ee){switch(ee){case Sh:r.depthFunc(r.NEVER);break;case Mh:r.depthFunc(r.ALWAYS);break;case bh:r.depthFunc(r.LESS);break;case Yo:r.depthFunc(r.LEQUAL);break;case Th:r.depthFunc(r.EQUAL);break;case Eh:r.depthFunc(r.GEQUAL);break;case wh:r.depthFunc(r.GREATER);break;case Ah:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=ee}},setLocked:function(ee){I=ee},setClear:function(ee){ne!==ee&&(de&&(ee=1-ee),r.clearDepth(ee),ne=ee)},reset:function(){I=!1,re=null,pe=null,ne=null,de=!1}}}function i(){let I=!1,de=null,re=null,pe=null,ne=null,ee=null,ue=null,Ve=null,mt=null;return{setTest:function(be){I||(be?J(r.STENCIL_TEST):he(r.STENCIL_TEST))},setMask:function(be){de!==be&&!I&&(r.stencilMask(be),de=be)},setFunc:function(be,Ne,et){(re!==be||pe!==Ne||ne!==et)&&(r.stencilFunc(be,Ne,et),re=be,pe=Ne,ne=et)},setOp:function(be,Ne,et){(ee!==be||ue!==Ne||Ve!==et)&&(r.stencilOp(be,Ne,et),ee=be,ue=Ne,Ve=et)},setLocked:function(be){I=be},setClear:function(be){mt!==be&&(r.clearStencil(be),mt=be)},reset:function(){I=!1,de=null,re=null,pe=null,ne=null,ee=null,ue=null,Ve=null,mt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,x=null,y=null,b=null,E=null,w=new je(0,0,0),C=0,S=!1,M=null,R=null,P=null,O=null,B=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,z=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=z>=2);let Q=null,D={};const te=r.getParameter(r.SCISSOR_BOX),Re=r.getParameter(r.VIEWPORT),Pe=new Ft().fromArray(te),De=new Ft().fromArray(Re);function He(I,de,re,pe){const ne=new Uint8Array(4),ee=r.createTexture();r.bindTexture(I,ee),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ue=0;ue<re;ue++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(de,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage2D(de+ue,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne);return ee}const j={};j[r.TEXTURE_2D]=He(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=He(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=He(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=He(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(r.DEPTH_TEST),o.setFunc(Yo),Be(!1),G(Yd),J(r.CULL_FACE),ze(Br);function J(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function he(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Ie(I,de){return h[I]!==de?(r.bindFramebuffer(I,de),h[I]=de,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=de),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=de),!0):!1}function ye(I,de){let re=d,pe=!1;if(I){re=f.get(de),re===void 0&&(re=[],f.set(de,re));const ne=I.textures;if(re.length!==ne.length||re[0]!==r.COLOR_ATTACHMENT0){for(let ee=0,ue=ne.length;ee<ue;ee++)re[ee]=r.COLOR_ATTACHMENT0+ee;re.length=ne.length,pe=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,pe=!0);pe&&r.drawBuffers(re)}function Xe(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const _e={[ks]:r.FUNC_ADD,[W0]:r.FUNC_SUBTRACT,[X0]:r.FUNC_REVERSE_SUBTRACT};_e[Y0]=r.MIN,_e[q0]=r.MAX;const we={[$0]:r.ZERO,[j0]:r.ONE,[K0]:r.SRC_COLOR,[xh]:r.SRC_ALPHA,[nv]:r.SRC_ALPHA_SATURATE,[ev]:r.DST_COLOR,[J0]:r.DST_ALPHA,[Z0]:r.ONE_MINUS_SRC_COLOR,[yh]:r.ONE_MINUS_SRC_ALPHA,[tv]:r.ONE_MINUS_DST_COLOR,[Q0]:r.ONE_MINUS_DST_ALPHA,[iv]:r.CONSTANT_COLOR,[rv]:r.ONE_MINUS_CONSTANT_COLOR,[sv]:r.CONSTANT_ALPHA,[ov]:r.ONE_MINUS_CONSTANT_ALPHA};function ze(I,de,re,pe,ne,ee,ue,Ve,mt,be){if(I===Br){_===!0&&(he(r.BLEND),_=!1);return}if(_===!1&&(J(r.BLEND),_=!0),I!==G0){if(I!==m||be!==S){if((p!==ks||y!==ks)&&(r.blendEquation(r.FUNC_ADD),p=ks,y=ks),be)switch(I){case Fo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qd:r.blendFunc(r.ONE,r.ONE);break;case $d:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:qe("WebGLState: Invalid blending: ",I);break}else switch(I){case Fo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case $d:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jd:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",I);break}v=null,x=null,b=null,E=null,w.set(0,0,0),C=0,m=I,S=be}return}ne=ne||de,ee=ee||re,ue=ue||pe,(de!==p||ne!==y)&&(r.blendEquationSeparate(_e[de],_e[ne]),p=de,y=ne),(re!==v||pe!==x||ee!==b||ue!==E)&&(r.blendFuncSeparate(we[re],we[pe],we[ee],we[ue]),v=re,x=pe,b=ee,E=ue),(Ve.equals(w)===!1||mt!==C)&&(r.blendColor(Ve.r,Ve.g,Ve.b,mt),w.copy(Ve),C=mt),m=I,S=!1}function Je(I,de){I.side===or?he(r.CULL_FACE):J(r.CULL_FACE);let re=I.side===oi;de&&(re=!re),Be(re),I.blending===Fo&&I.transparent===!1?ze(Br):ze(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const pe=I.stencilWrite;a.setTest(pe),pe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):he(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){M!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),M=I)}function G(I){I!==V0?(J(r.CULL_FACE),I!==R&&(I===Yd?r.cullFace(r.BACK):I===H0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):he(r.CULL_FACE),R=I}function N(I){I!==P&&(k&&r.lineWidth(I),P=I)}function pt(I,de,re){I?(J(r.POLYGON_OFFSET_FILL),(O!==de||B!==re)&&(r.polygonOffset(de,re),O=de,B=re)):he(r.POLYGON_OFFSET_FILL)}function Qe(I){I?J(r.SCISSOR_TEST):he(r.SCISSOR_TEST)}function fe(I){I===void 0&&(I=r.TEXTURE0+V-1),Q!==I&&(r.activeTexture(I),Q=I)}function se(I,de,re){re===void 0&&(Q===null?re=r.TEXTURE0+V-1:re=Q);let pe=D[re];pe===void 0&&(pe={type:void 0,texture:void 0},D[re]=pe),(pe.type!==I||pe.texture!==de)&&(Q!==re&&(r.activeTexture(re),Q=re),r.bindTexture(I,de||j[I]),pe.type=I,pe.texture=de)}function L(){const I=D[Q];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function K(){try{r.texSubImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function Z(){try{r.texSubImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function Se(){try{r.compressedTexSubImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function oe(){try{r.texStorage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function Ce(){try{r.texStorage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function Ae(){try{r.texImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function ie(){try{r.texImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function ae(I){Pe.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Pe.copy(I))}function me(I){De.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),De.copy(I))}function Me(I,de){let re=c.get(de);re===void 0&&(re=new WeakMap,c.set(de,re));let pe=re.get(I);pe===void 0&&(pe=r.getUniformBlockIndex(de,I.name),re.set(I,pe))}function le(I,de){const pe=c.get(de).get(I);l.get(de)!==pe&&(r.uniformBlockBinding(de,pe,I.__bindingPointIndex),l.set(de,pe))}function $e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,D={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,x=null,y=null,b=null,E=null,w=new je(0,0,0),C=0,S=!1,M=null,R=null,P=null,O=null,B=null,Pe.set(0,0,r.canvas.width,r.canvas.height),De.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:he,bindFramebuffer:Ie,drawBuffers:ye,useProgram:Xe,setBlending:ze,setMaterial:Je,setFlipSided:Be,setCullFace:G,setLineWidth:N,setPolygonOffset:pt,setScissorTest:Qe,activeTexture:fe,bindTexture:se,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:F,texImage2D:Ae,texImage3D:ie,updateUBOMapping:Me,uniformBlockBinding:le,texStorage2D:oe,texStorage3D:Ce,texSubImage2D:K,texSubImage3D:Z,compressedTexSubImage2D:$,compressedTexSubImage3D:Se,scissor:ae,viewport:me,reset:$e}}function kT(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return d?new OffscreenCanvas(L,T):ul("canvas")}function _(L,T,F){let K=1;const Z=se(L);if((Z.width>F||Z.height>F)&&(K=F/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const $=Math.floor(K*Z.width),Se=Math.floor(K*Z.height);h===void 0&&(h=g($,Se));const oe=T?g($,Se):h;return oe.width=$,oe.height=Se,oe.getContext("2d").drawImage(L,0,0,$,Se),Ue("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+Se+")."),oe}else return"data"in L&&Ue("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){r.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(L,T,F,K,Z=!1){if(L!==null){if(r[L]!==void 0)return r[L];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let $=T;if(T===r.RED&&(F===r.FLOAT&&($=r.R32F),F===r.HALF_FLOAT&&($=r.R16F),F===r.UNSIGNED_BYTE&&($=r.R8)),T===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.R8UI),F===r.UNSIGNED_SHORT&&($=r.R16UI),F===r.UNSIGNED_INT&&($=r.R32UI),F===r.BYTE&&($=r.R8I),F===r.SHORT&&($=r.R16I),F===r.INT&&($=r.R32I)),T===r.RG&&(F===r.FLOAT&&($=r.RG32F),F===r.HALF_FLOAT&&($=r.RG16F),F===r.UNSIGNED_BYTE&&($=r.RG8)),T===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.RG8UI),F===r.UNSIGNED_SHORT&&($=r.RG16UI),F===r.UNSIGNED_INT&&($=r.RG32UI),F===r.BYTE&&($=r.RG8I),F===r.SHORT&&($=r.RG16I),F===r.INT&&($=r.RG32I)),T===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.RGB8UI),F===r.UNSIGNED_SHORT&&($=r.RGB16UI),F===r.UNSIGNED_INT&&($=r.RGB32UI),F===r.BYTE&&($=r.RGB8I),F===r.SHORT&&($=r.RGB16I),F===r.INT&&($=r.RGB32I)),T===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.RGBA8UI),F===r.UNSIGNED_SHORT&&($=r.RGBA16UI),F===r.UNSIGNED_INT&&($=r.RGBA32UI),F===r.BYTE&&($=r.RGBA8I),F===r.SHORT&&($=r.RGBA16I),F===r.INT&&($=r.RGBA32I)),T===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),T===r.RGBA){const Se=Z?Dc:ft.getTransfer(K);F===r.FLOAT&&($=r.RGBA32F),F===r.HALF_FLOAT&&($=r.RGBA16F),F===r.UNSIGNED_BYTE&&($=Se===Mt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(L,T){let F;return L?T===null||T===mr||T===al?F=r.DEPTH24_STENCIL8:T===Ui?F=r.DEPTH32F_STENCIL8:T===ol&&(F=r.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===mr||T===al?F=r.DEPTH_COMPONENT24:T===Ui?F=r.DEPTH_COMPONENT32F:T===ol&&(F=r.DEPTH_COMPONENT16),F}function b(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==cn&&L.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function E(L){const T=L.target;T.removeEventListener("dispose",E),C(T),T.isVideoTexture&&u.delete(T)}function w(L){const T=L.target;T.removeEventListener("dispose",w),M(T)}function C(L){const T=n.get(L);if(T.__webglInit===void 0)return;const F=L.source,K=f.get(F);if(K){const Z=K[T.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(L),Object.keys(K).length===0&&f.delete(F)}n.remove(L)}function S(L){const T=n.get(L);r.deleteTexture(T.__webglTexture);const F=L.source,K=f.get(F);delete K[T.__cacheKey],o.memory.textures--}function M(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(T.__webglFramebuffer[K]))for(let Z=0;Z<T.__webglFramebuffer[K].length;Z++)r.deleteFramebuffer(T.__webglFramebuffer[K][Z]);else r.deleteFramebuffer(T.__webglFramebuffer[K]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[K])}else{if(Array.isArray(T.__webglFramebuffer))for(let K=0;K<T.__webglFramebuffer.length;K++)r.deleteFramebuffer(T.__webglFramebuffer[K]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let K=0;K<T.__webglColorRenderbuffer.length;K++)T.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[K]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const F=L.textures;for(let K=0,Z=F.length;K<Z;K++){const $=n.get(F[K]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(F[K])}n.remove(L)}let R=0;function P(){R=0}function O(){const L=R;return L>=i.maxTextures&&Ue("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),R+=1,L}function B(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function V(L,T){const F=n.get(L);if(L.isVideoTexture&&Qe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&F.__version!==L.version){const K=L.image;if(K===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,L,T);return}}else L.isExternalTexture&&(F.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+T)}function k(L,T){const F=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&F.__version!==L.version){j(F,L,T);return}else L.isExternalTexture&&(F.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+T)}function z(L,T){const F=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&F.__version!==L.version){j(F,L,T);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+T)}function X(L,T){const F=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&F.__version!==L.version){J(F,L,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+T)}const Q={[$o]:r.REPEAT,[lr]:r.CLAMP_TO_EDGE,[Lc]:r.MIRRORED_REPEAT},D={[cn]:r.NEAREST,[vg]:r.NEAREST_MIPMAP_NEAREST,[Ia]:r.NEAREST_MIPMAP_LINEAR,[un]:r.LINEAR,[gc]:r.LINEAR_MIPMAP_NEAREST,[Or]:r.LINEAR_MIPMAP_LINEAR},te={[pv]:r.NEVER,[xv]:r.ALWAYS,[mv]:r.LESS,[ed]:r.LEQUAL,[gv]:r.EQUAL,[td]:r.GEQUAL,[_v]:r.GREATER,[vv]:r.NOTEQUAL};function Re(L,T){if(T.type===Ui&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===un||T.magFilter===gc||T.magFilter===Ia||T.magFilter===Or||T.minFilter===un||T.minFilter===gc||T.minFilter===Ia||T.minFilter===Or)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Q[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Q[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Q[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,D[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,D[T.minFilter]),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,te[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===cn||T.minFilter!==Ia&&T.minFilter!==Or||T.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Pe(L,T){let F=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",E));const K=T.source;let Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));const $=B(T);if($!==L.__cacheKey){Z[$]===void 0&&(Z[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[$].usedTimes++;const Se=Z[L.__cacheKey];Se!==void 0&&(Z[L.__cacheKey].usedTimes--,Se.usedTimes===0&&S(T)),L.__cacheKey=$,L.__webglTexture=Z[$].texture}return F}function De(L,T,F){return Math.floor(Math.floor(L/F)/T)}function He(L,T,F,K){const $=L.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,F,K,T.data);else{$.sort((ie,ae)=>ie.start-ae.start);let Se=0;for(let ie=1;ie<$.length;ie++){const ae=$[Se],me=$[ie],Me=ae.start+ae.count,le=De(me.start,T.width,4),$e=De(ae.start,T.width,4);me.start<=Me+1&&le===$e&&De(me.start+me.count-1,T.width,4)===le?ae.count=Math.max(ae.count,me.start+me.count-ae.start):(++Se,$[Se]=me)}$.length=Se+1;const oe=r.getParameter(r.UNPACK_ROW_LENGTH),Ce=r.getParameter(r.UNPACK_SKIP_PIXELS),Ae=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let ie=0,ae=$.length;ie<ae;ie++){const me=$[ie],Me=Math.floor(me.start/4),le=Math.ceil(me.count/4),$e=Me%T.width,I=Math.floor(Me/T.width),de=le,re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,$e),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,$e,I,de,re,F,K,T.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ce),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ae)}}function j(L,T,F){let K=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=r.TEXTURE_3D);const Z=Pe(L,T),$=T.source;t.bindTexture(K,L.__webglTexture,r.TEXTURE0+F);const Se=n.get($);if($.version!==Se.__version||Z===!0){t.activeTexture(r.TEXTURE0+F);const oe=ft.getPrimaries(ft.workingColorSpace),Ce=T.colorSpace===rs?null:ft.getPrimaries(T.colorSpace),Ae=T.colorSpace===rs||oe===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ie=_(T.image,!1,i.maxTextureSize);ie=fe(T,ie);const ae=s.convert(T.format,T.colorSpace),me=s.convert(T.type);let Me=x(T.internalFormat,ae,me,T.colorSpace,T.isVideoTexture);Re(K,T);let le;const $e=T.mipmaps,I=T.isVideoTexture!==!0,de=Se.__version===void 0||Z===!0,re=$.dataReady,pe=b(T,ie);if(T.isDepthTexture)Me=y(T.format===Vs,T.type),de&&(I?t.texStorage2D(r.TEXTURE_2D,1,Me,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Me,ie.width,ie.height,0,ae,me,null));else if(T.isDataTexture)if($e.length>0){I&&de&&t.texStorage2D(r.TEXTURE_2D,pe,Me,$e[0].width,$e[0].height);for(let ne=0,ee=$e.length;ne<ee;ne++)le=$e[ne],I?re&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,le.width,le.height,ae,me,le.data):t.texImage2D(r.TEXTURE_2D,ne,Me,le.width,le.height,0,ae,me,le.data);T.generateMipmaps=!1}else I?(de&&t.texStorage2D(r.TEXTURE_2D,pe,Me,ie.width,ie.height),re&&He(T,ie,ae,me)):t.texImage2D(r.TEXTURE_2D,0,Me,ie.width,ie.height,0,ae,me,ie.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){I&&de&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,Me,$e[0].width,$e[0].height,ie.depth);for(let ne=0,ee=$e.length;ne<ee;ne++)if(le=$e[ne],T.format!==Fi)if(ae!==null)if(I){if(re)if(T.layerUpdates.size>0){const ue=Bp(le.width,le.height,T.format,T.type);for(const Ve of T.layerUpdates){const mt=le.data.subarray(Ve*ue/le.data.BYTES_PER_ELEMENT,(Ve+1)*ue/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,Ve,le.width,le.height,1,ae,mt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,le.width,le.height,ie.depth,ae,le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Me,le.width,le.height,ie.depth,0,le.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,le.width,le.height,ie.depth,ae,me,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Me,le.width,le.height,ie.depth,0,ae,me,le.data)}else{I&&de&&t.texStorage2D(r.TEXTURE_2D,pe,Me,$e[0].width,$e[0].height);for(let ne=0,ee=$e.length;ne<ee;ne++)le=$e[ne],T.format!==Fi?ae!==null?I?re&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,le.width,le.height,ae,le.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Me,le.width,le.height,0,le.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,le.width,le.height,ae,me,le.data):t.texImage2D(r.TEXTURE_2D,ne,Me,le.width,le.height,0,ae,me,le.data)}else if(T.isDataArrayTexture)if(I){if(de&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,Me,ie.width,ie.height,ie.depth),re)if(T.layerUpdates.size>0){const ne=Bp(ie.width,ie.height,T.format,T.type);for(const ee of T.layerUpdates){const ue=ie.data.subarray(ee*ne/ie.data.BYTES_PER_ELEMENT,(ee+1)*ne/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,ie.width,ie.height,1,ae,me,ue)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ae,me,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Me,ie.width,ie.height,ie.depth,0,ae,me,ie.data);else if(T.isData3DTexture)I?(de&&t.texStorage3D(r.TEXTURE_3D,pe,Me,ie.width,ie.height,ie.depth),re&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ae,me,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Me,ie.width,ie.height,ie.depth,0,ae,me,ie.data);else if(T.isFramebufferTexture){if(de)if(I)t.texStorage2D(r.TEXTURE_2D,pe,Me,ie.width,ie.height);else{let ne=ie.width,ee=ie.height;for(let ue=0;ue<pe;ue++)t.texImage2D(r.TEXTURE_2D,ue,Me,ne,ee,0,ae,me,null),ne>>=1,ee>>=1}}else if($e.length>0){if(I&&de){const ne=se($e[0]);t.texStorage2D(r.TEXTURE_2D,pe,Me,ne.width,ne.height)}for(let ne=0,ee=$e.length;ne<ee;ne++)le=$e[ne],I?re&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ae,me,le):t.texImage2D(r.TEXTURE_2D,ne,Me,ae,me,le);T.generateMipmaps=!1}else if(I){if(de){const ne=se(ie);t.texStorage2D(r.TEXTURE_2D,pe,Me,ne.width,ne.height)}re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,me,ie)}else t.texImage2D(r.TEXTURE_2D,0,Me,ae,me,ie);m(T)&&p(K),Se.__version=$.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function J(L,T,F){if(T.image.length!==6)return;const K=Pe(L,T),Z=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+F);const $=n.get(Z);if(Z.version!==$.__version||K===!0){t.activeTexture(r.TEXTURE0+F);const Se=ft.getPrimaries(ft.workingColorSpace),oe=T.colorSpace===rs?null:ft.getPrimaries(T.colorSpace),Ce=T.colorSpace===rs||Se===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ae=T.isCompressedTexture||T.image[0].isCompressedTexture,ie=T.image[0]&&T.image[0].isDataTexture,ae=[];for(let ee=0;ee<6;ee++)!Ae&&!ie?ae[ee]=_(T.image[ee],!0,i.maxCubemapSize):ae[ee]=ie?T.image[ee].image:T.image[ee],ae[ee]=fe(T,ae[ee]);const me=ae[0],Me=s.convert(T.format,T.colorSpace),le=s.convert(T.type),$e=x(T.internalFormat,Me,le,T.colorSpace),I=T.isVideoTexture!==!0,de=$.__version===void 0||K===!0,re=Z.dataReady;let pe=b(T,me);Re(r.TEXTURE_CUBE_MAP,T);let ne;if(Ae){I&&de&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,$e,me.width,me.height);for(let ee=0;ee<6;ee++){ne=ae[ee].mipmaps;for(let ue=0;ue<ne.length;ue++){const Ve=ne[ue];T.format!==Fi?Me!==null?I?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,Ve.width,Ve.height,Me,Ve.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,$e,Ve.width,Ve.height,0,Ve.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,Ve.width,Ve.height,Me,le,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,$e,Ve.width,Ve.height,0,Me,le,Ve.data)}}}else{if(ne=T.mipmaps,I&&de){ne.length>0&&pe++;const ee=se(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,$e,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ie){I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ae[ee].width,ae[ee].height,Me,le,ae[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,ae[ee].width,ae[ee].height,0,Me,le,ae[ee].data);for(let ue=0;ue<ne.length;ue++){const mt=ne[ue].image[ee].image;I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,mt.width,mt.height,Me,le,mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,$e,mt.width,mt.height,0,Me,le,mt.data)}}else{I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Me,le,ae[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,Me,le,ae[ee]);for(let ue=0;ue<ne.length;ue++){const Ve=ne[ue];I?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,Me,le,Ve.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,$e,Me,le,Ve.image[ee])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),$.__version=Z.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function he(L,T,F,K,Z,$){const Se=s.convert(F.format,F.colorSpace),oe=s.convert(F.type),Ce=x(F.internalFormat,Se,oe,F.colorSpace),Ae=n.get(T),ie=n.get(F);if(ie.__renderTarget=T,!Ae.__hasExternalTextures){const ae=Math.max(1,T.width>>$),me=Math.max(1,T.height>>$);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,$,Ce,ae,me,T.depth,0,Se,oe,null):t.texImage2D(Z,$,Ce,ae,me,0,Se,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),pt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,Z,ie.__webglTexture,0,N(T)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,Z,ie.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(L,T,F){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer){const K=T.depthTexture,Z=K&&K.isDepthTexture?K.type:null,$=y(T.stencilBuffer,Z),Se=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(T),$,T.width,T.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(T),$,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,$,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,L)}else{const K=T.textures;for(let Z=0;Z<K.length;Z++){const $=K[Z],Se=s.convert($.format,$.colorSpace),oe=s.convert($.type),Ce=x($.internalFormat,Se,oe,$.colorSpace);pt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(T),Ce,T.width,T.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(T),Ce,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ye(L,T,F){const K=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(T.depthTexture);if(Z.__renderTarget=T,(!Z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,T.depthTexture.addEventListener("dispose",E)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Re(r.TEXTURE_CUBE_MAP,T.depthTexture);const Ae=s.convert(T.depthTexture.format),ie=s.convert(T.depthTexture.type);let ae;T.depthTexture.format===Gr?ae=r.DEPTH_COMPONENT24:T.depthTexture.format===Vs&&(ae=r.DEPTH24_STENCIL8);for(let me=0;me<6;me++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ae,T.width,T.height,0,Ae,ie,null)}}else V(T.depthTexture,0);const $=Z.__webglTexture,Se=N(T),oe=K?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,Ce=T.depthTexture.format===Vs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Gr)pt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ce,oe,$,0,Se):r.framebufferTexture2D(r.FRAMEBUFFER,Ce,oe,$,0);else if(T.depthTexture.format===Vs)pt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ce,oe,$,0,Se):r.framebufferTexture2D(r.FRAMEBUFFER,Ce,oe,$,0);else throw new Error("Unknown depthTexture format")}function Xe(L){const T=n.get(L),F=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const K=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){const Z=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),T.__depthDisposeCallback=Z}T.__boundDepthTexture=K}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(F)for(let K=0;K<6;K++)ye(T.__webglFramebuffer[K],L,K);else{const K=L.texture.mipmaps;K&&K.length>0?ye(T.__webglFramebuffer[0],L,0):ye(T.__webglFramebuffer,L,0)}else if(F){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=r.createRenderbuffer(),Ie(T.__webglDepthbuffer[K],L,!1);else{const Z=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,$)}}else{const K=L.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Ie(T.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(L,T,F){const K=n.get(L);T!==void 0&&he(K.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Xe(L)}function we(L){const T=L.texture,F=n.get(L),K=n.get(T);L.addEventListener("dispose",w);const Z=L.textures,$=L.isWebGLCubeRenderTarget===!0,Se=Z.length>1;if(Se||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=T.version,o.memory.textures++),$){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)F.__webglFramebuffer[oe][Ce]=r.createFramebuffer()}else F.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)F.__webglFramebuffer[oe]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Se)for(let oe=0,Ce=Z.length;oe<Ce;oe++){const Ae=n.get(Z[oe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&pt(L)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const Ce=Z[oe];F.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);const Ae=s.convert(Ce.format,Ce.colorSpace),ie=s.convert(Ce.type),ae=x(Ce.internalFormat,Ae,ie,Ce.colorSpace,L.isXRRenderTarget===!0),me=N(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,me,ae,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(F.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Re(r.TEXTURE_CUBE_MAP,T);for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ce=0;Ce<T.mipmaps.length;Ce++)he(F.__webglFramebuffer[oe][Ce],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce);else he(F.__webglFramebuffer[oe],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(T)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let oe=0,Ce=Z.length;oe<Ce;oe++){const Ae=Z[oe],ie=n.get(Ae);let ae=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ae=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,ie.__webglTexture),Re(ae,Ae),he(F.__webglFramebuffer,L,Ae,r.COLOR_ATTACHMENT0+oe,ae,0),m(Ae)&&p(ae)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(oe=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),Re(oe,T),T.mipmaps&&T.mipmaps.length>0)for(let Ce=0;Ce<T.mipmaps.length;Ce++)he(F.__webglFramebuffer[Ce],L,T,r.COLOR_ATTACHMENT0,oe,Ce);else he(F.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,oe,0);m(T)&&p(oe),t.unbindTexture()}L.depthBuffer&&Xe(L)}function ze(L){const T=L.textures;for(let F=0,K=T.length;F<K;F++){const Z=T[F];if(m(Z)){const $=v(L),Se=n.get(Z).__webglTexture;t.bindTexture($,Se),p($),t.unbindTexture()}}}const Je=[],Be=[];function G(L){if(L.samples>0){if(pt(L)===!1){const T=L.textures,F=L.width,K=L.height;let Z=r.COLOR_BUFFER_BIT;const $=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=n.get(L),oe=T.length>1;if(oe)for(let Ae=0;Ae<T.length;Ae++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Ce=L.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ae=0;Ae<T.length;Ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[Ae]);const ie=n.get(T[Ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,F,K,0,0,F,K,Z,r.NEAREST),l===!0&&(Je.length=0,Be.length=0,Je.push(r.COLOR_ATTACHMENT0+Ae),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Je.push($),Be.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Be)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let Ae=0;Ae<T.length;Ae++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,Se.__webglColorRenderbuffer[Ae]);const ie=n.get(T[Ae]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function N(L){return Math.min(i.maxSamples,L.samples)}function pt(L){const T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Qe(L){const T=o.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function fe(L,T){const F=L.colorSpace,K=L.format,Z=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||F!==Zn&&F!==rs&&(ft.getTransfer(F)===Mt?(K!==Fi||Z!==Si)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",F)),T}function se(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=z,this.setTextureCube=X,this.rebindTextures=_e,this.setupRenderTarget=we,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function zT(r,e){function t(n,i=rs){let s;const o=ft.getTransfer(i);if(n===Si)return r.UNSIGNED_BYTE;if(n===qf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===$f)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Sg)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Mg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===xg)return r.BYTE;if(n===yg)return r.SHORT;if(n===ol)return r.UNSIGNED_SHORT;if(n===Yf)return r.INT;if(n===mr)return r.UNSIGNED_INT;if(n===Ui)return r.FLOAT;if(n===Hr)return r.HALF_FLOAT;if(n===bg)return r.ALPHA;if(n===Tg)return r.RGB;if(n===Fi)return r.RGBA;if(n===Gr)return r.DEPTH_COMPONENT;if(n===Vs)return r.DEPTH_STENCIL;if(n===jf)return r.RED;if(n===Kf)return r.RED_INTEGER;if(n===jo)return r.RG;if(n===Zf)return r.RG_INTEGER;if(n===Jf)return r.RGBA_INTEGER;if(n===_c||n===vc||n===xc||n===yc)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_c)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_c)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ph||n===Lh||n===Dh||n===Ih)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ih)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nh||n===Oh||n===Uh||n===Fh||n===Bh||n===kh||n===zh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Nh||n===Oh)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Uh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fh)return s.COMPRESSED_R11_EAC;if(n===Bh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===kh)return s.COMPRESSED_RG11_EAC;if(n===zh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===Yh||n===qh||n===$h||n===jh||n===Kh||n===Zh||n===Jh||n===Qh||n===ef)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Vh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$h)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ef)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tf||n===nf||n===rf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===tf)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sf||n===of||n===af||n===lf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===sf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===of)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===af)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===al?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const VT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HT=`
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

}`;class GT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Bg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jn({vertexShader:VT,fragmentShader:HT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Yr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WT extends ro{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new GT,p={},v=t.getContextAttributes();let x=null,y=null;const b=[],E=[],w=new ke;let C=null;const S=new yn;S.viewport=new Ft;const M=new yn;M.viewport=new Ft;const R=[S,M],P=new Wx;let O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=b[j];return J===void 0&&(J=new Nu,b[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=b[j];return J===void 0&&(J=new Nu,b[j]=J),J.getGripSpace()},this.getHand=function(j){let J=b[j];return J===void 0&&(J=new Nu,b[j]=J),J.getHandSpace()};function V(j){const J=E.indexOf(j.inputSource);if(J===-1)return;const he=b[J];he!==void 0&&(he.update(j.inputSource,j.frame,c||o),he.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",z);for(let j=0;j<b.length;j++){const J=E[j];J!==null&&(E[j]=null,b[j].disconnect(J))}O=null,B=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(x),d=null,f=null,h=null,i=null,y=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",k),i.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ie=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=v.stencil?Vs:Gr,Ie=v.stencil?al:mr);const Xe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Xe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Un(f.textureWidth,f.textureHeight,{format:Fi,type:Si,depthTexture:new fl(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const he={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Un(d.framebufferWidth,d.framebufferHeight,{format:Fi,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(j){for(let J=0;J<j.removed.length;J++){const he=j.removed[J],Ie=E.indexOf(he);Ie>=0&&(E[Ie]=null,b[Ie].disconnect(he))}for(let J=0;J<j.added.length;J++){const he=j.added[J];let Ie=E.indexOf(he);if(Ie===-1){for(let Xe=0;Xe<b.length;Xe++)if(Xe>=E.length){E.push(he),Ie=Xe;break}else if(E[Xe]===null){E[Xe]=he,Ie=Xe;break}if(Ie===-1)break}const ye=b[Ie];ye&&ye.connect(he)}}const X=new U,Q=new U;function D(j,J,he){X.setFromMatrixPosition(J.matrixWorld),Q.setFromMatrixPosition(he.matrixWorld);const Ie=X.distanceTo(Q),ye=J.projectionMatrix.elements,Xe=he.projectionMatrix.elements,_e=ye[14]/(ye[10]-1),we=ye[14]/(ye[10]+1),ze=(ye[9]+1)/ye[5],Je=(ye[9]-1)/ye[5],Be=(ye[8]-1)/ye[0],G=(Xe[8]+1)/Xe[0],N=_e*Be,pt=_e*G,Qe=Ie/(-Be+G),fe=Qe*-Be;if(J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(fe),j.translateZ(Qe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ye[10]===-1)j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const se=_e+Qe,L=we+Qe,T=N-fe,F=pt+(Ie-fe),K=ze*we/L*se,Z=Je*we/L*se;j.projectionMatrix.makePerspective(T,F,K,Z,se,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function te(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let J=j.near,he=j.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(he=m.depthFar)),P.near=M.near=S.near=J,P.far=M.far=S.far=he,(O!==P.near||B!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),O=P.near,B=P.far),P.layers.mask=j.layers.mask|6,S.layers.mask=P.layers.mask&3,M.layers.mask=P.layers.mask&5;const Ie=j.parent,ye=P.cameras;te(P,Ie);for(let Xe=0;Xe<ye.length;Xe++)te(ye[Xe],Ie);ye.length===2?D(P,S,M):P.projectionMatrix.copy(S.projectionMatrix),Re(j,P,Ie)};function Re(j,J,he){he===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(he.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ko*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(j){return p[j]};let Pe=null;function De(j,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const he=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Ie=!1;he.length!==P.cameras.length&&(P.cameras.length=0,Ie=!0);for(let we=0;we<he.length;we++){const ze=he[we];let Je=null;if(d!==null)Je=d.getViewport(ze);else{const G=h.getViewSubImage(f,ze);Je=G.viewport,we===0&&(e.setRenderTargetTextures(y,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(y))}let Be=R[we];Be===void 0&&(Be=new yn,Be.layers.enable(we),Be.viewport=new Ft,R[we]=Be),Be.matrix.fromArray(ze.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ze.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Je.x,Je.y,Je.width,Je.height),we===0&&(P.matrix.copy(Be.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ie===!0&&P.cameras.push(Be)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const we=h.getDepthInformation(he[0]);we&&we.isValid&&we.texture&&m.init(we,i.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let we=0;we<he.length;we++){const ze=he[we].camera;if(ze){let Je=p[ze];Je||(Je=new Bg,p[ze]=Je);const Be=h.getCameraImage(ze);Je.sourceTexture=Be}}}}for(let he=0;he<b.length;he++){const Ie=E[he],ye=b[he];Ie!==null&&ye!==void 0&&ye.update(Ie,J,c||o)}Pe&&Pe(j,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const He=new Hg;He.setAnimationLoop(De),this.setAnimationLoop=function(j){Pe=j},this.dispose=function(){}}}const Ps=new _r,XT=new it;function YT(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dg(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===oi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===oi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,Ps.copy(y),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),m.envMapRotation.value.setFromMatrix4(XT.makeRotationFromEuler(Ps)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===oi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qT(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(v,b);const E=e.render.frame;s[v.id]!==E&&(f(v),s[v.id]=E)}function u(v){const x=h();v.__bindingPointIndex=x;const y=r.createBuffer(),b=v.__size,E=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,b,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=i[v.id],y=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let E=0,w=y.length;E<w;E++){const C=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,M=C.length;S<M;S++){const R=C[S];if(d(R,E,S,b)===!0){const P=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let V=0;V<O.length;V++){const k=O[V],z=_(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,P+B,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(v,x,y,b){const E=v.value,w=x+"_"+y;if(b[w]===void 0)return typeof E=="number"||typeof E=="boolean"?b[w]=E:b[w]=E.clone(),!0;{const C=b[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return b[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(v){const x=v.uniforms;let y=0;const b=16;for(let w=0,C=x.length;w<C;w++){const S=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,R=S.length;M<R;M++){const P=S[M],O=Array.isArray(P.value)?P.value:[P.value];for(let B=0,V=O.length;B<V;B++){const k=O[B],z=_(k),X=y%b,Q=X%z.boundary,D=X+Q;y+=Q,D!==0&&b-D<z.storage&&(y+=b-D),P.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=z.storage}}}const E=y%b;return E>0&&(y+=b-E),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ue("WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}const $T=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function jT(){return Qi===null&&(Qi=new sd($T,16,16,jo,Hr),Qi.name="DFG_LUT",Qi.minFilter=un,Qi.magFilter=un,Qi.wrapS=lr,Qi.wrapT=lr,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class _a{constructor(e={}){const{canvas:t=Sv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Si}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=d,m=new Set([Jf,Zf,Kf]),p=new Set([Si,mr,ol,al,qf,$f]),v=new Uint32Array(4),x=new Int32Array(4);let y=null,b=null;const E=[],w=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let M=!1;this._outputColorSpace=En;let R=0,P=0,O=null,B=-1,V=null;const k=new Ft,z=new Ft;let X=null;const Q=new je(0);let D=0,te=t.width,Re=t.height,Pe=1,De=null,He=null;const j=new Ft(0,0,te,Re),J=new Ft(0,0,te,Re);let he=!1;const Ie=new ad;let ye=!1,Xe=!1;const _e=new it,we=new U,ze=new Ft,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function G(){return O===null?Pe:1}let N=n;function pt(A,H){return t.getContext(A,H)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xf}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",be,!1),N===null){const H="webgl2";if(N=pt(H,A),N===null)throw pt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw qe("WebGLRenderer: "+A.message),A}let Qe,fe,se,L,T,F,K,Z,$,Se,oe,Ce,Ae,ie,ae,me,Me,le,$e,I,de,re,pe,ne;function ee(){Qe=new jM(N),Qe.init(),re=new zT(N,Qe),fe=new zM(N,Qe,e,re),se=new BT(N,Qe),fe.reversedDepthBuffer&&f&&se.buffers.depth.setReversed(!0),L=new JM(N),T=new bT,F=new kT(N,Qe,se,T,fe,re,L),K=new HM(S),Z=new $M(S),$=new ny(N),pe=new BM(N,$),Se=new KM(N,$,L,pe),oe=new eb(N,Se,$,L),$e=new QM(N,fe,F),me=new VM(T),Ce=new MT(S,K,Z,Qe,fe,pe,me),Ae=new YT(S,T),ie=new ET,ae=new LT(Qe),le=new FM(S,K,Z,se,oe,g,l),Me=new UT(S,oe,fe),ne=new qT(N,L,fe,se),I=new kM(N,Qe,L),de=new ZM(N,Qe,L),L.programs=Ce.programs,S.capabilities=fe,S.extensions=Qe,S.properties=T,S.renderLists=ie,S.shadowMap=Me,S.state=se,S.info=L}ee(),_!==Si&&(C=new nb(_,t.width,t.height,i,s));const ue=new WT(S,N);this.xr=ue,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Qe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(A){A!==void 0&&(Pe=A,this.setSize(te,Re,!1))},this.getSize=function(A){return A.set(te,Re)},this.setSize=function(A,H,q=!0){if(ue.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,Re=H,t.width=Math.floor(A*Pe),t.height=Math.floor(H*Pe),q===!0&&(t.style.width=A+"px",t.style.height=H+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(te*Pe,Re*Pe).floor()},this.setDrawingBufferSize=function(A,H,q){te=A,Re=H,Pe=q,t.width=Math.floor(A*q),t.height=Math.floor(H*q),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(_===Si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,H,q,Y){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,H,q,Y),se.viewport(k.copy(j).multiplyScalar(Pe).round())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,H,q,Y){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,H,q,Y),se.scissor(z.copy(J).multiplyScalar(Pe).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(A){se.setScissorTest(he=A)},this.setOpaqueSort=function(A){De=A},this.setTransparentSort=function(A){He=A},this.getClearColor=function(A){return A.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,q=!0){let Y=0;if(A){let W=!1;if(O!==null){const ce=O.texture.format;W=m.has(ce)}if(W){const ce=O.texture.type,Te=p.has(ce),ge=le.getClearColor(),Ee=le.getClearAlpha(),Oe=ge.r,Ye=ge.g,Ge=ge.b;Te?(v[0]=Oe,v[1]=Ye,v[2]=Ge,v[3]=Ee,N.clearBufferuiv(N.COLOR,0,v)):(x[0]=Oe,x[1]=Ye,x[2]=Ge,x[3]=Ee,N.clearBufferiv(N.COLOR,0,x))}else Y|=N.COLOR_BUFFER_BIT}H&&(Y|=N.DEPTH_BUFFER_BIT),q&&(Y|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",be,!1),le.dispose(),ie.dispose(),ae.dispose(),T.dispose(),K.dispose(),Z.dispose(),oe.dispose(),pe.dispose(),ne.dispose(),Ce.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",$t),ue.removeEventListener("sessionend",at),yt.stop()};function Ve(A){A.preventDefault(),Nc("WebGLRenderer: Context Lost."),M=!0}function mt(){Nc("WebGLRenderer: Context Restored."),M=!1;const A=L.autoReset,H=Me.enabled,q=Me.autoUpdate,Y=Me.needsUpdate,W=Me.type;ee(),L.autoReset=A,Me.enabled=H,Me.autoUpdate=q,Me.needsUpdate=Y,Me.type=W}function be(A){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ne(A){const H=A.target;H.removeEventListener("dispose",Ne),et(H)}function et(A){ve(A),T.remove(A)}function ve(A){const H=T.get(A).programs;H!==void 0&&(H.forEach(function(q){Ce.releaseProgram(q)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,q,Y,W,ce){H===null&&(H=Je);const Te=W.isMesh&&W.matrixWorld.determinant()<0,ge=rn(A,H,q,Y,W);se.setMaterial(Y,Te);let Ee=q.index,Oe=1;if(Y.wireframe===!0){if(Ee=Se.getWireframeAttribute(q),Ee===void 0)return;Oe=2}const Ye=q.drawRange,Ge=q.attributes.position;let lt=Ye.start*Oe,wt=(Ye.start+Ye.count)*Oe;ce!==null&&(lt=Math.max(lt,ce.start*Oe),wt=Math.min(wt,(ce.start+ce.count)*Oe)),Ee!==null?(lt=Math.max(lt,0),wt=Math.min(wt,Ee.count)):Ge!=null&&(lt=Math.max(lt,0),wt=Math.min(wt,Ge.count));const Wt=wt-lt;if(Wt<0||Wt===1/0)return;pe.setup(W,Y,ge,q,Ee);let Xt,Pt=I;if(Ee!==null&&(Xt=$.get(Ee),Pt=de,Pt.setIndex(Xt)),W.isMesh)Y.wireframe===!0?(se.setLineWidth(Y.wireframeLinewidth*G()),Pt.setMode(N.LINES)):Pt.setMode(N.TRIANGLES);else if(W.isLine){let We=Y.linewidth;We===void 0&&(We=1),se.setLineWidth(We*G()),W.isLineSegments?Pt.setMode(N.LINES):W.isLineLoop?Pt.setMode(N.LINE_LOOP):Pt.setMode(N.LINE_STRIP)}else W.isPoints?Pt.setMode(N.POINTS):W.isSprite&&Pt.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)hl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))Pt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const We=W._multiDrawStarts,St=W._multiDrawCounts,_t=W._multiDrawCount,di=Ee?$.get(Ee).bytesPerElement:1,ao=T.get(Y).currentProgram.getUniforms();for(let pi=0;pi<_t;pi++)ao.setValue(N,"_gl_DrawID",pi),Pt.render(We[pi]/di,St[pi])}else if(W.isInstancedMesh)Pt.renderInstances(lt,Wt,W.count);else if(q.isInstancedBufferGeometry){const We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,St=Math.min(q.instanceCount,We);Pt.renderInstances(lt,Wt,St)}else Pt.render(lt,Wt)};function Ke(A,H,q){A.transparent===!0&&A.side===or&&A.forceSinglePass===!1?(A.side=oi,A.needsUpdate=!0,Et(A,H,q),A.side=Vr,A.needsUpdate=!0,Et(A,H,q),A.side=or):Et(A,H,q)}this.compile=function(A,H,q=null){q===null&&(q=A),b=ae.get(q),b.init(H),w.push(b),q.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),A!==q&&A.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights();const Y=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ce=W.material;if(ce)if(Array.isArray(ce))for(let Te=0;Te<ce.length;Te++){const ge=ce[Te];Ke(ge,q,W),Y.add(ge)}else Ke(ce,q,W),Y.add(ce)}),b=w.pop(),Y},this.compileAsync=function(A,H,q=null){const Y=this.compile(A,H,q);return new Promise(W=>{function ce(){if(Y.forEach(function(Te){T.get(Te).currentProgram.isReady()&&Y.delete(Te)}),Y.size===0){W(A);return}setTimeout(ce,10)}Qe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Fe=null;function Ze(A){Fe&&Fe(A)}function $t(){yt.stop()}function at(){yt.start()}const yt=new Hg;yt.setAnimationLoop(Ze),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(A){Fe=A,ue.setAnimationLoop(A),A===null?yt.stop():yt.start()},ue.addEventListener("sessionstart",$t),ue.addEventListener("sessionend",at),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const q=ue.enabled===!0&&ue.isPresenting===!0,Y=C!==null&&(O===null||q)&&C.begin(S,O);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(H),H=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,H,O),b=ae.get(A,w.length),b.init(H),w.push(b),_e.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ie.setFromProjectionMatrix(_e,cr,H.reversedDepth),Xe=this.localClippingEnabled,ye=me.init(this.clippingPlanes,Xe),y=ie.get(A,E.length),y.init(),E.push(y),ue.enabled===!0&&ue.isPresenting===!0){const Te=S.xr.getDepthSensingMesh();Te!==null&&Zt(Te,H,-1/0,S.sortObjects)}Zt(A,H,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(De,He),Be=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Be&&le.addToRenderList(y,A),this.info.render.frame++,ye===!0&&me.beginShadows();const W=b.state.shadowsArray;if(Me.render(W,A,H),ye===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&C.hasRenderPass())===!1){const Te=y.opaque,ge=y.transmissive;if(b.setupLights(),H.isArrayCamera){const Ee=H.cameras;if(ge.length>0)for(let Oe=0,Ye=Ee.length;Oe<Ye;Oe++){const Ge=Ee[Oe];Rt(Te,ge,A,Ge)}Be&&le.render(A);for(let Oe=0,Ye=Ee.length;Oe<Ye;Oe++){const Ge=Ee[Oe];Ot(y,A,Ge,Ge.viewport)}}else ge.length>0&&Rt(Te,ge,A,H),Be&&le.render(A),Ot(y,A,H)}O!==null&&P===0&&(F.updateMultisampleRenderTarget(O),F.updateRenderTargetMipmap(O)),Y&&C.end(S),A.isScene===!0&&A.onAfterRender(S,A,H),pe.resetDefaultState(),B=-1,V=null,w.pop(),w.length>0?(b=w[w.length-1],ye===!0&&me.setGlobalState(S.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?y=E[E.length-1]:y=null};function Zt(A,H,q,Y){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ie.intersectsSprite(A)){Y&&ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const Te=oe.update(A),ge=A.material;ge.visible&&y.push(A,Te,ge,q,ze.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ie.intersectsObject(A))){const Te=oe.update(A),ge=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ze.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ze.copy(Te.boundingSphere.center)),ze.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(ge)){const Ee=Te.groups;for(let Oe=0,Ye=Ee.length;Oe<Ye;Oe++){const Ge=Ee[Oe],lt=ge[Ge.materialIndex];lt&&lt.visible&&y.push(A,Te,lt,q,ze.z,Ge)}}else ge.visible&&y.push(A,Te,ge,q,ze.z,null)}}const ce=A.children;for(let Te=0,ge=ce.length;Te<ge;Te++)Zt(ce[Te],H,q,Y)}function Ot(A,H,q,Y){const{opaque:W,transmissive:ce,transparent:Te}=A;b.setupLightsView(q),ye===!0&&me.setGlobalState(S.clippingPlanes,q),Y&&se.viewport(k.copy(Y)),W.length>0&&gt(W,H,q),ce.length>0&&gt(ce,H,q),Te.length>0&&gt(Te,H,q),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Rt(A,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){const lt=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new Un(1,1,{generateMipmaps:!0,type:lt?Hr:Si,minFilter:Or,samples:fe.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const ce=b.state.transmissionRenderTarget[Y.id],Te=Y.viewport||k;ce.setSize(Te.z*S.transmissionResolutionScale,Te.w*S.transmissionResolutionScale);const ge=S.getRenderTarget(),Ee=S.getActiveCubeFace(),Oe=S.getActiveMipmapLevel();S.setRenderTarget(ce),S.getClearColor(Q),D=S.getClearAlpha(),D<1&&S.setClearColor(16777215,.5),S.clear(),Be&&le.render(q);const Ye=S.toneMapping;S.toneMapping=fr;const Ge=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),ye===!0&&me.setGlobalState(S.clippingPlanes,Y),gt(A,q,Y),F.updateMultisampleRenderTarget(ce),F.updateRenderTargetMipmap(ce),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let wt=0,Wt=H.length;wt<Wt;wt++){const Xt=H[wt],{object:Pt,geometry:We,material:St,group:_t}=Xt;if(St.side===or&&Pt.layers.test(Y.layers)){const di=St.side;St.side=oi,St.needsUpdate=!0,ei(Pt,q,Y,We,St,_t),St.side=di,St.needsUpdate=!0,lt=!0}}lt===!0&&(F.updateMultisampleRenderTarget(ce),F.updateRenderTargetMipmap(ce))}S.setRenderTarget(ge,Ee,Oe),S.setClearColor(Q,D),Ge!==void 0&&(Y.viewport=Ge),S.toneMapping=Ye}function gt(A,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let W=0,ce=A.length;W<ce;W++){const Te=A[W],{object:ge,geometry:Ee,group:Oe}=Te;let Ye=Te.material;Ye.allowOverride===!0&&Y!==null&&(Ye=Y),ge.layers.test(q.layers)&&ei(ge,H,q,Ee,Ye,Oe)}}function ei(A,H,q,Y,W,ce){A.onBeforeRender(S,H,q,Y,W,ce),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(S,H,q,Y,A,ce),W.transparent===!0&&W.side===or&&W.forceSinglePass===!1?(W.side=oi,W.needsUpdate=!0,S.renderBufferDirect(q,H,Y,W,A,ce),W.side=Vr,W.needsUpdate=!0,S.renderBufferDirect(q,H,Y,W,A,ce),W.side=or):S.renderBufferDirect(q,H,Y,W,A,ce),A.onAfterRender(S,H,q,Y,W,ce)}function Et(A,H,q){H.isScene!==!0&&(H=Je);const Y=T.get(A),W=b.state.lights,ce=b.state.shadowsArray,Te=W.state.version,ge=Ce.getParameters(A,W.state,ce,H,q),Ee=Ce.getProgramCacheKey(ge);let Oe=Y.programs;Y.environment=A.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(A.isMeshStandardMaterial?Z:K).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",Ne),Oe=new Map,Y.programs=Oe);let Ye=Oe.get(Ee);if(Ye!==void 0){if(Y.currentProgram===Ye&&Y.lightsStateVersion===Te)return fi(A,ge),Ye}else ge.uniforms=Ce.getUniforms(A),A.onBeforeCompile(ge,S),Ye=Ce.acquireProgram(ge,Ee),Oe.set(Ee,Ye),Y.uniforms=ge.uniforms;const Ge=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=me.uniform),fi(A,ge),Y.needsLights=dn(A),Y.lightsStateVersion=Te,Y.needsLights&&(Ge.ambientLightColor.value=W.state.ambient,Ge.lightProbe.value=W.state.probe,Ge.directionalLights.value=W.state.directional,Ge.directionalLightShadows.value=W.state.directionalShadow,Ge.spotLights.value=W.state.spot,Ge.spotLightShadows.value=W.state.spotShadow,Ge.rectAreaLights.value=W.state.rectArea,Ge.ltc_1.value=W.state.rectAreaLTC1,Ge.ltc_2.value=W.state.rectAreaLTC2,Ge.pointLights.value=W.state.point,Ge.pointLightShadows.value=W.state.pointShadow,Ge.hemisphereLights.value=W.state.hemi,Ge.directionalShadowMap.value=W.state.directionalShadowMap,Ge.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ge.spotShadowMap.value=W.state.spotShadowMap,Ge.spotLightMatrix.value=W.state.spotLightMatrix,Ge.spotLightMap.value=W.state.spotLightMap,Ge.pointShadowMap.value=W.state.pointShadowMap,Ge.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=Ye,Y.uniformsList=null,Ye}function Cn(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Sc.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function fi(A,H){const q=T.get(A);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function rn(A,H,q,Y,W){H.isScene!==!0&&(H=Je),F.resetTextureUnits();const ce=H.fog,Te=Y.isMeshStandardMaterial?H.environment:null,ge=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Zn,Ee=(Y.isMeshStandardMaterial?Z:K).get(Y.envMap||Te),Oe=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ge=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,wt=!!q.morphAttributes.color;let Wt=fr;Y.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Wt=S.toneMapping);const Xt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Pt=Xt!==void 0?Xt.length:0,We=T.get(Y),St=b.state.lights;if(ye===!0&&(Xe===!0||A!==V)){const Bn=A===V&&Y.id===B;me.setState(Y,A,Bn)}let _t=!1;Y.version===We.__version?(We.needsLights&&We.lightsStateVersion!==St.state.version||We.outputColorSpace!==ge||W.isBatchedMesh&&We.batching===!1||!W.isBatchedMesh&&We.batching===!0||W.isBatchedMesh&&We.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&We.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&We.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&We.instancingMorph===!1&&W.morphTexture!==null||We.envMap!==Ee||Y.fog===!0&&We.fog!==ce||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==me.numPlanes||We.numIntersection!==me.numIntersection)||We.vertexAlphas!==Oe||We.vertexTangents!==Ye||We.morphTargets!==Ge||We.morphNormals!==lt||We.morphColors!==wt||We.toneMapping!==Wt||We.morphTargetsCount!==Pt)&&(_t=!0):(_t=!0,We.__version=Y.version);let di=We.currentProgram;_t===!0&&(di=Et(Y,H,W));let ao=!1,pi=!1,va=!1;const It=di.getUniforms(),ti=We.uniforms;if(se.useProgram(di.program)&&(ao=!0,pi=!0,va=!0),Y.id!==B&&(B=Y.id,pi=!0),ao||V!==A){se.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(N,"projectionMatrix",A.projectionMatrix),It.setValue(N,"viewMatrix",A.matrixWorldInverse);const ni=It.map.cameraPosition;ni!==void 0&&ni.setValue(N,we.setFromMatrixPosition(A.matrixWorld)),fe.logarithmicDepthBuffer&&It.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&It.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,pi=!0,va=!0)}if(We.needsLights&&(St.state.directionalShadowMap.length>0&&It.setValue(N,"directionalShadowMap",St.state.directionalShadowMap,F),St.state.spotShadowMap.length>0&&It.setValue(N,"spotShadowMap",St.state.spotShadowMap,F),St.state.pointShadowMap.length>0&&It.setValue(N,"pointShadowMap",St.state.pointShadowMap,F)),W.isSkinnedMesh){It.setOptional(N,W,"bindMatrix"),It.setOptional(N,W,"bindMatrixInverse");const Bn=W.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),It.setValue(N,"boneTexture",Bn.boneTexture,F))}W.isBatchedMesh&&(It.setOptional(N,W,"batchingTexture"),It.setValue(N,"batchingTexture",W._matricesTexture,F),It.setOptional(N,W,"batchingIdTexture"),It.setValue(N,"batchingIdTexture",W._indirectTexture,F),It.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&It.setValue(N,"batchingColorTexture",W._colorsTexture,F));const Ri=q.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&$e.update(W,q,di),(pi||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,It.setValue(N,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ti.envMap.value=Ee,ti.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(ti.envMapIntensity.value=H.environmentIntensity),ti.dfgLUT!==void 0&&(ti.dfgLUT.value=jT()),pi&&(It.setValue(N,"toneMappingExposure",S.toneMappingExposure),We.needsLights&&sn(ti,va),ce&&Y.fog===!0&&Ae.refreshFogUniforms(ti,ce),Ae.refreshMaterialUniforms(ti,Y,Pe,Re,b.state.transmissionRenderTarget[A.id]),Sc.upload(N,Cn(We),ti,F)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Sc.upload(N,Cn(We),ti,F),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&It.setValue(N,"center",W.center),It.setValue(N,"modelViewMatrix",W.modelViewMatrix),It.setValue(N,"normalMatrix",W.normalMatrix),It.setValue(N,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Bn=Y.uniformsGroups;for(let ni=0,fu=Bn.length;ni<fu;ni++){const Ts=Bn[ni];ne.update(Ts,di),ne.bind(Ts,di)}}return di}function sn(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function dn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,H,q){const Y=T.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),T.get(A.texture).__webglTexture=H,T.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const q=T.get(A);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const br=N.createFramebuffer();this.setRenderTarget=function(A,H=0,q=0){O=A,R=H,P=q;let Y=null,W=!1,ce=!1;if(A){const ge=T.get(A);if(ge.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(N.FRAMEBUFFER,ge.__webglFramebuffer),k.copy(A.viewport),z.copy(A.scissor),X=A.scissorTest,se.viewport(k),se.scissor(z),se.setScissorTest(X),B=-1;return}else if(ge.__webglFramebuffer===void 0)F.setupRenderTarget(A);else if(ge.__hasExternalTextures)F.rebindTextures(A,T.get(A.texture).__webglTexture,T.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ye=A.depthTexture;if(ge.__boundDepthTexture!==Ye){if(Ye!==null&&T.has(Ye)&&(A.width!==Ye.image.width||A.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(A)}}const Ee=A.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ce=!0);const Oe=T.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[H])?Y=Oe[H][q]:Y=Oe[H],W=!0):A.samples>0&&F.useMultisampledRTT(A)===!1?Y=T.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?Y=Oe[q]:Y=Oe,k.copy(A.viewport),z.copy(A.scissor),X=A.scissorTest}else k.copy(j).multiplyScalar(Pe).floor(),z.copy(J).multiplyScalar(Pe).floor(),X=he;if(q!==0&&(Y=br),se.bindFramebuffer(N.FRAMEBUFFER,Y)&&se.drawBuffers(A,Y),se.viewport(k),se.scissor(z),se.setScissorTest(X),W){const ge=T.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,ge.__webglTexture,q)}else if(ce){const ge=H;for(let Ee=0;Ee<A.textures.length;Ee++){const Oe=T.get(A.textures[Ee]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ee,Oe.__webglTexture,q,ge)}}else if(A!==null&&q!==0){const ge=T.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ge.__webglTexture,q)}B=-1},this.readRenderTargetPixels=function(A,H,q,Y,W,ce,Te,ge=0){if(!(A&&A.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=T.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ee=Ee[Te]),Ee){se.bindFramebuffer(N.FRAMEBUFFER,Ee);try{const Oe=A.textures[ge],Ye=Oe.format,Ge=Oe.type;if(!fe.textureFormatReadable(Ye)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(Ge)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Y&&q>=0&&q<=A.height-W&&(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),N.readPixels(H,q,Y,W,re.convert(Ye),re.convert(Ge),ce))}finally{const Oe=O!==null?T.get(O).__webglFramebuffer:null;se.bindFramebuffer(N.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,H,q,Y,W,ce,Te,ge=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=T.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ee=Ee[Te]),Ee)if(H>=0&&H<=A.width-Y&&q>=0&&q<=A.height-W){se.bindFramebuffer(N.FRAMEBUFFER,Ee);const Oe=A.textures[ge],Ye=Oe.format,Ge=Oe.type;if(!fe.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,lt),N.bufferData(N.PIXEL_PACK_BUFFER,ce.byteLength,N.STREAM_READ),A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ge),N.readPixels(H,q,Y,W,re.convert(Ye),re.convert(Ge),0);const wt=O!==null?T.get(O).__webglFramebuffer:null;se.bindFramebuffer(N.FRAMEBUFFER,wt);const Wt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Mv(N,Wt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,lt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ce),N.deleteBuffer(lt),N.deleteSync(Wt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,q=0){const Y=Math.pow(2,-q),W=Math.floor(A.image.width*Y),ce=Math.floor(A.image.height*Y),Te=H!==null?H.x:0,ge=H!==null?H.y:0;F.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Te,ge,W,ce),se.unbindTexture()};const oo=N.createFramebuffer(),pn=N.createFramebuffer();this.copyTextureToTexture=function(A,H,q=null,Y=null,W=0,ce=null){ce===null&&(W!==0?(hl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=W,W=0):ce=0);let Te,ge,Ee,Oe,Ye,Ge,lt,wt,Wt;const Xt=A.isCompressedTexture?A.mipmaps[ce]:A.image;if(q!==null)Te=q.max.x-q.min.x,ge=q.max.y-q.min.y,Ee=q.isBox3?q.max.z-q.min.z:1,Oe=q.min.x,Ye=q.min.y,Ge=q.isBox3?q.min.z:0;else{const Ri=Math.pow(2,-W);Te=Math.floor(Xt.width*Ri),ge=Math.floor(Xt.height*Ri),A.isDataArrayTexture?Ee=Xt.depth:A.isData3DTexture?Ee=Math.floor(Xt.depth*Ri):Ee=1,Oe=0,Ye=0,Ge=0}Y!==null?(lt=Y.x,wt=Y.y,Wt=Y.z):(lt=0,wt=0,Wt=0);const Pt=re.convert(H.format),We=re.convert(H.type);let St;H.isData3DTexture?(F.setTexture3D(H,0),St=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(F.setTexture2DArray(H,0),St=N.TEXTURE_2D_ARRAY):(F.setTexture2D(H,0),St=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const _t=N.getParameter(N.UNPACK_ROW_LENGTH),di=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ao=N.getParameter(N.UNPACK_SKIP_PIXELS),pi=N.getParameter(N.UNPACK_SKIP_ROWS),va=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Xt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Xt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Oe),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ye),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge);const It=A.isDataArrayTexture||A.isData3DTexture,ti=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const Ri=T.get(A),Bn=T.get(H),ni=T.get(Ri.__renderTarget),fu=T.get(Bn.__renderTarget);se.bindFramebuffer(N.READ_FRAMEBUFFER,ni.__webglFramebuffer),se.bindFramebuffer(N.DRAW_FRAMEBUFFER,fu.__webglFramebuffer);for(let Ts=0;Ts<Ee;Ts++)It&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,T.get(A).__webglTexture,W,Ge+Ts),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,T.get(H).__webglTexture,ce,Wt+Ts)),N.blitFramebuffer(Oe,Ye,Te,ge,lt,wt,Te,ge,N.DEPTH_BUFFER_BIT,N.NEAREST);se.bindFramebuffer(N.READ_FRAMEBUFFER,null),se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||T.has(A)){const Ri=T.get(A),Bn=T.get(H);se.bindFramebuffer(N.READ_FRAMEBUFFER,oo),se.bindFramebuffer(N.DRAW_FRAMEBUFFER,pn);for(let ni=0;ni<Ee;ni++)It?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ri.__webglTexture,W,Ge+ni):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ri.__webglTexture,W),ti?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Bn.__webglTexture,ce,Wt+ni):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Bn.__webglTexture,ce),W!==0?N.blitFramebuffer(Oe,Ye,Te,ge,lt,wt,Te,ge,N.COLOR_BUFFER_BIT,N.NEAREST):ti?N.copyTexSubImage3D(St,ce,lt,wt,Wt+ni,Oe,Ye,Te,ge):N.copyTexSubImage2D(St,ce,lt,wt,Oe,Ye,Te,ge);se.bindFramebuffer(N.READ_FRAMEBUFFER,null),se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ti?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(St,ce,lt,wt,Wt,Te,ge,Ee,Pt,We,Xt.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(St,ce,lt,wt,Wt,Te,ge,Ee,Pt,Xt.data):N.texSubImage3D(St,ce,lt,wt,Wt,Te,ge,Ee,Pt,We,Xt):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ce,lt,wt,Te,ge,Pt,We,Xt.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ce,lt,wt,Xt.width,Xt.height,Pt,Xt.data):N.texSubImage2D(N.TEXTURE_2D,ce,lt,wt,Te,ge,Pt,We,Xt);N.pixelStorei(N.UNPACK_ROW_LENGTH,_t),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,di),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ao),N.pixelStorei(N.UNPACK_SKIP_ROWS,pi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,va),ce===0&&H.generateMipmaps&&N.generateMipmap(St),se.unbindTexture()},this.initRenderTarget=function(A){T.get(A).__webglFramebuffer===void 0&&F.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?F.setTextureCube(A,0):A.isData3DTexture?F.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?F.setTexture2DArray(A,0):F.setTexture2D(A,0),se.unbindTexture()},this.resetState=function(){R=0,P=0,O=null,se.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}const lm={type:"change"},md={type:"start"},qg={type:"end"},ec=new Tl,cm=new is,KT=Math.cos(70*fs.DEG2RAD),on=new U,ii=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qu=1e-6;class ZT extends ey{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Uo.ROTATE,MIDDLE:Uo.DOLLY,RIGHT:Uo.PAN},this.touches={ONE:Po.ROTATE,TWO:Po.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new gr,this._lastTargetPosition=new U,this._quat=new gr().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fp,this._sphericalDelta=new Fp,this._scale=1,this._panOffset=new U,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new U,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=QT.bind(this),this._onPointerDown=JT.bind(this),this._onPointerUp=eE.bind(this),this._onContextMenu=aE.bind(this),this._onMouseWheel=iE.bind(this),this._onKeyDown=rE.bind(this),this._onTouchStart=sE.bind(this),this._onTouchMove=oE.bind(this),this._onMouseDown=tE.bind(this),this._onMouseMove=nE.bind(this),this._interceptControlDown=lE.bind(this),this._interceptControlUp=cE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lm),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;on.copy(t).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ii:n>Math.PI&&(n-=ii),i<-Math.PI?i+=ii:i>Math.PI&&(i-=ii),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),t.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=on.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ec.origin.copy(this.object.position),ec.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ec.direction))<KT?this.object.lookAt(this.target):(cm.setFromNormalAndCoplanarPoint(this.object.up,this.target),ec.intersectPlane(cm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>qu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qu||this._lastTargetPosition.distanceToSquared(this.target)>qu?(this.dispatchEvent(lm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ii/60*this.autoRotateSpeed*e:ii/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){on.setFromMatrixColumn(t,0),on.multiplyScalar(-e),this._panOffset.add(on)}_panUp(e,t){this.screenSpacePanning===!0?on.setFromMatrixColumn(t,1):(on.setFromMatrixColumn(t,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(e),this._panOffset.add(on)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;on.copy(i).sub(this.target);let s=on.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/t.clientHeight),this._rotateUp(ii*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/t.clientHeight),this._rotateUp(ii*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function JT(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function QT(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function eE(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qg),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function tE(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Uo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ct.DOLLY;break;case Uo.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ct.ROTATE}break;case Uo.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(md)}function nE(r){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function iE(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(r.preventDefault(),this.dispatchEvent(md),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(qg))}function rE(r){this.enabled!==!1&&this._handleKeyDown(r)}function sE(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Po.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ct.TOUCH_ROTATE;break;case Po.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case Po.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ct.TOUCH_DOLLY_PAN;break;case Po.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(md)}function oE(r){switch(this._trackPointer(r),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ct.NONE}}function aE(r){this.enabled!==!1&&r.preventDefault()}function lE(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cE(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Dr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function $g(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var wi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ta={duration:.5,overwrite:!1,delay:0},gd,An,Bt,Bi=1e8,Dt=1/Bi,mf=Math.PI*2,uE=mf/4,hE=0,jg=Math.sqrt,fE=Math.cos,dE=Math.sin,bn=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},Wr=function(e){return typeof e=="number"},_d=function(e){return typeof e>"u"},vr=function(e){return typeof e=="object"},ai=function(e){return e!==!1},vd=function(){return typeof window<"u"},tc=function(e){return qt(e)||bn(e)},Kg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fn=Array.isArray,pE=/random\([^)]+\)/g,mE=/,\s*/g,um=/(?:-?\.?\d|\.)+/gi,Zg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Lo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$u=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Jg=/[+-]=-?[.\d]+/,gE=/[^,'"\[\]\s]+/gi,_E=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,ir,gf,xd,Ai={},Bc={},Qg,e_=function(e){return(Bc=na(e,Ai))&&hi},yd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},dl=function(e,t){return!t&&console.warn(e)},t_=function(e,t){return e&&(Ai[e]=t)&&Bc&&(Bc[e]=t)||Ai},pl=function(){return 0},vE={suppressEvents:!0,isStart:!0,kill:!1},Mc={suppressEvents:!0,kill:!1},xE={suppressEvents:!0},Sd={},ds=[],_f={},n_,xi={},ju={},hm=30,bc=[],Md="",bd=function(e){var t=e[0],n,i;if(vr(t)||qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=bc.length;i--&&!bc[i].targetTest(t););n=bc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new w_(e[i],n)))||e.splice(i,1);return e},qs=function(e){return e._gsap||bd(ki(e))[0]._gsap},i_=function(e,t,n){return(n=e[t])&&qt(n)?e[t]():_d(n)&&e.getAttribute&&e.getAttribute(t)||n},li=function(e,t){return(e=e.split(",")).forEach(t)||e},jt=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},ko=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},yE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},kc=function(){var e=ds.length,t=ds.slice(0),n,i;for(_f={},ds.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Td=function(e){return!!(e._initted||e._startAt||e.add)},r_=function(e,t,n,i){ds.length&&!An&&kc(),e.render(t,n,!!(An&&t<0&&Td(e))),ds.length&&!An&&kc()},s_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(gE).length<2?t:bn(e)?e.trim():e},o_=function(e){return e},Ci=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},SE=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},na=function(e,t){for(var n in t)e[n]=t[n];return e},fm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=vr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},zc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ya=function(e){var t=e.parent||zt,n=e.keyframes?SE(Fn(e.keyframes)):Ci;if(ai(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ME=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},a_=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},au=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},_s=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},$s=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},bE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},vf=function(e,t,n,i){return e._startAt&&(An?e._startAt.revert(Mc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},TE=function r(e){return!e||e._ts&&r(e.parent)},dm=function(e){return e._repeat?ia(e._tTime,e=e.duration()+e._rDelay)*e:0},ia=function(e,t){var n=Math.floor(e=kt(e/t));return e&&n===e?n-1:n},Vc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},lu=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Dt)||0))},cu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),lu(e),n._dirty||$s(n,e)),e},l_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Vc(e.rawTime(),t),(!t._dur||wl(0,t.totalDuration(),n)-t._tTime>Dt)&&t.render(n,!0)),$s(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Dt}},ar=function(e,t,n,i){return t.parent&&_s(t),t._start=kt((Wr(n)?n:n||e!==zt?Li(e,n,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),a_(e,t,"_first","_last",e._sort?"_start":0),xf(t)||(e._recent=t),i||l_(e,t),e._ts<0&&cu(e,e._tTime),e},c_=function(e,t){return(Ai.ScrollTrigger||yd("scrollTrigger",t))&&Ai.ScrollTrigger.create(t,e)},u_=function(e,t,n,i,s){if(wd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!An&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&n_!==Mi.frame)return ds.push(e),e._lazy=[s,i],1},EE=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},xf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},wE=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&EE(e)&&!(!e._initted&&xf(e))||(e._ts<0||e._dp._ts<0)&&!xf(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=wl(0,e._tDur,t),u=ia(l,a),e._yoyo&&u&1&&(o=1-o),u!==ia(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||An||i||e._zTime===Dt||!t&&e._zTime){if(!e._initted&&u_(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Dt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&vf(e,t,n,!0),e._onUpdate&&!n&&Ti(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&_s(e,1),!n&&!An&&(Ti(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},AE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ra=function(e,t,n,i){var s=e._repeat,o=kt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:kt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&cu(e,e._tTime=e._tDur*a),e.parent&&lu(e),n||$s(e.parent,e),e},pm=function(e){return e instanceof qn?$s(e):ra(e,e._dur)},CE={_start:0,endTime:pl,totalDuration:pl},Li=function r(e,t,n){var i=e.labels,s=e._recent||CE,o=e.duration()>=Bi?s.endTime(!1):e._dur,a,l,c;return bn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Fn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},qa=function(e,t,n){var i=Wr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ai(l.vars.inherit)&&l.parent;o.immediateRender=ai(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new tn(t[0],o,t[s+1])},bs=function(e,t){return e||e===0?t(e):t},wl=function(e,t,n){return n<e?e:n>t?t:n},Nn=function(e,t){return!bn(e)||!(t=_E.exec(e))?"":t[1]},RE=function(e,t,n){return bs(n,function(i){return wl(e,t,i)})},yf=[].slice,h_=function(e,t){return e&&vr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&vr(e[0]))&&!e.nodeType&&e!==ir},PE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return bn(i)&&!t||h_(i,1)?(s=n).push.apply(s,ki(i)):n.push(i)})||n},ki=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):bn(e)&&!n&&(gf||!sa())?yf.call((t||xd).querySelectorAll(e),0):Fn(e)?PE(e,n):h_(e)?yf.call(e,0):e?[e]:[]},Sf=function(e){return e=ki(e)[0]||dl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ki(t,n.querySelectorAll?n:n===e?dl("Invalid scope")||xd.createElement("div"):e)}},f_=function(e){return e.sort(function(){return .5-Math.random()})},d_=function(e){if(qt(e))return e;var t=vr(e)?e:{each:e},n=js(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return bn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,v,x,y,b,E,w,C,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Bi])[1],!S){for(w=-Bi;w<(w=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],p=l?Math.min(S,_)*u-.5:i%S,v=S===Bi?0:l?_*h/S-.5:i/S|0,w=0,C=Bi,E=0;E<_;E++)x=E%S-p,y=v-(E/S|0),m[E]=b=c?Math.abs(c==="y"?y:x):jg(x*x+y*y),b>w&&(w=b),b<C&&(C=b);i==="random"&&f_(m),m.max=w-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Nn(t.amount||t.each)||0,n=n&&_<0?b_(n):n}return _=(m[f]-m.min)/m.max||0,kt(m.b+(n?n(_):_)*m.v)+m.u}},Mf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=kt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Wr(n)?0:Nn(n))}},p_=function(e,t){var n=Fn(e),i,s;return!n&&vr(e)&&(i=n=e.radius||Bi,e.values?(e=ki(e.values),(s=!Wr(e[0]))&&(i*=i)):e=Mf(e.increment)),bs(t,n?qt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Bi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Wr(o)?u:u+Nn(o)}:Mf(e))},m_=function(e,t,n,i){return bs(Fn(e)?!t:n===!0?!!(n=0):!i,function(){return Fn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},LE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},DE=function(e,t){return function(n){return e(parseFloat(n))+(t||Nn(n))}},IE=function(e,t,n){return __(e,t,0,1,n)},g_=function(e,t,n){return bs(n,function(i){return e[~~t(i)]})},NE=function r(e,t,n){var i=t-e;return Fn(e)?g_(e,r(0,e.length),t):bs(n,function(s){return(i+(s-e)%i)%i+e})},OE=function r(e,t,n){var i=t-e,s=i*2;return Fn(e)?g_(e,r(0,e.length-1),t):bs(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ml=function(e){return e.replace(pE,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(mE);return m_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},__=function(e,t,n,i,s){var o=t-e,a=i-n;return bs(s,function(l){return n+((l-e)/o*a||0)})},UE=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=bn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Fn(e)&&!Fn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=na(Fn(e)?[]:{},e));if(!u){for(l in t)Ed.call(a,e,l,"get",t[l]);s=function(g){return Rd(g,a)||(o?e.p:e)}}}return bs(n,s)},mm=function(e,t,n){var i=e.labels,s=Bi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ti=function(e,t,n){var i=e.vars,s=i[t],o=Bt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ds.length&&kc(),a&&(Bt=a),u=l?s.apply(c,l):s.call(c),Bt=o,u},Oa=function(e){return _s(e),e.scrollTrigger&&e.scrollTrigger.kill(!!An),e.progress()<1&&Ti(e,"onInterrupt"),e},Do,v_=[],x_=function(e){if(e)if(e=!e.name&&e.default||e,vd()||e.headless){var t=e.name,n=qt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:pl,render:Rd,add:Ed,kill:JE,modifier:ZE,rawVars:0},o={targetTest:0,get:0,getSetter:Cd,aliases:{},register:0};if(sa(),e!==i){if(xi[t])return;Ci(i,Ci(zc(e,s),o)),na(i.prototype,na(s,zc(e,o))),xi[i.prop=t]=i,e.targetTest&&(bc.push(i),Sd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}t_(t,i),e.register&&e.register(hi,i,ci)}else v_.push(e)},Lt=255,Ua={aqua:[0,Lt,Lt],lime:[0,Lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Lt],navy:[0,0,128],white:[Lt,Lt,Lt],olive:[128,128,0],yellow:[Lt,Lt,0],orange:[Lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Lt,0,0],pink:[Lt,192,203],cyan:[0,Lt,Lt],transparent:[Lt,Lt,Lt,0]},Ku=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Lt+.5|0},y_=function(e,t,n){var i=e?Wr(e)?[e>>16,e>>8&Lt,e&Lt]:0:Ua.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ua[e])i=Ua[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Lt,i&Lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Lt,e&Lt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(um),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ku(l+1/3,s,o),i[1]=Ku(l,s,o),i[2]=Ku(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Zg),n&&i.length<4&&(i[3]=1),i}else i=e.match(um)||Ua.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Lt,o=i[1]/Lt,a=i[2]/Lt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},S_=function(e){var t=[],n=[],i=-1;return e.split(ps).forEach(function(s){var o=s.match(Lo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},gm=function(e,t,n){var i="",s=(e+i).match(ps),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=y_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=S_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ps,"1").split(Lo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ps),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},ps=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ua)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),FE=/hsl[a]?\(/,M_=function(e){var t=e.join(" "),n;if(ps.lastIndex=0,ps.test(t))return n=FE.test(t),e[1]=gm(e[1],n),e[0]=gm(e[0],n,S_(e[1])),!0},gl,Mi=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,v=m===!0,x,y,b,E;if((p>e||p<0)&&(n+=p-t),i+=p,b=i-n,x=b-o,(x>0||v)&&(E=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](b,f,E,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Qg&&(!gf&&vd()&&(ir=gf=window,xd=ir.document||{},Ai.gsap=hi,(ir.gsapVersions||(ir.gsapVersions=[])).push(hi.version),e_(Bc||ir.GreenSockGlobals||!ir.gsap&&ir||{}),v_.forEach(x_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},gl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),gl=0,c=pl},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,v){var x=p?function(y,b,E,w){m(y,b,E,w),h.remove(x)}:m;return h.remove(m),a[v?"unshift":"push"](x),sa(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),sa=function(){return!gl&&Mi.wake()},dt={},BE=/^[\d.\-M][\d.\-,\s]/,kE=/["']/g,zE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(kE,"").trim():+c,i=l.substr(a+1).trim();return t},VE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},HE=function(e){var t=(e+"").split("("),n=dt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[zE(t[1])]:VE(e).split(",").map(s_)):dt._CE&&BE.test(e)?dt._CE("",e):n},b_=function(e){return function(t){return 1-e(1-t)}},T_=function r(e,t){for(var n=e._first,i;n;)n instanceof qn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},js=function(e,t){return e&&(qt(e)?e:dt[e]||HE(e))||t},so=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return li(e,function(a){dt[a]=Ai[a]=s,dt[o=a.toLowerCase()]=n;for(var l in s)dt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[a+"."+l]=s[l]}),s},E_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Zu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/mf*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*dE((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:E_(a);return s=mf/s,l.config=function(c,u){return r(e,c,u)},l},Ju=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:E_(n);return i.config=function(s){return r(e,s)},i};li("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;so(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;so("Elastic",Zu("in"),Zu("out"),Zu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};so("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);so("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});so("Circ",function(r){return-(jg(1-r*r)-1)});so("Sine",function(r){return r===1?1:-fE(r*uE)+1});so("Back",Ju("in"),Ju("out"),Ju());dt.SteppedEase=dt.steps=Ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Dt;return function(a){return((i*wl(0,o,a)|0)+s)*n}}};ta.ease=dt["quad.out"];li("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Md+=r+","+r+"Params,"});var w_=function(e,t){this.id=hE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:i_,this.set=t?t.getSetter:Cd},_l=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ra(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),gl||Mi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ra(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(sa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(cu(this,n),!s._dp||s.parent||l_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ar(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Dt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),r_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+dm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+dm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ia(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Dt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Vc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Dt?0:this._rts,this.totalTime(wl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),lu(this),bE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(sa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Dt&&(this._tTime-=Dt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=kt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ar(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ai(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=xE);var i=An;return An=n,Td(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),An=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,pm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,pm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Li(this,n),ai(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ai(i)),this._dur||(this._zTime=-Dt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Dt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Dt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=qt(n)?n:o_,l=function(){var u=i.then;i.then=null,s&&s(),qt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Oa(this)},r})();Ci(_l.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Dt,_prom:0,_ps:!1,_rts:1});var qn=(function(r){$g(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ai(n.sortChildren),zt&&ar(n.parent||zt,Dr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&c_(Dr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return qa(0,arguments,this),this},t.from=function(i,s,o){return qa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return qa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ya(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new tn(i,s,Li(this,o),1),this},t.call=function(i,s,o){return ar(this,tn.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new tn(i,o,Li(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Ya(o).immediateRender=ai(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Ya(a).immediateRender=ai(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:kt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,v,x,y,b,E,w;if(this!==zt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,y=this._start,x=this._ts,p=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=kt(u%m),u===l?(_=this._repeat,f=c):(b=kt(u/m),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=ia(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),E&&_&1&&(f=c-f,w=1),_!==b&&!this._lock){var C=E&&b&1,S=C===(E&&_&1);if(_<b&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(w?0:kt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ti(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;T_(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=AE(this,kt(a),kt(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!b&&(Ti(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){v=0,g&&(u+=this._zTime=-Dt);break}}d=g}else{d=this._last;for(var M=i<0?i:f;d;){if(g=d._prev,(d._act||M<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,o||An&&Td(d)),f!==this._time||!this._ts&&!p){v=0,g&&(u+=this._zTime=M?-Dt:Dt);break}}d=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-Dt)._zTime=f>=a?1:-1,this._ts))return this._start=y,lu(this),this.render(i,s,o);this._onUpdate&&!s&&Ti(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&_s(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Ti(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Wr(s)||(s=Li(this,s,i)),!(i instanceof _l)){if(Fn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(bn(i))return this.addLabel(i,s);if(qt(i))i=tn.delayedCall(0,i);else return this}return this!==i?ar(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Bi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof tn?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return bn(i)?this.removeLabel(i):qt(i)?this.killTweensOf(i):(i.parent===this&&au(this,i),i===this._recent&&(this._recent=this._last),$s(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(Mi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Li(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=tn.delayedCall(0,s||pl,o);return a.data="isPause",this._hasPause=1,ar(this,a,Li(this,i))},t.removePause=function(i){var s=this._first;for(i=Li(this,i);s;)s._start===i&&s.data==="isPause"&&_s(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)os!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ki(i),l=this._first,c=Wr(s),u;l;)l instanceof tn?yE(l._targets,a)&&(c?(!os||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Li(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=tn.to(o,Ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Dt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ra(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Ci({startAt:{time:Li(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),mm(this,Li(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),mm(this,Li(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Dt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=kt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return $s(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$s(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Bi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ar(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=kt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ra(o,o===zt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(zt._ts&&(r_(zt,Vc(i,zt)),n_=Mi.frame),Mi.frame>=hm){hm+=wi.autoSleep||120;var s=zt._first;if((!s||!s._ts)&&wi.autoSleep&&Mi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Mi.sleep()}}},e})(_l);Ci(qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var GE=function(e,t,n,i,s,o,a){var l=new ci(this._pt,e,t,0,1,D_,null,s),c=0,u=0,h,f,d,g,_,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ml(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),f=n.match($u)||[];h=$u.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ko(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=$u.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Jg.test(i)||p)&&(l.e=0),this._pt=l,l},Ed=function(e,t,n,i,s,o,a,l,c,u){qt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:qt(h)?c?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=qt(h)?c?$E:P_:Ad,g;if(bn(i)&&(~i.indexOf("random(")&&(i=ml(i)),i.charAt(1)==="="&&(g=ko(f,i)+(Nn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||bf)return!isNaN(f*i)&&i!==""?(g=new ci(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?KE:L_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&yd(t,i),GE.call(this,e,t,f,i,d,l||wi.stringFilter,c))},WE=function(e,t,n,i,s){if(qt(e)&&(e=$a(e,s,t,n,i)),!vr(e)||e.style&&e.nodeType||Fn(e)||Kg(e))return bn(e)?$a(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=$a(e[a],s,t,n,i);return o},A_=function(e,t,n,i,s,o){var a,l,c,u;if(xi[e]&&(a=new xi[e]).init(s,a.rawVars?t[e]:WE(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new ci(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Do))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},os,bf,wd=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!gd,y=e.timeline,b,E,w,C,S,M,R,P,O,B,V,k,z;if(y&&(!f||!s)&&(s="none"),e._ease=js(s,ta.ease),e._yEase=h?b_(js(h===!0?s:h,ta.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(P=m[0]?qs(m[0]).harness:0,k=P&&i[P.prop],b=zc(i,Sd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Mc:vE),_._lazy=0),o){if(_s(e._startAt=tn.set(m,Ci({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ai(l),startAt:null,delay:0,onUpdate:c&&function(){return Ti(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An||!a&&!d)&&e._startAt.revert(Mc),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),w=Ci({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ai(l),immediateRender:a,stagger:0,parent:p},b),k&&(w[P.prop]=k),_s(e._startAt=tn.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An?e._startAt.revert(Mc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Dt,Dt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ai(l)||l&&!g,E=0;E<m.length;E++){if(S=m[E],R=S._gsap||bd(m)[E]._gsap,e._ptLookup[E]=B={},_f[R.id]&&ds.length&&kc(),V=v===m?E:v.indexOf(S),P&&(O=new P).init(S,k||b,e,V,v)!==!1&&(e._pt=C=new ci(e._pt,S,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(X){B[X]=C}),O.priority&&(M=1)),!P||k)for(w in b)xi[w]&&(O=A_(w,b,e,V,S,v))?O.priority&&(M=1):B[w]=C=Ed.call(e,S,w,"get",b[w],V,v,0,i.stringFilter);e._op&&e._op[E]&&e.kill(S,e._op[E]),x&&e._pt&&(os=e,zt.killTweensOf(S,B,e.globalTime(t)),z=!e.parent,os=0),e._pt&&l&&(_f[R.id]=1)}M&&I_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,f&&t<=0&&y.render(Bi,!0,!0)},XE=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return bf=1,e.vars[t]="+=0",wd(e,a),bf=0,l?dl(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=jt(n)+Nn(h.e)),h.b&&(h.b=u.s+Nn(h.b))},YE=function(e,t){var n=e[0]?qs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=na({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},qE=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Fn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},$a=function(e,t,n,i,s){return qt(e)?e.call(t,n,i,s):bn(e)&&~e.indexOf("random(")?ml(e):e},C_=Md+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",R_={};li(C_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return R_[r]=1});var tn=(function(r){$g(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ya(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=i.parent||zt,x=(Fn(n)||Kg(n)?Wr(n[0]):"length"in i)?[n]:ki(n),y,b,E,w,C,S,M,R;if(a._targets=x.length?bd(x):dl("GSAP target "+n+" not found. https://gsap.com",!wi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||tc(c)||tc(u)){if(i=a.vars,y=a.timeline=new qn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=Dr(a),y._start=0,f||tc(c)||tc(u)){if(w=x.length,M=f&&d_(f),vr(f))for(C in f)~C_.indexOf(C)&&(R||(R={}),R[C]=f[C]);for(b=0;b<w;b++)E=zc(i,R_),E.stagger=0,p&&(E.yoyoEase=p),R&&na(E,R),S=x[b],E.duration=+$a(c,Dr(a),b,S,x),E.delay=(+$a(u,Dr(a),b,S,x)||0)-a._delay,!f&&w===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),y.to(S,E,M?M(b,S,x):0),y._ease=dt.none;y.duration()?c=u=0:a.timeline=0}else if(g){Ya(Ci(y.vars.defaults,{ease:"none"})),y._ease=js(g.ease||i.ease||"none");var P=0,O,B,V;if(Fn(g))g.forEach(function(k){return y.to(x,k,">")}),y.duration();else{E={};for(C in g)C==="ease"||C==="easeEach"||qE(C,g[C],E,g.easeEach);for(C in E)for(O=E[C].sort(function(k,z){return k.t-z.t}),P=0,b=0;b<O.length;b++)B=O[b],V={ease:B.e,duration:(B.t-(b?O[b-1].t:0))/100*c},V[C]=B.v,y.to(x,V,P),P+=V.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!gd&&(os=Dr(a),zt.killTweensOf(x),os=0),ar(v,Dr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===kt(v._time)&&ai(h)&&TE(Dr(a))&&v.data!=="nested")&&(a._tTime=-Dt,a.render(Math.max(0,-u)||0)),m&&c_(Dr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Dt&&!u?l:i<Dt?0:i,f,d,g,_,m,p,v,x,y;if(!c)wE(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=kt(h%_),h===l?(g=this._repeat,f=c):(m=kt(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(y=this._yEase,f=c-f),m=ia(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(x&&this._yEase&&T_(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(kt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(u_(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(f/c),this._from&&(this.ratio=v=1-v),!a&&h&&!s&&!m&&(Ti(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&vf(this,i,s,o),Ti(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Ti(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&vf(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&_s(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Ti(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){gl||Mi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||wd(this,c),u=this._ease(c/this._dur),XE(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(cu(this,0),this.parent||a_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Oa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!An),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,os&&os.vars.overwrite!==!0)._first||Oa(this),this.parent&&o!==this.timeline.totalDuration()&&ra(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ki(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&ME(a,l))return s==="all"&&(this._pt=0),Oa(this);for(h=this._op=this._op||[],s!=="all"&&(bn(s)&&(_={},li(s,function(v){return _[v]=1}),s=_),s=YE(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&au(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Oa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return qa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return qa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return zt.killTweensOf(i,s,o)},e})(_l);Ci(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});li("staggerTo,staggerFrom,staggerFromTo",function(r){tn[r]=function(){var e=new qn,t=yf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ad=function(e,t,n){return e[t]=n},P_=function(e,t,n){return e[t](n)},$E=function(e,t,n,i){return e[t](i.fp,n)},jE=function(e,t,n){return e.setAttribute(t,n)},Cd=function(e,t){return qt(e[t])?P_:_d(e[t])&&e.setAttribute?jE:Ad},L_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},KE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},D_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Rd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ZE=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},JE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?au(this,t,"_pt"):t.dep||(n=1),t=i;return!n},QE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},I_=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},ci=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||L_,this.d=l||this,this.set=c||Ad,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=QE,this.m=n,this.mt=s,this.tween=i},r})();li(Md+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Sd[r]=1});Ai.TweenMax=Ai.TweenLite=tn;Ai.TimelineLite=Ai.TimelineMax=qn;zt=new qn({sortChildren:!1,defaults:ta,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wi.stringFilter=M_;var Ks=[],Tc={},ew=[],_m=0,tw=0,Qu=function(e){return(Tc[e]||ew).map(function(t){return t()})},Tf=function(){var e=Date.now(),t=[];e-_m>2&&(Qu("matchMediaInit"),Ks.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ir.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Qu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),_m=e,Qu("matchMedia"))},N_=(function(){function r(t,n){this.selector=n&&Sf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=tw++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){qt(n)&&(s=i,i=n,n=qt);var o=this,a=function(){var c=Bt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Sf(s)),Bt=o,h=i.apply(o,arguments),qt(h)&&o._r.push(h),Bt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===qt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Bt;Bt=null,n(this),Bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof tn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof qn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof tn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ks.length;o--;)Ks[o].id===this.id&&Ks.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),nw=(function(){function r(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){vr(n)||(n={matches:n});var o=new N_(0,s||this.scope),a=o.conditions={},l,c,u;Bt&&!o.selector&&(o.selector=Bt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ir.matchMedia(n[c]),l&&(Ks.indexOf(o)<0&&Ks.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Tf):l.addEventListener("change",Tf)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Hc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return x_(i)})},timeline:function(e){return new qn(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,n,i){bn(e)&&(e=ki(e)[0]);var s=qs(e||{}).get,o=n?o_:s_;return n==="native"&&(n=""),e&&(t?o((xi[t]&&xi[t].get||s)(e,t,n,i)):function(a,l,c){return o((xi[a]&&xi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ki(e),e.length>1){var i=e.map(function(u){return hi.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=xi[t],a=qs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Do._pt=0,h.init(e,n?u+n:u,Do,0,[e]),h.render(1,h),Do._pt&&Rd(1,Do)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=hi.to(e,Ci((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=js(e.ease,ta.ease)),fm(ta,e||{})},config:function(e){return fm(wi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!xi[a]&&!Ai[a]&&dl(t+" effect requires "+a+" plugin.")}),ju[t]=function(a,l,c){return n(ki(a),Ci(l||{},s),c)},o&&(qn.prototype[t]=function(a,l,c){return this.add(ju[t](a,vr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){dt[e]=js(t)},parseEase:function(e,t){return arguments.length?js(e,t):dt},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new qn(e),i,s;for(n.smoothChildTiming=ai(e.smoothChildTiming),zt.remove(n),n._dp=0,n._time=n._tTime=zt._time,i=zt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof tn&&i.vars.onComplete===i._targets[0]))&&ar(n,i,i._start-i._delay),i=s;return ar(zt,n,0),n},context:function(e,t){return e?new N_(e,t):Bt},matchMedia:function(e){return new nw(e)},matchMediaRefresh:function(){return Ks.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Tf()},addEventListener:function(e,t){var n=Tc[e]||(Tc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Tc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:NE,wrapYoyo:OE,distribute:d_,random:m_,snap:p_,normalize:IE,getUnit:Nn,clamp:RE,splitColor:y_,toArray:ki,selector:Sf,mapRange:__,pipe:LE,unitize:DE,interpolate:UE,shuffle:f_},install:e_,effects:ju,ticker:Mi,updateRoot:qn.updateRoot,plugins:xi,globalTimeline:zt,core:{PropTween:ci,globals:t_,Tween:tn,Timeline:qn,Animation:_l,getCache:qs,_removeLinkedListItem:au,reverting:function(){return An},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return gd=e}}};li("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Hc[r]=tn[r]});Mi.add(qn.updateRoot);Do=Hc.to({},{duration:0});var iw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},rw=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=iw(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},eh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(bn(s)&&(l={},li(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}rw(a,s)}}}},hi=Hc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)An?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},eh("roundProps",Mf),eh("modifiers"),eh("snap",p_))||Hc;tn.version=qn.version=hi.version="3.14.2";Qg=1;vd()&&sa();dt.Power0;dt.Power1;dt.Power2;dt.Power3;dt.Power4;dt.Linear;dt.Quad;dt.Cubic;dt.Quart;dt.Quint;dt.Strong;dt.Elastic;dt.Back;dt.SteppedEase;dt.Bounce;dt.Sine;dt.Expo;dt.Circ;var vm,as,zo,Pd,Gs,xm,Ld,sw=function(){return typeof window<"u"},Xr={},Us=180/Math.PI,Vo=Math.PI/180,Eo=Math.atan2,ym=1e8,Dd=/([A-Z])/g,ow=/(left|right|width|margin|padding|x)/i,aw=/[\s,\(]\S/,ur={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ef=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},cw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},uw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},O_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},U_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},fw=function(e,t,n){return e.style[t]=n},dw=function(e,t,n){return e.style.setProperty(t,n)},pw=function(e,t,n){return e._gsap[t]=n},mw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},gw=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},_w=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ht="transform",ui=Ht+"Origin",vw=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Xr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ur[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ir(i,a)}):this.tfm[e]=o.x?o[e]:Ir(i,e),e===ui&&(this.tfm.zOrigin=o.zOrigin);else return ur.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ht)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ui,t,"")),e=Ht}(s||t)&&this.props.push(e,t,s[e])},F_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},xw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Dd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ld(),(!s||!s.isStart)&&!n[Ht]&&(F_(n),i.zOrigin&&n[ui]&&(n[ui]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},B_=function(e,t){var n={target:e,props:[],revert:xw,save:vw};return e._gsap||hi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},k_,wf=function(e,t){var n=as.createElementNS?as.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):as.createElement(e);return n&&n.style?n:as.createElement(e)},Ei=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Dd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,oa(t)||t,1)||""},Sm="O,Moz,ms,Ms,Webkit".split(","),oa=function(e,t,n){var i=t||Gs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Sm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Sm[o]:"")+e},Af=function(){sw()&&window.document&&(vm=window,as=vm.document,zo=as.documentElement,Gs=wf("div")||{style:{}},wf("div"),Ht=oa(Ht),ui=Ht+"Origin",Gs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",k_=!!oa("perspective"),Ld=hi.core.reverting,Pd=1)},Mm=function(e){var t=e.ownerSVGElement,n=wf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),zo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),zo.removeChild(n),s},bm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},z_=function(e){var t,n;try{t=e.getBBox()}catch{t=Mm(e),n=1}return t&&(t.width||t.height)||n||(t=Mm(e)),t&&!t.width&&!t.x&&!t.y?{x:+bm(e,["x","cx","x1"])||0,y:+bm(e,["y","cy","y1"])||0,width:0,height:0}:t},V_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&z_(e))},vs=function(e,t){if(t){var n=e.style,i;t in Xr&&t!==ui&&(t=Ht),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Dd,"-$1").toLowerCase())):n.removeAttribute(t)}},ls=function(e,t,n,i,s,o){var a=new ci(e._pt,t,n,0,1,o?U_:O_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Tm={deg:1,rad:1,turn:1},yw={grid:1,flex:1},xs=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Gs.style,l=ow.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Tm[i]||Tm[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&V_(e),(d||o==="%")&&(Xr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],jt(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===as||!_.appendChild)&&(_=as.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Mi.time&&!m.uncache)return jt(s/m.width*h);if(d&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+i,g=e[u],v?e.style[t]=v:vs(e,t)}else(d||o==="%")&&!yw[Ei(_,"display")]&&(a.position=Ei(e,"position")),_===e&&(a.position="static"),_.appendChild(Gs),g=Gs[u],_.removeChild(Gs),a.position="absolute";return l&&d&&(m=qs(_),m.time=Mi.time,m.width=_[u]),jt(f?g*s/h:g&&s?h/g*s:0)},Ir=function(e,t,n,i){var s;return Pd||Af(),t in ur&&t!=="transform"&&(t=ur[t],~t.indexOf(",")&&(t=t.split(",")[0])),Xr[t]&&t!=="transform"?(s=xl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Wc(Ei(e,ui))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Gc[t]&&Gc[t](e,t,n)||Ei(e,t)||i_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?xs(e,t,s,n)+n:s},Sw=function(e,t,n,i){if(!n||n==="none"){var s=oa(t,e,1),o=s&&Ei(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ei(e,"borderTopColor"))}var a=new ci(this._pt,e.style,t,0,1,D_),l=0,c=0,u,h,f,d,g,_,m,p,v,x,y,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ei(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ei(e,t)||i,_?e.style[t]=_:vs(e,t)),u=[n,i],M_(u),n=u[0],i=u[1],f=n.match(Lo)||[],b=i.match(Lo)||[],b.length){for(;h=Lo.exec(i);)m=h[0],v=i.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=ko(d,m)+y),p=parseFloat(m),x=m.substr((p+"").length),l=Lo.lastIndex-x.length,x||(x=x||wi.units[t]||y,l===i.length&&(i+=x,a.e+=x)),y!==x&&(d=xs(e,t,_,x)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?U_:O_;return Jg.test(i)&&(a.e=0),this._pt=a,a},Em={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Mw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Em[n]||n,t[1]=Em[i]||i,t.join(" ")},bw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Xr[a]&&(l=1,a=a==="transformOrigin"?ui:Ht),vs(n,a);l&&(vs(n,Ht),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",xl(n,1),o.uncache=1,F_(i)))}},Gc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new ci(e._pt,t,n,0,0,bw);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},vl=[1,0,0,1,0,0],H_={},G_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},wm=function(e){var t=Ei(e,Ht);return G_(t)?vl:t.substr(7).match(Zg).map(jt)},Id=function(e,t){var n=e._gsap||qs(e),i=e.style,s=wm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?vl:s):(s===vl&&!e.offsetParent&&e!==zo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,zo.appendChild(e)),s=wm(e),l?i.display=l:vs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):zo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Cf=function(e,t,n,i,s,o){var a=e._gsap,l=s||Id(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,b=parseFloat(x[1])||0,E,w,C,S;n?l!==vl&&(w=d*m-g*_)&&(C=y*(m/w)+b*(-_/w)+(_*v-m*p)/w,S=y*(-g/w)+b*(d/w)-(d*v-g*p)/w,y=C,b=S):(E=z_(e),y=E.x+(~x[0].indexOf("%")?y/100*E.width:y),b=E.y+(~(x[1]||x[0]).indexOf("%")?b/100*E.height:b)),i||i!==!1&&a.smooth?(p=y-c,v=b-u,a.xOffset=h+(p*d+v*_)-p,a.yOffset=f+(p*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[ui]="0px 0px",o&&(ls(o,a,"xOrigin",c,y),ls(o,a,"yOrigin",u,b),ls(o,a,"xOffset",h,a.xOffset),ls(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},xl=function(e,t){var n=e._gsap||new w_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ei(e,ui)||"0",u,h,f,d,g,_,m,p,v,x,y,b,E,w,C,S,M,R,P,O,B,V,k,z,X,Q,D,te,Re,Pe,De,He;return u=h=f=_=m=p=v=x=y=0,d=g=1,n.svg=!!(e.getCTM&&V_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ht]!=="none"?l[Ht]:"")),i.scale=i.rotate=i.translate="none"),w=Id(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),Cf(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,w)),b=n.xOrigin||0,E=n.yOrigin||0,w!==vl&&(R=w[0],P=w[1],O=w[2],B=w[3],u=V=w[4],h=k=w[5],w.length===6?(d=Math.sqrt(R*R+P*P),g=Math.sqrt(B*B+O*O),_=R||P?Eo(P,R)*Us:0,v=O||B?Eo(O,B)*Us+_:0,v&&(g*=Math.abs(Math.cos(v*Vo))),n.svg&&(u-=b-(b*R+E*O),h-=E-(b*P+E*B))):(He=w[6],Pe=w[7],D=w[8],te=w[9],Re=w[10],De=w[11],u=w[12],h=w[13],f=w[14],C=Eo(He,Re),m=C*Us,C&&(S=Math.cos(-C),M=Math.sin(-C),z=V*S+D*M,X=k*S+te*M,Q=He*S+Re*M,D=V*-M+D*S,te=k*-M+te*S,Re=He*-M+Re*S,De=Pe*-M+De*S,V=z,k=X,He=Q),C=Eo(-O,Re),p=C*Us,C&&(S=Math.cos(-C),M=Math.sin(-C),z=R*S-D*M,X=P*S-te*M,Q=O*S-Re*M,De=B*M+De*S,R=z,P=X,O=Q),C=Eo(P,R),_=C*Us,C&&(S=Math.cos(C),M=Math.sin(C),z=R*S+P*M,X=V*S+k*M,P=P*S-R*M,k=k*S-V*M,R=z,V=X),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=jt(Math.sqrt(R*R+P*P+O*O)),g=jt(Math.sqrt(k*k+He*He)),C=Eo(V,k),v=Math.abs(C)>2e-4?C*Us:0,y=De?1/(De<0?-De:De):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!G_(Ei(e,Ht)),z&&e.setAttribute("transform",z))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=jt(d),n.scaleY=jt(g),n.rotation=jt(_)+a,n.rotationX=jt(m)+a,n.rotationY=jt(p)+a,n.skewX=v+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ui]=Wc(c)),n.xOffset=n.yOffset=0,n.force3D=wi.force3D,n.renderTransform=n.svg?Ew:k_?W_:Tw,n.uncache=0,n},Wc=function(e){return(e=e.split(" "))[0]+" "+e[1]},th=function(e,t,n){var i=Nn(t);return jt(parseFloat(t)+parseFloat(xs(e,"x",n+"px",i)))+i},Tw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,W_(e,t)},Ls="0deg",Ca="0px",Ds=") ",W_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,x=n.zOrigin,y="",b=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==Ls||u!==Ls)){var E=parseFloat(u)*Vo,w=Math.sin(E),C=Math.cos(E),S;E=parseFloat(h)*Vo,S=Math.cos(E),o=th(v,o,w*S*-x),a=th(v,a,-Math.sin(E)*-x),l=th(v,l,C*S*-x+x)}m!==Ca&&(y+="perspective("+m+Ds),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(b||o!==Ca||a!==Ca||l!==Ca)&&(y+=l!==Ca||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ds),c!==Ls&&(y+="rotate("+c+Ds),u!==Ls&&(y+="rotateY("+u+Ds),h!==Ls&&(y+="rotateX("+h+Ds),(f!==Ls||d!==Ls)&&(y+="skew("+f+", "+d+Ds),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ds),v.style[Ht]=y||"translate(0, 0)"},Ew=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,x=parseFloat(o),y=parseFloat(a),b,E,w,C,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Vo,c*=Vo,b=Math.cos(l)*h,E=Math.sin(l)*h,w=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=Vo,S=Math.tan(c-u),S=Math.sqrt(1+S*S),w*=S,C*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),b*=S,E*=S)),b=jt(b),E=jt(E),w=jt(w),C=jt(C)):(b=h,C=f,E=w=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=xs(d,"x",o,"px"),y=xs(d,"y",a,"px")),(g||_||m||p)&&(x=jt(x+g-(g*b+_*w)+m),y=jt(y+_-(g*E+_*C)+p)),(i||s)&&(S=d.getBBox(),x=jt(x+i/100*S.width),y=jt(y+s/100*S.height)),S="matrix("+b+","+E+","+w+","+C+","+x+","+y+")",d.setAttribute("transform",S),v&&(d.style[Ht]=S)},ww=function(e,t,n,i,s){var o=360,a=bn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Us:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*ym)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*ym)%o-~~(c/o)*o)),e._pt=f=new ci(e._pt,t,n,i,c,lw),f.e=u,f.u="deg",e._props.push(n),f},Am=function(e,t){for(var n in t)e[n]=t[n];return e},Aw=function(e,t,n){var i=Am({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ht]=t,a=xl(n,1),vs(n,Ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ht],o[Ht]=t,a=xl(n,1),o[Ht]=c);for(l in Xr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Nn(c),g=Nn(u),h=d!==g?xs(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new ci(e._pt,a,l,h,f-h,Ef),e._pt.u=g||0,e._props.push(l));Am(a,i)};li("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Gc[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Ir(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var X_={name:"css",register:Af,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,v,x,y,b,E,w,C,S;Pd||Af(),this.styles=this.styles||B_(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(xi[_]&&A_(_,t,n,i,e,s)))){if(d=typeof u,g=Gc[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ml(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ps.lastIndex=0,ps.test(c)||(m=Nn(c),p=Nn(u),p?m!==p&&(c=xs(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],bn(c)&&~c.indexOf("random(")&&(c=ml(c)),Nn(c+"")||c==="auto"||(c+=wi.units[_]||Nn(Ir(e,_))||""),(c+"").charAt(1)==="="&&(c=Ir(e,_))):c=Ir(e,_),f=parseFloat(c),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),_ in ur&&(_==="autoAlpha"&&(f===1&&Ir(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),ls(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=ur[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Xr,x){if(this.styles.save(_),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Ei(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=u,u=Ei(e,"perspective"),M?e.style.perspective=M:vs(e,"perspective")}h=parseFloat(u)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||xl(e,t.parseTransform),E=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new ci(this._pt,a,Ht,0,1,b.renderTransform,b,0,-1),y.dep=1),_==="scale")this._pt=new ci(this._pt,b,"scaleY",b.scaleY,(v?ko(b.scaleY,v+h):h)-b.scaleY||0,Ef),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(ui,0,a[ui]),u=Mw(u),b.svg?Cf(e,u,0,E,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&ls(this,b,"zOrigin",b.zOrigin,p),ls(this,a,_,Wc(c),Wc(u)));continue}else if(_==="svgOrigin"){Cf(e,u,1,E,0,this);continue}else if(_ in H_){ww(this,b,_,f,v?ko(f,v+u):u);continue}else if(_==="smoothOrigin"){ls(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){Aw(this,u,e);continue}}else _ in a||(_=oa(_)||_);if(x||(h||h===0)&&(f||f===0)&&!aw.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=Nn(u)||(_ in wi.units?wi.units[_]:m),m!==p&&(f=xs(e,_,c,p)),this._pt=new ci(this._pt,x?b:a,_,f,(v?ko(f,v+h):h)-f,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?hw:Ef),this._pt.u=p||0,x&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=uw):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=cw);else if(_ in a)Sw.call(this,e,_,c,v?v+u:u);else if(_ in e)this.add(e,_,c||e[_],v?v+u:u,i,s);else if(_!=="parseTransform"){yd(_,u);continue}x||(_ in a?C.push(_,0,a[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),o.push(_)}}w&&I_(this)},render:function(e,t){if(t.tween._time||!Ld())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ir,aliases:ur,getSetter:function(e,t,n){var i=ur[t];return i&&i.indexOf(",")<0&&(t=i),t in Xr&&t!==ui&&(e._gsap.x||Ir(e,"x"))?n&&xm===n?t==="scale"?mw:pw:(xm=n||{})&&(t==="scale"?gw:_w):e.style&&!_d(e.style[t])?fw:~t.indexOf("-")?dw:Cd(e,t)},core:{_removeProperty:vs,_getMatrix:Id}};hi.utils.checkPrefix=oa;hi.core.getStyleSaver=B_;(function(r,e,t,n){var i=li(r+","+e+","+t,function(s){Xr[s]=1});li(e,function(s){wi.units[s]="deg",H_[s]=1}),ur[i[13]]=r+","+e,li(n,function(s){var o=s.split(":");ur[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");li("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){wi.units[r]="px"});hi.registerPlugin(X_);var yl=hi.registerPlugin(X_)||hi;yl.core.Tween;var Cw="1.3.17";function Y_(r,e,t){return Math.max(r,Math.min(e,t))}function Rw(r,e,t){return(1-t)*r+t*e}function Pw(r,e,t,n){return Rw(r,e,1-Math.exp(-t*n))}function Lw(r,e){return(r%e+e)%e}var Dw=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=Y_(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Pw(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Iw(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var Nw=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=Iw(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},q_=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},Cm=100/6,es={passive:!1},Ow=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,es),this.element.addEventListener("touchstart",this.onTouchStart,es),this.element.addEventListener("touchmove",this.onTouchMove,es),this.element.addEventListener("touchend",this.onTouchEnd,es)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new q_;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,es),this.element.removeEventListener("touchstart",this.onTouchStart,es),this.element.removeEventListener("touchmove",this.onTouchMove,es),this.element.removeEventListener("touchend",this.onTouchEnd,es)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Cm:n===2?this.window.width:1,s=n===1?Cm:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Rm=r=>Math.min(1,1.001-Math.pow(2,-10*r)),Uw=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Dw;emitter=new q_;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:v=!0,autoRaf:x=!1,anchors:y=!1,autoToggle:b=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:C=w,stopInertiaOnNavigate:S=!1}={}){window.lenisVersion=Cw,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Rm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:v,autoRaf:x,anchors:y,autoToggle:b,allowNestedScroll:E,naiveDimensions:C,stopInertiaOnNavigate:S},this.dimensions=new Nw(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Ow(t,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,_=i&&n.type==="touchend";_&&(f=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let f;if(typeof r=="string"?(f=document.querySelector(r),f||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(f=r),f){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const d=f.getBoundingClientRect();r=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const f=r-this.animatedScroll;f>this.limit/2?r=r-this.limit:f<-this.limit/2&&(r=r+this.limit)}}else r=Y_(0,r,this.limit);if(r===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=r),typeof o=="number"&&typeof a!="function"?a=Rm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,r,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(f,d)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),i&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,h,f;const d=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const b=window.getComputedStyle(r);i.computedStyle=b;const E=b.overflowX,w=b.overflowY;if(s=["auto","overlay","scroll"].includes(E),o=["auto","overlay","scroll"].includes(w),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||d==="vertical"&&!o||d==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,f=r.clientHeight,a=c>h,l=u>f,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=f}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight;if(!s&&!o||!a&&!l||d==="vertical"&&(!o||!l)||d==="horizontal"&&(!s||!a))return!1;let g;if(d==="horizontal")g="x";else if(d==="vertical")g="y";else{const b=e!==0,E=t!==0;b&&s&&a&&(g="x"),E&&o&&l&&(g="y")}if(!g)return!1;let _,m,p,v,x;if(g==="x")_=r.scrollLeft,m=c-h,p=e,v=s,x=a;else if(g==="y")_=r.scrollTop,m=u-f,p=t,v=o,x=l;else return!1;return(p>0?_<m:_>0)&&v&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Lw(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Pm(r,e){if(e===hv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===cf||e===Eg){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===cf)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class uu extends pa{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vw(t)}),this.register(function(t){return new Hw(t)}),this.register(function(t){return new Zw(t)}),this.register(function(t){return new Jw(t)}),this.register(function(t){return new Qw(t)}),this.register(function(t){return new Ww(t)}),this.register(function(t){return new Xw(t)}),this.register(function(t){return new Yw(t)}),this.register(function(t){return new qw(t)}),this.register(function(t){return new zw(t)}),this.register(function(t){return new $w(t)}),this.register(function(t){return new Gw(t)}),this.register(function(t){return new Kw(t)}),this.register(function(t){return new jw(t)}),this.register(function(t){return new Bw(t)}),this.register(function(t){return new e1(t)}),this.register(function(t){return new t1(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Xa.extractUrlBase(e);o=Xa.resolveURL(c,this.path)}else o=Xa.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Vg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===$_){try{o[ht.KHR_BINARY_GLTF]=new n1(e)}catch(h){i&&i(h);return}s=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new m1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case ht.KHR_MATERIALS_UNLIT:o[h]=new kw;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[h]=new i1(s,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[h]=new r1;break;case ht.KHR_MESH_QUANTIZATION:o[h]=new s1;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Fw(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Bw{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new je(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Zn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zi(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vx(u),c.distance=h;break;case"spot":c=new kx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),tr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class kw{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return Hs}extendParams(e,t,n){const i=[];e.color=new je(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,En))}return Promise.all(i)}}class zw{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Vw{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(a,a)}return Promise.all(s)}}class Hw{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Gw{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Ww{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new je(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,En)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Xw{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Yw{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new je().setRGB(a[0],a[1],a[2],Zn),Promise.all(s)}}class qw{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class $w{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new je().setRGB(a[0],a[1],a[2],Zn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,En)),Promise.all(s)}}class jw{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Kw{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Zw{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Jw{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Qw{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class e1{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class t1{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Di.TRIANGLES&&c.mode!==Di.TRIANGLE_STRIP&&c.mode!==Di.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new it,m=new U,p=new gr,v=new U(1,1,1),x=new dx(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,_.compose(m,p,v));for(const y in l)if(y==="_COLOR_0"){const b=l[y];x.instanceColor=new hf(b.array,b.itemSize,b.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Gt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const $_="glTF",Ra=12,Lm={JSON:1313821514,BIN:5130562};class n1{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ra,s=new DataView(e,Ra);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Lm.JSON){const c=new Uint8Array(e,Ra+o,a);this.content=n.decode(c)}else if(l===Lm.BIN){const c=Ra+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class i1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Rf[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Rf[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Ho[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,Zn,f)})})}}class r1{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class s1{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class j_ extends El{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,v=1-m,x=p-f+h;for(let y=0;y!==a;y++){const b=o[_+y+a],E=o[_+y+l]*u,w=o[g+y+a],C=o[g+y]*u;s[y]=v*b+x*E+m*w+p*C}return s}}const o1=new gr;class a1 extends j_{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return o1.fromArray(s).normalize().toArray(s),s}}const Di={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ho={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dm={9728:cn,9729:un,9984:vg,9985:gc,9986:Ia,9987:Or},Im={33071:lr,33648:Lc,10497:$o},nh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},l1={CUBICSPLINE:void 0,LINEAR:cl,STEP:ll},ih={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function c1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ms({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vr})),r.DefaultMaterial}function Is(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function tr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function u1(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function h1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function f1(r){let e;const t=r.extensions&&r.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rh(t.attributes):e=r.indices+":"+rh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+rh(r.targets[n]);return e}function rh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Pf(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function d1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const p1=new it;class m1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Fw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Fx(this.options.manager):this.textureLoader=new Gx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Is(s,a,i),tr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Xa.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=nh[i.type],a=Ho[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Kn(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=nh[i.type],c=Ho[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(v);x||(_=new c(a,p*d,i.count*d/u),x=new lx(_,d/u),t.cache.add(v,x)),m=new rd(x,l,f%d/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new Kn(_,l,g);if(i.sparse!==void 0){const p=nh.SCALAR,v=Ho[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new v(o[1],x,i.sparse.count*p),E=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Kn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,C=b.length;w<C;w++){const S=b[w];if(m.setX(S,E[w*l]),l>=2&&m.setY(S,E[w*l+1]),l>=3&&m.setZ(S,E[w*l+2]),l>=4&&m.setW(S,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Dm[f.magFilter]||un,u.minFilter=Dm[f.minFilter]||Or,u.wrapS=Im[f.wrapS]||$o,u.wrapT=Im[f.wrapT]||$o,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==cn&&u.minFilter!==un,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Mn(_);m.needsUpdate=!0,f(m)}),t.load(Xa.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),tr(h,o),h.userData.mimeType=o.mimeType||d1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ht.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Fg,Ki.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ug,Ki.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ms}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){const h=i[ht.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new je(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Zn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,En)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=or);const u=s.alphaMode||ih.OPAQUE;if(u===ih.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ih.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Hs&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ke(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Hs&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Hs){const h=s.emissiveFactor;a.emissive=new je().setRGB(h[0],h[1],h[2],Zn)}return s.emissiveTexture!==void 0&&o!==Hs&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,En)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),tr(h,s),t.associations.set(h,{materials:e}),s.extensions&&Is(i,h,s),h})}createUniqueName(e){const t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Nm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=f1(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Nm(new Qn,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?c1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const v=c[d];if(m.mode===Di.TRIANGLES||m.mode===Di.TRIANGLE_STRIP||m.mode===Di.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new ux(_,v):new At(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Di.TRIANGLE_STRIP?p.geometry=Pm(p.geometry,Eg):m.mode===Di.TRIANGLE_FAN&&(p.geometry=Pm(p.geometry,cf));else if(m.mode===Di.LINES)p=new _x(_,v);else if(m.mode===Di.LINE_STRIP)p=new ld(_,v);else if(m.mode===Di.LINE_LOOP)p=new vx(_,v);else if(m.mode===Di.POINTS)p=new xx(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&h1(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),tr(p,s),m.extensions&&Is(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&Is(i,h[0],s),h[0];const f=new Sn;s.extensions&&Is(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yn(fs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new iu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),tr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new it;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new od(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let x=0,y=f.length;x<y;x++){const b=f[x],E=d[x],w=g[x],C=_[x],S=m[x];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const M=n._createAnimationTracks(b,E,w,C,S);if(M)for(let R=0;R<M.length;R++)p.push(M[R])}const v=new Px(s,void 0,p);return tr(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,p1)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Og:c.length>1?u=new Sn:c.length===1?u=c[0]:u=new Gt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),tr(u,s),s.extensions&&Is(n,u,s),s.matrix!==void 0){const h=new it;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Sn;n.name&&(s.name=i.createUniqueName(n.name)),tr(s,n),n.extensions&&Is(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Ki||f instanceof Mn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];ts[s.path]===ts.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ts[s.path]){case ts.weights:c=Jo;break;case ts.rotation:c=Qo;break;case ts.translation:case ts.scale:c=ea;break;default:n.itemSize===1?c=Jo:c=ea;break}const u=i.interpolation!==void 0?l1[i.interpolation]:cl,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+ts[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Pf(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Qo?a1:j_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function g1(r,e,t){const n=e.attributes,i=new Vt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){const u=Pf(Ho[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new U,l=new U;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Pf(Ho[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new yr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Nm(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Rf[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return ft.workingColorSpace!==Zn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),tr(r,e),g1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?u1(r,e.targets,t):r})}class dr{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),dr.nextNameID=dr.nextNameID||0,this.$name.id=`lil-gui-name-${++dr.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class _1 extends dr{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Lf(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const v1={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Lf,toHexString:Lf},Sl={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},x1={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,e,t=1){const n=Sl.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Sl.toHexString(i)}},y1={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=Sl.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Sl.toHexString(i)}},S1=[v1,Sl,x1,y1];function M1(r){return S1.find(e=>e.match(r))}class b1 extends dr{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=M1(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Lf(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class sh extends dr{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class T1 extends dr{constructor(e,t,n,i,s,o){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+v),this.$input.value=this.getValue())},i=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let o=!1,a,l,c,u,h;const f=5,d=v=>{a=v.clientX,l=c=v.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=v=>{if(o){const x=v.clientX-a,y=v.clientY-l;Math.abs(y)>f?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>f&&_()}if(!o){const x=v.clientY-c;h-=x*this._step*this._arrowKeyMultiplier(v),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=v.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,v,x,y,b)=>(p-v)/(x-v)*(b-y)+y,t=p=>{const v=this.$slider.getBoundingClientRect();let x=e(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(x)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=p=>{if(o){const v=p.touches[0].clientX-a,x=p.touches[0].clientY-l;Math.abs(v)>Math.abs(x)?c(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else p.preventDefault(),t(p.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},d=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const x=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(d,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class E1 extends dr{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class w1 extends dr{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var A1=`.lil-gui {
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
}`;function C1(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Om=!1;class Nd{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Om&&a&&(C1(A1),Om=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new E1(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new T1(this,e,t,n,i,s);case"boolean":return new _1(this,e,t);case"string":return new w1(this,e,t);case"function":return new sh(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new b1(this,e,t,n)}addFolder(e){const t=new Nd({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof sh||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof sh)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function R1(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function P1(r,e,t){return e&&R1(r.prototype,e),r}var wn,Ec,bi,cs,us,Go,K_,Fs,ja,Z_,Fr,Xi,J_,Q_=function(){return wn||typeof window<"u"&&(wn=window.gsap)&&wn.registerPlugin&&wn},e0=1,Io=[],ut=[],pr=[],Ka=Date.now,Df=function(e,t){return t},L1=function(){var e=ja.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ut),i.push.apply(i,pr),ut=n,pr=i,Df=function(o,a){return t[o](a)}},ms=function(e,t){return~pr.indexOf(e)&&pr[pr.indexOf(e)+1][t]},Za=function(e){return!!~Z_.indexOf(e)},Vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},zn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},nc="scrollLeft",ic="scrollTop",If=function(){return Fr&&Fr.isPressed||ut.cache++},Xc=function(e,t){var n=function i(s){if(s||s===0){e0&&(bi.history.scrollRestoration="manual");var o=Fr&&Fr.isPressed;s=i.v=Math.round(s)||(Fr&&Fr.iOS?1:0),e(s),i.cacheID=ut.cache,o&&Df("ss",s)}else(t||ut.cache!==i.cacheID||Df("ref"))&&(i.cacheID=ut.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},$n={s:nc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Xc(function(r){return arguments.length?bi.scrollTo(r,ln.sc()):bi.pageXOffset||cs[nc]||us[nc]||Go[nc]||0})},ln={s:ic,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:$n,sc:Xc(function(r){return arguments.length?bi.scrollTo($n.sc(),r):bi.pageYOffset||cs[ic]||us[ic]||Go[ic]||0})},si=function(e,t){return(t&&t._ctx&&t._ctx.selector||wn.utils.toArray)(e)[0]||(typeof e=="string"&&wn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},D1=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ys=function(e,t){var n=t.s,i=t.sc;Za(e)&&(e=cs.scrollingElement||us);var s=ut.indexOf(e),o=i===ln.sc?1:2;!~s&&(s=ut.push(e)-1),ut[s+o]||Vn(e,"scroll",If);var a=ut[s+o],l=a||(ut[s+o]=Xc(ms(e,n),!0)||(Za(e)?i:Xc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=wn.getProperty(e,"scrollBehavior")==="smooth"),l},Nf=function(e,t,n){var i=e,s=e,o=Ka(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Ka();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=Ka();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Pa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Um=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},t0=function(){ja=wn.core.globals().ScrollTrigger,ja&&ja.core&&L1()},n0=function(e){return wn=e||Q_(),!Ec&&wn&&typeof document<"u"&&document.body&&(bi=window,cs=document,us=cs.documentElement,Go=cs.body,Z_=[bi,cs,us,Go],wn.utils.clamp,J_=wn.core.context||function(){},Fs="onpointerenter"in Go?"pointer":"mouse",K_=Kt.isTouch=bi.matchMedia&&bi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in bi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Xi=Kt.eventTypes=("ontouchstart"in us?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in us?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return e0=0},500),t0(),Ec=1),Ec};$n.op=ln;ut.cache=0;var Kt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ec||n0(wn)||console.warn("Please gsap.registerPlugin(Observer)"),ja||t0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,v=n.onDrag,x=n.onPress,y=n.onRelease,b=n.onRight,E=n.onLeft,w=n.onUp,C=n.onDown,S=n.onChangeX,M=n.onChangeY,R=n.onChange,P=n.onToggleX,O=n.onToggleY,B=n.onHover,V=n.onHoverEnd,k=n.onMove,z=n.ignoreCheck,X=n.isNormalizer,Q=n.onGestureStart,D=n.onGestureEnd,te=n.onWheel,Re=n.onEnable,Pe=n.onDisable,De=n.onClick,He=n.scrollSpeed,j=n.capture,J=n.allowClicks,he=n.lockAxis,Ie=n.onLockAxis;this.target=a=si(a)||us,this.vars=n,d&&(d=wn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,He=He||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(bi.getComputedStyle(Go).lineHeight)||22);var ye,Xe,_e,we,ze,Je,Be,G=this,N=0,pt=0,Qe=n.passive||!u&&n.passive!==!1,fe=ys(a,$n),se=ys(a,ln),L=fe(),T=se(),F=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Xi[0]==="pointerdown",K=Za(a),Z=a.ownerDocument||cs,$=[0,0,0],Se=[0,0,0],oe=0,Ce=function(){return oe=Ka()},Ae=function(Ne,et){return(G.event=Ne)&&d&&D1(Ne.target,d)||et&&F&&Ne.pointerType!=="touch"||z&&z(Ne,et)},ie=function(){G._vx.reset(),G._vy.reset(),Xe.pause(),h&&h(G)},ae=function(){var Ne=G.deltaX=Um($),et=G.deltaY=Um(Se),ve=Math.abs(Ne)>=i,Ke=Math.abs(et)>=i;R&&(ve||Ke)&&R(G,Ne,et,$,Se),ve&&(b&&G.deltaX>0&&b(G),E&&G.deltaX<0&&E(G),S&&S(G),P&&G.deltaX<0!=N<0&&P(G),N=G.deltaX,$[0]=$[1]=$[2]=0),Ke&&(C&&G.deltaY>0&&C(G),w&&G.deltaY<0&&w(G),M&&M(G),O&&G.deltaY<0!=pt<0&&O(G),pt=G.deltaY,Se[0]=Se[1]=Se[2]=0),(we||_e)&&(k&&k(G),_e&&(m&&_e===1&&m(G),v&&v(G),_e=0),we=!1),Je&&!(Je=!1)&&Ie&&Ie(G),ze&&(te(G),ze=!1),ye=0},me=function(Ne,et,ve){$[ve]+=Ne,Se[ve]+=et,G._vx.update(Ne),G._vy.update(et),c?ye||(ye=requestAnimationFrame(ae)):ae()},Me=function(Ne,et){he&&!Be&&(G.axis=Be=Math.abs(Ne)>Math.abs(et)?"x":"y",Je=!0),Be!=="y"&&($[2]+=Ne,G._vx.update(Ne,!0)),Be!=="x"&&(Se[2]+=et,G._vy.update(et,!0)),c?ye||(ye=requestAnimationFrame(ae)):ae()},le=function(Ne){if(!Ae(Ne,1)){Ne=Pa(Ne,u);var et=Ne.clientX,ve=Ne.clientY,Ke=et-G.x,Fe=ve-G.y,Ze=G.isDragging;G.x=et,G.y=ve,(Ze||(Ke||Fe)&&(Math.abs(G.startX-et)>=s||Math.abs(G.startY-ve)>=s))&&(_e||(_e=Ze?2:1),Ze||(G.isDragging=!0),Me(Ke,Fe))}},$e=G.onPress=function(be){Ae(be,1)||be&&be.button||(G.axis=Be=null,Xe.pause(),G.isPressed=!0,be=Pa(be),N=pt=0,G.startX=G.x=be.clientX,G.startY=G.y=be.clientY,G._vx.reset(),G._vy.reset(),Vn(X?a:Z,Xi[1],le,Qe,!0),G.deltaX=G.deltaY=0,x&&x(G))},I=G.onRelease=function(be){if(!Ae(be,1)){zn(X?a:Z,Xi[1],le,!0);var Ne=!isNaN(G.y-G.startY),et=G.isDragging,ve=et&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Ke=Pa(be);!ve&&Ne&&(G._vx.reset(),G._vy.reset(),u&&J&&wn.delayedCall(.08,function(){if(Ka()-oe>300&&!be.defaultPrevented){if(be.target.click)be.target.click();else if(Z.createEvent){var Fe=Z.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,bi,1,Ke.screenX,Ke.screenY,Ke.clientX,Ke.clientY,!1,!1,!1,!1,0,null),be.target.dispatchEvent(Fe)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,h&&et&&!X&&Xe.restart(!0),_e&&ae(),p&&et&&p(G),y&&y(G,ve)}},de=function(Ne){return Ne.touches&&Ne.touches.length>1&&(G.isGesturing=!0)&&Q(Ne,G.isDragging)},re=function(){return(G.isGesturing=!1)||D(G)},pe=function(Ne){if(!Ae(Ne)){var et=fe(),ve=se();me((et-L)*He,(ve-T)*He,1),L=et,T=ve,h&&Xe.restart(!0)}},ne=function(Ne){if(!Ae(Ne)){Ne=Pa(Ne,u),te&&(ze=!0);var et=(Ne.deltaMode===1?l:Ne.deltaMode===2?bi.innerHeight:1)*g;me(Ne.deltaX*et,Ne.deltaY*et,0),h&&!X&&Xe.restart(!0)}},ee=function(Ne){if(!Ae(Ne)){var et=Ne.clientX,ve=Ne.clientY,Ke=et-G.x,Fe=ve-G.y;G.x=et,G.y=ve,we=!0,h&&Xe.restart(!0),(Ke||Fe)&&Me(Ke,Fe)}},ue=function(Ne){G.event=Ne,B(G)},Ve=function(Ne){G.event=Ne,V(G)},mt=function(Ne){return Ae(Ne)||Pa(Ne,u)&&De(G)};Xe=G._dc=wn.delayedCall(f||.25,ie).pause(),G.deltaX=G.deltaY=0,G._vx=Nf(0,50,!0),G._vy=Nf(0,50,!0),G.scrollX=fe,G.scrollY=se,G.isDragging=G.isGesturing=G.isPressed=!1,J_(this),G.enable=function(be){return G.isEnabled||(Vn(K?Z:a,"scroll",If),o.indexOf("scroll")>=0&&Vn(K?Z:a,"scroll",pe,Qe,j),o.indexOf("wheel")>=0&&Vn(a,"wheel",ne,Qe,j),(o.indexOf("touch")>=0&&K_||o.indexOf("pointer")>=0)&&(Vn(a,Xi[0],$e,Qe,j),Vn(Z,Xi[2],I),Vn(Z,Xi[3],I),J&&Vn(a,"click",Ce,!0,!0),De&&Vn(a,"click",mt),Q&&Vn(Z,"gesturestart",de),D&&Vn(Z,"gestureend",re),B&&Vn(a,Fs+"enter",ue),V&&Vn(a,Fs+"leave",Ve),k&&Vn(a,Fs+"move",ee)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=we=_e=!1,G._vx.reset(),G._vy.reset(),L=fe(),T=se(),be&&be.type&&$e(be),Re&&Re(G)),G},G.disable=function(){G.isEnabled&&(Io.filter(function(be){return be!==G&&Za(be.target)}).length||zn(K?Z:a,"scroll",If),G.isPressed&&(G._vx.reset(),G._vy.reset(),zn(X?a:Z,Xi[1],le,!0)),zn(K?Z:a,"scroll",pe,j),zn(a,"wheel",ne,j),zn(a,Xi[0],$e,j),zn(Z,Xi[2],I),zn(Z,Xi[3],I),zn(a,"click",Ce,!0),zn(a,"click",mt),zn(Z,"gesturestart",de),zn(Z,"gestureend",re),zn(a,Fs+"enter",ue),zn(a,Fs+"leave",Ve),zn(a,Fs+"move",ee),G.isEnabled=G.isPressed=G.isDragging=!1,Pe&&Pe(G))},G.kill=G.revert=function(){G.disable();var be=Io.indexOf(G);be>=0&&Io.splice(be,1),Fr===G&&(Fr=0)},Io.push(G),X&&Za(a)&&(Fr=G),G.enable(_)},P1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Kt.version="3.14.2";Kt.create=function(r){return new Kt(r)};Kt.register=n0;Kt.getAll=function(){return Io.slice()};Kt.getById=function(r){return Io.filter(function(e){return e.vars.id===r})[0]};Q_()&&wn.registerPlugin(Kt);var Le,Co,ct,Nt,yi,vt,Od,Yc,Ml,Ja,Fa,rc,Ln,hu,Of,Xn,Fm,Bm,Ro,i0,oh,r0,Wn,Uf,s0,o0,ns,Ff,Ud,Wo,Fd,Qa,Bf,ah,sc=1,Dn=Date.now,lh=Dn(),zi=0,Ba=0,km=function(e,t,n){var i=vi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},zm=function(e,t){return t&&(!vi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},I1=function r(){return Ba&&requestAnimationFrame(r)},Vm=function(){return hu=1},Hm=function(){return hu=0},rr=function(e){return e},ka=function(e){return Math.round(e*1e5)/1e5||0},a0=function(){return typeof window<"u"},l0=function(){return Le||a0()&&(Le=window.gsap)&&Le.registerPlugin&&Le},to=function(e){return!!~Od.indexOf(e)},c0=function(e){return(e==="Height"?Fd:ct["inner"+e])||yi["client"+e]||vt["client"+e]},u0=function(e){return ms(e,"getBoundingClientRect")||(to(e)?function(){return Pc.width=ct.innerWidth,Pc.height=Fd,Pc}:function(){return Nr(e)})},N1=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=ms(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?c0(s):e["client"+s])||0}},O1=function(e,t){return!t||~pr.indexOf(e)?u0(e):function(){return Pc}},hr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=ms(e,n))?o()-u0(e)()[s]:to(e)?(yi[n]||vt[n])-c0(i):e[n]-e["offset"+i])},oc=function(e,t){for(var n=0;n<Ro.length;n+=3)(!t||~t.indexOf(Ro[n+1]))&&e(Ro[n],Ro[n+1],Ro[n+2])},vi=function(e){return typeof e=="string"},On=function(e){return typeof e=="function"},za=function(e){return typeof e=="number"},Bs=function(e){return typeof e=="object"},La=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ch=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},wo=Math.abs,h0="left",f0="top",Bd="right",kd="bottom",Zs="width",Js="height",el="Right",tl="Left",nl="Top",il="Bottom",en="padding",Ii="margin",aa="Width",zd="Height",an="px",Ni=function(e){return ct.getComputedStyle(e)},U1=function(e){var t=Ni(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Gm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Nr=function(e,t){var n=t&&Ni(e)[Of]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},qc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},d0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},F1=function(e){return function(t){return Le.utils.snap(d0(e),t)}},Vd=function(e){var t=Le.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},B1=function(e){return function(t,n){return Vd(d0(e))(t,n.direction)}},ac=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},_n=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},lc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Wm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},cc={toggleActions:"play",anticipatePin:0},$c={top:0,left:0,center:.5,bottom:1,right:1},wc=function(e,t){if(vi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in $c?$c[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},uc=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Nt.createElement("div"),_=to(n)||ms(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?vt:n,v=e.indexOf("start")!==-1,x=v?c:u,y="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(i===ln?Bd:kd)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Ac(g,0,i,v),g},Ac=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+aa]=1,s["border"+a+aa]=0,s[n.p]=t+"px",Le.set(e,s)},rt=[],kf={},bl,Xm=function(){return Dn()-zi>34&&(bl||(bl=requestAnimationFrame(zr)))},Ao=function(){(!Wn||!Wn.isPressed||Wn.startX>vt.clientWidth)&&(ut.cache++,Wn?bl||(bl=requestAnimationFrame(zr)):zr(),zi||io("scrollStart"),zi=Dn())},uh=function(){o0=ct.innerWidth,s0=ct.innerHeight},Va=function(e){ut.cache++,(e===!0||!Ln&&!r0&&!Nt.fullscreenElement&&!Nt.webkitFullscreenElement&&(!Uf||o0!==ct.innerWidth||Math.abs(ct.innerHeight-s0)>ct.innerHeight*.25))&&Yc.restart(!0)},no={},k1=[],p0=function r(){return _n(ot,"scrollEnd",r)||Ws(!0)},io=function(e){return no[e]&&no[e].map(function(t){return t()})||k1},_i=[],m0=function(e){for(var t=0;t<_i.length;t+=5)(!e||_i[t+4]&&_i[t+4].query===e)&&(_i[t].style.cssText=_i[t+1],_i[t].getBBox&&_i[t].setAttribute("transform",_i[t+2]||""),_i[t+3].uncache=1)},g0=function(){return ut.forEach(function(e){return On(e)&&++e.cacheID&&(e.rec=e())})},Hd=function(e,t){var n;for(Xn=0;Xn<rt.length;Xn++)n=rt[Xn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Qa=!0,t&&m0(t),t||io("revert")},_0=function(e,t){ut.cache++,(t||!Yn)&&ut.forEach(function(n){return On(n)&&n.cacheID++&&(n.rec=0)}),vi(e)&&(ct.history.scrollRestoration=Ud=e)},Yn,Qs=0,Ym,z1=function(){if(Ym!==Qs){var e=Ym=Qs;requestAnimationFrame(function(){return e===Qs&&Ws(!0)})}},v0=function(){vt.appendChild(Wo),Fd=!Wn&&Wo.offsetHeight||ct.innerHeight,vt.removeChild(Wo)},qm=function(e){return Ml(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ws=function(e,t){if(yi=Nt.documentElement,vt=Nt.body,Od=[ct,Nt,yi,vt],zi&&!e&&!Qa){vn(ot,"scrollEnd",p0);return}v0(),Yn=ot.isRefreshing=!0,Qa||g0();var n=io("refreshInit");i0&&ot.sort(),t||Hd(),ut.forEach(function(i){On(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),Qa=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Bf=1,qm(!0),rt.forEach(function(i){var s=hr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),qm(!1),Bf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ut.forEach(function(i){On(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),_0(Ud,1),Yc.pause(),Qs++,Yn=2,zr(2),rt.forEach(function(i){return On(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Yn=ot.isRefreshing=!1,io("refresh")},zf=0,Cc=1,rl,zr=function(e){if(e===2||!Yn&&!Qa){ot.isUpdating=!0,rl&&rl.update(0);var t=rt.length,n=Dn(),i=n-lh>=50,s=t&&rt[0].scroll();if(Cc=zf>s?-1:1,Yn||(zf=s),i&&(zi&&!hu&&n-zi>200&&(zi=0,io("scrollEnd")),Fa=lh,lh=n),Cc<0){for(Xn=t;Xn-- >0;)rt[Xn]&&rt[Xn].update(0,i);Cc=1}else for(Xn=0;Xn<t;Xn++)rt[Xn]&&rt[Xn].update(0,i);ot.isUpdating=!1}bl=0},Vf=[h0,f0,kd,Bd,Ii+il,Ii+el,Ii+nl,Ii+tl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Rc=Vf.concat([Zs,Js,"boxSizing","max"+aa,"max"+zd,"position",Ii,en,en+nl,en+el,en+il,en+tl]),V1=function(e,t,n){Xo(n);var i=e._gsap;if(i.spacerIsNative)Xo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},hh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Vf.length,o=t.style,a=e.style,l;s--;)l=Vf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[kd]=a[Bd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Zs]=qc(e,$n)+an,o[Js]=qc(e,ln)+an,o[en]=a[Ii]=a[f0]=a[h0]="0",Xo(i),a[Zs]=a["max"+aa]=n[Zs],a[Js]=a["max"+zd]=n[Js],a[en]=n[en],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},H1=/([A-Z])/g,Xo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(H1,"-$1").toLowerCase())}},hc=function(e){for(var t=Rc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Rc[s],n[Rc[s]]);return i.t=e,i},G1=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Pc={left:0,top:0},$m=function(e,t,n,i,s,o,a,l,c,u,h,f,d,g){On(e)&&(e=e(l)),vi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?wc("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,v;if(d&&d.seek(0),isNaN(e)||(e=+e),za(e))d&&(e=Le.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Ac(a,n,i,!0);else{On(t)&&(t=t(l));var x=(e||"0").split(" "),y,b,E,w;v=si(t,l)||vt,y=Nr(v)||{},(!y||!y.left&&!y.top)&&Ni(v).display==="none"&&(w=v.style.display,v.style.display="block",y=Nr(v),w?v.style.display=w:v.style.removeProperty("display")),b=wc(x[0],y[i.d]),E=wc(x[1]||"0",n),e=y[i.p]-c[i.p]-u+b+s-E,a&&Ac(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var C=e+n,S=o._isStart;m="scroll"+i.d2,Ac(o,C,i,S&&C>20||!S&&(h?Math.max(vt[m],yi[m]):o.parentNode[m])<=C+1),h&&(c=Nr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+an))}return d&&v&&(m=Nr(v),d.seek(f),p=Nr(v),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},W1=/(webkit|moz|length|cssText|inset)/i,jm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===vt){e._stOrig=s.cssText,a=Ni(e);for(o in a)!+o&&!W1.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},x0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},fc=function(e,t,n){var i={};i[t.p]="+="+n,Le.set(e,i)},Km=function(e,t){var n=ys(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=x0(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ut.cache++,o.tween&&zr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Le.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},vn(e,"wheel",n.wheelHandler),ot.isTouch&&vn(e,"touchmove",n.wheelHandler),s},ot=(function(){function r(t,n){Co||r.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ff(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ba){this.update=this.refresh=this.kill=rr;return}n=Gm(vi(n)||za(n)||n.nodeType?{trigger:n}:n,cc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,b=s.pinReparent,E=s.pinSpacer,w=s.containerAnimation,C=s.fastScrollEnd,S=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?$n:ln,R=!h&&h!==0,P=si(n.scroller||ct),O=Le.core.getCache(P),B=to(P),V=("pinType"in n?n.pinType:ms(P,"pinType")||B&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=R&&n.toggleActions.split(" "),X="markers"in n?n.markers:cc.markers,Q=B?0:parseFloat(Ni(P)["border"+M.p2+aa])||0,D=this,te=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Re=N1(P,B,M),Pe=O1(P,B),De=0,He=0,j=0,J=ys(P,M),he,Ie,ye,Xe,_e,we,ze,Je,Be,G,N,pt,Qe,fe,se,L,T,F,K,Z,$,Se,oe,Ce,Ae,ie,ae,me,Me,le,$e,I,de,re,pe,ne,ee,ue,Ve;if(D._startClamp=D._endClamp=!1,D._dir=M,m*=45,D.scroller=P,D.scroll=w?w.time.bind(w):J,Xe=J(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(i0=1,n.refreshPriority===-9999&&(rl=D)),O.tweenScroll=O.tweenScroll||{top:Km(P,ln),left:Km(P,$n)},D.tweenTo=he=O.tweenScroll[M.p],D.scrubDuration=function(ve){de=za(ve)&&ve,de?I?I.duration(ve):I=Le.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:de,paused:!0,onComplete:function(){return p&&p(D)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),le=0,l||(l=i.vars.id)),y&&((!Bs(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in vt.style&&Le.set(B?[vt,yi]:P,{scrollBehavior:"auto"}),ut.forEach(function(ve){return On(ve)&&ve.target===(B?Nt.scrollingElement||yi:P)&&(ve.smooth=!1)}),ye=On(y.snapTo)?y.snapTo:y.snapTo==="labels"?F1(i):y.snapTo==="labelsDirectional"?B1(i):y.directional!==!1?function(ve,Ke){return Vd(y.snapTo)(ve,Dn()-He<500?0:Ke.direction)}:Le.utils.snap(y.snapTo),re=y.duration||{min:.1,max:2},re=Bs(re)?Ja(re.min,re.max):Ja(re,re),pe=Le.delayedCall(y.delay||de/2||.1,function(){var ve=J(),Ke=Dn()-He<500,Fe=he.tween;if((Ke||Math.abs(D.getVelocity())<10)&&!Fe&&!hu&&De!==ve){var Ze=(ve-we)/fe,$t=i&&!R?i.totalProgress():Ze,at=Ke?0:($t-$e)/(Dn()-Fa)*1e3||0,yt=Le.utils.clamp(-Ze,1-Ze,wo(at/2)*at/.185),Zt=Ze+(y.inertia===!1?0:yt),Ot,Rt,gt=y,ei=gt.onStart,Et=gt.onInterrupt,Cn=gt.onComplete;if(Ot=ye(Zt,D),za(Ot)||(Ot=Zt),Rt=Math.max(0,Math.round(we+Ot*fe)),ve<=ze&&ve>=we&&Rt!==ve){if(Fe&&!Fe._initted&&Fe.data<=wo(Rt-ve))return;y.inertia===!1&&(yt=Ot-Ze),he(Rt,{duration:re(wo(Math.max(wo(Zt-$t),wo(Ot-$t))*.185/at/.05||0)),ease:y.ease||"power3",data:wo(Rt-ve),onInterrupt:function(){return pe.restart(!0)&&Et&&Et(D)},onComplete:function(){D.update(),De=J(),i&&!R&&(I?I.resetTo("totalProgress",Ot,i._tTime/i._tDur):i.progress(Ot)),le=$e=i&&!R?i.totalProgress():D.progress,v&&v(D),Cn&&Cn(D)}},ve,yt*fe,Rt-ve-yt*fe),ei&&ei(D,he.tween)}}else D.isActive&&De!==ve&&pe.restart(!0)}).pause()),l&&(kf[l]=D),f=D.trigger=si(f||d!==!0&&d),Ve=f&&f._gsap&&f._gsap.stRevert,Ve&&(Ve=Ve(D)),d=d===!0?f:si(d),vi(a)&&(a={targets:f,className:a}),d&&(g===!1||g===Ii||(g=!g&&d.parentNode&&d.parentNode.style&&Ni(d.parentNode).display==="flex"?!1:en),D.pin=d,Ie=Le.core.getCache(d),Ie.spacer?se=Ie.pinState:(E&&(E=si(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ie.spacerIsNative=!!E,E&&(Ie.spacerState=hc(E))),Ie.spacer=F=E||Nt.createElement("div"),F.classList.add("pin-spacer"),l&&F.classList.add("pin-spacer-"+l),Ie.pinState=se=hc(d)),n.force3D!==!1&&Le.set(d,{force3D:!0}),D.spacer=F=Ie.spacer,Me=Ni(d),Ce=Me[g+M.os2],Z=Le.getProperty(d),$=Le.quickSetter(d,M.a,an),hh(d,F,Me),T=hc(d)),X){pt=Bs(X)?Gm(X,Wm):Wm,G=uc("scroller-start",l,P,M,pt,0),N=uc("scroller-end",l,P,M,pt,0,G),K=G["offset"+M.op.d2];var mt=si(ms(P,"content")||P);Je=this.markerStart=uc("start",l,mt,M,pt,K,0,w),Be=this.markerEnd=uc("end",l,mt,M,pt,K,0,w),w&&(ue=Le.quickSetter([Je,Be],M.a,an)),!V&&!(pr.length&&ms(P,"fixedMarkers")===!0)&&(U1(B?vt:P),Le.set([G,N],{force3D:!0}),ie=Le.quickSetter(G,M.a,an),me=Le.quickSetter(N,M.a,an))}if(w){var be=w.vars.onUpdate,Ne=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){D.update(0,0,1),be&&be.apply(w,Ne||[])})}if(D.previous=function(){return rt[rt.indexOf(D)-1]},D.next=function(){return rt[rt.indexOf(D)+1]},D.revert=function(ve,Ke){if(!Ke)return D.kill(!0);var Fe=ve!==!1||!D.enabled,Ze=Ln;Fe!==D.isReverted&&(Fe&&(ne=Math.max(J(),D.scroll.rec||0),j=D.progress,ee=i&&i.progress()),Je&&[Je,Be,G,N].forEach(function($t){return $t.style.display=Fe?"none":"block"}),Fe&&(Ln=D,D.update(Fe)),d&&(!b||!D.isActive)&&(Fe?V1(d,F,se):hh(d,F,Ni(d),Ae)),Fe||D.update(Fe),Ln=Ze,D.isReverted=Fe)},D.refresh=function(ve,Ke,Fe,Ze){if(!((Ln||!D.enabled)&&!Ke)){if(d&&ve&&zi){vn(r,"scrollEnd",p0);return}!Yn&&te&&te(D),Ln=D,he.tween&&!Fe&&(he.tween.kill(),he.tween=0),I&&I.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Ee){return Ee.vars.immediateRender&&Ee.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var $t=Re(),at=Pe(),yt=w?w.duration():hr(P,M),Zt=fe<=.01||!fe,Ot=0,Rt=Ze||0,gt=Bs(Fe)?Fe.end:n.end,ei=n.endTrigger||f,Et=Bs(Fe)?Fe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Cn=D.pinnedContainer=n.pinnedContainer&&si(n.pinnedContainer,D),fi=f&&Math.max(0,rt.indexOf(D))||0,rn=fi,sn,dn,br,oo,pn,A,H,q,Y,W,ce,Te,ge;for(X&&Bs(Fe)&&(Te=Le.getProperty(G,M.p),ge=Le.getProperty(N,M.p));rn-- >0;)A=rt[rn],A.end||A.refresh(0,1)||(Ln=D),H=A.pin,H&&(H===f||H===d||H===Cn)&&!A.isReverted&&(W||(W=[]),W.unshift(A),A.revert(!0,!0)),A!==rt[rn]&&(fi--,rn--);for(On(Et)&&(Et=Et(D)),Et=km(Et,"start",D),we=$m(Et,f,$t,M,J(),Je,G,D,at,Q,V,yt,w,D._startClamp&&"_startClamp")||(d?-.001:0),On(gt)&&(gt=gt(D)),vi(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(vi(Et)?Et.split(" ")[0]:"")+gt:(Ot=wc(gt.substr(2),$t),gt=vi(Et)?Et:(w?Le.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,we):we)+Ot,ei=f)),gt=km(gt,"end",D),ze=Math.max(we,$m(gt||(ei?"100% 0":yt),ei,$t,M,J()+Ot,Be,N,D,at,Q,V,yt,w,D._endClamp&&"_endClamp"))||-.001,Ot=0,rn=fi;rn--;)A=rt[rn]||{},H=A.pin,H&&A.start-A._pinPush<=we&&!w&&A.end>0&&(sn=A.end-(D._startClamp?Math.max(0,A.start):A.start),(H===f&&A.start-A._pinPush<we||H===Cn)&&isNaN(Et)&&(Ot+=sn*(1-A.progress)),H===d&&(Rt+=sn));if(we+=Ot,ze+=Ot,D._startClamp&&(D._startClamp+=Ot),D._endClamp&&!Yn&&(D._endClamp=ze||-.001,ze=Math.min(ze,hr(P,M))),fe=ze-we||(we-=.01)&&.001,Zt&&(j=Le.utils.clamp(0,1,Le.utils.normalize(we,ze,ne))),D._pinPush=Rt,Je&&Ot&&(sn={},sn[M.a]="+="+Ot,Cn&&(sn[M.p]="-="+J()),Le.set([Je,Be],sn)),d&&!(Bf&&D.end>=hr(P,M)))sn=Ni(d),oo=M===ln,br=J(),Se=parseFloat(Z(M.a))+Rt,!yt&&ze>1&&(ce=(B?Nt.scrollingElement||yi:P).style,ce={style:ce,value:ce["overflow"+M.a.toUpperCase()]},B&&Ni(vt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(ce.style["overflow"+M.a.toUpperCase()]="scroll")),hh(d,F,sn),T=hc(d),dn=Nr(d,!0),q=V&&ys(P,oo?$n:ln)(),g?(Ae=[g+M.os2,fe+Rt+an],Ae.t=F,rn=g===en?qc(d,M)+fe+Rt:0,rn&&(Ae.push(M.d,rn+an),F.style.flexBasis!=="auto"&&(F.style.flexBasis=rn+an)),Xo(Ae),Cn&&rt.forEach(function(Ee){Ee.pin===Cn&&Ee.vars.pinSpacing!==!1&&(Ee._subPinOffset=!0)}),V&&J(ne)):(rn=qc(d,M),rn&&F.style.flexBasis!=="auto"&&(F.style.flexBasis=rn+an)),V&&(pn={top:dn.top+(oo?br-we:q)+an,left:dn.left+(oo?q:br-we)+an,boxSizing:"border-box",position:"fixed"},pn[Zs]=pn["max"+aa]=Math.ceil(dn.width)+an,pn[Js]=pn["max"+zd]=Math.ceil(dn.height)+an,pn[Ii]=pn[Ii+nl]=pn[Ii+el]=pn[Ii+il]=pn[Ii+tl]="0",pn[en]=sn[en],pn[en+nl]=sn[en+nl],pn[en+el]=sn[en+el],pn[en+il]=sn[en+il],pn[en+tl]=sn[en+tl],L=G1(se,pn,b),Yn&&J(0)),i?(Y=i._initted,oh(1),i.render(i.duration(),!0,!0),oe=Z(M.a)-Se+fe+Rt,ae=Math.abs(fe-oe)>1,V&&ae&&L.splice(L.length-2,2),i.render(0,!0,!0),Y||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),oh(0)):oe=fe,ce&&(ce.value?ce.style["overflow"+M.a.toUpperCase()]=ce.value:ce.style.removeProperty("overflow-"+M.a));else if(f&&J()&&!w)for(dn=f.parentNode;dn&&dn!==vt;)dn._pinOffset&&(we-=dn._pinOffset,ze-=dn._pinOffset),dn=dn.parentNode;W&&W.forEach(function(Ee){return Ee.revert(!1,!0)}),D.start=we,D.end=ze,Xe=_e=Yn?ne:J(),!w&&!Yn&&(Xe<ne&&J(ne),D.scroll.rec=0),D.revert(!1,!0),He=Dn(),pe&&(De=-1,pe.restart(!0)),Ln=0,i&&R&&(i._initted||ee)&&i.progress()!==ee&&i.progress(ee||0,!0).render(i.time(),!0,!0),(Zt||j!==D.progress||w||_||i&&!i._initted)&&(i&&!R&&(i._initted||j||i.vars.immediateRender!==!1)&&i.totalProgress(w&&we<-.001&&!j?Le.utils.normalize(we,ze,0):j,!0),D.progress=Zt||(Xe-we)/fe===j?0:j),d&&g&&(F._pinOffset=Math.round(D.progress*oe)),I&&I.invalidate(),isNaN(Te)||(Te-=Le.getProperty(G,M.p),ge-=Le.getProperty(N,M.p),fc(G,M,Te),fc(Je,M,Te-(Ze||0)),fc(N,M,ge),fc(Be,M,ge-(Ze||0))),Zt&&!Yn&&D.update(),u&&!Yn&&!Qe&&(Qe=!0,u(D),Qe=!1)}},D.getVelocity=function(){return(J()-_e)/(Dn()-Fa)*1e3||0},D.endAnimation=function(){La(D.callbackAnimation),i&&(I?I.progress(1):i.paused()?R||La(i,D.direction<0,1):La(i,i.reversed()))},D.labelToScroll=function(ve){return i&&i.labels&&(we||D.refresh()||we)+i.labels[ve]/i.duration()*fe||0},D.getTrailing=function(ve){var Ke=rt.indexOf(D),Fe=D.direction>0?rt.slice(0,Ke).reverse():rt.slice(Ke+1);return(vi(ve)?Fe.filter(function(Ze){return Ze.vars.preventOverlaps===ve}):Fe).filter(function(Ze){return D.direction>0?Ze.end<=we:Ze.start>=ze})},D.update=function(ve,Ke,Fe){if(!(w&&!Fe&&!ve)){var Ze=Yn===!0?ne:D.scroll(),$t=ve?0:(Ze-we)/fe,at=$t<0?0:$t>1?1:$t||0,yt=D.progress,Zt,Ot,Rt,gt,ei,Et,Cn,fi;if(Ke&&(_e=Xe,Xe=w?J():Ze,y&&($e=le,le=i&&!R?i.totalProgress():at)),m&&d&&!Ln&&!sc&&zi&&(!at&&we<Ze+(Ze-_e)/(Dn()-Fa)*m?at=1e-4:at===1&&ze>Ze+(Ze-_e)/(Dn()-Fa)*m&&(at=.9999)),at!==yt&&D.enabled){if(Zt=D.isActive=!!at&&at<1,Ot=!!yt&&yt<1,Et=Zt!==Ot,ei=Et||!!at!=!!yt,D.direction=at>yt?1:-1,D.progress=at,ei&&!Ln&&(Rt=at&&!yt?0:at===1?1:yt===1?2:3,R&&(gt=!Et&&z[Rt+1]!=="none"&&z[Rt+1]||z[Rt],fi=i&&(gt==="complete"||gt==="reset"||gt in i))),S&&(Et||fi)&&(fi||h||!i)&&(On(S)?S(D):D.getTrailing(S).forEach(function(br){return br.endAnimation()})),R||(I&&!Ln&&!sc?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",at,i._tTime/i._tDur):(I.vars.totalProgress=at,I.invalidate().restart())):i&&i.totalProgress(at,!!(Ln&&(He||ve)))),d){if(ve&&g&&(F.style[g+M.os2]=Ce),!V)$(ka(Se+oe*at));else if(ei){if(Cn=!ve&&at>yt&&ze+1>Ze&&Ze+1>=hr(P,M),b)if(!ve&&(Zt||Cn)){var rn=Nr(d,!0),sn=Ze-we;jm(d,vt,rn.top+(M===ln?sn:0)+an,rn.left+(M===ln?0:sn)+an)}else jm(d,F);Xo(Zt||Cn?L:T),ae&&at<1&&Zt||$(Se+(at===1&&!Cn?oe:0))}}y&&!he.tween&&!Ln&&!sc&&pe.restart(!0),a&&(Et||x&&at&&(at<1||!ah))&&Ml(a.targets).forEach(function(br){return br.classList[Zt||x?"add":"remove"](a.className)}),o&&!R&&!ve&&o(D),ei&&!Ln?(R&&(fi&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),o&&o(D)),(Et||!ah)&&(c&&Et&&ch(D,c),k[Rt]&&ch(D,k[Rt]),x&&(at===1?D.kill(!1,1):k[Rt]=0),Et||(Rt=at===1?1:3,k[Rt]&&ch(D,k[Rt]))),C&&!Zt&&Math.abs(D.getVelocity())>(za(C)?C:2500)&&(La(D.callbackAnimation),I?I.progress(1):La(i,gt==="reverse"?1:!at,1))):R&&o&&!Ln&&o(D)}if(me){var dn=w?Ze/w.duration()*(w._caScrollDist||0):Ze;ie(dn+(G._isFlipped?1:0)),me(dn)}ue&&ue(-Ze/w.duration()*(w._caScrollDist||0))}},D.enable=function(ve,Ke){D.enabled||(D.enabled=!0,vn(P,"resize",Va),B||vn(P,"scroll",Ao),te&&vn(r,"refreshInit",te),ve!==!1&&(D.progress=j=0,Xe=_e=De=J()),Ke!==!1&&D.refresh())},D.getTween=function(ve){return ve&&he?he.tween:I},D.setPositions=function(ve,Ke,Fe,Ze){if(w){var $t=w.scrollTrigger,at=w.duration(),yt=$t.end-$t.start;ve=$t.start+yt*ve/at,Ke=$t.start+yt*Ke/at}D.refresh(!1,!1,{start:zm(ve,Fe&&!!D._startClamp),end:zm(Ke,Fe&&!!D._endClamp)},Ze),D.update()},D.adjustPinSpacing=function(ve){if(Ae&&ve){var Ke=Ae.indexOf(M.d)+1;Ae[Ke]=parseFloat(Ae[Ke])+ve+an,Ae[1]=parseFloat(Ae[1])+ve+an,Xo(Ae)}},D.disable=function(ve,Ke){if(ve!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Ke||I&&I.pause(),ne=0,Ie&&(Ie.uncache=1),te&&_n(r,"refreshInit",te),pe&&(pe.pause(),he.tween&&he.tween.kill()&&(he.tween=0)),!B)){for(var Fe=rt.length;Fe--;)if(rt[Fe].scroller===P&&rt[Fe]!==D)return;_n(P,"resize",Va),B||_n(P,"scroll",Ao)}},D.kill=function(ve,Ke){D.disable(ve,Ke),I&&!Ke&&I.kill(),l&&delete kf[l];var Fe=rt.indexOf(D);Fe>=0&&rt.splice(Fe,1),Fe===Xn&&Cc>0&&Xn--,Fe=0,rt.forEach(function(Ze){return Ze.scroller===D.scroller&&(Fe=1)}),Fe||Yn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,ve&&i.revert({kill:!1}),Ke||i.kill()),Je&&[Je,Be,G,N].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),rl===D&&(rl=0),d&&(Ie&&(Ie.uncache=1),Fe=0,rt.forEach(function(Ze){return Ze.pin===d&&Fe++}),Fe||(Ie.spacer=0)),n.onKill&&n.onKill(D)},rt.push(D),D.enable(!1,!1),Ve&&Ve(D),i&&i.add&&!fe){var et=D.update;D.update=function(){D.update=et,ut.cache++,we||ze||D.refresh()},Le.delayedCall(.01,D.update),fe=.01,we=ze=0}else D.refresh();d&&z1()},r.register=function(n){return Co||(Le=n||l0(),a0()&&window.document&&r.enable(),Co=Ba),Co},r.defaults=function(n){if(n)for(var i in n)cc[i]=n[i];return cc},r.disable=function(n,i){Ba=0,rt.forEach(function(o){return o[i?"kill":"disable"](n)}),_n(ct,"wheel",Ao),_n(Nt,"scroll",Ao),clearInterval(rc),_n(Nt,"touchcancel",rr),_n(vt,"touchstart",rr),ac(_n,Nt,"pointerdown,touchstart,mousedown",Vm),ac(_n,Nt,"pointerup,touchend,mouseup",Hm),Yc.kill(),oc(_n);for(var s=0;s<ut.length;s+=3)lc(_n,ut[s],ut[s+1]),lc(_n,ut[s],ut[s+2])},r.enable=function(){if(ct=window,Nt=document,yi=Nt.documentElement,vt=Nt.body,Le&&(Ml=Le.utils.toArray,Ja=Le.utils.clamp,Ff=Le.core.context||rr,oh=Le.core.suppressOverwrites||rr,Ud=ct.history.scrollRestoration||"auto",zf=ct.pageYOffset||0,Le.core.globals("ScrollTrigger",r),vt)){Ba=1,Wo=document.createElement("div"),Wo.style.height="100vh",Wo.style.position="absolute",v0(),I1(),Kt.register(Le),r.isTouch=Kt.isTouch,ns=Kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Uf=Kt.isTouch===1,vn(ct,"wheel",Ao),Od=[ct,Nt,yi,vt],Le.matchMedia?(r.matchMedia=function(c){var u=Le.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Le.addEventListener("matchMediaInit",function(){g0(),Hd()}),Le.addEventListener("matchMediaRevert",function(){return m0()}),Le.addEventListener("matchMedia",function(){Ws(0,1),io("matchMedia")}),Le.matchMedia().add("(orientation: portrait)",function(){return uh(),uh})):console.warn("Requires GSAP 3.11.0 or later"),uh(),vn(Nt,"scroll",Ao);var n=vt.hasAttribute("style"),i=vt.style,s=i.borderTopStyle,o=Le.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Nr(vt),ln.m=Math.round(a.top+ln.sc())||0,$n.m=Math.round(a.left+$n.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(vt.setAttribute("style",""),vt.removeAttribute("style")),rc=setInterval(Xm,250),Le.delayedCall(.5,function(){return sc=0}),vn(Nt,"touchcancel",rr),vn(vt,"touchstart",rr),ac(vn,Nt,"pointerdown,touchstart,mousedown",Vm),ac(vn,Nt,"pointerup,touchend,mouseup",Hm),Of=Le.utils.checkPrefix("transform"),Rc.push(Of),Co=Dn(),Yc=Le.delayedCall(.2,Ws).pause(),Ro=[Nt,"visibilitychange",function(){var c=ct.innerWidth,u=ct.innerHeight;Nt.hidden?(Fm=c,Bm=u):(Fm!==c||Bm!==u)&&Va()},Nt,"DOMContentLoaded",Ws,ct,"load",Ws,ct,"resize",Va],oc(vn),rt.forEach(function(c){return c.enable(0,1)}),l=0;l<ut.length;l+=3)lc(_n,ut[l],ut[l+1]),lc(_n,ut[l],ut[l+2])}},r.config=function(n){"limitCallbacks"in n&&(ah=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(rc)||(rc=i)&&setInterval(Xm,i),"ignoreMobileResize"in n&&(Uf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(oc(_n)||oc(vn,n.autoRefreshEvents||"none"),r0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=si(n),o=ut.indexOf(s),a=to(s);~o&&ut.splice(o,a?6:2),i&&(a?pr.unshift(ct,i,vt,i,yi,i):pr.unshift(s,i))},r.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(vi(n)?si(n):n).getBoundingClientRect(),a=o[s?Zs:Js]*i||0;return s?o.right-a>0&&o.left+a<ct.innerWidth:o.bottom-a>0&&o.top+a<ct.innerHeight},r.positionInViewport=function(n,i,s){vi(n)&&(n=si(n));var o=n.getBoundingClientRect(),a=o[s?Zs:Js],l=i==null?a/2:i in $c?$c[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ct.innerWidth:(o.top+l)/ct.innerHeight},r.killAll=function(n){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=no.killAll||[];no={},i.forEach(function(s){return s()})}},r})();ot.version="3.14.2";ot.saveStyles=function(r){return r?Ml(r).forEach(function(e){if(e&&e.style){var t=_i.indexOf(e);t>=0&&_i.splice(t,5),_i.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),Ff())}}):_i};ot.revert=function(r,e){return Hd(!r,e)};ot.create=function(r,e){return new ot(r,e)};ot.refresh=function(r){return r?Va(!0):(Co||ot.register())&&Ws(!0)};ot.update=function(r){return++ut.cache&&zr(r===!0?2:0)};ot.clearScrollMemory=_0;ot.maxScroll=function(r,e){return hr(r,e?$n:ln)};ot.getScrollFunc=function(r,e){return ys(si(r),e?$n:ln)};ot.getById=function(r){return kf[r]};ot.getAll=function(){return rt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ot.isScrolling=function(){return!!zi};ot.snapDirectional=Vd;ot.addEventListener=function(r,e){var t=no[r]||(no[r]=[]);~t.indexOf(e)||t.push(e)};ot.removeEventListener=function(r,e){var t=no[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ot.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Le.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&On(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return On(s)&&(s=s(),vn(ot,"refresh",function(){return s=e.batchMax()})),Ml(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ot.create(c))}),t};var Zm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},fh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Kt.isTouch?" pinch-zoom":""):"none",e===yi&&r(vt,t)},dc={auto:1,scroll:1},X1=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Le.core.getCache(s),a=Dn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==vt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(dc[(l=Ni(s)).overflowY]||dc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!to(s)&&(dc[(l=Ni(s)).overflowY]||dc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},y0=function(e,t,n,i){return Kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&X1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&vn(Nt,Kt.eventTypes[0],Qm,!1,!0)},onDisable:function(){return _n(Nt,Kt.eventTypes[0],Qm,!0)}})},Y1=/(input|label|select|textarea)/i,Jm,Qm=function(e){var t=Y1.test(e.target.tagName);(t||Jm)&&(e._gsapAllow=!0,Jm=t)},q1=function(e){Bs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=si(e.target)||yi,u=Le.core.globals().ScrollSmoother,h=u&&u.get(),f=ns&&(e.content&&si(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=ys(c,ln),g=ys(c,$n),_=1,m=(Kt.isTouch&&ct.visualViewport?ct.visualViewport.scale*ct.visualViewport.width:ct.outerWidth)/ct.innerWidth,p=0,v=On(i)?function(){return i(a)}:function(){return i||2.8},x,y,b=y0(c,e.type,!0,s),E=function(){return y=!1},w=rr,C=rr,S=function(){l=hr(c,ln),C=Ja(ns?1:0,l),n&&(w=Ja(0,hr(c,$n))),x=Qs},M=function(){f._gsap.y=ka(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},R=function(){if(y){requestAnimationFrame(E);var X=ka(a.deltaY/2),Q=C(d.v-X);if(f&&Q!==d.v+d.offset){d.offset=Q-d.v;var D=ka((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",d.cacheID=ut.cache,zr()}return!0}d.offset&&M(),y=!0},P,O,B,V,k=function(){S(),P.isActive()&&P.vars.scrollY>l&&(d()>l?P.progress(1)&&d(l):P.resetTo("scrollY",l))};return f&&Le.set(f,{y:"+=0"}),e.ignoreCheck=function(z){return ns&&z.type==="touchmove"&&R()||_>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){y=!1;var z=_;_=ka((ct.visualViewport&&ct.visualViewport.scale||1)/m),P.pause(),z!==_&&fh(c,_>1.01?!0:n?!1:"x"),O=g(),B=d(),S(),x=Qs},e.onRelease=e.onGestureStart=function(z,X){if(d.offset&&M(),!X)V.restart(!0);else{ut.cache++;var Q=v(),D,te;n&&(D=g(),te=D+Q*.05*-z.velocityX/.227,Q*=Zm(g,D,te,hr(c,$n)),P.vars.scrollX=w(te)),D=d(),te=D+Q*.05*-z.velocityY/.227,Q*=Zm(d,D,te,hr(c,ln)),P.vars.scrollY=C(te),P.invalidate().duration(Q).play(.01),(ns&&P.vars.scrollY>=l||D>=l-1)&&Le.to({},{onUpdate:k,duration:Q})}o&&o(z)},e.onWheel=function(){P._ts&&P.pause(),Dn()-p>1e3&&(x=0,p=Dn())},e.onChange=function(z,X,Q,D,te){if(Qs!==x&&S(),X&&n&&g(w(D[2]===X?O+(z.startX-z.x):g()+X-D[1])),Q){d.offset&&M();var Re=te[2]===Q,Pe=Re?B+z.startY-z.y:d()+Q-te[1],De=C(Pe);Re&&Pe!==De&&(B+=De-Pe),d(De)}(Q||X)&&zr()},e.onEnable=function(){fh(c,n?!1:"x"),ot.addEventListener("refresh",k),vn(ct,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){fh(c,!0),_n(ct,"resize",k),ot.removeEventListener("refresh",k),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new Kt(e),a.iOS=ns,ns&&!d()&&d(1),ns&&Le.ticker.add(rr),V=a._dc,P=Le.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:x0(d,d(),function(){return P.pause()})},onUpdate:zr,onComplete:V.vars.onComplete}),a};ot.sort=function(r){if(On(r))return rt.sort(r);var e=ct.pageYOffset||0;return ot.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ct.innerHeight}),rt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ot.observe=function(r){return new Kt(r)};ot.normalizeScroll=function(r){if(typeof r>"u")return Wn;if(r===!0&&Wn)return Wn.enable();if(r===!1){Wn&&Wn.kill(),Wn=r;return}var e=r instanceof Kt?r:q1(r);return Wn&&Wn.target===e.target&&Wn.kill(),to(e.target)&&(Wn=e),e};ot.core={_getVelocityProp:Nf,_inputObserver:y0,_scrollers:ut,_proxies:pr,bridge:{ss:function(){zi||io("scrollStart"),zi=Dn()},ref:function(){return Ln}}};l0()&&Le.registerPlugin(ot);const jc=[{id:"trading",label:"Trading",rotationSpeed:.28,model:{type:"glb",url:"/models/logo.glb",targetSize:6.2,position:[4.8,-.3,0]}},{id:"payments",label:"Payments",rotationSpeed:.2,model:{type:"primitive",primitive:"stack-cylinders",targetSize:5.4,position:[4.8,-.3,0]}},{id:"financial-rails",label:"Financial rails",rotationSpeed:.16,model:{type:"primitive",primitive:"slab-grid",targetSize:5.8,position:[4.8,-.3,0]}},{id:"messaging",label:"Messaging",rotationSpeed:.22,model:{type:"glb",url:"/models/logo_separate.glb",targetSize:6.1,position:[4.8,-.3,0]}},{id:"privacy",label:"Privacy",rotationSpeed:.14,model:{type:"primitive",primitive:"diamond-cluster",targetSize:5.3,position:[4.8,-.3,0]}},{id:"social-coordination",label:"Social Coordination",rotationSpeed:.18,model:{type:"primitive",primitive:"ring-array",targetSize:5.6,position:[4.8,-.3,0]}}],$1=jc[0].id;function j1({gsap:r,ScrollTrigger:e}){if(!r||!e)return;const t=document.querySelector(".cc-team");if(!t)return;const n=t.querySelectorAll(".row.row-justify-between > .col"),i=t.querySelectorAll('[data-component="team"] > *');n.length&&r.from(n,{autoAlpha:0,y:28,duration:.8,ease:"power2.out",stagger:.12,scrollTrigger:{trigger:t,start:"top 78%",once:!0}}),i.length&&i.forEach((s,o)=>{r.from(s,{autoAlpha:0,y:"+=40",duration:.75,ease:"power2.out",delay:o*.08,scrollTrigger:{trigger:s,start:"top 85%",once:!0}})})}const K1="#1a1a1a",Pr={ramp:".'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:6,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.85,color:K1,opacity:.5};function Kc(r,e,t){return Math.min(t,Math.max(e,r))}function Z1(r,e,t){return .2126*r+.7152*e+.0722*t}function J1(r,e){return Kc((r-.5)*e+.5,0,1)}function Q1(r,e){return Kc(Math.pow(r,e),0,1)}function eA(){const r=document.querySelector('canvas[data-component="roadmap-ascii"]');if(!r)return null;const e=r.closest(".section.cc-roadmap"),t=r.getContext("2d");if(!t)return null;const n=document.createElement("canvas"),i=new _a({canvas:n,antialias:!1,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(1);const s=new ha,o=new tu,a={uTime:{value:0},uScale:{value:2.55},uIntensity:{value:.88},uBase:{value:.05},uAmp:{value:.35},uResolution:{value:new ke(1,1)},uTint:{value:new U(1,1,1)}},l=new Jn({uniforms:a,depthWrite:!1,depthTest:!1,vertexShader:`
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
    `}),c=new At(new Yr(2,2),l);c.frustumCulled=!1,s.add(c);let u=null,h=null,f=1,d=1,g=1,_=1,m=1,p=1;const v=()=>{const E=r.getBoundingClientRect(),w=e?.getBoundingClientRect();f=Math.max(1,Math.floor(E.width||w?.width||1)),d=Math.max(1,Math.floor(E.height||w?.height||1));const C=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.floor(f*C)),r.height=Math.max(1,Math.floor(d*C)),r.style.width=`${f}px`,r.style.height=`${d}px`,t.setTransform(C,0,0,C,0,0),t.textBaseline="top",g=Kc(Math.floor(f/Pr.cellSize),32,220),m=f/g,p=m/Pr.aspectComp,_=Kc(Math.floor(d/p),18,140),u&&u.dispose(),u=new Un(g,_,{depthBuffer:!1,stencilBuffer:!1}),h=new Uint8Array(g*_*4),a.uResolution.value.set(f,d),i.setSize(g,_,!1)};v();const x=new ResizeObserver(v);x.observe(r),window.addEventListener("resize",v);const y=new ma,b=()=>{if(!document.body.contains(r)){x.disconnect(),window.removeEventListener("resize",v),u?.dispose(),l.dispose(),c.geometry.dispose(),i.dispose();return}a.uTime.value=y.getElapsedTime(),i.setRenderTarget(u),i.render(s,o),i.setRenderTarget(null),i.readRenderTargetPixels(u,0,0,g,_,h),t.clearRect(0,0,f,d),t.fillStyle=Pr.color,t.globalAlpha=Pr.opacity;const E=Math.max(8,Math.floor(p*Pr.fontScale));t.font=`${E}px monospace`;const w=Math.max(1,t.measureText("M").width),C=m/w;t.save(),t.scale(C,1);for(let S=0;S<_;S++){let M="";for(let P=0;P<g;P++){const B=((_-1-S)*g+P)*4,V=h[B]/255,k=h[B+1]/255,z=h[B+2]/255;let X=Z1(V,k,z);X=J1(X,Pr.contrast),X=Q1(X,Pr.gamma);const Q=Math.floor(X*(Pr.ramp.length-1));M+=Pr.ramp[Q]}const R=Math.max(p,E*1.04);t.fillText(M,0,S*R)}t.restore(),t.globalAlpha=1,requestAnimationFrame(b)};return requestAnimationFrame(b),{resize:v}}const tA="#fafafa",Lr={ramp:".'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:6,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.85,color:tA,opacity:.5};function la(r,e,t){return Math.min(t,Math.max(e,r))}function nA(r,e,t){return .2126*r+.7152*e+.0722*t}function iA(r,e){return la((r-.5)*e+.5,0,1)}function rA(r,e){return la(Math.pow(r,e),0,1)}function sA(){const r=document.querySelector('canvas[data-component="grid-canvas"]');if(!r)return null;const e=r.closest(".section.cc-on-grid"),t=r.getContext("2d");if(!t)return null;const n=document.createElement("canvas"),i=new _a({canvas:n,antialias:!1,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(1);const s=new ha,o=new tu,a={uTime:{value:0},uScale:{value:2.55},uIntensity:{value:.88},uBase:{value:.05},uAmp:{value:.35},uResolution:{value:new ke(1,1)},uTint:{value:new U(1,1,1)}},l=new Jn({uniforms:a,depthWrite:!1,depthTest:!1,vertexShader:`
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
    `}),c=new At(new Yr(2,2),l);c.frustumCulled=!1,s.add(c);let u=null,h=null,f=1,d=1,g=1,_=1,m=1,p=1;const v=()=>{const E=r.getBoundingClientRect(),w=e?.getBoundingClientRect();f=Math.max(1,Math.floor(E.width||w?.width||1)),d=Math.max(1,Math.floor(E.height||w?.height||1));const C=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.floor(f*C)),r.height=Math.max(1,Math.floor(d*C)),r.style.width=`${f}px`,r.style.height=`${d}px`,t.setTransform(C,0,0,C,0,0),t.textBaseline="top",g=la(Math.floor(f/Lr.cellSize),32,220),m=f/g,p=m/Lr.aspectComp,_=la(Math.floor(d/p),18,140),u&&u.dispose(),u=new Un(g,_,{depthBuffer:!1,stencilBuffer:!1}),h=new Uint8Array(g*_*4),a.uResolution.value.set(f,d),i.setSize(g,_,!1)};v();const x=new ResizeObserver(v);x.observe(r),window.addEventListener("resize",v);const y=new ma,b=()=>{if(!document.body.contains(r)){x.disconnect(),window.removeEventListener("resize",v),u?.dispose(),l.dispose(),c.geometry.dispose(),i.dispose();return}a.uTime.value=y.getElapsedTime(),i.setRenderTarget(u),i.render(s,o),i.setRenderTarget(null),i.readRenderTargetPixels(u,0,0,g,_,h),t.clearRect(0,0,f,d),t.fillStyle=Lr.color,t.globalAlpha=Lr.opacity;const E=Math.max(8,Math.floor(p*Lr.fontScale));t.font=`${E}px monospace`;const w=Math.max(1,t.measureText("M").width),C=m/w;t.save(),t.scale(C,1);for(let S=0;S<_;S++){let M="";for(let P=0;P<g;P++){const B=((_-1-S)*g+P)*4,V=h[B]/255,k=h[B+1]/255,z=h[B+2]/255;let X=nA(V,k,z);X=iA(X,Lr.contrast),X=rA(X,Lr.gamma);const Q=Math.floor(X*(Lr.ramp.length-1));M+=Lr.ramp[Q]}const R=Math.max(p,E*1.04);t.fillText(M,0,S*R)}t.restore(),t.globalAlpha=1,requestAnimationFrame(b)};return requestAnimationFrame(b),{resize:v}}function oA(){const r=document.querySelector('[data-component="grid-stack"]');if(!r)return null;const e=r.closest(".section.cc-on-grid")||r,t=Array.from(r.querySelectorAll("img, .grid_icon-preview"));if(!t.length)return null;const n=(t.length-1)*.5,i=34,s=24,o={tx:0,ty:0,x:0,y:0,active:!1};t.forEach(u=>{u.style.willChange="transform"});const a=()=>{o.x+=(o.tx-o.x)*.14,o.y+=(o.ty-o.y)*.14,t.forEach((u,h)=>{const d=h-n,g=o.x*d*1.05,_=o.y*d*.78;u.style.transform=`translate3d(${g}px, ${_}px, 0)`}),requestAnimationFrame(a)},l=u=>{if(u.pointerType==="touch")return;const h=e.getBoundingClientRect(),f=la((u.clientX-h.left)/Math.max(h.width,1),0,1),d=la((u.clientY-h.top)/Math.max(h.height,1),0,1);o.tx=-(f-.5)*2*i,o.ty=-(d-.5)*2*s,o.active=!0},c=()=>{o.active=!1,o.tx=0,o.ty=0};return e.addEventListener("pointermove",l,{passive:!0}),e.addEventListener("pointerleave",c),window.addEventListener("blur",c),requestAnimationFrame(a),{destroy(){e.removeEventListener("pointermove",l),e.removeEventListener("pointerleave",c),window.removeEventListener("blur",c)}}}const S0="#ffffff",nr={ramp:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:7,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.86,color:S0,opacity:.92};function Zc(r,e,t){return Math.min(t,Math.max(e,r))}function aA(r,e,t){return .2126*r+.7152*e+.0722*t}function lA(r,e){return Zc((r-.5)*e+.5,0,1)}function cA(r,e){return Zc(Math.pow(r,e),0,1)}function eg(r,e=2.8){r.updateMatrixWorld(!0);const n=new Vt().setFromObject(r).getSize(new U),i=Math.max(n.x,n.y,n.z);i>0&&r.scale.setScalar(e/i),r.updateMatrixWorld(!0);const o=new Vt().setFromObject(r).getCenter(new U);r.position.sub(o)}function uA(r){const e=r<=767;return{targetSize:e?2.2:2.8,cameraZ:e?6.8:6,cameraY:e?.08:.14,cellSize:e?nr.cellSize+1:nr.cellSize}}function hA(){const r=document.querySelector('.section.cc-footer canvas[data-component="footer-canvas"]')||document.querySelector('canvas[data-component="footer-canvas"]');if(!r)return null;const e=r.closest(".section.cc-footer"),t=r.getContext("2d",{alpha:!0});if(!t)return null;const n=document.createElement("canvas"),i=new _a({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"});i.setPixelRatio(1),i.setClearColor(0,0);const s=new ha,o=new yn(38,1,.1,100),a=new ru(16777215,.44),l=new Zi(16777215,1.12);l.position.set(3.6,2.8,4.2);const c=new Zi(16777215,.6);c.position.set(-2.5,1.8,-3.8),s.add(a,l,c);const u={uTime:{value:0},uScale:{value:2.5},uIntensity:{value:.9},uBase:{value:.08},uAmp:{value:.115},uResolution:{value:new ke(1,1)},uTint:{value:new U(1,1,1)}},h=new Jn({uniforms:u,depthWrite:!1,depthTest:!1,transparent:!0,vertexShader:`
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
    `}),f=new At(new Yr(2,2),h);f.frustumCulled=!1,f.renderOrder=-1e3,s.add(f);const d=new Sn;s.add(d),new uu().load((()=>{const R=new URL(import.meta.url),P=R.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//);return P?`${P[1]}/models/logo_split.glb`:`${R.origin}/models/logo_split.glb`})(),R=>{const P=R.scene.clone(!0);P.traverse(O=>{if(!O.isMesh)return;O.castShadow=!1,O.receiveShadow=!1;const B=new Ms({color:new je(S0),metalness:.08,roughness:.62});O.material=B}),eg(P),d.clear(),d.add(P)},void 0,R=>console.error("Failed to load footer GLB:",R));let _=null,m=null,p=1,v=1,x=1,y=1,b=1,E=1;const w=()=>{const R=r.getBoundingClientRect(),P=e?.getBoundingClientRect();p=Math.max(1,Math.floor(R.width||P?.width||1)),v=Math.max(1,Math.floor(R.height||P?.height||1));const O=uA(p),B=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.floor(p*B)),r.height=Math.max(1,Math.floor(v*B)),r.style.width=`${p}px`,r.style.height=`${v}px`,t.setTransform(B,0,0,B,0,0),t.textBaseline="top",o.aspect=p/v,o.position.set(0,O.cameraY,O.cameraZ),o.lookAt(0,0,0),o.updateProjectionMatrix(),x=Zc(Math.floor(p/O.cellSize),24,220),b=p/x,E=b/nr.aspectComp,y=Zc(Math.floor(v/E),18,140),_&&_.dispose(),_=new Un(x,y,{depthBuffer:!0,stencilBuffer:!1}),m=new Uint8Array(x*y*4),i.setSize(x,y,!1),u.uResolution.value.set(p,v),d.children[0]&&eg(d.children[0],O.targetSize)};w();const C=new ResizeObserver(w);C.observe(r),window.addEventListener("resize",w);const S=new ma,M=()=>{if(!document.body.contains(r)){C.disconnect(),window.removeEventListener("resize",w),_?.dispose(),h.dispose(),f.geometry.dispose(),i.dispose();return}const R=S.getElapsedTime();u.uTime.value=R,d.children[0]&&(d.rotation.y=R*.16,d.rotation.x=Math.sin(R*.35)*.08),i.setRenderTarget(_),i.render(s,o),i.setRenderTarget(null),i.readRenderTargetPixels(_,0,0,x,y,m),t.clearRect(0,0,p,v),t.fillStyle=nr.color,t.globalAlpha=nr.opacity;const P=Math.max(8,Math.floor(E*nr.fontScale));t.font=`${P}px monospace`;const O=Math.max(1,t.measureText("M").width),B=b/O;t.save(),t.scale(B,1);for(let V=0;V<y;V++){let k="";for(let X=0;X<x;X++){const D=((y-1-V)*x+X)*4,te=m[D]/255,Re=m[D+1]/255,Pe=m[D+2]/255;let De=aA(te,Re,Pe);De=lA(De,nr.contrast),De=cA(De,nr.gamma);const He=Math.floor(De*(nr.ramp.length-1));k+=nr.ramp[He]}const z=Math.max(E,P*1.04);t.fillText(k,0,V*z)}t.restore(),t.globalAlpha=1,requestAnimationFrame(M)};return requestAnimationFrame(M),{resize:w}}function fA(r){return r.replace(/\[/g,"").replace(/\]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function dA(){const r=document.querySelector('[data-component="features"]');if(!r)return null;const e=Array.from(r.querySelectorAll(".system-tabs_btn"));if(!e.length)return null;console.log(`[Features Tabs] Found ${e.length} buttons`);const t=i=>{e.forEach(s=>{const o=s===i;s.classList.toggle("is-active",o),s.setAttribute("aria-pressed",String(o)),s.dataset.active=o?"true":"false";const a=s.closest(".system-tabs_list-item");a&&(a.classList.toggle("is-active",o),a.dataset.active=o?"true":"false")})};e.forEach(i=>{i.setAttribute("aria-pressed","false"),i.dataset.active="false",i.addEventListener("click",()=>{t(i),console.log(`[Features Tabs] Activated: ${i.textContent}`)})});const n=e.find(i=>fA(i.textContent||"")==="trading")||e[0];return n&&t(n),console.log("[Features Tabs] Setup complete (GLB loading removed)"),{buttons:e,setActiveButton:t,destroy(){}}}const tg={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.008}};function pA(r){const e=(r.dataset.splitType||r.dataset.split||"").trim().toLowerCase();return e==="lines"||e==="words"||e==="chars"||e==="letters"?e==="letters"?"chars":e:r.tagName.toLowerCase()==="p"?"words":"lines"}function dh(r,e,t){const n=r.dataset[e],i=Number.parseFloat(n);return Number.isFinite(i)?i:t}function mA(r,e,t){const n=t.create(r,{type:"lines, words, chars",mask:"lines",linesClass:"line",wordsClass:"word",charsClass:"letter"});return e==="words"?n.words||[]:e==="chars"?n.chars||[]:n.lines||[]}function gA(r){r.forEach(e=>{e.style.position="relative",e.style.display="inline-block",e.style.backgroundImage="linear-gradient(var(--_color---neutral--gray-matter), var(--_color---neutral--gray-matter))",e.style.backgroundRepeat="no-repeat",e.style.backgroundPosition="0 100%",e.style.backgroundSize="0% 100%",e.style.boxDecorationBreak="clone",e.style.webkitBoxDecorationBreak="clone",e.style.padding="0.03em 0.18em 0.07em",e.style.margin="0 0 0.08em"})}function _A(r={}){const e=r.gsap||window.gsap,t=r.ScrollTrigger||window.ScrollTrigger,n=window.SplitText,i=window.CustomEase;if(!e||!t||!n)return!1;e.registerPlugin(t,n),i?.create&&(i.create("osmo-ease","0.625, 0.05, 0, 1"),e.registerPlugin(i));const s=document.querySelectorAll('[data-split]:not([data-split-ignore="true"])');return s.length&&(s.forEach(o=>{if(o.dataset.splitInitialized==="true")return;const a=pA(o),l=tg[a]||tg.lines,c=dh(o,"splitDuration",l.duration),u=dh(o,"splitStagger",l.stagger),h=o.dataset.splitStart||"top 85%",f=o.dataset.splitOnce!=="false",d=mA(o,a,n);if(!d.length){o.dataset.splitInitialized="true";return}const g=a==="lines"&&o.dataset.splitHighlight==="true";g&&gA(d),e.fromTo(d,{yPercent:110},{yPercent:0,duration:c,stagger:u,ease:"osmo-ease",onComplete:()=>{if(!g)return;const _=dh(o,"splitHighlightDelay",.02);e.to(d,{backgroundSize:"100% 100%",duration:.34,stagger:.08,delay:_,ease:"power2.out"})},scrollTrigger:{trigger:o,start:h,once:f,toggleActions:f?"play none none none":"play reverse play reverse"}}),o.dataset.splitInitialized="true"}),t.refresh()),!0}const vA=768;function xA(){return window.innerWidth<=vA}function yA(){if(xA())return null;const r=document.createElement("div");r.id="cursor",r.style.cssText=`
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
  `,document.body.appendChild(r),document.body.appendChild(e);const t={x:window.innerWidth*.5,y:window.innerHeight*.5,active:!1},n={x:0,y:-14},i={x:14,y:-24};let s=t.x,o=t.y,a=t.x+i.x,l=t.y+i.y;const c=.12,u=x=>{t.x=x.clientX,t.y=x.clientY,t.active=!0,r.style.opacity="1",e.style.opacity="1",e.textContent=`${Math.round(t.x)}, ${Math.round(t.y)}`};window.addEventListener("pointermove",u,{passive:!0}),window.addEventListener("pointerdown",u,{passive:!0}),window.addEventListener("pointerleave",()=>{t.active=!1,r.style.opacity="0",e.style.opacity="0"});const h=()=>{if(t.active){const x=t.x+n.x,y=t.y+n.y;s+=(x-s)*c,o+=(y-o)*c,r.style.left=`${s}px`,r.style.top=`${o}px`;const b=t.x+i.x,E=t.y+i.y;a+=(b-a)*c,l+=(E-l)*c,e.style.left=`${a}px`,e.style.top=`${l}px`}requestAnimationFrame(h)};requestAnimationFrame(h);const f=x=>{if(!x)return!1;const y=x.tagName.toLowerCase(),b=x.getAttribute("role"),E=["button","link","menuitem","tab","option"];return y==="button"||y==="a"||y==="input"||y==="textarea"||y==="select"||x.onclick||E.includes(b)||x.style.cursor==="pointer"||window.getComputedStyle(x).cursor==="pointer"},d=()=>{r.style.transform="translate(-50%, -50%) scale(2)"},g=()=>{r.style.transform="translate(-50%, -50%) scale(1)"};document.addEventListener("mouseover",x=>{f(x.target)&&d()}),document.addEventListener("mouseout",x=>{f(x.target)&&g()});const _=[".section.cc-stats"],m=x=>x?_.some(y=>{const b=document.querySelectorAll(y);return Array.from(b).some(E=>E.contains(x))}):!1,p=()=>{r.style.background="#ffffff",e.style.color="#ffffff",e.style.textShadow="0 1px 2px rgba(0,0,0,0.5)"},v=()=>{r.style.background="#5491ff",e.style.color="#1a1a1a",e.style.textShadow="0 1px 0 #ffffff"};return document.addEventListener("mouseover",x=>{m(x.target)&&p()}),document.addEventListener("mouseout",x=>{m(x.target)&&v()}),{cursor:r,cursorLabel:e}}const SA=[".section.cc-stats"];function MA(r){if(!r)return!1;const e=r.getBoundingClientRect(),t=e.bottom;return SA.some(n=>{const i=document.querySelectorAll(n);return Array.from(i).some(s=>{const o=s.getBoundingClientRect();return t>o.top&&e.top<o.bottom})})}function bA(){const r=document.querySelector(".nav");if(!r)return;const e=20,t=()=>{const n=window.scrollY>e;r.classList.toggle("scrolled",n);const i=MA(r);r.classList.toggle("is-on-blue",i)};return t(),window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t,{passive:!0}),{nav:r,threshold:e}}const TA=768;function EA(){return window.innerWidth<=TA}function wA(r){if(/^https?:\/\//i.test(r))return r;const e=new URL(import.meta.url),t=e.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//),n=t?t[1]:e.origin,i=r.startsWith("/")?r:`/${r}`;return`${n}${i}`}function Jc(r,e,t){return Math.min(t,Math.max(e,r))}function AA(r,e,t){return .2126*r+.7152*e+.0722*t}function CA(r,e){return Jc((r-.5)*e+.5,0,1)}function RA(r,e){return Jc(Math.pow(r,e),0,1)}const er={ramp:" .'`^\",:;Il!i<>~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:8,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.85,color:"#ffffff",opacity:.75,verticalStart:.7};function PA(){const r=document.querySelector('[data-component="stats-canvas"]');if(!r)return console.log("[Stats ASCII] Canvas not found"),null;const e=document.querySelector(".cc-stats");if(!e)return console.log("[Stats ASCII] Stats section not found"),null;const t=r.getContext("2d",{alpha:!0});if(!t)return null;let n=!1,i=null,s=null,o=null,a=1,l=1,c=1,u=1,h=1,f=1;const d=document.createElement("canvas"),g=new _a({canvas:d,antialias:!1,alpha:!0,powerPreference:"high-performance"});g.setPixelRatio(1),g.setClearColor(0,0);const _=new ha,m=new yn(45,1,.1,100),p=new ru(16777215,.5),v=new Zi(16777215,1);v.position.set(5,5,5);const x=new Zi(16777215,.5);x.position.set(-2,3,-4),_.add(p,v,x);const y=()=>{const M=r.getBoundingClientRect(),R=e?.getBoundingClientRect();h=Math.max(1,Math.floor(M.width||R?.width||1)),f=Math.max(1,Math.floor(M.height||R?.height||1));const P=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.floor(h*P)),r.height=Math.max(1,Math.floor(f*P)),r.style.width=`${h}px`,r.style.height=`${f}px`,t.setTransform(P,0,0,P,0,0),t.textBaseline="top",a=Jc(Math.floor(h/er.cellSize),32,180),c=h/a,u=c/er.aspectComp,l=Jc(Math.floor(f/u),20,120),s&&s.dispose(),s=new Un(a,l,{depthBuffer:!0,stencilBuffer:!1}),o=new Uint8Array(a*l*4),g.setSize(a,l,!1),m.aspect=h/f,m.updateProjectionMatrix(),m.position.set(0,4,8),m.lookAt(0,-2,0)},b=()=>{if(n)return;n=!0,console.log("[Stats ASCII] Loading earth model..."),y(),new uu().load(wA("/models/earth.glb"),R=>{i=R.scene;const P=new Vt().setFromObject(i),O=P.getCenter(new U),B=P.getSize(new U),V=Math.max(B.x,B.y,B.z),z=(EA()?2.2:3)/V;i.position.sub(O),i.scale.setScalar(z),i.position.y=-2.8,i.traverse(X=>{X.isMesh&&(X.material=new Ms({color:16777215,metalness:.1,roughness:.3}))}),_.add(i),console.log("[Stats ASCII] Model loaded, starting animation"),w()},void 0,R=>{console.error("[Stats ASCII] Failed to load model:",R)})},E=new ma,w=()=>{if(!document.body.contains(r)){C.disconnect(),window.removeEventListener("resize",y),s?.dispose(),g.dispose();return}const M=E.getElapsedTime();i&&(i.rotation.y=M*.15),g.setRenderTarget(s),g.render(_,m),g.setRenderTarget(null),g.readRenderTargetPixels(s,0,0,a,l,o),t.clearRect(0,0,h,f),t.fillStyle=er.color,t.globalAlpha=er.opacity;const R=Math.max(8,Math.floor(u*er.fontScale));t.font=`${R}px monospace`;const P=Math.max(1,t.measureText("M").width),O=c/P;t.save(),t.scale(O,1);const B=Math.floor(l*(1-er.verticalStart)),V=l-B;for(let k=0;k<B;k++){let z="";const X=V+(B-1-k);for(let D=0;D<a;D++){const te=(X*a+D)*4,Re=o[te]/255,Pe=o[te+1]/255,De=o[te+2]/255;let He=AA(Re,Pe,De);He=CA(He,er.contrast),He=RA(He,er.gamma);const j=Math.floor(He*(er.ramp.length-1));z+=er.ramp[j]}const Q=Math.max(u,R*1.04);t.fillText(z,0,k*Q)}t.restore(),t.globalAlpha=1,requestAnimationFrame(w)},C=new IntersectionObserver(M=>{M.forEach(R=>{R.isIntersecting&&!n&&(console.log("[Stats ASCII] Section in view - loading model"),b())})},{threshold:.1,rootMargin:"0px 0px -10% 0px"});return C.observe(e),console.log("[Stats ASCII] Intersection Observer attached to stats section"),new ResizeObserver(y).observe(r),window.addEventListener("resize",y),{observer:C,resize:y}}yl.registerPlugin(ot);function LA(){const r=document.querySelector(".roadmap_grid");if(!r)return console.log("[Roadmap] Grid not found"),null;const e=r.querySelectorAll(".roadmap_item");if(!e.length)return console.log("[Roadmap] No items found"),null;console.log(`[Roadmap] Found ${e.length} items, setting up animations`),yl.set(e,{filter:"blur(8px)",scale:1.125,opacity:.8});const t=[];return e.forEach((n,i)=>{const s=ot.create({trigger:n,start:"top 85%",end:"top 50%",scrub:.5,onUpdate:o=>{const a=o.progress;yl.to(n,{filter:`blur(${8*(1-a)}px)`,scale:1.125-.125*a,opacity:.8+.2*a,duration:.1,ease:"none",overwrite:!0})}});t.push(s)}),console.log("[Roadmap] Animations setup complete"),{items:e,triggers:t,destroy(){t.forEach(n=>n.kill())}}}const M0=location.hostname.includes(".webflow.io")||location.hostname.endsWith("webflow.io");M0||z0(()=>Promise.resolve({}),__vite__mapDeps([0]));const xt=window.gsap||yl,Vi=window.ScrollTrigger||ot;if(window.__GENLABS_MAIN_BOOTED__)throw new Error("GEN Labs main.js initialized more than once");window.__GENLABS_MAIN_BOOTED__=!0;Vi&&xt.registerPlugin(Vi);let pc=null;function DA(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;pc=new Uw({duration:1,smoothWheel:!0,smoothTouch:!1,wheelMultiplier:1,touchMultiplier:1}),pc.on("scroll",()=>{Vi?.update()});const e=t=>{pc.raf(t),requestAnimationFrame(e)};requestAnimationFrame(e),window.__GENLABS_LENIS__=pc}DA();const b0=new URL(import.meta.url),ng=b0.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//),IA=ng?ng[1]:b0.origin;function Qc(r){const e=r.replace(/^\//,"");return`${IA}/${e}`}function No(...r){return document.querySelector(r.join(", "))}const jn={panelHero:No(".cc-hero",".panel-hero"),panelUnder:No(".cc-about",".panel-under"),panelConverge:No(".cc-convergence",".cc-benefits",".panel-converge"),panelStats:No(".cc-stats")};jn.underCopy=No('[data-text="about-intro"]','[data-text="about-into"]',".under-copy",".cc-about .h3.u-text-center:not(.u-text-primary)");jn.underHighlight=No('[data-text="about-outro"]',".under-highlight",".cc-about .u-text-primary");jn.underCopy&&(jn.underCopy.dataset.splitIgnore="true");jn.underHighlight&&(jn.underHighlight.dataset.splitIgnore="true");const NA=940,Qt=()=>window.innerWidth<=NA,OA=()=>document.querySelector("#grid-stage .grid-stage-sticky")||document.querySelector(".grid-stage-sticky"),T0=()=>{const r=OA(),e=document.querySelector(".cc-stats");return!!(r&&e&&r.contains(e))},UA=T0();Qt()||(jn.panelConverge&&(jn.panelConverge.style.opacity="0"),jn.panelStats&&UA&&(jn.panelStats.style.opacity="0",jn.panelStats.style.visibility="visible"));const FA=document.fonts?.ready||Promise.resolve();FA.then(()=>{let r=0;const e=40,t=()=>{_A({gsap:xt,ScrollTrigger:Vi})||(r+=1,r<=e&&window.setTimeout(t,120))};t()});const Gn={heroTitle:'[data-text="hero-title"], .hero-title',panelHero:".cc-hero, .panel-hero",panelUnder:".cc-about, .panel-under",panelConverge:".cc-convergence, .cc-benefits, .panel-converge",panelStats:".cc-stats",underCopy:'[data-text="about-intro"], [data-text="about-into"], .under-copy, .cc-about .h3.u-text-center:not(.u-text-primary)',underHighlight:'[data-text="about-outro"], .under-highlight, .cc-about .u-text-primary'},E0=()=>!!document.querySelector(".cc-convergence .convergence-video, .cc-benefits .convergence-video, .convergence-video"),ig=()=>{const r=document.querySelector("#grid-stage"),e=document.querySelector("#grid-stage-scroll"),t=document.querySelector("#scroll-spacer");return{stage:r,runway:e,trigger:r||e||t||document.body}};M0&&("scrollRestoration"in history&&(history.scrollRestoration="manual"),window.scrollTo(0,0),window.addEventListener("load",()=>{window.scrollTo(0,0),requestAnimationFrame(()=>window.scrollTo(0,0))},{once:!0}));let Gd=!0;console.log("ASCII enabled:",Gd);let ph=null,gn=null,Ns=null,Os=null;const mh=new Map,Xs=new Sn;let Hf=null,Gf=null,w0=.16,gh=0;const xn={ramp:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",invert:!1,cellSize:5,aspectComp:.55,fontFamily:"monospace",fontScale:1,contrast:1.15,gamma:.9,bg:"#ffffff",fg:"#125fee"},Ss=new Nd({title:"ASCII"});Ss.hide();let _h=!1;window.addEventListener("keydown",r=>{if(r.repeat||r.key.toLowerCase()!=="g"||r.ctrlKey||r.metaKey||r.altKey)return;const e=document.activeElement?.tagName;e==="INPUT"||e==="TEXTAREA"||document.activeElement?.isContentEditable||(_h=!_h,_h?Ss.show():Ss.hide())});const ca={pixelation:xn.cellSize,matrix:!1,characters:xn.ramp,fontSize:Math.round(xn.fontScale*58),invert:xn.invert,asciiColor:xn.fg,noiseTint:"#5491FF",logoColor:"#ffffff"};Ss.addColor(ca,"asciiColor").name("ASCII COLOR").onChange(r=>{xn.fg=r});Ss.add(ca,"pixelation",4,24,1).name("PIXELATION").onChange(r=>{xn.cellSize=r,Oi()});Ss.add(ca,"characters").name("CHARACTERS").onFinishChange(r=>{ca.characters=r,xn.ramp=r});const BA={ascii:!0};Ss.add(BA,"ascii").name("ASCII MODE").onChange(r=>{Gd=r,hs.style.display=r?"block":"none",qr.style.display=r?"none":"block"});const Ut={width:window.innerWidth,height:window.innerHeight},hs=document.querySelector("#ascii");if(!hs)throw new Error("Missing #ascii canvas in DOM");const ri=hs.getContext("2d",{alpha:!1});function A0(){const r=Math.min(window.devicePixelRatio||1,2);hs.width=Math.floor(Ut.width*r),hs.height=Math.floor(Ut.height*r),hs.style.width=`${Ut.width}px`,hs.style.height=`${Ut.height}px`,ri.setTransform(r,0,0,r,0,0),ri.fillStyle=xn.bg,ri.fillRect(0,0,Ut.width,Ut.height),ri.textBaseline="top"}A0();const qr=document.createElement("canvas"),Yi=new _a({canvas:qr,antialias:!0,alpha:!1,powerPreference:"high-performance"});qr.className="webgl";document.body.appendChild(qr);qr.style.position="fixed";qr.style.inset="0";qr.style.width="100%";qr.style.height="100%";qr.style.display="none";Yi.setPixelRatio(Math.min(window.devicePixelRatio,2));Yi.setSize(Ut.width,Ut.height);Yi.shadowMap.enabled=!1;Yi.shadowMap.type=lg;const{cursor:cC}=yA()||{},rg="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",vh=new WeakMap;function kA(r){const e=r.dataset.scrambleText||r.textContent.trim();r.dataset.scrambleText=e;const t=vh.get(r);t?.tween&&t.tween.kill();const n={progress:0},i=.32,s=xt.to(n,{progress:1,duration:.55,ease:"power2.out",onUpdate:()=>{const o=Math.max(0,(n.progress-i)/(1-i)),a=Math.floor(e.length*o);let l="";for(let c=0;c<e.length;c++){const u=e[c];if(u===" "){l+=" ";continue}if(c<a){l+=u;continue}const h=Math.floor(Math.random()*rg.length);l+=rg[h]}r.textContent=l},onComplete:()=>{r.textContent=e,vh.set(r,{tween:null})}});vh.set(r,{tween:s})}function zA(){document.querySelectorAll(".nav-links a, .nav-link.w-nav-link").forEach(e=>{e.dataset.scrambleText=e.textContent.trim();const t=()=>{kA(e)};e.addEventListener("pointerenter",t),e.addEventListener("focus",t)})}zA();bA();PA();LA();function VA(){const r=document.querySelector(Gn.panelConverge),e=r?.querySelector(".converge-label-left"),t=r?.querySelector(".converge-label-right"),n=r?.querySelector(".converge-hover-card-left"),i=r?.querySelector(".converge-hover-card-right");if(!r||!e||!t||!n||!i)return;const s=(a,l,c)=>Math.min(c,Math.max(l,a));[{label:e,card:n,side:"left"},{label:t,card:i,side:"right"}].forEach(({label:a,card:l,side:c})=>{const u={active:!1,pointerX:window.innerWidth*.5,pointerY:window.innerHeight*.5},h=xt.quickTo(l,"x",{duration:.3,ease:"power3.out"}),f=xt.quickTo(l,"y",{duration:.3,ease:"power3.out"}),d=()=>{const v=a.getBoundingClientRect();if(v.width<8||v.height<8)return!1;const x=Number(xt.getProperty(r,"opacity"))||0,y=Number(xt.getProperty(a,"opacity"))||0;return x>.12&&y>.12},g=(v,x)=>{const y=a.getBoundingClientRect(),b=Math.max(24,y.width*.3),E=Math.max(14,y.height*.8);return v>=y.left-b&&v<=y.right+b&&x>=y.top-E&&x<=y.bottom+E},_=(v=!1)=>{const x=a.getBoundingClientRect(),y=l.offsetWidth,b=l.offsetHeight,E=x.left+x.width*.5-y*.5,w=x.bottom+18,C=x.width>0?(u.pointerX-x.left)/x.width-.5:0,S=x.height>0?(u.pointerY-x.top)/x.height-.5:0,M=C*54,R=S*20,P=18,O=14,B=c==="left"?P:window.innerWidth*.5+O,V=c==="left"?window.innerWidth*.5-y-O:window.innerWidth-y-P,k=s(E+M,B,Math.max(B,V)),z=s(w+R,x.bottom+8,window.innerHeight-b-P);if(v){xt.set(l,{x:k,y:z});return}h(k),f(z)},m=()=>{u.active||(u.active=!0,xt.to(l,{autoAlpha:1,scale:1,duration:.2,ease:"power2.out",overwrite:!0}),_(!0))},p=()=>{u.active&&(u.active=!1,xt.to(l,{autoAlpha:0,scale:.96,duration:.16,ease:"power2.out",overwrite:!0}))};window.addEventListener("pointermove",v=>{if(v.pointerType!=="touch"){if(u.pointerX=v.clientX,u.pointerY=v.clientY,!d()||!g(u.pointerX,u.pointerY)){p();return}m(),_()}},{passive:!0}),window.addEventListener("scroll",()=>{if(u.active){if(!d()||!g(u.pointerX,u.pointerY)){p();return}_(!0)}},{passive:!0}),window.addEventListener("pointerleave",p),window.addEventListener("resize",()=>{u.active&&_(!0)})}),xt.set(".converge-hover-card",{autoAlpha:0,scale:.96})}VA();function C0(r){return new Promise(e=>{let t=0;const n=80,i=()=>{try{const s=window.Webflow?.require?.("lottie")?.lottie;if(s){const o=document.querySelector(r);if(o){const l=s.getRegisteredAnimations()?.find(c=>c.wrapper?c.wrapper===o||o.contains(c.wrapper)||c.wrapper.contains(o):!1);if(l&&l.isLoaded!==!1&&(l.animationData||l.totalFrames>0)){l.pause(),l.autoplay=!1,l.loop=!1;const c=l.animationData?.ip??0;l.goToAndStop(c,!0),console.log(`[getWebflowLottie] found "${r}" after ${t+1} attempts, totalFrames:`,l.totalFrames,"currentFrame:",l.currentFrame),e(l);return}}}}catch(s){t%20===0&&console.warn(`[getWebflowLottie] polling "${r}", attempt ${t}:`,s.message)}++t<n?setTimeout(i,100):(console.warn(`[getWebflowLottie] gave up looking for "${r}" after ${n} attempts`),e(null))};window.Webflow&&typeof window.Webflow.push=="function"?window.Webflow.push(()=>i()):i()})}function HA(){const r=document.querySelector(".stats-arc");if(!r){console.warn("[Stats Lottie] .stats-arc element not found in DOM");return}console.log("[Stats Lottie] .stats-arc found, waiting for Webflow lottie"),C0(".stats-arc").then(e=>{if(!e){console.warn("[Stats Lottie] ❌ could not find Webflow lottie for .stats-arc after polling");return}e.goToAndStop(0,!0),e.pause(),console.log("[Stats Lottie] ✅ Webflow lottie ready, paused at frame 0");const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(console.log("[Stats Lottie] in view — playing animation"),e.play(),t.disconnect())})},{threshold:.3,rootMargin:"0px 0px -10% 0px"});t.observe(r),console.log("[Stats Lottie] Intersection Observer attached"),window.__GENLABS_STATS_LOTTIE__=e})}HA();const R0="top top",P0="bottom top",L0=.6,D0=r=>Math.max(0,Math.min(1,r));function I0(r){const e=window.__GENLABS_STAGE_TIMING__,t=e?.convergeIn??.56,n=e?.convergeGlbStart??t,i=e?.statsIn??DESKTOP_STATS_IN,s=Math.min(i-1e-4,Math.max(t,n)),o=Math.max(1e-4,i-s);return D0((r-s)/o)}function GA(){document.querySelector(".convergence-lottie")&&C0(".convergence-lottie").then(r=>{if(!r){console.warn("[Convergence Lottie] could not find Webflow lottie for .convergence-lottie");return}const e=r.animationData?.ip??0,t=r.animationData?.op??r.totalFrames,n=t-e;let i=-1,s=0,o=!1;const a=l=>{const c=Math.round(e+Math.max(0,Math.min(1,l))*n);c!==i&&(i=c,r.goToAndStop(c,!0))};if(r.playSegments([e,t],!0),r.pause(),r.goToAndStop(e,!0),typeof r.resize=="function"&&r.resize(),console.log("[Convergence Lottie] ready — ip:",e,"op:",t,"span:",n,"totalFrames:",r.totalFrames),Qt()){const l=document.querySelector(".cc-convergence")||document.querySelector(".cc-benefits");l&&Vi&&Vi.create({trigger:l,start:R0,end:P0,scrub:L0,onUpdate:c=>{!o&&c.progress>0&&(o=!0,typeof r.resize=="function"&&r.resize()),a(c.progress)}})}else{const l=()=>{if(!window.__pageTL){s=requestAnimationFrame(l);return}const c=window.__pageTL.progress();if(typeof c=="number"){const u=I0(c);u>0&&!o&&(o=!0,typeof r.resize=="function"&&r.resize()),a(u)}s=requestAnimationFrame(l)};s=requestAnimationFrame(l)}window.__GENLABS_CONVERGE_LOTTIE__=r,window.addEventListener("pagehide",()=>{s&&cancelAnimationFrame(s)},{once:!0})})}GA();function WA(){const r=document.querySelector(".convergence-video");if(!r)return;let e=0,t=!1,n=0,i=-1;const s=()=>{const c=r.duration;n=Number.isFinite(c)&&c>0?c:0,t=n>0};let o=0;const a=c=>{if(!t||n<=0)return;const u=.15,h=c<u?0:(c-u)/(1-u),f=Math.max(0,n-.001),d=D0(h)*f;if(!(Math.abs(d-i)<1/60)){i=d,o++%60===0&&console.log("[Convergence Video Debug] progress:",c.toFixed(3),"targetTime:",d.toFixed(2),"actualCurrentTime:",r.currentTime.toFixed(2));try{r.currentTime=d}catch{}}};r.autoplay=!1,r.loop=!1,r.muted=!0,r.pause();const l=()=>{r.readyState>=1&&(r.currentTime=0,console.log("[Convergence Video] Set to start (0s)"))};if(s(),a(0),setTimeout(()=>{l()},1e3),r.addEventListener("loadedmetadata",()=>{s(),a(0),setTimeout(l,1e3)}),r.addEventListener("loadeddata",()=>{setTimeout(l,1e3)}),Qt()){const c=document.querySelector(".cc-convergence")||document.querySelector(".cc-benefits");c&&Vi&&Vi.create({trigger:c,start:R0,end:P0,scrub:L0,onUpdate:u=>{a(u.progress)}})}else{let c=!1;const u=()=>{if(!window.__pageTL){e=requestAnimationFrame(u);return}const h=window.__pageTL.progress();if(typeof h=="number"){const f=I0(h);f>0&&!c&&(c=!0,console.log("[Convergence Video] Section became visible at stage progress:",h.toFixed(3),"media progress:",f.toFixed(3),"video time:",r.currentTime.toFixed(2),"duration:",n.toFixed(2))),a(f)}e=requestAnimationFrame(u)};e=requestAnimationFrame(u)}window.__GENLABS_CONVERGENCE_VIDEO__=r,window.addEventListener("pagehide",()=>{e&&cancelAnimationFrame(e)},{once:!0})}WA();function Ha(r){if(!r||r.dataset.splitReady==="true")return r?.querySelectorAll(".split-word")||[];const e=[],t=i=>{const s=i.textContent;if(!s)return;const o=s.split(/(\s+)/),a=document.createDocumentFragment();o.forEach(l=>{if(!l)return;if(/^\s+$/.test(l)){a.appendChild(document.createTextNode(l));return}const c=document.createElement("span");c.className="split-word-mask";const u=document.createElement("span");u.className="split-word",u.textContent=l,c.appendChild(u),a.appendChild(c),e.push(u)}),i.parentNode.replaceChild(a,i)},n=i=>{if(!i)return;if(i.nodeType===Node.TEXT_NODE){t(i);return}if(i.nodeType!==Node.ELEMENT_NODE||i.tagName==="BR"||i.classList.contains("split-word-mask"))return;Array.from(i.childNodes).forEach(n)};return n(r),r.dataset.splitReady="true",e}function XA(r){if(!r||r.dataset.lineSplitReady==="true")return{lineWords:r?Array.from(r.querySelectorAll(".split-line .split-word")):[],lineBgs:r?Array.from(r.querySelectorAll(".split-line-bg")):[]};Ha(r);const e=Array.from(r.querySelectorAll(".split-word-mask"));if(!e.length)return{lineWords:[],lineBgs:[]};const t=[],n=6;return e.forEach(i=>{const s=i.getBoundingClientRect().top,o=t.find(a=>Math.abs(a.top-s)<=n);if(o){o.masks.push(i);return}t.push({top:s,masks:[i]})}),t.sort((i,s)=>i.top-s.top),r.innerHTML="",r.style.display="block",t.forEach((i,s)=>{const o=document.createElement("span");o.className="split-line",o.style.position="relative",o.style.display="block",o.style.width="fit-content",o.style.margin=s===0?"0 auto 0.12em":"0 auto",o.style.padding="0.03em 0.18em 0.07em";const a=document.createElement("span");a.className="split-line-bg",a.style.position="absolute",a.style.inset="0",a.style.background="var(--_color---neutral--gray-matter)",a.style.transformOrigin="left center",a.style.transform="scaleX(0)",a.style.zIndex="0";const l=document.createElement("span");l.style.position="relative",l.style.zIndex="1",i.masks.forEach((c,u)=>{l.appendChild(c),u<i.masks.length-1&&l.appendChild(document.createTextNode(" "))}),o.appendChild(a),o.appendChild(l),r.appendChild(o)}),r.dataset.lineSplitReady="true",{lineWords:Array.from(r.querySelectorAll(".split-line .split-word")),lineBgs:Array.from(r.querySelectorAll(".split-line-bg"))}}const In={hero:Ha(document.querySelector(Gn.heroTitle)),underCopy:Ha(jn.underCopy),underHighlight:Ha(jn.underHighlight),convergeFinal:Ha(document.querySelector(".converge-final"))},ua=jn.underHighlight?.dataset.split==="lines"?XA(jn.underHighlight):{lineWords:[],lineBgs:[]};ua.lineWords.length&&(In.underHighlight=ua.lineWords);In.hero.length&&(xt.set(In.hero,{y:50,opacity:0}),xt.to(In.hero,{y:0,opacity:1,duration:.9,ease:"power3.out",delay:.12,stagger:.035}));In.underCopy.length&&xt.set(In.underCopy,{y:50,opacity:0});In.underHighlight.length&&xt.set(In.underHighlight,{y:50,opacity:0});ua.lineBgs.length&&xt.set(ua.lineBgs,{scaleX:0,transformOrigin:"left center"});In.convergeFinal.length&&xt.set(In.convergeFinal,{y:42,opacity:0});function YA(){const r=document.querySelector(".explore-btn");if(!r)return;const e=24;let t=!0;const n=(i,s=!1)=>{i!==t&&(t=i,xt.to(r,{autoAlpha:i?1:0,y:i?0:18,duration:s?0:.24,ease:"power2.out",overwrite:!0}),r.classList.toggle("is-hidden",!i))};window.addEventListener("scroll",()=>{n(window.scrollY<=e)},{passive:!0}),r.addEventListener("click",()=>{n(!1),window.scrollTo({top:Math.round(window.innerHeight*.5),behavior:"smooth"})}),n(window.scrollY<=e,!0)}YA();j1({gsap:xt,ScrollTrigger:Vi});(function(){const e=document.querySelector('[data-component="convergence-mobile"]');if(!e||!Qt()||E0())return;function t(){const R=e.parentElement;if(R){const P=R.getBoundingClientRect();if(P.width>0&&P.height>0)return{width:P.width,height:P.height}}return{width:window.innerWidth,height:window.innerHeight}}let n=t();const i=Math.min(window.devicePixelRatio||1,2);e.width=Math.floor(n.width*i),e.height=Math.floor(n.height*i),e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,e.style.opacity="0";const s=e.getContext("2d",{alpha:!1});s.setTransform(i,0,0,i,0,0),s.textBaseline="top";const o=document.createElement("canvas"),a=new _a({canvas:o,antialias:!0,alpha:!1});a.setPixelRatio(i),a.setSize(n.width,n.height);const l=new ha,c=new yn(45,n.width/n.height,.01,1e3);l.add(c),l.add(new ru(16777215,.25));const u=new Zi(16777215,1.25);u.position.set(6,4,6),l.add(u);const h=new Zi(16777215,.35);h.position.set(-6,2,4),l.add(h);const f=new Zi(16777215,.6);f.position.set(0,6,-6),l.add(f);const d={uTime:{value:0},uScale:{value:2.4},uIntensity:{value:.85},uBase:{value:.025},uAmp:{value:.015},uResolution:{value:new ke(n.width,n.height)},uTint:{value:new U(1,1,1)}},g=new Jn({uniforms:d,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }",fragmentShader:`
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
      }`}),_=new At(new Yr(2,2),g);_.frustumCulled=!1,_.renderOrder=-1e3,l.add(_);let m=null,p=null;function v(){const R={cellSize:5,aspectComp:.55},P=Math.max(20,Math.floor(n.width/R.cellSize)),O=n.width/P,B=O/R.aspectComp,V=Math.max(20,Math.floor(n.height/B));m&&m.dispose(),m=new Un(P,V,{depthBuffer:!0,stencilBuffer:!1}),p=new Uint8Array(P*V*4),v.cols=P,v.rows=V,v.cellW=O,v.cellH=B}v();const x=" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";function y(){const{cols:R,rows:P,cellW:O,cellH:B}=v;s.fillStyle="#ffffff",s.fillRect(0,0,n.width,n.height),s.fillStyle="#125fee";const V=Math.max(8,Math.floor(B*1));s.font=`${V}px monospace`,s.textAlign="left";const k=s.measureText("M").width||1,z=O/k;s.save(),s.scale(z,1);const X=Math.max(B,V*1.05);for(let Q=0;Q<P;Q++){let D="";for(let te=0;te<R;te++){const Re=P-1-Q,Pe=(Re*R+te)*4;let De=.2126*(p[Pe]/255)+.7152*(p[Pe+1]/255)+.0722*(p[Pe+2]/255);De=Math.min(1,Math.max(0,(De-.5)*1.15+.5)),De=Math.min(1,Math.max(0,Math.pow(De,.9))),D+=x[Math.floor(De*(x.length-1))]}s.fillText(D,0,Q*X)}s.restore()}const b=new Sn;l.add(b);let E=!1;const w=new Ms({color:16777215,metalness:.1,roughness:.6});new uu().load(Qc("/models/logo_split.glb"),R=>{const P=R.scene;P.updateMatrixWorld(!0),P.traverse(Pe=>{Pe.isMesh&&(Pe.material=w,Pe.castShadow=!1,Pe.receiveShadow=!1)}),b.add(P),b.updateMatrixWorld(!0);const O=new Vt().setFromObject(b),B=O.getSize(new U),V=O.getCenter(new U);b.position.sub(V);const k=Math.max(B.x,B.y,B.z);b.scale.setScalar(7/k),b.updateMatrixWorld(!0);const Q=new Vt().setFromObject(b).getSize(new U),D=Math.max(Q.x,Q.y,Q.z),te=c.fov*Math.PI/180,Re=D/2/Math.tan(te/2);c.position.set(0,D*.2,Re*1.4),c.near=Math.max(.01,Re/100),c.far=Re*100,c.updateProjectionMatrix(),c.lookAt(0,0,0),E=!0});let C=!1;new IntersectionObserver(R=>{R[0].isIntersecting?(C=!0,e.style.opacity="1"):(C=!1,e.style.opacity="0")},{threshold:.1}).observe(e);const S=new ma,M=Math.PI*2/12;(function R(){if(requestAnimationFrame(R),!E||!C)return;const P=S.getElapsedTime();d.uTime.value=P,b.rotation.y=P*M,a.setRenderTarget(m),a.render(l,c),a.setRenderTarget(null),a.readRenderTargetPixels(m,0,0,m.width,m.height,p),y()})(),window.addEventListener("resize",()=>{n=t();const R=Math.min(window.devicePixelRatio||1,2);e.width=Math.floor(n.width*R),e.height=Math.floor(n.height*R),e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,s.setTransform(R,0,0,R,0,0),c.aspect=n.width/n.height,c.updateProjectionMatrix(),a.setSize(n.width,n.height),d.uResolution.value.set(n.width,n.height),v()})})();eA();sA();oA();dA();hA();const xr=new ha;xr.add(Xs);Xs.position.set(5.2,-.4,0);const qA=new ru(16777215,.25);xr.add(qA);const Mr=new Zi(16777215,1.25);Mr.position.set(6,4,6);Mr.castShadow=!1;Mr.shadow.mapSize.set(1024,1024);Mr.shadow.camera.near=.1;Mr.shadow.camera.far=50;Mr.shadow.camera.left=-15;Mr.shadow.camera.right=15;Mr.shadow.camera.top=15;Mr.shadow.camera.bottom=-15;xr.add(Mr);const N0=new Zi(16777215,.35);N0.position.set(-6,2,4);xr.add(N0);const O0=new Zi(16777215,.6);O0.position.set(0,6,-6);xr.add(O0);const $A=new ma,Al={uTime:{value:0},uScale:{value:2.4},uIntensity:{value:.85},uBase:{value:.025},uAmp:{value:.015},uResolution:{value:new ke(Ut.width,Ut.height)},uTint:{value:new U(1,1,1)}},jA=new Jn({uniforms:Al,depthWrite:!1,depthTest:!1,vertexShader:`
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
  `});ca.noise=Al.uAmp.value;Ss.add(ca,"noise",.06,.3,.005).name("NOISE").onChange(r=>{Al.uAmp.value=r});const Wd=new At(new Yr(2,2),jA);Wd.frustumCulled=!1;Wd.renderOrder=-1e3;xr.add(Wd);const Oo=new Sn;xr.add(Oo);const KA=new At(new gs(1,1,1),new Mx);Oo.add(KA);const Yt=new yn(45,Ut.width/Ut.height,.1,5e3);xr.add(Yt);Yt.position.set(0,0,20);Yt.lookAt(0,0,0);const Tn=new ZT(Yt,hs);Tn.enableDamping=!0;Tn.enablePan=!1;Tn.enableZoom=!1;Tn.enableRotate=!1;Tn.target.set(0,0,0);Tn.update();const Wf=new uu;function ZA(r){const e=new Ms({color:new je("#ffffff"),metalness:.08,roughness:.62}),t=new Sn;if(r==="stack-cylinders"){const i=new Fc(.55,.55,1.7,32),s=new Fc(.75,.75,.12,40),o=new At(i,e),a=new At(i,e),l=new At(s,e);return o.position.set(-.75,.2,0),a.position.set(.75,-.2,0),l.position.set(0,1.1,0),t.add(o,a,l),t}if(r==="slab-grid"){for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++){const o=new At(new gs(.9,.36,.9),e);o.position.set(i*.95,s*.45,(i+s)*.06),t.add(o)}return t}if(r==="diamond-cluster"){const i=new ud(.66,0),s=new At(i,e),o=new At(i,e),a=new At(i,e);return s.position.set(-.9,-.15,0),o.position.set(.85,-.05,-.05),a.position.set(0,.9,0),t.add(s,o,a),t}if(r==="ring-array"){const i=new hd(.55,.18,18,72);for(let s=0;s<4;s++){const o=new At(i,e);o.position.set((s-1.5)*.85,s%2?-.35:.35,s*-.12),o.rotation.x=Math.PI*.5,o.rotation.y=s*.45,t.add(o)}return t}const n=new At(new gs(1,1,1),e);return t.add(n),t}function sg(r,e=5.5){r.updateMatrixWorld(!0);const n=new Vt().setFromObject(r).getSize(new U),i=Math.max(n.x,n.y,n.z);if(i>0){const a=e/i;r.scale.setScalar(a)}r.updateMatrixWorld(!0);const o=new Vt().setFromObject(r).getCenter(new U);r.position.sub(o),r.updateMatrixWorld(!0)}function og(r,e=0){const t=fs.degToRad(r.fov),n=Math.max(.001,Math.abs(r.position.z-e));return Math.tan(t*.5)*n*r.aspect}function JA(r){const e=r.clone(!0);return e.traverse(t=>{t.isMesh&&(t.castShadow=!1,t.receiveShadow=!1,t.material=t.material.clone(),t.material.color=new je("#ffffff"),t.material.needsUpdate=!0)}),e}function QA(r){return new Promise((e,t)=>{Wf.load(r,n=>e(n.scene),void 0,n=>t(n))})}function eC(r){return jc.find(e=>e.id===r)||jc[0]}async function tC(r){const{model:e}=r;if(e.type==="primitive"){const i=ZA(e.primitive);return sg(i,e.targetSize),i}const t=Qc(e.url);if(!mh.has(t)){const i=await QA(t);mh.set(t,i)}const n=JA(mh.get(t));return sg(n,e.targetSize),n}function nC(){const r=document.querySelector("#tab-buttons");r&&(r.innerHTML="",jc.forEach(e=>{const t=document.createElement("button");t.type="button",t.className="tab-button",t.dataset.tabId=e.id,t.textContent=e.label;const n=()=>{U0(e.id)};t.addEventListener("pointerenter",n),t.addEventListener("focus",n),t.addEventListener("click",n),r.appendChild(t)}))}function iC(r){document.querySelectorAll(".tab-button").forEach(e=>{e.classList.toggle("is-active",e.dataset.tabId===r)})}async function U0(r){const e=eC(r);gh+=1;const t=gh;try{const n=await tC(e);if(t!==gh)return;Xs.clear(),Xs.position.fromArray(e.model.position||[5.2,-.4,0]),Xs.add(n),Hf=n,Gf=e.id,w0=e.rotationSpeed||.16,Tn.target.copy(Xs.position),Tn.update(),iC(Gf)}catch(n){console.error(`Failed to load tab model for ${e.id}:`,n)}}const rC=!!document.querySelector("#tab-buttons");rC&&(nC(),U0($1));Wf.load(Qc("/models/logo_separate.glb"),r=>{Oo.clear(),gn=new Sn,Ns=new Sn,Os=new Sn,Oo.add(gn),gn.add(Ns,Os);const e=r.scene;e.updateMatrixWorld(!0);const t=e.getObjectByName("Logo_L"),n=e.getObjectByName("Logo_R");if(!t||!n){console.log("Could not find Logo_L / Logo_R. Available objects:"),e.traverse(fe=>{fe.name&&console.log(fe.name)});return}t.removeFromParent(),n.removeFromParent(),Ns.add(t),Os.add(n),gn.updateMatrixWorld(!0);const i=new Vt().setFromObject(gn),s=i.getSize(new U),o=i.getCenter(new U);gn.position.sub(o);const a=Math.max(s.x,s.y,s.z),c=(Qt()?6.5:10)/a;gn.scale.setScalar(c);const u=Qt()?-3:0;Oo.position.set(0,u,0),gn.updateMatrixWorld(!0);const f=new Vt().setFromObject(gn).getSize(new U),d=Math.max(f.x,f.y,f.z),g=Yt.fov*(Math.PI/180),_=d/2/Math.tan(g/2);Yt.position.set(0,u+d*.2,_*1.4),Yt.near=Math.max(.01,_/100),Yt.far=_*100,Yt.updateProjectionMatrix(),Tn.target.set(0,u,0),Tn.update();const m=Yt.position.y,p=Yt.position.z;ph=new Ms({color:new je("#ffffff"),metalness:.1,roughness:.6}),gn.traverse(fe=>{if(!fe.isMesh)return;fe.castShadow=!1,fe.receiveShadow=!1;const se=fe.material;fe.material=ph,se?.map&&(fe.material.map=se.map),se?.normalMap&&(fe.material.normalMap=se.normalMap),se?.roughnessMap&&(fe.material.roughnessMap=se.roughnessMap),se?.metalnessMap&&(fe.material.metalnessMap=se.metalnessMap),fe.material.needsUpdate=!0});const v=xt.to(gn.rotation,{y:`+=${Math.PI*2}`,duration:12,repeat:-1,ease:"none"}),x=new Sn,y=new Sn,b=new Sn,E=[],w={value:0},C=()=>{for(const fe of E)fe.opacity=w.value},S=.88,M=3.6,R=5,P=.42,O=7.2,B=new U(1,1,1),V={holdLeftX:0,holdRightX:0,holdLeftY:0,holdRightY:0,cameraStartZ:p,cameraEndZ:-Math.max(d*2.6,p*1.4)};let k=!1,z=c*2.8;const X={value:P},Q=()=>{x.scale.setScalar(z*X.value)},D=()=>{if(!k)return;const fe=og(Yt,0),se=fe/Math.max(Yt.aspect,.001),L=fe*2*S/Math.max(B.x,.001),T=se*2*S/Math.max(B.y,.001),F=Math.min(L,T);z=Math.max(F*M,c*R),Q()};window.__refreshConvergeScale=D,Oo.add(x),x.add(y,b),x.visible=!1,E0()||Wf.load(Qc("/models/logo_split.glb"),fe=>{const se=fe.scene;se.updateMatrixWorld(!0);const L=se.getObjectByName("clogo_L"),T=se.getObjectByName("clogo_R");if(!L||!T){console.log("Could not find clogo_L / clogo_R. Available:"),se.traverse(me=>{me.name&&console.log(me.name)});return}L.removeFromParent(),T.removeFromParent(),y.add(L),b.add(T),x.updateMatrixWorld(!0);const F=new Vt().setFromObject(x),K=F.getSize(new U),Z=F.getCenter(new U),$=new Vt().setFromObject(y),Se=new Vt().setFromObject(b),oe=$.getSize(new U),Ce=Se.getSize(new U);x.position.sub(Z),B.copy(K),k=!0,D();const Ae=og(Yt,0),ie=Math.max((oe.x+Ce.x)*.28,Ae*.22),ae=fs.clamp(K.y*.05,.06,.34);if(V.holdLeftX=-ie,V.holdRightX=ie,V.holdLeftY=-ae,V.holdRightY=ae,x.traverse(me=>{if(!me.isMesh)return;me.castShadow=!1,me.receiveShadow=!1;const Me=ph.clone();Me.transparent=!0,Me.opacity=w.value,Me.needsUpdate=!0,E.push(Me),me.material=Me}),y.position.set(V.holdLeftX,V.holdLeftY,0),b.position.set(V.holdRightX,V.holdRightY,0),x.rotation.set(0,0,0),C(),x.visible=!1,window.__pageTL){const me=window.__pageTL.progress();window.__pageTL.progress(0),window.__pageTL.progress(me)}},void 0,fe=>console.error("Failed to load convergence logo:",fe)),window.__pageTL&&(window.__pageTL.scrollTrigger?.kill(),window.__pageTL.kill(),window.__pageTL=null),Ns.position.set(0,0,0),Os.position.set(0,0,0),Ns.scale.set(1,1,1),Os.scale.set(1,1,1),y.position.set(V.holdLeftX,V.holdLeftY,0),b.position.set(V.holdRightX,V.holdRightY,0),x.rotation.set(0,0,0),X.value=P,Q(),w.value=0,C(),x.visible=!1,gn.visible=!0,gn.rotation.set(0,0,0),gn.scale.setScalar(c),Yt.position.set(0,m,V.cameraStartZ),gn.updateMatrixWorld(!0);const te=new Vt().setFromObject(Ns),Re=new Vt().setFromObject(Os),Pe=te.getSize(new U),De=Re.getSize(new U),He=Math.max((Pe.x+De.x)*.5,f.x*.35),j=fs.clamp(He*.18,.38,1.25),J=fs.clamp(j*.2,.05,.22),he=new U(-j,-J,0),Ie=new U(j,J,0),ye=T0(),Xe=ye?DESKTOP_STATS_IN:1,_e={heroSplitOut:Qt()?.2:.35,copySwapStart:Qt()?.4:.28,underOut:Qt()?.95:.5,convergeIn:Qt()?2:.56,convergeGlbStart:Qt()?2:.63,centralizedIn:Qt()?2:.63,convergeFadeIn:.06,convergeGrowStart:Qt()?2:.65,modelFadeOutStart:Qt()?2:.805,modelFadeOut:.03,statsIn:Qt()?2:Xe};window.__GENLABS_STAGE_TIMING__=_e;let we=!1;const ze=document.querySelector("#grid-stage-scroll"),Je=Qt()?ze?ze.offsetHeight/window.innerHeight:.75:10,Be=Vi?{scrollTrigger:{trigger:ig().trigger,start:"top top",end:()=>{const{stage:fe,runway:se}=ig();return fe?`+=${Math.max(0,fe.offsetHeight-window.innerHeight)}`:se?`+=${se.offsetHeight}`:`+=${window.innerHeight*Je}`},scrub:.8,invalidateOnRefresh:!0,onUpdate:fe=>{const se=fe.progress>=_e.convergeIn;se!==we&&(we=se,we?v.pause():v.resume())}}}:{},G=xt.timeline(Be),N=!!(document.querySelector(".converge-label-left")&&document.querySelector(".converge-label-right")),pt=!!document.querySelector(".converge-hover-card"),Qe=!!document.querySelector(".converge-final");if(xt.set(Gn.panelHero,{autoAlpha:1,y:0}),xt.set(Gn.panelUnder,{autoAlpha:0,y:40}),xt.set(Gn.underCopy,{autoAlpha:1}),xt.set(Gn.underHighlight,{autoAlpha:1}),Qt()||(xt.set(Gn.panelConverge,{autoAlpha:0}),ye&&xt.set(Gn.panelStats,{opacity:0,visibility:"visible"}),N&&xt.set(".converge-label",{autoAlpha:0,y:18}),pt&&xt.set(".converge-hover-card",{autoAlpha:0,scale:.96}),Qe&&xt.set(".converge-final",{autoAlpha:0})),G.to(Gn.panelHero,{autoAlpha:0,y:-50,ease:"none",duration:.12},0),G.to(Gn.panelUnder,{autoAlpha:1,y:0,ease:"none",duration:.22},0),In.underCopy.length&&G.to(In.underCopy,{y:0,opacity:1,ease:"power3.out",duration:.18,stagger:.008},.08),In.underHighlight.length&&G.to(In.underHighlight,{y:0,opacity:1,ease:"power3.out",duration:.15,stagger:.012},_e.copySwapStart),ua.lineBgs.length&&G.to(ua.lineBgs,{scaleX:1,ease:"power2.out",duration:.14,stagger:.08},_e.copySwapStart+.06),G.to(Gn.panelUnder,{autoAlpha:0,y:-40,ease:"none",duration:.06},_e.underOut),Qt()||G.set(Gn.panelUnder,{autoAlpha:0},_e.convergeIn),G.to(Ns.position,{x:he.x,y:he.y,z:he.z,ease:"none",duration:_e.heroSplitOut},0),G.to(Os.position,{x:Ie.x,y:Ie.y,z:Ie.z,ease:"none",duration:_e.heroSplitOut},0),G.to(gn.rotation,{z:Math.PI*.25,ease:"power2.out",duration:.08},_e.underOut),Qt()&&G.to(gn,{visible:!1,duration:.001},_e.underOut+.07),!Qt()){G.to(Gn.panelConverge,{autoAlpha:1,ease:"none",duration:.02},_e.convergeIn),N&&(G.to(".converge-label",{autoAlpha:0,y:18,ease:"none",duration:.001},_e.convergeIn),G.to(".converge-label-left",{autoAlpha:1,y:0,ease:"power2.out",duration:.08},_e.convergeIn),G.to(".converge-label-right",{autoAlpha:1,y:0,ease:"power2.out",duration:.08},_e.centralizedIn));const fe={value:0};G.to(fe,{value:1,duration:.001,ease:"none",onUpdate:()=>{const F=fe.value>.5;gn.visible=!F,x.visible=F}},_e.convergeGlbStart),G.to(w,{value:1,ease:"none",duration:_e.convergeFadeIn,onUpdate:C},_e.convergeGlbStart);const se=Math.max(.001,_e.modelFadeOutStart-_e.convergeGrowStart),L=O*1.35;G.to(X,{value:O,ease:"power3.in",duration:se,onUpdate:Q},_e.convergeGrowStart);const T=Math.max(.001,_e.modelFadeOutStart-_e.centralizedIn);G.to(y.position,{x:0,y:0,ease:"power2.inOut",duration:T},_e.centralizedIn),G.to(b.position,{x:0,y:0,ease:"power2.inOut",duration:T},_e.centralizedIn),G.to(x.rotation,{z:Math.PI*.25,ease:"power2.inOut",duration:Math.max(.001,_e.modelFadeOutStart-_e.convergeGrowStart)},_e.convergeGrowStart),G.to(Yt.position,{y:0,z:V.cameraEndZ,ease:"power3.in",duration:Math.max(.001,_e.modelFadeOutStart-_e.convergeGrowStart)},_e.convergeGrowStart),G.to(X,{value:L,ease:"none",duration:Math.max(.001,_e.modelFadeOut),onUpdate:Q},_e.modelFadeOutStart),G.to({},{duration:.001,onStart:()=>{Tn.target.set(0,0,0),Tn.update(),Yt.lookAt(0,0,0)},onReverseComplete:()=>{Tn.target.set(0,0,0),Tn.update(),Yt.lookAt(0,0,0)}},_e.convergeIn),pt&&G.to(".converge-hover-card",{autoAlpha:0,scale:.96,ease:"none",duration:.03,overwrite:!0},_e.labelOut),ye&&G.to(w,{value:0,ease:"power2.out",duration:_e.modelFadeOut,onUpdate:C},_e.modelFadeOutStart),Qe&&G.to(".converge-final",{autoAlpha:1,ease:"none",duration:.05},_e.finalTextIn),In.convergeFinal.length&&G.to(In.convergeFinal,{y:0,opacity:1,ease:"power3.out",duration:.08,stagger:.02},_e.finalTextIn),ye&&(G.to(Gn.panelConverge,{autoAlpha:0,ease:"none",duration:.015},_e.statsIn),G.to(Gn.panelStats,{opacity:1,ease:"none",duration:.015,onStart:()=>{const F=window.__GENLABS_STATS_LOTTIE__;F&&typeof F.resize=="function"&&F.resize()}},_e.statsIn))}window.__pageTL=G,Vi?.refresh(),Gf&&(Tn.target.copy(Xs.position),Tn.update())},void 0,r=>console.error("Failed to load GLB:",r));let Ys=null,sl=null;function Oi(){const r=Math.max(20,Math.floor(Ut.width/xn.cellSize)),e=Ut.width/r,t=e/xn.aspectComp,n=Math.max(20,Math.floor(Ut.height/t)),i=r,s=n;Ys&&Ys.dispose(),Ys=new Un(i,s,{depthBuffer:!0,stencilBuffer:!1}),sl=new Uint8Array(i*s*4),Oi.w=i,Oi.h=s,Oi.cellW=e,Oi.cellH=t}Oi();function sC(r,e){return fs.clamp((r-.5)*e+.5,0,1)}function oC(r,e){return fs.clamp(Math.pow(r,e),0,1)}function aC(r,e,t){return .2126*r+.7152*e+.0722*t}function lC(){const r=Oi.w,e=Oi.h,t=xn.ramp,n=t.length;ri.fillStyle=xn.bg,ri.fillRect(0,0,Ut.width,Ut.height),ri.fillStyle=xn.fg;const i=Oi.cellH,s=Math.max(8,Math.floor(i*xn.fontScale));ri.font=`${s}px ${xn.fontFamily}`,ri.textAlign="left";const o=ri.measureText("M").width,a=Oi.cellW/o;ri.save(),ri.scale(a,1);for(let l=0;l<e;l++){let c="";for(let h=0;h<r;h++){const d=((e-1-l)*r+h)*4,g=sl[d]/255,_=sl[d+1]/255,m=sl[d+2]/255;let p=aC(g,_,m);p=sC(p,xn.contrast),p=oC(p,xn.gamma);const v=Math.floor(p*(n-1));c+=t[v]}const u=Math.max(Oi.cellH,s*1.05);ri.fillText(c,0,l*u)}ri.restore()}window.addEventListener("resize",()=>{const r=window.__pageTL,e=r?.scrollTrigger||null,t=e?e.progress:null;if(Ut.width=window.innerWidth,Ut.height=window.innerHeight,Yt.aspect=Ut.width/Ut.height,Yt.updateProjectionMatrix(),Yi.setSize(Ut.width,Ut.height),A0(),Oi(),Al.uResolution.value.set(Ut.width,Ut.height),window.__refreshConvergeScale?.(),Vi?.refresh(),e&&t!==null){const n=e.start+(e.end-e.start)*t;e.scroll(n);const i=e.progress;r.progress(0),r.progress(i)}});let ag=0;const F0=()=>{const r=$A.getElapsedTime(),e=r-ag;ag=r,Hf&&(Hf.rotation.y+=e*w0),Tn.update(),Al.uTime.value=r,Gd?(Yi.setRenderTarget(Ys),Yi.render(xr,Yt),Yi.setRenderTarget(null),Yi.readRenderTargetPixels(Ys,0,0,Ys.width,Ys.height,sl),lC()):(Yi.setRenderTarget(null),Yi.render(xr,Yt)),requestAnimationFrame(F0)};F0();
