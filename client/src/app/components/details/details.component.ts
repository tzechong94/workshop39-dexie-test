import { Component, OnInit } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from 'src/app/db';
import { Character } from 'src/app/models';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  character!: Character
  character$: any
  constructor(private charSvc: CharacterService) {}

  ngOnInit(): void {
      this.character = this.charSvc.selectedCharacter
      this.character$ = liveQuery(
        ()=>this.selectedChar()
      )
  }


  async selectedChar() {
    return await db.characterList
      .where({
        id: this.character.id
      }).toArray()
  }

}
