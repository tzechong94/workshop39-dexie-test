import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Character } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  characterSearched!: string;
  selectedCharacter!: Character

  constructor(private http: HttpClient) { }

  getCharacters(character: string, limit: number, offset:number){
    const params = new HttpParams()
      .set("character", character)
      .set("limit", limit)
      .set("offset", offset)

    return firstValueFrom(
      this.http.get('/api/characters', { params })
    )
  }

}
