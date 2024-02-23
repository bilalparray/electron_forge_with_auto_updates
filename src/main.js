(self["webpackChunksampleUI"] = self["webpackChunksampleUI"] || []).push([["main"],{

/***/ 3465:
/*!******************************!*\
  !*** ./src/app-constants.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConstants: () => (/* binding */ AppConstants)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);

// TODO: MOVE ALL CONSTANTS HERE
const AppConstants = {
  ApiUrls: {
    TEST_URL: "test/test",
    LOG_URL: "log",
    ACCOUNT_URL: "api/token",
    DUMMY_TEACHER_URL: "api/DummyTeacher",
    DUMMY_STUDENT_URL: "api/token",
    CURRENCY_API_URL: "https://openexchangerates.org/api/latest.json?app_id=4aaaec5ff9444f65b294ed3e78f2963b",
    VERSION_API_URL: "/api/v1/ApplicationUser/unitconvertor/Version"
  },
  DbKeys: {
    ACCESS_TOKEN: "ACCESS_TOKEN",
    LOGIN_USER: "LOGIN_USER",
    API_RESP_CACHE: "API_RESP_CACHE",
    PLATFORM: "PLATFORM",
    REMEMBER_PWD: "REMEMBER_PWD",
    COMPANY_CODE: "COMPANY_CODE"
  },
  DbDefaultValues: {},
  ErrorPrompts: {
    App_StartError: "Error occured. Please restart the application.",
    Load_Data_Error: "Error in loading data. Please try again.",
    Invalid_Input_Data: "Invalid data.Please try again.",
    Unknown_Error: "Error occured. Please try again.",
    Network_Error: "Please check network and try again.",
    Save_Data_Error: "Error in saving. Please try again.",
    Delete_Data_Error: "Error in delete. Please try again.",
    Permission_Error: "Permission denied.",
    Unauthorized_User: "User not authorized. Please relogin."
  },
  HeadersName: {
    ApiType: "targetapitype",
    DevApk: "isdeveloperapk",
    AppVersion: "appversion"
    // CORS_ALLOW_ORIGIN: "Access-Control-Allow-Origin",
    // CORS_ALLOW_METHODS: "Access-Control-Allow-Methods",
    // CORS_ALLOW_CREDENTIALS: "Access-Control-Allow-Credentials",
  },

  HeadersValue: {
    ApiType: "abcd",
    DevApk: (!src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production).toString(),
    AppVersion: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.applicationVersion
    // CORS_ALLOW_ORIGIN: "http://localhost:4200",
    // CORS_ALLOW_METHODS: "GET, POST, OPTIONS, DELETE, PUT",
    // CORS_ALLOW_CREDENTIALS: "true",
  },

  WebRoutes: {
    SAMPLE: "sample",
    TEACHERS: "teachers",
    UNAUTHORIZED: "",
    LOGIN: "login",
    HOME: "home"
  },
  Token_Info_Keys: {
    Role: "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
    Expiry: "exp",
    CompanyCode: "clCd",
    Audience: "aud",
    CompanyId: "clId",
    RecordId: "dbRId",
    EmailAddress: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
    UserName: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name",
    GivenName: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname",
    Issuer: "iss",
    TokenStart: "nbf"
  }
};

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



const items = Object.values(localStorage);
const isAnyFavorite = items.length > 2;
const defaultRoute = isAnyFavorite ? "favorites" : "common";
const routes = [{
  path: "",
  redirectTo: defaultRoute,
  pathMatch: "full"
}, {
  path: "login",
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_main_end-user_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/login/login.module */ 8427)).then(m => m.LoginModule)
}, {
  path: "home",
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_main_end-user_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/home/home.module */ 2488)).then(m => m.HomeModule)
}, {
  path: "teachers",
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_main_end-user_dummy-teacher_dummy-teacher_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/dummy-teacher/dummy-teacher.module */ 5182)).then(m => m.DummyTeacherModule)
  // canActivate: [AuthGuard],
  // data: {
  //   allowedRole: [RoleTypeSM.ClientAdmin]
  // }
}, {
  path: "common",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_module_ts"), __webpack_require__.e("src_app_components_main_end-user_common-converters_common-converters_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/common-converters/common-converters.module */ 7892)).then(m => m.CommonConvertersModule)
}, {
  path: "engineering",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_module_ts"), __webpack_require__.e("src_app_components_main_end-user_engineering-converters_engineering-converters_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/engineering-converters/engineering-converters.module */ 9440)).then(m => m.EngineeringConvertersModule)
}, {
  path: "favorites",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_module_ts"), __webpack_require__.e("src_app_components_main_end-user_favorites_favorites_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/favorites/favorites.module */ 5999)).then(m => m.FavoritesModule)
}, {
  path: "others",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_module_ts"), __webpack_require__.e("src_app_components_main_end-user_others_others_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/others/others.module */ 6207)).then(m => m.OthersModule)
}, {
  path: "banking",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_module_ts"), __webpack_require__.e("src_app_components_main_end-user_banking_banking_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/banking/banking.module */ 1215)).then(m => m.BankingModule)
}, {
  path: "health",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_module_ts"), __webpack_require__.e("src_app_components_main_end-user_health_health_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/health/health.module */ 147)).then(m => m.HealthModule)
}, {
  path: "**",
  pathMatch: "full",
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_main_not-found_not-found_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/not-found/not-found.module */ 730)).then(m => m.NotFoundModule)
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/base.component */ 121);
/* harmony import */ var _models_view_app_viewmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/view/app.viewmodel */ 7292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_log_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/log-handler.service */ 4943);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/common.service */ 5731);
/* harmony import */ var _services_tour_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/tour.service */ 6402);
/* harmony import */ var _services_zoom_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/zoom.service */ 6447);
/* harmony import */ var _services_version_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/version.service */ 4601);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/storage.service */ 9140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_internal_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/internal/top-nav/top-nav.component */ 5025);
/* harmony import */ var _components_internal_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/internal/spinner/spinner.component */ 5836);

var _class;














function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 2)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Please Update Your Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AppComponent_div_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r2.updateApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AppComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 9)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "New Update Available!");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Please update To the Newest Version of the App. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AppComponent_div_1_div_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r5.updateApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AppComponent_div_1_div_1_Template, 7, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "spinner", 6)(3, "top-nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 7)(5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.viewModel.updateAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("transform", "scale(" + ctx_r1.zoomFactor + ")");
  }
}
class AppComponent extends _components_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  constructor(logService, commonService, appTourService, zoomService, versionService, localStorageService) {
    super(commonService, logService);
    this.appTourService = appTourService;
    this.zoomService = zoomService;
    this.versionService = versionService;
    this.localStorageService = localStorageService;
    this.title = "Unit Converter";
    this.viewModel = new _models_view_app_viewmodel__WEBPACK_IMPORTED_MODULE_3__.AppViewModel();
  }
  // /// on ngoninit we are fetching localstorage items and app version information.
  ngOnInit() {
    this.getFromStorageService();
    this.getAllVersionInfoAndCheckForUpdates();
  }
  ///get zoom factor from zoom buttons using zoom service
  get zoomFactor() {
    return this.zoomService.getZoomFactor();
  }
  // get all app version information from the server.
  getAllVersionInfoAndCheckForUpdates() {
    var _this = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resp = yield _this.versionService.getAllVersionInfo();
        if (resp.isError) {
          _this._commonService.showSweetAlertToast({
            title: "Error",
            text: resp.errorData.displayMessage,
            timer: 3000,
            position: "top-end"
          });
        } else {
          _this.viewModel.versionInformation = resp.successData;
          const currentEnvironmentVersion = Number(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.applicationVersion);
          const appLatestVersionFromApi = Number(_this.viewModel.versionInformation.latestVersion);
          const minimumVersion = Number(_this.viewModel.versionInformation.minimumVersion);
          if (currentEnvironmentVersion < appLatestVersionFromApi) {
            _this.viewModel.updateAvailable = true;
          }
          // block flow if currenct version is below minimum version
          if (currentEnvironmentVersion < minimumVersion) {
            _this.viewModel.stopApplicationFlow = false;
          }
        }
      } catch (error) {
        _this._commonService.showSweetAlertToast({
          title: "Error",
          text: "Sorry We could not Fetch Version Information from Server.",
          timer: 3000
        });
      }
    })();
  }
  ///// Update App if new version is found
  updateApp() {
    setTimeout(() => {
      window.open(this.viewModel.playstoreLink, "_blank");
    }, 500);
  }
  /// check localstorage if it is first install or not
  getFromStorageService() {
    var _this2 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let checkIfFirstTimeInsTallation = yield _this2.localStorageService.getFromStorage("first-install");
      _this2.viewModel.firstInstall = checkIfFirstTimeInsTallation;
      _this2.showTourTutorialOnAppInstall();
    })();
  }
  //// start tour tutorial based on condition if user is using the app first time
  showTourTutorialOnAppInstall() {
    if (this.viewModel.firstInstall === true) {
      return;
    } else {
      this.localStorageService.removeFromStorage("first-install"); //removing item from localstorage
      this.localStorageService.saveToStorage("first-install", true);
      this.appTourService.startTour(); //start tour
    }
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_log_handler_service__WEBPACK_IMPORTED_MODULE_4__.LogHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_tour_service__WEBPACK_IMPORTED_MODULE_6__.AppTourService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_zoom_service__WEBPACK_IMPORTED_MODULE_7__.ZoomService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_version_service__WEBPACK_IMPORTED_MODULE_8__.VersionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_9__.StorageService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 2,
  consts: [["class", "position-center", 4, "ngIf"], ["id", "wrapper", 4, "ngIf"], [1, "position-center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "wrapper"], ["class", "alert alert-warning alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "spinnerComponent"], ["id", "page-content-wrapper"], [2, "transform-origin", "top left"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show"], ["type", "button", "data-bs-dismiss", "alert", "aria-label", "Close", 1, "btn-close"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, AppComponent_div_0_Template, 5, 0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AppComponent_div_1_Template, 7, 3, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.viewModel.stopApplicationFlow);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.viewModel.stopApplicationFlow);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet, _components_internal_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_10__.TopNavComponent, _components_internal_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__.SpinnerComponent],
  styles: ["#page-content-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  top: 37px;\n}\n\n.position-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n.position-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n\n.alert[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n  z-index: 99;\n  width: 99.7vw;\n}\n\n.fade[_ngcontent-%COMP%] {\n  transition: opacity 1s linear;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUVGO0FBREU7RUFDRSx3QkFBQTtBQUdKOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFHRjs7QUFEQTtFQUNFLDZCQUFBO0FBSUYiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDM3cHg7XHJcbn1cclxuLnBvc2l0aW9uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICB9XHJcbn1cclxuLmFsZXJ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMCU7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgd2lkdGg6IDk5Ljd2dztcclxufVxyXG4uZmFkZSB7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBsaW5lYXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _services_log_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/log-handler.service */ 4943);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_internal_left_side_menu_left_side_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/internal/left-side-menu/left-side-menu.component */ 1573);
/* harmony import */ var _components_internal_right_side_menu_right_side_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/internal/right-side-menu/right-side-menu.component */ 910);
/* harmony import */ var _components_internal_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/internal/top-nav/top-nav.component */ 5025);
/* harmony import */ var _components_internal_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/internal/spinner/spinner.component */ 5836);
/* harmony import */ var _components_internal_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/internal/footer/footer.component */ 7252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-clipboard */ 4808);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;















class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ErrorHandler,
    useClass: _services_log_handler_service__WEBPACK_IMPORTED_MODULE_2__.LogHandlerService
  }],
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _components_internal_left_side_menu_left_side_menu_component__WEBPACK_IMPORTED_MODULE_3__.LeftSideMenuComponent, _components_internal_right_side_menu_right_side_menu_component__WEBPACK_IMPORTED_MODULE_4__.RightSideMenuComponent, _components_internal_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_5__.TopNavComponent, _components_internal_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent, _components_internal_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__.ClipboardModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _components_internal_left_side_menu_left_side_menu_component__WEBPACK_IMPORTED_MODULE_3__.LeftSideMenuComponent, _components_internal_right_side_menu_right_side_menu_component__WEBPACK_IMPORTED_MODULE_4__.RightSideMenuComponent, _components_internal_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_5__.TopNavComponent, _components_internal_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent, _components_internal_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent, ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__.ClipboardModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule]
  });
})();

