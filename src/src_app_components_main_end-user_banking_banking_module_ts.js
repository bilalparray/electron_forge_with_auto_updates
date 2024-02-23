"use strict";
(self["webpackChunksampleUI"] = self["webpackChunksampleUI"] || []).push([["src_app_components_main_end-user_banking_banking_module_ts"],{

/***/ 3772:
/*!****************************************************************************!*\
  !*** ./src/app/components/main/end-user/banking/banking-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BankingRoutingModule: () => (/* binding */ BankingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _banking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banking.component */ 3551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  component: _banking_component__WEBPACK_IMPORTED_MODULE_0__.BankingComponent
}];
class BankingRoutingModule {}
_class = BankingRoutingModule;
_class.ɵfac = function BankingRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BankingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3551:
/*!***********************************************************************!*\
  !*** ./src/app/components/main/end-user/banking/banking.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BankingComponent: () => (/* binding */ BankingComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/common-converter.viewmodel */ 4962);
/* harmony import */ var src_app_models_internal_common_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/internal/common-models */ 3882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/view/top-nav.viewmodel */ 6059);
/* harmony import */ var src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/view/engineering-converter.viewmodel */ 3929);
/* harmony import */ var src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/view/others.viewmodel */ 4792);
/* harmony import */ var src_app_models_view_banking_viewmodel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/view/banking.viewmodel */ 2157);
/* harmony import */ var src_app_models_view_health_viewmodel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/view/health.viewmodel */ 9351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var src_app_services_top_nav_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/top-nav.service */ 4324);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _child_components_frequency_frequency_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../child-components/frequency/frequency.component */ 7229);
/* harmony import */ var _child_components_weight_weight_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../child-components/weight/weight.component */ 8273);
/* harmony import */ var _child_components_time_time_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../child-components/time/time.component */ 1987);
/* harmony import */ var _child_components_area_area_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../child-components/area/area.component */ 7845);
/* harmony import */ var _child_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../child-components/speed/speed.component */ 8797);
/* harmony import */ var _child_components_length_length_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../child-components/length/length.component */ 1472);
/* harmony import */ var _child_components_volume_volume_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../child-components/volume/volume.component */ 2703);
/* harmony import */ var _child_components_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../child-components/temperature/temperature.component */ 9119);
/* harmony import */ var _child_components_force_force_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../child-components/force/force.component */ 7478);
/* harmony import */ var _child_components_pressure_pressure_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../child-components/pressure/pressure.component */ 5305);
/* harmony import */ var _child_components_work_work_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../child-components/work/work.component */ 1301);
/* harmony import */ var _child_components_planeangle_planeangle_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../child-components/planeangle/planeangle.component */ 2512);
/* harmony import */ var _child_components_power_power_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../child-components/power/power.component */ 7108);
/* harmony import */ var _child_components_current_current_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../child-components/current/current.component */ 3519);
/* harmony import */ var _child_components_cooking_cooking_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../child-components/cooking/cooking.component */ 4344);
/* harmony import */ var _child_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../child-components/fuel/fuel.component */ 5673);
/* harmony import */ var _child_components_dob_dob_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../child-components/dob/dob.component */ 3415);
/* harmony import */ var _child_components_storage_storage_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../child-components/storage/storage.component */ 4082);
/* harmony import */ var _child_components_timezone_timezone_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../child-components/timezone/timezone.component */ 33);
/* harmony import */ var _child_components_simple_interest_simple_interest_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../child-components/simple-interest/simple-interest.component */ 9910);
/* harmony import */ var _child_components_compound_interest_compound_interest_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../child-components/compound-interest/compound-interest.component */ 89);
/* harmony import */ var _child_components_discount_discount_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../child-components/discount/discount.component */ 6373);
/* harmony import */ var _child_components_bmi_bmi_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../child-components/bmi/bmi.component */ 1926);
/* harmony import */ var _child_components_bmr_bmr_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../child-components/bmr/bmr.component */ 6281);
/* harmony import */ var _child_components_water_intake_water_intake_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../child-components/water-intake/water-intake.component */ 6054);
/* harmony import */ var _child_components_currency_currency_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../child-components/currency/currency.component */ 5576);
var _class;








































