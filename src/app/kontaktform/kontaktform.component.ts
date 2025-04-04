import { NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-kontaktform',
  imports: [NgIf, FormsModule, NgClass],
  templateUrl: './kontaktform.component.html',
  styleUrl: './kontaktform.component.scss'
})
export class KontaktformComponent {

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

 
