import{P as K,b as Q,W as J,e as ne,R as oe,V as ie,A as se,f as ae,g as re,H as ce,D as le,C as q,M as E,h as H,i as de,d as Y,j as ue,k as fe,l as pe,m as he,n as we,I as me,o as ye}from"./three.module-20b7a926.js";import{d as be}from"./shader-renderer-bd64fa5e.js";import{d as Z,r as ge,_ as Me,o as ee,c as ve,a as V,w as Se,v as xe,F as Re,b as ze,u as F}from"./index-ccd596f6.js";import{u as _e}from"./options-aeb737fb.js";var G=function(){var o=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(c){c.preventDefault(),r(++o%e.children.length)},!1);function t(c){return e.appendChild(c.dom),c}function r(c){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===c?"block":"none";o=c}var l=(performance||Date).now(),d=l,n=0,m=t(new G.Panel("FPS","#0ff","#002")),y=t(new G.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=t(new G.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:e,addPanel:t,showPanel:r,begin:function(){l=(performance||Date).now()},end:function(){n++;var c=(performance||Date).now();if(y.update(c-l,200),c>=d+1e3&&(m.update(n*1e3/(c-d),100),d=c,n=0,u)){var f=performance.memory;u.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return c},update:function(){l=this.end()},domElement:e,setMode:r}};G.Panel=function(o,e,t){var r=1/0,l=0,d=Math.round,n=d(window.devicePixelRatio||1),m=80*n,y=48*n,u=3*n,c=2*n,f=3*n,b=15*n,g=74*n,S=30*n,z=document.createElement("canvas");z.width=m,z.height=y,z.style.cssText="width:80px;height:48px";var p=z.getContext("2d");return p.font="bold "+9*n+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=t,p.fillRect(0,0,m,y),p.fillStyle=e,p.fillText(o,u,c),p.fillRect(f,b,g,S),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(f,b,g,S),{dom:z,update:function(M,B){r=Math.min(r,M),l=Math.max(l,M),p.fillStyle=t,p.globalAlpha=1,p.fillRect(0,0,m,b),p.fillStyle=e,p.fillText(d(M)+" "+o+" ("+d(r)+"-"+d(l)+")",u,c),p.drawImage(z,f+n,b,g-n,S,f,b,g-n,S),p.fillRect(f+g-n,b,n,S),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(f+g-n,b,n,d((1-M/B)*S))}}};const Pe=G;let a;class Ae{constructor(e,t,r,l,d,n){this.body_=e,this.transform_=t,this.motionState_=r,this.shape_=l,this.inertia_=d,this.info_=n}setRestitution(e){var t;(t=this.body_)==null||t.setRestitution(e)}setFriction(e){var t;(t=this.body_)==null||t.setFriction(e)}setRollingFriction(e){var t;(t=this.body_)==null||t.setRollingFriction(e)}}class Ie extends Ae{constructor(e,t,r){const l=new a.btTransform;l.setIdentity(),l.setOrigin(new a.btVector3(t.x,t.y,t.z)),l.setRotation(new a.btQuaternion(0,0,0,1));const d=new a.btDefaultMotionState(l),n=new a.btSphereShape(r);n.setMargin(.05);const m=new a.btVector3(0,0,0);e>0&&n.calculateLocalInertia(e,m);const y=new a.btRigidBodyConstructionInfo(e,d,n,m),u=new a.btRigidBody(y);super(u,l,d,n,m,y)}}async function Le(){if(!("Ammo"in window)){console.error("AmmoPhysics: Couldn't find Ammo.js");return}typeof Ammo=="function"?a=await Ammo():a=Ammo;const o=60,e=new a.btDefaultCollisionConfiguration,t=new a.btCollisionDispatcher(e),r=new a.btDbvtBroadphase,l=new a.btSequentialImpulseConstraintSolver,d=new a.btDiscreteDynamicsWorld(t,r,l,e);d.setGravity(new a.btVector3(0,-9.8,0));const n=new a.btTransform;function m(i){const s=i.parameters;if(i.type==="BoxGeometry"){const w=s.width!==void 0?s.width/2:.5,v=s.height!==void 0?s.height/2:.5,h=s.depth!==void 0?s.depth/2:.5,x=new a.btBoxShape(new a.btVector3(w,v,h));return x.setMargin(.05),x}else if(i.type==="SphereGeometry"||i.type==="IcosahedronGeometry"){const w=s.radius!==void 0?s.radius:1,v=new a.btSphereShape(w);return v.setMargin(.05),v}return null}const y=[],u=new WeakMap,c=new WeakMap;function f(i,s,w=0){s!==null&&(i.isInstancedMesh?z(i,w,s):i.isMesh&&S(i,w,s))}function b(i,s,w=0){f(i,s.shape_,w)}function g(i,s=0){const w=m(i.geometry);f(i,w,s)}function S(i,s,w){const v=i.position,h=i.quaternion,x=new a.btTransform;x.setIdentity(),x.setOrigin(new a.btVector3(v.x,v.y,v.z)),x.setRotation(new a.btQuaternion(h.x,h.y,h.z,h.w));const W=new a.btDefaultMotionState(x),L=new a.btVector3(0,0,0);w.calculateLocalInertia(s,L);const _=new a.btRigidBodyConstructionInfo(s,W,w,L),P=new a.btRigidBody(_);d.addRigidBody(P),c.set(i,s),y.push(i),u.set(i,P)}function z(i,s,w){const v=i.instanceMatrix.array,h=[];for(let x=0;x<i.count;x++){const W=x*16,L=new a.btTransform;L.setFromOpenGLMatrix(v.slice(W,W+16));const _=new a.btDefaultMotionState(L),P=new a.btVector3(0,0,0);w.calculateLocalInertia(s,P);const X=new a.btRigidBodyConstructionInfo(s,_,w,P),O=new a.btRigidBody(X);d.addRigidBody(O),h.push(O)}s>0&&(y.push(i),u.set(i,h))}function p(i,s,w=0){if(i.isInstancedMesh){const h=u.get(i)[w];h.setAngularVelocity(new a.btVector3(0,0,0)),h.setLinearVelocity(new a.btVector3(0,0,0)),n.setIdentity(),n.setOrigin(new a.btVector3(s.x,s.y,s.z)),h.setWorldTransform(n)}else if(i.isMesh){const v=u.get(i);v.setAngularVelocity(new a.btVector3(0,0,0)),v.setLinearVelocity(new a.btVector3(0,0,0)),n.setIdentity(),n.setOrigin(new a.btVector3(s.x,s.y,s.z)),v.setWorldTransform(n)}}let M=0;function B(){const i=performance.now();if(M>0){const s=(i-M)/1e3;d.stepSimulation(s,10);for(let w=0,v=y.length;w<v;w++){const h=y[w],x=c.get(h);if(!(x!==void 0&&x===0)){if(h.isInstancedMesh){const W=h.instanceMatrix.array,L=u.get(h);for(let _=0;_<L.length;_++){L[_].getMotionState().getWorldTransform(n);const O=n.getOrigin(),te=n.getRotation();Te(O,te,W,_*16)}h.instanceMatrix.needsUpdate=!0,h.computeBoundingSphere()}else if(h.isMesh){u.get(h).getMotionState().getWorldTransform(n);const _=n.getOrigin(),P=n.getRotation();h.position.set(_.x(),_.y(),_.z()),h.quaternion.set(P.x(),P.y(),P.z(),P.w())}}}}M=i}return setInterval(B,1e3/o),{addMesh:g,addMeshAndBody:b,setMeshPosition:p}}function Te(o,e,t,r){const l=e.x(),d=e.y(),n=e.z(),m=e.w(),y=l+l,u=d+d,c=n+n,f=l*y,b=l*u,g=l*c,S=d*u,z=d*c,p=n*c,M=m*y,B=m*u,i=m*c;t[r+0]=1-(S+p),t[r+1]=b+i,t[r+2]=g-B,t[r+3]=0,t[r+4]=b-i,t[r+5]=1-(f+p),t[r+6]=z+M,t[r+7]=0,t[r+8]=g+B,t[r+9]=z-M,t[r+10]=1-(f+S),t[r+11]=0,t[r+12]=o.x(),t[r+13]=o.y(),t[r+14]=o.z(),t[r+15]=1}let $,U,j,A,C=new K,R=new Q,D=new J,N=new Pe,T,I,k;const Be=Z({data(){return{inTransition:!1,transitionIteration:0,transitionLength:100,stopAnimate:!1,elementsCount:300}},setup(){return{canvasRef:ge(null)}},props:{backgroundColor:String},methods:{playMusic(){k.play()},pauseMusic(){k.pause()},onWindowResize(){const o=this.$refs.canvasRef;let e=o.parentElement;e&&(o.width===e.clientWidth||o.height===e.clientHeight||(C.aspect=e.clientWidth/e.clientHeight,D.setSize(e.clientWidth,e.clientHeight),C.updateProjectionMatrix()))},animate(){this.stopAnimate||(this.onWindowResize(),requestAnimationFrame(this.animate),this.render(),N==null||N.update())},render(){D.render(R,C)},onPointerMove(o){o.preventDefault(),o.stopImmediatePropagation(),$.set(o.clientX/window.innerWidth*2-1,-(o.clientY/window.innerHeight)*2+1),U.setFromCamera($,C);const e=U.intersectObjects([j],!1);if(e.length>0){const t=e[0];T.setMeshPosition(A,new ne(t.point.x,A.position.y,t.point.z)),A.position.x=t.point.x,A.position.z=t.point.z,this.render()}}},async mounted(){T=await Le(),R=new Q,U=new oe,$=new ie;const o=this.$refs.canvasRef,e=o.parentElement,t=e?e.clientWidth:window.innerWidth,r=e?e.clientHeight:window.innerHeight;D=new J({antialias:!0,canvas:o}),D.setPixelRatio(window.devicePixelRatio),D.setSize(t,r),D.shadowMap.enabled=!0,C=new K(70,t/r,.1,1e3),C.position.set(4,5,0),C.lookAt(0,0,0);const l=new se;C.add(l),k=new ae(l),new re().load("sounds/Shigatsu wa Kimi no Uso UKR.mp3",function(M){k.setBuffer(M),k.setLoop(!0),k.setVolume(.5)});const n=new ce;R.add(n);const m=new le(16777215,3);m.position.set(5,5,5),m.castShadow=!0,m.shadow.camera.zoom=2,R.add(m),R.background=new q(6710886);const y=new E(new H(10,5,10),new de({color:4473924}));y.position.y=-2.5,y.receiveShadow=!0,R.add(y),T.addMesh(y),j=new E(new H(10,5,10),new Y({color:6710886})),j.position.y=-2.5,R.add(j);const u=new Y({color:16711680});u.opacity=0,u.transparent=!0;let c=new E(new H(1,105,4),u);c.position.y=0,c.position.z=0,c.position.x=2.5,R.add(c),T.addMesh(c);let f=new E(new H(4,105,1),u);f.position.y=0,f.position.z=-2.5,f.position.x=0,R.add(f),T.addMesh(f);let b=new E(new H(4,105,1),u);b.position.y=0,b.position.z=2.5,b.position.x=0,R.add(b),T.addMesh(b);let g=new E(new H(1,105,4),u);g.position.y=0,g.position.z=0,g.position.x=-2.5,R.add(g),T.addMesh(g),A=new E(new ue(1,10,10),u),A.position.y=-.5,A.position.z=0,A.position.x=0,R.add(A),T.addMesh(A),new fe;const S=new pe,z=new q;new he().load("/models/suzanne_buffergeometry.json",M=>{M.computeVertexNormals(),M.scale(.07,.07,.07);const B=new we;I=new me(M,B,500),I.instanceMatrix.setUsage(ye),R.add(I),I.castShadow=!0,I.receiveShadow=!0;for(let s=0;s<I.count;s++)S.setPosition(Math.random()-.5,Math.random()*2,Math.random()-.5),I.setMatrixAt(s,S),I.setColorAt(s,z.setHex(16777215*Math.random()));const i=new Ie(1,I.position,.075);T.addMeshAndBody(I,i,1)}),window.addEventListener("resize",this.onWindowResize),e==null||e.addEventListener("resize",this.onWindowResize),document.addEventListener("pointermove",this.onPointerMove),o.addEventListener("mousemove",this.onPointerMove,{passive:!1}),o.addEventListener("touchmove",this.onPointerMove,{passive:!1}),o.addEventListener("touchstart",this.onPointerMove,{passive:!1}),o.addEventListener("touchcancel",this.onPointerMove,{passive:!1}),o.addEventListener("touchend",this.onPointerMove,{passive:!1}),this.onWindowResize(),this.animate()},unmounted(){this.stopAnimate=!0,be(R)}}),Ce={class:"constainer d-flex justify-content-between py-1 px-4 m-0 w-100"},Ve={class:"mx-2"},We=V("label",{for:"customRange2",class:"form-label"},"Number Of Elements",-1),Ee={class:"flex-grow-1 p-0 m-0 mw-100 mh-100 overflow-hidden"},He={ref:"canvasRef"};function De(o,e,t,r,l,d){return ee(),ve(Re,null,[V("div",Ce,[V("button",{type:"button",onClick:e[0]||(e[0]=(...n)=>o.playMusic&&o.playMusic(...n)),class:"btn btn-primary mx-2"},"Play Music"),V("button",{type:"button",onClick:e[1]||(e[1]=(...n)=>o.pauseMusic&&o.pauseMusic(...n)),class:"btn btn-danger mx-2"},"Stop Music"),V("div",Ve,[We,Se(V("input",{"onUpdate:modelValue":e[2]||(e[2]=n=>o.elementsCount=n),type:"range",class:"form-range",min:"10",max:"1500",id:"customRange2"},null,512),[[xe,o.elementsCount]])])]),V("div",Ee,[V("canvas",He,null,512)])],64)}const ke=Me(Be,[["render",De]]),$e=Z({__name:"FlowerTrackerView",setup(o){const e=_e();return(t,r)=>(ee(),ze(ke,{"lines-count":F(e).numOfLines,"points-count":F(e).numOfPoints,"background-color":F(e).backgroundColor,"line-color":F(e).lineColor},null,8,["lines-count","points-count","background-color","line-color"]))}});export{$e as default};