"use strict";(self.webpackChunkadmin_ui=self.webpackChunkadmin_ui||[]).push([[478],{478:(J,h,l)=>{l.r(h),l.d(h,{GetsavedDataModule:()=>w});var m=l(6814),u=l(5628),t=l(4769),v=l(788),g=l(2848),f=l(1521),D=l(607),d=l(95),T=l(3605);const C=["pageId"];function G(e,c){if(1&e&&(t.TgZ(0,"option",20),t._uU(1),t.qZA()),2&e){const s=c.$implicit;t.Q6J("value",s.ID),t.xp6(1),t.hij(" ",s.PAGENAME," ")}}function A(e,c){if(1&e){const s=t.EpF();t.TgZ(0,"app-datatable",21),t.NdJ("search",function(o){t.CHM(s);const n=t.oxw();return t.KtG(n.updateFilter(o))})("changeTemplate",function(o){t.CHM(s);const n=t.oxw();return t.KtG(n.applyTemplate(o))}),t.qZA()}if(2&e){const s=t.oxw();t.Q6J("rows",s.rows)("columns",s.columns)("loadingIndicator",s.loadingIndicator)("selectedTemplateClass",s.selectedTemplateClass)}}const S=[{path:"",component:(()=>{var e;class c{constructor(a,o,n,r){this.constant=a,this.dataService=o,this.httpService=n,this.exportAsService=r,this.header=[],this.maplist=[],this.rows=[],this.content=[],this.columns=[],this.pages=[],this.showDataTable=!1,this.loadingIndicator=!1,this.selectedTemplate="",this.selectedTemplateClass="material expanded",this.fetchPagesCreated()}updateFilter(a){const o=(a||"").toLowerCase();this.rows=o?this.content.filter(n=>Object.values(n).some(r=>(r||"").toLowerCase().startsWith(o))):this.content}fetchSavedData(){this.loadingIndicator=!0;const a=this.constant.serviceName_GETSAVEDATA,o={...this.dataService.commonInputData(),[this.constant.key_ID]:this.pageId?.nativeElement?.value};this.httpService.callApiServices(a,o).subscribe({next:n=>{console.log("getsave data response::",n);const r=n.set.records;this.showDataTable="00"==n.responseParameter.opstatus,r&&(this.header=JSON.parse(r[1].header).filter(i=>null!==i).sort((i,p)=>i.seqno-p.seqno).map(i=>i.labelname),this.content=JSON.parse(r[0].mapList).filter(i=>null!==i).map(i=>{const p={};return this.header.forEach((Z,M)=>{p[Z]=i["field"+(M+1)]||""}),p}),this.rows=[...this.content],console.log(this.rows),this.columns=this.header.map(i=>({name:i,prop:i})),console.log(this.columns)),setTimeout(()=>this.loadingIndicator=!1,1e3)}})}fetchPagesCreated(){const a=this.constant.serviceName_GETPAGESCREATED,o={...this.dataService.commonInputData()};this.httpService.callApiServices(a,o).subscribe({next:n=>{this.pages=n.set.records,console.log(n.set.records),this.fetchSavedData()}})}applyTemplate(a){this.selectedTemplateClass=a}}return(e=c).\u0275fac=function(a){return new(a||e)(t.Y36(v.$),t.Y36(g.D),t.Y36(f.c),t.Y36(D.f))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-getsaved-data"]],viewQuery:function(a,o){if(1&a&&t.Gf(C,5),2&a){let n;t.iGM(n=t.CRH())&&(o.pageId=n.first)}},decls:23,vars:2,consts:[[1,"main","bg-m"],[1,"right-main-column"],[1,"right-col-container","pad-b","full-width"],[1,"body-page-container","main-dashborad"],[1,"container-fluid"],[1,"row","no-gutters"],[1,"col-12"],[1,"row1"],[1,"col-12","col-sm-12","col-md-12","col-lg-12","col-xl-12"],[1,"card","mt-3"],[1,"card-body"],[1,"mb-3"],[1,"col-12","col-md-4","col-sm-12","col-lg-4","col-xl-4"],[1,"ux-input"],["for","type",1,"align-self-center"],[3,"change"],["pageId",""],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"rows","columns","loadingIndicator","selectedTemplateClass","search","changeTemplate",4,"ngIf"],[3,"value"],[3,"rows","columns","loadingIndicator","selectedTemplateClass","search","changeTemplate"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"h4",11),t._uU(12,"Saved Data"),t.qZA(),t.TgZ(13,"div",12)(14,"div",13)(15,"label",14),t._uU(16,"Search Page Data"),t.qZA(),t.TgZ(17,"select",15,16),t.NdJ("change",function(){return o.fetchSavedData()}),t.TgZ(19,"option",17),t._uU(20,"Select.."),t.qZA(),t.YNc(21,G,2,2,"option",18),t.qZA()()(),t.YNc(22,A,1,4,"app-datatable",19),t.qZA()()()()()()()()()()()),2&a&&(t.xp6(21),t.Q6J("ngForOf",o.pages),t.xp6(1),t.Q6J("ngIf",o.showDataTable))},dependencies:[m.sg,m.O5,d.YN,d.Kr,T.n]}),c})()}];let x=(()=>{var e;class c{}return(e=c).\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(S),u.Bz]}),c})();var E=l(9364),I=l(5597),b=l(9591);let w=(()=>{var e;class c{}return(e=c).\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,x,d.UX,d.u5,E.xD,I.uH,b.x]}),c})()}}]);