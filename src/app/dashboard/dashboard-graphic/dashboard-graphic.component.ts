import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-graphic',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-graphic.component.html',
  styleUrl: './dashboard-graphic.component.css'
})
export class DashboardGraphicComponent {
    @Input({required:true}) dummyTrafficData!: { id: string; value: number }[];
    @Input({required:true}) maxTraffic!: number;
}
