(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'M152';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routing/app-routing.module */ "./src/app/routing/app-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mat_mat_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat/mat.module */ "./src/app/mat/mat.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helloworld/helloworld.component */ "./src/app/helloworld/helloworld.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _nghome_nghome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nghome/nghome.component */ "./src/app/nghome/nghome.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _galleryitem_galleryitem_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./galleryitem/galleryitem.component */ "./src/app/galleryitem/galleryitem.component.ts");
/* harmony import */ var _mountain_mountain_list_mountain_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mountain/mountain-list/mountain-list.component */ "./src/app/mountain/mountain-list/mountain-list.component.ts");
/* harmony import */ var _mountain_mountain_item_mountain_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mountain/mountain-item/mountain-item.component */ "./src/app/mountain/mountain-item/mountain-item.component.ts");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./videos/videos.component */ "./src/app/videos/videos.component.ts");
/* harmony import */ var _videos_items_videos_items_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./videos-items/videos-items.component */ "./src/app/videos-items/videos-items.component.ts");
/* harmony import */ var _clubs_nlclubs_nlclubs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./clubs/nlclubs/nlclubs.component */ "./src/app/clubs/nlclubs/nlclubs.component.ts");
/* harmony import */ var _clubs_club_item_club_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clubs/club-item/club-item.component */ "./src/app/clubs/club-item/club-item.component.ts");
/* harmony import */ var _clubs_club_site_club_site_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./clubs/club-site/club-site.component */ "./src/app/clubs/club-site/club-site.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_6__["HelloworldComponent"],
                _nghome_nghome_component__WEBPACK_IMPORTED_MODULE_8__["NghomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _nghome_nghome_component__WEBPACK_IMPORTED_MODULE_8__["NghomeComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"],
                _galleryitem_galleryitem_component__WEBPACK_IMPORTED_MODULE_10__["GalleryitemComponent"],
                _mountain_mountain_list_mountain_list_component__WEBPACK_IMPORTED_MODULE_11__["MountainListComponent"],
                _mountain_mountain_item_mountain_item_component__WEBPACK_IMPORTED_MODULE_12__["MountainItemComponent"],
                _videos_videos_component__WEBPACK_IMPORTED_MODULE_13__["VideosComponent"],
                _videos_items_videos_items_component__WEBPACK_IMPORTED_MODULE_14__["VideosItemsComponent"],
                _clubs_nlclubs_nlclubs_component__WEBPACK_IMPORTED_MODULE_15__["NlclubsComponent"],
                _clubs_club_item_club_item_component__WEBPACK_IMPORTED_MODULE_16__["ClubItemComponent"],
                _clubs_club_site_club_site_component__WEBPACK_IMPORTED_MODULE_17__["ClubSiteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _mat_mat_module__WEBPACK_IMPORTED_MODULE_3__["MatModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clubs/club-item/club-item.component.css":
/*!*********************************************************!*\
  !*** ./src/app/clubs/club-item/club-item.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: 200px;\r\n    height: 200px;\r\n  }"

/***/ }),

/***/ "./src/app/clubs/club-item/club-item.component.html":
/*!**********************************************************!*\
  !*** ./src/app/clubs/club-item/club-item.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <mat-card>\n  <mat-card-title id=\"title\">{{ club.clubName }}</mat-card-title>\n  <img mat-card-image [src]=\"club.logo\" alt=\"{{ club.clubName }}\">\n  <div id=\"container\">\n    <div></div>\n    <div id=\"innerdiv\" class=\"86\">\n        <button mat-fab routerLink=\"{{ club.id }}\">\n          <mat-icon>arrow_forward</mat-icon>\n        </button>\n    </div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/clubs/club-item/club-item.component.ts":
/*!********************************************************!*\
  !*** ./src/app/clubs/club-item/club-item.component.ts ***!
  \********************************************************/
/*! exports provided: ClubItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubItemComponent", function() { return ClubItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _club_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../club.model */ "./src/app/clubs/club.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClubItemComponent = /** @class */ (function () {
    function ClubItemComponent() {
    }
    ClubItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _club_model__WEBPACK_IMPORTED_MODULE_1__["Club"])
    ], ClubItemComponent.prototype, "club", void 0);
    ClubItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-club-item',
            template: __webpack_require__(/*! ./club-item.component.html */ "./src/app/clubs/club-item/club-item.component.html"),
            styles: [__webpack_require__(/*! ./club-item.component.css */ "./src/app/clubs/club-item/club-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClubItemComponent);
    return ClubItemComponent;
}());



/***/ }),

