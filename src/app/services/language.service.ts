import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // <-- korrekt!

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  /**
   * BehaviorSubject, das den aktuellen Zustand der Sprache verwaltet (Deutsch oder nicht)
   * @private
   */
  private isGermanSubject = new BehaviorSubject<boolean>(false);

  /**
   * Observable, das den aktuellen Sprachzustand (Deutsch oder nicht) bereitstellt
   */
  public isGerman$ = this.isGermanSubject.asObservable();

  /**
   * Setzt die Sprache auf Deutsch oder Englisch und gibt den neuen Zustand weiter
   * @param german Boolean-Wert, der angibt, ob Deutsch aktiviert werden soll (true für Deutsch, false für Englisch)
   */
  setLanguage(german: boolean) {
    this.isGermanSubject.next(german);
  }
}