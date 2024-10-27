"use strict";(self.webpackChunklibrary_management_system=self.webpackChunklibrary_management_system||[]).push([[283],{2283:(E,g,u)=>{u.r(g),u.d(g,{AuthorModule:()=>Q});var l=u(3403),d=u(6814),h=u(8538),Z=u(9862),s=u(6223),m=u(7707),p=u(7700),t=u(9468);let _=(()=>{class n{constructor(e,o,r,i,c,j,f){this.authorService=e,this.route=o,this.router=r,this.fb=i,this.snackBar=c,this.dialogRef=j,this.data=f,this.authorId=null,this.author=null,this.authorId=f.authorId,this.authorForm=this.fb.group({firstname:["",s.kI.required],lastname:["",s.kI.required]})}ngOnInit(){this.authorId&&this.authorService.getAuthorById(this.authorId).subscribe(e=>{this.authorForm.patchValue({firstname:e.firstname,lastname:e.lastname})})}updateAuthor(){if(this.authorForm.valid&&this.authorId){const e={...this.authorForm.value};this.authorService.updateAuthor(this.authorId,e).subscribe(()=>{this.snackBar.open("Author updated successfully!","",{duration:2e3}),this.dialogRef.close()})}}onCancelClick(){this.dialogRef.close()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.Y),t.Y36(l.gz),t.Y36(l.F0),t.Y36(s.qu),t.Y36(m.ux),t.Y36(p.so),t.Y36(p.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-author-update"]],decls:20,vars:3,consts:[[1,"container","p-4","mat-dialog-content"],[1,"nav","nav-underline"],[1,"nav-item"],[1,"nav-link","active"],[3,"formGroup","ngSubmit"],[1,"mb-3","form-group"],["for","firstname",1,"form-label","fw-bold"],["id","firstname","type","text","formControlName","firstname","name","firstname","required","",1,"form-control"],["for","lastname",1,"form-label","fw-bold"],["id","lastname","type","text","formControlName","lastname","name","lastname","required","",1,"form-control"],["type","submit",1,"btn","btn-primary"],["type","button",1,"btn","btn-secondary","ms-3",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"ul",1)(2,"li",2)(3,"a",3),t._uU(4),t.qZA()()(),t._UZ(5,"hr"),t.TgZ(6,"form",4),t.NdJ("ngSubmit",function(){return o.updateAuthor()}),t.TgZ(7,"div",5)(8,"label",6),t._uU(9,"Name:"),t.qZA(),t._UZ(10,"input",7),t.qZA(),t.TgZ(11,"div",5)(12,"label",8),t._uU(13,"Surname:"),t.qZA(),t._UZ(14,"input",9),t.qZA(),t.TgZ(15,"div",5)(16,"button",10),t._uU(17,"Update Author"),t.qZA(),t.TgZ(18,"button",11),t.NdJ("click",function(){return o.onCancelClick()}),t._uU(19,"Cancel"),t.qZA()()()()),2&e&&(t.xp6(4),t.AsE("Update Author: ",o.authorForm.value.firstname," ",o.authorForm.value.lastname,""),t.xp6(2),t.Q6J("formGroup",o.authorForm))},dependencies:[s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u],styles:[".mat-dialog-content[_ngcontent-%COMP%]{max-height:95vh;overflow-y:auto}"]}),n})(),A=(()=>{class n{constructor(e,o,r,i){this.authorService=e,this.snackBar=o,this.dialogRef=r,this.router=i,this.authors=[],this.authorForm=new s.cw({firstname:new s.NI(""),lastname:new s.NI("",s.kI.required)})}onSubmit(){this.authorForm.valid&&this.authorService.createAuthor(this.authorForm.value).subscribe(e=>{this.authors.push(e),this.snackBar.open("Author created successfully!","",{duration:4e3}),this.dialogRef.close()})}onCancelClick(){this.dialogRef.close()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.Y),t.Y36(m.ux),t.Y36(p.so),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-author-insert"]],decls:17,vars:1,consts:[[1,"container","p-4","mat-dialog-content"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","firstname",1,"form-label"],["id","firstname","type","text","formControlName","firstname",1,"form-control"],["for","lastname",1,"form-label"],["id","lastname","type","text","formControlName","lastname",1,"form-control"],["type","submit",1,"btn","btn-success"],["type","button",1,"btn","btn-secondary","ms-3",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"Create Author"),t.qZA(),t.TgZ(3,"form",1),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(4,"div",2)(5,"label",3),t._uU(6,"Name:"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.TgZ(8,"div",2)(9,"label",5),t._uU(10,"Surname:"),t.qZA(),t._UZ(11,"input",6),t.qZA(),t.TgZ(12,"div",2)(13,"button",7),t._uU(14,"Create Author"),t.qZA(),t.TgZ(15,"button",8),t.NdJ("click",function(){return o.onCancelClick()}),t._uU(16,"Cancel"),t.qZA()()()()),2&e&&(t.xp6(3),t.Q6J("formGroup",o.authorForm))},dependencies:[s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:[".mat-dialog-content[_ngcontent-%COMP%]{max-height:95vh;overflow-y:auto}"]}),n})();var k=u(68);let C=(()=>{class n{constructor(e,o){this.authorService=e,this.snackBar=o,this.onDeleted=new t.vpe}deleteAuthor(){this.authorService.deleteAuthor(this.authorId).subscribe(()=>{console.log("Delete button clicked"),this.snackBar.open("Author deleted successfully!","",{duration:4e3}),this.onDeleted.emit()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.Y),t.Y36(m.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-author-delete"]],inputs:{authorId:"authorId"},outputs:{onDeleted:"onDeleted"},decls:2,vars:0,consts:[[1,"btn","btn-outline-danger","btn-sm","mx-1",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return o.deleteAuthor()}),t._uU(1,"Delete"),t.qZA())}}),n})(),T=(()=>{class n{constructor(e){this.authorService=e,this.authorFound=new t.vpe,this.lastname="",this.author=null}ngOnInit(){}search(){this.authorService.getAuthorByLastname(this.lastname).subscribe(e=>this.authorFound.emit(e),e=>console.error("Error fetching publisher by name:",e))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.Y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-author-search-by-lastname"]],outputs:{authorFound:"authorFound"},decls:4,vars:1,consts:[[1,"input-group"],["type","text","placeholder","Search by surname","aria-describedby","button-addon1",3,"ngModel","ngModelChange","keyup.enter"],["type","button","id","button-addon1",1,"btn","btn-outline-primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"input",1),t.NdJ("ngModelChange",function(i){return o.lastname=i})("keyup.enter",function(){return o.search()}),t.qZA(),t.TgZ(2,"button",2),t.NdJ("click",function(){return o.search()}),t._uU(3,"Search"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngModel",o.lastname))},dependencies:[s.Fj,s.JJ,s.On]}),n})();const v=function(n){return["/publisher/books-by-author",n]};function y(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"table",14)(2,"thead",15)(3,"tr")(4,"th"),t._uU(5,"Name"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Surname"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Action"),t.qZA()()(),t.TgZ(10,"tbody")(11,"tr")(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td")(17,"button",16),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.openUpdateDialog(r.searchedAuthor.authorId))}),t._uU(18,"Update"),t.qZA(),t.TgZ(19,"app-author-delete",17),t.NdJ("onDeleted",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.getAllAuthors())}),t.qZA(),t.TgZ(20,"button",18),t._uU(21),t.qZA()()()()(),t.TgZ(22,"button",19),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.backToAuthorsList())}),t.O4$(),t.TgZ(23,"svg",20),t._UZ(24,"path",21),t.qZA(),t._uU(25," Back to Users List"),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(13),t.Oqu(e.searchedAuthor.firstname),t.xp6(2),t.Oqu(e.searchedAuthor.lastname),t.xp6(4),t.Q6J("authorId",e.searchedAuthor.authorId),t.xp6(1),t.Q6J("routerLink",t.VKq(6,v,e.searchedAuthor.authorId)),t.xp6(1),t.AsE("View Books by ",e.searchedAuthor.firstname," ",e.searchedAuthor.lastname,"")}}const U=function(n){return["/author/books-by-author",n]};function x(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"button",16),t.NdJ("click",function(){const i=t.CHM(e).$implicit,c=t.oxw(2);return t.KtG(c.openUpdateDialog(i.authorId))}),t._uU(7,"Update"),t.qZA(),t.TgZ(8,"app-author-delete",17),t.NdJ("onDeleted",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.getAllAuthors())}),t.qZA(),t.TgZ(9,"button",18),t._uU(10),t.qZA()()()}if(2&n){const e=a.$implicit;t.xp6(2),t.Oqu(e.firstname),t.xp6(2),t.Oqu(e.lastname),t.xp6(4),t.Q6J("authorId",e.authorId),t.xp6(1),t.Q6J("routerLink",t.VKq(6,U,e.authorId)),t.xp6(1),t.AsE("View Books by ",e.firstname," ",e.lastname,"")}}function q(n,a){if(1&n&&(t.TgZ(0,"div")(1,"table",22)(2,"thead",15)(3,"tr")(4,"th"),t._uU(5,"Firstname"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Lastname"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Action"),t.qZA()()(),t.TgZ(10,"tbody"),t.YNc(11,x,11,8,"tr",23),t.qZA()()()),2&n){const e=t.oxw();t.xp6(11),t.Q6J("ngForOf",e.authors)}}function I(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"li",11)(1,"a",12),t.NdJ("click",function(){const i=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.onPageChange(i))}),t._uU(2),t.qZA()()}if(2&n){const e=a.$implicit,o=t.oxw();t.ekj("active",e===o.currentPage),t.xp6(2),t.Oqu(e+1)}}let B=(()=>{class n{constructor(e,o){this.authorService=e,this.dialog=o,this.authors=[],this.totalAuthors=0,this.pageSize=10,this.currentPage=0,this.pageNumbers=[],this.searchedAuthor=null}ngOnInit(){this.getAllAuthorsWithPagination(this.currentPage)}getAllAuthors(){this.authorService.getAllAuthors().subscribe(e=>{this.authors=e})}getAllAuthorsWithPagination(e){this.authorService.getAllAuthorsWithPagination(e,this.pageSize).subscribe({next:o=>{this.authors=o.content,this.totalAuthors=o.totalElements,this.pageNumbers=Array.from({length:o.totalPages},(r,i)=>i)},error:o=>{console.error("Error fetching authors:",o)}})}openUpdateDialog(e){this.dialog.open(_,{minWidth:"50%",autoFocus:!1,data:{authorId:e}}).afterClosed().subscribe(r=>{this.getAllAuthors()})}openCreateDialog(){this.dialog.open(A,{minWidth:"50%",autoFocus:!1,data:{authorId:null}}).afterClosed().subscribe(o=>{this.getAllAuthors()})}onPageChange(e){e>=0&&e<this.pageNumbers.length&&(this.currentPage=e,this.getAllAuthorsWithPagination(e))}displaySearchedAuthor(e){this.searchedAuthor=e}backToAuthorsList(){this.searchedAuthor=null}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.Y),t.Y36(p.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-authors-list"]],decls:24,vars:7,consts:[[1,"container"],[1,"nav","nav-tabs"],[1,"nav-item","display-6"],[1,"nav-link","active"],[1,"d-flex","mb-3"],[1,"btn","btn-success","mb-3",3,"click"],[1,"ms-auto"],[3,"authorFound"],[4,"ngIf"],["aria-label","User pagination",1,"mt-3"],[1,"pagination","justify-content-center"],[1,"page-item"],["href","javascript:void(0)",1,"page-link",3,"click"],["class","page-item",3,"active",4,"ngFor","ngForOf"],[1,"table","table-striped","table-hover","my-4"],[1,"table-dark"],[1,"btn","btn-outline-warning","btn-sm","mx-1",3,"click"],[1,"mx-1",3,"authorId","onDeleted"],[1,"btn","btn-outline-primary","btn-sm","mx-1",3,"routerLink"],[1,"btn","btn-secondary","mb-3",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-arrow-left"],["fill-rule","evenodd","d","M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"],[1,"table","table-striped","table-hover"],[4,"ngFor","ngForOf"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"ul",1)(2,"li",2)(3,"a",3),t._uU(4,"Authors"),t.qZA()()(),t._UZ(5,"br")(6,"app-statistics")(7,"hr"),t.TgZ(8,"div",4)(9,"button",5),t.NdJ("click",function(){return o.openCreateDialog()}),t._uU(10,"Add New Author"),t.qZA(),t.TgZ(11,"div",6)(12,"app-author-search-by-lastname",7),t.NdJ("authorFound",function(i){return o.displaySearchedAuthor(i)}),t.qZA()()(),t.YNc(13,y,26,8,"div",8),t.YNc(14,q,12,1,"div",8),t.TgZ(15,"nav",9)(16,"ul",10)(17,"li",11)(18,"a",12),t.NdJ("click",function(){return o.onPageChange(o.currentPage-1)}),t._uU(19,"Previous"),t.qZA()(),t.YNc(20,I,3,3,"li",13),t.TgZ(21,"li",11)(22,"a",12),t.NdJ("click",function(){return o.onPageChange(o.currentPage+1)}),t._uU(23,"Next"),t.qZA()()()()()),2&e&&(t.xp6(13),t.Q6J("ngIf",o.searchedAuthor),t.xp6(1),t.Q6J("ngIf",!o.searchedAuthor),t.xp6(3),t.ekj("disabled",0===o.currentPage),t.xp6(3),t.Q6J("ngForOf",o.pageNumbers),t.xp6(1),t.ekj("disabled",o.currentPage===o.totalAuthors/o.pageSize-1))},dependencies:[d.sg,d.O5,l.rH,k.B,C,T]}),n})();var F=u(9745),N=u(7319),b=u(405),J=u(3316);function S(n,a){if(1&n&&(t.TgZ(0,"h1",8)(1,"span",9),t._uU(2),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.AsE("Books by ",e.author.firstname," ",e.author.lastname,"")}}function Y(n,a){if(1&n&&(t.TgZ(0,"h4",10),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.HOy(" ",e.author.firstname," ",e.author.lastname," has ",e.books.length," ",1===e.books.length?"book":"books"," ")}}function L(n,a){if(1&n&&(t.TgZ(0,"h4",10),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.AsE(" ",null==e.author?null:e.author.firstname," ",null==e.author?null:e.author.lastname," has no books yet ")}}function O(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"button",11),t.NdJ("click",function(){const i=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.openUpdateDialog(i.bookId))}),t._uU(17,"Update"),t.qZA(),t.TgZ(18,"app-book-delete",12),t.NdJ("onDeleted",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.getBooksByAuthor(r.authorId))}),t.qZA()()()}if(2&n){const e=a.$implicit,o=t.oxw();t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(o.isAuthorObject(e.author)?e.author.firstname+" "+e.author.lastname:e.author),t.xp6(2),t.Oqu(e.isbn),t.xp6(2),t.Oqu(o.isPublisherObject(e.publisher)?e.publisher.name:e.publisher),t.xp6(2),t.Oqu(e.pages),t.xp6(2),t.Oqu(e.publicationYear),t.xp6(2),t.Oqu(e.quantity),t.xp6(4),t.Q6J("bookId",e.bookId)}}let w=(()=>{class n{constructor(e,o,r,i){this.authorService=e,this.bookService=o,this.dialog=r,this.route=i,this.books=[]}ngOnInit(){this.authorId=+this.route.snapshot.params.authorId,this.getBooksByAuthor(this.authorId),this.authorService.getAuthorById(this.authorId).subscribe(e=>{console.log("Author Data:",e),this.author=e},e=>{console.error("Error fetching author data!",e)})}getBooksByAuthor(e){this.authorService.findBooksByAuthorId(e).subscribe(o=>{this.books=o})}isPublisherObject(e){return e&&"object"==typeof e&&"name"in e}isAuthorObject(e){return e&&"object"==typeof e&&"firstname"in e&&"lastname"in e}openUpdateDialog(e){this.dialog.open(F.w,{minWidth:"50%",data:{bookId:e}}).afterClosed().subscribe(r=>{this.getBooksByAuthor(this.authorId)})}openCreateDialog(){this.dialog.open(N.v,{minWidth:"50%",data:{bookId:null}}).afterClosed().subscribe(o=>{this.getBooksByAuthor(this.authorId)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.Y),t.Y36(b.Z),t.Y36(p.uw),t.Y36(l.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-books-by-author"]],decls:29,vars:4,consts:[[1,"container"],["class","text-center display-5",4,"ngIf"],["class","text-center",4,"ngIf","ngIfElse"],["noBooks",""],[1,"btn","btn-success","mb-3",3,"click"],[1,"table","table-striped","table-hover"],[1,"table-dark"],[4,"ngFor","ngForOf"],[1,"text-center","display-5"],[1,"badge","bg-dark"],[1,"text-center"],[1,"btn","btn-outline-warning","btn-sm","mx-1",3,"click"],[3,"bookId","onDeleted"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,S,3,2,"h1",1),t.YNc(2,Y,2,4,"h4",2),t.YNc(3,L,2,2,"ng-template",null,3,t.W1O),t._UZ(5,"hr"),t.TgZ(6,"button",4),t.NdJ("click",function(){return o.openCreateDialog()}),t._uU(7,"Add new book"),t.qZA(),t.TgZ(8,"table",5)(9,"thead",6)(10,"tr")(11,"th"),t._uU(12,"Title"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Author"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"ISBN"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Publisher"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"Pages"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Publication Year"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Quantity"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Actions"),t.qZA()()(),t.TgZ(27,"tbody"),t.YNc(28,O,19,8,"tr",7),t.qZA()()()),2&e){const r=t.MAs(4);t.xp6(1),t.Q6J("ngIf",o.author),t.xp6(1),t.Q6J("ngIf",o.author&&o.books.length>0)("ngIfElse",r),t.xp6(26),t.Q6J("ngForOf",o.books)}},dependencies:[d.sg,d.O5,J.G]}),n})();var D=u(5200),M=u(5605);const P=[{path:"",redirectTo:"authors-list",pathMatch:"full"},{path:"authors-list",component:B},{path:"books-by-author/:authorId",component:w},{path:"create-author",component:A},{path:"update-author/:authorId",component:_}];let Q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[h.Y,b.Z],imports:[d.ez,Z.JF,l.Bz.forChild(P),s.UX,m.ZX,p.Is,D.BookModule,s.u5,M.p,l.Bz]}),n})()}}]);