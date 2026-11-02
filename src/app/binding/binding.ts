import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-binding',
  styles: ``,
  templateUrl: './binding.html',
})
export class Binding {

  title : string = "demo of data binding"

  status : boolean = false

  name : string = "Nissaf Hassad"

  changeTitle(){
    this.title = "new title"
  }
}
