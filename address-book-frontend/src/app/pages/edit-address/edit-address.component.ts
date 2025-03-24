import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBookService } from '../../services/address-book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {
  editAddressForm!: FormGroup;
  addressId: number | null = null;
  isSubmitting: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private addressBookService: AddressBookService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.addressId = Number(params.get('id')); 
      if (this.addressId) {
        this.loadAddressDetails();
      }
    });

    this.editAddressForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  loadAddressDetails(): void {
    if (this.addressId) {
      this.addressBookService.getAddressById(this.addressId).subscribe({
        next: (response) => {
          this.editAddressForm.patchValue(response);
        },
        error: (error) => {
          console.error("Error loading address details:", error);
        }
      });
    }
  }

  updateAddress(): void {
    if (this.editAddressForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.addressBookService.updateAddress(this.addressId!, this.editAddressForm.value).subscribe({
      next: () => {
        
        this.router.navigate(['/addressbook/get']);
      },
      error: (error) => {
        console.error("Error updating address:", error);
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}
