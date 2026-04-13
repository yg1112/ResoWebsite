import{j as t,r as g}from"./index-DefXtY1D.js";const x="#EDD9B3",h="rgba(255,255,255,0.95)",u="rgba(255,255,255,0.72)",m=`
@keyframes resoCellRise {
  0%, 100% { transform: scaleY(0.35); opacity: 0.30; }
  50% { transform: scaleY(1); opacity: 0.95; }
}
@keyframes resoCellMid {
  0%, 100% { transform: scaleY(0.25); opacity: 0.22; }
  35% { transform: scaleY(0.78); opacity: 0.78; }
  65% { transform: scaleY(1); opacity: 0.95; }
}
@keyframes resoCellLow {
  0%, 100% { transform: scaleY(0.20); opacity: 0.20; }
  40% { transform: scaleY(0.62); opacity: 0.62; }
}
@keyframes resoIconPulse {
  0%, 100% { filter: drop-shadow(0 0 4px rgba(237,217,179,0.4)); }
  50% { filter: drop-shadow(0 0 12px rgba(237,217,179,0.85)); }
}
@keyframes resoCapsuleFlip {
  0%   { transform: translateY(8px); opacity: 0; }
  18%  { transform: translateY(0); opacity: 1; }
  82%  { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-8px); opacity: 0; }
}
`,y=({size:e=18})=>t.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[t.jsx("rect",{x:"7",y:"2.6",width:"6",height:"10",rx:"3",fill:x}),t.jsx("path",{d:"M4 9.5a6 6 0 0 0 12 0M10 15v3",stroke:x,strokeWidth:"1.6",strokeLinecap:"round",fill:"none"})]}),b=({scale:e=1})=>{const r=5*e,s=18*e,a=3*e,l=2*e,n=["resoCellLow","resoCellMid","resoCellRise","resoCellMid","resoCellLow"];return t.jsx("div",{className:"flex items-end",style:{gap:a,height:s},children:Array.from({length:10}).map((f,o)=>{const d=n[o%n.length];return t.jsx("div",{style:{width:r,height:s,borderRadius:l,background:"rgba(245,245,247,0.95)",opacity:.2,transformOrigin:"bottom",animation:`${d} ${.7+o%3*.15}s ease-in-out infinite`,animationDelay:`${o*.07}s`,willChange:"transform, opacity"}},o)})})},c=({title:e,subtitle:i,scale:r=1,animKey:s})=>t.jsxs("div",{style:{animation:"resoCapsuleFlip 2.2s ease-in-out forwards",willChange:"transform, opacity"},children:[t.jsx("div",{style:{fontSize:14*r,fontWeight:700,color:h,letterSpacing:-.15,lineHeight:1.15,whiteSpace:"nowrap"},children:e}),i&&t.jsx("div",{style:{fontSize:11*r,fontWeight:500,color:u,letterSpacing:.05,lineHeight:1.2,marginTop:1*r,whiteSpace:"nowrap"},children:i})]},s),p=({scale:e=1,state:i="recording"})=>{const r=18*e,s=12*e,a=12*e,l=230*e;let n;return i==="recording"?n=t.jsx(b,{scale:e}):i==="transcribing"?n=t.jsx(c,{animKey:"transcribing",title:"Transcribing",subtitle:"Step 1/6 · Running",scale:e}):i==="processing"?n=t.jsx(c,{animKey:"processing",title:"Model Processing",subtitle:"Applying workflow",scale:e}):i==="cleaning"?n=t.jsx(c,{animKey:"cleaning",title:"Cleaning",subtitle:"Step 4/6 · Running",scale:e}):i==="inserted"&&(n=t.jsx(c,{animKey:"inserted",title:"Inserted",subtitle:"done 5 · fail 1",scale:e})),t.jsxs("div",{style:{position:"relative",display:"inline-flex",alignItems:"center",gap:a,padding:`${s}px ${r+4*e}px ${s}px ${r}px`,minWidth:l,borderRadius:999,background:"linear-gradient(180deg, #1a1a1d 0%, #0a0a0c 100%)",boxShadow:`
          inset 0 1px 0 rgba(255,255,255,0.08),
          inset 0 -1px 0 rgba(0,0,0,0.4),
          0 8px 28px -8px rgba(0,0,0,0.85),
          0 0 0 1px rgba(255,255,255,0.06)
        `},children:[t.jsx("style",{children:m}),t.jsx("div",{className:"flex items-center justify-center flex-shrink-0",style:{animation:"resoIconPulse 2s ease-in-out infinite"},children:t.jsx(y,{size:18*e})}),t.jsx("div",{style:{flex:1,minWidth:0,minHeight:32*e,display:"flex",flexDirection:"column",justifyContent:"center"},children:n})]})},C=p,v=p,j=({width:e=720,height:i=380,scale:r=1.5})=>{const s=["recording","transcribing","processing","cleaning","inserted"],[a,l]=g.useState(0);g.useEffect(()=>{if(typeof window>"u"||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o=window.setInterval(()=>l(d=>(d+1)%s.length),2200);return()=>window.clearInterval(o)},[]);const n=s[a];return t.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:e,aspectRatio:`${e} / ${i}`,borderRadius:18,overflow:"hidden",background:"radial-gradient(circle at 50% 100%, #1a1430 0%, #07060d 55%, #020205 100%)"},children:[t.jsx("div",{"aria-hidden":!0,style:{position:"absolute",inset:0,backgroundImage:`radial-gradient(rgba(255,255,255,0.4) 0.5px, transparent 0.7px),
                            radial-gradient(rgba(255,255,255,0.3) 0.5px, transparent 0.7px)`,backgroundSize:"70px 90px, 110px 130px",backgroundPosition:"0 0, 35px 45px",opacity:.45}}),t.jsx("div",{"aria-hidden":!0,style:{position:"absolute",left:"50%",bottom:"12%",transform:"translateX(-50%)",width:"85%",height:"60%",background:"radial-gradient(ellipse, rgba(120,80,255,0.55) 0%, transparent 60%)",filter:"blur(60px)"}}),t.jsxs("div",{style:{position:"absolute",top:22,left:0,right:0,textAlign:"center",fontSize:11,color:"rgba(255,255,255,0.32)",letterSpacing:.4},children:["Hold ",t.jsx("span",{style:{color:"rgba(255,255,255,0.7)",fontWeight:600},children:"Option"})," · the capsule listens"]}),t.jsx("div",{style:{position:"absolute",left:"50%",bottom:"18%",transform:"translateX(-50%)",display:"flex",justifyContent:"center"},children:t.jsx(p,{scale:r,state:n})})]})},S=e=>t.jsx(j,{...e});export{C as Capsule,j as CapsuleShowcase,p as FloatingCapsule,v as NotchBar,S as default};
