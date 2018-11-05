import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.scss']
})
export class WelcomeMessageComponent implements OnInit {
  greetingName: string = 'Dražen';
  colors: Array<string> = ['#000000', '#E27D60', '#85DCBA', '#E8A87C', '#3F51B5'];
  currentColorIndex: number = 0;
  currentColor: string;

  constructor() {
  }

  ngOnInit() {
    this.currentColor = this.colors[this.currentColorIndex];

    const source = interval(1000);

    source.subscribe((seconds) => {
      this.currentColorIndex = (seconds + 1) % this.colors.length;
      this.currentColor = this.colors[this.currentColorIndex];
    });
  }
}
