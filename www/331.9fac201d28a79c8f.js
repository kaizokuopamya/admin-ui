"use strict";(self.webpackChunkadmin_ui=self.webpackChunkadmin_ui||[]).push([[331],{4331:(M,g,s)=>{s.r(g),s.d(g,{DynamicTextinputModule:()=>C});var u=s(6814),d=s(5628),a=s(95),y=s(590),t=s(4769),Z=s(1521),_=s(788),h=s(2848),f=s(3058),v=s(5597);function T(e,r){1&e&&(t.TgZ(0,"p",47),t._uU(1," Name is required! "),t.qZA())}function x(e,r){1&e&&(t.TgZ(0,"p",47),t._uU(1," Type is required! "),t.qZA())}function b(e,r){1&e&&(t.TgZ(0,"p",47),t._uU(1," Description is required! "),t.qZA())}function q(e,r){if(1&e){const i=t.EpF();t.TgZ(0,"button",57),t.NdJ("click",function(){t.CHM(i);const o=t.oxw().index,c=t.oxw(2);return t.KtG(c.viewValues(o))}),t._UZ(1,"fa-icon",58),t.qZA()}if(2&e){const i=t.oxw(3);t.xp6(1),t.Q6J("icon",i.faEye)}}function A(e,r){if(1&e){const i=t.EpF();t.TgZ(0,"button",59),t.NdJ("click",function(){t.CHM(i);const o=t.oxw().index,c=t.oxw(2);return t.KtG(c.viewValuesviaServer(o))}),t._UZ(1,"fa-icon",60),t.qZA()}if(2&e){const i=t.oxw(3);t.xp6(1),t.Q6J("icon",i.faLocationArrow)}}function D(e,r){if(1&e&&(t.TgZ(0,"tbody",50)(1,"tr")(2,"th",53),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"titlecase"),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"div",54),t.YNc(15,q,2,1,"button",55),t.YNc(16,A,2,1,"button",56),t.qZA()()()()),2&e){const i=r.$implicit,n=r.index,o=t.oxw(2);t.xp6(3),t.Oqu(n+1),t.xp6(2),t.Oqu(i.dropDownName),t.xp6(2),t.Oqu(t.lcZ(8,7,i.type)),t.xp6(3),t.Oqu(i.description),t.xp6(2),t.Oqu(i.class),t.xp6(3),t.Q6J("ngIf",o.isIconVisible(i.type)),t.xp6(1),t.Q6J("ngIf",o.isIconVisible(i.type))}}function U(e,r){if(1&e&&(t.TgZ(0,"div",10)(1,"div",11),t._uU(2,"Master Elements"),t.qZA(),t.TgZ(3,"div",48)(4,"table",49)(5,"thead",50)(6,"tr")(7,"th",51),t._uU(8,"Id"),t.qZA(),t.TgZ(9,"th",51),t._uU(10,"Name"),t.qZA(),t.TgZ(11,"th",51),t._uU(12,"Type"),t.qZA(),t.TgZ(13,"th",51),t._uU(14,"Description"),t.qZA(),t.TgZ(15,"th",51),t._uU(16,"Class"),t.qZA(),t.TgZ(17,"th",51),t._uU(18,"Action"),t.qZA()()(),t.YNc(19,D,17,9,"tbody",52),t.qZA()()()),2&e){const i=t.oxw();t.xp6(19),t.Q6J("ngForOf",i.dynamicInput)}}const I=[{path:"",component:(()=>{var e;class r{constructor(n,o,c,p,l,m){this.fb=n,this.httpService=o,this.constant=c,this.dataService=p,this.router=l,this.storage=m,this.faEye=y.Mdf,this.faLocationArrow=y.$40,this.dynamicInput=[],this.masterElementList=[],this.error=""}ngOnInit(){this.dynamicInputForm=this.fb.group({dropDownName:["",a.kI.required],type:["",a.kI.required],description:["",a.kI.required],class:["",a.kI.required],functionalities:["",a.kI.required],mandatory:["",a.kI.required],validationMessage:["",a.kI.required]}),this.dynamicInput=JSON.parse(this.storage.getLocalStorage("masterelementlist"))}isIconVisible(n){return["checkbox","dropdown","radio"].includes(n)}viewValues(n){const o=JSON.parse(this.storage.getLocalStorage("masterelementlist"));this.storage.setLocalStorage("input",JSON.stringify(o[n])),this.dataService.goToPage("dropdownData")}viewValuesviaServer(n){this.dataService.goToPage("dropdownDatawithServer")}createElement(){const n=this.dynamicInputForm.value;console.log(n);const o=this.constant.serviceName_CREATEDROPDOWN,c={...this.dataService.commonInputData(),[this.constant.key_dropDownName]:n.dropDownName,[this.constant.key_type]:n.type,[this.constant.key_DESCRIPTION]:n.description,[this.constant.key_class]:n.class,[this.constant.key_functionalities]:n.functionalities,[this.constant.key_mandatory]:n.mandatory?"Y":"N",[this.constant.key_errorMessage]:n.validationMessage,[this.constant.key_typeofreq]:"M"};this.httpService.callApiServices(o,c).subscribe({next:p=>{const l=p.responseParameter;"01"===l.opstatus&&(this.error=l.Result);const m=l.ID;if("00"===l.opstatus){this.masterElementList.push({...n,id:m}),this.dataService.dynamicInput=this.masterElementList,console.log(this.masterElementList),this.storage.setLocalStorage("masterelementlist",JSON.stringify(this.masterElementList));const w=this.storage.getLocalStorage("masterelementlist");this.dynamicInput=JSON.parse(w),console.log(this.dynamicInput)}}}),this.dynamicInputForm.reset()}}return(e=r).\u0275fac=function(n){return new(n||e)(t.Y36(a.qu),t.Y36(Z.c),t.Y36(_.$),t.Y36(h.D),t.Y36(d.F0),t.Y36(f.n))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dynamic-textinput"]],decls:90,vars:6,consts:[[1,"main","bg-m"],[1,"right-main-column"],[1,"right-col-container","pad-b","full-width"],[1,"body-page-container","main-dashborad"],[1,"container-fluid"],[1,"row","no-gutters"],[1,"col-12"],[1,"row1"],[1,"col-12","col-sm-12","col-md-12","col-lg-12","col-xl-12"],[3,"formGroup"],[1,"card","mt-3"],[1,"card-header","bg-primary","text-white"],[1,"card-body"],[1,"col-12","col-md-6","col-lg-6","col-xl-6"],[1,"ux-input"],["for","dropDownName"],[1,"mandatory"],["id","dropDownName","type","text","formControlName","dropDownName","placeholder","Master Element Name","required",""],["class","text-danger",4,"ngIf"],["for","type"],["formControlName","type","id","type"],["value",""],["value","text"],["value","grid"],["value","number"],["value","password"],["value","tel"],["value","date"],["value","dropdown"],["value","radio"],["value","checkbox"],["for","description"],["id","description","type","text","formControlName","description","placeholder","Master Element Description","required",""],["for","class"],["id","class","type","text","formControlName","class","placeholder","Master Element Class"],["for","functionalities"],["id","functionalities","type","text","formControlName","functionalities","placeholder","Master Element functionalities"],["for","validationMessage"],["id","validationMessage","type","text","formControlName","validationMessage","placeholder","Master Element Validation Message"],[1,"col-12","col-md-6","col-lg-6","col-xl-6","mt-4"],[1,"ux-input","d-flex"],["id","mandatory","type","checkbox","formControlName","mandatory",1,"mx-2","p-2","align-self-center"],["for","mandatory"],[1,"d-flex","justify-content-center"],["type","button",1,"ux-button","btn","btn-success",3,"click"],[1,"text-danger","text-xl"],["class","card mt-3",4,"ngIf"],[1,"text-danger"],[1,"card-body","table-responsive"],[1,"table","table-bordered","table-hover","table-striped"],[1,"text-center"],["scope","col"],["class","text-center",4,"ngFor","ngForOf"],["scope","row"],["role","group",1,"btn-group"],["class","btn btn-primary rounded-circle mr-2","type","button",3,"click",4,"ngIf"],["class","btn btn-primary rounded-circle","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary","rounded-circle","mr-2",3,"click"],["title","Click to insert values",3,"icon"],["type","button",1,"btn","btn-primary","rounded-circle",3,"click"],["title","Click to insert values via server",3,"icon"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"form",9)(10,"div",10)(11,"div",11),t._uU(12,"Add Master Element"),t.qZA(),t.TgZ(13,"div",12)(14,"div",13)(15,"div",14)(16,"label",15),t._uU(17,"Name:"),t.TgZ(18,"span",16),t._uU(19,"*"),t.qZA()(),t._UZ(20,"input",17),t.YNc(21,T,2,0,"p",18),t.qZA()(),t.TgZ(22,"div",13)(23,"div",14)(24,"label",19),t._uU(25,"Input Type:"),t.TgZ(26,"span",16),t._uU(27,"*"),t.qZA()(),t.TgZ(28,"select",20)(29,"option",21),t._uU(30,"Select"),t.qZA(),t.TgZ(31,"option",22),t._uU(32,"Textbox"),t.qZA(),t.TgZ(33,"option",23),t._uU(34,"Grid"),t.qZA(),t.TgZ(35,"option",24),t._uU(36,"Number"),t.qZA(),t.TgZ(37,"option",25),t._uU(38,"Password"),t.qZA(),t.TgZ(39,"option",26),t._uU(40,"Telephone"),t.qZA(),t.TgZ(41,"option",27),t._uU(42,"Date"),t.qZA(),t.TgZ(43,"option",28),t._uU(44,"Dropdown"),t.qZA(),t.TgZ(45,"option",29),t._uU(46,"Radio"),t.qZA(),t.TgZ(47,"option",30),t._uU(48,"Checkbox"),t.qZA()(),t.YNc(49,x,2,0,"p",18),t.qZA()(),t.TgZ(50,"div",13)(51,"div",14)(52,"label",31),t._uU(53,"Description:"),t.TgZ(54,"span",16),t._uU(55,"*"),t.qZA()(),t._UZ(56,"input",32),t.YNc(57,b,2,0,"p",18),t.qZA()(),t.TgZ(58,"div",13)(59,"div",14)(60,"label",33),t._uU(61,"Class:"),t.TgZ(62,"span",16),t._uU(63,"*"),t.qZA()(),t._UZ(64,"input",34),t.qZA()(),t.TgZ(65,"div",13)(66,"div",14)(67,"label",35),t._uU(68,"Functionalities:"),t.qZA(),t._UZ(69,"input",36),t.qZA()(),t.TgZ(70,"div",13)(71,"div",14)(72,"label",37),t._uU(73,"Validation Message:"),t.qZA(),t._UZ(74,"input",38),t.qZA()(),t.TgZ(75,"div",39)(76,"div",40),t._UZ(77,"input",41),t.TgZ(78,"label",42),t._uU(79,"Is this element field Mandatory"),t.qZA()()(),t.TgZ(80,"div",39)(81,"div",43)(82,"button",44),t.NdJ("click",function(){return o.createElement()}),t._uU(83,"Save"),t.qZA()()(),t.TgZ(84,"div",39)(85,"p",45),t._uU(86),t.qZA()()()()()()(),t.TgZ(87,"div",7)(88,"div",8),t.YNc(89,U,20,1,"div",46),t.qZA()()()()()()()()()),2&n&&(t.xp6(9),t.Q6J("formGroup",o.dynamicInputForm),t.xp6(12),t.Q6J("ngIf",o.dynamicInputForm.controls.dropDownName.touched&&o.dynamicInputForm.controls.dropDownName.hasError("required")),t.xp6(28),t.Q6J("ngIf",o.dynamicInputForm.controls.type.touched&&o.dynamicInputForm.controls.type.hasError("required")),t.xp6(8),t.Q6J("ngIf",o.dynamicInputForm.controls.description.touched&&o.dynamicInputForm.controls.description.hasError("required")),t.xp6(29),t.Oqu(o.error),t.xp6(3),t.Q6J("ngIf",o.dynamicInput.length>0))},dependencies:[u.sg,u.O5,a._Y,a.YN,a.Kr,a.Fj,a.Wl,a.EJ,a.JJ,a.JL,a.Q7,a.sg,a.u,v.BN,u.rS],styles:["tr[_ngcontent-%COMP%]{line-height:1.5rem;min-height:1.5rem;height:1.5rem}"]}),r})()}];let N=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(I),d.Bz]}),r})(),C=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,N,a.UX,a.u5,v.uH]}),r})()}}]);