/***/ }),

/***/ 3701:
/*!*********************************************************!*\
  !*** ./src/app/clients/base-client/base-ajax.client.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseAjaxClient: () => (/* binding */ BaseAjaxClient)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ 5486);
/* harmony import */ var src_app_models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/internal/dictionary-collection */ 7754);



class BaseAjaxClient {
  constructor() {
    var _this = this;
    this.GetHttpDataAsync = /*#__PURE__*/function () {
      var _ref = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (fullReqUrl, method, reqBody, headers, contentType) {
        if (contentType !== '' && contentType !== 'application/json') {
          throw new Error('Content Type other then JSON not supported at the moment.');
        }
        if (headers == null) {
          headers = new src_app_models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_1__.DictionaryCollection();
        }
        headers.Add('Content-Type', contentType);
        let reqBodyTxt = '';
        reqBodyTxt = JSON.stringify(reqBody);
        let response = yield _this.FetchAsync(fullReqUrl, method, headers, reqBodyTxt);
        if (response == null) {
          throw new Error('Response null after api call. please report the event to administrator.');
        }
        return response;
      });
      return function (_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();
    /**
     * EG - Headers > { 'content-type': 'application/json' };
     */
    this.FetchAsync = /*#__PURE__*/function () {
      var _ref2 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (fullReqUrl, reqMethod, headersToAdd, reqBody) {
        let hdrs = {};
        if (headersToAdd != null && headersToAdd.Count() > 0) {
          headersToAdd.Keys().forEach(key => {
            hdrs[key] = headersToAdd.Item(key);
          });
          // hdrs["crossOrigin"] =  true;
          let config = _this.GetAxiosConfig();
          config.url = fullReqUrl;
          config.method = reqMethod;
          config.headers = hdrs;
          config.data = reqBody;
          let response = yield axios__WEBPACK_IMPORTED_MODULE_2__["default"].request(config);
          return response;
        }
        return null;
      });
      return function (_x6, _x7, _x8, _x9) {
        return _ref2.apply(this, arguments);
      };
    }();
    this.GetAxiosConfig = () => {
      let config = {
        url: '',
        method: 'get',
        // `apiBaseUrl` will be prepended to `url` unless `url` is absolute.
        // It can be convenient to set `apiBaseUrl` for an instance of axios to pass relative URLs
        // to methods of that instance.
        apiBaseUrl: '',
        // `transformRequest` allows changes to the request data before it is sent to the server
        // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
        // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
        // FormData or Stream
        // You may modify the headers object.
        // transformRequest: [function (data, headers) {
        //     // Do whatever you want to transform the data
        //     return data;
        // }],
        // `transformResponse` allows changes to the response data to be made before
        // it is passed to then/catch
        // transformResponse: [function (data) {
        //     // Do whatever you want to transform the data
        //     return data;
        // }],
        // `data` is the data to be sent as the request body
        // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
        // When no `transformRequest` is set, must be of one of the following types:
        // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
        // - Browser only: FormData, File, Blob
        // - Node only: Stream, Buffer
        // `timeout` specifies the number of milliseconds before the request times out.
        // If the request takes longer than `timeout`, the request will be aborted.
        timeout: 0,
        // `withCredentials` indicates whether or not cross-site Access-Control requests
        // should be made using credentials
        withCredentials: false,
        // `adapter` allows custom handling of requests which makes testing easier.
        // Return a promise and supply a valid response (see lib/adapters/README.md).
        // adapter: function (config) {
        //     /* ... */
        // },
        // `responseType` indicates the type of data that the server will respond with
        // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
        //   browser only: 'blob'
        responseType: 'json',
        // `onUploadProgress` allows handling of progress events for uploads
        onUploadProgress(progressEvent) {
          // Do whatever you want with the native progress event
        },
        // `onDownloadProgress` allows handling of progress events for downloads
        onDownloadProgress(progressEvent) {
          // Do whatever you want with the native progress event
        },
        // `maxContentLength` defines the max size of the http response content in bytes allowed
        maxContentLength: 2000,
        // `validateStatus` defines whether to resolve or reject the promise for a given
        // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
        // or `undefined`), the promise will be resolved; otherwise, the promise will be
        // rejected.
        validateStatus(status) {
          // return status >= 200 && status < 300; // default
          // we do not throw exception from the promise, if needed handle at sinle place in base client.
          return true;
        },
        // `maxRedirects` defines the maximum number of redirects to follow in node.js.
        // If set to 0, no redirects will be followed.
        maxRedirects: 5 // default
        // // `cancelToken` specifies a cancel token that can be used to cancel the request
        // // (see Cancellation section below for details)
        // cancelToken: new CancelToken(function (cancel) {
        // })
      };

      return config;
    };
    this.IsSuccessCode = respStatusCode => {
      return respStatusCode >= 200 && respStatusCode < 300;
    };
  }
}

/***/ }),

/***/ 5165:
/*!********************************************************!*\
  !*** ./src/app/clients/base-client/base-api.client.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseApiClient: () => (/* binding */ BaseApiClient)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _models_internal_additional_request_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/internal/additional-request-details */ 916);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-constants */ 3465);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _base_ajax_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-ajax.client */ 3701);
/* harmony import */ var src_app_models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/internal/dictionary-collection */ 7754);
/* harmony import */ var src_app_models_service_api_contracts_base_api_response__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/service/api-contracts/base/api-response */ 4589);
/* harmony import */ var src_app_models_service_api_contracts_error_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/service/api-contracts/error-data */ 6188);
/* harmony import */ var src_app_models_service_enums_api_error_type_s_m_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/service/enums/api-error-type-s-m.enum */ 8443);
/* harmony import */ var _helpers_common_utils_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/common-utils.helper */ 3405);










class BaseApiClient extends _base_ajax_client__WEBPACK_IMPORTED_MODULE_4__.BaseAjaxClient {
  constructor(storageservice, storageCacheHelper, commonResponseCodeHandler) {
    var _this;
    super();
    _this = this;
    this.storageservice = storageservice;
    this.storageCacheHelper = storageCacheHelper;
    this.commonResponseCodeHandler = commonResponseCodeHandler;
    this.GetResponseAsync = /*#__PURE__*/function () {
      var _ref = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (relativeUrl, reqMethod = 'GET', reqBody = null, additionalRequestDetails = new _models_internal_additional_request_details__WEBPACK_IMPORTED_MODULE_1__.AdditionalRequestDetails(false)) {
        let responseEntity = null;
        let axiosResp = null;
        ;
        if (additionalRequestDetails == null) throw new Error('AdditionalRequestDetails cannot be null, do not pass if not required.');
        try {
          const fullUrlToHit = _helpers_common_utils_helper__WEBPACK_IMPORTED_MODULE_9__.CommonUtils.CombineUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiBaseUrl, relativeUrl);
          responseEntity = yield _this.storageCacheHelper.GetResponseFromDbIfPresent(fullUrlToHit, reqMethod, additionalRequestDetails);
          if (responseEntity != null) return responseEntity;else {
            // add headers and all. and call base Ajax
            additionalRequestDetails.headers = yield _this.AddCommonHeaders(additionalRequestDetails.headers);
            if (additionalRequestDetails.enableAuth === _models_internal_additional_request_details__WEBPACK_IMPORTED_MODULE_1__.Authentication.true) {
              let token = yield _this.storageservice.getDataFromAnyStorage(_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.DbKeys.ACCESS_TOKEN);
              if (token == null || token === '') throw new Error(`Token not found for URL - '${relativeUrl}'.`);else additionalRequestDetails.headers.Add('Authorization', 'Bearer ' + token);
            }
            if (reqMethod === 'GET') {
              // validations
              // eg no body, proper url etc
            } else if (reqMethod === 'POST') {
              // validations
            } else if (reqMethod === 'DELETE') {
              // validations
            }
            axiosResp = yield _this.GetHttpDataAsync(fullUrlToHit, reqMethod, reqBody, additionalRequestDetails.headers, additionalRequestDetails.contentType);
            if (_this.commonResponseCodeHandler.handlerDict.Keys().includes(axiosResp.status.toString())) {
              let errMessage = _this.commonResponseCodeHandler.handlerDict.Item(axiosResp.status.toString())(axiosResp);
              return _this.CreateGenericApiResponseObject(errMessage);
            }
            responseEntity = yield _this.CreateResponseEntityFromAxiosResp(axiosResp, additionalRequestDetails.custRespResolver);
            if (responseEntity == null) {
              throw new Error('Null Response Formed.');
            }
            // add response to cache if applicable
            yield _this.storageCacheHelper.AddOrUpdateResponseInCacheIfApplicable(fullUrlToHit, reqMethod, additionalRequestDetails, responseEntity);
            return responseEntity;
          }
        } catch (x) {
          let msg = '';
          if (x instanceof Error) msg = x.message;else msg = JSON.stringify(x);
          const resp = _this.CreateGenericApiResponseObject(msg);
          resp.axiosResponse = axiosResp;
          return resp;
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.CreateResponseEntityFromAxiosResp = /*#__PURE__*/function () {
      var _ref2 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (axiosResp, respResolver) {
        let retObject = null;
        if (_this.IsSuccessCode(axiosResp.status)) {
          if (respResolver != null) {
            const data = respResolver(axiosResp);
            data.axiosResponse = axiosResp;
            retObject = data;
          } else {
            const data = axiosResp.data; // need to check this how to remove additional props
            data.axiosResponse = axiosResp;
            retObject = data;
          }
        } else {
          // either response has boday as formatted response or not.
          if (axiosResp.data != null && axiosResp.data.isError !== undefined) {
            retObject = axiosResp.data;
            retObject.axiosResponse = axiosResp;
          }
        }
        if (retObject == null) {
          retObject = _this.CreateGenericApiResponseObject(`Unknown error occured - status code '${axiosResp.status}'`);
          retObject.axiosResponse = axiosResp;
        }
        return retObject;
      });
      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }();
    this.CreateGenericApiResponseObject = addMsg => {
      const resp = new src_app_models_service_api_contracts_base_api_response__WEBPACK_IMPORTED_MODULE_6__.ApiResponse();
      resp.isError = true;
      resp.errorData = new src_app_models_service_api_contracts_error_data__WEBPACK_IMPORTED_MODULE_7__.ErrorData();
      resp.errorData.displayMessage = addMsg;
      resp.errorData.apiErrorType = src_app_models_service_enums_api_error_type_s_m_enum__WEBPACK_IMPORTED_MODULE_8__.ApiErrorTypeSM.FrameworkException_Log;
      return resp;
    };
  }
  ApplyQueryFilterToUrl(currentUrlToHit, queryFilter) {
    if (queryFilter === undefined || queryFilter === null) {
      return currentUrlToHit;
    }
    let urlQuery = '';
    //code for search, orderby etc to be added needs to be as per the odata query format        
    if (queryFilter.skip >= 0 && queryFilter.top > 0) urlQuery += `$skip=${queryFilter.skip}&$top=${queryFilter.top}`;
    if (queryFilter.searchText != null && queryFilter.searchText != undefined && queryFilter.searchText.length > 0) {
      if (urlQuery != '' && urlQuery.length > 0) urlQuery += '&';
      urlQuery += `search=${queryFilter.searchText}`;
    }
    // add other query like orderby etc as per odata
    if (currentUrlToHit.indexOf('?') > 0) currentUrlToHit = `${currentUrlToHit}&${urlQuery}`;else currentUrlToHit = `${currentUrlToHit}?${urlQuery}`;
    return currentUrlToHit;
  }
  AddCommonHeaders(commonHeaders) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (commonHeaders == null) commonHeaders = new src_app_models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_5__.DictionaryCollection();
      commonHeaders.Add(_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.HeadersName.ApiType, _app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.HeadersValue.ApiType);
      commonHeaders.Add(_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.HeadersName.DevApk, _app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.HeadersValue.DevApk);
      commonHeaders.Add(_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.HeadersName.AppVersion, _app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.HeadersValue.AppVersion);
      // //cors headers
      // if (environment.enableCORSHeaders) {
      //     commonHeaders.Add(AppConstants.HeadersName.CORS_ALLOW_CREDENTIALS, AppConstants.HeadersValue.CORS_ALLOW_CREDENTIALS);
      //     commonHeaders.Add(AppConstants.HeadersName.CORS_ALLOW_METHODS, AppConstants.HeadersValue.CORS_ALLOW_METHODS);
      //     commonHeaders.Add(AppConstants.HeadersName.CORS_ALLOW_ORIGIN, AppConstants.HeadersValue.CORS_ALLOW_ORIGIN);
      // }
      return commonHeaders;
    })();
  }
}

