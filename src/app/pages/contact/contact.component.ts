import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { RevealDirective } from '../../services/reveal.directive';

@Component({
  selector: 'arka-contact',
  standalone: true,
  imports: [ContactFormComponent, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
