import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilling',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character): void{
    //se utiliza la propiedad ...character para llamar todas las caracteristicas name y power del character

    const newCharacter: Character = {id: uuid(), ...character };

    this.characters.push(newCharacter);
  }


  //se recibe la posicion index del nombre
  //  onDeleteCharacter( index:number ) {
  //  this.characters.splice(index, 1);


  deletedCharacterById( id:string ) {
    this.characters = this.characters.filter( character => character.id !== id);
  }


}
