import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public charcterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  // @Output()
  // public onDeleteId: EventEmitter<number> = new EventEmitter();


  // onDeleteCharacter(index: number):void{
  //   this.onDeleteId.emit(index);
  // }

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();


  // onDeleteCharacter(id?: string):void{
    // if(!id) return;
  onDeleteCharacter(id: string):void{
    this.onDeleteId.emit(id);
  }


}
