import { Component, EventEmitter, Input ,Output} from '@angular/core';
import {Item} from '../../../models/item';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {

  @Input() items: Item[]=[];
 
  @Output() removeEvenEmmitter: EventEmitter<number> = new EventEmitter();

  onRemove(id:number){
    this.removeEvenEmmitter.emit(id);
  }

  

}