/***/ }),

/***/ 4739:
/*!*********************************************************!*\
  !*** ./src/app/clients/helpers/common-logger.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonLogger: () => (/* binding */ CommonLogger)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _logger_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger.client */ 1174);
/* harmony import */ var src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/internal/log-location */ 2130);
/* harmony import */ var src_app_models_internal_log_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/internal/log-type */ 7493);
/* harmony import */ var src_app_models_internal_logger_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/internal/logger-config */ 3037);
/* harmony import */ var src_app_models_service_api_contracts_base_api_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/service/api-contracts/base/api-request */ 2517);
/* harmony import */ var src_app_models_service_api_contracts_error_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/service/api-contracts/error-log */ 7452);

var _class;








class CommonLogger {
  // self executing setter
  // static file: File
  constructor() {
    throw new Error('Cannot instantiate static class "Logger".');
  }
  static GetDefaultLoggerConfigObject() {
    const logConfig = new src_app_models_internal_logger_config__WEBPACK_IMPORTED_MODULE_6__.LoggerConfig();
    logConfig.exceptionLogLocations = [];
    logConfig.logLocations = [];
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.logToConsole) logConfig.logLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.Console);
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.logToApi) logConfig.logLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.Api);
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.logToElasticCluster) logConfig.logLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.ElasticCluster);
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.exceptionToApi) logConfig.exceptionLogLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.Api);
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.exceptionToConsole) logConfig.exceptionLogLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.Console);
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.exceptionToElasticCluster) logConfig.exceptionLogLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.ElasticCluster);
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.exceptionToFile) logConfig.exceptionLogLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.File);
    if (logConfig.exceptionLogLocations.length == 0) logConfig.exceptionLogLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.None);
    if (logConfig.logLocations.length == 0) logConfig.logLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.None);
    return logConfig;
  }
  static LogException(data) {
    var _this = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this.loggerConfig.exceptionLogLocations.includes(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.None)) return;
        if (_this.loggerConfig.exceptionLogLocations.includes(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.Console)) console.log(data);
        if (_this.loggerConfig.exceptionLogLocations.includes(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.File)) yield _this.AddItemToFile(src_app_models_internal_log_type__WEBPACK_IMPORTED_MODULE_5__.LogType.Log, data);
        if (_this.loggerConfig.exceptionLogLocations.includes(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.Api)) yield _this.AddItemToCommonApi(src_app_models_internal_log_type__WEBPACK_IMPORTED_MODULE_5__.LogType.Log, data);
      } catch (error) {
        console.log(error);
      }
    })();
  }
  static LogTextOrObject(data) {
    var _this2 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this2.loggerConfig.logLocations.includes(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.Console)) console.log(data);
        if (_this2.loggerConfig.logLocations.includes(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.File)) yield _this2.AddItemToFile(src_app_models_internal_log_type__WEBPACK_IMPORTED_MODULE_5__.LogType.Log, data);
      } catch (error) {
        console.log(error);
      }
    })();
  }
  static AddItemToFile(logType, data) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return; //for now
      try {} catch (error) {}
      //code to add item to local file    
    })();
  }

  static AddItemToCommonApi(logType, data) {
    var _this3 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // return; //for now
      try {
        let errorLogs = [];
        let errorLog = new src_app_models_service_api_contracts_error_log__WEBPACK_IMPORTED_MODULE_8__.ErrorLog();
        if (_this3.storageService) {
          // errorLog.username = await this.storageService.getFromStorage(AppConstants.DbKeys.USER_ID);
          errorLog.platform = yield _this3.storageService.getFromStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.DbKeys.PLATFORM);
        }
        errorLog.name = data.name;
        errorLog.message = data.message;
        errorLog.stack = data.stack;
        errorLog.logType = logType;
        if (data.name === undefined) errorLog.name = data.toString();
        if (data.message === undefined) errorLog.message = data.toString();
        errorLog.createdDateUTC = new Date().toUTCString();
        errorLogs.push(errorLog);
        var logData = new src_app_models_service_api_contracts_base_api_request__WEBPACK_IMPORTED_MODULE_7__.ApiRequest();
        logData.reqData = errorLogs;
        CommonLogger.loggerClient.SendLogsToServerAsync(errorLogs, null);
      } catch (error) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.logToConsole) console.log(error);
      }
    })();
  }
}
_class = CommonLogger;
_class.loggerConfig = (() => {
  return _class.GetDefaultLoggerConfigObject();
})();
// self executing setter
_class.loggerClient = (() => {
  return new _logger_client__WEBPACK_IMPORTED_MODULE_3__.LoggerClient();
})();

/***/ }),

/***/ 7968:
/*!************************************************************************!*\
  !*** ./src/app/clients/helpers/common-response-code-handler.helper.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonResponseCodeHandler: () => (/* binding */ CommonResponseCodeHandler)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-constants */ 3465);
/* harmony import */ var src_app_models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/internal/dictionary-collection */ 7754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ 9140);

var _class;





class CommonResponseCodeHandler {
  constructor(router, storageService) {
    this.router = router;
    this.storageService = storageService;
    // add common functions here
    this.handlerDict = new src_app_models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_2__.DictionaryCollection();
    this.AddCommonHandlers();
  }
  AddCommonHandlers() {
    var _this = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.handlerDict.Add('401', resp => {
        // this.commonService.presentToast(AppConstants.ErrorPrompts.Unauthorized_User);
        _this.router.navigate(['home-page']);
        _this.storageService.removeFromStorage(_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.DbKeys.ACCESS_TOKEN);
        return _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ErrorPrompts.Unauthorized_User;
      });
    })();
  }
}
_class = CommonResponseCodeHandler;
_class.ɵfac = function CommonResponseCodeHandler_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3405:
/*!********************************************************!*\
  !*** ./src/app/clients/helpers/common-utils.helper.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonUtils: () => (/* binding */ CommonUtils)
/* harmony export */ });
var _class;
class CommonUtils {}
_class = CommonUtils;
_class.CombineUrl = (urlPart1, urlPart2) => {
  let p1 = urlPart1.trim();
  if (p1.endsWith('/')) {
    p1 = p1.substring(0, p1.length - 1);
  }
  let p2 = urlPart2.trim();
  if (p2.startsWith('/')) {
    p2 = p2.substring(1);
  }
  return p1 + '/' + p2;
};

/***/ }),

/***/ 1927:
/*!*********************************************************!*\
  !*** ./src/app/clients/helpers/storage-cache.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageCache: () => (/* binding */ StorageCache)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var flatted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatted */ 2116);
/* harmony import */ var _common_logger_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-logger.helper */ 4739);
/* harmony import */ var src_app_models_internal_cache_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/internal/cache-item */ 4043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage.service */ 9140);

var _class;







class StorageCache {
  constructor(storageService) {
    var _this = this;
    this.storageService = storageService;
    this.GetResponseFromDbIfPresent = /*#__PURE__*/function () {
      var _ref = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (fullUrlToHit, reqMethod, additionalRequestDetails) {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.enableResponseCacheProcessing) return null;
        if (additionalRequestDetails.useCacheIfPossible && !additionalRequestDetails.forceGetResponseFromApi && reqMethod === 'GET') {
          let cacheItem = yield _this.GetCacheItemIfPresent(fullUrlToHit);
          if (cacheItem != null) {
            return cacheItem;
          }
        }
        return null;
      });
      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();
    this.AddOrUpdateResponseInCacheIfApplicable = /*#__PURE__*/function () {
      var _ref2 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (fullUrlToHit, reqMethod, additionalRequestDetails, responseEntity) {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.enableResponseCacheProcessing) return false;
        if (additionalRequestDetails.useCacheIfPossible && reqMethod === 'GET' && responseEntity.axiosResponse?.status === 200 && !responseEntity.isError) {
          _this.AddOrUpdateCacheItem(fullUrlToHit, responseEntity);
        }
        return false;
      });
      return function (_x4, _x5, _x6, _x7) {
        return _ref2.apply(this, arguments);
      };
    }();
    this.GetCacheItemIfPresent = /*#__PURE__*/function () {
      var _ref3 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (key) {
        if (key == null) return null;
        let cacheMap = yield _this.GetMapFromDb();
        if (cacheMap.has(key)) {
          const cacheItem = cacheMap.get(key);
          if (cacheItem != null) {
            if (cacheItem.ValidUptoDateTimeTicks >= new Date().valueOf()) {
              let item = cacheItem.Data;
              if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.LoggingInfo.cacheLogs) _common_logger_helper__WEBPACK_IMPORTED_MODULE_4__.CommonLogger.LogTextOrObject(`StorageCache - Response Returned form cache -- '${key}'`);
              return item;
            } else {
              if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.LoggingInfo.cacheLogs) _common_logger_helper__WEBPACK_IMPORTED_MODULE_4__.CommonLogger.LogTextOrObject(`StorageCache - Cache object expired -- '${key}'`);
            }
          }
        }
        return null;
      });
      return function (_x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    this.AddOrUpdateCacheItem = /*#__PURE__*/function () {
      var _ref4 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (key, data, cacheTimeout = 0) {
        if (key != null && data != null) {
          let cacheMap = null;
          cacheMap = yield _this.GetMapFromDb();
          if (cacheMap.has(key)) {
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.LoggingInfo.cacheLogs) _common_logger_helper__WEBPACK_IMPORTED_MODULE_4__.CommonLogger.LogTextOrObject(`StorageCache - Old Key Deleted -- '${key}'`);
            cacheMap.delete(key);
          }
          _this.RemoveExpiredKeys(cacheMap);
          const cacheItem = new src_app_models_internal_cache_item__WEBPACK_IMPORTED_MODULE_5__.CacheItem();
          let currDate = new Date();
          cacheItem.CreatedDateTimeTicks = currDate.valueOf();
          cacheTimeout = cacheTimeout === 0 ? src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiResponseCacheTimeoutInMinutes : cacheTimeout;
          currDate.setMinutes(currDate.getMinutes() + cacheTimeout);
          cacheItem.ValidUptoDateTimeTicks = currDate.valueOf();
          cacheItem.AccessKey = key;
          cacheItem.Data = data;
          cacheMap.set(key, cacheItem);
          if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.LoggingInfo.cacheLogs) _common_logger_helper__WEBPACK_IMPORTED_MODULE_4__.CommonLogger.LogTextOrObject(`StorageCache - New Key Added -- '${key}'`);
          yield _this.SaveOrUpdateMapInDb(cacheMap);
          return true;
        }
        return false;
      });
      return function (_x9, _x10) {
        return _ref4.apply(this, arguments);
      };
    }();
    this.RemoveExpiredKeys = cacheMap => {
      if (cacheMap != null) {
        let keysToDel = [];
        cacheMap.forEach((item, key) => {
          if (item != null && item.ValidUptoDateTimeTicks <= new Date().valueOf()) keysToDel.push(key);
        });
        keysToDel.forEach(key => {
          if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.LoggingInfo.cacheLogs) _common_logger_helper__WEBPACK_IMPORTED_MODULE_4__.CommonLogger.LogTextOrObject(`StorageCache - Item deleted after expiry -- '${key}'`);
          cacheMap.delete(key);
        });
      }
    };
    this.GetMapFromDb = /*#__PURE__*/(0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let cacheMap = null;
      let cacheMapTxt = yield _this.storageService.getFromStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.DbKeys.API_RESP_CACHE);
      if (cacheMapTxt != null && cacheMapTxt !== '') cacheMap = new Map(flatted__WEBPACK_IMPORTED_MODULE_3__.parse(cacheMapTxt));
      if (cacheMap != null && !(cacheMap instanceof Map)) cacheMap = null;
      return cacheMap == null ? new Map() : cacheMap;
    });
    this.SaveOrUpdateMapInDb = /*#__PURE__*/function () {
      var _ref6 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (cacheMap) {
        let cacheMapTxt = flatted__WEBPACK_IMPORTED_MODULE_3__.stringify(Array.from(cacheMap.entries()));
        yield _this.storageService.saveToStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.DbKeys.API_RESP_CACHE, cacheMapTxt);
        return true;
      });
      return function (_x11) {
        return _ref6.apply(this, arguments);
      };
    }();
  }
}
_class = StorageCache;
_class.ɵfac = function StorageCache_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1174:
/*!******************************************!*\
  !*** ./src/app/clients/logger.client.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggerClient: () => (/* binding */ LoggerClient)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var _base_client_base_ajax_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-client/base-ajax.client */ 3701);
