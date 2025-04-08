import { NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {  FormsModule, NgForm,  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-kontaktform',
  imports: [NgIf, FormsModule, NgClass, RouterModule],
  templateUrl: './kontaktform.component.html',
  styleUrl: './kontaktform.component.scss'
})
export class KontaktformComponent {
  constructor(public languageService: LanguageService) {}  

  http = inject(HttpClient)

  submitted = false;
  contactData: { name: string; email: string; message: string; privacyPolicy: boolean } = {
    name: "",
    email: "",
    message: "",
    privacyPolicy: false
  };

  mailTest = true;

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
      console.log(ngForm, "des gooot scho")
      ngForm.resetForm();
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}

 
