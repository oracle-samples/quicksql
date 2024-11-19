(function(l,e){typeof exports=="object"&&typeof module<"u"?e(exports):typeof define=="function"&&define.amd?define(["exports"],e):(l=typeof globalThis<"u"?globalThis:l||self,e(l.quickERD={}))})(this,function(l){"use strict";var R=Object.defineProperty;var y=(l,e,g)=>e in l?R(l,e,{enumerable:!0,configurable:!0,writable:!0,value:g}):l[e]=g;var p=(l,e,g)=>(y(l,typeof e!="symbol"?e+"":e,g),g);var e={};e.colors=[],e.FONT_FAMILY='var(--qs-diagram-font-family, "Arial")',e.colors.TABLE_BACKGROUND="var(--qs-diagram-table-background-color, rgb(254,246,222))",e.colors.TABLE_BORDER="var(--qs-diagram-table-border-color, rgba(0,0,0,.1))",e.colors.TABLE_NAME_TEXT="var(--qs-diagram-table-name-text-color, var(--qs-diagram-table-text-color, rgba(0,0,0,.8)))",e.colors.TABLE_COLUMN_TEXT="var(--qs-diagram-table-column-text-color, var(--qs-diagram-table-text-color, rgba(0,0,0,.8)))",e.colors.TABLE_DATA_TYPE_TEXT="var(--qs-diagram-table-data-type-text-color, var(--qs-diagram-table-text-color, rgba(0,0,0,.4)))",e.TABLE_BORDER_RADIUS=getComputedStyle(document.documentElement).getPropertyValue("--qs-diagram-table-border-radius"),e.TABLE_BORDER_RADIUS=e.TABLE_BORDER_RADIUS?e.TABLE_BORDER_RADIUS:0,e.colors.VIEW_BACKGROUND="var(--qs-diagram-view-background-color, rgb(236,245,231))",e.colors.VIEW_BORDER="var(--qs-diagram-view-border-color, rgba(0,0,0,.1))",e.colors.VIEW_NAME_TEXT="var(--qs-diagram-view-text-color, rgb(0,0,0))",e.colors.VIEW_COLUMN_TEXT="var(--qs-diagram-view-column-text-color, var(--qs-diagram-view-text-color, rgba(0,0,0,.8)))",e.colors.VIEW_DATA_TYPE_TEXT="var(--qs-diagram-view-data-type-text-color, var(--qs-diagram-view-text-color, rgba(0,0,0,.4)))",e.VIEW_BORDER_RADIUS=getComputedStyle(document.documentElement).getPropertyValue("--qs-diagram-view-border-radius"),e.VIEW_BORDER_RADIUS=e.VIEW_BORDER_RADIUS?e.VIEW_BORDER_RADIUS:4,e.colors.LINK="var(--qs-diagram-link-color, rgba(140,140,140,1))",joint.shapes.quicksql={},joint.shapes.quicksql.Table=joint.shapes.standard.HeaderedRecord.define("quicksql.Table",{z:0,columns:[],padding:{top:25,bottom:5,left:0,right:0},size:{width:60},itemMinLabelWidth:60,itemHeight:16,itemOverflow:!0,attrs:{root:{magnet:!1},body:{rx:e.TABLE_BORDER_RADIUS,ry:e.TABLE_BORDER_RADIUS,fill:e.colors.TABLE_BACKGROUND,stroke:e.colors.TABLE_BORDER,"stroke-width":1,refWidth:"100%",refHeight:"100%"},headerLabel:{y:-4,fontFamily:e.FONT_FAMILY,fill:e.colors.TABLE_NAME_TEXT,fontWeight:"bold",fontSize:12,textWrap:{ellipsis:!0,height:20}},separator:{stroke:e.colors.TABLE_BORDER,strokeWidth:1},itemBodies_0:{magnet:!1,pointerEvents:"none"},group_1:{pointerEvents:"none"},itemLabels:{fontFamily:e.FONT_FAMILY,fontWeight:"bold",fontSize:10,fill:e.colors.TABLE_COLUMN_TEXT,pointerEvents:"none"},itemLabels_1:{fill:e.colors.TABLE_DATA_TYPE_TEXT,textAnchor:"end",x:"calc(0.5 * w - 20)"}}},{markup:[{tagName:"rect",selector:"body"},{tagName:"text",selector:"headerLabel"},{tagName:"path",selector:"separator"}],setName(n,o){return this.attr(["headerLabel","text"],n,o)},setColumns(n=[]){const o=[],r=[];n.forEach((t,a)=>{if(!t.name)return;o.push({id:t.name,label:t.name,span:2});const s={id:`${t.datatype}_${a}`,label:t.datatype};r.push(s)}),this.set("items",[o,r]),this.removeInvalidLinks()}}),joint.shapes.quicksql.TableView=joint.shapes.standard.RecordView.extend({initialize:function(){joint.dia.ElementView.prototype.initialize.apply(this,arguments),this.updatePath()},updatePath:function(){var n="M 0 20 L "+this.model.get("size").width+" 20";this.model.attr("separator/d",n,{silent:!0})}}),joint.shapes.quicksql.View=joint.shapes.quicksql.Table.define("quicksql.View",{attrs:{body:{rx:e.VIEW_BORDER_RADIUS,ry:e.VIEW_BORDER_RADIUS,fill:e.colors.VIEW_BACKGROUND,stroke:e.colors.VIEW_BORDER},headerLabel:{fontFamily:e.FONT_FAMILY,fill:e.colors.VIEW_NAME_TEXT},separator:{stroke:e.colors.TABLE_BORDER},itemLabels:{fill:e.colors.VIEW_COLUMN_TEXT},itemLabels_1:{fill:e.colors.VIEW_DATA_TYPE_TEXT}}}),joint.shapes.quicksql.ViewView=joint.shapes.quicksql.TableView,joint.shapes.quicksql.Relation=joint.dia.Link.extend({z:-1,defaults:{type:"quicksql.Relation",attrs:{".connection":{stroke:e.colors.LINK,"stroke-width":1,"stroke-dasharray":"none"},".marker-source":{fill:e.colors.LINK,stroke:e.colors.LINK,d:"M 5 0 L 0 4 L 5 8 z"}},style:"none",sourceTable:"",targetTable:"",lineWidth:1},initialize:function(){joint.dia.Link.prototype.initialize.apply(this,arguments),this.updateStyle(this,arguments)},updateStyle:function(){this.attr(".connection/stroke-dasharray",this.get("style")==="dash"?"5 5":"none")}});const g="";var m={};const b=getComputedStyle(document.querySelector(":root")).getPropertyValue("--qs-diagram-font-family")||"Arial";m.newGuid=function(){function n(o){var r=(Math.random().toString(16)+"000000000").substr(2,8);return o?"-"+r.substr(0,4)+"-"+r.substr(4,4):r}return n()+n(!0)+n(!0)+n()},m.calcWidth=function(n,o,r){var t=o;n&&(t=n.concat(".").concat(o));for(var a=m.getTextWidth(t,`12pt ${b}`)+0,s=0,i=0,h=0;h<r.length;h++)s=Math.max(s,m.getTextWidth(r[h].name,`10pt ${b}`)),i=Math.max(i,m.getTextWidth(r[h].datatype,`10pt ${b}`));const d=i>s?i*2+20:s+i+20;let c=Math.max(a,d);return Math.max(c,230)},m.getTextWidth=function(n,o){var r=m.getTextWidth.canvas||(m.getTextWidth.canvas=document.createElement("canvas")),t=r.getContext("2d");t.font=o;var a=t.measureText(n);return a.width};class T{constructor(o,r="#quickERD"){p(this,"buildDiagram",(o,r)=>{let t=new Map;r.items.forEach(a=>{const s=a.name.toUpperCase();let i=a.schema;i&&(i=i.toUpperCase());const d=(a.columns||[]).map(E=>({name:E.name.toUpperCase(),datatype:E.datatype.replace("("," (").toUpperCase()}));let c=m.calcWidth(i,s,d,[]),u;a.type&&a.type==="view"?u=this.addView(s,i,d,c):u=this.addTable(s,i,d,c);const f=i?`${i}.${s}`:s;t.set(f,u.id),o.push(u)}),r.links.forEach(a=>{const s=t.get(a.source.toUpperCase()),i=t.get(a.target.toUpperCase());s&&i&&o.push(this.addLink(s,i,a.source_id,a.target_id))})});p(this,"addTable",(o,r,t,a)=>{let s=o;r&&(s=`${r}.${o}`);let i=new joint.shapes.quicksql.Table({id:m.newGuid(),size:{width:a}});return i.setName(s),i.setColumns(t),i});p(this,"addView",(o,r,t,a)=>{let s=o;r&&(s=`${r}.${o}`);let i=new joint.shapes.quicksql.View({id:m.newGuid(),size:{width:a}});return i.setName(s),i.setColumns(t),i});p(this,"addLink",(o,r,t,a)=>{let s="solid";return new joint.shapes.quicksql.Relation({source:{id:o,port:t.toUpperCase()},target:{id:r,port:a.toUpperCase()},style:s})});p(this,"printDiagram",()=>{this.paper.print()});p(this,"exportAsSVG",()=>{const o=this.graph.getBBox().inflate(50);this.paper.toSVG(r=>{var t="QuickSqlDiagram-";this.saveDiagram(t,r)},{area:o,convertImagesToDataUris:!0,preserveDimensions:this.paper.getComputedSize()})});p(this,"saveDiagram",(o,r)=>{function t(u){return u>=100?t(u%100):(u<10?"0":"")+u}var a=new Date,i={type:"text/plain;charset=UTF-8",name:o+t(a.getFullYear())+"-"+t(a.getMonth()+1)+"-"+t(a.getDate())+"_"+t(a.getHours()+1)+"-"+t(a.getMinutes())+".svg"},h=new Blob([r],{type:i.type}),d=window.URL.createObjectURL(h),c=document.createElement("a");document.body.appendChild(c),c.style="display: none",c.href=d,c.download=i.name,setTimeout(()=>{c.click(),window.URL.revokeObjectURL(d),c.remove()},0)});p(this,"zoomIn",()=>{this.paperScroller.zoom(.2,{max:3}),this.paperScroller.centerContent()});p(this,"zoomOut",()=>{this.paperScroller.zoom(-.2,{min:.1}),this.paperScroller.centerContent()});p(this,"fitScreen",()=>{this.paperScroller.zoomToFit({padding:10,scaleGrid:.2,minScale:.1,maxScale:3}),this.paperScroller.centerContent()});p(this,"actualSize",()=>{this.paperScroller.zoom(1,{absolute:!0}),this.paperScroller.centerContent()});p(this,"onMouseWheel",(o,r,t,a)=>{o.shiftKey&&(o.preventDefault(),a===-1?this.paperScroller.zoom(-.2,{min:.1}):a===1&&this.paperScroller.zoom(.2,{max:3}),this.paperScroller.centerContent())});if(!r||!(typeof r=="string"&&(this.element=document.querySelector(r)))&&!(typeof r=="object"&&(this.element=r)&&typeof this.element.append=="function"))throw new Error("Invalid element or selector provided");joint.anchors.columnAnchor=function(t,a,s){let i;const{model:h}=t,d=t.getNodeUnrotatedBBox(a),c=h.getBBox().center(),u=h.angle();let f=s;if(s instanceof Element){const E=this.paper.findView(s);f=E?E.getNodeBBox(s).center():new joint.g.Point}return f.rotate(c,u),i=f.x<=d.x+d.width?d.leftMiddle():d.rightMiddle(),i.rotate(c,-u)},this.data=o,this.graph=new joint.dia.Graph({},{cellNamespace:joint.shapes}),this.paper=new joint.dia.Paper({width:100,height:100,gridSize:1,model:this.graph,highlighting:!1,sorting:joint.dia.Paper.sorting.APPROX,cellViewNamespace:joint.shapes,defaultRouter:{name:"metro"},defaultAnchor:{name:"columnAnchor"},defaultConnector:{name:"rounded"},linkPinning:!1,interactive:{vertexAdd:!1,linkMove:!1,elementMove:!0}}),this.paperScroller=new joint.ui.PaperScroller({autoResizePaper:!0,padding:50,paper:this.paper}),this.paper.on("blank:pointerdown",(t,a,s)=>{this.paperScroller.setCursor("grabbing"),this.paperScroller.startPanning(t,a,s)}),this.paper.on("blank:pointerup",()=>{this.paperScroller.setCursor("default")}),this.paper.on("cell:mousewheel",(t,a,s,i,h)=>{this.onMouseWheel(a,s,i,h)}),this.paper.on("blank:mousewheel",(t,a,s,i)=>{this.onMouseWheel(t,a,s,i)}),new joint.ui.Snaplines({paper:this.paper}),this.keyboard&&this.keyboard.disable(),this.keyboard=new joint.ui.Keyboard,this.keyboard.on({"shift+alt+a":function(t){this.actualSize(),t.preventDefault(),t.stopPropagation()},"shift+alt+c":function(t){this.paperScroller.centerContent(),t.preventDefault(),t.stopPropagation()},"shift+alt+f":function(t){this.fitScreen(),t.preventDefault(),t.stopPropagation()},"shift+alt+p":function(t){this.printDiagram(),t.preventDefault(),t.stopPropagation()},"shift+alt+s":function(t){this.exportAsSVG(),t.preventDefault(),t.stopPropagation()}},this),this.element.append(this.paperScroller.render().el),this.updateDiagram()}async updateDiagram(){var o;if((o=this.data.items)!=null&&o.length){let r=[];this.buildDiagram(r,this.data),this.graph.resetCells(r),this.autoLayout(),setTimeout(()=>{this.paperScroller.adjustPaper(),this.actualSize()},100)}}autoLayout(){joint.layout.DirectedGraph.layout(this.graph,{nodeSep:120,edgeSep:100,rankSep:100}),this.graph.getLinks().forEach(o=>{o.toBack()})}}const _="1.2.13",v={Diagram:T,version:_};l.Diagram=T,l.default=v,l.version=_,Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});