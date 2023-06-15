import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSmokedComponent } from '../src/app/total-smoked/total-smoked.component';

describe('TotalSmokedComponent', () => {
  let component: TotalSmokedComponent;
  let fixture: ComponentFixture<TotalSmokedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalSmokedComponent]
    });
    fixture = TestBed.createComponent(TotalSmokedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
