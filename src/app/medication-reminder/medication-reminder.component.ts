import { NgIf,CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medication-reminder',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule,CommonModule],
  templateUrl: './medication-reminder.component.html',
  styleUrl: './medication-reminder.component.css'
})
export class MedicationReminderComponent {

medicationName: string='';
dosage: string='';
selectedSchedule:string='' ;
customSchedule:string='';
notificationMessage: string='';
startDate?:Date;
endDate?:Date;


preDefinedSchedules: string[] = ['Daily', 'Weekly', 'Monthly', 'Every 6 Hours', 'Every 8 Hours', 'Every 12 Hours'];

setMedicationSchedule(): void {
  // Logic to set the medication schedule*
  const formData = {
    medicationName: this.medicationName,
    dosage: this.dosage,
    selectedSchedule: this.selectedSchedule,
    customSchedule: this.customSchedule,
    startDate: this.startDate ? this.startDate.toDateString : undefined,
    endDate: this.endDate ? this.endDate.toDateString: undefined
  };

  // Convert formData to JSON string
  const formDataJson = JSON.stringify(formData);

  // Save formDataJson to local storage
  localStorage.setItem('medicationData', formDataJson);
  this.notificationMessage = `Medication schedule set for ${this.medicationName} with schedule equals to : ${this.selectedSchedule}`;
  // Additional logic for setting notifications
}
}


