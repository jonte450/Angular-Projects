import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-List';
  list_things = [];
  add_thing(value){
    this.list_things.push(value);
    console.log("Todo was added: "+value);
  }
  remove(thing){
    for(let check = 0; check < this.list_things.length;check++){
      if(thing == this.list_things[check]){
        this.list_things.splice(check,1);
      }
    }
     
  }
}
