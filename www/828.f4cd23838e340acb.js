"use strict";(self.webpackChunkadmin_ui=self.webpackChunkadmin_ui||[]).push([[828],{2828:(x,g,i)=>{i.r(g),i.d(g,{CreatePageModule:()=>A});var c=i(6814),p=i(5628),o=i(95),e=i(4769),u=i(1521),m=i(788),v=i(2848),h=i(3058);function f(t,n){1&t&&(e.TgZ(0,"p",26),e._uU(1," Page Name is required! "),e.qZA())}function C(t,n){1&t&&(e.TgZ(0,"p",26),e._uU(1," Description is required! "),e.qZA())}function P(t,n){if(1&t&&(e.TgZ(0,"div",27),e._UZ(1,"input",28),e.TgZ(2,"label",29),e._uU(3),e.ALo(4,"titlecase"),e.qZA()()),2&t){const s=n.$implicit;e.xp6(1),e.Q6J("id",s)("value",s.charAt(0).toUpperCase()),e.xp6(1),e.Q6J("for",s),e.xp6(1),e.Oqu(e.lcZ(4,4,s))}}const Z=[{path:"",component:(()=>{var t;class n{constructor(a,r,l,d,T,N){this.fb=a,this.httpService=r,this.constant=l,this.dataService=d,this.router=T,this.storage=N,this.message="",this.isErrorMessage=!1,this.responseData=[],this.encryption=["static","dynamic","rsa"],this.createPageForm=this.fb.group({pageName:["",o.kI.required],description:["",o.kI.required],isEncrypted:["S",o.kI.required]})}createPage(){const a=this.createPageForm.value;this.createPageForm.reset(),console.log(JSON.stringify(a));const r=this.constant.serviceName_CREATEPAGE;let l={...this.dataService.commonInputData(),[this.constant.key_pageName]:a.pageName,[this.constant.key_DESCRIPTION]:a.description,[this.constant.key_isEncrypted]:a.isEncrypted};console.log(l),this.httpService.callApiServices(r,l).subscribe({next:d=>{this.responseData=d.responseParameter,console.log(this.responseData),this.message=this.responseData.Result,this.storage.setLocalStorage("pageId",this.responseData.ID),this.dataService.goToPage("pageElement")},error:d=>console.log(d)})}}return(t=n).\u0275fac=function(a){return new(a||t)(e.Y36(o.qu),e.Y36(u.c),e.Y36(m.$),e.Y36(v.D),e.Y36(p.F0),e.Y36(h.n))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-create-page"]],decls:44,vars:7,consts:[[1,"main","bg-m"],[1,"right-main-column"],[1,"right-col-container","pad-b","full-width"],[1,"body-page-container","main-dashborad"],[1,"container-fluid"],[1,"row","no-gutters"],[1,"col-12"],[1,"row1"],[1,"col-12","col-sm-12","col-md-12","col-lg-12","col-xl-12"],[3,"formGroup"],[1,"card","mt-3"],[1,"card-header"],[1,"card-body"],[1,"col-12","col-md-6","col-lg-6","col-xl-6"],[1,"ux-input"],["for","pageName"],[1,"mandatory"],["id","pageName","type","text","formControlName","pageName","placeholder","Page Name","required",""],["class","text-danger",4,"ngIf"],["for","description"],["id","description","formControlName","description","placeholder","Page Description","required",""],[1,"col-12","col-md-6","col-lg-6","col-xl-6","mt-2"],["class","ux-selection d-flex justify-content-center",4,"ngFor","ngForOf"],["type","button",1,"ux-button","btn","btn-success",3,"disabled","click"],[1,"col-12","col-md-6","col-lg-6","col-xl-6","mt-4"],[3,"ngClass"],[1,"text-danger"],[1,"ux-selection","d-flex","justify-content-center"],["type","radio","formControlName","isEncrypted","name","isEncrypted",3,"id","value"],[1,"m-2","p-0",3,"for"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"form",9)(10,"div",10)(11,"div",11),e._uU(12,"Create Page"),e.qZA(),e.TgZ(13,"div",12)(14,"div",13)(15,"div",14)(16,"label",15),e._uU(17,"Page Name:"),e.TgZ(18,"span",16),e._uU(19,"*"),e.qZA()(),e._UZ(20,"input",17),e.YNc(21,f,2,0,"p",18),e.qZA()(),e.TgZ(22,"div",13)(23,"div",14)(24,"label",19),e._uU(25,"Description:"),e.TgZ(26,"span",16),e._uU(27,"*"),e.qZA()(),e._UZ(28,"textarea",20),e.YNc(29,C,2,0,"p",18),e.qZA()(),e.TgZ(30,"div",21)(31,"div",14)(32,"label"),e._uU(33,"Encryption Standard:"),e.TgZ(34,"span",16),e._uU(35,"*"),e.qZA()(),e.YNc(36,P,5,6,"div",22),e.qZA(),e._UZ(37,"br"),e.qZA(),e.TgZ(38,"div",13)(39,"button",23),e.NdJ("click",function(){return r.createPage()}),e._uU(40," Save "),e.qZA()(),e.TgZ(41,"div",24)(42,"p",25),e._uU(43),e.qZA()()()()()()()()()()()()()()),2&a&&(e.xp6(9),e.Q6J("formGroup",r.createPageForm),e.xp6(12),e.Q6J("ngIf",r.createPageForm.controls.pageName.touched&&r.createPageForm.controls.pageName.hasError("required")),e.xp6(8),e.Q6J("ngIf",r.createPageForm.controls.description.touched&&r.createPageForm.controls.description.hasError("required")),e.xp6(7),e.Q6J("ngForOf",r.encryption),e.xp6(3),e.Q6J("disabled",!r.createPageForm.valid),e.xp6(3),e.Q6J("ngClass","01"===r.responseData.opstatus?"text-danger":"text-success"),e.xp6(1),e.hij(" ",r.message," "))},dependencies:[c.mk,c.sg,c.O5,o._Y,o.Fj,o._,o.JJ,o.JL,o.Q7,o.sg,o.u,c.rS]}),n})()}];let y=(()=>{var t;class n{}return(t=n).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(Z),p.Bz]}),n})(),A=(()=>{var t;class n{}return(t=n).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,y,o.UX,o.u5]}),n})()}}]);