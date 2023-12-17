import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(user => {
      if (user.length) {
        console.log('Login successful!', user);
        this.router.navigate(['/players']);
        // Vous pouvez ici rediriger l'utilisateur ou stocker ses informations
      } else {
        console.log('Login failed!');
      }
    });
  }
}
