import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  password: string = '';
  token: string = '';
  isSubmitting: boolean = false;

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'] || '';
    });
  }

  submit(): void {
    if (this.password) {
      this.isSubmitting = true;  // Disable the button during request
      this.authService.resetPassword(this.token, this.password).subscribe({
        next: () => {
          alert('✅ Password reset successful!');
        },
        error: () => {
          alert('❌ Password reset failed.');
        },
        complete: () => {
          this.isSubmitting = false;  // Re-enable button after request completes
        }
      });
    }
  }
}
