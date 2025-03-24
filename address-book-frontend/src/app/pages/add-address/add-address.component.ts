import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent {
  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.addressForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z\\s]{3,50}$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addressForm.invalid) {
      alert("Please fill all fields correctly.");
      return;
    }

    this.http.post('http://localhost:8080/addressbook/add', this.addressForm.value).subscribe({
      next: () => {
        alert('Address Book Entry Added Successfully!');
        this.router.navigate(['/addressbook/get']); 
      },
      error: (error) => {
        alert('Failed to add entry. Please try again.');
        console.error('Error:', error);
      }
    });
  }
}
