import { Component,effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
interface todoData{
  task: string,
  completed: boolean,
  text_decoration: string
}
@Component({
  selector: 'app-todolist',
  imports: [FormsModule,NgClass],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})

export class TodolistComponent {
  todo: string = "";
  todo_list: todoData[] = []; 



  addTodo() {
    if (this.todo.length === 0) 
      return;
    this.todo_list.push({ task: this.todo, completed: false, text_decoration: "none" });
    this.todo = '';
  }

  handleCheck(index: number) {
    this.todo_list[index].completed = !this.todo_list[index].completed;
    if (this.todo_list[index].completed) {
      this.todo_list[index].text_decoration = "line-through";
    } else {
      this.todo_list[index].text_decoration = "none";
    }
    this.todo_list.sort((b, a) => Number(b.completed) - Number(a.completed));

  }

  handleDelete(index:number) {
    this.todo_list.splice(index,1);
  }

}
