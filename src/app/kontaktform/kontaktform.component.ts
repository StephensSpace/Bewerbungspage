import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-kontaktform',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './kontaktform.component.html',
  styleUrl: './kontaktform.component.scss'
})
export class KontaktformComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  sendMail() {
    this.submitted = true;
    if (this.contactForm.valid) {
      const mailtoLink = `mailto:stephenschaz90@gmail.com?subject=Kontaktanfrage&body=${encodeURIComponent(this.contactForm.value.message)}`;
      window.location.href = mailtoLink;
    }
  }
}
