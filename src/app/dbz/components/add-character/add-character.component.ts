import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  //la emision de la info del nombre y el power, se instancia el objeto onNewCharacter
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = { //se define este objeto
    name: '',
    power: 0
  };

  emitCharacter ():void {

    //Valida que el nombre no venga sin nada
    if ( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0}

  }


}
