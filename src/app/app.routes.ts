import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { HairComponent } from './hair';
import { LashesComponent } from './lashes';
import { ManicureComponent } from './manicure';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hair', component: HairComponent },
  { path: 'lashes', component: LashesComponent },
  { path: 'manicure', component: ManicureComponent },
  { path: '**', redirectTo: '' }
];