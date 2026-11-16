import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-login',
  styles: ``,
  templateUrl: './login.html',
})
export class Login {
  user: User = new User();
  err: number = 0;
  message: string = "Incorrect username or password..";

  private authService = inject(AuthService);
  private router = inject(Router);

  onLoggedin(): void {
    this.authService.login(this.user).subscribe({
      next: (data) => {
        let jwToken = data.headers.get('Authorization')!;
        this.authService.saveToken(jwToken);
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        this.err = 1;
        if (err.error?.errorCause === 'disabled') {
          this.message = "User is disabled, please contact your administrator";
        }
      }
    });
  }
}

