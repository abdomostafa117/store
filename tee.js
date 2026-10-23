// أدوات رسم التيشيرت (مشتركة بين المتجر ولوحة الإدارة)
(function(){
var W=600,H=520,TEE=new Path2D("M30 6 14 12 3 30l13 6 6-8v48h56V28l6 8 13-6L86 12 70 6c-4 9-36 9-40 0z");
window.AM_FONTS=[{k:"cairo",n:"Cairo",f:"Cairo,Tahoma,sans-serif"},{k:"black",n:"Arial Black",f:'"Arial Black",Impact,sans-serif'},{k:"serif",n:"Georgia",f:"Georgia,serif"},{k:"mono",n:"Courier",f:'"Courier New",monospace'},{k:"script",n:"Script",f:'"Brush Script MT","Segoe Script",cursive'}];
window.AM_COLORS=[{n:"أسود",c:"#15161a"},{n:"أبيض",c:"#f2f0ea"},{n:"كحلي",c:"#1f2a52"},{n:"رمادي",c:"#8a8f9c"},{n:"زيتي",c:"#4a5236"},{n:"بيج",c:"#d8c9ad"},{n:"أحمر",c:"#9e2b2b"}];
function fo(k){for(var i=0;i<AM_FONTS.length;i++)if(AM_FONTS[i].k==k)return AM_FONTS[i].f;return AM_FONTS[0].f}
function fn(k){for(var i=0;i<AM_FONTS.length;i++)if(AM_FONTS[i].k==k)return AM_FONTS[i].n;return"Cairo"}
var mc=document.createElement("canvas").getContext("2d");
function lines(e){return String(e.tx||"").split("\n")}
window.AM_BOX=function(e){if(e.t=="img")return{w:e.w,h:e.h};mc.font="700 "+e.s+"px "+fo(e.f);var L=lines(e),w=0;L.forEach(function(l){w=Math.max(w,mc.measureText(l).width)});return{w:Math.max(w,24),h:L.length*e.s*1.2}};
function el(ctx,e){ctx.save();ctx.translate(e.x,e.y);ctx.rotate((e.r||0)*Math.PI/180);
 if(e.t=="img"){if(e.im&&e.im.complete&&e.im.naturalWidth)ctx.drawImage(e.im,-e.w/2,-e.h/2,e.w,e.h);else{ctx.setLineDash([6,5]);ctx.strokeStyle="#aaa";ctx.strokeRect(-e.w/2,-e.h/2,e.w,e.h);ctx.fillStyle="#aaa";ctx.font="14px Cairo,sans-serif";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText("صورة العميل",0,0)}}
 else{ctx.font="700 "+e.s+"px "+fo(e.f);ctx.fillStyle=e.c;ctx.textAlign="center";ctx.textBaseline="middle";var L=lines(e),lh=e.s*1.2,y0=-(L.length-1)*lh/2;L.forEach(function(l,i){ctx.fillText(l,0,y0+i*lh)})}
 ctx.restore()}
/* ---------- واقعي: تيشيرت بإضاءة وطيّات وخامة ---------- */
function cv(){var c=document.createElement("canvas");c.width=W;c.height=H;return c}
var BODY="M222,36 C196,44 150,62 98,84 L40,190 C44,200 62,212 118,236 C130,230 142,226 150,222 C146,300 142,400 138,490 C220,502 380,502 462,490 C458,400 454,300 450,222 C458,226 470,230 482,236 C538,212 556,200 560,190 L502,84 C450,62 404,44 378,36 ";
var NECK={front:"C366,98 234,98 222,36Z",back:"C366,58 234,58 222,36Z"},NPATH={front:"M378,36 C366,98 234,98 222,36",back:"M378,36 C366,58 234,58 222,36"};
function shape(s){return new Path2D(BODY+NECK[s])}
function rgb(c){var n=parseInt(c.slice(1),16);return[n>>16,n>>8&255,n&255]}
function mul(c,k){return"rgb("+rgb(c).map(function(v){return Math.max(0,Math.min(255,Math.round(v*k)))})+")"}
var texP;function TEX(){if(texP)return texP;var n=document.createElement("canvas");n.width=n.height=128;var c=n.getContext("2d"),im=c.createImageData(128,128),s=7;
 for(var i=0;i<16384;i++){s=(s*1664525+1013904223)>>>0;var x=i%128,y=(i/128)|0,v=128+(s/4294967296-.5)*80+(x%3==0?-14:0)+(y%3==0?-14:0);im.data[4*i]=im.data[4*i+1]=im.data[4*i+2]=v;im.data[4*i+3]=255}
 c.putImageData(im,0,0);texP=c.createPattern(n,"repeat");return texP}
function soft(c,p,col,blur,w){c.save();c.translate(-3000,0);c.shadowOffsetX=3000;c.shadowColor=col;c.shadowBlur=blur;c.strokeStyle="#000";c.lineWidth=w;c.lineCap="round";c.beginPath();c.moveTo(p[0],p[1]);c.quadraticCurveTo(p[2],p[3],p[4],p[5]);c.stroke();c.restore()}
function mir(p){return[600-p[0],p[1],600-p[2],p[3],600-p[4],p[5]]}
function sline(c,d,col,w,dash,dx,dy){c.save();c.translate(dx||0,dy||0);c.strokeStyle=col;c.lineWidth=w;if(dash)c.setLineDash(dash);c.stroke(new Path2D(d));c.restore()}
var cache={},order=[];
function base(color,side){var key=color+side;if(cache[key])return cache[key];
 var sh=shape(side),f=cv(),s=cv(),h=cv(),fc=f.getContext("2d"),sc=s.getContext("2d"),hc=h.getContext("2d");
 if(side=="front"){var g0=fc.createLinearGradient(0,36,0,98);g0.addColorStop(0,mul(color,.38));g0.addColorStop(1,mul(color,.62));fc.fillStyle=g0;fc.fill(new Path2D("M222,36 C234,46 366,46 378,36 C366,98 234,98 222,36Z"))}
 fc.fillStyle=color;fc.fill(sh);
 fc.save();fc.clip(sh);fc.globalCompositeOperation="overlay";fc.globalAlpha=.4;fc.fillStyle=TEX();fc.fillRect(0,0,W,H);fc.restore();
 fc.save();fc.clip(sh);
 sline(fc,"M98,84 C128,126 150,172 150,222","rgba(0,0,0,.28)",1.6);sline(fc,"M98,84 C128,126 150,172 150,222","rgba(255,255,255,.12)",1.2,null,2,0);
 sline(fc,"M502,84 C472,126 450,172 450,222","rgba(0,0,0,.28)",1.6);sline(fc,"M502,84 C472,126 450,172 450,222","rgba(255,255,255,.12)",1.2,null,-2,0);
 sline(fc,"M50,184 C64,196 88,208 124,227","rgba(255,255,255,.22)",1.3,[6,4]);sline(fc,"M550,184 C536,196 512,208 476,227","rgba(255,255,255,.22)",1.3,[6,4]);
 sline(fc,"M146,476 C226,488 374,488 454,476","rgba(255,255,255,.2)",1.3,[7,4]);
 fc.restore();
 fc.save();fc.lineCap="butt";var np=new Path2D(NPATH[side]);fc.strokeStyle=mul(color,.88);fc.lineWidth=16;fc.stroke(np);fc.setLineDash([2,3]);fc.strokeStyle="rgba(0,0,0,.2)";fc.stroke(np);fc.setLineDash([]);
 fc.strokeStyle="rgba(255,255,255,.1)";fc.lineWidth=1.5;fc.save();fc.translate(0,10);fc.setLineDash([6,4]);fc.strokeStyle="rgba(255,255,255,.22)";fc.stroke(np);fc.restore();fc.restore();
 if(side=="back"){fc.fillStyle="rgba(240,240,240,.5)";fc.fillRect(284,62,32,22)}
 /* طبقة الإضاءة والظل (تُضرب فوق الخامة والطباعة) */
 sc.save();sc.clip(sh);var g=sc.createRadialGradient(190,130,30,310,310,570);g.addColorStop(0,"#ffffff");g.addColorStop(.5,"#dedede");g.addColorStop(1,"#8f8f8f");sc.fillStyle=g;sc.fillRect(0,0,W,H);
 sc.save();sc.translate(-3000,0);sc.shadowOffsetX=3000;sc.shadowColor="rgba(0,0,0,.65)";sc.shadowBlur=32;sc.strokeStyle="#000";sc.lineWidth=24;sc.stroke(sh);sc.restore();
 var rg=rgb(color),L=.299*rg[0]+.587*rg[1]+.114*rg[2],hm=1+1.2*(1-L/255),sm=.7;
 var F=[[162,246,186,292,206,338,20,.26,16],[205,306,300,330,395,306,14,.06,14],[190,398,300,424,410,398,16,.08,16],[150,476,300,490,450,476,20,.22,18],[112,108,84,152,66,196,16,.24,12],[130,84,176,72,222,46,10,.14,8]];
 F.forEach(function(a){var al=a[7]*sm;soft(sc,a,"rgba(0,0,0,"+al+")",a[8],a[6]);if(a[0]<260)soft(sc,mir(a),"rgba(0,0,0,"+al+")",a[8],a[6])});
 soft(sc,side=="front"?[226,52,300,118,374,52]:[226,48,300,76,374,48],"rgba(0,0,0,.4)",12,12);sc.restore();
 hc.save();hc.clip(sh);var HL=[[190,118,216,190,238,262,40,.11,26],[222,92,300,102,378,92,26,.08,20],[102,100,76,150,62,190,16,.14,10],[176,330,206,380,222,430,34,.07,24],[238,300,252,350,248,410,30,.06,22]];
 HL.forEach(function(a){var al=Math.min(.22,a[7]*hm);soft(hc,a,"rgba(255,255,255,"+al+")",a[8],a[6]);if(a[0]<260)soft(hc,mir(a),"rgba(255,255,255,"+al*.55+")",a[8],a[6])});hc.restore();
 var r={f:f,s:s,h:h};cache[key]=r;order.push(key);if(order.length>8)delete cache[order.shift()];return r}
var T=cv(),DL=cv();
window.AM_DRAW=function(ctx,d,side,o){o=o||{};var b=base(d.color,side),t=T.getContext("2d");
 t.setTransform(1,0,0,1,0,0);t.globalCompositeOperation="source-over";t.globalAlpha=1;t.clearRect(0,0,W,H);t.drawImage(b.f,0,0);
 var els=d[side]||[];
 if(els.length){var dc=DL.getContext("2d");dc.setTransform(1,0,0,1,0,0);dc.clearRect(0,0,W,H);els.forEach(function(e){el(dc,e)});
  t.globalCompositeOperation="source-atop";t.globalAlpha=.96;
  for(var x=0;x<W;x+=4){var u=(x+2-300)/300,k=1-.03*u*u,dy=H*(1-k)/2+9*u*u-4;t.drawImage(DL,x,0,4,H,x,dy,4,H*k)}
  t.globalAlpha=1;t.globalCompositeOperation="source-over"}
 t.globalCompositeOperation="multiply";t.drawImage(b.s,0,0);t.globalCompositeOperation="screen";t.drawImage(b.h,0,0);t.globalCompositeOperation="source-over";
 ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=1;ctx.globalCompositeOperation="source-over";ctx.clearRect(0,0,W,H);
 if(o.bg){ctx.fillStyle=o.bg}else{var g=ctx.createRadialGradient(300,250,30,300,260,430);g.addColorStop(0,"#2b2d38");g.addColorStop(1,"#121318");ctx.fillStyle=g}
 ctx.fillRect(0,0,W,H);ctx.shadowColor="rgba(0,0,0,.55)";ctx.shadowBlur=34;ctx.shadowOffsetY=16;ctx.drawImage(T,0,0);ctx.restore();
 if(o.guide){ctx.save();ctx.setLineDash([8,6]);ctx.strokeStyle="rgba(255,255,255,.3)";ctx.strokeRect(180,128,240,240);ctx.restore()}
 if(o.sel){var s=o.sel,bx=AM_BOX(s);ctx.save();ctx.translate(s.x,s.y);ctx.rotate((s.r||0)*Math.PI/180);ctx.strokeStyle="#4aa3ff";ctx.setLineDash([5,4]);ctx.lineWidth=1.5;ctx.strokeRect(-bx.w/2-6,-bx.h/2-6,bx.w+12,bx.h+12);ctx.restore()}};
window.AM_URL=function(d,side,w){var c=document.createElement("canvas");c.width=W;c.height=H;AM_DRAW(c.getContext("2d"),d,side,{});
 if(w){var s=document.createElement("canvas");s.width=w;s.height=Math.round(w*H/W);s.getContext("2d").drawImage(c,0,0,s.width,s.height);return s.toDataURL("image/jpeg",.82)}return c.toDataURL("image/png")};
window.AM_STRIP=function(d){var f=function(e){var o={};for(var k in e)if(k!="im"&&k!="src")o[k]=e[k];return o};return{color:d.color,front:d.front.map(f),back:d.back.map(f)}};
window.AM_DESC=function(d){var cn=d.color;AM_COLORS.forEach(function(c){if(c.c==d.color)cn=c.n});
 var s=function(L,lab){return L.length?lab+": "+L.map(function(e){return e.t=="img"?"صورة مرفوعة ("+(e.nm||"")+")":"نص «"+String(e.tx).replace(/\n/g," ")+"» ("+fn(e.f)+"، "+e.c+"، "+e.s+")"}).join("، "):""};
 return "تيشيرت لون "+cn+" | "+[s(d.front,"الأمام"),s(d.back,"الظهر")].filter(Boolean).join(" | ")};
})();
