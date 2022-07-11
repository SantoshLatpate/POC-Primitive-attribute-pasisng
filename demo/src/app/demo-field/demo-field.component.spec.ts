import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFieldComponent } from './demo-field.component';

describe('DemoFieldComponent', () => {
  let component: DemoFieldComponent;
  let fixture: ComponentFixture<DemoFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
