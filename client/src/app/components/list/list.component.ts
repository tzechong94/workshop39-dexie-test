import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/models';
import { CharacterService } from 'src/app/service/character.service';
import { db } from 'src/app/db';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters!: Character[];

  limit = 20
  offset = 0
  constructor(private charSvc: CharacterService, private router: Router) {}

  ngOnInit(): void {
    this.charSvc.getCharacters(this.charSvc.characterSearched, this.limit, this.offset)
      .then((response)=> {
        this.characters = response as Character[]
        db.characterList.clear()
        db.characterList.bulkAdd(this.characters)
      })
  }

  next() {
    this.offset += 20
    this.charSvc.getCharacters(this.charSvc.characterSearched, this.limit, this.offset)
      .then((response)=> {
        this.characters = response as Character[]
        db.characterList.bulkAdd(this.characters)
      })  

    }
  
  previous() {
    this.offset -= 20
    if (this.offset < 0) {
      this.offset = 20
    }
    this.charSvc.getCharacters(this.charSvc.characterSearched, this.limit, this.offset+20)
      .then((response)=> {
        this.characters = response as Character[]
        db.characterList.bulkAdd(this.characters)
      })  
    }
    
  viewCharacter(character: Character) {
    this.charSvc.selectedCharacter = character
    this.router.navigate(['character/'+character.id])
  }

  // async addNewList() {
  //   await db.characterList.bulkPut()
  // }
  

  
}
