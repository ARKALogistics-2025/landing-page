import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'arka-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  submitted = signal(false);

  services = [
    'Employee Transportation',
    'Freight Transportation',
    'Last-Mile Delivery',
    'Warehousing & Fulfilment',
    'Dedicated Fleet',
    'Temperature-Controlled Transportation',
    'Airport & Corporate Transfers',
    'Other',
  ];

  private fb = new FormBuilder();

  form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]{7,15}$/)]],
    serviceRequired: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // NOTE: Wire this up to your backend/email service (e.g. Formspree, Firebase, or a custom API).
    console.log('ARKA enquiry submitted:', this.form.getRawValue());
    this.submitted.set(true);
    this.form.reset();
  }
}
