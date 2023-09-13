import{c as z}from"./generator-b8d5f5e7.js";import{V as d,B as E,L as G,S as N,a as R,M as W,G as A,O as L,b as P,W as y,C as T,c as D,d as V}from"./three.module-5f6cbc95.js";import{d as k,_ as j,o as x,c as H,a as F,b as I,u as l}from"./index-10f08df8.js";import{u as J}from"./options-b1605e21.js";function Z(e,t,n,i){S(e),e.clear();let o=[],h=[];return t.forEach((b,u)=>{const r=[];b.forEach((O,$)=>{r.push(new d($,u+O))});const M=new E().setFromPoints(r),p=new G(M,n);p.position.setZ(t.length-u),e.add(p),o.push(p),r.push(new d(b.length,-1)),r.push(new d(0,-1));const v=new N(r),B=new R(v),m=new W(B,i);m.position.setZ(t.length-u),e.add(m),h.push(m)}),[o,h]}function S(e){e.children.forEach(t=>{S(t)}),e.geometry&&e.geometry.dispose&&e.geometry.dispose()}let f,g,s=[],w=new A,c=new L,C=new P,a=new y,_=new Array;const q=k({data(){return{maxHeight:30,inTransition:!1,transitionIteration:0,transitionLength:70,stopAnimate:!1}},props:{linesCount:Number,pointsCount:Number,lineColor:String,backgroundColor:String},methods:{getData(){return!this.linesCount||!this.pointsCount?[[]]:z(this.linesCount,this.pointsCount,this.maxHeight,15,10,3,Math.random()*3+6)},onWindowResize(){let e=this.$refs.canvas.parentElement;e&&(c.updateProjectionMatrix(),a.setSize(e.clientWidth,e.clientHeight-6))},animate(){if(!this.stopAnimate&&(requestAnimationFrame(this.animate),this.transitionIteration>this.transitionLength&&(this.inTransition=!1),!(!this.linesCount||!this.pointsCount))){if(this.inTransition){this.transitionIteration++;for(let e=0;e<this.linesCount;e++)for(let t=0;t<this.pointsCount;t++)s[e][t]+=_[e][t]}else{let e=s,t=this.getData();for(let n=0;n<this.linesCount;n++)for(let i=0;i<this.pointsCount;i++){let o=t[n][i]-e[n][i];_[n][i]=o/this.transitionLength}this.transitionIteration=0,this.inTransition=!0}this.render()}},render(){Z(w,s,f,g),a.render(C,c)}},mounted(){s=this.getData(),_=JSON.parse(JSON.stringify(s)),c=new L(0,s[0].length-1,s.length-1,0),c.position.z=1e3,a=new y({antialias:!0,canvas:this.$refs.canvas}),a.setPixelRatio(window.devicePixelRatio),a.useLegacyLights=!1,C.add(w),C.background=new T(this.backgroundColor),f=new D({color:this.lineColor}),g=new V({color:this.backgroundColor}),window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.animate()},unmounted(){this.stopAnimate=!0,f.dispose(),g.dispose(),S(w)}}),K={class:"flex-grow-1 p-0 m-0"},Q={ref:"canvas"};function U(e,t,n,i,o,h){return x(),H("div",K,[F("canvas",Q,null,512)])}const X=j(q,[["render",U]]),ie=k({__name:"SimpleView",setup(e){const t=J();return(n,i)=>(x(),I(X,{"lines-count":l(t).numOfLines,"points-count":l(t).numOfPoints,"background-color":l(t).backgroundColor,"line-color":l(t).lineColor},null,8,["lines-count","points-count","background-color","line-color"]))}});export{ie as default};
