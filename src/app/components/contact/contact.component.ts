import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [NgIf, FormsModule]
})
export class ContactComponent {
  form: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitted = false;

  submitForm(): void {
    if (!this.form.name || !this.form.email || !this.form.message) {
      alert('Merci de remplir tous les champs.');
      return;
    }

    this.isSubmitting = true;

    // Simulation d’envoi (tu pourras brancher un vrai backend / email service ici)
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitted = true;
      console.log('Contact form data:', this.form);
      this.form = { name: '', email: '', message: '' };
    }, 800);
  }
}
