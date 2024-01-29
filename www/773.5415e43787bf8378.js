"use strict";(self.webpackChunkadmin_ui=self.webpackChunkadmin_ui||[]).push([[773],{8773:(ue,C,c)=>{c.r(C),c.d(C,{CreateMasterReportModule:()=>ce});var m=c(6814),g=c(5628),r=c(95),e=c(4769),q=c(8645),Z=c(9773),M=c(9080),f=c(1521),v=c(788),S=c(9831),h=c(2848),A=c(7398);let J=(()=>{var t;class a{constructor(n,o,i,s){this.httpService=n,this.constant=o,this.dataService=i,this.router=s}getDBDetails(n,o={}){const i={...this.dataService.commonInputData(),[this.constant.key_requestType]:n,...o};return this.httpService.callApiServices(this.constant.serviceName_GETDBDETAILS,i).pipe((0,A.U)(p=>p.set.records))}fetchDatabases(){this.getDBDetails("getOwners").subscribe(n=>this.dataService.databases=n)}fetchTables(n){this.getDBDetails("getTables",{[this.constant.key_name]:n}).subscribe(o=>this.dataService.tables=o)}fetchColumns(n){this.getDBDetails("getColumns",{[this.constant.key_name]:n}).subscribe(o=>this.dataService.columns=o)}getSingleTableReportData(n,o,i){return{...this.dataService.commonInputData(),[this.constant.key_name]:n,[this.constant.key_tableName]:o,[this.constant.key_queryType]:"select",[this.constant.key_columnName]:i.join(",")}}}return(t=a).\u0275fac=function(n){return new(n||t)(e.LFG(f.c),e.LFG(v.$),e.LFG(h.D),e.LFG(g.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),a})();var d=c(6304);function N(t,a){if(1&t&&(e.TgZ(0,"ng-option",10),e._uU(1),e.qZA()),2&t){const l=a.$implicit;e.Q6J("value",l.name),e.xp6(1),e.Oqu(l.name)}}function y(t,a){1&t&&(e.TgZ(0,"p",11),e._uU(1," Database is required! "),e.qZA())}function F(t,a){if(1&t&&(e.TgZ(0,"ng-option",10),e._uU(1),e.qZA()),2&t){const l=a.$implicit;e.Q6J("value",l.name),e.xp6(1),e.Oqu(l.name)}}function I(t,a){1&t&&(e.TgZ(0,"p",11),e._uU(1," Table is required! "),e.qZA())}function R(t,a){if(1&t){const l=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"label",12),e._uU(3,"Select Table"),e.qZA(),e.TgZ(4,"ng-select",13),e.NdJ("change",function(){e.CHM(l);const o=e.oxw();return e.KtG(o.masterService.fetchColumns(o.singleTableForm.value.tableName))}),e.YNc(5,F,2,2,"ng-option",6),e.qZA(),e.YNc(6,I,2,0,"p",7),e.qZA()()}if(2&t){const l=e.oxw();let n;e.xp6(5),e.Q6J("ngForOf",l.dataService.tables),e.xp6(1),e.Q6J("ngIf",(null==(n=l.singleTableForm.get("tableName"))?null:n.invalid)&&(null==(n=l.singleTableForm.get("tableName"))?null:n.touched))}}function U(t,a){if(1&t&&(e._UZ(0,"input",17),e._uU(1)),2&t){const l=a.item,n=a.item$;e.MGl("id","item-",a.index,""),e.Q6J("checked",n.selected),e.xp6(1),e.hij(" ",l.name," ")}}function Q(t,a){1&t&&(e.TgZ(0,"p",11),e._uU(1," Columns are required! "),e.qZA())}function j(t,a){if(1&t&&(e.TgZ(0,"div",1)(1,"div",2)(2,"label",14),e._uU(3,"Select Column"),e.qZA(),e.TgZ(4,"ng-select",15),e.YNc(5,U,2,3,"ng-template",16),e.qZA(),e.YNc(6,Q,2,0,"p",7),e.qZA()()),2&t){const l=e.oxw();let n;e.xp6(4),e.Q6J("items",l.dataService.columns)("multiple",!0)("selectableGroup",!0)("closeOnSelect",!1),e.xp6(2),e.Q6J("ngIf",(null==(n=l.singleTableForm.get("columns"))?null:n.invalid)&&(null==(n=l.singleTableForm.get("columns"))?null:n.touched))}}let Y=(()=>{var t;class a{constructor(n,o,i,s,p,u,_){this.fb=n,this.httpService=o,this.constant=i,this.commonMethod=s,this.dataService=p,this.masterService=u,this.router=_,this.name="",this.unsubscribe$=new q.x,this.singleTableForm=this.fb.group({database:["",r.kI.required],tableName:["",r.kI.required],columns:[[],r.kI.required]})}ngOnInit(){this.masterService.fetchDatabases()}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}createMasterReport(){const{tableName:n,columns:o}=this.singleTableForm.value;let i=this.masterService.getSingleTableReportData(this.name,n,o);this.httpService.callApiServices(this.constant.serviceName_CREATEREPORT,i).pipe((0,Z.R)(this.unsubscribe$)).subscribe({next:p=>{const u=p.responseParameter;this.handleApiResponse(u.opstatus,u.Result)},error:p=>{this.handleApiError(),console.error(p)}})}handleApiResponse(n,o){"00"===n?(this.commonMethod.openPopup("div.popup-bottom.success-popup"),this.dataService.information=`${this.name} Report Created`,(0,M.H)(2e3).pipe((0,Z.R)(this.unsubscribe$)).subscribe(()=>this.dataService.goToPage("generateMasterReport"))):(this.commonMethod.openPopup("div.popup-bottom.error-popup"),this.dataService.information=o,this.dataService.informationLabel="Unable to Create Report")}handleApiError(){this.dataService.informationLabel="Unable to Create Report",this.dataService.primaryBtnText="OK"}}return(t=a).\u0275fac=function(n){return new(n||t)(e.Y36(r.qu),e.Y36(f.c),e.Y36(v.$),e.Y36(S.v),e.Y36(h.D),e.Y36(J),e.Y36(g.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-single-table"]],inputs:{name:"name"},decls:15,vars:5,consts:[[3,"formGroup"],[1,"col-12","col-md-6","col-lg-6","col-xl-6"],[1,"ux-input"],["for","database",1,"align-self-center"],[1,"mandatory"],["labelForId","database","formControlName","database",3,"change"],[3,"value",4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],["class","col-12 col-md-6 col-lg-6 col-xl-6",4,"ngIf"],["type","button",1,"ux-button","btn","btn-success",3,"click"],[3,"value"],[1,"text-danger"],["for","tableName",1,"align-self-center"],["labelForId","tableName","formControlName","tableName",3,"change"],["for","columns",1,"align-self-center"],["bindLabel","name","bindValue","name","formControlName","columns",3,"items","multiple","selectableGroup","closeOnSelect"],["ng-option-tmp",""],["type","checkbox",3,"id","checked"]],template:function(n,o){if(1&n&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Get Databases "),e.TgZ(5,"span",4),e._uU(6,"*"),e.qZA()(),e.TgZ(7,"ng-select",5),e.NdJ("change",function(){return o.masterService.fetchTables(o.singleTableForm.value.database)}),e.YNc(8,N,2,2,"ng-option",6),e.qZA(),e.YNc(9,y,2,0,"p",7),e.qZA()(),e.YNc(10,R,7,2,"div",8),e.YNc(11,j,7,5,"div",8),e.TgZ(12,"div",1)(13,"button",9),e.NdJ("click",function(){return o.createMasterReport()}),e._uU(14," Create "),e.qZA()()()),2&n){let i;e.Q6J("formGroup",o.singleTableForm),e.xp6(8),e.Q6J("ngForOf",o.dataService.databases),e.xp6(1),e.Q6J("ngIf",(null==(i=o.singleTableForm.get("database"))?null:i.invalid)&&(null==(i=o.singleTableForm.get("database"))?null:i.touched)),e.xp6(1),e.Q6J("ngIf",o.singleTableForm.value.database),e.xp6(1),e.Q6J("ngIf",o.singleTableForm.value.tableName&&o.singleTableForm.value.database)}},dependencies:[m.sg,m.O5,d.w9,d.jq,d.ir,r._Y,r.JJ,r.JL,r.sg,r.u]}),a})();var b=c(590),x=c(5597);function w(t,a){if(1&t&&(e.TgZ(0,"ng-option",12),e._uU(1),e.qZA()),2&t){const l=a.$implicit;e.Q6J("value",l.name),e.xp6(1),e.Oqu(l.name)}}function k(t,a){1&t&&(e.TgZ(0,"p",13),e._uU(1," Database is required! "),e.qZA())}function E(t,a){if(1&t&&(e.TgZ(0,"ng-option",12),e._uU(1),e.qZA()),2&t){const l=a.$implicit;e.Q6J("value",l.name),e.xp6(1),e.Oqu(l.name)}}function D(t,a){1&t&&(e.TgZ(0,"p",13),e._uU(1," Table is required! "),e.qZA())}function $(t,a){if(1&t){const l=e.EpF();e.TgZ(0,"div",25)(1,"div",2)(2,"label",26),e._uU(3,"Select Table"),e.qZA(),e.TgZ(4,"ng-select",27),e.NdJ("change",function(){e.CHM(l);const o=e.oxw().$implicit,i=e.oxw(2);return e.KtG(i.masterService.fetchColumns(o.get("multiTable").value))}),e.YNc(5,E,2,2,"ng-option",6),e.qZA(),e.YNc(6,D,2,0,"p",7),e.qZA()()}if(2&t){const l=e.oxw().$implicit,n=e.oxw(2);e.xp6(4),e.Q6J("clearable",!1),e.xp6(1),e.Q6J("ngForOf",n.dataService.tables),e.xp6(1),e.Q6J("ngIf",l.get("multiTable").touched&&l.get("multiTable").hasError("required"))}}function O(t,a){if(1&t&&(e.TgZ(0,"ng-option",12),e._uU(1),e.qZA()),2&t){const l=a.$implicit;e.Q6J("value",l.name),e.xp6(1),e.Oqu(l.name)}}function G(t,a){1&t&&(e.TgZ(0,"p",13),e._uU(1," Column is required! "),e.qZA())}function L(t,a){if(1&t){const l=e.EpF();e.TgZ(0,"div",28)(1,"div",29)(2,"label",30),e._uU(3,"Select Column"),e.qZA(),e.TgZ(4,"ng-select",31),e.YNc(5,O,2,2,"ng-option",6),e.qZA(),e.YNc(6,G,2,0,"p",7),e.qZA(),e.TgZ(7,"div",32)(8,"button",33),e.NdJ("click",function(){e.CHM(l);const o=e.oxw().index,i=e.oxw(2);return e.KtG(i.getQueryMultipleTables(o))}),e._UZ(9,"fa-icon",19),e.qZA()()()}if(2&t){const l=e.oxw().$implicit,n=e.oxw(2);e.xp6(4),e.Q6J("clearable",!1),e.xp6(1),e.Q6J("ngForOf",n.dataService.columns),e.xp6(1),e.Q6J("ngIf",l.get("multiColumn").touched&&l.get("multiColumn").hasError("required")),e.xp6(3),e.Q6J("icon",n.faRotate)}}function B(t,a){if(1&t&&(e.TgZ(0,"ng-option",12),e._uU(1),e.qZA()),2&t){const l=a.$implicit;e.Q6J("value",l.table_name),e.xp6(1),e.hij(" ",l.table_name," ")}}function P(t,a){1&t&&(e.TgZ(0,"p",13),e._uU(1," Table is required! "),e.qZA())}function H(t,a){if(1&t&&(e.TgZ(0,"ng-option",12),e._uU(1),e.qZA()),2&t){const l=a.$implicit;e.Q6J("value",l),e.xp6(1),e.hij(" ",l," ")}}function K(t,a){1&t&&(e.TgZ(0,"p",13),e._uU(1," Column is required! "),e.qZA())}function z(t,a){if(1&t){const l=e.EpF();e.TgZ(0,"div",28)(1,"div",29)(2,"label",36),e._uU(3,"Select Column"),e.qZA(),e.TgZ(4,"ng-select",37),e.YNc(5,H,2,2,"ng-option",6),e.qZA(),e.YNc(6,K,2,0,"p",7),e.qZA(),e.TgZ(7,"div",32)(8,"button",38),e.NdJ("click",function(){e.CHM(l);const o=e.oxw(4);return e.KtG(o.addInnerJoinTable())}),e._UZ(9,"fa-icon",39),e.qZA()()()}if(2&t){const l=e.oxw(2),n=l.index,o=l.$implicit,i=e.oxw(2);e.xp6(4),e.Q6J("clearable",!1),e.xp6(1),e.Q6J("ngForOf",i.selectedTableColumns[n]),e.xp6(1),e.Q6J("ngIf",o.get("joinColumn").touched&&o.get("joinColumn").hasError("required")),e.xp6(3),e.Q6J("icon",i.faPlus)}}function X(t,a){if(1&t){const l=e.EpF();e.TgZ(0,"div",21)(1,"div",25)(2,"div",2)(3,"label",34),e._uU(4,"Join Table"),e.qZA(),e.TgZ(5,"ng-select",35),e.NdJ("change",function(){e.CHM(l);const o=e.oxw(),i=o.$implicit,s=o.index,p=e.oxw(2);return e.KtG(p.fetchColumnsForJoinTable(i.get("joinTable").value,s))}),e.YNc(6,B,2,2,"ng-option",6),e.qZA(),e.YNc(7,P,2,0,"p",7),e.qZA()(),e.YNc(8,z,10,4,"div",23),e.qZA()}if(2&t){const l=e.oxw(),n=l.index,o=l.$implicit,i=e.oxw(2);e.xp6(5),e.Q6J("clearable",!1),e.xp6(1),e.Q6J("ngForOf",i.joinTables[n]),e.xp6(1),e.Q6J("ngIf",o.get("joinTable").touched&&o.get("joinTable").hasError("required")),e.xp6(1),e.Q6J("ngIf",o.get("joinTable").value)}}function W(t,a){if(1&t){const l=e.EpF();e.TgZ(0,"div",15)(1,"div",16)(2,"h6",17),e._uU(3),e.qZA(),e.TgZ(4,"button",18),e.NdJ("click",function(){const i=e.CHM(l).index,s=e.oxw(2);return e.KtG(s.toggleIcon(i))}),e._UZ(5,"fa-icon",19),e.qZA()(),e.TgZ(6,"div",20)(7,"div",21),e.YNc(8,$,7,3,"div",22),e.YNc(9,L,10,4,"div",23),e.qZA(),e.YNc(10,X,9,4,"div",24),e.qZA()()}if(2&t){const l=a.$implicit,n=a.index,o=e.oxw(2);e.Q6J("formGroupName",n),e.xp6(3),e.hij("Multiple Report Table #",n+1,""),e.xp6(1),e.uIk("data-bs-target","#collapseExample"+(n+1)),e.xp6(1),e.Q6J("icon",o.toggleStates[n]?o.faChevronDown:o.faChevronUp),e.xp6(1),e.Q6J("id","collapseExample"+(n+1)),e.xp6(2),e.Q6J("ngIf",o.multipleTableForm.value.database),e.xp6(1),e.Q6J("ngIf",l.get("multiTable").value),e.xp6(1),e.Q6J("ngIf",(null==o.joinTables[n]?null:o.joinTables[n].length)>0)}}function V(t,a){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,W,11,8,"div",14),e.qZA()),2&t){const l=e.oxw();e.xp6(1),e.Q6J("ngForOf",l.innerJoinTable.controls)}}let ee=(()=>{var t;class a{constructor(n,o,i,s,p){this.dataService=n,this.masterService=o,this.fb=i,this.constant=s,this.httpService=p,this.faPlus=b.r8p,this.faRotate=b.go9,this.faChevronUp=b.mTx,this.faChevronDown=b.ptq,this.joinTables=[],this.selectedTableColumns=[],this.toggleStates=[],this.masterService.fetchDatabases(),this.multipleTableForm=this.fb.group({database:["",r.kI.required],innerJoinTable:this.fb.array([this.createInnerJoinTable()])}),this.innerJoinTable=this.multipleTableForm.get("innerJoinTable")}ngOnInit(){this.innerJoinTable.controls.forEach(()=>{this.toggleStates.push(!1)})}toggleIcon(n){this.toggleStates[n]=!this.toggleStates[n]}createInnerJoinTable(){return this.fb.group({multiTable:["",r.kI.required],multiColumn:["",r.kI.required],joinTable:["",r.kI.required],joinColumn:["",r.kI.required]})}fetchColumnsForJoinTable(n,o){const i=this.joinTables[o].find(s=>s.table_name===n);this.selectedTableColumns[o]=i?[i.column_name]:[]}addInnerJoinTable(){this.innerJoinTable.push(this.createInnerJoinTable())}getQueryMultipleTables(n){const o=this.innerJoinTable.at(n),{database:i}=this.multipleTableForm.value,{multiTable:s,multiColumn:p}=o.value,u=this.constant.serviceName_GETQUERYMULTIPLETABLES;let _={...this.dataService.commonInputData(),[this.constant.key_tableName]:s,[this.constant.key_ownerName]:i,[this.constant.key_columnName]:p};this.httpService.callApiServices(u,_).subscribe({next:T=>{this.joinTables[n]=T.set.records}})}createMasterReport(){let n="",o="";this.innerJoinTable.controls.forEach((s,p)=>{if(1==this.innerJoinTable.length){const{multiTable:u,multiColumn:_,joinTable:T,joinColumn:pe}=s.value;n=`${u} INNER JOIN ${T}`,o=`${u}.${_} = ${T}.${pe}`}});let i={...this.dataService.commonInputData(),[this.constant.key_name]:this.name,[this.constant.key_queryType]:"multiple",[this.constant.key_multipleSelect]:"*",[this.constant.key_multipleTables]:n,[this.constant.key_multipleWhere]:o};console.log(i)}}return(t=a).\u0275fac=function(n){return new(n||t)(e.Y36(h.D),e.Y36(J),e.Y36(r.qu),e.Y36(v.$),e.Y36(f.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-multiple-table"]],inputs:{name:"name"},decls:15,vars:4,consts:[[3,"formGroup"],[1,"col-12","col-md-6","col-lg-6","col-xl-6"],[1,"ux-input"],["for","database",1,"align-self-center"],[1,"mandatory"],["labelForId","database","formControlName","database",3,"change"],[3,"value",4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],["formArrayName","innerJoinTable"],[4,"ngIf"],[1,"col-12","col-md-6","col-lg-6","col-xl-6","mt-2"],["type","button",1,"ux-button","btn","btn-success",3,"click"],[3,"value"],[1,"text-danger"],["class","row mb-4 px-2 py-3 d-md-flex justify-content-md-between shadow-sm bg-white rounded",3,"formGroupName",4,"ngFor","ngForOf"],[1,"row","mb-4","px-2","py-3","d-md-flex","justify-content-md-between","shadow-sm","bg-white","rounded",3,"formGroupName"],[1,"clearfix"],[1,"float-start"],["type","button","data-bs-toggle","collapse","aria-expanded","false","aria-controls","collapseExample",1,"bg-light","border-0","mx-2","float-end",3,"click"],[3,"icon"],[1,"row","collapse","show",3,"id"],[1,"col-md-6","px-0"],["class","col-12 px-0 col-md-10 col-lg-10 col-xl-10",4,"ngIf"],["class","col-12 px-0 col-md-10 col-lg-10 col-xl-10 d-flex justify-content-between",4,"ngIf"],["class","col-md-6 px-0",4,"ngIf"],[1,"col-12","px-0","col-md-10","col-lg-10","col-xl-10"],["for","multiTable",1,"align-self-center"],["labelForId","multiTable","formControlName","multiTable",3,"clearable","change"],[1,"col-12","px-0","col-md-10","col-lg-10","col-xl-10","d-flex","justify-content-between"],[1,"ux-input","col-8","p-0"],["for","multiColumn",1,"align-self-center"],["labelForId","multiColumn","formControlName","multiColumn",3,"clearable"],[1,"col-2","align-self-center","px-0"],["data-bs-toggle","tooltip","data-bs-placement","bottom","data-bs-title","Click to fetch table",1,"btn","bg-primary","rounded","d-flex",3,"click"],["for","joinTable",1,"align-self-center"],["labelForId","joinTable","formControlName","joinTable",3,"clearable","change"],["for","joinColumn",1,"align-self-center"],["labelForId","joinColumn","formControlName","joinColumn",3,"clearable"],[1,"btn","bg-primary","rounded",3,"click"],["title","Click to Add More Columns",3,"icon"]],template:function(n,o){1&n&&(e.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),e._uU(4,"Get Databases "),e.TgZ(5,"span",4),e._uU(6,"*"),e.qZA()(),e.TgZ(7,"ng-select",5),e.NdJ("change",function(){return o.masterService.fetchTables(o.multipleTableForm.value.database)}),e.YNc(8,w,2,2,"ng-option",6),e.qZA(),e.YNc(9,k,2,0,"p",7),e.qZA()(),e.TgZ(10,"div",8),e.YNc(11,V,2,1,"div",9),e.qZA(),e.TgZ(12,"div",10)(13,"button",11),e.NdJ("click",function(){return o.createMasterReport()}),e._uU(14," Create "),e.qZA()()()),2&n&&(e.Q6J("formGroup",o.multipleTableForm),e.xp6(8),e.Q6J("ngForOf",o.dataService.databases),e.xp6(1),e.Q6J("ngIf",o.multipleTableForm.controls.database.touched&&o.multipleTableForm.controls.database.hasError("required")),e.xp6(2),e.Q6J("ngIf",o.multipleTableForm.value.database))},dependencies:[m.sg,m.O5,x.BN,d.w9,d.jq,r._Y,r.JJ,r.JL,r.sg,r.u,r.x0,r.CE]}),a})();function te(t,a){1&t&&(e.TgZ(0,"p",28),e._uU(1," Report Name is required! "),e.qZA())}function ne(t,a){if(1&t&&e._UZ(0,"app-single-table",30),2&t){const l=e.oxw(2);e.Q6J("name",l.masterReportForm.value.name)}}function le(t,a){if(1&t&&e._UZ(0,"app-multiple-table",30),2&t){const l=e.oxw(2);e.Q6J("name",l.masterReportForm.value.name)}}function oe(t,a){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,ne,1,1,"app-single-table",29),e.YNc(2,le,1,1,"app-multiple-table",29),e.qZA()),2&t){const l=e.oxw();e.xp6(1),e.Q6J("ngIf","single"===l.activeTab),e.xp6(1),e.Q6J("ngIf","multiple"===l.activeTab)}}const ae=[{path:"",component:(()=>{var t;class a{constructor(n){this.fb=n,this.activeTab="single",this.masterReportForm=this.fb.group({name:["",r.kI.required],queryType:["single",r.kI.required]})}toggleTableType(n){this.activeTab=n}}return(t=a).\u0275fac=function(n){return new(n||t)(e.Y36(r.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-create-master-report"]],decls:40,vars:3,consts:[[1,"main","bg-m"],[1,"right-main-column"],[1,"right-col-container","pad-b","full-width"],[1,"body-page-container","main-dashborad"],[1,"container-fluid"],[1,"row","no-gutters"],[1,"col-12"],[1,"row1"],[1,"col-12","col-sm-12","col-md-12","col-lg-12","col-xl-12"],[3,"formGroup"],[1,"card","mt-3"],[1,"card-header","bg-primary","text-white"],[1,"card-body","bg-light"],[1,"col-12","col-md-6","col-lg-6","col-xl-6"],[1,"ux-input"],["for","name"],[1,"mandatory"],["id","name","type","text","formControlName","name","placeholder","Enter Report Name","required",""],["class","text-danger",4,"ngIf"],[1,"col-12","col-md-12","col-lg-12","col-xl-12","mt-2"],[1,"d-flex","flex-row"],[1,"mr-3"],[1,"ux-selection","form-check"],["type","radio","id","table","name","queryType","formControlName","queryType","value","single",1,"form-check-input",3,"change"],["for","table",1,"form-check-label","p-0"],["type","radio","id","masterReport","name","queryType","formControlName","queryType","value","multiple",1,"form-check-input",3,"change"],["for","masterReport",1,"form-check-label","p-0"],[4,"ngIf"],[1,"text-danger"],[3,"name",4,"ngIf"],[3,"name"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"form",9)(10,"div",10)(11,"div",11),e._uU(12," Create Master Report "),e.qZA(),e.TgZ(13,"div",12)(14,"div",13)(15,"div",14)(16,"label",15),e._uU(17,"Report Name: "),e.TgZ(18,"span",16),e._uU(19,"*"),e.qZA()(),e._UZ(20,"input",17),e.YNc(21,te,2,0,"p",18),e.qZA()(),e.TgZ(22,"div",19)(23,"div",14)(24,"label"),e._uU(25,"Table Type: "),e.TgZ(26,"span",16),e._uU(27,"*"),e.qZA()(),e.TgZ(28,"div",20)(29,"div",21)(30,"div",22)(31,"input",23),e.NdJ("change",function(){return o.toggleTableType("single")}),e.qZA(),e.TgZ(32,"label",24),e._uU(33,"Single Table"),e.qZA()()(),e.TgZ(34,"div",21)(35,"div",22)(36,"input",25),e.NdJ("change",function(){return o.toggleTableType("multiple")}),e.qZA(),e.TgZ(37,"label",26),e._uU(38,"Multiple Table"),e.qZA()()()()()(),e.YNc(39,oe,3,2,"div",27),e.qZA()()()()()()()()()()()()),2&n&&(e.xp6(9),e.Q6J("formGroup",o.masterReportForm),e.xp6(12),e.Q6J("ngIf",o.masterReportForm.controls.name.touched&&o.masterReportForm.controls.name.hasError("required")),e.xp6(18),e.Q6J("ngIf","single"===o.activeTab||"multiple"===o.activeTab))},dependencies:[m.O5,r._Y,r.Fj,r._,r.JJ,r.JL,r.Q7,r.sg,r.u,Y,ee]}),a})()}];let ie=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild(ae),g.Bz]}),a})(),re=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.ez,d.A0,r.UX]}),a})(),se=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.ez,x.uH,d.A0,r.u5,r.UX]}),a})(),ce=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.ez,ie,r.u5,r.UX,x.uH,d.A0,re,se]}),a})()}}]);