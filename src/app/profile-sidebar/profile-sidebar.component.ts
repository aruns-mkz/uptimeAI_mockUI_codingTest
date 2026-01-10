import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-sidebar',
  imports: [CommonModule],
  templateUrl: './profile-sidebar.component.html',
  styleUrl: './profile-sidebar.component.scss'
})
export class ProfileSidebarComponent implements OnInit {
  constructor(private users: UsersService){}
  profileData: any;
  ngOnInit(): void {
  this.users.getUsersProfile().subscribe(res => {
  this.profileData = res
      })
  }

}
