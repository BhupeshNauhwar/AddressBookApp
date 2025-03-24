import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AddAddressComponent } from './pages/add-address/add-address.component';

const routes: Routes = [
  { path: 'auth/register', component: RegisterComponent },
  { path: '', redirectTo: '/auth/register', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, 
  { path: 'addressbook/get', component: HomeComponent },
  { path: 'addressbook/add', component: AddAddressComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
