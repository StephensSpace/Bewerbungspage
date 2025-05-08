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
import { slideInOutMenu } from '../../animations/slideInOut';


@Component({
  selector: 'app-header',
  imports: [RouterModule, NgClass, CommonModule, NgIf, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations:[slideInOutMenu]
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
