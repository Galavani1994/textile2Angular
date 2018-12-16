import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSaleComponent } from './management-sale.component';

describe('ManagementSaleComponent', () => {
  let component: ManagementSaleComponent;
  let fixture: ComponentFixture<ManagementSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
