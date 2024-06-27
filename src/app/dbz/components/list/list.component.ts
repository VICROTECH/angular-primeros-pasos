import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

//emite el numero de ID

  @Output()
  //public onDelete = new EventEmitter<number>(); es lo mismo que el de abajo
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {

    //si no existe el id =  !id entonces no hace nada.
    if (!id) return;
    this.onDelete.emit( id );

  }

}
