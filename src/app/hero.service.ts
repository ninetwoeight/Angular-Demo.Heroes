import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    var heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');

    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((it) => it.id == id);
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    if (hero) {
      return of(hero);
    }
    return of({ id: 0, name: '' });
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    var heroes = HEROES.filter((it) => it.name.includes(term));
    if (heroes) {
      return of(heroes);
    }

    return of([]);
  }
}
