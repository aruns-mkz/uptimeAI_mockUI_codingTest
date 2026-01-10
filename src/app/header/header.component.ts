import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TabsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  title = 'GitHub Profile';
  
  constructor(private users: UsersService){}
    profileData: any;
    ngOnInit(): void {
  
      this.users.getUsersProfile().subscribe(res => {
  this.profileData = res
  
  console.log(this.profileData)
      })
    }
}
