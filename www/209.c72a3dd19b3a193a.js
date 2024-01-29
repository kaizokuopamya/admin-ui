"use strict";(self.webpackChunkadmin_ui=self.webpackChunkadmin_ui||[]).push([[209],{3209:(S,f,s)=>{s.r(f),s.d(f,{DropdownDataModule:()=>N});var m=s(6814),p=s(5628),i=s(95),d=s(590),t=s(4769),g=s(1521),D=s(788),b=s(9831),_=s(2848),Z=s(3058),v=s(5597);function x(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"tbody",21)(1,"tr",26)(2,"td",27),t._UZ(3,"input",28),t.qZA(),t.TgZ(4,"td",27),t._UZ(5,"input",29),t.qZA(),t.TgZ(6,"td",27),t._UZ(7,"input",30),t.qZA(),t.TgZ(8,"td",27)(9,"button",31),t.NdJ("click",function(){t.CHM(a);const n=t.oxw(2);return t.KtG(n.addValue())}),t._UZ(10,"fa-icon",32),t.qZA(),t.TgZ(11,"button",33),t.NdJ("click",function(){const c=t.CHM(a).index,l=t.oxw(2);return t.KtG(l.removeValue(c))}),t._UZ(12,"fa-icon",32),t.qZA()()()()}if(2&e){const a=r.index,o=t.oxw(2);t.xp6(1),t.Q6J("formGroupName",a),t.xp6(9),t.Q6J("icon",o.faCirclePlus),t.xp6(2),t.Q6J("icon",o.faTrash)}}function y(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"form",18)(1,"div",19)(2,"table",20)(3,"thead",21)(4,"tr")(5,"th"),t._uU(6,"KEY"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"VALUE"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"DESCRIPTION"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"ACTION"),t.qZA()()(),t.YNc(13,x,13,3,"tbody",22),t.qZA()(),t.TgZ(14,"div",23)(15,"button",24),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return t.KtG(n.resetValue())}),t._uU(16," Reset "),t.qZA(),t.TgZ(17,"button",25),t.NdJ("click",function(){t.CHM(a);const n=t.oxw();return t.KtG(n.saveValues())}),t._uU(18," Save "),t.qZA()()()}if(2&e){const a=t.oxw();t.Q6J("formGroup",a.dynamicValuesForm),t.xp6(13),t.Q6J("ngForOf",a.values.controls)}}function A(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"tbody",21)(1,"tr")(2,"td")(3,"p",37),t._uU(4),t.qZA()(),t.TgZ(5,"td")(6,"p",37),t._uU(7),t.qZA()(),t.TgZ(8,"td")(9,"p",37),t._uU(10),t.qZA()(),t.TgZ(11,"td")(12,"p",37),t._uU(13),t.qZA()(),t.TgZ(14,"td")(15,"button",38),t.NdJ("click",function(){t.CHM(a);const n=t.oxw(2);return t.KtG(n.editValues())}),t._UZ(16,"fa-icon",32),t.qZA()()()()}if(2&e){const a=r.$implicit,o=r.index,n=t.oxw(2);t.xp6(4),t.Oqu(o+1),t.xp6(3),t.Oqu(a.KEY),t.xp6(3),t.Oqu(a.VALUE),t.xp6(3),t.hij(" ",a.DESCRIPTION," "),t.xp6(3),t.Q6J("icon",n.faPen)}}function T(e,r){if(1&e&&(t.TgZ(0,"div",12)(1,"div",34),t._uU(2),t.qZA(),t.TgZ(3,"div",35)(4,"table",36)(5,"thead",21)(6,"tr")(7,"th"),t._uU(8,"#"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Key"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Value"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Description"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Action"),t.qZA()()(),t.YNc(17,A,17,5,"tbody",22),t.qZA()()()),2&e){const a=t.oxw();t.xp6(2),t.hij("Values of ",a.masterName,""),t.xp6(15),t.Q6J("ngForOf",a.resultSet)}}const w=[{path:"",component:(()=>{var e;class r{constructor(o,n,c,l,u,h,I){this.fb=o,this.httpService=n,this.constant=c,this.commonMethod=l,this.dataService=u,this.storage=h,this.router=I,this.faTrash=d.$aW,this.faPlus=d.r8p,this.faPen=d.IwR,this.faCirclePlus=d.EQ8,this.faArrowLeft=d.acZ,this.ID="",this.masterName="",this.resultSet=[],this.dynamicValuesForm=this.fb.group({values:this.fb.array([this.createValues()])}),this.values=this.dynamicValuesForm.get("values")}ngOnInit(){this.setInitialData(),this.getDropDownDetails()}setInitialData(){const o=this.storage.getLocalStorage("input");if(o){const n=JSON.parse(o);this.masterName=n.dropDownName,this.ID=n.id,this.storage.setLocalStorage("id",this.ID)}}getDropDownDetails(){const o=this.constant.serviceName_GETROPDOWNDETAILS;let n=this.createInputData();this.httpService.callApiServices(o,n).subscribe({next:c=>{this.resultSet=c.set.records||[]},error:c=>console.log(c)})}createValues(){return this.fb.group({key:["",i.kI.required],value:["",i.kI.required],description:["",i.kI.required]})}addValue(){this.values.push(this.createValues())}resetValue(){this.values.reset()}removeValue(o){const n=this.dynamicValuesForm.get("values");n.length>1?n.removeAt(o):n.reset()}editValues(){console.log("edit clicked")}createInputData(){return{...this.dataService.commonInputData(),[this.constant.key_ID]:this.storage.getLocalStorage("id")}}saveValues(){const o=this.values.controls.map(l=>["key","value","description"].map(h=>l.get(h)?.value).join("#")).join("~"),n=this.constant.serviceName_CREATEDROPDOWNDETAILS;let c={...this.createInputData(),[this.constant.key_value]:o};this.httpService.callApiServices(n,c).subscribe({next:l=>{const u=l.responseParameter;"00"===u.opstatus?(this.commonMethod.openPopup("div.popup-bottom.success-popup"),this.dataService.information=u.Result,this.ngOnInit()):(this.commonMethod.openPopup("div.popup-bottom.error-popup"),this.dataService.information="Unable to Save Values",this.dataService.informationLabel=u.Result)},error:l=>console.log(l)})}}return(e=r).\u0275fac=function(o){return new(o||e)(t.Y36(i.qu),t.Y36(g.c),t.Y36(D.$),t.Y36(b.v),t.Y36(_.D),t.Y36(Z.n),t.Y36(p.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dropdown-data"]],decls:21,vars:4,consts:[[1,"main","bg-m"],[1,"right-main-column"],[1,"right-col-container","pad-b","full-width"],[1,"body-page-container","main-dashborad"],[1,"container-fluid"],[1,"row","no-gutters"],[1,"col-12"],[1,"row1"],[1,"col-12","col-sm-12","col-md-12","col-lg-12","col-xl-12"],[1,"d-flex","justify-content-end"],["type","button","routerLink","/dynamicInput",1,"px-4","mt-3","bg-primary","border-0"],["title","Previous Page",3,"icon"],[1,"card","mt-3"],[1,"card-header","bg-primary","text-white"],[1,"card-body"],[1,"mb-4"],[3,"formGroup",4,"ngIf"],["class","card mt-3",4,"ngIf"],[3,"formGroup"],[1,"table-responsive"],["formArrayName","values",1,"table","table-bordered","table-hover","table-striped","bg-light"],[1,"text-center"],["class","text-center",4,"ngFor","ngForOf"],[1,"col-12","mt-3","d-flex","justify-content-between"],["type","button",1,"ux-button","btn","btn-secondary","mx-4",3,"click"],["type","button",1,"ux-button","btn","btn-success",3,"click"],[3,"formGroupName"],[1,"ux-input"],["type","text","placeholder","Enter Key","formControlName","key"],["type","text","placeholder","Enter Value","formControlName","value"],["type","text","placeholder","Enter Description","formControlName","description"],["type","button",1,"btn","btn-primary","rounded-circle","mx-2",3,"click"],[3,"icon"],["type","button",1,"btn","btn-danger","rounded-circle",3,"click"],[1,"card-header"],[1,"card-body","table-responsive"],[1,"table","table-bordered","table-hover","table-striped","align-middle","mb-0","bg-light"],[1,"fw-normal","mb-1"],["type","button",1,"btn","btn-primary","rounded-circle",3,"click"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"button",10),t._UZ(11,"fa-icon",11),t.qZA()(),t.TgZ(12,"div",12)(13,"div",13),t._uU(14,"Master Element Values"),t.qZA(),t.TgZ(15,"div",14)(16,"div",8)(17,"h4",15),t._uU(18),t.qZA()(),t.YNc(19,y,19,2,"form",16),t.qZA()(),t.YNc(20,T,18,2,"div",17),t.qZA()()()()()()()()()),2&o&&(t.xp6(11),t.Q6J("icon",n.faArrowLeft),t.xp6(7),t.hij("Name: ",n.masterName,""),t.xp6(1),t.Q6J("ngIf",0==n.resultSet.length),t.xp6(1),t.Q6J("ngIf",n.resultSet.length>0))},dependencies:[m.sg,m.O5,p.rH,v.BN,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,i.x0,i.CE]}),r})()}];let C=(()=>{var e;class r{}return(e=r).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(w),p.Bz]}),r})(),N=(()=>{var e;class r{}return(e=r).\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,C,v.uH,i.UX,i.u5]}),r})()}}]);