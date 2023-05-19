import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Поиск дешёвых авиабилетов';
  image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Aviasales_logo_horizontal.png/799px-Aviasales_logo_horizontal.png?20201103081114';
  searchText = '';
  fromFocused = false;
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman',
  ];
  fromItemClick(){
    let myContainer = document.getElementById('from') as HTMLInputElement;
    myContainer.value = "pressed";
  }
}
