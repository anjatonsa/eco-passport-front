import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { createAvatar } from '@dicebear/avatars';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy{

  profileToDisplay: any;
  isViewProfile: boolean = false;
  amSubscribed: boolean = false;
  @Input()
  isMe: boolean = false;
  imsrc:string="../../assets/profile.jpg";

  avatar: any;
  svg: SafeResourceUrl = '';

  constructor(
    private userService: UserService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this.store.select(selectUserData).subscribe((data) => {
    //   this.profileToDisplay = data;
    // });
    this.profileToDisplay = {name: "John Doe", email: "minaaa", password:"passw", phoneNumber:"123456",surname:"prezime"}
  }
  ngOnDestroy(): void {
  }

  // ...

  

  deleteProfile() {
  //  this.store.dispatch(deleteUser({ email: this.profileToDisplay.email }));
   this.router.navigateByUrl('/sign-in');
  }

}
