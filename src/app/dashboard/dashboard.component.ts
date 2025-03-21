import { Component, Input } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';
import { DashboardGraphicComponent } from '../dashboard-graphic/dashboard-graphic.component';
import { DashboardTodoComponent } from '../dashboard-todo/dashboard-todo.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardItemComponent, DashboardGraphicComponent, DashboardTodoComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
      @Input({required: true}) currentStatus!:string;
      @Input({required:true}) dummyTrafficData!: { id: string; value: number }[];
      @Input({required:true}) maxTraffic!: number;
}
