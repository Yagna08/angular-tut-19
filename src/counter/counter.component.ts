import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number = 0;
  colour: string = 'green';
  handleClick(val: number, event:MouseEvent) {
    if (val == 1) {
      this.count++;
    }
    else {
      this.count--;
    }
    console.log(event.type);
    if (this.count % 2 == 0) {
      this.colour='green';
    }
    else {
      this.colour='red';
    }
  }
  
}
