import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressBookService } from '../../services/address-book.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private addressService: AddressBookService) { 
    this.addressForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.addressForm.valid) {
      console.log('Submitting Form ✅', this.addressForm.value);

      this.addressService.addAddress(this.addressForm.value).subscribe(
        response => {
          console.log('Response from server:', response);
          alert('Address saved successfully!');
          this.addressForm.reset(); // ✅ Reset form after success
        },
        (error: HttpErrorResponse) => {
          console.error('Error saving address:', error);
          alert('Failed to save address. Please try again.');
        }
      );
    }
  }
}
