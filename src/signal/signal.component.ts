import { Component, signal, effect, computed } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  x = signal(10);
  y = signal(20);

  count = computed(()=>this.x() + this.y());
  
  
}
