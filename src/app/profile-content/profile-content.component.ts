import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ContributionGraphComponent } from '../contribution-graph/contribution-graph.component';
import { ContributionActivityComponent } from '../contribution-activity/contribution-activity.component';

@Component({
  selector: 'app-profile-content',
  imports: [CommonModule, ContributionGraphComponent, ContributionActivityComponent],
  templateUrl: './profile-content.component.html',
  styleUrl: './profile-content.component.scss'
})
export class ProfileContentComponent implements OnInit {
userRepoData: any;
  constructor(private userDetails:UsersService){}
ngOnInit(): void {
  this.userRepoData = this.userDetails.getUsersReposDetails().subscribe(res => {
    this.userRepoData = res;
  });
}
}
