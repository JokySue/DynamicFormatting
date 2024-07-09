import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicFormattingComponent } from "./components/dynamic-formatting/dynamic-formatting.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormattingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DynamicFormatting';
}
