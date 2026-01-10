import { CommonModule } from '@angular/common';
import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild
} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-calendar-heatmap',
  imports:[CommonModule],
  templateUrl: './calendar-heatmap.component.html',
  styleUrls: ['./calendar-heatmap.component.scss']
})
export class CalendarHeatmapComponent
  implements  AfterViewInit, OnDestroy {

  @ViewChild('chart', { static: true }) chartEl!: ElementRef;

  chart!: echarts.ECharts;
  years: number[] = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
  currentYear = '2025';

  ngAfterViewInit(): void {
    this.chart = echarts.init(this.chartEl.nativeElement);
    this.renderChart(this.currentYear);
    window.addEventListener('resize', this.resize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resize);
    this.chart.dispose();
  }

  resize = () => {
    this.chart.resize();
  };

  changeYear(year: string) {
    this.currentYear = year;
    this.renderChart(year);
  }

  renderChart(year: string) {
    const option: echarts.EChartsOption = {
      tooltip: {
        position: 'top',
        formatter: (p: any) => {
          const date = echarts.time.format(
            p.data[0],
            '{yyyy}-{MM}-{dd}',
            false
          );
          return `${date}: ${p.data[1]}`;
        }
      },
      visualMap: {
  min: 0,
  max: 1000,
  calculable: true,
  // orient: window.innerWidth < 768 ? 'horizontal' : 'vertical',
  orient:'horizontal',
  right: window.innerWidth < 768 ? 10 : 20,
  bottom: window.innerWidth < 768 ? 10 : 150,
  inRange: {
    color: [
      '#ebedf0',
      '#c6f6d5',
      '#9ae6b4',
      '#38a169',
      '#22543d'
    ]
  }
},
      calendar: {
        range: year,
        orient: 'horizontal',
        cellSize: window.innerWidth < 768 ? [8, 8] : [12, 12],
        top:100,
        width:'auto',
        dayLabel: {
          margin: 4
        }
      },
      series: [
        {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: this.getVirtualData(year)
        }
      ]
    };

    this.chart.setOption(option, true);
  }

  // ✅ Your original logic preserved
  getVirtualData(year: string) {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data: [string, number][] = [];

    for (let time = date; time < end; time += dayTime) {
      data.push([
        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
        Math.floor(Math.random() * 1000)
      ]);
    }
    return data;
  }
}
