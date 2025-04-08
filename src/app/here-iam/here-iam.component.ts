import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-here-iam',
  imports: [],
  templateUrl: './here-iam.component.html',
  styleUrl: './here-iam.component.scss'
})
export class HereIamComponent {
  constructor(public languageService: LanguageService) { }

}
