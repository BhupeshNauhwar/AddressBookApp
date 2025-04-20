import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    const token = this.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
      this.http.post(`${this.apiUrl}/logout`, {}, { 
        headers,
        responseType: 'text' as 'json' // 👈 Fixes the JSON parse error
      }).subscribe({
        next: () => {
          console.log('✅ Logged out on server');
          this.clearToken();
        },
        error: err => {
          console.error('❌ Logout failed:', err);
          this.clearToken();
        }
      });
    }
  }
  forgetPassword(email: string) {
    return this.http.post(`${this.apiUrl}/forget-password`, { email }, { responseType: 'text' });
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(
      `http://localhost:8080/auth/reset-password?token=${token}`,
      { newPassword },
      { responseType: 'text' }
    );
  }
  


  
  clearToken(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
