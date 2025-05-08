import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class ScrollService {
  constructor(private router: Router) { }
  scrollToFragment(event: Event, fragment: string) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    const currentUrl = window.location.pathname;

    // Wenn nicht auf der Hauptseite, navigiere zurück ohne die Seite neu zu laden
    if (currentUrl !== '/') {
      // Navigiere zur Hauptseite, ohne die Seite neu zu laden
      this.router.navigate(['/']).then(() => {
        // Warte bis die Navigation abgeschlossen ist und scrolle dann zum Fragment
        this.scrollToElement(fragment);
      });
    } else {
      this.scrollToElement(fragment);
    }
  }
  private scrollToElement(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  observeElement(element: Element, callback: () => void, threshold = 0.1): void {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();        // → z. B. () => this.showTextAndButton = true
        observer.disconnect();
      }
    }, { threshold });
  
    observer.observe(element);
  }
  
}