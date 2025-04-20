import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: string = '';

  constructor(private authService: AuthService) {}

  submit(): void {
    this.authService.forgetPassword(this.email).subscribe({
      next: () => alert('Reset link sent to your email!'),
     
    });
  }
}
