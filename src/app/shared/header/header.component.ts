import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { texts } from '../../languageData/languageTexts';


@Component({
  selector: 'app-header',
  imports: [RouterModule, NgClass, CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public texts = texts;

  constructor(public languageService: LanguageService) {}

  scrollToFragment(event: Event, fragment: string) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    const element = document.getElementById(fragment); // Holt das Element mit der ID des Fragments
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Scrollt sanft zu dem Element
    }
  }
}
