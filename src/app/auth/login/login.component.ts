import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(user => {
      if (user.length) {
        console.log('Login successful!', user);
        // Vous pouvez ici rediriger l'utilisateur ou stocker ses informations
      } else {
        console.log('Login failed!');
      }
    });
  }
}
