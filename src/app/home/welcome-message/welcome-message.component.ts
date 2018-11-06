import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, interval } from 'rxjs';
import { publish } from 'rxjs/operators';

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

    const colorChangeObservable = interval(1000)
      .pipe(
        publish()
      ) as ConnectableObservable<number>;

    colorChangeObservable.subscribe((seconds: number) => {
      this.currentColorIndex = (seconds + 1) % this.colors.length;
      this.currentColor = this.colors[this.currentColorIndex];
    });

    colorChangeObservable.connect();
  }
}
