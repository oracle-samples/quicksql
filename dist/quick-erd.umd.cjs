(function(q,m){typeof exports=="object"&&typeof module<"u"?m(exports):typeof define=="function"&&define.amd?define(["exports"],m):(q=typeof globalThis<"u"?globalThis:q||self,m(q.quickERD={}))})(this,function(q){"use strict";var fe=Object.defineProperty;var ge=(q,m,P)=>m in q?fe(q,m,{enumerable:!0,configurable:!0,writable:!0,value:P}):q[m]=P;var M=(q,m,P)=>(ge(q,typeof m!="symbol"?m+"":m,P),P);var m={};m.colors=[],m.FONT_FAMILY='var(--qs-diagram-font-family, "Arial")',m.colors.TABLE_BACKGROUND="var(--qs-diagram-table-background-color, rgb(254,246,222))",m.colors.TABLE_BORDER="var(--qs-diagram-table-border-color, rgba(0,0,0,.1))",m.colors.TABLE_NAME_TEXT="var(--qs-diagram-table-name-text-color, var(--qs-diagram-table-text-color, rgba(0,0,0,.8)))",m.colors.TABLE_COLUMN_TEXT="var(--qs-diagram-table-column-text-color, var(--qs-diagram-table-text-color, rgba(0,0,0,.8)))",m.colors.TABLE_DATA_TYPE_TEXT="var(--qs-diagram-table-data-type-text-color, var(--qs-diagram-table-text-color, rgba(0,0,0,.4)))",m.TABLE_BORDER_RADIUS=getComputedStyle(document.documentElement).getPropertyValue("--qs-diagram-table-border-radius"),m.TABLE_BORDER_RADIUS=m.TABLE_BORDER_RADIUS?m.TABLE_BORDER_RADIUS:0,m.colors.VIEW_BACKGROUND="var(--qs-diagram-view-background-color, rgb(236,245,231))",m.colors.VIEW_BORDER="var(--qs-diagram-view-border-color, rgba(0,0,0,.1))",m.colors.VIEW_NAME_TEXT="var(--qs-diagram-view-text-color, rgb(0,0,0))",m.colors.VIEW_COLUMN_TEXT="var(--qs-diagram-view-column-text-color, var(--qs-diagram-view-text-color, rgba(0,0,0,.8)))",m.colors.VIEW_DATA_TYPE_TEXT="var(--qs-diagram-view-data-type-text-color, var(--qs-diagram-view-text-color, rgba(0,0,0,.4)))",m.VIEW_BORDER_RADIUS=getComputedStyle(document.documentElement).getPropertyValue("--qs-diagram-view-border-radius"),m.VIEW_BORDER_RADIUS=m.VIEW_BORDER_RADIUS?m.VIEW_BORDER_RADIUS:4,m.colors.LINK="var(--qs-diagram-link-color, rgba(140,140,140,1))",joint.shapes.quicksql={},joint.shapes.quicksql.Table=joint.shapes.standard.HeaderedRecord.define("quicksql.Table",{z:3,columns:[],padding:{top:25,bottom:5,left:0,right:0},size:{width:160},itemMinLabelWidth:105,itemHeight:16,itemOverflow:!0,attrs:{root:{magnet:!1},body:{cursor:"default",rx:m.TABLE_BORDER_RADIUS,ry:m.TABLE_BORDER_RADIUS,fill:m.colors.TABLE_BACKGROUND,stroke:m.colors.TABLE_BORDER,"stroke-width":1,refWidth:"100%",refHeight:"100%"},headerLabel:{cursor:"default",y:-4,fontFamily:m.FONT_FAMILY,fill:m.colors.TABLE_NAME_TEXT,fontWeight:"bold",fontSize:12,textWrap:{ellipsis:!0,height:20}},separator:{cursor:"default",stroke:m.colors.TABLE_BORDER,strokeWidth:1},itemBodies_0:{magnet:!1,pointerEvents:"none"},group_1:{pointerEvents:"none"},itemLabels:{fontFamily:m.FONT_FAMILY,fontWeight:"bold",fontSize:10,fill:m.colors.TABLE_COLUMN_TEXT,pointerEvents:"none"},itemLabels_1:{fill:m.colors.TABLE_DATA_TYPE_TEXT,textAnchor:"end",x:"calc(0.5 * w - 20)"}}},{markup:[{tagName:"rect",selector:"body"},{tagName:"text",selector:"headerLabel"},{tagName:"path",selector:"separator"}],setName(i,r){return this.attr(["headerLabel","text"],i,r)},setColumns(i=[]){const r=[],u=[];i.forEach((l,o)=>{if(!l.name)return;r.push({id:l.name,label:l.name,span:2});const n={id:`${l.datatype}_${o}`,label:l.datatype};u.push(n)}),this.set("items",[r,u]),this.removeInvalidLinks()}}),joint.shapes.quicksql.TableView=joint.shapes.standard.RecordView.extend({initialize:function(){joint.dia.ElementView.prototype.initialize.apply(this,arguments),this.updatePath()},updatePath:function(){var i="M 0 20 L "+this.model.get("size").width+" 20";this.model.attr("separator/d",i,{silent:!0})}}),joint.shapes.quicksql.View=joint.shapes.quicksql.Table.define("quicksql.View",{attrs:{body:{rx:m.VIEW_BORDER_RADIUS,ry:m.VIEW_BORDER_RADIUS,fill:m.colors.VIEW_BACKGROUND,stroke:m.colors.VIEW_BORDER},headerLabel:{fontFamily:m.FONT_FAMILY,fill:m.colors.VIEW_NAME_TEXT},separator:{stroke:m.colors.TABLE_BORDER},itemLabels:{fill:m.colors.VIEW_COLUMN_TEXT},itemLabels_1:{fill:m.colors.VIEW_DATA_TYPE_TEXT}}}),joint.shapes.quicksql.ViewView=joint.shapes.quicksql.TableView,joint.shapes.quicksql.Relation=joint.dia.Link.extend({z:-1,defaults:{type:"quicksql.Relation",attrs:{".connection":{stroke:m.colors.LINK,"stroke-width":1,"stroke-dasharray":"none"},".marker-source":{fill:m.colors.LINK,stroke:m.colors.LINK,d:"M 5 0 L 0 4 L 5 8 z"}},style:"none",sourceTable:"",targetTable:"",lineWidth:1},initialize:function(){joint.dia.Link.prototype.initialize.apply(this,arguments),this.updateStyle(this,arguments)},updateStyle:function(){this.attr(".connection/stroke-dasharray",this.get("style")==="dash"?"5 5":"none")}});const P="";var W={};const X=getComputedStyle(document.querySelector(":root")).getPropertyValue("--qs-diagram-font-family")||"Arial";W.newGuid=function(){function i(r){var u=(Math.random().toString(16)+"000000000").substr(2,8);return r?"-"+u.substr(0,4)+"-"+u.substr(4,4):u}return i()+i(!0)+i(!0)+i()},W.calcWidth=function(i,r,u){var l=r;i&&(l=i.concat(".").concat(r));for(var o=W.getTextWidth(l,`12pt ${X}`),n=0,s=0,x=0;x<u.length;x++)n=Math.max(n,W.getTextWidth(u[x].name,`10pt ${X}`)),s=Math.max(s,W.getTextWidth(u[x].datatype,`10pt ${X}`));const L=s>n?s*2:n+s+20;return Math.max(o,L)},W.getTextWidth=function(i,r){var u=W.getTextWidth.canvas||(W.getTextWidth.canvas=document.createElement("canvas")),l=u.getContext("2d");l.font=r;var o=l.measureText(i);return o.width};function ae(){var i=this;i.referredBy_count=0,i.refer_count=0,i.referredBy=[],i.referredByFK=[],i.refer=[],i.referFK=[],i.referredByMap={},i.referMap={},i.arranged=!1,i.booked=!1,i.scanned=!1,i.star=!1,i.usedInStar=!1,i.nodes=[],i.init_dim={width:0,height:0},i.location,i.rect,i.isScanConnectedToBetterLevel=function(r,u){for(var l=i.referredBy.length,o=0;o<l;o++){var n=i.referredBy[o];if(n!=r&&n.level<u&&!n.scanned)return!0}for(var s=i.refer.length,x=0;x<s;x++){var n=i.refer[x];if(n!=r&&n.level<u&&!n.scanned)return!0}return!1},i.isConnectedToBetterLevel=function(r,u){for(var l=i.referredBy.length,o=0;o<l;o++){var n=i.referredBy[o];if(n!=r&&n.level<u&&!n.arranged)return!0}for(var s=i.refer.length,x=0;x<s;x++){var n=i.refer[x];if(n!=r&&n.level<u&&!n.arranged)return!0}return!1},i.referOnly=function(r){for(var u=i.refer.length,l=0;l<u;l++){var o=i.refer[l];if(o!=r)return!1}for(var n=i.referredBy.length,s=0;s<n;s++){var o=i.referredBy[s];if(o!=r)return!1}return!0},i.referOnlyAndArranged=function(r){for(var u=i.refer.length,l=0;l<u;l++){var o=i.refer[l];if(o!=r&&!o.arranged)return!1}for(var n=i.referredBy.length,s=0;s<n;s++){var o=i.referredBy[s];if(o!=r&&!o.arranged)return!1}return!0}}function C(i,r,u,l){var o=this;o.x=i,o.y=r,o.width=u,o.height=l,o.union=function(n){var s=Math.min(this.x,n.x),x=Math.min(this.y,n.y),L=Math.max(this.x+this.width,n.x+n.width),A=Math.max(this.y+this.height,n.y+n.height);return new C(s,x,L-s,A-x)}}function j(i,r){var u=this;u.x=i,u.y=r}function Y(i,r){return i.referredBy_count>r.referredBy_count?1:i.referredBy_count<r.referredBy_count?-1:i.refer_count<r.refer_count?1:i.refer_count>r.refer_count?-1:0}function ne(i,r){return i.referredBy_count>r.referredBy_count?1:i.referredBy_count<r.referredBy_count?-1:i.refer_count>r.refer_count?1:i.refer_count<r.refer_count?-1:0}function ie(i,r){return i.referredBy_count<r.referredBy_count?1:i.referredBy_count>r.referredBy_count?-1:i.refer_count<r.refer_count?1:i.refer_count>r.refer_count?-1:0}function Q(i,r){return i.refer_count<r.refer_count?1:i.refer_count>r.refer_count?-1:i.referredBy_count<r.referredBy_count?1:i.referredBy_count>r.referredBy_count?-1:0}function J(i,r){return i.init_dim.height>r.init_dim.height?1:i.init_dim.height<r.init_dim.height?-1:0}function oe(i,r){return i.rect.height<r.rect.height?1:i.rect.height>r.rect.height?-1:0}function le(i){var r=this,u=20,l=20,o=20,n=20,s=35,x=25,L=0,A=1,b=!0,E=80,D=80,re=12e3,$=[],N=[],U={},de=2e3,ue=20;r.rearrangeDiagram=function(e,d,h){A=e,b=d;var v=[];v.length>0?(h!=null&&(u=h.getX(),l=h.getY()),r.rearrangeT(A,!1,v)):(u=20,l=20,r.rearrangeT(A,!1))},r.rearrangeT=function(e,d,h){o=u,n=l,D=80,E=100;var v;h!=null&&h.length>0?v=h:v=i.getAllElements(),re=1e3,$.length=0;var g=[],p=[];N=[];for(var a=[],t=r.buildTH_Map(v,d),B=[],w=t.length,c=0;c<w;c++){var f=t[c];f.refer_count===0&&f.referredBy_count===0?g.push(f):(p.push(f),f.refer.length>0&&(e==1?f.refer.sort(Y):e==2?f.refer.sort(ne):f.refer.sort(ie)),f.referredBy_count==0&&!f.usedInStar&&N.push(f),f.referredBy.length>0&&f.referredBy.sort(Q))}if(p.length>0){N.length==0&&r.findRoots(p,N),N=N.concat(B),N.sort(Q);for(var y=de,_=ue,T=0;T<N.length;T++){var f=N[T];if(!f.arranged&&!f.usedInStar){a.push(f);var R;f.star?R=r.arrangeStar(f,y,_):(r.setLevel2(f,0),R=r.arrange(f,y,_,null,null,null)),_=_+R.height+2*D}}a.sort(oe),r.translateArrangeRoots(a),p=p.concat($),r.applyArrange(p)}r.rearrangeNoneRefTables(g),r.applyArrange(g),$.length=0,N.length=0;for(var S in U)delete U[S]},r.buildTH_Map=function(e,d){for(var h in U)delete U[h];for(var v=[],g=e.length,p=0;p<g;p++){var a=e[p],t=U[a.id];t===void 0&&(t=new ae,U[a.id]=t,t.element=a.element,t.type=a.type,t.name=a.name,t.schema=a.schema,t.id=a.id,t.pos={x:a.pos.x,y:a.pos.y},t.size={width:a.size.width,height:a.size.height},d||(t.init_dim={width:a.size.width,height:a.size.height}),v.push(t))}for(var B=i.getAllLinks(),w=B.length,c=0;c<w;c++){var f=B[c],y=U[f.targetID],_=U[f.sourceID];if(f.sourceID!=f.targetID&&y!=null&&_!=null){var T={};T.link=f.link,T.id=f.id,T.sourceID=f.sourceID,T.targetID=f.targetID,!y.referredByFK.indexOf(T)>=0&&(y.referredBy.push(_),y.referredByFK.push(T),y.referredByMap[T.id]=_,y.referredBy_count++),!_.referFK.indexOf(T)>=0&&(_.refer.push(y),_.referFK.push(T),_.referMap[T.id]=y,_.refer_count++)}}return v},r.findRoots=function(e,d){e.sort(Y);var h=-1;if(e.length>0)do{h++;for(var v=e.length,g=0;g<v;g++){var p=e[g];p.referredBy_count===h&&d.push(p)}}while(d.length===0)},r.arrangeStar=function(e,d,h){var v=new C(d,h,1,1);e.nodes.push(e);for(var g=[],p=e.referredBy.length,a=0;a<p;a++){var t=e.referredBy[a];!g.indexOf(t)>=0&&g.push(t)}for(var B=e.refer.length,w=0;w<B;w++){var t=e.refer[w];!g.indexOf(t)>=0&&g.push(t)}g.sort(J);for(var c=0,f=g.length,y=0;y<f;y++){var t=g[y];c=c+t.init_dim.width+E}for(var _=d,T=h,R=d+c/2,S=0,O=0,z=d,a=g.length-1;a>=0&&_<R;a--){S=a;var t=g[a];O=Math.max(O,t.init_dim.height),z=_+t.init_dim.width,e.nodes.push(t),t.nodes.push(t),t.location=new j(_,T),t.rect=new C(t.location.x,t.location.y,t.init_dim.width,t.init_dim.height),_=_+E+t.init_dim.width,v=v.union(t.rect),t.arranged=!0}T=T+O+2*D,_=d+(z-d)/2,e.location=new j(_,T),e.rect=new C(e.location.x,e.location.y,e.init_dim.width,e.init_dim.height),v=v.union(e.rect),e.arranged=!0,T=T+e.init_dim.height+2*D,_=d;for(var a=S-1;a>=0;a--){var t=g[a];e.nodes.push(t),t.nodes.push(t),t.location=new j(_,T),t.rect=new C(t.location.x,t.location.y,t.init_dim.width,t.init_dim.height),_=_+E+t.init_dim.width,v=v.union(t.rect),t.arranged=!0}return e.rect=v,v},r.setLevel2=function(e,d){if(d<=e.level&&!e.scanned){var h=[],v=[];e.level=d,e.scanned=!0;for(var g=e.refer.length,p=0;p<g;p++){var a=e.refer[p];a.level>d+1&&!a.scanned&&!a.isScanConnectedToBetterLevel(e,e.level)&&(a.level++,h.push(a))}for(var t=e.referredBy.length,B=0;B<t;B++){var a=e.referredBy[B];a.level>d+1&&!a.scanned&&!a.isScanConnectedToBetterLevel(e,e.level)&&(a.level++,v.push(a))}if(b){for(var w=h.length,c=0;c<w;c++){var a=h[c];r.setLevel2(a,d+1)}for(var f=v.length,y=0;y<f;y++){var a=v[y];r.setLevel2(a,d+1)}}else{for(var p=h.length-1;p>=0;p--){var a=h[p];r.setLevel2(a,d+1)}for(var p=v.length-1;p>=0;p--){var a=v[p];r.setLevel2(a,d+1)}}}},r.arrange=function(e,d,h,v,g,p){if(!e.arranged){var a=v;e.location=new j(d,h),e.nodes.push(e),a===null?a=new C(e.location.x,e.location.y,e.init_dim.width,e.init_dim.height):a=a.union(new C(e.location.x,e.location.y,e.init_dim.width,e.init_dim.height)),e.arranged=!0;var t,B=r.getNotArranged(e.refer),w=r.getNotArranged(e.referredBy),c=[];if(!b&&r.canGoLeft(g,d,h+e.init_dim.height+D,w))for(var f=w.length,y=0;y<f;y++){var _=w[y];!_.arranged&&!_.booked&&!_.isConnectedToBetterLevel(e,e.level)&&(_.booked=!0,c.push(_))}var T=r.canGoLeft(g,d,h+e.init_dim.height+D,w);if(!T){for(var R=c.length,S=0;S<R;S++){var O=c[S];O.booked=!1}c.length=0}if(B.length>0)b||!T?(w=w.concat(B),t=r.orderDown(e,w,d,h+e.init_dim.height+D,[],e.nodes,g),a=a.union(t)):w.length>0?(t=r.orderLeft(e,w,d,h+e.init_dim.height+D,c,e.nodes,g),g==null?g=new C(t.x,t.y,t.width,t.height):g=g.union(t),a=a.union(t),t=r.orderDown(e,B,Math.max(d,t.x+t.width),h+e.init_dim.height+D,c,e.nodes,g),a=a.union(t)):(t=r.orderDown(e,B,d,h+e.init_dim.height+D,c,e.nodes,g),a=a.union(t));else if(w.length>0)if(b||!r.canGoLeft(g,d,h+e.init_dim.height+D,w))w=w.concat(B),t=r.orderDown(e,w,d,h+e.init_dim.height+D,[],e.nodes,g),a=a.union(t);else{var z=w[w.length-1];t=r.orderLeftCenter(e,w,d+z.init_dim.width+E,h+e.init_dim.height+D,c,e.nodes,g),a=a.union(t)}if(e.rect=new C(a.x,a.y,a.width,a.height),p!=null)for(var I=e.nodes.length,F=0;F<I;F++){var z=e.nodes[F];p.indexOf(z)>=0||p.push(z)}return a}return e.rect},r.getNotArranged=function(e){for(var d=[],h=e.length,v=0;v<h;v++){var g=e[v];g.arranged||d.push(g)}return d},r.canGoLeft=function(e,d,h,v){if(e==null||v.length==0)return!0;for(var g=v.length,p=0,a=0;a<g;a++){var t=v[a];p=p+E+t.init_dim.width}return h>e.y+e.height||d-p>e.x+p},r.orderDown=function(e,d,h,v,g,p,a){for(var t=[],B=d.length,w=0;w<B;w++){var c=d[w];!c.arranged&&!c.booked&&!(g.indexOf(c)>=0)&&!c.isConnectedToBetterLevel(e,e.level)&&(c.booked=!0,t.push(c))}var f=h,y=v,_=new C(h,v,1,1),T;a===null?T=null:T=new C(a.x,a.y,a.width,a.height);var R=[],S=t.length;if(S>1){var O=r.getReferOnly(t,e);if(O.length>0){O.length>1&&O.sort(J);for(var V=e.location.y,G=D/3,z=V+e.init_dim.height+G,I=0;I<O.length;I++){var c=O[I],F=V+c.init_dim.height;if(F<=z){R.push(c);var te=t.indexOf(c);te>-1&&t.splice(te,1),V=F+G}else break}var H=S/2;for(H>1&&(H=1);t.length<H;)t.push(R[R.length-1]),R.splice(R.length-1,1)}}S=t.length;for(var I=0;I<S;I++){var c=t[I];if(S>1&&I===S-1&&R.length===0)if(R.length===0&&c.referOnlyAndArranged(e)){var K=e.location.x+E+e.init_dim.width,k=r.arrange(c,K,e.location.y,null,T,p);_=_.union(k)}else{var K=Math.max(e.location.x+E+e.init_dim.width,_.x+_.width+E),k=r.arrange(c,K,e.location.y,null,T,p);_=_.union(k)}var ce=f,k=r.arrange(c,ce,y,null,T,p);T==null?T=new C(k.x,k.y,k.width,k.height):T=T.union(k),f=Math.max(f,k.x+k.width)+E,_=_.union(k)}for(var V=e.location.y,G=D/3,K=e.location.x+E+e.init_dim.width,I=0;I<R.length;I++){var c=R[I];c.nodes.push(c),p!=null&&p.push(c),c.location=new j(K,V),c.arranged=!0,c.booked=!1,c.rect=new C(c.location.x,c.location.y,c.init_dim.width,c.init_dim.height),_=_.union(c.rect),V=V+c.init_dim.height+G}return _},r.getReferOnly=function(e,d){for(var h=e.length,v=[],g=0;g<h;g++){var p=e[g];p.referOnly(d)&&v.push(p)}return v},r.orderLeft=function(e,d,h,v,g,p,a){for(var t=h-E,B=v,w=new C(h,v,1,1),c=d.length-1;c>=0;c--){var f=d[c];if(!f.arranged&&!f.isConnectedToBetterLevel(e,e.level)&&(!f.booked||g.indexOf(f)>=0)){var y=t-f.init_dim.width,_=r.arrange(f,y,B,null,a,p);t=Math.min(t,_.x)-E,w=w.union(_)}}return w},r.orderLeftCenter=function(e,d,h,v,g,p,a){for(var t=h-E,B=v,w=[],c=new C(h,v,1,1),f=d.length-1;f>=0;f--){var y=d[f];!y.arranged&&!y.isConnectedToBetterLevel(e,e.level)&&(!y.booked||g.indexOf(y)>=0)&&w.unshift(y)}if(w.length>1){for(var _=0,f=0;f<w.length-1;f++){var y=w[f];_=_+E+y.init_dim.width}t=h+_/2-E}for(var f=w.length-1;f>=0;f--){var y=w[f];if(!y.arranged&&!y.isConnectedToBetterLevel(e,e.level)&&(!y.booked||g.indexOf(y)>=0)){var T=t-y.init_dim.width,R=r.arrange(y,T,B,null,a,p);t=Math.min(t,R.x)-E,c=c.union(R)}}return c},r.rearrangeNoneRefTables=function(e){o=u,s=35,x=50,L=0;var d=Math.sqrt(e.length),h=Math.round(d);Math.sqrt(d*d)!=d&&h++,h++;for(var v=e.length,g=0;g<v;g++){var p=e[g];L++;var a=p.init_dim;s=a.width,x=Math.max(a.height,x),p.location=new j(o,n),p.arranged=!0,o=o+s+50,L==h&&(L=0,o=u,n=n+x+150,x=25)}},r.translateArrangeRoots=function(e){o=u,n=l;for(var d=0,h=r.getRootsMaxWidth(e)+o+5,v=e.length,g=0;g<v;g++){var p=e[g],a=p.rect;o+a.width>h&&(o=u,n=n+d+2*D,d=0),d=Math.max(a.height,d);for(var t=o-a.x,B=n-a.y,w=p.nodes.length,c=0;c<w;c++){var f=p.nodes[c];f.location.x=t+f.location.x,f.location.y=B+f.location.y}o=o+a.width+2*E}n=n+d+3*D,o=u},r.getRootsMaxWidth=function(e){for(var d=re,h=e.length,v=0;v<h;v++){var g=e[v];d<g.rect.width&&(d=g.rect.width)}return d},r.applyArrange=function(e){for(var d=e.length,h=0;h<d;h++){var v=e[h];v.arranged&&v.element.position(v.location.x,v.location.y)}}}class Z{constructor(r,u="#quickERD"){M(this,"buildDiagram",(r,u)=>{let l=new Map;u.items.forEach(o=>{const n=o.name.toUpperCase();let s=o.schema;s&&(s=s.toUpperCase());const L=(o.columns||[]).map(D=>({name:D.name.toUpperCase(),datatype:D.datatype.replace("("," (").toUpperCase()}));let A=W.calcWidth(s,n,L,[]),b;o.type&&o.type==="view"?b=this.addView(n,s,L,A):b=this.addTable(n,s,L,A);const E=s?`${s}.${n}`:n;l.set(E,b.id),r.push(b)}),u.links.forEach(o=>{const n=l.get(o.source.toUpperCase()),s=l.get(o.target.toUpperCase());n&&s&&r.push(this.addLink(n,s,o.source_id,o.target_id))})});M(this,"addTable",(r,u,l,o)=>{let n=r;u&&(n=`${u}.${r}`);let s=new joint.shapes.quicksql.Table({id:W.newGuid(),size:{width:o}});return s.setName(n),s.setColumns(l),s});M(this,"addView",(r,u,l,o)=>{let n=r;u&&(n=`${u}.${r}`);let s=new joint.shapes.quicksql.View({id:W.newGuid(),size:{width:o}});return s.setName(n),s.setColumns(l),s});M(this,"addLink",(r,u,l,o)=>{let n="solid";return new joint.shapes.quicksql.Relation({source:{id:r,port:l.toUpperCase()},target:{id:u,port:o.toUpperCase()},style:n})});M(this,"printDiagram",()=>{this.paper.print()});M(this,"exportAsSVG",()=>{const r=this.graph.getBBox().inflate(50);this.paper.toSVG(u=>{var l="QuickSqlDiagram-";this.saveDiagram(l,u)},{area:r,convertImagesToDataUris:!0,preserveDimensions:this.paper.getComputedSize()})});M(this,"saveDiagram",(r,u)=>{function l(b){return b>=100?l(b%100):(b<10?"0":"")+b}var o=new Date,s={type:"text/plain;charset=UTF-8",name:r+l(o.getFullYear())+"-"+l(o.getMonth()+1)+"-"+l(o.getDate())+"_"+l(o.getHours()+1)+"-"+l(o.getMinutes())+".svg"},x=new Blob([u],{type:s.type}),L=window.URL.createObjectURL(x),A=document.createElement("a");document.body.appendChild(A),A.style="display: none",A.href=L,A.download=s.name,setTimeout(()=>{A.click(),window.URL.revokeObjectURL(L),A.remove()},0)});M(this,"zoomIn",()=>{this.paperScroller.zoom(.2,{max:3}),this.paperScroller.centerContent()});M(this,"zoomOut",()=>{this.paperScroller.zoom(-.2,{min:.1}),this.paperScroller.centerContent()});M(this,"fitScreen",()=>{this.paperScroller.zoomToFit({padding:10,scaleGrid:.2,minScale:.1,maxScale:3}),this.paperScroller.centerContent()});M(this,"actualSize",()=>{this.paperScroller.zoom(1,{absolute:!0}),this.paperScroller.centerContent()});M(this,"onMouseWheel",(r,u,l,o)=>{r.shiftKey&&(r.preventDefault(),o===-1?this.paperScroller.zoom(-.2,{min:.1}):o===1&&this.paperScroller.zoom(.2,{max:3}),this.paperScroller.centerContent())});if(!u||!(typeof u=="string"&&(this.element=document.querySelector(u)))&&!(typeof u=="object"&&(this.element=u)&&typeof this.element.append=="function"))throw new Error("Invalid element or selector provided");joint.anchors.columnAnchor=function(l,o,n){let s;const{model:x}=l,L=l.getNodeUnrotatedBBox(o),A=x.getBBox().center(),b=x.angle();let E=n;if(n instanceof Element){const D=this.paper.findView(n);E=D?D.getNodeBBox(n).center():new joint.g.Point}return E.rotate(A,b),s=E.x<=L.x+L.width?L.leftMiddle():L.rightMiddle(),s.rotate(A,-b)},this.data=r,this.graph=new joint.dia.Graph({},{cellNamespace:joint.shapes}),this.paper=new joint.dia.Paper({width:100,height:100,gridSize:1,model:this.graph,highlighting:!1,sorting:joint.dia.Paper.sorting.APPROX,cellViewNamespace:joint.shapes,defaultRouter:{name:"metro"},defaultAnchor:{name:"columnAnchor"},defaultConnector:{name:"rounded"},linkPinning:!1,interactive:{vertexAdd:!1,linkMove:!1,elementMove:!1}}),this.paperScroller=new joint.ui.PaperScroller({autoResizePaper:!0,padding:50,paper:this.paper}),this.paper.on("blank:pointerdown",(l,o,n)=>{this.paperScroller.setCursor("grabbing"),this.paperScroller.startPanning(l,o,n)}),this.paper.on("blank:pointerup",()=>{this.paperScroller.setCursor("default")}),this.paper.on("cell:mousewheel",(l,o,n,s,x)=>{this.onMouseWheel(o,n,s,x)}),this.paper.on("blank:mousewheel",(l,o,n,s)=>{this.onMouseWheel(l,o,n,s)}),this.keyboard&&this.keyboard.disable(),this.keyboard=new joint.ui.Keyboard,this.keyboard.on({"alt+a":function(l){this.actualSize(),l.preventDefault(),l.stopPropagation()},"alt+c":function(l){this.paperScroller.centerContent(),l.preventDefault(),l.stopPropagation()},"alt+f":function(l){this.fitScreen(),l.preventDefault(),l.stopPropagation()},"alt+p":function(l){this.printDiagram(),l.preventDefault(),l.stopPropagation()},"alt+s":function(l){this.exportAsSVG(),l.preventDefault(),l.stopPropagation()}},this),this.element.append(this.paperScroller.render().el),this.updateDiagram()}async updateDiagram(){var r;if((r=this.data.items)!=null&&r.length){let u=[];this.buildDiagram(u,this.data),this.graph.resetCells(u),this.autoLayout(),setTimeout(()=>{this.paperScroller.adjustPaper(),this.actualSize()},100)}}getAllElements(){let r=[],u=this.graph.getElements(),l=u.length;for(var o=0;o<l;o++){let n=u[o],s={};s.element=n,s.type=n.attributes.type,s.name=n.attributes.name,s.schema=n.attributes.schema,s.id=n.id,s.pos={x:n.attributes.position.x,y:n.attributes.position.y},s.size={width:n.attributes.size.width,height:n.attributes.size.height},r.push(s)}return r}getAllLinks(){let r=[],u=this.graph.getLinks(),l=u.length;for(var o=0;o<l;o++){let s=u[o];if(s.attributes.type==="quicksql.Relation"){var n={};n.link=s,n.sourceID=s.attributes.target.id,n.targetID=s.attributes.source.id,n.id=n.targetID.concat("_").concat(n.sourceID),r.push(n)}}return r}autoLayout(){var r=new le(this);r.rearrangeDiagram(3,!1),this.paperScroller.centerContent()}}const ee="1.2.4",se={Diagram:Z,version:ee};q.Diagram=Z,q.default=se,q.version=ee,Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