/***/ "./src/app/clubs/club-site/club-site.component.css":
/*!*********************************************************!*\
  !*** ./src/app/clubs/club-site/club-site.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    padding-top: 50px;\r\n    text-align: center;\r\n  }\r\n  \r\n  #container {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    padding: 24px;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n    -ms-grid-rows: 1fr;\r\n        grid-template-rows: 1fr;\r\n    grid-column-gap: 24px;\r\n    grid-row-gap: 24px;\r\n  }\r\n  \r\n  #table {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    padding: 24px;\r\n    -ms-grid-columns: 3fr 4fr;\r\n        grid-template-columns: 3fr 4fr;\r\n    \r\n  }\r\n  \r\n  #table-item {\r\n    padding-top: 3px;\r\n    padding-left: 3px;\r\n    padding-bottom: 3px;\r\n    \r\n  }\r\n  \r\n  @media (min-width: 600px) {\r\n    #container {\r\n      -ms-grid-columns: 1fr 1fr;\r\n          grid-template-columns: 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1080px) {\r\n    #container {\r\n      -ms-grid-columns: 1fr 1fr 1fr;\r\n          grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/clubs/club-site/club-site.component.html":
/*!**********************************************************!*\
  !*** ./src/app/clubs/club-site/club-site.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <mat-card>\n    <mat-card-title id=\"title\">Leitung</mat-card-title>\n    <div id =\"table\">\n        <p style=\"font-weight: bold\" id=\"table-item\">CEO</p>\n        <p  id=\"table-item\">{{ club.ceo }}</p>\n        <p style=\"font-weight: bold\"  id=\"table-item\">Sportchef</p>\n        <p  id=\"table-item\">{{ club.manager }}</p>\n        <p style=\"font-weight: bold\"  id=\"table-item\">Coach</p>\n        <p  id=\"table-item\">{{ club.headcoach }}</p>\n        <p style=\"font-weight: bold\"  id=\"table-item\">Gründungsjahr</p>\n        <p  id=\"table-item\">{{ club.founding }}</p>\n    </div>\n  \n  </mat-card>\n  \n  <mat-card>\n    <mat-card-title id=\"title\">Stadion</mat-card-title>\n    <p style=\"color: grey;\">{{ club.stadium }}</p>\n    <div id =\"table\">\n        <p style=\"font-weight: bold\" id=\"table-item\">Sitzplätze</p>\n        <p  id=\"table-item\">{{ club.seats }}</p>\n        <p style=\"font-weight: bold\"  id=\"table-item\">Stehplätze</p>\n        <p  id=\"table-item\">{{ club.standings }}</p>\n        <p style=\"font-weight: bold\"  id=\"table-item\">Total</p>\n        <p  id=\"table-item\">{{ club.standings + club.seats }}</p>\n        \n    </div>\n  </mat-card>\n\n  <mat-card>\n      <mat-card-title id=\"title\">Meistertitel</mat-card-title>\n      <div id =\"table\">\n        <p  *ngFor=\"let item of club.championshipTitle\" id=\"table-item\">{{ item }}</p>\n          \n      </div>\n    </mat-card>\n\n\n    <div id =\"table\">\n        <p style=\"font-weight: bold\" id=\"table-item\">Adresse</p>\n        <p  id=\"table-item\">{{ club.address }} {{ club.zip }} {{ club.city }}</p>\n        <p style=\"font-weight: bold\"  id=\"table-item\">E-Mail Adresse</p>\n        <p  id=\"table-item\">{{ club.email }}</p>\n        \n    </div>\n\n    <div id =\"table\">\n        <img id=\"table-item\" [src]=\"club.logo\" alt=\"{{ club.clubName }}\" width=\"100%\">\n        <img id=\"table-item\" [src]=\"club.photo\" alt=\"{{ club.clubName }}\" width=\"200%\">\n        \n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/clubs/club-site/club-site.component.ts":
/*!********************************************************!*\
  !*** ./src/app/clubs/club-site/club-site.component.ts ***!
  \********************************************************/
/*! exports provided: ClubSiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubSiteComponent", function() { return ClubSiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _club_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../club.model */ "./src/app/clubs/club.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClubSiteComponent = /** @class */ (function () {
    function ClubSiteComponent(route) {
        this.route = route;
    }
    ClubSiteComponent.prototype.ngOnInit = function () {
        var id;
        id = this.route.snapshot.params['id'];
        this.club = new _club_model__WEBPACK_IMPORTED_MODULE_1__["Club"](id);
    };
    ClubSiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-club-site',
            template: __webpack_require__(/*! ./club-site.component.html */ "./src/app/clubs/club-site/club-site.component.html"),
            styles: [__webpack_require__(/*! ./club-site.component.css */ "./src/app/clubs/club-site/club-site.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ClubSiteComponent);
    return ClubSiteComponent;
}());



/***/ }),

/***/ "./src/app/clubs/club.model.ts":
/*!*************************************!*\
  !*** ./src/app/clubs/club.model.ts ***!
  \*************************************/
/*! exports provided: Club */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Club", function() { return Club; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");

var Club = /** @class */ (function () {
    function Club(id) {
        this.championshipTitle = new Array();
        for (var _i = 0, _a = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].clubs; _i < _a.length; _i++) {
            var club = _a[_i];
            if (club[0] === id) {
                this.id = club[0];
                this.clubName = club[1];
                this.founding = Number(club[2]);
                this.headcoach = club[3];
                this.ceo = club[4];
                this.manager = club[5];
                this.stadium = club[6];
                this.seats = Number(club[7]);
                this.standings = Number(club[8]);
                this.address = club[9];
                this.zip = club[10];
                this.city = club[11];
                this.email = club[12];
                this.logo = club[13];
                this.photo = club[14];
            }
        }
        for (var _b = 0, _c = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].championship; _b < _c.length; _b++) {
            var year = _c[_b];
            if (year[2] === id) {
                this.championshipTitle.push(Number(year[0]));
            }
        }
    }
    return Club;
}());



/***/ }),

/***/ "./src/app/clubs/nlclubs/nlclubs.component.css":
/*!*****************************************************!*\
  !*** ./src/app/clubs/nlclubs/nlclubs.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    padding-top: 50px;\r\n    text-align: center;\r\n  }\r\n  \r\n  #container {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    padding: 24px;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n    -ms-grid-rows: 1fr;\r\n        grid-template-rows: 1fr;\r\n    grid-column-gap: 24px;\r\n    grid-row-gap: 24px;\r\n  }\r\n  \r\n  @media (min-width: 600px) {\r\n    #container {\r\n      -ms-grid-columns: 1fr 1fr;\r\n          grid-template-columns: 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1080px) {\r\n    #container {\r\n      -ms-grid-columns: 1fr 1fr 1fr;\r\n          grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/clubs/nlclubs/nlclubs.component.html":
/*!******************************************************!*\
  !*** ./src/app/clubs/nlclubs/nlclubs.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <app-club-item *ngFor=\"let item of clubs.values()\" [club]=\"item\"></app-club-item>\n</div>"

/***/ }),

/***/ "./src/app/clubs/nlclubs/nlclubs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/clubs/nlclubs/nlclubs.component.ts ***!
  \****************************************************/
