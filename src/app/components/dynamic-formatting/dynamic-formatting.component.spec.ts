import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormattingComponent } from './dynamic-formatting.component';

describe('DynamicFormattingComponent', () => {
  let component: DynamicFormattingComponent;
  let fixture: ComponentFixture<DynamicFormattingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormattingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicFormattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
