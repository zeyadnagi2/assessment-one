import { Component } from '@angular/core';

@Component({
  selector: 'app-porfolio',
  imports: [],
  templateUrl: './porfolio.html',
  styleUrl: './porfolio.css',
})
export class Porfolio {
  image: string[] = [
    './images/image1.png',
    './images/image2.png',
    './images/image3.png',
    './images/image1.png',
    './images/image2.png',
    './images/image3.png',
  ];

}
