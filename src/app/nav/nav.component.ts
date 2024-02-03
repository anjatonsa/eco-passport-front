import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {



  constructor(private router: Router, private store: Store<AppState>) { }
  
  cityStatistics() {
    this.router.navigate(['/city-statistics']);
  }

  searchPassports() {
    this.router.navigate(['/search']);
  }

  myPassports() {
    this.router.navigate(['/my-passports']);
  }

  goToProfile() {
    this.router.navigate(['/my-profile']);
  }

  signOut() {
    // this.store.dispatch(logout());
    // this.store.dispatch(emptySearch());

    this.router.navigate(['/sign-in']);
  }


}
