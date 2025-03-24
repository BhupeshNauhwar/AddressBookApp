import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addresses: any[] = [];  

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   
    const token = localStorage.getItem('token');

    
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      this.http.get('http://localhost:8080/addressbook/get', { headers })
        .subscribe({
          next: (response) => {
            
            this.addresses = response as any[];   
          },
          error: (err) => {
            console.error('Error fetching addresses:', err);
          }
        });
    } else {
      console.error('No token found');
    }
  }
}
