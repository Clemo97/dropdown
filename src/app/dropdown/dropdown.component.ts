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
    if (this.selectedCounty) {
      this.calculatePercentage(this.selectedCounty.president);
      this.calculatePercentage(this.selectedCounty.governor);
      this.calculatePercentage(this.selectedCounty.senate);
      this.calculatePercentage(this.selectedCounty.womenRepresentative);
    }
    this.countyControl.setValue(''); // Clear the input form
  }



  calculatePercentage(candidates: { candidate: string; party: string; votes: number; percentage?: number }[]) {
    const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);
    candidates.forEach(candidate => {
      candidate.percentage = (candidate.votes / totalVotes) * 100;
    });
  }
}
