// forgot-password.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// Importez votre service d'authentification si nécessaire

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    // Implémentez la logique d'envoi du lien de réinitialisation
    console.log('Reset link sent to:', this.email);
    this.router.navigate(['/404']);
    // Redirection ou message de confirmation
  }
}
