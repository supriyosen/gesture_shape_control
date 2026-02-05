(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hs="160",nc=0,vo=1,ic=2,ka=1,rc=2,yn=3,Hn=0,jt=1,Tn=2,Bn=0,$n=1,xo=2,Mo=3,So=4,sc=5,Kn=100,oc=101,ac=102,Eo=103,yo=104,lc=200,cc=201,uc=202,hc=203,Ls=204,Ps=205,fc=206,dc=207,pc=208,mc=209,gc=210,_c=211,vc=212,xc=213,Mc=214,Sc=0,Ec=1,yc=2,Fr=3,Tc=4,Ac=5,bc=6,wc=7,Wa=0,Rc=1,Cc=2,zn=0,Lc=1,Pc=2,Uc=3,Dc=4,Ic=5,Nc=6,Xa=300,Di=301,Ii=302,Us=303,Ds=304,Hr=306,Is=1e3,hn=1001,Ns=1002,kt=1003,To=1004,Qr=1005,nn=1006,Fc=1007,Zi=1008,Gn=1009,Oc=1010,Bc=1011,Vs=1012,qa=1013,Nn=1014,Fn=1015,$i=1016,ja=1017,Ya=1018,Jn=1020,zc=1021,fn=1023,Gc=1024,Hc=1025,Qn=1026,Ni=1027,Vc=1028,Ka=1029,kc=1030,Za=1031,$a=1033,es=33776,ts=33777,ns=33778,is=33779,Ao=35840,bo=35841,wo=35842,Ro=35843,Ja=36196,Co=37492,Lo=37496,Po=37808,Uo=37809,Do=37810,Io=37811,No=37812,Fo=37813,Oo=37814,Bo=37815,zo=37816,Go=37817,Ho=37818,Vo=37819,ko=37820,Wo=37821,rs=36492,Xo=36494,qo=36495,Wc=36283,jo=36284,Yo=36285,Ko=36286,Qa=3e3,ei=3001,Xc=3200,qc=3201,jc=0,Yc=1,sn="",Nt="srgb",bn="srgb-linear",ks="display-p3",Vr="display-p3-linear",Or="linear",xt="srgb",Br="rec709",zr="p3",di=7680,Zo=519,Kc=512,Zc=513,$c=514,el=515,Jc=516,Qc=517,eu=518,tu=519,$o=35044,Jo="300 es",Fs=1035,An=2e3,Gr=2001;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ss=Math.PI/180,Os=180/Math.PI;function Qi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function qt(i,e,t){return Math.max(e,Math.min(t,i))}function nu(i,e){return(i%e+e)%e}function os(i,e,t){return(1-t)*i+t*e}function Qo(i){return(i&i-1)===0&&i!==0}function Bs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*n-l*r+e.x,this.y=o*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,r,o,l,a,u,h){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,l,a,u,h)}set(e,t,n,r,o,l,a,u,h){const p=this.elements;return p[0]=e,p[1]=r,p[2]=a,p[3]=t,p[4]=o,p[5]=u,p[6]=n,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,l=n[0],a=n[3],u=n[6],h=n[1],p=n[4],g=n[7],_=n[2],M=n[5],v=n[8],S=r[0],m=r[3],f=r[6],P=r[1],T=r[4],C=r[7],z=r[2],F=r[5],I=r[8];return o[0]=l*S+a*P+u*z,o[3]=l*m+a*T+u*F,o[6]=l*f+a*C+u*I,o[1]=h*S+p*P+g*z,o[4]=h*m+p*T+g*F,o[7]=h*f+p*C+g*I,o[2]=_*S+M*P+v*z,o[5]=_*m+M*T+v*F,o[8]=_*f+M*C+v*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],l=e[4],a=e[5],u=e[6],h=e[7],p=e[8];return t*l*p-t*a*h-n*o*p+n*a*u+r*o*h-r*l*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],l=e[4],a=e[5],u=e[6],h=e[7],p=e[8],g=p*l-a*h,_=a*u-p*o,M=h*o-l*u,v=t*g+n*_+r*M;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=g*S,e[1]=(r*h-p*n)*S,e[2]=(a*n-r*l)*S,e[3]=_*S,e[4]=(p*t-r*u)*S,e[5]=(r*o-a*t)*S,e[6]=M*S,e[7]=(n*u-h*t)*S,e[8]=(l*t-n*o)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,l,a){const u=Math.cos(o),h=Math.sin(o);return this.set(n*u,n*h,-n*(u*l+h*a)+l+e,-r*h,r*u,-r*(-h*l+u*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(as.makeScale(e,t)),this}rotate(e){return this.premultiply(as.makeRotation(-e)),this}translate(e,t){return this.premultiply(as.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const as=new tt;function tl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ji(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iu(){const i=Ji("canvas");return i.style.display="block",i}const ea={};function Ki(i){i in ea||(ea[i]=!0,console.warn(i))}const ta=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),na=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ur={[bn]:{transfer:Or,primaries:Br,toReference:i=>i,fromReference:i=>i},[Nt]:{transfer:xt,primaries:Br,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Vr]:{transfer:Or,primaries:zr,toReference:i=>i.applyMatrix3(na),fromReference:i=>i.applyMatrix3(ta)},[ks]:{transfer:xt,primaries:zr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(na),fromReference:i=>i.applyMatrix3(ta).convertLinearToSRGB()}},ru=new Set([bn,Vr]),ft={enabled:!0,_workingColorSpace:bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ru.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ur[e].toReference,r=ur[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ur[i].primaries},getTransfer:function(i){return i===sn?Or:ur[i].transfer}};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pi;class nl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pi===void 0&&(pi=Ji("canvas")),pi.width=e.width,pi.height=e.height;const n=pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ji("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=Pi(o[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let su=0;class il{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Qi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,a=r.length;l<a;l++)r[l].isDataTexture?o.push(cs(r[l].image)):o.push(cs(r[l]))}else o=cs(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function cs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ou=0;class Yt extends Oi{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=hn,r=hn,o=nn,l=Zi,a=fn,u=Gn,h=Yt.DEFAULT_ANISOTROPY,p=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Qi(),this.name="",this.source=new il(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=l,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=u,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===ei?Nt:sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case Ns:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case Ns:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?ei:Qa}set encoding(e){Ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ei?Nt:sn}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Xa;Yt.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*o,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*o,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*o,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const u=e.elements,h=u[0],p=u[4],g=u[8],_=u[1],M=u[5],v=u[9],S=u[2],m=u[6],f=u[10];if(Math.abs(p-_)<.01&&Math.abs(g-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+S)<.1&&Math.abs(v+m)<.1&&Math.abs(h+M+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(h+1)/2,C=(M+1)/2,z=(f+1)/2,F=(p+_)/4,I=(g+S)/4,se=(v+m)/4;return T>C&&T>z?T<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(T),r=F/n,o=I/n):C>z?C<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(C),n=F/r,o=se/r):z<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(z),n=I/o,r=se/o),this.set(n,r,o,t),this}let P=Math.sqrt((m-v)*(m-v)+(g-S)*(g-S)+(_-p)*(_-p));return Math.abs(P)<.001&&(P=1),this.x=(m-v)/P,this.y=(g-S)/P,this.z=(_-p)/P,this.w=Math.acos((h+M+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class au extends Oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ei?Nt:sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Yt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new il(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends au{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rl extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lu extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,l,a){let u=n[r+0],h=n[r+1],p=n[r+2],g=n[r+3];const _=o[l+0],M=o[l+1],v=o[l+2],S=o[l+3];if(a===0){e[t+0]=u,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(a===1){e[t+0]=_,e[t+1]=M,e[t+2]=v,e[t+3]=S;return}if(g!==S||u!==_||h!==M||p!==v){let m=1-a;const f=u*_+h*M+p*v+g*S,P=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const z=Math.sqrt(T),F=Math.atan2(z,f*P);m=Math.sin(m*F)/z,a=Math.sin(a*F)/z}const C=a*P;if(u=u*m+_*C,h=h*m+M*C,p=p*m+v*C,g=g*m+S*C,m===1-a){const z=1/Math.sqrt(u*u+h*h+p*p+g*g);u*=z,h*=z,p*=z,g*=z}}e[t]=u,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,o,l){const a=n[r],u=n[r+1],h=n[r+2],p=n[r+3],g=o[l],_=o[l+1],M=o[l+2],v=o[l+3];return e[t]=a*v+p*g+u*M-h*_,e[t+1]=u*v+p*_+h*g-a*M,e[t+2]=h*v+p*M+a*_-u*g,e[t+3]=p*v-a*g-u*_-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,l=e._order,a=Math.cos,u=Math.sin,h=a(n/2),p=a(r/2),g=a(o/2),_=u(n/2),M=u(r/2),v=u(o/2);switch(l){case"XYZ":this._x=_*p*g+h*M*v,this._y=h*M*g-_*p*v,this._z=h*p*v+_*M*g,this._w=h*p*g-_*M*v;break;case"YXZ":this._x=_*p*g+h*M*v,this._y=h*M*g-_*p*v,this._z=h*p*v-_*M*g,this._w=h*p*g+_*M*v;break;case"ZXY":this._x=_*p*g-h*M*v,this._y=h*M*g+_*p*v,this._z=h*p*v+_*M*g,this._w=h*p*g-_*M*v;break;case"ZYX":this._x=_*p*g-h*M*v,this._y=h*M*g+_*p*v,this._z=h*p*v-_*M*g,this._w=h*p*g+_*M*v;break;case"YZX":this._x=_*p*g+h*M*v,this._y=h*M*g+_*p*v,this._z=h*p*v-_*M*g,this._w=h*p*g-_*M*v;break;case"XZY":this._x=_*p*g-h*M*v,this._y=h*M*g-_*p*v,this._z=h*p*v+_*M*g,this._w=h*p*g+_*M*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],l=t[1],a=t[5],u=t[9],h=t[2],p=t[6],g=t[10],_=n+a+g;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(p-u)*M,this._y=(o-h)*M,this._z=(l-r)*M}else if(n>a&&n>g){const M=2*Math.sqrt(1+n-a-g);this._w=(p-u)/M,this._x=.25*M,this._y=(r+l)/M,this._z=(o+h)/M}else if(a>g){const M=2*Math.sqrt(1+a-n-g);this._w=(o-h)/M,this._x=(r+l)/M,this._y=.25*M,this._z=(u+p)/M}else{const M=2*Math.sqrt(1+g-n-a);this._w=(l-r)/M,this._x=(o+h)/M,this._y=(u+p)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,l=e._w,a=t._x,u=t._y,h=t._z,p=t._w;return this._x=n*p+l*a+r*h-o*u,this._y=r*p+l*u+o*a-n*h,this._z=o*p+l*h+n*u-r*a,this._w=l*p-n*a-r*u-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,l=this._w;let a=l*e._w+n*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=l,this._x=n,this._y=r,this._z=o,this;const u=1-a*a;if(u<=Number.EPSILON){const M=1-t;return this._w=M*l+t*this._w,this._x=M*n+t*this._x,this._y=M*r+t*this._y,this._z=M*o+t*this._z,this.normalize(),this}const h=Math.sqrt(u),p=Math.atan2(h,a),g=Math.sin((1-t)*p)/h,_=Math.sin(t*p)/h;return this._w=l*g+this._w*_,this._x=n*g+this._x*_,this._y=r*g+this._y*_,this._z=o*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(o),n*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ia.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ia.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,l=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*l,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*l,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,l=e.y,a=e.z,u=e.w,h=2*(l*r-a*n),p=2*(a*t-o*r),g=2*(o*n-l*t);return this.x=t+u*h+l*g-a*p,this.y=n+u*p+a*h-o*g,this.z=r+u*g+o*p-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,l=t.x,a=t.y,u=t.z;return this.x=r*u-o*a,this.y=o*l-n*u,this.z=n*a-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return us.copy(this).projectOnVector(e),this.sub(us)}reflect(e){return this.sub(us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const us=new X,ia=new er;class tr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,a=o.count;l<a;l++)e.isMesh===!0?e.getVertexPosition(l,an):an.fromBufferAttribute(o,l),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const r=e.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),fr.subVectors(this.max,Xi),mi.subVectors(e.a,Xi),gi.subVectors(e.b,Xi),_i.subVectors(e.c,Xi),Ln.subVectors(gi,mi),Pn.subVectors(_i,gi),kn.subVectors(mi,_i);let t=[0,-Ln.z,Ln.y,0,-Pn.z,Pn.y,0,-kn.z,kn.y,Ln.z,0,-Ln.x,Pn.z,0,-Pn.x,kn.z,0,-kn.x,-Ln.y,Ln.x,0,-Pn.y,Pn.x,0,-kn.y,kn.x,0];return!hs(t,mi,gi,_i,fr)||(t=[1,0,0,0,1,0,0,0,1],!hs(t,mi,gi,_i,fr))?!1:(dr.crossVectors(Ln,Pn),t=[dr.x,dr.y,dr.z],hs(t,mi,gi,_i,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new X,new X,new X,new X,new X,new X,new X,new X],an=new X,hr=new tr,mi=new X,gi=new X,_i=new X,Ln=new X,Pn=new X,kn=new X,Xi=new X,fr=new X,dr=new X,Wn=new X;function hs(i,e,t,n,r){for(let o=0,l=i.length-3;o<=l;o+=3){Wn.fromArray(i,o);const a=r.x*Math.abs(Wn.x)+r.y*Math.abs(Wn.y)+r.z*Math.abs(Wn.z),u=e.dot(Wn),h=t.dot(Wn),p=n.dot(Wn);if(Math.max(-Math.max(u,h,p),Math.min(u,h,p))>a)return!1}return!0}const cu=new tr,qi=new X,fs=new X;class kr{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cu.setFromPoints(e).getCenter(n);let r=0;for(let o=0,l=e.length;o<l;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(qi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(fs)),this.expandByPoint(qi.copy(e.center).sub(fs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new X,ds=new X,pr=new X,Un=new X,ps=new X,mr=new X,ms=new X;class sl{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ds.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(ds);const o=e.distanceTo(t)*.5,l=-this.direction.dot(pr),a=Un.dot(this.direction),u=-Un.dot(pr),h=Un.lengthSq(),p=Math.abs(1-l*l);let g,_,M,v;if(p>0)if(g=l*u-a,_=l*a-u,v=o*p,g>=0)if(_>=-v)if(_<=v){const S=1/p;g*=S,_*=S,M=g*(g+l*_+2*a)+_*(l*g+_+2*u)+h}else _=o,g=Math.max(0,-(l*_+a)),M=-g*g+_*(_+2*u)+h;else _=-o,g=Math.max(0,-(l*_+a)),M=-g*g+_*(_+2*u)+h;else _<=-v?(g=Math.max(0,-(-l*o+a)),_=g>0?-o:Math.min(Math.max(-o,-u),o),M=-g*g+_*(_+2*u)+h):_<=v?(g=0,_=Math.min(Math.max(-o,-u),o),M=_*(_+2*u)+h):(g=Math.max(0,-(l*o+a)),_=g>0?o:Math.min(Math.max(-o,-u),o),M=-g*g+_*(_+2*u)+h);else _=l>0?-o:o,g=Math.max(0,-(l*_+a)),M=-g*g+_*(_+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(ds).addScaledVector(pr,_),M}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const n=xn.dot(this.direction),r=xn.dot(xn)-n*n,o=e.radius*e.radius;if(r>o)return null;const l=Math.sqrt(o-r),a=n-l,u=n+l;return u<0?null:a<0?this.at(u,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,l,a,u;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(n=(e.min.x-_.x)*h,r=(e.max.x-_.x)*h):(n=(e.max.x-_.x)*h,r=(e.min.x-_.x)*h),p>=0?(o=(e.min.y-_.y)*p,l=(e.max.y-_.y)*p):(o=(e.max.y-_.y)*p,l=(e.min.y-_.y)*p),n>l||o>r||((o>n||isNaN(n))&&(n=o),(l<r||isNaN(r))&&(r=l),g>=0?(a=(e.min.z-_.z)*g,u=(e.max.z-_.z)*g):(a=(e.max.z-_.z)*g,u=(e.min.z-_.z)*g),n>u||a>r)||((a>n||n!==n)&&(n=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,r,o){ps.subVectors(t,e),mr.subVectors(n,e),ms.crossVectors(ps,mr);let l=this.direction.dot(ms),a;if(l>0){if(r)return null;a=1}else if(l<0)a=-1,l=-l;else return null;Un.subVectors(this.origin,e);const u=a*this.direction.dot(mr.crossVectors(Un,mr));if(u<0)return null;const h=a*this.direction.dot(ps.cross(Un));if(h<0||u+h>l)return null;const p=-a*Un.dot(ms);return p<0?null:this.at(p/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,n,r,o,l,a,u,h,p,g,_,M,v,S,m){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,l,a,u,h,p,g,_,M,v,S,m)}set(e,t,n,r,o,l,a,u,h,p,g,_,M,v,S,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=o,f[5]=l,f[9]=a,f[13]=u,f[2]=h,f[6]=p,f[10]=g,f[14]=_,f[3]=M,f[7]=v,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/vi.setFromMatrixColumn(e,0).length(),o=1/vi.setFromMatrixColumn(e,1).length(),l=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,l=Math.cos(n),a=Math.sin(n),u=Math.cos(r),h=Math.sin(r),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const _=l*p,M=l*g,v=a*p,S=a*g;t[0]=u*p,t[4]=-u*g,t[8]=h,t[1]=M+v*h,t[5]=_-S*h,t[9]=-a*u,t[2]=S-_*h,t[6]=v+M*h,t[10]=l*u}else if(e.order==="YXZ"){const _=u*p,M=u*g,v=h*p,S=h*g;t[0]=_+S*a,t[4]=v*a-M,t[8]=l*h,t[1]=l*g,t[5]=l*p,t[9]=-a,t[2]=M*a-v,t[6]=S+_*a,t[10]=l*u}else if(e.order==="ZXY"){const _=u*p,M=u*g,v=h*p,S=h*g;t[0]=_-S*a,t[4]=-l*g,t[8]=v+M*a,t[1]=M+v*a,t[5]=l*p,t[9]=S-_*a,t[2]=-l*h,t[6]=a,t[10]=l*u}else if(e.order==="ZYX"){const _=l*p,M=l*g,v=a*p,S=a*g;t[0]=u*p,t[4]=v*h-M,t[8]=_*h+S,t[1]=u*g,t[5]=S*h+_,t[9]=M*h-v,t[2]=-h,t[6]=a*u,t[10]=l*u}else if(e.order==="YZX"){const _=l*u,M=l*h,v=a*u,S=a*h;t[0]=u*p,t[4]=S-_*g,t[8]=v*g+M,t[1]=g,t[5]=l*p,t[9]=-a*p,t[2]=-h*p,t[6]=M*g+v,t[10]=_-S*g}else if(e.order==="XZY"){const _=l*u,M=l*h,v=a*u,S=a*h;t[0]=u*p,t[4]=-g,t[8]=h*p,t[1]=_*g+S,t[5]=l*p,t[9]=M*g-v,t[2]=v*g-M,t[6]=a*p,t[10]=S*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uu,e,hu)}lookAt(e,t,n){const r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Dn.crossVectors(n,Zt),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Dn.crossVectors(n,Zt)),Dn.normalize(),gr.crossVectors(Zt,Dn),r[0]=Dn.x,r[4]=gr.x,r[8]=Zt.x,r[1]=Dn.y,r[5]=gr.y,r[9]=Zt.y,r[2]=Dn.z,r[6]=gr.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,l=n[0],a=n[4],u=n[8],h=n[12],p=n[1],g=n[5],_=n[9],M=n[13],v=n[2],S=n[6],m=n[10],f=n[14],P=n[3],T=n[7],C=n[11],z=n[15],F=r[0],I=r[4],se=r[8],b=r[12],U=r[1],Y=r[5],Q=r[9],ce=r[13],O=r[2],q=r[6],Z=r[10],ee=r[14],$=r[3],J=r[7],te=r[11],he=r[15];return o[0]=l*F+a*U+u*O+h*$,o[4]=l*I+a*Y+u*q+h*J,o[8]=l*se+a*Q+u*Z+h*te,o[12]=l*b+a*ce+u*ee+h*he,o[1]=p*F+g*U+_*O+M*$,o[5]=p*I+g*Y+_*q+M*J,o[9]=p*se+g*Q+_*Z+M*te,o[13]=p*b+g*ce+_*ee+M*he,o[2]=v*F+S*U+m*O+f*$,o[6]=v*I+S*Y+m*q+f*J,o[10]=v*se+S*Q+m*Z+f*te,o[14]=v*b+S*ce+m*ee+f*he,o[3]=P*F+T*U+C*O+z*$,o[7]=P*I+T*Y+C*q+z*J,o[11]=P*se+T*Q+C*Z+z*te,o[15]=P*b+T*ce+C*ee+z*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],l=e[1],a=e[5],u=e[9],h=e[13],p=e[2],g=e[6],_=e[10],M=e[14],v=e[3],S=e[7],m=e[11],f=e[15];return v*(+o*u*g-r*h*g-o*a*_+n*h*_+r*a*M-n*u*M)+S*(+t*u*M-t*h*_+o*l*_-r*l*M+r*h*p-o*u*p)+m*(+t*h*g-t*a*M-o*l*g+n*l*M+o*a*p-n*h*p)+f*(-r*a*p-t*u*g+t*a*_+r*l*g-n*l*_+n*u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],l=e[4],a=e[5],u=e[6],h=e[7],p=e[8],g=e[9],_=e[10],M=e[11],v=e[12],S=e[13],m=e[14],f=e[15],P=g*m*h-S*_*h+S*u*M-a*m*M-g*u*f+a*_*f,T=v*_*h-p*m*h-v*u*M+l*m*M+p*u*f-l*_*f,C=p*S*h-v*g*h+v*a*M-l*S*M-p*a*f+l*g*f,z=v*g*u-p*S*u-v*a*_+l*S*_+p*a*m-l*g*m,F=t*P+n*T+r*C+o*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=P*I,e[1]=(S*_*o-g*m*o-S*r*M+n*m*M+g*r*f-n*_*f)*I,e[2]=(a*m*o-S*u*o+S*r*h-n*m*h-a*r*f+n*u*f)*I,e[3]=(g*u*o-a*_*o-g*r*h+n*_*h+a*r*M-n*u*M)*I,e[4]=T*I,e[5]=(p*m*o-v*_*o+v*r*M-t*m*M-p*r*f+t*_*f)*I,e[6]=(v*u*o-l*m*o-v*r*h+t*m*h+l*r*f-t*u*f)*I,e[7]=(l*_*o-p*u*o+p*r*h-t*_*h-l*r*M+t*u*M)*I,e[8]=C*I,e[9]=(v*g*o-p*S*o-v*n*M+t*S*M+p*n*f-t*g*f)*I,e[10]=(l*S*o-v*a*o+v*n*h-t*S*h-l*n*f+t*a*f)*I,e[11]=(p*a*o-l*g*o-p*n*h+t*g*h+l*n*M-t*a*M)*I,e[12]=z*I,e[13]=(p*S*r-v*g*r+v*n*_-t*S*_-p*n*m+t*g*m)*I,e[14]=(v*a*r-l*S*r-v*n*u+t*S*u+l*n*m-t*a*m)*I,e[15]=(l*g*r-p*a*r+p*n*u-t*g*u-l*n*_+t*a*_)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,l=e.x,a=e.y,u=e.z,h=o*l,p=o*a;return this.set(h*l+n,h*a-r*u,h*u+r*a,0,h*a+r*u,p*a+n,p*u-r*l,0,h*u-r*a,p*u+r*l,o*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,l){return this.set(1,n,o,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,l=t._y,a=t._z,u=t._w,h=o+o,p=l+l,g=a+a,_=o*h,M=o*p,v=o*g,S=l*p,m=l*g,f=a*g,P=u*h,T=u*p,C=u*g,z=n.x,F=n.y,I=n.z;return r[0]=(1-(S+f))*z,r[1]=(M+C)*z,r[2]=(v-T)*z,r[3]=0,r[4]=(M-C)*F,r[5]=(1-(_+f))*F,r[6]=(m+P)*F,r[7]=0,r[8]=(v+T)*I,r[9]=(m-P)*I,r[10]=(1-(_+S))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=vi.set(r[0],r[1],r[2]).length();const l=vi.set(r[4],r[5],r[6]).length(),a=vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],ln.copy(this);const h=1/o,p=1/l,g=1/a;return ln.elements[0]*=h,ln.elements[1]*=h,ln.elements[2]*=h,ln.elements[4]*=p,ln.elements[5]*=p,ln.elements[6]*=p,ln.elements[8]*=g,ln.elements[9]*=g,ln.elements[10]*=g,t.setFromRotationMatrix(ln),n.x=o,n.y=l,n.z=a,this}makePerspective(e,t,n,r,o,l,a=An){const u=this.elements,h=2*o/(t-e),p=2*o/(n-r),g=(t+e)/(t-e),_=(n+r)/(n-r);let M,v;if(a===An)M=-(l+o)/(l-o),v=-2*l*o/(l-o);else if(a===Gr)M=-l/(l-o),v=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=h,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=p,u[9]=_,u[13]=0,u[2]=0,u[6]=0,u[10]=M,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,o,l,a=An){const u=this.elements,h=1/(t-e),p=1/(n-r),g=1/(l-o),_=(t+e)*h,M=(n+r)*p;let v,S;if(a===An)v=(l+o)*g,S=-2*g;else if(a===Gr)v=o*g,S=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-_,u[1]=0,u[5]=2*p,u[9]=0,u[13]=-M,u[2]=0,u[6]=0,u[10]=S,u[14]=-v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vi=new X,ln=new Ut,uu=new X(0,0,0),hu=new X(1,1,1),Dn=new X,gr=new X,Zt=new X,ra=new Ut,sa=new er;class Wr{constructor(e=0,t=0,n=0,r=Wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],l=r[4],a=r[8],u=r[1],h=r[5],p=r[9],g=r[2],_=r[6],M=r[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,M),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,M),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(qt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(u,o));break;case"ZYX":this._y=Math.asin(-qt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(u,o)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(a,M));break;case"XZY":this._z=Math.asin(-qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-p,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ra.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ra,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sa.setFromEuler(this),this.setFromQuaternion(sa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wr.DEFAULT_ORDER="XYZ";class ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fu=0;const oa=new X,xi=new er,Mn=new Ut,_r=new X,ji=new X,du=new X,pu=new er,aa=new X(1,0,0),la=new X(0,1,0),ca=new X(0,0,1),mu={type:"added"},gu={type:"removed"};class Kt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new X,t=new Wr,n=new er,r=new X(1,1,1);function o(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new tt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(aa,e)}rotateY(e){return this.rotateOnAxis(la,e)}rotateZ(e){return this.rotateOnAxis(ca,e)}translateOnAxis(e,t){return oa.copy(e).applyQuaternion(this.quaternion),this.position.add(oa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(aa,e)}translateY(e){return this.translateOnAxis(la,e)}translateZ(e){return this.translateOnAxis(ca,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_r.copy(e):_r.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ji,_r,this.up):Mn.lookAt(_r,ji,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),xi.setFromRotationMatrix(Mn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,du),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,pu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let h=0,p=u.length;h<p;h++){const g=u[h];o(e.shapes,g)}else o(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,h=this.material.length;u<h;u++)a.push(o(e.materials,this.material[u]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(o(e.animations,u))}}if(t){const a=l(e.geometries),u=l(e.materials),h=l(e.textures),p=l(e.images),g=l(e.shapes),_=l(e.skeletons),M=l(e.animations),v=l(e.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),_.length>0&&(n.skeletons=_),M.length>0&&(n.animations=M),v.length>0&&(n.nodes=v)}return n.object=r,n;function l(a){const u=[];for(const h in a){const p=a[h];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new X(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new X,Sn=new X,gs=new X,En=new X,Mi=new X,Si=new X,ua=new X,_s=new X,vs=new X,xs=new X;let vr=!1;class un{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),cn.subVectors(e,t),r.cross(cn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){cn.subVectors(r,t),Sn.subVectors(n,t),gs.subVectors(e,t);const l=cn.dot(cn),a=cn.dot(Sn),u=cn.dot(gs),h=Sn.dot(Sn),p=Sn.dot(gs),g=l*h-a*a;if(g===0)return o.set(0,0,0),null;const _=1/g,M=(h*u-a*p)*_,v=(l*p-a*u)*_;return o.set(1-M-v,v,M)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(e,t,n,r,o,l,a,u){return vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vr=!0),this.getInterpolation(e,t,n,r,o,l,a,u)}static getInterpolation(e,t,n,r,o,l,a,u){return this.getBarycoord(e,t,n,r,En)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(o,En.x),u.addScaledVector(l,En.y),u.addScaledVector(a,En.z),u)}static isFrontFacing(e,t,n,r){return cn.subVectors(n,t),Sn.subVectors(e,t),cn.cross(Sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),cn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,o){return vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vr=!0),un.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}getInterpolation(e,t,n,r,o){return un.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let l,a;Mi.subVectors(r,n),Si.subVectors(o,n),_s.subVectors(e,n);const u=Mi.dot(_s),h=Si.dot(_s);if(u<=0&&h<=0)return t.copy(n);vs.subVectors(e,r);const p=Mi.dot(vs),g=Si.dot(vs);if(p>=0&&g<=p)return t.copy(r);const _=u*g-p*h;if(_<=0&&u>=0&&p<=0)return l=u/(u-p),t.copy(n).addScaledVector(Mi,l);xs.subVectors(e,o);const M=Mi.dot(xs),v=Si.dot(xs);if(v>=0&&M<=v)return t.copy(o);const S=M*h-u*v;if(S<=0&&h>=0&&v<=0)return a=h/(h-v),t.copy(n).addScaledVector(Si,a);const m=p*v-M*g;if(m<=0&&g-p>=0&&M-v>=0)return ua.subVectors(o,r),a=(g-p)/(g-p+(M-v)),t.copy(r).addScaledVector(ua,a);const f=1/(m+S+_);return l=S*f,a=_*f,t.copy(n).addScaledVector(Mi,l).addScaledVector(Si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Ms(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ft.workingColorSpace){if(e=nu(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,l=2*n-o;this.r=Ms(l,o,e+1/3),this.g=Ms(l,o,e),this.b=Ms(l,o,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,t=Nt){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=r[1],a=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=al[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ft.fromWorkingColorSpace(zt.copy(this),e),Math.round(qt(zt.r*255,0,255))*65536+Math.round(qt(zt.g*255,0,255))*256+Math.round(qt(zt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,r=zt.g,o=zt.b,l=Math.max(n,r,o),a=Math.min(n,r,o);let u,h;const p=(a+l)/2;if(a===l)u=0,h=0;else{const g=l-a;switch(h=p<=.5?g/(l+a):g/(2-l-a),l){case n:u=(r-o)/g+(r<o?6:0);break;case r:u=(o-n)/g+2;break;case o:u=(n-r)/g+4;break}u/=6}return e.h=u,e.s=h,e.l=p,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Nt){ft.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,r=zt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(xr);const n=os(In.h,xr.h,t),r=os(In.s,xr.s,t),o=os(In.l,xr.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new nt;nt.NAMES=al;let _u=0;class nr extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=$n,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ls,this.blendDst=Ps,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$n&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ls&&(n.blendSrc=this.blendSrc),this.blendDst!==Ps&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const l=[];for(const a in o){const u=o[a];delete u.metadata,l.push(u)}return l}if(t){const o=r(e.textures),l=r(e.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ll extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new X,Mr=new dt;class dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),r=Xt(r,this.array),o=Xt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$o&&(e.usage=this.usage),e}}class cl extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ul extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ti extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vu=0;const tn=new Ut,Ss=new Kt,Ei=new X,$t=new tr,Yi=new tr,Pt=new X;class wn extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tl(e)?ul:cl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new tt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Ss.lookAt(e),Ss.updateMatrix(),this.applyMatrix4(Ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ti(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];$t.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const a=t[o];Yi.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors($t.min,Yi.min),$t.expandByPoint(Pt),Pt.addVectors($t.max,Yi.max),$t.expandByPoint(Pt)):($t.expandByPoint(Yi.min),$t.expandByPoint(Yi.max))}$t.getCenter(n);let r=0;for(let o=0,l=e.count;o<l;o++)Pt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(Pt));if(t)for(let o=0,l=t.length;o<l;o++){const a=t[o],u=this.morphTargetsRelative;for(let h=0,p=a.count;h<p;h++)Pt.fromBufferAttribute(a,h),u&&(Ei.fromBufferAttribute(e,h),Pt.add(Ei)),r=Math.max(r,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,o=t.normal.array,l=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*a),4));const u=this.getAttribute("tangent").array,h=[],p=[];for(let U=0;U<a;U++)h[U]=new X,p[U]=new X;const g=new X,_=new X,M=new X,v=new dt,S=new dt,m=new dt,f=new X,P=new X;function T(U,Y,Q){g.fromArray(r,U*3),_.fromArray(r,Y*3),M.fromArray(r,Q*3),v.fromArray(l,U*2),S.fromArray(l,Y*2),m.fromArray(l,Q*2),_.sub(g),M.sub(g),S.sub(v),m.sub(v);const ce=1/(S.x*m.y-m.x*S.y);isFinite(ce)&&(f.copy(_).multiplyScalar(m.y).addScaledVector(M,-S.y).multiplyScalar(ce),P.copy(M).multiplyScalar(S.x).addScaledVector(_,-m.x).multiplyScalar(ce),h[U].add(f),h[Y].add(f),h[Q].add(f),p[U].add(P),p[Y].add(P),p[Q].add(P))}let C=this.groups;C.length===0&&(C=[{start:0,count:n.length}]);for(let U=0,Y=C.length;U<Y;++U){const Q=C[U],ce=Q.start,O=Q.count;for(let q=ce,Z=ce+O;q<Z;q+=3)T(n[q+0],n[q+1],n[q+2])}const z=new X,F=new X,I=new X,se=new X;function b(U){I.fromArray(o,U*3),se.copy(I);const Y=h[U];z.copy(Y),z.sub(I.multiplyScalar(I.dot(Y))).normalize(),F.crossVectors(se,Y);const ce=F.dot(p[U])<0?-1:1;u[U*4]=z.x,u[U*4+1]=z.y,u[U*4+2]=z.z,u[U*4+3]=ce}for(let U=0,Y=C.length;U<Y;++U){const Q=C[U],ce=Q.start,O=Q.count;for(let q=ce,Z=ce+O;q<Z;q+=3)b(n[q+0]),b(n[q+1]),b(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,M=n.count;_<M;_++)n.setXYZ(_,0,0,0);const r=new X,o=new X,l=new X,a=new X,u=new X,h=new X,p=new X,g=new X;if(e)for(let _=0,M=e.count;_<M;_+=3){const v=e.getX(_+0),S=e.getX(_+1),m=e.getX(_+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,m),p.subVectors(l,o),g.subVectors(r,o),p.cross(g),a.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,m),a.add(p),u.add(p),h.add(p),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let _=0,M=t.count;_<M;_+=3)r.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),l.fromBufferAttribute(t,_+2),p.subVectors(l,o),g.subVectors(r,o),p.cross(g),n.setXYZ(_+0,p.x,p.y,p.z),n.setXYZ(_+1,p.x,p.y,p.z),n.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,u){const h=a.array,p=a.itemSize,g=a.normalized,_=new h.constructor(u.length*p);let M=0,v=0;for(let S=0,m=u.length;S<m;S++){a.isInterleavedBufferAttribute?M=u[S]*a.data.stride+a.offset:M=u[S]*p;for(let f=0;f<p;f++)_[v++]=h[M++]}return new dn(_,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,n=this.index.array,r=this.attributes;for(const a in r){const u=r[a],h=e(u,n);t.setAttribute(a,h)}const o=this.morphAttributes;for(const a in o){const u=[],h=o[a];for(let p=0,g=h.length;p<g;p++){const _=h[p],M=e(_,n);u.push(M)}t.morphAttributes[a]=u}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,u=l.length;a<u;a++){const h=l[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const r={};let o=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],p=[];for(let g=0,_=h.length;g<_;g++){const M=h[g];p.push(M.toJSON(e.data))}p.length>0&&(r[u]=p,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const p=r[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],g=o[h];for(let _=0,M=g.length;_<M;_++)p.push(g[_].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,p=l.length;h<p;h++){const g=l[h];this.addGroup(g.start,g.count,g.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ha=new Ut,Xn=new sl,Sr=new kr,fa=new X,yi=new X,Ti=new X,Ai=new X,Es=new X,Er=new X,yr=new dt,Tr=new dt,Ar=new dt,da=new X,pa=new X,ma=new X,br=new X,wr=new X;class On extends Kt{constructor(e=new wn,t=new ll){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Er.set(0,0,0);for(let u=0,h=o.length;u<h;u++){const p=a[u],g=o[u];p!==0&&(Es.fromBufferAttribute(g,e),l?Er.addScaledVector(Es,p):Er.addScaledVector(Es.sub(t),p))}t.add(Er)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(o),Xn.copy(e.ray).recast(e.near),!(Sr.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Sr,fa)===null||Xn.origin.distanceToSquared(fa)>(e.far-e.near)**2))&&(ha.copy(o).invert(),Xn.copy(e.ray).applyMatrix4(ha),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let r;const o=this.geometry,l=this.material,a=o.index,u=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,_=o.groups,M=o.drawRange;if(a!==null)if(Array.isArray(l))for(let v=0,S=_.length;v<S;v++){const m=_[v],f=l[m.materialIndex],P=Math.max(m.start,M.start),T=Math.min(a.count,Math.min(m.start+m.count,M.start+M.count));for(let C=P,z=T;C<z;C+=3){const F=a.getX(C),I=a.getX(C+1),se=a.getX(C+2);r=Rr(this,f,e,n,h,p,g,F,I,se),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,M.start),S=Math.min(a.count,M.start+M.count);for(let m=v,f=S;m<f;m+=3){const P=a.getX(m),T=a.getX(m+1),C=a.getX(m+2);r=Rr(this,l,e,n,h,p,g,P,T,C),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let v=0,S=_.length;v<S;v++){const m=_[v],f=l[m.materialIndex],P=Math.max(m.start,M.start),T=Math.min(u.count,Math.min(m.start+m.count,M.start+M.count));for(let C=P,z=T;C<z;C+=3){const F=C,I=C+1,se=C+2;r=Rr(this,f,e,n,h,p,g,F,I,se),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,M.start),S=Math.min(u.count,M.start+M.count);for(let m=v,f=S;m<f;m+=3){const P=m,T=m+1,C=m+2;r=Rr(this,l,e,n,h,p,g,P,T,C),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function xu(i,e,t,n,r,o,l,a){let u;if(e.side===jt?u=n.intersectTriangle(l,o,r,!0,a):u=n.intersectTriangle(r,o,l,e.side===Hn,a),u===null)return null;wr.copy(a),wr.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(wr);return h<t.near||h>t.far?null:{distance:h,point:wr.clone(),object:i}}function Rr(i,e,t,n,r,o,l,a,u,h){i.getVertexPosition(a,yi),i.getVertexPosition(u,Ti),i.getVertexPosition(h,Ai);const p=xu(i,e,t,n,yi,Ti,Ai,br);if(p){r&&(yr.fromBufferAttribute(r,a),Tr.fromBufferAttribute(r,u),Ar.fromBufferAttribute(r,h),p.uv=un.getInterpolation(br,yi,Ti,Ai,yr,Tr,Ar,new dt)),o&&(yr.fromBufferAttribute(o,a),Tr.fromBufferAttribute(o,u),Ar.fromBufferAttribute(o,h),p.uv1=un.getInterpolation(br,yi,Ti,Ai,yr,Tr,Ar,new dt),p.uv2=p.uv1),l&&(da.fromBufferAttribute(l,a),pa.fromBufferAttribute(l,u),ma.fromBufferAttribute(l,h),p.normal=un.getInterpolation(br,yi,Ti,Ai,da,pa,ma,new X),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a,b:u,c:h,normal:new X,materialIndex:0};un.getNormal(yi,Ti,Ai,g.normal),p.face=g}return p}class ir extends wn{constructor(e=1,t=1,n=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:l};const a=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);const u=[],h=[],p=[],g=[];let _=0,M=0;v("z","y","x",-1,-1,n,t,e,l,o,0),v("z","y","x",1,-1,n,t,-e,l,o,1),v("x","z","y",1,1,e,n,t,r,l,2),v("x","z","y",1,-1,e,n,-t,r,l,3),v("x","y","z",1,-1,e,t,n,r,o,4),v("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(u),this.setAttribute("position",new ti(h,3)),this.setAttribute("normal",new ti(p,3)),this.setAttribute("uv",new ti(g,2));function v(S,m,f,P,T,C,z,F,I,se,b){const U=C/I,Y=z/se,Q=C/2,ce=z/2,O=F/2,q=I+1,Z=se+1;let ee=0,$=0;const J=new X;for(let te=0;te<Z;te++){const he=te*Y-ce;for(let fe=0;fe<q;fe++){const K=fe*U-Q;J[S]=K*P,J[m]=he*T,J[f]=O,h.push(J.x,J.y,J.z),J[S]=0,J[m]=0,J[f]=F>0?1:-1,p.push(J.x,J.y,J.z),g.push(fe/I),g.push(1-te/se),ee+=1}}for(let te=0;te<se;te++)for(let he=0;he<I;he++){const fe=_+he+q*te,K=_+he+q*(te+1),ne=_+(he+1)+q*(te+1),Me=_+(he+1)+q*te;u.push(fe,K,Me),u.push(K,ne,Me),$+=6}a.addGroup(M,$,b),M+=$,_+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=Fi(i[t]);for(const r in n)e[r]=n[r]}return e}function Mu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hl(i){return i.getRenderTarget()===null?i.outputColorSpace:ft.workingColorSpace}const Su={clone:Fi,merge:Vt};var Eu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eu,this.fragmentShader=yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Mu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fl extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends fl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ss*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const u=l.fullWidth,h=l.fullHeight;o+=l.offsetX*r/u,t-=l.offsetY*n/h,r*=l.width/u,n*=l.height/h}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bi=-90,wi=1;class Tu extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(bi,wi,e,t);r.layers=this.layers,this.add(r);const o=new rn(bi,wi,e,t);o.layers=this.layers,this.add(o);const l=new rn(bi,wi,e,t);l.layers=this.layers,this.add(l);const a=new rn(bi,wi,e,t);a.layers=this.layers,this.add(a);const u=new rn(bi,wi,e,t);u.layers=this.layers,this.add(u);const h=new rn(bi,wi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,l,a,u]=t;for(const h of t)this.remove(h);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,a,u,h,p]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(g,_,M),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class dl extends Yt{constructor(e,t,n,r,o,l,a,u,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,n,r,o,l,a,u,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Au extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ei?Nt:sn),this.texture=new dl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ir(5,5,5),o=new ii({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Bn});o.uniforms.tEquirect.value=t;const l=new On(r,o),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=nn),new Tu(1,10,this).update(e,l),t.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(o)}}const ys=new X,bu=new X,wu=new tt;class jn{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ys.subVectors(n,t).cross(bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ys),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wu.getNormalMatrix(e),r=this.coplanarPoint(ys).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new kr,Cr=new X;class pl{constructor(e=new jn,t=new jn,n=new jn,r=new jn,o=new jn,l=new jn){this.planes=[e,t,n,r,o,l]}set(e,t,n,r,o,l){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(o),a[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An){const n=this.planes,r=e.elements,o=r[0],l=r[1],a=r[2],u=r[3],h=r[4],p=r[5],g=r[6],_=r[7],M=r[8],v=r[9],S=r[10],m=r[11],f=r[12],P=r[13],T=r[14],C=r[15];if(n[0].setComponents(u-o,_-h,m-M,C-f).normalize(),n[1].setComponents(u+o,_+h,m+M,C+f).normalize(),n[2].setComponents(u+l,_+p,m+v,C+P).normalize(),n[3].setComponents(u-l,_-p,m-v,C-P).normalize(),n[4].setComponents(u-a,_-g,m-S,C-T).normalize(),t===An)n[5].setComponents(u+a,_+g,m+S,C+T).normalize();else if(t===Gr)n[5].setComponents(a,g,S,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Cr.x=r.normal.x>0?e.max.x:e.min.x,Cr.y=r.normal.y>0?e.max.y:e.min.y,Cr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ml(){let i=null,e=!1,t=null,n=null;function r(o,l){t(o,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Ru(i,e){const t=e.isWebGL2,n=new WeakMap;function r(h,p){const g=h.array,_=h.usage,M=g.byteLength,v=i.createBuffer();i.bindBuffer(p,v),i.bufferData(p,g,_),h.onUploadCallback();let S;if(g instanceof Float32Array)S=i.FLOAT;else if(g instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)S=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=i.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=i.SHORT;else if(g instanceof Uint32Array)S=i.UNSIGNED_INT;else if(g instanceof Int32Array)S=i.INT;else if(g instanceof Int8Array)S=i.BYTE;else if(g instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:v,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version,size:M}}function o(h,p,g){const _=p.array,M=p._updateRange,v=p.updateRanges;if(i.bindBuffer(g,h),M.count===-1&&v.length===0&&i.bufferSubData(g,0,_),v.length!==0){for(let S=0,m=v.length;S<m;S++){const f=v[S];t?i.bufferSubData(g,f.start*_.BYTES_PER_ELEMENT,_,f.start,f.count):i.bufferSubData(g,f.start*_.BYTES_PER_ELEMENT,_.subarray(f.start,f.start+f.count))}p.clearUpdateRanges()}M.count!==-1&&(t?i.bufferSubData(g,M.offset*_.BYTES_PER_ELEMENT,_,M.offset,M.count):i.bufferSubData(g,M.offset*_.BYTES_PER_ELEMENT,_.subarray(M.offset,M.offset+M.count)),M.count=-1),p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);p&&(i.deleteBuffer(p.buffer),n.delete(h))}function u(h,p){if(h.isGLBufferAttribute){const _=n.get(h);(!_||_.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const g=n.get(h);if(g===void 0)n.set(h,r(h,p));else if(g.version<h.version){if(g.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(g.buffer,h,p),g.version=h.version}}return{get:l,remove:a,update:u}}class Ws extends wn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,l=t/2,a=Math.floor(n),u=Math.floor(r),h=a+1,p=u+1,g=e/a,_=t/u,M=[],v=[],S=[],m=[];for(let f=0;f<p;f++){const P=f*_-l;for(let T=0;T<h;T++){const C=T*g-o;v.push(C,-P,0),S.push(0,0,1),m.push(T/a),m.push(1-f/u)}}for(let f=0;f<u;f++)for(let P=0;P<a;P++){const T=P+h*f,C=P+h*(f+1),z=P+1+h*(f+1),F=P+1+h*f;M.push(T,C,F),M.push(C,z,F)}this.setIndex(M),this.setAttribute("position",new ti(v,3)),this.setAttribute("normal",new ti(S,3)),this.setAttribute("uv",new ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lu=`#ifdef USE_ALPHAHASH
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
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
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
#endif`,Fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ou=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vu=`#ifdef USE_IRIDESCENCE
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
#endif`,ku=`#ifdef USE_BUMPMAP
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ju=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eh=`vec3 transformedNormal = objectNormal;
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
#endif`,th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ih=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sh="gl_FragColor = linearToOutputTexel( gl_FragColor );",oh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ah=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,lh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ch=`#ifdef USE_ENVMAP
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
#endif`,uh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ph=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gh=`#ifdef USE_GRADIENTMAP
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
}`,_h=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sh=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Eh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,yh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Th=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ah=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Rh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ch=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Lh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ph=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ih=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Oh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zh=`#if defined( USE_POINTS_UV )
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
#endif`,Gh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Wh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Xh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$h=`#ifdef USE_NORMALMAP
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
#endif`,Jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,df=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,_f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ef=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yf=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lf=`uniform sampler2D t2D;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`#include <common>
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
}`,Ff=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Of=`#define DISTANCE
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
}`,Bf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kf=`#include <common>
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
}`,Wf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xf=`#define LAMBERT
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
}`,qf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jf=`#define MATCAP
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
}`,Yf=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Kf=`#define NORMAL
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
}`,Zf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$f=`#define PHONG
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
}`,Jf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qf=`#define STANDARD
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
}`,ed=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,td=`#define TOON
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
}`,nd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,id=`uniform float size;
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
}`,rd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,od=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ad=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ld=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Je={alphahash_fragment:Cu,alphahash_pars_fragment:Lu,alphamap_fragment:Pu,alphamap_pars_fragment:Uu,alphatest_fragment:Du,alphatest_pars_fragment:Iu,aomap_fragment:Nu,aomap_pars_fragment:Fu,batching_pars_vertex:Ou,batching_vertex:Bu,begin_vertex:zu,beginnormal_vertex:Gu,bsdfs:Hu,iridescence_fragment:Vu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:qu,clipping_planes_vertex:ju,color_fragment:Yu,color_pars_fragment:Ku,color_pars_vertex:Zu,color_vertex:$u,common:Ju,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:eh,displacementmap_pars_vertex:th,displacementmap_vertex:nh,emissivemap_fragment:ih,emissivemap_pars_fragment:rh,colorspace_fragment:sh,colorspace_pars_fragment:oh,envmap_fragment:ah,envmap_common_pars_fragment:lh,envmap_pars_fragment:ch,envmap_pars_vertex:uh,envmap_physical_pars_fragment:Eh,envmap_vertex:hh,fog_vertex:fh,fog_pars_vertex:dh,fog_fragment:ph,fog_pars_fragment:mh,gradientmap_pars_fragment:gh,lightmap_fragment:_h,lightmap_pars_fragment:vh,lights_lambert_fragment:xh,lights_lambert_pars_fragment:Mh,lights_pars_begin:Sh,lights_toon_fragment:yh,lights_toon_pars_fragment:Th,lights_phong_fragment:Ah,lights_phong_pars_fragment:bh,lights_physical_fragment:wh,lights_physical_pars_fragment:Rh,lights_fragment_begin:Ch,lights_fragment_maps:Lh,lights_fragment_end:Ph,logdepthbuf_fragment:Uh,logdepthbuf_pars_fragment:Dh,logdepthbuf_pars_vertex:Ih,logdepthbuf_vertex:Nh,map_fragment:Fh,map_pars_fragment:Oh,map_particle_fragment:Bh,map_particle_pars_fragment:zh,metalnessmap_fragment:Gh,metalnessmap_pars_fragment:Hh,morphcolor_vertex:Vh,morphnormal_vertex:kh,morphtarget_pars_vertex:Wh,morphtarget_vertex:Xh,normal_fragment_begin:qh,normal_fragment_maps:jh,normal_pars_fragment:Yh,normal_pars_vertex:Kh,normal_vertex:Zh,normalmap_pars_fragment:$h,clearcoat_normal_fragment_begin:Jh,clearcoat_normal_fragment_maps:Qh,clearcoat_pars_fragment:ef,iridescence_pars_fragment:tf,opaque_fragment:nf,packing:rf,premultiplied_alpha_fragment:sf,project_vertex:of,dithering_fragment:af,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:uf,shadowmap_pars_fragment:hf,shadowmap_pars_vertex:ff,shadowmap_vertex:df,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:_f,skinnormal_vertex:vf,specularmap_fragment:xf,specularmap_pars_fragment:Mf,tonemapping_fragment:Sf,tonemapping_pars_fragment:Ef,transmission_fragment:yf,transmission_pars_fragment:Tf,uv_pars_fragment:Af,uv_pars_vertex:bf,uv_vertex:wf,worldpos_vertex:Rf,background_vert:Cf,background_frag:Lf,backgroundCube_vert:Pf,backgroundCube_frag:Uf,cube_vert:Df,cube_frag:If,depth_vert:Nf,depth_frag:Ff,distanceRGBA_vert:Of,distanceRGBA_frag:Bf,equirect_vert:zf,equirect_frag:Gf,linedashed_vert:Hf,linedashed_frag:Vf,meshbasic_vert:kf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:qf,meshmatcap_vert:jf,meshmatcap_frag:Yf,meshnormal_vert:Kf,meshnormal_frag:Zf,meshphong_vert:$f,meshphong_frag:Jf,meshphysical_vert:Qf,meshphysical_frag:ed,meshtoon_vert:td,meshtoon_frag:nd,points_vert:id,points_frag:rd,shadow_vert:sd,shadow_frag:od,sprite_vert:ad,sprite_frag:ld},me={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},mn={basic:{uniforms:Vt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Vt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new nt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Vt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Vt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Vt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new nt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Vt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Vt([me.points,me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Vt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Vt([me.common,me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Vt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Vt([me.sprite,me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Vt([me.common,me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Vt([me.lights,me.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};mn.physical={uniforms:Vt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Lr={r:0,b:0,g:0};function cd(i,e,t,n,r,o,l){const a=new nt(0);let u=o===!0?0:1,h,p,g=null,_=0,M=null;function v(m,f){let P=!1,T=f.isScene===!0?f.background:null;T&&T.isTexture&&(T=(f.backgroundBlurriness>0?t:e).get(T)),T===null?S(a,u):T&&T.isColor&&(S(T,1),P=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,l):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||P)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),T&&(T.isCubeTexture||T.mapping===Hr)?(p===void 0&&(p=new On(new ir(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Fi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(z,F,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=T,p.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,p.material.toneMapped=ft.getTransfer(T.colorSpace)!==xt,(g!==T||_!==T.version||M!==i.toneMapping)&&(p.material.needsUpdate=!0,g=T,_=T.version,M=i.toneMapping),p.layers.enableAll(),m.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new On(new Ws(2,2),new ii({name:"BackgroundMaterial",uniforms:Fi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ft.getTransfer(T.colorSpace)!==xt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(g!==T||_!==T.version||M!==i.toneMapping)&&(h.material.needsUpdate=!0,g=T,_=T.version,M=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function S(m,f){m.getRGB(Lr,hl(i)),n.buffers.color.setClear(Lr.r,Lr.g,Lr.b,f,l)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),u=f,S(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(m){u=m,S(a,u)},render:v}}function ud(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||o!==null,a={},u=m(null);let h=u,p=!1;function g(O,q,Z,ee,$){let J=!1;if(l){const te=S(ee,Z,q);h!==te&&(h=te,M(h.object)),J=f(O,ee,Z,$),J&&P(O,ee,Z,$)}else{const te=q.wireframe===!0;(h.geometry!==ee.id||h.program!==Z.id||h.wireframe!==te)&&(h.geometry=ee.id,h.program=Z.id,h.wireframe=te,J=!0)}$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(J||p)&&(p=!1,se(O,q,Z,ee),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function _(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function M(O){return n.isWebGL2?i.bindVertexArray(O):o.bindVertexArrayOES(O)}function v(O){return n.isWebGL2?i.deleteVertexArray(O):o.deleteVertexArrayOES(O)}function S(O,q,Z){const ee=Z.wireframe===!0;let $=a[O.id];$===void 0&&($={},a[O.id]=$);let J=$[q.id];J===void 0&&(J={},$[q.id]=J);let te=J[ee];return te===void 0&&(te=m(_()),J[ee]=te),te}function m(O){const q=[],Z=[],ee=[];for(let $=0;$<r;$++)q[$]=0,Z[$]=0,ee[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Z,attributeDivisors:ee,object:O,attributes:{},index:null}}function f(O,q,Z,ee){const $=h.attributes,J=q.attributes;let te=0;const he=Z.getAttributes();for(const fe in he)if(he[fe].location>=0){const ne=$[fe];let Me=J[fe];if(Me===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(Me=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(Me=O.instanceColor)),ne===void 0||ne.attribute!==Me||Me&&ne.data!==Me.data)return!0;te++}return h.attributesNum!==te||h.index!==ee}function P(O,q,Z,ee){const $={},J=q.attributes;let te=0;const he=Z.getAttributes();for(const fe in he)if(he[fe].location>=0){let ne=J[fe];ne===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor));const Me={};Me.attribute=ne,ne&&ne.data&&(Me.data=ne.data),$[fe]=Me,te++}h.attributes=$,h.attributesNum=te,h.index=ee}function T(){const O=h.newAttributes;for(let q=0,Z=O.length;q<Z;q++)O[q]=0}function C(O){z(O,0)}function z(O,q){const Z=h.newAttributes,ee=h.enabledAttributes,$=h.attributeDivisors;Z[O]=1,ee[O]===0&&(i.enableVertexAttribArray(O),ee[O]=1),$[O]!==q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,q),$[O]=q)}function F(){const O=h.newAttributes,q=h.enabledAttributes;for(let Z=0,ee=q.length;Z<ee;Z++)q[Z]!==O[Z]&&(i.disableVertexAttribArray(Z),q[Z]=0)}function I(O,q,Z,ee,$,J,te){te===!0?i.vertexAttribIPointer(O,q,Z,$,J):i.vertexAttribPointer(O,q,Z,ee,$,J)}function se(O,q,Z,ee){if(n.isWebGL2===!1&&(O.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const $=ee.attributes,J=Z.getAttributes(),te=q.defaultAttributeValues;for(const he in J){const fe=J[he];if(fe.location>=0){let K=$[he];if(K===void 0&&(he==="instanceMatrix"&&O.instanceMatrix&&(K=O.instanceMatrix),he==="instanceColor"&&O.instanceColor&&(K=O.instanceColor)),K!==void 0){const ne=K.normalized,Me=K.itemSize,Ce=t.get(K);if(Ce===void 0)continue;const Le=Ce.buffer,We=Ce.type,Xe=Ce.bytesPerElement,De=n.isWebGL2===!0&&(We===i.INT||We===i.UNSIGNED_INT||K.gpuType===qa);if(K.isInterleavedBufferAttribute){const Qe=K.data,V=Qe.stride,it=K.offset;if(Qe.isInstancedInterleavedBuffer){for(let Ee=0;Ee<fe.locationSize;Ee++)z(fe.location+Ee,Qe.meshPerAttribute);O.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let Ee=0;Ee<fe.locationSize;Ee++)C(fe.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Ee=0;Ee<fe.locationSize;Ee++)I(fe.location+Ee,Me/fe.locationSize,We,ne,V*Xe,(it+Me/fe.locationSize*Ee)*Xe,De)}else{if(K.isInstancedBufferAttribute){for(let Qe=0;Qe<fe.locationSize;Qe++)z(fe.location+Qe,K.meshPerAttribute);O.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Qe=0;Qe<fe.locationSize;Qe++)C(fe.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Qe=0;Qe<fe.locationSize;Qe++)I(fe.location+Qe,Me/fe.locationSize,We,ne,Me*Xe,Me/fe.locationSize*Qe*Xe,De)}}else if(te!==void 0){const ne=te[he];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(fe.location,ne);break;case 3:i.vertexAttrib3fv(fe.location,ne);break;case 4:i.vertexAttrib4fv(fe.location,ne);break;default:i.vertexAttrib1fv(fe.location,ne)}}}}F()}function b(){Q();for(const O in a){const q=a[O];for(const Z in q){const ee=q[Z];for(const $ in ee)v(ee[$].object),delete ee[$];delete q[Z]}delete a[O]}}function U(O){if(a[O.id]===void 0)return;const q=a[O.id];for(const Z in q){const ee=q[Z];for(const $ in ee)v(ee[$].object),delete ee[$];delete q[Z]}delete a[O.id]}function Y(O){for(const q in a){const Z=a[q];if(Z[O.id]===void 0)continue;const ee=Z[O.id];for(const $ in ee)v(ee[$].object),delete ee[$];delete Z[O.id]}}function Q(){ce(),p=!0,h!==u&&(h=u,M(h.object))}function ce(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:g,reset:Q,resetDefaultState:ce,dispose:b,releaseStatesOfGeometry:U,releaseStatesOfProgram:Y,initAttributes:T,enableAttribute:C,disableUnusedAttributes:F}}function hd(i,e,t,n){const r=n.isWebGL2;let o;function l(p){o=p}function a(p,g){i.drawArrays(o,p,g),t.update(g,o,1)}function u(p,g,_){if(_===0)return;let M,v;if(r)M=i,v="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[v](o,p,g,_),t.update(g,o,_)}function h(p,g,_){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<_;v++)this.render(p[v],g[v]);else{M.multiDrawArraysWEBGL(o,p,0,g,0,_);let v=0;for(let S=0;S<_;S++)v+=g[S];t.update(v,o,1)}}this.setMode=l,this.render=a,this.renderInstances=u,this.renderMultiDraw=h}function fd(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const u=o(a);u!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",u,"instead."),a=u);const h=l||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,C=l||e.has("OES_texture_float"),z=T&&C,F=l?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:v,maxAttributes:S,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:P,vertexTextures:T,floatFragmentTextures:C,floatVertexTextures:z,maxSamples:F}}function dd(i){const e=this;let t=null,n=0,r=!1,o=!1;const l=new jn,a=new tt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const M=g.length!==0||_||n!==0||r;return r=_,n=g.length,M},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,_){t=p(g,_,0)},this.setState=function(g,_,M){const v=g.clippingPlanes,S=g.clipIntersection,m=g.clipShadows,f=i.get(g);if(!r||v===null||v.length===0||o&&!m)o?p(null):h();else{const P=o?0:n,T=P*4;let C=f.clippingState||null;u.value=C,C=p(v,_,T,M);for(let z=0;z!==T;++z)C[z]=t[z];f.clippingState=C,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=P}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,_,M,v){const S=g!==null?g.length:0;let m=null;if(S!==0){if(m=u.value,v!==!0||m===null){const f=M+S*4,P=_.matrixWorldInverse;a.getNormalMatrix(P),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,C=M;T!==S;++T,C+=4)l.copy(g[T]).applyMatrix4(P,a),l.normal.toArray(m,C),m[C+3]=l.constant}u.value=m,u.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function pd(i){let e=new WeakMap;function t(l,a){return a===Us?l.mapping=Di:a===Ds&&(l.mapping=Ii),l}function n(l){if(l&&l.isTexture){const a=l.mapping;if(a===Us||a===Ds)if(e.has(l)){const u=e.get(l).texture;return t(u,l.mapping)}else{const u=l.image;if(u&&u.height>0){const h=new Au(u.height/2);return h.fromEquirectangularTexture(i,l),e.set(l,h),l.addEventListener("dispose",r),t(h.texture,l.mapping)}else return null}}return l}function r(l){const a=l.target;a.removeEventListener("dispose",r);const u=e.get(a);u!==void 0&&(e.delete(a),u.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class md extends fl{constructor(e=-1,t=1,n=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,l=n+e,a=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,l=o+h*this.view.width,a-=p*this.view.offsetY,u=a-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,a,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ci=4,ga=[.125,.215,.35,.446,.526,.582],Zn=20,Ts=new md,_a=new nt;let As=null,bs=0,ws=0;const Yn=(1+Math.sqrt(5))/2,Ri=1/Yn,va=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Yn,Ri),new X(0,Yn,-Ri),new X(Ri,0,Yn),new X(-Ri,0,Yn),new X(Yn,Ri,0),new X(-Yn,Ri,0)];class xa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){As=this._renderer.getRenderTarget(),bs=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ea(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(As,bs,ws),e.scissorTest=!1,Pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),As=this._renderer.getRenderTarget(),bs=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:$i,format:fn,colorSpace:bn,depthBuffer:!1},r=Ma(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ma(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gd(o)),this._blurMaterial=_d(o,e,t)}return r}_compileMaterial(e){const t=new On(this._lodPlanes[0],e);this._renderer.compile(t,Ts)}_sceneToCubeUV(e,t,n,r){const a=new rn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,_=p.toneMapping;p.getClearColor(_a),p.toneMapping=zn,p.autoClear=!1;const M=new ll({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),v=new On(new ir,M);let S=!1;const m=e.background;m?m.isColor&&(M.color.copy(m),e.background=null,S=!0):(M.color.copy(_a),S=!0);for(let f=0;f<6;f++){const P=f%3;P===0?(a.up.set(0,u[f],0),a.lookAt(h[f],0,0)):P===1?(a.up.set(0,0,u[f]),a.lookAt(0,h[f],0)):(a.up.set(0,u[f],0),a.lookAt(0,0,h[f]));const T=this._cubeSize;Pr(r,P*T,f>2?T:0,T,T),p.setRenderTarget(r),S&&p.render(v,a),p.render(e,a)}v.geometry.dispose(),v.material.dispose(),p.toneMapping=_,p.autoClear=g,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Di||e.mapping===Ii;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ea()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sa());const o=r?this._cubemapMaterial:this._equirectMaterial,l=new On(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const u=this._cubeSize;Pr(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(l,Ts)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=va[(r-1)%va.length];this._blur(e,r-1,r,o,l)}t.autoClear=n}_blur(e,t,n,r,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",o),this._halfBlur(l,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,l,a){const u=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new On(this._lodPlanes[r],h),_=h.uniforms,M=this._sizeLods[n]-1,v=isFinite(o)?Math.PI/(2*M):2*Math.PI/(2*Zn-1),S=o/v,m=isFinite(o)?1+Math.floor(p*S):Zn;m>Zn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zn}`);const f=[];let P=0;for(let I=0;I<Zn;++I){const se=I/S,b=Math.exp(-se*se/2);f.push(b),I===0?P+=b:I<m&&(P+=2*b)}for(let I=0;I<f.length;I++)f[I]=f[I]/P;_.envMap.value=e.texture,_.samples.value=m,_.weights.value=f,_.latitudinal.value=l==="latitudinal",a&&(_.poleAxis.value=a);const{_lodMax:T}=this;_.dTheta.value=v,_.mipInt.value=T-n;const C=this._sizeLods[r],z=3*C*(r>T-Ci?r-T+Ci:0),F=4*(this._cubeSize-C);Pr(t,z,F,3*C,2*C),u.setRenderTarget(t),u.render(g,Ts)}}function gd(i){const e=[],t=[],n=[];let r=i;const o=i-Ci+1+ga.length;for(let l=0;l<o;l++){const a=Math.pow(2,r);t.push(a);let u=1/a;l>i-Ci?u=ga[l-i+Ci-1]:l===0&&(u=0),n.push(u);const h=1/(a-2),p=-h,g=1+h,_=[p,p,g,p,g,g,p,p,g,g,p,g],M=6,v=6,S=3,m=2,f=1,P=new Float32Array(S*v*M),T=new Float32Array(m*v*M),C=new Float32Array(f*v*M);for(let F=0;F<M;F++){const I=F%3*2/3-1,se=F>2?0:-1,b=[I,se,0,I+2/3,se,0,I+2/3,se+1,0,I,se,0,I+2/3,se+1,0,I,se+1,0];P.set(b,S*v*F),T.set(_,m*v*F);const U=[F,F,F,F,F,F];C.set(U,f*v*F)}const z=new wn;z.setAttribute("position",new dn(P,S)),z.setAttribute("uv",new dn(T,m)),z.setAttribute("faceIndex",new dn(C,f)),e.push(z),r>Ci&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ma(i,e,t){const n=new ni(i,e,t);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function _d(i,e,t){const n=new Float32Array(Zn),r=new X(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xs(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Sa(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xs(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ea(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Xs(){return`

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
	`}function vd(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const u=a.mapping,h=u===Us||u===Ds,p=u===Di||u===Ii;if(h||p)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let g=e.get(a);return t===null&&(t=new xa(i)),g=h?t.fromEquirectangular(a,g):t.fromCubemap(a,g),e.set(a,g),g.texture}else{if(e.has(a))return e.get(a).texture;{const g=a.image;if(h&&g&&g.height>0||p&&g&&r(g)){t===null&&(t=new xa(i));const _=h?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,_),a.addEventListener("dispose",o),_.texture}else return null}}}return a}function r(a){let u=0;const h=6;for(let p=0;p<h;p++)a[p]!==void 0&&u++;return u===h}function o(a){const u=a.target;u.removeEventListener("dispose",o);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function xd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Md(i,e,t,n){const r={},o=new WeakMap;function l(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const v in _.attributes)e.remove(_.attributes[v]);for(const v in _.morphAttributes){const S=_.morphAttributes[v];for(let m=0,f=S.length;m<f;m++)e.remove(S[m])}_.removeEventListener("dispose",l),delete r[_.id];const M=o.get(_);M&&(e.remove(M),o.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function a(g,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,t.memory.geometries++),_}function u(g){const _=g.attributes;for(const v in _)e.update(_[v],i.ARRAY_BUFFER);const M=g.morphAttributes;for(const v in M){const S=M[v];for(let m=0,f=S.length;m<f;m++)e.update(S[m],i.ARRAY_BUFFER)}}function h(g){const _=[],M=g.index,v=g.attributes.position;let S=0;if(M!==null){const P=M.array;S=M.version;for(let T=0,C=P.length;T<C;T+=3){const z=P[T+0],F=P[T+1],I=P[T+2];_.push(z,F,F,I,I,z)}}else if(v!==void 0){const P=v.array;S=v.version;for(let T=0,C=P.length/3-1;T<C;T+=3){const z=T+0,F=T+1,I=T+2;_.push(z,F,F,I,I,z)}}else return;const m=new(tl(_)?ul:cl)(_,1);m.version=S;const f=o.get(g);f&&e.remove(f),o.set(g,m)}function p(g){const _=o.get(g);if(_){const M=g.index;M!==null&&_.version<M.version&&h(g)}else h(g);return o.get(g)}return{get:a,update:u,getWireframeAttribute:p}}function Sd(i,e,t,n){const r=n.isWebGL2;let o;function l(M){o=M}let a,u;function h(M){a=M.type,u=M.bytesPerElement}function p(M,v){i.drawElements(o,v,a,M*u),t.update(v,o,1)}function g(M,v,S){if(S===0)return;let m,f;if(r)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](o,v,a,M*u,S),t.update(v,o,S)}function _(M,v,S){if(S===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<S;f++)this.render(M[f]/u,v[f]);else{m.multiDrawElementsWEBGL(o,v,0,a,M,0,S);let f=0;for(let P=0;P<S;P++)f+=v[P];t.update(f,o,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=g,this.renderMultiDraw=_}function Ed(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,a){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function yd(i,e){return i[0]-e[0]}function Td(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ad(i,e,t){const n={},r=new Float32Array(8),o=new WeakMap,l=new Ft,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function u(h,p,g){const _=h.morphTargetInfluences;if(e.isWebGL2===!0){const v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=v!==void 0?v.length:0;let m=o.get(p);if(m===void 0||m.count!==S){let q=function(){ce.dispose(),o.delete(p),p.removeEventListener("dispose",q)};var M=q;m!==void 0&&m.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,z=p.morphAttributes.color!==void 0,F=p.morphAttributes.position||[],I=p.morphAttributes.normal||[],se=p.morphAttributes.color||[];let b=0;T===!0&&(b=1),C===!0&&(b=2),z===!0&&(b=3);let U=p.attributes.position.count*b,Y=1;U>e.maxTextureSize&&(Y=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const Q=new Float32Array(U*Y*4*S),ce=new rl(Q,U,Y,S);ce.type=Fn,ce.needsUpdate=!0;const O=b*4;for(let Z=0;Z<S;Z++){const ee=F[Z],$=I[Z],J=se[Z],te=U*Y*4*Z;for(let he=0;he<ee.count;he++){const fe=he*O;T===!0&&(l.fromBufferAttribute(ee,he),Q[te+fe+0]=l.x,Q[te+fe+1]=l.y,Q[te+fe+2]=l.z,Q[te+fe+3]=0),C===!0&&(l.fromBufferAttribute($,he),Q[te+fe+4]=l.x,Q[te+fe+5]=l.y,Q[te+fe+6]=l.z,Q[te+fe+7]=0),z===!0&&(l.fromBufferAttribute(J,he),Q[te+fe+8]=l.x,Q[te+fe+9]=l.y,Q[te+fe+10]=l.z,Q[te+fe+11]=J.itemSize===4?l.w:1)}}m={count:S,texture:ce,size:new dt(U,Y)},o.set(p,m),p.addEventListener("dispose",q)}let f=0;for(let T=0;T<_.length;T++)f+=_[T];const P=p.morphTargetsRelative?1:1-f;g.getUniforms().setValue(i,"morphTargetBaseInfluence",P),g.getUniforms().setValue(i,"morphTargetInfluences",_),g.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),g.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const v=_===void 0?0:_.length;let S=n[p.id];if(S===void 0||S.length!==v){S=[];for(let C=0;C<v;C++)S[C]=[C,0];n[p.id]=S}for(let C=0;C<v;C++){const z=S[C];z[0]=C,z[1]=_[C]}S.sort(Td);for(let C=0;C<8;C++)C<v&&S[C][1]?(a[C][0]=S[C][0],a[C][1]=S[C][1]):(a[C][0]=Number.MAX_SAFE_INTEGER,a[C][1]=0);a.sort(yd);const m=p.morphAttributes.position,f=p.morphAttributes.normal;let P=0;for(let C=0;C<8;C++){const z=a[C],F=z[0],I=z[1];F!==Number.MAX_SAFE_INTEGER&&I?(m&&p.getAttribute("morphTarget"+C)!==m[F]&&p.setAttribute("morphTarget"+C,m[F]),f&&p.getAttribute("morphNormal"+C)!==f[F]&&p.setAttribute("morphNormal"+C,f[F]),r[C]=I,P+=I):(m&&p.hasAttribute("morphTarget"+C)===!0&&p.deleteAttribute("morphTarget"+C),f&&p.hasAttribute("morphNormal"+C)===!0&&p.deleteAttribute("morphNormal"+C),r[C]=0)}const T=p.morphTargetsRelative?1:1-P;g.getUniforms().setValue(i,"morphTargetBaseInfluence",T),g.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function bd(i,e,t,n){let r=new WeakMap;function o(u){const h=n.render.frame,p=u.geometry,g=e.get(u,p);if(r.get(g)!==h&&(e.update(g),r.set(g,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){const _=u.skeleton;r.get(_)!==h&&(_.update(),r.set(_,h))}return g}function l(){r=new WeakMap}function a(u){const h=u.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:l}}class gl extends Yt{constructor(e,t,n,r,o,l,a,u,h,p){if(p=p!==void 0?p:Qn,p!==Qn&&p!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===Qn&&(n=Nn),n===void 0&&p===Ni&&(n=Jn),super(null,r,o,l,a,u,p,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=u!==void 0?u:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _l=new Yt,vl=new gl(1,1);vl.compareFunction=el;const xl=new rl,Ml=new lu,Sl=new dl,ya=[],Ta=[],Aa=new Float32Array(16),ba=new Float32Array(9),wa=new Float32Array(4);function Bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=ya[r];if(o===void 0&&(o=new Float32Array(r),ya[r]=o),e!==0){n.toArray(o,0);for(let l=1,a=0;l!==e;++l)a+=t,i[l].toArray(o,a)}return o}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xr(i,e){let t=Ta[e];t===void 0&&(t=new Int32Array(e),Ta[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function Cd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Ld(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function Pd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;wa.set(n),i.uniformMatrix2fv(this.addr,!1,wa),Ct(t,n)}}function Ud(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;ba.set(n),i.uniformMatrix3fv(this.addr,!1,ba),Ct(t,n)}}function Dd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Aa.set(n),i.uniformMatrix4fv(this.addr,!1,Aa),Ct(t,n)}}function Id(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function Fd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function Od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function Bd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function Gd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function Hd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function Vd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const o=this.type===i.SAMPLER_2D_SHADOW?vl:_l;t.setTexture2D(e||o,r)}function kd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ml,r)}function Wd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Sl,r)}function Xd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||xl,r)}function qd(i){switch(i){case 5126:return wd;case 35664:return Rd;case 35665:return Cd;case 35666:return Ld;case 35674:return Pd;case 35675:return Ud;case 35676:return Dd;case 5124:case 35670:return Id;case 35667:case 35671:return Nd;case 35668:case 35672:return Fd;case 35669:case 35673:return Od;case 5125:return Bd;case 36294:return zd;case 36295:return Gd;case 36296:return Hd;case 35678:case 36198:case 36298:case 36306:case 35682:return Vd;case 35679:case 36299:case 36307:return kd;case 35680:case 36300:case 36308:case 36293:return Wd;case 36289:case 36303:case 36311:case 36292:return Xd}}function jd(i,e){i.uniform1fv(this.addr,e)}function Yd(i,e){const t=Bi(e,this.size,2);i.uniform2fv(this.addr,t)}function Kd(i,e){const t=Bi(e,this.size,3);i.uniform3fv(this.addr,t)}function Zd(i,e){const t=Bi(e,this.size,4);i.uniform4fv(this.addr,t)}function $d(i,e){const t=Bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jd(i,e){const t=Bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qd(i,e){const t=Bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ep(i,e){i.uniform1iv(this.addr,e)}function tp(i,e){i.uniform2iv(this.addr,e)}function np(i,e){i.uniform3iv(this.addr,e)}function ip(i,e){i.uniform4iv(this.addr,e)}function rp(i,e){i.uniform1uiv(this.addr,e)}function sp(i,e){i.uniform2uiv(this.addr,e)}function op(i,e){i.uniform3uiv(this.addr,e)}function ap(i,e){i.uniform4uiv(this.addr,e)}function lp(i,e,t){const n=this.cache,r=e.length,o=Xr(t,r);Rt(n,o)||(i.uniform1iv(this.addr,o),Ct(n,o));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||_l,o[l])}function cp(i,e,t){const n=this.cache,r=e.length,o=Xr(t,r);Rt(n,o)||(i.uniform1iv(this.addr,o),Ct(n,o));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Ml,o[l])}function up(i,e,t){const n=this.cache,r=e.length,o=Xr(t,r);Rt(n,o)||(i.uniform1iv(this.addr,o),Ct(n,o));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Sl,o[l])}function hp(i,e,t){const n=this.cache,r=e.length,o=Xr(t,r);Rt(n,o)||(i.uniform1iv(this.addr,o),Ct(n,o));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||xl,o[l])}function fp(i){switch(i){case 5126:return jd;case 35664:return Yd;case 35665:return Kd;case 35666:return Zd;case 35674:return $d;case 35675:return Jd;case 35676:return Qd;case 5124:case 35670:return ep;case 35667:case 35671:return tp;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return rp;case 36294:return sp;case 36295:return op;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return hp}}class dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qd(t.type)}}class pp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fp(t.type)}}class mp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,l=r.length;o!==l;++o){const a=r[o];a.setValue(e,t[a.id],n)}}}const Rs=/(\w+)(\])?(\[|\.)?/g;function Ra(i,e){i.seq.push(e),i.map[e.id]=e}function gp(i,e,t){const n=i.name,r=n.length;for(Rs.lastIndex=0;;){const o=Rs.exec(n),l=Rs.lastIndex;let a=o[1];const u=o[2]==="]",h=o[3];if(u&&(a=a|0),h===void 0||h==="["&&l+2===r){Ra(t,h===void 0?new dp(a,i,e):new pp(a,i,e));break}else{let g=t.map[a];g===void 0&&(g=new mp(a),Ra(t,g)),t=g}}}class Nr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);gp(o,l,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,l=t.length;o!==l;++o){const a=t[o],u=n[a.id];u.needsUpdate!==!1&&a.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function Ca(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const _p=37297;let vp=0;function xp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=r;l<o;l++){const a=l+1;n.push(`${a===e?">":" "} ${a}: ${t[l]}`)}return n.join(`
`)}function Mp(i){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(i);let n;switch(e===t?n="":e===zr&&t===Br?n="LinearDisplayP3ToLinearSRGB":e===Br&&t===zr&&(n="LinearSRGBToLinearDisplayP3"),i){case bn:case Vr:return[n,"LinearTransferOETF"];case Nt:case ks:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function La(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+xp(i.getShaderSource(e),l)}else return r}function Sp(i,e){const t=Mp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ep(i,e){let t;switch(e){case Lc:t="Linear";break;case Pc:t="Reinhard";break;case Uc:t="OptimizedCineon";break;case Dc:t="ACESFilmic";break;case Nc:t="AgX";break;case Ic:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Li).join(`
`)}function Tp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Li).join(`
`)}function Ap(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),l=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[l]={type:o.type,location:i.getAttribLocation(e,l),locationSize:a}}return t}function Li(i){return i!==""}function Pa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ua(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function zs(i){return i.replace(wp,Cp)}const Rp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Cp(i,e){let t=Je[e];if(t===void 0){const n=Rp.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zs(t)}const Lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Da(i){return i.replace(Lp,Pp)}function Pp(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Ia(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Up(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ka?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function Dp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Di:case Ii:e="ENVMAP_TYPE_CUBE";break;case Hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ip(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function Np(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wa:e="ENVMAP_BLENDING_MULTIPLY";break;case Rc:e="ENVMAP_BLENDING_MIX";break;case Cc:e="ENVMAP_BLENDING_ADD";break}return e}function Fp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Op(i,e,t,n){const r=i.getContext(),o=t.defines;let l=t.vertexShader,a=t.fragmentShader;const u=Up(t),h=Dp(t),p=Ip(t),g=Np(t),_=Fp(t),M=t.isWebGL2?"":yp(t),v=Tp(t),S=Ap(o),m=r.createProgram();let f,P,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Li).join(`
`),f.length>0&&(f+=`
`),P=[M,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Li).join(`
`),P.length>0&&(P+=`
`)):(f=[Ia(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),P=[M,Ia(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Je.tonemapping_pars_fragment:"",t.toneMapping!==zn?Ep("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Sp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),l=zs(l),l=Pa(l,t),l=Ua(l,t),a=zs(a),a=Pa(a,t),a=Ua(a,t),l=Da(l),a=Da(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,f=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,P=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const C=T+f+l,z=T+P+a,F=Ca(r,r.VERTEX_SHADER,C),I=Ca(r,r.FRAGMENT_SHADER,z);r.attachShader(m,F),r.attachShader(m,I),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function se(Q){if(i.debug.checkShaderErrors){const ce=r.getProgramInfoLog(m).trim(),O=r.getShaderInfoLog(F).trim(),q=r.getShaderInfoLog(I).trim();let Z=!0,ee=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,F,I);else{const $=La(r,F,"vertex"),J=La(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ce+`
`+$+`
`+J)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(O===""||q==="")&&(ee=!1);ee&&(Q.diagnostics={runnable:Z,programLog:ce,vertexShader:{log:O,prefix:f},fragmentShader:{log:q,prefix:P}})}r.deleteShader(F),r.deleteShader(I),b=new Nr(r,m),U=bp(r,m)}let b;this.getUniforms=function(){return b===void 0&&se(this),b};let U;this.getAttributes=function(){return U===void 0&&se(this),U};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=r.getProgramParameter(m,_p)),Y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=F,this.fragmentShader=I,this}let Bp=0;class zp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gp(e),t.set(e,n)),n}}class Gp{constructor(e){this.id=Bp++,this.code=e,this.usedTimes=0}}function Hp(i,e,t,n,r,o,l){const a=new ol,u=new zp,h=[],p=r.isWebGL2,g=r.logarithmicDepthBuffer,_=r.vertexTextures;let M=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(b){return b===0?"uv":`uv${b}`}function m(b,U,Y,Q,ce){const O=Q.fog,q=ce.geometry,Z=b.isMeshStandardMaterial?Q.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||Z),$=ee&&ee.mapping===Hr?ee.image.height:null,J=v[b.type];b.precision!==null&&(M=r.getMaxPrecision(b.precision),M!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",M,"instead."));const te=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,he=te!==void 0?te.length:0;let fe=0;q.morphAttributes.position!==void 0&&(fe=1),q.morphAttributes.normal!==void 0&&(fe=2),q.morphAttributes.color!==void 0&&(fe=3);let K,ne,Me,Ce;if(J){const Tt=mn[J];K=Tt.vertexShader,ne=Tt.fragmentShader}else K=b.vertexShader,ne=b.fragmentShader,u.update(b),Me=u.getVertexShaderID(b),Ce=u.getFragmentShaderID(b);const Le=i.getRenderTarget(),We=ce.isInstancedMesh===!0,Xe=ce.isBatchedMesh===!0,De=!!b.map,Qe=!!b.matcap,V=!!ee,it=!!b.aoMap,Ee=!!b.lightMap,Ve=!!b.bumpMap,Ae=!!b.normalMap,pt=!!b.displacementMap,je=!!b.emissiveMap,A=!!b.metalnessMap,E=!!b.roughnessMap,k=b.anisotropy>0,le=b.clearcoat>0,oe=b.iridescence>0,ie=b.sheen>0,be=b.transmission>0,_e=k&&!!b.anisotropyMap,ye=le&&!!b.clearcoatMap,Ie=le&&!!b.clearcoatNormalMap,Ye=le&&!!b.clearcoatRoughnessMap,ae=oe&&!!b.iridescenceMap,at=oe&&!!b.iridescenceThicknessMap,Ze=ie&&!!b.sheenColorMap,Ne=ie&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,Te=!!b.specularColorMap,Ke=!!b.specularIntensityMap,rt=be&&!!b.transmissionMap,mt=be&&!!b.thicknessMap,Ge=!!b.gradientMap,ue=!!b.alphaMap,D=b.alphaTest>0,ve=!!b.alphaHash,ge=!!b.extensions,Fe=!!q.attributes.uv1,we=!!q.attributes.uv2,lt=!!q.attributes.uv3;let ct=zn;return b.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(ct=i.toneMapping),{isWebGL2:p,shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:K,fragmentShader:ne,defines:b.defines,customVertexShaderID:Me,customFragmentShaderID:Ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:M,batching:Xe,instancing:We,instancingColor:We&&ce.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:Le===null?i.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:bn,map:De,matcap:Qe,envMap:V,envMapMode:V&&ee.mapping,envMapCubeUVHeight:$,aoMap:it,lightMap:Ee,bumpMap:Ve,normalMap:Ae,displacementMap:_&&pt,emissiveMap:je,normalMapObjectSpace:Ae&&b.normalMapType===Yc,normalMapTangentSpace:Ae&&b.normalMapType===jc,metalnessMap:A,roughnessMap:E,anisotropy:k,anisotropyMap:_e,clearcoat:le,clearcoatMap:ye,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Ye,iridescence:oe,iridescenceMap:ae,iridescenceThicknessMap:at,sheen:ie,sheenColorMap:Ze,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:Te,specularIntensityMap:Ke,transmission:be,transmissionMap:rt,thicknessMap:mt,gradientMap:Ge,opaque:b.transparent===!1&&b.blending===$n,alphaMap:ue,alphaTest:D,alphaHash:ve,combine:b.combine,mapUv:De&&S(b.map.channel),aoMapUv:it&&S(b.aoMap.channel),lightMapUv:Ee&&S(b.lightMap.channel),bumpMapUv:Ve&&S(b.bumpMap.channel),normalMapUv:Ae&&S(b.normalMap.channel),displacementMapUv:pt&&S(b.displacementMap.channel),emissiveMapUv:je&&S(b.emissiveMap.channel),metalnessMapUv:A&&S(b.metalnessMap.channel),roughnessMapUv:E&&S(b.roughnessMap.channel),anisotropyMapUv:_e&&S(b.anisotropyMap.channel),clearcoatMapUv:ye&&S(b.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&S(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&S(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&S(b.iridescenceMap.channel),iridescenceThicknessMapUv:at&&S(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&S(b.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&S(b.sheenRoughnessMap.channel),specularMapUv:Pe&&S(b.specularMap.channel),specularColorMapUv:Te&&S(b.specularColorMap.channel),specularIntensityMapUv:Ke&&S(b.specularIntensityMap.channel),transmissionMapUv:rt&&S(b.transmissionMap.channel),thicknessMapUv:mt&&S(b.thicknessMap.channel),alphaMapUv:ue&&S(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ae||k),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:we,vertexUv3s:lt,pointsUvs:ce.isPoints===!0&&!!q.attributes.uv&&(De||ue),fog:!!O,useFog:b.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:ce.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:fe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,useLegacyLights:i._useLegacyLights,decodeVideoTexture:De&&b.map.isVideoTexture===!0&&ft.getTransfer(b.map.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Tn,flipSided:b.side===jt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ge&&b.extensions.derivatives===!0,extensionFragDepth:ge&&b.extensions.fragDepth===!0,extensionDrawBuffers:ge&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ge&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const U=[];if(b.shaderID?U.push(b.shaderID):(U.push(b.customVertexShaderID),U.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Y in b.defines)U.push(Y),U.push(b.defines[Y]);return b.isRawShaderMaterial===!1&&(P(U,b),T(U,b),U.push(i.outputColorSpace)),U.push(b.customProgramCacheKey),U.join()}function P(b,U){b.push(U.precision),b.push(U.outputColorSpace),b.push(U.envMapMode),b.push(U.envMapCubeUVHeight),b.push(U.mapUv),b.push(U.alphaMapUv),b.push(U.lightMapUv),b.push(U.aoMapUv),b.push(U.bumpMapUv),b.push(U.normalMapUv),b.push(U.displacementMapUv),b.push(U.emissiveMapUv),b.push(U.metalnessMapUv),b.push(U.roughnessMapUv),b.push(U.anisotropyMapUv),b.push(U.clearcoatMapUv),b.push(U.clearcoatNormalMapUv),b.push(U.clearcoatRoughnessMapUv),b.push(U.iridescenceMapUv),b.push(U.iridescenceThicknessMapUv),b.push(U.sheenColorMapUv),b.push(U.sheenRoughnessMapUv),b.push(U.specularMapUv),b.push(U.specularColorMapUv),b.push(U.specularIntensityMapUv),b.push(U.transmissionMapUv),b.push(U.thicknessMapUv),b.push(U.combine),b.push(U.fogExp2),b.push(U.sizeAttenuation),b.push(U.morphTargetsCount),b.push(U.morphAttributeCount),b.push(U.numDirLights),b.push(U.numPointLights),b.push(U.numSpotLights),b.push(U.numSpotLightMaps),b.push(U.numHemiLights),b.push(U.numRectAreaLights),b.push(U.numDirLightShadows),b.push(U.numPointLightShadows),b.push(U.numSpotLightShadows),b.push(U.numSpotLightShadowsWithMaps),b.push(U.numLightProbes),b.push(U.shadowMapType),b.push(U.toneMapping),b.push(U.numClippingPlanes),b.push(U.numClipIntersection),b.push(U.depthPacking)}function T(b,U){a.disableAll(),U.isWebGL2&&a.enable(0),U.supportsVertexTextures&&a.enable(1),U.instancing&&a.enable(2),U.instancingColor&&a.enable(3),U.matcap&&a.enable(4),U.envMap&&a.enable(5),U.normalMapObjectSpace&&a.enable(6),U.normalMapTangentSpace&&a.enable(7),U.clearcoat&&a.enable(8),U.iridescence&&a.enable(9),U.alphaTest&&a.enable(10),U.vertexColors&&a.enable(11),U.vertexAlphas&&a.enable(12),U.vertexUv1s&&a.enable(13),U.vertexUv2s&&a.enable(14),U.vertexUv3s&&a.enable(15),U.vertexTangents&&a.enable(16),U.anisotropy&&a.enable(17),U.alphaHash&&a.enable(18),U.batching&&a.enable(19),b.push(a.mask),a.disableAll(),U.fog&&a.enable(0),U.useFog&&a.enable(1),U.flatShading&&a.enable(2),U.logarithmicDepthBuffer&&a.enable(3),U.skinning&&a.enable(4),U.morphTargets&&a.enable(5),U.morphNormals&&a.enable(6),U.morphColors&&a.enable(7),U.premultipliedAlpha&&a.enable(8),U.shadowMapEnabled&&a.enable(9),U.useLegacyLights&&a.enable(10),U.doubleSided&&a.enable(11),U.flipSided&&a.enable(12),U.useDepthPacking&&a.enable(13),U.dithering&&a.enable(14),U.transmission&&a.enable(15),U.sheen&&a.enable(16),U.opaque&&a.enable(17),U.pointsUvs&&a.enable(18),U.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function C(b){const U=v[b.type];let Y;if(U){const Q=mn[U];Y=Su.clone(Q.uniforms)}else Y=b.uniforms;return Y}function z(b,U){let Y;for(let Q=0,ce=h.length;Q<ce;Q++){const O=h[Q];if(O.cacheKey===U){Y=O,++Y.usedTimes;break}}return Y===void 0&&(Y=new Op(i,U,b,o),h.push(Y)),Y}function F(b){if(--b.usedTimes===0){const U=h.indexOf(b);h[U]=h[h.length-1],h.pop(),b.destroy()}}function I(b){u.remove(b)}function se(){u.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:C,acquireProgram:z,releaseProgram:F,releaseShaderCache:I,programs:h,dispose:se}}function Vp(){let i=new WeakMap;function e(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function t(o){i.delete(o)}function n(o,l,a){i.get(o)[l]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function kp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Na(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fa(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function l(g,_,M,v,S,m){let f=i[e];return f===void 0?(f={id:g.id,object:g,geometry:_,material:M,groupOrder:v,renderOrder:g.renderOrder,z:S,group:m},i[e]=f):(f.id=g.id,f.object=g,f.geometry=_,f.material=M,f.groupOrder=v,f.renderOrder=g.renderOrder,f.z=S,f.group=m),e++,f}function a(g,_,M,v,S,m){const f=l(g,_,M,v,S,m);M.transmission>0?n.push(f):M.transparent===!0?r.push(f):t.push(f)}function u(g,_,M,v,S,m){const f=l(g,_,M,v,S,m);M.transmission>0?n.unshift(f):M.transparent===!0?r.unshift(f):t.unshift(f)}function h(g,_){t.length>1&&t.sort(g||kp),n.length>1&&n.sort(_||Na),r.length>1&&r.sort(_||Na)}function p(){for(let g=e,_=i.length;g<_;g++){const M=i[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:a,unshift:u,finish:p,sort:h}}function Wp(){let i=new WeakMap;function e(n,r){const o=i.get(n);let l;return o===void 0?(l=new Fa,i.set(n,[l])):r>=o.length?(l=new Fa,o.push(l)):l=o[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new nt};break;case"SpotLight":t={position:new X,direction:new X,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function qp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jp=0;function Yp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kp(i,e){const t=new Xp,n=qp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new X);const o=new X,l=new Ut,a=new Ut;function u(p,g){let _=0,M=0,v=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let S=0,m=0,f=0,P=0,T=0,C=0,z=0,F=0,I=0,se=0,b=0;p.sort(Yp);const U=g===!0?Math.PI:1;for(let Q=0,ce=p.length;Q<ce;Q++){const O=p[Q],q=O.color,Z=O.intensity,ee=O.distance,$=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)_+=q.r*Z*U,M+=q.g*Z*U,v+=q.b*Z*U;else if(O.isLightProbe){for(let J=0;J<9;J++)r.probe[J].addScaledVector(O.sh.coefficients[J],Z);b++}else if(O.isDirectionalLight){const J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity*U),O.castShadow){const te=O.shadow,he=n.get(O);he.shadowBias=te.bias,he.shadowNormalBias=te.normalBias,he.shadowRadius=te.radius,he.shadowMapSize=te.mapSize,r.directionalShadow[S]=he,r.directionalShadowMap[S]=$,r.directionalShadowMatrix[S]=O.shadow.matrix,C++}r.directional[S]=J,S++}else if(O.isSpotLight){const J=t.get(O);J.position.setFromMatrixPosition(O.matrixWorld),J.color.copy(q).multiplyScalar(Z*U),J.distance=ee,J.coneCos=Math.cos(O.angle),J.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),J.decay=O.decay,r.spot[f]=J;const te=O.shadow;if(O.map&&(r.spotLightMap[I]=O.map,I++,te.updateMatrices(O),O.castShadow&&se++),r.spotLightMatrix[f]=te.matrix,O.castShadow){const he=n.get(O);he.shadowBias=te.bias,he.shadowNormalBias=te.normalBias,he.shadowRadius=te.radius,he.shadowMapSize=te.mapSize,r.spotShadow[f]=he,r.spotShadowMap[f]=$,F++}f++}else if(O.isRectAreaLight){const J=t.get(O);J.color.copy(q).multiplyScalar(Z),J.halfWidth.set(O.width*.5,0,0),J.halfHeight.set(0,O.height*.5,0),r.rectArea[P]=J,P++}else if(O.isPointLight){const J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity*U),J.distance=O.distance,J.decay=O.decay,O.castShadow){const te=O.shadow,he=n.get(O);he.shadowBias=te.bias,he.shadowNormalBias=te.normalBias,he.shadowRadius=te.radius,he.shadowMapSize=te.mapSize,he.shadowCameraNear=te.camera.near,he.shadowCameraFar=te.camera.far,r.pointShadow[m]=he,r.pointShadowMap[m]=$,r.pointShadowMatrix[m]=O.shadow.matrix,z++}r.point[m]=J,m++}else if(O.isHemisphereLight){const J=t.get(O);J.skyColor.copy(O.color).multiplyScalar(Z*U),J.groundColor.copy(O.groundColor).multiplyScalar(Z*U),r.hemi[T]=J,T++}}P>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=_,r.ambient[1]=M,r.ambient[2]=v;const Y=r.hash;(Y.directionalLength!==S||Y.pointLength!==m||Y.spotLength!==f||Y.rectAreaLength!==P||Y.hemiLength!==T||Y.numDirectionalShadows!==C||Y.numPointShadows!==z||Y.numSpotShadows!==F||Y.numSpotMaps!==I||Y.numLightProbes!==b)&&(r.directional.length=S,r.spot.length=f,r.rectArea.length=P,r.point.length=m,r.hemi.length=T,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=F+I-se,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=se,r.numLightProbes=b,Y.directionalLength=S,Y.pointLength=m,Y.spotLength=f,Y.rectAreaLength=P,Y.hemiLength=T,Y.numDirectionalShadows=C,Y.numPointShadows=z,Y.numSpotShadows=F,Y.numSpotMaps=I,Y.numLightProbes=b,r.version=jp++)}function h(p,g){let _=0,M=0,v=0,S=0,m=0;const f=g.matrixWorldInverse;for(let P=0,T=p.length;P<T;P++){const C=p[P];if(C.isDirectionalLight){const z=r.directional[_];z.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(f),_++}else if(C.isSpotLight){const z=r.spot[v];z.position.setFromMatrixPosition(C.matrixWorld),z.position.applyMatrix4(f),z.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(f),v++}else if(C.isRectAreaLight){const z=r.rectArea[S];z.position.setFromMatrixPosition(C.matrixWorld),z.position.applyMatrix4(f),a.identity(),l.copy(C.matrixWorld),l.premultiply(f),a.extractRotation(l),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),z.halfWidth.applyMatrix4(a),z.halfHeight.applyMatrix4(a),S++}else if(C.isPointLight){const z=r.point[M];z.position.setFromMatrixPosition(C.matrixWorld),z.position.applyMatrix4(f),M++}else if(C.isHemisphereLight){const z=r.hemi[m];z.direction.setFromMatrixPosition(C.matrixWorld),z.direction.transformDirection(f),m++}}}return{setup:u,setupView:h,state:r}}function Oa(i,e){const t=new Kp(i,e),n=[],r=[];function o(){n.length=0,r.length=0}function l(g){n.push(g)}function a(g){r.push(g)}function u(g){t.setup(n,g)}function h(g){t.setupView(n,g)}return{init:o,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:h,pushLight:l,pushShadow:a}}function Zp(i,e){let t=new WeakMap;function n(o,l=0){const a=t.get(o);let u;return a===void 0?(u=new Oa(i,e),t.set(o,[u])):l>=a.length?(u=new Oa(i,e),a.push(u)):u=a[l],u}function r(){t=new WeakMap}return{get:n,dispose:r}}class $p extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jp extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,em=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tm(i,e,t){let n=new pl;const r=new dt,o=new dt,l=new Ft,a=new $p({depthPacking:qc}),u=new Jp,h={},p=t.maxTextureSize,g={[Hn]:jt,[jt]:Hn,[Tn]:Tn},_=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Qp,fragmentShader:em}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const v=new wn;v.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new On(v,_),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka;let f=this.type;this.render=function(F,I,se){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||F.length===0)return;const b=i.getRenderTarget(),U=i.getActiveCubeFace(),Y=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(Bn),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ce=f!==yn&&this.type===yn,O=f===yn&&this.type!==yn;for(let q=0,Z=F.length;q<Z;q++){const ee=F[q],$=ee.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const J=$.getFrameExtents();if(r.multiply(J),o.copy($.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/J.x),r.x=o.x*J.x,$.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/J.y),r.y=o.y*J.y,$.mapSize.y=o.y)),$.map===null||ce===!0||O===!0){const he=this.type!==yn?{minFilter:kt,magFilter:kt}:{};$.map!==null&&$.map.dispose(),$.map=new ni(r.x,r.y,he),$.map.texture.name=ee.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const te=$.getViewportCount();for(let he=0;he<te;he++){const fe=$.getViewport(he);l.set(o.x*fe.x,o.y*fe.y,o.x*fe.z,o.y*fe.w),Q.viewport(l),$.updateMatrices(ee,he),n=$.getFrustum(),C(I,se,$.camera,ee,this.type)}$.isPointLightShadow!==!0&&this.type===yn&&P($,se),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,U,Y)};function P(F,I){const se=e.update(S);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ni(r.x,r.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(I,null,se,_,S,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(I,null,se,M,S,null)}function T(F,I,se,b){let U=null;const Y=se.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(Y!==void 0)U=Y;else if(U=se.isPointLight===!0?u:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const Q=U.uuid,ce=I.uuid;let O=h[Q];O===void 0&&(O={},h[Q]=O);let q=O[ce];q===void 0&&(q=U.clone(),O[ce]=q,I.addEventListener("dispose",z)),U=q}if(U.visible=I.visible,U.wireframe=I.wireframe,b===yn?U.side=I.shadowSide!==null?I.shadowSide:I.side:U.side=I.shadowSide!==null?I.shadowSide:g[I.side],U.alphaMap=I.alphaMap,U.alphaTest=I.alphaTest,U.map=I.map,U.clipShadows=I.clipShadows,U.clippingPlanes=I.clippingPlanes,U.clipIntersection=I.clipIntersection,U.displacementMap=I.displacementMap,U.displacementScale=I.displacementScale,U.displacementBias=I.displacementBias,U.wireframeLinewidth=I.wireframeLinewidth,U.linewidth=I.linewidth,se.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const Q=i.properties.get(U);Q.light=se}return U}function C(F,I,se,b,U){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&U===yn)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,F.matrixWorld);const ce=e.update(F),O=F.material;if(Array.isArray(O)){const q=ce.groups;for(let Z=0,ee=q.length;Z<ee;Z++){const $=q[Z],J=O[$.materialIndex];if(J&&J.visible){const te=T(F,J,b,U);F.onBeforeShadow(i,F,I,se,ce,te,$),i.renderBufferDirect(se,null,ce,te,F,$),F.onAfterShadow(i,F,I,se,ce,te,$)}}}else if(O.visible){const q=T(F,O,b,U);F.onBeforeShadow(i,F,I,se,ce,q,null),i.renderBufferDirect(se,null,ce,q,F,null),F.onAfterShadow(i,F,I,se,ce,q,null)}}const Q=F.children;for(let ce=0,O=Q.length;ce<O;ce++)C(Q[ce],I,se,b,U)}function z(F){F.target.removeEventListener("dispose",z);for(const se in h){const b=h[se],U=F.target.uuid;U in b&&(b[U].dispose(),delete b[U])}}}function nm(i,e,t){const n=t.isWebGL2;function r(){let D=!1;const ve=new Ft;let ge=null;const Fe=new Ft(0,0,0,0);return{setMask:function(we){ge!==we&&!D&&(i.colorMask(we,we,we,we),ge=we)},setLocked:function(we){D=we},setClear:function(we,lt,ct,St,Tt){Tt===!0&&(we*=St,lt*=St,ct*=St),ve.set(we,lt,ct,St),Fe.equals(ve)===!1&&(i.clearColor(we,lt,ct,St),Fe.copy(ve))},reset:function(){D=!1,ge=null,Fe.set(-1,0,0,0)}}}function o(){let D=!1,ve=null,ge=null,Fe=null;return{setTest:function(we){we?Xe(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(we){ve!==we&&!D&&(i.depthMask(we),ve=we)},setFunc:function(we){if(ge!==we){switch(we){case Sc:i.depthFunc(i.NEVER);break;case Ec:i.depthFunc(i.ALWAYS);break;case yc:i.depthFunc(i.LESS);break;case Fr:i.depthFunc(i.LEQUAL);break;case Tc:i.depthFunc(i.EQUAL);break;case Ac:i.depthFunc(i.GEQUAL);break;case bc:i.depthFunc(i.GREATER);break;case wc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=we}},setLocked:function(we){D=we},setClear:function(we){Fe!==we&&(i.clearDepth(we),Fe=we)},reset:function(){D=!1,ve=null,ge=null,Fe=null}}}function l(){let D=!1,ve=null,ge=null,Fe=null,we=null,lt=null,ct=null,St=null,Tt=null;return{setTest:function(ut){D||(ut?Xe(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(ut){ve!==ut&&!D&&(i.stencilMask(ut),ve=ut)},setFunc:function(ut,yt,Jt){(ge!==ut||Fe!==yt||we!==Jt)&&(i.stencilFunc(ut,yt,Jt),ge=ut,Fe=yt,we=Jt)},setOp:function(ut,yt,Jt){(lt!==ut||ct!==yt||St!==Jt)&&(i.stencilOp(ut,yt,Jt),lt=ut,ct=yt,St=Jt)},setLocked:function(ut){D=ut},setClear:function(ut){Tt!==ut&&(i.clearStencil(ut),Tt=ut)},reset:function(){D=!1,ve=null,ge=null,Fe=null,we=null,lt=null,ct=null,St=null,Tt=null}}}const a=new r,u=new o,h=new l,p=new WeakMap,g=new WeakMap;let _={},M={},v=new WeakMap,S=[],m=null,f=!1,P=null,T=null,C=null,z=null,F=null,I=null,se=null,b=new nt(0,0,0),U=0,Y=!1,Q=null,ce=null,O=null,q=null,Z=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,J=0;const te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(te)[1]),$=J>=1):te.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),$=J>=2);let he=null,fe={};const K=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),Me=new Ft().fromArray(K),Ce=new Ft().fromArray(ne);function Le(D,ve,ge,Fe){const we=new Uint8Array(4),lt=i.createTexture();i.bindTexture(D,lt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ct=0;ct<ge;ct++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ve,0,i.RGBA,1,1,Fe,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(ve+ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return lt}const We={};We[i.TEXTURE_2D]=Le(i.TEXTURE_2D,i.TEXTURE_2D,1),We[i.TEXTURE_CUBE_MAP]=Le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(We[i.TEXTURE_2D_ARRAY]=Le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),We[i.TEXTURE_3D]=Le(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Xe(i.DEPTH_TEST),u.setFunc(Fr),je(!1),A(vo),Xe(i.CULL_FACE),Ae(Bn);function Xe(D){_[D]!==!0&&(i.enable(D),_[D]=!0)}function De(D){_[D]!==!1&&(i.disable(D),_[D]=!1)}function Qe(D,ve){return M[D]!==ve?(i.bindFramebuffer(D,ve),M[D]=ve,n&&(D===i.DRAW_FRAMEBUFFER&&(M[i.FRAMEBUFFER]=ve),D===i.FRAMEBUFFER&&(M[i.DRAW_FRAMEBUFFER]=ve)),!0):!1}function V(D,ve){let ge=S,Fe=!1;if(D)if(ge=v.get(ve),ge===void 0&&(ge=[],v.set(ve,ge)),D.isWebGLMultipleRenderTargets){const we=D.texture;if(ge.length!==we.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,ct=we.length;lt<ct;lt++)ge[lt]=i.COLOR_ATTACHMENT0+lt;ge.length=we.length,Fe=!0}}else ge[0]!==i.COLOR_ATTACHMENT0&&(ge[0]=i.COLOR_ATTACHMENT0,Fe=!0);else ge[0]!==i.BACK&&(ge[0]=i.BACK,Fe=!0);Fe&&(t.isWebGL2?i.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function it(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const Ee={[Kn]:i.FUNC_ADD,[oc]:i.FUNC_SUBTRACT,[ac]:i.FUNC_REVERSE_SUBTRACT};if(n)Ee[Eo]=i.MIN,Ee[yo]=i.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ee[Eo]=D.MIN_EXT,Ee[yo]=D.MAX_EXT)}const Ve={[lc]:i.ZERO,[cc]:i.ONE,[uc]:i.SRC_COLOR,[Ls]:i.SRC_ALPHA,[gc]:i.SRC_ALPHA_SATURATE,[pc]:i.DST_COLOR,[fc]:i.DST_ALPHA,[hc]:i.ONE_MINUS_SRC_COLOR,[Ps]:i.ONE_MINUS_SRC_ALPHA,[mc]:i.ONE_MINUS_DST_COLOR,[dc]:i.ONE_MINUS_DST_ALPHA,[_c]:i.CONSTANT_COLOR,[vc]:i.ONE_MINUS_CONSTANT_COLOR,[xc]:i.CONSTANT_ALPHA,[Mc]:i.ONE_MINUS_CONSTANT_ALPHA};function Ae(D,ve,ge,Fe,we,lt,ct,St,Tt,ut){if(D===Bn){f===!0&&(De(i.BLEND),f=!1);return}if(f===!1&&(Xe(i.BLEND),f=!0),D!==sc){if(D!==P||ut!==Y){if((T!==Kn||F!==Kn)&&(i.blendEquation(i.FUNC_ADD),T=Kn,F=Kn),ut)switch(D){case $n:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFunc(i.ONE,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case So:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case $n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case So:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}C=null,z=null,I=null,se=null,b.set(0,0,0),U=0,P=D,Y=ut}return}we=we||ve,lt=lt||ge,ct=ct||Fe,(ve!==T||we!==F)&&(i.blendEquationSeparate(Ee[ve],Ee[we]),T=ve,F=we),(ge!==C||Fe!==z||lt!==I||ct!==se)&&(i.blendFuncSeparate(Ve[ge],Ve[Fe],Ve[lt],Ve[ct]),C=ge,z=Fe,I=lt,se=ct),(St.equals(b)===!1||Tt!==U)&&(i.blendColor(St.r,St.g,St.b,Tt),b.copy(St),U=Tt),P=D,Y=!1}function pt(D,ve){D.side===Tn?De(i.CULL_FACE):Xe(i.CULL_FACE);let ge=D.side===jt;ve&&(ge=!ge),je(ge),D.blending===$n&&D.transparent===!1?Ae(Bn):Ae(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),u.setFunc(D.depthFunc),u.setTest(D.depthTest),u.setMask(D.depthWrite),a.setMask(D.colorWrite);const Fe=D.stencilWrite;h.setTest(Fe),Fe&&(h.setMask(D.stencilWriteMask),h.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),h.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),k(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Xe(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(D){Q!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),Q=D)}function A(D){D!==nc?(Xe(i.CULL_FACE),D!==ce&&(D===vo?i.cullFace(i.BACK):D===ic?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),ce=D}function E(D){D!==O&&($&&i.lineWidth(D),O=D)}function k(D,ve,ge){D?(Xe(i.POLYGON_OFFSET_FILL),(q!==ve||Z!==ge)&&(i.polygonOffset(ve,ge),q=ve,Z=ge)):De(i.POLYGON_OFFSET_FILL)}function le(D){D?Xe(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function oe(D){D===void 0&&(D=i.TEXTURE0+ee-1),he!==D&&(i.activeTexture(D),he=D)}function ie(D,ve,ge){ge===void 0&&(he===null?ge=i.TEXTURE0+ee-1:ge=he);let Fe=fe[ge];Fe===void 0&&(Fe={type:void 0,texture:void 0},fe[ge]=Fe),(Fe.type!==D||Fe.texture!==ve)&&(he!==ge&&(i.activeTexture(ge),he=ge),i.bindTexture(D,ve||We[D]),Fe.type=D,Fe.texture=ve)}function be(){const D=fe[he];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _e(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(D){Me.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Me.copy(D))}function rt(D){Ce.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ce.copy(D))}function mt(D,ve){let ge=g.get(ve);ge===void 0&&(ge=new WeakMap,g.set(ve,ge));let Fe=ge.get(D);Fe===void 0&&(Fe=i.getUniformBlockIndex(ve,D.name),ge.set(D,Fe))}function Ge(D,ve){const Fe=g.get(ve).get(D);p.get(ve)!==Fe&&(i.uniformBlockBinding(ve,Fe,D.__bindingPointIndex),p.set(ve,Fe))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),_={},he=null,fe={},M={},v=new WeakMap,S=[],m=null,f=!1,P=null,T=null,C=null,z=null,F=null,I=null,se=null,b=new nt(0,0,0),U=0,Y=!1,Q=null,ce=null,O=null,q=null,Z=null,Me.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),a.reset(),u.reset(),h.reset()}return{buffers:{color:a,depth:u,stencil:h},enable:Xe,disable:De,bindFramebuffer:Qe,drawBuffers:V,useProgram:it,setBlending:Ae,setMaterial:pt,setFlipSided:je,setCullFace:A,setLineWidth:E,setPolygonOffset:k,setScissorTest:le,activeTexture:oe,bindTexture:ie,unbindTexture:be,compressedTexImage2D:_e,compressedTexImage3D:ye,texImage2D:Pe,texImage3D:Te,updateUBOMapping:mt,uniformBlockBinding:Ge,texStorage2D:Ze,texStorage3D:Ne,texSubImage2D:Ie,texSubImage3D:Ye,compressedTexSubImage2D:ae,compressedTexSubImage3D:at,scissor:Ke,viewport:rt,reset:ue}}function im(i,e,t,n,r,o,l){const a=r.isWebGL2,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let g;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,E){return M?new OffscreenCanvas(A,E):Ji("canvas")}function S(A,E,k,le){let oe=1;if((A.width>le||A.height>le)&&(oe=le/Math.max(A.width,A.height)),oe<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ie=E?Bs:Math.floor,be=ie(oe*A.width),_e=ie(oe*A.height);g===void 0&&(g=v(be,_e));const ye=k?v(be,_e):g;return ye.width=be,ye.height=_e,ye.getContext("2d").drawImage(A,0,0,be,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+be+"x"+_e+")."),ye}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Qo(A.width)&&Qo(A.height)}function f(A){return a?!1:A.wrapS!==hn||A.wrapT!==hn||A.minFilter!==kt&&A.minFilter!==nn}function P(A,E){return A.generateMipmaps&&E&&A.minFilter!==kt&&A.minFilter!==nn}function T(A){i.generateMipmap(A)}function C(A,E,k,le,oe=!1){if(a===!1)return E;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ie=E;if(E===i.RED&&(k===i.FLOAT&&(ie=i.R32F),k===i.HALF_FLOAT&&(ie=i.R16F),k===i.UNSIGNED_BYTE&&(ie=i.R8)),E===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ie=i.R8UI),k===i.UNSIGNED_SHORT&&(ie=i.R16UI),k===i.UNSIGNED_INT&&(ie=i.R32UI),k===i.BYTE&&(ie=i.R8I),k===i.SHORT&&(ie=i.R16I),k===i.INT&&(ie=i.R32I)),E===i.RG&&(k===i.FLOAT&&(ie=i.RG32F),k===i.HALF_FLOAT&&(ie=i.RG16F),k===i.UNSIGNED_BYTE&&(ie=i.RG8)),E===i.RGBA){const be=oe?Or:ft.getTransfer(le);k===i.FLOAT&&(ie=i.RGBA32F),k===i.HALF_FLOAT&&(ie=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ie=be===xt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function z(A,E,k){return P(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==kt&&A.minFilter!==nn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function F(A){return A===kt||A===To||A===Qr?i.NEAREST:i.LINEAR}function I(A){const E=A.target;E.removeEventListener("dispose",I),b(E),E.isVideoTexture&&p.delete(E)}function se(A){const E=A.target;E.removeEventListener("dispose",se),Y(E)}function b(A){const E=n.get(A);if(E.__webglInit===void 0)return;const k=A.source,le=_.get(k);if(le){const oe=le[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&U(A),Object.keys(le).length===0&&_.delete(k)}n.remove(A)}function U(A){const E=n.get(A);i.deleteTexture(E.__webglTexture);const k=A.source,le=_.get(k);delete le[E.__cacheKey],l.memory.textures--}function Y(A){const E=A.texture,k=n.get(A),le=n.get(E);if(le.__webglTexture!==void 0&&(i.deleteTexture(le.__webglTexture),l.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(k.__webglFramebuffer[oe]))for(let ie=0;ie<k.__webglFramebuffer[oe].length;ie++)i.deleteFramebuffer(k.__webglFramebuffer[oe][ie]);else i.deleteFramebuffer(k.__webglFramebuffer[oe]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[oe])}else{if(Array.isArray(k.__webglFramebuffer))for(let oe=0;oe<k.__webglFramebuffer.length;oe++)i.deleteFramebuffer(k.__webglFramebuffer[oe]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let oe=0;oe<k.__webglColorRenderbuffer.length;oe++)k.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[oe]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let oe=0,ie=E.length;oe<ie;oe++){const be=n.get(E[oe]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),l.memory.textures--),n.remove(E[oe])}n.remove(E),n.remove(A)}let Q=0;function ce(){Q=0}function O(){const A=Q;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),Q+=1,A}function q(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function Z(A,E){const k=n.get(A);if(A.isVideoTexture&&pt(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const le=A.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(k,A,E);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+E)}function ee(A,E){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Me(k,A,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+E)}function $(A,E){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Me(k,A,E);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+E)}function J(A,E){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Ce(k,A,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+E)}const te={[Is]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[Ns]:i.MIRRORED_REPEAT},he={[kt]:i.NEAREST,[To]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Fc]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},fe={[Kc]:i.NEVER,[tu]:i.ALWAYS,[Zc]:i.LESS,[el]:i.LEQUAL,[$c]:i.EQUAL,[eu]:i.GEQUAL,[Jc]:i.GREATER,[Qc]:i.NOTEQUAL};function K(A,E,k){if(k?(i.texParameteri(A,i.TEXTURE_WRAP_S,te[E.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,te[E.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,te[E.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,he[E.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,he[E.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==hn||E.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,F(E.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,F(E.minFilter)),E.minFilter!==kt&&E.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===kt||E.minFilter!==Qr&&E.minFilter!==Zi||E.type===Fn&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===$i&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(A,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function ne(A,E){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",I));const le=E.source;let oe=_.get(le);oe===void 0&&(oe={},_.set(le,oe));const ie=q(E);if(ie!==A.__cacheKey){oe[ie]===void 0&&(oe[ie]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,k=!0),oe[ie].usedTimes++;const be=oe[A.__cacheKey];be!==void 0&&(oe[A.__cacheKey].usedTimes--,be.usedTimes===0&&U(E)),A.__cacheKey=ie,A.__webglTexture=oe[ie].texture}return k}function Me(A,E,k){let le=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=i.TEXTURE_3D);const oe=ne(A,E),ie=E.source;t.bindTexture(le,A.__webglTexture,i.TEXTURE0+k);const be=n.get(ie);if(ie.version!==be.__version||oe===!0){t.activeTexture(i.TEXTURE0+k);const _e=ft.getPrimaries(ft.workingColorSpace),ye=E.colorSpace===sn?null:ft.getPrimaries(E.colorSpace),Ie=E.colorSpace===sn||_e===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ye=f(E)&&m(E.image)===!1;let ae=S(E.image,Ye,!1,r.maxTextureSize);ae=je(E,ae);const at=m(ae)||a,Ze=o.convert(E.format,E.colorSpace);let Ne=o.convert(E.type),Pe=C(E.internalFormat,Ze,Ne,E.colorSpace,E.isVideoTexture);K(le,E,at);let Te;const Ke=E.mipmaps,rt=a&&E.isVideoTexture!==!0&&Pe!==Ja,mt=be.__version===void 0||oe===!0,Ge=z(E,ae,at);if(E.isDepthTexture)Pe=i.DEPTH_COMPONENT,a?E.type===Fn?Pe=i.DEPTH_COMPONENT32F:E.type===Nn?Pe=i.DEPTH_COMPONENT24:E.type===Jn?Pe=i.DEPTH24_STENCIL8:Pe=i.DEPTH_COMPONENT16:E.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Qn&&Pe===i.DEPTH_COMPONENT&&E.type!==Vs&&E.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Nn,Ne=o.convert(E.type)),E.format===Ni&&Pe===i.DEPTH_COMPONENT&&(Pe=i.DEPTH_STENCIL,E.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Jn,Ne=o.convert(E.type))),mt&&(rt?t.texStorage2D(i.TEXTURE_2D,1,Pe,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ae.width,ae.height,0,Ze,Ne,null));else if(E.isDataTexture)if(Ke.length>0&&at){rt&&mt&&t.texStorage2D(i.TEXTURE_2D,Ge,Pe,Ke[0].width,Ke[0].height);for(let ue=0,D=Ke.length;ue<D;ue++)Te=Ke[ue],rt?t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Te.width,Te.height,Ze,Ne,Te.data):t.texImage2D(i.TEXTURE_2D,ue,Pe,Te.width,Te.height,0,Ze,Ne,Te.data);E.generateMipmaps=!1}else rt?(mt&&t.texStorage2D(i.TEXTURE_2D,Ge,Pe,ae.width,ae.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,Ze,Ne,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,ae.width,ae.height,0,Ze,Ne,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,Pe,Ke[0].width,Ke[0].height,ae.depth);for(let ue=0,D=Ke.length;ue<D;ue++)Te=Ke[ue],E.format!==fn?Ze!==null?rt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Te.width,Te.height,ae.depth,Ze,Te.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Pe,Te.width,Te.height,ae.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Te.width,Te.height,ae.depth,Ze,Ne,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Pe,Te.width,Te.height,ae.depth,0,Ze,Ne,Te.data)}else{rt&&mt&&t.texStorage2D(i.TEXTURE_2D,Ge,Pe,Ke[0].width,Ke[0].height);for(let ue=0,D=Ke.length;ue<D;ue++)Te=Ke[ue],E.format!==fn?Ze!==null?rt?t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Te.width,Te.height,Ze,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Pe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Te.width,Te.height,Ze,Ne,Te.data):t.texImage2D(i.TEXTURE_2D,ue,Pe,Te.width,Te.height,0,Ze,Ne,Te.data)}else if(E.isDataArrayTexture)rt?(mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,Pe,ae.width,ae.height,ae.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ze,Ne,ae.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ae.width,ae.height,ae.depth,0,Ze,Ne,ae.data);else if(E.isData3DTexture)rt?(mt&&t.texStorage3D(i.TEXTURE_3D,Ge,Pe,ae.width,ae.height,ae.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ze,Ne,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ae.width,ae.height,ae.depth,0,Ze,Ne,ae.data);else if(E.isFramebufferTexture){if(mt)if(rt)t.texStorage2D(i.TEXTURE_2D,Ge,Pe,ae.width,ae.height);else{let ue=ae.width,D=ae.height;for(let ve=0;ve<Ge;ve++)t.texImage2D(i.TEXTURE_2D,ve,Pe,ue,D,0,Ze,Ne,null),ue>>=1,D>>=1}}else if(Ke.length>0&&at){rt&&mt&&t.texStorage2D(i.TEXTURE_2D,Ge,Pe,Ke[0].width,Ke[0].height);for(let ue=0,D=Ke.length;ue<D;ue++)Te=Ke[ue],rt?t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ze,Ne,Te):t.texImage2D(i.TEXTURE_2D,ue,Pe,Ze,Ne,Te);E.generateMipmaps=!1}else rt?(mt&&t.texStorage2D(i.TEXTURE_2D,Ge,Pe,ae.width,ae.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ze,Ne,ae)):t.texImage2D(i.TEXTURE_2D,0,Pe,Ze,Ne,ae);P(E,at)&&T(le),be.__version=ie.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ce(A,E,k){if(E.image.length!==6)return;const le=ne(A,E),oe=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const ie=n.get(oe);if(oe.version!==ie.__version||le===!0){t.activeTexture(i.TEXTURE0+k);const be=ft.getPrimaries(ft.workingColorSpace),_e=E.colorSpace===sn?null:ft.getPrimaries(E.colorSpace),ye=E.colorSpace===sn||be===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,Ye=E.image[0]&&E.image[0].isDataTexture,ae=[];for(let ue=0;ue<6;ue++)!Ie&&!Ye?ae[ue]=S(E.image[ue],!1,!0,r.maxCubemapSize):ae[ue]=Ye?E.image[ue].image:E.image[ue],ae[ue]=je(E,ae[ue]);const at=ae[0],Ze=m(at)||a,Ne=o.convert(E.format,E.colorSpace),Pe=o.convert(E.type),Te=C(E.internalFormat,Ne,Pe,E.colorSpace),Ke=a&&E.isVideoTexture!==!0,rt=ie.__version===void 0||le===!0;let mt=z(E,at,Ze);K(i.TEXTURE_CUBE_MAP,E,Ze);let Ge;if(Ie){Ke&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Te,at.width,at.height);for(let ue=0;ue<6;ue++){Ge=ae[ue].mipmaps;for(let D=0;D<Ge.length;D++){const ve=Ge[D];E.format!==fn?Ne!==null?Ke?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,0,0,ve.width,ve.height,Ne,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,Te,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,0,0,ve.width,ve.height,Ne,Pe,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D,Te,ve.width,ve.height,0,Ne,Pe,ve.data)}}}else{Ge=E.mipmaps,Ke&&rt&&(Ge.length>0&&mt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Te,ae[0].width,ae[0].height));for(let ue=0;ue<6;ue++)if(Ye){Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ae[ue].width,ae[ue].height,Ne,Pe,ae[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Te,ae[ue].width,ae[ue].height,0,Ne,Pe,ae[ue].data);for(let D=0;D<Ge.length;D++){const ge=Ge[D].image[ue].image;Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,0,0,ge.width,ge.height,Ne,Pe,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,Te,ge.width,ge.height,0,Ne,Pe,ge.data)}}else{Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ne,Pe,ae[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Te,Ne,Pe,ae[ue]);for(let D=0;D<Ge.length;D++){const ve=Ge[D];Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,0,0,Ne,Pe,ve.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,D+1,Te,Ne,Pe,ve.image[ue])}}}P(E,Ze)&&T(i.TEXTURE_CUBE_MAP),ie.__version=oe.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Le(A,E,k,le,oe,ie){const be=o.convert(k.format,k.colorSpace),_e=o.convert(k.type),ye=C(k.internalFormat,be,_e,k.colorSpace);if(!n.get(E).__hasExternalTextures){const Ye=Math.max(1,E.width>>ie),ae=Math.max(1,E.height>>ie);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ie,ye,Ye,ae,E.depth,0,be,_e,null):t.texImage2D(oe,ie,ye,Ye,ae,0,be,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ae(E)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,oe,n.get(k).__webglTexture,0,Ve(E)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,oe,n.get(k).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(A,E,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let le=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(k||Ae(E)){const oe=E.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Fn?le=i.DEPTH_COMPONENT32F:oe.type===Nn&&(le=i.DEPTH_COMPONENT24));const ie=Ve(E);Ae(E)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,le,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,le,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,le,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const le=Ve(E);k&&Ae(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,i.DEPTH24_STENCIL8,E.width,E.height):Ae(E)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const le=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let oe=0;oe<le.length;oe++){const ie=le[oe],be=o.convert(ie.format,ie.colorSpace),_e=o.convert(ie.type),ye=C(ie.internalFormat,be,_e,ie.colorSpace),Ie=Ve(E);k&&Ae(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ye,E.width,E.height):Ae(E)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,ye,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ye,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xe(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const le=n.get(E.depthTexture).__webglTexture,oe=Ve(E);if(E.depthTexture.format===Qn)Ae(E)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(E.depthTexture.format===Ni)Ae(E)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function De(A){const E=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Xe(E.__webglFramebuffer,A)}else if(k){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]=i.createRenderbuffer(),We(E.__webglDepthbuffer[le],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),We(E.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(A,E,k){const le=n.get(A);E!==void 0&&Le(le.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&De(A)}function V(A){const E=A.texture,k=n.get(A),le=n.get(E);A.addEventListener("dispose",se),A.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=E.version,l.memory.textures++);const oe=A.isWebGLCubeRenderTarget===!0,ie=A.isWebGLMultipleRenderTargets===!0,be=m(A)||a;if(oe){k.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[_e]=[];for(let ye=0;ye<E.mipmaps.length;ye++)k.__webglFramebuffer[_e][ye]=i.createFramebuffer()}else k.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let _e=0;_e<E.mipmaps.length;_e++)k.__webglFramebuffer[_e]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ie)if(r.drawBuffers){const _e=A.texture;for(let ye=0,Ie=_e.length;ye<Ie;ye++){const Ye=n.get(_e[ye]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ae(A)===!1){const _e=ie?E:[E];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ye=0;ye<_e.length;ye++){const Ie=_e[ye];k.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ye]);const Ye=o.convert(Ie.format,Ie.colorSpace),ae=o.convert(Ie.type),at=C(Ie.internalFormat,Ye,ae,Ie.colorSpace,A.isXRRenderTarget===!0),Ze=Ve(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,at,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,k.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),We(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),K(i.TEXTURE_CUBE_MAP,E,be);for(let _e=0;_e<6;_e++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)Le(k.__webglFramebuffer[_e][ye],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ye);else Le(k.__webglFramebuffer[_e],A,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);P(E,be)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const _e=A.texture;for(let ye=0,Ie=_e.length;ye<Ie;ye++){const Ye=_e[ye],ae=n.get(Ye);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),K(i.TEXTURE_2D,Ye,be),Le(k.__webglFramebuffer,A,Ye,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),P(Ye,be)&&T(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?_e=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,le.__webglTexture),K(_e,E,be),a&&E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)Le(k.__webglFramebuffer[ye],A,E,i.COLOR_ATTACHMENT0,_e,ye);else Le(k.__webglFramebuffer,A,E,i.COLOR_ATTACHMENT0,_e,0);P(E,be)&&T(_e),t.unbindTexture()}A.depthBuffer&&De(A)}function it(A){const E=m(A)||a,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let le=0,oe=k.length;le<oe;le++){const ie=k[le];if(P(ie,E)){const be=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,_e=n.get(ie).__webglTexture;t.bindTexture(be,_e),T(be),t.unbindTexture()}}}function Ee(A){if(a&&A.samples>0&&Ae(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,le=A.height;let oe=i.COLOR_BUFFER_BIT;const ie=[],be=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(A),ye=A.isWebGLMultipleRenderTargets===!0;if(ye)for(let Ie=0;Ie<E.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){ie.push(i.COLOR_ATTACHMENT0+Ie),A.depthBuffer&&ie.push(be);const Ye=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Ye===!1&&(A.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ye&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]),Ye===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[be]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[be])),ye){const ae=n.get(E[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,k,le,0,0,k,le,oe,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Ie=0;Ie<E.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]);const Ye=n.get(E[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function Ve(A){return Math.min(r.maxSamples,A.samples)}function Ae(A){const E=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pt(A){const E=l.render.frame;p.get(A)!==E&&(p.set(A,E),A.update())}function je(A,E){const k=A.colorSpace,le=A.format,oe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Fs||k!==bn&&k!==sn&&(ft.getTransfer(k)===xt?a===!1?e.has("EXT_sRGB")===!0&&le===fn?(A.format=Fs,A.minFilter=nn,A.generateMipmaps=!1):E=nl.sRGBToLinear(E):(le!==fn||oe!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}this.allocateTextureUnit=O,this.resetTextureUnits=ce,this.setTexture2D=Z,this.setTexture2DArray=ee,this.setTexture3D=$,this.setTextureCube=J,this.rebindTextures=Qe,this.setupRenderTarget=V,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Ae}function rm(i,e,t){const n=t.isWebGL2;function r(o,l=sn){let a;const u=ft.getTransfer(l);if(o===Gn)return i.UNSIGNED_BYTE;if(o===ja)return i.UNSIGNED_SHORT_4_4_4_4;if(o===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(o===Oc)return i.BYTE;if(o===Bc)return i.SHORT;if(o===Vs)return i.UNSIGNED_SHORT;if(o===qa)return i.INT;if(o===Nn)return i.UNSIGNED_INT;if(o===Fn)return i.FLOAT;if(o===$i)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===zc)return i.ALPHA;if(o===fn)return i.RGBA;if(o===Gc)return i.LUMINANCE;if(o===Hc)return i.LUMINANCE_ALPHA;if(o===Qn)return i.DEPTH_COMPONENT;if(o===Ni)return i.DEPTH_STENCIL;if(o===Fs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Vc)return i.RED;if(o===Ka)return i.RED_INTEGER;if(o===kc)return i.RG;if(o===Za)return i.RG_INTEGER;if(o===$a)return i.RGBA_INTEGER;if(o===es||o===ts||o===ns||o===is)if(u===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===es)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===es)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ts)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===ns)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===is)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Ao||o===bo||o===wo||o===Ro)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Ao)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===bo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===wo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Ro)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Ja)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Co||o===Lo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Co)return u===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Lo)return u===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Po||o===Uo||o===Do||o===Io||o===No||o===Fo||o===Oo||o===Bo||o===zo||o===Go||o===Ho||o===Vo||o===ko||o===Wo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Po)return u===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Uo)return u===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Do)return u===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Io)return u===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===No)return u===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Fo)return u===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Oo)return u===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Bo)return u===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===zo)return u===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Go)return u===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Ho)return u===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Vo)return u===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===ko)return u===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Wo)return u===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===rs||o===Xo||o===qo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===rs)return u===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Xo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===qo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Wc||o===jo||o===Yo||o===Ko)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===rs)return a.COMPRESSED_RED_RGTC1_EXT;if(o===jo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Yo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Ko)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Jn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:r}}class sm extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ur extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const om={type:"move"};class Cs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,l=null;const a=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),f=this._getHandJoint(h,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=p.position.distanceTo(g.position),M=.02,v=.005;h.inputState.pinching&&_>M+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=M-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(om)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=o!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ur;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class am extends Oi{constructor(e,t){super();const n=this;let r=null,o=1,l=null,a="local-floor",u=1,h=null,p=null,g=null,_=null,M=null,v=null;const S=t.getContextAttributes();let m=null,f=null;const P=[],T=[],C=new dt;let z=null;const F=new rn;F.layers.enable(1),F.viewport=new Ft;const I=new rn;I.layers.enable(2),I.viewport=new Ft;const se=[F,I],b=new sm;b.layers.enable(1),b.layers.enable(2);let U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ne=P[K];return ne===void 0&&(ne=new Cs,P[K]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(K){let ne=P[K];return ne===void 0&&(ne=new Cs,P[K]=ne),ne.getGripSpace()},this.getHand=function(K){let ne=P[K];return ne===void 0&&(ne=new Cs,P[K]=ne),ne.getHandSpace()};function Q(K){const ne=T.indexOf(K.inputSource);if(ne===-1)return;const Me=P[ne];Me!==void 0&&(Me.update(K.inputSource,K.frame,h||l),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function ce(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",ce),r.removeEventListener("inputsourceschange",O);for(let K=0;K<P.length;K++){const ne=T[K];ne!==null&&(T[K]=null,P[K].disconnect(ne))}U=null,Y=null,e.setRenderTarget(m),M=null,_=null,g=null,r=null,f=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return g},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",ce),r.addEventListener("inputsourceschange",O),S.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:o};M=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),f=new ni(M.framebufferWidth,M.framebufferHeight,{format:fn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ne=null,Me=null,Ce=null;S.depth&&(Ce=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=S.stencil?Ni:Qn,Me=S.stencil?Jn:Nn);const Le={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:o};g=new XRWebGLBinding(r,t),_=g.createProjectionLayer(Le),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),f=new ni(_.textureWidth,_.textureHeight,{format:fn,type:Gn,depthTexture:new gl(_.textureWidth,_.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});const We=e.properties.get(f);We.__ignoreDepthValues=_.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(u),h=null,l=await r.requestReferenceSpace(a),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(K){for(let ne=0;ne<K.removed.length;ne++){const Me=K.removed[ne],Ce=T.indexOf(Me);Ce>=0&&(T[Ce]=null,P[Ce].disconnect(Me))}for(let ne=0;ne<K.added.length;ne++){const Me=K.added[ne];let Ce=T.indexOf(Me);if(Ce===-1){for(let We=0;We<P.length;We++)if(We>=T.length){T.push(Me),Ce=We;break}else if(T[We]===null){T[We]=Me,Ce=We;break}if(Ce===-1)break}const Le=P[Ce];Le&&Le.connect(Me)}}const q=new X,Z=new X;function ee(K,ne,Me){q.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(Me.matrixWorld);const Ce=q.distanceTo(Z),Le=ne.projectionMatrix.elements,We=Me.projectionMatrix.elements,Xe=Le[14]/(Le[10]-1),De=Le[14]/(Le[10]+1),Qe=(Le[9]+1)/Le[5],V=(Le[9]-1)/Le[5],it=(Le[8]-1)/Le[0],Ee=(We[8]+1)/We[0],Ve=Xe*it,Ae=Xe*Ee,pt=Ce/(-it+Ee),je=pt*-it;ne.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(je),K.translateZ(pt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const A=Xe+pt,E=De+pt,k=Ve-je,le=Ae+(Ce-je),oe=Qe*De/E*A,ie=V*De/E*A;K.projectionMatrix.makePerspective(k,le,oe,ie,A,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function $(K,ne){ne===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ne.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;b.near=I.near=F.near=K.near,b.far=I.far=F.far=K.far,(U!==b.near||Y!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,Y=b.far);const ne=K.parent,Me=b.cameras;$(b,ne);for(let Ce=0;Ce<Me.length;Ce++)$(Me[Ce],ne);Me.length===2?ee(b,F,I):b.projectionMatrix.copy(F.projectionMatrix),J(K,b,ne)};function J(K,ne,Me){Me===null?K.matrix.copy(ne.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ne.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ne.projectionMatrix),K.projectionMatrixInverse.copy(ne.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Os*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(_===null&&M===null))return u},this.setFoveation=function(K){u=K,_!==null&&(_.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)};let te=null;function he(K,ne){if(p=ne.getViewerPose(h||l),v=ne,p!==null){const Me=p.views;M!==null&&(e.setRenderTargetFramebuffer(f,M.framebuffer),e.setRenderTarget(f));let Ce=!1;Me.length!==b.cameras.length&&(b.cameras.length=0,Ce=!0);for(let Le=0;Le<Me.length;Le++){const We=Me[Le];let Xe=null;if(M!==null)Xe=M.getViewport(We);else{const Qe=g.getViewSubImage(_,We);Xe=Qe.viewport,Le===0&&(e.setRenderTargetTextures(f,Qe.colorTexture,_.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(f))}let De=se[Le];De===void 0&&(De=new rn,De.layers.enable(Le),De.viewport=new Ft,se[Le]=De),De.matrix.fromArray(We.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(We.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Le===0&&(b.matrix.copy(De.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ce===!0&&b.cameras.push(De)}}for(let Me=0;Me<P.length;Me++){const Ce=T[Me],Le=P[Me];Ce!==null&&Le!==void 0&&Le.update(Ce,ne,h||l)}te&&te(K,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),v=null}const fe=new ml;fe.setAnimationLoop(he),this.setAnimationLoop=function(K){te=K},this.dispose=function(){}}}function lm(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,hl(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,P,T,C){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),g(m,f)):f.isMeshPhongMaterial?(o(m,f),p(m,f)):f.isMeshStandardMaterial?(o(m,f),_(m,f),f.isMeshPhysicalMaterial&&M(m,f,C)):f.isMeshMatcapMaterial?(o(m,f),v(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),S(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(l(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?u(m,f,P,T):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===jt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===jt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const P=e.get(f).envMap;if(P&&(m.envMap.value=P,m.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const T=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*T,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function u(m,f,P,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*P,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function p(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function g(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function _(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function M(m,f,P){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===jt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=P.texture,m.transmissionSamplerSize.value.set(P.width,P.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const P=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(P.matrixWorld),m.nearDistance.value=P.shadow.camera.near,m.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function cm(i,e,t,n){let r={},o={},l=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(P,T){const C=T.program;n.uniformBlockBinding(P,C)}function h(P,T){let C=r[P.id];C===void 0&&(v(P),C=p(P),r[P.id]=C,P.addEventListener("dispose",m));const z=T.program;n.updateUBOMapping(P,z);const F=e.render.frame;o[P.id]!==F&&(_(P),o[P.id]=F)}function p(P){const T=g();P.__bindingPointIndex=T;const C=i.createBuffer(),z=P.__size,F=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,z,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,C),C}function g(){for(let P=0;P<a;P++)if(l.indexOf(P)===-1)return l.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const T=r[P.id],C=P.uniforms,z=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let F=0,I=C.length;F<I;F++){const se=Array.isArray(C[F])?C[F]:[C[F]];for(let b=0,U=se.length;b<U;b++){const Y=se[b];if(M(Y,F,b,z)===!0){const Q=Y.__offset,ce=Array.isArray(Y.value)?Y.value:[Y.value];let O=0;for(let q=0;q<ce.length;q++){const Z=ce[q],ee=S(Z);typeof Z=="number"||typeof Z=="boolean"?(Y.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,Q+O,Y.__data)):Z.isMatrix3?(Y.__data[0]=Z.elements[0],Y.__data[1]=Z.elements[1],Y.__data[2]=Z.elements[2],Y.__data[3]=0,Y.__data[4]=Z.elements[3],Y.__data[5]=Z.elements[4],Y.__data[6]=Z.elements[5],Y.__data[7]=0,Y.__data[8]=Z.elements[6],Y.__data[9]=Z.elements[7],Y.__data[10]=Z.elements[8],Y.__data[11]=0):(Z.toArray(Y.__data,O),O+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,Y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(P,T,C,z){const F=P.value,I=T+"_"+C;if(z[I]===void 0)return typeof F=="number"||typeof F=="boolean"?z[I]=F:z[I]=F.clone(),!0;{const se=z[I];if(typeof F=="number"||typeof F=="boolean"){if(se!==F)return z[I]=F,!0}else if(se.equals(F)===!1)return se.copy(F),!0}return!1}function v(P){const T=P.uniforms;let C=0;const z=16;for(let I=0,se=T.length;I<se;I++){const b=Array.isArray(T[I])?T[I]:[T[I]];for(let U=0,Y=b.length;U<Y;U++){const Q=b[U],ce=Array.isArray(Q.value)?Q.value:[Q.value];for(let O=0,q=ce.length;O<q;O++){const Z=ce[O],ee=S(Z),$=C%z;$!==0&&z-$<ee.boundary&&(C+=z-$),Q.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=C,C+=ee.storage}}}const F=C%z;return F>0&&(C+=z-F),P.__size=C,P.__cache={},this}function S(P){const T={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(T.boundary=4,T.storage=4):P.isVector2?(T.boundary=8,T.storage=8):P.isVector3||P.isColor?(T.boundary=16,T.storage=12):P.isVector4?(T.boundary=16,T.storage=16):P.isMatrix3?(T.boundary=48,T.storage=48):P.isMatrix4?(T.boundary=64,T.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),T}function m(P){const T=P.target;T.removeEventListener("dispose",m);const C=l.indexOf(T.__bindingPointIndex);l.splice(C,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete o[T.id]}function f(){for(const P in r)i.deleteBuffer(r[P]);l=[],r={},o={}}return{bind:u,update:h,dispose:f}}class El{constructor(e={}){const{canvas:t=iu(),context:n=null,depth:r=!0,stencil:o=!0,alpha:l=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let _;n!==null?_=n.getContextAttributes().alpha:_=l;const M=new Uint32Array(4),v=new Int32Array(4);let S=null,m=null;const f=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=zn,this.toneMappingExposure=1;const T=this;let C=!1,z=0,F=0,I=null,se=-1,b=null;const U=new Ft,Y=new Ft;let Q=null;const ce=new nt(0);let O=0,q=t.width,Z=t.height,ee=1,$=null,J=null;const te=new Ft(0,0,q,Z),he=new Ft(0,0,q,Z);let fe=!1;const K=new pl;let ne=!1,Me=!1,Ce=null;const Le=new Ut,We=new dt,Xe=new X,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return I===null?ee:1}let V=n;function it(y,B){for(let W=0;W<y.length;W++){const j=y[W],H=t.getContext(j,B);if(H!==null)return H}return null}try{const y={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hs}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",ve,!1),V===null){const B=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&B.shift(),V=it(B,y),V===null)throw it(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ee,Ve,Ae,pt,je,A,E,k,le,oe,ie,be,_e,ye,Ie,Ye,ae,at,Ze,Ne,Pe,Te,Ke,rt;function mt(){Ee=new xd(V),Ve=new fd(V,Ee,e),Ee.init(Ve),Te=new rm(V,Ee,Ve),Ae=new nm(V,Ee,Ve),pt=new Ed(V),je=new Vp,A=new im(V,Ee,Ae,je,Ve,Te,pt),E=new pd(T),k=new vd(T),le=new Ru(V,Ve),Ke=new ud(V,Ee,le,Ve),oe=new Md(V,le,pt,Ke),ie=new bd(V,oe,le,pt),Ze=new Ad(V,Ve,A),Ye=new dd(je),be=new Hp(T,E,k,Ee,Ve,Ke,Ye),_e=new lm(T,je),ye=new Wp,Ie=new Zp(Ee,Ve),at=new cd(T,E,k,Ae,ie,_,u),ae=new tm(T,ie,Ve),rt=new cm(V,pt,Ve,Ae),Ne=new hd(V,Ee,pt,Ve),Pe=new Sd(V,Ee,pt,Ve),pt.programs=be.programs,T.capabilities=Ve,T.extensions=Ee,T.properties=je,T.renderLists=ye,T.shadowMap=ae,T.state=Ae,T.info=pt}mt();const Ge=new am(T,V);this.xr=Ge,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const y=Ee.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ee.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(y){y!==void 0&&(ee=y,this.setSize(q,Z,!1))},this.getSize=function(y){return y.set(q,Z)},this.setSize=function(y,B,W=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,Z=B,t.width=Math.floor(y*ee),t.height=Math.floor(B*ee),W===!0&&(t.style.width=y+"px",t.style.height=B+"px"),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(q*ee,Z*ee).floor()},this.setDrawingBufferSize=function(y,B,W){q=y,Z=B,ee=W,t.width=Math.floor(y*W),t.height=Math.floor(B*W),this.setViewport(0,0,y,B)},this.getCurrentViewport=function(y){return y.copy(U)},this.getViewport=function(y){return y.copy(te)},this.setViewport=function(y,B,W,j){y.isVector4?te.set(y.x,y.y,y.z,y.w):te.set(y,B,W,j),Ae.viewport(U.copy(te).multiplyScalar(ee).floor())},this.getScissor=function(y){return y.copy(he)},this.setScissor=function(y,B,W,j){y.isVector4?he.set(y.x,y.y,y.z,y.w):he.set(y,B,W,j),Ae.scissor(Y.copy(he).multiplyScalar(ee).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(y){Ae.setScissorTest(fe=y)},this.setOpaqueSort=function(y){$=y},this.setTransparentSort=function(y){J=y},this.getClearColor=function(y){return y.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(y=!0,B=!0,W=!0){let j=0;if(y){let H=!1;if(I!==null){const pe=I.texture.format;H=pe===$a||pe===Za||pe===Ka}if(H){const pe=I.texture.type,Se=pe===Gn||pe===Nn||pe===Vs||pe===Jn||pe===ja||pe===Ya,Ue=at.getClearColor(),Oe=at.getClearAlpha(),qe=Ue.r,ke=Ue.g,He=Ue.b;Se?(M[0]=qe,M[1]=ke,M[2]=He,M[3]=Oe,V.clearBufferuiv(V.COLOR,0,M)):(v[0]=qe,v[1]=ke,v[2]=He,v[3]=Oe,V.clearBufferiv(V.COLOR,0,v))}else j|=V.COLOR_BUFFER_BIT}B&&(j|=V.DEPTH_BUFFER_BIT),W&&(j|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ye.dispose(),Ie.dispose(),je.dispose(),E.dispose(),k.dispose(),ie.dispose(),Ke.dispose(),rt.dispose(),be.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Tt),Ge.removeEventListener("sessionend",ut),Ce&&(Ce.dispose(),Ce=null),yt.stop()};function ue(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=pt.autoReset,B=ae.enabled,W=ae.autoUpdate,j=ae.needsUpdate,H=ae.type;mt(),pt.autoReset=y,ae.enabled=B,ae.autoUpdate=W,ae.needsUpdate=j,ae.type=H}function ve(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ge(y){const B=y.target;B.removeEventListener("dispose",ge),Fe(B)}function Fe(y){we(y),je.remove(y)}function we(y){const B=je.get(y).programs;B!==void 0&&(B.forEach(function(W){be.releaseProgram(W)}),y.isShaderMaterial&&be.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,W,j,H,pe){B===null&&(B=De);const Se=H.isMesh&&H.matrixWorld.determinant()<0,Ue=si(y,B,W,j,H);Ae.setMaterial(j,Se);let Oe=W.index,qe=1;if(j.wireframe===!0){if(Oe=oe.getWireframeAttribute(W),Oe===void 0)return;qe=2}const ke=W.drawRange,He=W.attributes.position;let st=ke.start*qe,Ot=(ke.start+ke.count)*qe;pe!==null&&(st=Math.max(st,pe.start*qe),Ot=Math.min(Ot,(pe.start+pe.count)*qe)),Oe!==null?(st=Math.max(st,0),Ot=Math.min(Ot,Oe.count)):He!=null&&(st=Math.max(st,0),Ot=Math.min(Ot,He.count));const Et=Ot-st;if(Et<0||Et===1/0)return;Ke.setup(H,j,Ue,W,Oe);let At,ht=Ne;if(Oe!==null&&(At=le.get(Oe),ht=Pe,ht.setIndex(At)),H.isMesh)j.wireframe===!0?(Ae.setLineWidth(j.wireframeLinewidth*Qe()),ht.setMode(V.LINES)):ht.setMode(V.TRIANGLES);else if(H.isLine){let $e=j.linewidth;$e===void 0&&($e=1),Ae.setLineWidth($e*Qe()),H.isLineSegments?ht.setMode(V.LINES):H.isLineLoop?ht.setMode(V.LINE_LOOP):ht.setMode(V.LINE_STRIP)}else H.isPoints?ht.setMode(V.POINTS):H.isSprite&&ht.setMode(V.TRIANGLES);if(H.isBatchedMesh)ht.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ht.renderInstances(st,Et,H.count);else if(W.isInstancedBufferGeometry){const $e=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ai=Math.min(W.instanceCount,$e);ht.renderInstances(st,Et,ai)}else ht.render(st,Et)};function lt(y,B,W){y.transparent===!0&&y.side===Tn&&y.forceSinglePass===!1?(y.side=jt,y.needsUpdate=!0,Gt(y,B,W),y.side=Hn,y.needsUpdate=!0,Gt(y,B,W),y.side=Tn):Gt(y,B,W)}this.compile=function(y,B,W=null){W===null&&(W=y),m=Ie.get(W),m.init(),P.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),y!==W&&y.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(T._useLegacyLights);const j=new Set;return y.traverse(function(H){const pe=H.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){const Ue=pe[Se];lt(Ue,W,H),j.add(Ue)}else lt(pe,W,H),j.add(pe)}),P.pop(),m=null,j},this.compileAsync=function(y,B,W=null){const j=this.compile(y,B,W);return new Promise(H=>{function pe(){if(j.forEach(function(Se){je.get(Se).currentProgram.isReady()&&j.delete(Se)}),j.size===0){H(y);return}setTimeout(pe,10)}Ee.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ct=null;function St(y){ct&&ct(y)}function Tt(){yt.stop()}function ut(){yt.start()}const yt=new ml;yt.setAnimationLoop(St),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(y){ct=y,Ge.setAnimationLoop(y),y===null?yt.stop():yt.start()},Ge.addEventListener("sessionstart",Tt),Ge.addEventListener("sessionend",ut),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(B),B=Ge.getCamera()),y.isScene===!0&&y.onBeforeRender(T,y,B,I),m=Ie.get(y,P.length),m.init(),P.push(m),Le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(Le),Me=this.localClippingEnabled,ne=Ye.init(this.clippingPlanes,Me),S=ye.get(y,f.length),S.init(),f.push(S),Jt(y,B,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort($,J),this.info.render.frame++,ne===!0&&Ye.beginShadows();const W=m.state.shadowsArray;if(ae.render(W,y,B),ne===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(S,y),m.setupLights(T._useLegacyLights),B.isArrayCamera){const j=B.cameras;for(let H=0,pe=j.length;H<pe;H++){const Se=j[H];Qt(S,y,Se,Se.viewport)}}else Qt(S,y,B);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(T,y,B),Ke.resetDefaultState(),se=-1,b=null,P.pop(),P.length>0?m=P[P.length-1]:m=null,f.pop(),f.length>0?S=f[f.length-1]:S=null};function Jt(y,B,W,j){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){j&&Xe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Le);const Se=ie.update(y),Ue=y.material;Ue.visible&&S.push(y,Se,Ue,W,Xe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||K.intersectsObject(y))){const Se=ie.update(y),Ue=y.material;if(j&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Xe.copy(y.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Xe.copy(Se.boundingSphere.center)),Xe.applyMatrix4(y.matrixWorld).applyMatrix4(Le)),Array.isArray(Ue)){const Oe=Se.groups;for(let qe=0,ke=Oe.length;qe<ke;qe++){const He=Oe[qe],st=Ue[He.materialIndex];st&&st.visible&&S.push(y,Se,st,W,Xe.z,He)}}else Ue.visible&&S.push(y,Se,Ue,W,Xe.z,null)}}const pe=y.children;for(let Se=0,Ue=pe.length;Se<Ue;Se++)Jt(pe[Se],B,W,j)}function Qt(y,B,W,j){const H=y.opaque,pe=y.transmissive,Se=y.transparent;m.setupLightsView(W),ne===!0&&Ye.setGlobalState(T.clippingPlanes,W),pe.length>0&&gn(H,pe,B,W),j&&Ae.viewport(U.copy(j)),H.length>0&&Vn(H,B,W),pe.length>0&&Vn(pe,B,W),Se.length>0&&Vn(Se,B,W),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function gn(y,B,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const pe=Ve.isWebGL2;Ce===null&&(Ce=new ni(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?$i:Gn,minFilter:Zi,samples:pe?4:0})),T.getDrawingBufferSize(We),pe?Ce.setSize(We.x,We.y):Ce.setSize(Bs(We.x),Bs(We.y));const Se=T.getRenderTarget();T.setRenderTarget(Ce),T.getClearColor(ce),O=T.getClearAlpha(),O<1&&T.setClearColor(16777215,.5),T.clear();const Ue=T.toneMapping;T.toneMapping=zn,Vn(y,W,j),A.updateMultisampleRenderTarget(Ce),A.updateRenderTargetMipmap(Ce);let Oe=!1;for(let qe=0,ke=B.length;qe<ke;qe++){const He=B[qe],st=He.object,Ot=He.geometry,Et=He.material,At=He.group;if(Et.side===Tn&&st.layers.test(j.layers)){const ht=Et.side;Et.side=jt,Et.needsUpdate=!0,Mt(st,W,j,Ot,Et,At),Et.side=ht,Et.needsUpdate=!0,Oe=!0}}Oe===!0&&(A.updateMultisampleRenderTarget(Ce),A.updateRenderTargetMipmap(Ce)),T.setRenderTarget(Se),T.setClearColor(ce,O),T.toneMapping=Ue}function Vn(y,B,W){const j=B.isScene===!0?B.overrideMaterial:null;for(let H=0,pe=y.length;H<pe;H++){const Se=y[H],Ue=Se.object,Oe=Se.geometry,qe=j===null?Se.material:j,ke=Se.group;Ue.layers.test(W.layers)&&Mt(Ue,B,W,Oe,qe,ke)}}function Mt(y,B,W,j,H,pe){y.onBeforeRender(T,B,W,j,H,pe),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(T,B,W,j,y,pe),H.transparent===!0&&H.side===Tn&&H.forceSinglePass===!1?(H.side=jt,H.needsUpdate=!0,T.renderBufferDirect(W,B,j,H,y,pe),H.side=Hn,H.needsUpdate=!0,T.renderBufferDirect(W,B,j,H,y,pe),H.side=Tn):T.renderBufferDirect(W,B,j,H,y,pe),y.onAfterRender(T,B,W,j,H,pe)}function Gt(y,B,W){B.isScene!==!0&&(B=De);const j=je.get(y),H=m.state.lights,pe=m.state.shadowsArray,Se=H.state.version,Ue=be.getParameters(y,H.state,pe,B,W),Oe=be.getProgramCacheKey(Ue);let qe=j.programs;j.environment=y.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(y.isMeshStandardMaterial?k:E).get(y.envMap||j.environment),qe===void 0&&(y.addEventListener("dispose",ge),qe=new Map,j.programs=qe);let ke=qe.get(Oe);if(ke!==void 0){if(j.currentProgram===ke&&j.lightsStateVersion===Se)return rr(y,Ue),ke}else Ue.uniforms=be.getUniforms(y),y.onBuild(W,Ue,T),y.onBeforeCompile(Ue,T),ke=be.acquireProgram(Ue,Oe),qe.set(Oe,ke),j.uniforms=Ue.uniforms;const He=j.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(He.clippingPlanes=Ye.uniform),rr(y,Ue),j.needsLights=oi(y),j.lightsStateVersion=Se,j.needsLights&&(He.ambientLightColor.value=H.state.ambient,He.lightProbe.value=H.state.probe,He.directionalLights.value=H.state.directional,He.directionalLightShadows.value=H.state.directionalShadow,He.spotLights.value=H.state.spot,He.spotLightShadows.value=H.state.spotShadow,He.rectAreaLights.value=H.state.rectArea,He.ltc_1.value=H.state.rectAreaLTC1,He.ltc_2.value=H.state.rectAreaLTC2,He.pointLights.value=H.state.point,He.pointLightShadows.value=H.state.pointShadow,He.hemisphereLights.value=H.state.hemi,He.directionalShadowMap.value=H.state.directionalShadowMap,He.directionalShadowMatrix.value=H.state.directionalShadowMatrix,He.spotShadowMap.value=H.state.spotShadowMap,He.spotLightMatrix.value=H.state.spotLightMatrix,He.spotLightMap.value=H.state.spotLightMap,He.pointShadowMap.value=H.state.pointShadowMap,He.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=ke,j.uniformsList=null,ke}function ri(y){if(y.uniformsList===null){const B=y.currentProgram.getUniforms();y.uniformsList=Nr.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function rr(y,B){const W=je.get(y);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function si(y,B,W,j,H){B.isScene!==!0&&(B=De),A.resetTextureUnits();const pe=B.fog,Se=j.isMeshStandardMaterial?B.environment:null,Ue=I===null?T.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:bn,Oe=(j.isMeshStandardMaterial?k:E).get(j.envMap||Se),qe=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),He=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,Ot=!!W.morphAttributes.color;let Et=zn;j.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Et=T.toneMapping);const At=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ht=At!==void 0?At.length:0,$e=je.get(j),ai=m.state.lights;if(ne===!0&&(Me===!0||y!==b)){const Ht=y===b&&j.id===se;Ye.setState(j,y,Ht)}let gt=!1;j.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==ai.state.version||$e.outputColorSpace!==Ue||H.isBatchedMesh&&$e.batching===!1||!H.isBatchedMesh&&$e.batching===!0||H.isInstancedMesh&&$e.instancing===!1||!H.isInstancedMesh&&$e.instancing===!0||H.isSkinnedMesh&&$e.skinning===!1||!H.isSkinnedMesh&&$e.skinning===!0||H.isInstancedMesh&&$e.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&$e.instancingColor===!1&&H.instanceColor!==null||$e.envMap!==Oe||j.fog===!0&&$e.fog!==pe||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ye.numPlanes||$e.numIntersection!==Ye.numIntersection)||$e.vertexAlphas!==qe||$e.vertexTangents!==ke||$e.morphTargets!==He||$e.morphNormals!==st||$e.morphColors!==Ot||$e.toneMapping!==Et||Ve.isWebGL2===!0&&$e.morphTargetsCount!==ht)&&(gt=!0):(gt=!0,$e.__version=j.version);let _n=$e.currentProgram;gt===!0&&(_n=Gt(j,B,H));let sr=!1,Rn=!1,li=!1;const wt=_n.getUniforms(),pn=$e.uniforms;if(Ae.useProgram(_n.program)&&(sr=!0,Rn=!0,li=!0),j.id!==se&&(se=j.id,Rn=!0),sr||b!==y){wt.setValue(V,"projectionMatrix",y.projectionMatrix),wt.setValue(V,"viewMatrix",y.matrixWorldInverse);const Ht=wt.map.cameraPosition;Ht!==void 0&&Ht.setValue(V,Xe.setFromMatrixPosition(y.matrixWorld)),Ve.logarithmicDepthBuffer&&wt.setValue(V,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&wt.setValue(V,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,Rn=!0,li=!0)}if(H.isSkinnedMesh){wt.setOptional(V,H,"bindMatrix"),wt.setOptional(V,H,"bindMatrixInverse");const Ht=H.skeleton;Ht&&(Ve.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),wt.setValue(V,"boneTexture",Ht.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(wt.setOptional(V,H,"batchingTexture"),wt.setValue(V,"batchingTexture",H._matricesTexture,A));const Lt=W.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0&&Ve.isWebGL2===!0)&&Ze.update(H,W,_n),(Rn||$e.receiveShadow!==H.receiveShadow)&&($e.receiveShadow=H.receiveShadow,wt.setValue(V,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(pn.envMap.value=Oe,pn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Rn&&(wt.setValue(V,"toneMappingExposure",T.toneMappingExposure),$e.needsLights&&zi(pn,li),pe&&j.fog===!0&&_e.refreshFogUniforms(pn,pe),_e.refreshMaterialUniforms(pn,j,ee,Z,Ce),Nr.upload(V,ri($e),pn,A)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Nr.upload(V,ri($e),pn,A),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&wt.setValue(V,"center",H.center),wt.setValue(V,"modelViewMatrix",H.modelViewMatrix),wt.setValue(V,"normalMatrix",H.normalMatrix),wt.setValue(V,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ht=j.uniformsGroups;for(let ci=0,ui=Ht.length;ci<ui;ci++)if(Ve.isWebGL2){const Gi=Ht[ci];rt.update(Gi,_n),rt.bind(Gi,_n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _n}function zi(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function oi(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,B,W){je.get(y.texture).__webglTexture=B,je.get(y.depthTexture).__webglTexture=W;const j=je.get(y);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,B){const W=je.get(y);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(y,B=0,W=0){I=y,z=B,F=W;let j=!0,H=null,pe=!1,Se=!1;if(y){const Oe=je.get(y);Oe.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(V.FRAMEBUFFER,null),j=!1):Oe.__webglFramebuffer===void 0?A.setupRenderTarget(y):Oe.__hasExternalTextures&&A.rebindTextures(y,je.get(y.texture).__webglTexture,je.get(y.depthTexture).__webglTexture);const qe=y.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Se=!0);const ke=je.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?H=ke[B][W]:H=ke[B],pe=!0):Ve.isWebGL2&&y.samples>0&&A.useMultisampledRTT(y)===!1?H=je.get(y).__webglMultisampledFramebuffer:Array.isArray(ke)?H=ke[W]:H=ke,U.copy(y.viewport),Y.copy(y.scissor),Q=y.scissorTest}else U.copy(te).multiplyScalar(ee).floor(),Y.copy(he).multiplyScalar(ee).floor(),Q=fe;if(Ae.bindFramebuffer(V.FRAMEBUFFER,H)&&Ve.drawBuffers&&j&&Ae.drawBuffers(y,H),Ae.viewport(U),Ae.scissor(Y),Ae.setScissorTest(Q),pe){const Oe=je.get(y.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+B,Oe.__webglTexture,W)}else if(Se){const Oe=je.get(y.texture),qe=B||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Oe.__webglTexture,W||0,qe)}se=-1},this.readRenderTargetPixels=function(y,B,W,j,H,pe,Se){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=je.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(Ue=Ue[Se]),Ue){Ae.bindFramebuffer(V.FRAMEBUFFER,Ue);try{const Oe=y.texture,qe=Oe.format,ke=Oe.type;if(qe!==fn&&Te.convert(qe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ke===$i&&(Ee.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(ke!==Gn&&Te.convert(ke)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===Fn&&(Ve.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-j&&W>=0&&W<=y.height-H&&V.readPixels(B,W,j,H,Te.convert(qe),Te.convert(ke),pe)}finally{const Oe=I!==null?je.get(I).__webglFramebuffer:null;Ae.bindFramebuffer(V.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(y,B,W=0){const j=Math.pow(2,-W),H=Math.floor(B.image.width*j),pe=Math.floor(B.image.height*j);A.setTexture2D(B,0),V.copyTexSubImage2D(V.TEXTURE_2D,W,0,0,y.x,y.y,H,pe),Ae.unbindTexture()},this.copyTextureToTexture=function(y,B,W,j=0){const H=B.image.width,pe=B.image.height,Se=Te.convert(W.format),Ue=Te.convert(W.type);A.setTexture2D(W,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,j,y.x,y.y,H,pe,Se,Ue,B.image.data):B.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,j,y.x,y.y,B.mipmaps[0].width,B.mipmaps[0].height,Se,B.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,j,y.x,y.y,Se,Ue,B.image),j===0&&W.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(y,B,W,j,H=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=y.max.x-y.min.x+1,Se=y.max.y-y.min.y+1,Ue=y.max.z-y.min.z+1,Oe=Te.convert(j.format),qe=Te.convert(j.type);let ke;if(j.isData3DTexture)A.setTexture3D(j,0),ke=V.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)A.setTexture2DArray(j,0),ke=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const He=V.getParameter(V.UNPACK_ROW_LENGTH),st=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ot=V.getParameter(V.UNPACK_SKIP_PIXELS),Et=V.getParameter(V.UNPACK_SKIP_ROWS),At=V.getParameter(V.UNPACK_SKIP_IMAGES),ht=W.isCompressedTexture?W.mipmaps[H]:W.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,ht.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ht.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,y.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,y.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,y.min.z),W.isDataTexture||W.isData3DTexture?V.texSubImage3D(ke,H,B.x,B.y,B.z,pe,Se,Ue,Oe,qe,ht.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(ke,H,B.x,B.y,B.z,pe,Se,Ue,Oe,ht.data)):V.texSubImage3D(ke,H,B.x,B.y,B.z,pe,Se,Ue,Oe,qe,ht),V.pixelStorei(V.UNPACK_ROW_LENGTH,He),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,st),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ot),V.pixelStorei(V.UNPACK_SKIP_ROWS,Et),V.pixelStorei(V.UNPACK_SKIP_IMAGES,At),H===0&&j.generateMipmaps&&V.generateMipmap(ke),Ae.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),Ae.unbindTexture()},this.resetState=function(){z=0,F=0,I=null,Ae.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ks?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===Vr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?ei:Qa}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ei?Nt:bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class um extends El{}um.prototype.isWebGL1Renderer=!0;class qs{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new nt(e),this.density=t}clone(){return new qs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}let hm=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};class yl extends nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ba=new Ut,Gs=new sl,Dr=new kr,Ir=new X;class fm extends Kt{constructor(e=new wn,t=new yl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Dr.radius+=o,e.ray.intersectsSphere(Dr)===!1)return;Ba.copy(r).invert(),Gs.copy(e.ray).applyMatrix4(Ba);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,h=n.index,g=n.attributes.position;if(h!==null){const _=Math.max(0,l.start),M=Math.min(h.count,l.start+l.count);for(let v=_,S=M;v<S;v++){const m=h.getX(v);Ir.fromBufferAttribute(g,m),za(Ir,m,u,r,e,t,this)}}else{const _=Math.max(0,l.start),M=Math.min(g.count,l.start+l.count);for(let v=_,S=M;v<S;v++)Ir.fromBufferAttribute(g,v),za(Ir,v,u,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function za(i,e,t,n,r,o,l){const a=Gs.distanceSqToPoint(i);if(a<t){const u=new X;Gs.closestPointToPoint(i,u),u.applyMatrix4(n);const h=r.ray.origin.distanceTo(u);if(h<r.near||h>r.far)return;o.push({distance:h,distanceToRay:Math.sqrt(a),point:u,index:e,face:null,object:l})}}const Ga={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class dm{constructor(e,t,n){const r=this;let o=!1,l=0,a=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){a++,o===!1&&r.onStart!==void 0&&r.onStart(p,l,a),o=!0},this.itemEnd=function(p){l++,r.onProgress!==void 0&&r.onProgress(p,l,a),l===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,g){return h.push(p,g),this},this.removeHandler=function(p){const g=h.indexOf(p);return g!==-1&&h.splice(g,2),this},this.getHandler=function(p){for(let g=0,_=h.length;g<_;g+=2){const M=h[g],v=h[g+1];if(M.global&&(M.lastIndex=0),M.test(p))return v}return null}}}const pm=new dm;class js{constructor(e){this.manager=e!==void 0?e:pm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}js.DEFAULT_MATERIAL_NAME="__DEFAULT";class mm extends js{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,l=Ga.get(e);if(l!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(l),o.manager.itemEnd(e)},0),l;const a=Ji("img");function u(){p(),Ga.add(e,this),t&&t(this),o.manager.itemEnd(e)}function h(g){p(),r&&r(g),o.manager.itemError(e),o.manager.itemEnd(e)}function p(){a.removeEventListener("load",u,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",u,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class gm extends js{constructor(e){super(e)}load(e,t,n,r){const o=new Yt,l=new mm(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hs);class _m{constructor(e){this.canvas=e,this.width=window.innerWidth,this.height=window.innerHeight,this.scene=new hm,this.scene.fog=new qs(0,.002),this.camera=new rn(75,this.width/this.height,.1,1e3),this.camera.position.z=5,this.renderer=new El({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.objects=[],window.addEventListener("resize",()=>this.onResize())}add(e){this.scene.add(e.mesh),this.objects.push(e)}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}animate(){this.objects.forEach(e=>e.update()),this.renderer.render(this.scene,this.camera),requestAnimationFrame(()=>this.animate())}}class vm{constructor(){this.count=4e4,this.size=.08;const e=.5;this.shapes={sphere:{points:this.generateSphere(e),color:new nt("#00ffff")},cube:{points:this.generateCube(e),color:new nt("#00aa00")},torus:{points:this.generateTorus(e),color:new nt("#8800ff")},cone:{points:this.generateCone(e),color:new nt("#ff5500")},cylinder:{points:this.generateCylinder(e),color:new nt("#ffff00")},helix:{points:this.generateHelix(e),color:new nt("#ff00ff")},heart:{points:this.generateHeart(e),color:new nt("#ff0000")}},this.currentShapeName="sphere",this.targetPositions=this.shapes.sphere.points,this.targetColor=this.shapes.sphere.color,this.geometry=new wn,this.geometry.setAttribute("position",new dn(new Float32Array(this.shapes.sphere.points),3));const t=new gm().load("https://threejs.org/examples/textures/sprites/disc.png");this.material=new yl({size:this.size,color:this.shapes.sphere.color,map:t,transparent:!0,opacity:.6,blending:$n,sizeAttenuation:!0,depthWrite:!1,alphaTest:.01}),this.mesh=new fm(this.geometry,this.material),this.mesh.rotation.y=-.5,this.mesh.rotation.z=.1,this.targetRotationZ=.1,this.targetScale=1,this.transitionSpeed=.08,this.lerpFactor=.3}generateSphere(e){const t=new Float32Array(this.count*3);for(let n=0;n<this.count;n++){const r=3*Math.cbrt(Math.random())*e,o=Math.random()*2*Math.PI,l=Math.acos(2*Math.random()-1);t[n*3]=r*Math.sin(l)*Math.cos(o),t[n*3+1]=r*Math.sin(l)*Math.sin(o),t[n*3+2]=r*Math.cos(l)}return t}generateCube(e){const t=new Float32Array(this.count*3),n=4.5*e;for(let r=0;r<this.count;r++)t[r*3]=(Math.random()-.5)*n,t[r*3+1]=(Math.random()-.5)*n,t[r*3+2]=(Math.random()-.5)*n;return t}generateTorus(e){const t=new Float32Array(this.count*3),n=3*e,r=1*e;for(let o=0;o<this.count;o++){const l=Math.random()*Math.PI*2,a=Math.random()*Math.PI*2,u=(n+r*Math.cos(a))*Math.cos(l),h=(n+r*Math.cos(a))*Math.sin(l),p=r*Math.sin(a);t[o*3]=u,t[o*3+1]=h,t[o*3+2]=p}return t}generateCone(e){const t=new Float32Array(this.count*3),n=5*e,r=2.5*e;for(let o=0;o<this.count;o++){const l=Math.random()*n,a=l/n*r,u=Math.random()*Math.PI*2,h=a*Math.cos(u),p=a*Math.sin(u),g=l-n/2;t[o*3]=h,t[o*3+1]=p,t[o*3+2]=-g}return t}generateCylinder(e){const t=new Float32Array(this.count*3),n=5*e,r=2*e;for(let o=0;o<this.count;o++){const l=(Math.random()-.5)*n,a=Math.random()*Math.PI*2,u=Math.sqrt(Math.random())*r,h=u*Math.cos(a),p=u*Math.sin(a);t[o*3]=h,t[o*3+1]=p,t[o*3+2]=-l}return t}generateHelix(e){const t=new Float32Array(this.count*3);for(let n=0;n<this.count;n++){const r=Math.random()*20,o=Math.cos(r)*2*e,l=Math.sin(r)*2*e,a=(r-10)*.5*e,u=.2*e;t[n*3]=o+(Math.random()-.5)*u,t[n*3+1]=l+(Math.random()-.5)*u,t[n*3+2]=a}return t}generateHeart(e){const t=new Float32Array(this.count*3);for(let n=0;n<this.count;n++){const r=Math.random()*Math.PI*2,o=.15*e;let l=16*Math.pow(Math.sin(r),3),a=13*Math.cos(r)-5*Math.cos(2*r)-2*Math.cos(3*r)-Math.cos(4*r),u=(Math.random()-.5)*4*e;l*=o,a*=o,t[n*3]=l,t[n*3+1]=a,t[n*3+2]=u}return t}setShape(e){this.shapes[e]&&(this.currentShapeName=e,this.targetPositions=this.shapes[e].points,this.targetColor=this.shapes[e].color)}nextShape(){const e=Object.keys(this.shapes),n=(e.indexOf(this.currentShapeName)+1)%e.length;return this.setShape(e[n]),e[n]}setInteractionState(e,t){this.targetScale=t}update(){const e=this.geometry.attributes.position.array,t=this.targetPositions;for(let o=0;o<this.count*3;o++)e[o]+=(t[o]-e[o])*this.transitionSpeed;this.geometry.attributes.position.needsUpdate=!0,this.material.color.lerp(this.targetColor,.05),this.mesh.rotation.y+=.002,this.mesh.rotation.x+=.001;const n=this.mesh.scale.x,r=n+(this.targetScale-n)*this.lerpFactor;this.mesh.scale.set(r,r,r)}}var Ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ha={};(function(){var i;function e(s){var c=0;return function(){return c<s.length?{done:!1,value:s[c++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,d){return s==Array.prototype||s==Object.prototype||(s[c]=d.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ui=="object"&&Ui];for(var c=0;c<s.length;++c){var d=s[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function o(s,c){if(c)e:{var d=r;s=s.split(".");for(var x=0;x<s.length-1;x++){var w=s[x];if(!(w in d))break e;d=d[w]}s=s[s.length-1],x=d[s],c=c(x),c!=x&&c!=null&&t(d,s,{configurable:!0,writable:!0,value:c})}}o("Symbol",function(s){function c(L){if(this instanceof c)throw new TypeError("Symbol is not a constructor");return new d(x+(L||"")+"_"+w++,L)}function d(L,R){this.h=L,t(this,"description",{configurable:!0,writable:!0,value:R})}if(s)return s;d.prototype.toString=function(){return this.h};var x="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",w=0;return c}),o("Symbol.iterator",function(s){if(s)return s;s=Symbol("Symbol.iterator");for(var c="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),d=0;d<c.length;d++){var x=r[c[d]];typeof x=="function"&&typeof x.prototype[s]!="function"&&t(x.prototype,s,{configurable:!0,writable:!0,value:function(){return l(e(this))}})}return s});function l(s){return s={next:s},s[Symbol.iterator]=function(){return this},s}function a(s){var c=typeof Symbol<"u"&&Symbol.iterator&&s[Symbol.iterator];return c?c.call(s):{next:e(s)}}function u(s){if(!(s instanceof Array)){s=a(s);for(var c,d=[];!(c=s.next()).done;)d.push(c.value);s=d}return s}var h=typeof Object.assign=="function"?Object.assign:function(s,c){for(var d=1;d<arguments.length;d++){var x=arguments[d];if(x)for(var w in x)Object.prototype.hasOwnProperty.call(x,w)&&(s[w]=x[w])}return s};o("Object.assign",function(s){return s||h});var p=typeof Object.create=="function"?Object.create:function(s){function c(){}return c.prototype=s,new c},g;if(typeof Object.setPrototypeOf=="function")g=Object.setPrototypeOf;else{var _;e:{var M={a:!0},v={};try{v.__proto__=M,_=v.a;break e}catch{}_=!1}g=_?function(s,c){if(s.__proto__=c,s.__proto__!==c)throw new TypeError(s+" is not extensible");return s}:null}var S=g;function m(s,c){if(s.prototype=p(c.prototype),s.prototype.constructor=s,S)S(s,c);else for(var d in c)if(d!="prototype")if(Object.defineProperties){var x=Object.getOwnPropertyDescriptor(c,d);x&&Object.defineProperty(s,d,x)}else s[d]=c[d];s.ya=c.prototype}function f(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function P(s){if(s.m)throw new TypeError("Generator is already running");s.m=!0}f.prototype.u=function(s){this.i=s};function T(s,c){s.l={ma:c,na:!0},s.h=s.s||s.v}f.prototype.return=function(s){this.l={return:s},this.h=this.v};function C(s,c,d){return s.h=d,{value:c}}function z(s){this.h=new f,this.i=s}function F(s,c){P(s.h);var d=s.h.j;return d?I(s,"return"in d?d.return:function(x){return{value:x,done:!0}},c,s.h.return):(s.h.return(c),se(s))}function I(s,c,d,x){try{var w=c.call(s.h.j,d);if(!(w instanceof Object))throw new TypeError("Iterator result "+w+" is not an object");if(!w.done)return s.h.m=!1,w;var L=w.value}catch(R){return s.h.j=null,T(s.h,R),se(s)}return s.h.j=null,x.call(s.h,L),se(s)}function se(s){for(;s.h.h;)try{var c=s.i(s.h);if(c)return s.h.m=!1,{value:c.value,done:!1}}catch(d){s.h.i=void 0,T(s.h,d)}if(s.h.m=!1,s.h.l){if(c=s.h.l,s.h.l=null,c.na)throw c.ma;return{value:c.return,done:!0}}return{value:void 0,done:!0}}function b(s){this.next=function(c){return P(s.h),s.h.j?c=I(s,s.h.j.next,c,s.h.u):(s.h.u(c),c=se(s)),c},this.throw=function(c){return P(s.h),s.h.j?c=I(s,s.h.j.throw,c,s.h.u):(T(s.h,c),c=se(s)),c},this.return=function(c){return F(s,c)},this[Symbol.iterator]=function(){return this}}function U(s){function c(x){return s.next(x)}function d(x){return s.throw(x)}return new Promise(function(x,w){function L(R){R.done?x(R.value):Promise.resolve(R.value).then(c,d).then(L,w)}L(s.next())})}function Y(s){return U(new b(new z(s)))}o("Promise",function(s){function c(R){this.i=0,this.j=void 0,this.h=[],this.u=!1;var N=this.l();try{R(N.resolve,N.reject)}catch(G){N.reject(G)}}function d(){this.h=null}function x(R){return R instanceof c?R:new c(function(N){N(R)})}if(s)return s;d.prototype.i=function(R){if(this.h==null){this.h=[];var N=this;this.j(function(){N.m()})}this.h.push(R)};var w=r.setTimeout;d.prototype.j=function(R){w(R,0)},d.prototype.m=function(){for(;this.h&&this.h.length;){var R=this.h;this.h=[];for(var N=0;N<R.length;++N){var G=R[N];R[N]=null;try{G()}catch(re){this.l(re)}}}this.h=null},d.prototype.l=function(R){this.j(function(){throw R})},c.prototype.l=function(){function R(re){return function(de){G||(G=!0,re.call(N,de))}}var N=this,G=!1;return{resolve:R(this.I),reject:R(this.m)}},c.prototype.I=function(R){if(R===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(R instanceof c)this.L(R);else{e:switch(typeof R){case"object":var N=R!=null;break e;case"function":N=!0;break e;default:N=!1}N?this.F(R):this.s(R)}},c.prototype.F=function(R){var N=void 0;try{N=R.then}catch(G){this.m(G);return}typeof N=="function"?this.M(N,R):this.s(R)},c.prototype.m=function(R){this.v(2,R)},c.prototype.s=function(R){this.v(1,R)},c.prototype.v=function(R,N){if(this.i!=0)throw Error("Cannot settle("+R+", "+N+"): Promise already settled in state"+this.i);this.i=R,this.j=N,this.i===2&&this.K(),this.H()},c.prototype.K=function(){var R=this;w(function(){if(R.D()){var N=r.console;typeof N<"u"&&N.error(R.j)}},1)},c.prototype.D=function(){if(this.u)return!1;var R=r.CustomEvent,N=r.Event,G=r.dispatchEvent;return typeof G>"u"?!0:(typeof R=="function"?R=new R("unhandledrejection",{cancelable:!0}):typeof N=="function"?R=new N("unhandledrejection",{cancelable:!0}):(R=r.document.createEvent("CustomEvent"),R.initCustomEvent("unhandledrejection",!1,!0,R)),R.promise=this,R.reason=this.j,G(R))},c.prototype.H=function(){if(this.h!=null){for(var R=0;R<this.h.length;++R)L.i(this.h[R]);this.h=null}};var L=new d;return c.prototype.L=function(R){var N=this.l();R.T(N.resolve,N.reject)},c.prototype.M=function(R,N){var G=this.l();try{R.call(N,G.resolve,G.reject)}catch(re){G.reject(re)}},c.prototype.then=function(R,N){function G(Re,xe){return typeof Re=="function"?function(ze){try{re(Re(ze))}catch(et){de(et)}}:xe}var re,de,Be=new c(function(Re,xe){re=Re,de=xe});return this.T(G(R,re),G(N,de)),Be},c.prototype.catch=function(R){return this.then(void 0,R)},c.prototype.T=function(R,N){function G(){switch(re.i){case 1:R(re.j);break;case 2:N(re.j);break;default:throw Error("Unexpected state: "+re.i)}}var re=this;this.h==null?L.i(G):this.h.push(G),this.u=!0},c.resolve=x,c.reject=function(R){return new c(function(N,G){G(R)})},c.race=function(R){return new c(function(N,G){for(var re=a(R),de=re.next();!de.done;de=re.next())x(de.value).T(N,G)})},c.all=function(R){var N=a(R),G=N.next();return G.done?x([]):new c(function(re,de){function Be(ze){return function(et){Re[ze]=et,xe--,xe==0&&re(Re)}}var Re=[],xe=0;do Re.push(void 0),xe++,x(G.value).T(Be(Re.length-1),de),G=N.next();while(!G.done)})},c});function Q(s,c){s instanceof String&&(s+="");var d=0,x=!1,w={next:function(){if(!x&&d<s.length){var L=d++;return{value:c(L,s[L]),done:!1}}return x=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}o("Array.prototype.keys",function(s){return s||function(){return Q(this,function(c){return c})}}),o("Array.prototype.fill",function(s){return s||function(c,d,x){var w=this.length||0;for(0>d&&(d=Math.max(0,w+d)),(x==null||x>w)&&(x=w),x=Number(x),0>x&&(x=Math.max(0,w+x)),d=Number(d||0);d<x;d++)this[d]=c;return this}});function ce(s){return s||Array.prototype.fill}o("Int8Array.prototype.fill",ce),o("Uint8Array.prototype.fill",ce),o("Uint8ClampedArray.prototype.fill",ce),o("Int16Array.prototype.fill",ce),o("Uint16Array.prototype.fill",ce),o("Int32Array.prototype.fill",ce),o("Uint32Array.prototype.fill",ce),o("Float32Array.prototype.fill",ce),o("Float64Array.prototype.fill",ce),o("Object.is",function(s){return s||function(c,d){return c===d?c!==0||1/c===1/d:c!==c&&d!==d}}),o("Array.prototype.includes",function(s){return s||function(c,d){var x=this;x instanceof String&&(x=String(x));var w=x.length;for(d=d||0,0>d&&(d=Math.max(d+w,0));d<w;d++){var L=x[d];if(L===c||Object.is(L,c))return!0}return!1}}),o("String.prototype.includes",function(s){return s||function(c,d){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(c,d||0)!==-1}});var O=this||self;function q(s,c){s=s.split(".");var d=O;s[0]in d||typeof d.execScript>"u"||d.execScript("var "+s[0]);for(var x;s.length&&(x=s.shift());)s.length||c===void 0?d[x]&&d[x]!==Object.prototype[x]?d=d[x]:d=d[x]={}:d[x]=c}function Z(s){var c;e:{if((c=O.navigator)&&(c=c.userAgent))break e;c=""}return c.indexOf(s)!=-1}var ee=Array.prototype.map?function(s,c){return Array.prototype.map.call(s,c,void 0)}:function(s,c){for(var d=s.length,x=Array(d),w=typeof s=="string"?s.split(""):s,L=0;L<d;L++)L in w&&(x[L]=c.call(void 0,w[L],L,s));return x},$={},J=null;function te(s){var c=s.length,d=3*c/4;d%3?d=Math.floor(d):"=.".indexOf(s[c-1])!=-1&&(d="=.".indexOf(s[c-2])!=-1?d-2:d-1);var x=new Uint8Array(d),w=0;return he(s,function(L){x[w++]=L}),w!==d?x.subarray(0,w):x}function he(s,c){function d(G){for(;x<s.length;){var re=s.charAt(x++),de=J[re];if(de!=null)return de;if(!/^[\s\xa0]*$/.test(re))throw Error("Unknown base64 encoding at char: "+re)}return G}fe();for(var x=0;;){var w=d(-1),L=d(0),R=d(64),N=d(64);if(N===64&&w===-1)break;c(w<<2|L>>4),R!=64&&(c(L<<4&240|R>>2),N!=64&&c(R<<6&192|N))}}function fe(){if(!J){J={};for(var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),c=["+/=","+/","-_=","-_.","-_"],d=0;5>d;d++){var x=s.concat(c[d].split(""));$[d]=x;for(var w=0;w<x.length;w++){var L=x[w];J[L]===void 0&&(J[L]=w)}}}}var K=typeof Uint8Array<"u",ne=!(Z("Trident")||Z("MSIE"))&&typeof O.btoa=="function";function Me(s){if(!ne){var c;c===void 0&&(c=0),fe(),c=$[c];for(var d=Array(Math.floor(s.length/3)),x=c[64]||"",w=0,L=0;w<s.length-2;w+=3){var R=s[w],N=s[w+1],G=s[w+2],re=c[R>>2];R=c[(R&3)<<4|N>>4],N=c[(N&15)<<2|G>>6],G=c[G&63],d[L++]=re+R+N+G}switch(re=0,G=x,s.length-w){case 2:re=s[w+1],G=c[(re&15)<<2]||x;case 1:s=s[w],d[L]=c[s>>2]+c[(s&3)<<4|re>>4]+G+x}return d.join("")}for(c="";10240<s.length;)c+=String.fromCharCode.apply(null,s.subarray(0,10240)),s=s.subarray(10240);return c+=String.fromCharCode.apply(null,s),btoa(c)}var Ce=RegExp("[-_.]","g");function Le(s){switch(s){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function We(s){if(!ne)return te(s);Ce.test(s)&&(s=s.replace(Ce,Le)),s=atob(s);for(var c=new Uint8Array(s.length),d=0;d<s.length;d++)c[d]=s.charCodeAt(d);return c}var Xe;function De(){return Xe||(Xe=new Uint8Array(0))}var Qe={},V=typeof Uint8Array.prototype.slice=="function",it=0,Ee=0;function Ve(s){var c=0>s;s=Math.abs(s);var d=s>>>0;s=Math.floor((s-d)/4294967296),c&&(d=a(pt(d,s)),c=d.next().value,s=d.next().value,d=c),it=d>>>0,Ee=s>>>0}var Ae=typeof BigInt=="function";function pt(s,c){return c=~c,s?s=~s+1:c+=1,[s,c]}function je(s,c){this.i=s>>>0,this.h=c>>>0}function A(s){if(!s)return E||(E=new je(0,0));if(!/^-?\d+$/.test(s))return null;if(16>s.length)Ve(Number(s));else if(Ae)s=BigInt(s),it=Number(s&BigInt(4294967295))>>>0,Ee=Number(s>>BigInt(32)&BigInt(4294967295));else{var c=+(s[0]==="-");Ee=it=0;for(var d=s.length,x=c,w=(d-c)%6+c;w<=d;x=w,w+=6)x=Number(s.slice(x,w)),Ee*=1e6,it=1e6*it+x,4294967296<=it&&(Ee+=it/4294967296|0,it%=4294967296);c&&(c=a(pt(it,Ee)),s=c.next().value,c=c.next().value,it=s,Ee=c)}return new je(it,Ee)}var E;function k(s,c){return Error("Invalid wire type: "+s+" (at position "+c+")")}function le(){return Error("Failed to read varint, encoding is invalid.")}function oe(s,c){return Error("Tried to read past the end of the data "+c+" > "+s)}function ie(){throw Error("Invalid UTF8")}function be(s,c){return c=String.fromCharCode.apply(null,c),s==null?c:s+c}var _e=void 0,ye,Ie=typeof TextDecoder<"u",Ye,ae=typeof TextEncoder<"u",at;function Ze(s){if(s!==Qe)throw Error("illegal external caller")}function Ne(s,c){if(Ze(c),this.V=s,s!=null&&s.length===0)throw Error("ByteString should be constructed with non-empty values")}function Pe(){return at||(at=new Ne(null,Qe))}function Te(s){Ze(Qe);var c=s.V;return c=c==null||K&&c!=null&&c instanceof Uint8Array?c:typeof c=="string"?We(c):null,c==null?c:s.V=c}function Ke(s){if(typeof s=="string")return{buffer:We(s),C:!1};if(Array.isArray(s))return{buffer:new Uint8Array(s),C:!1};if(s.constructor===Uint8Array)return{buffer:s,C:!1};if(s.constructor===ArrayBuffer)return{buffer:new Uint8Array(s),C:!1};if(s.constructor===Ne)return{buffer:Te(s)||De(),C:!0};if(s instanceof Uint8Array)return{buffer:new Uint8Array(s.buffer,s.byteOffset,s.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function rt(s,c){this.i=null,this.m=!1,this.h=this.j=this.l=0,mt(this,s,c)}function mt(s,c,d){d=d===void 0?{}:d,s.S=d.S===void 0?!1:d.S,c&&(c=Ke(c),s.i=c.buffer,s.m=c.C,s.l=0,s.j=s.i.length,s.h=s.l)}rt.prototype.reset=function(){this.h=this.l};function Ge(s,c){if(s.h=c,c>s.j)throw oe(s.j,c)}function ue(s){var c=s.i,d=s.h,x=c[d++],w=x&127;if(x&128&&(x=c[d++],w|=(x&127)<<7,x&128&&(x=c[d++],w|=(x&127)<<14,x&128&&(x=c[d++],w|=(x&127)<<21,x&128&&(x=c[d++],w|=x<<28,x&128&&c[d++]&128&&c[d++]&128&&c[d++]&128&&c[d++]&128&&c[d++]&128)))))throw le();return Ge(s,d),w}function D(s,c){if(0>c)throw Error("Tried to read a negative byte length: "+c);var d=s.h,x=d+c;if(x>s.j)throw oe(c,s.j-d);return s.h=x,d}var ve=[];function ge(){this.h=[]}ge.prototype.length=function(){return this.h.length},ge.prototype.end=function(){var s=this.h;return this.h=[],s};function Fe(s,c,d){for(;0<d||127<c;)s.h.push(c&127|128),c=(c>>>7|d<<25)>>>0,d>>>=7;s.h.push(c)}function we(s,c){for(;127<c;)s.h.push(c&127|128),c>>>=7;s.h.push(c)}function lt(s,c){if(ve.length){var d=ve.pop();mt(d,s,c),s=d}else s=new rt(s,c);this.h=s,this.j=this.h.h,this.i=this.l=-1,this.setOptions(c)}lt.prototype.setOptions=function(s){s=s===void 0?{}:s,this.ca=s.ca===void 0?!1:s.ca},lt.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function ct(s){var c=s.h;if(c.h==c.j)return!1;s.j=s.h.h;var d=ue(s.h)>>>0;if(c=d>>>3,d&=7,!(0<=d&&5>=d))throw k(d,s.j);if(1>c)throw Error("Invalid field number: "+c+" (at position "+s.j+")");return s.l=c,s.i=d,!0}function St(s){switch(s.i){case 0:if(s.i!=0)St(s);else e:{s=s.h;for(var c=s.h,d=c+10,x=s.i;c<d;)if(!(x[c++]&128)){Ge(s,c);break e}throw le()}break;case 1:s=s.h,Ge(s,s.h+8);break;case 2:s.i!=2?St(s):(c=ue(s.h)>>>0,s=s.h,Ge(s,s.h+c));break;case 5:s=s.h,Ge(s,s.h+4);break;case 3:c=s.l;do{if(!ct(s))throw Error("Unmatched start-group tag: stream EOF");if(s.i==4){if(s.l!=c)throw Error("Unmatched end-group tag");break}St(s)}while(!0);break;default:throw k(s.i,s.j)}}var Tt=[];function ut(){this.j=[],this.i=0,this.h=new ge}function yt(s,c){c.length!==0&&(s.j.push(c),s.i+=c.length)}function Jt(s,c){if(c=c.R){yt(s,s.h.end());for(var d=0;d<c.length;d++)yt(s,Te(c[d])||De())}}var Qt=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function gn(s,c){return Qt?s[Qt]|=c:s.A!==void 0?s.A|=c:(Object.defineProperties(s,{A:{value:c,configurable:!0,writable:!0,enumerable:!1}}),c)}function Vn(s,c){Qt?s[Qt]&&(s[Qt]&=~c):s.A!==void 0&&(s.A&=~c)}function Mt(s){var c;return Qt?c=s[Qt]:c=s.A,c??0}function Gt(s,c){Qt?s[Qt]=c:s.A!==void 0?s.A=c:Object.defineProperties(s,{A:{value:c,configurable:!0,writable:!0,enumerable:!1}})}function ri(s){return gn(s,1),s}function rr(s,c){Gt(c,(s|0)&-51)}function si(s,c){Gt(c,(s|18)&-41)}var zi={};function oi(s){return s!==null&&typeof s=="object"&&!Array.isArray(s)&&s.constructor===Object}var y,B=[];Gt(B,23),y=Object.freeze(B);function W(s){if(Mt(s.o)&2)throw Error("Cannot mutate an immutable Message")}function j(s){var c=s.length;(c=c?s[c-1]:void 0)&&oi(c)?c.g=1:(c={},s.push((c.g=1,c)))}function H(s){var c=s.i+s.G;return s.B||(s.B=s.o[c]={})}function pe(s,c){return c===-1?null:c>=s.i?s.B?s.B[c]:void 0:s.o[c+s.G]}function Se(s,c,d,x){W(s),Ue(s,c,d,x)}function Ue(s,c,d,x){s.j&&(s.j=void 0),c>=s.i||x?H(s)[c]=d:(s.o[c+s.G]=d,(s=s.B)&&c in s&&delete s[c])}function Oe(s,c,d,x){var w=pe(s,c);Array.isArray(w)||(w=y);var L=Mt(w);if(L&1||ri(w),x)L&2||gn(w,2),d&1||Object.freeze(w);else{x=!(d&2);var R=L&2;d&1||!R?x&&L&16&&!R&&Vn(w,16):(w=ri(Array.prototype.slice.call(w)),Ue(s,c,w))}return w}function qe(s,c){var d=pe(s,c),x=d==null?d:typeof d=="number"||d==="NaN"||d==="Infinity"||d==="-Infinity"?Number(d):void 0;return x!=null&&x!==d&&Ue(s,c,x),x}function ke(s,c,d,x,w){s.h||(s.h={});var L=s.h[d],R=Oe(s,d,3,w);if(!L){var N=R;L=[];var G=!!(Mt(s.o)&16);R=!!(Mt(N)&2);var re=N;!w&&R&&(N=Array.prototype.slice.call(N));for(var de=R,Be=0;Be<N.length;Be++){var Re=N[Be],xe=c,ze=!1;if(ze=ze===void 0?!1:ze,Re=Array.isArray(Re)?new xe(Re):ze?new xe:void 0,Re!==void 0){xe=Re.o;var et=ze=Mt(xe);R&&(et|=2),G&&(et|=16),et!=ze&&Gt(xe,et),xe=et,de=de||!!(2&xe),L.push(Re)}}return s.h[d]=L,G=Mt(N),c=G|33,c=de?c&-9:c|8,G!=c&&(de=N,Object.isFrozen(de)&&(de=Array.prototype.slice.call(de)),Gt(de,c),N=de),re!==N&&Ue(s,d,N),(w||x&&R)&&gn(L,2),x&&Object.freeze(L),L}return w||(w=Object.isFrozen(L),x&&!w?Object.freeze(L):!x&&w&&(L=Array.prototype.slice.call(L),s.h[d]=L)),L}function He(s,c,d){var x=!!(Mt(s.o)&2);if(c=ke(s,c,d,x,x),s=Oe(s,d,3,x),!(x||Mt(s)&8)){for(x=0;x<c.length;x++){if(d=c[x],Mt(d.o)&2){var w=pn(d,!1);w.j=d}else w=d;d!==w&&(c[x]=w,s[x]=w.o)}gn(s,8)}return c}function st(s,c,d){if(d!=null&&typeof d!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof d+": "+d);Se(s,c,d)}function Ot(s,c,d,x,w){W(s);var L=ke(s,d,c,!1,!1);return d=x??new d,s=Oe(s,c,2,!1),w!=null?(L.splice(w,0,d),s.splice(w,0,d.o)):(L.push(d),s.push(d.o)),d.C()&&Vn(s,8),d}function Et(s,c){return s??c}function At(s,c,d){return d=d===void 0?0:d,Et(qe(s,c),d)}var ht;function $e(s){switch(typeof s){case"number":return isFinite(s)?s:String(s);case"object":if(s)if(Array.isArray(s)){if(Mt(s)&128)return s=Array.prototype.slice.call(s),j(s),s}else{if(K&&s!=null&&s instanceof Uint8Array)return Me(s);if(s instanceof Ne){var c=s.V;return c==null?"":typeof c=="string"?c:s.V=Me(c)}}}return s}function ai(s,c,d,x){if(s!=null){if(Array.isArray(s))s=gt(s,c,d,x!==void 0);else if(oi(s)){var w={},L;for(L in s)w[L]=ai(s[L],c,d,x);s=w}else s=c(s,x);return s}}function gt(s,c,d,x){var w=Mt(s);x=x?!!(w&16):void 0,s=Array.prototype.slice.call(s);for(var L=0;L<s.length;L++)s[L]=ai(s[L],c,d,x);return d(w,s),s}function _n(s){return s.ja===zi?s.toJSON():$e(s)}function sr(s,c){s&128&&j(c)}function Rn(s,c,d){if(d=d===void 0?si:d,s!=null){if(K&&s instanceof Uint8Array)return s.length?new Ne(new Uint8Array(s),Qe):Pe();if(Array.isArray(s)){var x=Mt(s);return x&2?s:c&&!(x&32)&&(x&16||x===0)?(Gt(s,x|2),s):(s=gt(s,Rn,x&4?si:d,!0),c=Mt(s),c&4&&c&2&&Object.freeze(s),s)}return s.ja===zi?wt(s):s}}function li(s,c,d,x,w,L,R){if(s=s.h&&s.h[d]){if(x=Mt(s),x&2?x=s:(L=ee(s,wt),si(x,L),Object.freeze(L),x=L),W(c),R=x==null?y:ri([]),x!=null){for(L=!!x.length,s=0;s<x.length;s++){var N=x[s];L=L&&!(Mt(N.o)&2),R[s]=N.o}L=(L?8:0)|1,s=Mt(R),(s&L)!==L&&(Object.isFrozen(R)&&(R=Array.prototype.slice.call(R)),Gt(R,s|L)),c.h||(c.h={}),c.h[d]=x}else c.h&&(c.h[d]=void 0);Ue(c,d,R,w)}else Se(c,d,Rn(x,L,R),w)}function wt(s){return Mt(s.o)&2||(s=pn(s,!0),gn(s.o,2)),s}function pn(s,c){var d=s.o,x=[];gn(x,16);var w=s.constructor.h;if(w&&x.push(w),w=s.B,w){x.length=d.length,x.fill(void 0,x.length,d.length);var L={};x[x.length-1]=L}Mt(d)&128&&j(x),c=c||s.C()?si:rr,L=s.constructor,ht=x,x=new L(x),ht=void 0,s.R&&(x.R=s.R.slice()),L=!!(Mt(d)&16);for(var R=w?d.length-1:d.length,N=0;N<R;N++)li(s,x,N-s.G,d[N],!1,L,c);if(w)for(var G in w)li(s,x,+G,w[G],!0,L,c);return x}function Lt(s,c,d){s==null&&(s=ht),ht=void 0;var x=this.constructor.i||0,w=0<x,L=this.constructor.h,R=!1;if(s==null){s=L?[L]:[];var N=48,G=!0;w&&(x=0,N|=128),Gt(s,N)}else{if(!Array.isArray(s)||L&&L!==s[0])throw Error();var re=N=gn(s,0);if((G=(16&re)!==0)&&((R=(32&re)!==0)||(re|=32)),w){if(128&re)x=0;else if(0<s.length){var de=s[s.length-1];if(oi(de)&&"g"in de){x=0,re|=128,delete de.g;var Be=!0,Re;for(Re in de){Be=!1;break}Be&&s.pop()}}}else if(128&re)throw Error();N!==re&&Gt(s,re)}this.G=(L?0:-1)-x,this.h=void 0,this.o=s;e:{if(L=this.o.length,x=L-1,L&&(L=this.o[x],oi(L))){this.B=L,this.i=x-this.G;break e}c!==void 0&&-1<c?(this.i=Math.max(c,x+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!w&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(d){c=G&&!R&&!0,w=this.i;var xe;for(G=0;G<d.length;G++)R=d[G],R<w?(R+=this.G,(x=s[R])?Ht(x,c):s[R]=y):(xe||(xe=H(this)),(x=xe[R])?Ht(x,c):xe[R]=y)}}Lt.prototype.toJSON=function(){return gt(this.o,_n,sr)},Lt.prototype.C=function(){return!!(Mt(this.o)&2)};function Ht(s,c){if(Array.isArray(s)){var d=Mt(s),x=1;!c||d&2||(x|=16),(d&x)!==x&&Gt(s,d|x)}}Lt.prototype.ja=zi,Lt.prototype.toString=function(){return this.o.toString()};function ci(s,c,d){if(d){var x={},w;for(w in d){var L=d[w],R=L.qa;R||(x.J=L.wa||L.oa.W,L.ia?(x.aa=$s(L.ia),R=function(N){return function(G,re,de){return N.J(G,re,de,N.aa)}}(x)):L.ka?(x.Z=Js(L.da.P,L.ka),R=function(N){return function(G,re,de){return N.J(G,re,de,N.Z)}}(x)):R=x.J,L.qa=R),R(c,s,L.da),x={J:x.J,aa:x.aa,Z:x.Z}}}Jt(c,s)}var ui=Symbol();function Gi(s,c,d){return s[ui]||(s[ui]=function(x,w){return c(x,w,d)})}function Ys(s){var c=s[ui];if(!c){var d=jr(s);c=function(x,w){return Qs(x,w,d)},s[ui]=c}return c}function Tl(s){var c=s.ia;if(c)return Ys(c);if(c=s.va)return Gi(s.da.P,c,s.ka)}function Al(s){var c=Tl(s),d=s.da,x=s.oa.U;return c?function(w,L){return x(w,L,d,c)}:function(w,L){return x(w,L,d)}}function Ks(s,c){var d=s[c];return typeof d=="function"&&d.length===0&&(d=d(),s[c]=d),Array.isArray(d)&&(Vi in d||Hi in d||0<d.length&&typeof d[0]=="function")?d:void 0}function Zs(s,c,d,x,w,L){c.P=s[0];var R=1;if(s.length>R&&typeof s[R]!="number"){var N=s[R++];d(c,N)}for(;R<s.length;){d=s[R++];for(var G=R+1;G<s.length&&typeof s[G]!="number";)G++;switch(N=s[R++],G-=R,G){case 0:x(c,d,N);break;case 1:(G=Ks(s,R))?(R++,w(c,d,N,G)):x(c,d,N,s[R++]);break;case 2:G=R++,G=Ks(s,G),w(c,d,N,G,s[R++]);break;case 3:L(c,d,N,s[R++],s[R++],s[R++]);break;case 4:L(c,d,N,s[R++],s[R++],s[R++],s[R++]);break;default:throw Error("unexpected number of binary field arguments: "+G)}}return c}var or=Symbol();function $s(s){var c=s[or];if(!c){var d=qr(s);c=function(x,w){return eo(x,w,d)},s[or]=c}return c}function Js(s,c){var d=s[or];return d||(d=function(x,w){return ci(x,w,c)},s[or]=d),d}var Hi=Symbol();function bl(s,c){s.push(c)}function wl(s,c,d){s.push(c,d.W)}function Rl(s,c,d,x){var w=$s(x),L=qr(x).P,R=d.W;s.push(c,function(N,G,re){return R(N,G,re,L,w)})}function Cl(s,c,d,x,w,L){var R=Js(x,L),N=d.W;s.push(c,function(G,re,de){return N(G,re,de,x,R)})}function qr(s){var c=s[Hi];return c||(c=Zs(s,s[Hi]=[],bl,wl,Rl,Cl),Vi in s&&Hi in s&&(s.length=0),c)}var Vi=Symbol();function Ll(s,c){s[0]=c}function Pl(s,c,d,x){var w=d.U;s[c]=x?function(L,R,N){return w(L,R,N,x)}:w}function Ul(s,c,d,x,w){var L=d.U,R=Ys(x),N=jr(x).P;s[c]=function(G,re,de){return L(G,re,de,N,R,w)}}function Dl(s,c,d,x,w,L,R){var N=d.U,G=Gi(x,w,L);s[c]=function(re,de,Be){return N(re,de,Be,x,G,R)}}function jr(s){var c=s[Vi];return c||(c=Zs(s,s[Vi]={},Ll,Pl,Ul,Dl),Vi in s&&Hi in s&&(s.length=0),c)}function Qs(s,c,d){for(;ct(c)&&c.i!=4;){var x=c.l,w=d[x];if(!w){var L=d[0];L&&(L=L[x])&&(w=d[x]=Al(L))}if(!w||!w(c,s,x)){w=c,x=s,L=w.j,St(w);var R=w;if(!R.ca){if(w=R.h.h-L,R.h.h=L,R=R.h,w==0)w=Pe();else{if(L=D(R,w),R.S&&R.m)w=R.i.subarray(L,L+w);else{R=R.i;var N=L;w=L+w,w=N===w?De():V?R.slice(N,w):new Uint8Array(R.subarray(N,w))}w=w.length==0?Pe():new Ne(w,Qe)}(L=x.R)?L.push(w):x.R=[w]}}}return s}function eo(s,c,d){for(var x=d.length,w=x%2==1,L=w?1:0;L<x;L+=2)(0,d[L+1])(c,s,d[L]);ci(s,c,w?d[0]:void 0)}function ki(s,c){return{U:s,W:c}}var on=ki(function(s,c,d){if(s.i!==5)return!1;s=s.h;var x=s.i,w=s.h,L=x[w],R=x[w+1],N=x[w+2];return x=x[w+3],Ge(s,s.h+4),R=(L<<0|R<<8|N<<16|x<<24)>>>0,s=2*(R>>31)+1,L=R>>>23&255,R&=8388607,Se(c,d,L==255?R?NaN:1/0*s:L==0?s*Math.pow(2,-149)*R:s*Math.pow(2,L-150)*(R+Math.pow(2,23))),!0},function(s,c,d){if(c=qe(c,d),c!=null){we(s.h,8*d+5),s=s.h;var x=+c;x===0?0<1/x?it=Ee=0:(Ee=0,it=2147483648):isNaN(x)?(Ee=0,it=2147483647):(x=(d=0>x?-2147483648:0)?-x:x,34028234663852886e22<x?(Ee=0,it=(d|2139095040)>>>0):11754943508222875e-54>x?(x=Math.round(x/Math.pow(2,-149)),Ee=0,it=(d|x)>>>0):(c=Math.floor(Math.log(x)/Math.LN2),x*=Math.pow(2,-c),x=Math.round(8388608*x),16777216<=x&&++c,Ee=0,it=(d|c+127<<23|x&8388607)>>>0)),d=it,s.h.push(d>>>0&255),s.h.push(d>>>8&255),s.h.push(d>>>16&255),s.h.push(d>>>24&255)}}),Il=ki(function(s,c,d){if(s.i!==0)return!1;var x=s.h,w=0,L=s=0,R=x.i,N=x.h;do{var G=R[N++];w|=(G&127)<<L,L+=7}while(32>L&&G&128);for(32<L&&(s|=(G&127)>>4),L=3;32>L&&G&128;L+=7)G=R[N++],s|=(G&127)<<L;if(Ge(x,N),128>G)x=w>>>0,G=s>>>0,(s=G&2147483648)&&(x=~x+1>>>0,G=~G>>>0,x==0&&(G=G+1>>>0)),x=4294967296*G+(x>>>0);else throw le();return Se(c,d,s?-x:x),!0},function(s,c,d){c=pe(c,d),c!=null&&(typeof c=="string"&&A(c),c!=null&&(we(s.h,8*d),typeof c=="number"?(s=s.h,Ve(c),Fe(s,it,Ee)):(d=A(c),Fe(s.h,d.i,d.h))))}),Nl=ki(function(s,c,d){return s.i!==0?!1:(Se(c,d,ue(s.h)),!0)},function(s,c,d){if(c=pe(c,d),c!=null&&c!=null)if(we(s.h,8*d),s=s.h,d=c,0<=d)we(s,d);else{for(c=0;9>c;c++)s.h.push(d&127|128),d>>=7;s.h.push(1)}}),to=ki(function(s,c,d){if(s.i!==2)return!1;var x=ue(s.h)>>>0;s=s.h;var w=D(s,x);if(s=s.i,Ie){var L=s,R;(R=ye)||(R=ye=new TextDecoder("utf-8",{fatal:!0})),s=w+x,L=w===0&&s===L.length?L:L.subarray(w,s);try{var N=R.decode(L)}catch(Be){if(_e===void 0){try{R.decode(new Uint8Array([128]))}catch{}try{R.decode(new Uint8Array([97])),_e=!0}catch{_e=!1}}throw!_e&&(ye=void 0),Be}}else{N=w,x=N+x,w=[];for(var G=null,re,de;N<x;)re=s[N++],128>re?w.push(re):224>re?N>=x?ie():(de=s[N++],194>re||(de&192)!==128?(N--,ie()):w.push((re&31)<<6|de&63)):240>re?N>=x-1?ie():(de=s[N++],(de&192)!==128||re===224&&160>de||re===237&&160<=de||((L=s[N++])&192)!==128?(N--,ie()):w.push((re&15)<<12|(de&63)<<6|L&63)):244>=re?N>=x-2?ie():(de=s[N++],(de&192)!==128||(re<<28)+(de-144)>>30||((L=s[N++])&192)!==128||((R=s[N++])&192)!==128?(N--,ie()):(re=(re&7)<<18|(de&63)<<12|(L&63)<<6|R&63,re-=65536,w.push((re>>10&1023)+55296,(re&1023)+56320))):ie(),8192<=w.length&&(G=be(G,w),w.length=0);N=be(G,w)}return Se(c,d,N),!0},function(s,c,d){if(c=pe(c,d),c!=null){var x=!1;if(x=x===void 0?!1:x,ae){if(x&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(c))throw Error("Found an unpaired surrogate");c=(Ye||(Ye=new TextEncoder)).encode(c)}else{for(var w=0,L=new Uint8Array(3*c.length),R=0;R<c.length;R++){var N=c.charCodeAt(R);if(128>N)L[w++]=N;else{if(2048>N)L[w++]=N>>6|192;else{if(55296<=N&&57343>=N){if(56319>=N&&R<c.length){var G=c.charCodeAt(++R);if(56320<=G&&57343>=G){N=1024*(N-55296)+G-56320+65536,L[w++]=N>>18|240,L[w++]=N>>12&63|128,L[w++]=N>>6&63|128,L[w++]=N&63|128;continue}else R--}if(x)throw Error("Found an unpaired surrogate");N=65533}L[w++]=N>>12|224,L[w++]=N>>6&63|128}L[w++]=N&63|128}}c=w===L.length?L:L.subarray(0,w)}we(s.h,8*d+2),we(s.h,c.length),yt(s,s.h.end()),yt(s,c)}}),no=ki(function(s,c,d,x,w){if(s.i!==2)return!1;c=Ot(c,d,x),d=s.h.j,x=ue(s.h)>>>0;var L=s.h.h+x,R=L-d;if(0>=R&&(s.h.j=L,w(c,s,void 0,void 0,void 0),R=L-s.h.h),R)throw Error("Message parsing ended unexpectedly. Expected to read "+(x+" bytes, instead read "+(x-R)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return s.h.h=L,s.h.j=d,!0},function(s,c,d,x,w){if(c=He(c,x,d),c!=null)for(x=0;x<c.length;x++){var L=s;we(L.h,8*d+2);var R=L.h.end();yt(L,R),R.push(L.i),L=R,w(c[x],s),R=s;var N=L.pop();for(N=R.i+R.h.length()-N;127<N;)L.push(N&127|128),N>>>=7,R.i++;L.push(N),R.i++}});function Yr(s){return function(c,d){e:{if(Tt.length){var x=Tt.pop();x.setOptions(d),mt(x.h,c,d),c=x}else c=new lt(c,d);try{var w=jr(s),L=Qs(new w.P,c,w);break e}finally{w=c.h,w.i=null,w.m=!1,w.l=0,w.j=0,w.h=0,w.S=!1,c.l=-1,c.i=-1,100>Tt.length&&Tt.push(c)}L=void 0}return L}}function Kr(s){return function(){var c=new ut;eo(this,c,qr(s)),yt(c,c.h.end());for(var d=new Uint8Array(c.i),x=c.j,w=x.length,L=0,R=0;R<w;R++){var N=x[R];d.set(N,L),L+=N.length}return c.j=[d],d}}function hi(s){Lt.call(this,s)}m(hi,Lt);var io=[hi,1,Nl,2,on,3,to,4,to];hi.prototype.l=Kr(io);function Zr(s){Lt.call(this,s,-1,Fl)}m(Zr,Lt),Zr.prototype.addClassification=function(s,c){return Ot(this,1,hi,s,c),this};var Fl=[1],ro=Yr([Zr,1,no,io]);function fi(s){Lt.call(this,s)}m(fi,Lt);var so=[fi,1,on,2,on,3,on,4,on,5,on];fi.prototype.l=Kr(so);function oo(s){Lt.call(this,s,-1,Ol)}m(oo,Lt);var Ol=[1],ao=Yr([oo,1,no,so]);function ar(s){Lt.call(this,s)}m(ar,Lt);var lo=[ar,1,on,2,on,3,on,4,on,5,on,6,Il],Bl=Yr(lo);ar.prototype.l=Kr(lo);function co(s,c,d){if(d=s.createShader(d===0?s.VERTEX_SHADER:s.FRAGMENT_SHADER),s.shaderSource(d,c),s.compileShader(d),!s.getShaderParameter(d,s.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+s.getShaderInfoLog(d));return d}function uo(s){return He(s,hi,1).map(function(c){var d=pe(c,1);return{index:d??0,score:At(c,2),label:pe(c,3)!=null?Et(pe(c,3),""):void 0,displayName:pe(c,4)!=null?Et(pe(c,4),""):void 0}})}function ho(s){return{x:At(s,1),y:At(s,2),z:At(s,3),visibility:qe(s,4)!=null?At(s,4):void 0}}function fo(s){return s.map(function(c){return He(ao(c),fi,1).map(ho)})}function $r(s,c){this.i=s,this.h=c,this.m=0}function po(s,c,d){return zl(s,c),typeof s.h.canvas.transferToImageBitmap=="function"?Promise.resolve(s.h.canvas.transferToImageBitmap()):d?Promise.resolve(s.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(s.h.canvas):(s.j===void 0&&(s.j=document.createElement("canvas")),new Promise(function(x){s.j.height=s.h.canvas.height,s.j.width=s.h.canvas.width,s.j.getContext("2d",{}).drawImage(s.h.canvas,0,0,s.h.canvas.width,s.h.canvas.height),x(s.j)}))}function zl(s,c){var d=s.h;if(s.s===void 0){var x=co(d,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),w=co(d,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),L=d.createProgram();if(d.attachShader(L,x),d.attachShader(L,w),d.linkProgram(L),!d.getProgramParameter(L,d.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+d.getProgramInfoLog(L));x=s.s=L,d.useProgram(x),w=d.getUniformLocation(x,"sampler0"),s.l={O:d.getAttribLocation(x,"aVertex"),N:d.getAttribLocation(x,"aTex"),xa:w},s.v=d.createBuffer(),d.bindBuffer(d.ARRAY_BUFFER,s.v),d.enableVertexAttribArray(s.l.O),d.vertexAttribPointer(s.l.O,2,d.FLOAT,!1,0,0),d.bufferData(d.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),d.STATIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,null),s.u=d.createBuffer(),d.bindBuffer(d.ARRAY_BUFFER,s.u),d.enableVertexAttribArray(s.l.N),d.vertexAttribPointer(s.l.N,2,d.FLOAT,!1,0,0),d.bufferData(d.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),d.STATIC_DRAW),d.bindBuffer(d.ARRAY_BUFFER,null),d.uniform1i(w,0)}x=s.l,d.useProgram(s.s),d.canvas.width=c.width,d.canvas.height=c.height,d.viewport(0,0,c.width,c.height),d.activeTexture(d.TEXTURE0),s.i.bindTexture2d(c.glName),d.enableVertexAttribArray(x.O),d.bindBuffer(d.ARRAY_BUFFER,s.v),d.vertexAttribPointer(x.O,2,d.FLOAT,!1,0,0),d.enableVertexAttribArray(x.N),d.bindBuffer(d.ARRAY_BUFFER,s.u),d.vertexAttribPointer(x.N,2,d.FLOAT,!1,0,0),d.bindFramebuffer(d.DRAW_FRAMEBUFFER?d.DRAW_FRAMEBUFFER:d.FRAMEBUFFER,null),d.clearColor(0,0,0,0),d.clear(d.COLOR_BUFFER_BIT),d.colorMask(!0,!0,!0,!0),d.drawArrays(d.TRIANGLE_FAN,0,4),d.disableVertexAttribArray(x.O),d.disableVertexAttribArray(x.N),d.bindBuffer(d.ARRAY_BUFFER,null),s.i.bindTexture2d(0)}function Gl(s){this.h=s}var Hl=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Vl(s,c){return c+s}function mo(s,c){window[s]=c}function kl(s){var c=document.createElement("script");return c.setAttribute("src",s),c.setAttribute("crossorigin","anonymous"),new Promise(function(d){c.addEventListener("load",function(){d()},!1),c.addEventListener("error",function(){d()},!1),document.body.appendChild(c)})}function Wl(){return Y(function(s){switch(s.h){case 1:return s.s=2,C(s,WebAssembly.instantiate(Hl),4);case 4:s.h=3,s.s=0;break;case 2:return s.s=0,s.l=null,s.return(!1);case 3:return s.return(!0)}})}function Jr(s){if(this.h=s,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=s&&s.locateFile||Vl,typeof window=="object")var c=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")c=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=c,s.options){c=a(Object.keys(s.options));for(var d=c.next();!d.done;d=c.next()){d=d.value;var x=s.options[d].default;x!==void 0&&(this.l[d]=typeof x=="function"?x():x)}}}i=Jr.prototype,i.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function Xl(s){var c,d,x,w,L,R,N,G,re,de,Be;return Y(function(Re){switch(Re.h){case 1:return s.ga?(c=s.h.files===void 0?[]:typeof s.h.files=="function"?s.h.files(s.l):s.h.files,C(Re,Wl(),2)):Re.return();case 2:if(d=Re.i,typeof window=="object")return mo("createMediapipeSolutionsWasm",{locateFile:s.locateFile}),mo("createMediapipeSolutionsPackedAssets",{locateFile:s.locateFile}),R=c.filter(function(xe){return xe.data!==void 0}),N=c.filter(function(xe){return xe.data===void 0}),G=Promise.all(R.map(function(xe){var ze=lr(s,xe.url);if(xe.path!==void 0){var et=xe.path;ze=ze.then(function(vt){return s.overrideFile(et,vt),Promise.resolve(vt)})}return ze})),re=Promise.all(N.map(function(xe){return xe.simd===void 0||xe.simd&&d||!xe.simd&&!d?kl(s.locateFile(xe.url,s.ha)):Promise.resolve()})).then(function(){var xe,ze,et;return Y(function(vt){if(vt.h==1)return xe=window.createMediapipeSolutionsWasm,ze=window.createMediapipeSolutionsPackedAssets,et=s,C(vt,xe(ze),2);et.i=vt.i,vt.h=0})}),de=function(){return Y(function(xe){return s.h.graph&&s.h.graph.url?xe=C(xe,lr(s,s.h.graph.url),0):(xe.h=0,xe=void 0),xe})}(),C(Re,Promise.all([re,G,de]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return x=c.filter(function(xe){return xe.simd===void 0||xe.simd&&d||!xe.simd&&!d}).map(function(xe){return s.locateFile(xe.url,s.ha)}),importScripts.apply(null,u(x)),w=s,C(Re,createMediapipeSolutionsWasm(Module),6);case 6:w.i=Re.i,s.m=new OffscreenCanvas(1,1),s.i.canvas=s.m,L=s.i.GL.createContext(s.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),s.i.GL.makeContextCurrent(L),Re.h=4;break;case 7:if(s.m=document.createElement("canvas"),Be=s.m.getContext("webgl2",{}),!Be&&(Be=s.m.getContext("webgl",{}),!Be))return alert("Failed to create WebGL canvas context when passing video frame."),Re.return();s.K=Be,s.i.canvas=s.m,s.i.createContext(s.m,!0,!0,{});case 4:s.j=new s.i.SolutionWasm,s.ga=!1,Re.h=0}})}function ql(s){var c,d,x,w,L,R,N,G;return Y(function(re){if(re.h==1){if(s.h.graph&&s.h.graph.url&&s.fa===s.h.graph.url)return re.return();if(s.u=!0,!s.h.graph||!s.h.graph.url){re.h=2;return}return s.fa=s.h.graph.url,C(re,lr(s,s.h.graph.url),3)}for(re.h!=2&&(c=re.i,s.j.loadGraph(c)),d=a(Object.keys(s.D)),x=d.next();!x.done;x=d.next())w=x.value,s.j.overrideFile(w,s.D[w]);if(s.D={},s.h.listeners)for(L=a(s.h.listeners),R=L.next();!R.done;R=L.next())N=R.value,Zl(s,N);G=s.l,s.l={},s.setOptions(G),re.h=0})}i.reset=function(){var s=this;return Y(function(c){s.j&&(s.j.reset(),s.s={},s.v={}),c.h=0})},i.setOptions=function(s,c){var d=this;if(c=c||this.h.options){for(var x=[],w=[],L={},R=a(Object.keys(s)),N=R.next();!N.done;L={X:L.X,Y:L.Y},N=R.next())if(N=N.value,!(N in this.l&&this.l[N]===s[N])){this.l[N]=s[N];var G=c[N];G!==void 0&&(G.onChange&&(L.X=G.onChange,L.Y=s[N],x.push(function(re){return function(){var de;return Y(function(Be){if(Be.h==1)return C(Be,re.X(re.Y),2);de=Be.i,de===!0&&(d.u=!0),Be.h=0})}}(L))),G.graphOptionXref&&(N=Object.assign({},{calculatorName:"",calculatorIndex:0},G.graphOptionXref,{valueNumber:G.type===1?s[N]:0,valueBoolean:G.type===0?s[N]:!1,valueString:G.type===2?s[N]:""}),w.push(N)))}(x.length!==0||w.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(w),this.F=(this.F===void 0?[]:this.F).concat(x))}};function jl(s){var c,d,x,w,L,R,N;return Y(function(G){switch(G.h){case 1:if(!s.u)return G.return();if(!s.F){G.h=2;break}c=a(s.F),d=c.next();case 3:if(d.done){G.h=5;break}return x=d.value,C(G,x(),4);case 4:d=c.next(),G.h=3;break;case 5:s.F=void 0;case 2:if(s.H){for(w=new s.i.GraphOptionChangeRequestList,L=a(s.H),R=L.next();!R.done;R=L.next())N=R.value,w.push_back(N);s.j.changeOptions(w),w.delete(),s.H=void 0}s.u=!1,G.h=0}})}i.initialize=function(){var s=this;return Y(function(c){return c.h==1?C(c,Xl(s),2):c.h!=3?C(c,ql(s),3):C(c,jl(s),0)})};function lr(s,c){var d,x;return Y(function(w){return c in s.L?w.return(s.L[c]):(d=s.locateFile(c,""),x=fetch(d).then(function(L){return L.arrayBuffer()}),s.L[c]=x,w.return(x))})}i.overrideFile=function(s,c){this.j?this.j.overrideFile(s,c):this.D[s]=c},i.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},i.send=function(s,c){var d=this,x,w,L,R,N,G,re,de,Be;return Y(function(Re){switch(Re.h){case 1:return d.h.inputs?(x=1e3*(c??performance.now()),C(Re,d.I,2)):Re.return();case 2:return C(Re,d.initialize(),3);case 3:for(w=new d.i.PacketDataList,L=a(Object.keys(s)),R=L.next();!R.done;R=L.next())if(N=R.value,G=d.h.inputs[N]){e:{var xe=s[N];switch(G.type){case"video":var ze=d.s[G.stream];if(ze||(ze=new $r(d.i,d.K),d.s[G.stream]=ze),ze.m===0&&(ze.m=ze.i.createTexture()),typeof HTMLVideoElement<"u"&&xe instanceof HTMLVideoElement)var et=xe.videoWidth,vt=xe.videoHeight;else typeof HTMLImageElement<"u"&&xe instanceof HTMLImageElement?(et=xe.naturalWidth,vt=xe.naturalHeight):(et=xe.width,vt=xe.height);vt={glName:ze.m,width:et,height:vt},et=ze.h,et.canvas.width=vt.width,et.canvas.height=vt.height,et.activeTexture(et.TEXTURE0),ze.i.bindTexture2d(ze.m),et.texImage2D(et.TEXTURE_2D,0,et.RGBA,et.RGBA,et.UNSIGNED_BYTE,xe),ze.i.bindTexture2d(0),ze=vt;break e;case"detections":for(ze=d.s[G.stream],ze||(ze=new Gl(d.i),d.s[G.stream]=ze),ze.data||(ze.data=new ze.h.DetectionListData),ze.data.reset(xe.length),vt=0;vt<xe.length;++vt){et=xe[vt];var _t=ze.data,Dt=_t.setBoundingBox,en=vt,Wt=et.la,ot=new ar;if(st(ot,1,Wt.ra),st(ot,2,Wt.sa),st(ot,3,Wt.height),st(ot,4,Wt.width),st(ot,5,Wt.rotation),Se(ot,6,Wt.pa),Wt=ot.l(),Dt.call(_t,en,Wt),et.ea)for(_t=0;_t<et.ea.length;++_t){ot=et.ea[_t],Dt=ze.data,en=Dt.addNormalizedLandmark,Wt=vt,ot=Object.assign({},ot,{visibility:ot.visibility?ot.visibility:0});var It=new fi;st(It,1,ot.x),st(It,2,ot.y),st(It,3,ot.z),ot.visibility&&st(It,4,ot.visibility),ot=It.l(),en.call(Dt,Wt,ot)}if(et.ba)for(_t=0;_t<et.ba.length;++_t)Dt=ze.data,en=Dt.addClassification,Wt=vt,ot=et.ba[_t],It=new hi,st(It,2,ot.score),ot.index&&Se(It,1,ot.index),ot.label&&Se(It,3,ot.label),ot.displayName&&Se(It,4,ot.displayName),ot=It.l(),en.call(Dt,Wt,ot)}ze=ze.data;break e;default:ze={}}}switch(re=ze,de=G.stream,G.type){case"video":w.pushTexture2d(Object.assign({},re,{stream:de,timestamp:x}));break;case"detections":Be=re,Be.stream=de,Be.timestamp=x,w.pushDetectionList(Be);break;default:throw Error("Unknown input config type: '"+G.type+"'")}}return d.j.send(w),C(Re,d.I,4);case 4:w.delete(),Re.h=0}})};function Yl(s,c,d){var x,w,L,R,N,G,re,de,Be,Re,xe,ze,et,vt;return Y(function(_t){switch(_t.h){case 1:if(!d)return _t.return(c);for(x={},w=0,L=a(Object.keys(d)),R=L.next();!R.done;R=L.next())N=R.value,G=d[N],typeof G!="string"&&G.type==="texture"&&c[G.stream]!==void 0&&++w;1<w&&(s.M=!1),re=a(Object.keys(d)),R=re.next();case 2:if(R.done){_t.h=4;break}if(de=R.value,Be=d[de],typeof Be=="string")return et=x,vt=de,C(_t,Kl(s,de,c[Be]),14);if(Re=c[Be.stream],Be.type==="detection_list"){if(Re){for(var Dt=Re.getRectList(),en=Re.getLandmarksList(),Wt=Re.getClassificationsList(),ot=[],It=0;It<Dt.size();++It){var Cn=Bl(Dt.get(It)),$l=At(Cn,1),Jl=At(Cn,2),Ql=At(Cn,3),ec=At(Cn,4),tc=At(Cn,5,0),cr=void 0;cr=cr===void 0?0:cr,Cn={la:{ra:$l,sa:Jl,height:Ql,width:ec,rotation:tc,pa:Et(pe(Cn,6),cr)},ea:He(ao(en.get(It)),fi,1).map(ho),ba:uo(ro(Wt.get(It)))},ot.push(Cn)}Dt=ot}else Dt=[];x[de]=Dt,_t.h=7;break}if(Be.type==="proto_list"){if(Re){for(Dt=Array(Re.size()),en=0;en<Re.size();en++)Dt[en]=Re.get(en);Re.delete()}else Dt=[];x[de]=Dt,_t.h=7;break}if(Re===void 0){_t.h=3;break}if(Be.type==="float_list"){x[de]=Re,_t.h=7;break}if(Be.type==="proto"){x[de]=Re,_t.h=7;break}if(Be.type!=="texture")throw Error("Unknown output config type: '"+Be.type+"'");return xe=s.v[de],xe||(xe=new $r(s.i,s.K),s.v[de]=xe),C(_t,po(xe,Re,s.M),13);case 13:ze=_t.i,x[de]=ze;case 7:Be.transform&&x[de]&&(x[de]=Be.transform(x[de])),_t.h=3;break;case 14:et[vt]=_t.i;case 3:R=re.next(),_t.h=2;break;case 4:return _t.return(x)}})}function Kl(s,c,d){var x;return Y(function(w){return typeof d=="number"||d instanceof Uint8Array||d instanceof s.i.Uint8BlobList?w.return(d):d instanceof s.i.Texture2dDataOut?(x=s.v[c],x||(x=new $r(s.i,s.K),s.v[c]=x),w.return(po(x,d,s.M))):w.return(void 0)})}function Zl(s,c){for(var d=c.name||"$",x=[].concat(u(c.wants)),w=new s.i.StringList,L=a(c.wants),R=L.next();!R.done;R=L.next())w.push_back(R.value);L=s.i.PacketListener.implement({onResults:function(N){for(var G={},re=0;re<c.wants.length;++re)G[x[re]]=N.get(re);var de=s.listeners[d];de&&(s.I=Yl(s,G,c.outs).then(function(Be){Be=de(Be);for(var Re=0;Re<c.wants.length;++Re){var xe=G[x[Re]];typeof xe=="object"&&xe.hasOwnProperty&&xe.hasOwnProperty("delete")&&xe.delete()}Be&&(s.I=Be)}))}}),s.j.attachMultiListener(w,L),w.delete()}i.onResults=function(s,c){this.listeners[c||"$"]=s},q("Solution",Jr),q("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function go(s){return s===void 0&&(s=0),s===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function _o(s){var c=this;s=s||{},this.h=new Jr({locateFile:s.locateFile,files:function(d){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:go(d.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:fo},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:fo},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(d){return d.map(function(x){return uo(ro(x))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(d){var x,w,L;return Y(function(R){return R.h==1?(x=go(d),w="third_party/mediapipe/modules/hand_landmark/"+x,C(R,lr(c.h,x),2)):(L=R.i,c.h.overrideFile(w,L),R.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}i=_o.prototype,i.close=function(){return this.h.close(),Promise.resolve()},i.onResults=function(s){this.h.onResults(s)},i.initialize=function(){var s=this;return Y(function(c){return C(c,s.h.initialize(),0)})},i.reset=function(){this.h.reset()},i.send=function(s){var c=this;return Y(function(d){return C(d,c.h.send(s),0)})},i.setOptions=function(s){this.h.setOptions(s)},q("Hands",_o),q("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),q("VERSION","0.4.1675469240")}).call(Ui);var Va={};(function(){function i(v){var S=0;return function(){return S<v.length?{done:!1,value:v[S++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(v,S,m){return v==Array.prototype||v==Object.prototype||(v[S]=m.value),v};function t(v){v=[typeof globalThis=="object"&&globalThis,v,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ui=="object"&&Ui];for(var S=0;S<v.length;++S){var m=v[S];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var n=t(this);function r(v,S){if(S)e:{var m=n;v=v.split(".");for(var f=0;f<v.length-1;f++){var P=v[f];if(!(P in m))break e;m=m[P]}v=v[v.length-1],f=m[v],S=S(f),S!=f&&S!=null&&e(m,v,{configurable:!0,writable:!0,value:S})}}function o(v){var S=typeof Symbol<"u"&&Symbol.iterator&&v[Symbol.iterator];return S?S.call(v):{next:i(v)}}var l=typeof Object.assign=="function"?Object.assign:function(v,S){for(var m=1;m<arguments.length;m++){var f=arguments[m];if(f)for(var P in f)Object.prototype.hasOwnProperty.call(f,P)&&(v[P]=f[P])}return v};r("Object.assign",function(v){return v||l}),r("Array.prototype.fill",function(v){return v||function(S,m,f){var P=this.length||0;for(0>m&&(m=Math.max(0,P+m)),(f==null||f>P)&&(f=P),f=Number(f),0>f&&(f=Math.max(0,P+f)),m=Number(m||0);m<f;m++)this[m]=S;return this}});function a(v){return v||Array.prototype.fill}r("Int8Array.prototype.fill",a),r("Uint8Array.prototype.fill",a),r("Uint8ClampedArray.prototype.fill",a),r("Int16Array.prototype.fill",a),r("Uint16Array.prototype.fill",a),r("Int32Array.prototype.fill",a),r("Uint32Array.prototype.fill",a),r("Float32Array.prototype.fill",a),r("Float64Array.prototype.fill",a);var u=this||self;function h(v,S){v=v.split(".");var m=u;v[0]in m||typeof m.execScript>"u"||m.execScript("var "+v[0]);for(var f;v.length&&(f=v.shift());)v.length||S===void 0?m[f]&&m[f]!==Object.prototype[f]?m=m[f]:m=m[f]={}:m[f]=S}var p={color:"white",lineWidth:4,radius:6,visibilityMin:.5};function g(v){return v=v||{},Object.assign({},p,{fillColor:v.color},v)}function _(v,S){return v instanceof Function?v(S):v}function M(v,S,m){return Math.max(Math.min(S,m),Math.min(Math.max(S,m),v))}h("clamp",M),h("drawLandmarks",function(v,S,m){if(S){m=g(m),v.save();var f=v.canvas,P=0;S=o(S);for(var T=S.next();!T.done;T=S.next())if(T=T.value,T!==void 0&&(T.visibility===void 0||T.visibility>m.visibilityMin)){v.fillStyle=_(m.fillColor,{index:P,from:T}),v.strokeStyle=_(m.color,{index:P,from:T}),v.lineWidth=_(m.lineWidth,{index:P,from:T});var C=new Path2D;C.arc(T.x*f.width,T.y*f.height,_(m.radius,{index:P,from:T}),0,2*Math.PI),v.fill(C),v.stroke(C),++P}v.restore()}}),h("drawConnectors",function(v,S,m,f){if(S&&m){f=g(f),v.save();var P=v.canvas,T=0;m=o(m);for(var C=m.next();!C.done;C=m.next()){var z=C.value;v.beginPath(),C=S[z[0]],z=S[z[1]],C&&z&&(C.visibility===void 0||C.visibility>f.visibilityMin)&&(z.visibility===void 0||z.visibility>f.visibilityMin)&&(v.strokeStyle=_(f.color,{index:T,from:C,to:z}),v.lineWidth=_(f.lineWidth,{index:T,from:C,to:z}),v.moveTo(C.x*P.width,C.y*P.height),v.lineTo(z.x*P.width,z.y*P.height)),++T,v.stroke()}v.restore()}}),h("drawRectangle",function(v,S,m){m=g(m),v.save();var f=v.canvas;v.beginPath(),v.lineWidth=_(m.lineWidth,{}),v.strokeStyle=_(m.color,{}),v.fillStyle=_(m.fillColor,{}),v.translate(S.xCenter*f.width,S.yCenter*f.height),v.rotate(S.rotation*Math.PI/180),v.rect(-S.width/2*f.width,-S.height/2*f.height,S.width*f.width,S.height*f.height),v.translate(-S.xCenter*f.width,-S.yCenter*f.height),v.stroke(),v.fill(),v.restore()}),h("lerp",function(v,S,m,f,P){return M(f*(1-(v-S)/(m-S))+P*(1-(m-v)/(m-S)),f,P)})}).call(Ui);class xm{constructor(){this.callbacks={onShapeChange:()=>{},onRotate:(e,t)=>{}},this.videoElement=document.getElementById("webcam-video"),this.videoElement||(this.videoElement=document.createElement("video"),this.videoElement.id="webcam-video",this.videoElement.style.display="block",this.videoElement.autoplay=!0,this.videoElement.playsInline=!0,document.body.appendChild(this.videoElement)),this.canvasElement=document.getElementById("output_canvas"),this.canvasElement||(this.canvasElement=document.createElement("canvas"),this.canvasElement.id="output_canvas",this.canvasElement.style.position="absolute",this.canvasElement.style.top="0",this.canvasElement.style.left="0",this.canvasElement.style.width="100%",this.canvasElement.style.height="100%",this.canvasElement.style.zIndex="1",this.canvasElement.style.pointerEvents="none",document.body.appendChild(this.canvasElement)),this.canvasCtx=this.canvasElement.getContext("2d"),this.hands=new Ha.Hands({locateFile:e=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${e}`}),this.hands.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),this.hands.onResults(e=>this.onResults(e)),this.lastGesture="none",this.gestureStartTime=0,this.gestureDurationThreshold=300,this.isRunning=!1}async start(){try{console.log("Requesting camera access...");const e=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},facingMode:"user"}});this.videoElement.srcObject=e,await new Promise(t=>{this.videoElement.onloadedmetadata=()=>{this.videoElement.play(),this.canvasElement.width=this.videoElement.videoWidth,this.canvasElement.height=this.videoElement.videoHeight,t()}}),this.isRunning=!0,this.detectLoop()}catch(e){throw console.error("Error accessing camera:",e),alert("Camera access failed! Please refresh."),e}}async detectLoop(){this.isRunning&&(this.videoElement.readyState>=2&&await this.hands.send({image:this.videoElement}),requestAnimationFrame(()=>this.detectLoop()))}on(e,t){this.callbacks[e]&&(this.callbacks[e]=t)}onResults(e){if(this.canvasCtx.save(),this.canvasCtx.clearRect(0,0,this.canvasElement.width,this.canvasElement.height),this.canvasCtx.drawImage(e.image,0,0,this.canvasElement.width,this.canvasElement.height),e.multiHandLandmarks&&e.multiHandLandmarks.length>0)for(const t of e.multiHandLandmarks)Va.drawConnectors(this.canvasCtx,t,Ha.HAND_CONNECTIONS,{color:"#00FF00",lineWidth:2}),Va.drawLandmarks(this.canvasCtx,t,{color:"#FF0000",lineWidth:1}),this.detectGestures(t);this.canvasCtx.restore()}detectGestures(e){const t=this.isThumbOpen(e),n=this.isFingerOpen(e,8),r=this.isFingerOpen(e,12),o=this.isFingerOpen(e,16),l=this.isFingerOpen(e,20),a=[t,n,r,o,l].filter(Boolean).length,u=Date.now();if(this.canvasCtx.font="30px Arial",this.canvasCtx.fillStyle="white",a===5)this.canvasCtx.fillText("GESTURE: OPEN HAND (Morph)",50,50),this.lastGesture!=="open_hand"?(this.gestureStartTime=u,this.lastGesture="open_hand"):u-this.gestureStartTime>this.gestureDurationThreshold&&(this.callbacks.onShapeChange(),this.gestureStartTime=u+500);else if(t&&n){this.canvasCtx.fillText("GESTURE: L-SHAPE (Rotate)",50,50),this.lastGesture="rotation";const h=e[4],p=e[8],g=p.x-h.x,_=p.y-h.y;this.canvasCtx.beginPath(),this.canvasCtx.moveTo(h.x*this.canvasElement.width,h.y*this.canvasElement.height),this.canvasCtx.lineTo(p.x*this.canvasElement.width,p.y*this.canvasElement.height),this.canvasCtx.strokeStyle="yellow",this.canvasCtx.lineWidth=4,this.canvasCtx.stroke();const M=Math.atan2(-_,g),v=Math.sqrt(g*g+_*_);this.callbacks.onRotate(M,v)}else this.canvasCtx.fillText("GESTURE: NONE",50,50),this.lastGesture="none"}isFingerOpen(e,t){const n=e[0],r=e[t],o=e[t-2];return this.distance(n,r)>this.distance(n,o)}isThumbOpen(e){const t=e[0],n=e[4],r=e[3];return this.distance(t,n)>this.distance(t,r)}distance(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}}const Mm=async()=>{const i=document.createElement("canvas");document.querySelector("#app").appendChild(i);const e=new _m(i),t=new vm;e.add(t);const n=document.getElementById("shape-name"),r=p=>{n&&(n.innerText=p)},o=new xm;let l=0;const a=1e3;o.on("onShapeChange",()=>{const p=Date.now();if(p-l>a){const g=t.nextShape();r(g),l=p}}),o.on("onRotate",(p,g)=>{const S=.5+Math.max(0,Math.min(1,(g-.05)/.25))*1.5;t.setInteractionState(p,S)});const u=document.getElementById("start-btn"),h=document.getElementById("start-overlay");u.addEventListener("click",async()=>{u.innerText="Accessing Camera...",u.disabled=!0;try{await o.start(),h.style.opacity="0",setTimeout(()=>{h.style.display="none"},500)}catch(p){u.innerText="Camera Failed",u.style.background="red",u.disabled=!1,alert(`Camera Error: ${p.message}
Please allow camera permissions and refresh.`),console.error(p)}}),e.animate()};Mm();
