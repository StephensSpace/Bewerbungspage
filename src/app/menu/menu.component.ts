import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { MenuStateService } from '../services/menuState.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(public languageService: LanguageService,
     public scrollService: ScrollService,
     public menuState: MenuStateService
    ) { }

    closeMenu() {
      
    }

}
