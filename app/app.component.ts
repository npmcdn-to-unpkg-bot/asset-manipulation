import {Component, Injectable, OnInit} from 'angular2/core';
import {ImageDisplay} from 'app/app.imageDisplay';

@Component({
    selector: 'my-app',
    template: `<h1 style='text-align:center'>Asset Manipulation Module</h1>
              <br/>
              <image-display></image-display>`,
    directives: [ImageDisplay]
})

@Injectable()
export class AppComponent{

}
