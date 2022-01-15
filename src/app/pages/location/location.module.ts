import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { LocationListComponent } from './components/location-list/location-list.component';
import { LocationCardComponent } from './components/location-list/location-card/location-card.component';


@NgModule({
  declarations: [
    LocationComponent,
    LocationListComponent,
    LocationCardComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
