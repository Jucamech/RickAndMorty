import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  characters: Array<string> = [];
  totalChars: number = 0;
  aliveChars: number = 0;
  deadChars: number = 0;
  searchField: string = '';
  constructor() {}

  ngOnInit(): void {
    this.getData()
    this.getData2()
    this.charStatus(this.characters);
  }

  getData(){
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => (this.characters = data['results']));
  }

  getData2(){
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => this.totalChars = data['results'].length);
  }

  charStatus(char: any){
    for(var i = 0;i<=char.length;i++){
      if(char[i]=="Alive"){
        this.aliveChars += 1
      } else {
        this.deadChars +=1
      }
    }
  }

  modalImage(img:string, name: string){
    Swal.fire({
      imageUrl: img,
      imageHeight: 500,
      imageAlt: 'Texto',
      text: name,
    });
  }
}
