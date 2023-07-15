import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDComponent } from './customer-d.component';

describe('CustomerDComponent', () => {
  let component: CustomerDComponent;
  let fixture: ComponentFixture<CustomerDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