/*! exports provided: NlclubsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlclubsComponent", function() { return NlclubsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _club_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../club.model */ "./src/app/clubs/club.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NlclubsComponent = /** @class */ (function () {
    function NlclubsComponent(route) {
        this.route = route;
    }
    NlclubsComponent.prototype.ngOnInit = function () {
        this.clubs = new Map();
        for (var _i = 0, _a = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clubs; _i < _a.length; _i++) {
            var club = _a[_i];
            this.clubs.set(club[0], new _club_model__WEBPACK_IMPORTED_MODULE_2__["Club"](club[0]));
        }
    };
    NlclubsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nlclubs',
            template: __webpack_require__(/*! ./nlclubs.component.html */ "./src/app/clubs/nlclubs/nlclubs.component.html"),
            styles: [__webpack_require__(/*! ./nlclubs.component.css */ "./src/app/clubs/nlclubs/nlclubs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NlclubsComponent);
    return NlclubsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin-top: 80px !important;\n  width: 75%;\n  max-width: 300px;\n  margin: auto;\n}\n#container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 2fr 1fr;\n      grid-template-columns: 2fr 1fr;\n  text-align: right;\n}\nh1 {\n  padding-top: 50px;\n  text-align: center;\n}\na {\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>My Dashboard</h1>\n<mat-card>\n  <mat-card-title id=\"title\">Angular Startseite</mat-card-title>\n  <mat-card-content id=\"content\">Go To AngularStart!</mat-card-content>\n  <div id=\"container\">\n    <div></div>\n    <div id=\"innerdiv\" class=\"86\">\n        <button mat-fab routerLink=\"ng\">\n          <mat-icon>home</mat-icon>\n        </button>\n    </div>\n  </div>\n</mat-card>\n<mat-card>\n  <mat-card-title id=\"title\">Hello World Seite</mat-card-title>\n  <mat-card-content id=\"content\">Go To HelloWorld!</mat-card-content>\n  <div id=\"container\">\n    <div></div>\n    <div id=\"innerdiv\" class=\"86\">\n      <button mat-fab routerLink=\"hw\">\n        <mat-icon>bug_report</mat-icon>\n      </button>\n    </div>\n  </div>\n</mat-card>\n\n<mat-card>\n  <mat-card-title id=\"title\">Gallery Seite</mat-card-title>\n  <mat-card-content id=\"content\">Go To Gallery!</mat-card-content>\n  <div id=\"container\">\n    <div></div>\n    <div id=\"innerdiv\" class=\"86\">\n      <button mat-fab routerLink=\"gallery\">\n        <mat-icon>bug_report</mat-icon>\n      </button>\n    </div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  padding-top: 50px;\n  text-align: center;\n}\n\n#container {\n  display: -ms-grid;\n  display: grid;\n  padding: 24px;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  grid-column-gap: 24px;\n  grid-row-gap: 24px;\n}\n\n@media (min-width: 600px) {\n  #container {\n    -ms-grid-columns: 1fr 1fr;\n        grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (min-width: 1080px) {\n  #container {\n    -ms-grid-columns: 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Gallery</h1>\n<div id=\"container\" >\n  <app-galleryitem *ngFor=\"let mountain of mountains\" [imgUrl]=\"mountain.imgUrl\" [mountainName]=\"mountain.mountainName\" [mountainHeight]=\"mountain.mountainHeight\" ></app-galleryitem>\n</div>\n\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.mountains = [
            {
                mountainName: "Bristen",
                mountainHeight: "21000m",
                imgUrl: "../../assets/img/bristen.jpg"
            },
            {
                mountainName: "Generoso",
                mountainHeight: "25000",
                imgUrl: "../../assets/img/generoso.jpg"
            },
            {
                mountainName: "Säntis",
                mountainHeight: "24000",
                imgUrl: "../../assets/img/santis.jpg"
            },
            {
                mountainName: "Eiger",
                mountainHeight: "24000",
                imgUrl: "../../assets/img/eiger.jpg"
            },
            {
                mountainName: "Glarnisch",
                mountainHeight: "24000",
                imgUrl: "../../assets/img/glarnisch.jpg"
            },
            {
                mountainName: "Matterhorn",
                mountainHeight: "24000",
                imgUrl: "../../assets/img/matterhorn.jpg"
            },
            {
                mountainName: "Niederhorn",
                mountainHeight: "24000",
                imgUrl: "../../assets/img/niederhorn.jpg"
            },
            {
                mountainName: "Pizbernina",
                mountainHeight: "24000",
                imgUrl: "../../assets/img/pizbernina.jpg"
            }
        ];
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/galleryitem/galleryitem.component.css":
/*!*******************************************************!*\
  !*** ./src/app/galleryitem/galleryitem.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*mat-card {\n  width: 90%;\n  margin: 10px;\n}\nimg {\n  width: 100%;\n}\n\nh1 {\n  padding-top: 50px;\n  text-align: center;\n}*/\n"

/***/ }),

/***/ "./src/app/galleryitem/galleryitem.component.html":
/*!********************************************************!*\
  !*** ./src/app/galleryitem/galleryitem.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <img mat-card-image [src]=\"imgUrl\" alt=\"{{mountainName}}\">\n  <mat-card-content>\n    <mat-card-title>{{mountainName}}</mat-card-title>\n    <mat-card-subtitle>Höhe: {{mountainHeight}}m</mat-card-subtitle>\n  </mat-card-content>\n</mat-card>\n\n\n \n <!---<mat-card>\n  <mat-card-title id=\"title\">{{mountainName}}</mat-card-title>\n  <mat-card-content id=\"content\">\n    <img [src]=\"imgUrl\" />\n    <p>Höhe: {{mountainHeight}}</p>\n  </mat-card-content>\n</mat-card>-->"

/***/ }),

/***/ "./src/app/galleryitem/galleryitem.component.ts":
/*!******************************************************!*\
  !*** ./src/app/galleryitem/galleryitem.component.ts ***!
  \******************************************************/
/*! exports provided: GalleryitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryitemComponent", function() { return GalleryitemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryitemComponent = /** @class */ (function () {
    function GalleryitemComponent() {
    }
    GalleryitemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GalleryitemComponent.prototype, "imgUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GalleryitemComponent.prototype, "mountainName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GalleryitemComponent.prototype, "mountainHeight", void 0);
    GalleryitemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-galleryitem',
            template: __webpack_require__(/*! ./galleryitem.component.html */ "./src/app/galleryitem/galleryitem.component.html"),
            styles: [__webpack_require__(/*! ./galleryitem.component.css */ "./src/app/galleryitem/galleryitem.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryitemComponent);
    return GalleryitemComponent;
}());



/***/ }),

/***/ "./src/app/helloworld/helloworld.component.css":
/*!*****************************************************!*\
  !*** ./src/app/helloworld/helloworld.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin-top: 80px !important;\n  width: 75%;\n  max-width: 300px;\n  margin: auto;\n}\n\n#container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 2fr 1fr;\n      grid-template-columns: 2fr 1fr;\n  text-align: right;\n}\n\nh1 {\n  padding-top: 50px;\n  text-align: center;\n}\n\na {\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/helloworld/helloworld.component.html":
/*!******************************************************!*\
  !*** ./src/app/helloworld/helloworld.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title id=\"title\">Hello World Seite</mat-card-title>\n  <mat-card-content id=\"content\">Go To HelloWorld!</mat-card-content>\n  <div id=\"container\">\n    <div></div>\n    <div id=\"innerdiv\" class=\"86\">\n      <a routerLink=\"\">\n        <button mat-fab>\n          <mat-icon>home</mat-icon>\n        </button>\n      </a>\n    </div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/helloworld/helloworld.component.ts":
/*!****************************************************!*\
  !*** ./src/app/helloworld/helloworld.component.ts ***!
  \****************************************************/
