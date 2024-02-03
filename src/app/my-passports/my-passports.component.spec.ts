import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPassportsComponent } from './my-passports.component';

describe('MyPassportsComponent', () => {
  let component: MyPassportsComponent;
  let fixture: ComponentFixture<MyPassportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPassportsComponent]
    });
    fixture = TestBed.createComponent(MyPassportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