/* harmony import */ var _models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/internal/dictionary-collection */ 7754);
/* harmony import */ var _models_service_api_contracts_base_api_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/service/api-contracts/base/api-request */ 2517);





class LoggerClient extends _base_client_base_ajax_client__WEBPACK_IMPORTED_MODULE_2__.BaseAjaxClient {
  constructor() {
    var _this;
    super();
    _this = this;
    this.SendLogsToServerAsync = /*#__PURE__*/function () {
      var _ref = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (logsArr, headers) {
        // think if we nee Base Req Here, if so, move class out of helpers.
        let apiReq = new _models_service_api_contracts_base_api_request__WEBPACK_IMPORTED_MODULE_4__.ApiRequest();
        apiReq.reqData = logsArr;
        if (headers == null) headers = new _models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_3__.DictionaryCollection();
        headers.Add(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.HeadersName.ApiType, src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.HeadersValue.ApiType);
        headers.Add(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.HeadersName.DevApk, src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.HeadersValue.DevApk);
        headers.Add(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.HeadersName.AppVersion, src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.HeadersValue.AppVersion);
        return _this.GetHttpDataAsync(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ApiUrls.LOG_URL, 'POST', apiReq, headers, 'application/json');
      });
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
  }
}

/***/ }),

/***/ 5963:
/*!*******************************************!*\
  !*** ./src/app/clients/version.client.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionClient: () => (/* binding */ VersionClient)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var _models_internal_additional_request_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/internal/additional-request-details */ 916);
/* harmony import */ var _base_client_base_api_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-client/base-api.client */ 5165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ 9140);
/* harmony import */ var _helpers_storage_cache_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/storage-cache.helper */ 1927);
/* harmony import */ var _helpers_common_response_code_handler_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/common-response-code-handler.helper */ 7968);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);

var _class;








class VersionClient extends _base_client_base_api_client__WEBPACK_IMPORTED_MODULE_3__.BaseApiClient {
  constructor(storageService, storageCache, commonResponseCodeHandler, http) {
    var _this;
    super(storageService, storageCache, commonResponseCodeHandler);
    _this = this;
    this.http = http;
    /**Get all version information */
    this.GetAllVersionInfo = /*#__PURE__*/(0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let resp = yield _this.GetResponseAsync(`${src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ApiUrls.VERSION_API_URL}`, "GET", null, new _models_internal_additional_request_details__WEBPACK_IMPORTED_MODULE_2__.AdditionalRequestDetails(false, _models_internal_additional_request_details__WEBPACK_IMPORTED_MODULE_2__.Authentication.false));
      return resp;
    });
  }
}
_class = VersionClient;
_class.ɵfac = function VersionClient_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_helpers_storage_cache_helper__WEBPACK_IMPORTED_MODULE_5__.StorageCache), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_helpers_common_response_code_handler_helper__WEBPACK_IMPORTED_MODULE_6__.CommonResponseCodeHandler), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 121:
/*!**********************************************!*\
  !*** ./src/app/components/base.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseComponent: () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);

class BaseComponent {
  constructor(commonService, exceptionHandler) {
    this._commonService = commonService;
    this._exceptionHandler = exceptionHandler;
  }
  loadPageData() {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
}

/***/ }),

/***/ 7252:
/*!****************************************************************!*\
  !*** ./src/app/components/internal/footer/footer.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
var _class;



class FooterComponent {
  constructor(commonService) {
    this._commonService = commonService;
  }
}
_class = FooterComponent;
_class.ɵfac = function FooterComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["footer-nav"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 30,
  vars: 0,
  consts: [[1, "navbar", "fixed-bottom", "navbar-expand-sm", "navbar-dark", "bg-dark"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["aria-current", "page", "href", "#", 1, "nav-link", "active"], ["href", "#", 1, "nav-link"], ["href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "disabled"], [1, "nav-item", "dropup"], ["href", "#", "id", "dropdown10", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "dropdown10", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Bottom navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7)(12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Link");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7)(15, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 11)(18, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Dropup");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ul", 13)(21, "li")(22, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li")(25, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Another action");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li")(28, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Something else here");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1573:
/*!********************************************************************************!*\
  !*** ./src/app/components/internal/left-side-menu/left-side-menu.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeftSideMenuComponent: () => (/* binding */ LeftSideMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
var _class;




function LeftSideMenuComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Start Bootstrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Shortcuts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " MenuOptions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul", 6)(19, "li", 7)(20, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Test1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 7)(24, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Test2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 7)(28, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Test3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0._commonService.layoutViewModel.leftMenuClass);
  }
}
class LeftSideMenuComponent {
  constructor(commonService) {
    this._commonService = commonService;
  }
}
_class = LeftSideMenuComponent;
_class.ɵfac = function LeftSideMenuComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["left-side-menu"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [["class", "border-end bg-white", "id", "left-sidebar-wrapper", 3, "class", 4, "ngIf"], ["id", "left-sidebar-wrapper", 1, "border-end", "bg-white"], [1, "sidebar-heading", "border-bottom", "bg-light"], [1, "list-group", "list-group-flush"], ["href", "#!", 1, "list-group-item", "list-group-item-action", "list-group-item-light", "p-3"], ["data-bs-target", "#pageSubmenuLeft", "data-bs-toggle", "collapse", "aria-expanded", "false", 1, "list-group-item", "list-group-item-action", "list-group-item-light", "p-3", "dropdown-toggle"], ["id", "pageSubmenuLeft", 1, "btn-toggle-nav", "list-unstyled", "fw-normal", "pb-1", "small"], [1, "list-group-item", "p-3"], ["href", "#"], [1, "bi", "bi-1-circle"]],
  template: function LeftSideMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LeftSideMenuComponent_div_0_Template, 31, 2, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._commonService.layoutViewModel.showLeftMenu);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 910:
/*!**********************************************************************************!*\
  !*** ./src/app/components/internal/right-side-menu/right-side-menu.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RightSideMenuComponent: () => (/* binding */ RightSideMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
var _class;




function RightSideMenuComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Start Bootstrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Shortcuts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " MenuOptions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul", 6)(19, "li", 7)(20, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Test1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 7)(24, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Test2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 7)(28, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Test3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0._commonService.layoutViewModel.rightMenuClass);
  }
}
class RightSideMenuComponent {
  constructor(commonService) {
    this._commonService = commonService;
  }
}
_class = RightSideMenuComponent;
_class.ɵfac = function RightSideMenuComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["right-side-menu"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [["class", "border-end bg-white", "id", "right-sidebar-wrapper", 3, "class", 4, "ngIf"], ["id", "right-sidebar-wrapper", 1, "border-end", "bg-white"], [1, "sidebar-heading", "border-bottom", "bg-light"], [1, "list-group", "list-group-flush"], ["href", "#!", 1, "list-group-item", "list-group-item-action", "list-group-item-light", "p-3"], ["href", "#pageSubmenuRight", "data-bs-toggle", "collapse", "aria-expanded", "false", 1, "list-group-item", "list-group-item-action", "list-group-item-light", "p-3", "dropdown-toggle"], ["id", "pageSubmenuRight"], [1, "list-group-item", "p-3"], ["href", "#"], [1, "bi", "bi-1-circle"]],
  template: function RightSideMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RightSideMenuComponent_div_0_Template, 31, 2, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._commonService.layoutViewModel.showRightMenu);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5836:
/*!******************************************************************!*\
  !*** ./src/app/components/internal/spinner/spinner.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerComponent: () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
var _class;




function SpinnerComponent_div_0_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1._commonService.loaderInfo.message, " ");
  }
}
function SpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2)(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4)(5, "div", 4)(6, "div", 4)(7, "div", 4)(8, "div", 4)(9, "div", 4)(10, "div", 4)(11, "div", 4)(12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SpinnerComponent_div_0_p_13_Template, 2, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0._commonService.loaderInfo.showLoader && ctx_r0._commonService.loaderInfo.message !== "");
  }
}
class SpinnerComponent {
  constructor(commonService) {
    this._commonService = commonService;
  }
}
_class = SpinnerComponent;
_class.ɵfac = function SpinnerComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["spinner"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "container"], [1, "row"], ["id", "loader"], [1, "dot"], [1, "loading"], ["class", "spinner-message", 4, "ngIf"], [1, "spinner-message"]],
  template: function SpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 14, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._commonService.loaderInfo.showLoader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["#loader[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n\n#loader[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 87.5px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]::before {\n  border-radius: 100%;\n  content: \"\";\n  height: 87.5px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: scale(0);\n  width: 87.5px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1) {\n  transform: rotate(45deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1)::before {\n  animation: 0.8s linear 0.1s normal none infinite running _ngcontent-%COMP%_load;\n  background: #00ff80 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2) {\n  transform: rotate(90deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2)::before {\n  animation: 0.8s linear 0.2s normal none infinite running _ngcontent-%COMP%_load;\n  background: #00ffea none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3) {\n  transform: rotate(135deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3)::before {\n  animation: 0.8s linear 0.3s normal none infinite running _ngcontent-%COMP%_load;\n  background: #00aaff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4) {\n  transform: rotate(180deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4)::before {\n  animation: 0.8s linear 0.4s normal none infinite running _ngcontent-%COMP%_load;\n  background: #0040ff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5) {\n  transform: rotate(225deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5)::before {\n  animation: 0.8s linear 0.5s normal none infinite running _ngcontent-%COMP%_load;\n  background: #2a00ff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6) {\n  transform: rotate(270deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6)::before {\n  animation: 0.8s linear 0.6s normal none infinite running _ngcontent-%COMP%_load;\n  background: #9500ff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7) {\n  transform: rotate(315deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7)::before {\n  animation: 0.8s linear 0.7s normal none infinite running _ngcontent-%COMP%_load;\n  background: magenta none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8) {\n  transform: rotate(360deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8)::before {\n  animation: 0.8s linear 0.8s normal none infinite running _ngcontent-%COMP%_load;\n  background: #ff0095 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  bottom: -40px;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  width: 180px;\n}\n\n@keyframes _ngcontent-%COMP%_load {\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_load {\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n.spinner-message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnRlcm5hbC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLHdCQUFBO0FBQ0o7O0FBRUU7RUFDRSw2REFBQTtFQUNBLDBDQUFBO0FBQ0o7O0FBRUU7RUFDRSx3QkFBQTtBQUNKOztBQUVFO0VBQ0UsNkRBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLDZEQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSw2REFBQTtFQUNBLDBDQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsNkRBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLDZEQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSw2REFBQTtFQUNBLDBDQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsNkRBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVFO0VBQ0UsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VBQ0o7QUFDRjtBQUVFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUFBSjtBQUNGO0FBR0U7RUFDRSxrQkFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiI2xvYWRlciB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdCB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogODcuNXB4O1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogODcuNXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIHdpZHRoOiA4Ny41cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMSkge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzEpOjpiZWZvcmUge1xyXG4gICAgYW5pbWF0aW9uOiAwLjhzIGxpbmVhciAwLjFzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgbG9hZDtcclxuICAgIGJhY2tncm91bmQ6ICMwMGZmODAgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICB9XHJcbiAgXHJcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bisyKSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMik6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuMnMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gICAgYmFja2dyb3VuZDogIzAwZmZlYSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzMpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMyk6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuM3Mgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gICAgYmFja2dyb3VuZDogIzAwYWFmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzQpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNCk6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gICAgYmFja2dyb3VuZDogIzAwNDBmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzUpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNSk6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNXMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gICAgYmFja2dyb3VuZDogIzJhMDBmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzYpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNik6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNnMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gICAgYmFja2dyb3VuZDogIzk1MDBmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzcpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNyk6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuN3Mgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gICAgYmFja2dyb3VuZDogbWFnZW50YSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzgpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rOCk6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuOHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDA5NSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5sb2FkaW5nIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm90dG9tOiAtNDBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBsb2FkIHtcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGxvYWQge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGlubmVyLW1lc3NhZ2Uge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5025:
/*!******************************************************************!*\
  !*** ./src/app/components/internal/top-nav/top-nav.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopNavComponent: () => (/* binding */ TopNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base.component */ 121);
