import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredTableComponent } from './structured-table.component';

describe('StructuredTableComponent', () => {
  let component: StructuredTableComponent;
  let fixture: ComponentFixture<StructuredTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuredTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuredTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
