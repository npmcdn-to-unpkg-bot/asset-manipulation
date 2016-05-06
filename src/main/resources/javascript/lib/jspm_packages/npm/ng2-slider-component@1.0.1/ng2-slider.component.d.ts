import { ElementRef, ChangeDetectorRef, EventEmitter } from 'angular2/core';
import { IEventSlideAble } from 'ng2-slideable-directive/slideable.directive';
export declare enum RangeHandle {
    Start = 0,
    End = 1,
    Both = 2,
}
export declare class Ng2SliderComponent {
    private CDR;
    private _elementRef;
    min: any;
    max: any;
    startValue: any;
    endValue: any;
    stepValue: any;
    value: string;
    normalHandlerStyle: Object;
    slidingHandlerStyle: Object;
    rangeRibbonStyle: Object;
    rangeChangedEvent: EventEmitter<{}>;
    ribbon: ElementRef;
    startRef: ElementRef;
    endRef: ElementRef;
    startInputRef: ElementRef;
    endInputRef: ElementRef;
    private range;
    private id;
    private isRange;
    private handlers;
    private initialStartValue;
    private initialEndValue;
    private initNormalHandlerStyle;
    private initSlidingHandlerStyle;
    private initRangeRibbonStyle;
    private resultNormalHandlerStyle;
    private resultSlidingHandlerStyle;
    private resultRangeRibbonStyle;
    instance: Ng2SliderComponent;
    private stepX;
    constructor(CDR: ChangeDetectorRef, _elementRef: ElementRef);
    ngOnInit(): void;
    refreshInputBox(boundingRect: any, handle: RangeHandle): any;
    /**
     * Set new handle position when value was changed in input-box
     * @param handle
     */
    valueChanged(el: any, handle?: RangeHandle): void;
    ngAfterViewInit(): void;
    rangeChangedTrigger(): void;
    setStartValue(v: any): void;
    setEndValue(v: any): void;
    onStopSliding(event: IEventSlideAble): void;
    onSliding(event: IEventSlideAble): void;
    initHandlers(name: string, event: IEventSlideAble): void;
}
export declare class Range {
    private config;
    private boundingRect;
    constructor(config: {
        element: any;
        min: any;
        max: any;
    });
    /**
     * Calculate relative handle position (percent) from value
     *
     * @param value
     * @returns {float}
     */
    calculatePercentFromValue(value: number): number;
    calculateXFromValue(value: number): number;
    calculatePercentFromX(x: number): number;
    calculateValueFromX(x: number): any;
    calculateStepX(step: any): number;
    getLeftX(): number;
    getRightX(): number;
}
