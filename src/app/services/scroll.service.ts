import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  /**
   * Der Konstruktor des ScrollService, der den Angular Router verwendet
   * um zwischen Seiten zu navigieren.
   * @param router Der Router von Angular, um Seiten zu navigieren.
   */
  constructor(private router: Router) { }

  /**
   * Scrollt zur angegebenen Fragment-ID auf der Seite.
   * Verhindert das Neuladen der Seite und navigiert gegebenenfalls zur Hauptseite.
   * @param event Das Event, das die Navigation ausgelöst hat.
   * @param fragment Die ID des Fragments, zu dem gescrollt werden soll.
   */
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

  scrollToFragment2(event: Event, id: string) {
  event.preventDefault();

  // erster Scroll zu Element
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  // zweiter Scroll mit Delay zum Bottom
  setTimeout(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, 1500);
}

  /**
   * Scrollt zu einem spezifischen Element auf der Seite, das mit einer Fragment-ID identifiziert wird.
   * @param fragment Die ID des Fragments, zu dem gescrollt werden soll.
   */
  private scrollToElement(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /**
   * Beobachtet ein Element und führt eine Callback-Funktion aus, wenn das Element in den Viewport eintritt.
   * @param element Das zu beobachtende DOM-Element.
   * @param callback Die Callback-Funktion, die ausgeführt wird, wenn das Element sichtbar wird.
   * @param threshold Der Schwellenwert (zwischen 0 und 1), ab dem das Element als sichtbar gilt (default: 0.1).
   */
  observeElement(element: Element, callback: () => void, threshold = 0.1): void {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();        // → z. B. () => this.showTextAndButton = true
        observer.disconnect();
      }
    }, { threshold });
  
    observer.observe(element);
  }

  /**
   * Scrollt die Seite zum oberen Rand.
   * Verwendet eine sanfte Scrollbewegung.
   */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}