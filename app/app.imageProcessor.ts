export class ImageProcessor {
  queue = [];
  currentQueueItem = [];
  inProgress: boolean;
  caman: Object;

  constructor(caman: Object) {
    this.caman = caman;
    this.inProgress = false;
    Caman.Event.listen('processStart', function(job) {
      console.log('Starting Process: ' + job.name);
    });

    Caman.Event.listen('renderFinished', (job) => {
      console.log('Completed Process: ' + JSON.stringify(job));
      this.startUpdateProcess();
    });
  }
  addJobToQueue(updateJob) {
        this.queue.push(updateJob);
        if (!this.inProgress) {
          this.startUpdateProcess();
        }
  }

  startUpdateProcess() {
      this.inProgress = true;
      this.executeFilterProcess();
  }

  executeFilterProcess() {
    if (this.queue.length > 0) {
      this.caman.revert(false);
      this.currentQueueItem = this.queue.shift();
      for (var i in this.currentQueueItem) {
        if (this.currentQueueItem[i] !== 0) {
          this.caman[i].call(this.caman, this.currentQueueItem[i]);
        }
      }
      this.caman.render();
    } else {
        this.inProgress = false;
    }
  }

  reset() {
      this.caman.reset();
  }
}
