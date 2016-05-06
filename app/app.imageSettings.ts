import {ImageProcessor} from "./app.imageProcessor";

export class ImageSettings {
  private imageProcessor: ImageProcessor;

  saturation: number = 0;
  contrast  : number = 0;
  brightness: number = 0;
  exposure  : number = 0;
  sepia     : number = 0;
  noise     : number = 0;
  sharpen   : number = 0;
  vibrance  : number = 0;
  gamma     : number = 0;

  SATURATION_MIN: number = -100;
  SATURATION_MAX: number = 100;
  CONTRAST_MIN: number = -100;
  CONTRAST_MAX: number = 100;
  BRIGHTNESS_MIN: number = -100;
  BRIGHTNESS_MAX: number = 100;
  EXPOSURE_MIN: number = -100;
  EXPOSURE_MAX: number = 100;
  VIBRANCE_MIN: number = -100;
  VIBRANCE_MAX: number = 100;

  SEPIA_MIN: number = 0;
  SEPIA_MAX: number = 100;
  NOISE_MIN: number = 0;
  NOISE_MAX: number = 100;
  SHARPEN_MIN: number = 0;
  SHARPEN_MAX: number = 100;

  GAMMA_MIN: number = 0;
  GAMMA_MAX: number = 10;

  processInProgress: boolean = false;

  constructor(caman: Object) {
    this.imageProcessor = new ImageProcessor(caman);
  }

  getProperties(): Object {
    return {
      "saturation": this.saturation,
      "contrast"  : this.contrast,
      "brightness": this.brightness,
      "exposure"  : this.exposure,
      "sepia"     : this.sepia,
      "noise"     : this.noise,
      "sharpen"   : this.sharpen,
      "vibrance"  : this.vibrance,
      "gamma"     : this.gamma
    }
  }

  getMinProperty(property: string): number {
      return this[property.toUpperCase()+ "_MIN"];
  }

  getMaxProperty(property: string): number {
    return this[property.toUpperCase()+ "_MAX"];
  }

  getIncrementor(property: string): number {
    switch (property) {
        case 'saturation':
        case 'brightness':
        case 'contrast'  :
        case 'exposure'  :
        case 'vibrance'  :
          return 10;
        case 'sepia'  :
        case 'noise'  :
        case 'sharpen':
          return 5;
        case 'gamma':
          return 0.1;
        default:
          return 0;
      }
    }

    updateImage(): void {
      var properties = {};
      for (var i in this.getProperties()) {
        properties[i] = this[i];
      }
      this.imageProcessor.addJobToQueue(properties)
    }

    resetImage(caman: Object) {
        for (var i in this.getProperties()) {
          this[i] = 0;
        }
        this.imageProcessor.reset();
    }
}
