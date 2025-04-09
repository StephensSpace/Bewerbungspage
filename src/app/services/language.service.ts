import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // <-- korrekt!

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private isGermanSubject = new BehaviorSubject<boolean>(false);
  public isGerman$ = this.isGermanSubject.asObservable();

  setLanguage(german: boolean) {
    this.isGermanSubject.next(german);
    console.log(this.isGermanSubject.getValue())
  }
}