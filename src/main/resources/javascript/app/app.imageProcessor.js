System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ImageProcessor;
    return {
        setters:[],
        execute: function() {
            ImageProcessor = (function () {
                function ImageProcessor(caman) {
                    var _this = this;
                    this.queue = [];
                    this.currentQueueItem = [];
                    this.caman = caman;
                    this.inProgress = false;
                    Caman.Event.listen('processStart', function (job) {
                        console.log('Starting Process: ' + job.name);
                    });
                    Caman.Event.listen('renderFinished', function (job) {
                        console.log('Completed Process: ' + JSON.stringify(job));
                        _this.startUpdateProcess();
                    });
                }
                ImageProcessor.prototype.addJobToQueue = function (updateJob) {
                    this.queue.push(updateJob);
                    if (!this.inProgress) {
                        this.startUpdateProcess();
                    }
                };
                ImageProcessor.prototype.startUpdateProcess = function () {
                    this.inProgress = true;
                    this.executeFilterProcess();
                };
                ImageProcessor.prototype.executeFilterProcess = function () {
                    if (this.queue.length > 0) {
                        this.caman.revert(false);
                        this.currentQueueItem = this.queue.shift();
                        for (var i in this.currentQueueItem) {
                            if (this.currentQueueItem[i] !== 0) {
                                this.caman[i].call(this.caman, this.currentQueueItem[i]);
                            }
                        }
                        this.caman.render();
                    }
                    else {
                        this.inProgress = false;
                    }
                };
                ImageProcessor.prototype.reset = function () {
                    this.caman.reset();
                };
                return ImageProcessor;
            }());
            exports_1("ImageProcessor", ImageProcessor);
        }
    }
});
//# sourceMappingURL=app.imageProcessor.js.map