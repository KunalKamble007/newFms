import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';

const routes: Routes = [
  {path: 'scheduledFlight/add', component:AddScheduledFlightComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  AddScheduledFlightComponent
]