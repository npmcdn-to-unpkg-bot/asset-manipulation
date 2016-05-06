System.register(["./app.imageProcessor"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_imageProcessor_1;
    var ImageSettings;
    return {
        setters:[
            function (app_imageProcessor_1_1) {
                app_imageProcessor_1 = app_imageProcessor_1_1;
            }],
        execute: function() {
            ImageSettings = (function () {
                function ImageSettings(caman) {
                    this.saturation = 0;
                    this.contrast = 0;
                    this.brightness = 0;
                    this.exposure = 0;
                    this.sepia = 0;
                    this.noise = 0;
                    this.sharpen = 0;
                    this.vibrance = 0;
                    this.gamma = 0;
                    this.SATURATION_MIN = -100;
                    this.SATURATION_MAX = 100;
                    this.CONTRAST_MIN = -100;
                    this.CONTRAST_MAX = 100;
                    this.BRIGHTNESS_MIN = -100;
                    this.BRIGHTNESS_MAX = 100;
                    this.EXPOSURE_MIN = -100;
                    this.EXPOSURE_MAX = 100;
                    this.VIBRANCE_MIN = -100;
                    this.VIBRANCE_MAX = 100;
                    this.SEPIA_MIN = 0;
                    this.SEPIA_MAX = 100;
                    this.NOISE_MIN = 0;
                    this.NOISE_MAX = 100;
                    this.SHARPEN_MIN = 0;
                    this.SHARPEN_MAX = 100;
                    this.GAMMA_MIN = 0;
                    this.GAMMA_MAX = 10;
                    this.processInProgress = false;
                    this.imageProcessor = new app_imageProcessor_1.ImageProcessor(caman);
                }
                ImageSettings.prototype.getProperties = function () {
                    return {
                        "saturation": this.saturation,
                        "contrast": this.contrast,
                        "brightness": this.brightness,
                        "exposure": this.exposure,
                        "sepia": this.sepia,
                        "noise": this.noise,
                        "sharpen": this.sharpen,
                        "vibrance": this.vibrance,
                        "gamma": this.gamma
                    };
                };
                ImageSettings.prototype.getMinProperty = function (property) {
                    return this[property.toUpperCase() + "_MIN"];
                };
                ImageSettings.prototype.getMaxProperty = function (property) {
                    return this[property.toUpperCase() + "_MAX"];
                };
                ImageSettings.prototype.getIncrementor = function (property) {
                    switch (property) {
                        case 'saturation':
                        case 'brightness':
                        case 'contrast':
                        case 'exposure':
                        case 'vibrance':
                            return 10;
                        case 'sepia':
                        case 'noise':
                        case 'sharpen':
                            return 5;
                        case 'gamma':
                            return 0.1;
                        default:
                            return 0;
                    }
                };
                ImageSettings.prototype.updateImage = function () {
                    var properties = {};
                    for (var i in this.getProperties()) {
                        properties[i] = this[i];
                    }
                    this.imageProcessor.addJobToQueue(properties);
                };
                ImageSettings.prototype.resetImage = function (caman) {
                    for (var i in this.getProperties()) {
                        this[i] = 0;
                    }
                    this.imageProcessor.reset();
                };
                return ImageSettings;
            }());
            exports_1("ImageSettings", ImageSettings);
        }
    }
});
//# sourceMappingURL=app.imageSettings.js.map