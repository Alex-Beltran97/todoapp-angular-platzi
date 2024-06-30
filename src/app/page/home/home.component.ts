import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = "My day";
  tasks = signal([
    "Create a project",
    "Create components",
    "Create routes"
  ]);
}
