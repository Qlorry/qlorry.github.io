import{a as w}from"./generator-b8d5f5e7.js";import{G as x,O as f,b as _,W as g,V as L,C as y}from"./three.module-5f6cbc95.js";import{u as E,c as k,d as M}from"./shader-renderer-d77d85b0.js";import{d as C,_ as b,o as v,c as z,a as S,b as $,u as h}from"./index-10f08df8.js";import{u as P}from"./options-b1605e21.js";let i=[],u=[],p=new x,a=new f,d=new _,c=new g,l=new Array,m;const T=C({data(){return{pointer:new L(-100,-100),inTransition:!1,transitionIteration:0,transitionLength:100,stopAnimate:!1}},props:{linesCount:Number,pointsCount:Number,lineColor:String,backgroundColor:String},methods:{getData(){return!this.linesCount||!this.pointsCount?[[]]:w(this.linesCount,this.pointsCount)},onWindowResize(){let t=this.$refs.canvas.parentElement;t&&(a.updateProjectionMatrix(),c.setSize(t.clientWidth,t.clientHeight-6))},animateBuzz(){if(!this.linesCount||!this.pointsCount)return;const t=Math.round(this.pointer.x),s=Math.round(this.pointer.y);if(this.inTransition){this.transitionIteration++;for(let e=0;e<this.linesCount;e++)for(let n=0;n<this.pointsCount;n++){if(Math.sqrt(Math.pow(t-n,2)+Math.pow(s-e,2))>7){i[e][n]+=l[e][n];continue}const r=i[e][n];i[e][n]=r<40?r+40/20:40,l[e][n]=(u[e][n]-i[e][n])/this.transitionLength}}else{let e=i;u=this.getData();for(let n=0;n<this.linesCount;n++)for(let o=0;o<this.pointsCount;o++){let r=u[n][o]-e[n][o];l[n][o]=r/this.transitionLength}this.transitionIteration=0,this.inTransition=!0}},animateWave(){if(!(!this.linesCount||!this.pointsCount))for(let t=0;t<this.linesCount;t++)i[t].push(...i[t].splice(0,1))},animate(){this.stopAnimate||(requestAnimationFrame(this.animate),this.transitionIteration>this.transitionLength&&(this.inTransition=!1),this.animateBuzz(),this.render())},render(){const t=performance.now();E(m,i);const s=performance.now();c.render(d,a);const e=performance.now();console.log(`updateLines execution time: ${s-t} ms`),console.log(`renderer.render execution time: ${e-s} ms`)},updateMousePos(t){var e=this.$refs.canvas.getBoundingClientRect();let n,o;if(t instanceof TouchEvent){t.preventDefault();var r=t.touches[0]||t.changedTouches[0];n=r.pageX,o=r.pageY}else n=t.clientX,o=t.clientY;this.pointer.x=n-e.left,this.pointer.y=o-e.top,this.pointer.x=this.pointer.x<0?0:this.pointer.x,this.pointer.y=this.pointer.y<0?0:this.pointer.y,this.pointer.x=this.pointer.x/e.width*a.right,this.pointer.y=(e.height-this.pointer.y)/e.height*a.top},removeSelection(t){this.pointer.x=-100,this.pointer.y=-100}},mounted(){i=this.getData(),l=JSON.parse(JSON.stringify(i)),a=new f(0,i[0].length-1,i.length-1,0),a.position.z=2e3;const t=this.$refs.canvas;c=new g({antialias:!0,canvas:t}),c.setPixelRatio(window.devicePixelRatio),c.useLegacyLights=!1,d.add(p),d.background=new y("#ff0000"),window.addEventListener("resize",this.onWindowResize),t.addEventListener("mousemove",this.updateMousePos),t.addEventListener("touchmove",this.updateMousePos),t.addEventListener("touchstart",this.updateMousePos),t.addEventListener("touchcancel",this.updateMousePos),t.addEventListener("touchend",this.removeSelection),t.addEventListener("click",this.removeSelection),m=k(p,i,this.lineColor??"",this.backgroundColor??""),this.onWindowResize(),this.animate()},unmounted(){this.stopAnimate=!0,M(p)}}),D={class:"flex-grow-1 p-0 m-0"},O={ref:"canvas"};function B(t,s,e,n,o,r){return v(),z("div",D,[S("canvas",O,null,512)])}const N=b(T,[["render",B]]),I=C({__name:"TrackerView",setup(t){const s=P();return(e,n)=>(v(),$(N,{"lines-count":h(s).numOfLines,"points-count":h(s).numOfPoints,"background-color":h(s).backgroundColor,"line-color":h(s).lineColor},null,8,["lines-count","points-count","background-color","line-color"]))}});export{I as default};
