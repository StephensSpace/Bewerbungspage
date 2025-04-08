import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';


@Component({
  selector: 'app-header',
  imports: [RouterModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public languageService: LanguageService) {}

  scrollToFragment(event: Event, fragment: string) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    const element = document.getElementById(fragment); // Holt das Element mit der ID des Fragments
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Scrollt sanft zu dem Element
    }
  }
}
