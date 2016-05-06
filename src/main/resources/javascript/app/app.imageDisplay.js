System.register(['angular2/core', './app.imageService', "angular2/common", 'ng2-bootstrap', "./app.radioValueAccessor", "./app.imageSettings"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_imageService_1, common_1, ng2_bootstrap_1, app_radioValueAccessor_1, app_imageSettings_1;
    var ImageDisplay;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_imageService_1_1) {
                app_imageService_1 = app_imageService_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (app_radioValueAccessor_1_1) {
                app_radioValueAccessor_1 = app_radioValueAccessor_1_1;
            },
            function (app_imageSettings_1_1) {
                app_imageSettings_1 = app_imageSettings_1_1;
            }],
        execute: function() {
            ImageDisplay = (function () {
                function ImageDisplay(imageService) {
                    this.imageService = imageService;
                }
                ImageDisplay.prototype.ngOnInit = function () {
                    var that = this;
                    this.caman = Caman('#image1', function () {
                        that.cropSelection.x = this.imageWidth();
                        that.cropSelection.y = this.imageHeight();
                        that.resizeSelection.x = this.imageWidth();
                        that.resizeSelection.y = this.imageHeight();
                        this.render();
                    });
                    this.cropSelection = {
                        x: 0,
                        y: 0
                    };
                    this.resizeSelection = {
                        x: 0,
                        y: 0
                    };
                    this.channelSelection = {
                        r: 0,
                        g: 0,
                        b: 0
                    };
                    this.selectedProperty = "contrast";
                    this.imageSettings = new app_imageSettings_1.ImageSettings(this.caman);
                };
                ImageDisplay.prototype.updateProperty = function (action) {
                    if (action === '+') {
                        if (this.imageSettings[this.selectedProperty] < this.imageSettings.getMaxProperty(this.selectedProperty)) {
                            this.imageSettings[this.selectedProperty] += this.imageSettings.getIncrementor(this.selectedProperty);
                            this.adjustImage();
                            return;
                        }
                    }
                    else if (action === '-') {
                        if (this.imageSettings[this.selectedProperty] > this.imageSettings.getMinProperty(this.selectedProperty)) {
                            this.imageSettings[this.selectedProperty] -= this.imageSettings.getIncrementor(this.selectedProperty);
                            this.adjustImage();
                            return;
                        }
                    }
                };
                ImageDisplay.prototype.adjustImage = function () {
                    this.imageSettings.updateImage(this.caman);
                };
                ImageDisplay.prototype.cropImage = function () {
                    this.caman.crop(this.cropSelection.x, this.cropSelection.y);
                    this.caman.render();
                };
                ImageDisplay.prototype.resizeImage = function () {
                    this.caman.resize({
                        width: this.resizeSelection.x,
                        height: this.resizeSelection.y
                    });
                    this.caman.render();
                };
                ImageDisplay.prototype.applyChannelSettings = function () {
                    this.caman.revert(false);
                    this.caman.channels({
                        red: this.channelSelection.r,
                        green: this.channelSelection.g,
                        blue: this.channelSelection.b
                    }).render();
                };
                ImageDisplay = __decorate([
                    core_1.Component({
                        selector: 'image-display',
                        templateUrl: '/modules/asset-manipulation/javascript/app/imageDisplay.html',
                        providers: [app_imageService_1.ImageService],
                        directives: [
                            common_1.FORM_DIRECTIVES,
                            app_radioValueAccessor_1.RadioControlValueAccessor,
                            ng2_bootstrap_1.BUTTON_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [app_imageService_1.ImageService])
                ], ImageDisplay);
                return ImageDisplay;
            }());
            exports_1("ImageDisplay", ImageDisplay);
        }
    }
});
//# sourceMappingURL=app.imageDisplay.js.map