import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { County, ELECTIONS } from '../mock-elections';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  countyControl = new FormControl();
  counties: County[] = ELECTIONS;
  filteredCounties!: Observable<County[]>;
  selectedCounty: County | undefined;

  ngOnInit() {
    this.filteredCounties = this.countyControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterCounties(value))
    );
  }

  filterCounties(value: string): County[] {
    const filterValue = value.toLowerCase();
    return this.counties.filter(county => county.name.toLowerCase().includes(filterValue));
  }

  onCountySelection(countyName: string) {
    this.selectedCounty = this.counties.find(county => county.name === countyName);
    this.countyControl.setValue(''); // Clear the input form
  }

}
