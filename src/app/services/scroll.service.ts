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
    event.preventDefault();

    const currentUrl = window.location.pathname;

    const doScroll = () => {
      this.scrollToElement(fragment);

      // Nach 500ms nochmal scrollen, um eventuelle Verschiebungen durch Animationen auszugleichen
      setTimeout(() => {
        this.scrollToElement(fragment+"Anchor");
      }, 500);
    };

    if (currentUrl !== '/') {
      this.router.navigate(['/']).then(() => {
        doScroll();
      });
    } else {
      doScroll();
    }
  }

  scrollToElement(fragment: string) {
    const element = document.getElementById(fragment);
    if (!element) return;

    const yOffset = -80; // Beispiel für festen Offset (z.B. Header-Höhe)
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }


  scrollToFragment2(event: Event, id: string) {
    event.preventDefault();

    // erster Scroll zu Element
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    // zweiter Scroll mit Delay zum Bottom
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  }

  scrollToFragment2Mobile(event: Event, id: string) {
    event.preventDefault();

    // erster Scroll zu Element
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    // zweiter Scroll mit Delay zum Bottom
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 1000);
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
    const isStartseite = this.router.url === '/' || this.router.url.startsWith('/#');

    if (isStartseite) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigateByUrl('/').then(() => {
        // Etwas warten, bis DOM neu gerendert ist
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50); // ggf. auf 100ms erhöhen bei Bedarf
      });
    }
  }
}