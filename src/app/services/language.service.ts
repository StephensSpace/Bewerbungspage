import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  /**
   * Speichert den aktuellen Sprachstatus als BehaviorSubject.
   * Der Wert ist `true`, wenn Deutsch aktiv ist, und `false` für Englisch.
   * Änderungen können über das Observable `isGerman$` abonniert werden.
   */
  private isGermanSubject = new BehaviorSubject<boolean>(false);

  /**
   * Öffentliches Observable, das den aktuellen Sprachstatus bereitstellt.
   * Komponenten können dieses Observable abonnieren, um auf Sprachänderungen zu reagieren.
   */
  public isGerman$ = this.isGermanSubject.asObservable();

  /**
   * Konstruktor des LanguageService.
   * Liest den Sprachstatus aus dem localStorage und setzt ihn.
   * Falls kein Wert vorhanden ist, wird standardmäßig Deutsch aktiviert.
   */
  constructor() {
    const savedLanguage = localStorage.getItem('isGerman');

    if (savedLanguage !== null) {
      this.isGermanSubject.next(JSON.parse(savedLanguage));
    } else {
      this.setLanguage(true); // Standard: Deutsch aktiv
    }
  }

  /**
   * Setzt die aktuelle Sprache und speichert sie im localStorage.
   * @param german - `true` für Deutsch, `false` für Englisch.
   */
  setLanguage(german: boolean) {
    this.isGermanSubject.next(german);
    localStorage.setItem('isGerman', JSON.stringify(german));
  }
}
