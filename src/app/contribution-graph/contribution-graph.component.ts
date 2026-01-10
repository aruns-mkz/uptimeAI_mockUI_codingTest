import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarHeatmapComponent } from '../calendar-heatmap/calendar-heatmap.component';

@Component({
  selector: 'app-contribution-graph',
  imports: [CommonModule, CalendarHeatmapComponent],
  templateUrl: './contribution-graph.component.html',
  styleUrl: './contribution-graph.component.scss'
})
export class ContributionGraphComponent {
}
