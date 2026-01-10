import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProfileSidebarComponent } from '../profile-sidebar/profile-sidebar.component';
import { ProfileContentComponent } from '../profile-content/profile-content.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  imports: [CommonModule, HeaderComponent, FooterComponent, ProfileSidebarComponent, ProfileContentComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
