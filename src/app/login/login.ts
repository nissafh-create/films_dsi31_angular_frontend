import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styles: ``,
  templateUrl: './login.html',
})
export class Login {
  user: User = new User();
  error: number = 0;

  private authService = inject(AuthService);
  private router = inject(Router);

  onLoggedin(): void {
    console.log(this.user);
    const isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser) {
      this.router.navigate(['/']);
    } else {
      this.error = 1;
    }
  }
}

