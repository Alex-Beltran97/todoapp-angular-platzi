import { Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {LabsComponent} from "./page/labs/labs.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "labs", component: LabsComponent }
];

