import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class MenuStateService {
    private menuOpenSubject = new BehaviorSubject<boolean>(false);
  
    // Exponiert das Observable für die Verwendung im Template
    menuOpen = this.menuOpenSubject.asObservable();
  
    // Zum Umkehren des Zustands
    toggleMenu() {
      this.menuOpenSubject.next(!this.menuOpenSubject.value);
    }
  }