import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MedicationReminderComponent } from "./medication-reminder/medication-reminder.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MedicationReminderComponent]
})
export class AppComponent {
  title = 'challenge27';
}
