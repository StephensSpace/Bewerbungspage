import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuStateService {
  /**
   * BehaviorSubject, das den aktuellen Zustand des Menüs verwaltet (offen oder geschlossen)
   * @private
   */
  private menuOpenSubject = new BehaviorSubject<boolean>(false);

  /**
   * Observable, das den aktuellen Zustand des Menüs bereitstellt.
   * Wird im Template verwendet, um den Menüstatus zu überwachen.
   */
  menuOpen = this.menuOpenSubject.asObservable();

  /**
   * Wechselt den Zustand des Menüs (öffnet oder schließt es)
   * Die Methode kehrt den aktuellen Zustand des Menüs um.
   */
  toggleMenu() {
    this.menuOpenSubject.next(!this.menuOpenSubject.value);
  }
}