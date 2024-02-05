import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditPassportComponent } from './add-and-edit-passport.component';

describe('AddAndEditPassportComponent', () => {
  let component: AddAndEditPassportComponent;
  let fixture: ComponentFixture<AddAndEditPassportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAndEditPassportComponent]
    });
    fixture = TestBed.createComponent(AddAndEditPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
