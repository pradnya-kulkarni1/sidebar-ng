import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  left_nav_list_item:Array<{title:string,icon:any}>=[
    {
      title:'books',
      icon: document
    },
    {
      title:'Users',
      icon:document
    },
    {
      title:'test1',
      icon:document
    }
  ]

  showLeftNav:boolean=true;

  showAndHideLeftNav(){
    this.showLeftNav=!this.showLeftNav;
  }

}
