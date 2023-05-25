import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropDownComponent implements OnInit {
  
  heroControl = new FormControl();
  heroes: Hero[] = HEROES;
  filteredHeroes: Hero[] = [];
  selectedHero: Hero | undefined;

  ngOnInit() {
    this.filteredHeroes = this.heroes;
    this.heroControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterHeroes(value))
    ).subscribe(filtered => {
      this.filteredHeroes = filtered;
    });
  }

  filterHeroes(value: string): Hero[] {
    const filterValue = value.toLowerCase();
    return this.heroes.filter(hero => hero.name.toLowerCase().includes(filterValue));
  }

  onHeroSelection(heroName: string) {
    this.selectedHero = this.heroes.find(hero => hero.name === heroName);
  }
}
