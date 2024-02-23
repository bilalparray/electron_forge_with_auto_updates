"use strict";
(self["webpackChunksampleUI"] = self["webpackChunksampleUI"] || []).push([["src_app_components_main_end-user_health_health_module_ts"],{

/***/ 1649:
/*!**************************************************************************!*\
  !*** ./src/app/components/main/end-user/health/health-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HealthRoutingModule: () => (/* binding */ HealthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _health_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health.component */ 1483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  component: _health_component__WEBPACK_IMPORTED_MODULE_0__.HealthComponent
}];
class HealthRoutingModule {}
_class = HealthRoutingModule;
_class.ɵfac = function HealthRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HealthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1483:
/*!*********************************************************************!*\
  !*** ./src/app/components/main/end-user/health/health.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HealthComponent: () => (/* binding */ HealthComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/common-converter.viewmodel */ 4962);
/* harmony import */ var src_app_models_internal_common_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/internal/common-models */ 3882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/view/top-nav.viewmodel */ 6059);
/* harmony import */ var src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/view/engineering-converter.viewmodel */ 3929);
/* harmony import */ var src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/view/others.viewmodel */ 4792);
/* harmony import */ var src_app_models_view_health_viewmodel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/view/health.viewmodel */ 9351);
/* harmony import */ var src_app_models_view_banking_viewmodel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/view/banking.viewmodel */ 2157);
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
function HealthComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "li", 8)(1, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function HealthComponent_li_5_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r30);
      const item_r27 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵresetView"](ctx_r29.showCalculators(item_r27.title));
    })("keydown.enter", function HealthComponent_li_5_Template_div_keydown_enter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵrestoreView"](_r30);
      const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵresetView"](_r28.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](3, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵlistener"]("click", function HealthComponent_li_5_Template_i_click_3_listener($event) {
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
function HealthComponent_app_weight_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-weight");
  }
}
function HealthComponent_app_time_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-time");
  }
}
function HealthComponent_app_speed_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-speed");
  }
}
function HealthComponent_app_area_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-area");
  }
}
function HealthComponent_app_length_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-length");
  }
}
function HealthComponent_app_currency_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-currency");
  }
}
function HealthComponent_app_temperature_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-temperature");
  }
}
function HealthComponent_app_volume_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-volume");
  }
}
function HealthComponent_app_force_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-force");
  }
}
function HealthComponent_app_pressure_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-pressure");
  }
}
function HealthComponent_app_work_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-work");
  }
}
function HealthComponent_app_current_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-current");
  }
}
function HealthComponent_app_planeangle_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-planeangle");
  }
}
function HealthComponent_app_power_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-power");
  }
}
function HealthComponent_app_frequency_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-frequency");
  }
}
function HealthComponent_app_cooking_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-cooking");
  }
}
function HealthComponent_app_fuel_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-fuel");
  }
}
function HealthComponent_app_storage_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-storage");
  }
}
function HealthComponent_app_dob_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-dob");
  }
}
function HealthComponent_app_timezone_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-timezone");
  }
}
function HealthComponent_app_simple_interest_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-simple-interest");
  }
}
function HealthComponent_app_compound_interest_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-compound-interest");
  }
}
function HealthComponent_app_discount_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-discount");
  }
}
function HealthComponent_app_bmi_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-bmi");
  }
}
function HealthComponent_app_bmr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-bmr");
  }
}
function HealthComponent_app_water_intake_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelement"](0, "app-water-intake");
  }
}
class HealthComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService, topNavService) {
    super(commonService, logService);
    this.topNavService = topNavService;
    this.topNavViewModel = new src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_3__.TopNavViewModel();
    this.viewModel = new src_app_models_view_health_viewmodel__WEBPACK_IMPORTED_MODULE_6__.HealthViewModel();
    this.commonConverterViewModel = new src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.commonConverterViewModel();
    this.engineeringViewModel = new src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_4__.engineeringConverterViewModel();
    this.othersViewModel = new src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_5__.othersViewModel();
    this.bankingViewModel = new src_app_models_view_banking_viewmodel__WEBPACK_IMPORTED_MODULE_7__.BankingViewModel();
    this.localStorageItems = [];
    this.allConverters = new src_app_models_internal_common_models__WEBPACK_IMPORTED_MODULE_2__.AllConverters();
    this.viewModel.filteredHealthConverters = this.allConverters.healthConverters;
  }
  ngOnInit() {
    this.viewModel.isBmi = true;
    this.topNavService.sharedDataSubject.subscribe(data => {
      this.topNavViewModel.receivedSearchValue = data;
      if (this.topNavViewModel.receivedSearchValue.trim() !== "") {
        const searchValue = this.topNavViewModel.receivedSearchValue.toLowerCase();
        this.viewModel.filteredHealthConverters = [...this.allConverters.commonConverters, ...this.allConverters.engineeringConverters, ...this.allConverters.otherConverters, ...this.allConverters.bankingConverters, ...this.allConverters.healthConverters].filter(item => {
          this.viewModel.isBmi = false;
          this.viewModel.isBmr = false;
          this.viewModel.isWaterIntake = false;
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
        this.bankingViewModel.isCompoundInterest = false;
        this.bankingViewModel.isDiscount = false;
        this.bankingViewModel.isSimpleInterest = false;
        this.viewModel.isBmi = true;
        this.viewModel.isBmr = false;
        this.viewModel.isWaterIntake = false;
        this.viewModel.filteredHealthConverters = this.allConverters.healthConverters;
      }
    });
    // search ends
    this.localStorageItems = this._commonService.getAllItemsFromLocalStorage();
    //compareing the localstoarage items with commonconverter and if same then setting isFavorties to true for the same;
    for (const item of [...this.allConverters.commonConverters, ...this.allConverters.engineeringConverters, ...this.allConverters.otherConverters, ...this.allConverters.bankingConverters, ...this.allConverters.healthConverters]) {
      item.isFavorite = this.localStorageItems.some(favoriteItem => favoriteItem.title === item.title);
    }
    // Find and mark the default selected item
    const defaultSelectedItemTitle = "BMI Calculator"; // Replace with the actual title
    this.viewModel.defaultSelectedItem = this.viewModel.filteredHealthConverters.find(item => item.title === defaultSelectedItemTitle);
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
    this.bankingViewModel.isCompoundInterest = false;
    this.bankingViewModel.isDiscount = false;
    this.bankingViewModel.isSimpleInterest = false;
    // health
    this.viewModel.isBmi = false;
    this.viewModel.isBmr = false;
    this.viewModel.isWaterIntake = false;
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
      this.bankingViewModel.isCompoundInterest = true;
    } else if (calculator === "Simple Interest") {
      this.bankingViewModel.isSimpleInterest = true;
    } else if (calculator === "Discount") {
      this.bankingViewModel.isDiscount = true;
    } else if (calculator === "BMI Calculator") {
      this.viewModel.isBmi = true;
    } else if (calculator === "BMR Calculator") {
      this.viewModel.isBmr = true;
    } else if (calculator === "Water Intake") {
      this.viewModel.isWaterIntake = true;
    }
    // Update selected item
    if (this.viewModel.selectedItem) {
      this.viewModel.selectedItem.isSelected = false;
    }
    this.viewModel.selectedItem = this.viewModel.filteredHealthConverters.find(x => x.title === calculator);
    if (this.viewModel.selectedItem) {
      this.viewModel.selectedItem.isSelected = true;
      this.viewModel.defaultSelectedItem.isSelected = false;
    }
  }
}
_class = HealthComponent;
_class.ɵfac = function HealthComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_9__.LogHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdirectiveInject"](src_app_services_top_nav_service__WEBPACK_IMPORTED_MODULE_10__.TopNavService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-health"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵProvidersFeature"]([_angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule]), _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵInheritDefinitionFeature"]],
  decls: 33,
  vars: 27,
  consts: [[1, "container-fluid", "pt-0", "ps-0", "ms-0"], [1, "row"], [1, "col-4", "col-md-4", "col-sm-4", "mt-0", "converter-list-side", "pt-4"], [1, "d-flex", "flex-column", "flex-shrink-0", "pt-0", 2, "height", "100vh"], [1, "nav", "nav-pills", "flex-column", "mb-auto"], ["class", "nav-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-8", "col-md-8", "col-sm-8", "text-center", "pt-3", "mt-0", "converter-container-card"], [4, "ngIf"], [1, "nav-item", 3, "ngClass"], ["tabindex", "0", 1, "left-side", 3, "click", "keydown.enter"], ["myDiv", ""], [1, "bi", 3, "ngClass", "click"], [1, "nav-link"], ["alt", "", 1, "img-fluid", 3, "src"]],
  template: function HealthComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](5, HealthComponent_li_5_Template, 7, 6, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](7, HealthComponent_app_weight_7_Template, 1, 0, "app-weight", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](8, HealthComponent_app_time_8_Template, 1, 0, "app-time", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](9, HealthComponent_app_speed_9_Template, 1, 0, "app-speed", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](10, HealthComponent_app_area_10_Template, 1, 0, "app-area", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](11, HealthComponent_app_length_11_Template, 1, 0, "app-length", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](12, HealthComponent_app_currency_12_Template, 1, 0, "app-currency", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](13, HealthComponent_app_temperature_13_Template, 1, 0, "app-temperature", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](14, HealthComponent_app_volume_14_Template, 1, 0, "app-volume", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](15, HealthComponent_app_force_15_Template, 1, 0, "app-force", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](16, HealthComponent_app_pressure_16_Template, 1, 0, "app-pressure", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](17, HealthComponent_app_work_17_Template, 1, 0, "app-work", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](18, HealthComponent_app_current_18_Template, 1, 0, "app-current", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](19, HealthComponent_app_planeangle_19_Template, 1, 0, "app-planeangle", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](20, HealthComponent_app_power_20_Template, 1, 0, "app-power", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](21, HealthComponent_app_frequency_21_Template, 1, 0, "app-frequency", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](22, HealthComponent_app_cooking_22_Template, 1, 0, "app-cooking", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](23, HealthComponent_app_fuel_23_Template, 1, 0, "app-fuel", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](24, HealthComponent_app_storage_24_Template, 1, 0, "app-storage", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](25, HealthComponent_app_dob_25_Template, 1, 0, "app-dob", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](26, HealthComponent_app_timezone_26_Template, 1, 0, "app-timezone", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](27, HealthComponent_app_simple_interest_27_Template, 1, 0, "app-simple-interest", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](28, HealthComponent_app_compound_interest_28_Template, 1, 0, "app-compound-interest", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](29, HealthComponent_app_discount_29_Template, 1, 0, "app-discount", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](30, HealthComponent_app_bmi_30_Template, 1, 0, "app-bmi", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](31, HealthComponent_app_bmr_31_Template, 1, 0, "app-bmr", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵtemplate"](32, HealthComponent_app_water_intake_32_Template, 1, 0, "app-water-intake", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngForOf", ctx.viewModel.filteredHealthConverters);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.bankingViewModel.isSimpleInterest);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.bankingViewModel.isCompoundInterest);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.bankingViewModel.isDiscount);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.viewModel.isBmi);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.viewModel.isBmr);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵproperty"]("ngIf", ctx.viewModel.isWaterIntake);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_39__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_39__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_39__.NgIf, _child_components_frequency_frequency_component__WEBPACK_IMPORTED_MODULE_11__.FrequencyComponent, _child_components_weight_weight_component__WEBPACK_IMPORTED_MODULE_12__.WeightComponent, _child_components_time_time_component__WEBPACK_IMPORTED_MODULE_13__.TimeComponent, _child_components_area_area_component__WEBPACK_IMPORTED_MODULE_14__.AreaComponent, _child_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_15__.SpeedComponent, _child_components_length_length_component__WEBPACK_IMPORTED_MODULE_16__.LengthComponent, _child_components_volume_volume_component__WEBPACK_IMPORTED_MODULE_17__.VolumeComponent, _child_components_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_18__.TemperatureComponent, _child_components_force_force_component__WEBPACK_IMPORTED_MODULE_19__.ForceComponent, _child_components_pressure_pressure_component__WEBPACK_IMPORTED_MODULE_20__.PressureComponent, _child_components_work_work_component__WEBPACK_IMPORTED_MODULE_21__.WorkComponent, _child_components_planeangle_planeangle_component__WEBPACK_IMPORTED_MODULE_22__.PlaneAngleComponent, _child_components_power_power_component__WEBPACK_IMPORTED_MODULE_23__.PowerComponent, _child_components_current_current_component__WEBPACK_IMPORTED_MODULE_24__.CurrentComponent, _child_components_cooking_cooking_component__WEBPACK_IMPORTED_MODULE_25__.CookingComponent, _child_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_26__.FuelComponent, _child_components_dob_dob_component__WEBPACK_IMPORTED_MODULE_27__.DobComponent, _child_components_storage_storage_component__WEBPACK_IMPORTED_MODULE_28__.StorageComponent, _child_components_timezone_timezone_component__WEBPACK_IMPORTED_MODULE_29__.TimezoneComponent, _child_components_simple_interest_simple_interest_component__WEBPACK_IMPORTED_MODULE_30__.SimpleInterestComponent, _child_components_compound_interest_compound_interest_component__WEBPACK_IMPORTED_MODULE_31__.CompoundInterestComponent, _child_components_discount_discount_component__WEBPACK_IMPORTED_MODULE_32__.DiscountComponent, _child_components_bmi_bmi_component__WEBPACK_IMPORTED_MODULE_33__.BmiComponent, _child_components_bmr_bmr_component__WEBPACK_IMPORTED_MODULE_34__.BmrComponent, _child_components_water_intake_water_intake_component__WEBPACK_IMPORTED_MODULE_35__.WaterIntakeComponent, _child_components_currency_currency_component__WEBPACK_IMPORTED_MODULE_36__.CurrencyComponent],
  styles: [".nav-link[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n\n.left-side[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  padding-left: 10px;\n}\n\n@media only screen and (max-width: 768px) {\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL2VuZC11c2VyL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQU9BO0VBQ0U7SUFDRSxlQUFBO0VBSkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uaW1nLWZsdWlkIHtcclxuICB3aWR0aDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGVmdC1zaWRlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLy8gLnNlbGVjdGVkLWl0ZW0ge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDE5NSwgMTk1KSAhaW1wb3J0YW50O1xyXG5cclxuLy8gICAvLyBib3JkZXItbGVmdDogNXB4IHNvbGlkIGJsYWNrO1xyXG4vLyB9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 147:
/*!******************************************************************!*\
  !*** ./src/app/components/main/end-user/health/health.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HealthModule: () => (/* binding */ HealthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _health_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-routing.module */ 1649);
/* harmony import */ var _health_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health.component */ 1483);
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ 3609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





class HealthModule {}
_class = HealthModule;
_class.ɵfac = function HealthModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _health_routing_module__WEBPACK_IMPORTED_MODULE_0__.HealthRoutingModule, src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HealthModule, {
    declarations: [_health_component__WEBPACK_IMPORTED_MODULE_1__.HealthComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _health_routing_module__WEBPACK_IMPORTED_MODULE_0__.HealthRoutingModule, src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_main_end-user_health_health_module_ts.js.map