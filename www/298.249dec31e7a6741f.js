"use strict";(self.webpackChunkadmin_ui=self.webpackChunkadmin_ui||[]).push([[298],{7298:(S,u,s)=>{s.r(u),s.d(u,{PageElementModule:()=>M});var m=s(6814),v=s(5628),f=s(590),p=s(454),e=s(4769),h=s(1521),_=s(788),x=s(2848),P=s(3058),d=s(95),E=s(5597);const D=["type"],C=["selectElement"];function O(n,c){if(1&n&&(e.TgZ(0,"option",31),e._uU(1),e.qZA()),2&n){const i=c.$implicit;e.Q6J("value",i.DROPDOWNNAME),e.xp6(1),e.hij(" ",i.DROPDOWNNAME," ")}}function Z(n,c){if(1&n){const i=e.EpF();e.TgZ(0,"div",35)(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"div",36),e._UZ(4,"fa-icon",37),e.TgZ(5,"fa-icon",38),e.NdJ("click",function(){const l=e.CHM(i).$implicit,r=e.oxw(2);return e.KtG(r.deleteElement(l))}),e.qZA()()()}if(2&n){const i=c.$implicit,t=e.oxw(2);e.xp6(2),e.Oqu(i.DROPDOWNNAME),e.xp6(2),e.Q6J("icon",t.faGripHorizontal),e.xp6(1),e.Q6J("icon",t.faClose)}}function T(n,c){if(1&n){const i=e.EpF();e.TgZ(0,"div",9)(1,"div",10),e._uU(2,"Selected Elements"),e.qZA(),e.TgZ(3,"div",11)(4,"div",32)(5,"div",33),e.NdJ("cdkDropListDropped",function(o){e.CHM(i);const l=e.oxw();return e.KtG(l.drop(o))}),e.YNc(6,Z,6,3,"div",34),e.qZA()(),e.TgZ(7,"div",12)(8,"button",29),e.NdJ("click",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.createPageElements())}),e._uU(9," Save "),e.qZA()()()()}if(2&n){const i=e.oxw();e.xp6(5),e.Q6J("cdkDropListData",i.selectedElements),e.xp6(1),e.Q6J("ngForOf",i.selectedElements)}}const b=[{path:"",component:(()=>{var n;class c{constructor(t,o,l,r){this.httpService=t,this.constant=o,this.dataService=l,this.storage=r,this.faGripHorizontal=f.BUU,this.faClose=f.YIN,this.response=[],this.elements=[],this.selectedElements=[],this.error=""}ngOnInit(){}getDropDown(t){t.preventDefault();let o={...this.dataService.commonInputData(),[this.constant.key_type]:this.type.nativeElement.value};this.httpService.callApiServices(this.constant.serviceName_GETDROPDOWN,o).subscribe({next:r=>{console.log(r);const a=r.responseParameter;"01"==a.opstatus&&(this.error=a.Result),this.elements=r.set.records,console.log(this.elements)}})}addElement(){const t=this.selectElement.nativeElement.value;console.log("elements :: ",JSON.stringify(this.elements)),t&&!this.selectedElements.find(o=>o.DROPDOWNNAME===t)?.DROPDOWNNAME&&(this.selectedElements=[...this.selectedElements,this.elements.find(o=>o.DROPDOWNNAME===t)],console.log(this.selectedElements),this.selectElement.nativeElement.value="")}deleteElement(t){const o=this.selectedElements.findIndex(l=>l.ID===t.ID);-1!==o&&this.selectedElements.splice(o,1)}drop(t){(0,p.bA)(t.container.data,t.previousIndex,t.currentIndex)}createPageElements(){console.log(JSON.stringify(this.selectedElements));const t=this.storage.getLocalStorage("pageId"),o=this.selectedElements.map((a,g)=>[(g+1).toString(),a.DROPDOWNNAME,a.ID,a.DESCRIPTION].join("#")).join("~");console.log("formatted array:: ",o);let l={...this.dataService.commonInputData(),[this.constant.key_ID]:t,[this.constant.key_value]:o};this.httpService.callApiServices(this.constant.serviceName_CREATEPAGEELEMENTS,l).subscribe({next:a=>{console.log(a)},error:a=>console.log(a)})}}return(n=c).\u0275fac=function(t){return new(t||n)(e.Y36(h.c),e.Y36(_.$),e.Y36(x.D),e.Y36(P.n))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-page-element"]],viewQuery:function(t,o){if(1&t&&(e.Gf(D,5),e.Gf(C,5)),2&t){let l;e.iGM(l=e.CRH())&&(o.type=l.first),e.iGM(l=e.CRH())&&(o.selectElement=l.first)}},decls:55,vars:2,consts:[[1,"main","bg-m"],[1,"right-main-column"],[1,"right-col-container","pad-b","full-width"],[1,"body-page-container","main-dashborad"],[1,"container-fluid"],[1,"row","no-gutters"],[1,"col-12"],[1,"row1"],[1,"col-12","col-sm-12","col-md-12","col-lg-12","col-xl-12"],[1,"card","mt-3"],[1,"card-header"],[1,"card-body"],[1,"col-md-6","col-lg-4","col-xl-4","col-12"],[1,"ux-input"],["for","elementType"],[1,"mandatory"],["id","elementType",3,"blur"],["type",""],["value",""],["value","text"],["value","number"],["value","password"],["value","tel"],["value","date"],["value","dropdown"],["value","radio"],["value","checkbox"],["selectElement",""],[3,"value",4,"ngFor","ngForOf"],["type","button",1,"ux-button",3,"click"],["class","card mt-3",4,"ngIf"],[3,"value"],["cdkDropListGroup","",1,"element-container","col-md-6","col-lg-4","col-xl-4","col-12"],["cdkDropList","",1,"element-list",3,"cdkDropListData","cdkDropListDropped"],["cdkDrag","","class","element",4,"ngFor","ngForOf"],["cdkDrag","",1,"element"],[1,"icon-group"],[1,"fa-grip",3,"icon"],[1,"fa-close",3,"icon","click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"form")(10,"div",9)(11,"div",10),e._uU(12,"Create Page Elements"),e.qZA(),e.TgZ(13,"div",11)(14,"div",12)(15,"div",13)(16,"label",14),e._uU(17,"Element Type:"),e.TgZ(18,"span",15),e._uU(19,"* "),e.qZA()(),e.TgZ(20,"select",16,17),e.NdJ("blur",function(r){return o.getDropDown(r)}),e.TgZ(22,"option",18),e._uU(23,"Select"),e.qZA(),e.TgZ(24,"option",19),e._uU(25,"Textbox"),e.qZA(),e.TgZ(26,"option",20),e._uU(27,"Number"),e.qZA(),e.TgZ(28,"option",21),e._uU(29,"Password"),e.qZA(),e.TgZ(30,"option",22),e._uU(31,"Telephone"),e.qZA(),e.TgZ(32,"option",23),e._uU(33,"Date"),e.qZA(),e.TgZ(34,"option",24),e._uU(35,"Dropdown"),e.qZA(),e.TgZ(36,"option",25),e._uU(37,"Radio"),e.qZA(),e.TgZ(38,"option",26),e._uU(39,"Checkbox"),e.qZA()()()(),e.TgZ(40,"div",12)(41,"div",13)(42,"label"),e._uU(43,"Element Name List"),e.qZA(),e.TgZ(44,"select",null,27)(46,"option",18),e._uU(47,"Select"),e.qZA(),e.YNc(48,O,2,2,"option",28),e.qZA()()(),e.TgZ(49,"div",12)(50,"button",29),e.NdJ("click",function(){return o.addElement()}),e._uU(51," Add "),e.qZA()()()()()()(),e.TgZ(52,"div",7)(53,"div",8),e.YNc(54,T,10,2,"div",30),e.qZA()()()()()()()()()),2&t&&(e.xp6(48),e.Q6J("ngForOf",o.elements),e.xp6(6),e.Q6J("ngIf",o.selectedElements.length>0))},dependencies:[m.sg,m.O5,d._Y,d.YN,d.Kr,d.JL,d.F,E.BN,p.Wj,p.Fd,p.Zt],styles:[".element-container[_ngcontent-%COMP%]{max-width:100%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.element-list[_ngcontent-%COMP%]{border:solid 1px #ccc;min-height:60px;background:white;border-radius:4px;overflow:hidden;display:block}.element[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:white;font-size:14px}.element[_ngcontent-%COMP%]:last-child{border:none}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.element-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.icon-group[_ngcontent-%COMP%]   .fa-grip[_ngcontent-%COMP%]{display:block;transition:display .5s ease}.icon-group[_ngcontent-%COMP%]   .fa-close[_ngcontent-%COMP%]{cursor:pointer;display:none}.fa-close[_ngcontent-%COMP%]:before, .fa-grip[_ngcontent-%COMP%]:before{display:none}.icon-group[_ngcontent-%COMP%]:hover   .fa-grip[_ngcontent-%COMP%]{display:none}.icon-group[_ngcontent-%COMP%]:hover   .fa-close[_ngcontent-%COMP%]{display:block}"]}),c})()}];let A=(()=>{var n;class c{}return(n=c).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[v.Bz.forChild(b),v.Bz]}),c})(),M=(()=>{var n;class c{}return(n=c).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,A,d.UX,d.u5,E.uH,p._t]}),c})()}}]);