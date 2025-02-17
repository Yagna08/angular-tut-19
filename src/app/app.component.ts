import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from '../counter/counter.component';
import { ElseifComponent } from '../elseif/elseif.component';
import { SignalComponent } from '../signal/signal.component';
import { TodolistComponent } from '../todolist/todolist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CounterComponent,ElseifComponent,SignalComponent,TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tut-19';
}
