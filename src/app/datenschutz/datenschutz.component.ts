import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-datenschutz',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './datenschutz.component.html',
  styleUrl: './datenschutz.component.scss'
})
export class DatenschutzComponent {
  constructor(public languageService: LanguageService) { }
}