/*! exports provided: HelloworldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloworldComponent", function() { return HelloworldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloworldComponent = /** @class */ (function () {
    function HelloworldComponent() {
    }
    HelloworldComponent.prototype.ngOnInit = function () {
    };
    HelloworldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-helloworld',
            template: __webpack_require__(/*! ./helloworld.component.html */ "./src/app/helloworld/helloworld.component.html"),
            styles: [__webpack_require__(/*! ./helloworld.component.css */ "./src/app/helloworld/helloworld.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelloworldComponent);
    return HelloworldComponent;
}());



/***/ }),

/***/ "./src/app/mat/mat.module.ts":
/*!***********************************!*\
  !*** ./src/app/mat/mat.module.ts ***!
  \***********************************/
/*! exports provided: MatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatModule", function() { return MatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MatModule = /** @class */ (function () {
    function MatModule() {
    }
    MatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]
            ]
        })
    ], MatModule);
    return MatModule;
}());



/***/ }),

/***/ "./src/app/mountain/mountain-item/mountain-item.component.css":
/*!********************************************************************!*\
  !*** ./src/app/mountain/mountain-item/mountain-item.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mountain/mountain-item/mountain-item.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/mountain/mountain-item/mountain-item.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <img mat-card-image [src]=\"mountain.path\" alt=\"{{ mountain.name }}\">\n    <mat-card-content>\n      <mat-card-title>{{ mountain.name }}</mat-card-title>\n      <mat-card-subtitle>Höhe: {{ mountain.elevation }}m</mat-card-subtitle>\n    </mat-card-content>\n   </mat-card>\n   "

/***/ }),

/***/ "./src/app/mountain/mountain-item/mountain-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/mountain/mountain-item/mountain-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: MountainItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountainItemComponent", function() { return MountainItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mountain_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mountain.model */ "./src/app/mountain/mountain.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MountainItemComponent = /** @class */ (function () {
    function MountainItemComponent() {
    }
    MountainItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _mountain_model__WEBPACK_IMPORTED_MODULE_1__["Mountain"])
    ], MountainItemComponent.prototype, "mountain", void 0);
    MountainItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mountain-item',
            template: __webpack_require__(/*! ./mountain-item.component.html */ "./src/app/mountain/mountain-item/mountain-item.component.html"),
            styles: [__webpack_require__(/*! ./mountain-item.component.css */ "./src/app/mountain/mountain-item/mountain-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MountainItemComponent);
    return MountainItemComponent;
}());



/***/ }),

/***/ "./src/app/mountain/mountain-list/mountain-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/mountain/mountain-list/mountain-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    padding-top: 50px;\r\n    text-align: center;\r\n  }\r\n  \r\n  #container {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    padding: 24px;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n    -ms-grid-rows: 1fr;\r\n        grid-template-rows: 1fr;\r\n    grid-column-gap: 24px;\r\n    grid-row-gap: 24px;\r\n  }\r\n  \r\n  @media (min-width: 600px) {\r\n    #container {\r\n      -ms-grid-columns: 1fr 1fr;\r\n          grid-template-columns: 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1080px) {\r\n    #container {\r\n      -ms-grid-columns: 1fr 1fr 1fr;\r\n          grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/mountain/mountain-list/mountain-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/mountain/mountain-list/mountain-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <app-mountain-item *ngFor=\"let item of mountains.values()\" [mountain]=\"item\"></app-mountain-item>\n</div>\n   "

/***/ }),

/***/ "./src/app/mountain/mountain-list/mountain-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/mountain/mountain-list/mountain-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: MountainListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountainListComponent", function() { return MountainListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _mountain_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mountain.model */ "./src/app/mountain/mountain.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MountainListComponent = /** @class */ (function () {
    function MountainListComponent(route) {
        this.route = route;
        this.mountains = new Map();
    }
    //constructor() {}
    MountainListComponent.prototype.ngOnInit = function () {
        this.mountains = new Map();
        var config = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mountains;
        var mntParam = this.route.snapshot.params['id'];
        for (var _i = 0, _a = config.features; _i < _a.length; _i++) {
            var mountain = _a[_i];
            this.mountains.set(mountain.properties.id, new _mountain_model__WEBPACK_IMPORTED_MODULE_2__["Mountain"](mountain.properties.id, mountain.properties.name, mountain.properties.el, mountain.geometry.coordinates[0], mountain.geometry.coordinates[1], mountain.properties.img, mountain.properties.url));
        }
        if (mntParam) {
            var singleMountain = this.mountains.get(mntParam);
            if (singleMountain) {
                this.mountains = new Map();
                this.mountains.set(mntParam, singleMountain);
            }
        }
    };
    MountainListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mountain-list',
            template: __webpack_require__(/*! ./mountain-list.component.html */ "./src/app/mountain/mountain-list/mountain-list.component.html"),
            styles: [__webpack_require__(/*! ./mountain-list.component.css */ "./src/app/mountain/mountain-list/mountain-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MountainListComponent);
    return MountainListComponent;
}());



/***/ }),

/***/ "./src/app/mountain/mountain.model.ts":
/*!********************************************!*\
  !*** ./src/app/mountain/mountain.model.ts ***!
  \********************************************/
/*! exports provided: Mountain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mountain", function() { return Mountain; });
var Mountain = /** @class */ (function () {
    function Mountain(id, name, elevation, longitude, latitude, path, url) {
        this.id = id;
        this.name = name;
        this.elevation = elevation;
        this.coordinate = { longitude: longitude, latitude: latitude };
        this.path = path;
        this.url = url;
    }
    return Mountain;
}());



/***/ }),

/***/ "./src/app/nghome/nghome.component.css":
/*!*********************************************!*\
  !*** ./src/app/nghome/nghome.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nghome/nghome.component.html":
/*!**********************************************!*\
  !*** ./src/app/nghome/nghome.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n<a routerLink=\"\">Home</a>\n"

/***/ }),

/***/ "./src/app/nghome/nghome.component.ts":
/*!********************************************!*\
  !*** ./src/app/nghome/nghome.component.ts ***!
  \********************************************/
