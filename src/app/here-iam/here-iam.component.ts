import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { texts } from '../languageData/languageTexts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-here-iam',
  imports: [CommonModule],
  templateUrl: './here-iam.component.html',
  styleUrl: './here-iam.component.scss'
})
export class HereIamComponent {
  public texts = texts;
  constructor(public languageService: LanguageService) { }

}
