import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-wrapper.component.html',
  styleUrl: './dashboard-wrapper.component.css'
})
export class DashboardWrapperComponent {
     @Input({required: true}) image!:{src:string, alt:string};
     @Input({required: true}) title!:string;
}
