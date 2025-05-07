import { Component } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ScrollService } from '../../services/scroll.service';
import { MenuStateService } from '../../services/menuState.service';
import { NgClass, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { texts } from '../../languageData/languageTexts';
import { MenuComponent } from '../../menu/menu.component';
import { Observable } from 'rxjs';
import {trigger, transition, style, animate} from '@angular/animations';


@Component({
  selector: 'app-header',
  imports: [RouterModule, NgClass, CommonModule, NgIf, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ]
})
export class HeaderComponent {
  public texts = texts;
  menuOpen$: Observable<boolean>;


  constructor(public languageService: LanguageService,
    public scrollService: ScrollService,
    public menuState: MenuStateService
  ) {
    this.menuOpen$ = this.menuState.menuOpen;
  }




  toggleMenu() {
    document.body.style.overflow = 'hidden';
    this.menuState.toggleMenu();  // Menü umschalten
  }

}
