import { Component } from '@angular/core';

@Component({
  selector: 'app-elseif',
  imports: [],
  templateUrl: './elseif.component.html',
  styleUrl: './elseif.component.css'
})
export class ElseifComponent {
  color = 'red';

  red() {
    this.color = 'red';
  }
  green() {
    this.color = 'green';
  }
  gold() {
    this.color = 'gold';
  }
  others() {
    this.color = 'black';
  }
  type(event:Event) {
    let val = parseInt((event.target as HTMLInputElement).value);
    if (val == 1) {
      this.color = "red";
    }
    else if (val == 2) {
      this.color = "gold";
    }
    else if (val == 3) {
      this.color = "green";
    }
    else {
      this.color = "black";
    }
  }

}
