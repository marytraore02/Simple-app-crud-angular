import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmloyeeComponent } from './update-emloyee.component';

describe('UpdateEmloyeeComponent', () => {
  let component: UpdateEmloyeeComponent;
  let fixture: ComponentFixture<UpdateEmloyeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEmloyeeComponent]
    });
    fixture = TestBed.createComponent(UpdateEmloyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