const _c0 = function (a0) {
  return {
    "selected-item": a0
  };
};
function BankingComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "li", 8)(1, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function BankingComponent_li_5_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r30);
      const item_r27 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵresetView"](ctx_r29.showCalculators(item_r27.title));
    })("keydown.enter", function BankingComponent_li_5_Template_div_keydown_enter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r30);
      const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵresetView"](_r28.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function BankingComponent_li_5_Template_i_click_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r30);
      const item_r27 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵresetView"](ctx_r32._commonService.toggleFavorites(item_r27, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpureFunction1"](4, _c0, item_r27.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngClass", item_r27.isFavorite ? "bi-heart-fill" : "bi-heart");
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵpropertyInterpolate"]("src", item_r27.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtextInterpolate1"](" ", item_r27.title, " ");
  }
}
function BankingComponent_app_weight_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-weight");
  }
}
function BankingComponent_app_time_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-time");
  }
}
function BankingComponent_app_speed_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-speed");
  }
}
function BankingComponent_app_area_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-area");
  }
}
function BankingComponent_app_length_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-length");
  }
}
function BankingComponent_app_currency_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-currency");
  }
}
function BankingComponent_app_temperature_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-temperature");
  }
}
function BankingComponent_app_volume_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-volume");
  }
}
function BankingComponent_app_force_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-force");
  }
}
function BankingComponent_app_pressure_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-pressure");
  }
}
function BankingComponent_app_work_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-work");
  }
}
function BankingComponent_app_current_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-current");
  }
}
function BankingComponent_app_planeangle_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-planeangle");
  }
}
function BankingComponent_app_power_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-power");
  }
}
function BankingComponent_app_frequency_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-frequency");
  }
}
function BankingComponent_app_cooking_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-cooking");
  }
}
function BankingComponent_app_fuel_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-fuel");
  }
}
function BankingComponent_app_storage_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-storage");
  }
}
function BankingComponent_app_dob_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-dob");
  }
}
function BankingComponent_app_timezone_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-timezone");
  }
}
function BankingComponent_app_simple_interest_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-simple-interest");
  }
}
function BankingComponent_app_compound_interest_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-compound-interest");
  }
}
function BankingComponent_app_discount_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-discount");
  }
}
function BankingComponent_app_bmi_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-bmi");
  }
}
function BankingComponent_app_bmr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-bmr");
  }
}
function BankingComponent_app_water_intake_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-water-intake");
  }
}
class BankingComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService, topNavService) {
    super(commonService, logService);
    this.topNavService = topNavService;
    this.topNavViewModel = new src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_3__.TopNavViewModel();
    this.viewModel = new src_app_models_view_banking_viewmodel__WEBPACK_IMPORTED_MODULE_6__.BankingViewModel();
    this.commonConverterViewModel = new src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.commonConverterViewModel();
    this.engineeringViewModel = new src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_4__.engineeringConverterViewModel();
    this.othersViewModel = new src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_5__.othersViewModel();
    this.healthViewModel = new src_app_models_view_health_viewmodel__WEBPACK_IMPORTED_MODULE_7__.HealthViewModel();
    this.localStorageItems = [];
    this.allConverters = new src_app_models_internal_common_models__WEBPACK_IMPORTED_MODULE_2__.AllConverters();
    this.viewModel.filteredBankingConverters = this.allConverters.bankingConverters;
  }
  ngOnInit() {
    this.viewModel.isSimpleInterest = true;
    this.topNavService.sharedDataSubject.subscribe(data => {
      this.topNavViewModel.receivedSearchValue = data;
      if (this.topNavViewModel.receivedSearchValue.trim() !== "") {
        const searchValue = this.topNavViewModel.receivedSearchValue.toLowerCase();
        this.viewModel.filteredBankingConverters = [...this.allConverters.commonConverters, ...this.allConverters.engineeringConverters, ...this.allConverters.otherConverters, ...this.allConverters.bankingConverters, ...this.allConverters.healthConverters].filter(item => {
          this.viewModel.isCompoundInterest = false;
          this.viewModel.isDiscount = false;
          this.viewModel.isSimpleInterest = false;
          return item.searchArrayFromConverters.some(term => term.toLowerCase().includes(searchValue));
        });
      } else {
        this.commonConverterViewModel.isWeight = false;
        this.commonConverterViewModel.isArea = false;
        this.commonConverterViewModel.isTime = false;
        this.commonConverterViewModel.isSpeed = false;
        this.commonConverterViewModel.isTemperature = false;
        this.commonConverterViewModel.isLength = false;
        this.commonConverterViewModel.isVolume = false;
        this.commonConverterViewModel.isFrequency = false;
        this.commonConverterViewModel.isCurrency = false;
        this.engineeringViewModel.isPressure = false;
        this.engineeringViewModel.isPower = false;
        this.engineeringViewModel.isWork = false;
        this.engineeringViewModel.isForce = false;
        this.engineeringViewModel.isPlaneAngle = false;
        this.engineeringViewModel.isCurrent = false;
        this.othersViewModel.isDob = false;
        this.othersViewModel.isStorage = false;
        this.othersViewModel.isCooking = false;
        this.othersViewModel.isFuel = false;
        this.othersViewModel.isTimezone = false;
        this.viewModel.isCompoundInterest = false;
        this.viewModel.isDiscount = false;
        this.viewModel.isSimpleInterest = true;
        this.healthViewModel.isBmi = false;
        this.healthViewModel.isBmr = false;
        this.healthViewModel.isWaterIntake = false;
        this.viewModel.filteredBankingConverters = this.allConverters.bankingConverters;
      }
    });
    // search ends
    this.localStorageItems = this._commonService.getAllItemsFromLocalStorage();
    //compareing the localstoarage items with commonconverter and if same then setting isFavorties to true for the same;
    for (const item of [...this.allConverters.commonConverters, ...this.allConverters.engineeringConverters, ...this.allConverters.otherConverters, ...this.allConverters.bankingConverters, ...this.allConverters.healthConverters]) {
      item.isFavorite = this.localStorageItems.some(favoriteItem => favoriteItem.title === item.title);
    }
    // Find and mark the default selected item
    const defaultSelectedItemTitle = "Simple Interest"; // Replace with the actual title
    this.viewModel.defaultSelectedItem = this.viewModel.filteredBankingConverters.find(item => item.title === defaultSelectedItemTitle);
    if (this.viewModel.defaultSelectedItem) {
      this.viewModel.defaultSelectedItem.isSelected = true;
    }
  }
  // checking on where user clicked and rendering same component
  showCalculators(calculator) {
    // Reset all calculator flags to false
    this.commonConverterViewModel.isWeight = false;
    this.commonConverterViewModel.isSpeed = false;
    this.commonConverterViewModel.isArea = false;
    this.commonConverterViewModel.isTemperature = false;
    this.commonConverterViewModel.isLength = false;
    this.commonConverterViewModel.isVolume = false;
    this.commonConverterViewModel.isTime = false;
    this.commonConverterViewModel.isCurrency = false;
    ///engginering
    this.engineeringViewModel.isPressure = false;
    this.engineeringViewModel.isWork = false;
    this.engineeringViewModel.isForce = false;
    this.engineeringViewModel.isCurrent = false;
    this.engineeringViewModel.isPower = false;
    this.engineeringViewModel.isPlaneAngle = false;
    this.engineeringViewModel.isFrequency = false;
    //////others
    this.othersViewModel.isCooking = false;
    this.othersViewModel.isFuel = false;
    this.othersViewModel.isStorage = false;
    this.othersViewModel.isDob = false;
    this.othersViewModel.isTimezone = false;
    ///banking
    this.viewModel.isCompoundInterest = false;
    this.viewModel.isDiscount = false;
    this.viewModel.isSimpleInterest = false;
    // health
    this.healthViewModel.isBmi = false;
    this.healthViewModel.isBmr = false;
    this.healthViewModel.isWaterIntake = false;
    // Set the selected calculator to true
    if (calculator === "Weight") {
      this.commonConverterViewModel.isWeight = true;
    } else if (calculator === "Currency") {
      this.commonConverterViewModel.isCurrency = true;
    } else if (calculator === "Speed") {
      this.commonConverterViewModel.isSpeed = true;
    } else if (calculator === "Time") {
      this.commonConverterViewModel.isTime = true;
      this.viewModel.defaultSelectedItem.isSelected = true;
    } else if (calculator === "Area") {
      this.commonConverterViewModel.isArea = true;
    } else if (calculator === "Length") {
      this.commonConverterViewModel.isLength = true;
    } else if (calculator === "Temprature") {
      this.commonConverterViewModel.isTemperature = true;
    } else if (calculator === "Volume") {
      this.commonConverterViewModel.isVolume = true;
    } else if (calculator === "Force") {
      this.engineeringViewModel.isForce = true;
    } else if (calculator === "Pressure") {
      this.engineeringViewModel.isPressure = true;
    } else if (calculator === "Work/Energy") {
      this.engineeringViewModel.isWork = true;
    } else if (calculator === "Power") {
      this.engineeringViewModel.isPower = true;
    } else if (calculator === "Current") {
      this.engineeringViewModel.isCurrent = true;
    } else if (calculator === "Plane Angle") {
      this.engineeringViewModel.isPlaneAngle = true;
    } else if (calculator === "Frequency") {
      this.engineeringViewModel.isFrequency = true;
    } else if (calculator === "Cooking") {
      this.othersViewModel.isCooking = true;
    } else if (calculator === "Computer Data") {
      this.othersViewModel.isStorage = true;
    } else if (calculator === "Fuel Efficiency") {
      this.othersViewModel.isFuel = true;
    } else if (calculator === "Age Calculator") {
      this.othersViewModel.isDob = true;
    } else if (calculator === "World Clock") {
      this.othersViewModel.isTimezone = true;
    } else if (calculator === "Compound Interest") {
      this.viewModel.isCompoundInterest = true;
    } else if (calculator === "Simple Interest") {
      this.viewModel.isSimpleInterest = true;
    } else if (calculator === "Discount") {
      this.viewModel.isDiscount = true;
    } else if (calculator === "BMI Calculator") {
      this.healthViewModel.isBmi = true;
    } else if (calculator === "BMR Calculator") {
      this.healthViewModel.isBmr = true;
    } else if (calculator === "Water Intake") {
      this.healthViewModel.isWaterIntake = true;
    }
    // Update selected item
    if (this.viewModel.selectedItem) {
      this.viewModel.selectedItem.isSelected = false;
    }
    this.viewModel.selectedItem = this.viewModel.filteredBankingConverters.find(x => x.title === calculator);
    if (this.viewModel.selectedItem) {
      this.viewModel.selectedItem.isSelected = true;
      this.viewModel.defaultSelectedItem.isSelected = false;
    }
  }
}
_class = BankingComponent;
_class.ɵfac = function BankingComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_9__.LogHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_services_top_nav_service__WEBPACK_IMPORTED_MODULE_10__.TopNavService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-banking"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵProvidersFeature"]([_angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule]), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵInheritDefinitionFeature"]],
  decls: 33,
  vars: 27,
  consts: [[1, "container-fluid", "pt-0", "ps-0", "ms-0"], [1, "row"], [1, "col-4", "col-md-4", "col-sm-4", "mt-0", "converter-list-side", "pt-4"], [1, "d-flex", "flex-column", "flex-shrink-0", "pt-0", 2, "height", "100vh"], [1, "nav", "nav-pills", "flex-column", "mb-auto"], ["class", "nav-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-8", "col-md-8", "col-sm-8", "text-center", "pt-3", "mt-0", "converter-container-card"], [4, "ngIf"], [1, "nav-item", 3, "ngClass"], ["tabindex", "0", 1, "left-side", 3, "click", "keydown.enter"], ["myDiv", ""], [1, "bi", 3, "ngClass", "click"], [1, "nav-link"], ["alt", "", 1, "img-fluid", 3, "src"]],
  template: function BankingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](5, BankingComponent_li_5_Template, 7, 6, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](7, BankingComponent_app_weight_7_Template, 1, 0, "app-weight", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](8, BankingComponent_app_time_8_Template, 1, 0, "app-time", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](9, BankingComponent_app_speed_9_Template, 1, 0, "app-speed", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](10, BankingComponent_app_area_10_Template, 1, 0, "app-area", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](11, BankingComponent_app_length_11_Template, 1, 0, "app-length", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](12, BankingComponent_app_currency_12_Template, 1, 0, "app-currency", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](13, BankingComponent_app_temperature_13_Template, 1, 0, "app-temperature", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](14, BankingComponent_app_volume_14_Template, 1, 0, "app-volume", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](15, BankingComponent_app_force_15_Template, 1, 0, "app-force", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](16, BankingComponent_app_pressure_16_Template, 1, 0, "app-pressure", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](17, BankingComponent_app_work_17_Template, 1, 0, "app-work", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](18, BankingComponent_app_current_18_Template, 1, 0, "app-current", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](19, BankingComponent_app_planeangle_19_Template, 1, 0, "app-planeangle", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](20, BankingComponent_app_power_20_Template, 1, 0, "app-power", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](21, BankingComponent_app_frequency_21_Template, 1, 0, "app-frequency", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](22, BankingComponent_app_cooking_22_Template, 1, 0, "app-cooking", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](23, BankingComponent_app_fuel_23_Template, 1, 0, "app-fuel", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](24, BankingComponent_app_storage_24_Template, 1, 0, "app-storage", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](25, BankingComponent_app_dob_25_Template, 1, 0, "app-dob", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](26, BankingComponent_app_timezone_26_Template, 1, 0, "app-timezone", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](27, BankingComponent_app_simple_interest_27_Template, 1, 0, "app-simple-interest", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](28, BankingComponent_app_compound_interest_28_Template, 1, 0, "app-compound-interest", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](29, BankingComponent_app_discount_29_Template, 1, 0, "app-discount", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](30, BankingComponent_app_bmi_30_Template, 1, 0, "app-bmi", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](31, BankingComponent_app_bmr_31_Template, 1, 0, "app-bmr", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](32, BankingComponent_app_water_intake_32_Template, 1, 0, "app-water-intake", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngForOf", ctx.viewModel.filteredBankingConverters);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isWeight);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isSpeed);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isLength);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isCurrency);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isTemperature);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isVolume);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isForce);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isPressure);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isWork);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isCurrent);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isPlaneAngle);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isPower);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isFrequency);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.othersViewModel.isCooking);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.othersViewModel.isFuel);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.othersViewModel.isStorage);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.othersViewModel.isDob);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.othersViewModel.isTimezone);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.viewModel.isSimpleInterest);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.viewModel.isCompoundInterest);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.viewModel.isDiscount);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.healthViewModel.isBmi);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.healthViewModel.isBmr);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.healthViewModel.isWaterIntake);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_39__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_39__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_39__.NgIf, _child_components_frequency_frequency_component__WEBPACK_IMPORTED_MODULE_11__.FrequencyComponent, _child_components_weight_weight_component__WEBPACK_IMPORTED_MODULE_12__.WeightComponent, _child_components_time_time_component__WEBPACK_IMPORTED_MODULE_13__.TimeComponent, _child_components_area_area_component__WEBPACK_IMPORTED_MODULE_14__.AreaComponent, _child_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_15__.SpeedComponent, _child_components_length_length_component__WEBPACK_IMPORTED_MODULE_16__.LengthComponent, _child_components_volume_volume_component__WEBPACK_IMPORTED_MODULE_17__.VolumeComponent, _child_components_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_18__.TemperatureComponent, _child_components_force_force_component__WEBPACK_IMPORTED_MODULE_19__.ForceComponent, _child_components_pressure_pressure_component__WEBPACK_IMPORTED_MODULE_20__.PressureComponent, _child_components_work_work_component__WEBPACK_IMPORTED_MODULE_21__.WorkComponent, _child_components_planeangle_planeangle_component__WEBPACK_IMPORTED_MODULE_22__.PlaneAngleComponent, _child_components_power_power_component__WEBPACK_IMPORTED_MODULE_23__.PowerComponent, _child_components_current_current_component__WEBPACK_IMPORTED_MODULE_24__.CurrentComponent, _child_components_cooking_cooking_component__WEBPACK_IMPORTED_MODULE_25__.CookingComponent, _child_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_26__.FuelComponent, _child_components_dob_dob_component__WEBPACK_IMPORTED_MODULE_27__.DobComponent, _child_components_storage_storage_component__WEBPACK_IMPORTED_MODULE_28__.StorageComponent, _child_components_timezone_timezone_component__WEBPACK_IMPORTED_MODULE_29__.TimezoneComponent, _child_components_simple_interest_simple_interest_component__WEBPACK_IMPORTED_MODULE_30__.SimpleInterestComponent, _child_components_compound_interest_compound_interest_component__WEBPACK_IMPORTED_MODULE_31__.CompoundInterestComponent, _child_components_discount_discount_component__WEBPACK_IMPORTED_MODULE_32__.DiscountComponent, _child_components_bmi_bmi_component__WEBPACK_IMPORTED_MODULE_33__.BmiComponent, _child_components_bmr_bmr_component__WEBPACK_IMPORTED_MODULE_34__.BmrComponent, _child_components_water_intake_water_intake_component__WEBPACK_IMPORTED_MODULE_35__.WaterIntakeComponent, _child_components_currency_currency_component__WEBPACK_IMPORTED_MODULE_36__.CurrencyComponent],
  styles: [".nav-link[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n\n.left-side[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  padding-left: 10px;\n}\n\n@media only screen and (max-width: 768px) {\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL2VuZC11c2VyL2JhbmtpbmcvYmFua2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBT0E7RUFDRTtJQUNFLGVBQUE7RUFKRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5pbWctZmx1aWQge1xyXG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sZWZ0LXNpZGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4vLyAuc2VsZWN0ZWQtaXRlbSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTk1LCAxOTUpICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAgIC8vIGJvcmRlci1sZWZ0OiA1cHggc29saWQgYmxhY2s7XHJcbi8vIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1215:
/*!********************************************************************!*\
  !*** ./src/app/components/main/end-user/banking/banking.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BankingModule: () => (/* binding */ BankingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _banking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banking-routing.module */ 3772);
/* harmony import */ var _banking_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banking.component */ 3551);
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ 3609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





class BankingModule {}
_class = BankingModule;
_class.ɵfac = function BankingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _banking_routing_module__WEBPACK_IMPORTED_MODULE_0__.BankingRoutingModule, src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](BankingModule, {
    declarations: [_banking_component__WEBPACK_IMPORTED_MODULE_1__.BankingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _banking_routing_module__WEBPACK_IMPORTED_MODULE_0__.BankingRoutingModule, src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_main_end-user_banking_banking_module_ts.js.map