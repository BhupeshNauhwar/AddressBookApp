import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AddressBookService } from '../../services/address-book.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addresses: any[] = [];  

  constructor(
    private addressBookService: AddressBookService,
    private router: Router,
    private authService:AuthService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.fetchAddresses();
  }

  fetchAddresses(): void {
    this.addressBookService.getAllAddresses().subscribe({
      next: (response) => {
        console.log("✅ Addresses fetched:", response);
        this.addresses = response;
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('❌ Error fetching addresses:', err);
      }
    });
  }
  deleteAddress(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this address?');
    if (!confirmDelete) return;
  
    this.addressBookService.deleteAddress(id).subscribe({
      next: () => {
        console.log('🗑️ Address deleted successfully');
        this.fetchAddresses(); 
      },
      error: (err) => {
        console.error('❌ Error deleting address:', err);
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['auth/login']);
  }
}

