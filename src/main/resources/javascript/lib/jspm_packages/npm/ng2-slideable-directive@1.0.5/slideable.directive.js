/* */ 
"format cjs";
/**
 * Angular 2 directive that turn element to slider handle.
 * Created by Targus on 23.03.2016.
 * Last changed: 15.04.2016
 *
 * @version 1.0.4
 * @author Bogdan Shapoval (targus) <it.targus@gmail.com>
 */
System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var BoundingRectClass, EventSlideAble, SlideAbleDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BoundingRectClass = (function () {
                function BoundingRectClass() {
                }
                return BoundingRectClass;
            }());
            exports_1("BoundingRectClass", BoundingRectClass);
            EventSlideAble = (function () {
                function EventSlideAble(type, instance) {
                    this.type = type;
                    this.instance = instance;
                }
                return EventSlideAble;
            }());
            exports_1("EventSlideAble", EventSlideAble);
            SlideAbleDirective = (function () {
                function SlideAbleDirective(el, renderer) {
                    this.el = el;
                    this.renderer = renderer;
                    this.step = 1;
                    this.parent = null;
                    this.startSlidingEvent = new core_1.EventEmitter();
                    this.slidingEvent = new core_1.EventEmitter();
                    this.stopSlidingEvent = new core_1.EventEmitter();
                    this.initEvent = new core_1.EventEmitter();
                    this.signatures = {
                        top: '',
                        left: '',
                        bottom: '',
                        right: ''
                    };
                    this.dynamicLimits = {};
                    // Dummies for callback functions
                    this.checkXBeforeRedraw = null;
                    this.checkYBeforeRedraw = null;
                    this.lastX = null;
                    this.lastY = null;
                    console.log('SliadableDirective');
                }
                Object.defineProperty(SlideAbleDirective.prototype, "boundElement", {
                    set: function (elementId) {
                        this.signatures = {
                            top: elementId + ':top',
                            bottom: elementId + ':bottom',
                            left: elementId + ':left',
                            right: elementId + ':right'
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(SlideAbleDirective.prototype, "rightEdge", {
                    // Setting edges of slideable area
                    set: function (signature) {
                        this.signatures.right = signature;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SlideAbleDirective.prototype, "leftEdge", {
                    set: function (signature) {
                        this.signatures.left = signature;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SlideAbleDirective.prototype, "topEdge", {
                    set: function (signature) {
                        this.signatures.top = signature;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SlideAbleDirective.prototype, "bottomEdge", {
                    set: function (signature) {
                        this.signatures.bottom = signature;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SlideAbleDirective.prototype, "dynamicRightLimit", {
                    // Setting dynamic limits of sliding
                    set: function (signature) {
                        this.dynamicLimits.right = signature;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SlideAbleDirective.prototype, "dynamicLeftLimit", {
                    set: function (signature) {
                        this.dynamicLimits.left = signature;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SlideAbleDirective.prototype, "dynamicTopLimit", {
                    set: function (signature) {
                        this.dynamicLimits.top = signature;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SlideAbleDirective.prototype, "dynamicBottomLimit", {
                    set: function (signature) {
                        this.dynamicLimits.bottom = signature;
                    },
                    enumerable: true,
                    configurable: true
                });
                SlideAbleDirective.prototype.ngOnInit = function () {
                    this.dynamicLimitRect = this.dynamicLimitRect || new BoundingRectClass();
                    this.direction = this.direction || 'both';
                    if (!this.signatures.left)
                        this.signatures.left = 'parent:left';
                    if (!this.signatures.right)
                        this.signatures.right = 'parent:right';
                    if (!this.signatures.top)
                        this.signatures.top = 'parent:top';
                    if (!this.signatures.bottom)
                        this.signatures.bottom = 'parent:bottom';
                    this.initEvent.emit(new EventSlideAble('init', this));
                };
                SlideAbleDirective.prototype.ngAfterViewInit = function () {
                    // Set initial styles if needed
                    if (this.normalStyle) {
                        for (var idx in this.normalStyle) {
                            this.renderer.setElementStyle(this.el.nativeElement, idx, this.normalStyle[idx]);
                        }
                    }
                    // Store normal styles values
                    if (this.slidingStyle) {
                        this.backupStyle = {};
                        for (var idx in this.slidingStyle) {
                            var currentStyle = window.getComputedStyle(this.el.nativeElement).getPropertyValue(idx);
                            // Get property in other way in case of FireFox
                            if (!currentStyle)
                                currentStyle = this.el.nativeElement.style[idx];
                            this.backupStyle[idx] = currentStyle;
                        }
                    }
                };
                SlideAbleDirective.prototype.slideStart = function (e) {
                    // deny dragging and selecting
                    document.ondragstart = function () {
                        return false;
                    };
                    document.body.onselectstart = function () {
                        return false;
                    };
                    // Calculate dynamic limits every time when sliding was started
                    this.calcDynamicLimits();
                    function dragProcess(event) {
                        this.redraw(event.clientX, event.clientY);
                    }
                    document.onmousemove = dragProcess.bind(this);
                    document.onmouseup = this.slideStop.bind(this);
                    if (!this.lastX && this.direction == 'vartical') {
                        this.lastX = this.el.nativeElement.getBoundingClientRect().left - parseInt(getComputedStyle(this.el.nativeElement).left) + Math.round(this.el.nativeElement.getBoundingClientRect().width / 2);
                        if (isNaN(this.lastX))
                            this.lastX = Math.round(this.el.nativeElement.getBoundingClientRect().width / 2);
                    }
                    if (!this.lastY && this.direction == 'horisontal') {
                        this.lastY = this.el.nativeElement.getBoundingClientRect().top - parseInt(getComputedStyle(this.el.nativeElement).top) + Math.round(this.el.nativeElement.getBoundingClientRect().height / 2);
                        if (isNaN(this.lastY))
                            this.lastY = Math.round(this.el.nativeElement.getBoundingClientRect().height / 2);
                    }
                    // Change styles
                    if (this.slidingStyle) {
                        for (var idx in this.slidingStyle) {
                            this.renderer.setElementStyle(this.el.nativeElement, idx, this.slidingStyle[idx]);
                        }
                        if (this.lastX) {
                            this.el.nativeElement.style.left = this.lastX - this.zeroLeft - Math.round(this.el.nativeElement.getBoundingClientRect().width / 2) + 'px';
                        }
                        if (this.lastY) {
                            this.el.nativeElement.style.top = this.lastY - this.zeroTop - Math.round(this.el.nativeElement.getBoundingClientRect().height / 2) + 'px';
                        }
                    }
                    this.startSlidingEvent.emit(this.prepareEventData('start'));
                };
                /**
                 * Move handle and change value in according to coordinate
                 *
                 * @param x
                 * @param y
                 * @returns {*}
                 */
                SlideAbleDirective.prototype.redraw = function (x, y) {
                    // We can't calculate any values that depends from coordinates in ngOnInit, because may be not all page was rendered
                    // That's why we calculate these values here
                    if (!this.boundingRect) {
                        this.boundingRect = new BoundingRectClass();
                        this.calcMargins();
                    }
                    if (typeof (this.zeroLeft) === 'undefined') {
                        this.zeroLeft = this.el.nativeElement.getBoundingClientRect().left - parseInt(getComputedStyle(this.el.nativeElement).left);
                        if (isNaN(this.zeroLeft))
                            this.zeroLeft = 0;
                    }
                    if (typeof (this.zeroTop) === 'undefined') {
                        this.zeroTop = this.el.nativeElement.getBoundingClientRect().top - parseInt(getComputedStyle(this.el.nativeElement).top);
                        if (isNaN(this.zeroTop))
                            this.zeroTop = 0;
                    }
                    if (this.direction == 'horisontal' || this.direction == 'both') {
                        if (this.lastX) {
                            var k = (x - this.lastX) / this.step;
                            x = this.lastX + Math.round(k) * this.step;
                        }
                        if (x - this.boundingRect.left < -0.5) {
                            x = this.lastX + Math.ceil((this.boundingRect.left - this.lastX) / this.step) * this.step;
                        }
                        if (x - this.boundingRect.right > 0.5) {
                            x = this.lastX + Math.floor((this.boundingRect.right - this.lastX) / this.step) * this.step;
                        }
                        if (!!this.dynamicLimitRect.left && x < this.dynamicLimitRect.left)
                            x = this.dynamicLimitRect.left;
                        if (!!this.dynamicLimitRect.right && x > this.dynamicLimitRect.right)
                            x = this.dynamicLimitRect.right;
                        // Check callback result to make decigion change horisontal position or not
                        if ((typeof (this.checkXBeforeRedraw) !== 'function' || this.checkXBeforeRedraw(x, y)) && x != this.lastX) {
                            this.el.nativeElement.style.left = x - this.zeroLeft - Math.round(this.el.nativeElement.getBoundingClientRect().width / 2) + 'px';
                            this.lastX = x;
                        }
                    }
                    if (this.direction == 'vertical' || this.direction == 'both') {
                        if (this.lastY) {
                            var k = (y - this.lastY) / this.step;
                            y = this.lastY + Math.round(k) * this.step;
                        }
                        if (y - this.boundingRect.top < -0.5) {
                            y = this.lastY + Math.ceil((this.boundingRect.top - this.lastY) / this.step) * this.step;
                        }
                        if (y - this.boundingRect.bottom > 0.5) {
                            y = this.boundingRect.bottom;
                            y = this.lastY + Math.floor((this.boundingRect.bottom - this.lastY) / this.step) * this.step;
                        }
                        if (!!this.dynamicLimitRect.top && y < this.dynamicLimitRect.top)
                            y = this.dynamicLimitRect.top;
                        if (!!this.dynamicLimitRect.bottom && y > this.dynamicLimitRect.bottom)
                            y = this.dynamicLimitRect.bottom;
                        // Check callback result to make decigion change horisontal position or not
                        if ((typeof (this.checkYBeforeRedraw) !== 'function' || this.checkYBeforeRedraw(x, y)) && y != this.lastY) {
                            this.el.nativeElement.style.top = y - this.zeroTop - Math.round(this.el.nativeElement.getBoundingClientRect().height / 2) + 'px';
                            this.lastY = y;
                        }
                    }
                    this.slidingEvent.emit(this.prepareEventData('sliding'));
                };
                SlideAbleDirective.prototype.slideStop = function (event) {
                    this.stopSlidingEvent.emit(this.prepareEventData('stop'));
                    document.onmousemove = null;
                    document.onmouseup = null;
                    if (this.backupStyle) {
                        for (var idx in this.backupStyle) {
                            this.renderer.setElementStyle(this.el.nativeElement, idx, this.backupStyle[idx]);
                        }
                        this.el.nativeElement.style.left = this.lastX - this.zeroLeft - Math.round(this.el.nativeElement.getBoundingClientRect().width / 2) + 'px';
                        this.el.nativeElement.style.top = this.lastY - this.zeroTop - Math.round(this.el.nativeElement.getBoundingClientRect().height / 2) + 'px';
                    }
                };
                SlideAbleDirective.prototype.prepareEventData = function (type) {
                    var result = new EventSlideAble(type, this);
                    result['boundingRect'] = this.el.nativeElement.getBoundingClientRect();
                    result['relativePercentHorisontal'] = Math.round(100 * (result['boundingRect'].left + Math.round(result['boundingRect'].width / 2) - this.boundingRect.left) / (this.boundingRect.right - this.boundingRect.left));
                    result['relativePercentVertical'] = Math.round(100 * (result['boundingRect'].top + Math.round(result['boundingRect'].height / 2) - this.boundingRect.top) / (this.boundingRect.bottom - this.boundingRect.top));
                    result['elementId'] = this.el.nativeElement.id;
                    return result;
                };
                // Calculating all margins of common sliding area
                SlideAbleDirective.prototype.calcMargins = function () {
                    for (var idx in this.signatures) {
                        var el = void 0, side = void 0;
                        _a = this.splitSignature(this.signatures[idx]), el = _a[0], side = _a[1];
                        if (!side) {
                            if (idx == 'top' || idx == 'bottom')
                                side = 'center-y';
                            if (idx == 'left' || idx == 'right')
                                side = 'center-x';
                        }
                        var result = this.getMargin(el, side);
                        this.boundingRect[idx] = result;
                    }
                    var _a;
                };
                // Calculating dynamic sliding limits
                SlideAbleDirective.prototype.calcDynamicLimits = function () {
                    for (var idx in this.dynamicLimits) {
                        if (!this.dynamicLimits[idx])
                            continue;
                        var el = void 0, side = void 0;
                        _a = this.splitSignature(this.dynamicLimits[idx]), el = _a[0], side = _a[1];
                        if (!side) {
                            if (idx == 'top' || idx == 'bottom')
                                side = 'center-y';
                            if (idx == 'left' || idx == 'right')
                                side = 'center-x';
                        }
                        var result = this.getMargin(el, side);
                        this.dynamicLimitRect[idx] = result;
                    }
                    var _a;
                };
                // Extract from 'element:side' fromat element object and side
                // If element missed or not finded, get parent as element
                SlideAbleDirective.prototype.splitSignature = function (signature) {
                    var tmp = signature.split(':', 2);
                    var el, side;
                    side = tmp[1];
                    if (tmp[0] == '') {
                        el = this.el.nativeElement.parentElement;
                    }
                    else {
                        el = document.getElementById(tmp[0]);
                        if (!el)
                            el = this.el.nativeElement.parentElement;
                    }
                    el = el || null;
                    side = side || null;
                    return [el, side];
                };
                // Getting coordinate of certain side (or center) of DOM-element
                SlideAbleDirective.prototype.getMargin = function (el, side) {
                    var boundingRect = el.getBoundingClientRect();
                    var result;
                    side = side.toLowerCase();
                    switch (side) {
                        case 'left':
                        case 'right':
                        case 'top':
                        case 'bottom':
                            result = boundingRect[side];
                            break;
                        case 'center-x':
                            result = boundingRect.left + Math.round(boundingRect.width / 2);
                            break;
                        case 'center-y':
                            result = boundingRect.top + Math.round(boundingRect.height / 2);
                            break;
                        default:
                            result = null;
                    }
                    return result;
                };
                __decorate([
                    core_1.Input('slideDirection'), 
                    __metadata('design:type', String)
                ], SlideAbleDirective.prototype, "direction", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], SlideAbleDirective.prototype, "boundElement", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], SlideAbleDirective.prototype, "rightEdge", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], SlideAbleDirective.prototype, "leftEdge", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], SlideAbleDirective.prototype, "topEdge", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], SlideAbleDirective.prototype, "bottomEdge", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], SlideAbleDirective.prototype, "dynamicRightLimit", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], SlideAbleDirective.prototype, "dynamicLeftLimit", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], SlideAbleDirective.prototype, "dynamicTopLimit", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], SlideAbleDirective.prototype, "dynamicBottomLimit", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SlideAbleDirective.prototype, "normalStyle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SlideAbleDirective.prototype, "slidingStyle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SlideAbleDirective.prototype, "step", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SlideAbleDirective.prototype, "parent", void 0);
                __decorate([
                    core_1.Output('onStartSliding'), 
                    __metadata('design:type', Object)
                ], SlideAbleDirective.prototype, "startSlidingEvent", void 0);
                __decorate([
                    core_1.Output('onSliding'), 
                    __metadata('design:type', Object)
                ], SlideAbleDirective.prototype, "slidingEvent", void 0);
                __decorate([
                    core_1.Output('onStopSliding'), 
                    __metadata('design:type', Object)
                ], SlideAbleDirective.prototype, "stopSlidingEvent", void 0);
                __decorate([
                    core_1.Output('onInit'), 
                    __metadata('design:type', Object)
                ], SlideAbleDirective.prototype, "initEvent", void 0);
                SlideAbleDirective = __decorate([
                    core_1.Directive({
                        selector: '[slideAble]',
                        host: {
                            '(mousedown)': 'slideStart($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], SlideAbleDirective);
                return SlideAbleDirective;
            }());
            exports_1("SlideAbleDirective", SlideAbleDirective);
        }
    }
});
//# sourceMappingURL=slideable.directive.js.map