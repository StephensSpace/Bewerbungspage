import { NgClass, NgIf, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../services/scroll.service';
import { LanguageService } from '../services/language.service';
import { texts } from '../languageData/languageTexts';
import { slideInOutRight, slideInOutLeft } from '../animations/slideInOut';

@Component({
  selector: 'app-kontaktform',
  imports: [NgIf, FormsModule, NgClass, RouterModule, CommonModule],
  templateUrl: './kontaktform.component.html',
  styleUrls: ['./kontaktform.component.scss', 'kontaktform.component.querrys.scss'],
  animations: [slideInOutRight, slideInOutLeft]
})
/**
 * Kontaktformular-Komponente.
 * Ermöglicht Benutzern das Absenden einer Nachricht über ein Formular.
 * Inklusive Spracheinstellungen, Scroll-Trigger, HTTP-POST an externes Backend.
 */
export class KontaktformComponent implements AfterViewInit {

  /** Sichtbarkeit für die Animation des Headers */
  showLeftHeader: boolean = false;

  /** Sprachabhängige Textinhalte */
  public texts = texts;

  /** Initialisierung von Sprach- und Scrollservice */
  constructor(public languageService: LanguageService, public scrollService: ScrollService) {}

  /** Referenz zum sichtbarkeitsabhängigen Ankerpunkt für die Scroll-Animation */
  @ViewChild('observerAnchor5', { static: true }) anchor!: ElementRef;

  /** Beobachtet das Element beim Scrollen und löst Animation aus */
  ngAfterViewInit(): void {
    if (this.anchor?.nativeElement) {
      this.scrollService.observeElement(this.anchor.nativeElement, () => {
        document.body.style.overflowX = 'hidden';
        this.showLeftHeader = true;
        setTimeout(() => {
          document.body.style.overflowX = 'auto';
        }, 3600);
      });
    }
  }

  /** HttpClient für Mailversand */
  http = inject(HttpClient);

  /** Flag zur Anzeige, ob das Formular gesendet wurde */
  submitted = false;

  /** Formular-Datenstruktur */
  contactData: {
    name: string;
    email: string;
    message: string;
    privacyPolicy: boolean;
  } = {
    name: "",
    email: "",
    message: "",
    privacyPolicy: false
  };

  /** Testmodus – verhindert echtes Senden */
  mailTest = true;

  /** POST-Konfiguration für Mailversand */
  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Sendet die Formulardaten via HTTP-Post oder simuliert dies im Testmodus.
   * @param ngForm - Referenz auf das Formular
   */
  sendMail(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(ngForm, "des gooot scho");
      ngForm.resetForm();
    }
  }
}