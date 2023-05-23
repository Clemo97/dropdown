import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],

})
export class DropdownComponent {
  data: Hero[] = HEROES;
  selectedName: any = null;
  selectedData: Hero | null = null;

  constructor() { }

  onDropdownChange(): void {
    const selectedId = parseInt(this.selectedName, 10);
    this.selectedData = this.data.find(item => item.id === selectedId) || null;
  }


}