/* harmony import */ var src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/top-nav.viewmodel */ 6059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var src_app_services_top_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/top-nav.service */ 4324);
/* harmony import */ var src_app_services_zoom_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/zoom.service */ 6447);
var _class;














const _c0 = function () {
  return ["/common"];
};
const _c1 = function () {
  return ["/engineering"];
};
const _c2 = function () {
  return ["/banking"];
};
const _c3 = function () {
  return ["/health"];
};
const _c4 = function () {
  return ["/others"];
};
const _c5 = function () {
  return ["/favorites"];
};
const _c6 = function (a0) {
  return {
    activeTheme: a0
  };
};
class TopNavComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, document, logService, topNavService, zoomService) {
    super(commonService, logService);
    this.document = document;
    this.topNavService = topNavService;
    this.zoomService = zoomService;
    this.viewModel = new src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_1__.TopNavViewModel();
  }
  ngOnInit() {
    const storedValue = localStorage.getItem("DarkTheme");
    this.viewModel.getThemeFromLocalStorage = localStorage.getItem("Theme");
    if (this.viewModel.getThemeFromLocalStorage != null) {
      this.viewModel.storedTheme = this.viewModel.getThemeFromLocalStorage;
    } else {
      this.viewModel.getThemeFromLocalStorage = "Light";
    }
    this.getActiveTheme();
    if (storedValue !== null) {
      this.viewModel.isDarkThemeChecked = JSON.parse(storedValue);
    }
    if (this.viewModel.isDarkThemeChecked) {
      this.document.body.classList.remove("light-theme");
      this.document.body.classList.add("dark-theme");
    }
    //get current version from environment.ts
    this.viewModel.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.applicationVersion;
  }
  // //////////////////////// for themeing
  // Set a default theme
  setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("Theme", theme);
    this.viewModel.getThemeFromLocalStorage = theme;
  }
  /* get current theme which user already setted */
  getActiveTheme() {
    document.documentElement.setAttribute("data-theme", this.viewModel.getThemeFromLocalStorage);
  }
  /////// search function to share search value globally
  onInputChange() {
    this.topNavService.updateSharedData(this.viewModel.inputValue);
  }
  // /////////////////////////////  zoom functionality/ ///  ///////////
  zoomIn() {
    const newZoomFactor = this.zoomService.getZoomFactor() + 0.1;
    this.zoomService.setZoomFactor(newZoomFactor);
  }
  resetZoom() {
    const newZoomFactor = 1;
    this.zoomService.setZoomFactor(newZoomFactor);
  }
  zoomOut() {
    const newZoomFactor = this.zoomService.getZoomFactor() - 0.1;
    if (newZoomFactor >= 1) {
      this.zoomService.setZoomFactor(newZoomFactor);
    }
  }
  // change decimal value on user input
  onPreciseChange(event) {
    const inputElement = event.target;
    // Remove leading '-' sign
    if (inputElement.value.startsWith("-")) {
      inputElement.value = inputElement.value.slice(1);
    }
    // Restrict values above 25
    const enteredValue = parseFloat(inputElement.value);
    if (isNaN(enteredValue) || enteredValue > 25) {
      inputElement.value = "";
    }
  }
}
_class = TopNavComponent;
_class.ɵfac = function TopNavComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_4__.LogHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_top_nav_service__WEBPACK_IMPORTED_MODULE_5__.TopNavService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_zoom_service__WEBPACK_IMPORTED_MODULE_6__.ZoomService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["top-nav"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
  decls: 109,
  vars: 25,
  consts: [[1, "navbar", "navbar-expand-xl"], [1, "container-fluid"], ["data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-brand", "d-xl-none", "fw-bold", "dropdown-toggle"], ["routerLink", "/common", 1, "navbar-brand", "d-none", "d-xl-block", "fw-bold"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-0", "mb-lg-0"], [1, "nav-item"], ["routerLinkActive", "active", "data-bs-toggle", "collapse", "data-bs-target", ".navbar-collapse.show", 1, "nav-link", "common", 3, "routerLink", "tabIndex"], ["routerLinkActive", "active", "data-bs-toggle", "collapse", "data-bs-target", ".navbar-collapse.show", 1, "nav-link", 3, "routerLink"], [1, "d-flex", "fixed", "top-bar"], ["data-toggle", "tooltip", "title", "Reset Zoom", 1, "bi", "bi-x-circle", "fs-2", "mx-2", 3, "click"], ["data-toggle", "tooltip", "title", "Zoom Out", 1, "bi", "bi-zoom-out", "fs-2", "mx-2", "zoom", 3, "click"], ["data-toggle", "tooltip", "title", "Zoom In", 1, "bi", "bi-zoom-in", "fs-2", "mx-2", 3, "click"], ["type", "text", "placeholder", "Search", "aria-label", "Search", "placeholder", "Search", "data-toggle", "tooltip", "title", "Search Converters", 1, "form-control", "m-2", "search", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "data-bs-toggle", "offcanvas", "href", "#offcanvasExample", "aria-controls", "offcanvasExample", "aria-label", "Toggle navigation", "data-toggle", "tooltip", "title", "Settings!", 1, "bi", "bi-gear", "fs-2"], ["tabindex", "-1", "id", "offcanvasExample", "aria-labelledby", "offcanvasExampleLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "offcanvasExampleLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close"], [1, "m-0", "p-0"], [1, "offcanvas-body"], [1, ""], [1, "nav-item", "border-bottom"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "form-check-label", "pb-2"], [1, "dropdown"], ["data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "form-check-label", "py-2", "dropdown-toggle"], [1, "dropdown-menu"], [3, "ngClass", "click"], ["data-bs-dismiss", "offcanvas", 1, "dropdown-item"], ["for", "decimal", 1, "form-check-label", "pb-2", "pt-2"], ["id", "decimal", "max", "25", "min", "1", "type", "number", "placeholder", "Max Value 25", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], [1, "nav-item", "border-bottom", "position-absolute", "bottom-0"], [1, "form-check-label", "py-2"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-5"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["href", "mailto:support@renosoftwares.com"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"]],
  template: function TopNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Unit Converter ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Unit Converter ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4)(7, "ul", 5)(8, "li", 6)(9, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Common");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "li", 6)(12, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Engineering");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "li", 6)(15, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Banking");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "li", 6)(18, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Health");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "li", 6)(21, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Others");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "li", 6)(24, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Favorites");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 9)(27, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TopNavComponent_Template_i_click_27_listener() {
        return ctx.resetZoom();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TopNavComponent_Template_i_click_28_listener() {
        return ctx.zoomOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TopNavComponent_Template_i_click_29_listener() {
        return ctx.zoomIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TopNavComponent_Template_input_ngModelChange_30_listener($event) {
        return ctx.viewModel.inputValue = $event;
      })("keyup", function TopNavComponent_Template_input_keyup_30_listener() {
        return ctx.onInputChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 15)(33, "div", 16)(34, "h5", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "hr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 20)(39, "div")(40, "ul", 21)(41, "li", 22)(42, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, " About ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "li", 22)(45, "div", 24)(46, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, " Themes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "ul", 26)(49, "li", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TopNavComponent_Template_li_click_49_listener() {
        return ctx.setTheme("Light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Light");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "li", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TopNavComponent_Template_li_click_52_listener() {
        return ctx.setTheme("Blue");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Blue");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "li", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TopNavComponent_Template_li_click_55_listener() {
        return ctx.setTheme("Dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "li", 22)(59, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Set Decimal Value");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function TopNavComponent_Template_input_ngModelChange_61_listener($event) {
        return ctx._commonService.layoutVM.precision = $event;
      })("keypress", function TopNavComponent_Template_input_keypress_61_listener($event) {
        return ctx.onPreciseChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "li", 31)(63, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 33)(66, "div", 34)(67, "div", 35)(68, "div", 36)(69, "h1", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 39)(73, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, " Welcome to our unit converter app! We're a dedicated team of developers committed to simplifying unit conversions for everyday tasks. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Key Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "ul")(78, "li")(79, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "User-Friendly:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, " Our app is designed for ease of use, ensuring quick and hassle-free conversions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "li")(83, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "Wide Range of Units:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, " We support various unit categories like length, temperature, weight, and more. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "li")(87, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Instant Results:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, " Get accurate results in real-time. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "li")(91, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "Customization:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, " Tailor the app to your needs by selecting your most-used units as Favorites. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "li")(95, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "Offline Mode:");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, " No internet? No problem! Our app works offline. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, " We value your feedback and are here to enhance your experience. Reach out at ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](103, "support@Renosoftwares.com ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, "Thank you for choosing our unit converter app!");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 41)(107, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](108, " Close ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c0))("tabIndex", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](14, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](16, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](17, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](18, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.viewModel.inputValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](19, _c6, ctx.viewModel.getThemeFromLocalStorage === "Light"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](21, _c6, ctx.viewModel.getThemeFromLocalStorage === "Blue"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](23, _c6, ctx.viewModel.getThemeFromLocalStorage === "Dark"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx._commonService.layoutVM.precision);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Version ", ctx.viewModel.version, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkActive],
  styles: [".navbar[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border-color);\n  width: 100%;\n  height: auto;\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 999;\n  background-color: var(--primary-bg-color);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border-color: var(--border-color);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .bi-list[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 16px;\n  letter-spacing: 1px;\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--active-color);\n}\n.navbar[_ngcontent-%COMP%]   .bi-zoom-out[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .bi-zoom-in[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .bi-gear[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .bi-x-lg[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .bi-x-circle[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  cursor: pointer;\n  font-size: 20px !important;\n  margin: auto;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  padding-top: 5px;\n  z-index: 9999;\n  right: 10px;\n}\n\n.modal[_ngcontent-%COMP%] {\n  --bs-modal-width: 900px;\n}\n\n.offcanvas[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%] {\n  z-index: 999999999;\n}\n\n.offcanvas[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.offcanvas[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.offcanvas[_ngcontent-%COMP%]   .activeTheme[_ngcontent-%COMP%] {\n  background-color: blue !important;\n  cursor: pointer;\n  border-radius: 10px;\n}\n.offcanvas[_ngcontent-%COMP%]   .activeTheme[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.offcanvas[_ngcontent-%COMP%]   .activeTheme[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: black !important;\n  border-radius: 10px;\n}\n\n@media (min-width: 992px) and (max-width: 1040px) {\n  .navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 10px 0;\n  }\n  .navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    border-bottom: 1px solid var(--border-color);\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    right: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnRlcm5hbC90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQUFGO0FBQ0U7RUFDRSx3QkFBQTtFQUNBLGVBQUE7QUFDSjtBQUNFO0VBQ0UsaUNBQUE7QUFDSjtBQUFJO0VBQ0Usd0JBQUE7QUFFTjtBQUNFO0VBQ0UsZUFBQTtBQUNKO0FBQ0k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFHQSxlQUFBO0FBRE47QUFHSTtFQUNFLDBCQUFBO0FBRE47QUFJRTs7Ozs7RUFLRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLHVCQUFBO0FBSEY7O0FBS0E7O0VBRUUsa0JBQUE7QUFGRjs7QUFLRTtFQUNFLFdBQUE7QUFGSjtBQUdJO0VBQ0UsZUFBQTtBQUROO0FBSUU7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUZKO0FBR0k7RUFDRSx1QkFBQTtBQUROO0FBS0U7RUFDRSxrQ0FBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtFQUhGO0FBQ0Y7QUFLQTtFQUNFO0lBQ0UsZUFBQTtFQUhGO0VBSUU7SUFDRSw0Q0FBQTtFQUZKO0VBS0E7SUFDRSxXQUFBO0VBSEY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRvcCBOYXYgU2NzcyBieSBCaWxhbFxyXG4ubmF2YmFyIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmctY29sb3IpO1xyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gICAgLmJpLWxpc3Qge1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uYXYtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjazsvXHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYmktem9vbS1vdXQsXHJcbiAgLmJpLXpvb20taW4sXHJcbiAgLmJpLWdlYXIsXHJcbiAgLmJpLXgtbGcsXHJcbiAgLmJpLXgtY2lyY2xlIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLnRvcC1iYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIC8vIGNvbG9yOiBibGFjaztcclxufVxyXG4ubW9kYWwge1xyXG4gIC0tYnMtbW9kYWwtd2lkdGg6IDkwMHB4O1xyXG59XHJcbi5vZmZjYW52YXMsXHJcbi5tb2RhbCB7XHJcbiAgei1pbmRleDogOTk5OTk5OTk5O1xyXG59XHJcbi5vZmZjYW52YXMge1xyXG4gIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGkge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hY3RpdmVUaGVtZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZVRoZW1lIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEwNDBweCkge1xyXG4gIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAubmF2YmFyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICAudG9wLWJhciB7XHJcbiAgICByaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 916:
/*!***************************************************************!*\
  !*** ./src/app/models/internal/additional-request-details.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdditionalRequestDetails: () => (/* binding */ AdditionalRequestDetails),
/* harmony export */   Authentication: () => (/* binding */ Authentication)
/* harmony export */ });
var Authentication;
(function (Authentication) {
  Authentication[Authentication["true"] = 0] = "true";
  Authentication[Authentication["false"] = 1] = "false";
})(Authentication || (Authentication = {}));
class AdditionalRequestDetails {
  constructor(useCacheIfPossible, enableAuth = Authentication.true) {
    this.enableAuth = Authentication.true;
    this.useCacheIfPossible = false;
    this.forceGetResponseFromApi = false;
    this.headers = null;
    this.contentType = 'application/json';
    this.custRespResolver = null;
    this.useCacheIfPossible = useCacheIfPossible;
    this.enableAuth = enableAuth;
  }
}

/***/ }),

