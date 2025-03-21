import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGraphicComponent } from './dashboard-graphic.component';

describe('DashboardGraphicComponent', () => {
  let component: DashboardGraphicComponent;
  let fixture: ComponentFixture<DashboardGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardGraphicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
