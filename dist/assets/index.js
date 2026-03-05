const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/style.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const z0="modulepreload",V0=function(r){return"/"+r},Yf={},H0=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=l(t.map(c=>{if(c=V0(c),c in Yf)return;Yf[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":z0,u||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((f,_)=>{d.addEventListener("load",f),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};const Xd="182",Bo={ROTATE:0,DOLLY:1,PAN:2},Do={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},G0=0,qf=1,W0=2,mc=1,cg=2,Na=3,Hr=0,oi=1,or=2,kr=0,ko=1,$f=2,jf=3,Kf=4,X0=5,zs=100,Y0=101,q0=102,$0=103,j0=104,K0=200,Z0=201,J0=202,Q0=203,yh=204,Sh=205,ev=206,tv=207,nv=208,iv=209,rv=210,sv=211,ov=212,av=213,lv=214,Mh=0,bh=1,Th=2,$o=3,wh=4,Eh=5,Ah=6,Ch=7,ug=0,cv=1,uv=2,dr=0,hg=1,dg=2,fg=3,pg=4,mg=5,gg=6,_g=7,Zf="attached",hv="detached",vg=300,no=301,jo=302,Rh=303,Ph=304,eu=306,Ko=1e3,lr=1001,Lc=1002,cn=1003,xg=1004,Oa=1005,un=1006,gc=1007,Ur=1008,Si=1009,yg=1010,Sg=1011,ll=1012,Yd=1013,mr=1014,Fi=1015,Gr=1016,qd=1017,$d=1018,cl=1020,Mg=35902,bg=35899,Tg=1021,wg=1022,Bi=1023,Wr=1026,Hs=1027,jd=1028,Kd=1029,Zo=1030,Zd=1031,Jd=1033,_c=33776,vc=33777,xc=33778,yc=33779,Lh=35840,Dh=35841,Ih=35842,Nh=35843,Oh=36196,Uh=37492,Fh=37496,Bh=37488,kh=37489,zh=37490,Vh=37491,Hh=37808,Gh=37809,Wh=37810,Xh=37811,Yh=37812,qh=37813,$h=37814,jh=37815,Kh=37816,Zh=37817,Jh=37818,Qh=37819,ed=37820,td=37821,nd=36492,id=36494,rd=36495,sd=36283,od=36284,ad=36285,ld=36286,ul=2300,hl=2301,fu=2302,Jf=2400,Qf=2401,ep=2402,dv=2500,fv=0,Eg=1,cd=2,pv=3200,Qd=0,mv=1,ss="",wn="srgb",Zn="srgb-linear",Dc="linear",Mt="srgb",uo=7680,tp=519,gv=512,_v=513,vv=514,ef=515,xv=516,yv=517,tf=518,Sv=519,ud=35044,np="300 es",cr=2e3,Ic=2001;function Ag(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Mv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function dl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bv(){const r=dl("canvas");return r.style.display="block",r}const ip={};function Nc(...r){const e="THREE."+r.shift();console.log(e,...r)}function Ne(...r){const e="THREE."+r.shift();console.warn(e,...r)}function Ye(...r){const e="THREE."+r.shift();console.error(e,...r)}function fl(...r){const e=r.join(" ");e in ip||(ip[e]=!0,Ne(...r))}function Tv(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class oo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rp=1234567;const Xa=Math.PI/180,Jo=180/Math.PI;function Ki(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function rt(r,e,t){return Math.max(e,Math.min(t,r))}function nf(r,e){return(r%e+e)%e}function wv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Ev(r,e,t){return r!==e?(t-r)/(e-r):0}function Ya(r,e,t){return(1-t)*r+t*e}function Av(r,e,t,n){return Ya(r,e,1-Math.exp(-t*n))}function Cv(r,e=1){return e-Math.abs(nf(r,e*2)-e)}function Rv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Pv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Lv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Dv(r,e){return r+Math.random()*(e-r)}function Iv(r){return r*(.5-Math.random())}function Nv(r){r!==void 0&&(rp=r);let e=rp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ov(r){return r*Xa}function Uv(r){return r*Jo}function Fv(r){return(r&r-1)===0&&r!==0}function Bv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function kv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zv(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*f,a*c);break;case"YXY":r.set(l*f,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*f,a*u,a*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $i(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const fs={DEG2RAD:Xa,RAD2DEG:Jo,generateUUID:Ki,clamp:rt,euclideanModulo:nf,mapLinear:wv,inverseLerp:Ev,lerp:Ya,damp:Av,pingpong:Cv,smoothstep:Rv,smootherstep:Pv,randInt:Lv,randFloat:Dv,randFloatSpread:Iv,seededRandom:Nv,degToRad:Ov,radToDeg:Uv,isPowerOfTwo:Fv,ceilPowerOfTwo:Bv,floorPowerOfTwo:kv,setQuaternionFromProperEuler:zv,normalize:bt,denormalize:$i};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=l*d+c*f+u*_+h*g;m<0&&(d=-d,f=-f,_=-_,g=-g,m=-m);let p=1-a;if(m<.9995){const v=Math.acos(m),S=Math.sin(v);p=Math.sin(p*v)/S,a=Math.sin(a*v)/S,l=l*p+d*a,c=c*p+f*a,u=u*p+_*a,h=h*p+g*a}else{l=l*p+d*a,c=c*p+f*a,u=u*p+_*a,h=h*p+g*a;const v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-a*f,e[t+2]=c*_+u*f+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pu=new F,sp=new gr;class et{constructor(e,t,n,i,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],v=i[1],S=i[4],x=i[7],b=i[2],w=i[5],E=i[8];return s[0]=o*g+a*v+l*b,s[3]=o*m+a*S+l*w,s[6]=o*p+a*x+l*E,s[1]=c*g+u*v+h*b,s[4]=c*m+u*S+h*w,s[7]=c*p+u*x+h*E,s[2]=d*g+f*v+_*b,s[5]=d*m+f*S+_*w,s[8]=d*p+f*x+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mu.makeScale(e,t)),this}rotate(e){return this.premultiply(mu.makeRotation(-e)),this}translate(e,t){return this.premultiply(mu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mu=new et,op=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ap=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vv(){const r={enabled:!0,workingColorSpace:Zn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(i.r=zr(i.r),i.g=zr(i.g),i.b=zr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(i.r=zo(i.r),i.g=zo(i.g),i.b=zo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ss?Dc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return fl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return fl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Zn]:{primaries:e,whitePoint:n,transfer:Dc,toXYZ:op,fromXYZ:ap,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:op,fromXYZ:ap,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),r}const dt=Vv();function zr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ho;class Hv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ho===void 0&&(ho=dl("canvas")),ho.width=e.width,ho.height=e.height;const i=ho.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ho}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=zr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zr(t[n]/255)*255):t[n]=zr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gv=0;class rf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(gu(i[o].image)):s.push(gu(i[o]))}else s=gu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function gu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let Wv=0;const _u=new F;class Mn extends oo{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,n=lr,i=lr,s=un,o=Ur,a=Bi,l=Si,c=Mn.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Ki(),this.name="",this.source=new rf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_u).x}get height(){return this.source.getSize(_u).y}get depth(){return this.source.getSize(_u).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ko:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ko:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=vg;Mn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,i=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(f+1)/2,b=(p+1)/2,w=(u+d)/4,E=(h+g)/4,C=(_+m)/4;return S>x&&S>b?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=w/n,s=E/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=C/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=E/s,i=C/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-g)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xv extends oo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Mn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new rf(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Xv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cg extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yv extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vt{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hi):Hi.fromBufferAttribute(s,o),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rl.copy(n.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),Pl.subVectors(this.max,Sa),fo.subVectors(e.a,Sa),po.subVectors(e.b,Sa),mo.subVectors(e.c,Sa),jr.subVectors(po,fo),Kr.subVectors(mo,po),Es.subVectors(fo,mo);let t=[0,-jr.z,jr.y,0,-Kr.z,Kr.y,0,-Es.z,Es.y,jr.z,0,-jr.x,Kr.z,0,-Kr.x,Es.z,0,-Es.x,-jr.y,jr.x,0,-Kr.y,Kr.x,0,-Es.y,Es.x,0];return!vu(t,fo,po,mo,Pl)||(t=[1,0,0,0,1,0,0,0,1],!vu(t,fo,po,mo,Pl))?!1:(Ll.crossVectors(jr,Kr),t=[Ll.x,Ll.y,Ll.z],vu(t,fo,po,mo,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Tr=[new F,new F,new F,new F,new F,new F,new F,new F],Hi=new F,Rl=new Vt,fo=new F,po=new F,mo=new F,jr=new F,Kr=new F,Es=new F,Sa=new F,Pl=new F,Ll=new F,As=new F;function vu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){As.fromArray(r,s);const a=i.x*Math.abs(As.x)+i.y*Math.abs(As.y)+i.z*Math.abs(As.z),l=e.dot(As),c=t.dot(As),u=n.dot(As);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const qv=new Vt,Ma=new F,xu=new F;class yr{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const t=Ma.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ma,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(xu)),this.expandByPoint(Ma.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wr=new F,yu=new F,Dl=new F,Zr=new F,Su=new F,Il=new F,Mu=new F;class wl{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yu.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(yu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Dl),a=Zr.dot(this.direction),l=-Zr.dot(Dl),c=Zr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(yu).addScaledVector(Dl,d),f}intersectSphere(e,t){wr.subVectors(e.center,this.origin);const n=wr.dot(this.direction),i=wr.dot(wr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,n,i,s){Su.subVectors(t,e),Il.subVectors(n,e),Mu.crossVectors(Su,Il);let o=this.direction.dot(Mu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zr.subVectors(this.origin,e);const l=a*this.direction.dot(Il.crossVectors(Zr,Il));if(l<0)return null;const c=a*this.direction.dot(Su.cross(Zr));if(c<0||l+c>o)return null;const u=-a*Zr.dot(Mu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,i,s,o,a,l,c,u,h,d,f,_,g,m){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,d,f,_,g,m)}set(e,t,n,i,s,o,a,l,c,u,h,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/go.setFromMatrixColumn(e,0).length(),s=1/go.setFromMatrixColumn(e,1).length(),o=1/go.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d-g*a,t[4]=-o*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=o*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($v,e,jv)}lookAt(e,t,n){const i=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Jr.crossVectors(n,mi),Jr.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Jr.crossVectors(n,mi)),Jr.normalize(),Nl.crossVectors(mi,Jr),i[0]=Jr.x,i[4]=Nl.x,i[8]=mi.x,i[1]=Jr.y,i[5]=Nl.y,i[9]=mi.y,i[2]=Jr.z,i[6]=Nl.z,i[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],v=n[3],S=n[7],x=n[11],b=n[15],w=i[0],E=i[4],C=i[8],y=i[12],M=i[1],P=i[5],L=i[9],N=i[13],U=i[2],H=i[6],k=i[10],z=i[14],W=i[3],Q=i[7],D=i[11],te=i[15];return s[0]=o*w+a*M+l*U+c*W,s[4]=o*E+a*P+l*H+c*Q,s[8]=o*C+a*L+l*k+c*D,s[12]=o*y+a*N+l*z+c*te,s[1]=u*w+h*M+d*U+f*W,s[5]=u*E+h*P+d*H+f*Q,s[9]=u*C+h*L+d*k+f*D,s[13]=u*y+h*N+d*z+f*te,s[2]=_*w+g*M+m*U+p*W,s[6]=_*E+g*P+m*H+p*Q,s[10]=_*C+g*L+m*k+p*D,s[14]=_*y+g*N+m*z+p*te,s[3]=v*w+S*M+x*U+b*W,s[7]=v*E+S*P+x*H+b*Q,s[11]=v*C+S*L+x*k+b*D,s[15]=v*y+S*N+x*z+b*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15],v=l*f-c*d,S=a*f-c*h,x=a*d-l*h,b=o*f-c*u,w=o*d-l*u,E=o*h-a*u;return t*(g*v-m*S+p*x)-n*(_*v-m*b+p*w)+i*(_*S-g*b+p*E)-s*(_*x-g*w+m*E)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],v=h*m*c-g*d*c+g*l*f-a*m*f-h*l*p+a*d*p,S=_*d*c-u*m*c-_*l*f+o*m*f+u*l*p-o*d*p,x=u*g*c-_*h*c+_*a*f-o*g*f-u*a*p+o*h*p,b=_*h*l-u*g*l-_*a*d+o*g*d+u*a*m-o*h*m,w=t*v+n*S+i*x+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=v*E,e[1]=(g*d*s-h*m*s-g*i*f+n*m*f+h*i*p-n*d*p)*E,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*E,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*f-n*l*f)*E,e[4]=S*E,e[5]=(u*m*s-_*d*s+_*i*f-t*m*f-u*i*p+t*d*p)*E,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*p-t*l*p)*E,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*f+t*l*f)*E,e[8]=x*E,e[9]=(_*h*s-u*g*s-_*n*f+t*g*f+u*n*p-t*h*p)*E,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*E,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*f-t*a*f)*E,e[12]=b*E,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*m+t*h*m)*E,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*E,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,_=s*h,g=o*u,m=o*h,p=a*h,v=l*c,S=l*u,x=l*h,b=n.x,w=n.y,E=n.z;return i[0]=(1-(g+p))*b,i[1]=(f+x)*b,i[2]=(_-S)*b,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(_+S)*E,i[9]=(m-v)*E,i[10]=(1-(d+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=go.set(i[0],i[1],i[2]).length();const o=go.set(i[4],i[5],i[6]).length(),a=go.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Gi.copy(this);const c=1/s,u=1/o,h=1/a;return Gi.elements[0]*=c,Gi.elements[1]*=c,Gi.elements[2]*=c,Gi.elements[4]*=u,Gi.elements[5]*=u,Gi.elements[6]*=u,Gi.elements[8]*=h,Gi.elements[9]*=h,Gi.elements[10]*=h,t.setFromRotationMatrix(Gi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=cr,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let _,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===cr)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ic)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=cr,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let _,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===cr)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===Ic)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const go=new F,Gi=new nt,$v=new F(0,0,0),jv=new F(1,1,1),Jr=new F,Nl=new F,mi=new F,lp=new nt,cp=new gr;class _r{constructor(e=0,t=0,n=0,i=_r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cp.setFromEuler(this),this.setFromQuaternion(cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_r.DEFAULT_ORDER="XYZ";class Rg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kv=0;const up=new F,_o=new gr,Er=new nt,Ol=new F,ba=new F,Zv=new F,Jv=new gr,hp=new F(1,0,0),dp=new F(0,1,0),fp=new F(0,0,1),pp={type:"added"},Qv={type:"removed"},vo={type:"childadded",child:null},bu={type:"childremoved",child:null};class Gt extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new F,t=new _r,n=new gr,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new et}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(hp,e)}rotateY(e){return this.rotateOnAxis(dp,e)}rotateZ(e){return this.rotateOnAxis(fp,e)}translateOnAxis(e,t){return up.copy(e).applyQuaternion(this.quaternion),this.position.add(up.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hp,e)}translateY(e){return this.translateOnAxis(dp,e)}translateZ(e){return this.translateOnAxis(fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ol.copy(e):Ol.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(ba,Ol,this.up):Er.lookAt(Ol,ba,this.up),this.quaternion.setFromRotationMatrix(Er),i&&(Er.extractRotation(i.matrixWorld),_o.setFromRotationMatrix(Er),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pp),vo.child=e,this.dispatchEvent(vo),vo.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qv),bu.child=e,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pp),vo.child=e,this.dispatchEvent(vo),vo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,Zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,Jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Gt.DEFAULT_UP=new F(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new F,Ar=new F,Tu=new F,Cr=new F,xo=new F,yo=new F,mp=new F,wu=new F,Eu=new F,Au=new F,Cu=new Ft,Ru=new Ft,Pu=new Ft;class ji{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wi.subVectors(e,t),i.cross(Wi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Wi.subVectors(i,t),Ar.subVectors(n,t),Tu.subVectors(e,t);const o=Wi.dot(Wi),a=Wi.dot(Ar),l=Wi.dot(Tu),c=Ar.dot(Ar),u=Ar.dot(Tu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Cr)===null?!1:Cr.x>=0&&Cr.y>=0&&Cr.x+Cr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cr.x),l.addScaledVector(o,Cr.y),l.addScaledVector(a,Cr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Cu.setScalar(0),Ru.setScalar(0),Pu.setScalar(0),Cu.fromBufferAttribute(e,t),Ru.fromBufferAttribute(e,n),Pu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Cu,s.x),o.addScaledVector(Ru,s.y),o.addScaledVector(Pu,s.z),o}static isFrontFacing(e,t,n,i){return Wi.subVectors(n,t),Ar.subVectors(e,t),Wi.cross(Ar).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),Ar.subVectors(this.a,this.b),Wi.cross(Ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ji.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ji.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;xo.subVectors(i,n),yo.subVectors(s,n),wu.subVectors(e,n);const l=xo.dot(wu),c=yo.dot(wu);if(l<=0&&c<=0)return t.copy(n);Eu.subVectors(e,i);const u=xo.dot(Eu),h=yo.dot(Eu);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(xo,o);Au.subVectors(e,s);const f=xo.dot(Au),_=yo.dot(Au);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(yo,a);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return mp.subVectors(s,i),a=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(mp,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(xo,o).addScaledVector(yo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Lu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=nf(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Lu(o,s,e+1/3),this.g=Lu(o,s,e),this.b=Lu(o,s,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=wn){function n(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){const n=Pg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return dt.workingToColorSpace(Pn.copy(this),e),Math.round(rt(Pn.r*255,0,255))*65536+Math.round(rt(Pn.g*255,0,255))*256+Math.round(rt(Pn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Pn.copy(this),t);const n=Pn.r,i=Pn.g,s=Pn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=wn){dt.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,n=Pn.g,i=Pn.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Qr),this.setHSL(Qr.h+e,Qr.s+t,Qr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qr),e.getHSL(Ul);const n=Ya(Qr.h,Ul.h,t),i=Ya(Qr.s,Ul.s,t),s=Ya(Qr.l,Ul.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new $e;$e.NAMES=Pg;let ex=0;class Zi extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=ko,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Sh,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ko&&(n.blending=this.blending),this.side!==Hr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yh&&(n.blendSrc=this.blendSrc),this.blendDst!==Sh&&(n.blendDst=this.blendDst),this.blendEquation!==zs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$o&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==uo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==uo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==uo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gs extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.combine=ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new F,Fl=new Be;let tx=0;class Kn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ud,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fl.fromBufferAttribute(this,t),Fl.applyMatrix3(e),this.setXY(t,Fl.x,Fl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ud&&(e.usage=this.usage),e}}class Lg extends Kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dg extends Kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nn extends Kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nx=0;const Li=new nt,Du=new Gt,So=new F,gi=new Vt,Ta=new Vt,mn=new F;class Qn extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ag(e)?Dg:Lg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,n){return Li.makeTranslation(e,t,n),this.applyMatrix4(Li),this}scale(e,t,n){return Li.makeScale(e,t,n),this.applyMatrix4(Li),this}lookAt(e){return Du.lookAt(e),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ta.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(gi.min,Ta.min),gi.expandByPoint(mn),mn.addVectors(gi.max,Ta.max),gi.expandByPoint(mn)):(gi.expandByPoint(Ta.min),gi.expandByPoint(Ta.max))}gi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)mn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(mn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mn.fromBufferAttribute(a,c),l&&(So.fromBufferAttribute(e,c),mn.add(So)),i=Math.max(i,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new F,l[C]=new F;const c=new F,u=new F,h=new F,d=new Be,f=new Be,_=new Be,g=new F,m=new F;function p(C,y,M){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,y),_.fromBufferAttribute(s,M),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),a[C].add(g),a[y].add(g),a[M].add(g),l[C].add(m),l[y].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,y=v.length;C<y;++C){const M=v[C],P=M.start,L=M.count;for(let N=P,U=P+L;N<U;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const S=new F,x=new F,b=new F,w=new F;function E(C){b.fromBufferAttribute(i,C),w.copy(b);const y=a[C];S.copy(y),S.sub(b.multiplyScalar(b.dot(y))).normalize(),x.crossVectors(w,y);const P=x.dot(l[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,P)}for(let C=0,y=v.length;C<y;++C){const M=v[C],P=M.start,L=M.count;for(let N=P,U=P+L;N<U;N+=3)E(e.getX(N+0)),E(e.getX(N+1)),E(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new Kn(d,u,h)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gp=new nt,Cs=new wl,Bl=new yr,_p=new F,kl=new F,zl=new F,Vl=new F,Iu=new F,Hl=new F,vp=new F,Gl=new F;class At extends Gt{constructor(e=new Qn,t=new Gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Iu.fromBufferAttribute(h,e),o?Hl.addScaledVector(Iu,u):Hl.addScaledVector(Iu.sub(t),u))}t.add(Hl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(s),Cs.copy(e.ray).recast(e.near),!(Bl.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Bl,_p)===null||Cs.origin.distanceToSquared(_p)>(e.far-e.near)**2))&&(gp.copy(s).invert(),Cs.copy(e.ray).applyMatrix4(gp),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,b=S;x<b;x+=3){const w=a.getX(x),E=a.getX(x+1),C=a.getX(x+2);i=Wl(this,p,e,n,c,u,h,w,E,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=Wl(this,o,e,n,c,u,h,v,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,b=S;x<b;x+=3){const w=x,E=x+1,C=x+2;i=Wl(this,p,e,n,c,u,h,w,E,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const v=m,S=m+1,x=m+2;i=Wl(this,o,e,n,c,u,h,v,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ix(r,e,t,n,i,s,o,a){let l;if(e.side===oi?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Hr,a),l===null)return null;Gl.copy(a),Gl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Gl);return c<t.near||c>t.far?null:{distance:c,point:Gl.clone(),object:r}}function Wl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,kl),r.getVertexPosition(l,zl),r.getVertexPosition(c,Vl);const u=ix(r,e,t,n,kl,zl,Vl,vp);if(u){const h=new F;ji.getBarycoord(vp,kl,zl,Vl,h),i&&(u.uv=ji.getInterpolatedAttribute(i,a,l,c,h,new Be)),s&&(u.uv1=ji.getInterpolatedAttribute(s,a,l,c,h,new Be)),o&&(u.normal=ji.getInterpolatedAttribute(o,a,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new F,materialIndex:0};ji.getNormal(kl,zl,Vl,d.normal),u.face=d,u.barycoord=h}return u}class _s extends Qn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(h,2));function _(g,m,p,v,S,x,b,w,E,C,y){const M=x/E,P=b/C,L=x/2,N=b/2,U=w/2,H=E+1,k=C+1;let z=0,W=0;const Q=new F;for(let D=0;D<k;D++){const te=D*P-N;for(let Ae=0;Ae<H;Ae++){const Ce=Ae*M-L;Q[g]=Ce*v,Q[m]=te*S,Q[p]=U,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[p]=w>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(Ae/E),h.push(1-D/C),z+=1}}for(let D=0;D<C;D++)for(let te=0;te<E;te++){const Ae=d+te+H*D,Ce=d+te+H*(D+1),Pe=d+(te+1)+H*(D+1),ze=d+(te+1)+H*D;l.push(Ae,Ce,ze),l.push(Ce,Pe,ze),W+=6}a.addGroup(f,W,y),f+=W,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gn(r){const e={};for(let t=0;t<r.length;t++){const n=Qo(r[t]);for(const i in n)e[i]=n[i]}return e}function rx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ig(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const sx={clone:Qo,merge:Gn};var ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ax=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ox,this.fragmentShader=ax,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qo(e.uniforms),this.uniformsGroups=rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tu extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=cr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new F,xp=new Be,yp=new Be;class yn extends tu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,xp,yp),t.subVectors(yp,xp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mo=-90,bo=1;class lx extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yn(Mo,bo,e,t);i.layers=this.layers,this.add(i);const s=new yn(Mo,bo,e,t);s.layers=this.layers,this.add(s);const o=new yn(Mo,bo,e,t);o.layers=this.layers,this.add(o);const a=new yn(Mo,bo,e,t);a.layers=this.layers,this.add(a);const l=new yn(Mo,bo,e,t);l.layers=this.layers,this.add(l);const c=new yn(Mo,bo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===cr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ic)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ng extends Mn{constructor(e=[],t=no,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Og extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ng(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _s(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:Qo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:oi,blending:kr});s.uniforms.tEquirect.value=t;const o=new At(i,s),a=t.minFilter;return t.minFilter===Ur&&(t.minFilter=un),new lx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Sn extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cx={type:"move"};class Nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fa extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _r,this.environmentIntensity=1,this.environmentRotation=new _r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ux{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ud,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new F;class sf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$i(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Nc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Kn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new sf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Nc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sp=new F,Mp=new Ft,bp=new Ft,hx=new F,Tp=new nt,Xl=new F,Ou=new yr,wp=new nt,Uu=new wl;class dx extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zf,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xl),this.boundingBox.expandByPoint(Xl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xl),this.boundingSphere.expandByPoint(Xl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ou.copy(this.boundingSphere),Ou.applyMatrix4(i),e.ray.intersectsSphere(Ou)!==!1&&(wp.copy(i).invert(),Uu.copy(e.ray).applyMatrix4(wp),!(this.boundingBox!==null&&Uu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ft,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hv?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ne("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Mp.fromBufferAttribute(i.attributes.skinIndex,e),bp.fromBufferAttribute(i.attributes.skinWeight,e),Sp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=bp.getComponent(s);if(o!==0){const a=Mp.getComponent(s);Tp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(hx.copy(Sp).applyMatrix4(Tp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ug extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class of extends Mn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=cn,u=cn,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ep=new nt,fx=new nt;class af{constructor(e=[],t=[]){this.uuid=Ki(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ne("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:fx;Ep.multiplyMatrices(a,t[s]),Ep.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new af(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new of(t,e,e,Bi,Fi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(Ne("Skeleton: No bone found with UUID:",s),o=new Ug),this.bones.push(o),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class hd extends Kn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const To=new nt,Ap=new nt,Yl=[],Cp=new Vt,px=new nt,wa=new At,Ea=new yr;class mx extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,px)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,To),Cp.copy(e.boundingBox).applyMatrix4(To),this.boundingBox.union(Cp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,To),Ea.copy(e.boundingSphere).applyMatrix4(To),this.boundingSphere.union(Ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(wa.geometry=this.geometry,wa.material=this.material,wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(n),e.ray.intersectsSphere(Ea)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,To),Ap.multiplyMatrices(n,To),wa.matrixWorld=Ap,wa.raycast(e,Yl);for(let o=0,a=Yl.length;o<a;o++){const l=Yl[o];l.instanceId=s,l.object=this,t.push(l)}Yl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new of(new Float32Array(i*this.count),i,this.count,jd,Fi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fu=new F,gx=new F,_x=new et;class rs{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Fu.subVectors(n,t).cross(gx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_x.getNormalMatrix(e),i=this.coplanarPoint(Fu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new yr,vx=new Be(.5,.5),ql=new F;class lf{constructor(e=new rs,t=new rs,n=new rs,i=new rs,s=new rs,o=new rs){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cr,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],v=s[12],S=s[13],x=s[14],b=s[15];if(i[0].setComponents(c-o,f-u,p-_,b-v).normalize(),i[1].setComponents(c+o,f+u,p+_,b+v).normalize(),i[2].setComponents(c+a,f+h,p+g,b+S).normalize(),i[3].setComponents(c-a,f-h,p-g,b-S).normalize(),n)i[4].setComponents(l,d,m,x).normalize(),i[5].setComponents(c-l,f-d,p-m,b-x).normalize();else if(i[4].setComponents(c-l,f-d,p-m,b-x).normalize(),t===cr)i[5].setComponents(c+l,f+d,p+m,b+x).normalize();else if(t===Ic)i[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);const t=vx.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ql.x=i.normal.x>0?e.max.x:e.min.x,ql.y=i.normal.y>0?e.max.y:e.min.y,ql.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fg extends Zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oc=new F,Uc=new F,Rp=new nt,Aa=new wl,$l=new yr,Bu=new F,Pp=new F;class cf extends Gt{constructor(e=new Qn,t=new Fg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Oc.fromBufferAttribute(t,i-1),Uc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Oc.distanceTo(Uc);e.setAttribute("lineDistance",new nn(n,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(i),$l.radius+=s,e.ray.intersectsSphere($l)===!1)return;Rp.copy(i).invert(),Aa.copy(e.ray).applyMatrix4(Rp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){const p=u.getX(g),v=u.getX(g+1),S=jl(this,e,Aa,l,p,v,g);S&&t.push(S)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(f),p=jl(this,e,Aa,l,g,m,_-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){const p=jl(this,e,Aa,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=jl(this,e,Aa,l,_-1,f,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jl(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Oc.fromBufferAttribute(a,i),Uc.fromBufferAttribute(a,s),t.distanceSqToSegment(Oc,Uc,Bu,Pp)>n)return;Bu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Bu);if(!(c<e.near||c>e.far))return{distance:c,point:Pp.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Lp=new F,Dp=new F;class xx extends cf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Lp.fromBufferAttribute(t,i),Dp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Lp.distanceTo(Dp);e.setAttribute("lineDistance",new nn(n,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yx extends cf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Bg extends Zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ip=new nt,dd=new wl,Kl=new yr,Zl=new F;class Sx extends Gt{constructor(e=new Qn,t=new Bg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kl.copy(n.boundingSphere),Kl.applyMatrix4(i),Kl.radius+=s,e.ray.intersectsSphere(Kl)===!1)return;Ip.copy(i).invert(),dd.copy(e.ray).applyMatrix4(Ip);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);Zl.fromBufferAttribute(h,m),Np(Zl,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=d,g=f;_<g;_++)Zl.fromBufferAttribute(h,_),Np(Zl,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Np(r,e,t,n,i,s,o){const a=dd.distanceSqToPoint(r);if(a<t){const l=new F;dd.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class pl extends Mn{constructor(e,t,n=mr,i,s,o,a=cn,l=cn,c,u=Wr,h=1){if(u!==Wr&&u!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mx extends pl{constructor(e,t=mr,n=no,i,s,o=cn,a=cn,l,c=Wr){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kg extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fc extends Qn{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let _=0;const g=[],m=n/2;let p=0;v(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new nn(h,3)),this.setAttribute("normal",new nn(d,3)),this.setAttribute("uv",new nn(f,2));function v(){const x=new F,b=new F;let w=0;const E=(t-e)/n;for(let C=0;C<=s;C++){const y=[],M=C/s,P=M*(t-e)+e;for(let L=0;L<=i;L++){const N=L/i,U=N*l+a,H=Math.sin(U),k=Math.cos(U);b.x=P*H,b.y=-M*n+m,b.z=P*k,h.push(b.x,b.y,b.z),x.set(H,E,k).normalize(),d.push(x.x,x.y,x.z),f.push(N,1-M),y.push(_++)}g.push(y)}for(let C=0;C<i;C++)for(let y=0;y<s;y++){const M=g[y][C],P=g[y+1][C],L=g[y+1][C+1],N=g[y][C+1];(e>0||y!==0)&&(u.push(M,P,N),w+=3),(t>0||y!==s-1)&&(u.push(P,L,N),w+=3)}c.addGroup(p,w,0),p+=w}function S(x){const b=_,w=new Be,E=new F;let C=0;const y=x===!0?e:t,M=x===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),_++;const P=_;for(let L=0;L<=i;L++){const U=L/i*l+a,H=Math.cos(U),k=Math.sin(U);E.x=y*k,E.y=m*M,E.z=y*H,h.push(E.x,E.y,E.z),d.push(0,M,0),w.x=H*.5+.5,w.y=k*.5*M+.5,f.push(w.x,w.y),_++}for(let L=0;L<i;L++){const N=b+L,U=P+L;x===!0?u.push(U,U+1,N):u.push(U+1,U,N),C+=3}c.addGroup(p,C,x===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uf extends Qn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new nn(s,3)),this.setAttribute("normal",new nn(s.slice(),3)),this.setAttribute("uv",new nn(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const S=new F,x=new F,b=new F;for(let w=0;w<t.length;w+=3)f(t[w+0],S),f(t[w+1],x),f(t[w+2],b),l(S,x,b,v)}function l(v,S,x,b){const w=b+1,E=[];for(let C=0;C<=w;C++){E[C]=[];const y=v.clone().lerp(x,C/w),M=S.clone().lerp(x,C/w),P=w-C;for(let L=0;L<=P;L++)L===0&&C===w?E[C][L]=y:E[C][L]=y.clone().lerp(M,L/P)}for(let C=0;C<w;C++)for(let y=0;y<2*(w-C)-1;y++){const M=Math.floor(y/2);y%2===0?(d(E[C][M+1]),d(E[C+1][M]),d(E[C][M])):(d(E[C][M+1]),d(E[C+1][M+1]),d(E[C+1][M]))}}function c(v){const S=new F;for(let x=0;x<s.length;x+=3)S.x=s[x+0],S.y=s[x+1],S.z=s[x+2],S.normalize().multiplyScalar(v),s[x+0]=S.x,s[x+1]=S.y,s[x+2]=S.z}function u(){const v=new F;for(let S=0;S<s.length;S+=3){v.x=s[S+0],v.y=s[S+1],v.z=s[S+2];const x=m(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;o.push(x,1-b)}_(),h()}function h(){for(let v=0;v<o.length;v+=6){const S=o[v+0],x=o[v+2],b=o[v+4],w=Math.max(S,x,b),E=Math.min(S,x,b);w>.9&&E<.1&&(S<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,S){const x=v*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function _(){const v=new F,S=new F,x=new F,b=new F,w=new Be,E=new Be,C=new Be;for(let y=0,M=0;y<s.length;y+=9,M+=6){v.set(s[y+0],s[y+1],s[y+2]),S.set(s[y+3],s[y+4],s[y+5]),x.set(s[y+6],s[y+7],s[y+8]),w.set(o[M+0],o[M+1]),E.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),b.copy(v).add(S).add(x).divideScalar(3);const P=m(b);g(w,M+0,v,P),g(E,M+2,S,P),g(C,M+4,x,P)}}function g(v,S,x,b){b<0&&v.x===1&&(o[S]=v.x-1),x.x===0&&x.z===0&&(o[S]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.vertices,e.indices,e.radius,e.detail)}}class hf extends uf{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hf(e.radius,e.detail)}}class qr extends Qn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const v=p*d-o;for(let S=0;S<c;S++){const x=S*h-s;_.push(x,-v,0),g.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const S=v+c*p,x=v+c*(p+1),b=v+1+c*(p+1),w=v+1+c*p;f.push(S,x,w),f.push(x,b,w)}this.setIndex(f),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(g,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.widthSegments,e.heightSegments)}}class df extends Qn{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new F,h=new F,d=new F;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*s,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(g),h.y=(e+t*Math.cos(m))*Math.sin(g),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,v=(i+1)*f+_;o.push(g,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new nn(a,3)),this.setAttribute("normal",new nn(l,3)),this.setAttribute("uv",new nn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class bx extends Jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bs extends Zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qd,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sr extends bs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tx extends Zi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qd,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class wx extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ex extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Jl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ax(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Op(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function zg(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class El{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cx extends El{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jf,endingEnd:Jf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qf:s=e,a=2*t-n;break;case ep:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qf:o=e,l=2*n-t;break;case ep:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,S=(-1-f)*m+(1.5+f)*g+.5*_,x=f*m-f*g;for(let b=0;b!==a;++b)s[b]=p*o[u+b]+v*o[c+b]+S*o[l+b]+x*o[h+b];return s}}class Rx extends El{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class Px extends El{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Qi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jl(t,this.TimeBufferType),this.values=Jl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Jl(e.times,Array),values:Jl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Px(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ul:t=this.InterpolantFactoryMethodDiscrete;break;case hl:t=this.InterpolantFactoryMethodLinear;break;case fu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ul;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return fu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ye("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Mv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Qi.prototype.ValueTypeName="";Qi.prototype.TimeBufferType=Float32Array;Qi.prototype.ValueBufferType=Float32Array;Qi.prototype.DefaultInterpolation=hl;class pa extends Qi{constructor(e,t,n){super(e,t,n)}}pa.prototype.ValueTypeName="bool";pa.prototype.ValueBufferType=Array;pa.prototype.DefaultInterpolation=ul;pa.prototype.InterpolantFactoryMethodLinear=void 0;pa.prototype.InterpolantFactoryMethodSmooth=void 0;class Vg extends Qi{constructor(e,t,n,i){super(e,t,n,i)}}Vg.prototype.ValueTypeName="color";class ea extends Qi{constructor(e,t,n,i){super(e,t,n,i)}}ea.prototype.ValueTypeName="number";class Lx extends El{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)gr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ta extends Qi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Lx(this.times,this.values,this.getValueSize(),e)}}ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;class ma extends Qi{constructor(e,t,n){super(e,t,n)}}ma.prototype.ValueTypeName="string";ma.prototype.ValueBufferType=Array;ma.prototype.DefaultInterpolation=ul;ma.prototype.InterpolantFactoryMethodLinear=void 0;ma.prototype.InterpolantFactoryMethodSmooth=void 0;class na extends Qi{constructor(e,t,n,i){super(e,t,n,i)}}na.prototype.ValueTypeName="vector";class Dx{constructor(e="",t=-1,n=[],i=dv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ki(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Nx(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Qi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Ax(l);l=Op(l,1,u),c=Op(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ea(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(Ne("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ye("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,_,g){if(f.length!==0){const m=[],p=[];zg(f,m,p,_),m.length!==0&&g.push(new h(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let v=0;v!==d[_].morphTargets.length;++v){const S=d[_];m.push(S.time),p.push(S.morphTarget===g?1:0)}i.push(new ea(".morphTargetInfluence["+g+"]",m,p))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(na,f+".position",d,"pos",i),n(ta,f+".quaternion",d,"rot",i),n(na,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Ix(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ea;case"vector":case"vector2":case"vector3":case"vector4":return na;case"color":return Vg;case"quaternion":return ta;case"bool":case"boolean":return pa;case"string":return ma}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Nx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ix(r.type);if(r.times===void 0){const t=[],n=[];zg(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Fr={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ox{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ux=new Ox;class ga{constructor(e){this.manager=e!==void 0?e:Ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ga.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rr={};class Fx extends Error{constructor(e,t){super(e),this.response=t}}class Hg extends ga{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Fr.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Rr[e]!==void 0){Rr[e].push({onLoad:t,onProgress:n,onError:i});return}Rr[e]=[],Rr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Rr[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:S,value:x})=>{if(S)p.close();else{g+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let w=0,E=u.length;w<E;w++){const C=u[w];C.onProgress&&C.onProgress(b)}p.enqueue(x),v()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Fx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Fr.add(`file:${e}`,c);const u=Rr[e];delete Rr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Rr[e];if(u===void 0)throw this.manager.itemError(e),c;delete Rr[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const wo=new WeakMap;class Bx extends ga{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=wo.get(o);h===void 0&&(h=[],wo.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=dl("img");function l(){u(),t&&t(this);const h=wo.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}wo.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),Fr.remove(`image:${e}`);const d=wo.get(this)||[];for(let f=0;f<d.length;f++){const _=d[f];_.onError&&_.onError(h)}wo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Fr.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class kx extends ga{constructor(e){super(e)}load(e,t,n,i){const s=new Mn,o=new Bx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class nu extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ku=new nt,Up=new F,Fp=new F;class ff{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lf,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Up.setFromMatrixPosition(e.matrixWorld),t.position.copy(Up),Fp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fp),t.updateMatrixWorld(),ku.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ku,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zx extends ff{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Jo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vx extends nu{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new zx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Hx extends ff{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}}class Gx extends nu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Hx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class iu extends tu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Wx extends ff{constructor(){super(new iu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ji extends nu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Wx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ru extends nu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class qa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const zu=new WeakMap;class Xx extends ga{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ne("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ne("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Fr.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(zu.has(o)===!0)i&&i(zu.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Fr.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),zu.set(l,c),Fr.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Fr.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Yx extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _a{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const pf="\\[\\]\\.:\\/",qx=new RegExp("["+pf+"]","g"),mf="[^"+pf+"]",$x="[^"+pf.replace("\\.","")+"]",jx=/((?:WC+[\/:])*)/.source.replace("WC",mf),Kx=/(WCOD+)?/.source.replace("WCOD",$x),Zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mf),Jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mf),Qx=new RegExp("^"+jx+Kx+Zx+Jx+"$"),ey=["material","materials","bones","map"];class ty{constructor(e,t,n){const i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qx,"")}static parseTrackName(e){const t=Qx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);ey.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=ty;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bp{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ny extends oo{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ne("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function kp(r,e,t,n){const i=iy(n);switch(t){case Tg:return r*e;case jd:return r*e/i.components*i.byteLength;case Kd:return r*e/i.components*i.byteLength;case Zo:return r*e*2/i.components*i.byteLength;case Zd:return r*e*2/i.components*i.byteLength;case wg:return r*e*3/i.components*i.byteLength;case Bi:return r*e*4/i.components*i.byteLength;case Jd:return r*e*4/i.components*i.byteLength;case _c:case vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xc:case yc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Nh:return Math.max(r,16)*Math.max(e,8)/4;case Lh:case Ih:return Math.max(r,8)*Math.max(e,8)/2;case Oh:case Uh:case Bh:case kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Fh:case zh:case Vh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case qh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ed:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case td:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case nd:case id:case rd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case sd:case od:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ad:case ld:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iy(r){switch(r){case Si:case yg:return{byteLength:1,components:1};case ll:case Sg:case Gr:return{byteLength:2,components:1};case qd:case $d:return{byteLength:2,components:4};case mr:case Yd:case Fi:return{byteLength:4,components:1};case Mg:case bg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xd}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xd);function Gg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ry(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oy=`#ifdef USE_ALPHAHASH
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
#endif`,ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hy=`#ifdef USE_AOMAP
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
#endif`,dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fy=`#ifdef USE_BATCHING
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
#endif`,py=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,my=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_y=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vy=`#ifdef USE_IRIDESCENCE
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
#endif`,xy=`#ifdef USE_BUMPMAP
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
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cy=`#define PI 3.141592653589793
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
} // validated`,Ry=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Py=`vec3 transformedNormal = objectNormal;
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
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fy=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yy=`#ifdef USE_GRADIENTMAP
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
}`,qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$y=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ky=`uniform bool receiveShadow;
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
#endif`,Zy=`#ifdef USE_ENVMAP
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
#endif`,Jy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nS=`PhysicalMaterial material;
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
#endif`,iS=`uniform sampler2D dfgLUT;
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
}`,rS=`
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
#endif`,sS=`#if defined( RE_IndirectDiffuse )
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
#endif`,oS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pS=`#if defined( USE_POINTS_UV )
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
#endif`,mS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_S=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yS=`#ifdef USE_MORPHTARGETS
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
#endif`,SS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ES=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AS=`#ifdef USE_NORMALMAP
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
#endif`,CS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,US=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GS=`float getShadowMask() {
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
}`,WS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XS=`#ifdef USE_SKINNING
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
#endif`,YS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qS=`#ifdef USE_SKINNING
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
#endif`,$S=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JS=`#ifdef USE_TRANSMISSION
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
#endif`,QS=`#ifdef USE_TRANSMISSION
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sM=`uniform sampler2D t2D;
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`#include <common>
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
}`,hM=`#if DEPTH_PACKING == 3200
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
}`,dM=`#define DISTANCE
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
}`,fM=`#define DISTANCE
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`uniform float scale;
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
}`,_M=`uniform vec3 diffuse;
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
}`,vM=`#include <common>
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
}`,xM=`uniform vec3 diffuse;
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
}`,yM=`#define LAMBERT
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
}`,SM=`#define LAMBERT
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
}`,MM=`#define MATCAP
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
}`,bM=`#define MATCAP
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
}`,TM=`#define NORMAL
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
}`,wM=`#define NORMAL
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
}`,EM=`#define PHONG
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
}`,AM=`#define PHONG
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
}`,CM=`#define STANDARD
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
}`,RM=`#define STANDARD
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
}`,PM=`#define TOON
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
}`,LM=`#define TOON
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
}`,DM=`uniform float size;
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
}`,IM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,OM=`uniform vec3 color;
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
}`,UM=`uniform float rotation;
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
}`,FM=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:sy,alphahash_pars_fragment:oy,alphamap_fragment:ay,alphamap_pars_fragment:ly,alphatest_fragment:cy,alphatest_pars_fragment:uy,aomap_fragment:hy,aomap_pars_fragment:dy,batching_pars_vertex:fy,batching_vertex:py,begin_vertex:my,beginnormal_vertex:gy,bsdfs:_y,iridescence_fragment:vy,bumpmap_pars_fragment:xy,clipping_planes_fragment:yy,clipping_planes_pars_fragment:Sy,clipping_planes_pars_vertex:My,clipping_planes_vertex:by,color_fragment:Ty,color_pars_fragment:wy,color_pars_vertex:Ey,color_vertex:Ay,common:Cy,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Py,displacementmap_pars_vertex:Ly,displacementmap_vertex:Dy,emissivemap_fragment:Iy,emissivemap_pars_fragment:Ny,colorspace_fragment:Oy,colorspace_pars_fragment:Uy,envmap_fragment:Fy,envmap_common_pars_fragment:By,envmap_pars_fragment:ky,envmap_pars_vertex:zy,envmap_physical_pars_fragment:Zy,envmap_vertex:Vy,fog_vertex:Hy,fog_pars_vertex:Gy,fog_fragment:Wy,fog_pars_fragment:Xy,gradientmap_pars_fragment:Yy,lightmap_pars_fragment:qy,lights_lambert_fragment:$y,lights_lambert_pars_fragment:jy,lights_pars_begin:Ky,lights_toon_fragment:Jy,lights_toon_pars_fragment:Qy,lights_phong_fragment:eS,lights_phong_pars_fragment:tS,lights_physical_fragment:nS,lights_physical_pars_fragment:iS,lights_fragment_begin:rS,lights_fragment_maps:sS,lights_fragment_end:oS,logdepthbuf_fragment:aS,logdepthbuf_pars_fragment:lS,logdepthbuf_pars_vertex:cS,logdepthbuf_vertex:uS,map_fragment:hS,map_pars_fragment:dS,map_particle_fragment:fS,map_particle_pars_fragment:pS,metalnessmap_fragment:mS,metalnessmap_pars_fragment:gS,morphinstance_vertex:_S,morphcolor_vertex:vS,morphnormal_vertex:xS,morphtarget_pars_vertex:yS,morphtarget_vertex:SS,normal_fragment_begin:MS,normal_fragment_maps:bS,normal_pars_fragment:TS,normal_pars_vertex:wS,normal_vertex:ES,normalmap_pars_fragment:AS,clearcoat_normal_fragment_begin:CS,clearcoat_normal_fragment_maps:RS,clearcoat_pars_fragment:PS,iridescence_pars_fragment:LS,opaque_fragment:DS,packing:IS,premultiplied_alpha_fragment:NS,project_vertex:OS,dithering_fragment:US,dithering_pars_fragment:FS,roughnessmap_fragment:BS,roughnessmap_pars_fragment:kS,shadowmap_pars_fragment:zS,shadowmap_pars_vertex:VS,shadowmap_vertex:HS,shadowmask_pars_fragment:GS,skinbase_vertex:WS,skinning_pars_vertex:XS,skinning_vertex:YS,skinnormal_vertex:qS,specularmap_fragment:$S,specularmap_pars_fragment:jS,tonemapping_fragment:KS,tonemapping_pars_fragment:ZS,transmission_fragment:JS,transmission_pars_fragment:QS,uv_pars_fragment:eM,uv_pars_vertex:tM,uv_vertex:nM,worldpos_vertex:iM,background_vert:rM,background_frag:sM,backgroundCube_vert:oM,backgroundCube_frag:aM,cube_vert:lM,cube_frag:cM,depth_vert:uM,depth_frag:hM,distance_vert:dM,distance_frag:fM,equirect_vert:pM,equirect_frag:mM,linedashed_vert:gM,linedashed_frag:_M,meshbasic_vert:vM,meshbasic_frag:xM,meshlambert_vert:yM,meshlambert_frag:SM,meshmatcap_vert:MM,meshmatcap_frag:bM,meshnormal_vert:TM,meshnormal_frag:wM,meshphong_vert:EM,meshphong_frag:AM,meshphysical_vert:CM,meshphysical_frag:RM,meshtoon_vert:PM,meshtoon_frag:LM,points_vert:DM,points_frag:IM,shadow_vert:NM,shadow_frag:OM,sprite_vert:UM,sprite_frag:FM},ve={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},sr={basic:{uniforms:Gn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Gn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new $e(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Gn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Gn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Gn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new $e(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Gn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Gn([ve.points,ve.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Gn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Gn([ve.common,ve.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Gn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Gn([ve.sprite,ve.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Gn([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Gn([ve.lights,ve.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};sr.physical={uniforms:Gn([sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Ql={r:0,b:0,g:0},Ps=new _r,BM=new nt;function kM(r,e,t,n,i,s,o){const a=new $e(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function g(S){let x=!1;const b=_(S);b===null?p(a,l):b&&b.isColor&&(p(b,1),x=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,x){const b=_(x);b&&(b.isCubeTexture||b.mapping===eu)?(u===void 0&&(u=new At(new _s(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Qo(sr.backgroundCube.uniforms),vertexShader:sr.backgroundCube.vertexShader,fragmentShader:sr.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ps.copy(x.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(BM.makeRotationFromEuler(Ps)),u.material.toneMapped=dt.getTransfer(b.colorSpace)!==Mt,(h!==b||d!==b.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,f=r.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new At(new qr(2,2),new Jn({name:"BackgroundMaterial",uniforms:Qo(sr.background.uniforms),vertexShader:sr.background.vertexShader,fragmentShader:sr.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=dt.getTransfer(b.colorSpace)!==Mt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,f=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(Ql,Ig(r)),n.buffers.color.setClear(Ql.r,Ql.g,Ql.b,x,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:g,addToRenderList:m,dispose:v}}function zM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,P,L,N,U){let H=!1;const k=h(N,L,P);s!==k&&(s=k,c(s.object)),H=f(M,N,L,U),H&&_(M,N,L,U),U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(M,P,L,N),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function u(M){return r.deleteVertexArray(M)}function h(M,P,L){const N=L.wireframe===!0;let U=n[M.id];U===void 0&&(U={},n[M.id]=U);let H=U[P.id];H===void 0&&(H={},U[P.id]=H);let k=H[N];return k===void 0&&(k=d(l()),H[N]=k),k}function d(M){const P=[],L=[],N=[];for(let U=0;U<t;U++)P[U]=0,L[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,P,L,N){const U=s.attributes,H=P.attributes;let k=0;const z=L.getAttributes();for(const W in z)if(z[W].location>=0){const D=U[W];let te=H[W];if(te===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),D===void 0||D.attribute!==te||te&&D.data!==te.data)return!0;k++}return s.attributesNum!==k||s.index!==N}function _(M,P,L,N){const U={},H=P.attributes;let k=0;const z=L.getAttributes();for(const W in z)if(z[W].location>=0){let D=H[W];D===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(D=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(D=M.instanceColor));const te={};te.attribute=D,D&&D.data&&(te.data=D.data),U[W]=te,k++}s.attributes=U,s.attributesNum=k,s.index=N}function g(){const M=s.newAttributes;for(let P=0,L=M.length;P<L;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const L=s.newAttributes,N=s.enabledAttributes,U=s.attributeDivisors;L[M]=1,N[M]===0&&(r.enableVertexAttribArray(M),N[M]=1),U[M]!==P&&(r.vertexAttribDivisor(M,P),U[M]=P)}function v(){const M=s.newAttributes,P=s.enabledAttributes;for(let L=0,N=P.length;L<N;L++)P[L]!==M[L]&&(r.disableVertexAttribArray(L),P[L]=0)}function S(M,P,L,N,U,H,k){k===!0?r.vertexAttribIPointer(M,P,L,U,H):r.vertexAttribPointer(M,P,L,N,U,H)}function x(M,P,L,N){g();const U=N.attributes,H=L.getAttributes(),k=P.defaultAttributeValues;for(const z in H){const W=H[z];if(W.location>=0){let Q=U[z];if(Q===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const D=Q.normalized,te=Q.itemSize,Ae=e.get(Q);if(Ae===void 0)continue;const Ce=Ae.buffer,Pe=Ae.type,ze=Ae.bytesPerElement,K=Pe===r.INT||Pe===r.UNSIGNED_INT||Q.gpuType===Yd;if(Q.isInterleavedBufferAttribute){const J=Q.data,de=J.stride,Le=Q.offset;if(J.isInstancedInterleavedBuffer){for(let xe=0;xe<W.locationSize;xe++)p(W.location+xe,J.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xe=0;xe<W.locationSize;xe++)m(W.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let xe=0;xe<W.locationSize;xe++)S(W.location+xe,te/W.locationSize,Pe,D,de*ze,(Le+te/W.locationSize*xe)*ze,K)}else{if(Q.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)p(W.location+J,Q.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let J=0;J<W.locationSize;J++)m(W.location+J);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let J=0;J<W.locationSize;J++)S(W.location+J,te/W.locationSize,Pe,D,te*ze,te/W.locationSize*J*ze,K)}}else if(k!==void 0){const D=k[z];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(W.location,D);break;case 3:r.vertexAttrib3fv(W.location,D);break;case 4:r.vertexAttrib4fv(W.location,D);break;default:r.vertexAttrib1fv(W.location,D)}}}}v()}function b(){C();for(const M in n){const P=n[M];for(const L in P){const N=P[L];for(const U in N)u(N[U].object),delete N[U];delete P[L]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const L in P){const N=P[L];for(const U in N)u(N[U].object),delete N[U];delete P[L]}delete n[M.id]}function E(M){for(const P in n){const L=n[P];if(L[M.id]===void 0)continue;const N=L[M.id];for(const U in N)u(N[U].object),delete N[U];delete L[M.id]}}function C(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function VM(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function HM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Bi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===Gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Si&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Fi&&!C)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ne("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,maxSamples:b,samples:w}}function GM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new rs,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,S=v*4;let x=p.clippingState||null;l.value=x,x=u(_,d,S,f);for(let b=0;b!==S;++b)x[b]=t[b];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==g;++S,x+=4)o.copy(h[S]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function WM(r){let e=new WeakMap;function t(o,a){return a===Rh?o.mapping=no:a===Ph&&(o.mapping=jo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rh||a===Ph)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Og(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const os=4,zp=[.125,.215,.35,.446,.526,.582],Vs=20,XM=256,Ca=new iu,Vp=new $e;let Vu=null,Hu=0,Gu=0,Wu=!1;const YM=new F;class Hp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=YM}=s;Vu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vu,Hu,Gu),this._renderer.xr.enabled=Wu,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===no||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Gr,format:Bi,colorSpace:Zn,depthBuffer:!1},i=Gp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qM(s)),this._blurMaterial=jM(s,e,t),this._ggxMaterial=$M(s,e,t)}return i}_compileMaterial(e){const t=new At(new Qn,e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,n,i,s){const l=new yn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Vp),h.toneMapping=dr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new _s,new Gs({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(Vp),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const b=this._cubeSize;Eo(i,x*b,S>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(g,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===no||e.mapping===jo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());const s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Eo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ca)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:_}=this,g=this._sizeLods[n],m=3*g*(n>_-os?n-_+os:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=_-t,Eo(s,m,p,3*g,2*g),i.setRenderTarget(s),i.render(a,Ca),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Eo(e,m,p,3*g,2*g),i.setRenderTarget(e),i.render(a,Ca)}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Vs-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Vs;m>Vs&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vs}`);const p=[];let v=0;for(let E=0;E<Vs;++E){const C=E/g,y=Math.exp(-C*C/2);p.push(y),E===0?v+=y:E<m&&(v+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-n;const x=this._sizeLods[i],b=3*x*(i>S-os?i-S+os:0),w=4*(this._cubeSize-x);Eo(t,b,w,3*x,2*x),l.setRenderTarget(t),l.render(h,Ca)}}function qM(r){const e=[],t=[],n=[];let i=r;const s=r-os+1+zp.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-os?l=zp[o-r+os-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,v=new Float32Array(g*_*f),S=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,C=w>2?0:-1,y=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];v.set(y,g*_*w),S.set(d,m*_*w);const M=[w,w,w,w,w,w];x.set(M,p*_*w)}const b=new Qn;b.setAttribute("position",new Kn(v,g)),b.setAttribute("uv",new Kn(S,m)),b.setAttribute("faceIndex",new Kn(x,p)),n.push(new At(b,null)),i>os&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Gp(r,e,t){const n=new Fn(r,e,t);return n.texture.mapping=eu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function $M(r,e,t){return new Jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function jM(r,e,t){const n=new Float32Array(Vs),i=new F(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:su(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Wp(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Xp(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function su(){return`

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
	`}function KM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Rh||l===Ph,u=l===no||l===jo;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Hp(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Hp(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ZM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&fl("WebGLRenderer: "+n+" extension not supported."),i}}}function JM(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let S=0,x=v.length;S<x;S+=3){const b=v[S+0],w=v[S+1],E=v[S+2];d.push(b,w,w,E,E,b)}}else if(_!==void 0){const v=_.array;g=_.version;for(let S=0,x=v.length/3-1;S<x;S+=3){const b=S+0,w=S+1,E=S+2;d.push(b,w,w,E,E,b)}}else return;const m=new(Ag(d)?Dg:Lg)(d,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function QM(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*o,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function h(d,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let v=0;v<_;v++)p+=f[v]*g[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function eb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tb(r,e,t){const n=new WeakMap,i=new Ft;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let x=a.attributes.position.count*S,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const w=new Float32Array(x*b*4*h),E=new Cg(w,x,b,h);E.type=Fi,E.needsUpdate=!0;const C=S*4;for(let M=0;M<h;M++){const P=m[M],L=p[M],N=v[M],U=x*b*4*M;for(let H=0;H<P.count;H++){const k=H*C;f===!0&&(i.fromBufferAttribute(P,H),w[U+k+0]=i.x,w[U+k+1]=i.y,w[U+k+2]=i.z,w[U+k+3]=0),_===!0&&(i.fromBufferAttribute(L,H),w[U+k+4]=i.x,w[U+k+5]=i.y,w[U+k+6]=i.z,w[U+k+7]=0),g===!0&&(i.fromBufferAttribute(N,H),w[U+k+8]=i.x,w[U+k+9]=i.y,w[U+k+10]=i.z,w[U+k+11]=N.itemSize===4?i.w:1)}}d={count:h,texture:E,size:new Be(x,b)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function nb(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const ib={[hg]:"LINEAR_TONE_MAPPING",[dg]:"REINHARD_TONE_MAPPING",[fg]:"CINEON_TONE_MAPPING",[pg]:"ACES_FILMIC_TONE_MAPPING",[gg]:"AGX_TONE_MAPPING",[_g]:"NEUTRAL_TONE_MAPPING",[mg]:"CUSTOM_TONE_MAPPING"};function rb(r,e,t,n,i){const s=new Fn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new Fn(e,t,{type:Gr,depthBuffer:!1,stencilBuffer:!1}),a=new Qn;a.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new nn([0,2,0,0,2,0],2));const l=new bx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new At(a,l),u=new iu(-1,1,1,-1,0,1);let h=null,d=null,f=!1,_,g=null,m=[],p=!1;this.setSize=function(v,S){s.setSize(v,S),o.setSize(v,S);for(let x=0;x<m.length;x++){const b=m[x];b.setSize&&b.setSize(v,S)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const S=s.width,x=s.height;for(let b=0;b<m.length;b++){const w=m[b];w.setSize&&w.setSize(S,x)}},this.begin=function(v,S){if(f||v.toneMapping===dr&&m.length===0)return!1;if(g=S,S!==null){const x=S.width,b=S.height;(s.width!==x||s.height!==b)&&this.setSize(x,b)}return p===!1&&v.setRenderTarget(s),_=v.toneMapping,v.toneMapping=dr,!0},this.hasRenderPass=function(){return p},this.end=function(v,S){v.toneMapping=_,f=!0;let x=s,b=o;for(let w=0;w<m.length;w++){const E=m[w];if(E.enabled!==!1&&(E.render(v,b,x,S),E.needsSwap!==!1)){const C=x;x=b,b=C}}if(h!==v.outputColorSpace||d!==v.toneMapping){h=v.outputColorSpace,d=v.toneMapping,l.defines={},dt.getTransfer(h)===Mt&&(l.defines.SRGB_TRANSFER="");const w=ib[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(g),v.render(c,u),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Wg=new Mn,fd=new pl(1,1),Xg=new Cg,Yg=new Yv,qg=new Ng,Yp=[],qp=[],$p=new Float32Array(16),jp=new Float32Array(9),Kp=new Float32Array(4);function va(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Yp[i];if(s===void 0&&(s=new Float32Array(i),Yp[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function hn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function dn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ou(r,e){let t=qp[e];t===void 0&&(t=new Int32Array(e),qp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function sb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ob(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2fv(this.addr,e),dn(t,e)}}function ab(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;r.uniform3fv(this.addr,e),dn(t,e)}}function lb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4fv(this.addr,e),dn(t,e)}}function cb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;Kp.set(n),r.uniformMatrix2fv(this.addr,!1,Kp),dn(t,n)}}function ub(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;jp.set(n),r.uniformMatrix3fv(this.addr,!1,jp),dn(t,n)}}function hb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,n))return;$p.set(n),r.uniformMatrix4fv(this.addr,!1,$p),dn(t,n)}}function db(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function fb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2iv(this.addr,e),dn(t,e)}}function pb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3iv(this.addr,e),dn(t,e)}}function mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4iv(this.addr,e),dn(t,e)}}function gb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function _b(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2uiv(this.addr,e),dn(t,e)}}function vb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3uiv(this.addr,e),dn(t,e)}}function xb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4uiv(this.addr,e),dn(t,e)}}function yb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(fd.compareFunction=t.isReversedDepthBuffer()?tf:ef,s=fd):s=Wg,t.setTexture2D(e||s,i)}function Sb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yg,i)}function Mb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qg,i)}function bb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xg,i)}function Tb(r){switch(r){case 5126:return sb;case 35664:return ob;case 35665:return ab;case 35666:return lb;case 35674:return cb;case 35675:return ub;case 35676:return hb;case 5124:case 35670:return db;case 35667:case 35671:return fb;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return _b;case 36295:return vb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return bb}}function wb(r,e){r.uniform1fv(this.addr,e)}function Eb(r,e){const t=va(e,this.size,2);r.uniform2fv(this.addr,t)}function Ab(r,e){const t=va(e,this.size,3);r.uniform3fv(this.addr,t)}function Cb(r,e){const t=va(e,this.size,4);r.uniform4fv(this.addr,t)}function Rb(r,e){const t=va(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Pb(r,e){const t=va(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Lb(r,e){const t=va(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Db(r,e){r.uniform1iv(this.addr,e)}function Ib(r,e){r.uniform2iv(this.addr,e)}function Nb(r,e){r.uniform3iv(this.addr,e)}function Ob(r,e){r.uniform4iv(this.addr,e)}function Ub(r,e){r.uniform1uiv(this.addr,e)}function Fb(r,e){r.uniform2uiv(this.addr,e)}function Bb(r,e){r.uniform3uiv(this.addr,e)}function kb(r,e){r.uniform4uiv(this.addr,e)}function zb(r,e,t){const n=this.cache,i=e.length,s=ou(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=fd:o=Wg;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function Vb(r,e,t){const n=this.cache,i=e.length,s=ou(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Yg,s[o])}function Hb(r,e,t){const n=this.cache,i=e.length,s=ou(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||qg,s[o])}function Gb(r,e,t){const n=this.cache,i=e.length,s=ou(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Xg,s[o])}function Wb(r){switch(r){case 5126:return wb;case 35664:return Eb;case 35665:return Ab;case 35666:return Cb;case 35674:return Rb;case 35675:return Pb;case 35676:return Lb;case 5124:case 35670:return Db;case 35667:case 35671:return Ib;case 35668:case 35672:return Nb;case 35669:case 35673:return Ob;case 5125:return Ub;case 36294:return Fb;case 36295:return Bb;case 36296:return kb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Gb}}class Xb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tb(t.type)}}class Yb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wb(t.type)}}class qb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Xu=/(\w+)(\])?(\[|\.)?/g;function Zp(r,e){r.seq.push(e),r.map[e.id]=e}function $b(r,e,t){const n=r.name,i=n.length;for(Xu.lastIndex=0;;){const s=Xu.exec(n),o=Xu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Zp(t,c===void 0?new Xb(a,r,e):new Yb(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new qb(a),Zp(t,h)),t=h}}}class Sc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);$b(a,l,this)}const i=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Jp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const jb=37297;let Kb=0;function Zb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Qp=new et;function Jb(r){dt._getMatrix(Qp,dt.workingColorSpace,r);const e=`mat3( ${Qp.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(r)){case Dc:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function em(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Zb(r.getShaderSource(e),a)}else return s}function Qb(r,e){const t=Jb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const eT={[hg]:"Linear",[dg]:"Reinhard",[fg]:"Cineon",[pg]:"ACESFilmic",[gg]:"AgX",[_g]:"Neutral",[mg]:"Custom"};function tT(r,e){const t=eT[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ec=new F;function nT(){dt.getLuminanceCoefficients(ec);const r=ec.x.toFixed(4),e=ec.y.toFixed(4),t=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function rT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ua(r){return r!==""}function tm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oT=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(r){return r.replace(oT,lT)}const aT=new Map;function lT(r,e){let t=tt[e];if(t===void 0){const n=aT.get(e);if(n!==void 0)t=tt[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pd(t)}const cT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(r){return r.replace(cT,uT)}function uT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function rm(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const hT={[mc]:"SHADOWMAP_TYPE_PCF",[Na]:"SHADOWMAP_TYPE_VSM"};function dT(r){return hT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fT={[no]:"ENVMAP_TYPE_CUBE",[jo]:"ENVMAP_TYPE_CUBE",[eu]:"ENVMAP_TYPE_CUBE_UV"};function pT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":fT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const mT={[jo]:"ENVMAP_MODE_REFRACTION"};function gT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":mT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _T={[ug]:"ENVMAP_BLENDING_MULTIPLY",[cv]:"ENVMAP_BLENDING_MIX",[uv]:"ENVMAP_BLENDING_ADD"};function vT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":_T[r.combine]||"ENVMAP_BLENDING_NONE"}function xT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yT(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=dT(t),c=pT(t),u=gT(t),h=vT(t),d=xT(t),f=iT(t),_=rT(s),g=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ua).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ua).join(`
`),p.length>0&&(p+=`
`)):(m=[rm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),p=[rm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dr?"#define TONE_MAPPING":"",t.toneMapping!==dr?tt.tonemapping_pars_fragment:"",t.toneMapping!==dr?tT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Qb("linearToOutputTexel",t.outputColorSpace),nT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ua).join(`
`)),o=pd(o),o=tm(o,t),o=nm(o,t),a=pd(a),a=tm(a,t),a=nm(a,t),o=im(o),a=im(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===np?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=v+m+o,x=v+p+a,b=Jp(i,i.VERTEX_SHADER,S),w=Jp(i,i.FRAGMENT_SHADER,x);i.attachShader(g,b),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(P){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(g)||"",N=i.getShaderInfoLog(b)||"",U=i.getShaderInfoLog(w)||"",H=L.trim(),k=N.trim(),z=U.trim();let W=!0,Q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,w);else{const D=em(i,b,"vertex"),te=em(i,w,"fragment");Ye("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+D+`
`+te)}else H!==""?Ne("WebGLProgram: Program Info Log:",H):(k===""||z==="")&&(Q=!1);Q&&(P.diagnostics={runnable:W,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:z,prefix:p}})}i.deleteShader(b),i.deleteShader(w),C=new Sc(i,g),y=sT(i,g)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,jb)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=w,this}let ST=0;class MT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bT(e),t.set(e,n)),n}}class bT{constructor(e){this.id=ST++,this.code=e,this.usedTimes=0}}function TT(r,e,t,n,i,s,o){const a=new Rg,l=new MT,c=new Set,u=[],h=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,P,L,N){const U=L.fog,H=N.geometry,k=y.isMeshStandardMaterial?L.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||k),W=z&&z.mapping===eu?z.image.height:null,Q=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Ne("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const D=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,te=D!==void 0?D.length:0;let Ae=0;H.morphAttributes.position!==void 0&&(Ae=1),H.morphAttributes.normal!==void 0&&(Ae=2),H.morphAttributes.color!==void 0&&(Ae=3);let Ce,Pe,ze,K;if(Q){const Me=sr[Q];Ce=Me.vertexShader,Pe=Me.fragmentShader}else Ce=y.vertexShader,Pe=y.fragmentShader,l.update(y),ze=l.getVertexShaderID(y),K=l.getFragmentShaderID(y);const J=r.getRenderTarget(),de=r.state.buffers.depth.getReversed(),Le=N.isInstancedMesh===!0,xe=N.isBatchedMesh===!0,Ve=!!y.map,ht=!!y.matcap,ne=!!z,Ue=!!y.aoMap,Ke=!!y.lightMap,Fe=!!y.bumpMap,X=!!y.normalMap,I=!!y.displacementMap,pt=!!y.emissiveMap,Je=!!y.metalnessMap,He=!!y.roughnessMap,re=y.anisotropy>0,R=y.clearcoat>0,T=y.dispersion>0,B=y.iridescence>0,j=y.sheen>0,Z=y.transmission>0,$=re&&!!y.anisotropyMap,ye=R&&!!y.clearcoatMap,le=R&&!!y.clearcoatNormalMap,Ee=R&&!!y.clearcoatRoughnessMap,we=B&&!!y.iridescenceMap,se=B&&!!y.iridescenceThicknessMap,ce=j&&!!y.sheenColorMap,Se=j&&!!y.sheenRoughnessMap,ge=!!y.specularMap,ae=!!y.specularColorMap,qe=!!y.specularIntensityMap,O=Z&&!!y.transmissionMap,fe=Z&&!!y.thicknessMap,oe=!!y.gradientMap,pe=!!y.alphaMap,ie=y.alphaTest>0,ee=!!y.alphaHash,he=!!y.extensions;let ke=dr;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ke=r.toneMapping);const mt={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Ce,fragmentShader:Pe,defines:y.defines,customVertexShaderID:ze,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:xe,batchingColor:xe&&N._colorsTexture!==null,instancing:Le,instancingColor:Le&&N.instanceColor!==null,instancingMorph:Le&&N.morphTexture!==null,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Zn,alphaToCoverage:!!y.alphaToCoverage,map:Ve,matcap:ht,envMap:ne,envMapMode:ne&&z.mapping,envMapCubeUVHeight:W,aoMap:Ue,lightMap:Ke,bumpMap:Fe,normalMap:X,displacementMap:I,emissiveMap:pt,normalMapObjectSpace:X&&y.normalMapType===mv,normalMapTangentSpace:X&&y.normalMapType===Qd,metalnessMap:Je,roughnessMap:He,anisotropy:re,anisotropyMap:$,clearcoat:R,clearcoatMap:ye,clearcoatNormalMap:le,clearcoatRoughnessMap:Ee,dispersion:T,iridescence:B,iridescenceMap:we,iridescenceThicknessMap:se,sheen:j,sheenColorMap:ce,sheenRoughnessMap:Se,specularMap:ge,specularColorMap:ae,specularIntensityMap:qe,transmission:Z,transmissionMap:O,thicknessMap:fe,gradientMap:oe,opaque:y.transparent===!1&&y.blending===ko&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:ie,alphaHash:ee,combine:y.combine,mapUv:Ve&&g(y.map.channel),aoMapUv:Ue&&g(y.aoMap.channel),lightMapUv:Ke&&g(y.lightMap.channel),bumpMapUv:Fe&&g(y.bumpMap.channel),normalMapUv:X&&g(y.normalMap.channel),displacementMapUv:I&&g(y.displacementMap.channel),emissiveMapUv:pt&&g(y.emissiveMap.channel),metalnessMapUv:Je&&g(y.metalnessMap.channel),roughnessMapUv:He&&g(y.roughnessMap.channel),anisotropyMapUv:$&&g(y.anisotropyMap.channel),clearcoatMapUv:ye&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(y.sheenRoughnessMap.channel),specularMapUv:ge&&g(y.specularMap.channel),specularColorMapUv:ae&&g(y.specularColorMap.channel),specularIntensityMapUv:qe&&g(y.specularIntensityMap.channel),transmissionMapUv:O&&g(y.transmissionMap.channel),thicknessMapUv:fe&&g(y.thicknessMap.channel),alphaMapUv:pe&&g(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(X||re),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Ve||pe),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:de,skinning:N.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ae,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ve&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===Mt,decodeVideoTextureEmissive:pt&&y.emissiveMap.isVideoTexture===!0&&dt.getTransfer(y.emissiveMap.colorSpace)===Mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===or,flipSided:y.side===oi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:he&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&y.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(v(M,y),S(M,y),M.push(r.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const M=_[y.type];let P;if(M){const L=sr[M];P=sx.clone(L.uniforms)}else P=y.uniforms;return P}function b(y,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new yT(r,M,y,s),u.push(P),h.set(M,P)),P}function w(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:C}}function wT(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function ET(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function sm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function om(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,d,f,_,g,m){const p=o(h,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,_,g,m){const p=o(h,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||ET),n.length>1&&n.sort(d||sm),i.length>1&&i.sort(d||sm)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function AT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new om,r.set(n,[o])):i>=s.length?(o=new om,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function CT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new $e};break;case"SpotLight":t={position:new F,direction:new F,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function RT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let PT=0;function LT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function DT(r){const e=new CT,t=RT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,s=new nt,o=new nt;function a(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,v=0,S=0,x=0,b=0,w=0,E=0;c.sort(LT);for(let y=0,M=c.length;y<M;y++){const P=c[y],L=P.color,N=P.intensity,U=P.distance;let H=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Zo?H=P.shadow.map.texture:H=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=L.r*N,h+=L.g*N,d+=L.b*N;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],N);E++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,W=t.get(P);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=k,f++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(L).multiplyScalar(N),k.distance=U,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[g]=k;const z=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,z.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=z.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=H,x++}g++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(L).multiplyScalar(N),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const z=P.shadow,W=t.get(P);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,W.shadowCameraNear=z.camera.near,W.shadowCameraFar=z.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=H,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=k,_++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(N),k.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=k,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==S||C.numSpotShadows!==x||C.numSpotMaps!==b||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=S,C.numSpotShadows=x,C.numSpotMaps=b,C.numLightProbes=E,n.version=PT++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const S=c[p];if(S.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function am(r){const e=new DT(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function IT(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new am(r),e.set(i,[a])):s>=o.length?(a=new am(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const NT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OT=`uniform sampler2D shadow_pass;
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
}`,UT=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],FT=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],lm=new nt,Ra=new F,Yu=new F;function BT(r,e,t){let n=new lf;const i=new Be,s=new Be,o=new Ft,a=new wx,l=new Ex,c={},u=t.maxTextureSize,h={[Hr]:oi,[oi]:Hr,[or]:or},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:NT,fragmentShader:OT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Qn;_.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new At(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mc;let p=this.type;this.render=function(w,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===cg&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=mc);const y=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),L=r.state;L.setBlending(kr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=p!==this.type;N&&E.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(H=>H.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,H=w.length;U<H;U++){const k=w[U],z=k.shadow;if(z===void 0){Ne("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const W=z.getFrameExtents();if(i.multiply(W),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/W.x),i.x=s.x*W.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/W.y),i.y=s.y*W.y,z.mapSize.y=s.y)),z.map===null||N===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Na){if(k.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Fn(i.x,i.y,{format:Zo,type:Gr,minFilter:un,magFilter:un,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new pl(i.x,i.y,Fi),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=Wr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=cn,z.map.depthTexture.magFilter=cn}else{k.isPointLight?(z.map=new Og(i.x),z.map.depthTexture=new Mx(i.x,mr)):(z.map=new Fn(i.x,i.y),z.map.depthTexture=new pl(i.x,i.y,mr)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=Wr;const D=r.state.buffers.depth.getReversed();this.type===mc?(z.map.depthTexture.compareFunction=D?tf:ef,z.map.depthTexture.minFilter=un,z.map.depthTexture.magFilter=un):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=cn,z.map.depthTexture.magFilter=cn)}z.camera.updateProjectionMatrix()}const Q=z.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<Q;D++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,D),r.clear();else{D===0&&(r.setRenderTarget(z.map),r.clear());const te=z.getViewport(D);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),L.viewport(o)}if(k.isPointLight){const te=z.camera,Ae=z.matrix,Ce=k.distance||te.far;Ce!==te.far&&(te.far=Ce,te.updateProjectionMatrix()),Ra.setFromMatrixPosition(k.matrixWorld),te.position.copy(Ra),Yu.copy(te.position),Yu.add(UT[D]),te.up.copy(FT[D]),te.lookAt(Yu),te.updateMatrixWorld(),Ae.makeTranslation(-Ra.x,-Ra.y,-Ra.z),lm.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),z._frustum.setFromProjectionMatrix(lm,te.coordinateSystem,te.reversedDepth)}else z.updateMatrices(k);n=z.getFrustum(),x(E,C,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===Na&&v(z,C),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,M,P)};function v(w,E){const C=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fn(i.x,i.y,{format:Zo,type:Gr})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,C,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,C,f,g,null)}function S(w,E,C,y){let M=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const L=M.uuid,N=E.uuid;let U=c[L];U===void 0&&(U={},c[L]=U);let H=U[N];H===void 0&&(H=M.clone(),U[N]=H,E.addEventListener("dispose",b)),M=H}if(M.visible=E.visible,M.wireframe=E.wireframe,y===Na?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:h[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=r.properties.get(M);L.light=C}return M}function x(w,E,C,y,M){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Na)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const N=e.update(w),U=w.material;if(Array.isArray(U)){const H=N.groups;for(let k=0,z=H.length;k<z;k++){const W=H[k],Q=U[W.materialIndex];if(Q&&Q.visible){const D=S(w,Q,y,M);w.onBeforeShadow(r,w,E,C,N,D,W),r.renderBufferDirect(C,null,N,D,w,W),w.onAfterShadow(r,w,E,C,N,D,W)}}}else if(U.visible){const H=S(w,U,y,M);w.onBeforeShadow(r,w,E,C,N,H,null),r.renderBufferDirect(C,null,N,H,w,null),w.onAfterShadow(r,w,E,C,N,H,null)}}const L=w.children;for(let N=0,U=L.length;N<U;N++)x(L[N],E,C,y,M)}function b(w){w.target.removeEventListener("dispose",b);for(const C in c){const y=c[C],M=w.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const kT={[Mh]:bh,[Th]:Ah,[wh]:Ch,[$o]:Eh,[bh]:Mh,[Ah]:Th,[Ch]:wh,[Eh]:$o};function zT(r,e){function t(){let O=!1;const fe=new Ft;let oe=null;const pe=new Ft(0,0,0,0);return{setMask:function(ie){oe!==ie&&!O&&(r.colorMask(ie,ie,ie,ie),oe=ie)},setLocked:function(ie){O=ie},setClear:function(ie,ee,he,ke,mt){mt===!0&&(ie*=ke,ee*=ke,he*=ke),fe.set(ie,ee,he,ke),pe.equals(fe)===!1&&(r.clearColor(ie,ee,he,ke),pe.copy(fe))},reset:function(){O=!1,oe=null,pe.set(-1,0,0,0)}}}function n(){let O=!1,fe=!1,oe=null,pe=null,ie=null;return{setReversed:function(ee){if(fe!==ee){const he=e.get("EXT_clip_control");ee?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),fe=ee;const ke=ie;ie=null,this.setClear(ke)}},getReversed:function(){return fe},setTest:function(ee){ee?J(r.DEPTH_TEST):de(r.DEPTH_TEST)},setMask:function(ee){oe!==ee&&!O&&(r.depthMask(ee),oe=ee)},setFunc:function(ee){if(fe&&(ee=kT[ee]),pe!==ee){switch(ee){case Mh:r.depthFunc(r.NEVER);break;case bh:r.depthFunc(r.ALWAYS);break;case Th:r.depthFunc(r.LESS);break;case $o:r.depthFunc(r.LEQUAL);break;case wh:r.depthFunc(r.EQUAL);break;case Eh:r.depthFunc(r.GEQUAL);break;case Ah:r.depthFunc(r.GREATER);break;case Ch:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=ee}},setLocked:function(ee){O=ee},setClear:function(ee){ie!==ee&&(fe&&(ee=1-ee),r.clearDepth(ee),ie=ee)},reset:function(){O=!1,oe=null,pe=null,ie=null,fe=!1}}}function i(){let O=!1,fe=null,oe=null,pe=null,ie=null,ee=null,he=null,ke=null,mt=null;return{setTest:function(Me){O||(Me?J(r.STENCIL_TEST):de(r.STENCIL_TEST))},setMask:function(Me){fe!==Me&&!O&&(r.stencilMask(Me),fe=Me)},setFunc:function(Me,De,Qe){(oe!==Me||pe!==De||ie!==Qe)&&(r.stencilFunc(Me,De,Qe),oe=Me,pe=De,ie=Qe)},setOp:function(Me,De,Qe){(ee!==Me||he!==De||ke!==Qe)&&(r.stencilOp(Me,De,Qe),ee=Me,he=De,ke=Qe)},setLocked:function(Me){O=Me},setClear:function(Me){mt!==Me&&(r.clearStencil(Me),mt=Me)},reset:function(){O=!1,fe=null,oe=null,pe=null,ie=null,ee=null,he=null,ke=null,mt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,v=null,S=null,x=null,b=null,w=null,E=new $e(0,0,0),C=0,y=!1,M=null,P=null,L=null,N=null,U=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,z=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=z>=1):W.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=z>=2);let Q=null,D={};const te=r.getParameter(r.SCISSOR_BOX),Ae=r.getParameter(r.VIEWPORT),Ce=new Ft().fromArray(te),Pe=new Ft().fromArray(Ae);function ze(O,fe,oe,pe){const ie=new Uint8Array(4),ee=r.createTexture();r.bindTexture(O,ee),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let he=0;he<oe;he++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(fe,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,ie):r.texImage2D(fe+he,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ie);return ee}const K={};K[r.TEXTURE_2D]=ze(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(r.DEPTH_TEST),o.setFunc($o),Fe(!1),X(qf),J(r.CULL_FACE),Ue(kr);function J(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function de(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function Le(O,fe){return h[O]!==fe?(r.bindFramebuffer(O,fe),h[O]=fe,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=fe),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=fe),!0):!1}function xe(O,fe){let oe=f,pe=!1;if(O){oe=d.get(fe),oe===void 0&&(oe=[],d.set(fe,oe));const ie=O.textures;if(oe.length!==ie.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let ee=0,he=ie.length;ee<he;ee++)oe[ee]=r.COLOR_ATTACHMENT0+ee;oe.length=ie.length,pe=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,pe=!0);pe&&r.drawBuffers(oe)}function Ve(O){return _!==O?(r.useProgram(O),_=O,!0):!1}const ht={[zs]:r.FUNC_ADD,[Y0]:r.FUNC_SUBTRACT,[q0]:r.FUNC_REVERSE_SUBTRACT};ht[$0]=r.MIN,ht[j0]=r.MAX;const ne={[K0]:r.ZERO,[Z0]:r.ONE,[J0]:r.SRC_COLOR,[yh]:r.SRC_ALPHA,[rv]:r.SRC_ALPHA_SATURATE,[nv]:r.DST_COLOR,[ev]:r.DST_ALPHA,[Q0]:r.ONE_MINUS_SRC_COLOR,[Sh]:r.ONE_MINUS_SRC_ALPHA,[iv]:r.ONE_MINUS_DST_COLOR,[tv]:r.ONE_MINUS_DST_ALPHA,[sv]:r.CONSTANT_COLOR,[ov]:r.ONE_MINUS_CONSTANT_COLOR,[av]:r.CONSTANT_ALPHA,[lv]:r.ONE_MINUS_CONSTANT_ALPHA};function Ue(O,fe,oe,pe,ie,ee,he,ke,mt,Me){if(O===kr){g===!0&&(de(r.BLEND),g=!1);return}if(g===!1&&(J(r.BLEND),g=!0),O!==X0){if(O!==m||Me!==y){if((p!==zs||x!==zs)&&(r.blendEquation(r.FUNC_ADD),p=zs,x=zs),Me)switch(O){case ko:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $f:r.blendFunc(r.ONE,r.ONE);break;case jf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ye("WebGLState: Invalid blending: ",O);break}else switch(O){case ko:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $f:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case jf:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kf:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",O);break}v=null,S=null,b=null,w=null,E.set(0,0,0),C=0,m=O,y=Me}return}ie=ie||fe,ee=ee||oe,he=he||pe,(fe!==p||ie!==x)&&(r.blendEquationSeparate(ht[fe],ht[ie]),p=fe,x=ie),(oe!==v||pe!==S||ee!==b||he!==w)&&(r.blendFuncSeparate(ne[oe],ne[pe],ne[ee],ne[he]),v=oe,S=pe,b=ee,w=he),(ke.equals(E)===!1||mt!==C)&&(r.blendColor(ke.r,ke.g,ke.b,mt),E.copy(ke),C=mt),m=O,y=!1}function Ke(O,fe){O.side===or?de(r.CULL_FACE):J(r.CULL_FACE);let oe=O.side===oi;fe&&(oe=!oe),Fe(oe),O.blending===ko&&O.transparent===!1?Ue(kr):Ue(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const pe=O.stencilWrite;a.setTest(pe),pe&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),pt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):de(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(O){M!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),M=O)}function X(O){O!==G0?(J(r.CULL_FACE),O!==P&&(O===qf?r.cullFace(r.BACK):O===W0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):de(r.CULL_FACE),P=O}function I(O){O!==L&&(k&&r.lineWidth(O),L=O)}function pt(O,fe,oe){O?(J(r.POLYGON_OFFSET_FILL),(N!==fe||U!==oe)&&(r.polygonOffset(fe,oe),N=fe,U=oe)):de(r.POLYGON_OFFSET_FILL)}function Je(O){O?J(r.SCISSOR_TEST):de(r.SCISSOR_TEST)}function He(O){O===void 0&&(O=r.TEXTURE0+H-1),Q!==O&&(r.activeTexture(O),Q=O)}function re(O,fe,oe){oe===void 0&&(Q===null?oe=r.TEXTURE0+H-1:oe=Q);let pe=D[oe];pe===void 0&&(pe={type:void 0,texture:void 0},D[oe]=pe),(pe.type!==O||pe.texture!==fe)&&(Q!==oe&&(r.activeTexture(oe),Q=oe),r.bindTexture(O,fe||K[O]),pe.type=O,pe.texture=fe)}function R(){const O=D[Q];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function j(){try{r.texSubImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function Z(){try{r.texSubImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function ye(){try{r.compressedTexSubImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function le(){try{r.texStorage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function Ee(){try{r.texStorage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function we(){try{r.texImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function se(){try{r.texImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function ce(O){Ce.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),Ce.copy(O))}function Se(O){Pe.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Pe.copy(O))}function ge(O,fe){let oe=c.get(fe);oe===void 0&&(oe=new WeakMap,c.set(fe,oe));let pe=oe.get(O);pe===void 0&&(pe=r.getUniformBlockIndex(fe,O.name),oe.set(O,pe))}function ae(O,fe){const pe=c.get(fe).get(O);l.get(fe)!==pe&&(r.uniformBlockBinding(fe,pe,O.__bindingPointIndex),l.set(fe,pe))}function qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,D={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,v=null,S=null,x=null,b=null,w=null,E=new $e(0,0,0),C=0,y=!1,M=null,P=null,L=null,N=null,U=null,Ce.set(0,0,r.canvas.width,r.canvas.height),Pe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:de,bindFramebuffer:Le,drawBuffers:xe,useProgram:Ve,setBlending:Ue,setMaterial:Ke,setFlipSided:Fe,setCullFace:X,setLineWidth:I,setPolygonOffset:pt,setScissorTest:Je,activeTexture:He,bindTexture:re,unbindTexture:R,compressedTexImage2D:T,compressedTexImage3D:B,texImage2D:we,texImage3D:se,updateUBOMapping:ge,uniformBlockBinding:ae,texStorage2D:le,texStorage3D:Ee,texSubImage2D:j,texSubImage3D:Z,compressedTexSubImage2D:$,compressedTexSubImage3D:ye,scissor:ce,viewport:Se,reset:qe}}function VT(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,T){return f?new OffscreenCanvas(R,T):dl("canvas")}function g(R,T,B){let j=1;const Z=re(R);if((Z.width>B||Z.height>B)&&(j=B/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(j*Z.width),ye=Math.floor(j*Z.height);h===void 0&&(h=_($,ye));const le=T?_($,ye):h;return le.width=$,le.height=ye,le.getContext("2d").drawImage(R,0,0,$,ye),Ne("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+ye+")."),le}else return"data"in R&&Ne("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(R,T,B,j,Z=!1){if(R!==null){if(r[R]!==void 0)return r[R];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=T;if(T===r.RED&&(B===r.FLOAT&&($=r.R32F),B===r.HALF_FLOAT&&($=r.R16F),B===r.UNSIGNED_BYTE&&($=r.R8)),T===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.R8UI),B===r.UNSIGNED_SHORT&&($=r.R16UI),B===r.UNSIGNED_INT&&($=r.R32UI),B===r.BYTE&&($=r.R8I),B===r.SHORT&&($=r.R16I),B===r.INT&&($=r.R32I)),T===r.RG&&(B===r.FLOAT&&($=r.RG32F),B===r.HALF_FLOAT&&($=r.RG16F),B===r.UNSIGNED_BYTE&&($=r.RG8)),T===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RG8UI),B===r.UNSIGNED_SHORT&&($=r.RG16UI),B===r.UNSIGNED_INT&&($=r.RG32UI),B===r.BYTE&&($=r.RG8I),B===r.SHORT&&($=r.RG16I),B===r.INT&&($=r.RG32I)),T===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGB8UI),B===r.UNSIGNED_SHORT&&($=r.RGB16UI),B===r.UNSIGNED_INT&&($=r.RGB32UI),B===r.BYTE&&($=r.RGB8I),B===r.SHORT&&($=r.RGB16I),B===r.INT&&($=r.RGB32I)),T===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&($=r.RGBA8UI),B===r.UNSIGNED_SHORT&&($=r.RGBA16UI),B===r.UNSIGNED_INT&&($=r.RGBA32UI),B===r.BYTE&&($=r.RGBA8I),B===r.SHORT&&($=r.RGBA16I),B===r.INT&&($=r.RGBA32I)),T===r.RGB&&(B===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),T===r.RGBA){const ye=Z?Dc:dt.getTransfer(j);B===r.FLOAT&&($=r.RGBA32F),B===r.HALF_FLOAT&&($=r.RGBA16F),B===r.UNSIGNED_BYTE&&($=ye===Mt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(R,T){let B;return R?T===null||T===mr||T===cl?B=r.DEPTH24_STENCIL8:T===Fi?B=r.DEPTH32F_STENCIL8:T===ll&&(B=r.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===mr||T===cl?B=r.DEPTH_COMPONENT24:T===Fi?B=r.DEPTH_COMPONENT32F:T===ll&&(B=r.DEPTH_COMPONENT16),B}function b(R,T){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function w(R){const T=R.target;T.removeEventListener("dispose",w),C(T),T.isVideoTexture&&u.delete(T)}function E(R){const T=R.target;T.removeEventListener("dispose",E),M(T)}function C(R){const T=n.get(R);if(T.__webglInit===void 0)return;const B=R.source,j=d.get(B);if(j){const Z=j[T.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(R),Object.keys(j).length===0&&d.delete(B)}n.remove(R)}function y(R){const T=n.get(R);r.deleteTexture(T.__webglTexture);const B=R.source,j=d.get(B);delete j[T.__cacheKey],o.memory.textures--}function M(R){const T=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let Z=0;Z<T.__webglFramebuffer[j].length;Z++)r.deleteFramebuffer(T.__webglFramebuffer[j][Z]);else r.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)r.deleteFramebuffer(T.__webglFramebuffer[j]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const B=R.textures;for(let j=0,Z=B.length;j<Z;j++){const $=n.get(B[j]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(B[j])}n.remove(R)}let P=0;function L(){P=0}function N(){const R=P;return R>=i.maxTextures&&Ne("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function U(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function H(R,T){const B=n.get(R);if(R.isVideoTexture&&Je(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const j=R.image;if(j===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,R,T);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+T)}function k(R,T){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){K(B,R,T);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+T)}function z(R,T){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){K(B,R,T);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+T)}function W(R,T){const B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){J(B,R,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+T)}const Q={[Ko]:r.REPEAT,[lr]:r.CLAMP_TO_EDGE,[Lc]:r.MIRRORED_REPEAT},D={[cn]:r.NEAREST,[xg]:r.NEAREST_MIPMAP_NEAREST,[Oa]:r.NEAREST_MIPMAP_LINEAR,[un]:r.LINEAR,[gc]:r.LINEAR_MIPMAP_NEAREST,[Ur]:r.LINEAR_MIPMAP_LINEAR},te={[gv]:r.NEVER,[Sv]:r.ALWAYS,[_v]:r.LESS,[ef]:r.LEQUAL,[vv]:r.EQUAL,[tf]:r.GEQUAL,[xv]:r.GREATER,[yv]:r.NOTEQUAL};function Ae(R,T){if(T.type===Fi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===un||T.magFilter===gc||T.magFilter===Oa||T.magFilter===Ur||T.minFilter===un||T.minFilter===gc||T.minFilter===Oa||T.minFilter===Ur)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,Q[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,Q[T.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,Q[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,D[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,D[T.minFilter]),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,te[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===cn||T.minFilter!==Oa&&T.minFilter!==Ur||T.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ce(R,T){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",w));const j=T.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const $=U(T);if($!==R.__cacheKey){Z[$]===void 0&&(Z[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[$].usedTimes++;const ye=Z[R.__cacheKey];ye!==void 0&&(Z[R.__cacheKey].usedTimes--,ye.usedTimes===0&&y(T)),R.__cacheKey=$,R.__webglTexture=Z[$].texture}return B}function Pe(R,T,B){return Math.floor(Math.floor(R/B)/T)}function ze(R,T,B,j){const $=R.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,B,j,T.data);else{$.sort((se,ce)=>se.start-ce.start);let ye=0;for(let se=1;se<$.length;se++){const ce=$[ye],Se=$[se],ge=ce.start+ce.count,ae=Pe(Se.start,T.width,4),qe=Pe(ce.start,T.width,4);Se.start<=ge+1&&ae===qe&&Pe(Se.start+Se.count-1,T.width,4)===ae?ce.count=Math.max(ce.count,Se.start+Se.count-ce.start):(++ye,$[ye]=Se)}$.length=ye+1;const le=r.getParameter(r.UNPACK_ROW_LENGTH),Ee=r.getParameter(r.UNPACK_SKIP_PIXELS),we=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let se=0,ce=$.length;se<ce;se++){const Se=$[se],ge=Math.floor(Se.start/4),ae=Math.ceil(Se.count/4),qe=ge%T.width,O=Math.floor(ge/T.width),fe=ae,oe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,qe),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,qe,O,fe,oe,B,j,T.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,le),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ee),r.pixelStorei(r.UNPACK_SKIP_ROWS,we)}}function K(R,T,B){let j=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=r.TEXTURE_3D);const Z=Ce(R,T),$=T.source;t.bindTexture(j,R.__webglTexture,r.TEXTURE0+B);const ye=n.get($);if($.version!==ye.__version||Z===!0){t.activeTexture(r.TEXTURE0+B);const le=dt.getPrimaries(dt.workingColorSpace),Ee=T.colorSpace===ss?null:dt.getPrimaries(T.colorSpace),we=T.colorSpace===ss||le===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let se=g(T.image,!1,i.maxTextureSize);se=He(T,se);const ce=s.convert(T.format,T.colorSpace),Se=s.convert(T.type);let ge=S(T.internalFormat,ce,Se,T.colorSpace,T.isVideoTexture);Ae(j,T);let ae;const qe=T.mipmaps,O=T.isVideoTexture!==!0,fe=ye.__version===void 0||Z===!0,oe=$.dataReady,pe=b(T,se);if(T.isDepthTexture)ge=x(T.format===Hs,T.type),fe&&(O?t.texStorage2D(r.TEXTURE_2D,1,ge,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,ge,se.width,se.height,0,ce,Se,null));else if(T.isDataTexture)if(qe.length>0){O&&fe&&t.texStorage2D(r.TEXTURE_2D,pe,ge,qe[0].width,qe[0].height);for(let ie=0,ee=qe.length;ie<ee;ie++)ae=qe[ie],O?oe&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,ae.width,ae.height,ce,Se,ae.data):t.texImage2D(r.TEXTURE_2D,ie,ge,ae.width,ae.height,0,ce,Se,ae.data);T.generateMipmaps=!1}else O?(fe&&t.texStorage2D(r.TEXTURE_2D,pe,ge,se.width,se.height),oe&&ze(T,se,ce,Se)):t.texImage2D(r.TEXTURE_2D,0,ge,se.width,se.height,0,ce,Se,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){O&&fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,ge,qe[0].width,qe[0].height,se.depth);for(let ie=0,ee=qe.length;ie<ee;ie++)if(ae=qe[ie],T.format!==Bi)if(ce!==null)if(O){if(oe)if(T.layerUpdates.size>0){const he=kp(ae.width,ae.height,T.format,T.type);for(const ke of T.layerUpdates){const mt=ae.data.subarray(ke*he/ae.data.BYTES_PER_ELEMENT,(ke+1)*he/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,ke,ae.width,ae.height,1,ce,mt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,ae.width,ae.height,se.depth,ce,ae.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,ge,ae.width,ae.height,se.depth,0,ae.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,ae.width,ae.height,se.depth,ce,Se,ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,ge,ae.width,ae.height,se.depth,0,ce,Se,ae.data)}else{O&&fe&&t.texStorage2D(r.TEXTURE_2D,pe,ge,qe[0].width,qe[0].height);for(let ie=0,ee=qe.length;ie<ee;ie++)ae=qe[ie],T.format!==Bi?ce!==null?O?oe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,ae.width,ae.height,ce,ae.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,ge,ae.width,ae.height,0,ae.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?oe&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,ae.width,ae.height,ce,Se,ae.data):t.texImage2D(r.TEXTURE_2D,ie,ge,ae.width,ae.height,0,ce,Se,ae.data)}else if(T.isDataArrayTexture)if(O){if(fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,ge,se.width,se.height,se.depth),oe)if(T.layerUpdates.size>0){const ie=kp(se.width,se.height,T.format,T.type);for(const ee of T.layerUpdates){const he=se.data.subarray(ee*ie/se.data.BYTES_PER_ELEMENT,(ee+1)*ie/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,ce,Se,he)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ce,Se,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,se.width,se.height,se.depth,0,ce,Se,se.data);else if(T.isData3DTexture)O?(fe&&t.texStorage3D(r.TEXTURE_3D,pe,ge,se.width,se.height,se.depth),oe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ce,Se,se.data)):t.texImage3D(r.TEXTURE_3D,0,ge,se.width,se.height,se.depth,0,ce,Se,se.data);else if(T.isFramebufferTexture){if(fe)if(O)t.texStorage2D(r.TEXTURE_2D,pe,ge,se.width,se.height);else{let ie=se.width,ee=se.height;for(let he=0;he<pe;he++)t.texImage2D(r.TEXTURE_2D,he,ge,ie,ee,0,ce,Se,null),ie>>=1,ee>>=1}}else if(qe.length>0){if(O&&fe){const ie=re(qe[0]);t.texStorage2D(r.TEXTURE_2D,pe,ge,ie.width,ie.height)}for(let ie=0,ee=qe.length;ie<ee;ie++)ae=qe[ie],O?oe&&t.texSubImage2D(r.TEXTURE_2D,ie,0,0,ce,Se,ae):t.texImage2D(r.TEXTURE_2D,ie,ge,ce,Se,ae);T.generateMipmaps=!1}else if(O){if(fe){const ie=re(se);t.texStorage2D(r.TEXTURE_2D,pe,ge,ie.width,ie.height)}oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ce,Se,se)}else t.texImage2D(r.TEXTURE_2D,0,ge,ce,Se,se);m(T)&&p(j),ye.__version=$.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function J(R,T,B){if(T.image.length!==6)return;const j=Ce(R,T),Z=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const $=n.get(Z);if(Z.version!==$.__version||j===!0){t.activeTexture(r.TEXTURE0+B);const ye=dt.getPrimaries(dt.workingColorSpace),le=T.colorSpace===ss?null:dt.getPrimaries(T.colorSpace),Ee=T.colorSpace===ss||ye===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const we=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,ce=[];for(let ee=0;ee<6;ee++)!we&&!se?ce[ee]=g(T.image[ee],!0,i.maxCubemapSize):ce[ee]=se?T.image[ee].image:T.image[ee],ce[ee]=He(T,ce[ee]);const Se=ce[0],ge=s.convert(T.format,T.colorSpace),ae=s.convert(T.type),qe=S(T.internalFormat,ge,ae,T.colorSpace),O=T.isVideoTexture!==!0,fe=$.__version===void 0||j===!0,oe=Z.dataReady;let pe=b(T,Se);Ae(r.TEXTURE_CUBE_MAP,T);let ie;if(we){O&&fe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,qe,Se.width,Se.height);for(let ee=0;ee<6;ee++){ie=ce[ee].mipmaps;for(let he=0;he<ie.length;he++){const ke=ie[he];T.format!==Bi?ge!==null?O?oe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,ke.width,ke.height,ge,ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,qe,ke.width,ke.height,0,ke.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,0,0,ke.width,ke.height,ge,ae,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he,qe,ke.width,ke.height,0,ge,ae,ke.data)}}}else{if(ie=T.mipmaps,O&&fe){ie.length>0&&pe++;const ee=re(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){O?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ce[ee].width,ce[ee].height,ge,ae,ce[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,ce[ee].width,ce[ee].height,0,ge,ae,ce[ee].data);for(let he=0;he<ie.length;he++){const mt=ie[he].image[ee].image;O?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,mt.width,mt.height,ge,ae,mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,qe,mt.width,mt.height,0,ge,ae,mt.data)}}else{O?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ge,ae,ce[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,ge,ae,ce[ee]);for(let he=0;he<ie.length;he++){const ke=ie[he];O?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,0,0,ge,ae,ke.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he+1,qe,ge,ae,ke.image[ee])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),$.__version=Z.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function de(R,T,B,j,Z,$){const ye=s.convert(B.format,B.colorSpace),le=s.convert(B.type),Ee=S(B.internalFormat,ye,le,B.colorSpace),we=n.get(T),se=n.get(B);if(se.__renderTarget=T,!we.__hasExternalTextures){const ce=Math.max(1,T.width>>$),Se=Math.max(1,T.height>>$);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,$,Ee,ce,Se,T.depth,0,ye,le,null):t.texImage2D(Z,$,Ee,ce,Se,0,ye,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),pt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,Z,se.__webglTexture,0,I(T)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,Z,se.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(R,T,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer){const j=T.depthTexture,Z=j&&j.isDepthTexture?j.type:null,$=x(T.stencilBuffer,Z),ye=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(T),$,T.width,T.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(T),$,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,$,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,R)}else{const j=T.textures;for(let Z=0;Z<j.length;Z++){const $=j[Z],ye=s.convert($.format,$.colorSpace),le=s.convert($.type),Ee=S($.internalFormat,ye,le,$.colorSpace);pt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(T),Ee,T.width,T.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(T),Ee,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(R,T,B){const j=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(T.depthTexture);if(Z.__renderTarget=T,(!Z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,T.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,T.depthTexture);const we=s.convert(T.depthTexture.format),se=s.convert(T.depthTexture.type);let ce;T.depthTexture.format===Wr?ce=r.DEPTH_COMPONENT24:T.depthTexture.format===Hs&&(ce=r.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ce,T.width,T.height,0,we,se,null)}}else H(T.depthTexture,0);const $=Z.__webglTexture,ye=I(T),le=j?r.TEXTURE_CUBE_MAP_POSITIVE_X+B:r.TEXTURE_2D,Ee=T.depthTexture.format===Hs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Wr)pt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ee,le,$,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,Ee,le,$,0);else if(T.depthTexture.format===Hs)pt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ee,le,$,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,Ee,le,$,0);else throw new Error("Unknown depthTexture format")}function Ve(R){const T=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),j){const Z=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),T.__depthDisposeCallback=Z}T.__boundDepthTexture=j}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(B)for(let j=0;j<6;j++)xe(T.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?xe(T.__webglFramebuffer[0],R,0):xe(T.__webglFramebuffer,R,0)}else if(B){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]===void 0)T.__webglDepthbuffer[j]=r.createRenderbuffer(),Le(T.__webglDepthbuffer[j],R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,$)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Le(T.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(R,T,B){const j=n.get(R);T!==void 0&&de(j.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Ve(R)}function ne(R){const T=R.texture,B=n.get(R),j=n.get(T);R.addEventListener("dispose",E);const Z=R.textures,$=R.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=T.version,o.memory.textures++),$){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)B.__webglFramebuffer[le][Ee]=r.createFramebuffer()}else B.__webglFramebuffer[le]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<T.mipmaps.length;le++)B.__webglFramebuffer[le]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(ye)for(let le=0,Ee=Z.length;le<Ee;le++){const we=n.get(Z[le]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&pt(R)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){const Ee=Z[le];B.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[le]);const we=s.convert(Ee.format,Ee.colorSpace),se=s.convert(Ee.type),ce=S(Ee.internalFormat,we,se,Ee.colorSpace,R.isXRRenderTarget===!0),Se=I(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,ce,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,B.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,T);for(let le=0;le<6;le++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)de(B.__webglFramebuffer[le][Ee],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee);else de(B.__webglFramebuffer[le],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(T)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let le=0,Ee=Z.length;le<Ee;le++){const we=Z[le],se=n.get(we);let ce=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,se.__webglTexture),Ae(ce,we),de(B.__webglFramebuffer,R,we,r.COLOR_ATTACHMENT0+le,ce,0),m(we)&&p(ce)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,j.__webglTexture),Ae(le,T),T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)de(B.__webglFramebuffer[Ee],R,T,r.COLOR_ATTACHMENT0,le,Ee);else de(B.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,le,0);m(T)&&p(le),t.unbindTexture()}R.depthBuffer&&Ve(R)}function Ue(R){const T=R.textures;for(let B=0,j=T.length;B<j;B++){const Z=T[B];if(m(Z)){const $=v(R),ye=n.get(Z).__webglTexture;t.bindTexture($,ye),p($),t.unbindTexture()}}}const Ke=[],Fe=[];function X(R){if(R.samples>0){if(pt(R)===!1){const T=R.textures,B=R.width,j=R.height;let Z=r.COLOR_BUFFER_BIT;const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(R),le=T.length>1;if(le)for(let we=0;we<T.length;we++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Ee=R.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let we=0;we<T.length;we++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const se=n.get(T[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,se,0)}r.blitFramebuffer(0,0,B,j,0,0,B,j,Z,r.NEAREST),l===!0&&(Ke.length=0,Fe.length=0,Ke.push(r.COLOR_ATTACHMENT0+we),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ke.push($),Fe.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Fe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let we=0;we<T.length;we++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const se=n.get(T[we]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function I(R){return Math.min(i.maxSamples,R.samples)}function pt(R){const T=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Je(R){const T=o.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function He(R,T){const B=R.colorSpace,j=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Zn&&B!==ss&&(dt.getTransfer(B)===Mt?(j!==Bi||Z!==Si)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",B)),T}function re(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=ht,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=de,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function HT(r,e){function t(n,i=ss){let s;const o=dt.getTransfer(i);if(n===Si)return r.UNSIGNED_BYTE;if(n===qd)return r.UNSIGNED_SHORT_4_4_4_4;if(n===$d)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Mg)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===bg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===yg)return r.BYTE;if(n===Sg)return r.SHORT;if(n===ll)return r.UNSIGNED_SHORT;if(n===Yd)return r.INT;if(n===mr)return r.UNSIGNED_INT;if(n===Fi)return r.FLOAT;if(n===Gr)return r.HALF_FLOAT;if(n===Tg)return r.ALPHA;if(n===wg)return r.RGB;if(n===Bi)return r.RGBA;if(n===Wr)return r.DEPTH_COMPONENT;if(n===Hs)return r.DEPTH_STENCIL;if(n===jd)return r.RED;if(n===Kd)return r.RED_INTEGER;if(n===Zo)return r.RG;if(n===Zd)return r.RG_INTEGER;if(n===Jd)return r.RGBA_INTEGER;if(n===_c||n===vc||n===xc||n===yc)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_c)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_c)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lh||n===Dh||n===Ih||n===Nh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Lh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ih)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oh||n===Uh||n===Fh||n===Bh||n===kh||n===zh||n===Vh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oh||n===Uh)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bh)return s.COMPRESSED_R11_EAC;if(n===kh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===zh)return s.COMPRESSED_RG11_EAC;if(n===Vh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Hh||n===Gh||n===Wh||n===Xh||n===Yh||n===qh||n===$h||n===jh||n===Kh||n===Zh||n===Jh||n===Qh||n===ed||n===td)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Hh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$h)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ed)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===td)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nd||n===id||n===rd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===nd)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===id)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sd||n===od||n===ad||n===ld)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===sd)return s.COMPRESSED_RED_RGTC1_EXT;if(n===od)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ad)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ld)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cl?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const GT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WT=`
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

}`;class XT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new kg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jn({vertexShader:GT,fragmentShader:WT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YT extends oo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const g=typeof XRWebGLBinding<"u",m=new XT,p={},v=t.getContextAttributes();let S=null,x=null;const b=[],w=[],E=new Be;let C=null;const y=new yn;y.viewport=new Ft;const M=new yn;M.viewport=new Ft;const P=[y,M],L=new Yx;let N=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=b[K];return J===void 0&&(J=new Nu,b[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=b[K];return J===void 0&&(J=new Nu,b[K]=J),J.getGripSpace()},this.getHand=function(K){let J=b[K];return J===void 0&&(J=new Nu,b[K]=J),J.getHandSpace()};function H(K){const J=w.indexOf(K.inputSource);if(J===-1)return;const de=b[J];de!==void 0&&(de.update(K.inputSource,K.frame,c||o),de.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",z);for(let K=0;K<b.length;K++){const J=w[K];J!==null&&(w[K]=null,b[K].disconnect(J))}N=null,U=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(S),f=null,d=null,h=null,i=null,x=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",k),i.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(E),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Le=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=v.stencil?Hs:Wr,Le=v.stencil?cl:mr);const Ve={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ve),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Fn(d.textureWidth,d.textureHeight,{format:Bi,type:Si,depthTexture:new pl(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Fn(f.framebufferWidth,f.framebufferHeight,{format:Bi,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ze.setContext(i),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(K){for(let J=0;J<K.removed.length;J++){const de=K.removed[J],Le=w.indexOf(de);Le>=0&&(w[Le]=null,b[Le].disconnect(de))}for(let J=0;J<K.added.length;J++){const de=K.added[J];let Le=w.indexOf(de);if(Le===-1){for(let Ve=0;Ve<b.length;Ve++)if(Ve>=w.length){w.push(de),Le=Ve;break}else if(w[Ve]===null){w[Ve]=de,Le=Ve;break}if(Le===-1)break}const xe=b[Le];xe&&xe.connect(de)}}const W=new F,Q=new F;function D(K,J,de){W.setFromMatrixPosition(J.matrixWorld),Q.setFromMatrixPosition(de.matrixWorld);const Le=W.distanceTo(Q),xe=J.projectionMatrix.elements,Ve=de.projectionMatrix.elements,ht=xe[14]/(xe[10]-1),ne=xe[14]/(xe[10]+1),Ue=(xe[9]+1)/xe[5],Ke=(xe[9]-1)/xe[5],Fe=(xe[8]-1)/xe[0],X=(Ve[8]+1)/Ve[0],I=ht*Fe,pt=ht*X,Je=Le/(-Fe+X),He=Je*-Fe;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(He),K.translateZ(Je),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const re=ht+Je,R=ne+Je,T=I-He,B=pt+(Le-He),j=Ue*ne/R*re,Z=Ke*ne/R*re;K.projectionMatrix.makePerspective(T,B,j,Z,re,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function te(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let J=K.near,de=K.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(de=m.depthFar)),L.near=M.near=y.near=J,L.far=M.far=y.far=de,(N!==L.near||U!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,U=L.far),L.layers.mask=K.layers.mask|6,y.layers.mask=L.layers.mask&3,M.layers.mask=L.layers.mask&5;const Le=K.parent,xe=L.cameras;te(L,Le);for(let Ve=0;Ve<xe.length;Ve++)te(xe[Ve],Le);xe.length===2?D(L,y,M):L.projectionMatrix.copy(y.projectionMatrix),Ae(K,L,Le)};function Ae(K,J,de){de===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(de.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Jo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(K){return p[K]};let Ce=null;function Pe(K,J){if(u=J.getViewerPose(c||o),_=J,u!==null){const de=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Le=!1;de.length!==L.cameras.length&&(L.cameras.length=0,Le=!0);for(let ne=0;ne<de.length;ne++){const Ue=de[ne];let Ke=null;if(f!==null)Ke=f.getViewport(Ue);else{const X=h.getViewSubImage(d,Ue);Ke=X.viewport,ne===0&&(e.setRenderTargetTextures(x,X.colorTexture,X.depthStencilTexture),e.setRenderTarget(x))}let Fe=P[ne];Fe===void 0&&(Fe=new yn,Fe.layers.enable(ne),Fe.viewport=new Ft,P[ne]=Fe),Fe.matrix.fromArray(Ue.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ue.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),ne===0&&(L.matrix.copy(Fe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Le===!0&&L.cameras.push(Fe)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const ne=h.getDepthInformation(de[0]);ne&&ne.isValid&&ne.texture&&m.init(ne,i.renderState)}if(xe&&xe.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let ne=0;ne<de.length;ne++){const Ue=de[ne].camera;if(Ue){let Ke=p[Ue];Ke||(Ke=new kg,p[Ue]=Ke);const Fe=h.getCameraImage(Ue);Ke.sourceTexture=Fe}}}}for(let de=0;de<b.length;de++){const Le=w[de],xe=b[de];Le!==null&&xe!==void 0&&xe.update(Le,J,c||o)}Ce&&Ce(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const ze=new Gg;ze.setAnimationLoop(Pe),this.setAnimationLoop=function(K){Ce=K},this.dispose=function(){}}}const Ls=new _r,qT=new nt;function $T(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ig(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===oi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===oi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),S=v.envMap,x=v.envMapRotation;S&&(m.envMap.value=S,Ls.copy(x),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),m.envMapRotation.value.setFromMatrix4(qT.makeRotationFromEuler(Ls)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===oi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jT(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const x=S.program;n.uniformBlockBinding(v,x)}function c(v,S){let x=i[v.id];x===void 0&&(_(v),x=u(v),i[v.id]=x,v.addEventListener("dispose",m));const b=S.program;n.updateUBOMapping(v,b);const w=e.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function u(v){const S=h();v.__bindingPointIndex=S;const x=r.createBuffer(),b=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,b,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const S=i[v.id],x=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let w=0,E=x.length;w<E;w++){const C=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,M=C.length;y<M;y++){const P=C[y];if(f(P,w,y,b)===!0){const L=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let H=0;H<N.length;H++){const k=N[H],z=g(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,L+U,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,U),U+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,S,x,b){const w=v.value,E=S+"_"+x;if(b[E]===void 0)return typeof w=="number"||typeof w=="boolean"?b[E]=w:b[E]=w.clone(),!0;{const C=b[E];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return b[E]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(v){const S=v.uniforms;let x=0;const b=16;for(let E=0,C=S.length;E<C;E++){const y=Array.isArray(S[E])?S[E]:[S[E]];for(let M=0,P=y.length;M<P;M++){const L=y[M],N=Array.isArray(L.value)?L.value:[L.value];for(let U=0,H=N.length;U<H;U++){const k=N[U],z=g(k),W=x%b,Q=W%z.boundary,D=W+Q;x+=Q,D!==0&&b-D<z.storage&&(x+=b-D),L.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=z.storage}}}const w=x%b;return w>0&&(x+=b-w),v.__size=x,v.__cache={},this}function g(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ne("WebGLRenderer: Unsupported uniform value type.",v),S}function m(v){const S=v.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}const KT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let er=null;function ZT(){return er===null&&(er=new of(KT,16,16,Zo,Gr),er.name="DFG_LUT",er.minFilter=un,er.magFilter=un,er.wrapS=lr,er.wrapT=lr,er.generateMipmaps=!1,er.needsUpdate=!0),er}class xa{constructor(e={}){const{canvas:t=bv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Si}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const g=f,m=new Set([Jd,Zd,Kd]),p=new Set([Si,mr,ll,cl,qd,$d]),v=new Uint32Array(4),S=new Int32Array(4);let x=null,b=null;const w=[],E=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let M=!1;this._outputColorSpace=wn;let P=0,L=0,N=null,U=-1,H=null;const k=new Ft,z=new Ft;let W=null;const Q=new $e(0);let D=0,te=t.width,Ae=t.height,Ce=1,Pe=null,ze=null;const K=new Ft(0,0,te,Ae),J=new Ft(0,0,te,Ae);let de=!1;const Le=new lf;let xe=!1,Ve=!1;const ht=new nt,ne=new F,Ue=new Ft,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function X(){return N===null?Ce:1}let I=n;function pt(A,V){return t.getContext(A,V)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xd}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Me,!1),I===null){const V="webgl2";if(I=pt(V,A),I===null)throw pt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ye("WebGLRenderer: "+A.message),A}let Je,He,re,R,T,B,j,Z,$,ye,le,Ee,we,se,ce,Se,ge,ae,qe,O,fe,oe,pe,ie;function ee(){Je=new ZM(I),Je.init(),oe=new HT(I,Je),He=new HM(I,Je,e,oe),re=new zT(I,Je),He.reversedDepthBuffer&&d&&re.buffers.depth.setReversed(!0),R=new eb(I),T=new wT,B=new VT(I,Je,re,T,He,oe,R),j=new WM(y),Z=new KM(y),$=new ry(I),pe=new zM(I,$),ye=new JM(I,$,R,pe),le=new nb(I,ye,$,R),qe=new tb(I,He,B),Se=new GM(T),Ee=new TT(y,j,Z,Je,He,pe,Se),we=new $T(y,T),se=new AT,ce=new IT(Je),ae=new kM(y,j,Z,re,le,_,l),ge=new BT(y,le,He),ie=new jT(I,R,He,re),O=new VM(I,Je,R),fe=new QM(I,Je,R),R.programs=Ee.programs,y.capabilities=He,y.extensions=Je,y.properties=T,y.renderLists=se,y.shadowMap=ge,y.state=re,y.info=R}ee(),g!==Si&&(C=new rb(g,t.width,t.height,i,s));const he=new YT(y,I);this.xr=he,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=Je.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Je.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(A){A!==void 0&&(Ce=A,this.setSize(te,Ae,!1))},this.getSize=function(A){return A.set(te,Ae)},this.setSize=function(A,V,q=!0){if(he.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,Ae=V,t.width=Math.floor(A*Ce),t.height=Math.floor(V*Ce),q===!0&&(t.style.width=A+"px",t.style.height=V+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(te*Ce,Ae*Ce).floor()},this.setDrawingBufferSize=function(A,V,q){te=A,Ae=V,Ce=q,t.width=Math.floor(A*q),t.height=Math.floor(V*q),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(g===Si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,V,q,Y){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,V,q,Y),re.viewport(k.copy(K).multiplyScalar(Ce).round())},this.getScissor=function(A){return A.copy(J)},this.setScissor=function(A,V,q,Y){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,V,q,Y),re.scissor(z.copy(J).multiplyScalar(Ce).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(A){re.setScissorTest(de=A)},this.setOpaqueSort=function(A){Pe=A},this.setTransparentSort=function(A){ze=A},this.getClearColor=function(A){return A.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,q=!0){let Y=0;if(A){let G=!1;if(N!==null){const ue=N.texture.format;G=m.has(ue)}if(G){const ue=N.texture.type,be=p.has(ue),me=ae.getClearColor(),Te=ae.getClearAlpha(),Ie=me.r,Xe=me.g,Ge=me.b;be?(v[0]=Ie,v[1]=Xe,v[2]=Ge,v[3]=Te,I.clearBufferuiv(I.COLOR,0,v)):(S[0]=Ie,S[1]=Xe,S[2]=Ge,S[3]=Te,I.clearBufferiv(I.COLOR,0,S))}else Y|=I.COLOR_BUFFER_BIT}V&&(Y|=I.DEPTH_BUFFER_BIT),q&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ae.dispose(),se.dispose(),ce.dispose(),T.dispose(),j.dispose(),Z.dispose(),le.dispose(),pe.dispose(),ie.dispose(),Ee.dispose(),he.dispose(),he.removeEventListener("sessionstart",$t),he.removeEventListener("sessionend",st),yt.stop()};function ke(A){A.preventDefault(),Nc("WebGLRenderer: Context Lost."),M=!0}function mt(){Nc("WebGLRenderer: Context Restored."),M=!1;const A=R.autoReset,V=ge.enabled,q=ge.autoUpdate,Y=ge.needsUpdate,G=ge.type;ee(),R.autoReset=A,ge.enabled=V,ge.autoUpdate=q,ge.needsUpdate=Y,ge.type=G}function Me(A){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function De(A){const V=A.target;V.removeEventListener("dispose",De),Qe(V)}function Qe(A){_e(A),T.remove(A)}function _e(A){const V=T.get(A).programs;V!==void 0&&(V.forEach(function(q){Ee.releaseProgram(q)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,q,Y,G,ue){V===null&&(V=Ke);const be=G.isMesh&&G.matrixWorld.determinant()<0,me=rn(A,V,q,Y,G);re.setMaterial(Y,be);let Te=q.index,Ie=1;if(Y.wireframe===!0){if(Te=ye.getWireframeAttribute(q),Te===void 0)return;Ie=2}const Xe=q.drawRange,Ge=q.attributes.position;let ot=Xe.start*Ie,Et=(Xe.start+Xe.count)*Ie;ue!==null&&(ot=Math.max(ot,ue.start*Ie),Et=Math.min(Et,(ue.start+ue.count)*Ie)),Te!==null?(ot=Math.max(ot,0),Et=Math.min(Et,Te.count)):Ge!=null&&(ot=Math.max(ot,0),Et=Math.min(Et,Ge.count));const Wt=Et-ot;if(Wt<0||Wt===1/0)return;pe.setup(G,Y,me,q,Te);let Xt,Pt=O;if(Te!==null&&(Xt=$.get(Te),Pt=fe,Pt.setIndex(Xt)),G.isMesh)Y.wireframe===!0?(re.setLineWidth(Y.wireframeLinewidth*X()),Pt.setMode(I.LINES)):Pt.setMode(I.TRIANGLES);else if(G.isLine){let We=Y.linewidth;We===void 0&&(We=1),re.setLineWidth(We*X()),G.isLineSegments?Pt.setMode(I.LINES):G.isLineLoop?Pt.setMode(I.LINE_LOOP):Pt.setMode(I.LINE_STRIP)}else G.isPoints?Pt.setMode(I.POINTS):G.isSprite&&Pt.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)fl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))Pt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const We=G._multiDrawStarts,St=G._multiDrawCounts,_t=G._multiDrawCount,fi=Te?$.get(Te).bytesPerElement:1,co=T.get(Y).currentProgram.getUniforms();for(let pi=0;pi<_t;pi++)co.setValue(I,"_gl_DrawID",pi),Pt.render(We[pi]/fi,St[pi])}else if(G.isInstancedMesh)Pt.renderInstances(ot,Wt,G.count);else if(q.isInstancedBufferGeometry){const We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,St=Math.min(q.instanceCount,We);Pt.renderInstances(ot,Wt,St)}else Pt.render(ot,Wt)};function je(A,V,q){A.transparent===!0&&A.side===or&&A.forceSinglePass===!1?(A.side=oi,A.needsUpdate=!0,wt(A,V,q),A.side=Hr,A.needsUpdate=!0,wt(A,V,q),A.side=or):wt(A,V,q)}this.compile=function(A,V,q=null){q===null&&(q=A),b=ce.get(q),b.init(V),E.push(b),q.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),A!==q&&A.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights();const Y=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ue=G.material;if(ue)if(Array.isArray(ue))for(let be=0;be<ue.length;be++){const me=ue[be];je(me,q,G),Y.add(me)}else je(ue,q,G),Y.add(ue)}),b=E.pop(),Y},this.compileAsync=function(A,V,q=null){const Y=this.compile(A,V,q);return new Promise(G=>{function ue(){if(Y.forEach(function(be){T.get(be).currentProgram.isReady()&&Y.delete(be)}),Y.size===0){G(A);return}setTimeout(ue,10)}Je.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Oe=null;function Ze(A){Oe&&Oe(A)}function $t(){yt.stop()}function st(){yt.start()}const yt=new Gg;yt.setAnimationLoop(Ze),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(A){Oe=A,he.setAnimationLoop(A),A===null?yt.stop():yt.start()},he.addEventListener("sessionstart",$t),he.addEventListener("sessionend",st),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const q=he.enabled===!0&&he.isPresenting===!0,Y=C!==null&&(N===null||q)&&C.begin(y,N);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(V),V=he.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,V,N),b=ce.get(A,E.length),b.init(V),E.push(b),ht.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Le.setFromProjectionMatrix(ht,cr,V.reversedDepth),Ve=this.localClippingEnabled,xe=Se.init(this.clippingPlanes,Ve),x=se.get(A,w.length),x.init(),w.push(x),he.enabled===!0&&he.isPresenting===!0){const be=y.xr.getDepthSensingMesh();be!==null&&Jt(be,V,-1/0,y.sortObjects)}Jt(A,V,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(Pe,ze),Fe=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Fe&&ae.addToRenderList(x,A),this.info.render.frame++,xe===!0&&Se.beginShadows();const G=b.state.shadowsArray;if(ge.render(G,A,V),xe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&C.hasRenderPass())===!1){const be=x.opaque,me=x.transmissive;if(b.setupLights(),V.isArrayCamera){const Te=V.cameras;if(me.length>0)for(let Ie=0,Xe=Te.length;Ie<Xe;Ie++){const Ge=Te[Ie];Rt(be,me,A,Ge)}Fe&&ae.render(A);for(let Ie=0,Xe=Te.length;Ie<Xe;Ie++){const Ge=Te[Ie];Ut(x,A,Ge,Ge.viewport)}}else me.length>0&&Rt(be,me,A,V),Fe&&ae.render(A),Ut(x,A,V)}N!==null&&L===0&&(B.updateMultisampleRenderTarget(N),B.updateRenderTargetMipmap(N)),Y&&C.end(y),A.isScene===!0&&A.onAfterRender(y,A,V),pe.resetDefaultState(),U=-1,H=null,E.pop(),E.length>0?(b=E[E.length-1],xe===!0&&Se.setGlobalState(y.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?x=w[w.length-1]:x=null};function Jt(A,V,q,Y){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Le.intersectsSprite(A)){Y&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ht);const be=le.update(A),me=A.material;me.visible&&x.push(A,be,me,q,Ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Le.intersectsObject(A))){const be=le.update(A),me=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ue.copy(be.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(ht)),Array.isArray(me)){const Te=be.groups;for(let Ie=0,Xe=Te.length;Ie<Xe;Ie++){const Ge=Te[Ie],ot=me[Ge.materialIndex];ot&&ot.visible&&x.push(A,be,ot,q,Ue.z,Ge)}}else me.visible&&x.push(A,be,me,q,Ue.z,null)}}const ue=A.children;for(let be=0,me=ue.length;be<me;be++)Jt(ue[be],V,q,Y)}function Ut(A,V,q,Y){const{opaque:G,transmissive:ue,transparent:be}=A;b.setupLightsView(q),xe===!0&&Se.setGlobalState(y.clippingPlanes,q),Y&&re.viewport(k.copy(Y)),G.length>0&&gt(G,V,q),ue.length>0&&gt(ue,V,q),be.length>0&&gt(be,V,q),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Rt(A,V,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){const ot=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new Fn(1,1,{generateMipmaps:!0,type:ot?Gr:Si,minFilter:Ur,samples:He.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const ue=b.state.transmissionRenderTarget[Y.id],be=Y.viewport||k;ue.setSize(be.z*y.transmissionResolutionScale,be.w*y.transmissionResolutionScale);const me=y.getRenderTarget(),Te=y.getActiveCubeFace(),Ie=y.getActiveMipmapLevel();y.setRenderTarget(ue),y.getClearColor(Q),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear(),Fe&&ae.render(q);const Xe=y.toneMapping;y.toneMapping=dr;const Ge=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),xe===!0&&Se.setGlobalState(y.clippingPlanes,Y),gt(A,q,Y),B.updateMultisampleRenderTarget(ue),B.updateRenderTargetMipmap(ue),Je.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Et=0,Wt=V.length;Et<Wt;Et++){const Xt=V[Et],{object:Pt,geometry:We,material:St,group:_t}=Xt;if(St.side===or&&Pt.layers.test(Y.layers)){const fi=St.side;St.side=oi,St.needsUpdate=!0,ei(Pt,q,Y,We,St,_t),St.side=fi,St.needsUpdate=!0,ot=!0}}ot===!0&&(B.updateMultisampleRenderTarget(ue),B.updateRenderTargetMipmap(ue))}y.setRenderTarget(me,Te,Ie),y.setClearColor(Q,D),Ge!==void 0&&(Y.viewport=Ge),y.toneMapping=Xe}function gt(A,V,q){const Y=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ue=A.length;G<ue;G++){const be=A[G],{object:me,geometry:Te,group:Ie}=be;let Xe=be.material;Xe.allowOverride===!0&&Y!==null&&(Xe=Y),me.layers.test(q.layers)&&ei(me,V,q,Te,Xe,Ie)}}function ei(A,V,q,Y,G,ue){A.onBeforeRender(y,V,q,Y,G,ue),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(y,V,q,Y,A,ue),G.transparent===!0&&G.side===or&&G.forceSinglePass===!1?(G.side=oi,G.needsUpdate=!0,y.renderBufferDirect(q,V,Y,G,A,ue),G.side=Hr,G.needsUpdate=!0,y.renderBufferDirect(q,V,Y,G,A,ue),G.side=or):y.renderBufferDirect(q,V,Y,G,A,ue),A.onAfterRender(y,V,q,Y,G,ue)}function wt(A,V,q){V.isScene!==!0&&(V=Ke);const Y=T.get(A),G=b.state.lights,ue=b.state.shadowsArray,be=G.state.version,me=Ee.getParameters(A,G.state,ue,V,q),Te=Ee.getProgramCacheKey(me);let Ie=Y.programs;Y.environment=A.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(A.isMeshStandardMaterial?Z:j).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Ie===void 0&&(A.addEventListener("dispose",De),Ie=new Map,Y.programs=Ie);let Xe=Ie.get(Te);if(Xe!==void 0){if(Y.currentProgram===Xe&&Y.lightsStateVersion===be)return di(A,me),Xe}else me.uniforms=Ee.getUniforms(A),A.onBeforeCompile(me,y),Xe=Ee.acquireProgram(me,Te),Ie.set(Te,Xe),Y.uniforms=me.uniforms;const Ge=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=Se.uniform),di(A,me),Y.needsLights=fn(A),Y.lightsStateVersion=be,Y.needsLights&&(Ge.ambientLightColor.value=G.state.ambient,Ge.lightProbe.value=G.state.probe,Ge.directionalLights.value=G.state.directional,Ge.directionalLightShadows.value=G.state.directionalShadow,Ge.spotLights.value=G.state.spot,Ge.spotLightShadows.value=G.state.spotShadow,Ge.rectAreaLights.value=G.state.rectArea,Ge.ltc_1.value=G.state.rectAreaLTC1,Ge.ltc_2.value=G.state.rectAreaLTC2,Ge.pointLights.value=G.state.point,Ge.pointLightShadows.value=G.state.pointShadow,Ge.hemisphereLights.value=G.state.hemi,Ge.directionalShadowMap.value=G.state.directionalShadowMap,Ge.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ge.spotShadowMap.value=G.state.spotShadowMap,Ge.spotLightMatrix.value=G.state.spotLightMatrix,Ge.spotLightMap.value=G.state.spotLightMap,Ge.pointShadowMap.value=G.state.pointShadowMap,Ge.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Xe,Y.uniformsList=null,Xe}function Cn(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Sc.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function di(A,V){const q=T.get(A);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function rn(A,V,q,Y,G){V.isScene!==!0&&(V=Ke),B.resetTextureUnits();const ue=V.fog,be=Y.isMeshStandardMaterial?V.environment:null,me=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Zn,Te=(Y.isMeshStandardMaterial?Z:j).get(Y.envMap||be),Ie=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ge=!!q.morphAttributes.position,ot=!!q.morphAttributes.normal,Et=!!q.morphAttributes.color;let Wt=dr;Y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Wt=y.toneMapping);const Xt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Pt=Xt!==void 0?Xt.length:0,We=T.get(Y),St=b.state.lights;if(xe===!0&&(Ve===!0||A!==H)){const kn=A===H&&Y.id===U;Se.setState(Y,A,kn)}let _t=!1;Y.version===We.__version?(We.needsLights&&We.lightsStateVersion!==St.state.version||We.outputColorSpace!==me||G.isBatchedMesh&&We.batching===!1||!G.isBatchedMesh&&We.batching===!0||G.isBatchedMesh&&We.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&We.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&We.instancing===!1||!G.isInstancedMesh&&We.instancing===!0||G.isSkinnedMesh&&We.skinning===!1||!G.isSkinnedMesh&&We.skinning===!0||G.isInstancedMesh&&We.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&We.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&We.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&We.instancingMorph===!1&&G.morphTexture!==null||We.envMap!==Te||Y.fog===!0&&We.fog!==ue||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Se.numPlanes||We.numIntersection!==Se.numIntersection)||We.vertexAlphas!==Ie||We.vertexTangents!==Xe||We.morphTargets!==Ge||We.morphNormals!==ot||We.morphColors!==Et||We.toneMapping!==Wt||We.morphTargetsCount!==Pt)&&(_t=!0):(_t=!0,We.__version=Y.version);let fi=We.currentProgram;_t===!0&&(fi=wt(Y,V,G));let co=!1,pi=!1,ya=!1;const Nt=fi.getUniforms(),ti=We.uniforms;if(re.useProgram(fi.program)&&(co=!0,pi=!0,ya=!0),Y.id!==U&&(U=Y.id,pi=!0),co||H!==A){re.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Nt.setValue(I,"projectionMatrix",A.projectionMatrix),Nt.setValue(I,"viewMatrix",A.matrixWorldInverse);const ni=Nt.map.cameraPosition;ni!==void 0&&ni.setValue(I,ne.setFromMatrixPosition(A.matrixWorld)),He.logarithmicDepthBuffer&&Nt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Nt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,pi=!0,ya=!0)}if(We.needsLights&&(St.state.directionalShadowMap.length>0&&Nt.setValue(I,"directionalShadowMap",St.state.directionalShadowMap,B),St.state.spotShadowMap.length>0&&Nt.setValue(I,"spotShadowMap",St.state.spotShadowMap,B),St.state.pointShadowMap.length>0&&Nt.setValue(I,"pointShadowMap",St.state.pointShadowMap,B)),G.isSkinnedMesh){Nt.setOptional(I,G,"bindMatrix"),Nt.setOptional(I,G,"bindMatrixInverse");const kn=G.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),Nt.setValue(I,"boneTexture",kn.boneTexture,B))}G.isBatchedMesh&&(Nt.setOptional(I,G,"batchingTexture"),Nt.setValue(I,"batchingTexture",G._matricesTexture,B),Nt.setOptional(I,G,"batchingIdTexture"),Nt.setValue(I,"batchingIdTexture",G._indirectTexture,B),Nt.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&Nt.setValue(I,"batchingColorTexture",G._colorsTexture,B));const Pi=q.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&qe.update(G,q,fi),(pi||We.receiveShadow!==G.receiveShadow)&&(We.receiveShadow=G.receiveShadow,Nt.setValue(I,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ti.envMap.value=Te,ti.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(ti.envMapIntensity.value=V.environmentIntensity),ti.dfgLUT!==void 0&&(ti.dfgLUT.value=ZT()),pi&&(Nt.setValue(I,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&sn(ti,ya),ue&&Y.fog===!0&&we.refreshFogUniforms(ti,ue),we.refreshMaterialUniforms(ti,Y,Ce,Ae,b.state.transmissionRenderTarget[A.id]),Sc.upload(I,Cn(We),ti,B)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Sc.upload(I,Cn(We),ti,B),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Nt.setValue(I,"center",G.center),Nt.setValue(I,"modelViewMatrix",G.modelViewMatrix),Nt.setValue(I,"normalMatrix",G.normalMatrix),Nt.setValue(I,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const kn=Y.uniformsGroups;for(let ni=0,du=kn.length;ni<du;ni++){const ws=kn[ni];ie.update(ws,fi),ie.bind(ws,fi)}}return fi}function sn(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function fn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,V,q){const Y=T.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),T.get(A.texture).__webglTexture=V,T.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const q=T.get(A);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0};const br=I.createFramebuffer();this.setRenderTarget=function(A,V=0,q=0){N=A,P=V,L=q;let Y=null,G=!1,ue=!1;if(A){const me=T.get(A);if(me.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(I.FRAMEBUFFER,me.__webglFramebuffer),k.copy(A.viewport),z.copy(A.scissor),W=A.scissorTest,re.viewport(k),re.scissor(z),re.setScissorTest(W),U=-1;return}else if(me.__webglFramebuffer===void 0)B.setupRenderTarget(A);else if(me.__hasExternalTextures)B.rebindTextures(A,T.get(A.texture).__webglTexture,T.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(me.__boundDepthTexture!==Xe){if(Xe!==null&&T.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(A)}}const Te=A.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ue=!0);const Ie=T.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ie[V])?Y=Ie[V][q]:Y=Ie[V],G=!0):A.samples>0&&B.useMultisampledRTT(A)===!1?Y=T.get(A).__webglMultisampledFramebuffer:Array.isArray(Ie)?Y=Ie[q]:Y=Ie,k.copy(A.viewport),z.copy(A.scissor),W=A.scissorTest}else k.copy(K).multiplyScalar(Ce).floor(),z.copy(J).multiplyScalar(Ce).floor(),W=de;if(q!==0&&(Y=br),re.bindFramebuffer(I.FRAMEBUFFER,Y)&&re.drawBuffers(A,Y),re.viewport(k),re.scissor(z),re.setScissorTest(W),G){const me=T.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+V,me.__webglTexture,q)}else if(ue){const me=V;for(let Te=0;Te<A.textures.length;Te++){const Ie=T.get(A.textures[Te]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Te,Ie.__webglTexture,q,me)}}else if(A!==null&&q!==0){const me=T.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,q)}U=-1},this.readRenderTargetPixels=function(A,V,q,Y,G,ue,be,me=0){if(!(A&&A.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=T.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te){re.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Ie=A.textures[me],Xe=Ie.format,Ge=Ie.type;if(!He.textureFormatReadable(Xe)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ge)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-Y&&q>=0&&q<=A.height-G&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),I.readPixels(V,q,Y,G,oe.convert(Xe),oe.convert(Ge),ue))}finally{const Ie=N!==null?T.get(N).__webglFramebuffer:null;re.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(A,V,q,Y,G,ue,be,me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=T.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te)if(V>=0&&V<=A.width-Y&&q>=0&&q<=A.height-G){re.bindFramebuffer(I.FRAMEBUFFER,Te);const Ie=A.textures[me],Xe=Ie.format,Ge=Ie.type;if(!He.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ot),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),I.readPixels(V,q,Y,G,oe.convert(Xe),oe.convert(Ge),0);const Et=N!==null?T.get(N).__webglFramebuffer:null;re.bindFramebuffer(I.FRAMEBUFFER,Et);const Wt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Tv(I,Wt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ot),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue),I.deleteBuffer(ot),I.deleteSync(Wt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,q=0){const Y=Math.pow(2,-q),G=Math.floor(A.image.width*Y),ue=Math.floor(A.image.height*Y),be=V!==null?V.x:0,me=V!==null?V.y:0;B.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,be,me,G,ue),re.unbindTexture()};const lo=I.createFramebuffer(),pn=I.createFramebuffer();this.copyTextureToTexture=function(A,V,q=null,Y=null,G=0,ue=null){ue===null&&(G!==0?(fl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=G,G=0):ue=0);let be,me,Te,Ie,Xe,Ge,ot,Et,Wt;const Xt=A.isCompressedTexture?A.mipmaps[ue]:A.image;if(q!==null)be=q.max.x-q.min.x,me=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,Ie=q.min.x,Xe=q.min.y,Ge=q.isBox3?q.min.z:0;else{const Pi=Math.pow(2,-G);be=Math.floor(Xt.width*Pi),me=Math.floor(Xt.height*Pi),A.isDataArrayTexture?Te=Xt.depth:A.isData3DTexture?Te=Math.floor(Xt.depth*Pi):Te=1,Ie=0,Xe=0,Ge=0}Y!==null?(ot=Y.x,Et=Y.y,Wt=Y.z):(ot=0,Et=0,Wt=0);const Pt=oe.convert(V.format),We=oe.convert(V.type);let St;V.isData3DTexture?(B.setTexture3D(V,0),St=I.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(B.setTexture2DArray(V,0),St=I.TEXTURE_2D_ARRAY):(B.setTexture2D(V,0),St=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const _t=I.getParameter(I.UNPACK_ROW_LENGTH),fi=I.getParameter(I.UNPACK_IMAGE_HEIGHT),co=I.getParameter(I.UNPACK_SKIP_PIXELS),pi=I.getParameter(I.UNPACK_SKIP_ROWS),ya=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge);const Nt=A.isDataArrayTexture||A.isData3DTexture,ti=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const Pi=T.get(A),kn=T.get(V),ni=T.get(Pi.__renderTarget),du=T.get(kn.__renderTarget);re.bindFramebuffer(I.READ_FRAMEBUFFER,ni.__webglFramebuffer),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,du.__webglFramebuffer);for(let ws=0;ws<Te;ws++)Nt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,T.get(A).__webglTexture,G,Ge+ws),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,T.get(V).__webglTexture,ue,Wt+ws)),I.blitFramebuffer(Ie,Xe,be,me,ot,Et,be,me,I.DEPTH_BUFFER_BIT,I.NEAREST);re.bindFramebuffer(I.READ_FRAMEBUFFER,null),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||T.has(A)){const Pi=T.get(A),kn=T.get(V);re.bindFramebuffer(I.READ_FRAMEBUFFER,lo),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,pn);for(let ni=0;ni<Te;ni++)Nt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pi.__webglTexture,G,Ge+ni):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pi.__webglTexture,G),ti?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,kn.__webglTexture,ue,Wt+ni):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,kn.__webglTexture,ue),G!==0?I.blitFramebuffer(Ie,Xe,be,me,ot,Et,be,me,I.COLOR_BUFFER_BIT,I.NEAREST):ti?I.copyTexSubImage3D(St,ue,ot,Et,Wt+ni,Ie,Xe,be,me):I.copyTexSubImage2D(St,ue,ot,Et,Ie,Xe,be,me);re.bindFramebuffer(I.READ_FRAMEBUFFER,null),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ti?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(St,ue,ot,Et,Wt,be,me,Te,Pt,We,Xt.data):V.isCompressedArrayTexture?I.compressedTexSubImage3D(St,ue,ot,Et,Wt,be,me,Te,Pt,Xt.data):I.texSubImage3D(St,ue,ot,Et,Wt,be,me,Te,Pt,We,Xt):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ue,ot,Et,be,me,Pt,We,Xt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ue,ot,Et,Xt.width,Xt.height,Pt,Xt.data):I.texSubImage2D(I.TEXTURE_2D,ue,ot,Et,be,me,Pt,We,Xt);I.pixelStorei(I.UNPACK_ROW_LENGTH,_t),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fi),I.pixelStorei(I.UNPACK_SKIP_PIXELS,co),I.pixelStorei(I.UNPACK_SKIP_ROWS,pi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ya),ue===0&&V.generateMipmaps&&I.generateMipmap(St),re.unbindTexture()},this.initRenderTarget=function(A){T.get(A).__webglFramebuffer===void 0&&B.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?B.setTextureCube(A,0):A.isData3DTexture?B.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?B.setTexture2DArray(A,0):B.setTexture2D(A,0),re.unbindTexture()},this.resetState=function(){P=0,L=0,N=null,re.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const cm={type:"change"},gf={type:"start"},$g={type:"end"},tc=new wl,um=new rs,JT=Math.cos(70*fs.DEG2RAD),on=new F,ii=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qu=1e-6;class QT extends ny{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bo.ROTATE,MIDDLE:Bo.DOLLY,RIGHT:Bo.PAN},this.touches={ONE:Do.ROTATE,TWO:Do.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new gr,this._lastTargetPosition=new F,this._quat=new gr().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bp,this._sphericalDelta=new Bp,this._scale=1,this._panOffset=new F,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new F,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tw.bind(this),this._onPointerDown=ew.bind(this),this._onPointerUp=nw.bind(this),this._onContextMenu=cw.bind(this),this._onMouseWheel=sw.bind(this),this._onKeyDown=ow.bind(this),this._onTouchStart=aw.bind(this),this._onTouchMove=lw.bind(this),this._onMouseDown=iw.bind(this),this._onMouseMove=rw.bind(this),this._interceptControlDown=uw.bind(this),this._interceptControlUp=hw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cm),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;on.copy(t).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ii:n>Math.PI&&(n-=ii),i<-Math.PI?i+=ii:i>Math.PI&&(i-=ii),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),t.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=on.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(tc.origin.copy(this.object.position),tc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tc.direction))<JT?this.object.lookAt(this.target):(um.setFromNormalAndCoplanarPoint(this.object.up,this.target),tc.intersectPlane(um,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>qu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qu||this._lastTargetPosition.distanceToSquared(this.target)>qu?(this.dispatchEvent(cm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ii/60*this.autoRotateSpeed*e:ii/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){on.setFromMatrixColumn(t,0),on.multiplyScalar(-e),this._panOffset.add(on)}_panUp(e,t){this.screenSpacePanning===!0?on.setFromMatrixColumn(t,1):(on.setFromMatrixColumn(t,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(e),this._panOffset.add(on)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;on.copy(i).sub(this.target);let s=on.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/t.clientHeight),this._rotateUp(ii*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ii*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ii*this._rotateDelta.x/t.clientHeight),this._rotateUp(ii*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ew(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function tw(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function nw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($g),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function iw(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Bo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ct.DOLLY;break;case Bo.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ct.ROTATE}break;case Bo.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(gf)}function rw(r){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function sw(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(r.preventDefault(),this.dispatchEvent(gf),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent($g))}function ow(r){this.enabled!==!1&&this._handleKeyDown(r)}function aw(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Do.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ct.TOUCH_ROTATE;break;case Do.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case Do.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ct.TOUCH_DOLLY_PAN;break;case Do.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(gf)}function lw(r){switch(this._trackPointer(r),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ct.NONE}}function cw(r){this.enabled!==!1&&r.preventDefault()}function uw(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ir(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function jg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ia={duration:.5,overwrite:!1,delay:0},_f,An,Bt,ki=1e8,It=1/ki,md=Math.PI*2,dw=md/4,fw=0,Kg=Math.sqrt,pw=Math.cos,mw=Math.sin,bn=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},Xr=function(e){return typeof e=="number"},vf=function(e){return typeof e>"u"},vr=function(e){return typeof e=="object"},ai=function(e){return e!==!1},xf=function(){return typeof window<"u"},nc=function(e){return qt(e)||bn(e)},Zg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bn=Array.isArray,gw=/random\([^)]+\)/g,_w=/,\s*/g,hm=/(?:-?\.?\d|\.)+/gi,Jg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Io=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$u=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Qg=/[+-]=-?[.\d]+/,vw=/[^,'"\[\]\s]+/gi,xw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,ir,gd,yf,Ci={},Bc={},e_,t_=function(e){return(Bc=ra(e,Ci))&&hi},Sf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ml=function(e,t){return!t&&console.warn(e)},n_=function(e,t){return e&&(Ci[e]=t)&&Bc&&(Bc[e]=t)||Ci},gl=function(){return 0},yw={suppressEvents:!0,isStart:!0,kill:!1},Mc={suppressEvents:!0,kill:!1},Sw={suppressEvents:!0},Mf={},ps=[],_d={},i_,xi={},ju={},dm=30,bc=[],bf="",Tf=function(e){var t=e[0],n,i;if(vr(t)||qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=bc.length;i--&&!bc[i].targetTest(t););n=bc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new A_(e[i],n)))||e.splice(i,1);return e},js=function(e){return e._gsap||Tf(zi(e))[0]._gsap},r_=function(e,t,n){return(n=e[t])&&qt(n)?e[t]():vf(n)&&e.getAttribute&&e.getAttribute(t)||n},li=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},Vo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Mw=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},kc=function(){var e=ps.length,t=ps.slice(0),n,i;for(_d={},ps.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},wf=function(e){return!!(e._initted||e._startAt||e.add)},s_=function(e,t,n,i){ps.length&&!An&&kc(),e.render(t,n,!!(An&&t<0&&wf(e))),ps.length&&!An&&kc()},o_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(vw).length<2?t:bn(e)?e.trim():e},a_=function(e){return e},Ri=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},bw=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ra=function(e,t){for(var n in t)e[n]=t[n];return e},fm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=vr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},zc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},$a=function(e){var t=e.parent||zt,n=e.keyframes?bw(Bn(e.keyframes)):Ri;if(ai(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Tw=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},l_=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},au=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},vs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ks=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ww=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},vd=function(e,t,n,i){return e._startAt&&(An?e._startAt.revert(Mc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Ew=function r(e){return!e||e._ts&&r(e.parent)},pm=function(e){return e._repeat?sa(e._tTime,e=e.duration()+e._rDelay)*e:0},sa=function(e,t){var n=Math.floor(e=kt(e/t));return e&&n===e?n-1:n},Vc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},lu=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},cu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),lu(e),n._dirty||Ks(n,e)),e},c_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Vc(e.rawTime(),t),(!t._dur||Al(0,t.totalDuration(),n)-t._tTime>It)&&t.render(n,!0)),Ks(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-It}},ar=function(e,t,n,i){return t.parent&&vs(t),t._start=kt((Xr(n)?n:n||e!==zt?Di(e,n,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),l_(e,t,"_first","_last",e._sort?"_start":0),xd(t)||(e._recent=t),i||c_(e,t),e._ts<0&&cu(e,e._tTime),e},u_=function(e,t){return(Ci.ScrollTrigger||Sf("scrollTrigger",t))&&Ci.ScrollTrigger.create(t,e)},h_=function(e,t,n,i,s){if(Af(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!An&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&i_!==Mi.frame)return ps.push(e),e._lazy=[s,i],1},Aw=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},xd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Cw=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Aw(e)&&!(!e._initted&&xd(e))||(e._ts<0||e._dp._ts<0)&&!xd(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Al(0,e._tDur,t),u=sa(l,a),e._yoyo&&u&1&&(o=1-o),u!==sa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||An||i||e._zTime===It||!t&&e._zTime){if(!e._initted&&h_(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?It:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&vd(e,t,n,!0),e._onUpdate&&!n&&Ti(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&vs(e,1),!n&&!An&&(Ti(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Rw=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},oa=function(e,t,n,i){var s=e._repeat,o=kt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:kt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&cu(e,e._tTime=e._tDur*a),e.parent&&lu(e),n||Ks(e.parent,e),e},mm=function(e){return e instanceof qn?Ks(e):oa(e,e._dur)},Pw={_start:0,endTime:gl,totalDuration:gl},Di=function r(e,t,n){var i=e.labels,s=e._recent||Pw,o=e.duration()>=ki?s.endTime(!1):e._dur,a,l,c;return bn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Bn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ja=function(e,t,n){var i=Xr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ai(l.vars.inherit)&&l.parent;o.immediateRender=ai(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new tn(t[0],o,t[s+1])},Ts=function(e,t){return e||e===0?t(e):t},Al=function(e,t,n){return n<e?e:n>t?t:n},On=function(e,t){return!bn(e)||!(t=xw.exec(e))?"":t[1]},Lw=function(e,t,n){return Ts(n,function(i){return Al(e,t,i)})},yd=[].slice,d_=function(e,t){return e&&vr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&vr(e[0]))&&!e.nodeType&&e!==ir},Dw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return bn(i)&&!t||d_(i,1)?(s=n).push.apply(s,zi(i)):n.push(i)})||n},zi=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):bn(e)&&!n&&(gd||!aa())?yd.call((t||yf).querySelectorAll(e),0):Bn(e)?Dw(e,n):d_(e)?yd.call(e,0):e?[e]:[]},Sd=function(e){return e=zi(e)[0]||ml("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return zi(t,n.querySelectorAll?n:n===e?ml("Invalid scope")||yf.createElement("div"):e)}},f_=function(e){return e.sort(function(){return .5-Math.random()})},p_=function(e){if(qt(e))return e;var t=vr(e)?e:{each:e},n=Zs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return bn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||t).length,m=o[g],p,v,S,x,b,w,E,C,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,ki])[1],!y){for(E=-ki;E<(E=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=l?Math.min(y,g)*u-.5:i%y,v=y===ki?0:l?g*h/y-.5:i/y|0,E=0,C=ki,w=0;w<g;w++)S=w%y-p,x=v-(w/y|0),m[w]=b=c?Math.abs(c==="y"?x:S):Kg(S*S+x*x),b>E&&(E=b),b<C&&(C=b);i==="random"&&f_(m),m.max=E-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=On(t.amount||t.each)||0,n=n&&g<0?T_(n):n}return g=(m[d]-m.min)/m.max||0,kt(m.b+(n?n(g):g)*m.v)+m.u}},Md=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=kt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Xr(n)?0:On(n))}},m_=function(e,t){var n=Bn(e),i,s;return!n&&vr(e)&&(i=n=e.radius||ki,e.values?(e=zi(e.values),(s=!Xr(e[0]))&&(i*=i)):e=Md(e.increment)),Ts(t,n?qt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ki,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Xr(o)?u:u+On(o)}:Md(e))},g_=function(e,t,n,i){return Ts(Bn(e)?!t:n===!0?!!(n=0):!i,function(){return Bn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Iw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Nw=function(e,t){return function(n){return e(parseFloat(n))+(t||On(n))}},Ow=function(e,t,n){return v_(e,t,0,1,n)},__=function(e,t,n){return Ts(n,function(i){return e[~~t(i)]})},Uw=function r(e,t,n){var i=t-e;return Bn(e)?__(e,r(0,e.length),t):Ts(n,function(s){return(i+(s-e)%i)%i+e})},Fw=function r(e,t,n){var i=t-e,s=i*2;return Bn(e)?__(e,r(0,e.length-1),t):Ts(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},_l=function(e){return e.replace(gw,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(_w);return g_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},v_=function(e,t,n,i,s){var o=t-e,a=i-n;return Ts(s,function(l){return n+((l-e)/o*a||0)})},Bw=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=bn(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Bn(e)&&!Bn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=ra(Bn(e)?[]:{},e));if(!u){for(l in t)Ef.call(a,e,l,"get",t[l]);s=function(_){return Pf(_,a)||(o?e.p:e)}}}return Ts(n,s)},gm=function(e,t,n){var i=e.labels,s=ki,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ti=function(e,t,n){var i=e.vars,s=i[t],o=Bt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ps.length&&kc(),a&&(Bt=a),u=l?s.apply(c,l):s.call(c),Bt=o,u},Fa=function(e){return vs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!An),e.progress()<1&&Ti(e,"onInterrupt"),e},No,x_=[],y_=function(e){if(e)if(e=!e.name&&e.default||e,xf()||e.headless){var t=e.name,n=qt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:gl,render:Pf,add:Ef,kill:eE,modifier:Qw,rawVars:0},o={targetTest:0,get:0,getSetter:Rf,aliases:{},register:0};if(aa(),e!==i){if(xi[t])return;Ri(i,Ri(zc(e,s),o)),ra(i.prototype,ra(s,zc(e,o))),xi[i.prop=t]=i,e.targetTest&&(bc.push(i),Mf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}n_(t,i),e.register&&e.register(hi,i,ci)}else x_.push(e)},Lt=255,Ba={aqua:[0,Lt,Lt],lime:[0,Lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Lt],navy:[0,0,128],white:[Lt,Lt,Lt],olive:[128,128,0],yellow:[Lt,Lt,0],orange:[Lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Lt,0,0],pink:[Lt,192,203],cyan:[0,Lt,Lt],transparent:[Lt,Lt,Lt,0]},Ku=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Lt+.5|0},S_=function(e,t,n){var i=e?Xr(e)?[e>>16,e>>8&Lt,e&Lt]:0:Ba.black,s,o,a,l,c,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ba[e])i=Ba[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Lt,i&Lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Lt,e&Lt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(hm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Ku(l+1/3,s,o),i[1]=Ku(l,s,o),i[2]=Ku(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Jg),n&&i.length<4&&(i[3]=1),i}else i=e.match(hm)||Ba.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Lt,o=i[1]/Lt,a=i[2]/Lt,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},M_=function(e){var t=[],n=[],i=-1;return e.split(ms).forEach(function(s){var o=s.match(Io)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},_m=function(e,t,n){var i="",s=(e+i).match(ms),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=S_(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=M_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ms,"1").split(Io),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ms),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},ms=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ba)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),kw=/hsl[a]?\(/,b_=function(e){var t=e.join(" "),n;if(ms.lastIndex=0,ms.test(t))return n=kw.test(t),e[1]=_m(e[1],n),e[0]=_m(e[0],n,M_(e[1])),!0},vl,Mi=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,f,_=function g(m){var p=r()-i,v=m===!0,S,x,b,w;if((p>e||p<0)&&(n+=p-t),i+=p,b=i-n,S=b-o,(S>0||v)&&(w=++h.frame,d=b-h.time*1e3,h.time=b=b/1e3,o+=S+(S>=s?4:s-S),x=1),v||(l=c(g)),x)for(f=0;f<a.length;f++)a[f](b,d,w,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){e_&&(!gd&&xf()&&(ir=gd=window,yf=ir.document||{},Ci.gsap=hi,(ir.gsapVersions||(ir.gsapVersions=[])).push(hi.version),t_(Bc||ir.GreenSockGlobals||!ir.gsap&&ir||{}),x_.forEach(y_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},vl=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),vl=0,c=gl},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,v){var S=p?function(x,b,w,E){m(x,b,w,E),h.remove(S)}:m;return h.remove(m),a[v?"unshift":"push"](S),aa(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h})(),aa=function(){return!vl&&Mi.wake()},ft={},zw=/^[\d.\-M][\d.\-,\s]/,Vw=/["']/g,Hw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Vw,"").trim():+c,i=l.substr(a+1).trim();return t},Gw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Ww=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Hw(t[1])]:Gw(e).split(",").map(o_)):ft._CE&&zw.test(e)?ft._CE("",e):n},T_=function(e){return function(t){return 1-e(1-t)}},w_=function r(e,t){for(var n=e._first,i;n;)n instanceof qn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Zs=function(e,t){return e&&(qt(e)?e:ft[e]||Ww(e))||t},ao=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return li(e,function(a){ft[a]=Ci[a]=s,ft[o=a.toLowerCase()]=n;for(var l in s)ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[a+"."+l]=s[l]}),s},E_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Zu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/md*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*mw((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:E_(a);return s=md/s,l.config=function(c,u){return r(e,c,u)},l},Ju=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:E_(n);return i.config=function(s){return r(e,s)},i};li("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ao(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;ao("Elastic",Zu("in"),Zu("out"),Zu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ao("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ao("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ao("Circ",function(r){return-(Kg(1-r*r)-1)});ao("Sine",function(r){return r===1?1:-pw(r*dw)+1});ao("Back",Ju("in"),Ju("out"),Ju());ft.SteppedEase=ft.steps=Ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-It;return function(a){return((i*Al(0,o,a)|0)+s)*n}}};ia.ease=ft["quad.out"];li("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return bf+=r+","+r+"Params,"});var A_=function(e,t){this.id=fw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:r_,this.set=t?t.getSetter:Rf},xl=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,oa(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),vl||Mi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,oa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(aa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(cu(this,n),!s._dp||s.parent||c_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ar(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===It||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),s_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+pm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+pm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?sa(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Vc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-It?0:this._rts,this.totalTime(Al(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),lu(this),ww(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(aa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==It&&(this._tTime-=It)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=kt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ar(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ai(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Sw);var i=An;return An=n,wf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),An=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,mm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,mm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Di(this,n),ai(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ai(i)),this._dur||(this._zTime=-It),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-It:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-It)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=qt(n)?n:a_,l=function(){var u=i.then;i.then=null,s&&s(),qt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Fa(this)},r})();Ri(xl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});var qn=(function(r){jg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ai(n.sortChildren),zt&&ar(n.parent||zt,Ir(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&u_(Ir(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ja(0,arguments,this),this},t.from=function(i,s,o){return ja(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ja(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,$a(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new tn(i,s,Di(this,o),1),this},t.call=function(i,s,o){return ar(this,tn.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new tn(i,o,Di(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,$a(o).immediateRender=ai(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,$a(a).immediateRender=ai(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:kt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,v,S,x,b,w,E;if(this!==zt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,x=this._start,S=this._ts,p=!S,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=kt(u%m),u===l?(g=this._repeat,d=c):(b=kt(u/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=sa(this._tTime,m),!a&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),w&&g&1&&(d=c-d,E=1),g!==b&&!this._lock){var C=w&&b&1,y=C===(w&&g&1);if(g<b&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(E?0:kt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ti(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,b=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;w_(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Rw(this,kt(a),kt(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!b&&(Ti(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){v=0,_&&(u+=this._zTime=-It);break}}f=_}else{f=this._last;for(var M=i<0?i:d;f;){if(_=f._prev,(f._act||M<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,s,o||An&&wf(f)),d!==this._time||!this._ts&&!p){v=0,_&&(u+=this._zTime=M?-It:It);break}}f=_}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-It)._zTime=d>=a?1:-1,this._ts))return this._start=x,lu(this),this.render(i,s,o);this._onUpdate&&!s&&Ti(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&vs(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Ti(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Xr(s)||(s=Di(this,s,i)),!(i instanceof xl)){if(Bn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(bn(i))return this.addLabel(i,s);if(qt(i))i=tn.delayedCall(0,i);else return this}return this!==i?ar(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ki);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof tn?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return bn(i)?this.removeLabel(i):qt(i)?this.killTweensOf(i):(i.parent===this&&au(this,i),i===this._recent&&(this._recent=this._last),Ks(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(Mi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Di(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=tn.delayedCall(0,s||gl,o);return a.data="isPause",this._hasPause=1,ar(this,a,Di(this,i))},t.removePause=function(i){var s=this._first;for(i=Di(this,i);s;)s._start===i&&s.data==="isPause"&&vs(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)as!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=zi(i),l=this._first,c=Xr(s),u;l;)l instanceof tn?Mw(l._targets,a)&&(c?(!as||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Di(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=tn.to(o,Ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||It,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&oa(_,m,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Ri({startAt:{time:Di(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),gm(this,Di(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),gm(this,Di(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+It)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=kt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Ks(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ks(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ki,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ar(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=kt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;oa(o,o===zt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(zt._ts&&(s_(zt,Vc(i,zt)),i_=Mi.frame),Mi.frame>=dm){dm+=Ei.autoSleep||120;var s=zt._first;if((!s||!s._ts)&&Ei.autoSleep&&Mi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Mi.sleep()}}},e})(xl);Ri(qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Xw=function(e,t,n,i,s,o,a){var l=new ci(this._pt,e,t,0,1,I_,null,s),c=0,u=0,h,d,f,_,g,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=_l(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),d=n.match($u)||[];h=$u.exec(i);)_=h[0],g=i.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Vo(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=$u.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Qg.test(i)||p)&&(l.e=0),this._pt=l,l},Ef=function(e,t,n,i,s,o,a,l,c,u){qt(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:qt(h)?c?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=qt(h)?c?Kw:L_:Cf,_;if(bn(i)&&(~i.indexOf("random(")&&(i=_l(i)),i.charAt(1)==="="&&(_=Vo(d,i)+(On(d)||0),(_||_===0)&&(i=_))),!u||d!==i||bd)return!isNaN(d*i)&&i!==""?(_=new ci(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?Jw:D_,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Sf(t,i),Xw.call(this,e,t,d,i,f,l||Ei.stringFilter,c))},Yw=function(e,t,n,i,s){if(qt(e)&&(e=Ka(e,s,t,n,i)),!vr(e)||e.style&&e.nodeType||Bn(e)||Zg(e))return bn(e)?Ka(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Ka(e[a],s,t,n,i);return o},C_=function(e,t,n,i,s,o){var a,l,c,u;if(xi[e]&&(a=new xi[e]).init(s,a.rawVars?t[e]:Yw(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new ci(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==No))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},as,bd,Af=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!_f,x=e.timeline,b,w,E,C,y,M,P,L,N,U,H,k,z;if(x&&(!d||!s)&&(s="none"),e._ease=Zs(s,ia.ease),e._yEase=h?T_(Zs(h===!0?s:h,ia.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(L=m[0]?js(m[0]).harness:0,k=L&&i[L.prop],b=zc(i,Mf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&_?Mc:yw),g._lazy=0),o){if(vs(e._startAt=tn.set(m,Ri({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&ai(l),startAt:null,delay:0,onUpdate:c&&function(){return Ti(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An||!a&&!f)&&e._startAt.revert(Mc),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),E=Ri({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ai(l),immediateRender:a,stagger:0,parent:p},b),k&&(E[L.prop]=k),vs(e._startAt=tn.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An?e._startAt.revert(Mc):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,It,It);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ai(l)||l&&!_,w=0;w<m.length;w++){if(y=m[w],P=y._gsap||Tf(m)[w]._gsap,e._ptLookup[w]=U={},_d[P.id]&&ps.length&&kc(),H=v===m?w:v.indexOf(y),L&&(N=new L).init(y,k||b,e,H,v)!==!1&&(e._pt=C=new ci(e._pt,y,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(W){U[W]=C}),N.priority&&(M=1)),!L||k)for(E in b)xi[E]&&(N=C_(E,b,e,H,y,v))?N.priority&&(M=1):U[E]=C=Ef.call(e,y,E,"get",b[E],H,v,0,i.stringFilter);e._op&&e._op[w]&&e.kill(y,e._op[w]),S&&e._pt&&(as=e,zt.killTweensOf(y,U,e.globalTime(t)),z=!e.parent,as=0),e._pt&&l&&(_d[P.id]=1)}M&&N_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,d&&t<=0&&x.render(ki,!0,!0)},qw=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return bd=1,e.vars[t]="+=0",Af(e,a),bd=0,l?ml(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Kt(n)+On(h.e)),h.b&&(h.b=u.s+On(h.b))},$w=function(e,t){var n=e[0]?js(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=ra({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},jw=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Bn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ka=function(e,t,n,i,s){return qt(e)?e.call(t,n,i,s):bn(e)&&~e.indexOf("random(")?_l(e):e},R_=bf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",P_={};li(R_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return P_[r]=1});var tn=(function(r){jg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:$a(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=i.parent||zt,S=(Bn(n)||Zg(n)?Xr(n[0]):"length"in i)?[n]:zi(n),x,b,w,E,C,y,M,P;if(a._targets=S.length?Tf(S):ml("GSAP target "+n+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||nc(c)||nc(u)){if(i=a.vars,x=a.timeline=new qn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:S}),x.kill(),x.parent=x._dp=Ir(a),x._start=0,d||nc(c)||nc(u)){if(E=S.length,M=d&&p_(d),vr(d))for(C in d)~R_.indexOf(C)&&(P||(P={}),P[C]=d[C]);for(b=0;b<E;b++)w=zc(i,P_),w.stagger=0,p&&(w.yoyoEase=p),P&&ra(w,P),y=S[b],w.duration=+Ka(c,Ir(a),b,y,S),w.delay=(+Ka(u,Ir(a),b,y,S)||0)-a._delay,!d&&E===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),x.to(y,w,M?M(b,y,S):0),x._ease=ft.none;x.duration()?c=u=0:a.timeline=0}else if(_){$a(Ri(x.vars.defaults,{ease:"none"})),x._ease=Zs(_.ease||i.ease||"none");var L=0,N,U,H;if(Bn(_))_.forEach(function(k){return x.to(S,k,">")}),x.duration();else{w={};for(C in _)C==="ease"||C==="easeEach"||jw(C,_[C],w,_.easeEach);for(C in w)for(N=w[C].sort(function(k,z){return k.t-z.t}),L=0,b=0;b<N.length;b++)U=N[b],H={ease:U.e,duration:(U.t-(b?N[b-1].t:0))/100*c},H[C]=U.v,x.to(S,H,L),L+=H.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return f===!0&&!_f&&(as=Ir(a),zt.killTweensOf(S),as=0),ar(v,Ir(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===kt(v._time)&&ai(h)&&Ew(Ir(a))&&v.data!=="nested")&&(a._tTime=-It,a.render(Math.max(0,-u)||0)),m&&u_(Ir(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-It&&!u?l:i<It?0:i,d,f,_,g,m,p,v,S,x;if(!c)Cw(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(d=kt(h%g),h===l?(_=this._repeat,d=c):(m=kt(h/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,d=c-d),m=sa(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(S&&this._yEase&&w_(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(kt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(h_(this,u?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(d/c),this._from&&(this.ratio=v=1-v),!a&&h&&!s&&!m&&(Ti(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&vd(this,i,s,o),Ti(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Ti(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&vd(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&vs(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Ti(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){vl||Mi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Af(this,c),u=this._ease(c/this._dur),qw(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(cu(this,0),this.parent||l_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!An),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,as&&as.vars.overwrite!==!0)._first||Fa(this),this.parent&&o!==this.timeline.totalDuration()&&oa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?zi(i):a,c=this._ptLookup,u=this._pt,h,d,f,_,g,m,p;if((!s||s==="all")&&Tw(a,l))return s==="all"&&(this._pt=0),Fa(this);for(h=this._op=this._op||[],s!=="all"&&(bn(s)&&(g={},li(s,function(v){return g[v]=1}),s=g),s=$w(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(h[p]=s,_=d,f={}):(f=h[p]=h[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&au(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&Fa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ja(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ja(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return zt.killTweensOf(i,s,o)},e})(xl);Ri(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});li("staggerTo,staggerFrom,staggerFromTo",function(r){tn[r]=function(){var e=new qn,t=yd.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Cf=function(e,t,n){return e[t]=n},L_=function(e,t,n){return e[t](n)},Kw=function(e,t,n,i){return e[t](i.fp,n)},Zw=function(e,t,n){return e.setAttribute(t,n)},Rf=function(e,t){return qt(e[t])?L_:vf(e[t])&&e.setAttribute?Zw:Cf},D_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Jw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},I_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Pf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Qw=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},eE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?au(this,t,"_pt"):t.dep||(n=1),t=i;return!n},tE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},N_=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},ci=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||D_,this.d=l||this,this.set=c||Cf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=tE,this.m=n,this.mt=s,this.tween=i},r})();li(bf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Mf[r]=1});Ci.TweenMax=Ci.TweenLite=tn;Ci.TimelineLite=Ci.TimelineMax=qn;zt=new qn({sortChildren:!1,defaults:ia,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=b_;var Js=[],Tc={},nE=[],vm=0,iE=0,Qu=function(e){return(Tc[e]||nE).map(function(t){return t()})},Td=function(){var e=Date.now(),t=[];e-vm>2&&(Qu("matchMediaInit"),Js.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ir.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Qu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),vm=e,Qu("matchMedia"))},O_=(function(){function r(t,n){this.selector=n&&Sd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=iE++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){qt(n)&&(s=i,i=n,n=qt);var o=this,a=function(){var c=Bt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Sd(s)),Bt=o,h=i.apply(o,arguments),qt(h)&&o._r.push(h),Bt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===qt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Bt;Bt=null,n(this),Bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof tn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof qn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof tn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Js.length;o--;)Js[o].id===this.id&&Js.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),rE=(function(){function r(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){vr(n)||(n={matches:n});var o=new O_(0,s||this.scope),a=o.conditions={},l,c,u;Bt&&!o.selector&&(o.selector=Bt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ir.matchMedia(n[c]),l&&(Js.indexOf(o)<0&&Js.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Td):l.addEventListener("change",Td)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Hc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return y_(i)})},timeline:function(e){return new qn(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,n,i){bn(e)&&(e=zi(e)[0]);var s=js(e||{}).get,o=n?a_:o_;return n==="native"&&(n=""),e&&(t?o((xi[t]&&xi[t].get||s)(e,t,n,i)):function(a,l,c){return o((xi[a]&&xi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=zi(e),e.length>1){var i=e.map(function(u){return hi.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=xi[t],a=js(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;No._pt=0,h.init(e,n?u+n:u,No,0,[e]),h.render(1,h),No._pt&&Pf(1,No)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=hi.to(e,Ri((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Zs(e.ease,ia.ease)),fm(ia,e||{})},config:function(e){return fm(Ei,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!xi[a]&&!Ci[a]&&ml(t+" effect requires "+a+" plugin.")}),ju[t]=function(a,l,c){return n(zi(a),Ri(l||{},s),c)},o&&(qn.prototype[t]=function(a,l,c){return this.add(ju[t](a,vr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=Zs(t)},parseEase:function(e,t){return arguments.length?Zs(e,t):ft},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new qn(e),i,s;for(n.smoothChildTiming=ai(e.smoothChildTiming),zt.remove(n),n._dp=0,n._time=n._tTime=zt._time,i=zt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof tn&&i.vars.onComplete===i._targets[0]))&&ar(n,i,i._start-i._delay),i=s;return ar(zt,n,0),n},context:function(e,t){return e?new O_(e,t):Bt},matchMedia:function(e){return new rE(e)},matchMediaRefresh:function(){return Js.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Td()},addEventListener:function(e,t){var n=Tc[e]||(Tc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Tc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Uw,wrapYoyo:Fw,distribute:p_,random:g_,snap:m_,normalize:Ow,getUnit:On,clamp:Lw,splitColor:S_,toArray:zi,selector:Sd,mapRange:v_,pipe:Iw,unitize:Nw,interpolate:Bw,shuffle:f_},install:t_,effects:ju,ticker:Mi,updateRoot:qn.updateRoot,plugins:xi,globalTimeline:zt,core:{PropTween:ci,globals:n_,Tween:tn,Timeline:qn,Animation:xl,getCache:js,_removeLinkedListItem:au,reverting:function(){return An},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return _f=e}}};li("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Hc[r]=tn[r]});Mi.add(qn.updateRoot);No=Hc.to({},{duration:0});var sE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},oE=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=sE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},eh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(bn(s)&&(l={},li(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}oE(a,s)}}}},hi=Hc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)An?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},eh("roundProps",Md),eh("modifiers"),eh("snap",m_))||Hc;tn.version=qn.version=hi.version="3.14.2";e_=1;xf()&&aa();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;var xm,ls,Ho,Lf,Ws,ym,Df,aE=function(){return typeof window<"u"},Yr={},Fs=180/Math.PI,Go=Math.PI/180,Ao=Math.atan2,Sm=1e8,If=/([A-Z])/g,lE=/(left|right|width|margin|padding|x)/i,cE=/[\s,\(]\S/,ur={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},uE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},dE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},fE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},U_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},F_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},pE=function(e,t,n){return e.style[t]=n},mE=function(e,t,n){return e.style.setProperty(t,n)},gE=function(e,t,n){return e._gsap[t]=n},_E=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},vE=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},xE=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ht="transform",ui=Ht+"Origin",yE=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Yr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ur[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Nr(i,a)}):this.tfm[e]=o.x?o[e]:Nr(i,e),e===ui&&(this.tfm.zOrigin=o.zOrigin);else return ur.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ht)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ui,t,"")),e=Ht}(s||t)&&this.props.push(e,t,s[e])},B_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},SE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(If,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Df(),(!s||!s.isStart)&&!n[Ht]&&(B_(n),i.zOrigin&&n[ui]&&(n[ui]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},k_=function(e,t){var n={target:e,props:[],revert:SE,save:yE};return e._gsap||hi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},z_,Ed=function(e,t){var n=ls.createElementNS?ls.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ls.createElement(e);return n&&n.style?n:ls.createElement(e)},wi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(If,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,la(t)||t,1)||""},Mm="O,Moz,ms,Ms,Webkit".split(","),la=function(e,t,n){var i=t||Ws,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Mm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Mm[o]:"")+e},Ad=function(){aE()&&window.document&&(xm=window,ls=xm.document,Ho=ls.documentElement,Ws=Ed("div")||{style:{}},Ed("div"),Ht=la(Ht),ui=Ht+"Origin",Ws.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",z_=!!la("perspective"),Df=hi.core.reverting,Lf=1)},bm=function(e){var t=e.ownerSVGElement,n=Ed("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ho.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ho.removeChild(n),s},Tm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},V_=function(e){var t,n;try{t=e.getBBox()}catch{t=bm(e),n=1}return t&&(t.width||t.height)||n||(t=bm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Tm(e,["x","cx","x1"])||0,y:+Tm(e,["y","cy","y1"])||0,width:0,height:0}:t},H_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&V_(e))},xs=function(e,t){if(t){var n=e.style,i;t in Yr&&t!==ui&&(t=Ht),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(If,"-$1").toLowerCase())):n.removeAttribute(t)}},cs=function(e,t,n,i,s,o){var a=new ci(e._pt,t,n,0,1,o?F_:U_);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},wm={deg:1,rad:1,turn:1},ME={grid:1,flex:1},ys=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ws.style,l=lE.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,m,p;if(i===o||!s||wm[i]||wm[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&H_(e),(f||o==="%")&&(Yr[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Kt(f?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(d?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ls||!g.appendChild)&&(g=ls.body),m=g._gsap,m&&f&&m.width&&l&&m.time===Mi.time&&!m.uncache)return Kt(s/m.width*h);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+i,_=e[u],v?e.style[t]=v:xs(e,t)}else(f||o==="%")&&!ME[wi(g,"display")]&&(a.position=wi(e,"position")),g===e&&(a.position="static"),g.appendChild(Ws),_=Ws[u],g.removeChild(Ws),a.position="absolute";return l&&f&&(m=js(g),m.time=Mi.time,m.width=g[u]),Kt(d?_*s/h:_&&s?h/_*s:0)},Nr=function(e,t,n,i){var s;return Lf||Ad(),t in ur&&t!=="transform"&&(t=ur[t],~t.indexOf(",")&&(t=t.split(",")[0])),Yr[t]&&t!=="transform"?(s=Sl(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Wc(wi(e,ui))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Gc[t]&&Gc[t](e,t,n)||wi(e,t)||r_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ys(e,t,s,n)+n:s},bE=function(e,t,n,i){if(!n||n==="none"){var s=la(t,e,1),o=s&&wi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=wi(e,"borderTopColor"))}var a=new ci(this._pt,e.style,t,0,1,I_),l=0,c=0,u,h,d,f,_,g,m,p,v,S,x,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=wi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=wi(e,t)||i,g?e.style[t]=g:xs(e,t)),u=[n,i],b_(u),n=u[0],i=u[1],d=n.match(Io)||[],b=i.match(Io)||[],b.length){for(;h=Io.exec(i);)m=h[0],v=i.substring(l,h.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,x=g.substr((f+"").length),m.charAt(1)==="="&&(m=Vo(f,m)+x),p=parseFloat(m),S=m.substr((p+"").length),l=Io.lastIndex-S.length,S||(S=S||Ei.units[t]||x,l===i.length&&(i+=S,a.e+=S)),x!==S&&(f=ys(e,t,g,S)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?F_:U_;return Qg.test(i)&&(a.e=0),this._pt=a,a},Em={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},TE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Em[n]||n,t[1]=Em[i]||i,t.join(" ")},wE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Yr[a]&&(l=1,a=a==="transformOrigin"?ui:Ht),xs(n,a);l&&(xs(n,Ht),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Sl(n,1),o.uncache=1,B_(i)))}},Gc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new ci(e._pt,t,n,0,0,wE);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},yl=[1,0,0,1,0,0],G_={},W_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Am=function(e){var t=wi(e,Ht);return W_(t)?yl:t.substr(7).match(Jg).map(Kt)},Nf=function(e,t){var n=e._gsap||js(e),i=e.style,s=Am(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?yl:s):(s===yl&&!e.offsetParent&&e!==Ho&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ho.appendChild(e)),s=Am(e),l?i.display=l:xs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ho.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Cd=function(e,t,n,i,s,o){var a=e._gsap,l=s||Nf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],v=l[5],S=t.split(" "),x=parseFloat(S[0])||0,b=parseFloat(S[1])||0,w,E,C,y;n?l!==yl&&(E=f*m-_*g)&&(C=x*(m/E)+b*(-g/E)+(g*v-m*p)/E,y=x*(-_/E)+b*(f/E)-(f*v-_*p)/E,x=C,b=y):(w=V_(e),x=w.x+(~S[0].indexOf("%")?x/100*w.width:x),b=w.y+(~(S[1]||S[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&a.smooth?(p=x-c,v=b-u,a.xOffset=h+(p*f+v*g)-p,a.yOffset=d+(p*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[ui]="0px 0px",o&&(cs(o,a,"xOrigin",c,x),cs(o,a,"yOrigin",u,b),cs(o,a,"xOffset",h,a.xOffset),cs(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+b)},Sl=function(e,t){var n=e._gsap||new A_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=wi(e,ui)||"0",u,h,d,f,_,g,m,p,v,S,x,b,w,E,C,y,M,P,L,N,U,H,k,z,W,Q,D,te,Ae,Ce,Pe,ze;return u=h=d=g=m=p=v=S=x=0,f=_=1,n.svg=!!(e.getCTM&&H_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ht]!=="none"?l[Ht]:"")),i.scale=i.rotate=i.translate="none"),E=Nf(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),Cd(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,E)),b=n.xOrigin||0,w=n.yOrigin||0,E!==yl&&(P=E[0],L=E[1],N=E[2],U=E[3],u=H=E[4],h=k=E[5],E.length===6?(f=Math.sqrt(P*P+L*L),_=Math.sqrt(U*U+N*N),g=P||L?Ao(L,P)*Fs:0,v=N||U?Ao(N,U)*Fs+g:0,v&&(_*=Math.abs(Math.cos(v*Go))),n.svg&&(u-=b-(b*P+w*N),h-=w-(b*L+w*U))):(ze=E[6],Ce=E[7],D=E[8],te=E[9],Ae=E[10],Pe=E[11],u=E[12],h=E[13],d=E[14],C=Ao(ze,Ae),m=C*Fs,C&&(y=Math.cos(-C),M=Math.sin(-C),z=H*y+D*M,W=k*y+te*M,Q=ze*y+Ae*M,D=H*-M+D*y,te=k*-M+te*y,Ae=ze*-M+Ae*y,Pe=Ce*-M+Pe*y,H=z,k=W,ze=Q),C=Ao(-N,Ae),p=C*Fs,C&&(y=Math.cos(-C),M=Math.sin(-C),z=P*y-D*M,W=L*y-te*M,Q=N*y-Ae*M,Pe=U*M+Pe*y,P=z,L=W,N=Q),C=Ao(L,P),g=C*Fs,C&&(y=Math.cos(C),M=Math.sin(C),z=P*y+L*M,W=H*y+k*M,L=L*y-P*M,k=k*y-H*M,P=z,H=W),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Kt(Math.sqrt(P*P+L*L+N*N)),_=Kt(Math.sqrt(k*k+ze*ze)),C=Ao(H,k),v=Math.abs(C)>2e-4?C*Fs:0,x=Pe?1/(Pe<0?-Pe:Pe):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!W_(wi(e,Ht)),z&&e.setAttribute("transform",z))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Kt(f),n.scaleY=Kt(_),n.rotation=Kt(g)+a,n.rotationX=Kt(m)+a,n.rotationY=Kt(p)+a,n.skewX=v+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ui]=Wc(c)),n.xOffset=n.yOffset=0,n.force3D=Ei.force3D,n.renderTransform=n.svg?AE:z_?X_:EE,n.uncache=0,n},Wc=function(e){return(e=e.split(" "))[0]+" "+e[1]},th=function(e,t,n){var i=On(t);return Kt(parseFloat(t)+parseFloat(ys(e,"x",n+"px",i)))+i},EE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,X_(e,t)},Ds="0deg",Pa="0px",Is=") ",X_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,S=n.zOrigin,x="",b=p==="auto"&&e&&e!==1||p===!0;if(S&&(h!==Ds||u!==Ds)){var w=parseFloat(u)*Go,E=Math.sin(w),C=Math.cos(w),y;w=parseFloat(h)*Go,y=Math.cos(w),o=th(v,o,E*y*-S),a=th(v,a,-Math.sin(w)*-S),l=th(v,l,C*y*-S+S)}m!==Pa&&(x+="perspective("+m+Is),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(b||o!==Pa||a!==Pa||l!==Pa)&&(x+=l!==Pa||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Is),c!==Ds&&(x+="rotate("+c+Is),u!==Ds&&(x+="rotateY("+u+Is),h!==Ds&&(x+="rotateX("+h+Is),(d!==Ds||f!==Ds)&&(x+="skew("+d+", "+f+Is),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Is),v.style[Ht]=x||"translate(0, 0)"},AE=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,S=parseFloat(o),x=parseFloat(a),b,w,E,C,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Go,c*=Go,b=Math.cos(l)*h,w=Math.sin(l)*h,E=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=Go,y=Math.tan(c-u),y=Math.sqrt(1+y*y),E*=y,C*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),b*=y,w*=y)),b=Kt(b),w=Kt(w),E=Kt(E),C=Kt(C)):(b=h,C=d,w=E=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=ys(f,"x",o,"px"),x=ys(f,"y",a,"px")),(_||g||m||p)&&(S=Kt(S+_-(_*b+g*E)+m),x=Kt(x+g-(_*w+g*C)+p)),(i||s)&&(y=f.getBBox(),S=Kt(S+i/100*y.width),x=Kt(x+s/100*y.height)),y="matrix("+b+","+w+","+E+","+C+","+S+","+x+")",f.setAttribute("transform",y),v&&(f.style[Ht]=y)},CE=function(e,t,n,i,s){var o=360,a=bn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Fs:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Sm)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Sm)%o-~~(c/o)*o)),e._pt=d=new ci(e._pt,t,n,i,c,uE),d.e=u,d.u="deg",e._props.push(n),d},Cm=function(e,t){for(var n in t)e[n]=t[n];return e},RE=function(e,t,n){var i=Cm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ht]=t,a=Sl(n,1),xs(n,Ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ht],o[Ht]=t,a=Sl(n,1),o[Ht]=c);for(l in Yr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=On(c),_=On(u),h=f!==_?ys(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new ci(e._pt,a,l,h,d-h,wd),e._pt.u=_||0,e._props.push(l));Cm(a,i)};li("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Gc[e>1?"border"+r:r]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(_){return Nr(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,h)}});var Y_={name:"css",register:Ad,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,_,g,m,p,v,S,x,b,w,E,C,y;Lf||Ad(),this.styles=this.styles||k_(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(xi[g]&&C_(g,t,n,i,e,s)))){if(f=typeof u,_=Gc[g],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=_l(u)),_)_(this,e,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",ms.lastIndex=0,ms.test(c)||(m=On(c),p=On(u),p?m!==p&&(c=ys(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],bn(c)&&~c.indexOf("random(")&&(c=_l(c)),On(c+"")||c==="auto"||(c+=Ei.units[g]||On(Nr(e,g))||""),(c+"").charAt(1)==="="&&(c=Nr(e,g))):c=Nr(e,g),d=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),g in ur&&(g==="autoAlpha"&&(d===1&&Nr(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,a.visibility),cs(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=ur[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Yr,S){if(this.styles.save(g),y=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=wi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=u,u=wi(e,"perspective"),M?e.style.perspective=M:xs(e,"perspective")}h=parseFloat(u)}if(x||(b=e._gsap,b.renderTransform&&!t.parseTransform||Sl(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,x=this._pt=new ci(this._pt,a,Ht,0,1,b.renderTransform,b,0,-1),x.dep=1),g==="scale")this._pt=new ci(this._pt,b,"scaleY",b.scaleY,(v?Vo(b.scaleY,v+h):h)-b.scaleY||0,wd),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(ui,0,a[ui]),u=TE(u),b.svg?Cd(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&cs(this,b,"zOrigin",b.zOrigin,p),cs(this,a,g,Wc(c),Wc(u)));continue}else if(g==="svgOrigin"){Cd(e,u,1,w,0,this);continue}else if(g in G_){CE(this,b,g,d,v?Vo(d,v+u):u);continue}else if(g==="smoothOrigin"){cs(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){RE(this,u,e);continue}}else g in a||(g=la(g)||g);if(S||(h||h===0)&&(d||d===0)&&!cE.test(u)&&g in a)m=(c+"").substr((d+"").length),h||(h=0),p=On(u)||(g in Ei.units?Ei.units[g]:m),m!==p&&(d=ys(e,g,c,p)),this._pt=new ci(this._pt,S?b:a,g,d,(v?Vo(d,v+h):h)-d,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?fE:wd),this._pt.u=p||0,S&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=dE):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=hE);else if(g in a)bE.call(this,e,g,c,v?v+u:u);else if(g in e)this.add(e,g,c||e[g],v?v+u:u,i,s);else if(g!=="parseTransform"){Sf(g,u);continue}S||(g in a?C.push(g,0,a[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,c||e[g])),o.push(g)}}E&&N_(this)},render:function(e,t){if(t.tween._time||!Df())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Nr,aliases:ur,getSetter:function(e,t,n){var i=ur[t];return i&&i.indexOf(",")<0&&(t=i),t in Yr&&t!==ui&&(e._gsap.x||Nr(e,"x"))?n&&ym===n?t==="scale"?_E:gE:(ym=n||{})&&(t==="scale"?vE:xE):e.style&&!vf(e.style[t])?pE:~t.indexOf("-")?mE:Rf(e,t)},core:{_removeProperty:xs,_getMatrix:Nf}};hi.utils.checkPrefix=la;hi.core.getStyleSaver=k_;(function(r,e,t,n){var i=li(r+","+e+","+t,function(s){Yr[s]=1});li(e,function(s){Ei.units[s]="deg",G_[s]=1}),ur[i[13]]=r+","+e,li(n,function(s){var o=s.split(":");ur[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");li("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ei.units[r]="px"});hi.registerPlugin(Y_);var Yi=hi.registerPlugin(Y_)||hi;Yi.core.Tween;var PE="1.3.17";function q_(r,e,t){return Math.max(r,Math.min(e,t))}function LE(r,e,t){return(1-t)*r+t*e}function DE(r,e,t,n){return LE(r,e,1-Math.exp(-t*n))}function IE(r,e){return(r%e+e)%e}var NE=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=q_(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=DE(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function OE(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var UE=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=OE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},$_=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},Rm=100/6,ts={passive:!1},FE=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ts),this.element.addEventListener("touchstart",this.onTouchStart,ts),this.element.addEventListener("touchmove",this.onTouchMove,ts),this.element.addEventListener("touchend",this.onTouchEnd,ts)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new $_;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,ts),this.element.removeEventListener("touchstart",this.onTouchStart,ts),this.element.removeEventListener("touchmove",this.onTouchMove,ts),this.element.removeEventListener("touchend",this.onTouchEnd,ts)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Rm:n===2?this.window.width:1,s=n===1?Rm:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Pm=r=>Math.min(1,1.001-Math.pow(2,-10*r)),BE=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new NE;emitter=new $_;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d=h==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:v=!0,autoRaf:S=!1,anchors:x=!1,autoToggle:b=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:C=E,stopInertiaOnNavigate:y=!1}={}){window.lenisVersion=PE,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Pm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:v,autoRaf:S,anchors:x,autoToggle:b,allowNestedScroll:w,naiveDimensions:C,stopInertiaOnNavigate:y},this.dimensions=new UE(r,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new FE(t,{touchMultiplier:f,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(i=>i.getAttribute("href")?.includes("#"));if(n){const i=n.getAttribute("href");if(i){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${i.split("#")[1]}`;this.scrollTo(o,s)}}}this.options.stopInertiaOnNavigate&&t.find(i=>i.host===window.location.host)&&this.reset()};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,g=i&&n.type==="touchend";g&&(d=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!u)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?(d=document.querySelector(r),d||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(d=r),d){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?_.left:_.top}const f=d.getBoundingClientRect();r=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const d=r-this.animatedScroll;d>this.limit/2?r=r-this.limit:d<-this.limit/2&&(r=r+this.limit)}}else r=q_(0,r,this.limit);if(r===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=r),typeof o=="number"&&typeof a!="function"?a=Pm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,r,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(d,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),i&&(this.targetScroll=d),f||this.emit(),f&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,o,a,l,c,u,h,d;const f=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const b=window.getComputedStyle(r);i.computedStyle=b;const w=b.overflowX,E=b.overflowY;if(s=["auto","overlay","scroll"].includes(w),o=["auto","overlay","scroll"].includes(E),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||f==="vertical"&&!o||f==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,h=r.clientWidth,d=r.clientHeight,a=c>h,l=u>d,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=h,i.clientHeight=d}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,d=i.clientHeight;if(!s&&!o||!a&&!l||f==="vertical"&&(!o||!l)||f==="horizontal"&&(!s||!a))return!1;let _;if(f==="horizontal")_="x";else if(f==="vertical")_="y";else{const b=e!==0,w=t!==0;b&&s&&a&&(_="x"),w&&o&&l&&(_="y")}if(!_)return!1;let g,m,p,v,S;if(_==="x")g=r.scrollLeft,m=c-h,p=e,v=s,S=a;else if(_==="y")g=r.scrollTop,m=u-d,p=t,v=o,S=l;else return!1;return(p>0?g<m:g>0)&&v&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?IE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Lm(r,e){if(e===fv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===cd||e===Eg){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===cd)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class uu extends ga{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new GE(t)}),this.register(function(t){return new WE(t)}),this.register(function(t){return new QE(t)}),this.register(function(t){return new e1(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new YE(t)}),this.register(function(t){return new qE(t)}),this.register(function(t){return new $E(t)}),this.register(function(t){return new jE(t)}),this.register(function(t){return new HE(t)}),this.register(function(t){return new KE(t)}),this.register(function(t){return new XE(t)}),this.register(function(t){return new JE(t)}),this.register(function(t){return new ZE(t)}),this.register(function(t){return new zE(t)}),this.register(function(t){return new n1(t)}),this.register(function(t){return new i1(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=qa.extractUrlBase(e);o=qa.resolveURL(c,this.path)}else o=qa.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Hg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===j_){try{o[ut.KHR_BINARY_GLTF]=new r1(e)}catch(h){i&&i(h);return}s=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new _1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case ut.KHR_MATERIALS_UNLIT:o[h]=new VE;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[h]=new s1(s,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[h]=new o1;break;case ut.KHR_MESH_QUANTIZATION:o[h]=new a1;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function kE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zE{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new $e(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Zn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ji(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Gx(u),c.distance=h;break;case"spot":c=new Vx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),tr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class VE{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return Gs}extendParams(e,t,n){const i=[];e.color=new $e(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,wn))}return Promise.all(i)}}class HE{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class GE{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(a,a)}return Promise.all(s)}}class WE{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class XE{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class YE{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,wn)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class qE{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class $E{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(a[0],a[1],a[2],Zn),Promise.all(s)}}class jE{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class KE{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(a[0],a[1],a[2],Zn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,wn)),Promise.all(s)}}class ZE{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class JE{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class QE{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class e1{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class t1{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class n1{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class i1{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ii.TRIANGLES&&c.mode!==Ii.TRIANGLE_STRIP&&c.mode!==Ii.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const _ of h){const g=new nt,m=new F,p=new gr,v=new F(1,1,1),S=new mx(_.geometry,_.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),S.setMatrixAt(x,g.compose(m,p,v));for(const x in l)if(x==="_COLOR_0"){const b=l[x];S.instanceColor=new hd(b.array,b.itemSize,b.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);Gt.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),f.push(S)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const j_="glTF",La=12,Dm={JSON:1313821514,BIN:5130562};class r1{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,La),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==j_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-La,s=new DataView(e,La);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Dm.JSON){const c=new Uint8Array(e,La+o,a);this.content=n.decode(c)}else if(l===Dm.BIN){const c=La+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class s1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Rd[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Rd[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Wo[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const _ in f.attributes){const g=f.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}h(f)},a,c,Zn,d)})})}}class o1{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class a1{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}}class K_ extends El{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,_=e*c,g=_-c,m=-2*f+3*d,p=f-d,v=1-m,S=p-d+h;for(let x=0;x!==a;x++){const b=o[g+x+a],w=o[g+x+l]*u,E=o[_+x+a],C=o[_+x]*u;s[x]=v*b+S*w+m*E+p*C}return s}}const l1=new gr;class c1 extends K_{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return l1.fromArray(s).normalize().toArray(s),s}}const Ii={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Wo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Im={9728:cn,9729:un,9984:xg,9985:gc,9986:Oa,9987:Ur},Nm={33071:lr,33648:Lc,10497:Ko},nh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ns={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},u1={CUBICSPLINE:void 0,LINEAR:hl,STEP:ul},ih={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function h1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new bs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hr})),r.DefaultMaterial}function Ns(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function tr(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function d1(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function f1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function p1(r){let e;const t=r.extensions&&r.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rh(t.attributes):e=r.indices+":"+rh(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+rh(r.targets[n]);return e}function rh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Pd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function m1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const g1=new nt;class _1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new kx(this.options.manager):this.textureLoader=new Xx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ns(s,a,i),tr(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(qa.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=nh[i.type],a=Wo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Kn(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=nh[i.type],c=Wo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(f&&f!==h){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(v);S||(g=new c(a,p*f,i.count*f/u),S=new ux(g,f/u),t.cache.add(v,S)),m=new sf(S,l,d%f/u,_)}else a===null?g=new c(i.count*l):g=new c(a,d,i.count*l),m=new Kn(g,l,_);if(i.sparse!==void 0){const p=nh.SCALAR,v=Wo[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,b=new v(o[1],S,i.sparse.count*p),w=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new Kn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,C=b.length;E<C;E++){const y=b[E];if(m.setX(y,w[E*l]),l>=2&&m.setY(y,w[E*l+1]),l>=3&&m.setZ(y,w[E*l+2]),l>=4&&m.setW(y,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Im[d.magFilter]||un,u.minFilter=Im[d.minFilter]||Ur,u.wrapS=Nm[d.wrapS]||Ko,u.wrapT=Nm[d.wrapT]||Ko,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==cn&&u.minFilter!==un,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new Mn(g);m.needsUpdate=!0,d(m)}),t.load(qa.resolveURL(h,s.path),_,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),tr(h,o),h.userData.mimeType=o.mimeType||m1(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[ut.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Bg,Zi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Fg,Zi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return bs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){const h=i[ut.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new $e(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Zn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,wn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=or);const u=s.alphaMode||ih.OPAQUE;if(u===ih.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ih.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Gs&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Be(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Gs&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Gs){const h=s.emissiveFactor;a.emissive=new $e().setRGB(h[0],h[1],h[2],Zn)}return s.emissiveTexture!==void 0&&o!==Gs&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,wn)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),tr(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ns(i,h,s),h})}createUniqueName(e){const t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Om(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=p1(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Om(new Qn,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?h1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,_=u.length;f<_;f++){const g=u[f],m=o[f];let p;const v=c[f];if(m.mode===Ii.TRIANGLES||m.mode===Ii.TRIANGLE_STRIP||m.mode===Ii.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new dx(g,v):new At(g,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Ii.TRIANGLE_STRIP?p.geometry=Lm(p.geometry,Eg):m.mode===Ii.TRIANGLE_FAN&&(p.geometry=Lm(p.geometry,cd));else if(m.mode===Ii.LINES)p=new xx(g,v);else if(m.mode===Ii.LINE_STRIP)p=new cf(g,v);else if(m.mode===Ii.LINE_LOOP)p=new yx(g,v);else if(m.mode===Ii.POINTS)p=new Sx(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&f1(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),tr(p,s),m.extensions&&Ns(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,_=h.length;f<_;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&Ns(i,h[0],s),h[0];const d=new Sn;s.extensions&&Ns(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,_=h.length;f<_;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yn(fs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new iu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),tr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new nt;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new af(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],_=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,v=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],_=h[2],g=h[3],m=h[4],p=[];for(let S=0,x=d.length;S<x;S++){const b=d[S],w=f[S],E=_[S],C=g[S],y=m[S];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const M=n._createAnimationTracks(b,w,E,C,y);if(M)for(let P=0;P<M.length;P++)p.push(M[P])}const v=new Dx(s,void 0,p);return tr(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,g1)});for(let f=0,_=h.length;f<_;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Ug:c.length>1?u=new Sn:c.length===1?u=c[0]:u=new Gt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),tr(u,s),s.extensions&&Ns(n,u,s),s.matrix!==void 0){const h=new nt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Sn;n.name&&(s.name=i.createUniqueName(n.name)),tr(s,n),n.extensions&&Ns(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof Zi||d instanceof Mn)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];ns[s.path]===ns.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ns[s.path]){case ns.weights:c=ea;break;case ns.rotation:c=ta;break;case ns.translation:case ns.scale:c=na;break;default:n.itemSize===1?c=ea:c=na;break}const u=i.interpolation!==void 0?u1[i.interpolation]:hl,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const _=new c(l[d]+"."+ns[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Pd(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ta?c1:K_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function v1(r,e,t){const n=e.attributes,i=new Vt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const u=Pd(Wo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new F,l=new F;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const g=Pd(Wo[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new yr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Om(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Rd[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return dt.workingColorSpace!==Zn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${dt.workingColorSpace}" not supported.`),tr(r,e),v1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?d1(r,e.targets,t):r})}class fr{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),fr.nextNameID=fr.nextNameID||0,this.$name.id=`lil-gui-name-${++fr.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class x1 extends fr{constructor(e,t,n){super(e,t,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ld(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const y1={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Ld,toHexString:Ld},Ml={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},S1={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,e,t=1){const n=Ml.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Ml.toHexString(i)}},M1={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=Ml.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Ml.toHexString(i)}},b1=[y1,Ml,S1,M1];function T1(r){return b1.find(e=>e.match(r))}class w1 extends fr{constructor(e,t,n,i){super(e,t,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=T1(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Ld(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class sh extends fr{constructor(e,t,n){super(e,t,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class E1 extends fr{constructor(e,t,n,i,s,o){super(e,t,n,"lil-number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+v),this.$input.value=this.getValue())},i=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let o=!1,a,l,c,u,h;const d=5,f=v=>{a=v.clientX,l=c=v.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",g)},_=v=>{if(o){const S=v.clientX-a,x=v.clientY-l;Math.abs(x)>d?(v.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>d&&g()}if(!o){const S=v.clientY-c;h-=S*this._step*this._arrowKeyMultiplier(v),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=v.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,v,S,x,b)=>(p-v)/(S-v)*(b-x)+x,t=p=>{const v=this.$slider.getBoundingClientRect();let S=e(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(S)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=p=>{if(o){const v=p.touches[0].clientX-a,S=p.touches[0].clientY-l;Math.abs(v)>Math.abs(S)?c(p):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),_=400;let g;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const S=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(f,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class A1 extends fr{constructor(e,t,n,i){super(e,t,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class C1 extends fr{constructor(e,t,n){super(e,t,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var R1=`.lil-gui {
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
}`;function P1(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Um=!1;class Of{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Um&&a&&(P1(R1),Um=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new A1(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new E1(this,e,t,n,i,s);case"boolean":return new x1(this,e,t);case"string":return new C1(this,e,t);case"function":return new sh(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new w1(this,e,t,n)}addFolder(e){const t=new Of({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof sh||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof sh)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function L1(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function D1(r,e,t){return e&&L1(r.prototype,e),r}var En,wc,bi,us,hs,Xo,Z_,Bs,Za,J_,Br,Xi,Q_,e0=function(){return En||typeof window<"u"&&(En=window.gsap)&&En.registerPlugin&&En},t0=1,Oo=[],lt=[],pr=[],Ja=Date.now,Dd=function(e,t){return t},I1=function(){var e=Za.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,pr),lt=n,pr=i,Dd=function(o,a){return t[o](a)}},gs=function(e,t){return~pr.indexOf(e)&&pr[pr.indexOf(e)+1][t]},Qa=function(e){return!!~J_.indexOf(e)},Hn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Vn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ic="scrollLeft",rc="scrollTop",Id=function(){return Br&&Br.isPressed||lt.cache++},Xc=function(e,t){var n=function i(s){if(s||s===0){t0&&(bi.history.scrollRestoration="manual");var o=Br&&Br.isPressed;s=i.v=Math.round(s)||(Br&&Br.iOS?1:0),e(s),i.cacheID=lt.cache,o&&Dd("ss",s)}else(t||lt.cache!==i.cacheID||Dd("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},$n={s:ic,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Xc(function(r){return arguments.length?bi.scrollTo(r,ln.sc()):bi.pageXOffset||us[ic]||hs[ic]||Xo[ic]||0})},ln={s:rc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:$n,sc:Xc(function(r){return arguments.length?bi.scrollTo($n.sc(),r):bi.pageYOffset||us[rc]||hs[rc]||Xo[rc]||0})},si=function(e,t){return(t&&t._ctx&&t._ctx.selector||En.utils.toArray)(e)[0]||(typeof e=="string"&&En.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},N1=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ss=function(e,t){var n=t.s,i=t.sc;Qa(e)&&(e=us.scrollingElement||hs);var s=lt.indexOf(e),o=i===ln.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+o]||Hn(e,"scroll",Id);var a=lt[s+o],l=a||(lt[s+o]=Xc(gs(e,n),!0)||(Qa(e)?i:Xc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=En.getProperty(e,"scrollBehavior")==="smooth"),l},Nd=function(e,t,n){var i=e,s=e,o=Ja(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=Ja();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},d=function(_){var g=a,m=s,p=Ja();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:d}},Da=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Fm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},n0=function(){Za=En.core.globals().ScrollTrigger,Za&&Za.core&&I1()},i0=function(e){return En=e||e0(),!wc&&En&&typeof document<"u"&&document.body&&(bi=window,us=document,hs=us.documentElement,Xo=us.body,J_=[bi,us,hs,Xo],En.utils.clamp,Q_=En.core.context||function(){},Bs="onpointerenter"in Xo?"pointer":"mouse",Z_=Zt.isTouch=bi.matchMedia&&bi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in bi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Xi=Zt.eventTypes=("ontouchstart"in hs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in hs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return t0=0},500),n0(),wc=1),wc};$n.op=ln;lt.cache=0;var Zt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){wc||i0(En)||console.warn("Please gsap.registerPlugin(Observer)"),Za||n0();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,v=n.onDrag,S=n.onPress,x=n.onRelease,b=n.onRight,w=n.onLeft,E=n.onUp,C=n.onDown,y=n.onChangeX,M=n.onChangeY,P=n.onChange,L=n.onToggleX,N=n.onToggleY,U=n.onHover,H=n.onHoverEnd,k=n.onMove,z=n.ignoreCheck,W=n.isNormalizer,Q=n.onGestureStart,D=n.onGestureEnd,te=n.onWheel,Ae=n.onEnable,Ce=n.onDisable,Pe=n.onClick,ze=n.scrollSpeed,K=n.capture,J=n.allowClicks,de=n.lockAxis,Le=n.onLockAxis;this.target=a=si(a)||hs,this.vars=n,f&&(f=En.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,ze=ze||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(bi.getComputedStyle(Xo).lineHeight)||22);var xe,Ve,ht,ne,Ue,Ke,Fe,X=this,I=0,pt=0,Je=n.passive||!u&&n.passive!==!1,He=Ss(a,$n),re=Ss(a,ln),R=He(),T=re(),B=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Xi[0]==="pointerdown",j=Qa(a),Z=a.ownerDocument||us,$=[0,0,0],ye=[0,0,0],le=0,Ee=function(){return le=Ja()},we=function(De,Qe){return(X.event=De)&&f&&N1(De.target,f)||Qe&&B&&De.pointerType!=="touch"||z&&z(De,Qe)},se=function(){X._vx.reset(),X._vy.reset(),Ve.pause(),h&&h(X)},ce=function(){var De=X.deltaX=Fm($),Qe=X.deltaY=Fm(ye),_e=Math.abs(De)>=i,je=Math.abs(Qe)>=i;P&&(_e||je)&&P(X,De,Qe,$,ye),_e&&(b&&X.deltaX>0&&b(X),w&&X.deltaX<0&&w(X),y&&y(X),L&&X.deltaX<0!=I<0&&L(X),I=X.deltaX,$[0]=$[1]=$[2]=0),je&&(C&&X.deltaY>0&&C(X),E&&X.deltaY<0&&E(X),M&&M(X),N&&X.deltaY<0!=pt<0&&N(X),pt=X.deltaY,ye[0]=ye[1]=ye[2]=0),(ne||ht)&&(k&&k(X),ht&&(m&&ht===1&&m(X),v&&v(X),ht=0),ne=!1),Ke&&!(Ke=!1)&&Le&&Le(X),Ue&&(te(X),Ue=!1),xe=0},Se=function(De,Qe,_e){$[_e]+=De,ye[_e]+=Qe,X._vx.update(De),X._vy.update(Qe),c?xe||(xe=requestAnimationFrame(ce)):ce()},ge=function(De,Qe){de&&!Fe&&(X.axis=Fe=Math.abs(De)>Math.abs(Qe)?"x":"y",Ke=!0),Fe!=="y"&&($[2]+=De,X._vx.update(De,!0)),Fe!=="x"&&(ye[2]+=Qe,X._vy.update(Qe,!0)),c?xe||(xe=requestAnimationFrame(ce)):ce()},ae=function(De){if(!we(De,1)){De=Da(De,u);var Qe=De.clientX,_e=De.clientY,je=Qe-X.x,Oe=_e-X.y,Ze=X.isDragging;X.x=Qe,X.y=_e,(Ze||(je||Oe)&&(Math.abs(X.startX-Qe)>=s||Math.abs(X.startY-_e)>=s))&&(ht||(ht=Ze?2:1),Ze||(X.isDragging=!0),ge(je,Oe))}},qe=X.onPress=function(Me){we(Me,1)||Me&&Me.button||(X.axis=Fe=null,Ve.pause(),X.isPressed=!0,Me=Da(Me),I=pt=0,X.startX=X.x=Me.clientX,X.startY=X.y=Me.clientY,X._vx.reset(),X._vy.reset(),Hn(W?a:Z,Xi[1],ae,Je,!0),X.deltaX=X.deltaY=0,S&&S(X))},O=X.onRelease=function(Me){if(!we(Me,1)){Vn(W?a:Z,Xi[1],ae,!0);var De=!isNaN(X.y-X.startY),Qe=X.isDragging,_e=Qe&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),je=Da(Me);!_e&&De&&(X._vx.reset(),X._vy.reset(),u&&J&&En.delayedCall(.08,function(){if(Ja()-le>300&&!Me.defaultPrevented){if(Me.target.click)Me.target.click();else if(Z.createEvent){var Oe=Z.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,bi,1,je.screenX,je.screenY,je.clientX,je.clientY,!1,!1,!1,!1,0,null),Me.target.dispatchEvent(Oe)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,h&&Qe&&!W&&Ve.restart(!0),ht&&ce(),p&&Qe&&p(X),x&&x(X,_e)}},fe=function(De){return De.touches&&De.touches.length>1&&(X.isGesturing=!0)&&Q(De,X.isDragging)},oe=function(){return(X.isGesturing=!1)||D(X)},pe=function(De){if(!we(De)){var Qe=He(),_e=re();Se((Qe-R)*ze,(_e-T)*ze,1),R=Qe,T=_e,h&&Ve.restart(!0)}},ie=function(De){if(!we(De)){De=Da(De,u),te&&(Ue=!0);var Qe=(De.deltaMode===1?l:De.deltaMode===2?bi.innerHeight:1)*_;Se(De.deltaX*Qe,De.deltaY*Qe,0),h&&!W&&Ve.restart(!0)}},ee=function(De){if(!we(De)){var Qe=De.clientX,_e=De.clientY,je=Qe-X.x,Oe=_e-X.y;X.x=Qe,X.y=_e,ne=!0,h&&Ve.restart(!0),(je||Oe)&&ge(je,Oe)}},he=function(De){X.event=De,U(X)},ke=function(De){X.event=De,H(X)},mt=function(De){return we(De)||Da(De,u)&&Pe(X)};Ve=X._dc=En.delayedCall(d||.25,se).pause(),X.deltaX=X.deltaY=0,X._vx=Nd(0,50,!0),X._vy=Nd(0,50,!0),X.scrollX=He,X.scrollY=re,X.isDragging=X.isGesturing=X.isPressed=!1,Q_(this),X.enable=function(Me){return X.isEnabled||(Hn(j?Z:a,"scroll",Id),o.indexOf("scroll")>=0&&Hn(j?Z:a,"scroll",pe,Je,K),o.indexOf("wheel")>=0&&Hn(a,"wheel",ie,Je,K),(o.indexOf("touch")>=0&&Z_||o.indexOf("pointer")>=0)&&(Hn(a,Xi[0],qe,Je,K),Hn(Z,Xi[2],O),Hn(Z,Xi[3],O),J&&Hn(a,"click",Ee,!0,!0),Pe&&Hn(a,"click",mt),Q&&Hn(Z,"gesturestart",fe),D&&Hn(Z,"gestureend",oe),U&&Hn(a,Bs+"enter",he),H&&Hn(a,Bs+"leave",ke),k&&Hn(a,Bs+"move",ee)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=ne=ht=!1,X._vx.reset(),X._vy.reset(),R=He(),T=re(),Me&&Me.type&&qe(Me),Ae&&Ae(X)),X},X.disable=function(){X.isEnabled&&(Oo.filter(function(Me){return Me!==X&&Qa(Me.target)}).length||Vn(j?Z:a,"scroll",Id),X.isPressed&&(X._vx.reset(),X._vy.reset(),Vn(W?a:Z,Xi[1],ae,!0)),Vn(j?Z:a,"scroll",pe,K),Vn(a,"wheel",ie,K),Vn(a,Xi[0],qe,K),Vn(Z,Xi[2],O),Vn(Z,Xi[3],O),Vn(a,"click",Ee,!0),Vn(a,"click",mt),Vn(Z,"gesturestart",fe),Vn(Z,"gestureend",oe),Vn(a,Bs+"enter",he),Vn(a,Bs+"leave",ke),Vn(a,Bs+"move",ee),X.isEnabled=X.isPressed=X.isDragging=!1,Ce&&Ce(X))},X.kill=X.revert=function(){X.disable();var Me=Oo.indexOf(X);Me>=0&&Oo.splice(Me,1),Br===X&&(Br=0)},Oo.push(X),W&&Qa(a)&&(Br=X),X.enable(g)},D1(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Zt.version="3.14.2";Zt.create=function(r){return new Zt(r)};Zt.register=i0;Zt.getAll=function(){return Oo.slice()};Zt.getById=function(r){return Oo.filter(function(e){return e.vars.id===r})[0]};e0()&&En.registerPlugin(Zt);var Re,Po,at,Ot,yi,xt,Uf,Yc,bl,el,ka,sc,Ln,hu,Od,Xn,Bm,km,Lo,r0,oh,s0,Wn,Ud,o0,a0,is,Fd,Ff,Yo,Bf,tl,Bd,ah,oc=1,In=Date.now,lh=In(),Vi=0,za=0,zm=function(e,t,n){var i=vi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Vm=function(e,t){return t&&(!vi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},O1=function r(){return za&&requestAnimationFrame(r)},Hm=function(){return hu=1},Gm=function(){return hu=0},rr=function(e){return e},Va=function(e){return Math.round(e*1e5)/1e5||0},l0=function(){return typeof window<"u"},c0=function(){return Re||l0()&&(Re=window.gsap)&&Re.registerPlugin&&Re},io=function(e){return!!~Uf.indexOf(e)},u0=function(e){return(e==="Height"?Bf:at["inner"+e])||yi["client"+e]||xt["client"+e]},h0=function(e){return gs(e,"getBoundingClientRect")||(io(e)?function(){return Pc.width=at.innerWidth,Pc.height=Bf,Pc}:function(){return Or(e)})},U1=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=gs(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?u0(s):e["client"+s])||0}},F1=function(e,t){return!t||~pr.indexOf(e)?h0(e):function(){return Pc}},hr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=gs(e,n))?o()-h0(e)()[s]:io(e)?(yi[n]||xt[n])-u0(i):e[n]-e["offset"+i])},ac=function(e,t){for(var n=0;n<Lo.length;n+=3)(!t||~t.indexOf(Lo[n+1]))&&e(Lo[n],Lo[n+1],Lo[n+2])},vi=function(e){return typeof e=="string"},Un=function(e){return typeof e=="function"},Ha=function(e){return typeof e=="number"},ks=function(e){return typeof e=="object"},Ia=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ch=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Co=Math.abs,d0="left",f0="top",kf="right",zf="bottom",Qs="width",eo="height",nl="Right",il="Left",rl="Top",sl="Bottom",en="padding",Ni="margin",ca="Width",Vf="Height",an="px",Oi=function(e){return at.getComputedStyle(e)},B1=function(e){var t=Oi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Wm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Or=function(e,t){var n=t&&Oi(e)[Od]!=="matrix(1, 0, 0, 1, 0, 0)"&&Re.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},qc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},p0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},k1=function(e){return function(t){return Re.utils.snap(p0(e),t)}},Hf=function(e){var t=Re.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},z1=function(e){return function(t,n){return Hf(p0(e))(t,n.direction)}},lc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},_n=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},cc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Xm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},uc={toggleActions:"play",anticipatePin:0},$c={top:0,left:0,center:.5,bottom:1,right:1},Ec=function(e,t){if(vi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in $c?$c[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},hc=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,_=Ot.createElement("div"),g=io(n)||gs(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?xt:n,v=e.indexOf("start")!==-1,S=v?c:u,x="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(i===ln?kf:zf)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Ac(_,0,i,v),_},Ac=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+ca]=1,s["border"+a+ca]=0,s[n.p]=t+"px",Re.set(e,s)},it=[],kd={},Tl,Ym=function(){return In()-Vi>34&&(Tl||(Tl=requestAnimationFrame(Vr)))},Ro=function(){(!Wn||!Wn.isPressed||Wn.startX>xt.clientWidth)&&(lt.cache++,Wn?Tl||(Tl=requestAnimationFrame(Vr)):Vr(),Vi||so("scrollStart"),Vi=In())},uh=function(){a0=at.innerWidth,o0=at.innerHeight},Ga=function(e){lt.cache++,(e===!0||!Ln&&!s0&&!Ot.fullscreenElement&&!Ot.webkitFullscreenElement&&(!Ud||a0!==at.innerWidth||Math.abs(at.innerHeight-o0)>at.innerHeight*.25))&&Yc.restart(!0)},ro={},V1=[],m0=function r(){return _n(ct,"scrollEnd",r)||Xs(!0)},so=function(e){return ro[e]&&ro[e].map(function(t){return t()})||V1},_i=[],g0=function(e){for(var t=0;t<_i.length;t+=5)(!e||_i[t+4]&&_i[t+4].query===e)&&(_i[t].style.cssText=_i[t+1],_i[t].getBBox&&_i[t].setAttribute("transform",_i[t+2]||""),_i[t+3].uncache=1)},_0=function(){return lt.forEach(function(e){return Un(e)&&++e.cacheID&&(e.rec=e())})},Gf=function(e,t){var n;for(Xn=0;Xn<it.length;Xn++)n=it[Xn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));tl=!0,t&&g0(t),t||so("revert")},v0=function(e,t){lt.cache++,(t||!Yn)&&lt.forEach(function(n){return Un(n)&&n.cacheID++&&(n.rec=0)}),vi(e)&&(at.history.scrollRestoration=Ff=e)},Yn,to=0,qm,H1=function(){if(qm!==to){var e=qm=to;requestAnimationFrame(function(){return e===to&&Xs(!0)})}},x0=function(){xt.appendChild(Yo),Bf=!Wn&&Yo.offsetHeight||at.innerHeight,xt.removeChild(Yo)},$m=function(e){return bl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Xs=function(e,t){if(yi=Ot.documentElement,xt=Ot.body,Uf=[at,Ot,yi,xt],Vi&&!e&&!tl){vn(ct,"scrollEnd",m0);return}x0(),Yn=ct.isRefreshing=!0,tl||_0();var n=so("refreshInit");r0&&ct.sort(),t||Gf(),lt.forEach(function(i){Un(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),tl=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Bd=1,$m(!0),it.forEach(function(i){var s=hr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),$m(!1),Bd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){Un(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),v0(Ff,1),Yc.pause(),to++,Yn=2,Vr(2),it.forEach(function(i){return Un(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Yn=ct.isRefreshing=!1,so("refresh")},zd=0,Cc=1,ol,Vr=function(e){if(e===2||!Yn&&!tl){ct.isUpdating=!0,ol&&ol.update(0);var t=it.length,n=In(),i=n-lh>=50,s=t&&it[0].scroll();if(Cc=zd>s?-1:1,Yn||(zd=s),i&&(Vi&&!hu&&n-Vi>200&&(Vi=0,so("scrollEnd")),ka=lh,lh=n),Cc<0){for(Xn=t;Xn-- >0;)it[Xn]&&it[Xn].update(0,i);Cc=1}else for(Xn=0;Xn<t;Xn++)it[Xn]&&it[Xn].update(0,i);ct.isUpdating=!1}Tl=0},Vd=[d0,f0,zf,kf,Ni+sl,Ni+nl,Ni+rl,Ni+il,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Rc=Vd.concat([Qs,eo,"boxSizing","max"+ca,"max"+Vf,"position",Ni,en,en+rl,en+nl,en+sl,en+il]),G1=function(e,t,n){qo(n);var i=e._gsap;if(i.spacerIsNative)qo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},hh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Vd.length,o=t.style,a=e.style,l;s--;)l=Vd[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[zf]=a[kf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Qs]=qc(e,$n)+an,o[eo]=qc(e,ln)+an,o[en]=a[Ni]=a[f0]=a[d0]="0",qo(i),a[Qs]=a["max"+ca]=n[Qs],a[eo]=a["max"+Vf]=n[eo],a[en]=n[en],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},W1=/([A-Z])/g,qo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Re.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(W1,"-$1").toLowerCase())}},dc=function(e){for(var t=Rc.length,n=e.style,i=[],s=0;s<t;s++)i.push(Rc[s],n[Rc[s]]);return i.t=e,i},X1=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Pc={left:0,top:0},jm=function(e,t,n,i,s,o,a,l,c,u,h,d,f,_){Un(e)&&(e=e(l)),vi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Ec("0"+e.substr(3),n):0));var g=f?f.time():0,m,p,v;if(f&&f.seek(0),isNaN(e)||(e=+e),Ha(e))f&&(e=Re.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&Ac(a,n,i,!0);else{Un(t)&&(t=t(l));var S=(e||"0").split(" "),x,b,w,E;v=si(t,l)||xt,x=Or(v)||{},(!x||!x.left&&!x.top)&&Oi(v).display==="none"&&(E=v.style.display,v.style.display="block",x=Or(v),E?v.style.display=E:v.style.removeProperty("display")),b=Ec(S[0],x[i.d]),w=Ec(S[1]||"0",n),e=x[i.p]-c[i.p]-u+b+s-w,a&&Ac(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var C=e+n,y=o._isStart;m="scroll"+i.d2,Ac(o,C,i,y&&C>20||!y&&(h?Math.max(xt[m],yi[m]):o.parentNode[m])<=C+1),h&&(c=Or(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+an))}return f&&v&&(m=Or(v),f.seek(d),p=Or(v),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(g),f?e:Math.round(e)},Y1=/(webkit|moz|length|cssText|inset)/i,Km=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===xt){e._stOrig=s.cssText,a=Oi(e);for(o in a)!+o&&!Y1.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Re.core.getCache(e).uncache=1,t.appendChild(e)}},y0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},fc=function(e,t,n){var i={};i[t.p]="+="+n,Re.set(e,i)},Zm=function(e,t){var n=Ss(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,_={};c=c||n();var g=y0(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&Vr()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Re.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},vn(e,"wheel",n.wheelHandler),ct.isTouch&&vn(e,"touchmove",n.wheelHandler),s},ct=(function(){function r(t,n){Po||r.register(Re)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Fd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!za){this.update=this.refresh=this.kill=rr;return}n=Wm(vi(n)||Ha(n)||n.nodeType?{trigger:n}:n,uc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,S=s.once,x=s.snap,b=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,C=s.fastScrollEnd,y=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?$n:ln,P=!h&&h!==0,L=si(n.scroller||at),N=Re.core.getCache(L),U=io(L),H=("pinType"in n?n.pinType:gs(L,"pinType")||U&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=P&&n.toggleActions.split(" "),W="markers"in n?n.markers:uc.markers,Q=U?0:parseFloat(Oi(L)["border"+M.p2+ca])||0,D=this,te=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Ae=U1(L,U,M),Ce=F1(L,U),Pe=0,ze=0,K=0,J=Ss(L,M),de,Le,xe,Ve,ht,ne,Ue,Ke,Fe,X,I,pt,Je,He,re,R,T,B,j,Z,$,ye,le,Ee,we,se,ce,Se,ge,ae,qe,O,fe,oe,pe,ie,ee,he,ke;if(D._startClamp=D._endClamp=!1,D._dir=M,m*=45,D.scroller=L,D.scroll=E?E.time.bind(E):J,Ve=J(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(r0=1,n.refreshPriority===-9999&&(ol=D)),N.tweenScroll=N.tweenScroll||{top:Zm(L,ln),left:Zm(L,$n)},D.tweenTo=de=N.tweenScroll[M.p],D.scrubDuration=function(_e){fe=Ha(_e)&&_e,fe?O?O.duration(_e):O=Re.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:fe,paused:!0,onComplete:function(){return p&&p(D)}}):(O&&O.progress(1).kill(),O=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),ae=0,l||(l=i.vars.id)),x&&((!ks(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in xt.style&&Re.set(U?[xt,yi]:L,{scrollBehavior:"auto"}),lt.forEach(function(_e){return Un(_e)&&_e.target===(U?Ot.scrollingElement||yi:L)&&(_e.smooth=!1)}),xe=Un(x.snapTo)?x.snapTo:x.snapTo==="labels"?k1(i):x.snapTo==="labelsDirectional"?z1(i):x.directional!==!1?function(_e,je){return Hf(x.snapTo)(_e,In()-ze<500?0:je.direction)}:Re.utils.snap(x.snapTo),oe=x.duration||{min:.1,max:2},oe=ks(oe)?el(oe.min,oe.max):el(oe,oe),pe=Re.delayedCall(x.delay||fe/2||.1,function(){var _e=J(),je=In()-ze<500,Oe=de.tween;if((je||Math.abs(D.getVelocity())<10)&&!Oe&&!hu&&Pe!==_e){var Ze=(_e-ne)/He,$t=i&&!P?i.totalProgress():Ze,st=je?0:($t-qe)/(In()-ka)*1e3||0,yt=Re.utils.clamp(-Ze,1-Ze,Co(st/2)*st/.185),Jt=Ze+(x.inertia===!1?0:yt),Ut,Rt,gt=x,ei=gt.onStart,wt=gt.onInterrupt,Cn=gt.onComplete;if(Ut=xe(Jt,D),Ha(Ut)||(Ut=Jt),Rt=Math.max(0,Math.round(ne+Ut*He)),_e<=Ue&&_e>=ne&&Rt!==_e){if(Oe&&!Oe._initted&&Oe.data<=Co(Rt-_e))return;x.inertia===!1&&(yt=Ut-Ze),de(Rt,{duration:oe(Co(Math.max(Co(Jt-$t),Co(Ut-$t))*.185/st/.05||0)),ease:x.ease||"power3",data:Co(Rt-_e),onInterrupt:function(){return pe.restart(!0)&&wt&&wt(D)},onComplete:function(){D.update(),Pe=J(),i&&!P&&(O?O.resetTo("totalProgress",Ut,i._tTime/i._tDur):i.progress(Ut)),ae=qe=i&&!P?i.totalProgress():D.progress,v&&v(D),Cn&&Cn(D)}},_e,yt*He,Rt-_e-yt*He),ei&&ei(D,de.tween)}}else D.isActive&&Pe!==_e&&pe.restart(!0)}).pause()),l&&(kd[l]=D),d=D.trigger=si(d||f!==!0&&f),ke=d&&d._gsap&&d._gsap.stRevert,ke&&(ke=ke(D)),f=f===!0?d:si(f),vi(a)&&(a={targets:d,className:a}),f&&(_===!1||_===Ni||(_=!_&&f.parentNode&&f.parentNode.style&&Oi(f.parentNode).display==="flex"?!1:en),D.pin=f,Le=Re.core.getCache(f),Le.spacer?re=Le.pinState:(w&&(w=si(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Le.spacerIsNative=!!w,w&&(Le.spacerState=dc(w))),Le.spacer=B=w||Ot.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),Le.pinState=re=dc(f)),n.force3D!==!1&&Re.set(f,{force3D:!0}),D.spacer=B=Le.spacer,ge=Oi(f),Ee=ge[_+M.os2],Z=Re.getProperty(f),$=Re.quickSetter(f,M.a,an),hh(f,B,ge),T=dc(f)),W){pt=ks(W)?Wm(W,Xm):Xm,X=hc("scroller-start",l,L,M,pt,0),I=hc("scroller-end",l,L,M,pt,0,X),j=X["offset"+M.op.d2];var mt=si(gs(L,"content")||L);Ke=this.markerStart=hc("start",l,mt,M,pt,j,0,E),Fe=this.markerEnd=hc("end",l,mt,M,pt,j,0,E),E&&(he=Re.quickSetter([Ke,Fe],M.a,an)),!H&&!(pr.length&&gs(L,"fixedMarkers")===!0)&&(B1(U?xt:L),Re.set([X,I],{force3D:!0}),se=Re.quickSetter(X,M.a,an),Se=Re.quickSetter(I,M.a,an))}if(E){var Me=E.vars.onUpdate,De=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){D.update(0,0,1),Me&&Me.apply(E,De||[])})}if(D.previous=function(){return it[it.indexOf(D)-1]},D.next=function(){return it[it.indexOf(D)+1]},D.revert=function(_e,je){if(!je)return D.kill(!0);var Oe=_e!==!1||!D.enabled,Ze=Ln;Oe!==D.isReverted&&(Oe&&(ie=Math.max(J(),D.scroll.rec||0),K=D.progress,ee=i&&i.progress()),Ke&&[Ke,Fe,X,I].forEach(function($t){return $t.style.display=Oe?"none":"block"}),Oe&&(Ln=D,D.update(Oe)),f&&(!b||!D.isActive)&&(Oe?G1(f,B,re):hh(f,B,Oi(f),we)),Oe||D.update(Oe),Ln=Ze,D.isReverted=Oe)},D.refresh=function(_e,je,Oe,Ze){if(!((Ln||!D.enabled)&&!je)){if(f&&_e&&Vi){vn(r,"scrollEnd",m0);return}!Yn&&te&&te(D),Ln=D,de.tween&&!Oe&&(de.tween.kill(),de.tween=0),O&&O.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Te){return Te.vars.immediateRender&&Te.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var $t=Ae(),st=Ce(),yt=E?E.duration():hr(L,M),Jt=He<=.01||!He,Ut=0,Rt=Ze||0,gt=ks(Oe)?Oe.end:n.end,ei=n.endTrigger||d,wt=ks(Oe)?Oe.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),Cn=D.pinnedContainer=n.pinnedContainer&&si(n.pinnedContainer,D),di=d&&Math.max(0,it.indexOf(D))||0,rn=di,sn,fn,br,lo,pn,A,V,q,Y,G,ue,be,me;for(W&&ks(Oe)&&(be=Re.getProperty(X,M.p),me=Re.getProperty(I,M.p));rn-- >0;)A=it[rn],A.end||A.refresh(0,1)||(Ln=D),V=A.pin,V&&(V===d||V===f||V===Cn)&&!A.isReverted&&(G||(G=[]),G.unshift(A),A.revert(!0,!0)),A!==it[rn]&&(di--,rn--);for(Un(wt)&&(wt=wt(D)),wt=zm(wt,"start",D),ne=jm(wt,d,$t,M,J(),Ke,X,D,st,Q,H,yt,E,D._startClamp&&"_startClamp")||(f?-.001:0),Un(gt)&&(gt=gt(D)),vi(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(vi(wt)?wt.split(" ")[0]:"")+gt:(Ut=Ec(gt.substr(2),$t),gt=vi(wt)?wt:(E?Re.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,ne):ne)+Ut,ei=d)),gt=zm(gt,"end",D),Ue=Math.max(ne,jm(gt||(ei?"100% 0":yt),ei,$t,M,J()+Ut,Fe,I,D,st,Q,H,yt,E,D._endClamp&&"_endClamp"))||-.001,Ut=0,rn=di;rn--;)A=it[rn]||{},V=A.pin,V&&A.start-A._pinPush<=ne&&!E&&A.end>0&&(sn=A.end-(D._startClamp?Math.max(0,A.start):A.start),(V===d&&A.start-A._pinPush<ne||V===Cn)&&isNaN(wt)&&(Ut+=sn*(1-A.progress)),V===f&&(Rt+=sn));if(ne+=Ut,Ue+=Ut,D._startClamp&&(D._startClamp+=Ut),D._endClamp&&!Yn&&(D._endClamp=Ue||-.001,Ue=Math.min(Ue,hr(L,M))),He=Ue-ne||(ne-=.01)&&.001,Jt&&(K=Re.utils.clamp(0,1,Re.utils.normalize(ne,Ue,ie))),D._pinPush=Rt,Ke&&Ut&&(sn={},sn[M.a]="+="+Ut,Cn&&(sn[M.p]="-="+J()),Re.set([Ke,Fe],sn)),f&&!(Bd&&D.end>=hr(L,M)))sn=Oi(f),lo=M===ln,br=J(),ye=parseFloat(Z(M.a))+Rt,!yt&&Ue>1&&(ue=(U?Ot.scrollingElement||yi:L).style,ue={style:ue,value:ue["overflow"+M.a.toUpperCase()]},U&&Oi(xt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(ue.style["overflow"+M.a.toUpperCase()]="scroll")),hh(f,B,sn),T=dc(f),fn=Or(f,!0),q=H&&Ss(L,lo?$n:ln)(),_?(we=[_+M.os2,He+Rt+an],we.t=B,rn=_===en?qc(f,M)+He+Rt:0,rn&&(we.push(M.d,rn+an),B.style.flexBasis!=="auto"&&(B.style.flexBasis=rn+an)),qo(we),Cn&&it.forEach(function(Te){Te.pin===Cn&&Te.vars.pinSpacing!==!1&&(Te._subPinOffset=!0)}),H&&J(ie)):(rn=qc(f,M),rn&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=rn+an)),H&&(pn={top:fn.top+(lo?br-ne:q)+an,left:fn.left+(lo?q:br-ne)+an,boxSizing:"border-box",position:"fixed"},pn[Qs]=pn["max"+ca]=Math.ceil(fn.width)+an,pn[eo]=pn["max"+Vf]=Math.ceil(fn.height)+an,pn[Ni]=pn[Ni+rl]=pn[Ni+nl]=pn[Ni+sl]=pn[Ni+il]="0",pn[en]=sn[en],pn[en+rl]=sn[en+rl],pn[en+nl]=sn[en+nl],pn[en+sl]=sn[en+sl],pn[en+il]=sn[en+il],R=X1(re,pn,b),Yn&&J(0)),i?(Y=i._initted,oh(1),i.render(i.duration(),!0,!0),le=Z(M.a)-ye+He+Rt,ce=Math.abs(He-le)>1,H&&ce&&R.splice(R.length-2,2),i.render(0,!0,!0),Y||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),oh(0)):le=He,ue&&(ue.value?ue.style["overflow"+M.a.toUpperCase()]=ue.value:ue.style.removeProperty("overflow-"+M.a));else if(d&&J()&&!E)for(fn=d.parentNode;fn&&fn!==xt;)fn._pinOffset&&(ne-=fn._pinOffset,Ue-=fn._pinOffset),fn=fn.parentNode;G&&G.forEach(function(Te){return Te.revert(!1,!0)}),D.start=ne,D.end=Ue,Ve=ht=Yn?ie:J(),!E&&!Yn&&(Ve<ie&&J(ie),D.scroll.rec=0),D.revert(!1,!0),ze=In(),pe&&(Pe=-1,pe.restart(!0)),Ln=0,i&&P&&(i._initted||ee)&&i.progress()!==ee&&i.progress(ee||0,!0).render(i.time(),!0,!0),(Jt||K!==D.progress||E||g||i&&!i._initted)&&(i&&!P&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(E&&ne<-.001&&!K?Re.utils.normalize(ne,Ue,0):K,!0),D.progress=Jt||(Ve-ne)/He===K?0:K),f&&_&&(B._pinOffset=Math.round(D.progress*le)),O&&O.invalidate(),isNaN(be)||(be-=Re.getProperty(X,M.p),me-=Re.getProperty(I,M.p),fc(X,M,be),fc(Ke,M,be-(Ze||0)),fc(I,M,me),fc(Fe,M,me-(Ze||0))),Jt&&!Yn&&D.update(),u&&!Yn&&!Je&&(Je=!0,u(D),Je=!1)}},D.getVelocity=function(){return(J()-ht)/(In()-ka)*1e3||0},D.endAnimation=function(){Ia(D.callbackAnimation),i&&(O?O.progress(1):i.paused()?P||Ia(i,D.direction<0,1):Ia(i,i.reversed()))},D.labelToScroll=function(_e){return i&&i.labels&&(ne||D.refresh()||ne)+i.labels[_e]/i.duration()*He||0},D.getTrailing=function(_e){var je=it.indexOf(D),Oe=D.direction>0?it.slice(0,je).reverse():it.slice(je+1);return(vi(_e)?Oe.filter(function(Ze){return Ze.vars.preventOverlaps===_e}):Oe).filter(function(Ze){return D.direction>0?Ze.end<=ne:Ze.start>=Ue})},D.update=function(_e,je,Oe){if(!(E&&!Oe&&!_e)){var Ze=Yn===!0?ie:D.scroll(),$t=_e?0:(Ze-ne)/He,st=$t<0?0:$t>1?1:$t||0,yt=D.progress,Jt,Ut,Rt,gt,ei,wt,Cn,di;if(je&&(ht=Ve,Ve=E?J():Ze,x&&(qe=ae,ae=i&&!P?i.totalProgress():st)),m&&f&&!Ln&&!oc&&Vi&&(!st&&ne<Ze+(Ze-ht)/(In()-ka)*m?st=1e-4:st===1&&Ue>Ze+(Ze-ht)/(In()-ka)*m&&(st=.9999)),st!==yt&&D.enabled){if(Jt=D.isActive=!!st&&st<1,Ut=!!yt&&yt<1,wt=Jt!==Ut,ei=wt||!!st!=!!yt,D.direction=st>yt?1:-1,D.progress=st,ei&&!Ln&&(Rt=st&&!yt?0:st===1?1:yt===1?2:3,P&&(gt=!wt&&z[Rt+1]!=="none"&&z[Rt+1]||z[Rt],di=i&&(gt==="complete"||gt==="reset"||gt in i))),y&&(wt||di)&&(di||h||!i)&&(Un(y)?y(D):D.getTrailing(y).forEach(function(br){return br.endAnimation()})),P||(O&&!Ln&&!oc?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",st,i._tTime/i._tDur):(O.vars.totalProgress=st,O.invalidate().restart())):i&&i.totalProgress(st,!!(Ln&&(ze||_e)))),f){if(_e&&_&&(B.style[_+M.os2]=Ee),!H)$(Va(ye+le*st));else if(ei){if(Cn=!_e&&st>yt&&Ue+1>Ze&&Ze+1>=hr(L,M),b)if(!_e&&(Jt||Cn)){var rn=Or(f,!0),sn=Ze-ne;Km(f,xt,rn.top+(M===ln?sn:0)+an,rn.left+(M===ln?0:sn)+an)}else Km(f,B);qo(Jt||Cn?R:T),ce&&st<1&&Jt||$(ye+(st===1&&!Cn?le:0))}}x&&!de.tween&&!Ln&&!oc&&pe.restart(!0),a&&(wt||S&&st&&(st<1||!ah))&&bl(a.targets).forEach(function(br){return br.classList[Jt||S?"add":"remove"](a.className)}),o&&!P&&!_e&&o(D),ei&&!Ln?(P&&(di&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),o&&o(D)),(wt||!ah)&&(c&&wt&&ch(D,c),k[Rt]&&ch(D,k[Rt]),S&&(st===1?D.kill(!1,1):k[Rt]=0),wt||(Rt=st===1?1:3,k[Rt]&&ch(D,k[Rt]))),C&&!Jt&&Math.abs(D.getVelocity())>(Ha(C)?C:2500)&&(Ia(D.callbackAnimation),O?O.progress(1):Ia(i,gt==="reverse"?1:!st,1))):P&&o&&!Ln&&o(D)}if(Se){var fn=E?Ze/E.duration()*(E._caScrollDist||0):Ze;se(fn+(X._isFlipped?1:0)),Se(fn)}he&&he(-Ze/E.duration()*(E._caScrollDist||0))}},D.enable=function(_e,je){D.enabled||(D.enabled=!0,vn(L,"resize",Ga),U||vn(L,"scroll",Ro),te&&vn(r,"refreshInit",te),_e!==!1&&(D.progress=K=0,Ve=ht=Pe=J()),je!==!1&&D.refresh())},D.getTween=function(_e){return _e&&de?de.tween:O},D.setPositions=function(_e,je,Oe,Ze){if(E){var $t=E.scrollTrigger,st=E.duration(),yt=$t.end-$t.start;_e=$t.start+yt*_e/st,je=$t.start+yt*je/st}D.refresh(!1,!1,{start:Vm(_e,Oe&&!!D._startClamp),end:Vm(je,Oe&&!!D._endClamp)},Ze),D.update()},D.adjustPinSpacing=function(_e){if(we&&_e){var je=we.indexOf(M.d)+1;we[je]=parseFloat(we[je])+_e+an,we[1]=parseFloat(we[1])+_e+an,qo(we)}},D.disable=function(_e,je){if(_e!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,je||O&&O.pause(),ie=0,Le&&(Le.uncache=1),te&&_n(r,"refreshInit",te),pe&&(pe.pause(),de.tween&&de.tween.kill()&&(de.tween=0)),!U)){for(var Oe=it.length;Oe--;)if(it[Oe].scroller===L&&it[Oe]!==D)return;_n(L,"resize",Ga),U||_n(L,"scroll",Ro)}},D.kill=function(_e,je){D.disable(_e,je),O&&!je&&O.kill(),l&&delete kd[l];var Oe=it.indexOf(D);Oe>=0&&it.splice(Oe,1),Oe===Xn&&Cc>0&&Xn--,Oe=0,it.forEach(function(Ze){return Ze.scroller===D.scroller&&(Oe=1)}),Oe||Yn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,_e&&i.revert({kill:!1}),je||i.kill()),Ke&&[Ke,Fe,X,I].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),ol===D&&(ol=0),f&&(Le&&(Le.uncache=1),Oe=0,it.forEach(function(Ze){return Ze.pin===f&&Oe++}),Oe||(Le.spacer=0)),n.onKill&&n.onKill(D)},it.push(D),D.enable(!1,!1),ke&&ke(D),i&&i.add&&!He){var Qe=D.update;D.update=function(){D.update=Qe,lt.cache++,ne||Ue||D.refresh()},Re.delayedCall(.01,D.update),He=.01,ne=Ue=0}else D.refresh();f&&H1()},r.register=function(n){return Po||(Re=n||c0(),l0()&&window.document&&r.enable(),Po=za),Po},r.defaults=function(n){if(n)for(var i in n)uc[i]=n[i];return uc},r.disable=function(n,i){za=0,it.forEach(function(o){return o[i?"kill":"disable"](n)}),_n(at,"wheel",Ro),_n(Ot,"scroll",Ro),clearInterval(sc),_n(Ot,"touchcancel",rr),_n(xt,"touchstart",rr),lc(_n,Ot,"pointerdown,touchstart,mousedown",Hm),lc(_n,Ot,"pointerup,touchend,mouseup",Gm),Yc.kill(),ac(_n);for(var s=0;s<lt.length;s+=3)cc(_n,lt[s],lt[s+1]),cc(_n,lt[s],lt[s+2])},r.enable=function(){if(at=window,Ot=document,yi=Ot.documentElement,xt=Ot.body,Re&&(bl=Re.utils.toArray,el=Re.utils.clamp,Fd=Re.core.context||rr,oh=Re.core.suppressOverwrites||rr,Ff=at.history.scrollRestoration||"auto",zd=at.pageYOffset||0,Re.core.globals("ScrollTrigger",r),xt)){za=1,Yo=document.createElement("div"),Yo.style.height="100vh",Yo.style.position="absolute",x0(),O1(),Zt.register(Re),r.isTouch=Zt.isTouch,is=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ud=Zt.isTouch===1,vn(at,"wheel",Ro),Uf=[at,Ot,yi,xt],Re.matchMedia?(r.matchMedia=function(c){var u=Re.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Re.addEventListener("matchMediaInit",function(){_0(),Gf()}),Re.addEventListener("matchMediaRevert",function(){return g0()}),Re.addEventListener("matchMedia",function(){Xs(0,1),so("matchMedia")}),Re.matchMedia().add("(orientation: portrait)",function(){return uh(),uh})):console.warn("Requires GSAP 3.11.0 or later"),uh(),vn(Ot,"scroll",Ro);var n=xt.hasAttribute("style"),i=xt.style,s=i.borderTopStyle,o=Re.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Or(xt),ln.m=Math.round(a.top+ln.sc())||0,$n.m=Math.round(a.left+$n.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),sc=setInterval(Ym,250),Re.delayedCall(.5,function(){return oc=0}),vn(Ot,"touchcancel",rr),vn(xt,"touchstart",rr),lc(vn,Ot,"pointerdown,touchstart,mousedown",Hm),lc(vn,Ot,"pointerup,touchend,mouseup",Gm),Od=Re.utils.checkPrefix("transform"),Rc.push(Od),Po=In(),Yc=Re.delayedCall(.2,Xs).pause(),Lo=[Ot,"visibilitychange",function(){var c=at.innerWidth,u=at.innerHeight;Ot.hidden?(Bm=c,km=u):(Bm!==c||km!==u)&&Ga()},Ot,"DOMContentLoaded",Xs,at,"load",Xs,at,"resize",Ga],ac(vn),it.forEach(function(c){return c.enable(0,1)}),l=0;l<lt.length;l+=3)cc(_n,lt[l],lt[l+1]),cc(_n,lt[l],lt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(ah=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(sc)||(sc=i)&&setInterval(Ym,i),"ignoreMobileResize"in n&&(Ud=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ac(_n)||ac(vn,n.autoRefreshEvents||"none"),s0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=si(n),o=lt.indexOf(s),a=io(s);~o&&lt.splice(o,a?6:2),i&&(a?pr.unshift(at,i,xt,i,yi,i):pr.unshift(s,i))},r.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(vi(n)?si(n):n).getBoundingClientRect(),a=o[s?Qs:eo]*i||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},r.positionInViewport=function(n,i,s){vi(n)&&(n=si(n));var o=n.getBoundingClientRect(),a=o[s?Qs:eo],l=i==null?a/2:i in $c?$c[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},r.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ro.killAll||[];ro={},i.forEach(function(s){return s()})}},r})();ct.version="3.14.2";ct.saveStyles=function(r){return r?bl(r).forEach(function(e){if(e&&e.style){var t=_i.indexOf(e);t>=0&&_i.splice(t,5),_i.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Re.core.getCache(e),Fd())}}):_i};ct.revert=function(r,e){return Gf(!r,e)};ct.create=function(r,e){return new ct(r,e)};ct.refresh=function(r){return r?Ga(!0):(Po||ct.register())&&Xs(!0)};ct.update=function(r){return++lt.cache&&Vr(r===!0?2:0)};ct.clearScrollMemory=v0;ct.maxScroll=function(r,e){return hr(r,e?$n:ln)};ct.getScrollFunc=function(r,e){return Ss(si(r),e?$n:ln)};ct.getById=function(r){return kd[r]};ct.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ct.isScrolling=function(){return!!Vi};ct.snapDirectional=Hf;ct.addEventListener=function(r,e){var t=ro[r]||(ro[r]=[]);~t.indexOf(e)||t.push(e)};ct.removeEventListener=function(r,e){var t=ro[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ct.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=Re.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(_){h.length||f.restart(!0),h.push(_.trigger),d.push(_),s<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Un(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Un(s)&&(s=s(),vn(ct,"refresh",function(){return s=e.batchMax()})),bl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(ct.create(c))}),t};var Jm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},dh=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===yi&&r(xt,t)},pc={auto:1,scroll:1},q1=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Re.core.getCache(s),a=In(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(pc[(l=Oi(s)).overflowY]||pc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!io(s)&&(pc[(l=Oi(s)).overflowY]||pc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},S0=function(e,t,n,i){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&q1,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&vn(Ot,Zt.eventTypes[0],eg,!1,!0)},onDisable:function(){return _n(Ot,Zt.eventTypes[0],eg,!0)}})},$1=/(input|label|select|textarea)/i,Qm,eg=function(e){var t=$1.test(e.target.tagName);(t||Qm)&&(e._gsapAllow=!0,Qm=t)},j1=function(e){ks(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=si(e.target)||yi,u=Re.core.globals().ScrollSmoother,h=u&&u.get(),d=is&&(e.content&&si(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=Ss(c,ln),_=Ss(c,$n),g=1,m=(Zt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,p=0,v=Un(i)?function(){return i(a)}:function(){return i||2.8},S,x,b=S0(c,e.type,!0,s),w=function(){return x=!1},E=rr,C=rr,y=function(){l=hr(c,ln),C=el(is?1:0,l),n&&(E=el(0,hr(c,$n))),S=to},M=function(){d._gsap.y=Va(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(x){requestAnimationFrame(w);var W=Va(a.deltaY/2),Q=C(f.v-W);if(d&&Q!==f.v+f.offset){f.offset=Q-f.v;var D=Va((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",d._gsap.y=D+"px",f.cacheID=lt.cache,Vr()}return!0}f.offset&&M(),x=!0},L,N,U,H,k=function(){y(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return d&&Re.set(d,{y:"+=0"}),e.ignoreCheck=function(z){return is&&z.type==="touchmove"&&P()||g>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){x=!1;var z=g;g=Va((at.visualViewport&&at.visualViewport.scale||1)/m),L.pause(),z!==g&&dh(c,g>1.01?!0:n?!1:"x"),N=_(),U=f(),y(),S=to},e.onRelease=e.onGestureStart=function(z,W){if(f.offset&&M(),!W)H.restart(!0);else{lt.cache++;var Q=v(),D,te;n&&(D=_(),te=D+Q*.05*-z.velocityX/.227,Q*=Jm(_,D,te,hr(c,$n)),L.vars.scrollX=E(te)),D=f(),te=D+Q*.05*-z.velocityY/.227,Q*=Jm(f,D,te,hr(c,ln)),L.vars.scrollY=C(te),L.invalidate().duration(Q).play(.01),(is&&L.vars.scrollY>=l||D>=l-1)&&Re.to({},{onUpdate:k,duration:Q})}o&&o(z)},e.onWheel=function(){L._ts&&L.pause(),In()-p>1e3&&(S=0,p=In())},e.onChange=function(z,W,Q,D,te){if(to!==S&&y(),W&&n&&_(E(D[2]===W?N+(z.startX-z.x):_()+W-D[1])),Q){f.offset&&M();var Ae=te[2]===Q,Ce=Ae?U+z.startY-z.y:f()+Q-te[1],Pe=C(Ce);Ae&&Ce!==Pe&&(U+=Pe-Ce),f(Pe)}(Q||W)&&Vr()},e.onEnable=function(){dh(c,n?!1:"x"),ct.addEventListener("refresh",k),vn(at,"resize",k),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),b.enable()},e.onDisable=function(){dh(c,!0),_n(at,"resize",k),ct.removeEventListener("refresh",k),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new Zt(e),a.iOS=is,is&&!f()&&f(1),is&&Re.ticker.add(rr),H=a._dc,L=Re.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:y0(f,f(),function(){return L.pause()})},onUpdate:Vr,onComplete:H.vars.onComplete}),a};ct.sort=function(r){if(Un(r))return it.sort(r);var e=at.pageYOffset||0;return ct.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),it.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ct.observe=function(r){return new Zt(r)};ct.normalizeScroll=function(r){if(typeof r>"u")return Wn;if(r===!0&&Wn)return Wn.enable();if(r===!1){Wn&&Wn.kill(),Wn=r;return}var e=r instanceof Zt?r:j1(r);return Wn&&Wn.target===e.target&&Wn.kill(),io(e.target)&&(Wn=e),e};ct.core={_getVelocityProp:Nd,_inputObserver:S0,_scrollers:lt,_proxies:pr,bridge:{ss:function(){Vi||so("scrollStart"),Vi=In()},ref:function(){return Ln}}};c0()&&Re.registerPlugin(ct);const jc=[{id:"trading",label:"Trading",rotationSpeed:.28,model:{type:"glb",url:"/models/logo.glb",targetSize:6.2,position:[4.8,-.3,0]}},{id:"payments",label:"Payments",rotationSpeed:.2,model:{type:"primitive",primitive:"stack-cylinders",targetSize:5.4,position:[4.8,-.3,0]}},{id:"financial-rails",label:"Financial rails",rotationSpeed:.16,model:{type:"primitive",primitive:"slab-grid",targetSize:5.8,position:[4.8,-.3,0]}},{id:"messaging",label:"Messaging",rotationSpeed:.22,model:{type:"glb",url:"/models/logo_separate.glb",targetSize:6.1,position:[4.8,-.3,0]}},{id:"privacy",label:"Privacy",rotationSpeed:.14,model:{type:"primitive",primitive:"diamond-cluster",targetSize:5.3,position:[4.8,-.3,0]}},{id:"social-coordination",label:"Social Coordination",rotationSpeed:.18,model:{type:"primitive",primitive:"ring-array",targetSize:5.6,position:[4.8,-.3,0]}}],K1=jc[0].id;function Z1({gsap:r,ScrollTrigger:e}){if(!r||!e)return;const t=document.querySelector(".cc-team");if(!t)return;const n=t.querySelectorAll(".row.row-justify-between > .col"),i=t.querySelectorAll('[data-component="team"] > *');n.length&&r.from(n,{autoAlpha:0,y:28,duration:.8,ease:"power2.out",stagger:.12,scrollTrigger:{trigger:t,start:"top 78%",once:!0}}),i.length&&i.forEach((s,o)=>{r.from(s,{autoAlpha:0,y:"+=40",duration:.75,ease:"power2.out",delay:o*.08,scrollTrigger:{trigger:s,start:"top 85%",once:!0}})})}const J1="#1a1a1a",Pr={ramp:".'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:6,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.85,color:J1,opacity:.5};function Kc(r,e,t){return Math.min(t,Math.max(e,r))}function Q1(r,e,t){return .2126*r+.7152*e+.0722*t}function eA(r,e){return Kc((r-.5)*e+.5,0,1)}function tA(r,e){return Kc(Math.pow(r,e),0,1)}function nA(){const r=document.querySelector('canvas[data-component="roadmap-ascii"]');if(!r)return null;const e=r.closest(".section.cc-roadmap"),t=r.getContext("2d");if(!t)return null;const n=document.createElement("canvas"),i=new xa({canvas:n,antialias:!1,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(1);const s=new fa,o=new tu,a={uTime:{value:0},uScale:{value:2.55},uIntensity:{value:.88},uBase:{value:.05},uAmp:{value:.35},uResolution:{value:new Be(1,1)},uTint:{value:new F(1,1,1)}},l=new Jn({uniforms:a,depthWrite:!1,depthTest:!1,vertexShader:`
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
    `}),c=new At(new qr(2,2),l);c.frustumCulled=!1,s.add(c);let u=null,h=null,d=1,f=1,_=1,g=1,m=1,p=1;const v=()=>{const w=r.getBoundingClientRect(),E=e?.getBoundingClientRect();d=Math.max(1,Math.floor(w.width||E?.width||1)),f=Math.max(1,Math.floor(w.height||E?.height||1));const C=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.floor(d*C)),r.height=Math.max(1,Math.floor(f*C)),r.style.width=`${d}px`,r.style.height=`${f}px`,t.setTransform(C,0,0,C,0,0),t.textBaseline="top",_=Kc(Math.floor(d/Pr.cellSize),32,220),m=d/_,p=m/Pr.aspectComp,g=Kc(Math.floor(f/p),18,140),u&&u.dispose(),u=new Fn(_,g,{depthBuffer:!1,stencilBuffer:!1}),h=new Uint8Array(_*g*4),a.uResolution.value.set(d,f),i.setSize(_,g,!1)};v();const S=new ResizeObserver(v);S.observe(r),window.addEventListener("resize",v);const x=new _a,b=()=>{if(!document.body.contains(r)){S.disconnect(),window.removeEventListener("resize",v),u?.dispose(),l.dispose(),c.geometry.dispose(),i.dispose();return}a.uTime.value=x.getElapsedTime(),i.setRenderTarget(u),i.render(s,o),i.setRenderTarget(null),i.readRenderTargetPixels(u,0,0,_,g,h),t.clearRect(0,0,d,f),t.fillStyle=Pr.color,t.globalAlpha=Pr.opacity;const w=Math.max(8,Math.floor(p*Pr.fontScale));t.font=`${w}px monospace`;const E=Math.max(1,t.measureText("M").width),C=m/E;t.save(),t.scale(C,1);for(let y=0;y<g;y++){let M="";for(let L=0;L<_;L++){const U=((g-1-y)*_+L)*4,H=h[U]/255,k=h[U+1]/255,z=h[U+2]/255;let W=Q1(H,k,z);W=eA(W,Pr.contrast),W=tA(W,Pr.gamma);const Q=Math.floor(W*(Pr.ramp.length-1));M+=Pr.ramp[Q]}const P=Math.max(p,w*1.04);t.fillText(M,0,y*P)}t.restore(),t.globalAlpha=1,requestAnimationFrame(b)};return requestAnimationFrame(b),{resize:v}}const iA="#fafafa",Lr={ramp:".'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:6,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.85,color:iA,opacity:.5};function ua(r,e,t){return Math.min(t,Math.max(e,r))}function rA(r,e,t){return .2126*r+.7152*e+.0722*t}function sA(r,e){return ua((r-.5)*e+.5,0,1)}function oA(r,e){return ua(Math.pow(r,e),0,1)}function aA(){const r=document.querySelector('canvas[data-component="grid-canvas"]');if(!r)return null;const e=r.closest(".section.cc-on-grid"),t=r.getContext("2d");if(!t)return null;const n=document.createElement("canvas"),i=new xa({canvas:n,antialias:!1,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(1);const s=new fa,o=new tu,a={uTime:{value:0},uScale:{value:2.55},uIntensity:{value:.88},uBase:{value:.05},uAmp:{value:.35},uResolution:{value:new Be(1,1)},uTint:{value:new F(1,1,1)}},l=new Jn({uniforms:a,depthWrite:!1,depthTest:!1,vertexShader:`
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
    `}),c=new At(new qr(2,2),l);c.frustumCulled=!1,s.add(c);let u=null,h=null,d=1,f=1,_=1,g=1,m=1,p=1;const v=()=>{const w=r.getBoundingClientRect(),E=e?.getBoundingClientRect();d=Math.max(1,Math.floor(w.width||E?.width||1)),f=Math.max(1,Math.floor(w.height||E?.height||1));const C=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.floor(d*C)),r.height=Math.max(1,Math.floor(f*C)),r.style.width=`${d}px`,r.style.height=`${f}px`,t.setTransform(C,0,0,C,0,0),t.textBaseline="top",_=ua(Math.floor(d/Lr.cellSize),32,220),m=d/_,p=m/Lr.aspectComp,g=ua(Math.floor(f/p),18,140),u&&u.dispose(),u=new Fn(_,g,{depthBuffer:!1,stencilBuffer:!1}),h=new Uint8Array(_*g*4),a.uResolution.value.set(d,f),i.setSize(_,g,!1)};v();const S=new ResizeObserver(v);S.observe(r),window.addEventListener("resize",v);const x=new _a,b=()=>{if(!document.body.contains(r)){S.disconnect(),window.removeEventListener("resize",v),u?.dispose(),l.dispose(),c.geometry.dispose(),i.dispose();return}a.uTime.value=x.getElapsedTime(),i.setRenderTarget(u),i.render(s,o),i.setRenderTarget(null),i.readRenderTargetPixels(u,0,0,_,g,h),t.clearRect(0,0,d,f),t.fillStyle=Lr.color,t.globalAlpha=Lr.opacity;const w=Math.max(8,Math.floor(p*Lr.fontScale));t.font=`${w}px monospace`;const E=Math.max(1,t.measureText("M").width),C=m/E;t.save(),t.scale(C,1);for(let y=0;y<g;y++){let M="";for(let L=0;L<_;L++){const U=((g-1-y)*_+L)*4,H=h[U]/255,k=h[U+1]/255,z=h[U+2]/255;let W=rA(H,k,z);W=sA(W,Lr.contrast),W=oA(W,Lr.gamma);const Q=Math.floor(W*(Lr.ramp.length-1));M+=Lr.ramp[Q]}const P=Math.max(p,w*1.04);t.fillText(M,0,y*P)}t.restore(),t.globalAlpha=1,requestAnimationFrame(b)};return requestAnimationFrame(b),{resize:v}}function lA(){const r=document.querySelector('[data-component="grid-stack"]');if(!r)return null;const e=r.closest(".section.cc-on-grid")||r,t=Array.from(r.querySelectorAll("img, .grid_icon-preview"));if(!t.length)return null;const n=(t.length-1)*.5,i=34,s=24,o=window.matchMedia("(hover: none), (pointer: coarse)").matches||window.innerWidth<=940,a=t.length===1,l={tx:0,ty:0,x:0,y:0,active:!1},c={angle:Math.random()*Math.PI*2,speed:Math.PI*2/3500,radiusX:i*.82,radiusY:s*.78,inView:!1};let u=0,h=null;t.forEach(m=>{m.style.willChange="transform"});const d=t.map((m,p)=>a?1:(p-n)*.36),f=()=>{o&&(c.inView&&document.visibilityState==="visible"?(c.angle+=c.speed,l.tx=Math.cos(c.angle)*c.radiusX,l.ty=Math.sin(c.angle)*c.radiusY):(l.tx=0,l.ty=0)),l.x+=(l.tx-l.x)*.14,l.y+=(l.ty-l.y)*.14,t.forEach((m,p)=>{const v=d[p],S=l.x*v*1.05,x=l.y*v*.78;m.style.transform=`translate3d(${S}px, ${x}px, 0)`}),u=requestAnimationFrame(f)},_=m=>{if(m.pointerType==="touch")return;const p=e.getBoundingClientRect(),v=ua((m.clientX-p.left)/Math.max(p.width,1),0,1),S=ua((m.clientY-p.top)/Math.max(p.height,1),0,1);l.tx=-(v-.5)*2*i,l.ty=-(S-.5)*2*s,l.active=!0},g=()=>{l.active=!1,l.tx=0,l.ty=0};if(!o)e.addEventListener("pointermove",_,{passive:!0}),e.addEventListener("pointerleave",g),window.addEventListener("blur",g);else{const m=()=>{const v=e.getBoundingClientRect(),S=window.innerHeight*.5;return v.top<=S&&v.bottom>=S},p=e.getBoundingClientRect();c.inView=p.bottom>0&&p.top<window.innerHeight&&m(),h=new IntersectionObserver(v=>{c.inView=!!v[0]?.isIntersecting},{threshold:0,rootMargin:"-40% 0px -40% 0px"}),h.observe(e)}return u=requestAnimationFrame(f),{destroy(){u&&cancelAnimationFrame(u),e.removeEventListener("pointermove",_),e.removeEventListener("pointerleave",g),window.removeEventListener("blur",g),h?.disconnect()}}}const M0="#ffffff",nr={ramp:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:7,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.86,color:M0,opacity:.92};function Zc(r,e,t){return Math.min(t,Math.max(e,r))}function cA(r,e,t){return .2126*r+.7152*e+.0722*t}function uA(r,e){return Zc((r-.5)*e+.5,0,1)}function hA(r,e){return Zc(Math.pow(r,e),0,1)}function tg(r,e=2.8){r.updateMatrixWorld(!0);const n=new Vt().setFromObject(r).getSize(new F),i=Math.max(n.x,n.y,n.z);i>0&&r.scale.setScalar(e/i),r.updateMatrixWorld(!0);const o=new Vt().setFromObject(r).getCenter(new F);r.position.sub(o)}function dA(r){const e=r<=767;return{targetSize:e?2.2:2.8,cameraZ:e?6.8:6,cameraY:e?.08:.14,cellSize:e?nr.cellSize+1:nr.cellSize}}function fA(){const r=document.querySelector('.section.cc-footer canvas[data-component="footer-canvas"]')||document.querySelector('canvas[data-component="footer-canvas"]');if(!r)return null;const e=r.closest(".section.cc-footer"),t=r.getContext("2d",{alpha:!0});if(!t)return null;const n=document.createElement("canvas"),i=new xa({canvas:n,antialias:!0,alpha:!0,powerPreference:"high-performance"});i.setPixelRatio(1),i.setClearColor(0,0);const s=new fa,o=new yn(38,1,.1,100),a=new ru(16777215,.44),l=new Ji(16777215,1.12);l.position.set(3.6,2.8,4.2);const c=new Ji(16777215,.6);c.position.set(-2.5,1.8,-3.8),s.add(a,l,c);const u={uTime:{value:0},uScale:{value:2.5},uIntensity:{value:.9},uBase:{value:.08},uAmp:{value:.115},uResolution:{value:new Be(1,1)},uTint:{value:new F(1,1,1)}},h=new Jn({uniforms:u,depthWrite:!1,depthTest:!1,transparent:!0,vertexShader:`
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
    `}),d=new At(new qr(2,2),h);d.frustumCulled=!1,d.renderOrder=-1e3,s.add(d);const f=new Sn;s.add(f),new uu().load((()=>{const P=new URL(import.meta.url),L=P.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//);return L?`${L[1]}/models/logo_split.glb`:`${P.origin}/models/logo_split.glb`})(),P=>{const L=P.scene.clone(!0);L.traverse(N=>{if(!N.isMesh)return;N.castShadow=!1,N.receiveShadow=!1;const U=new bs({color:new $e(M0),metalness:.08,roughness:.62});N.material=U}),tg(L),f.clear(),f.add(L)},void 0,P=>console.error("Failed to load footer GLB:",P));let g=null,m=null,p=1,v=1,S=1,x=1,b=1,w=1;const E=()=>{const P=r.getBoundingClientRect(),L=e?.getBoundingClientRect();p=Math.max(1,Math.floor(P.width||L?.width||1)),v=Math.max(1,Math.floor(P.height||L?.height||1));const N=dA(p),U=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.floor(p*U)),r.height=Math.max(1,Math.floor(v*U)),r.style.width=`${p}px`,r.style.height=`${v}px`,t.setTransform(U,0,0,U,0,0),t.textBaseline="top",o.aspect=p/v,o.position.set(0,N.cameraY,N.cameraZ),o.lookAt(0,0,0),o.updateProjectionMatrix(),S=Zc(Math.floor(p/N.cellSize),24,220),b=p/S,w=b/nr.aspectComp,x=Zc(Math.floor(v/w),18,140),g&&g.dispose(),g=new Fn(S,x,{depthBuffer:!0,stencilBuffer:!1}),m=new Uint8Array(S*x*4),i.setSize(S,x,!1),u.uResolution.value.set(p,v),f.children[0]&&tg(f.children[0],N.targetSize)};E();const C=new ResizeObserver(E);C.observe(r),window.addEventListener("resize",E);const y=new _a,M=()=>{if(!document.body.contains(r)){C.disconnect(),window.removeEventListener("resize",E),g?.dispose(),h.dispose(),d.geometry.dispose(),i.dispose();return}const P=y.getElapsedTime();u.uTime.value=P,f.children[0]&&(f.rotation.y=P*.16,f.rotation.x=Math.sin(P*.35)*.08),i.setRenderTarget(g),i.render(s,o),i.setRenderTarget(null),i.readRenderTargetPixels(g,0,0,S,x,m),t.clearRect(0,0,p,v),t.fillStyle=nr.color,t.globalAlpha=nr.opacity;const L=Math.max(8,Math.floor(w*nr.fontScale));t.font=`${L}px monospace`;const N=Math.max(1,t.measureText("M").width),U=b/N;t.save(),t.scale(U,1);for(let H=0;H<x;H++){let k="";for(let W=0;W<S;W++){const D=((x-1-H)*S+W)*4,te=m[D]/255,Ae=m[D+1]/255,Ce=m[D+2]/255;let Pe=cA(te,Ae,Ce);Pe=uA(Pe,nr.contrast),Pe=hA(Pe,nr.gamma);const ze=Math.floor(Pe*(nr.ramp.length-1));k+=nr.ramp[ze]}const z=Math.max(w,L*1.04);t.fillText(k,0,H*z)}t.restore(),t.globalAlpha=1,requestAnimationFrame(M)};return requestAnimationFrame(M),{resize:E}}function fh(r){return r.replace(/\[/g,"").replace(/\]/g,"").replace(/\s+/g," ").trim().toLowerCase()}function pA(){const r=document.querySelector('[data-component="features"]');if(!r)return null;const e=Array.from(r.querySelectorAll(".system-tabs_btn"));if(!e.length)return null;console.log(`[Features Tabs] Found ${e.length} buttons`);const t=o=>{e.forEach(a=>{const l=a===o;a.classList.toggle("is-active",l),a.setAttribute("aria-pressed",String(l)),a.dataset.active=l?"true":"false";const c=a.closest(".system-tabs_list-item");c&&(c.classList.toggle("is-active",l),c.dataset.active=l?"true":"false")})};e.forEach(o=>{o.setAttribute("aria-pressed","false"),o.dataset.active="false",o.addEventListener("click",()=>{t(o),console.log(`[Features Tabs] Activated: ${o.textContent}`)})});const n=e.find(o=>fh(o.textContent||"")==="trading")||e[0];n&&t(n);const s=(()=>{const o=document.querySelectorAll(".tabs-link");if(!o.length){console.log("[Features Tabs] No Webflow tabs found to sync");return}const a=c=>{const u=fh(c);return e.find(h=>fh(h.textContent||"")===u)},l=new MutationObserver(c=>{c.forEach(u=>{if(u.attributeName==="aria-selected"){const h=u.target,d=h.getAttribute("aria-selected")==="true",f=h.dataset.tabLinkName||h.textContent,_=a(f);_&&d&&(_.classList.contains("is-active")||(t(_),console.log(`[Features Tabs] Synced from Webflow: ${f}`)))}})});return o.forEach(c=>{l.observe(c,{attributes:!0})}),console.log(`[Features Tabs] Syncing with ${o.length} Webflow tabs`),l})();return console.log("[Features Tabs] Setup complete (GLB loading removed)"),{buttons:e,setActiveButton:t,destroy(){s?.disconnect()}}}const ng={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.008}};function mA(r){const e=(r.dataset.splitType||r.dataset.split||"").trim().toLowerCase();return e==="lines"||e==="words"||e==="chars"||e==="letters"?e==="letters"?"chars":e:r.tagName.toLowerCase()==="p"?"words":"lines"}function ph(r,e,t){const n=r.dataset[e],i=Number.parseFloat(n);return Number.isFinite(i)?i:t}function gA(r,e,t){const n=t.create(r,{type:"lines, words, chars",mask:"lines",linesClass:"line",wordsClass:"word",charsClass:"letter"});return e==="words"?n.words||[]:e==="chars"?n.chars||[]:n.lines||[]}function _A(r){r.forEach(e=>{e.style.position="relative",e.style.display="inline-block",e.style.backgroundImage="linear-gradient(var(--_color---neutral--gray-matter), var(--_color---neutral--gray-matter))",e.style.backgroundRepeat="no-repeat",e.style.backgroundPosition="0 100%",e.style.backgroundSize="0% 100%",e.style.boxDecorationBreak="clone",e.style.webkitBoxDecorationBreak="clone",e.style.padding="0.03em 0.18em 0.07em",e.style.margin="0 0 0.08em"})}function vA(r={}){const e=r.gsap||window.gsap,t=r.ScrollTrigger||window.ScrollTrigger,n=window.SplitText,i=window.CustomEase;if(!e||!t||!n)return!1;e.registerPlugin(t,n),i?.create&&(i.create("osmo-ease","0.625, 0.05, 0, 1"),e.registerPlugin(i));const s=document.querySelectorAll('[data-split]:not([data-split-ignore="true"])');return s.length&&(s.forEach(o=>{if(o.dataset.splitInitialized==="true")return;const a=mA(o),l=ng[a]||ng.lines,c=ph(o,"splitDuration",l.duration),u=ph(o,"splitStagger",l.stagger),h=o.dataset.splitStart||"top 85%",d=o.dataset.splitOnce!=="false",f=gA(o,a,n);if(!f.length){o.dataset.splitInitialized="true";return}const _=a==="lines"&&o.dataset.splitHighlight==="true";_&&_A(f),e.fromTo(f,{yPercent:110},{yPercent:0,duration:c,stagger:u,ease:"osmo-ease",onComplete:()=>{if(!_)return;const g=ph(o,"splitHighlightDelay",.02);e.to(f,{backgroundSize:"100% 100%",duration:.34,stagger:.08,delay:g,ease:"power2.out"})},scrollTrigger:{trigger:o,start:h,once:d,toggleActions:d?"play none none none":"play reverse play reverse"}}),o.dataset.splitInitialized="true"}),t.refresh()),!0}function xA(r){if(!r)return null;const e=document.querySelector(".navbar_menu-button.w-nav-button"),t=document.querySelector(".navbar_menu.w-nav-menu");if(!e||!t)return null;const n=window.matchMedia("(prefers-reduced-motion: reduce)");let i=null,s=null,o=null;const a=()=>Array.from(document.querySelectorAll(".navbar_links-wrapper .navbar_link")),l=()=>{const v=a();r.killTweensOf(t),r.set(t,{clearProps:"opacity,visibility,transform,width,overflow,clipPath"}),v.length&&(r.killTweensOf(v),r.set(v,{clearProps:"opacity,visibility,transform"}))},c=()=>{const v=window.getComputedStyle(e);return v.display!=="none"&&v.visibility!=="hidden"},u=()=>c(),h=()=>e.classList.contains("w--open")||t.classList.contains("w--open"),d=()=>{const v=a();if(v.length){if(n.matches){l();return}s?.kill(),i?.kill(),r.set(v,{autoAlpha:0,y:18}),i=r.timeline({defaults:{overwrite:!0}}).to(v,{autoAlpha:1,y:0,delay:.1,duration:1,ease:"sine.out",stagger:.14})}},f=()=>{const v=a();if(v.length){if(n.matches){l();return}i?.kill(),s?.kill(),s=r.timeline({defaults:{overwrite:!0}}).to(v,{autoAlpha:0,y:10,duration:.5,ease:"sine.inOut",stagger:{each:.05,from:"end"}})}},_=(v=!1)=>{if(!u()){o=h(),l();return}const S=h();!v&&S===o||(o=S,S?d():f())},g=new MutationObserver(v=>{for(const S of v)if(S.attributeName==="class"){_();break}});g.observe(e,{attributes:!0,attributeFilter:["class"]}),g.observe(t,{attributes:!0,attributeFilter:["class"]});const m=()=>_(!0),p=()=>_(!0);return window.addEventListener("resize",m,{passive:!0}),window.addEventListener("pageshow",p),_(!0),{destroy(){g.disconnect(),i?.kill(),s?.kill(),window.removeEventListener("resize",m),window.removeEventListener("pageshow",p),l()}}}const yA=768;function SA(){return window.innerWidth<=yA}function MA(r,e,t,n){const i=Math.max(r/t,e/n),s=t*i,o=n*i,a=(r-s)/2,l=(e-o)/2;return{bw:s,bh:o,offsetX:a,offsetY:l}}function bA(){const r=Array.from(document.querySelectorAll("[data-spot]"));if(!r.length)return[];const e=[];return r.forEach(t=>{const n=t.querySelector("img"),i=Number(t.dataset.radius??160),s=Number(t.dataset.soft??70),o=(t.dataset.hideOnLeave??"true")!=="false";let a=t.querySelector(".spotlight");a||(a=document.createElement("div"),a.className="spotlight",a.setAttribute("aria-hidden","true"),t.appendChild(a)),window.getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.style.overflow=t.style.overflow||"hidden",t.style.touchAction="none",t.style.setProperty("--spot-soft",`${s}%`),t.style.setProperty("--d",`${i*2}px`),a.style.position="absolute",a.style.left="0",a.style.top="0",a.style.width="var(--d)",a.style.height="var(--d)",a.style.pointerEvents="none",a.style.willChange="transform",a.style.transform="translate3d(var(--tx), var(--ty), 0)",a.style.backgroundRepeat="no-repeat",a.style.backgroundSize="var(--bw) var(--bh)",a.style.backgroundPosition="var(--bpx) var(--bpy)",a.style.webkitMaskImage="radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) calc(100% - var(--spot-soft)), rgba(255,255,255,0) 100%)",a.style.maskImage="radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) calc(100% - var(--spot-soft)), rgba(255,255,255,0) 100%)",a.style.webkitMaskRepeat="no-repeat",a.style.maskRepeat="no-repeat";const l=()=>{const C=n?.currentSrc||n?.src;if(C){a.style.backgroundImage=`url("${C}")`;return}const y=window.getComputedStyle(t).backgroundImage;y&&y!=="none"&&(a.style.backgroundImage=y)};n?.complete?l():n?n.addEventListener("load",l,{once:!0}):l();let c=null;const u=()=>{const C=t.getBoundingClientRect();n?.naturalWidth&&n?.naturalHeight?c=MA(C.width,C.height,n.naturalWidth,n.naturalHeight):c={bw:C.width,bh:C.height,offsetX:0,offsetY:0},t.style.setProperty("--bw",`${c.bw}px`),t.style.setProperty("--bh",`${c.bh}px`)},h=C=>{t.dataset.active=C?"true":"false",C?(a.style.opacity="1",a.style.transition="opacity 60ms ease"):(a.style.opacity="0",a.style.transition="opacity 160ms ease")};let d=!1,f=0,_=0;const g=()=>{if(d=!1,!c)return;const C=f-i,y=_-i;t.style.setProperty("--tx",`${C}px`),t.style.setProperty("--ty",`${y}px`);const M=c.offsetX-C,P=c.offsetY-y;t.style.setProperty("--bpx",`${M}px`),t.style.setProperty("--bpy",`${P}px`)},m=()=>{d||(d=!0,requestAnimationFrame(g))};let p=null,v=null;const S=(C,y)=>{p=C,v=y;const M=t.getBoundingClientRect();if(!(C>=M.left&&C<=M.right&&y>=M.top&&y<=M.bottom)){o&&h(!1);return}f=Math.min(M.width,Math.max(0,C-M.left)),_=Math.min(M.height,Math.max(0,y-M.top)),h(!0),m()},x=C=>{S(C.clientX,C.clientY)},b=()=>{p==null||v==null||S(p,v)};window.addEventListener("pointermove",x,{passive:!0}),window.addEventListener("mousemove",x,{passive:!0}),window.addEventListener("scroll",b,{passive:!0}),h(!o);const w=()=>{u();const C=t.getBoundingClientRect();f=C.width/2,_=C.height/2,m()};n?.complete?w():n?n.addEventListener("load",w,{once:!0}):w();const E=new ResizeObserver(()=>{u(),m(),p!=null&&v!=null&&S(p,v)});E.observe(t),e.push(E)}),e}function TA(){if(SA())return null;const r=document.createElement("div");r.id="cursor",r.style.cssText=`
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
  `,document.body.appendChild(r),document.body.appendChild(e);const t={x:window.innerWidth*.5,y:window.innerHeight*.5,active:!1},n={x:0,y:-14},i={x:14,y:-24};let s=t.x,o=t.y,a=t.x+i.x,l=t.y+i.y;const c=.12,u=x=>{t.x=x.clientX,t.y=x.clientY,t.active=!0,r.style.opacity="1",e.style.opacity="1",e.textContent=`${Math.round(t.x)}, ${Math.round(t.y)}`};window.addEventListener("pointermove",u,{passive:!0}),window.addEventListener("pointerdown",u,{passive:!0}),window.addEventListener("pointerleave",()=>{t.active=!1,r.style.opacity="0",e.style.opacity="0"});const h=()=>{if(t.active){const x=t.x+n.x,b=t.y+n.y;s+=(x-s)*c,o+=(b-o)*c,r.style.left=`${s}px`,r.style.top=`${o}px`;const w=t.x+i.x,E=t.y+i.y;a+=(w-a)*c,l+=(E-l)*c,e.style.left=`${a}px`,e.style.top=`${l}px`}requestAnimationFrame(h)};requestAnimationFrame(h);const d=x=>{if(!x)return!1;const b=x.tagName.toLowerCase(),w=x.getAttribute("role"),E=["button","link","menuitem","tab","option"];return b==="button"||b==="a"||b==="input"||b==="textarea"||b==="select"||x.onclick||E.includes(w)||x.style.cursor==="pointer"||window.getComputedStyle(x).cursor==="pointer"},f=()=>{r.style.transform="translate(-50%, -50%) scale(2)"},_=()=>{r.style.transform="translate(-50%, -50%) scale(1)"};document.addEventListener("mouseover",x=>{d(x.target)&&f()}),document.addEventListener("mouseout",x=>{d(x.target)&&_()});const g=[".section.cc-stats",".navbar_menu","#navbar_menu",".w-nav-menu",".nav-menu",'[data-collapse="medium"]'],m=x=>x?g.some(b=>{const w=document.querySelectorAll(b);return Array.from(w).some(E=>E.contains(x))}):!1,p=()=>{r.style.background="#ffffff",e.style.color="#ffffff",e.style.textShadow="0 1px 2px rgba(0,0,0,0.5)"},v=()=>{r.style.background="#5491ff",e.style.color="#1a1a1a",e.style.textShadow="0 1px 0 #ffffff"};document.addEventListener("mouseover",x=>{m(x.target)&&p()}),document.addEventListener("mouseout",x=>{m(x.target)&&v()});const S=bA();return{cursor:r,cursorLabel:e,spotlightObservers:S}}const wA={blue:{selectors:[".section.cc-stats"],className:"is-on-blue"},dark:{selectors:[".section.cc-on-grid",".section.cc-team",".section.cc-footer"],className:"is-on-dark"},green:{selectors:[".section.cc-roadmap"],className:"is-on-green"}};function EA(r,e){if(!r)return!1;const t=r.getBoundingClientRect(),n=t.bottom;return e.some(i=>{const s=document.querySelectorAll(i);return Array.from(s).some(o=>{const a=o.getBoundingClientRect();return n>a.top&&t.top<a.bottom})})}function AA(){const r=document.querySelector(".nav");if(!r)return;const e=20,t=()=>{const n=window.scrollY>e;r.classList.toggle("scrolled",n),Object.entries(wA).forEach(([i,s])=>{const o=EA(r,s.selectors);r.classList.toggle(s.className,o)})};return t(),window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t,{passive:!0}),{nav:r,threshold:e}}Yi.registerPlugin(ct);const CA=768;function b0(){return window.innerWidth<=CA}function RA(r){if(/^https?:\/\//i.test(r))return r;const e=new URL(import.meta.url),t=e.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//),n=t?t[1]:e.origin,i=r.startsWith("/")?r:`/${r}`;return`${n}${i}`}function Jc(r,e,t){return Math.min(t,Math.max(e,r))}function PA(r,e,t){return .2126*r+.7152*e+.0722*t}function LA(r,e){return Jc((r-.5)*e+.5,0,1)}function DA(r,e){return Jc(Math.pow(r,e),0,1)}const Dr={ramp:" .'`^\",:;Il!i<>~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",cellSize:8,aspectComp:.55,fontScale:1,contrast:1.25,gamma:.85,color:"#ffffff",opacity:.75};function IA(){const r=document.querySelector('[data-component="stats-canvas"]');if(!r)return console.log("[Stats ASCII] Canvas not found"),null;const e=document.querySelector(".cc-stats");if(!e)return console.log("[Stats ASCII] Stats section not found"),null;const t=r.getContext("2d",{alpha:!0});if(!t)return null;let n=!1,i=!1,s=null,o=null,a=null,l=1,c=1,u=1,h=1,d=1,f=1;const _=document.createElement("canvas"),g=new xa({canvas:_,antialias:!1,alpha:!0,powerPreference:"high-performance"});g.setPixelRatio(1),g.setClearColor(0,0);const m=new fa,p=new yn(45,1,.1,100);p.position.set(0,6,14),p.lookAt(0,0,0);const v=new ru(16777215,.5),S=new Ji(16777215,1);S.position.set(5,5,5);const x=new Ji(16777215,.5);x.position.set(-2,3,-4),m.add(v,S,x);const b=()=>{let L=r,N=0,U=0;for(;L&&L!==document.body;){if(L.offsetWidth>1&&L.offsetHeight>1){N=L.offsetWidth,U=L.offsetHeight;break}L=L.parentElement}return N<2&&(N=window.innerWidth),U<2&&(U=window.innerHeight),{w:Math.max(1,Math.floor(N)),h:Math.max(1,Math.floor(U))}},w=()=>{const{w:L,h:N}=b();d=L,f=N;const U=Math.min(window.devicePixelRatio||1,2);r.width=Math.max(1,Math.floor(d*U)),r.height=Math.max(1,Math.floor(f*U)),r.style.width=`${d}px`,r.style.height=`${f}px`,t.setTransform(U,0,0,U,0,0),t.textBaseline="top",l=Jc(Math.floor(d/Dr.cellSize),32,180),u=d/l,h=u/Dr.aspectComp,c=Jc(Math.floor(f/h),20,120),o&&o.dispose(),o=new Fn(l,c,{depthBuffer:!0,stencilBuffer:!1}),a=new Uint8Array(l*c*4),g.setSize(l,c,!1),p.aspect=d/f,p.updateProjectionMatrix();const H=d/f,k=6+H*2,z=1+H*.3;p.position.set(0,z,k),p.lookAt(0,-12,0)},E=()=>{if(n)return;n=!0,console.log("[Stats ASCII] Loading earth model..."),w(),new uu().load(RA("/models/earth.glb"),N=>{s=N.scene;const U=new Vt().setFromObject(s),H=U.getCenter(new F),k=U.getSize(new F),z=Math.max(k.x,k.y,k.z),W=b0()?14:28,Q=W/z;s.position.sub(H),s.scale.setScalar(Q),s.position.y=-(W*.78),s.traverse(D=>{D.isMesh&&(D.material=new bs({color:16777215,metalness:.1,roughness:.3}))}),m.add(s),console.log("[Stats ASCII] Model loaded, starting animation"),y()},void 0,N=>{console.error("[Stats ASCII] Failed to load model:",N)})},C=new _a,y=()=>{if(!document.body.contains(r)){M.disconnect(),window.removeEventListener("resize",P),o?.dispose(),g.dispose();return}if(!i){requestAnimationFrame(y);return}const L=C.getElapsedTime();s&&(s.rotation.y=L*.15),g.setRenderTarget(o),g.render(m,p),g.setRenderTarget(null),g.readRenderTargetPixels(o,0,0,l,c,a),t.clearRect(0,0,d,f),t.fillStyle=Dr.color,t.globalAlpha=Dr.opacity;const N=Math.max(8,Math.floor(h*Dr.fontScale));t.font=`${N}px monospace`;const U=Math.max(1,t.measureText("M").width),H=u/U;t.save(),t.scale(H,1);const k=Math.max(h,N*1.04);for(let z=0;z<c;z++){const W=c-1-z;let Q="";for(let D=0;D<l;D++){const te=(W*l+D)*4,Ae=a[te]/255,Ce=a[te+1]/255,Pe=a[te+2]/255;let ze=PA(Ae,Ce,Pe);ze=LA(ze,Dr.contrast),ze=DA(ze,Dr.gamma);const K=Math.floor(ze*(Dr.ramp.length-1));Q+=Dr.ramp[K]}t.fillText(Q,0,z*k)}t.restore(),t.globalAlpha=1,requestAnimationFrame(y)},M=new IntersectionObserver(L=>{L.forEach(N=>{i=N.isIntersecting,i&&!n&&(console.log("[Stats ASCII] Section in view - loading model"),E())})},{threshold:.05});M.observe(e),console.log("[Stats ASCII] Intersection Observer attached to stats section");const P=()=>{w()};return window.addEventListener("resize",P),{observer:M,resize:w}}function NA(){if(!b0())return null;const r=document.querySelector('[data-component="stats-grid"]');if(!r)return console.log("[Mobile Stats Grid] Grid element not found"),null;const e=r.querySelectorAll(".col");if(!e.length)return console.log("[Mobile Stats Grid] No stat items found"),null;console.log(`[Mobile Stats Grid] Found ${e.length} items`),Yi.set(e,{filter:"blur(10px)",opacity:0,y:20});const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(console.log("[Mobile Stats Grid] In view — animating items"),Yi.to(e,{filter:"blur(0px)",opacity:1,y:0,duration:.6,ease:"power2.out",stagger:.1}),t.disconnect())})},{threshold:.3,rootMargin:"0px 0px -10% 0px"});return t.observe(r),console.log("[Mobile Stats Grid] Intersection Observer attached"),{items:e,observer:t,destroy(){t.disconnect()}}}function OA(){const r=document.querySelector(".roadmap_grid");if(!r)return console.log("[Roadmap] Grid not found"),null;const e=r.querySelectorAll(".roadmap_item");if(!e.length)return console.log("[Roadmap] No items found"),null;console.log(`[Roadmap] Found ${e.length} items`);const t=r.querySelectorAll('[data-component="time-stamp"]');console.log(`[Roadmap] Found ${t.length} timestamp elements`),Yi.set(e,{filter:"blur(10px)",opacity:0}),Yi.set(t,{y:30,opacity:0,"--dot-scale":0});const i=window.innerWidth<=768?"--before-height":"--before-width";Yi.set(r,{[i]:"0%"});const s=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&(console.log("[Roadmap] Grid in view - starting animations"),Yi.to(e,{filter:"blur(0px)",opacity:1,duration:.9,ease:"power2.out",stagger:.15}),Yi.to(t,{y:0,opacity:1,"--dot-scale":1,duration:.9,ease:"power3.out",stagger:.15}),Yi.to(r,{[i]:"100%",duration:1.8,ease:"power2.inOut"}),s.disconnect())})},{threshold:.2,rootMargin:"0px 0px -10% 0px"});return s.observe(r),console.log("[Roadmap] Intersection Observer attached to grid"),{items:e,timestampElements:t,observer:s,destroy(){s.disconnect()}}}const T0=location.hostname.includes(".webflow.io")||location.hostname.endsWith("webflow.io");T0||H0(()=>Promise.resolve({}),__vite__mapDeps([0]));const vt=window.gsap||Yi,Ai=window.ScrollTrigger||ct;document.documentElement.classList.add("js-ready");if(window.__GENLABS_MAIN_BOOTED__)throw new Error("GEN Labs main.js initialized more than once");window.__GENLABS_MAIN_BOOTED__=!0;Ai&&(vt.registerPlugin(Ai),Ai.config({ignoreMobileResize:!0}));let Ys=null;function UA(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;Ys=new BE({duration:1,smoothWheel:!0,smoothTouch:!1,wheelMultiplier:1,touchMultiplier:1}),Ys.on("scroll",()=>{Ai?.update()});const e=t=>{Ys.raf(t),requestAnimationFrame(e)};requestAnimationFrame(e),window.__GENLABS_LENIS__=Ys}UA();const w0=new URL(import.meta.url),ig=w0.href.match(/^(https:\/\/cdn\.jsdelivr\.net\/gh\/[^/]+\/[^/]+@[^/]+\/dist)\//),FA=ig?ig[1]:w0.origin;function Qc(r){const e=r.replace(/^\//,"");return`${FA}/${e}`}function Uo(...r){return document.querySelector(r.join(", "))}const jn={panelHero:Uo(".cc-hero",".panel-hero"),panelUnder:Uo(".cc-about",".panel-under"),panelConverge:Uo(".cc-convergence",".cc-benefits",".panel-converge"),panelStats:Uo(".cc-stats")};jn.underCopy=Uo('[data-text="about-intro"]','[data-text="about-into"]',".under-copy",".cc-about .h3.u-text-center:not(.u-text-primary)");jn.underHighlight=Uo('[data-text="about-outro"]',".under-highlight",".cc-about .u-text-primary");jn.underCopy&&(jn.underCopy.dataset.splitIgnore="true");jn.underHighlight&&(jn.underHighlight.dataset.splitIgnore="true");const BA=940,jt=()=>window.innerWidth<=BA,kA=()=>window.matchMedia("(hover: none), (pointer: coarse)").matches,zA=()=>document.querySelector("#grid-stage .grid-stage-sticky")||document.querySelector(".grid-stage-sticky"),E0=()=>{const r=zA(),e=document.querySelector(".cc-stats");return!!(r&&e&&r.contains(e))},VA=E0();jt()||(jn.panelConverge&&(jn.panelConverge.style.opacity="0"),jn.panelStats&&VA&&(jn.panelStats.style.opacity="0",jn.panelStats.style.visibility="visible"));const HA=document.fonts?.ready||Promise.resolve();HA.then(()=>{let r=0;const e=40,t=()=>{vA({gsap:vt,ScrollTrigger:Ai})||(r+=1,r<=e&&window.setTimeout(t,120))};t()});const Dn={heroTitle:'[data-text="hero-title"], .hero-title',panelHero:".cc-hero, .panel-hero",panelUnder:".cc-about, .panel-under",panelConverge:".cc-convergence, .cc-benefits, .panel-converge",panelStats:".cc-stats",underCopy:'[data-text="about-intro"], [data-text="about-into"], .under-copy, .cc-about .h3.u-text-center:not(.u-text-primary)',underHighlight:'[data-text="about-outro"], .under-highlight, .cc-about .u-text-primary'},A0=()=>!!document.querySelector(".cc-convergence .convergence-video, .cc-benefits .convergence-video, .convergence-video"),rg=()=>{const r=document.querySelector("#grid-stage"),e=document.querySelector("#grid-stage-scroll"),t=document.querySelector("#scroll-spacer");return{stage:r,runway:e,trigger:r||e||t||document.body}};T0&&("scrollRestoration"in history&&(history.scrollRestoration="manual"),window.scrollTo(0,0),window.addEventListener("load",()=>{window.scrollTo(0,0),requestAnimationFrame(()=>window.scrollTo(0,0))},{once:!0}));let Wf=!0;console.log("ASCII enabled:",Wf);let mh=null,gn=null,Os=null,Us=null;const gh=new Map,qs=new Sn;let Hd=null,Gd=null,C0=.16,_h=0;const xn={ramp:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",invert:!1,cellSize:5,aspectComp:.55,fontFamily:"monospace",fontScale:1,contrast:1.15,gamma:.9,bg:"#ffffff",fg:"#125fee"},Ms=new Of({title:"ASCII"});Ms.hide();let vh=!1;window.addEventListener("keydown",r=>{if(r.repeat||r.key.toLowerCase()!=="g"||r.ctrlKey||r.metaKey||r.altKey)return;const e=document.activeElement?.tagName;e==="INPUT"||e==="TEXTAREA"||document.activeElement?.isContentEditable||(vh=!vh,vh?Ms.show():Ms.hide())});const ha={pixelation:xn.cellSize,matrix:!1,characters:xn.ramp,fontSize:Math.round(xn.fontScale*58),invert:xn.invert,asciiColor:xn.fg,noiseTint:"#5491FF",logoColor:"#ffffff"};Ms.addColor(ha,"asciiColor").name("ASCII COLOR").onChange(r=>{xn.fg=r});Ms.add(ha,"pixelation",4,24,1).name("PIXELATION").onChange(r=>{xn.cellSize=r,Ui()});Ms.add(ha,"characters").name("CHARACTERS").onFinishChange(r=>{ha.characters=r,xn.ramp=r});const GA={ascii:!0};Ms.add(GA,"ascii").name("ASCII MODE").onChange(r=>{Wf=r,ds.style.display=r?"block":"none",$r.style.display=r?"none":"block"});const Dt={width:window.innerWidth,height:window.innerHeight},ds=document.querySelector("#ascii");if(!ds)throw new Error("Missing #ascii canvas in DOM");const ri=ds.getContext("2d",{alpha:!1});function R0(){const r=Math.min(window.devicePixelRatio||1,2);ds.width=Math.floor(Dt.width*r),ds.height=Math.floor(Dt.height*r),ds.style.width=`${Dt.width}px`,ds.style.height=`${Dt.height}px`,ri.setTransform(r,0,0,r,0,0),ri.fillStyle=xn.bg,ri.fillRect(0,0,Dt.width,Dt.height),ri.textBaseline="top"}R0();const $r=document.createElement("canvas"),qi=new xa({canvas:$r,antialias:!0,alpha:!1,powerPreference:"high-performance"});$r.className="webgl";document.body.appendChild($r);$r.style.position="fixed";$r.style.inset="0";$r.style.width="100%";$r.style.height="100%";$r.style.display="none";qi.setPixelRatio(Math.min(window.devicePixelRatio,2));qi.setSize(Dt.width,Dt.height);qi.shadowMap.enabled=!1;qi.shadowMap.type=cg;const{cursor:pC}=TA()||{},sg="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",xh=new WeakMap;function WA(r){const e=r.dataset.scrambleText||r.textContent.trim();r.dataset.scrambleText=e;const t=xh.get(r);t?.tween&&t.tween.kill();const n={progress:0},i=.32,s=vt.to(n,{progress:1,duration:.55,ease:"power2.out",onUpdate:()=>{const o=Math.max(0,(n.progress-i)/(1-i)),a=Math.floor(e.length*o);let l="";for(let c=0;c<e.length;c++){const u=e[c];if(u===" "){l+=" ";continue}if(c<a){l+=u;continue}const h=Math.floor(Math.random()*sg.length);l+=sg[h]}r.textContent=l},onComplete:()=>{r.textContent=e,xh.set(r,{tween:null})}});xh.set(r,{tween:s})}function XA(){document.querySelectorAll(".nav-links a, .nav-link.w-nav-link").forEach(e=>{e.dataset.scrambleText=e.textContent.trim();const t=()=>{WA(e)};e.addEventListener("pointerenter",t),e.addEventListener("focus",t)})}XA();xA(vt);AA();IA();NA();OA();function YA(){const r=document.querySelector(Dn.panelConverge),e=r?.querySelector(".converge-label-left"),t=r?.querySelector(".converge-label-right"),n=r?.querySelector(".converge-hover-card-left"),i=r?.querySelector(".converge-hover-card-right");if(!r||!e||!t||!n||!i)return;const s=(a,l,c)=>Math.min(c,Math.max(l,a));[{label:e,card:n,side:"left"},{label:t,card:i,side:"right"}].forEach(({label:a,card:l,side:c})=>{const u={active:!1,pointerX:window.innerWidth*.5,pointerY:window.innerHeight*.5},h=vt.quickTo(l,"x",{duration:.3,ease:"power3.out"}),d=vt.quickTo(l,"y",{duration:.3,ease:"power3.out"}),f=()=>{const v=a.getBoundingClientRect();if(v.width<8||v.height<8)return!1;const S=Number(vt.getProperty(r,"opacity"))||0,x=Number(vt.getProperty(a,"opacity"))||0;return S>.12&&x>.12},_=(v,S)=>{const x=a.getBoundingClientRect(),b=Math.max(24,x.width*.3),w=Math.max(14,x.height*.8);return v>=x.left-b&&v<=x.right+b&&S>=x.top-w&&S<=x.bottom+w},g=(v=!1)=>{const S=a.getBoundingClientRect(),x=l.offsetWidth,b=l.offsetHeight,w=S.left+S.width*.5-x*.5,E=S.bottom+18,C=S.width>0?(u.pointerX-S.left)/S.width-.5:0,y=S.height>0?(u.pointerY-S.top)/S.height-.5:0,M=C*54,P=y*20,L=18,N=14,U=c==="left"?L:window.innerWidth*.5+N,H=c==="left"?window.innerWidth*.5-x-N:window.innerWidth-x-L,k=s(w+M,U,Math.max(U,H)),z=s(E+P,S.bottom+8,window.innerHeight-b-L);if(v){vt.set(l,{x:k,y:z});return}h(k),d(z)},m=()=>{u.active||(u.active=!0,vt.to(l,{autoAlpha:1,scale:1,duration:.2,ease:"power2.out",overwrite:!0}),g(!0))},p=()=>{u.active&&(u.active=!1,vt.to(l,{autoAlpha:0,scale:.96,duration:.16,ease:"power2.out",overwrite:!0}))};window.addEventListener("pointermove",v=>{if(v.pointerType!=="touch"){if(u.pointerX=v.clientX,u.pointerY=v.clientY,!f()||!_(u.pointerX,u.pointerY)){p();return}m(),g()}},{passive:!0}),window.addEventListener("scroll",()=>{if(u.active){if(!f()||!_(u.pointerX,u.pointerY)){p();return}g(!0)}},{passive:!0}),window.addEventListener("pointerleave",p),window.addEventListener("resize",()=>{u.active&&g(!0)})}),vt.set(".converge-hover-card",{autoAlpha:0,scale:.96})}YA();function P0(r){return new Promise(e=>{let t=0;const n=80,i=()=>{try{const s=window.Webflow?.require?.("lottie")?.lottie;if(s){const o=document.querySelector(r);if(o){const l=s.getRegisteredAnimations()?.find(c=>c.wrapper?c.wrapper===o||o.contains(c.wrapper)||c.wrapper.contains(o):!1);if(l&&l.isLoaded!==!1&&(l.animationData||l.totalFrames>0)){l.pause(),l.autoplay=!1,l.loop=!1;const c=l.animationData?.ip??0;l.goToAndStop(c,!0),console.log(`[getWebflowLottie] found "${r}" after ${t+1} attempts, totalFrames:`,l.totalFrames,"currentFrame:",l.currentFrame),e(l);return}}}}catch(s){t%20===0&&console.warn(`[getWebflowLottie] polling "${r}", attempt ${t}:`,s.message)}++t<n?setTimeout(i,100):(console.warn(`[getWebflowLottie] gave up looking for "${r}" after ${n} attempts`),e(null))};window.Webflow&&typeof window.Webflow.push=="function"?window.Webflow.push(()=>i()):i()})}function qA(){const r=document.querySelector(".stats-arc");if(!r){console.warn("[Stats Lottie] .stats-arc element not found in DOM");return}console.log("[Stats Lottie] .stats-arc found, waiting for Webflow lottie"),P0(".stats-arc").then(e=>{if(!e){console.warn("[Stats Lottie] ❌ could not find Webflow lottie for .stats-arc after polling");return}e.goToAndStop(0,!0),e.pause(),console.log("[Stats Lottie] ✅ Webflow lottie ready, paused at frame 0");const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(console.log("[Stats Lottie] in view — playing animation"),e.play(),t.disconnect())})},{threshold:.3,rootMargin:"0px 0px -10% 0px"});t.observe(r),console.log("[Stats Lottie] Intersection Observer attached"),window.__GENLABS_STATS_LOTTIE__=e})}qA();const L0="top top",D0="bottom top",I0=.6,N0=r=>Math.max(0,Math.min(1,r));function O0(r){const e=window.__GENLABS_STAGE_TIMING__,t=e?.convergeIn??.56,n=e?.convergeGlbStart??t,i=e?.statsIn??DESKTOP_STATS_IN,s=Math.min(i-1e-4,Math.max(t,n)),o=Math.max(1e-4,i-s);return N0((r-s)/o)}function $A(){document.querySelector(".convergence-lottie")&&P0(".convergence-lottie").then(r=>{if(!r){console.warn("[Convergence Lottie] could not find Webflow lottie for .convergence-lottie");return}const e=r.animationData?.ip??0,t=r.animationData?.op??r.totalFrames,n=t-e;let i=-1,s=0,o=!1;const a=l=>{const c=Math.round(e+Math.max(0,Math.min(1,l))*n);c!==i&&(i=c,r.goToAndStop(c,!0))};if(r.playSegments([e,t],!0),r.pause(),r.goToAndStop(e,!0),typeof r.resize=="function"&&r.resize(),console.log("[Convergence Lottie] ready — ip:",e,"op:",t,"span:",n,"totalFrames:",r.totalFrames),jt()){const l=document.querySelector(".cc-convergence")||document.querySelector(".cc-benefits");l&&Ai&&Ai.create({trigger:l,start:L0,end:D0,scrub:I0,onUpdate:c=>{!o&&c.progress>0&&(o=!0,typeof r.resize=="function"&&r.resize()),a(c.progress)}})}else{const l=()=>{if(!window.__pageTL){s=requestAnimationFrame(l);return}const c=window.__pageTL.progress();if(typeof c=="number"){const u=O0(c);u>0&&!o&&(o=!0,typeof r.resize=="function"&&r.resize()),a(u)}s=requestAnimationFrame(l)};s=requestAnimationFrame(l)}window.__GENLABS_CONVERGE_LOTTIE__=r,window.addEventListener("pagehide",()=>{s&&cancelAnimationFrame(s)},{once:!0})})}$A();function jA(){const r=document.querySelector(".convergence-video");if(!r)return;let e=0,t=!1,n=0,i=-1;const s=()=>{const c=r.duration;n=Number.isFinite(c)&&c>0?c:0,t=n>0};let o=0;const a=c=>{if(!t||n<=0)return;const u=.15,h=c<u?0:(c-u)/(1-u),d=Math.max(0,n-.001),f=N0(h)*d;if(!(Math.abs(f-i)<1/60)){i=f,o++%60===0&&console.log("[Convergence Video Debug] progress:",c.toFixed(3),"targetTime:",f.toFixed(2),"actualCurrentTime:",r.currentTime.toFixed(2));try{r.currentTime=f}catch{}}};r.autoplay=!1,r.loop=!1,r.muted=!0,r.pause();const l=()=>{r.readyState>=1&&(r.currentTime=0,console.log("[Convergence Video] Set to start (0s)"))};if(s(),a(0),setTimeout(()=>{l()},1e3),r.addEventListener("loadedmetadata",()=>{s(),a(0),setTimeout(l,1e3)}),r.addEventListener("loadeddata",()=>{setTimeout(l,1e3)}),jt()){const c=document.querySelector(".cc-convergence")||document.querySelector(".cc-benefits");c&&Ai&&Ai.create({trigger:c,start:L0,end:D0,scrub:I0,onUpdate:u=>{a(u.progress)}})}else{let c=!1;const u=()=>{if(!window.__pageTL){e=requestAnimationFrame(u);return}const h=window.__pageTL.progress();if(typeof h=="number"){const d=O0(h);d>0&&!c&&(c=!0,console.log("[Convergence Video] Section became visible at stage progress:",h.toFixed(3),"media progress:",d.toFixed(3),"video time:",r.currentTime.toFixed(2),"duration:",n.toFixed(2))),a(d)}e=requestAnimationFrame(u)};e=requestAnimationFrame(u)}window.__GENLABS_CONVERGENCE_VIDEO__=r,window.addEventListener("pagehide",()=>{e&&cancelAnimationFrame(e)},{once:!0})}jA();function Wa(r){if(!r||r.dataset.splitReady==="true")return r?.querySelectorAll(".split-word")||[];const e=[],t=i=>{const s=i.textContent;if(!s)return;const o=s.split(/(\s+)/),a=document.createDocumentFragment();o.forEach(l=>{if(!l)return;if(/^\s+$/.test(l)){a.appendChild(document.createTextNode(l));return}const c=document.createElement("span");c.className="split-word-mask";const u=document.createElement("span");u.className="split-word",u.textContent=l,c.appendChild(u),a.appendChild(c),e.push(u)}),i.parentNode.replaceChild(a,i)},n=i=>{if(!i)return;if(i.nodeType===Node.TEXT_NODE){t(i);return}if(i.nodeType!==Node.ELEMENT_NODE||i.tagName==="BR"||i.classList.contains("split-word-mask"))return;Array.from(i.childNodes).forEach(n)};return n(r),r.dataset.splitReady="true",e}function KA(r){if(!r||r.dataset.lineSplitReady==="true")return{lineWords:r?Array.from(r.querySelectorAll(".split-line .split-word")):[],lineBgs:r?Array.from(r.querySelectorAll(".split-line-bg")):[]};Wa(r);const e=Array.from(r.querySelectorAll(".split-word-mask"));if(!e.length)return{lineWords:[],lineBgs:[]};const t=[],n=6;return e.forEach(i=>{const s=i.getBoundingClientRect().top,o=t.find(a=>Math.abs(a.top-s)<=n);if(o){o.masks.push(i);return}t.push({top:s,masks:[i]})}),t.sort((i,s)=>i.top-s.top),r.innerHTML="",r.style.display="block",t.forEach((i,s)=>{const o=document.createElement("span");o.className="split-line",o.style.position="relative",o.style.display="block",o.style.width="fit-content",o.style.margin=s===0?"0 auto 0.12em":"0 auto",o.style.padding="0.03em 0.18em 0.07em";const a=document.createElement("span");a.className="split-line-bg",a.style.position="absolute",a.style.inset="0",a.style.background="var(--_color---neutral--gray-matter)",a.style.transformOrigin="left center",a.style.transform="scaleX(0)",a.style.zIndex="0";const l=document.createElement("span");l.style.position="relative",l.style.zIndex="1",i.masks.forEach((c,u)=>{l.appendChild(c),u<i.masks.length-1&&l.appendChild(document.createTextNode(" "))}),o.appendChild(a),o.appendChild(l),r.appendChild(o)}),r.dataset.lineSplitReady="true",{lineWords:Array.from(r.querySelectorAll(".split-line .split-word")),lineBgs:Array.from(r.querySelectorAll(".split-line-bg"))}}const Nn={hero:Wa(document.querySelector(Dn.heroTitle)),underCopy:Wa(jn.underCopy),underHighlight:Wa(jn.underHighlight),convergeFinal:Wa(document.querySelector(".converge-final"))},da=jn.underHighlight?.dataset.split==="lines"?KA(jn.underHighlight):{lineWords:[],lineBgs:[]};da.lineWords.length&&(Nn.underHighlight=da.lineWords);Nn.hero.length&&(vt.set(Nn.hero,{y:50,opacity:0}),vt.to(Nn.hero,{y:0,opacity:1,duration:.9,ease:"power3.out",delay:.12,stagger:.035}));Nn.underCopy.length&&vt.set(Nn.underCopy,{y:50,opacity:0});Nn.underHighlight.length&&vt.set(Nn.underHighlight,{y:50,opacity:0});da.lineBgs.length&&vt.set(da.lineBgs,{scaleX:0,transformOrigin:"left center"});Nn.convergeFinal.length&&vt.set(Nn.convergeFinal,{y:42,opacity:0});function ZA(){const r=document.querySelector('[data-component="explore-btn"], .explore-btn');if(!r)return;const e=24;let t=!0;const n=(s,o=!1)=>{s!==t&&(t=s,vt.to(r,{autoAlpha:s?1:0,y:s?0:18,duration:o?0:.24,ease:"power2.out",overwrite:!0}),r.classList.toggle("is-hidden",!s))},i=()=>{const s=window.__pageTL?.scrollTrigger;if(s&&Number.isFinite(s.start)&&Number.isFinite(s.end)&&s.end>s.start)return Math.round(s.start+(s.end-s.start)*.2);const o=document.querySelector(Dn.panelUnder);return Math.round(o?o.getBoundingClientRect().top+window.scrollY:window.scrollY+window.innerHeight*.6)};window.addEventListener("scroll",()=>{n(window.scrollY<=e)},{passive:!0}),r.addEventListener("click",()=>{n(!1);const s=i();if(Ys&&typeof Ys.scrollTo=="function"){Ys.scrollTo(s,{duration:1.1});return}window.scrollTo({top:s,behavior:"smooth"})}),n(window.scrollY<=e,!0)}ZA();Z1({gsap:vt,ScrollTrigger:Ai});(function(){const e=document.querySelector('[data-component="convergence-mobile"]');if(!e||!jt()||A0())return;function t(){const P=e.parentElement;if(P){const L=P.getBoundingClientRect();if(L.width>0&&L.height>0)return{width:L.width,height:L.height}}return{width:window.innerWidth,height:window.innerHeight}}let n=t();const i=Math.min(window.devicePixelRatio||1,2);e.width=Math.floor(n.width*i),e.height=Math.floor(n.height*i),e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,e.style.opacity="0";const s=e.getContext("2d",{alpha:!1});s.setTransform(i,0,0,i,0,0),s.textBaseline="top";const o=document.createElement("canvas"),a=new xa({canvas:o,antialias:!0,alpha:!1});a.setPixelRatio(i),a.setSize(n.width,n.height);const l=new fa,c=new yn(45,n.width/n.height,.01,1e3);l.add(c),l.add(new ru(16777215,.25));const u=new Ji(16777215,1.25);u.position.set(6,4,6),l.add(u);const h=new Ji(16777215,.35);h.position.set(-6,2,4),l.add(h);const d=new Ji(16777215,.6);d.position.set(0,6,-6),l.add(d);const f={uTime:{value:0},uScale:{value:2.4},uIntensity:{value:.85},uBase:{value:.025},uAmp:{value:.015},uResolution:{value:new Be(n.width,n.height)},uTint:{value:new F(1,1,1)}},_=new Jn({uniforms:f,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.,1.); }",fragmentShader:`
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
      }`}),g=new At(new qr(2,2),_);g.frustumCulled=!1,g.renderOrder=-1e3,l.add(g);let m=null,p=null;function v(){const P={cellSize:5,aspectComp:.55},L=Math.max(20,Math.floor(n.width/P.cellSize)),N=n.width/L,U=N/P.aspectComp,H=Math.max(20,Math.floor(n.height/U));m&&m.dispose(),m=new Fn(L,H,{depthBuffer:!0,stencilBuffer:!1}),p=new Uint8Array(L*H*4),v.cols=L,v.rows=H,v.cellW=N,v.cellH=U}v();const S=" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";function x(){const{cols:P,rows:L,cellW:N,cellH:U}=v;s.fillStyle="#ffffff",s.fillRect(0,0,n.width,n.height),s.fillStyle="#125fee";const H=Math.max(8,Math.floor(U*1));s.font=`${H}px monospace`,s.textAlign="left";const k=s.measureText("M").width||1,z=N/k;s.save(),s.scale(z,1);const W=Math.max(U,H*1.05);for(let Q=0;Q<L;Q++){let D="";for(let te=0;te<P;te++){const Ae=L-1-Q,Ce=(Ae*P+te)*4;let Pe=.2126*(p[Ce]/255)+.7152*(p[Ce+1]/255)+.0722*(p[Ce+2]/255);Pe=Math.min(1,Math.max(0,(Pe-.5)*1.15+.5)),Pe=Math.min(1,Math.max(0,Math.pow(Pe,.9))),D+=S[Math.floor(Pe*(S.length-1))]}s.fillText(D,0,Q*W)}s.restore()}const b=new Sn;l.add(b);let w=!1;const E=new bs({color:16777215,metalness:.1,roughness:.6});new uu().load(Qc("/models/logo_split.glb"),P=>{const L=P.scene;L.updateMatrixWorld(!0),L.traverse(Ce=>{Ce.isMesh&&(Ce.material=E,Ce.castShadow=!1,Ce.receiveShadow=!1)}),b.add(L),b.updateMatrixWorld(!0);const N=new Vt().setFromObject(b),U=N.getSize(new F),H=N.getCenter(new F);b.position.sub(H);const k=Math.max(U.x,U.y,U.z);b.scale.setScalar(7/k),b.updateMatrixWorld(!0);const Q=new Vt().setFromObject(b).getSize(new F),D=Math.max(Q.x,Q.y,Q.z),te=c.fov*Math.PI/180,Ae=D/2/Math.tan(te/2);c.position.set(0,D*.2,Ae*1.4),c.near=Math.max(.01,Ae/100),c.far=Ae*100,c.updateProjectionMatrix(),c.lookAt(0,0,0),w=!0});let C=!1;new IntersectionObserver(P=>{P[0].isIntersecting?(C=!0,e.style.opacity="1"):(C=!1,e.style.opacity="0")},{threshold:.1}).observe(e);const y=new _a,M=Math.PI*2/12;(function P(){if(requestAnimationFrame(P),!w||!C)return;const L=y.getElapsedTime();f.uTime.value=L,b.rotation.y=L*M,a.setRenderTarget(m),a.render(l,c),a.setRenderTarget(null),a.readRenderTargetPixels(m,0,0,m.width,m.height,p),x()})(),window.addEventListener("resize",()=>{n=t();const P=Math.min(window.devicePixelRatio||1,2);e.width=Math.floor(n.width*P),e.height=Math.floor(n.height*P),e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,s.setTransform(P,0,0,P,0,0),c.aspect=n.width/n.height,c.updateProjectionMatrix(),a.setSize(n.width,n.height),f.uResolution.value.set(n.width,n.height),v()})})();nA();aA();lA();pA();fA();const xr=new fa;xr.add(qs);qs.position.set(5.2,-.4,0);const JA=new ru(16777215,.25);xr.add(JA);const Mr=new Ji(16777215,1.25);Mr.position.set(6,4,6);Mr.castShadow=!1;Mr.shadow.mapSize.set(1024,1024);Mr.shadow.camera.near=.1;Mr.shadow.camera.far=50;Mr.shadow.camera.left=-15;Mr.shadow.camera.right=15;Mr.shadow.camera.top=15;Mr.shadow.camera.bottom=-15;xr.add(Mr);const U0=new Ji(16777215,.35);U0.position.set(-6,2,4);xr.add(U0);const F0=new Ji(16777215,.6);F0.position.set(0,6,-6);xr.add(F0);const QA=new _a,Cl={uTime:{value:0},uScale:{value:2.4},uIntensity:{value:.85},uBase:{value:.025},uAmp:{value:.015},uResolution:{value:new Be(Dt.width,Dt.height)},uTint:{value:new F(1,1,1)}},eC=new Jn({uniforms:Cl,depthWrite:!1,depthTest:!1,vertexShader:`
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
  `});ha.noise=Cl.uAmp.value;Ms.add(ha,"noise",.06,.3,.005).name("NOISE").onChange(r=>{Cl.uAmp.value=r});const Xf=new At(new qr(2,2),eC);Xf.frustumCulled=!1;Xf.renderOrder=-1e3;xr.add(Xf);const Fo=new Sn;xr.add(Fo);const tC=new At(new _s(1,1,1),new Tx);Fo.add(tC);const Yt=new yn(45,Dt.width/Dt.height,.1,5e3);xr.add(Yt);Yt.position.set(0,0,20);Yt.lookAt(0,0,0);const Tn=new QT(Yt,ds);Tn.enableDamping=!0;Tn.enablePan=!1;Tn.enableZoom=!1;Tn.enableRotate=!1;Tn.target.set(0,0,0);Tn.update();const Wd=new uu;function nC(r){const e=new bs({color:new $e("#ffffff"),metalness:.08,roughness:.62}),t=new Sn;if(r==="stack-cylinders"){const i=new Fc(.55,.55,1.7,32),s=new Fc(.75,.75,.12,40),o=new At(i,e),a=new At(i,e),l=new At(s,e);return o.position.set(-.75,.2,0),a.position.set(.75,-.2,0),l.position.set(0,1.1,0),t.add(o,a,l),t}if(r==="slab-grid"){for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++){const o=new At(new _s(.9,.36,.9),e);o.position.set(i*.95,s*.45,(i+s)*.06),t.add(o)}return t}if(r==="diamond-cluster"){const i=new hf(.66,0),s=new At(i,e),o=new At(i,e),a=new At(i,e);return s.position.set(-.9,-.15,0),o.position.set(.85,-.05,-.05),a.position.set(0,.9,0),t.add(s,o,a),t}if(r==="ring-array"){const i=new df(.55,.18,18,72);for(let s=0;s<4;s++){const o=new At(i,e);o.position.set((s-1.5)*.85,s%2?-.35:.35,s*-.12),o.rotation.x=Math.PI*.5,o.rotation.y=s*.45,t.add(o)}return t}const n=new At(new _s(1,1,1),e);return t.add(n),t}function og(r,e=5.5){r.updateMatrixWorld(!0);const n=new Vt().setFromObject(r).getSize(new F),i=Math.max(n.x,n.y,n.z);if(i>0){const a=e/i;r.scale.setScalar(a)}r.updateMatrixWorld(!0);const o=new Vt().setFromObject(r).getCenter(new F);r.position.sub(o),r.updateMatrixWorld(!0)}function ag(r,e=0){const t=fs.degToRad(r.fov),n=Math.max(.001,Math.abs(r.position.z-e));return Math.tan(t*.5)*n*r.aspect}function iC(r){const e=r.clone(!0);return e.traverse(t=>{t.isMesh&&(t.castShadow=!1,t.receiveShadow=!1,t.material=t.material.clone(),t.material.color=new $e("#ffffff"),t.material.needsUpdate=!0)}),e}function rC(r){return new Promise((e,t)=>{Wd.load(r,n=>e(n.scene),void 0,n=>t(n))})}function sC(r){return jc.find(e=>e.id===r)||jc[0]}async function oC(r){const{model:e}=r;if(e.type==="primitive"){const i=nC(e.primitive);return og(i,e.targetSize),i}const t=Qc(e.url);if(!gh.has(t)){const i=await rC(t);gh.set(t,i)}const n=iC(gh.get(t));return og(n,e.targetSize),n}function aC(){const r=document.querySelector("#tab-buttons");r&&(r.innerHTML="",jc.forEach(e=>{const t=document.createElement("button");t.type="button",t.className="tab-button",t.dataset.tabId=e.id,t.textContent=e.label;const n=()=>{B0(e.id)};t.addEventListener("pointerenter",n),t.addEventListener("focus",n),t.addEventListener("click",n),r.appendChild(t)}))}function lC(r){document.querySelectorAll(".tab-button").forEach(e=>{e.classList.toggle("is-active",e.dataset.tabId===r)})}async function B0(r){const e=sC(r);_h+=1;const t=_h;try{const n=await oC(e);if(t!==_h)return;qs.clear(),qs.position.fromArray(e.model.position||[5.2,-.4,0]),qs.add(n),Hd=n,Gd=e.id,C0=e.rotationSpeed||.16,Tn.target.copy(qs.position),Tn.update(),lC(Gd)}catch(n){console.error(`Failed to load tab model for ${e.id}:`,n)}}const cC=!!document.querySelector("#tab-buttons");cC&&(aC(),B0(K1));Wd.load(Qc("/models/logo_separate.glb"),r=>{Fo.clear(),gn=new Sn,Os=new Sn,Us=new Sn,Fo.add(gn),gn.add(Os,Us);const e=r.scene;e.updateMatrixWorld(!0);const t=e.getObjectByName("Logo_L"),n=e.getObjectByName("Logo_R");if(!t||!n){console.log("Could not find Logo_L / Logo_R. Available objects:"),e.traverse(re=>{re.name&&console.log(re.name)});return}t.removeFromParent(),n.removeFromParent(),Os.add(t),Us.add(n),gn.updateMatrixWorld(!0);const i=new Vt().setFromObject(gn),s=i.getSize(new F),o=i.getCenter(new F);gn.position.sub(o);const a=Math.max(s.x,s.y,s.z),c=(jt()?9.75:15)/a;gn.scale.setScalar(c);const u=jt()?-3:0;Fo.position.set(0,u,0),gn.updateMatrixWorld(!0);const d=new Vt().setFromObject(gn).getSize(new F),f=Math.max(d.x,d.y,d.z),_=Yt.fov*(Math.PI/180),g=f/2/Math.tan(_/2);Yt.position.set(0,u+f*.2,g*1.4/1.5),Yt.near=Math.max(.01,g/100),Yt.far=g*100,Yt.updateProjectionMatrix(),Tn.target.set(0,u,0),Tn.update();const p=Yt.position.y,v=Yt.position.z;mh=new bs({color:new $e("#ffffff"),metalness:.1,roughness:.6}),gn.traverse(re=>{if(!re.isMesh)return;re.castShadow=!1,re.receiveShadow=!1;const R=re.material;re.material=mh,R?.map&&(re.material.map=R.map),R?.normalMap&&(re.material.normalMap=R.normalMap),R?.roughnessMap&&(re.material.roughnessMap=R.roughnessMap),R?.metalnessMap&&(re.material.metalnessMap=R.metalnessMap),re.material.needsUpdate=!0});const S=vt.to(gn.rotation,{y:`+=${Math.PI*2}`,duration:12,repeat:-1,ease:"none"}),x=new Sn,b=new Sn,w=new Sn,E=[],C={value:0},y=()=>{for(const re of E)re.opacity=C.value},M=.88,P=3.6,L=5,N=.42,U=7.2,H=new F(1,1,1),k={holdLeftX:0,holdRightX:0,holdLeftY:0,holdRightY:0,cameraStartZ:v,cameraEndZ:-Math.max(f*2.6,v*1.4)};let z=!1,W=c*2.8;const Q={value:N},D=()=>{x.scale.setScalar(W*Q.value)},te=()=>{if(!z)return;const re=ag(Yt,0),R=re/Math.max(Yt.aspect,.001),T=re*2*M/Math.max(H.x,.001),B=R*2*M/Math.max(H.y,.001),j=Math.min(T,B);W=Math.max(j*P,c*L),D()};window.__refreshConvergeScale=te,Fo.add(x),x.add(b,w),x.visible=!1,A0()||Wd.load(Qc("/models/logo_split.glb"),re=>{const R=re.scene;R.updateMatrixWorld(!0);const T=R.getObjectByName("clogo_L"),B=R.getObjectByName("clogo_R");if(!T||!B){console.log("Could not find clogo_L / clogo_R. Available:"),R.traverse(ge=>{ge.name&&console.log(ge.name)});return}T.removeFromParent(),B.removeFromParent(),b.add(T),w.add(B),x.updateMatrixWorld(!0);const j=new Vt().setFromObject(x),Z=j.getSize(new F),$=j.getCenter(new F),ye=new Vt().setFromObject(b),le=new Vt().setFromObject(w),Ee=ye.getSize(new F),we=le.getSize(new F);x.position.sub($),H.copy(Z),z=!0,te();const se=ag(Yt,0),ce=Math.max((Ee.x+we.x)*.28,se*.22),Se=fs.clamp(Z.y*.05,.06,.34);if(k.holdLeftX=-ce,k.holdRightX=ce,k.holdLeftY=-Se,k.holdRightY=Se,x.traverse(ge=>{if(!ge.isMesh)return;ge.castShadow=!1,ge.receiveShadow=!1;const ae=mh.clone();ae.transparent=!0,ae.opacity=C.value,ae.needsUpdate=!0,E.push(ae),ge.material=ae}),b.position.set(k.holdLeftX,k.holdLeftY,0),w.position.set(k.holdRightX,k.holdRightY,0),x.rotation.set(0,0,0),y(),x.visible=!1,window.__pageTL){const ge=window.__pageTL.progress();window.__pageTL.progress(0),window.__pageTL.progress(ge)}},void 0,re=>console.error("Failed to load convergence logo:",re)),window.__pageTL&&(window.__pageTL.scrollTrigger?.kill(),window.__pageTL.kill(),window.__pageTL=null),Os.position.set(0,0,0),Us.position.set(0,0,0),Os.scale.set(1,1,1),Us.scale.set(1,1,1),b.position.set(k.holdLeftX,k.holdLeftY,0),w.position.set(k.holdRightX,k.holdRightY,0),x.rotation.set(0,0,0),Q.value=N,D(),C.value=0,y(),x.visible=!1,gn.visible=!0,gn.rotation.set(0,0,0),gn.scale.setScalar(c),Yt.position.set(0,p,k.cameraStartZ),gn.updateMatrixWorld(!0);const Ae=new Vt().setFromObject(Os),Ce=new Vt().setFromObject(Us),Pe=Ae.getSize(new F),ze=Ce.getSize(new F),K=Math.max((Pe.x+ze.x)*.5,d.x*.35),J=fs.clamp(K*.18,.38,1.25),de=fs.clamp(J*.2,.05,.22),Le=new F(-J,-de,0),xe=new F(J,de,0),Ve=E0(),ht=Ve?DESKTOP_STATS_IN:1,ne={heroSplitOut:jt()?.2:.35,copySwapStart:jt()?.4:.28,underOut:jt()?.95:.5,convergeIn:jt()?2:.56,convergeGlbStart:jt()?2:.63,centralizedIn:jt()?2:.63,convergeFadeIn:.06,convergeGrowStart:jt()?2:.65,modelFadeOutStart:jt()?2:.805,modelFadeOut:.03,statsIn:jt()?2:ht};window.__GENLABS_STAGE_TIMING__=ne;let Ue=!1;const Ke=document.querySelector("#grid-stage-scroll"),Fe=jt()?Ke?Ke.offsetHeight/window.innerHeight:.75:10,X=Ai?{scrollTrigger:{trigger:rg().trigger,start:"top top",end:()=>{const{stage:re,runway:R}=rg();return re?`+=${Math.max(0,re.offsetHeight-window.innerHeight)}`:R?`+=${R.offsetHeight}`:`+=${window.innerHeight*Fe}`},scrub:.8,invalidateOnRefresh:!0,onUpdate:re=>{const R=re.progress>=ne.convergeIn;R!==Ue&&(Ue=R,Ue?S.pause():S.resume())}}}:{},I=vt.timeline(X),pt=!!(document.querySelector(".converge-label-left")&&document.querySelector(".converge-label-right")),Je=!!document.querySelector(".converge-hover-card"),He=!!document.querySelector(".converge-final");if(vt.set(Dn.panelHero,{autoAlpha:1,y:0}),vt.set(Dn.panelUnder,{autoAlpha:0,y:40}),vt.set(Dn.underCopy,{autoAlpha:1}),vt.set(Dn.underHighlight,{autoAlpha:1}),jt()||(vt.set(Dn.panelConverge,{autoAlpha:0}),Ve&&vt.set(Dn.panelStats,{opacity:0,visibility:"visible"}),pt&&vt.set(".converge-label",{autoAlpha:0,y:18}),Je&&vt.set(".converge-hover-card",{autoAlpha:0,scale:.96}),He&&vt.set(".converge-final",{autoAlpha:0})),I.to(Dn.panelHero,{autoAlpha:0,y:-50,ease:"none",duration:.12},0),I.to(Dn.panelUnder,{autoAlpha:1,y:0,ease:"none",duration:.22},0),Nn.underCopy.length&&I.to(Nn.underCopy,{y:0,opacity:1,ease:"power3.out",duration:.18,stagger:.008},.08),Nn.underHighlight.length&&I.to(Nn.underHighlight,{y:0,opacity:1,ease:"power3.out",duration:.15,stagger:.012},ne.copySwapStart),da.lineBgs.length&&I.to(da.lineBgs,{scaleX:1,ease:"power2.out",duration:.14,stagger:.08},ne.copySwapStart+.06),jt()||(I.to(Dn.panelUnder,{autoAlpha:0,y:-40,ease:"none",duration:.06},ne.underOut),I.set(Dn.panelUnder,{autoAlpha:0},ne.convergeIn)),I.to(Os.position,{x:Le.x,y:Le.y,z:Le.z,ease:"none",duration:ne.heroSplitOut},0),I.to(Us.position,{x:xe.x,y:xe.y,z:xe.z,ease:"none",duration:ne.heroSplitOut},0),I.to(gn.rotation,{z:Math.PI*.25,ease:"power2.out",duration:.08},ne.underOut),jt()&&I.to(gn,{visible:!1,duration:.001},ne.underOut+.07),!jt()){I.to(Dn.panelConverge,{autoAlpha:1,ease:"none",duration:.02},ne.convergeIn),pt&&(I.to(".converge-label",{autoAlpha:0,y:18,ease:"none",duration:.001},ne.convergeIn),I.to(".converge-label-left",{autoAlpha:1,y:0,ease:"power2.out",duration:.08},ne.convergeIn),I.to(".converge-label-right",{autoAlpha:1,y:0,ease:"power2.out",duration:.08},ne.centralizedIn));const re={value:0};I.to(re,{value:1,duration:.001,ease:"none",onUpdate:()=>{const j=re.value>.5;gn.visible=!j,x.visible=j}},ne.convergeGlbStart),I.to(C,{value:1,ease:"none",duration:ne.convergeFadeIn,onUpdate:y},ne.convergeGlbStart);const R=Math.max(.001,ne.modelFadeOutStart-ne.convergeGrowStart),T=U*1.35;I.to(Q,{value:U,ease:"power3.in",duration:R,onUpdate:D},ne.convergeGrowStart);const B=Math.max(.001,ne.modelFadeOutStart-ne.centralizedIn);I.to(b.position,{x:0,y:0,ease:"power2.inOut",duration:B},ne.centralizedIn),I.to(w.position,{x:0,y:0,ease:"power2.inOut",duration:B},ne.centralizedIn),I.to(x.rotation,{z:Math.PI*.25,ease:"power2.inOut",duration:Math.max(.001,ne.modelFadeOutStart-ne.convergeGrowStart)},ne.convergeGrowStart),I.to(Yt.position,{y:0,z:k.cameraEndZ,ease:"power3.in",duration:Math.max(.001,ne.modelFadeOutStart-ne.convergeGrowStart)},ne.convergeGrowStart),I.to(Q,{value:T,ease:"none",duration:Math.max(.001,ne.modelFadeOut),onUpdate:D},ne.modelFadeOutStart),I.to({},{duration:.001,onStart:()=>{Tn.target.set(0,0,0),Tn.update(),Yt.lookAt(0,0,0)},onReverseComplete:()=>{Tn.target.set(0,0,0),Tn.update(),Yt.lookAt(0,0,0)}},ne.convergeIn),Je&&I.to(".converge-hover-card",{autoAlpha:0,scale:.96,ease:"none",duration:.03,overwrite:!0},ne.labelOut),Ve&&I.to(C,{value:0,ease:"power2.out",duration:ne.modelFadeOut,onUpdate:y},ne.modelFadeOutStart),He&&I.to(".converge-final",{autoAlpha:1,ease:"none",duration:.05},ne.finalTextIn),Nn.convergeFinal.length&&I.to(Nn.convergeFinal,{y:0,opacity:1,ease:"power3.out",duration:.08,stagger:.02},ne.finalTextIn),Ve&&(I.to(Dn.panelConverge,{autoAlpha:0,ease:"none",duration:.015},ne.statsIn),I.to(Dn.panelStats,{opacity:1,ease:"none",duration:.015,onStart:()=>{const j=window.__GENLABS_STATS_LOTTIE__;j&&typeof j.resize=="function"&&j.resize()}},ne.statsIn))}window.__pageTL=I,Ai?.refresh(),Gd&&(Tn.target.copy(qs.position),Tn.update())},void 0,r=>console.error("Failed to load GLB:",r));let $s=null,al=null;function Ui(){const r=Math.max(20,Math.floor(Dt.width/xn.cellSize)),e=Dt.width/r,t=e/xn.aspectComp,n=Math.max(20,Math.floor(Dt.height/t)),i=r,s=n;$s&&$s.dispose(),$s=new Fn(i,s,{depthBuffer:!0,stencilBuffer:!1}),al=new Uint8Array(i*s*4),Ui.w=i,Ui.h=s,Ui.cellW=e,Ui.cellH=t}Ui();function uC(r,e){return fs.clamp((r-.5)*e+.5,0,1)}function hC(r,e){return fs.clamp(Math.pow(r,e),0,1)}function dC(r,e,t){return .2126*r+.7152*e+.0722*t}function fC(){const r=Ui.w,e=Ui.h,t=xn.ramp,n=t.length;ri.fillStyle=xn.bg,ri.fillRect(0,0,Dt.width,Dt.height),ri.fillStyle=xn.fg;const i=Ui.cellH,s=Math.max(8,Math.floor(i*xn.fontScale));ri.font=`${s}px ${xn.fontFamily}`,ri.textAlign="left";const o=ri.measureText("M").width,a=Ui.cellW/o;ri.save(),ri.scale(a,1);for(let l=0;l<e;l++){let c="";for(let h=0;h<r;h++){const f=((e-1-l)*r+h)*4,_=al[f]/255,g=al[f+1]/255,m=al[f+2]/255;let p=dC(_,g,m);p=uC(p,xn.contrast),p=hC(p,xn.gamma);const v=Math.floor(p*(n-1));c+=t[v]}const u=Math.max(Ui.cellH,s*1.05);ri.fillText(c,0,l*u)}ri.restore()}window.addEventListener("resize",()=>{const r=Dt.width,e=Dt.height,t=window.innerWidth,n=window.innerHeight,i=Math.abs(t-r),s=Math.abs(n-e),o=(jt()||kA())&&i<2&&s>0&&s<220;Dt.width=window.innerWidth,Dt.height=window.innerHeight,Yt.aspect=Dt.width/Dt.height,Yt.updateProjectionMatrix(),qi.setSize(Dt.width,Dt.height),R0(),Ui(),Cl.uResolution.value.set(Dt.width,Dt.height),window.__refreshConvergeScale?.(),o||Ai?.refresh()});let lg=0;const k0=()=>{const r=QA.getElapsedTime(),e=r-lg;lg=r,Hd&&(Hd.rotation.y+=e*C0),Tn.update(),Cl.uTime.value=r,Wf?(qi.setRenderTarget($s),qi.render(xr,Yt),qi.setRenderTarget(null),qi.readRenderTargetPixels($s,0,0,$s.width,$s.height,al),fC()):(qi.setRenderTarget(null),qi.render(xr,Yt)),requestAnimationFrame(k0)};k0();
