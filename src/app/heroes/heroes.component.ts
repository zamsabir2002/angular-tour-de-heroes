import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    HeroDetailComponent
    // NgFor
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  
  selectedHero?: Hero;
  heroes: Hero[] = []
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }

  constructor(private heroService:HeroService){}

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  
}
