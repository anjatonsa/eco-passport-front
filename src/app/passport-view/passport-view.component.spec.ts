import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportViewComponent } from './passport-view.component';

describe('PassportViewComponent', () => {
  let component: PassportViewComponent;
  let fixture: ComponentFixture<PassportViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassportViewComponent]
    });
    fixture = TestBed.createComponent(PassportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
