import Dexie, { Table } from 'dexie';
import { Character } from './models';

export class AppDB extends Dexie {
    characterList!: Table<Character, number>

    constructor(){
        super('ngdexieliveQuery')
        this.version(1).stores({
            characterList: "id"
        })
    }

    // async populate(characters: Character[]) {

    //     for (let c of characters) {
    //         await db.characterList.add({
    //             name: c.name,
    //             id: c.id,
    //             description: c.description,
    //             thumbnail: c.thumbnail,
    //             comments: []
    //         })
    //     }
    // }
}

export const db = new AppDB();
