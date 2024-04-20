import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationReminderComponent } from './medication-reminder.component';

describe('MedicationReminderComponent', () => {
  let component: MedicationReminderComponent;
  let fixture: ComponentFixture<MedicationReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationReminderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicationReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
