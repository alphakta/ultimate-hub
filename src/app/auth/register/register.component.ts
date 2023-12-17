import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(formData: any): void {
    this.authService.register(formData).subscribe(response => {
      console.log('User registered!', response);
      // Rediriger l'utilisateur vers la page de login ou une autre page
      this.router.navigate(['/login']);
    }, error => {
      console.log('Registration failed', error);
    });
  }
}
