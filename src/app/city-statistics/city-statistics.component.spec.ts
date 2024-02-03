import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityStatisticsComponent } from './city-statistics.component';

describe('CityStatisticsComponent', () => {
  let component: CityStatisticsComponent;
  let fixture: ComponentFixture<CityStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityStatisticsComponent]
    });
    fixture = TestBed.createComponent(CityStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
