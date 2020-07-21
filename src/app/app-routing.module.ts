import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/index.pages';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
