import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface PullRequest {
  repo: string;
  merged: number;
  open: number;
}

@Component({
  selector: 'app-contribution-activity',
  imports:[CommonModule],
  templateUrl: './contribution-activity.component.html',
  styleUrls: ['./contribution-activity.component.scss']
})
export class ContributionActivityComponent {
  month = 'October 2025';
  commitsCount = 56;
  commitsRepos = 11;
  pullRequestsCount = 29;
  pullRequestsReposCount = 5;

  pullRequests: PullRequest[] = [
    { repo: 'UptimeAI/uptime_webapp', merged: 16, open: 1 },
    { repo: 'UptimeAI/uptime_ml', merged: 6, open: 0 },
    { repo: 'UptimeAI/uptime_scripts', merged: 4, open: 0 },
    { repo: 'UptimeAI/uptime_engine', merged: 1, open: 0 },
    { repo: 'UptimeAI/uptime_ml_encrypted', merged: 1, open: 0 }
  ];
}