/***/ 4043:
/*!***********************************************!*\
  !*** ./src/app/models/internal/cache-item.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheItem: () => (/* binding */ CacheItem)
/* harmony export */ });
class CacheItem {
  constructor() {
    this.CreatedDateTimeTicks = -1;
    this.ValidUptoDateTimeTicks = -1;
    this.AccessKey = '';
  }
}

/***/ }),

/***/ 3882:
/*!**************************************************!*\
  !*** ./src/app/models/internal/common-models.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllConverters: () => (/* binding */ AllConverters),
/* harmony export */   LayoutVM: () => (/* binding */ LayoutVM)
/* harmony export */ });
class LayoutVM {
  constructor() {
    this.precision = 10;
    this.showHideClass = "";
  }
}
class AllConverters {
  constructor() {
    this.commonConverters = [{
      router: "/time",
      imgSrc: "assets/images/time.png",
      title: "Time",
      isFavorite: false,
      searchArrayFromConverters: ["Time ", "Seconds", "Minutes", "Hours", "Days", "Weeks", "Months", "Years", "Decades"]
    }, {
      router: "/weight",
      imgSrc: "assets/images/weighing-machine.png",
      title: "Weight",
      isFavorite: false,
      searchArrayFromConverters: ["Weight ", "Pounds", "Kilograms", "Grams", "Milligrams", "Micrograms", "Ounces", "Stones", "Ton", "Quintal"
      // Add more unit names as needed
      ]
    }, {
      router: "/area",
      imgSrc: "assets/images/area-graph.png",
      title: "Area",
      isFavorite: false,
      searchArrayFromConverters: ["Area ", "Square meters", "Square kilometers", "Square feet", "Acres", "Hectares", "Square Mile", "Square Yard"]
    }, {
      router: "/speed",
      imgSrc: "assets/images/speedometer.png",
      title: "Speed",
      isFavorite: false,
      searchArrayFromConverters: ["Speed ", "Meters per second", "Kilometers per hour", "Miles per hour", "Feet per second", "Knots", "Kilometer per second"]
    }, {
      router: "/length",
      imgSrc: "assets/images/measuring-tape.png",
      title: "Length",
      isFavorite: false,
      searchArrayFromConverters: ["Length ", "Meters", "Kilometers", "Nanometers", "Inches", "Feet", "Yards", "Miles"]
    }, {
      router: "/temperature",
      imgSrc: "assets/images/temprature.png",
      title: "Temperature",
      isFavorite: false,
      searchArrayFromConverters: ["Temperature ", "temp", "Temprature", "Celcius", "Farenheit", "Kelvin"]
    },
    // {
    //   router: "/currency",
    //   imgSrc: "assets/images/currency.png",
    //   title: "Currency",
    //   isFavorite: false,
    //   searchArrayFromConverters: ["currency "],
    // },
    {
      router: "/volume",
      imgSrc: "assets/images/volume.png",
      title: "Volume",
      isFavorite: false,
      searchArrayFromConverters: ["Volume ", "Cubic meters", "Cubic kilometers",
      // "Cubic centimeters",
      "Cubic millimeters", "Cubic feet", "Cubic inches", "Liters", "Milliliters", "Gallons", "Gallons"]
    }];
    this.engineeringConverters = [{
      router: "/power",
      imgSrc: "assets/images/power.png",
      title: "Power",
      searchArrayFromConverters: ["Power ", "Watt", "Kilowatt", "Horsepower", "Calorie per second", "BTU per hour", "Erg per second"],
      isFavorite: false
    }, {
      router: "/frequency",
      imgSrc: "assets/images/frequency.png",
      title: "Frequency",
      isFavorite: false,
      searchArrayFromConverters: ["Frequency ", "Hertz", "Kilohertz", "Megahertz", "Gigahertz"]
    }, {
      router: "/force",
      imgSrc: "assets/images/force.png",
      title: "Force",
      searchArrayFromConverters: ["Force ", "Newton", "Kilogram-force", "Dyne", "Pound-force"],
      isFavorite: false
    }, {
      router: "/work",
      imgSrc: "assets/images/work.png",
      title: "Work/Energy",
      searchArrayFromConverters: ["Energy ", "Work/energy ", "Work energy ", "Workenergy ", "Work/ energy ", "Joule", "Kilojoule", "Calorie", "Kilocalorie", "Erg", "Watt-hour"],
      isFavorite: false
    }, {
      router: "/pressure",
      imgSrc: "assets/images/pressure.png",
      title: "Pressure",
      searchArrayFromConverters: ["Pressure ", "Pascal", "Kilopascal", "Bar", "Atmosphere", "Pound per Square Inch", "Torr"],
      isFavorite: false
    }, {
      router: "/current",
      imgSrc: "assets/images/current.png",
      title: "Current",
      searchArrayFromConverters: ["Current ", "Ampere", "Milliampere", "Microampere", "Kiloampere", "Megaampere"],
      isFavorite: false
    }, {
      router: "/planeangle",
      imgSrc: "assets/images/planeangle.png",
      title: "Plane Angle",
      searchArrayFromConverters: ["Plane Angle ", "Degree", "Radian", "Gradian", "Minute of Arc", "Second of Arc"],
      isFavorite: false
    }];
    // banking converters
    this.bankingConverters = [{
      router: "/simple-interest",
      imgSrc: "assets/images/simpleinterest.png",
      title: "Simple Interest",
      isFavorite: false,
      searchArrayFromConverters: ["simple interest "]
    }, {
      router: "/compound-interest",
      imgSrc: "assets/images/compoundinterest.png",
      title: "Compound Interest",
      isFavorite: false,
      searchArrayFromConverters: ["compound interest "]
    }, {
      router: "/discount",
      imgSrc: "assets/images/discounts.png",
      title: "Discount",
      isFavorite: false,
      searchArrayFromConverters: ["Discount calculator "]
    }];
    // health converters
    this.healthConverters = [{
      router: "/bmi",
      imgSrc: "assets/images/bmi.png",
      title: "BMI Calculator",
      isFavorite: false,
      searchArrayFromConverters: ["BMI calculator "]
    }, {
      router: "/bmr",
      imgSrc: "assets/images/bmr.png",
      title: "BMR Calculator",
      isFavorite: false,
      searchArrayFromConverters: ["BMR calculator "]
    }, {
      router: "/waterintake",
      imgSrc: "assets/images/waterintake.png",
      title: "Water Intake",
      isFavorite: false,
      searchArrayFromConverters: ["water intake ", "water", "fluid intake"]
    }];
    /////////////////////////// ohter convertsers start from here
    this.otherConverters = [{
      router: "/cooking",
      imgSrc: "assets/images/cooking.png",
      title: "Cooking",
      searchArrayFromConverters: ["cooking ", "Cup", "Teaspoon", "Tablespoon", "Fluid Ounce", "Pint", "Quart"],
      isFavorite: false
    }, {
      router: "/timezone",
      imgSrc: "assets/images/timezone.png",
      title: "World Clock",
      searchArrayFromConverters: ["worldclock ", "world clock "],
      isFavorite: false
    }, {
      router: "/fuelefficiency",
      imgSrc: "assets/images/fuelefficiency.png",
      title: "Fuel Efficiency",
      searchArrayFromConverters: ["fuel", "fuelefficiency", "fuel efficiency ", "Miles per Gallon", "Kilometers per Liter", "Liters per 100 Kilometers", "Miles per Liter", "Gallons per 100 Miles"],
      isFavorite: false
    }, {
      router: "/dob",
      imgSrc: "assets/images/dob.png",
      title: "Age Calculator",
      searchArrayFromConverters: ["dob", "dob calculator ", "birth", "birthday", "born", "age", "age calculator", "ages"],
      isFavorite: false
    }, {
      router: "/storage",
      imgSrc: "assets/images/storage.png",
      title: "Computer Data",
      searchArrayFromConverters: ["Computer Data ", "storage", "Bit", "Byte", "Kilobit (Kb)", "Kilobyte (KB)", "Megabit (Mb)", "Megabyte (MB)", "Gigabit (Gb)", "Gigabyte (GB)", "Terabit (Tb)", "Terabyte (TB)", "Petabit (Pb)", "Petabyte (PB)", "Exabit (Eb)", "Exabyte (EB)"],
      isFavorite: false
    }];
  }
}

