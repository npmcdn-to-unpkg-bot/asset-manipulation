/**
 * Angular 2 directive that turn element to slider handle.
 * Created by Targus on 23.03.2016.
 * Last changed: 15.04.2016
 *
 * @version 1.0.4
 * @author Bogdan Shapoval (targus) <it.targus@gmail.com>
 */
import { Renderer, ElementRef, EventEmitter } from 'angular2/core';
export declare class BoundingRectClass {
    left: number;
    right: number;
    top: number;
    bottom: number;
}
export interface IEventSlideAble {
    type: string;
    boundingRect: ClientRect;
    relativePercentHorisontal: number;
    relativePercentVertical: number;
    elementId: string;
    instance: SlideAbleDirective;
}
export declare class EventSlideAble implements IEventSlideAble {
    type: string;
    instance: SlideAbleDirective;
    boundingRect: ClientRect;
    relativePercentHorisontal: number;
    relativePercentVertical: number;
    elementId: string;
    constructor(type: string, instance: SlideAbleDirective);
}
export declare class SlideAbleDirective {
    private el;
    private renderer;
    direction: string;
    boundElement: any;
    rightEdge: string;
    leftEdge: string;
    topEdge: string;
    bottomEdge: string;
    dynamicRightLimit: string;
    dynamicLeftLimit: string;
    dynamicTopLimit: string;
    dynamicBottomLimit: string;
    normalStyle: Object;
    slidingStyle: Object;
    step: any;
    parent: any;
    startSlidingEvent: EventEmitter<{}>;
    slidingEvent: EventEmitter<{}>;
    stopSlidingEvent: EventEmitter<{}>;
    initEvent: EventEmitter<{}>;
    boundingRect: BoundingRectClass;
    private dynamicLimitRect;
    private signatures;
    private dynamicLimits;
    constructor(el: ElementRef, renderer: Renderer);
    private zeroLeft;
    private zeroTop;
    checkXBeforeRedraw: any;
    checkYBeforeRedraw: any;
    private lastX;
    private lastY;
    private backupStyle;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    slideStart(e: any): void;
    /**
     * Move handle and change value in according to coordinate
     *
     * @param x
     * @param y
     * @returns {*}
     */
    redraw(x: any, y: any): void;
    slideStop(event: any): void;
    prepareEventData(type: any): IEventSlideAble;
    calcMargins(): void;
    calcDynamicLimits(): void;
    splitSignature(signature: string): any[];
    getMargin(el: any, side: string): any;
}
