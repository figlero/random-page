import { Component } from '@angular/core';
import {CommonService} from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'randompage';
  zIndex = 0;
  backgroundColor;
  randomElements: Array<any> = [];

  constructor(private commonService: CommonService) {
    this.backgroundColor = this.commonService.getRandomColor2();
  }

  startRandom() {
    setInterval( () => {
      this.randomElements.push(this.commonService.getRandomCssClass());
    }, 10);
  }
}
