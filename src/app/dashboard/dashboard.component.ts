import { Component, Input } from '@angular/core';
import {DashboardWrapperComponent} from './dashboard-wrapper/dashboard-wrapper.component';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { DashboardGraphicComponent } from './dashboard-graphic/dashboard-graphic.component';
import { TicketsComponent } from './tickets/tickets.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardItemComponent, DashboardGraphicComponent, TicketsComponent, DashboardWrapperComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
      @Input({required: true}) currentStatus!:string;
      @Input({required:true}) dummyTrafficData!: { id: string; value: number }[];
      @Input({required:true}) maxTraffic!: number;
}