/***/ }),

/***/ 7754:
/*!**********************************************************!*\
  !*** ./src/app/models/internal/dictionary-collection.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DictionaryCollection: () => (/* binding */ DictionaryCollection)
/* harmony export */ });
// the K should always be string , no way  to enforce it though
class DictionaryCollection {
  constructor() {
    this.items = {};
    this.count = 0;
  }
  ContainsKey(key) {
    return this.items.hasOwnProperty(key);
  }
  Count() {
    return this.count;
  }
  Add(key, value) {
    if (!this.items.hasOwnProperty(key)) {
      this.count++;
    }
    this.items[key] = value;
  }
  Remove(key) {
    const val = this.items[key];
    delete this.items[key];
    this.count--;
    return val;
  }
  Item(key) {
    return this.items[key];
  }
  Keys() {
    const keySet = [];
    for (const prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        keySet.push(prop);
      }
    }
    return keySet;
  }
  Values() {
    const values = [];
    for (const prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        values.push(this.items[prop]);
      }
    }
    return values;
  }
}

/***/ }),

/***/ 2130:
/*!*************************************************!*\
  !*** ./src/app/models/internal/log-location.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLocation: () => (/* binding */ LogLocation)
/* harmony export */ });
var LogLocation;
(function (LogLocation) {
  LogLocation[LogLocation["None"] = 0] = "None";
  LogLocation[LogLocation["File"] = 1] = "File";
  LogLocation[LogLocation["Console"] = 2] = "Console";
  LogLocation[LogLocation["Api"] = 3] = "Api";
  LogLocation[LogLocation["ElasticCluster"] = 4] = "ElasticCluster";
})(LogLocation || (LogLocation = {}));

/***/ }),

/***/ 7493:
/*!*********************************************!*\
  !*** ./src/app/models/internal/log-type.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogType: () => (/* binding */ LogType)
/* harmony export */ });
var LogType;
(function (LogType) {
  LogType[LogType["Log"] = 0] = "Log";
  LogType[LogType["Exception"] = 1] = "Exception";
})(LogType || (LogType = {}));

/***/ }),

/***/ 3037:
/*!**************************************************!*\
  !*** ./src/app/models/internal/logger-config.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggerConfig: () => (/* binding */ LoggerConfig)
/* harmony export */ });
class LoggerConfig {
  constructor() {
    this.logLocations = new Array();
    this.exceptionLogLocations = new Array();
  }
}

/***/ }),

/***/ 2517:
/*!******************************************************************!*\
  !*** ./src/app/models/service/api-contracts/base/api-request.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiRequest: () => (/* binding */ ApiRequest)
/* harmony export */ });
class ApiRequest {}

/***/ }),

/***/ 4589:
/*!*******************************************************************!*\
  !*** ./src/app/models/service/api-contracts/base/api-response.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiResponse: () => (/* binding */ ApiResponse)
/* harmony export */ });
class ApiResponse {}

/***/ }),

/***/ 6188:
/*!************************************************************!*\
  !*** ./src/app/models/service/api-contracts/error-data.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorData: () => (/* binding */ ErrorData)
/* harmony export */ });
class ErrorData {}

/***/ }),

/***/ 7452:
/*!***********************************************************!*\
  !*** ./src/app/models/service/api-contracts/error-log.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorLog: () => (/* binding */ ErrorLog)
/* harmony export */ });
class ErrorLog {
  constructor() {
    this.name = '';
    this.message = '';
    this.createdDateUTC = new Date().toUTCString();
    this.platform = '';
    this.username = '';
  }
}

/***/ }),

/***/ 4212:
/*!**************************************************************!*\
  !*** ./src/app/models/service/api-contracts/query-filter.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryFilter: () => (/* binding */ QueryFilter)
/* harmony export */ });
class QueryFilter {}

/***/ }),

/***/ 8443:
/*!*****************************************************************!*\
  !*** ./src/app/models/service/enums/api-error-type-s-m.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiErrorTypeSM: () => (/* binding */ ApiErrorTypeSM)
/* harmony export */ });
var ApiErrorTypeSM;
(function (ApiErrorTypeSM) {
  ApiErrorTypeSM[ApiErrorTypeSM["Fatal_Log"] = 1] = "Fatal_Log";
  ApiErrorTypeSM[ApiErrorTypeSM["Success_NoLog"] = 2] = "Success_NoLog";
  ApiErrorTypeSM[ApiErrorTypeSM["InvalidToken_Log"] = 3] = "InvalidToken_Log";
  ApiErrorTypeSM[ApiErrorTypeSM["FrameworkException_Log"] = 4] = "FrameworkException_Log";
  ApiErrorTypeSM[ApiErrorTypeSM["InvalidInputData_Log"] = 5] = "InvalidInputData_Log";
  ApiErrorTypeSM[ApiErrorTypeSM["InvalidInputData_NoLog"] = 6] = "InvalidInputData_NoLog";
  ApiErrorTypeSM[ApiErrorTypeSM["NoRecord_Log"] = 7] = "NoRecord_Log";
  ApiErrorTypeSM[ApiErrorTypeSM["NoRecord_NoLog"] = 8] = "NoRecord_NoLog";
  ApiErrorTypeSM[ApiErrorTypeSM["ModelError_Log"] = 9] = "ModelError_Log";
  ApiErrorTypeSM[ApiErrorTypeSM["ModelError_NoLog"] = 10] = "ModelError_NoLog";
  ApiErrorTypeSM[ApiErrorTypeSM["Access_Denied_Log"] = 11] = "Access_Denied_Log";
  ApiErrorTypeSM[ApiErrorTypeSM["Access_Denied_NoLog"] = 12] = "Access_Denied_NoLog";
})(ApiErrorTypeSM || (ApiErrorTypeSM = {}));

/***/ }),

/***/ 1610:
/*!************************************************************!*\
  !*** ./src/app/models/service/enums/role-type-s-m.enum.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleTypeSM: () => (/* binding */ RoleTypeSM)
/* harmony export */ });
var RoleTypeSM;
(function (RoleTypeSM) {
  RoleTypeSM[RoleTypeSM["Unknown"] = 0] = "Unknown";
  RoleTypeSM[RoleTypeSM["SuperAdmin"] = 1] = "SuperAdmin";
  RoleTypeSM[RoleTypeSM["SystemAdmin"] = 2] = "SystemAdmin";
  RoleTypeSM[RoleTypeSM["ClientAdmin"] = 3] = "ClientAdmin";
  RoleTypeSM[RoleTypeSM["ClientEmployee"] = 4] = "ClientEmployee";
})(RoleTypeSM || (RoleTypeSM = {}));

/***/ }),

/***/ 7292:
/*!**********************************************!*\
  !*** ./src/app/models/view/app.viewmodel.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppViewModel: () => (/* binding */ AppViewModel)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);

class AppViewModel {
  constructor() {
    this.PageTitle = "";
    this.showToast = false;
    this.playstoreLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.microsoftAppStore;
    this.stopApplicationFlow = true;
    this.updateAvailable = false;
    this.firstInstall = false;
  }
}

/***/ }),

/***/ 6059:
/*!**************************************************!*\
  !*** ./src/app/models/view/top-nav.viewmodel.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopNavViewModel: () => (/* binding */ TopNavViewModel)
/* harmony export */ });
class TopNavViewModel {
  constructor() {
    this.PageTitle = "";
    this.searchText = "";
    this.inputValue = "";
    this.receivedSearchValueFromAppComponent = "";
    this.receivedSearchValue = "";
    this.version = "";
  }
}

/***/ }),

/***/ 7506:
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseService: () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 6552);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _models_service_api_contracts_query_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/service/api-contracts/query-filter */ 4212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class BaseService {
  constructor() {}
  createQueryFilterObject(pgNo, pgSize) {
    let queryFilter = new _models_service_api_contracts_query_filter__WEBPACK_IMPORTED_MODULE_2__.QueryFilter();
    queryFilter.top = pgSize;
    queryFilter.skip = (pgNo - 1) * pgSize;
    return queryFilter;
  }
  encrypt(txt) {
    return crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(txt, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.encryptionKey).toString();
  }
  decrypt(txtToDecrypt) {
    return crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(txtToDecrypt, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.encryptionKey).toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8);
  }
}
_class = BaseService;
_class.ɵfac = function BaseService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5731:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonService: () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ 7506);
/* harmony import */ var _models_internal_common_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/internal/common-models */ 3882);
/* harmony import */ var _models_service_enums_role_type_s_m_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/service/enums/role-type-s-m.enum */ 1610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage.service */ 9140);

var _class;







class CommonService extends _base_service__WEBPACK_IMPORTED_MODULE_3__.BaseService {
  constructor(storageService) {
    super();
    this.storageService = storageService;
    // toasts: ToastInfo[] = [];
    this.searchInput = "";
    this.showHideHomeButton = true;
    this.preciseValue = 10;
    // ////
    this.highlightCommonCategory = false;
    this.highlightEngineeringCategory = false;
    this.highlightOthersCategory = false;
    this.highlightBankingCategory = false;
    this.highlightHealthCategory = false;
    this.layoutVM = new _models_internal_common_models__WEBPACK_IMPORTED_MODULE_4__.LayoutVM();
    this.loaderInfo = {
      message: "",
      showLoader: false
    };
  }
  presentLoading(message = "") {
    var _this = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loaderInfo = {
        message,
        showLoader: true
      };
    })();
  }
  // async presentToast(toastInfo: ToastInfo) {
  //   this.toasts.push(toastInfo);
  // }
  // removeToast(toast: any) {
  //   this.toasts = this.toasts.filter((t) => t !== toast);
  // }
  // clearAllToasts() {
  //   this.toasts.splice(0, this.toasts.length);
  // }
  presentAlert() {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  presentConfirmAlert(modalInfo) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const modalRef = this.modalService.open(ConfirmModalComponent, options);
      // modalRef.componentInstance.confirmModalInfo = modalInfo;
      return true;
    })();
  }
  /**Show custom sweet alert*/
  showSweetAlertConfirmation(alertOptions) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return (yield sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(alertOptions)).isConfirmed;
    })();
  }
  /**Show custom sweet alert*/
  showSweetAlertToast(alertOptions) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      alertOptions.toast = true;
      // alertOptions.position = 'top-right';
      alertOptions.showConfirmButton = false;
      alertOptions.timer = 3000;
      alertOptions.timerProgressBar = true;
      alertOptions.didOpen = toast => {
        toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().stopTimer));
        toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().resumeTimer));
      };
      return yield sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(alertOptions);
    })();
  }
  dismissLoader() {
    var _this2 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loaderInfo.showLoader = false;
      _this2.loaderInfo.message = "";
    })();
  }
  getUserIdPwdFromStorage() {
    var _this3 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let request = {
        companyCode: "",
        loginId: "",
        password: "",
        roleType: _models_service_enums_role_type_s_m_enum__WEBPACK_IMPORTED_MODULE_5__.RoleTypeSM.Unknown
      };
      let user = yield _this3.storageService.getFromStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.DbKeys.LOGIN_USER);
      if (user) {
        request.loginId = user.loginId;
        request.password = user.passwordHash;
        request.roleType = user.roleType;
        let cCode = yield _this3.storageService.getFromStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.DbKeys.COMPANY_CODE);
        if (cCode && cCode != "") request.companyCode = cCode;
      }
      return request;
    })();
  }
  addDummyUserToStorage() {
    var _this4 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let user = {
        createdBy: "",
        createdOnUTC: new Date(),
        dateOfBirth: new Date(),
        emailId: "",
        firstName: "",
        id: 1,
        isEmailConfirmed: false,
        isLoginEnabled: true,
        isPhoneNumberConfirmed: false,
        lastModifiedBy: "",
        lastName: "",
        loginId: "testId",
        middleName: "",
        passwordHash: "testPwdHash",
        phoneNumber: "",
        profilePicturePath: "",
        roleType: _models_service_enums_role_type_s_m_enum__WEBPACK_IMPORTED_MODULE_5__.RoleTypeSM.ClientEmployee,
        lastModifiedOnUTC: new Date()
      };
      user.loginId = "testUser";
      _this4.storageService.saveToStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.DbKeys.REMEMBER_PWD, true.toString());
      _this4.storageService.saveToStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.DbKeys.LOGIN_USER, user);
    })();
  }
  // copy function
  copyToClipBoard(value) {
    const textarea = document.createElement("textarea");
    textarea.value = value.toString();
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
        title: "Copied",
        // text: "Copied",
        timer: 700,
        width: 200
      });
    } catch (err) {
      console.error("Unable to copy value to clipboard:", err);
    } finally {
      document.body.removeChild(textarea);
    }
  }
  // get all items from localStorage and using it to check user theme, favorite units etc
  getAllItemsFromLocalStorage() {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== null) {
        const value = localStorage.getItem(key);
        if (value !== null) {
          if (value.length > 6) {
            try {
              const parsedValue = JSON.parse(value);
              if (parsedValue.isFavorite === true) {
                items.push(parsedValue);
              }
            } catch (e) {
              // Handle the case where parsing failed
              console.error("Error parsing JSON for key:", key, "Error:", e);
            }
          }
        }
      }
    }
    return items;
  }
  // toggling favorites -------------- add or remove favorites
  toggleFavorites(item, event) {
    event.stopPropagation();
    item.isFavorite = !item.isFavorite;
    if (item.isFavorite) {
      localStorage.setItem(`${item.title}`, `${JSON.stringify(item)}`);
    } else {
      localStorage.removeItem(item.title);
    }
  }
}
_class = CommonService;
_class.ɵfac = function CommonService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 4943:
/*!*************************************************!*\
  !*** ./src/app/services/log-handler.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogHandlerService: () => (/* binding */ LogHandlerService)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _clients_helpers_common_logger_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clients/helpers/common-logger.helper */ 4739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);

