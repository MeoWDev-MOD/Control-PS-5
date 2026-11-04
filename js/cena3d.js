var nh=0,gl=1,ih=2;var ir=1,sh=2,rs=3,ni=0,Ue=1,Ye=2,bi=0,as=1,Gn=2,_l=3,xl=4,rh=5;var Ei=100,ah=101,oh=102,lh=103,ch=104,hh=200,uh=201,dh=202,fh=203,vl=204,yl=205,ph=206,mh=207,gh=208,_h=209,xh=210,vh=211,yh=212,Mh=213,Sh=214,Jr=0,$r=1,Kr=2,Xi=3,Qr=4,jr=5,ta=6,ea=7,Pa=0,bh=1,Eh=2,Tn=0,Ml=1,Sl=2,bl=3,El=4,Tl=5,Al=6,sr=7;var wl=300,Ti=301,os=302,La=303,Da=304,na=1e3,_n=1001,ia=1002,Ie=1003,Th=1004;var rr=1005;var Xe=1006,Na=1007;var kn=1008;var Ze=1009,Rl=1010,Cl=1011,ls=1012,Ua=1013,dn=1014,rn=1015,fn=1016,Fa=1017,Oa=1018,Ai=1020,Il=35902,Pl=35899,Ll=1021,Dl=1022,pn=1023,On=1026,Hn=1027,Ba=1028,za=1029,ii=1030,Ga=1031;var ka=1033,ar=33776,or=33777,lr=33778,cr=33779,Ha=35840,Va=35841,Wa=35842,Xa=35843,qa=36196,Ya=37492,Za=37496,Ja=37488,$a=37489,hr=37490,Ka=37491,Qa=37808,ja=37809,to=37810,eo=37811,no=37812,io=37813,so=37814,ro=37815,ao=37816,oo=37817,lo=37818,co=37819,ho=37820,uo=37821,fo=36492,po=36494,mo=36495,go=36283,_o=36284,ur=36285,xo=36286;var ws=2300,sa=2301,qr=2302,il=2303,sl=2400,rl=2401,al=2402;var Ah=3200;var dr=0,wh=1,Vn="",Ge="srgb",Rs="srgb-linear",Cs="linear",ae="srgb";var Yr=7680;var Rh=519,Ch=512,Ih=513,Ph=514,Nl=515,Lh=516,Dh=517,Ul=518,Fl=519,Nh=35044;var Ol="300 es",nn=2e3,qi=2001;function Ou(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uh(){let i=Yi("canvas");return i.style.display="block",i}var Sc={},Zi=null;function Bl(...i){let t="THREE."+i.shift();Zi?Zi("log",t,...i):console.log(t,...i)}function Fh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=Fh(i);let t="THREE."+i.shift();if(Zi)Zi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function zt(...i){i=Fh(i);let t="THREE."+i.shift();if(Zi)Zi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Es(...i){let t=i.join(" ");t in Sc||(Sc[t]=!0,Bt(...i))}function Oh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Bh={[Jr]:Jr,[Kr]:ta,[Qr]:Qr,[Xi]:jr,[$r]:$r,[ta]:Kr,[ea]:ea,[jr]:Xi},xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Lo=Math.PI/180,ra=180/Math.PI;function cs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function zu(i,t){return(i%t+t)%t}function Do(i,t,e){return(1-e)*i+e*t}function zh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Gu(i,t){if(t.constructor===Float32Array)return i;let e=zl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function ku(i,t){if(t.constructor===Float32Array)return i;let e=zl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Xl=class Xl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xl.prototype.isVector2=!0;var ht=Xl,vn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],g=r[a+2],y=r[a+3];if(f!==y||c!==d||l!==u||h!==g){let m=c*d+l*u+h*g+f*y;m<0&&(d=-d,u=-u,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),T=Math.sin(b);p=Math.sin(p*b)/T,o=Math.sin(o*b)/T,c=c*p+d*o,l=l*p+u*o,h=h*p+g*o,f=f*p+y*o}else{c=c*p+d*o,l=l*p+u*o,h=h*p+g*o,f=f*p+y*o;let b=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=b,l*=b,h*=b,f*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*u-l*d,t[e+1]=c*g+h*d+l*f-o*u,t[e+2]=l*g+h*u+o*d-c*f,t[e+3]=h*g-o*f-c*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),u=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"YZX":this._x=d*h*f+l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f-d*u*g;break;case"XZY":this._x=d*h*f-l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f+d*u*g;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ql=class ql{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ql.prototype.isVector3=!0;var U=ql,No=new U,bc=new vn,Yl=class Yl{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],y=s[0],m=s[3],p=s[6],b=s[1],T=s[4],v=s[7],A=s[2],w=s[5],_=s[8];return r[0]=a*y+o*b+c*A,r[3]=a*m+o*T+c*w,r[6]=a*p+o*v+c*_,r[1]=l*y+h*b+f*A,r[4]=l*m+h*T+f*w,r[7]=l*p+h*v+f*_,r[2]=d*y+u*b+g*A,r[5]=d*m+u*T+g*w,r[8]=d*p+u*v+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,d=o*c-h*r,u=l*r-a*c,g=e*f+n*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=f*y,t[1]=(s*l-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=d*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=u*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uo.makeScale(t,e)),this}rotate(t){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uo.makeRotation(-t)),this}translate(t,e){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Yl.prototype.isMatrix3=!0;var Ht=Yl,Uo=new Ht,Ec=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hu(){let i={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?Cs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rs]:{primaries:t,whitePoint:n,transfer:Cs,toXYZ:Ec,fromXYZ:Tc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Ec,fromXYZ:Tc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),i}var ne=Hu();function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ci,aa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ci===void 0&&(Ci=Yi("canvas")),Ci.width=t.width,Ci.height=t.height;let s=Ci.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ci}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vu=0,Ji=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fo(s[a].image)):r.push(Fo(s[a]))}else r=Fo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?aa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var Wu=0,Oo=new U,He=class i extends xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_n,s=_n,r=Xe,a=kn,o=pn,c=Ze,l=i.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=cs(),this.name="",this.source=new Ji(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Oo).x}get height(){return this.source.getSize(Oo).y}get depth(){return this.source.getSize(Oo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case na:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case na:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=wl;He.DEFAULT_ANISOTROPY=1;var Zl=class Zl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,v=(u+1)/2,A=(p+1)/2,w=(h+d)/4,_=(f+y)/4,E=(g+m)/4;return T>v&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=_/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=E/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=E/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-y)/b,this.z=(d-h)/b,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zl.prototype.isVector4=!0;var ge=Zl,oa=class extends xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new He({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ji(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends oa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Is=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var la=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ia=class Ia{constructor(t,e,n,s,r,a,o,c,l,h,f,d,u,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,d,u,g,y,m)}set(t,e,n,s,r,a,o,c,l,h,f,d,u,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ia().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),a=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,u=a*f,g=o*h,y=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=u+g*l,e[5]=d-y*l,e[9]=-o*c,e[2]=y-d*l,e[6]=g+u*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,u=c*f,g=l*h,y=l*f;e[0]=d+y*o,e[4]=g*o-u,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=y+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,u=c*f,g=l*h,y=l*f;e[0]=d-y*o,e[4]=-a*f,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,u=a*f,g=o*h,y=o*f;e[0]=c*h,e[4]=g*l-u,e[8]=d*l+y,e[1]=c*f,e[5]=y*l+d,e[9]=u*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,u=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=y-d*f,e[8]=g*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*f+g,e[10]=d-y*f}else if(t.order==="XZY"){let d=a*c,u=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+y,e[5]=a*h,e[9]=u*f-g,e[2]=g*f-u,e[6]=o*h,e[10]=y*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xu,t,qu)}lookAt(t,e,n){let s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),qn.crossVectors(n,Je),qn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),qn.crossVectors(n,Je)),qn.normalize(),Mr.crossVectors(Je,qn),s[0]=qn.x,s[4]=Mr.x,s[8]=Je.x,s[1]=qn.y,s[5]=Mr.y,s[9]=Je.y,s[2]=qn.z,s[6]=Mr.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],y=n[6],m=n[10],p=n[14],b=n[3],T=n[7],v=n[11],A=n[15],w=s[0],_=s[4],E=s[8],F=s[12],C=s[1],P=s[5],B=s[9],k=s[13],R=s[2],z=s[6],Y=s[10],V=s[14],it=s[3],X=s[7],et=s[11],j=s[15];return r[0]=a*w+o*C+c*R+l*it,r[4]=a*_+o*P+c*z+l*X,r[8]=a*E+o*B+c*Y+l*et,r[12]=a*F+o*k+c*V+l*j,r[1]=h*w+f*C+d*R+u*it,r[5]=h*_+f*P+d*z+u*X,r[9]=h*E+f*B+d*Y+u*et,r[13]=h*F+f*k+d*V+u*j,r[2]=g*w+y*C+m*R+p*it,r[6]=g*_+y*P+m*z+p*X,r[10]=g*E+y*B+m*Y+p*et,r[14]=g*F+y*k+m*V+p*j,r[3]=b*w+T*C+v*R+A*it,r[7]=b*_+T*P+v*z+A*X,r[11]=b*E+T*B+v*Y+A*et,r[15]=b*F+T*k+v*V+A*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],u=t[14],g=t[3],y=t[7],m=t[11],p=t[15],b=c*u-l*d,T=o*u-l*f,v=o*d-c*f,A=a*u-l*h,w=a*d-c*h,_=a*f-o*h;return e*(y*b-m*T+p*v)-n*(g*b-m*A+p*w)+s*(g*T-y*A+p*_)-r*(g*v-y*w+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],u=t[11],g=t[12],y=t[13],m=t[14],p=t[15],b=e*o-n*a,T=e*c-s*a,v=e*l-r*a,A=n*c-s*o,w=n*l-r*o,_=s*l-r*c,E=h*y-f*g,F=h*m-d*g,C=h*p-u*g,P=f*m-d*y,B=f*p-u*y,k=d*p-u*m,R=b*k-T*B+v*P+A*C-w*F+_*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/R;return t[0]=(o*k-c*B+l*P)*z,t[1]=(s*B-n*k-r*P)*z,t[2]=(y*_-m*w+p*A)*z,t[3]=(d*w-f*_-u*A)*z,t[4]=(c*C-a*k-l*F)*z,t[5]=(e*k-s*C+r*F)*z,t[6]=(m*v-g*_-p*T)*z,t[7]=(h*_-d*v+u*T)*z,t[8]=(a*B-o*C+l*E)*z,t[9]=(n*C-e*B-r*E)*z,t[10]=(g*w-y*v+p*b)*z,t[11]=(f*v-h*w-u*b)*z,t[12]=(o*F-a*P-c*E)*z,t[13]=(e*P-n*F+s*E)*z,t[14]=(y*T-g*A-m*b)*z,t[15]=(h*A-f*T+d*b)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,d=r*l,u=r*h,g=r*f,y=a*h,m=a*f,p=o*f,b=c*l,T=c*h,v=c*f,A=n.x,w=n.y,_=n.z;return s[0]=(1-(y+p))*A,s[1]=(u+v)*A,s[2]=(g-T)*A,s[3]=0,s[4]=(u-v)*w,s[5]=(1-(d+p))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(g+T)*_,s[9]=(m-b)*_,s[10]=(1-(d+y))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ii.set(s[0],s[1],s[2]).length(),o=Ii.set(s[4],s[5],s[6]).length(),c=Ii.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ln.copy(this);let l=1/a,h=1/o,f=1/c;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=f,ln.elements[9]*=f,ln.elements[10]*=f,e.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=nn,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===nn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===qi)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=nn,c=!1){let l=this.elements,h=2/(e-t),f=2/(n-s),d=-(e+t)/(e-t),u=-(n+s)/(n-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===nn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===qi)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ia.prototype.isMatrix4=!0;var ce=Ia,Ii=new U,ln=new ce,Xu=new U(0,0,0),qu=new U(1,1,1),qn=new U,Mr=new U,Je=new U,Ac=new ce,wc=new vn,yn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ac,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wc.setFromEuler(this),this.setFromQuaternion(wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yn.DEFAULT_ORDER="XYZ";var Ps=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yu=0,Rc=new U,Pi=new vn,Pn=new ce,Sr=new U,_s=new U,Zu=new U,Ju=new vn,Cc=new U(1,0,0),Ic=new U(0,1,0),Pc=new U(0,0,1),Lc={type:"added"},$u={type:"removed"},Li={type:"childadded",child:null},Bo={type:"childremoved",child:null},Pe=class i extends xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new yn,n=new vn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Ht}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(Cc,t)}rotateY(t){return this.rotateOnAxis(Ic,t)}rotateZ(t){return this.rotateOnAxis(Pc,t)}translateOnAxis(t,e){return Rc.copy(t).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cc,t)}translateY(t){return this.translateOnAxis(Ic,t)}translateZ(t){return this.translateOnAxis(Pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(_s,Sr,this.up):Pn.lookAt(Sr,_s,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Pi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lc),Li.child=t,this.dispatchEvent(Li),Li.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($u),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lc),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Ju,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pe.DEFAULT_UP=new U(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ku={type:"move"},$i=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;l.inputState.pinching&&d>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ku)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},br={h:0,s:0,l:0};function zo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=zu(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=zo(a,r,t+1/3),this.g=zo(a,r,t),this.b=zo(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let n=Gh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ne.workingToColorSpace(ze.copy(this),t),Math.round(jt(ze.r*255,0,255))*65536+Math.round(jt(ze.g*255,0,255))*256+Math.round(jt(ze.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(ze.copy(this),e);let n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Ge){ne.workingToColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,s=ze.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(br);let n=Do(Yn.h,br.h,e),s=Do(Yn.s,br.s,e),r=Do(Yn.l,br.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Wt;Wt.NAMES=Gh;var gi=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},cn=new U,Ln=new U,Go=new U,Dn=new U,Di=new U,Ni=new U,Dc=new U,ko=new U,Ho=new U,Vo=new U,Wo=new ge,Xo=new ge,qo=new ge,Kn=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),Ln.subVectors(n,e),Go.subVectors(t,e);let a=cn.dot(cn),o=cn.dot(Ln),c=cn.dot(Go),l=Ln.dot(Ln),h=Ln.dot(Go),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(a,Dn.y),c.addScaledVector(o,Dn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Wo.setScalar(0),Xo.setScalar(0),qo.setScalar(0),Wo.fromBufferAttribute(t,e),Xo.fromBufferAttribute(t,n),qo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Wo,r.x),a.addScaledVector(Xo,r.y),a.addScaledVector(qo,r.z),a}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),Ln.subVectors(t,e),cn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),cn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Di.subVectors(s,n),Ni.subVectors(r,n),ko.subVectors(t,n);let c=Di.dot(ko),l=Ni.dot(ko);if(c<=0&&l<=0)return e.copy(n);Ho.subVectors(t,s);let h=Di.dot(Ho),f=Ni.dot(Ho);if(h>=0&&f<=h)return e.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(Di,a);Vo.subVectors(t,r);let u=Di.dot(Vo),g=Ni.dot(Vo);if(g>=0&&u<=g)return e.copy(r);let y=u*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ni,o);let m=h*g-u*f;if(m<=0&&f-h>=0&&u-g>=0)return Dc.subVectors(r,s),o=(f-h)/(f-h+(u-g)),e.copy(s).addScaledVector(Dc,o);let p=1/(m+y+d);return a=y*p,o=d*p,e.copy(n).addScaledVector(Di,a).addScaledVector(Ni,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(t.matrixWorld),this.union(Er)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),Tr.subVectors(this.max,xs),Ui.subVectors(t.a,xs),Fi.subVectors(t.b,xs),Oi.subVectors(t.c,xs),Zn.subVectors(Fi,Ui),Jn.subVectors(Oi,Fi),ui.subVectors(Ui,Oi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-ui.z,ui.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,ui.z,0,-ui.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-ui.y,ui.x,0];return!Yo(e,Ui,Fi,Oi,Tr)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,Ui,Fi,Oi,Tr))?!1:(Ar.crossVectors(Zn,Jn),e=[Ar.x,Ar.y,Ar.z],Yo(e,Ui,Fi,Oi,Tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Nn=[new U,new U,new U,new U,new U,new U,new U,new U],hn=new U,Er=new Mn,Ui=new U,Fi=new U,Oi=new U,Zn=new U,Jn=new U,ui=new U,xs=new U,Tr=new U,Ar=new U,di=new U;function Yo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){di.fromArray(i,r);let o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),c=t.dot(di),l=e.dot(di),h=n.dot(di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var be=new U,wr=new ht,Qu=0,ke=class extends xn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nh,this.updateRanges=[],this.gpuType=rn,this.version=0,this._normalizationScale=t!==void 0?zl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Gu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ku(t,this.array)}};var Ls=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ds=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},ju=new Mn,vs=new U,Zo=new U,Bn=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ju.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);let e=vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(Zo)),this.expandByPoint(vs.copy(t.center).sub(Zo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},td=0,en=new ce,Jo=new Pe,Bi=new U,$e=new Mn,ys=new Mn,Ce=new U,Le=class i extends xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ou(t)?Ds:Ls)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Jo.lookAt(t),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors($e.min,ys.min),$e.expandByPoint(Ce),Ce.addVectors($e.max,ys.max),$e.expandByPoint(Ce)):($e.expandByPoint(ys.min),$e.expandByPoint(ys.max))}$e.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ce.fromBufferAttribute(o,l),c&&(Bi.fromBufferAttribute(t,l),Ce.add(Bi)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new U,c[F]=new U;let h=new U,f=new U,d=new U,u=new ht,g=new ht,y=new ht,m=new U,p=new U;function b(F,C,P){l[F]=l[C]=l[P]=1,h.fromBufferAttribute(n,F),f.fromBufferAttribute(n,C),d.fromBufferAttribute(n,P),u.fromBufferAttribute(r,F),g.fromBufferAttribute(r,C),y.fromBufferAttribute(r,P),f.sub(h),d.sub(h),g.sub(u),y.sub(u);let B=1/(g.x*y.y-y.x*g.y);isFinite(B)&&(m.copy(f).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(B),p.copy(d).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(B),o[F].add(m),o[C].add(m),o[P].add(m),c[F].add(p),c[C].add(p),c[P].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let F=0,C=T.length;F<C;++F){let P=T[F],B=P.start,k=P.count;for(let R=B,z=B+k;R<z;R+=3)b(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let v=new U,A=new U,w=new U,_=new U;function E(F){w.fromBufferAttribute(s,F),_.copy(w);let C=o[F];v.copy(C),v.sub(w.multiplyScalar(w.dot(C))).normalize(),A.crossVectors(_,C);let B=A.dot(c[F])<0?-1:1;a.setXYZW(F,v.x,v.y,v.z,B)}for(let F=0,C=n.count;F<C;++F)l[F]&&E(F);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,f=new U;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h),u=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?u=c[y]*o.data.stride+o.offset:u=c[y]*h;for(let p=0;p<h;p++)d[g++]=l[u++]}return new ke(d,h,f)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let d=l[h],u=t(d,n);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let u=l[f];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $o=new U,ed=new U,nd=new Ht,un=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=$o.subVectors(n,e).cross(ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta($o),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||nd.getNormalMatrix(t),s=this.coplanarPoint($o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},id=0,Sn=class extends xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=as,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=yl,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new un().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ht().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Un=new U,Ko=new U,Rr=new U,Cr=new U,Ns=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ko.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),Cr.copy(this.origin).sub(Ko);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Rr),o=Cr.dot(this.direction),c=-Cr.dot(Rr),l=Cr.lengthSq(),h=Math.abs(1-a*a),f,d,u,g;if(h>0)if(f=a*c-o,d=a*o-c,g=r*h,f>=0)if(d>=-g)if(d<=g){let y=1/h;f*=y,d*=y,u=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ko).addScaledVector(Rr,d),u}intersectSphere(t,e){if(t.radius<0)return null;Un.subVectors(t.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,d=t.y-a.y,u=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=n.x-a.x,b=n.y-a.y,T=n.z-a.z,v=Math.abs(c),A=Math.abs(l),w=Math.abs(h),_,E,F,C,P,B,k,R,z,Y,V,it;if(v>=A&&v>=w?(F=c,B=f,z=g,it=p,c>=0?(_=l,E=h,C=d,P=u,k=y,R=m,Y=b,V=T):(_=h,E=l,C=u,P=d,k=m,R=y,Y=T,V=b)):A>=w?(F=l,B=d,z=y,it=b,l>=0?(_=h,E=c,C=u,P=f,k=m,R=g,Y=T,V=p):(_=c,E=h,C=f,P=u,k=g,R=m,Y=p,V=T)):(F=h,B=u,z=m,it=T,h>=0?(_=c,E=l,C=f,P=d,k=g,R=y,Y=p,V=b):(_=l,E=c,C=d,P=f,k=y,R=g,Y=b,V=p)),F===0)return null;let X=_/F,et=E/F,j=1/F,bt=C-X*B,At=P-et*B,Z=k-X*z,xt=R-et*z,Tt=Y-X*it,Nt=V-et*it,vt=Tt*xt-Nt*Z,Ut=bt*Nt-At*Tt,ue=Z*At-xt*bt;if(s){if(vt<0||Ut<0||ue<0)return null}else if((vt<0||Ut<0||ue<0)&&(vt>0||Ut>0||ue>0))return null;let Ot=vt+Ut+ue;if(Ot===0)return null;let qt=j*(vt*B+Ut*z+ue*it);return(Ot>0?qt<0:qt>0)?null:this.at(qt/Ot,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qe=class extends Sn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Nc=new ce,fi=new Ns,Ir=new Bn,Uc=new U,Pr=new U,Lr=new U,Dr=new U,Qo=new U,Nr=new U,Fc=new U,Ur=new U,Gt=class extends Pe{constructor(t=new Le,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Nr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(Qo.fromBufferAttribute(f,t),a?Nr.addScaledVector(Qo,h):Nr.addScaledVector(Qo.sub(e),h))}e.add(Nr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(Ir.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Ir,Uc)===null||fi.origin.distanceToSquared(Uc)>(t.far-t.near)**2))&&(Nc.copy(r).invert(),fi.copy(t.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,u.start),T=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let v=b,A=T;v<A;v+=3){let w=o.getX(v),_=o.getX(v+1),E=o.getX(v+2);s=Fr(this,p,t,n,l,h,f,w,_,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let m=g,p=y;m<p;m+=3){let b=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);s=Fr(this,a,t,n,l,h,f,b,T,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,u.start),T=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let v=b,A=T;v<A;v+=3){let w=v,_=v+1,E=v+2;s=Fr(this,p,t,n,l,h,f,w,_,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(c.count,u.start+u.count);for(let m=g,p=y;m<p;m+=3){let b=m,T=m+1,v=m+2;s=Fr(this,a,t,n,l,h,f,b,T,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function sd(i,t,e,n,s,r,a,o){let c;if(t.side===Ue?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ni,o),c===null)return null;Ur.copy(o),Ur.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ur);return l<e.near||l>e.far?null:{distance:l,point:Ur.clone(),object:i}}function Fr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Pr),i.getVertexPosition(c,Lr),i.getVertexPosition(l,Dr);let h=sd(i,t,e,n,Pr,Lr,Dr,Fc);if(h){let f=new U;Kn.getBarycoord(Fc,Pr,Lr,Dr,f),s&&(h.uv=Kn.getInterpolatedAttribute(s,o,c,l,f,new ht)),r&&(h.uv1=Kn.getInterpolatedAttribute(r,o,c,l,f,new ht)),a&&(h.normal=Kn.getInterpolatedAttribute(a,o,c,l,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new U,materialIndex:0};Kn.getNormal(Pr,Lr,Dr,d.normal),h.face=d,h.barycoord=f}return h}var _i=class extends He{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ie,h=Ie,f,d){super(null,a,o,c,l,h,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ki=class extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},zi=new ce,Oc=new ce,Or=[],Bc=new Mn,rd=new ce,Ms=new Gt,Ss=new Bn,Us=class extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ki(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),Bc.copy(t.boundingBox).applyMatrix4(zi),this.boundingBox.union(Bc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),Ss.copy(t.boundingSphere).applyMatrix4(zi),this.boundingSphere.union(Ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),t.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zi),Oc.multiplyMatrices(n,zi),Ms.matrixWorld=Oc,Ms.raycast(t,Or);for(let a=0,o=Or.length;a<o;a++){let c=Or[a];c.instanceId=r,c.object=this,e.push(c)}Or.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ki(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _i(new Float32Array(s*this.count),s,this.count,Ba,rn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},pi=new Bn,ad=new ht(.5,.5),Br=new U,Qn=class{constructor(t=new un,e=new un,n=new un,s=new un,r=new un,a=new un){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=nn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],u=r[7],g=r[8],y=r[9],m=r[10],p=r[11],b=r[12],T=r[13],v=r[14],A=r[15];if(s[0].setComponents(l-a,u-h,p-g,A-b).normalize(),s[1].setComponents(l+a,u+h,p+g,A+b).normalize(),s[2].setComponents(l+o,u+f,p+y,A+T).normalize(),s[3].setComponents(l-o,u-f,p-y,A-T).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,u-d,p-m,A-v).normalize();else if(s[4].setComponents(l-c,u-d,p-m,A-v).normalize(),e===nn)s[5].setComponents(l+c,u+d,p+m,A+v).normalize();else if(e===qi)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){pi.center.set(0,0,0);let e=ad.distanceTo(t.center);return pi.radius=.7071067811865476+e,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Br.x=s.normal.x>0?t.max.x:t.min.x,Br.y=s.normal.y>0?t.max.y:t.min.y,Br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zc=new ce,ca=class i{constructor(){this.coordinateSystem=nn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];zc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Qn),n[s].setFromProjectionMatrix(zc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Qn),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Qi=class extends Sn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gc=new ce,ol=new Ns,zr=new Bn,Gr=new U,Fs=class extends Pe{constructor(t=new Le,e=new Qi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),zr.radius+=r,t.ray.intersectsSphere(zr)===!1)return;Gc.copy(s).invert(),ol.copy(t.ray).applyMatrix4(Gc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let g=d,y=u;g<y;g++){let m=l.getX(g);Gr.fromBufferAttribute(f,m),kc(Gr,m,c,s,t,e,this)}}else{let d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let g=d,y=u;g<y;g++)Gr.fromBufferAttribute(f,g),kc(Gr,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function kc(i,t,e,n,s,r,a){let o=ol.distanceSqToPoint(i);if(o<e){let c=new U;ol.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Os=class extends He{constructor(t=[],e=Ti,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Bs=class extends He{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zn=class extends He{constructor(t,e,n=dn,s,r,a,o=Ie,c=Ie,l,h=On,f=1){if(h!==On&&h!==Hn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ji(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},zs=class extends zn{constructor(t,e=dn,n=Ti,s,r,a=Ie,o=Ie,c,l=On){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Gs=class extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},bn=class i extends Le{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(f,2));function g(y,m,p,b,T,v,A,w,_,E,F){let C=v/_,P=A/E,B=v/2,k=A/2,R=w/2,z=_+1,Y=E+1,V=0,it=0,X=new U;for(let et=0;et<Y;et++){let j=et*P-k;for(let bt=0;bt<z;bt++){let At=bt*C-B;X[y]=At*b,X[m]=j*T,X[p]=R,l.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[p]=w>0?1:-1,h.push(X.x,X.y,X.z),f.push(bt/_),f.push(1-et/E),V+=1}}for(let et=0;et<E;et++)for(let j=0;j<_;j++){let bt=d+j+z*et,At=d+j+z*(et+1),Z=d+(j+1)+z*(et+1),xt=d+(j+1)+z*et;c.push(bt,At,xt),c.push(At,Z,xt),it+=6}o.addGroup(u,it,F),u+=it,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ji=class i extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new U,h=new ht;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*s;l.x=t*Math.cos(u),l.y=t*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var je=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ht:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],a=[],o=new U,c=new ce;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(jt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,g))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(jt(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],u*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},ts=class extends je{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ht){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*f+this.aX,l=d*f+u*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ha=class extends ts{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+f)+(c-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Hc=new U,Vc=new U,jo=new Gl,tl=new Gl,el=new Gl,ua=class extends je{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Vc.subVectors(s[0],s[1]).add(s[0]),l=Vc);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Hc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Hc),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),u),y=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),jo.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,g,y,m),tl.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,g,y,m),el.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(jo.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),tl.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),el.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return n.set(jo.calc(c),tl.calc(c),el.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Wc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function od(i,t){let e=1-i;return e*e*t}function ld(i,t){return 2*(1-i)*i*t}function cd(i,t){return i*i*t}function Ts(i,t,e,n){return od(i,t)+ld(i,e)+cd(i,n)}function hd(i,t){let e=1-i;return e*e*e*t}function ud(i,t){let e=1-i;return 3*e*e*i*t}function dd(i,t){return 3*(1-i)*i*i*t}function fd(i,t){return i*i*i*t}function As(i,t,e,n,s){return hd(i,t)+ud(i,e)+dd(i,n)+fd(i,s)}var ks=class extends je{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(As(t,s.x,r.x,a.x,o.x),As(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},da=class extends je{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(As(t,s.x,r.x,a.x,o.x),As(t,s.y,r.y,a.y,o.y),As(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hs=class extends je{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fa=class extends je{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vs=class extends je{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ts(t,s.x,r.x,a.x),Ts(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends je{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ts(t,s.x,r.x,a.x),Ts(t,s.y,r.y,a.y),Ts(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ws=class extends je{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Wc(o,c.x,l.x,h.x,f.x),Wc(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},ll=Object.freeze({__proto__:null,ArcCurve:ha,CatmullRomCurve3:ua,CubicBezierCurve:ks,CubicBezierCurve3:da,EllipseCurve:ts,LineCurve:Hs,LineCurve3:fa,QuadraticBezierCurve:Vs,QuadraticBezierCurve3:pa,SplineCurve:Ws}),ma=class extends je{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ll[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ll[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Xs=class extends ma{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Hs(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Vs(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ks(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ws(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new ts(t,e,n,s,r,a,o,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},xi=class extends Xs{constructor(t){super(t),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Xs().fromJSON(s))}return this}};function pd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=kh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=vd(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let h=o,f=c;for(let d=e;d<s;d+=e){let u=i[d],g=i[d+1];u<o&&(o=u),g<c&&(c=g),u>h&&(h=u),g>f&&(f=g)}l=Math.max(h-o,f-c),l=l!==0?32767/l:0}return qs(r,a,e,o,c,l,0),a}function kh(i,t,e,n,s){let r;if(s===Id(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Xc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Xc(a/n|0,i[a],i[a+1],r);return r&&es(r,r.next)&&(Zs(r),r=r.next),r}function vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(es(e,e.next)||xe(e.prev,e,e.next)===0)){if(Zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ed(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?gd(i,n,s,r):md(i)){t.push(c.i,i.i,l.i),Zs(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=_d(vi(i),t),qs(i,t,e,n,s,r,2)):a===2&&xd(i,t,e,n,s,r):qs(vi(i),t,e,n,s,r,1);break}}}function md(i){let t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),f=Math.min(o,c,l),d=Math.max(s,r,a),u=Math.max(o,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&bs(s,o,r,c,a,l,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gd(i,t,e,n){let s=i.prev,r=i,a=i.next;if(xe(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,f=r.y,d=a.y,u=Math.min(o,c,l),g=Math.min(h,f,d),y=Math.max(o,c,l),m=Math.max(h,f,d),p=cl(u,g,t,e,n),b=cl(y,m,t,e,n),T=i.prevZ,v=i.nextZ;for(;T&&T.z>=p&&v&&v.z<=b;){if(T.x>=u&&T.x<=y&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&bs(o,h,c,f,l,d,T.x,T.y)&&xe(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=u&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&bs(o,h,c,f,l,d,v.x,v.y)&&xe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=p;){if(T.x>=u&&T.x<=y&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&bs(o,h,c,f,l,d,T.x,T.y)&&xe(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=b;){if(v.x>=u&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&bs(o,h,c,f,l,d,v.x,v.y)&&xe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function _d(i,t){let e=i;do{let n=e.prev,s=e.next.next;!es(n,s)&&Vh(n,e,e.next,s)&&Ys(n,s)&&Ys(s,n)&&(t.push(n.i,e.i,s.i),Zs(e),Zs(e.next),e=i=s),e=e.next}while(e!==i);return vi(e)}function xd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&wd(a,o)){let c=Wh(a,o);a=vi(a,a.next),c=vi(c,c.next),qs(a,t,e,n,s,r,0),qs(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function vd(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=kh(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Ad(l))}s.sort(yd);for(let r=0;r<s.length;r++)e=Md(s[r],e);return e}function yd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Md(i,t){let e=Sd(i,t);if(!e)return t;let n=Wh(e,i);return vi(n,n.next),vi(e,e.next)}function Sd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(es(i,e))return e;do{if(es(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Hh(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Ys(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&bd(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function bd(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function Ed(i,t,e,n){let s=i;do s.z===0&&(s.z=cl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Td(s)}function Td(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function cl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ad(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Hh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function bs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Hh(i,t,e,n,s,r,a,o)}function wd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Rd(i,t)&&(Ys(i,t)&&Ys(t,i)&&Cd(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||es(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function es(i,t){return i.x===t.x&&i.y===t.y}function Vh(i,t,e,n){let s=Hr(xe(i,t,e)),r=Hr(xe(i,t,n)),a=Hr(xe(e,n,i)),o=Hr(xe(e,n,t));return!!(s!==r&&a!==o||s===0&&kr(i,e,t)||r===0&&kr(i,n,t)||a===0&&kr(e,i,n)||o===0&&kr(e,t,n))}function kr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Hr(i){return i>0?1:i<0?-1:0}function Rd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ys(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function Cd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Wh(i,t){let e=hl(i.i,i.x,i.y),n=hl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Xc(i,t,e,n){let s=hl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Id(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ul=class{static triangulate(t,e,n=2){return pd(t,e,n)}},mi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];qc(t),Yc(n,t);let a=t.length;e.forEach(qc);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Yc(n,e[c]);let o=ul.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function qc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Yc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var yi=class i extends Le{constructor(t=new xi([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new he(s,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Pd,T,v=!1,A,w,_,E;if(p){T=p.getSpacedPoints(h),v=!0,d=!1;let nt=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(h,nt),w=new U,_=new U,E=new U}d||(m=0,u=0,g=0,y=0);let F=o.extractPoints(l),C=F.shape,P=F.holes;if(!mi.isClockWise(C)){C=C.reverse();for(let nt=0,ut=P.length;nt<ut;nt++){let lt=P[nt];mi.isClockWise(lt)&&(P[nt]=lt.reverse())}}function k(nt){let lt=10000000000000001e-36,Et=nt[0];for(let gt=1;gt<=nt.length;gt++){let kt=gt%nt.length,It=nt[kt],Zt=It.x-Et.x,Qt=It.y-Et.y,ie=Zt*Zt+Qt*Qt,N=Math.max(Math.abs(It.x),Math.abs(It.y),Math.abs(Et.x),Math.abs(Et.y)),ve=lt*N*N;if(ie<=ve){nt.splice(kt,1),gt--;continue}Et=It}}k(C),P.forEach(k);let R=P.length,z=C;for(let nt=0;nt<R;nt++){let ut=P[nt];C=C.concat(ut)}function Y(nt,ut,lt){return ut||zt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ut,lt)}let V=C.length;function it(nt,ut,lt){let Et,gt,kt,It=nt.x-ut.x,Zt=nt.y-ut.y,Qt=lt.x-nt.x,ie=lt.y-nt.y,N=It*It+Zt*Zt,ve=It*ie-Zt*Qt;if(Math.abs(ve)>Number.EPSILON){let Xt=Math.sqrt(N),oe=Math.sqrt(Qt*Qt+ie*ie),dt=ut.x-Zt/Xt,me=ut.y+It/Xt,Lt=lt.x-ie/oe,O=lt.y+Qt/oe,M=((Lt-dt)*ie-(O-me)*Qt)/(It*ie-Zt*Qt);Et=dt+It*M-nt.x,gt=me+Zt*M-nt.y;let x=Et*Et+gt*gt;if(x<=2)return new ht(Et,gt);kt=Math.sqrt(x/2)}else{let Xt=!1;It>Number.EPSILON?Qt>Number.EPSILON&&(Xt=!0):It<-Number.EPSILON?Qt<-Number.EPSILON&&(Xt=!0):Math.sign(Zt)===Math.sign(ie)&&(Xt=!0),Xt?(Et=-Zt,gt=It,kt=Math.sqrt(N)):(Et=It,gt=Zt,kt=Math.sqrt(N/2))}return new ht(Et/kt,gt/kt)}let X=[];for(let nt=0,ut=z.length,lt=ut-1,Et=nt+1;nt<ut;nt++,lt++,Et++)lt===ut&&(lt=0),Et===ut&&(Et=0),X[nt]=it(z[nt],z[lt],z[Et]);let et=[],j,bt=X.concat();for(let nt=0,ut=R;nt<ut;nt++){let lt=P[nt];j=[];for(let Et=0,gt=lt.length,kt=gt-1,It=Et+1;Et<gt;Et++,kt++,It++)kt===gt&&(kt=0),It===gt&&(It=0),j[Et]=it(lt[Et],lt[kt],lt[It]);et.push(j),bt=bt.concat(j)}let At;if(m===0)At=mi.triangulateShape(z,P);else{let nt=[],ut=[];for(let lt=0;lt<m;lt++){let Et=lt/m,gt=u*Math.cos(Et*Math.PI/2),kt=g*Math.sin(Et*Math.PI/2)+y;for(let It=0,Zt=z.length;It<Zt;It++){let Qt=Y(z[It],X[It],kt);Ut(Qt.x,Qt.y,-gt),Et===0&&nt.push(Qt)}for(let It=0,Zt=R;It<Zt;It++){let Qt=P[It];j=et[It];let ie=[];for(let N=0,ve=Qt.length;N<ve;N++){let Xt=Y(Qt[N],j[N],kt);Ut(Xt.x,Xt.y,-gt),Et===0&&ie.push(Xt)}Et===0&&ut.push(ie)}}At=mi.triangulateShape(nt,ut)}let Z=At.length,xt=g+y;for(let nt=0;nt<V;nt++){let ut=d?Y(C[nt],bt[nt],xt):C[nt];v?(_.copy(A.normals[0]).multiplyScalar(ut.x),w.copy(A.binormals[0]).multiplyScalar(ut.y),E.copy(T[0]).add(_).add(w),Ut(E.x,E.y,E.z)):Ut(ut.x,ut.y,0)}for(let nt=1;nt<=h;nt++)for(let ut=0;ut<V;ut++){let lt=d?Y(C[ut],bt[ut],xt):C[ut];v?(_.copy(A.normals[nt]).multiplyScalar(lt.x),w.copy(A.binormals[nt]).multiplyScalar(lt.y),E.copy(T[nt]).add(_).add(w),Ut(E.x,E.y,E.z)):Ut(lt.x,lt.y,f/h*nt)}for(let nt=m-1;nt>=0;nt--){let ut=nt/m,lt=u*Math.cos(ut*Math.PI/2),Et=g*Math.sin(ut*Math.PI/2)+y;for(let gt=0,kt=z.length;gt<kt;gt++){let It=Y(z[gt],X[gt],Et);Ut(It.x,It.y,f+lt)}for(let gt=0,kt=P.length;gt<kt;gt++){let It=P[gt];j=et[gt];for(let Zt=0,Qt=It.length;Zt<Qt;Zt++){let ie=Y(It[Zt],j[Zt],Et);v?Ut(ie.x,ie.y+T[h-1].y,T[h-1].x+lt):Ut(ie.x,ie.y,f+lt)}}}Tt(),Nt();function Tt(){let nt=s.length/3;if(d){let ut=0,lt=V*ut;for(let Et=0;Et<Z;Et++){let gt=At[Et];ue(gt[2]+lt,gt[1]+lt,gt[0]+lt)}ut=h+m*2,lt=V*ut;for(let Et=0;Et<Z;Et++){let gt=At[Et];ue(gt[0]+lt,gt[1]+lt,gt[2]+lt)}}else{for(let ut=0;ut<Z;ut++){let lt=At[ut];ue(lt[2],lt[1],lt[0])}for(let ut=0;ut<Z;ut++){let lt=At[ut];ue(lt[0]+V*h,lt[1]+V*h,lt[2]+V*h)}}n.addGroup(nt,s.length/3-nt,0)}function Nt(){let nt=s.length/3,ut=0;vt(z,ut),ut+=z.length;for(let lt=0,Et=P.length;lt<Et;lt++){let gt=P[lt];vt(gt,ut),ut+=gt.length}n.addGroup(nt,s.length/3-nt,1)}function vt(nt,ut){let lt=nt.length;for(;--lt>=0;){let Et=lt,gt=lt-1;gt<0&&(gt=nt.length-1);for(let kt=0,It=h+m*2;kt<It;kt++){let Zt=V*kt,Qt=V*(kt+1),ie=ut+Et+Zt,N=ut+gt+Zt,ve=ut+gt+Qt,Xt=ut+Et+Qt;Ot(ie,N,ve,Xt)}}}function Ut(nt,ut,lt){c.push(nt),c.push(ut),c.push(lt)}function ue(nt,ut,lt){qt(nt),qt(ut),qt(lt);let Et=s.length/3,gt=b.generateTopUV(n,s,Et-3,Et-2,Et-1);Kt(gt[0]),Kt(gt[1]),Kt(gt[2])}function Ot(nt,ut,lt,Et){qt(nt),qt(ut),qt(Et),qt(ut),qt(lt),qt(Et);let gt=s.length/3,kt=b.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);Kt(kt[0]),Kt(kt[1]),Kt(kt[3]),Kt(kt[1]),Kt(kt[2]),Kt(kt[3])}function qt(nt){s.push(c[nt*3+0]),s.push(c[nt*3+1]),s.push(c[nt*3+2])}function Kt(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ld(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ll[s.type]().fromJSON(s)),new i(n,t.options)}},Pd={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ht(r,a),new ht(o,c),new ht(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[s*3],u=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ht(a,1-c),new ht(l,1-f),new ht(d,1-g),new ht(y,1-p)]:[new ht(o,1-c),new ht(h,1-f),new ht(u,1-g),new ht(m,1-p)]}};function Ld(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Mi=class i extends Le{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=jt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/e,f=new U,d=new ht,u=new U,g=new U,y=new U,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,u.x=p*1,u.y=-m,u.z=p*0,y.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case t.length-1:y.normalize(),c.push(y.x,y.y,y.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=y.x,u.y+=y.y,u.z+=y.z,u.normalize(),c.push(u.x,u.y,u.z),y.copy(g)}for(let b=0;b<=e;b++){let T=n+b*h*s,v=Math.sin(T),A=Math.cos(T);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*v,f.y=t[w].y,f.z=t[w].x*A,a.push(f.x,f.y,f.z),d.x=b/e,d.y=w/(t.length-1),o.push(d.x,d.y);let _=c[3*w+0]*v,E=c[3*w+1],F=c[3*w+0]*A;l.push(_,E,F)}}for(let b=0;b<e;b++)for(let T=0;T<t.length-1;T++){let v=T+b*t.length,A=v,w=v+t.length,_=v+t.length+1,E=v+1;r.push(A,w,E),r.push(_,E,w)}this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("uv",new he(o,2)),this.setAttribute("normal",new he(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var sn=class i extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,d=e/c,u=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let b=p*d-a;for(let T=0;T<l;T++){let v=T*f-r;g.push(v,-b,0),y.push(0,0,1),m.push(T/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let T=b+l*p,v=b+l*(p+1),A=b+1+l*(p+1),w=b+1+l*p;u.push(T,v,w),u.push(v,A,w)}this.setIndex(u),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(y,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Si=class i extends Le{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],f=t,d=(e-t)/s,u=new U,g=new ht;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;u.x=f*Math.cos(p),u.y=f*Math.sin(p),c.push(u.x,u.y,u.z),l.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,h.push(g.x,g.y)}f+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let b=p+m,T=b,v=b+n+1,A=b+n+2,w=b+1;o.push(T,v,w),o.push(v,A,w)}}this.setIndex(o),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Zc(s))s.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Zc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=wi(i[e]);for(let s in n)t[s]=n[s]}return t}function Zc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Dd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Xh={clone:wi,merge:Ve},Nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends Sn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nd,this.fragmentShader=Ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=Dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Wt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ht().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ce().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ga=class extends En{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ye=class extends Sn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Js=class extends Sn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dr,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Pa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_a=class extends Sn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xa=class extends Sn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Gi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Vr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var jn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},va=class extends jn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sl,endingEnd:sl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case rl:r=t,o=2*e-n;break;case al:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rl:a=t,c=2*n-e;break;case al:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,b=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,T=(-1-u)*m+(1.5+u)*y+.5*g,v=u*m-u*y;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+b*a[l+A]+T*a[c+A]+v*a[f+A];return r}},ya=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*f+a[c+d]*h;return r}},Ma=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sa=class extends jn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*y+a[c+m]*g;return r}let d=o*2,u=t-1;for(let g=0;g!==o;++g){let y=a[l+g],m=a[c+g],p=u*d+g*2,b=f[p],T=f[p+1],v=t*d+g*2,A=h[v],w=h[v+1],_=Od(n,e,b,A,s);r[g]=qh(_,y,T,w,m)}return r}};function qh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Fd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Od(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=qh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Fd(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gi(e,this.TimeBufferType),this.values=Gi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Gi(t.times,Array),values:Gi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Vr(t.settings)&&(n.settings={inTangents:Gi(t.settings.inTangents,Array),outTangents:Gi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Sa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ws:e=this.InterpolantFactoryMethodDiscrete;break;case sa:e=this.InterpolantFactoryMethodLinear;break;case qr:e=this.InterpolantFactoryMethodSmooth;break;case il:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return sa;case this.InterpolantFactoryMethodSmooth:return qr;case this.InterpolantFactoryMethodBezier:return il}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Vr(this.settings)&&(Jc(this.settings.inTangents,t),Jc(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Vr(this.settings)&&($c(this.settings.inTangents,t),$c(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){zt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){zt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Bu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){zt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let y=e[f+g];if(y!==e[d+g]||y!==e[u+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Vr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Jc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function $c(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=sa;var ti=class extends tn{constructor(t,e,n){super(t,e,n)}};ti.prototype.ValueTypeName="bool";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=ws;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};ba.prototype.ValueTypeName="color";var Ea=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};Ea.prototype.ValueTypeName="number";var Ta=class extends jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)vn.slerpFlat(r,0,a,l-o,a,l,c);return r}},$s=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ta(this.times,this.values,this.getValueSize(),t)}};$s.prototype.ValueTypeName="quaternion";$s.prototype.InterpolantFactoryMethodSmooth=void 0;var ei=class extends tn{constructor(t,e,n){super(t,e,n)}};ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=ws;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};Aa.prototype.ValueTypeName="vector";var Zr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Kc(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Kc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Kc(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var wa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let u=l[f],g=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yh=new wa,ns=class{constructor(t){this.manager=t!==void 0?t:Yh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ns.DEFAULT_MATERIAL_NAME="__DEFAULT";var ki=new WeakMap,Ra=class extends ns{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Zr.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=ki.get(a);f===void 0&&(f=[],ki.set(a,f)),f.push({onLoad:e,onError:s})}return a}let o=Yi("img");function c(){h(),e&&e(this);let f=ki.get(this)||[];for(let d=0;d<f.length;d++){let u=f[d];u.onLoad&&u.onLoad(this)}ki.delete(this),r.manager.itemEnd(t)}function l(f){h(),s&&s(f),Zr.remove(`image:${t}`);let d=ki.get(this)||[];for(let u=0;u<d.length;u++){let g=d[u];g.onError&&g.onError(f)}ki.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zr.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var Ks=class extends ns{constructor(t){super(t)}load(t,e,n,s){let r=new He,a=new Ra(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Qs=class extends Pe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var nl=new ce,Qc=new U,jc=new U,js=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Ze,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qn,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Qc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qc),jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(nl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===qi||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Wr=new U,Xr=new vn,gn=new U,tr=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wr,Xr,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Wr,Xr,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$n=new U,th=new ht,eh=new ht,Ne=class extends tr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,th,eh),e.subVectors(eh,th)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var dl=class extends js{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0}},er=class extends Qs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},nr=class extends tr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fl=class extends js{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},is=class extends Qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new fl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Hi=-90,Vi=1,ss=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(Hi,Vi,t,e);s.layers=this.layers,this.add(s);let r=new Ne(Hi,Vi,t,e);r.layers=this.layers,this.add(r);let a=new Ne(Hi,Vi,t,e);a.layers=this.layers,this.add(a);let o=new Ne(Hi,Vi,t,e);o.layers=this.layers,this.add(o);let c=new Ne(Hi,Vi,t,e);c.layers=this.layers,this.add(c);let l=new Ne(Hi,Vi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ca=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Hl="\\[\\]\\.:\\/",Bd=new RegExp("["+Hl+"]","g"),Vl="[^"+Hl+"]",zd="[^"+Hl.replace("\\.","")+"]",Gd=/((?:WC+[\/:])*)/.source.replace("WC",Vl),kd=/(WCOD+)?/.source.replace("WCOD",zd),Hd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vl),Vd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vl),Wd=new RegExp("^"+Gd+kd+Hd+Vd+"$"),Xd=["material","materials","bones","map"],pl=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bd,"")}static parseTrackName(t){let e=Wd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=pl;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kg=new Float32Array(1);var Jl=class Jl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Jl.prototype.isMatrix2=!0;var ml=Jl;function Wl(i,t,e,n){let s=qd(n);switch(e){case Ll:return i*t;case Ba:return i*t/s.components*s.byteLength;case za:return i*t/s.components*s.byteLength;case ii:return i*t*2/s.components*s.byteLength;case Ga:return i*t*2/s.components*s.byteLength;case Dl:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case ka:return i*t*4/s.components*s.byteLength;case ar:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Ha:case Wa:return Math.max(i,8)*Math.max(t,8)/2;case qa:case Ya:case Ja:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Za:case hr:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fo:case po:case mo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case go:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ur:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qd(i){switch(i){case Ze:case Rl:return{byteLength:1,components:1};case ls:case Cl:case fn:return{byteLength:2,components:1};case Fa:case Oa:return{byteLength:2,components:4};case dn:case Ua:case rn:return{byteLength:4,components:1};case Il:case Pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function mu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tf(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],y=f[u];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,f[d]=y)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let y=f[u];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nf=`#ifdef USE_ALPHAHASH
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
#endif`,sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lf=`#ifdef USE_AOMAP
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
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mf=`#ifdef USE_IRIDESCENCE
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
#endif`,gf=`#ifdef USE_BUMPMAP
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
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Af=`vec3 transformedNormal = objectNormal;
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
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,If=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
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
}`,Vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qf=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Yf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,jf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,tp=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,np=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ip=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,up=`#if defined( USE_POINTS_UV )
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
#endif`,dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
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
#endif`,Tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wp=`#ifdef USE_SKINNING
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
#endif`,Xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`#include <common>
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
}`,lm=`#if DEPTH_PACKING == 3200
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
}`,cm=`#define DISTANCE
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
}`,hm=`#define DISTANCE
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
void main() {
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`uniform float scale;
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
}`,pm=`uniform vec3 diffuse;
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
}`,mm=`#include <common>
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
}`,gm=`uniform vec3 diffuse;
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
}`,_m=`#define LAMBERT
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
}`,xm=`#define LAMBERT
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
#include <envmap_physical_pars_fragment>
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
}`,vm=`#define MATCAP
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
}`,ym=`#define MATCAP
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
}`,Mm=`#define NORMAL
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
}`,Sm=`#define NORMAL
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
}`,bm=`#define PHONG
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
}`,Em=`#define PHONG
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
#include <envmap_physical_pars_fragment>
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
}`,Tm=`#define STANDARD
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
}`,Am=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,wm=`#define TOON
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
}`,Rm=`#define TOON
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
}`,Cm=`uniform float size;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Lm=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,Dm=`uniform float rotation;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:ef,alphahash_pars_fragment:nf,alphamap_fragment:sf,alphamap_pars_fragment:rf,alphatest_fragment:af,alphatest_pars_fragment:of,aomap_fragment:lf,aomap_pars_fragment:cf,batching_pars_vertex:hf,batching_vertex:uf,begin_vertex:df,beginnormal_vertex:ff,bsdfs:pf,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:_f,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:vf,clipping_planes_vertex:yf,color_fragment:Mf,color_pars_fragment:Sf,color_pars_vertex:bf,color_vertex:Ef,common:Tf,defaultnormal_vertex:Af,displacementmap_pars_vertex:wf,displacementmap_vertex:Rf,emissivemap_fragment:Cf,emissivemap_pars_fragment:If,colorspace_fragment:Pf,colorspace_pars_fragment:Lf,envmap_fragment:Df,envmap_common_pars_fragment:Nf,envmap_pars_fragment:Uf,envmap_pars_vertex:Ff,envmap_physical_pars_fragment:Yf,envmap_vertex:Of,fog_vertex:Bf,fog_pars_vertex:zf,fog_fragment:Gf,fog_pars_fragment:kf,gradientmap_pars_fragment:Hf,lightmap_pars_fragment:Vf,lights_lambert_fragment:Wf,lights_lambert_pars_fragment:Xf,lights_pars_begin:qf,lights_toon_fragment:Zf,lights_toon_pars_fragment:Jf,lights_phong_fragment:$f,lights_phong_pars_fragment:Kf,lights_physical_fragment:Qf,lights_physical_pars_fragment:jf,lights_fragment_begin:tp,lights_fragment_maps:ep,lights_fragment_end:np,lightprobes_pars_fragment:ip,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:ap,logdepthbuf_vertex:op,map_fragment:lp,map_pars_fragment:cp,map_particle_fragment:hp,map_particle_pars_fragment:up,metalnessmap_fragment:dp,metalnessmap_pars_fragment:fp,morphinstance_vertex:pp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:_p,morphtarget_vertex:xp,normal_fragment_begin:vp,normal_fragment_maps:yp,normal_pars_fragment:Mp,normal_pars_vertex:Sp,normal_vertex:bp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:Tp,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Rp,opaque_fragment:Cp,packing:Ip,premultiplied_alpha_fragment:Pp,project_vertex:Lp,dithering_fragment:Dp,dithering_pars_fragment:Np,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:Op,shadowmap_pars_vertex:Bp,shadowmap_vertex:zp,shadowmask_pars_fragment:Gp,skinbase_vertex:kp,skinning_pars_vertex:Hp,skinning_vertex:Vp,skinnormal_vertex:Wp,specularmap_fragment:Xp,specularmap_pars_fragment:qp,tonemapping_fragment:Yp,tonemapping_pars_fragment:Zp,transmission_fragment:Jp,transmission_pars_fragment:$p,uv_pars_fragment:Kp,uv_pars_vertex:Qp,uv_vertex:jp,worldpos_vertex:tm,background_vert:em,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:sm,cube_vert:rm,cube_frag:am,depth_vert:om,depth_frag:lm,distance_vert:cm,distance_frag:hm,equirect_vert:um,equirect_frag:dm,linedashed_vert:fm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:_m,meshlambert_frag:xm,meshmatcap_vert:vm,meshmatcap_frag:ym,meshnormal_vert:Mm,meshnormal_frag:Sm,meshphong_vert:bm,meshphong_frag:Em,meshphysical_vert:Tm,meshphysical_frag:Am,meshtoon_vert:wm,meshtoon_frag:Rm,points_vert:Cm,points_frag:Im,shadow_vert:Pm,shadow_frag:Lm,sprite_vert:Dm,sprite_frag:Nm},Mt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},wn={basic:{uniforms:Ve([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ve([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ve([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ve([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ve([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ve([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ve([Mt.points,Mt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ve([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ve([Mt.common,Mt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ve([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ve([Mt.sprite,Mt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Ve([Mt.common,Mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Ve([Mt.lights,Mt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};wn.physical={uniforms:Ve([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var vo={r:0,b:0,g:0},Um=new ce,gu=new Ht;gu.set(-1,0,0,0,1,0,0,0,1);function Fm(i,t,e,n,s,r){let a=new Wt(0),o=s===!0?0:1,c,l,h=null,f=0,d=null;function u(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){let v=b.backgroundBlurriness>0;T=t.get(T,v)}return T}function g(b){let T=!1,v=u(b);v===null?m(a,o):v&&v.isColor&&(m(v,1),T=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(b,T){let v=u(T);v&&v.isCubeTexture?(l===void 0&&(l=new Gt(new bn(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:wi(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Um.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(gu),l.material.toneMapped=ne.getTransfer(v.colorSpace)!==ae,(h!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Gt(new sn(2,2),new En({name:"BackgroundMaterial",uniforms:wi(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ne.getTransfer(v.colorSpace)!==ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,T){b.getRGB(vo,kl(i)),e.buffers.color.setClear(vo.r,vo.g,vo.b,T,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:y,dispose:p}}function Om(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(P,B,k,R,z){let Y=!1,V=f(P,R,k,B);r!==V&&(r=V,l(r.object)),Y=u(P,R,k,z),Y&&g(P,R,k,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(P,B,k,R),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function f(P,B,k,R){let z=R.wireframe===!0,Y=n[B.id];Y===void 0&&(Y={},n[B.id]=Y);let V=P.isInstancedMesh===!0?P.id:0,it=Y[V];it===void 0&&(it={},Y[V]=it);let X=it[k.id];X===void 0&&(X={},it[k.id]=X);let et=X[z];return et===void 0&&(et=d(c()),X[z]=et),et}function d(P){let B=[],k=[],R=[];for(let z=0;z<e;z++)B[z]=0,k[z]=0,R[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:R,object:P,attributes:{},index:null}}function u(P,B,k,R){let z=r.attributes,Y=B.attributes,V=0,it=k.getAttributes();for(let X in it)if(it[X].location>=0){let j=z[X],bt=Y[X];if(bt===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(bt=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(bt=P.instanceColor)),j===void 0||j.attribute!==bt||bt&&j.data!==bt.data)return!0;V++}return r.attributesNum!==V||r.index!==R}function g(P,B,k,R){let z={},Y=B.attributes,V=0,it=k.getAttributes();for(let X in it)if(it[X].location>=0){let j=Y[X];j===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));let bt={};bt.attribute=j,j&&j.data&&(bt.data=j.data),z[X]=bt,V++}r.attributes=z,r.attributesNum=V,r.index=R}function y(){let P=r.newAttributes;for(let B=0,k=P.length;B<k;B++)P[B]=0}function m(P){p(P,0)}function p(P,B){let k=r.newAttributes,R=r.enabledAttributes,z=r.attributeDivisors;k[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),z[P]!==B&&(i.vertexAttribDivisor(P,B),z[P]=B)}function b(){let P=r.newAttributes,B=r.enabledAttributes;for(let k=0,R=B.length;k<R;k++)B[k]!==P[k]&&(i.disableVertexAttribArray(k),B[k]=0)}function T(P,B,k,R,z,Y,V){V===!0?i.vertexAttribIPointer(P,B,k,z,Y):i.vertexAttribPointer(P,B,k,R,z,Y)}function v(P,B,k,R){y();let z=R.attributes,Y=k.getAttributes(),V=B.defaultAttributeValues;for(let it in Y){let X=Y[it];if(X.location>=0){let et=z[it];if(et===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(et=P.instanceColor)),et!==void 0){let j=et.normalized,bt=et.itemSize,At=t.get(et);if(At===void 0)continue;let Z=At.buffer,xt=At.type,Tt=At.bytesPerElement,Nt=xt===i.INT||xt===i.UNSIGNED_INT||et.gpuType===Ua;if(et.isInterleavedBufferAttribute){let vt=et.data,Ut=vt.isInterleavedBuffer===!0?vt.stride:vt.itemSize,ue=et.offset;if(vt.isInstancedInterleavedBuffer||vt.isInstancedBufferAttribute){for(let Ot=0;Ot<X.locationSize;Ot++)p(X.location+Ot,vt.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Ot=0;Ot<X.locationSize;Ot++)m(X.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Ot=0;Ot<X.locationSize;Ot++)T(X.location+Ot,bt/X.locationSize,xt,j,Ut*Tt,(ue+bt/X.locationSize*Ot)*Tt,Nt)}else{if(et.isInstancedBufferAttribute){for(let vt=0;vt<X.locationSize;vt++)p(X.location+vt,et.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let vt=0;vt<X.locationSize;vt++)m(X.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let vt=0;vt<X.locationSize;vt++)T(X.location+vt,bt/X.locationSize,xt,j,bt*Tt,bt/X.locationSize*vt*Tt,Nt)}}else if(V!==void 0){let j=V[it];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(X.location,j);break;case 3:i.vertexAttrib3fv(X.location,j);break;case 4:i.vertexAttrib4fv(X.location,j);break;default:i.vertexAttrib1fv(X.location,j)}}}}b()}function A(){F();for(let P in n){let B=n[P];for(let k in B){let R=B[k];for(let z in R){let Y=R[z];for(let V in Y)h(Y[V].object),delete Y[V];delete R[z]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let B=n[P.id];for(let k in B){let R=B[k];for(let z in R){let Y=R[z];for(let V in Y)h(Y[V].object),delete Y[V];delete R[z]}}delete n[P.id]}function _(P){for(let B in n){let k=n[B];for(let R in k){let z=k[R];if(z[P.id]===void 0)continue;let Y=z[P.id];for(let V in Y)h(Y[V].object),delete Y[V];delete z[P.id]}}}function E(P){for(let B in n){let k=n[B],R=P.isInstancedMesh===!0?P.id:0,z=k[R];if(z!==void 0){for(let Y in z){let V=z[Y];for(let it in V)h(V[it].object),delete V[it];delete z[Y]}delete k[R],Object.keys(k).length===0&&delete n[B]}}}function F(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function Bm(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==pn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let E=_===fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Ze&&_!==rn&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Bt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:v,maxSamples:A,samples:w}}function Gm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new un,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:n,T=b*4,v=p.clippingState||null;c.value=v,v=h(g,d,T,u);for(let A=0;A!==T;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,g){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=u+y*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=u;T!==y;++T,v+=4)a.copy(f[T]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var mr=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Os(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bn(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:bi});r.uniforms.tEquirect.value=e;let a=new Gt(s,r),o=e.minFilter;return e.minFilter===kn&&(e.minFilter=Xe),new ss(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Zh=256,km=3,Hm=20,_u=256,xu=16,Vm=3,Wm=new U,Xm=new Wt,us=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ss(1,10,null),this._boxMesh=new Gt(new bn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Wm}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,u=c.autoClearDepth,g=c.autoClearStencil,y=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(t.background=c.getClearColor(Xm));let m=new ss(n,s,h);return m.position.copy(o),m.update(c,t),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=u,c.autoClearStencil=g,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Zh,zh(t))}_fromTexture(t,e){t.mapping===Ti||t.mapping===os?this._setSize(t.image.length===0?Zh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Jh(t,!1,!1),n=Math.log2(t)-km;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Jh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ti||t.mapping===os?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$h()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=qm(),this._integrationMaterial=Ym());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/xu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Vm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(_u*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Zm());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Jh(i,t,e){return new mr(i,{minFilter:kn,generateMipmaps:t,type:fn,colorSpace:Rs,depthBuffer:e})}function gr(i,t,e){return new En({name:i,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:Ue,blending:bi,depthTest:!1,depthWrite:!1})}function qm(){return gr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${_u}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ym(){return gr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:xu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Zm(){return gr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Hm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function $h(){return gr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Kh(){return gr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Jm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===La||u===Da)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new mr(g.height);return y.fromEquirectangularTexture(i,d),t.set(d,y),d.addEventListener("dispose",l),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,g=u===La||u===Da,y=u===Ti||u===os;if(g||y){let m=e.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new us(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let b=d.image;return g&&b&&b.height>0||y&&b&&c(b)?(n===null&&(n=new us(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,u){return u===La?d.mapping=Ti:u===Da&&(d.mapping=os),d}function c(d){let u=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&u++;return u===g}function l(d){let u=d.target;u.removeEventListener("dispose",l);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function $m(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Es("WebGLRenderer: "+n+" extension not supported."),s}}}function Km(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(g){let y=g.attributes;for(let m in y)t.update(y[m],i.ARRAY_BUFFER)}function f(g){let y=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let b=y!==null?y.array.length:m.array.length/3-1,T=m.count>=65535?Ds:Ls,v=new T(Math.ceil(b/3)*6,1),A=v.array;if(y!==null){let _=y.array;p=y.version;for(let E=0,F=0;E<b;E+=3){let C=_[E+0],P=_[E+1],B=_[E+2];A[F++]=C,A[F++]=P,A[F++]=P,A[F++]=B,A[F++]=B,A[F++]=C}}else{p=m.version;for(let _=0,E=0;_<b;_+=3){let F=_+0,C=_+1,P=_+2;A[E++]=F,A[E++]=C,A[E++]=C,A[E++]=P,A[E++]=P,A[E++]=F}}v.version=p;let w=r.get(g);w&&t.remove(w),r.set(g,v)}function d(g){let y=r.get(g);if(y){let m=g.index;m!==null&&y.version<m.version&&f(g)}else f(g);return r.get(g)}function u(){for(let g in s){let y=s[g].deref();y!==void 0&&c(y)}}return{get:l,update:h,getWireframeAttribute:d,dispose:u}}function Qm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function l(f,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,f*a,u),e.update(d,n,u))}function h(f,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let y=0;for(let m=0;m<u;m++)y+=d[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function jm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function t0(i,t,e){let n=new WeakMap,s=new ge;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let F=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],T=0;u===!0&&(T=1),g===!0&&(T=2),y===!0&&(T=3);let v=o.attributes.position.count*T,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*A*4*f),_=new Is(w,v,A,f);_.type=rn,_.needsUpdate=!0;let E=T*4;for(let C=0;C<f;C++){let P=m[C],B=p[C],k=b[C],R=v*A*4*C;for(let z=0;z<P.count;z++){let Y=z*E;u===!0&&(s.fromBufferAttribute(P,z),w[R+Y+0]=s.x,w[R+Y+1]=s.y,w[R+Y+2]=s.z,w[R+Y+3]=0),g===!0&&(s.fromBufferAttribute(B,z),w[R+Y+4]=s.x,w[R+Y+5]=s.y,w[R+Y+6]=s.z,w[R+Y+7]=0),y===!0&&(s.fromBufferAttribute(k,z),w[R+Y+8]=s.x,w[R+Y+9]=s.y,w[R+Y+10]=s.z,w[R+Y+11]=k.itemSize===4?s.w:1)}}d={count:f,texture:_,size:new ht(v,A)},n.set(o,d),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let y=0;y<l.length;y++)u+=l[y];let g=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function e0(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,d=t.get(l,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var n0={[Ml]:"LINEAR_TONE_MAPPING",[Sl]:"REINHARD_TONE_MAPPING",[bl]:"CINEON_TONE_MAPPING",[El]:"ACES_FILMIC_TONE_MAPPING",[Al]:"AGX_TONE_MAPPING",[sr]:"NEUTRAL_TONE_MAPPING",[Tl]:"CUSTOM_TONE_MAPPING"};function i0(i,t,e,n,s,r){let a=new Qe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Le;h.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new he([0,2,0,0,2,0],2));let f=new ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Gt(h,f),u=new nr(-1,1,1,-1,0,1),g=null,y=null,m=!1,p,b=null,T=[],v=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),c!==null&&c.setSize(A,w);for(let _=0;_<T.length;_++){let E=T[_];E.setSize&&E.setSize(A,w)}},this.setEffects=function(A){T=A,v=T.length>0&&T[0].isRenderPass===!0;let w=a.width,_=a.height;T.length>0&&o===null&&(o=new Qe(w,_,{type:fn,depthBuffer:!1,stencilBuffer:!1}),c=new Qe(w,_,{type:fn,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&T.some(F=>F.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&l===null&&(l=new zn(w,_),r===!0&&(l.format=Hn,l.type=Ai)),a.dispose(),a.depthTexture=E?l:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let F=0;F<T.length;F++){let C=T[F];C.setSize&&C.setSize(w,_),E&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(A,w){if(m||A.toneMapping===Tn&&T.length===0)return!1;if(b=w,w!==null){let _=w.width,E=w.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return v===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=Tn,!0},this.hasRenderPass=function(){return v},this.end=function(A,w){A.toneMapping=p,m=!0;let _=a,E=o;for(let F=0;F<T.length;F++){let C=T[F];C.enabled!==!1&&(C.render(A,E,_,w),C.needsSwap!==!1&&(_=E,E=E===o?c:o))}if(g!==A.outputColorSpace||y!==A.toneMapping){g=A.outputColorSpace,y=A.toneMapping,f.defines={},ne.getTransfer(g)===ae&&(f.defines.SRGB_TRANSFER="");let F=n0[y];F&&(f.defines[F]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(b),A.render(d,u),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var vu=new He,yu=new zn(1,1),Mu=new zs(1),Su=new Is,bu=new la,Eu=new Os,Qh=[],jh=[],tu=new Float32Array(16),eu=new Float32Array(9),nu=new Float32Array(4);function ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Qh[s];if(r===void 0&&(r=new Float32Array(s),Qh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function So(i,t){let e=jh[t];e===void 0&&(e=new Int32Array(t),jh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function s0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function r0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function l0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;nu.set(n),i.uniformMatrix2fv(this.addr,!1,nu),Ae(e,n)}}function c0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;eu.set(n),i.uniformMatrix3fv(this.addr,!1,eu),Ae(e,n)}}function h0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;tu.set(n),i.uniformMatrix4fv(this.addr,!1,tu),Ae(e,n)}}function u0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function m0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function g0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function x0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function bo(i){return i.version===0&&(i.compareFunction=Fl,i.needsUpdate=!0),i}function v0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=bo(yu):r=vu,e.setTexture2D(t||r,s)}function y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bu,s)}function M0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=bo(Mu):r=Eu,e.setTextureCube(t||r,s)}function S0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Su,s)}function b0(i){switch(i){case 5126:return s0;case 35664:return r0;case 35665:return a0;case 35666:return o0;case 35674:return l0;case 35675:return c0;case 35676:return h0;case 5124:case 35670:return u0;case 35667:case 35671:return d0;case 35668:case 35672:return f0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}function E0(i,t){i.uniform1fv(this.addr,t)}function T0(i,t){let e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function A0(i,t){let e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function w0(i,t){let e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function R0(i,t){let e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function C0(i,t){let e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function I0(i,t){let e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function P0(i,t){i.uniform1iv(this.addr,t)}function L0(i,t){i.uniform2iv(this.addr,t)}function D0(i,t){i.uniform3iv(this.addr,t)}function N0(i,t){i.uniform4iv(this.addr,t)}function U0(i,t){i.uniform1uiv(this.addr,t)}function F0(i,t){i.uniform2uiv(this.addr,t)}function O0(i,t){i.uniform3uiv(this.addr,t)}function B0(i,t){i.uniform4uiv(this.addr,t)}function z0(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=bo(yu):a=vu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function G0(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||bu,r[a])}function k0(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=bo(Mu):a=Eu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function H0(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Su,r[a])}function V0(i){switch(i){case 5126:return E0;case 35664:return T0;case 35665:return A0;case 35666:return w0;case 35674:return R0;case 35675:return C0;case 35676:return I0;case 5124:case 35670:return P0;case 35667:case 35671:return L0;case 35668:case 35672:return D0;case 35669:case 35673:return N0;case 5125:return U0;case 36294:return F0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return H0}}var Ql=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=b0(e.type)}},jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=V0(e.type)}},tc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},$l=/(\w+)(\])?(\[|\.)?/g;function iu(i,t){i.seq.push(t),i.map[t.id]=t}function W0(i,t,e){let n=i.name,s=n.length;for($l.lastIndex=0;;){let r=$l.exec(n),a=$l.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){iu(e,l===void 0?new Ql(o,i,t):new jl(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new tc(o),iu(e,f)),e=f}}}var hs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);W0(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function su(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var X0=37297,q0=0;function Y0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ru=new Ht;function Z0(i){ne._getMatrix(ru,ne.workingColorSpace,i);let t=`mat3( ${ru.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Cs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function au(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Y0(i.getShaderSource(t),o)}else return r}function J0(i,t){let e=Z0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var $0={[Ml]:"Linear",[Sl]:"Reinhard",[bl]:"Cineon",[El]:"ACESFilmic",[Al]:"AgX",[sr]:"Neutral",[Tl]:"Custom"};function K0(i,t){let e=$0[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yo=new U;function Q0(){ne.getLuminanceCoefficients(yo);let i=yo.x.toFixed(4),t=yo.y.toFixed(4),e=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function tg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function pr(i){return i!==""}function ou(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function lu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(i){return i.replace(ng,ig)}function ig(i,t){let e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ec(e)}var sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cu(i){return i.replace(sg,rg)}function rg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ag={[ir]:"SHADOWMAP_TYPE_PCF",[rs]:"SHADOWMAP_TYPE_VSM"};function og(i){return ag[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lg={[os]:"ENVMAP_MODE_REFRACTION"};function cg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hg={[Pa]:"ENVMAP_BLENDING_MULTIPLY",[bh]:"ENVMAP_BLENDING_MIX",[Eh]:"ENVMAP_BLENDING_ADD"};function ug(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hg[i.combine]||"ENVMAP_BLENDING_NONE"}function dg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=og(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=cg(e),f=ug(e),d=j0(e),u=tg(r),g=s.createProgram(),y,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(pr).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(pr).join(`
`),m.length>0&&(m+=`
`)):(y=[hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),m=[hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Tn?K0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,J0("linearToOutputTexel",e.outputColorSpace),Q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),a=ec(a),a=ou(a,e),a=lu(a,e),o=ec(o),o=ou(o,e),o=lu(o,e),a=cu(a),o=cu(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=p+y+a,T=p+m+o,v=su(s,s.VERTEX_SHADER,b),A=su(s,s.FRAGMENT_SHADER,T);s.attachShader(g,v),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(C){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(v)||"",k=s.getShaderInfoLog(A)||"",R=P.trim(),z=B.trim(),Y=k.trim(),V=!0,it=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,v,A);else{let X=au(s,v,"vertex"),et=au(s,A,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+X+`
`+et)}else R!==""?Bt("WebGLProgram: Program Info Log:",R):(z===""||Y==="")&&(it=!1);it&&(C.diagnostics={runnable:V,programLog:R,vertexShader:{log:z,prefix:y},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(v),s.deleteShader(A),_=new hs(s,g),E=eg(s,g)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(g,X0)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=A,this}var fg=0,nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ic(t),e.set(t,n)),n}},ic=class{constructor(t){this.id=fg++,this.code=t,this.usedTimes=0}};function pg(i){return i===ii||i===hr||i===ur}function mg(i,t,e,n,s,r){let a=new Ps,o=new nc,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,E,F,C,P,B){let k=C.fog,R=P.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||z,Y),it=d[_.type],X=n.precision;_.precision!==null&&(X=n.getMaxPrecision(_.precision),X!==_.precision&&Bt("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let et=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,j=et!==void 0?et.length:0,bt=0;R.morphAttributes.position!==void 0&&(bt=1),R.morphAttributes.normal!==void 0&&(bt=2),R.morphAttributes.color!==void 0&&(bt=3);let At,Z,xt,Tt;if(it){let yt=wn[it];At=yt.vertexShader,Z=yt.fragmentShader}else{At=_.vertexShader,Z=_.fragmentShader;let yt=o.getVertexShaderStage(_),le=o.getFragmentShaderStage(_);o.update(_,yt,le),xt=yt.id,Tt=le.id}let Nt=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Ut=P.isInstancedMesh===!0,ue=P.isBatchedMesh===!0,Ot=!!_.map,qt=!!_.matcap,Kt=!!V,nt=Kt&&V.isPMREMTexture===!0,ut=!!_.aoMap,lt=!!_.lightMap,Et=!!_.bumpMap&&_.wireframe===!1,gt=!!_.normalMap,kt=!!_.displacementMap,It=!!_.emissiveMap,Zt=!!_.metalnessMap,Qt=!!_.roughnessMap,ie=_.anisotropy>0,N=_.clearcoat>0,ve=_.diffuseRoughness>0,Xt=_.dispersion>0,oe=_.retroreflectivity>0,dt=_.iridescence>0,me=_.sheen>0,Lt=_.transmission>0,O=ie&&!!_.anisotropyMap,M=N&&!!_.clearcoatMap,x=N&&!!_.clearcoatNormalMap,L=N&&!!_.clearcoatRoughnessMap,J=ve&&!!_.diffuseRoughnessMap,W=dt&&!!_.iridescenceMap,st=dt&&!!_.iridescenceThicknessMap,rt=me&&!!_.sheenColorMap,$=me&&!!_.sheenRoughnessMap,Q=!!_.specularMap,ct=!!_.specularColorMap,I=!!_.specularIntensityMap,tt=Lt&&!!_.transmissionMap,K=Lt&&!!_.thicknessMap,pt=!!_.gradientMap,ot=!!_.alphaMap,ft=_.alphaTest>0,Dt=!!_.alphaHash,Jt=!!_.extensions,at=Tn;_.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(at=i.toneMapping);let Ft=nt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Yt={shaderID:it,shaderType:_.type,shaderName:_.name,vertexShader:At,fragmentShader:Z,defines:_.defines,customVertexShaderID:xt,customFragmentShaderID:Tt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:ue,batchingColor:ue&&P._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&P.instanceColor!==null,instancingMorph:Ut&&P.morphTexture!==null,outputColorSpace:Nt===null?i.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ot,matcap:qt,envMap:Kt,envMapMode:Kt&&V.mapping,envMapPMREM:nt,envMapMaxLod:nt?Ft.length-1:null,envMapSize:nt?Ft[0].width:null,aoMap:ut,lightMap:lt,bumpMap:Et,normalMap:gt,displacementMap:kt,emissiveMap:It,normalMapObjectSpace:gt&&_.normalMapType===wh,normalMapTangentSpace:gt&&_.normalMapType===dr,packedNormalMap:gt&&_.normalMapType===dr&&pg(_.normalMap.format),metalnessMap:Zt,roughnessMap:Qt,anisotropy:ie,anisotropyMap:O,clearcoat:N,clearcoatMap:M,clearcoatNormalMap:x,clearcoatRoughnessMap:L,diffuseRoughness:ve,diffuseRoughnessMap:J,dispersion:Xt,retroreflection:oe,iridescence:dt,iridescenceMap:W,iridescenceThicknessMap:st,sheen:me,sheenColorMap:rt,sheenRoughnessMap:$,specularMap:Q,specularColorMap:ct,specularIntensityMap:I,transmission:Lt,transmissionMap:tt,thicknessMap:K,gradientMap:pt,opaque:_.transparent===!1&&_.blending===as&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:ft,alphaHash:Dt,combine:_.combine,mapUv:Ot&&u(_.map.channel),aoMapUv:ut&&u(_.aoMap.channel),lightMapUv:lt&&u(_.lightMap.channel),bumpMapUv:Et&&u(_.bumpMap.channel),normalMapUv:gt&&u(_.normalMap.channel),displacementMapUv:kt&&u(_.displacementMap.channel),emissiveMapUv:It&&u(_.emissiveMap.channel),metalnessMapUv:Zt&&u(_.metalnessMap.channel),roughnessMapUv:Qt&&u(_.roughnessMap.channel),anisotropyMapUv:O&&u(_.anisotropyMap.channel),clearcoatMapUv:M&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:J&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:W&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:st&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&u(_.sheenRoughnessMap.channel),specularMapUv:Q&&u(_.specularMap.channel),specularColorMapUv:ct&&u(_.specularColorMap.channel),specularIntensityMapUv:I&&u(_.specularIntensityMap.channel),transmissionMapUv:tt&&u(_.transmissionMap.channel),thicknessMapUv:K&&u(_.thicknessMap.channel),alphaMapUv:ot&&u(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(gt||ie),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!R.attributes.uv&&(Ot||ot),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&gt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:vt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:bt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.filter(yt=>yt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:Ot&&_.map.isVideoTexture===!0&&ne.getTransfer(_.map.colorSpace)===ae,decodeVideoTextureEmissive:It&&_.emissiveMap.isVideoTexture===!0&&ne.getTransfer(_.emissiveMap.colorSpace)===ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ye,flipSided:_.side===Ue,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Jt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&_.extensions.multiDraw===!0||ue)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Yt.vertexUv1s=c.has(1),Yt.vertexUv2s=c.has(2),Yt.vertexUv3s=c.has(3),c.clear(),Yt}function y(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)E.push(F),E.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(m(E,_),p(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function p(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){let E=d[_.type],F;if(E){let C=wn[E];F=Xh.clone(C.uniforms)}else F=_.uniforms;return F}function T(_,E){let F=h.get(E);return F!==void 0?++F.usedTimes:(F=new dg(i,E,_,s),l.push(F),h.set(E,F)),F}function v(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:b,acquireProgram:T,releaseProgram:v,releaseShaderCache:A,programs:l,dispose:w}}function gg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function uu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function du(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,g,y,m,p){let b=i[t];return b===void 0?(b={id:d.id,object:d,geometry:u,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},i[t]=b):(b.id=d.id,b.object=d,b.geometry=u,b.material=g,b.materialVariant=a(d),b.groupOrder=y,b.renderOrder=d.renderOrder,b.z=m,b.group=p),t++,b}function c(d,u,g,y,m,p,b){b.reversedDepth===!0&&(m=-m);let T=o(d,u,g,y,m,p);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function l(d,u,g,y,m,p){let b=o(d,u,g,y,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(d,u){e.length>1&&e.sort(d||_g),n.length>1&&n.sort(u||uu),s.length>1&&s.sort(u||uu)}function f(){for(let d=t,u=i.length;d<u;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function xg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new du,i.set(n,[a])):s>=r.length?(a=new du,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Wt};break;case"SpotLight":e={position:new U,direction:new U,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function yg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Mg=0;function Sg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bg(i){let t=new vg,e=yg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new ce,a=new ce;function o(l){let h=0,f=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let u=0,g=0,y=0,m=0,p=0,b=0,T=0,v=0,A=0,w=0,_=0,E=0,F=0,C=0;l.sort(Sg);for(let B=0,k=l.length;B<k;B++){let R=l[B],z=R.color,Y=R.intensity,V=R.distance,it=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ii?it=R.shadow.map.texture:it=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=z.r*Y,f+=z.g*Y,d+=z.b*Y;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],Y);C++}else if(R.isSunLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let et=R.shadow,j=e.get(R);j.shadowIntensity=et.intensity,j.shadowBias=et.bias,j.shadowNormalBias=et.normalBias,j.shadowRadius=et.radius,j.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=it;let bt=et.getViewportCount();for(let At=0;At<bt;At++)n.sunShadowMatrix[y+At]=et.getMatrix(At),n.sunShadowCascade[y+At]=et._cascadeData[At];y+=bt,g++}n.sun[u]=X,u++}else if(R.isDirectionalLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let et=R.shadow,j=e.get(R);j.shadowIntensity=et.intensity,j.shadowBias=et.bias,j.shadowNormalBias=et.normalBias,j.shadowRadius=et.radius,j.shadowMapSize=et.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=it,n.directionalShadowMatrix[m]=R.shadow.matrix,A++}n.directional[m]=X,m++}else if(R.isSpotLight){let X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(z).multiplyScalar(Y),X.distance=V,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[b]=X;let et=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,et.updateMatrices(R),R.castShadow&&F++),n.spotLightMatrix[b]=et.matrix,R.castShadow){let j=e.get(R);j.shadowIntensity=et.intensity,j.shadowBias=et.bias,j.shadowNormalBias=et.normalBias,j.shadowRadius=et.radius,j.shadowMapSize=et.mapSize,n.spotShadow[b]=j,n.spotShadowMap[b]=it,_++}b++}else if(R.isRectAreaLight){let X=t.get(R);X.color.copy(z).multiplyScalar(Y),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[T]=X,T++}else if(R.isPointLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let et=R.shadow,j=e.get(R);j.shadowIntensity=et.intensity,j.shadowBias=et.bias,j.shadowNormalBias=et.normalBias,j.shadowRadius=et.radius,j.shadowMapSize=et.mapSize,j.shadowCameraNear=et.camera.near,j.shadowCameraFar=et.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=it,n.pointShadowMatrix[p]=R.shadow.matrix,w++}n.point[p]=X,p++}else if(R.isHemisphereLight){let X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(Y),X.groundColor.copy(R.groundColor).multiplyScalar(Y),n.hemi[v]=X,v++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let P=n.hash;(P.sunLength!==u||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==b||P.rectAreaLength!==T||P.hemiLength!==v||P.numSunShadows!==g||P.numDirectionalShadows!==A||P.numPointShadows!==w||P.numSpotShadows!==_||P.numSpotMaps!==E||P.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=m,n.spot.length=b,n.rectArea.length=T,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-F,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=C,P.sunLength=u,P.directionalLength=m,P.pointLength=p,P.spotLength=b,P.rectAreaLength=T,P.hemiLength=v,P.numSunShadows=g,P.numDirectionalShadows=A,P.numPointShadows=w,P.numSpotShadows=_,P.numSpotMaps=E,P.numLightProbes=C,n.version=Mg++)}function c(l,h){let f=0,d=0,u=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let b=0,T=l.length;b<T;b++){let v=l[b];if(v.isSunLight){let A=n.sun[f];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),f++}else if(v.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(v.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let A=n.rectArea[y];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let A=n.point[u];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function fu(i){let t=new bg(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function c(){t.setup(e),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Eg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new fu(i),t.set(s,[o])):r>=a.length?(o=new fu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ag=`uniform sampler2D shadow_pass;
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
}`,wg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Rg=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],pu=new ce,fr=new U,Kl=new U;function Cg(i,t,e){let n=new Qn,s=new ht,r=new ht,a=new ge,o=new _a,c=new xa,l={},h=e.maxTextureSize,f={[ni]:Ue,[Ue]:ni,[Ye]:Ye},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Tg,fragmentShader:Ag}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Le;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let p=this.type;this.render=function(w,_,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===sh&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);let F=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(bi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=p!==this.type;k&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(z=>z.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,z=w.length;R<z;R++){let Y=w[R],V=Y.shadow;if(V===void 0){Bt("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let it=V.getFrameExtents();s.multiply(it),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,V.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||k===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===rs){if(Y.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Qe(s.x,s.y,{format:ii,type:fn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new zn(s.x,s.y,rn),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=On,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ie,V.map.depthTexture.magFilter=Ie}else Y.isPointLight?(V.map=new mr(s.x),V.map.depthTexture=new zs(s.x,dn)):(V.map=new Qe(s.x,s.y),V.map.depthTexture=new zn(s.x,s.y,dn)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=On,this.type===ir?(V.map.depthTexture.compareFunction=X?Ul:Nl,V.map.depthTexture.minFilter=Xe,V.map.depthTexture.magFilter=Xe):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ie,V.map.depthTexture.magFilter=Ie);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let et=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Y.isPointLight!==!0&&V.updateMatrices(Y,E);let j=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:E.layers;for(let bt=0;bt<et;bt++){let At=V.getCamera(bt);if(Y.isPointLight){let Z=V.camera,xt=V.matrix,Tt=Y.distance||Z.far;Tt!==Z.far&&(Z.far=Tt,Z.updateProjectionMatrix()),fr.setFromMatrixPosition(Y.matrixWorld),Z.position.copy(fr),Kl.copy(Z.position),Kl.add(wg[bt]),Z.up.copy(Rg[bt]),Z.lookAt(Kl),Z.updateMatrixWorld(),xt.makeTranslation(-fr.x,-fr.y,-fr.z),pu.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),V._frustum.setFromProjectionMatrix(pu,Z.coordinateSystem,Z.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(V.map),i.clear());let Z=V.getViewport(bt);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),B.viewport(a)}n=V.getFrustum(bt),v(_,E,At,Y,j,this.type)}V.isPointLightShadow!==!0&&this.type===rs&&b(V,E),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(F,C,P)};function b(w,_){let E=t.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new Qe(s.x,s.y,{format:ii,type:fn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,E,d,y,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,E,u,y,null)}function T(w,_,E,F){let C=null,P=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)C=P;else if(C=E.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let B=C.uuid,k=_.uuid,R=l[B];R===void 0&&(R={},l[B]=R);let z=R[k];z===void 0&&(z=C.clone(),R[k]=z,_.addEventListener("dispose",A)),C=z}if(C.visible=_.visible,C.wireframe=_.wireframe,F===rs?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:f[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=i.properties.get(C);B.light=E}return C}function v(w,_,E,F,C,P){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===rs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);let R=t.update(w),z=w.material;if(Array.isArray(z)){let Y=R.groups;for(let V=0,it=Y.length;V<it;V++){let X=Y[V],et=z[X.materialIndex];if(et&&et.visible){let j=T(w,et,F,P);w.onBeforeShadow(i,w,_,E,R,j,X),i.renderBufferDirect(E,null,R,j,w,X),w.onAfterShadow(i,w,_,E,R,j,X)}}}else if(z.visible){let Y=T(w,z,F,P);w.onBeforeShadow(i,w,_,E,R,Y,null),i.renderBufferDirect(E,null,R,Y,w,null),w.onAfterShadow(i,w,_,E,R,Y,null)}}let k=w.children;for(let R=0,z=k.length;R<z;R++)v(k[R],_,E,F,C,P)}function A(w){w.target.removeEventListener("dispose",A);for(let E in l){let F=l[E],C=w.target.uuid;C in F&&(F[C].dispose(),delete F[C])}}}function Ig(i,t){function e(){let I=!1,tt=new ge,K=null,pt=new ge(0,0,0,0);return{setMask:function(ot){K!==ot&&!I&&(i.colorMask(ot,ot,ot,ot),K=ot)},setLocked:function(ot){I=ot},setClear:function(ot,ft,Dt,Jt,at){at===!0&&(ot*=Jt,ft*=Jt,Dt*=Jt),tt.set(ot,ft,Dt,Jt),pt.equals(tt)===!1&&(i.clearColor(ot,ft,Dt,Jt),pt.copy(tt))},reset:function(){I=!1,K=null,pt.set(-1,0,0,0)}}}function n(){let I=!1,tt=!1,K=null,pt=null,ot=null;return{setReversed:function(ft){if(tt!==ft){let Dt=t.get("EXT_clip_control");ft?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),tt=ft;let Jt=ot;ot=null,this.setClear(Jt)}},getReversed:function(){return tt},setTest:function(ft){ft?vt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(ft){K!==ft&&!I&&(i.depthMask(ft),K=ft)},setFunc:function(ft){if(tt&&(ft=Bh[ft]),pt!==ft){switch(ft){case Jr:i.depthFunc(i.NEVER);break;case $r:i.depthFunc(i.ALWAYS);break;case Kr:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case Qr:i.depthFunc(i.EQUAL);break;case jr:i.depthFunc(i.GEQUAL);break;case ta:i.depthFunc(i.GREATER);break;case ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=ft}},setLocked:function(ft){I=ft},setClear:function(ft){ot!==ft&&(ot=ft,tt&&(ft=1-ft),i.clearDepth(ft))},reset:function(){I=!1,K=null,pt=null,ot=null,tt=!1}}}function s(){let I=!1,tt=null,K=null,pt=null,ot=null,ft=null,Dt=null,Jt=null,at=null;return{setTest:function(Ft){I||(Ft?vt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Ft){tt!==Ft&&!I&&(i.stencilMask(Ft),tt=Ft)},setFunc:function(Ft,Yt,yt){(K!==Ft||pt!==Yt||ot!==yt)&&(i.stencilFunc(Ft,Yt,yt),K=Ft,pt=Yt,ot=yt)},setOp:function(Ft,Yt,yt){(ft!==Ft||Dt!==Yt||Jt!==yt)&&(i.stencilOp(Ft,Yt,yt),ft=Ft,Dt=Yt,Jt=yt)},setLocked:function(Ft){I=Ft},setClear:function(Ft){at!==Ft&&(i.clearStencil(Ft),at=Ft)},reset:function(){I=!1,tt=null,K=null,pt=null,ot=null,ft=null,Dt=null,Jt=null,at=null}}}let r=new e,a=new n,o=new s,c={},l=new WeakMap,h={},f={},d={},u=new WeakMap,g=[],y=null,m=!1,p=null,b=null,T=null,v=null,A=null,w=null,_=null,E=new Wt(0,0,0),F=0,C=!1,P=null,B=null,k=null,R=null,z=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,it=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=it>=1):X.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=it>=2);let et=null,j={},bt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),Z=new ge().fromArray(bt),xt=new ge().fromArray(At);function Tt(I,tt,K,pt){let ot=new Uint8Array(4),ft=i.createTexture();i.bindTexture(I,ft),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<K;Dt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(tt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return ft}let Nt={};Nt[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Nt[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Nt[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),vt(i.DEPTH_TEST),a.setFunc(Xi),Et(!1),gt(gl),vt(i.CULL_FACE),ut(bi);function vt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Ut(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function ue(I,tt){return d[I]!==tt?(i.bindFramebuffer(I,tt),d[I]=tt,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=tt),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function Ot(I,tt){let K=g,pt=!1;if(I){K=u.get(tt),K===void 0&&(K=[],u.set(tt,K));let ot=I.textures;if(K.length!==ot.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Dt=ot.length;ft<Dt;ft++)K[ft]=i.COLOR_ATTACHMENT0+ft;K.length=ot.length,pt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,pt=!0);pt&&i.drawBuffers(K)}function qt(I){return y!==I?(i.useProgram(I),y=I,!0):!1}let Kt={[Ei]:i.FUNC_ADD,[ah]:i.FUNC_SUBTRACT,[oh]:i.FUNC_REVERSE_SUBTRACT};Kt[lh]=i.MIN,Kt[ch]=i.MAX;let nt={[hh]:i.ZERO,[uh]:i.ONE,[dh]:i.SRC_COLOR,[vl]:i.SRC_ALPHA,[xh]:i.SRC_ALPHA_SATURATE,[gh]:i.DST_COLOR,[ph]:i.DST_ALPHA,[fh]:i.ONE_MINUS_SRC_COLOR,[yl]:i.ONE_MINUS_SRC_ALPHA,[_h]:i.ONE_MINUS_DST_COLOR,[mh]:i.ONE_MINUS_DST_ALPHA,[vh]:i.CONSTANT_COLOR,[yh]:i.ONE_MINUS_CONSTANT_COLOR,[Mh]:i.CONSTANT_ALPHA,[Sh]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(I,tt,K,pt,ot,ft,Dt,Jt,at,Ft){if(I===bi){m===!0&&(Ut(i.BLEND),m=!1);return}if(m===!1&&(vt(i.BLEND),m=!0),I!==rh){if(I!==p||Ft!==C){if((b!==Ei||A!==Ei)&&(i.blendEquation(i.FUNC_ADD),b=Ei,A=Ei),Ft)switch(I){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFunc(i.ONE,i.ONE);break;case _l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:zt("WebGLState: Invalid blending: ",I);break}else switch(I){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _l:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xl:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",I);break}T=null,v=null,w=null,_=null,E.set(0,0,0),F=0,p=I,C=Ft}return}ot=ot||tt,ft=ft||K,Dt=Dt||pt,(tt!==b||ot!==A)&&(i.blendEquationSeparate(Kt[tt],Kt[ot]),b=tt,A=ot),(K!==T||pt!==v||ft!==w||Dt!==_)&&(i.blendFuncSeparate(nt[K],nt[pt],nt[ft],nt[Dt]),T=K,v=pt,w=ft,_=Dt),(Jt.equals(E)===!1||at!==F)&&(i.blendColor(Jt.r,Jt.g,Jt.b,at),E.copy(Jt),F=at),p=I,C=!1}function lt(I,tt){I.side===Ye?Ut(i.CULL_FACE):vt(i.CULL_FACE);let K=I.side===Ue;tt&&(K=!K),Et(K),I.blending===as&&I.transparent===!1?ut(bi):ut(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let pt=I.stencilWrite;o.setTest(pt),pt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),It(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(I){P!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),P=I)}function gt(I){I!==nh?(vt(i.CULL_FACE),I!==B&&(I===gl?i.cullFace(i.BACK):I===ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),B=I}function kt(I){I!==k&&(V&&i.lineWidth(I),k=I)}function It(I,tt,K){I?(vt(i.POLYGON_OFFSET_FILL),(R!==tt||z!==K)&&(R=tt,z=K,a.getReversed()&&(tt=-tt,K=-K),i.polygonOffset(tt,K))):Ut(i.POLYGON_OFFSET_FILL)}function Zt(I){I?vt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function Qt(I){I===void 0&&(I=i.TEXTURE0+Y-1),et!==I&&(i.activeTexture(I),et=I)}function ie(I,tt,K){K===void 0&&(et===null?K=i.TEXTURE0+Y-1:K=et);let pt=j[K];pt===void 0&&(pt={type:void 0,texture:void 0},j[K]=pt),(pt.type!==I||pt.texture!==tt)&&(et!==K&&(i.activeTexture(K),et=K),i.bindTexture(I,tt||Nt[I]),pt.type=I,pt.texture=tt)}function N(){let I=j[et];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ve(){try{i.compressedTexImage2D(...arguments)}catch(I){zt("WebGLState:",I)}}function Xt(){try{i.compressedTexImage3D(...arguments)}catch(I){zt("WebGLState:",I)}}function oe(){try{i.texSubImage2D(...arguments)}catch(I){zt("WebGLState:",I)}}function dt(){try{i.texSubImage3D(...arguments)}catch(I){zt("WebGLState:",I)}}function me(){try{i.compressedTexSubImage2D(...arguments)}catch(I){zt("WebGLState:",I)}}function Lt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){zt("WebGLState:",I)}}function O(){try{i.texStorage2D(...arguments)}catch(I){zt("WebGLState:",I)}}function M(){try{i.texStorage3D(...arguments)}catch(I){zt("WebGLState:",I)}}function x(){try{i.texImage2D(...arguments)}catch(I){zt("WebGLState:",I)}}function L(){try{i.texImage3D(...arguments)}catch(I){zt("WebGLState:",I)}}function J(I){return f[I]!==void 0?f[I]:i.getParameter(I)}function W(I,tt){f[I]!==tt&&(i.pixelStorei(I,tt),f[I]=tt)}function st(I){Z.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Z.copy(I))}function rt(I){xt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),xt.copy(I))}function $(I,tt){let K=l.get(tt);K===void 0&&(K=new WeakMap,l.set(tt,K));let pt=K.get(I);pt===void 0&&(pt=i.getUniformBlockIndex(tt,I.name),i.uniformBlockBinding(tt,pt,pt),K.set(I,pt))}function Q(I,tt,K){let ot=l.get(tt).get(I);c[ot]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,ot,K),c[ot]=K)}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},et=null,j={},d={},c={},u=new WeakMap,g=[],y=null,m=!1,p=null,b=null,T=null,v=null,A=null,w=null,_=null,E=new Wt(0,0,0),F=0,C=!1,P=null,B=null,k=null,R=null,z=null,Z.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:vt,disable:Ut,bindFramebuffer:ue,drawBuffers:Ot,useProgram:qt,setBlending:ut,setMaterial:lt,setFlipSided:Et,setCullFace:gt,setLineWidth:kt,setPolygonOffset:It,setScissorTest:Zt,activeTexture:Qt,bindTexture:ie,unbindTexture:N,compressedTexImage2D:ve,compressedTexImage3D:Xt,texImage2D:x,texImage3D:L,pixelStorei:W,getParameter:J,updateUBOMapping:$,uniformBlockBinding:Q,texStorage2D:O,texStorage3D:M,texSubImage2D:oe,texSubImage3D:dt,compressedTexSubImage2D:me,compressedTexSubImage3D:Lt,scissor:st,viewport:rt,reset:ct}}function Pg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap,f=new Set,d,u=new WeakMap,g=new Set,y=new FinalizationRegistry(M=>g.delete(M)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(M,x){return m?new OffscreenCanvas(M,x):Yi("canvas")}function b(M,x,L){let J=1,W=O(M);if((W.width>L||W.height>L)&&(J=L/Math.max(W.width,W.height)),J<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let st=Math.floor(J*W.width),rt=Math.floor(J*W.height);d===void 0&&(d=p(st,rt));let $=x?p(st,rt):d;return $.width=st,$.height=rt,$.getContext("2d").drawImage(M,0,0,st,rt),Bt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+st+"x"+rt+")."),$}else return"data"in M&&Bt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),M;return M}function T(M){return M.generateMipmaps}function v(M){i.generateMipmap(M)}function A(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(M,x,L,J,W,st=!1){if(M!==null){if(i[M]!==void 0)return i[M];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let rt;J&&(rt=t.get("EXT_texture_norm16"),rt||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===i.RED&&(L===i.FLOAT&&($=i.R32F),L===i.HALF_FLOAT&&($=i.R16F),L===i.UNSIGNED_BYTE&&($=i.R8),L===i.UNSIGNED_SHORT&&rt&&($=rt.R16_EXT),L===i.SHORT&&rt&&($=rt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&($=i.R8UI),L===i.UNSIGNED_SHORT&&($=i.R16UI),L===i.UNSIGNED_INT&&($=i.R32UI),L===i.BYTE&&($=i.R8I),L===i.SHORT&&($=i.R16I),L===i.INT&&($=i.R32I)),x===i.RG&&(L===i.FLOAT&&($=i.RG32F),L===i.HALF_FLOAT&&($=i.RG16F),L===i.UNSIGNED_BYTE&&($=i.RG8),L===i.UNSIGNED_SHORT&&rt&&($=rt.RG16_EXT),L===i.SHORT&&rt&&($=rt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&($=i.RG8UI),L===i.UNSIGNED_SHORT&&($=i.RG16UI),L===i.UNSIGNED_INT&&($=i.RG32UI),L===i.BYTE&&($=i.RG8I),L===i.SHORT&&($=i.RG16I),L===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&($=i.RGB8UI),L===i.UNSIGNED_SHORT&&($=i.RGB16UI),L===i.UNSIGNED_INT&&($=i.RGB32UI),L===i.BYTE&&($=i.RGB8I),L===i.SHORT&&($=i.RGB16I),L===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&($=i.RGBA8UI),L===i.UNSIGNED_SHORT&&($=i.RGBA16UI),L===i.UNSIGNED_INT&&($=i.RGBA32UI),L===i.BYTE&&($=i.RGBA8I),L===i.SHORT&&($=i.RGBA16I),L===i.INT&&($=i.RGBA32I)),x===i.RGB&&(L===i.UNSIGNED_SHORT&&rt&&($=rt.RGB16_EXT),L===i.SHORT&&rt&&($=rt.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),x===i.RGBA){let Q=st?Cs:ne.getTransfer(W);L===i.FLOAT&&($=i.RGBA32F),L===i.HALF_FLOAT&&($=i.RGBA16F),L===i.UNSIGNED_BYTE&&($=Q===ae?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&rt&&($=rt.RGBA16_EXT),L===i.SHORT&&rt&&($=rt.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(M,x){let L;return M?x===null||x===dn||x===Ai?L=i.DEPTH24_STENCIL8:x===rn?L=i.DEPTH32F_STENCIL8:x===ls&&(L=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===dn||x===Ai?L=i.DEPTH_COMPONENT24:x===rn?L=i.DEPTH_COMPONENT32F:x===ls&&(L=i.DEPTH_COMPONENT16),L}function E(M,x){return T(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ie&&M.minFilter!==Xe?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function F(M){let x=new WeakRef(M);n.get(M).__ref=x,g.add(x),y.register(M,x,x)}function C(M){let x=n.get(M).__ref;x!==void 0&&(g.delete(x),y.unregister(x))}function P(M){k(M.target)}function B(M){R(M.target)}function k(M){M.removeEventListener("dispose",P),C(M),Y(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&f.delete(M)}function R(M){M.removeEventListener("dispose",B),C(M),it(M)}function z(){for(let M of g){let x=M.deref();x!==void 0&&(x.isRenderTarget===!0?R(x):k(x))}g.clear(),f.clear()}function Y(M){let x=n.get(M);if(x.__webglInit===void 0)return;let L=M.source,J=u.get(L);if(J){let W=J[x.__cacheKey];W.usedTimes--,W.usedTimes===0&&V(M),Object.keys(J).length===0&&u.delete(L)}n.remove(M)}function V(M){let x=n.get(M);i.deleteTexture(x.__webglTexture);let L=M.source,J=u.get(L);delete J[x.__cacheKey],a.memory.textures--}function it(M){let x=n.get(M);x.__depthDisposeCallback&&x.__depthDisposeCallback();let L=M.depthTexture;if(L&&L.renderTarget===M&&k(L),M.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let st=0;st<x.__webglFramebuffer[W].length;st++)i.deleteFramebuffer(x.__webglFramebuffer[W][st]);else i.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)i.deleteFramebuffer(x.__webglFramebuffer[W]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let J=M.textures;for(let W=0,st=J.length;W<st;W++){let rt=n.get(J[W]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(J[W])}n.remove(M)}let X=0;function et(){X=0}function j(){return X}function bt(M){X=M}function At(){let M=X;return M>=s.maxTextures&&Bt("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,M}function Z(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.mipmapsAutoUpdate),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function xt(M,x){let L=n.get(M);if(M.isVideoTexture&&me(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&L.__version!==M.version){let J=M.image;if(J===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(L,M,x);return}}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+x)}function Tt(M,x){let L=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){lt(L,M,x);return}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+x)}function Nt(M,x){let L=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){lt(L,M,x);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+x)}function vt(M,x){let L=n.get(M);if(M.version>0&&L.__version!==M.version){Et(L,M,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+x)}let Ut={[na]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},ue={[Ie]:i.NEAREST,[Th]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[Na]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},Ot={[Ch]:i.NEVER,[Fl]:i.ALWAYS,[Ih]:i.LESS,[Nl]:i.LEQUAL,[Ph]:i.EQUAL,[Ul]:i.GEQUAL,[Lh]:i.GREATER,[Dh]:i.NOTEQUAL};function qt(M,x){if(x.type===rn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Xe||x.magFilter===Na||x.magFilter===rr||x.magFilter===kn||x.minFilter===Xe||x.minFilter===Na||x.minFilter===rr||x.minFilter===kn)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,Ut[x.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,Ut[x.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,Ut[x.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,ue[x.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Ot[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ie||x.minFilter!==rr&&x.minFilter!==kn||x.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Kt(M,x){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",P),F(x));let J=x.source,W=u.get(J);W===void 0&&(W={},u.set(J,W));let st=Z(x);if(st!==M.__cacheKey){W[st]===void 0&&(W[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,L=!0),W[st].usedTimes++;let rt=W[M.__cacheKey];rt!==void 0&&(W[M.__cacheKey].usedTimes--,rt.usedTimes===0&&V(x)),M.__cacheKey=st,M.__webglTexture=W[st].texture}return L}function nt(M,x,L){return Math.floor(Math.floor(M/L)/x)}function ut(M,x,L,J){let st=M.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,L,J,x.data);else{st.sort((I,tt)=>I.start-tt.start);let rt=0;for(let I=1;I<st.length;I++){let tt=st[rt],K=st[I],pt=tt.start+tt.count,ot=nt(K.start,x.width,4),ft=nt(tt.start,x.width,4);K.start<=pt+1&&ot===ft&&nt(K.start+K.count-1,x.width,4)===ot?tt.count=Math.max(tt.count,K.start+K.count-tt.start):(++rt,st[rt]=K)}st.length=rt+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let I=0,tt=st.length;I<tt;I++){let K=st[I],pt=Math.floor(K.start/4),ot=Math.ceil(K.count/4),ft=pt%x.width,Dt=Math.floor(pt/x.width),Jt=ot,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(i.TEXTURE_2D,0,ft,Dt,Jt,at,L,J,x.data)}M.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function lt(M,x,L){let J=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=i.TEXTURE_3D);let W=Kt(M,x),st=x.source;e.bindTexture(J,M.__webglTexture,i.TEXTURE0+L);let rt=n.get(st);if(st.version!==rt.__version||W===!0){if(e.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let at=ne.getPrimaries(ne.workingColorSpace),Ft=x.colorSpace===Vn?null:ne.getPrimaries(x.colorSpace),Yt=x.colorSpace===Vn||at===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=b(x.image,!1,s.maxTextureSize);Q=Lt(x,Q);let ct=r.convert(x.format,x.colorSpace),I=r.convert(x.type),tt=w(x.internalFormat,ct,I,x.normalized,x.colorSpace,x.isVideoTexture);qt(J,x);let K,pt=x.mipmaps,ot=x.isVideoTexture!==!0,ft=rt.__version===void 0||W===!0,Dt=st.dataReady,Jt=E(x,Q);if(x.isDepthTexture)tt=_(x.format===Hn,x.type),ft&&(ot?e.texStorage2D(i.TEXTURE_2D,1,tt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,tt,Q.width,Q.height,0,ct,I,null));else if(x.isDataTexture)if(pt.length>0){ot&&ft&&e.texStorage2D(i.TEXTURE_2D,Jt,tt,pt[0].width,pt[0].height);for(let at=0,Ft=pt.length;at<Ft;at++)K=pt[at],ot?Dt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,K.width,K.height,ct,I,K.data):e.texImage2D(i.TEXTURE_2D,at,tt,K.width,K.height,0,ct,I,K.data);x.generateMipmaps=!1}else ot?(ft&&e.texStorage2D(i.TEXTURE_2D,Jt,tt,Q.width,Q.height),Dt&&ut(x,Q,ct,I)):e.texImage2D(i.TEXTURE_2D,0,tt,Q.width,Q.height,0,ct,I,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ot&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Jt,tt,pt[0].width,pt[0].height,Q.depth);for(let at=0,Ft=pt.length;at<Ft;at++)if(K=pt[at],x.format!==pn)if(ct!==null)if(ot){if(Dt)if(x.layerUpdates.size>0){let Yt=Wl(K.width,K.height,x.format,x.type);for(let yt of x.layerUpdates){let le=K.data.subarray(yt*Yt/K.data.BYTES_PER_ELEMENT,(yt+1)*Yt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,yt,K.width,K.height,1,ct,le)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,K.width,K.height,Q.depth,ct,K.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,tt,K.width,K.height,Q.depth,0,K.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,K.width,K.height,Q.depth,ct,I,K.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,tt,K.width,K.height,Q.depth,0,ct,I,K.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ot&&ft&&e.texStorage2D(i.TEXTURE_2D,Jt,tt,pt[0].width,pt[0].height);for(let at=0,Ft=pt.length;at<Ft;at++)K=pt[at],x.format!==pn?ct!==null?ot?Dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,K.width,K.height,ct,K.data):e.compressedTexImage2D(i.TEXTURE_2D,at,tt,K.width,K.height,0,K.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Dt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,K.width,K.height,ct,I,K.data):e.texImage2D(i.TEXTURE_2D,at,tt,K.width,K.height,0,ct,I,K.data)}else if(x.isDataArrayTexture)if(ot){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Jt,tt,Q.width,Q.height,Q.depth),Dt)if(x.layerUpdates.size>0){let at=Wl(Q.width,Q.height,x.format,x.type);for(let Ft of x.layerUpdates){let Yt=Q.data.subarray(Ft*at/Q.data.BYTES_PER_ELEMENT,(Ft+1)*at/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ft,Q.width,Q.height,1,ct,I,Yt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ct,I,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,tt,Q.width,Q.height,Q.depth,0,ct,I,Q.data);else if(x.isData3DTexture)ot?(ft&&e.texStorage3D(i.TEXTURE_3D,Jt,tt,Q.width,Q.height,Q.depth),Dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ct,I,Q.data)):e.texImage3D(i.TEXTURE_3D,0,tt,Q.width,Q.height,Q.depth,0,ct,I,Q.data);else if(x.isFramebufferTexture){if(ft)if(ot)e.texStorage2D(i.TEXTURE_2D,Jt,tt,Q.width,Q.height);else{let at=Q.width,Ft=Q.height;for(let Yt=0;Yt<Jt;Yt++)e.texImage2D(i.TEXTURE_2D,Yt,tt,at,Ft,0,ct,I,null),at>>=1,Ft>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),Q.parentNode!==at){at.appendChild(Q),f.add(x),at.onpaint=Ft=>{let Yt=Ft.changedElements;for(let yt of f)Yt.includes(yt.image)&&(yt.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let Yt=i.RGBA,yt=i.RGBA,le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Yt,yt,le,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ot&&ft){let at=O(pt[0]);e.texStorage2D(i.TEXTURE_2D,Jt,tt,at.width,at.height)}for(let at=0,Ft=pt.length;at<Ft;at++)K=pt[at],ot?Dt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,ct,I,K):e.texImage2D(i.TEXTURE_2D,at,tt,ct,I,K);x.generateMipmaps=!1}else if(ot){if(ft){let at=O(Q);e.texStorage2D(i.TEXTURE_2D,Jt,tt,at.width,at.height)}Dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,I,Q)}else e.texImage2D(i.TEXTURE_2D,0,tt,ct,I,Q);T(x)&&x.mipmapsAutoUpdate===!0&&v(J),rt.__version=st.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function Et(M,x,L){if(x.image.length!==6)return;let J=Kt(M,x),W=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+L);let st=n.get(W);if(W.version!==st.__version||J===!0){e.activeTexture(i.TEXTURE0+L);let rt=ne.getPrimaries(ne.workingColorSpace),$=x.colorSpace===Vn?null:ne.getPrimaries(x.colorSpace),Q=x.colorSpace===Vn||rt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ct=x.isCompressedTexture||x.image[0].isCompressedTexture,I=x.image[0]&&x.image[0].isDataTexture,tt=[];for(let yt=0;yt<6;yt++)!ct&&!I?tt[yt]=b(x.image[yt],!0,s.maxCubemapSize):tt[yt]=I?x.image[yt].image:x.image[yt],tt[yt]=Lt(x,tt[yt]);let K=tt[0],pt=r.convert(x.format,x.colorSpace),ot=r.convert(x.type),ft=w(x.internalFormat,pt,ot,x.normalized,x.colorSpace),Dt=x.isVideoTexture!==!0,Jt=st.__version===void 0||J===!0,at=W.dataReady,Ft=E(x,K);qt(i.TEXTURE_CUBE_MAP,x);let Yt;if(x.isDepthTexture){if(ft=_(x.format===Hn,x.type),Jt)if(Dt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ft,K.width,K.height);else for(let yt=0;yt<6;yt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ft,K.width,K.height,0,pt,ot,null)}else if(ct){Dt&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ft,K.width,K.height);for(let yt=0;yt<6;yt++){Yt=tt[yt].mipmaps;for(let le=0;le<Yt.length;le++){let we=Yt[le];x.format!==pn?pt!==null?Dt?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,0,0,we.width,we.height,pt,we.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,ft,we.width,we.height,0,we.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,0,0,we.width,we.height,pt,ot,we.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,ft,we.width,we.height,0,pt,ot,we.data)}}}else{if(Yt=x.mipmaps,Dt&&Jt){Yt.length>0&&Ft++;let yt=O(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,ft,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(I){Dt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,tt[yt].width,tt[yt].height,pt,ot,tt[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ft,tt[yt].width,tt[yt].height,0,pt,ot,tt[yt].data);for(let le=0;le<Yt.length;le++){let Wn=Yt[le].image[yt].image;Dt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,0,0,Wn.width,Wn.height,pt,ot,Wn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,ft,Wn.width,Wn.height,0,pt,ot,Wn.data)}}else{Dt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,pt,ot,tt[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ft,pt,ot,tt[yt]);for(let le=0;le<Yt.length;le++){let we=Yt[le];Dt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,0,0,pt,ot,we.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,ft,pt,ot,we.image[yt])}}}T(x)&&x.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),st.__version=W.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function gt(M,x,L,J,W,st){let rt=r.convert(L.format,L.colorSpace),$=r.convert(L.type),Q=w(L.internalFormat,rt,$,L.normalized,L.colorSpace),ct=n.get(x),I=n.get(L);if(I.__renderTarget=x,!ct.__hasExternalTextures){let tt=Math.max(1,x.width>>st),K=Math.max(1,x.height>>st);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,st,Q,tt,K,x.depth,0,rt,$,null):e.texImage2D(W,st,Q,tt,K,0,rt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,W,I.__webglTexture,0,oe(x)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,W,I.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(M,x,L){if(i.bindRenderbuffer(i.RENDERBUFFER,M),x.depthBuffer){let J=x.depthTexture,W=J&&J.isDepthTexture?J.type:null,st=_(x.stencilBuffer,W),rt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe(x),st,x.width,x.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe(x),st,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,st,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,M)}else{let J=x.textures;for(let W=0;W<J.length;W++){let st=J[W],rt=r.convert(st.format,st.colorSpace),$=r.convert(st.type),Q=w(st.internalFormat,rt,$,st.normalized,st.colorSpace);dt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe(x),Q,x.width,x.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe(x),Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(M,x,L){let J=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(x.depthTexture);W.__renderTarget=x;let st=J?x.depthTexture.image[0]:x.depthTexture.image;(!W.__webglTexture||st.width!==x.width||st.height!==x.height)&&(st.width=x.width,st.height=x.height,x.depthTexture.needsUpdate=!0),J?vt(x.depthTexture,0):xt(x.depthTexture,0);let rt=W.__webglTexture,$=oe(x),Q=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,ct=x.depthTexture.format===Hn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===On)dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,Q,rt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ct,Q,rt,0);else if(x.depthTexture.format===Hn)dt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,Q,rt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ct,Q,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(M){let x=n.get(M),L=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){let J=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){let W=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",W)};J.addEventListener("dispose",W),x.__depthDisposeCallback=W}x.__boundDepthTexture=J}if(M.depthTexture&&!x.__autoAllocateDepthBuffer)if(L)for(let J=0;J<6;J++)It(x.__webglFramebuffer[J],M,J);else M.texture.mipmaps.length>0?It(x.__webglFramebuffer[0],M,0):It(x.__webglFramebuffer,M,0);else if(L){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=i.createRenderbuffer(),kt(x.__webglDepthbuffer[J],M,!1);else{let W=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,st)}}else if(M.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),kt(x.__webglDepthbuffer,M,!1);else{let W=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(M,x,L){let J=n.get(M);x!==void 0&&gt(J.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&Zt(M)}function ie(M){let x=M.texture,L=n.get(M),J=n.get(x);M.addEventListener("dispose",B),F(M);let W=M.textures,st=M.isWebGLCubeRenderTarget===!0,rt=W.length>1;if(rt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=x.version,a.memory.textures++),st){L.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps.length>0){L.__webglFramebuffer[$]=[];for(let Q=0;Q<x.mipmaps.length;Q++)L.__webglFramebuffer[$][Q]=i.createFramebuffer()}else L.__webglFramebuffer[$]=i.createFramebuffer()}else{if(x.mipmaps.length>0){L.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)L.__webglFramebuffer[$]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(rt)for(let $=0,Q=W.length;$<Q;$++){let ct=n.get(W[$]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&dt(M)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let $=0;$<W.length;$++){let Q=W[$];L.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[$]);let ct=r.convert(Q.format,Q.colorSpace),I=r.convert(Q.type),tt=w(Q.internalFormat,ct,I,Q.normalized,Q.colorSpace,M.isXRRenderTarget===!0),K=oe(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,tt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,L.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(L.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),qt(i.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)gt(L.__webglFramebuffer[$][Q],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else gt(L.__webglFramebuffer[$],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);T(x)?v(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(rt){for(let $=0,Q=W.length;$<Q;$++){let ct=W[$],I=n.get(ct),tt=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(tt=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,I.__webglTexture),qt(tt,ct),gt(L.__webglFramebuffer,M,ct,i.COLOR_ATTACHMENT0+$,tt,0),T(ct)&&v(tt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&($=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,J.__webglTexture),qt($,x),x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)gt(L.__webglFramebuffer[Q],M,x,i.COLOR_ATTACHMENT0,$,Q);else gt(L.__webglFramebuffer,M,x,i.COLOR_ATTACHMENT0,$,0);T(x)?v($):x.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}M.depthBuffer&&Zt(M)}function N(M){let x=M.textures;for(let L=0,J=x.length;L<J;L++){let W=x[L];if(T(W)&&W.mipmapsAutoUpdate===!0){let st=A(M),rt=n.get(W).__webglTexture;e.bindTexture(st,rt),v(st),e.unbindTexture()}}}let ve=[];function Xt(M){if(M.samples>0){if(dt(M)===!1){let x=M.textures,L=M.width,J=M.height,W=i.COLOR_BUFFER_BIT,st=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=n.get(M),$=x.length>1;if($)for(let ct=0;ct<x.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer),M.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let ct=0;ct<x.length;ct++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,rt.__webglColorRenderbuffer[ct]);let I=n.get(x[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,L,J,0,0,L,J,W,i.NEAREST),c===!0&&(ve.length=0,ve.push(i.COLOR_ATTACHMENT0+ct),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&ve.push(st),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ct=0;ct<x.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,rt.__webglColorRenderbuffer[ct]);let I=n.get(x[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,I,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&c){let x=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function oe(M){return Math.min(s.maxSamples,M.samples)}function dt(M){let x=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function me(M){let x=a.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function Lt(M,x){let L=M.colorSpace,J=M.format,W=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==Rs&&L!==Vn&&(ne.getTransfer(L)===ae?(J!==pn||W!==Ze)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",L)),x}function O(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=At,this.resetTextureUnits=et,this.getTextureUnits=j,this.setTextureUnits=bt,this.setTexture2D=xt,this.setTexture2DArray=Tt,this.setTexture3D=Nt,this.setTextureCube=vt,this.rebindTextures=Qt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=dt,this.dispose=z}function Lg(i,t){function e(n,s=Vn){let r,a=ne.getTransfer(s);if(n===Ze)return i.UNSIGNED_BYTE;if(n===Fa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Il)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rl)return i.BYTE;if(n===Cl)return i.SHORT;if(n===ls)return i.UNSIGNED_SHORT;if(n===Ua)return i.INT;if(n===dn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Dl)return i.RGB;if(n===pn)return i.RGBA;if(n===On)return i.DEPTH_COMPONENT;if(n===Hn)return i.DEPTH_STENCIL;if(n===Ba)return i.RED;if(n===za)return i.RED_INTEGER;if(n===ii)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===ka)return i.RGBA_INTEGER;if(n===ar||n===or||n===lr||n===cr)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Va||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===Ya||n===Za||n===Ja||n===$a||n===hr||n===Ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qa||n===Ya)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Za)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ja)return r.COMPRESSED_R11_EAC;if(n===$a)return r.COMPRESSED_SIGNED_R11_EAC;if(n===hr)return r.COMPRESSED_RG11_EAC;if(n===Ka)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qa||n===ja||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===to)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===no)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===io)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===so)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ro)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ao)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===co)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ho)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===po||n===mo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fo)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===go||n===_o||n===ur||n===xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ai?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
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

}`,sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Gs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new En({vertexShader:Dg,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rc=class extends xn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,g=null,y=typeof XRWebGLBinding<"u",m=new sc,p={},b=e.getContextAttributes(),T=null,v=null,A=[],w=[],_=new ht,E=null,F=null,C=new Ne;C.viewport=new ge;let P=new Ne;P.viewport=new ge;let B=[C,P],k=new Ca,R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let xt=A[Z];return xt===void 0&&(xt=new $i,A[Z]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(Z){let xt=A[Z];return xt===void 0&&(xt=new $i,A[Z]=xt),xt.getGripSpace()},this.getHand=function(Z){let xt=A[Z];return xt===void 0&&(xt=new $i,A[Z]=xt),xt.getHandSpace()};function Y(Z){let xt=w.indexOf(Z.inputSource);if(xt===-1)return;let Tt=A[xt];Tt!==void 0&&(Tt.update(Z.inputSource,Z.frame,l||a),Tt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",it);for(let Z=0;Z<A.length;Z++){let xt=w[Z];xt!==null&&(w[Z]=null,A[Z].disconnect(xt))}R=null,z=null,m.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(T),u=null,d=null,f=null,s=null,v=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(_.width,_.height,!1),F!==null){let Z=F.camera;Z.fov=F.fov,Z.zoom=F.zoom,Z.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",V),s.addEventListener("inputsourceschange",it),b.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Nt=null,vt=null;b.depth&&(vt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=b.stencil?Hn:On,Nt=b.stencil?Ai:dn);let Ut={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Qe(d.textureWidth,d.textureHeight,{format:pn,type:Ze,depthTexture:new zn(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Tt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new Qe(u.framebufferWidth,u.framebufferHeight,{format:pn,type:Ze,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),At.setContext(s),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(Z){for(let xt=0;xt<Z.removed.length;xt++){let Tt=Z.removed[xt],Nt=w.indexOf(Tt);Nt>=0&&(w[Nt]=null,A[Nt].disconnect(Tt))}for(let xt=0;xt<Z.added.length;xt++){let Tt=Z.added[xt],Nt=w.indexOf(Tt);if(Nt===-1){for(let Ut=0;Ut<A.length;Ut++)if(Ut>=w.length){w.push(Tt),Nt=Ut;break}else if(w[Ut]===null){w[Ut]=Tt,Nt=Ut;break}if(Nt===-1)break}let vt=A[Nt];vt&&vt.connect(Tt)}}function X(Z,xt){xt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(xt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let xt=Z.near,Tt=Z.far;m.texture!==null&&(m.depthNear>0&&(xt=m.depthNear),m.depthFar>0&&(Tt=m.depthFar)),k.near=P.near=C.near=xt,k.far=P.far=C.far=Tt,(R!==k.near||z!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),R=k.near,z=k.far),k.layers.mask=Z.layers.mask|6,C.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;let Nt=Z.parent,vt=k.cameras;X(k,Nt);for(let Ut=0;Ut<vt.length;Ut++)X(vt[Ut],Nt);k.projectionMatrix.copy(C.projectionMatrix),k.projectionMatrixInverse.copy(C.projectionMatrixInverse),F===null&&Z.isPerspectiveCamera&&(F={camera:Z,fov:Z.fov,zoom:Z.zoom}),et(Z,k,Nt)};function et(Z,xt,Tt){Tt===null?Z.matrix.copy(xt.matrixWorld):(Z.matrix.copy(Tt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(xt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(xt.projectionMatrix),Z.projectionMatrixInverse.copy(xt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ra*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Z){return p[Z]};let j=null;function bt(Z,xt){if(h=xt.getViewerPose(l||a),g=xt,h!==null){let Tt=h.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let Nt=!1;Tt.length!==k.cameras.length&&(k.cameras.length=0,Nt=!0);for(let Ot=0;Ot<Tt.length;Ot++){let qt=Tt[Ot],Kt=null;if(u!==null)Kt=u.getViewport(qt);else{let ut=f.getViewSubImage(d,qt);Kt=ut.viewport,Ot===0&&(t.setRenderTargetTextures(v,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(v))}let nt=B[Ot];nt===void 0&&(nt=new Ne,nt.layers.enable(Ot),nt.viewport=new ge,B[Ot]=nt),nt.matrix.fromArray(qt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(qt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Ot===0&&(k.matrix.copy(nt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Nt===!0&&k.cameras.push(nt)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Ot=f.getDepthInformation(Tt[0]);Ot&&Ot.isValid&&Ot.texture&&m.init(Ot,s.renderState)}if(vt&&vt.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let Ot=0;Ot<Tt.length;Ot++){let qt=Tt[Ot].camera;if(qt){let Kt=p[qt];Kt||(Kt=new Gs,p[qt]=Kt);let nt=f.getCameraImage(qt);Kt.sourceTexture=nt}}}}for(let Tt=0;Tt<A.length;Tt++){let Nt=w[Tt],vt=A[Tt];Nt!==null&&vt!==void 0&&vt.update(Nt,xt,l||a)}j&&j(Z,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),g=null}let At=new mu;At.setAnimationLoop(bt),this.setAnimationLoop=function(Z){j=Z},this.dispose=function(){}}},Ug=new ce,Tu=new Ht;Tu.set(-1,0,0,0,1,0,0,0,1);function Fg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,kl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,T,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),T=b.envMap,v=b.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Tu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,b){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Og(i,t,e,n){let s={},r={};function a(b,T){let v=T.program;n.uniformBlockBinding(b,v,s[b.id])}function o(b,T){let v=s[b.id];v===void 0&&(g(b),v=c(b),s[b.id]=v,b.addEventListener("dispose",m));let A=T.program;n.updateUBOMapping(b,A);let w=t.render.frame;r[b.id]!==w&&(l(b),r[b.id]=w)}function c(b){let T=i.createBuffer(),v=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,v,A),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function l(b){let T=s[b.id],v=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,_=v.length;w<_;w++){let E=v[w];if(Array.isArray(E))for(let F=0,C=E.length;F<C;F++)h(E[F],w,F,A);else h(E,w,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,T,v,A){if(d(b,T,v,A)===!0){let w=b.__offset,_=b.value;if(Array.isArray(_)){let E=0;for(let F=0;F<_.length;F++){let C=_[F],P=y(C,!0);f(C,b.__data,E),E+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,b.__data)}}function f(b,T,v){typeof b=="number"||typeof b=="boolean"?T[v]=b:b.isMatrix3?(T[v]=b.elements[0],T[v+1]=b.elements[1],T[v+2]=b.elements[2],T[v+3]=0,T[v+4]=b.elements[3],T[v+5]=b.elements[4],T[v+6]=b.elements[5],T[v+7]=0,T[v+8]=b.elements[6],T[v+9]=b.elements[7],T[v+10]=b.elements[8],T[v+11]=0):ArrayBuffer.isView(b)?T.set(b.subarray(0,T.length-v),v):b.toArray(T,v)}function d(b,T,v,A){let w=b.value,_=T+"_"+v;if(Array.isArray(w)){A[_]===void 0&&(A[_]=[]);let E=A[_],F=!1;for(let C=0;C<w.length;C++)u(w[C],E,C)===!0&&(F=!0);return F}return u(w,A,_)}function u(b,T,v){if(T[v]===void 0)return typeof b=="number"||typeof b=="boolean"?T[v]=b:ArrayBuffer.isView(b)?T[v]=b.slice():T[v]=b.clone(),!0;{let A=T[v];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return T[v]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(A.equals(b)===!1)return A.copy(b),!0}}return!1}function g(b){let T=b.uniforms,v=0,A=16;for(let _=0,E=T.length;_<E;_++){let F=Array.isArray(T[_])?T[_]:[T[_]];for(let C=0,P=F.length;C<P;C++){let B=F[C],k=Array.isArray(B.value)?B.value:[B.value],R=Array.isArray(T[_])||Array.isArray(B.value),z=v;for(let V=0,it=k.length;V<it;V++){let X=k[V],et=y(X,R),j=v%A,bt=j%et.boundary,At=j+bt;v+=bt,At!==0&&A-At<et.storage&&(v+=A-At),V===0&&(z=v),v+=et.storage}let Y=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Y((v-z)/Float32Array.BYTES_PER_ELEMENT),B.__offset=z}}let w=v%A;return w>0&&(v+=A-w),b.__size=v,b.__cache={},this}function y(b,T){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=16,v.storage=48):b.isMatrix4?(v.boundary=16,v.storage=64):b.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",b),T===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(b){let T=b.target;T.removeEventListener("dispose",m),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:p}}var Bg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),An=null;function zg(){return An===null&&(An=new _i(Bg,16,16,ii,fn),An.name="DFG_LUT",An.minFilter=Xe,An.magFilter=Xe,An.wrapS=_n,An.wrapT=_n,An.generateMipmaps=!1,An.needsUpdate=!0),An}var Mo=class{constructor(t={}){let{canvas:e=Uh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Ze}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=u,m=new Set([ka,Ga,za]),p=new Set([Ze,dn,ls,Ai,Fa,Oa]),b=new Uint32Array(4),T=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},A=null,w=null,_=[],E=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,B=null,k=null,R=null,z=null;this._outputColorSpace=Ge;let Y=0,V=0,it=null,X=-1,et=null,j=new ge,bt=new ge,At=null,Z=new Wt(0),xt=0,Tt=e.width,Nt=e.height,vt=1,Ut=null,ue=null,Ot=new ge(0,0,Tt,Nt),qt=new ge(0,0,Tt,Nt),Kt=!1,nt=new Qn,ut=new ca,lt=!1,Et=!1,gt=new ce,kt=new U,It=new ge,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qt=!1;function ie(){return it===null?vt:1}let N=n;function ve(S,D){return e.getContext(S,D)}let Xt,oe,dt,me,Lt,O,M,x,L,J,W,st,rt,$,Q,ct,I,tt,K,pt,ot,ft,Dt;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),N===null){let D="webgl2";if(N=ve(D,S),N===null)throw ve(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(S){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),zt("WebGLRenderer: "+S.message),S}function Jt(){Xt=new $m(N),Xt.init(),ot=new Lg(N,Xt),oe=new zm(N,Xt,t,ot),dt=new Ig(N,Xt),oe.reversedDepthBuffer&&d&&dt.buffers.depth.setReversed(!0),k=N.createFramebuffer(),R=N.createFramebuffer(),z=N.createFramebuffer(),me=new jm(N),Lt=new gg,O=new Pg(N,Xt,dt,Lt,oe,ot,me),M=new Jm(C),x=new tf(N),ft=new Om(N,x),L=new Km(N,x,me,ft),J=new e0(N,L,x,ft,me),tt=new t0(N,oe,O),Q=new Gm(Lt),W=new mg(C,M,Xt,oe,ft,Q),st=new Fg(C,Lt),rt=new xg,$=new Eg(Xt),I=new Fm(C,M,dt,J,g,c),ct=new Cg(C,J,oe),Dt=new Og(N,me,oe,dt),K=new Bm(N,Xt,me),pt=new Qm(N,Xt,me),me.programs=W.programs,C.capabilities=oe,C.extensions=Xt,C.properties=Lt,C.renderLists=rt,C.shadowMap=ct,C.state=dt,C.info=me}y!==Ze&&(F=new i0(y,e.width,e.height,o,s,r));let at=new rc(C,N);this.xr=at,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=Xt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Xt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(S){S!==void 0&&(vt=S,this.setSize(Tt,Nt,!1))},this.getSize=function(S){return S.set(Tt,Nt)},this.setSize=function(S,D,q=!0){if(at.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=S,Nt=D,e.width=Math.floor(S*vt),e.height=Math.floor(D*vt),q===!0&&(e.style.width=S+"px",e.style.height=D+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(Tt*vt,Nt*vt).floor()},this.setDrawingBufferSize=function(S,D,q){Tt=S,Nt=D,vt=q,e.width=Math.floor(S*q),e.height=Math.floor(D*q),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(y===Ze){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(j)},this.getViewport=function(S){return S.copy(Ot)},this.setViewport=function(S,D,q,G){S.isVector4?Ot.set(S.x,S.y,S.z,S.w):Ot.set(S,D,q,G),dt.viewport(j.copy(Ot).multiplyScalar(ie()).round())},this.getScissor=function(S){return S.copy(qt)},this.setScissor=function(S,D,q,G){S.isVector4?qt.set(S.x,S.y,S.z,S.w):qt.set(S,D,q,G),dt.scissor(bt.copy(qt).multiplyScalar(ie()).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(S){dt.setScissorTest(Kt=S)},this.setOpaqueSort=function(S){Ut=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,q=!0){let G=0;if(S){let H=!1;if(it!==null){let _t=it.texture.format;H=m.has(_t)}if(H){let _t=it.texture.type,wt=p.has(_t),mt=I.getClearColor(),St=I.getClearAlpha(),Pt=mt.r,Vt=mt.g,te=mt.b;wt?(b[0]=Pt,b[1]=Vt,b[2]=te,b[3]=St,N.clearBufferuiv(N.COLOR,0,b)):(T[0]=Pt,T[1]=Vt,T[2]=te,T[3]=St,N.clearBufferiv(N.COLOR,0,T))}else G|=N.COLOR_BUFFER_BIT}D&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),B=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),I.dispose(),rt.dispose(),$.dispose(),O.dispose(),Lt.dispose(),M.dispose(),J.dispose(),L.dispose(),ft.dispose(),Dt.dispose(),W.dispose(),at.dispose(),at.removeEventListener("sessionstart",dc),at.removeEventListener("sessionend",fc),li.stop()};function Ft(S){S.preventDefault(),Bl("WebGLRenderer: Context Lost."),P=!0}function Yt(){Bl("WebGLRenderer: Context Restored."),P=!1;let S=me.autoReset,D=ct.enabled,q=ct.autoUpdate,G=ct.needsUpdate,H=ct.type;Jt(),me.autoReset=S,ct.enabled=D,ct.autoUpdate=q,ct.needsUpdate=G,ct.type=H}function yt(S){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function le(S){let D=S.target;D.removeEventListener("dispose",le),we(D)}function we(S){Wn(S),Lt.remove(S)}function Wn(S){let D=Lt.get(S).programs;D!==void 0&&(D.forEach(function(q){W.releaseProgram(q)}),S.isShaderMaterial&&W.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,q,G,H,_t){D===null&&(D=Zt);let wt=H.isMesh&&H.matrixWorld.determinantAffine()<0,mt=Nu(S,D,q,G,H);dt.setMaterial(G,wt);let St=q.index,Pt=1;if(G.wireframe===!0){if(St=L.getWireframeAttribute(q),St===void 0)return;Pt=2}let Vt=q.drawRange,te=q.attributes.position,Rt=Vt.start*Pt,ee=(Vt.start+Vt.count)*Pt;_t!==null&&(Rt=Math.max(Rt,_t.start*Pt),ee=Math.min(ee,(_t.start+_t.count)*Pt)),St!==null?(Rt=Math.max(Rt,0),ee=Math.min(ee,St.count)):te!=null&&(Rt=Math.max(Rt,0),ee=Math.min(ee,te.count));let Se=ee-Rt;if(Se<0||Se===1/0)return;ft.setup(H,G,mt,q,St);let fe,de=K;if(St!==null&&(fe=x.get(St),de=pt,de.setIndex(fe)),H.isMesh)G.wireframe===!0?(dt.setLineWidth(G.wireframeLinewidth*ie()),de.setMode(N.LINES)):de.setMode(N.TRIANGLES);else if(H.isLine){let Fe=G.linewidth;Fe===void 0&&(Fe=1),dt.setLineWidth(Fe*ie()),H.isLineSegments?de.setMode(N.LINES):H.isLineLoop?de.setMode(N.LINE_LOOP):de.setMode(N.LINE_STRIP)}else H.isPoints?de.setMode(N.POINTS):H.isSprite&&de.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(Xt.get("WEBGL_multi_draw"))de.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Fe=H._multiDrawStarts,Ct=H._multiDrawCounts,We=H._multiDrawCount,re=St?x.get(St).bytesPerElement:1,ci=Lt.get(G).currentProgram.getUniforms();for(let Oe=0;Oe<We;Oe++)ci.setValue(N,"_gl_DrawID",Oe),de.render(Fe[Oe]/re,Ct[Oe])}else if(H.isInstancedMesh)de.renderInstances(Rt,Se,H.count);else if(q.isInstancedBufferGeometry){let Fe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ct=Math.min(q.instanceCount,Fe);de.renderInstances(Rt,Se,Ct)}else de.render(Rt,Se)};function uc(S,D,q,G){B!==null&&S.isNodeMaterial&&B.setObject(G,S),lt===!0&&Q.setState(S,q,!1),S.transparent===!0&&S.side===Ye&&S.forceSinglePass===!1?(S.side=Ue,S.needsUpdate=!0,gs(S,D,G),S.side=ni,S.needsUpdate=!0,gs(S,D,G),S.side=Ye):gs(S,D,G)}this.compile=function(S,D,q=null){q===null&&(q=S),B!==null&&B.renderStart(S,D,q),w=$.get(q),w.init(D),E.push(w),q.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),S!==q&&S.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),Et=this.localClippingEnabled,lt=Q.init(this.clippingPlanes,Et),lt===!0&&Q.setGlobalState(this.clippingPlanes,D),B!==null&&ct.render(w.state.shadowsArray,q,D);let G=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let _t=H.material;if(_t)if(Array.isArray(_t))for(let wt=0;wt<_t.length;wt++){let mt=_t[wt];uc(mt,q,D,H),G.add(mt)}else uc(_t,q,D,H),G.add(_t)}),w=E.pop(),B!==null&&B.renderEnd(),G},this.compileAsync=function(S,D,q=null){let G=this.compile(S,D,q);return new Promise(H=>{function _t(){if(G.forEach(function(wt){let St=Lt.get(wt).currentProgram;(St===void 0||St.isReady())&&G.delete(wt)}),G.size===0){H(S);return}setTimeout(_t,10)}Xt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Io=null;function Lu(S){Io&&Io(S)}function dc(){li.stop()}function fc(){li.start()}let li=new mu;li.setAnimationLoop(Lu),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(S){Io=S,at.setAnimationLoop(S),S===null?li.stop():li.start()},at.addEventListener("sessionstart",dc),at.addEventListener("sessionend",fc),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;B!==null&&B.renderStart(S,D);let q=at.enabled===!0&&at.isPresenting===!0,G=F!==null&&(it===null||q)&&F.begin(C,it);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(D),D=at.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,D,it),w=$.get(S,E.length),w.init(D),w.state.textureUnits=O.getTextureUnits(),E.push(w),gt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?ut.setFromArrayCamera(D):nt.setFromProjectionMatrix(gt,nn,D.reversedDepth),Et=this.localClippingEnabled,lt=Q.init(this.clippingPlanes,Et),A=rt.get(S,_.length),A.init(),_.push(A),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let wt=C.xr.getDepthSensingMesh();wt!==null&&Po(wt,D,-1/0,C.sortObjects)}Po(S,D,0,C.sortObjects),A.finish(),B!==null&&B.updateLights(w.state.lightsArray),C.sortObjects===!0&&A.sort(Ut,ue),Qt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Qt&&I.addToRenderList(A,S),this.info.autoReset===!0&&this.info.reset(),lt===!0&&Q.beginShadows();let H=w.state.shadowsArray;if(ct.render(H,S,D),lt===!0&&Q.endShadows(),(G&&F.hasRenderPass())===!1){let wt=A.opaque,mt=A.transmissive;if(w.setupLights(),D.isArrayCamera){let St=D.cameras;if(mt.length>0)for(let Pt=0,Vt=St.length;Pt<Vt;Pt++){let te=St[Pt];mc(wt,mt,S,te)}Qt&&I.render(S);for(let Pt=0,Vt=St.length;Pt<Vt;Pt++){let te=St[Pt];pc(A,S,te,te.viewport)}}else mt.length>0&&mc(wt,mt,S,D),Qt&&I.render(S),pc(A,S,D)}it!==null&&V===0&&(O.updateMultisampleRenderTarget(it),O.updateRenderTargetMipmap(it)),G&&F.end(C),S.isScene===!0&&S.onAfterRender(C,S,D),ft.resetDefaultState(),X=-1,et=null,E.pop(),E.length>0?(w=E[E.length-1],O.setTextureUnits(w.state.textureUnits),lt===!0&&Q.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,B!==null&&B.renderEnd()};function Po(S,D,q,G){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){let wt=D.isArrayCamera?ut:nt;if(!S.frustumCulled||S.intersectsFrustum(wt)){G&&It.setFromMatrixPosition(S.matrixWorld).applyMatrix4(gt);let mt=J.update(S),St=S.material;St.visible&&A.push(S,mt,St,q,It.z,null,D)}}else if(S.isMesh||S.isLine||S.isPoints){let wt=D.isArrayCamera?ut:nt;if(!S.frustumCulled||S.intersectsFrustum(wt)){let mt=J.update(S),St=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),It.copy(S.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),It.copy(mt.boundingSphere.center)),It.applyMatrix4(S.matrixWorld).applyMatrix4(gt)),Array.isArray(St)){let Pt=mt.groups;for(let Vt=0,te=Pt.length;Vt<te;Vt++){let Rt=Pt[Vt],ee=St[Rt.materialIndex];ee&&ee.visible&&A.push(S,mt,ee,q,It.z,Rt,D)}}else St.visible&&A.push(S,mt,St,q,It.z,null,D)}}}let _t=S.children;for(let wt=0,mt=_t.length;wt<mt;wt++)Po(_t[wt],D,q,G)}function pc(S,D,q,G){let{opaque:H,transmissive:_t,transparent:wt}=S;w.setupLightsView(q),lt===!0&&Q.setGlobalState(C.clippingPlanes,q),G&&dt.viewport(j.copy(G)),H.length>0&&vr(H,D,q),_t.length>0&&vr(_t,D,q),wt.length>0&&vr(wt,D,q),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function mc(S,D,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let Rt=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new Qe(1,1,{generateMipmaps:!0,type:Rt?fn:Ze,minFilter:kn,samples:Math.max(4,oe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let _t=w.state.transmissionRenderTarget[G.id],wt=G.viewport||j;_t.setSize(wt.z*C.transmissionResolutionScale,wt.w*C.transmissionResolutionScale);let mt=C.getRenderTarget(),St=C.getActiveCubeFace(),Pt=C.getActiveMipmapLevel();C.setRenderTarget(_t),C.getClearColor(Z),xt=C.getClearAlpha(),xt<1&&C.setClearColor(16777215,.5),C.clear(),Qt&&I.render(q);let Vt=C.toneMapping;C.toneMapping=Tn;let te=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),lt===!0&&Q.setGlobalState(C.clippingPlanes,G),vr(S,q,G),O.updateMultisampleRenderTarget(_t),O.updateRenderTargetMipmap(_t),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ee=0,Se=D.length;ee<Se;ee++){let fe=D[ee],{object:de,geometry:Fe,material:Ct,group:We}=fe;if(Ct.side===Ye&&de.layers.test(G.layers)){let re=Ct.side;Ct.side=Ue,Ct.needsUpdate=!0,gc(de,q,G,Fe,Ct,We),Ct.side=re,Ct.needsUpdate=!0,Rt=!0}}Rt===!0&&(O.updateMultisampleRenderTarget(_t),O.updateRenderTargetMipmap(_t))}C.setRenderTarget(mt,St,Pt),C.setClearColor(Z,xt),te!==void 0&&(G.viewport=te),C.toneMapping=Vt}function vr(S,D,q){let G=D.isScene===!0?D.overrideMaterial:null;for(let H=0,_t=S.length;H<_t;H++){let wt=S[H],{object:mt,geometry:St,group:Pt}=wt,Vt=wt.material;Vt.allowOverride===!0&&G!==null&&(Vt=G),mt.layers.test(q.layers)&&gc(mt,D,q,St,Vt,Pt)}}function gc(S,D,q,G,H,_t){B!==null&&H.isNodeMaterial&&B.setObject(S,H),S.onBeforeRender(C,D,q,G,H,_t),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(C,D,q,G,S,_t),H.transparent===!0&&H.side===Ye&&H.forceSinglePass===!1?(H.side=Ue,H.needsUpdate=!0,C.renderBufferDirect(q,D,G,H,S,_t),H.side=ni,H.needsUpdate=!0,C.renderBufferDirect(q,D,G,H,S,_t),H.side=Ye):C.renderBufferDirect(q,D,G,H,S,_t),S.onAfterRender(C,D,q,G,H,_t)}function _c(S){let D=0;for(let q of S)q.texture!==null&&D++;return D}function gs(S,D,q){D.isScene!==!0&&(D=Zt);let G=Lt.get(S),H=w.state.lights,_t=w.state.shadowsArray,wt=H.state.version,mt=W.getParameters(S,H.state,_t,D,q,w.state.lightProbeGridArray),St=W.getProgramCacheKey(mt),Pt=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,G.fog=D.fog;let Vt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=M.get(S.envMap||G.environment,Vt),G.envMapRotation=G.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Pt===void 0&&(S.addEventListener("dispose",le),Pt=new Map,G.programs=Pt,G.programVariants=new Map);let te=Pt.get(St);if(te!==void 0){if(G.currentProgram===te&&G.lightsStateVersion===wt)return vc(S,mt),te}else mt.uniforms=W.getUniforms(S),B!==null&&S.isNodeMaterial&&B.build(S,q,mt),S.onBeforeCompile(mt,C),te=W.acquireProgram(mt,St),Pt.set(St,te),G.uniforms=mt.uniforms;let Rt=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=Q.uniform),vc(S,mt),G.needsLights=Fu(S),G.lightsStateVersion=wt,G.needsLights&&(Rt.ambientLightColor.value=H.state.ambient,Rt.lightProbe.value=H.state.probe,Rt.sunLights.value=H.state.sun,Rt.sunLightShadows.value=H.state.sunShadow,Rt.directionalLights.value=H.state.directional,Rt.directionalLightShadows.value=H.state.directionalShadow,Rt.spotLights.value=H.state.spot,Rt.spotLightShadows.value=H.state.spotShadow,Rt.rectAreaLights.value=H.state.rectArea,Rt.ltc_1.value=H.state.rectAreaLTC1,Rt.ltc_2.value=H.state.rectAreaLTC2,Rt.pointLights.value=H.state.point,Rt.pointLightShadows.value=H.state.pointShadow,Rt.hemisphereLights.value=H.state.hemi,Rt.sunShadowMatrix.value=H.state.sunShadowMatrix,Rt.sunShadowCascade.value=H.state.sunShadowCascade,Rt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Rt.spotLightMatrix.value=H.state.spotLightMatrix,Rt.spotLightMap.value=H.state.spotLightMap,Rt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.numLightProbeGrids=_c(w.state.lightProbeGridArray),G.currentProgram=te,G.uniformsList=null,te}function Du(S,D,q,G,H){let _t=Lt.get(S),wt=_t.currentProgram.id+","+G+","+H,mt=_t.programVariants.get(wt);return mt===void 0?(mt=gs(S,D,q),_t.programVariants.set(wt,mt)):(_t.currentProgram=mt,_t.uniformsList=null,_t.outputColorSpace=G,_t.toneMapping=H),mt}function xc(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=hs.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function vc(S,D){let q=Lt.get(S);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function Nu(S,D,q,G,H){D.isScene!==!0&&(D=Zt),O.resetTextureUnits();let _t=D.fog,wt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?D.environment:null,mt=it===null?C.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ne.workingColorSpace,St=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Pt=M.get(G.envMap||wt,St),Vt=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,te=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Rt=!!q.morphAttributes.position,ee=!!q.morphAttributes.normal,Se=!!q.morphAttributes.color,fe=Tn;G.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(fe=C.toneMapping);let de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Fe=de!==void 0?de.length:0,Ct=Lt.get(G),We=w.state.lights;if(lt===!0&&(Et===!0||S!==et)){let _e=S===et&&G.id===X;Q.setState(G,S,_e)}let re=!1,ci=!1;G.version===Ct.__version?Ct.needsLights&&Ct.lightsStateVersion!==We.state.version||H.isBatchedMesh&&Ct.batching===!1||!H.isBatchedMesh&&Ct.batching===!0||H.isBatchedMesh&&Ct.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Ct.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Ct.instancing===!1||!H.isInstancedMesh&&Ct.instancing===!0||H.isSkinnedMesh&&Ct.skinning===!1||!H.isSkinnedMesh&&Ct.skinning===!0||H.isInstancedMesh&&Ct.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ct.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ct.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ct.instancingMorph===!1&&H.morphTexture!==null||Ct.envMap!==Pt||G.fog===!0&&Ct.fog!==_t||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Q.numPlanes||Ct.numIntersection!==Q.numIntersection)||Ct.vertexAlphas!==Vt||Ct.vertexTangents!==te||Ct.morphTargets!==Rt||Ct.morphNormals!==ee||Ct.morphColors!==Se||Ct.morphTargetsCount!==Fe||Ct.numLightProbeGrids!==_c(w.state.lightProbeGridArray)?re=!0:(Ct.outputColorSpace!==mt||Ct.toneMapping!==fe)&&(ci=!0):(re=!0,Ct.__version=G.version);let Oe=Ct.currentProgram;(re===!0||ci===!0)&&(Oe=ci===!0?Du(G,D,H,mt,fe):gs(G,D,H),B&&G.isNodeMaterial&&B.onUpdateProgram(G,Oe,Ct));let yr=!1,Xn=!1,hi=!1,se=Oe.getUniforms(),De=Ct.uniforms;if(dt.useProgram(Oe.program)&&(yr=!0,Xn=!0,hi=!0),G.id!==X&&(X=G.id,Xn=!0),yr||et!==S){dt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),se.setValue(N,"projectionMatrix",S.projectionMatrix),se.setValue(N,"viewMatrix",S.matrixWorldInverse);let Re=se.map.cameraPosition;Re!==void 0&&Re.setValue(N,kt.setFromMatrixPosition(S.matrixWorld)),oe.logarithmicDepthBuffer&&se.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&se.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),et!==S&&(et=S,Xn=!0,hi=!0)}if(Ct.needsLights&&(We.state.sunShadowMap.length>0&&se.setValue(N,"sunShadowMap",We.state.sunShadowMap,O),We.state.directionalShadowMap.length>0&&se.setValue(N,"directionalShadowMap",We.state.directionalShadowMap,O),We.state.spotShadowMap.length>0&&se.setValue(N,"spotShadowMap",We.state.spotShadowMap,O),We.state.pointShadowMap.length>0&&se.setValue(N,"pointShadowMap",We.state.pointShadowMap,O)),H.isSkinnedMesh){se.setOptional(N,H,"bindMatrix"),se.setOptional(N,H,"bindMatrixInverse");let _e=H.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),se.setValue(N,"boneTexture",_e.boneTexture,O))}H.isBatchedMesh&&(se.setOptional(N,H,"batchingTexture"),se.setValue(N,"batchingTexture",H._matricesTexture,O),se.setOptional(N,H,"batchingIdTexture"),se.setValue(N,"batchingIdTexture",H._indirectTexture,O),se.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&se.setValue(N,"batchingColorTexture",H._colorsTexture,O));let on=q.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&tt.update(H,q,Oe),(Xn||Ct.receiveShadow!==H.receiveShadow)&&(Ct.receiveShadow=H.receiveShadow,se.setValue(N,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&D.environment!==null&&(De.envMapIntensity.value=D.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=zg()),Xn){if(se.setValue(N,"toneMappingExposure",C.toneMappingExposure),Ct.needsLights&&Uu(De,hi),_t&&G.fog===!0&&st.refreshFogUniforms(De,_t),st.refreshMaterialUniforms(De,G,vt,Nt,w.state.transmissionRenderTarget[S.id]),Ct.needsLights&&Ct.numLightProbeGrids>0){let _e=v,Re=0;for(let In of w.state.lightProbeGridArray)In.texture!==null&&(_e.textures[Re]=In.texture,_e.min[Re]=In.boundingBox.min,_e.max[Re]=In.boundingBox.max,_e.resolution[Re]=In.resolution,Re++);for(let In in _e)_e[In].length=Re;De.probesSH.value=_e.textures,De.probesMin.value=_e.min,De.probesMax.value=_e.max,De.probesResolution.value=_e.resolution}hs.upload(N,xc(Ct),De,O)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(hs.upload(N,xc(Ct),De,O),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&se.setValue(N,"center",H.center),se.setValue(N,"modelViewMatrix",H.modelViewMatrix),se.setValue(N,"normalMatrix",H.normalMatrix),se.setValue(N,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){let _e=G.uniformsGroups;for(let Re=0,In=_e.length;Re<In;Re++){let Mc=_e[Re];Dt.update(Mc,Oe),Dt.bind(Mc,Oe)}}return Oe}function Uu(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Fu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(S,D,q){let G=Lt.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Lt.get(S.texture).__webglTexture=D,Lt.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let q=Lt.get(S);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,q=0){it=S,Y=D,V=q;let G=null,H=!1,_t=!1;if(S){let mt=Lt.get(S);if(mt.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(N.FRAMEBUFFER,mt.__webglFramebuffer),j.copy(S.viewport),bt.copy(S.scissor),At=S.scissorTest,dt.viewport(j),dt.scissor(bt),dt.setScissorTest(At),X=-1;return}else if(mt.__webglFramebuffer===void 0)O.setupRenderTarget(S);else if(mt.__hasExternalTextures)O.rebindTextures(S,Lt.get(S.texture).__webglTexture,Lt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Vt=S.depthTexture;if(mt.__boundDepthTexture!==Vt){if(Vt!==null&&Lt.has(Vt)&&(S.width!==Vt.image.width||S.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(S)}}let St=S.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(_t=!0);let Pt=Lt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Pt[D])?G=Pt[D][q]:G=Pt[D],H=!0):S.samples>0&&O.useMultisampledRTT(S)===!1?G=Lt.get(S).__webglMultisampledFramebuffer:Array.isArray(Pt)?G=Pt[q]:G=Pt,j.copy(S.viewport),bt.copy(S.scissor),At=S.scissorTest}else j.copy(Ot).multiplyScalar(vt).floor(),bt.copy(qt).multiplyScalar(vt).floor(),At=Kt;if(q!==0&&(G=k),dt.bindFramebuffer(N.FRAMEBUFFER,G)&&dt.drawBuffers(S,G),dt.viewport(j),dt.scissor(bt),dt.setScissorTest(At),H){let mt=Lt.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,mt.__webglTexture,q)}else if(_t){let mt=D;for(let St=0;St<S.textures.length;St++){let Pt=Lt.get(S.textures[St]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+St,Pt.__webglTexture,q,mt)}}else if(S!==null&&q!==0){let mt=Lt.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mt.__webglTexture,q)}X=-1};function yc(S){let D=Lt.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=oe.textureFormatReadable(S.format),D.__typeReadable=oe.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,q,G,H,_t,wt,mt=0){if(!(S&&S.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Lt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(St=St[wt],Array.isArray(St)&&(St=St[0])),St){dt.bindFramebuffer(N.FRAMEBUFFER,St);try{let Pt=S.textures[mt],Vt=Pt.format,te=Pt.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+mt);let Rt=yc(Pt);if(Rt.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-G&&q>=0&&q<=S.height-H&&N.readPixels(D,q,G,H,ot.convert(Vt),ot.convert(te),_t)}finally{let Pt=it!==null?Lt.get(it).__webglFramebuffer:null;dt.bindFramebuffer(N.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(S,D,q,G,H,_t,wt,mt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Lt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(St=St[wt],Array.isArray(St)&&(St=St[0])),St)if(D>=0&&D<=S.width-G&&q>=0&&q<=S.height-H){dt.bindFramebuffer(N.FRAMEBUFFER,St);let Pt=S.textures[mt],Vt=Pt.format,te=Pt.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+mt);let Rt=yc(Pt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ee),N.bufferData(N.PIXEL_PACK_BUFFER,_t.byteLength,N.STREAM_READ),N.readPixels(D,q,G,H,ot.convert(Vt),ot.convert(te),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Se=it!==null?Lt.get(it).__webglFramebuffer:null;dt.bindFramebuffer(N.FRAMEBUFFER,Se);let fe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Oh(N,fe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ee),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_t),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ee),N.deleteSync(fe),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,q=0){let G=Math.pow(2,-q),H=Math.floor(S.image.width*G),_t=Math.floor(S.image.height*G),wt=D!==null?D.x:0,mt=D!==null?D.y:0;O.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,wt,mt,H,_t),dt.unbindTexture()},this.copyTextureToTexture=function(S,D,q=null,G=null,H=0,_t=0){let wt,mt,St,Pt,Vt,te,Rt,ee,Se,fe=S.isCompressedTexture?S.mipmaps[_t]:S.image;if(q!==null)wt=q.max.x-q.min.x,mt=q.max.y-q.min.y,St=q.isBox3?q.max.z-q.min.z:1,Pt=q.min.x,Vt=q.min.y,te=q.isBox3?q.min.z:0;else{let se=Math.pow(2,-H);wt=Math.floor(fe.width*se),mt=Math.floor(fe.height*se),S.isDataArrayTexture?St=fe.depth:S.isData3DTexture?St=Math.floor(fe.depth*se):St=1,Pt=0,Vt=0,te=0}G!==null?(Rt=G.x,ee=G.y,Se=G.z):(Rt=0,ee=0,Se=0);let de=ot.convert(D.format),Fe=ot.convert(D.type),Ct;D.isData3DTexture?(O.setTexture3D(D,0),Ct=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(O.setTexture2DArray(D,0),Ct=N.TEXTURE_2D_ARRAY):(O.setTexture2D(D,0),Ct=N.TEXTURE_2D),dt.activeTexture(N.TEXTURE0),dt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),dt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),dt.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let We=dt.getParameter(N.UNPACK_ROW_LENGTH),re=dt.getParameter(N.UNPACK_IMAGE_HEIGHT),ci=dt.getParameter(N.UNPACK_SKIP_PIXELS),Oe=dt.getParameter(N.UNPACK_SKIP_ROWS),yr=dt.getParameter(N.UNPACK_SKIP_IMAGES);dt.pixelStorei(N.UNPACK_ROW_LENGTH,fe.width),dt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe.height),dt.pixelStorei(N.UNPACK_SKIP_PIXELS,Pt),dt.pixelStorei(N.UNPACK_SKIP_ROWS,Vt),dt.pixelStorei(N.UNPACK_SKIP_IMAGES,te);let Xn=S.isDataArrayTexture||S.isData3DTexture,hi=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let se=Lt.get(S),De=Lt.get(D),on=Lt.get(se.__renderTarget),_e=Lt.get(De.__renderTarget);dt.bindFramebuffer(N.READ_FRAMEBUFFER,on.__webglFramebuffer),dt.bindFramebuffer(N.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Re=0;Re<St;Re++)Xn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Lt.get(S).__webglTexture,H,te+Re),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Lt.get(D).__webglTexture,_t,Se+Re)),N.blitFramebuffer(Pt,Vt,Pt+wt,Vt+mt,Rt,ee,Rt+wt,ee+mt,N.DEPTH_BUFFER_BIT,N.NEAREST);dt.bindFramebuffer(N.READ_FRAMEBUFFER,null),dt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||Lt.has(S)){let se=Lt.get(S),De=Lt.get(D);dt.bindFramebuffer(N.READ_FRAMEBUFFER,R),dt.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let on=0;on<St;on++)Xn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,se.__webglTexture,H,te+on):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,se.__webglTexture,H),hi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,_t,Se+on):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,De.__webglTexture,_t),H!==0?N.blitFramebuffer(Pt,Vt,Pt+wt,Vt+mt,Rt,ee,Rt+wt,ee+mt,N.COLOR_BUFFER_BIT,N.NEAREST):hi?N.copyTexSubImage3D(Ct,_t,Rt,ee,Se+on,Pt,Vt,wt,mt):N.copyTexSubImage2D(Ct,_t,Rt,ee,Pt,Vt,wt,mt);dt.bindFramebuffer(N.READ_FRAMEBUFFER,null),dt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else hi?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Ct,_t,Rt,ee,Se,wt,mt,St,de,Fe,fe.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Ct,_t,Rt,ee,Se,wt,mt,St,de,fe.data):N.texSubImage3D(Ct,_t,Rt,ee,Se,wt,mt,St,de,Fe,fe):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,_t,Rt,ee,wt,mt,de,Fe,fe.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,_t,Rt,ee,fe.width,fe.height,de,fe.data):N.texSubImage2D(N.TEXTURE_2D,_t,Rt,ee,wt,mt,de,Fe,fe);dt.pixelStorei(N.UNPACK_ROW_LENGTH,We),dt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re),dt.pixelStorei(N.UNPACK_SKIP_PIXELS,ci),dt.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),dt.pixelStorei(N.UNPACK_SKIP_IMAGES,yr),_t===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&N.generateMipmap(Ct),dt.unbindTexture()},this.initRenderTarget=function(S){Lt.get(S).__webglFramebuffer===void 0&&O.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?O.setTextureCube(S,0):S.isData3DTexture?O.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?O.setTexture2DArray(S,0):O.setTexture2D(S,0),dt.unbindTexture()},this.resetState=function(){Y=0,V=0,it=null,dt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Eo=class extends gi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new bn;t.deleteAttribute("uv");let e=new ye({side:Ue}),n=new ye,s=new er(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Gt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Us(t,n,6),o=new Pe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Gt(t,fs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Gt(t,fs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new Gt(t,fs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new Gt(t,fs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let d=new Gt(t,fs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let u=new Gt(t,fs(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function fs(i){return new Js({color:0,emissive:16777215,emissiveIntensity:i})}var _r=new U;function an(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;_r.copy(t),_r[n]=0,_r.normalize();let l=.5*a/(a+o),h=1-_r.angleTo(i)/c;return Math.sign(_r[e])===1?h*l:o/(a+o)+l+l*(1-h)}var Rn=class i extends bn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new U,l=new U,h=new U(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,g=f.length/6,y=new U,m=.5/a;for(let p=0,b=0;p<f.length;p+=3,b+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=h.x*Math.sign(c.x)+l.x*r,f[p+1]=h.y*Math.sign(c.y)+l.y*r,f[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/g)){case 0:y.set(1,0,0),u[b+0]=an(y,l,"z","y",r,n),u[b+1]=1-an(y,l,"y","z",r,e);break;case 1:y.set(-1,0,0),u[b+0]=1-an(y,l,"z","y",r,n),u[b+1]=1-an(y,l,"y","z",r,e);break;case 2:y.set(0,1,0),u[b+0]=1-an(y,l,"x","z",r,t),u[b+1]=an(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),u[b+0]=1-an(y,l,"x","z",r,t),u[b+1]=1-an(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),u[b+0]=1-an(y,l,"x","y",r,t),u[b+1]=1-an(y,l,"y","x",r,e);break;case 5:y.set(0,0,-1),u[b+0]=an(y,l,"x","y",r,t),u[b+1]=1-an(y,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function ac(i,t=Math.PI/3){let e=i.index?i.toNonIndexed():i,n=e.attributes.position,s=n.count,r;if(n.isBufferAttribute===!0&&n.itemSize===3&&n.normalized===!1)r=n.array;else{r=new Float64Array(s*3);for(let v=0;v<s;v++)r[3*v+0]=n.getX(v),r[3*v+1]=n.getY(v),r[3*v+2]=n.getZ(v)}let a=Math.cos(t),o=(1+1e-10)*100,c=s/3,l=new Float64Array(c*3);for(let v=0;v<c;v++){let A=9*v,w=r[A+0],_=r[A+1],E=r[A+2],F=r[A+3],C=r[A+4],P=r[A+5],B=r[A+6],k=r[A+7],R=r[A+8],z=B-F,Y=k-C,V=R-P,it=w-F,X=_-C,et=E-P,j=Y*et-V*X,bt=V*it-z*et,At=z*X-Y*it,Z=1/(Math.sqrt(j*j+bt*bt+At*At)||1);l[3*v+0]=j*Z,l[3*v+1]=bt*Z,l[3*v+2]=At*Z}let h=new Int32Array(s),f=new Float64Array(s*3),d=1;for(;d<s*2;)d<<=1;let u=d-1,g=new Int32Array(d),y=0;for(let v=0;v<s;v++){let A=3*v,w=Math.trunc(r[A+0]*o),_=Math.trunc(r[A+1]*o),E=Math.trunc(r[A+2]*o),F=(Math.imul(w,73856093)^Math.imul(_,19349663)^Math.imul(E,83492791))&u;for(;;){let C=g[F];if(C===0){let B=3*y;f[B+0]=w,f[B+1]=_,f[B+2]=E,g[F]=y+1,h[v]=y++;break}let P=3*(C-1);if(f[P+0]===w&&f[P+1]===_&&f[P+2]===E){h[v]=C-1;break}F=F+1&u}}let m=new Int32Array(y+1);for(let v=0;v<s;v++)m[h[v]+1]++;for(let v=0;v<y;v++)m[v+1]+=m[v];let p=new Int32Array(s),b=m.slice(0,y);for(let v=0;v<c;v++){let A=3*v;p[b[h[A+0]]++]=v,p[b[h[A+1]]++]=v,p[b[h[A+2]]++]=v}let T=new Float32Array(s*3);for(let v=0;v<c;v++){let A=3*v,w=l[A+0],_=l[A+1],E=l[A+2];for(let F=0;F<3;F++){let C=A+F,P=h[C],B=0,k=0,R=0;for(let Y=m[P],V=m[P+1];Y<V;Y++){let it=3*p[Y],X=l[it+0],et=l[it+1],j=l[it+2];w*X+_*et+E*j>a&&(B+=X,k+=et,R+=j)}let z=1/(Math.sqrt(B*B+k*k+R*R)||1);T[3*C+0]=B*z,T[3*C+1]=k*z,T[3*C+2]=R*z}}return e.setAttribute("normal",new ke(T,3,!1)),e}var si={w:880,h:713,leds:[[405,345],[421,345],[438,345],[455,345],[472,345]],pecas:{l2:{p:[[154,8],[169,8],[170,9],[174,9],[183,14],[187,19],[189,23],[189,26],[190,27],[190,32],[191,33],[191,39],[192,40],[192,45],[193,46],[193,52],[194,53],[194,59],[195,60],[195,66],[196,67],[196,73],[197,74],[197,80],[198,81],[198,86],[199,87],[199,93],[200,94],[200,97],[198,100],[196,100],[195,101],[180,101],[179,102],[168,102],[167,103],[152,104],[150,105],[144,105],[143,106],[137,106],[136,107],[132,107],[131,108],[127,108],[126,109],[117,110],[116,111],[113,111],[112,112],[108,112],[106,110],[106,101],[107,100],[108,89],[109,88],[109,84],[110,83],[110,78],[111,77],[112,68],[113,67],[113,64],[114,63],[114,60],[115,59],[115,55],[116,54],[116,51],[117,50],[118,44],[120,40],[120,37],[121,36],[121,34],[123,31],[124,27],[129,21],[129,20],[136,14],[142,11],[144,11],[148,9],[153,9]],c:[153.7,62]},r2:{p:[[706,8],[722,8],[723,9],[727,9],[728,10],[733,11],[743,17],[750,25],[753,31],[753,33],[756,40],[756,43],[758,47],[758,50],[759,51],[761,62],[762,63],[762,67],[763,68],[763,72],[764,73],[764,77],[765,78],[765,82],[766,83],[766,88],[767,89],[767,93],[768,94],[768,99],[769,100],[769,106],[770,107],[769,108],[769,111],[767,112],[763,112],[762,111],[759,111],[758,110],[754,110],[753,109],[749,109],[748,108],[739,107],[738,106],[732,106],[731,105],[725,105],[724,104],[717,104],[716,103],[708,103],[707,102],[696,102],[695,101],[680,101],[676,99],[675,95],[676,94],[676,88],[677,87],[677,82],[678,81],[678,75],[679,74],[679,68],[680,67],[680,61],[681,60],[681,54],[682,53],[683,40],[684,39],[684,34],[685,33],[685,27],[691,15],[699,10],[705,9]],c:[721.5,62]},l1:{p:[[187,134],[199,134],[200,135],[203,135],[204,136],[208,137],[214,143],[216,147],[214,148],[202,149],[201,150],[196,150],[195,151],[189,151],[188,152],[183,152],[182,153],[177,153],[176,154],[170,154],[169,155],[164,155],[163,156],[157,156],[156,157],[151,157],[150,158],[144,158],[143,159],[138,159],[137,160],[132,160],[130,161],[125,161],[124,162],[119,162],[118,163],[113,163],[112,164],[101,165],[103,160],[105,158],[106,158],[109,155],[121,149],[123,149],[131,145],[133,145],[134,144],[136,144],[137,143],[139,143],[146,140],[149,140],[150,139],[153,139],[154,138],[157,138],[158,137],[171,136],[172,135],[186,135]],c:[160.5,148]},r1:{p:[[680,134],[701,134],[702,135],[715,136],[716,137],[727,139],[728,140],[742,144],[745,146],[750,147],[766,155],[772,161],[773,163],[773,166],[772,166],[771,165],[766,165],[765,164],[761,164],[760,163],[755,163],[753,162],[750,162],[749,161],[744,161],[743,160],[738,160],[737,159],[732,159],[731,158],[721,157],[720,156],[714,156],[713,155],[708,155],[707,154],[696,153],[695,152],[689,152],[688,151],[682,151],[681,150],[675,150],[674,149],[661,148],[659,147],[659,146],[664,140],[671,136],[673,136],[674,135],[679,135]],c:[715,147.8]},touch:{p:[[386,144],[485,144],[486,145],[516,145],[517,146],[539,146],[540,147],[559,147],[560,148],[592,149],[593,150],[598,150],[599,151],[602,151],[610,155],[615,160],[618,167],[618,177],[617,178],[617,183],[616,184],[616,187],[615,188],[615,192],[614,193],[614,197],[613,198],[613,202],[612,203],[612,207],[611,208],[611,212],[610,213],[610,217],[609,218],[609,222],[608,223],[608,227],[607,228],[607,232],[606,233],[606,237],[605,238],[605,242],[604,243],[604,247],[603,248],[603,252],[602,253],[602,257],[601,258],[600,267],[599,268],[599,271],[598,272],[597,281],[596,282],[595,289],[589,301],[583,307],[576,311],[574,311],[570,313],[567,313],[566,314],[560,314],[559,315],[485,315],[309,315],[308,314],[303,314],[302,313],[297,312],[289,308],[281,300],[276,290],[276,287],[274,283],[274,279],[273,278],[273,274],[272,273],[272,269],[271,268],[271,264],[270,263],[270,259],[269,258],[269,254],[268,253],[268,249],[267,248],[267,244],[266,243],[266,239],[265,238],[265,234],[264,233],[264,229],[263,228],[263,224],[262,223],[262,219],[261,218],[261,214],[260,213],[260,209],[259,208],[259,204],[258,203],[258,199],[257,198],[257,194],[256,193],[256,189],[255,188],[255,184],[254,183],[254,179],[253,178],[253,174],[252,173],[252,167],[253,166],[253,163],[255,161],[255,160],[259,156],[267,152],[273,151],[274,150],[281,150],[282,149],[311,148],[312,147],[331,147],[332,146],[354,146],[355,145],[385,145]],c:[435.4,227.8]},moldura:{p:[[616,151],[618,151],[622,153],[624,155],[625,155],[625,156],[627,158],[628,162],[629,163],[629,175],[628,176],[627,184],[626,185],[626,189],[625,190],[625,195],[624,196],[624,200],[623,201],[623,205],[622,206],[622,210],[621,211],[621,215],[620,216],[620,221],[619,222],[619,226],[618,227],[618,231],[617,232],[617,236],[616,237],[616,241],[615,242],[615,247],[614,248],[614,252],[613,253],[613,257],[612,258],[612,262],[611,263],[611,267],[610,268],[610,273],[609,274],[609,278],[608,279],[608,283],[607,284],[607,288],[606,289],[605,296],[599,308],[591,316],[580,322],[578,322],[574,324],[571,324],[570,325],[302,325],[301,324],[298,324],[297,323],[292,322],[284,318],[273,308],[273,307],[269,302],[269,300],[266,295],[266,292],[265,291],[265,288],[264,287],[264,283],[263,282],[263,278],[262,277],[262,272],[261,271],[260,262],[259,261],[259,256],[258,255],[258,251],[257,250],[257,246],[256,245],[256,241],[255,240],[255,236],[254,235],[254,231],[253,230],[253,226],[252,225],[252,220],[251,219],[251,215],[250,214],[250,210],[249,209],[249,205],[248,204],[248,200],[247,199],[247,194],[246,193],[246,189],[245,188],[245,184],[244,183],[244,179],[243,178],[243,174],[242,173],[242,164],[243,163],[243,160],[244,159],[244,158],[249,153],[251,152],[255,152],[254,152],[250,156],[247,161],[247,163],[246,164],[246,177],[247,178],[247,182],[248,183],[248,186],[249,187],[249,191],[250,192],[250,196],[251,197],[251,201],[252,202],[252,206],[253,207],[253,211],[254,212],[254,216],[255,217],[255,221],[256,222],[256,226],[257,227],[257,231],[258,232],[258,236],[259,237],[259,241],[260,242],[260,246],[261,247],[261,251],[262,252],[262,256],[263,257],[263,261],[264,262],[264,266],[265,267],[265,271],[266,272],[266,276],[267,277],[268,286],[269,287],[271,295],[277,305],[288,315],[300,320],[311,321],[312,322],[551,322],[552,321],[564,321],[565,320],[570,320],[571,319],[573,319],[574,318],[576,318],[583,315],[594,305],[600,294],[600,292],[603,285],[603,281],[604,280],[604,276],[605,275],[605,271],[606,270],[606,266],[607,265],[607,261],[608,260],[608,256],[609,255],[609,251],[610,250],[610,246],[611,245],[611,241],[612,240],[612,236],[613,235],[613,231],[614,230],[614,226],[615,225],[615,221],[616,220],[616,216],[617,215],[617,211],[618,210],[618,206],[619,205],[619,202],[620,201],[620,197],[621,196],[621,192],[622,191],[622,187],[623,186],[623,182],[624,181],[624,176],[625,175],[625,167],[624,166],[624,162],[623,161],[623,159]],c:[441.1,274.9]},dpadU:{p:[[140,223],[164,223],[165,224],[169,225],[171,227],[172,229],[171,249],[168,256],[165,259],[154,269],[150,269],[137,257],[134,251],[134,246],[133,245],[133,234],[132,233],[132,231],[133,230],[133,228],[137,224],[139,224]],c:[152.2,242.9]},dpadD:{p:[[151,301],[155,302],[168,314],[170,318],[170,321],[171,322],[171,330],[172,331],[172,341],[168,346],[166,346],[165,347],[154,347],[139,347],[133,342],[133,340],[132,339],[132,337],[133,336],[133,325],[134,324],[134,319],[138,312]],c:[152.2,327.2]},dpadL:{p:[[98,265],[102,265],[103,266],[114,266],[115,267],[121,268],[123,269],[135,281],[136,283],[136,287],[134,289],[134,290],[123,301],[119,303],[117,303],[115,304],[107,304],[106,305],[97,305],[91,300],[91,271],[95,266],[97,266]],c:[110.4,285.1]},dpadR:{p:[[203,265],[207,265],[211,267],[214,272],[214,298],[213,299],[213,301],[208,305],[191,304],[183,302],[181,300],[180,300],[169,288],[169,286],[168,285],[169,284],[169,282],[175,276],[175,275],[182,269],[186,267],[190,267],[191,266],[202,266]],c:[194.3,285.1]},tri:{p:[[723,202],[724,203],[729,203],[730,204],[732,204],[737,207],[743,213],[746,219],[746,222],[747,223],[747,230],[746,231],[746,234],[745,235],[744,239],[741,242],[741,243],[736,247],[732,249],[730,249],[729,250],[723,250],[717,250],[708,246],[703,241],[699,232],[699,221],[703,212],[711,205],[713,205],[716,203],[722,203]],c:[722.8,226.5]},cir:{p:[[776,260],[788,260],[789,261],[794,262],[803,270],[806,276],[807,286],[806,287],[806,291],[803,297],[797,303],[790,306],[788,307],[777,307],[770,304],[763,297],[763,296],[761,294],[761,292],[759,288],[759,278],[762,271],[768,264]],c:[782.8,283.4]},x:{p:[[722,316],[730,317],[736,320],[743,327],[746,333],[746,336],[747,337],[747,344],[746,345],[746,348],[743,354],[737,360],[731,363],[723,364],[718,364],[717,363],[714,363],[707,359],[702,353],[699,346],[699,335],[704,325],[710,320],[714,318],[716,318],[717,317],[721,317]],c:[722.8,340.4]},qua:{p:[[662,259],[664,259],[665,260],[669,260],[676,263],[684,271],[687,278],[687,289],[684,296],[676,304],[669,307],[664,307],[657,307],[649,303],[642,295],[641,291],[640,290],[640,287],[639,286],[640,276],[643,270],[650,263],[654,261],[656,261],[657,260],[661,260]],c:[663.2,283.4]},create:{p:[[216,186],[218,186],[221,188],[222,190],[222,193],[223,194],[223,197],[224,198],[224,201],[225,202],[225,205],[226,206],[226,211],[223,214],[222,214],[219,214],[216,211],[215,209],[214,201],[213,200],[213,197],[212,196],[212,192],[211,191],[212,189]],c:[218.8,200.2]},options:{p:[[656,186],[661,186],[664,190],[663,196],[662,197],[662,200],[661,201],[660,209],[657,213],[652,213],[649,210],[649,206],[650,205],[650,202],[651,201],[653,190]],c:[656.4,199.6]},stickL:{p:[[274,349],[293,349],[294,350],[298,350],[299,351],[307,353],[313,356],[315,358],[319,360],[329,370],[335,380],[335,382],[337,385],[338,391],[339,392],[339,397],[340,398],[340,412],[339,413],[339,418],[338,419],[336,427],[332,435],[327,441],[327,442],[322,447],[321,447],[314,453],[306,457],[294,460],[291,460],[290,461],[278,461],[277,460],[272,460],[271,459],[268,459],[267,458],[262,457],[248,449],[236,436],[231,426],[231,424],[229,420],[229,417],[228,416],[228,412],[227,411],[227,398],[228,397],[228,392],[229,391],[231,383],[237,372],[246,362],[247,362],[254,356],[260,353],[262,353],[265,351],[273,350]],c:[283.7,404.7]},stickR:{p:[[583,349],[603,349],[604,350],[608,350],[609,351],[614,352],[622,356],[624,358],[628,360],[638,370],[645,382],[645,384],[648,391],[648,396],[649,397],[649,411],[648,412],[648,417],[647,418],[647,421],[642,433],[640,435],[638,439],[624,452],[614,457],[603,460],[600,460],[599,461],[587,461],[586,460],[581,460],[580,459],[577,459],[571,456],[569,456],[559,450],[547,438],[547,437],[545,435],[540,425],[540,423],[538,419],[538,416],[537,415],[537,395],[538,394],[538,391],[539,390],[539,387],[541,384],[541,382],[546,373],[558,360],[559,360],[564,356],[570,353],[572,353],[579,350],[582,350]],c:[592.9,404.7]},ps:{p:[[435,384],[442,384],[443,385],[447,386],[452,390],[456,398],[456,407],[455,408],[454,412],[446,419],[441,420],[433,420],[432,419],[428,418],[422,412],[421,408],[420,407],[420,398],[421,397],[422,393],[425,390],[425,389],[426,389],[431,385],[434,385]],c:[438,402.2]},mute:{p:[[420,453],[456,453],[458,454],[458,458],[456,459],[419,459],[418,458],[418,454]],c:[438,456]},asaE:{p:[[213,154],[214,155],[217,155],[220,157],[222,157],[227,161],[228,161],[231,164],[236,173],[236,177],[237,178],[237,182],[238,183],[238,187],[239,188],[239,192],[240,193],[240,197],[241,198],[241,202],[242,203],[242,207],[243,208],[243,213],[244,214],[244,218],[245,219],[245,223],[246,224],[246,228],[247,229],[247,233],[248,234],[248,239],[249,240],[249,244],[250,245],[250,249],[251,250],[251,254],[252,255],[252,259],[253,260],[253,264],[254,265],[254,270],[255,271],[255,275],[256,276],[256,294],[255,295],[254,302],[252,305],[252,307],[250,311],[248,313],[245,319],[242,322],[239,327],[219,349],[219,350],[212,358],[212,359],[204,369],[200,376],[195,382],[194,385],[188,393],[187,396],[185,398],[184,401],[179,408],[176,415],[174,417],[170,426],[168,428],[155,454],[155,456],[149,467],[149,469],[145,476],[145,478],[139,490],[139,492],[137,495],[135,502],[132,507],[131,512],[129,515],[129,517],[127,520],[127,522],[124,528],[123,533],[121,536],[119,544],[117,547],[117,549],[116,550],[116,552],[115,553],[115,555],[114,556],[114,558],[113,559],[113,561],[112,562],[112,564],[111,565],[111,567],[110,568],[110,570],[109,571],[109,573],[108,574],[108,576],[107,577],[107,579],[106,580],[106,582],[105,583],[105,585],[104,586],[104,588],[103,589],[103,591],[102,592],[102,594],[99,601],[99,604],[98,605],[98,607],[95,614],[95,617],[94,618],[94,620],[91,627],[91,630],[90,631],[89,637],[86,644],[84,655],[83,656],[80,667],[74,678],[69,683],[65,685],[57,685],[43,679],[31,668],[31,667],[28,664],[26,659],[24,657],[23,653],[21,650],[19,643],[18,642],[18,640],[17,639],[17,636],[16,635],[16,632],[15,631],[15,627],[14,626],[14,622],[13,621],[13,617],[12,616],[11,602],[10,601],[10,592],[9,591],[9,578],[8,577],[8,543],[7,542],[7,532],[8,531],[8,497],[9,496],[9,481],[10,480],[10,468],[11,467],[12,448],[13,447],[14,431],[15,430],[15,424],[16,423],[16,418],[17,417],[17,411],[18,410],[18,405],[19,404],[20,393],[21,392],[21,388],[22,387],[22,383],[23,382],[23,378],[24,377],[24,373],[25,372],[25,367],[26,366],[26,363],[27,362],[27,359],[28,358],[28,354],[29,353],[29,350],[30,349],[30,345],[31,344],[33,333],[35,329],[37,318],[39,314],[39,311],[41,307],[41,304],[43,300],[43,297],[44,296],[44,294],[47,287],[47,284],[48,283],[48,281],[49,280],[49,278],[50,277],[50,275],[51,274],[51,272],[52,271],[56,257],[58,254],[61,243],[63,240],[64,235],[68,227],[69,222],[74,212],[74,210],[76,207],[76,205],[78,202],[78,200],[81,195],[81,193],[83,189],[85,187],[88,181],[96,173],[98,172],[103,172],[104,171],[109,171],[110,170],[116,170],[117,169],[122,169],[123,168],[129,168],[130,167],[135,167],[136,166],[141,166],[142,165],[148,165],[149,164],[154,164],[155,163],[161,163],[162,162],[167,162],[168,161],[173,161],[174,160],[180,160],[181,159],[186,159],[187,158],[193,158],[194,157],[199,157],[200,156],[205,156],[206,155],[212,155]],c:[107.3,396.8]},asaD:{p:[[661,154],[663,154],[664,155],[670,155],[671,156],[677,156],[678,157],[684,157],[685,158],[690,158],[691,159],[697,159],[698,160],[703,160],[704,161],[709,161],[710,162],[716,162],[717,163],[722,163],[723,164],[728,164],[729,165],[733,165],[734,166],[739,166],[740,167],[745,167],[746,168],[751,168],[752,169],[756,169],[757,170],[762,170],[763,171],[767,171],[768,172],[778,173],[782,175],[785,179],[787,184],[789,186],[801,210],[801,212],[805,219],[805,221],[808,226],[808,228],[810,231],[810,233],[814,241],[814,243],[817,249],[820,260],[822,263],[822,265],[823,266],[823,268],[826,275],[826,278],[827,279],[827,281],[830,288],[830,291],[833,298],[833,301],[834,302],[835,308],[836,309],[836,312],[838,316],[838,319],[839,320],[839,323],[840,324],[840,327],[841,328],[841,331],[842,332],[842,335],[843,336],[843,339],[844,340],[844,344],[845,345],[845,348],[846,349],[846,352],[847,353],[847,357],[848,358],[848,362],[849,363],[849,366],[850,367],[850,371],[851,372],[851,376],[852,377],[852,381],[853,382],[853,387],[854,388],[854,392],[855,393],[855,398],[856,399],[856,404],[857,405],[858,416],[859,417],[859,423],[860,424],[860,430],[861,431],[861,437],[862,438],[862,445],[863,446],[863,453],[864,454],[864,462],[865,463],[866,484],[867,485],[867,497],[868,498],[868,515],[869,516],[869,570],[868,571],[868,584],[867,585],[867,595],[866,596],[866,603],[865,604],[864,617],[863,618],[863,622],[862,623],[862,627],[861,628],[860,636],[859,637],[858,643],[856,646],[855,650],[849,663],[844,669],[844,670],[838,676],[837,676],[834,679],[831,680],[829,682],[825,683],[822,685],[818,685],[817,686],[810,686],[806,684],[802,680],[798,672],[798,670],[797,669],[797,667],[796,666],[796,664],[795,663],[795,661],[792,654],[792,651],[791,650],[790,644],[787,637],[787,634],[786,633],[786,631],[783,624],[783,621],[782,620],[782,618],[779,611],[779,608],[778,607],[778,605],[777,604],[777,602],[776,601],[776,599],[775,598],[775,596],[774,595],[774,593],[773,592],[773,590],[772,589],[772,587],[771,586],[771,584],[770,583],[770,581],[769,580],[769,578],[768,577],[768,575],[767,574],[767,572],[766,571],[762,557],[760,554],[757,543],[755,540],[754,535],[750,527],[749,522],[747,519],[747,517],[745,514],[745,512],[743,509],[741,502],[738,497],[738,495],[735,490],[735,488],[731,481],[731,479],[726,470],[726,468],[710,436],[708,434],[705,427],[703,425],[701,420],[699,418],[697,413],[690,403],[689,400],[687,398],[679,385],[676,382],[674,378],[671,375],[671,374],[668,371],[665,366],[661,362],[661,361],[650,349],[650,348],[633,331],[633,330],[623,317],[619,309],[619,307],[617,304],[616,296],[615,295],[615,282],[616,281],[616,275],[617,274],[618,265],[619,264],[619,261],[620,260],[620,256],[621,255],[621,251],[622,250],[622,246],[623,245],[623,241],[624,240],[624,236],[625,235],[625,231],[626,230],[626,226],[627,225],[627,221],[628,220],[628,216],[629,215],[629,211],[630,210],[630,206],[631,205],[631,201],[632,200],[632,196],[633,195],[633,191],[634,190],[634,186],[635,185],[636,177],[641,166],[648,159],[654,156],[660,155]],c:[767.9,400.2]},centro:{p:[[261,300],[264,307],[266,309],[268,313],[276,321],[277,321],[280,324],[283,325],[285,327],[287,327],[290,329],[292,329],[296,331],[301,331],[302,332],[570,332],[571,331],[575,331],[576,330],[579,330],[580,329],[585,328],[594,323],[604,313],[610,302],[610,300],[610,303],[611,304],[612,309],[618,321],[620,323],[622,327],[629,335],[629,336],[652,360],[652,361],[664,375],[666,379],[672,386],[672,387],[684,404],[685,407],[689,412],[694,422],[696,424],[698,429],[700,431],[705,442],[707,444],[717,464],[717,466],[724,479],[724,481],[728,488],[728,490],[734,502],[734,504],[736,507],[736,509],[738,512],[738,514],[740,517],[740,519],[742,522],[742,524],[746,532],[747,537],[749,540],[749,542],[750,543],[751,548],[753,551],[756,562],[758,565],[758,567],[759,568],[759,570],[760,571],[760,573],[761,574],[761,576],[762,577],[762,579],[763,580],[763,582],[764,583],[764,585],[765,586],[765,588],[766,589],[766,591],[769,598],[769,601],[770,602],[770,604],[771,605],[771,607],[772,608],[772,610],[775,617],[775,620],[778,627],[778,630],[781,637],[781,640],[784,647],[784,650],[786,654],[786,657],[787,658],[791,672],[798,685],[804,690],[802,690],[798,692],[795,692],[791,694],[788,694],[784,696],[781,696],[777,698],[774,698],[773,699],[767,699],[766,698],[764,698],[759,693],[757,686],[755,683],[753,675],[751,672],[749,664],[747,661],[746,656],[744,653],[743,648],[741,645],[740,640],[738,637],[737,632],[735,629],[735,627],[733,624],[732,619],[730,616],[730,614],[726,606],[725,601],[723,598],[723,596],[721,593],[721,591],[719,588],[719,586],[717,583],[717,581],[715,578],[715,576],[713,573],[713,571],[711,568],[711,566],[709,563],[707,556],[704,551],[704,549],[702,546],[700,539],[697,534],[697,532],[695,529],[693,522],[686,510],[674,497],[660,489],[654,488],[653,487],[649,487],[648,486],[624,486],[623,487],[619,487],[598,487],[597,488],[569,488],[568,489],[533,489],[532,490],[474,490],[473,491],[380,491],[379,490],[324,490],[323,489],[287,489],[286,488],[259,488],[258,487],[238,487],[237,486],[236,487],[224,487],[223,488],[220,488],[219,489],[213,490],[202,496],[193,504],[193,505],[188,511],[182,523],[182,525],[179,530],[179,532],[173,544],[171,551],[168,556],[168,558],[166,561],[166,563],[164,566],[164,568],[162,571],[162,573],[160,576],[160,578],[158,581],[158,583],[154,591],[153,596],[151,599],[151,601],[147,609],[146,614],[144,617],[143,622],[141,625],[140,630],[138,633],[138,635],[136,638],[134,646],[132,649],[131,654],[129,657],[128,662],[126,665],[126,667],[125,668],[124,673],[122,676],[120,684],[115,694],[110,698],[103,699],[96,696],[93,696],[92,695],[90,695],[83,692],[80,692],[79,691],[71,689],[73,688],[79,682],[79,681],[83,676],[85,672],[85,670],[87,667],[87,665],[90,658],[92,647],[94,643],[94,640],[95,639],[95,637],[97,633],[97,630],[100,623],[100,620],[103,613],[103,610],[104,609],[104,607],[105,606],[105,604],[106,603],[106,601],[109,594],[109,591],[110,590],[110,588],[111,587],[111,585],[112,584],[112,582],[113,581],[113,579],[114,578],[114,576],[115,575],[115,573],[116,572],[120,558],[122,555],[125,544],[127,541],[129,533],[131,530],[132,525],[136,517],[137,512],[139,509],[141,502],[144,497],[146,490],[149,485],[149,483],[152,478],[152,476],[157,467],[157,465],[178,423],[180,421],[183,414],[185,412],[187,407],[189,405],[193,397],[199,389],[200,386],[202,384],[204,380],[207,377],[211,370],[214,367],[214,366],[217,363],[220,358],[229,348],[229,347],[236,340],[236,339],[244,331],[244,330],[250,323],[259,307]],c:[436.3,464.4]},corpo:{p:[[685,128],[707,129],[708,130],[713,130],[714,131],[718,131],[719,132],[730,134],[731,135],[745,139],[755,144],[757,144],[770,151],[776,157],[778,160],[779,167],[781,169],[783,169],[786,171],[791,178],[796,189],[798,191],[803,201],[803,203],[812,221],[812,223],[814,226],[814,228],[820,241],[821,246],[823,249],[827,263],[829,266],[830,272],[836,288],[836,291],[837,292],[838,298],[840,302],[840,305],[842,309],[842,312],[843,313],[844,320],[846,324],[847,332],[848,333],[848,336],[849,337],[849,340],[850,341],[850,344],[852,349],[852,353],[853,354],[853,358],[855,363],[857,377],[858,378],[858,383],[859,384],[859,388],[860,389],[860,394],[861,395],[862,405],[863,406],[863,412],[864,413],[864,418],[865,419],[867,439],[868,440],[869,456],[870,457],[870,465],[871,466],[871,476],[872,477],[872,488],[873,489],[873,502],[874,503],[875,559],[874,560],[874,579],[873,580],[873,591],[872,592],[871,608],[870,609],[868,626],[867,627],[864,642],[863,643],[862,648],[860,651],[860,653],[853,667],[846,675],[846,676],[838,683],[825,690],[815,692],[811,694],[808,694],[801,697],[798,697],[794,699],[791,699],[790,700],[784,701],[776,704],[764,704],[760,702],[755,697],[752,691],[751,686],[749,683],[747,675],[745,672],[743,664],[741,661],[741,659],[738,653],[737,648],[735,645],[734,640],[732,637],[731,632],[729,629],[729,627],[725,619],[724,614],[722,611],[722,609],[716,596],[715,591],[713,588],[713,586],[711,583],[711,581],[709,578],[709,576],[707,573],[705,566],[702,561],[702,559],[700,556],[700,554],[698,551],[696,544],[693,539],[693,537],[691,534],[689,527],[680,511],[669,500],[660,495],[658,495],[654,493],[637,491],[636,492],[613,492],[612,493],[553,494],[552,495],[509,495],[508,496],[344,496],[343,495],[302,495],[301,494],[272,494],[271,493],[229,492],[228,493],[219,494],[207,499],[196,509],[191,518],[183,535],[183,537],[180,542],[180,544],[177,549],[177,551],[175,554],[173,561],[170,566],[170,568],[168,571],[168,573],[162,586],[161,591],[155,604],[154,609],[150,617],[149,622],[147,625],[146,630],[142,638],[137,654],[135,657],[134,662],[129,673],[124,689],[119,698],[114,702],[110,704],[100,704],[90,700],[87,700],[77,696],[74,696],[64,692],[61,692],[60,691],[57,691],[56,690],[48,688],[35,680],[27,672],[21,663],[14,648],[13,642],[10,634],[10,631],[9,630],[9,626],[8,625],[8,621],[7,620],[7,614],[6,613],[6,607],[5,606],[4,586],[3,585],[3,568],[2,567],[2,507],[3,506],[3,487],[4,486],[4,472],[5,471],[5,460],[6,459],[7,442],[8,441],[9,426],[10,425],[10,419],[11,418],[11,412],[12,411],[14,394],[15,393],[15,389],[16,388],[16,383],[17,382],[18,373],[20,368],[21,359],[23,354],[23,350],[24,349],[24,346],[25,345],[25,342],[26,341],[29,326],[31,322],[33,311],[36,304],[38,294],[39,293],[39,291],[43,281],[43,278],[44,277],[49,260],[51,257],[55,243],[57,240],[58,235],[60,232],[63,222],[65,219],[67,212],[70,207],[70,205],[72,202],[74,195],[80,183],[84,177],[95,167],[96,161],[101,154],[116,145],[118,145],[123,142],[131,140],[134,138],[136,138],[143,135],[146,135],[147,134],[150,134],[155,132],[159,132],[160,131],[176,130],[177,129],[203,129],[204,130],[206,130],[212,133],[218,139],[223,149],[226,149],[227,148],[237,148],[238,147],[248,147],[249,146],[260,146],[261,145],[273,145],[274,144],[302,143],[303,142],[339,141],[340,140],[365,140],[366,139],[405,139],[406,138],[474,138],[475,139],[512,139],[513,140],[535,140],[536,141],[556,141],[557,142],[572,142],[573,143],[601,144],[602,145],[613,145],[614,146],[624,146],[625,147],[635,147],[636,148],[651,149],[653,147],[657,139],[663,134],[671,130],[674,130],[675,129],[684,129]],c:[0,0]}}};var Hg=new URL("../img/",import.meta.url).href,ms=Math.PI,xr=i=>Math.max(0,Math.min(1,i)),Ee=(i,t,e)=>{let n=xr((e-i)/(t-i));return n*n*(3-2*n)},Cn=(i,t,e)=>i+(t-i)*e,ps=(i,t,e,n,s)=>Math.exp(-((i-e)**2+(t-n)**2)/(2*s*s)),Co=3.2/si.w,hc=440,Cu=400,Ri=i=>(i-hc)*Co,ai=i=>-(i-Cu)*Co,ri=.034,oc=[["Azul","#0040FF"],["Ciano","#00E5FF"],["Verde-\xE1gua","#4EDEA3"],["Verde","#00FF50"],["Lima","#A0FF00"],["Amarelo","#FFD000"],["Laranja","#FF6A00"],["Vermelho","#FF1030"],["Rosa","#FF2E88"],["Violeta","#9B30FF"],["\xCDndigo","#5A2BFF"],["Branco","#FFFFFF"]],Vg={homebrew:"menu-homebrew-com-control-ps5-no-nintendo-switch.webp",instalar:"app-control-ps5-instalar-driver-dualsense.webp",instalando:"instalando-driver-dualsense-no-switch.webp",reiniciar:"driver-instalado-reiniciar-o-switch.webp",parear:"driver-ativo-parear-controle-ps5.webp",controles:"tela-controles-do-nintendo-switch-mudar-ordem.webp",sincronizar:"aperte-l-e-r-para-sincronizar-controle-ps5-no-switch.webp",conectado:"dualsense-conectado-no-nintendo-switch.webp",gatilhos:"gatilhos-adaptaveis-do-dualsense-no-switch.webp",luzes:"barra-de-luz-e-vibracao-do-dualsense-no-switch.webp"},To=i=>Math.sin(ms*i)**2,Wg={"Sem efeito":i=>To(i),Acelerador:i=>{let t=To(i);return t<.3?t:.3+(t-.3)*.55},"Freio firme":i=>To(i)*.42,"Gatilho de arma":i=>{let t=To(i);return t<.62?t*.62:Cn(.38,1,Ee(.62,.68,t))},Arco:i=>i<.82?Math.pow(i/.82,1.5)*.86:.86*(1-Ee(.82,.87,i)),Metralhadora:(i,t)=>.56+(Math.sin(t*46)>0?.13:-.13),"Motor vibrando":(i,t)=>.36+.035*Math.sin(t*90)};function fv(){try{let i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}function Iu(i,t){let e=new Mo({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio||1,t)),e.toneMapping=sr,e.toneMappingExposure=.92;let n=new gi,s=new us(e);n.environment=s.fromScene(new Eo,.04).texture,s.dispose();let r=new is(16777215,1.5);r.position.set(-3,6,7);let a=new is(12166399,.9);return a.position.set(5,2,-3),n.add(r,a),{renderer:e,scene:n}}function oi(i,t,e,n,s=!0){let r=document.createElement("canvas");r.width=t,r.height=e,n(r.getContext("2d"),t,e);let a=new Bs(r);return s&&(a.colorSpace=Ge),a.anisotropy=i.capabilities.getMaxAnisotropy(),a}function Xg(i,t=1){for(let e=0;e<t;e++){let n=[];i.forEach((s,r)=>{let a=i[(r+1)%i.length];n.push([s[0]*.75+a[0]*.25,s[1]*.75+a[1]*.25],[s[0]*.25+a[0]*.75,s[1]*.25+a[1]*.75])}),i=n}return i}var Me=Object.fromEntries(Object.entries(si.pecas).map(([i,t])=>[i,Xg(t.p,1)])),Ao=i=>{let t=i.map(n=>n[0]),e=i.map(n=>n[1]);return[(Math.min(...t)+Math.max(...t))/2,(Math.min(...e)+Math.max(...e))/2]};function mn(i,t){i.beginPath(),t.forEach(([e,n],s)=>s?i.lineTo(e,n):i.moveTo(e,n)),i.closePath()}function lc(i,t,e,n=1){let s=new xi;return i.forEach(([r,a],o)=>{let c=(r-t)*Co*n,l=-(a-e)*Co*n;o?s.lineTo(c,l):s.moveTo(c,l)}),s.closePath(),s}function Au(i,{depth:t=.03,bevel:e=.012,seg:n=3}={}){let s=new yi(i,{depth:t,bevelEnabled:e>0,bevelSize:e,bevelThickness:e,bevelSegments:n,bevelOffset:-e,curveSegments:4});return ac(s,.75)}function wo(i,t,e){let n=document.createElement("canvas");n.width=t,n.height=e;let s=n.getContext("2d",{willReadFrequently:!0});s.scale(t/si.w,e/si.h),s.fillStyle="#fff",i.forEach(o=>{mn(s,o),s.fill()});let r=s.getImageData(0,0,t,e).data,a=new Float32Array(t*e);for(let o=0;o<a.length;o++)a[o]=r[o*4+3]/255;return a}function cc(i,t,e,n){let s=new Float32Array(i.length);for(let r=0;r<2;r++){for(let a=0;a<e;a++)for(let o=0;o<t;o++){let c=0,l=0;for(let h=-n;h<=n;h++){let f=r?a+h:o+h;f<0||f>=(r?e:t)||(c+=i[r?f*t+o:a*t+f],l++)}s[a*t+o]=c/l}i.set(s)}return i}function qg(i,t,e){let n=new Float32Array(t*e);for(let r=0;r<n.length;r++)n[r]=i[r]>.5?1e6:0;let s=1.414;for(let r=0;r<e;r++)for(let a=0;a<t;a++){let o=r*t+a;n[o]&&(a&&(n[o]=Math.min(n[o],n[o-1]+1)),r&&(n[o]=Math.min(n[o],n[o-t]+1)),a&&r&&(n[o]=Math.min(n[o],n[o-t-1]+s)),r&&a<t-1&&(n[o]=Math.min(n[o],n[o-t+1]+s)))}for(let r=e-1;r>=0;r--)for(let a=t-1;a>=0;a--){let o=r*t+a;n[o]&&(a<t-1&&(n[o]=Math.min(n[o],n[o+1]+1)),r<e-1&&(n[o]=Math.min(n[o],n[o+t]+1)),a<t-1&&r<e-1&&(n[o]=Math.min(n[o],n[o+t+1]+s)),r<e-1&&a&&(n[o]=Math.min(n[o],n[o+t-1]+s)))}return n}function Yg(i,{pequena:t}){let e=si.w,n=si.h,s=t?150:236,r=Math.round(s*n/e),a=s+1,o=r+1,c=e/s,l=n/r,h=wo([Me.corpo],a,o),f=qg(h,a,o),d=t?1:2,u=cc(wo([Me.centro],a,o),a,o,d),g=cc(wo([Me.moldura],a,o),a,o,d),y=cc(wo([Me.l1,Me.r1],a,o),a,o,d),m=new Float32Array(a*o),p=new Float32Array(a*o);for(let O=0;O<o;O++)for(let M=0;M<a;M++){let x=O*a+M,L=M*c,J=O*l,W=f[x]*c,st=xr((W-c*1.7)/74),rt=1-Math.pow(1-st,2.6),$=1-.38*Ee(330,690,J),Q=ri+(.205-ri)*rt*$;Q+=rt*(.034*ps(L,J,118,300,105)+.034*ps(L,J,762,300,105)),Q-=rt*(.03*u[x]+.016*g[x]+.045*y[x]),Q-=rt*(.022*ps(L,J,284,405,44)+.022*ps(L,J,593,405,44)+.012*ps(L,J,152,285,56)+.012*ps(L,J,723,283,64)),m[x]=Math.max(ri,Q);let ct=xr((W-c*1.7)/120),I=1-Math.pow(1-ct,2.6),tt=.55+.45*Ee(100,270,Math.abs(L-hc))*Ee(210,430,J);p[x]=Math.max(ri,ri+(.5-ri)*I*tt)}let b=(O,M)=>{let x=xr(O/e)*s,L=xr(M/n)*r,J=Math.min(s-1,x|0),W=Math.min(r-1,L|0),st=x-J,rt=L-W,$=(Q,ct)=>m[ct*a+Q];return Cn(Cn($(J,W),$(J+1,W),st),Cn($(J,W+1),$(J+1,W+1),st),rt)},T=new Uint8Array(a*o);for(let O=0;O<o;O++)for(let M=0;M<a;M++)if(!(h[O*a+M]<=0))for(let x=-1;x<=1;x++)for(let L=-1;L<=1;L++){let J=M+L,W=O+x;J>=0&&J<a&&W>=0&&W<o&&(T[W*a+J]=1)}let v=new Int32Array(a*o).fill(-1),A=[],w=[],_=[];for(let O=0;O<o;O++)for(let M=0;M<a;M++){let x=O*a+M;if(!T[x])continue;v[x]=A.length/3;let L=M*c,J=O*l;A.push(Ri(L),ai(J),m[x]),w.push(L/e,1-J/n),_.push(p[x])}let E=[],F=[];for(let O=0;O<o-1;O++)for(let M=0;M<a-1;M++){let x=v[O*a+M],L=v[O*a+M+1],J=v[(O+1)*a+M],W=v[(O+1)*a+M+1];x<0||L<0||J<0||W<0||(E.push(x,J,L,L,J,W),F.push(x,L,J,L,W,J))}let C=new Le;C.setAttribute("position",new he(A,3)),C.setAttribute("uv",new he(w,2)),C.setIndex(E),C.computeVertexNormals();let P=A.slice();for(let O=0;O<_.length;O++)P[O*3+2]=-_[O];let B=new Le;B.setAttribute("position",new he(P,3)),B.setAttribute("uv",new he(w,2)),B.setIndex(F),B.computeVertexNormals();let k=t?1100:1760,R=Math.round(k*n/e),z="#101014",Y=oi(i,k,R,O=>{O.scale(k/e,R/n),mn(O,Me.corpo),O.fillStyle=z,O.fill(),O.save(),mn(O,Me.corpo),O.clip();let M=O.createLinearGradient(0,130,0,700);M.addColorStop(0,"#f7f5fa"),M.addColorStop(1,"#e6e3ec"),O.fillStyle=M,O.strokeStyle=M,O.lineWidth=16,O.lineJoin="round",[Me.asaE,Me.asaD].forEach(x=>{mn(O,x),O.fill(),O.stroke()}),O.fillStyle=z,O.strokeStyle=z,O.lineWidth=5,[Me.centro,Me.moldura].forEach(x=>{mn(O,x),O.fill(),O.stroke()}),O.strokeStyle="#08080b",O.lineWidth=2,mn(O,Me.centro),O.stroke(),O.restore(),O.fillStyle="#07070a",O.strokeStyle="#07070a",O.lineWidth=5,["dpadU","dpadD","dpadL","dpadR","tri","cir","x","qua","create","options","ps","mute","touch","l1","r1"].forEach(x=>{mn(O,Me[x]),O.fill(),O.stroke()}),["stickL","stickR"].forEach(x=>{mn(O,Me[x]),O.fillStyle="#0a0a0e",O.fill(),O.strokeStyle="#2c2c35",O.lineWidth=3,O.stroke()}),O.fillStyle="#34343e";for(let x of[-1,1])for(let L=0;L<9;L++)for(let J=0;J<3;J++)O.beginPath(),O.arc(438+x*(40+L*7+J%2*3.5),394+J*7,1.5,0,7),O.fill()}),V=oi(i,k,R,O=>{O.fillStyle="#000",O.fillRect(0,0,k,R),O.scale(k/e,R/n),O.fillStyle="#fff",mn(O,Me.moldura),O.fill(),O.fillStyle="#000",O.strokeStyle="#000",O.lineWidth=3,mn(O,Me.touch),O.fill(),O.stroke(),O.fillRect(0,0,e,170),O.fillRect(310,298,260,60)},!1),it=new ye({map:Y,alphaTest:.5,alphaToCoverage:!0,roughness:.46,metalness:0,emissive:new Wt(16639),emissiveMap:V,emissiveIntensity:0}),X=oi(i,900,Math.round(900*n/e),(O,M,x)=>{O.scale(M/e,x/n),mn(O,Me.corpo),O.fillStyle="#121217",O.fill()}),et=new ye({map:X,alphaTest:.5,alphaToCoverage:!0,roughness:.62}),j=new Ke;j.add(new Gt(C,it),new Gt(B,et));let bt=new yi(lc(Me.corpo,hc,Cu),{depth:ri*2,bevelEnabled:!1});bt.translate(0,0,-ri),j.add(new Gt(bt,new ye({color:789520,roughness:.6})));let At=()=>new ye({color:1776418,roughness:.34,metalness:.05,emissive:16756767,emissiveIntensity:0}),Z=(O,M,x,L=0)=>{let J=Me[O],[W,st]=Ao(J),rt=new Gt(Au(lc(J,W,st),M),x);return rt.position.set(Ri(W),ai(st),b(W,st)+L),rt.userData.z0=rt.position.z,j.add(rt),rt},xt=At();["dpadU","dpadD","dpadL","dpadR"].forEach(O=>Z(O,{depth:.022,bevel:.012},xt,-.004));let Tt=O=>oi(i,128,128,M=>{M.strokeStyle="#d9d9e6",M.lineWidth=8,M.lineCap="round",M.lineJoin="round",M.beginPath(),O==="tri"&&(M.moveTo(64,26),M.lineTo(103,94),M.lineTo(25,94),M.closePath()),O==="cir"&&M.arc(64,64,36,0,7),O==="x"&&(M.moveTo(32,32),M.lineTo(96,96),M.moveTo(96,32),M.lineTo(32,96)),O==="qua"&&M.rect(30,30,68,68),M.stroke()}),Nt=At();["tri","cir","x","qua"].forEach(O=>{let M=Z(O,{depth:.024,bevel:.013},Nt,-.004),x=new Gt(new sn(.135,.135),new qe({map:Tt(O),transparent:!0,depthWrite:!1,opacity:.9,toneMapped:!1}));x.position.z=.024+.013+.0015,M.add(x)});let vt=Z("touch",{depth:.012,bevel:.017,seg:4},new ye({color:15855606,roughness:.5}),.008),Ut=Z("create",{depth:.014,bevel:.006},At(),.002),ue=Z("options",{depth:.014,bevel:.006},At(),.002),Ot=Z("ps",{depth:.02,bevel:.012},At(),.002),qt=Z("mute",{depth:.012,bevel:.006},At(),.002),Kt=[[.2,0],[.19,.012],[.135,.045],[.085,.09],[.08,.15],[.135,.178],[.158,.196],[.158,.214],[.142,.226],[.118,.218],[.07,.208],[0,.205]].map(([O,M])=>new ht(O,M)),nt=new Mi(Kt,40);nt.rotateX(ms/2);let ut=new ye({color:1710624,roughness:.55,side:Ye}),lt=O=>{let[M,x]=Ao(Me[O]),L=new Gt(nt,ut);return L.position.set(Ri(M),ai(x),b(M,x)-.008),j.add(L),L},Et=lt("stickL"),gt=lt("stickR"),kt=Z("l1",{depth:.2,bevel:.03,seg:3},At(),0),It=Z("r1",{depth:.2,bevel:.03,seg:3},At(),0);[kt,It].forEach(O=>{O.position.z=0,O.position.y-=.006,O.userData.y0=O.position.y,O.userData.z0=0});let Zt=O=>{let M=Me[O],x=M.map(rt=>rt[1]),[L]=Ao(M),J=Math.max(...x),W=new Ke,st=new Gt(Au(lc(M,L,J),{depth:.2,bevel:.05,seg:5}),new ye({color:2368556,roughness:.42,emissive:16756767,emissiveIntensity:0}));return st.scale.y=.74,st.position.z=-.1,W.add(st),W.position.set(Ri(L),ai(158),-.13),W.rotation.x=-.34,W.userData.r0=-.34,W.userData.m=st,j.add(W),W},Qt=Zt("l2"),ie=Zt("r2"),N=si.leds.map(([O,M])=>{let x=new Gt(new ji(.0165,16),new qe({color:2368556,toneMapped:!1}));return x.position.set(Ri(O),ai(M),b(O,M)+.004),j.add(x),x}),ve=oi(i,128,256,(O,M,x)=>{let L=O.createRadialGradient(M/2,x/2,0,M/2,x/2,M/2);L.addColorStop(0,"rgba(255,255,255,1)"),L.addColorStop(.4,"rgba(255,255,255,.34)"),L.addColorStop(1,"rgba(255,255,255,0)"),O.setTransform(1,0,0,x/M,0,0),O.fillStyle=L,O.fillRect(0,0,M,M)}),Xt=new qe({map:ve,transparent:!0,depthWrite:!1,blending:Gn,toneMapped:!1,color:16639,opacity:0});[[258,240,.22],[622,240,-.22]].forEach(([O,M,x])=>{let L=new Gt(new sn(.62,1.05),Xt);L.position.set(Ri(O),ai(M),b(O,M)+.03),L.rotation.z=x,j.add(L)});let oe=new Si(.86,1,48),dt=(O,M)=>{let[x,L]=Ao(Me[O]),J=new Gt(oe,new qe({color:16756767,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}));return J.position.set(Ri(x),ai(L),b(x,L)+.05),J.scale.setScalar(M),j.add(J),J},me={create:dt("create",.13),ps:dt("ps",.15)},Lt=new Wt(16639);return{g:j,create:Ut,options:ue,ps:Ot,mute:qt,l1:kt,r1:It,l2:Qt,r2:ie,stickL:Et,stickR:gt,leds:N,marcas:me,toque:vt,sup:b,setLuz(O,M){Lt.set(O),it.emissive.copy(Lt),it.emissiveIntensity=M*2.6,Xt.color.copy(Lt),Xt.opacity=M*.75},setJogador(O){N.forEach((M,x)=>M.material.color.set(O&&x===2?16777215:2368556))}}}function wu(i,t,e){let n=new Mi([[i,0],[i,t*.7],[i*.82,t],[0,t]].map(([s,r])=>new ht(s,r)),24);return n.rotateX(ms/2),new Gt(n,e)}function Ru(i,t){let a=new Ke,o=new xi,c=-.72/2,l=-2.04/2;o.moveTo(c+.42,l),o.lineTo(c+.72-.03,l),o.quadraticCurveTo(c+.72,l,c+.72,l+.03),o.lineTo(c+.72,l+2.04-.03),o.quadraticCurveTo(c+.72,l+2.04,c+.72-.03,l+2.04),o.lineTo(c+.42,l+2.04),o.quadraticCurveTo(c,l+2.04,c,l+2.04-.42),o.lineTo(c,l+.42),o.quadraticCurveTo(c,l,c+.42,l);let h=new yi(o,{depth:.2,bevelEnabled:!0,bevelSize:.038,bevelThickness:.038,bevelSegments:5,bevelOffset:-.038,curveSegments:18});h.translate(0,0,-.1);let f=new Gt(ac(h,.7),new ye({color:t,roughness:.5,envMapIntensity:.75}));i>0&&(f.rotation.y=ms),a.add(f);let d=.138,u=new ye({color:1513244,roughness:.4}),g=new ye({color:657933,roughness:.7}),y=(T,v)=>{let A=new Gt(new ji(.19,32),g);A.position.set(T,v,d+.001);let w=[[.17,0],[.11,.035],[.075,.06],[.078,.09],[.145,.105],[.148,.125],[.12,.136],[.06,.128],[0,.126]].map(([F,C])=>new ht(F,C)),_=new Mi(w,28);_.rotateX(ms/2);let E=new Gt(_,u);E.position.set(T,v,d),a.add(A,E)},m=(T,v,A,w)=>[[0,A],[A,0],[0,-A],[-A,0]].forEach(([_,E])=>{let F=wu(w,.028,u);F.position.set(T+_,v+E,d),a.add(F)}),p=-i;if(i<0){y(0,.5),m(0,-.13,.17,.073);let T=new Gt(new Rn(.12,.028,.03,2,.012),u);T.position.set(p*.2,.86,d+.006);let v=new Gt(new Rn(.1,.1,.028,2,.016),u);v.position.set(p*.13,-.69,d+.006),a.add(T,v)}else{y(0,-.13),m(0,.5,.17,.073);let T=new Gt(new Rn(.12,.028,.03,2,.012),u);T.position.set(p*.2,.86,d+.006);let v=new Gt(new Rn(.028,.12,.03,2,.012),u);v.position.set(p*.2,.86,d+.006);let A=wu(.058,.026,new ye({color:9276822,metalness:.75,roughness:.3}));A.position.set(p*.13,-.69,d),a.add(T,v,A)}let b=new Gt(new Rn(.42,.07,.18,3,.03),u);return b.position.set(i*.06,2.04/2+.002,-.02),a.add(b),a}function Zg(i){let t=new Ke,e=3.46,n=2.04,s=.276;t.add(new Gt(new Rn(e,n,s,4,.05),new ye({color:1579037,roughness:.55})));let r=new Gt(new sn(e-.05,n-.05),new qe({color:328967,toneMapped:!1}));r.position.z=s/2+.001,t.add(r);let a=new _i(new Uint8Array([6,6,12,255]),1,1);a.needsUpdate=!0;let o=2.86,c=o*9/16,l=new Gt(new sn(o,c),new qe({map:a,toneMapped:!1})),h=new Gt(new sn(o,c),new qe({map:a,toneMapped:!1,transparent:!0,opacity:0,depthWrite:!1}));l.position.z=s/2+.003,h.position.z=s/2+.004,t.add(l,h);let f=oi(i,256,144,(v,A,w)=>{let _=v.createLinearGradient(0,0,A,w);_.addColorStop(0,"rgba(255,255,255,.075)"),_.addColorStop(.32,"rgba(255,255,255,.012)"),_.addColorStop(.33,"rgba(255,255,255,0)"),_.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=_,v.fillRect(0,0,A,w)}),d=new Gt(new sn(e-.05,n-.05),new qe({map:f,transparent:!0,depthWrite:!1,blending:Gn,toneMapped:!1}));d.position.z=s/2+.005,t.add(d);let u=Ru(-1,14226702),g=Ru(1,38607);u.position.x=-(e/2+.362),g.position.x=e/2+.362,t.add(u,g);let y={},m=v=>y[v]??(y[v]=new Ks().loadAsync(Hg+Vg[v]).then(A=>(A.colorSpace=Ge,A.anisotropy=i.capabilities.getMaxAnisotropy(),A))),p=null,b=0,T={aoTrocar:null,semFusao:!1,g:t,centroTela:new U(0,0,s/2),mostra(v){v!==p&&(p=v,m(v).then(A=>{p===v&&(h.material.map=l.material.map,l.material.map=A,h.material.needsUpdate=!0,l.material.needsUpdate=!0,b=T.semFusao?0:1,h.material.opacity=b,T.aoTrocar?.())}).catch(()=>{}))},carrega:m,passo(v){b>0&&(b=Math.max(0,b-v*5),h.material.opacity=b)}};return T}function Jg(i,t){let n=new Float32Array(270),s=new Float32Array(270),r=new Le;r.setAttribute("position",new ke(n,3)),r.setAttribute("color",new ke(s,3));let a=oi(i,64,64,y=>{let m=y.createRadialGradient(32,32,0,32,32,32);m.addColorStop(0,"rgba(255,255,255,1)"),m.addColorStop(.3,"rgba(255,255,255,.55)"),m.addColorStop(1,"rgba(255,255,255,0)"),y.fillStyle=m,y.fillRect(0,0,64,64)}),o=new Fs(r,new Qi({size:.3,map:a,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Gn,toneMapped:!1}));o.frustumCulled=!1,t.add(o);let c=[0,1,2].map(()=>{let y=new Gt(new Si(.965,1,64),new qe({transparent:!0,opacity:0,depthWrite:!1,blending:Gn,toneMapped:!1,side:Ye}));return t.add(y),y}),l=new Gt(new Si(.93,1,64),new qe({transparent:!0,opacity:0,depthWrite:!1,blending:Gn,toneMapped:!1,side:Ye,color:5168803}));t.add(l);let h=new Wt,f=new U,d=new U,u=new U,g=new U;return{fluxo(y,m,p,b,T){h.set(T),f.copy(y),d.copy(m),u.copy(f).add(d).multiplyScalar(.5),u.z+=1.15,u.x+=.5;for(let v=0;v<90;v++){let A=(b*.42+v/90)%1,w=1-A;g.set(0,0,0).addScaledVector(f,w*w).addScaledVector(u,2*A*w).addScaledVector(d,A*A);let _=Math.sin(A*ms)*(.55+.45*Math.sin(v*2.4))*p;n[v*3]=g.x,n[v*3+1]=g.y,n[v*3+2]=g.z,s[v*3]=h.r*_,s[v*3+1]=h.g*_,s[v*3+2]=h.b*_}r.attributes.position.needsUpdate=!0,r.attributes.color.needsUpdate=!0,o.visible=p>.001},ondas(y,m,p,b,T){c.forEach((v,A)=>{let w=(p*.7+A/3)%1;v.position.copy(y),v.quaternion.copy(T.quaternion),v.scale.setScalar(.6+w*1.9),v.material.color.set(b),v.material.opacity=m*(1-w)*.42,v.visible=m>.001})},explosao(y,m,p){l.visible=m>0&&m<1,l.visible&&(l.position.copy(y),l.quaternion.copy(p.quaternion),l.scale.setScalar(.8+3.4*m),l.material.opacity=(1-m)*.9)}}}function Pu(i,t,{pequena:e=!1}={}){let n=new Ke;t.add(n);let s=Zg(i);s.g.position.set(0,1.42,-.5),s.g.rotation.x=-.05;let r=Yg(i,{pequena:e});r.g.position.set(0,-1.32,.75),r.g.rotation.x=-.56,n.add(s.g,r.g);let a=Jg(i,t),o=oi(i,256,340,(u,g,y)=>{u.fillStyle="#17171d",u.fillRect(0,0,g,y);let m=u.createLinearGradient(0,40,g,y);m.addColorStop(0,"#6d4cff"),m.addColorStop(1,"#c026d3"),u.fillStyle=m,u.fillRect(16,96,g-32,y-112),u.fillStyle="#fff",u.textAlign="center",u.font="800 40px Arial,sans-serif",u.fillText("Control",g/2,196),u.fillText("PS-5",g/2,244),u.fillStyle="#c9a227";for(let p=0;p<7;p++)u.fillRect(20+p*32,14,22,52)}),c=new Gt(new Rn(.44,.585,.03,2,.012),[0,0,0,0].map(()=>new ye({color:1513245})).concat([new ye({map:o,roughness:.45,transparent:!0}),new ye({color:1513245})]));c.material.forEach(u=>{u.transparent=!0}),n.add(c),r.setLuz("#0040FF",0),r.setJogador(!1);let l=new U,h=new U,f={cor:oc[0][1],efeito:"Sem efeito",ciclo:!0};return{raiz:n,sw:s,ds:r,sinal:a,aplica:(u,g,y,m)=>{let p="homebrew";u>=.55&&(p="instalar"),u>=1.25&&(p="instalando"),u>=1.5&&(p="reiniciar"),u>=1.75&&(p="parear"),u>=2.3&&(p="controles"),u>=3.7&&(p="sincronizar"),u>=4.5&&(p="conectado"),u>=4.82&&(p=f.ciclo&&Math.floor(g/3.2)%2?"gatilhos":"luzes"),s.mostra(p),s.passo(m);let b=g/2.6%1,T=1-Ee(.3,.55,u);if(c.visible=T>.01,c.visible){c.position.set(1.1,Cn(3.45,2.36,Ee(0,.8,b)),-.56),c.rotation.set(-.05,0,0);let k=T*Ee(0,.12,b)*(1-Ee(.82,1,b));c.material.forEach(R=>{R.opacity=k})}let v=Ee(2.75,2.95,u)*(1-Ee(3.75,3.95,u));r.create.position.z=r.create.userData.z0-.012*v,r.ps.position.z=r.ps.userData.z0-.016*v;let A=.6+.4*Math.sin(g*6);r.create.material.emissiveIntensity=v*1.4*A,r.ps.material.emissiveIntensity=v*1.4*A,r.marcas.create.material.opacity=v*A,r.marcas.ps.material.opacity=v*A;let w=Ee(3.82,3.98,u)*(1-Ee(4.42,4.56,u));[r.l1,r.r1].forEach(k=>{k.position.y=k.userData.y0-.022*w,k.material.emissiveIntensity=w*1.6*A});let _=u>=2.95&&u<4.5,E=u>=4.5;if(_)r.setLuz("#0040FF",g*3.2%1<.5?1:.1);else if(E){let k=f.ciclo&&u>=4.82?oc[Math.floor(g/1.1)%oc.length][1]:f.cor;r.setLuz(k,.95)}else r.setLuz("#0040FF",0);r.setJogador(E);let F=g/2.2%1,C=u>=4.7?Wg[f.efeito](F,g)*Ee(4.7,4.85,u):0;r.r2.rotation.x=r.r2.userData.r0-C*.72,r.r2.userData.m.material.emissiveIntensity=C*.35;let P=Ee(4.7,4.9,u);r.stickL.rotation.set(Math.sin(g*1.3)*.2*P,Math.cos(g*1.1)*.2*P,0),r.stickR.rotation.set(Math.cos(g*.9)*.16*P,Math.sin(g*1.5)*.16*P,0),r.g.updateWorldMatrix(!0,!1),s.g.updateWorldMatrix(!0,!1),l.set(0,ai(235),.22).applyMatrix4(r.g.matrixWorld),h.set(0,-.75,.2).applyMatrix4(s.g.matrixWorld),a.fluxo(l,h,Ee(3.9,4.05,u)*(1-Ee(4.42,4.56,u)),g,"#6fa8ff"),a.ondas(l,_?1:0,g,"#5a8bff",y);let B=h.set(0,0,.2).applyMatrix4(s.g.matrixWorld);a.explosao(B,(u-4.5)/.32,y)},estado:f}}var Ro=[[0,[-1.5,2.2,9.6],[0,1.3,-.5]],[1,[-.9,1.75,6.7],[0,1.38,-.5]],[2,[.8,1.7,6.5],[0,1.38,-.5]],[3,[-.7,1.3,6.1],[0,-1.18,.75]],[4,[1.5,.75,11.4],[0,-.05,.1]],[5,[-1.4,.65,10.6],[0,-.05,.1]]];function $g(i){let t=0;for(;t<Ro.length-2&&i>Ro[t+1][0];)t++;let[e,n,s]=Ro[t],[r,a,o]=Ro[t+1],c=Ee(e,r,i);return{p:n.map((l,h)=>Cn(l,a[h],c)),l:s.map((l,h)=>Cn(l,o[h],c))}}async function pv(i,{onReady:t,pequena:e=!1}={}){let{renderer:n,scene:s}=Iu(i,e?1.5:1.75),r=new Ne(32,1,.1,100),a=Pu(n,s,{pequena:e}),o=matchMedia("(prefers-reduced-motion: reduce)").matches,c=new U(0,-.06,.1),l=1,h=1,f=1,d=()=>{l=i.clientWidth||1,h=i.clientHeight||1,n.setSize(l,h,!1),r.aspect=l/h,f=Math.max(1,.98/r.aspect),r.updateProjectionMatrix()};new ResizeObserver(d).observe(i),d(),a.sw.semFusao=o,await Promise.all(["sincronizar","conectado","luzes","gatilhos"].map(R=>a.sw.carrega(R)));let u=!1,g=-.2,y=.06,m=!1,p=0,b=0,T=!0,v=0,A=performance.now(),w=A,_=!1,E=19,F=R=>{if(_)return 5;let z=R%E;return z<2.4?Cn(3.05,3.8,z/2.4):z<4.6?Cn(3.8,4.5,(z-2.4)/2.2):z<6?Cn(4.5,5,(z-4.6)/1.4):5},C=R=>{let z=Math.min(.05,(R-A)/1e3);A=R;let Y=Math.max(0,(R-w)/1e3),V=o?5:F(Y);a.raiz.rotation.y=g+(m||o?0:Math.sin(Y*.32)*.1),a.raiz.rotation.x=y,r.position.set(0,.62*f,11.5*f),r.lookAt(c),a.aplica(V,Y,r,z),n.render(s,r),T&&!document.hidden&&!o&&!u?v=requestAnimationFrame(C):v=0},P=()=>{!v&&!u&&(A=performance.now(),v=requestAnimationFrame(C))};a.sw.aoTrocar=()=>{o&&P()},new IntersectionObserver(([R])=>{T=R.isIntersecting,T&&P()}).observe(i),document.addEventListener("visibilitychange",()=>{!document.hidden&&T&&P()}),i.addEventListener("pointerdown",R=>{m=!0,p=R.clientX,b=R.clientY,i.setPointerCapture?.(R.pointerId),i.classList.add("pega")}),i.addEventListener("pointermove",R=>{m&&(g=Math.max(-1.1,Math.min(1.1,g+(R.clientX-p)*.008)),y=Math.max(-.28,Math.min(.5,y+(R.clientY-b)*.004)),p=R.clientX,b=R.clientY,P())});let B=()=>{m=!1,i.classList.remove("pega")};i.addEventListener("pointerup",B),i.addEventListener("pointercancel",B),v=requestAnimationFrame(C),t?.();let k=()=>{_=!0,a.estado.ciclo=!1,P()};return{setCor(R){a.estado.cor=R,k()},setEfeito(R){a.estado.efeito=R,k()},quadro(R,z){a.estado.ciclo=!1,r.position.set(0,.62*f,11.5*f),r.lookAt(c),r.updateMatrixWorld(),a.aplica(R,z,r,.5),n.render(s,r)},parar(){u=!0},cena:a}}async function mv(i,t,{pequena:e=!1}={}){let{renderer:n,scene:s}=Iu(i,e?1.5:1.75),r=new Ne(32,1,.1,100),a=Pu(n,s,{pequena:e});a.estado.ciclo=!0;let o=matchMedia("(prefers-reduced-motion: reduce)").matches,c=1,l=1,h=1,f=()=>{c=i.clientWidth||1,l=i.clientHeight||1,n.setSize(c,l,!1),r.aspect=c/l,h=Math.max(1,.86/r.aspect),r.updateProjectionMatrix()};new ResizeObserver(f).observe(i),f(),a.sw.semFusao=o,await a.sw.carrega("homebrew"),["instalar","parear","controles","sincronizar","conectado","luzes","gatilhos","instalando","reiniciar"].forEach(_=>a.sw.carrega(_));let d=new U,u=[["Create","am",()=>a.ds.create,[-.06,.2,.04],2.8,3.8],["PS","am",()=>a.ds.ps,[0,-.2,.04],2.8,3.8],["L1","am",()=>a.ds.l1,[-.1,.16,.1],3.84,4.5],["R1","am",()=>a.ds.r1,[.1,.16,.1],3.84,4.5],["Barras de luz piscando","az",()=>a.ds.toque,[0,.55,.1],3,3.72],["R2","ro",()=>a.ds.r2,[.1,.5,0],4.82,9]].map(([_,E,F,C,P,B])=>{let k=document.createElement("span");return k.className="l3d "+E,k.textContent=_,k.style.opacity="0",t.appendChild(k),{el:k,peca:F,off:C,a:P,z:B}}),g=_=>{u.forEach(({el:E,peca:F,off:C,a:P,z:B})=>{let k=Ee(P,P+.06,_)*(1-Ee(B,B+.06,_));if(E.style.opacity=k.toFixed(2),k<=.01)return;let R=F();R.updateWorldMatrix(!0,!1),d.set(C[0],C[1],C[2]).applyMatrix4(R.matrixWorld).project(r),E.style.transform=`translate(calc(${((d.x*.5+.5)*c).toFixed(1)}px - 50%),calc(${((-d.y*.5+.5)*l).toFixed(1)}px - 50%))`})},y=0,m=0,p=!1,b=0,T=performance.now(),v=T,A=_=>{let E=Math.min(.05,(_-T)/1e3);T=_,m+=(y-m)*(o?1:1-Math.exp(-E*7));let F=Math.max(0,(_-v)/1e3),{p:C,l:P}=$g(m),B=new U(C[0]-P[0],C[1]-P[1],C[2]-P[2]).multiplyScalar(h);r.position.set(P[0]+B.x,P[1]+B.y,P[2]+B.z),r.lookAt(P[0],P[1],P[2]),r.updateMatrixWorld(),a.aplica(m,F,r,E),n.render(s,r),g(m),p&&!document.hidden&&!o?b=requestAnimationFrame(A):b=0},w=()=>{b||(T=performance.now(),b=requestAnimationFrame(A))};return a.sw.aoTrocar=()=>{o&&w()},new IntersectionObserver(([_])=>{p=_.isIntersecting,p&&w()}).observe(i),document.addEventListener("visibilitychange",()=>{!document.hidden&&p&&w()}),w(),{ir(_,E=!1){y=_,E&&(m=_),w()},cena:a}}export{oc as CORES,Wg as EFEITOS,fv as has3D,pv as initHero,mv as initStory};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