/*! exports provided: NghomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NghomeComponent", function() { return NghomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NghomeComponent = /** @class */ (function () {
    function NghomeComponent() {
    }
    NghomeComponent.prototype.ngOnInit = function () {
    };
    NghomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nghome',
            template: __webpack_require__(/*! ./nghome.component.html */ "./src/app/nghome/nghome.component.html"),
            styles: [__webpack_require__(/*! ./nghome.component.css */ "./src/app/nghome/nghome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NghomeComponent);
    return NghomeComponent;
}());



/***/ }),

/***/ "./src/app/routing/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/routing/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nghome_nghome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nghome/nghome.component */ "./src/app/nghome/nghome.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helloworld/helloworld.component */ "./src/app/helloworld/helloworld.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _mountain_mountain_list_mountain_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mountain/mountain-list/mountain-list.component */ "./src/app/mountain/mountain-list/mountain-list.component.ts");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../videos/videos.component */ "./src/app/videos/videos.component.ts");
/* harmony import */ var _clubs_nlclubs_nlclubs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../clubs/nlclubs/nlclubs.component */ "./src/app/clubs/nlclubs/nlclubs.component.ts");
/* harmony import */ var _clubs_club_site_club_site_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../clubs/club-site/club-site.component */ "./src/app/clubs/club-site/club-site.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'ng', component: _nghome_nghome_component__WEBPACK_IMPORTED_MODULE_2__["NghomeComponent"] },
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'hw', component: _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_4__["HelloworldComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"] },
    { path: 'ml/:id', component: _mountain_mountain_list_mountain_list_component__WEBPACK_IMPORTED_MODULE_6__["MountainListComponent"] },
    { path: 'ml', component: _mountain_mountain_list_mountain_list_component__WEBPACK_IMPORTED_MODULE_6__["MountainListComponent"] },
    { path: 'vid', component: _videos_videos_component__WEBPACK_IMPORTED_MODULE_7__["VideosComponent"] },
    { path: 'nlclubs', component: _clubs_nlclubs_nlclubs_component__WEBPACK_IMPORTED_MODULE_8__["NlclubsComponent"] },
    { path: 'nlclubs/:id', component: _clubs_club_site_club_site_component__WEBPACK_IMPORTED_MODULE_9__["ClubSiteComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/videos-items/videos-items.component.css":
/*!*********************************************************!*\
  !*** ./src/app/videos-items/videos-items.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*mat-card {\r\n    width: 90%;\r\n    margin: 10px;\r\n  }\r\n  img {\r\n    width: 100%;\r\n  }\r\n  \r\n  h1 {\r\n    padding-top: 50px;\r\n    text-align: center;\r\n  }*/\r\n  "

/***/ }),

/***/ "./src/app/videos-items/videos-items.component.html":
/*!**********************************************************!*\
  !*** ./src/app/videos-items/videos-items.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <video width=\"500\" height=\"420\" controls>\n    <source [src]=\"vidUrl\" type=\"video/mp4\">\n  </video>\n  <mat-card-content>\n    <mat-card-title>{{videoName}}</mat-card-title>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/videos-items/videos-items.component.ts":
/*!********************************************************!*\
  !*** ./src/app/videos-items/videos-items.component.ts ***!
  \********************************************************/
/*! exports provided: VideosItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosItemsComponent", function() { return VideosItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideosItemsComponent = /** @class */ (function () {
    function VideosItemsComponent() {
    }
    VideosItemsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VideosItemsComponent.prototype, "vidUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VideosItemsComponent.prototype, "videoName", void 0);
    VideosItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos-items',
            template: __webpack_require__(/*! ./videos-items.component.html */ "./src/app/videos-items/videos-items.component.html"),
            styles: [__webpack_require__(/*! ./videos-items.component.css */ "./src/app/videos-items/videos-items.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideosItemsComponent);
    return VideosItemsComponent;
}());



/***/ }),

/***/ "./src/app/videos/videos.component.css":
/*!*********************************************!*\
  !*** ./src/app/videos/videos.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    padding-top: 50px;\r\n    text-align: center;\r\n  }\r\n  \r\n  #container {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    width: 100%;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n    -ms-grid-rows: 1fr;\r\n        grid-template-rows: 1fr;\r\n  }\r\n  \r\n  @media (min-width: 600px) {\r\n    #container {\r\n      -ms-grid-columns: 1fr 1fr;\r\n          grid-template-columns: 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1080px) {\r\n    #container {\r\n      -ms-grid-columns: 1fr 1fr 1fr;\r\n          grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/videos/videos.component.html":
/*!**********************************************!*\
  !*** ./src/app/videos/videos.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Videos</h1>\n<div id=\"container\" >\n  <app-videos-items *ngFor=\"let video of videos\" [vidUrl]=\"video.vidUrl\" [videoName]=\"video.videoName\"></app-videos-items>\n</div>\n\n"

/***/ }),