var _class;


class LogHandlerService {
  constructor() {}
  logObject(logObject) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _clients_helpers_common_logger_helper__WEBPACK_IMPORTED_MODULE_1__.CommonLogger.LogTextOrObject(logObject);
    })();
  }
  handleError(error) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _clients_helpers_common_logger_helper__WEBPACK_IMPORTED_MODULE_1__.CommonLogger.LogException(error);
      //show error messages from app constants
    })();
  }
}
_class = LogHandlerService;
_class.ɵfac = function LogHandlerService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9140:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ 7506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);

var _class;



class StorageService extends _base_service__WEBPACK_IMPORTED_MODULE_2__.BaseService {
  constructor() {
    super();
    this._storage = localStorage;
    this._sessionStorage = sessionStorage;
    // this.init();
  }

  init() {
    var _this = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // If using, define drivers here: await this.storage.defineDriver(/*...*/);
      const storage = yield _this._storage["create"];
      _this._storage = storage;
    })();
  }
  getFromStorage(key) {
    var _this2 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = (yield _this2._storage.getItem(key)) || "";
      let res = yield _this2.decrypt(data);
      return yield _this2.getValueAsObject(res);
    })();
  }
  saveToStorage(key, val) {
    var _this3 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let value = "";
      value = typeof val != typeof "" ? JSON.stringify(val) : val;
      yield _this3._storage.setItem(key, yield _this3.encrypt(value));
    })();
  }
  removeFromStorage(key) {
    var _this4 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4._storage.removeItem(key);
    })();
  }
  clearStorage() {
    var _this5 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5._storage.clear();
    })();
  }
  /** Save To Session Storage*/
  saveToSessionStorage(key, val) {
    var _this6 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let value = "";
      value = typeof val != typeof "" ? JSON.stringify(val) : val;
      yield _this6._sessionStorage.setItem(key, yield _this6.encrypt(value));
    })();
  }
  // Get from Session Storage
  getFromSessionStorage(key) {
    var _this7 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = (yield _this7._sessionStorage.getItem(key)) || "";
      let res = yield _this7.decrypt(data);
      return yield _this7.getValueAsObject(res);
    })();
  }
  // Remove from Session Storage
  removeFromSessionStorage(key) {
    var _this8 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8._sessionStorage.removeItem(key);
    })();
  }
  // Remove from Session Storage
  clearSessionStorage() {
    var _this9 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9._sessionStorage.clear();
    })();
  }
  /** Get Data From Storage if Present
   * Checks appropriate storage as per the user remember
   */
  getDataFromAnyStorage(key) {
    var _this10 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let remMe = yield _this10.getFromStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.DbKeys.REMEMBER_PWD);
      if (remMe && remMe == true) return yield _this10.getFromStorage(key);
      return yield _this10.getFromSessionStorage(key);
    })();
  }
  getValueAsObject(val) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        return yield JSON.parse(val);
      } catch (err) {
        return yield val;
      }
    })();
  }
}
_class = StorageService;
_class.ɵfac = function StorageService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 4324:
/*!*********************************************!*\
  !*** ./src/app/services/top-nav.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopNavService: () => (/* binding */ TopNavService)
/* harmony export */ });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ 7506);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/view/top-nav.viewmodel */ 6059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class TopNavService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor() {
    super();
    this.viewModel = new _models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_1__.TopNavViewModel();
    this.sharedDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  updateSharedData(newData) {
    this.viewModel.receivedSearchValueFromAppComponent = newData;
    this.sharedDataSubject.next(newData);
  }
}
_class = TopNavService;
_class.ɵfac = function TopNavService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 6402:
/*!******************************************!*\
  !*** ./src/app/services/tour.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppTourService: () => (/* binding */ AppTourService)
/* harmony export */ });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ 7506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var angular_shepherd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-shepherd */ 1193);
var _class;



class AppTourService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(shepherdService) {
    super();
    this.shepherdService = shepherdService;
  }
  startTour() {
    if (!this.shepherdService.isActive) {
      let defaultSteps = {
        classes: "shepherd-theme-arrows",
        scrollTo: false,
        cancelIcon: {
          enabled: true
        }
      };
      this.shepherdService.modal = true;
      this.shepherdService.defaultStepOptions = defaultSteps;
      this.shepherdService.addSteps([{
        title: "Categories",
        text: `Click here to select different Category.`,
        attachTo: {
          element: ".common",
          on: "bottom"
        },
        classes: "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text shepherd-step-highlight",
        buttons: [{
          action() {
            return this.next();
          },
          text: "Next"
        }],
        id: "creating"
      }, {
        title: "Zoom Functionality",
        text: `Click here to zoom in and out.`,
        attachTo: {
          element: ".zoom",
          on: "bottom"
        },
        classes: "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",
        buttons: [{
          action() {
            return this.back();
          },
          classes: "shepherd-button-secondary",
          text: "Back"
        }, {
          action() {
            return this.next();
          },
          text: "Next"
        }],
        id: "creating"
      }, {
        title: "Search",
        text: `Search any Converter.`,
        attachTo: {
          element: ".search",
          on: "bottom"
        },
        classes: "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",
        buttons: [{
          action() {
            return this.back();
          },
          classes: "shepherd-button-secondary",
          text: "Back"
        }, {
          action() {
            return this.next();
          },
          text: "Next"
        }],
        id: "creating"
      }, {
        title: "Settings",
        text: `You can change Themes and Decimal Value. `,
        attachTo: {
          element: ".bi-gear",
          on: "bottom"
        },
        classes: "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",
        buttons: [{
          action() {
            return this.back();
          },
          classes: "shepherd-button-secondary",
          text: "Back"
        }, {
          action() {
            return this.next();
          },
          text: "Next"
        }],
        id: "creating"
      }, {
        title: "Choose Unit",
        text: `Select Any Unit to Convert. `,
        attachTo: {
          element: ".unit",
          on: "right"
        },
        classes: "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",
        buttons: [{
          action() {
            return this.back();
          },
          classes: "shepherd-button-secondary",
          text: "Back"
        }, {
          action() {
            return this.next();
          },
          text: "Next"
        }],
        id: "creating"
      }, {
        title: "Enter Value",
        text: `Enter value here which you want to convert.`,
        attachTo: {
          element: ".timeinput",
          on: "bottom"
        },
        classes: "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",
        buttons: [{
          action() {
            return this.back();
          },
          classes: "shepherd-button-secondary",
          text: "Back"
        }, {
          action() {
            return this.next();
          },
          text: "Next"
        }],
        id: "creating"
      }, {
        title: "Dropdown",
        text: `You can set target unit in this dropdown.`,
        attachTo: {
          element: ".drop-down",
          on: "bottom"
        },
        classes: "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",
        buttons: [{
          action() {
            return this.back();
          },
          classes: "shepherd-button-secondary",
          text: "Back"
        }, {
          action() {
            return this.next();
          },
          text: "Next"
        }],
        id: "creating"
      }, {
        title: "Set Dropdown",
        text: `You can change dropdown value on click.`,
        attachTo: {
          element: ".drop-down-result",
          on: "bottom"
        },
        classes: "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",
        buttons: [{
          action() {
            return this.back();
          },
          classes: "shepherd-button-secondary",
          text: "Back"
        }, {
          action() {
            return this.next();
          },
          text: "Next"
        }],
        id: "creating"
      }, {
        title: "Clear",
        text: `Click here to Clear all Values.`,
        attachTo: {
          element: ".clear",
          on: "bottom"
        },
        classes: "shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text",
        buttons: [{
          action() {
            return this.back();
          },
          classes: "shepherd-button-secondary",
          text: "Back"
        }, {
          action() {
            return this.next();
          },
          text: "Finish"
        }],
        id: "creating"
      }]);
      this.shepherdService.modal = true;
      this.shepherdService.confirmCancel = false;
      this.shepherdService.start();
    }
  }
}
_class = AppTourService;
_class.ɵfac = function AppTourService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](angular_shepherd__WEBPACK_IMPORTED_MODULE_2__.ShepherdService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 4601:
/*!*********************************************!*\
  !*** ./src/app/services/version.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionService: () => (/* binding */ VersionService)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ 7506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _clients_version_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clients/version.client */ 5963);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);

var _class;




class VersionService extends _base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
  constructor(versionClient, http) {
    super();
    this.versionClient = versionClient;
    this.http = http;
  }
  getAllVersionInfo() {
    var _this = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this.versionClient.GetAllVersionInfo();
    })();
  }
}
_class = VersionService;
_class.ɵfac = function VersionService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_clients_version_client__WEBPACK_IMPORTED_MODULE_2__.VersionClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 6447:
/*!******************************************!*\
  !*** ./src/app/services/zoom.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZoomService: () => (/* binding */ ZoomService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ZoomService {
  constructor() {
    this.zoomFactor = 1.0;
  }
  getZoomFactor() {
    return this.zoomFactor;
  }
  setZoomFactor(factor) {
    this.zoomFactor = factor;
  }
}
_class = ZoomService;
_class.ɵfac = function ZoomService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  apiResponseCacheTimeoutInMinutes: 5,
  enableResponseCacheProcessing: true,
  applicationVersion: "1.0",
  // apiBaseUrl: 'http://localhost:5050/',
  apiBaseUrl: "http://192.168.29.71:4010/",
  microsoftAppStore: "https://www.microsoft.com/store/productId/9NBLGGH5L9XT",
  // microsoftAppStore: "ms-windows-store://pdp/?ProductId=9NBLGGH5L9XT",
  apiDefaultTimeout: 10,
  LoggingInfo: {
    cacheLogs: true,
    logToConsole: true,
    logToFile: false,
    logToApi: false,
    logToElasticCluster: false,
    exceptionToConsole: true,
    exceptionToFile: false,
    exceptionToApi: false,
    exceptionToElasticCluster: false,
    localLogFilePath: "Sample.log"
  },
  encryptionKey: "12345678"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 2480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4686), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map