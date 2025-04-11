import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { texts } from '../../languageData/languageTexts';



@Component({
  selector: 'app-header',
  imports: [RouterModule, NgClass, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public texts = texts;

  constructor(public languageService: LanguageService,
    private router: Router
  ) { }

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

// Hilfsmethode zum Scrollen zum Element
private scrollToElement(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
}
