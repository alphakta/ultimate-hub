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
      this.router.navigate(['/login']);
    }, error => {
      alert(error);
    });
  }
}
