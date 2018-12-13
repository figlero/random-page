import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getRandomColor2() {
    let length = 6;
    const chars = '0123456789ABCDEF';
    let hex = '#';
    while (length--) { hex += chars[(Math.random() * 16) | 0]; }
    return hex;
  }

  getRandom(multiply) {
    return (Math.random() * multiply).toFixed(2);
  }

  getRandomPixel() {
    return (Math.random() * 30).toFixed()+'px';
  }

  getRandomCssClass() {
    const cssClass = {
      'background-color': this.getRandomColor2(),
      'width': this.getRandom(100)+'%',
      'height': this.getRandom(100)+'%',
      'position': 'absolute',
      'top': this.getRandom(100)+'%',
      'left': this.getRandom(100)+'%',
      'border-radius': this.getRandom(50)+'%',
      'border': this.getRandomPixel()+' solid '+this.getRandomColor2()
    };
    return cssClass;
  }
}
