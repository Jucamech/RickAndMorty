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
    this.getData();
    this.charStatus(this.characters);
  }

  getData() {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => (this.characters = data['results']))
      .then((dead) => (this.charStatus(dead)));
  }

  charStatus(char: any) {
    for (var i = 0; i <= char.length; i++) {
      if (char[i]['status'] == 'Alive') {
        this.aliveChars += 1;
      } else  if (char[i]['status'] == 'Dead'){
        this.deadChars += 1;
      }
      this.totalChars = char.length
    }
  }

  modalImage(img: string, name: string) {
    Swal.fire({
      imageUrl: img,
      imageHeight: 400,
      imageAlt: 'Texto',
      text: name,
    });
  }
}
