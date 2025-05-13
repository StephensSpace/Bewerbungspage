import { NgClass, NgIf, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../services/scroll.service';
import { LanguageService } from '../services/language.service';
import { texts } from '../languageData/languageTexts';
import { slideInOutRight, slideInOutLeft } from '../animations/slideInOut';
import { ChangeDetectorRef } from '@angular/core';

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

  showToast: boolean = false;

  /** Sprachabhängige Textinhalte */
  public texts = texts;

  /** Initialisierung von Sprach- und Scrollservice */
  constructor(public languageService: LanguageService, public scrollService: ScrollService,
    private cdr: ChangeDetectorRef) { }

  /** Referenz zum sichtbarkeitsabhängigen Ankerpunkt für die Scroll-Animation */
  @ViewChild('observerAnchor5', { static: true }) anchor!: ElementRef;

  /** Beobachtet das Element beim Scrollen und löst Animation aus */
  ngAfterViewInit(): void {
    if (this.anchor?.nativeElement) {
      this.scrollService.observeElement(this.anchor.nativeElement, () => {
        this.tryStartAnimation();
      });
    }
  }

  private tryStartAnimation(): void {
    // Falls schon blockiert → versuche es später nochmal
    if (document.body.style.overflowX === 'hidden') {
      setTimeout(() => this.tryStartAnimation(), 250);
      return;
    }
    document.body.style.overflowX = 'hidden';
    this.showLeftHeader = true;
    setTimeout(() => {
      document.body.style.overflowX = 'auto';
    }, 2000);
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
  mailTest = false;

  /** POST-Konfiguration für Mailversand */
  post = {
    endPoint: 'https://frontendschaz.de/sendMail.php',
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
            // Formular zurücksetzen
            ngForm.resetForm();

            // Toast anzeigen
            this.showToastMessage();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  showToastMessage() {
    this.showToast = true;
    console.log(this.showToast)
    this.cdr.detectChanges(); // <-- Das triggert die View-Aktualisierung sofort

    setTimeout(() => {
      this.showToast = false;
      this.cdr.detectChanges(); // Auch hier wieder, falls nötig
    }, 3000);
  }
}