/***/ "./src/app/videos/videos.component.ts":
/*!********************************************!*\
  !*** ./src/app/videos/videos.component.ts ***!
  \********************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideosComponent = /** @class */ (function () {
    function VideosComponent() {
        this.videos = [
            {
                videoName: "atm.mp4",
                vidUrl: "../../assets/video/atm.mp4"
            },
            {
                videoName: "sintel.mp4",
                vidUrl: "../../assets/video/sintel.mp4"
            }
        ];
    }
    VideosComponent.prototype.ngOnInit = function () {
    };
    VideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.component.html */ "./src/app/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.css */ "./src/app/videos/videos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    mountains: {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.005382, 46.577555]
                },
                properties: {
                    id: 'eig',
                    name: 'Eiger',
                    el: 3967,
                    url: '/e4/pages/eiger.php',
                    img: './assets/img/eiger.jpg',
                    mountainrailway: false
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [9.020156, 45.931455]
                },
                properties: {
                    id: 'mge',
                    name: 'Monte Generoso',
                    el: 1701,
                    url: '/e4/pages/generoso.php',
                    img: './assets/img/generoso.jpg',
                    mountainrailway: true
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [7.658434, 45.976653]
                },
                properties: {
                    id: 'mat',
                    name: 'Matterhorn',
                    el: 4477,
                    url: '/e4/pages/matterhorn.php',
                    img: './assets/img/matterhorn.jpg',
                    mountainrailway: false
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.681283, 46.73697]
                },
                properties: {
                    id: 'bri',
                    name: 'Bristen',
                    el: 3073,
                    url: '/e4/pages/bristen.php',
                    img: './assets/img/bristen.jpg',
                    mountainrailway: false
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [7.775339, 46.711302]
                },
                properties: {
                    id: 'nie',
                    name: 'Niederhorn',
                    el: 1963,
                    url: '/e4/pages/niederhorn.php',
                    img: './assets/img/niederhorn.jpg',
                    mountainrailway: true
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [9.908117, 46.382328]
                },
                properties: {
                    id: 'pbe',
                    name: 'Piz Bernina',
                    el: 4049,
                    url: '/e4/pages/pizbernina.php',
                    img: './assets/img/pizbernina.jpg',
                    mountainrailway: false
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.485215, 47.056731]
                },
                properties: {
                    id: 'rig',
                    name: 'Rigi',
                    el: 1798,
                    url: '/e4/pages/rigi.php',
                    img: './assets/img/rigi.jpg',
                    mountainrailway: true
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [9.343259, 47.249403]
                },
                properties: {
                    id: 'san',
                    name: 'Säntis',
                    el: 2502,
                    url: '/e4/pages/santis.php',
                    img: './assets/img/santis.jpg',
                    mountainrailway: true
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.437769, 46.772067]
                },
                properties: {
                    id: 'tit',
                    name: 'Titlis',
                    el: 3238,
                    url: '/e4/pages/titlis.php',
                    img: './assets/img/titlis.jpg',
                    mountainrailway: true
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.914868, 46.811151]
                },
                properties: {
                    id: 'tod',
                    name: 'Tödi',
                    el: 3614,
                    url: '/e4/pages/todi.php',
                    img: './assets/img/todi.jpg',
                    mountainrailway: false
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [9.221249, 46.898255]
                },
                properties: {
                    id: 'tsh',
                    name: 'Tschingelhörner',
                    el: 2849,
                    url: '/e4/pages/tschingelhorner.php',
                    img: './assets/img/tschingelhorner.jpg',
                    mountainrailway: false
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.49205, 47.349499]
                },
                properties: {
                    id: 'uet',
                    name: 'Uetliberg',
                    el: 870,
                    url: '/e4/pages/uetliberg.php',
                    img: './assets/img/uetliberg.jpg',
                    mountainrailway: true
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.988836, 46.992828]
                },
                properties: {
                    id: 'gla',
                    name: 'foo foo',
                    el: 2914,
                    url: '/e4/pages/glarnisch.php',
                    img: './assets/img/glarnisch.jpg',
                    mountainrailway: true
                }
            }
        ]
    },
    /*clubs: {
     type: 'FeatureCollection',
     features: [
    {
      type: 'Feature',
      properties: {
      id: '1001',
      name: 'HC Ambrì Piotta',
      gruendung: 1937,
      headcoach: 'Luca Cereda',
      gsf: 'Michele Orsi',
      sportchef: 'Paolo Duca',
      stadion: 'Valascia',
      sitz: 2000,
      steh: 4500,
      adresse: 'Casella Postale',
      plz: 6775,
      ort: 'Ambri',
      email: 'info@hcap.ch',
      logo: './assets/clubImages/amb-logo.png',
      photo: './assets/clubImages/ambri-photo.jpg'
      }
    },
    {
     type: 'Feature',
     properties: {
     id: '1002',
     name: 'SC Bern',
     gruendung: 1931,
     headcoach: 'Kari Jalonen',
     gsf: 'Marc Lüthi',
     sportchef: 'Alex Chatelain',
     stadion: 'PostFinance-Arena',
     sitz: 7139,
     steh: 9892,
     adresse: 'Mingerstrasse 12B',
     plz: 3014,
     ort: 'Bern',
     email: 'info@scb.ch',
     logo: './assets/clubImages/ber-logo.png',
     photo: './assets/clubImages/bern-photo.jpg'
     }
   },
   {
     type: 'Feature',
     properties: {
     id: '1003',
     name: 'EHC Biel',
     gruendung: 1939,
     headcoach: 'Antti Törmänen',
     gsf: 'Daniel Villard',
     sportchef: 'Martin Steinegger',
     stadion: 'Tissot Arena',
     sitz: 4411,
     steh: 2110,
     adresse: 'Bahnhofstrasse 17',
     plz: 2501,
     ort: 'Biel',
     email: 'hotline@ehcb.ch',
     logo: './assets/clubImages/bie-logo.png',
     photo: './assets/clubImages/biel-photo.jpg'
     }
   },
   {
     type: 'Feature',
     properties: {
     id: '1004',
     name: 'HC Davos',
     gruendung: 1921,
     headcoach: '',
     gsf: 'Gaudenz F. Domenig',
     sportchef: 'René Müller',
     stadion: 'Vaillant Arena',
     sitz: 3395,
     steh: 3400,
     adresse: 'Eisbahnstrasse 2',
     plz: 7270,
     ort: 'Davos Platz',
     email: 'nfo@hcd.ch',
     logo: './assets/clubImages/dav-logo.png',
     photo: './assets/clubImages/davos-photo.jpg'
     }
   },
   {
     type: 'Feature',
     properties: {
     id: '1005',
     name: 'Fribourg-Gottéron',
     gruendung: 1938,
     headcoach: 'Mark French',
     gsf: 'Raphaël Berger',
     sportchef: 'Christian Dubé',
     stadion: 'BCF-Arena',
     sitz: 3174,
     steh: 3526,
     adresse: 'CP 551',
     plz: 1701,
     ort: 'Fribourg',
     email: 'office@fribourg-gotteron.ch',
     logo: './assets/clubImages/fri-logo.png',
     photo: './assets/clubImages/fribourg-photo.jpg.jpg'
     }
   },
   {
     type: 'Feature',
     properties: {
     id: '1006',
     name: 'Genève-Servette HC',
     gruendung: 1905,
     headcoach: 'Chris McSorley',
     gsf: 'Christophe Stuck',
     sportchef: 'Chris McSorley',
     stadion: 'Les Vernets',
     sitz: 4479,
     steh: 2656,
     adresse: 'Routes des jeunes 10',
     plz: 1227,
     ort: 'Genf',
     email: 'nfo@gshc.ch',
     logo: './assets/clubImages/gen-logo.png',
     photo: './assets/clubImages/genf-photo.jpg'
     }
   },
   {
     type: 'Feature',
     properties: {
     id: '1007',
     name: 'SCL Tigers',
     gruendung: 1946,
     headcoach: 'Heinz Ehlers',
     gsf: 'Peter Müller',
     sportchef: 'Marco Bayer',
     stadion: 'Ilfishalle',
     sitz: 2943,
     steh: 3107,
     adresse: 'Güterstrasse 18',
     plz: 3550,
     ort: 'Langnau',
     email: 'nfo@scltigers.ch',
     logo: './assets/clubImages/lan-logo.png',
     photo: './assets/clubImages/langnau-photo.jpg'
     }
   },
   {
     type: 'Feature',
     properties: {
     id: '1008',
     name: 'Lausanne HC',
     gruendung: 1922,
     headcoach: 'Ville Peltonen',
     gsf: 'Sacha Weibel',
     sportchef: 'Jan Alston',
     stadion: 'Malley',
     sitz: 4610,
     steh: 2090,
     adresse: 'Case Postale 171',
     plz: 1000,
     ort: 'Lausanne',
     email: 'contact@lausannehc.ch',
     logo: './assets/clubImages/lau-logo.png',
     photo: './assets/clubImages/lausanne-photo.jpg'
     }
   },
   {
     type: 'Feature',
     properties: {
     id: '1009',
     name: 'HC Lugano',
     gruendung: 1941,
     headcoach: 'Greg Ireland',
     gsf: 'Jean-Jacques Aeschlimann',
     sportchef: 'Roland Habisreutinger',
     stadion: 'Cornèr Arena',
     sitz: 4200,
     steh: 3000,
     adresse: 'Casella postale 4226',
     plz: 6904,
     ort: 'Lugano',
     email: 'sede@hclugano.ch',
     logo: './assets/clubImages/lug-logo.png',
     photo: './assets/clubImages/lugano-photo.jpg'
     }
   },
   {
     type: 'Feature',
     properties: {
     id: '1010',
     name: 'SC Rapperswil-Jona Lakers',
     gruendung: 1945,
     headcoach: 'Jeff Tomlinson',
     gsf: 'Markus Bütler',
     sportchef: 'Roger Maier',
     stadion: 'St. Galler Kantonalbank Arena',
     sitz: 4000,
     steh: 2100,
     adresse: 'Walter-Denzler-Strasse 3',
     plz: 8640,
     ort: 'Rapperswil',
     email: 'iinfo@lakers.ch',
     logo: './assets/clubImages/rap-log.png',
     photo: './assets/clubImages/rapperswil-photo.jpg'
     }
   },
   {
     type: 'Feature',
     properties: {
     id: '1011',
     name: 'ZSC Lions',
     gruendung: 1930,
     headcoach: 'Serge Aubin',
     gsf: 'Peter Zahner',
     sportchef: 'Sven Leuenberger',
     stadion: 'Hallenstadion',
     sitz: 11200,
     steh: 0,
     adresse: 'Siewerdtstrasse 105',
     plz: 8050,
     ort: 'Zürich',
     email: 'info@zsclions.ch',
     logo: './assets/clubImages/zur-logo.png',
     photo: './assets/clubImages/zuerich-photo.jpg'
     }
   },
   {
     type: 'Feature',
     properties: {
     id: '1012',
     name: 'EV Zug',
     gruendung: 1967,
     headcoach: 'Dan Tangnes',
     gsf: 'Patrick Lengwiler',
     sportchef: 'Reto Kläy',
     stadion: 'Bossard Arena',
     sitz: 4848,
     steh: 2352,
     adresse: 'Weststrasse 11',
     plz: 6303,
     ort: 'Zug',
     email: 'info@evz.ch',
     logo: './assets/clubImages/zug-logo.png',
     photo: './assets/clubImages/zug-photo.jpg'
     }
   },
   ]
   }*/
    clubs: [
        [
            '1001',
            'HC Ambrì Piotta',
            '1937',
            'Luca Cereda',
            'Michele Orsi',
            'Paolo Duca',
            'Valascia',
            '2000',
            '4500',
            'Casella Postale',
            '6775',
            'Ambri',
            'info@hcap.ch',
            './assets/clubImages/amb-logo.png',
            './assets/clubImages/ambri-photo.jpg'
        ],
        [
            '1002',
            'SC Bern',
            '1931',
            'Kari Jalonen',
            'Marc Lüthi',
            'Alex Chatelain',
            'PostFinance-Arena',
            '7139',
            '9892',
            'Mingerstrasse 12B',
            '3014',
            'Bern',
            'info@scb.ch',
            './assets/clubImages/ber-logo.png',
            './assets/clubImages/bern-photo.jpg'
        ],
        [
            '1003',
            'EHC Biel',
            '1939',
            'Antti Törmänen',
            'Daniel Villard',
            'Martin Steinegger',
            'Tissot Arena',
            '4411',
            '2110',
            'Bahnhofstrasse 17',
            '2501',
            'Biel',
            'hotline@ehcb.ch',
            './assets/clubImages/bie-logo.png',
            './assets/clubImages/biel-photo.jpg'
        ],
        [
            '1004',
            'HC Davos',
            '1921',
            '',
            'Gaudenz F. Domenig',
            'René Müller',
            'Vaillant Arena',
            '3395',
            '3400',
            'Eisbahnstrasse 2',
            '7270',
            'Davos Platz',
            'nfo@hcd.ch',
            './assets/clubImages/dav-logo.png',
            './assets/clubImages/davos-photo.jpg'
        ],
        [
            '1005',
            'Fribourg-Gottéron',
            '1938',
            'Mark French',
            'Raphaël Berger',
            'Christian Dubé',
            'BCF-Arena',
            '3174',
            '3526',
            'CP 551',
            '1701',
            'Fribourg',
            'office@fribourg-gotteron.ch',
            './assets/clubImages/fri-logo.png',
            './assets/clubImages/fribourg-photo.jpg'
        ],
        [
            '1006',
            'Genève-Servette HC',
            '1905',
            'Chris McSorley',
            'Christophe Stuck',
            'Chris McSorley',
            'Les Vernets',
            '4479',
            '2656',
            'Routes des jeunes 10',
            '1227',
            'Genf',
            'nfo@gshc.ch',
            './assets/clubImages/gen-logo.png',
            './assets/clubImages/genf-photo.jpg'
        ],
        [
            '1007',
            'SCL Tigers',
            '1946',
            'Heinz Ehlers',
            'Peter Müller',
            'Marco Bayer',
            'Ilfishalle',
            '2943',
            '3107',
            'Güterstrasse 18',
            '3550',
            'Langnau',
            'nfo@scltigers.ch',
            './assets/clubImages/lan-logo.png',
            './assets/clubImages/langnau-photo.jpg'
        ],
        [
            '1008',
            'Lausanne HC',
            '1922',
            'Ville Peltonen',
            'Sacha Weibel',
            'Jan Alston',
            'Malley',
            '4610',
            '2090',
            'Case Postale 171',
            '1000',
            'Lausanne',
            'contact@lausannehc.ch',
            './assets/clubImages/lau-logo.png',
            './assets/clubImages/lausanne-photo.jpg'
        ],
        [
            '1009',
            'HC Lugano',
            '1941',
            'Greg Ireland',
            'Jean-Jacques Aeschlimann',
            'Roland Habisreutinger',
            'Cornèr Arena',
            '4200',
            '3000',
            'Casella postale 4226',
            '6904',
            'Lugano',
            'sede@hclugano.ch',
            './assets/clubImages/lug-logo.png',
            './assets/clubImages/lugano-photo.jpg'
        ],
        [
            '1010',
            'SC Rapperswil-Jona Lakers',
            '1945',
            'Jeff Tomlinson',
            'Markus Bütler',
            'Roger Maier',
            'St. Galler Kantonalbank Arena',
            '4000',
            '2100',
            'Walter-Denzler-Strasse 3',
            '8640',
            'Rapperswil',
            'info@lakers.ch',
            './assets/clubImages/rap-log.png',
            './assets/clubImages/rapperswil-photo.jpg'
        ],
        [
            '1011',
            'ZSC Lions',
            '1930',
            'Serge Aubin',
            'Peter Zahner',
            'Sven Leuenberger',
            'Hallenstadion',
            '11200',
            '0',
            'Siewerdtstrasse 105',
            '8050',
            'Zürich',
            'info@zsclions.ch',
            './assets/clubImages/zur-logo.png',
            './assets/clubImages/zuerich-photo.jpg'
        ],
        [
            '1012',
            'EV Zug',
            '1967',
            'Dan Tangnes',
            'Patrick Lengwiler',
            'Reto Kläy',
            'Bossard Arena',
            '4848',
            '2352',
            'Weststrasse 11',
            '6303',
            'Zug',
            'info@evz.ch',
            './assets/clubImages/zug-logo.png',
            './assets/clubImages/zug-phot.jpg'
        ]
    ],
    championship: [
        ['1938', 'HC Davos', '1004'],
        ['1939', 'HC Davos', '1004'],
        ['1940', '', ''],
        ['1941', 'HC Davos', '1004'],
        ['1942', 'HC Davos', '1004'],
        ['1943', 'HC Davos', '1004'],
        ['1944', 'HC Davos', '1004'],
        ['1945', 'HC Davos', '1004'],
        ['1946', 'HC Davos', '1004'],
        ['1947', 'HC Davos', '1004'],
        ['1948', 'HC Davos', '1004'],
        ['1949', 'ZSC Lions', '1011'],
        ['1950', 'HC Davos', '1004'],
        ['1951', 'EHC Arosa', '2006'],
        ['1952', 'EHC Arosa', '2006'],
        ['1953', 'EHC Arosa', '2006'],
        ['1954', 'EHC Arosa', '2006'],
        ['1955', 'EHC Arosa', '2006'],
        ['1956', 'EHC Arosa', '2006'],
        ['1957', 'EHC Arosa', '2006'],
        ['1958', 'HC Davos', '1004'],
        ['1959', 'SC Bern', '1002'],
        ['1960', 'HC Davos', '1004'],
        ['1961', 'ZSC Lions', '1011'],
        ['1962', 'EHC Visp', '2004'],
        ['1963', 'HC Villars', '2001'],
        ['1964', 'HC Villars', '2001'],
        ['1965', 'SC Bern', '1002'],
        ['1966', 'GC Zürich', '2003'],
        ['1967', 'EHC Kloten', '2005'],
        ['1968', 'HC La Chaux-de-Fonds', '2002'],
        ['1969', 'HC La Chaux-de-Fonds', '2002'],
        ['1970', 'HC La Chaux-de-Fonds', '2002'],
        ['1971', 'HC La Chaux-de-Fonds', '2002'],
        ['1972', 'HC La Chaux-de-Fonds', '2002'],
        ['1973', 'HC La Chaux-de-Fonds', '2002'],
        ['1974', 'SC Bern', '1002'],
        ['1975', 'SC Bern', '1002'],
        ['1976', 'SCL Tigers', '1007'],
        ['1977', 'SC Bern', '1002'],
        ['1978', 'EHC Biel', '1003'],
        ['1979', 'SC Bern', '1002'],
        ['1980', 'EHC Arosa', '2006'],
        ['1981', 'EHC Biel', '1003'],
        ['1982', 'EHC Arosa', '2006'],
        ['1983', 'EHC Biel', '1003'],
        ['1984', 'HC Davos', '1004'],
        ['1985', 'HC Davos', '1004'],
        ['1986', 'HC Lugano', '1009'],
        ['1987', 'HC Lugano', '1009'],
        ['1988', 'HC Lugano', '1009'],
        ['1989', 'SC Bern', '1002'],
        ['1990', 'HC Lugano', '1009'],
        ['1991', 'SC Bern', '1002'],
        ['1992', 'SC Bern', '1002'],
        ['1993', 'EHC Kloten', '2005'],
        ['1994', 'EHC Kloten', '2005'],
        ['1995', 'EHC Kloten', '2005'],
        ['1996', 'EHC Kloten', '2005'],
        ['1997', 'SC Bern', '1002'],
        ['1998', 'EV Zug', '1012'],
        ['1999', 'HC Lugano', '1009'],
        ['2000', 'ZSC Lions', '1011'],
        ['2001', 'ZSC Lions', '1011'],
        ['2002', 'HC Davos', '1004'],
        ['2003', 'HC Lugano', '1009'],
        ['2004', 'SC Bern', '1002'],
        ['2005', 'HC Davos', '1004'],
        ['2006', 'HC Lugano', '1009'],
        ['2007', 'HC Davos', '1004'],
        ['2008', 'ZSC Lions', '1011'],
        ['2009', 'HC Davos', '1004'],
        ['2010', 'SC Bern', '1002'],
        ['2011', 'HC Davos', '1004'],
        ['2012', 'ZSC Lions', '1011'],
        ['2013', 'SC Bern', '1002'],
        ['2014', 'ZSC Lions', '1011'],
        ['2015', 'HC Davos', '1004'],
        ['2016', 'SC Bern', '1002'],
        ['2017', 'SC Bern', '1002'],
        ['2018', 'ZSC Lions', '1011']
    ]
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AngularDevNew\m152\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map