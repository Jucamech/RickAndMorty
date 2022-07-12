import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  characters: any;
  totalChars: number = 0;
  aliveChars: number = 0;
  deadChars: number = 0;
  constructor() {}

  ngOnInit(): void {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => (this.characters = data['results']))
      .then(() => console.log(this.characters));
    this.charStatus();
  }

  charStatus(){
    for(var i = 0;i<=this.characters.lenght;i++){
      if(this.characters[i]=="Alive"){
        this.aliveChars += 1
      } else {
        this.deadChars +=1
      }
    }
  }
}
