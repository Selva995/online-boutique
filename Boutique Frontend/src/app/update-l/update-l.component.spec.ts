import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLComponent } from './update-l.component';

describe('UpdateLComponent', () => {
  let component: UpdateLComponent;
  let fixture: ComponentFixture<UpdateLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
